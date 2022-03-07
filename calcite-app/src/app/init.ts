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
    this.setupModalEventListener();
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

  // Calcite Modal set up
  setupModalEventListener() {
    const modal = document.querySelector(
      "calcite-modal"
    ) as HTMLCalciteModalElement;

    const launchBtn = document.getElementById(
      "launchBtn"
    ) as HTMLCalciteButtonElement;
    const confirmBtn = document.getElementById(
      "confirmBtn"
    ) as HTMLCalciteButtonElement;
    const cancelBtn = document.getElementById(
      "cancelBtn"
    ) as HTMLCalciteButtonElement;

    launchBtn.onclick = () => this.openModal(modal);
    confirmBtn.onclick = () => this.closeModal(modal);
    cancelBtn.onclick = () => this.closeModal(modal);
  }

  openModal(modal: HTMLCalciteModalElement): void {
    modal?.setAttribute("active", "");
  }

  closeModal(modal: HTMLCalciteModalElement): void {
    modal?.removeAttribute("active");
  }
}

new App().init();
