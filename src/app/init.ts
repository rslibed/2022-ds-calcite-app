// Calcite components
import { applyPolyfills } from "@esri/calcite-components/dist/loader";
import {
  defineCustomElements,
  setAssetPath
} from "@esri/calcite-components/dist/custom-elements";

// 4.x ArcGIS API for JavaScript
import esriConfig from "@arcgis/core/config";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

// Application config
import applicationJSON from "../config/application.json";

// Main app styles
import "../styles/index.scss";

class App {
  init(): void {
    this.initCalciteComponents();
    this.configurePortalUrl();
    this.initMap();
  }

  // Initialize calcite components
  async initCalciteComponents(): Promise<void> {
    await applyPolyfills();
    setAssetPath(location.href);
    defineCustomElements();
  }

  // Set ArcGIS portal URL
  configurePortalUrl(): void {
    const { portalUrl } = applicationJSON;
    esriConfig.portalUrl = portalUrl;
  }

  // Initialize Web Map and Map View
  initMap(): void {
    const { webmap } = applicationJSON;
    const map = new WebMap({
      portalItem: {
        id: webmap
      }
    });

    const searchParams = new URL(window.location.href).searchParams as any;

    const { center, zoom } = this.getExtentConfig(searchParams);

    const view = new MapView({
      container: "viewDiv",
      map,
      center,
      zoom
    });

    if (!zoom) {
      view.scale = 70000000;
    }

    this.handleSelectedFeature(view, searchParams);
  }

  getExtentConfig(searchParams) {
    const center = searchParams.get("center")
      ? searchParams
          .get("center")
          .split(";")
          .map(val => parseFloat(val))
      : null;
    const zoom = (
      searchParams.get("level") ? parseInt(searchParams.get("level")) : null
    ) as number;

    return {
      center,
      zoom
    };
  }

  handleSelectedFeature(view, searchParams) {
    const iaSocialShare = document.querySelector(
      "instant-apps-social-share"
    ) as HTMLInstantAppsSocialShareElement;
    iaSocialShare.view = view;

    const selectedFeature = searchParams.get("selectedFeature")
      ? searchParams.get("selectedFeature").split(";")
      : null;
    const selectedFeatureLayerId = selectedFeature ? selectedFeature[0] : null;
    const selectedFeatureOID = selectedFeature
      ? parseInt(selectedFeature[1])
      : null;

    view.map.loadAll().then(loadedMap => {
      if (selectedFeature) {
        const selectedLayer = loadedMap.allLayers.find(
          layer => selectedFeatureLayerId === layer.id
        ) as __esri.FeatureLayer;
        const query = selectedLayer.createQuery();
        query.objectIds = [selectedFeatureOID as number];
        selectedLayer.queryFeatures(query).then(featureRes => {
          const feature = featureRes.features[0];
          view.goTo(feature).then(() => {
            view.popup.open({
              features: [feature]
            });
          });
        });
      }
    });
  }
}

new App().init();
