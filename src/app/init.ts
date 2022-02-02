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
    const view = new MapView({
      container: "viewDiv",
      map
    });
    view.scale = 70000000;
  }
}

new App().init();
