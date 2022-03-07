import { Component, Host, h, Prop } from '@stencil/core';
const CSS = {
  headerContent: 'instant-apps-header__header-content',
};
export class InstantAppsHeader {
  render() {
    return (h(Host, null,
      h("header", { style: { backgroundColor: this.backgroundColor } },
        h("span", { class: CSS.headerContent },
          this.logoImage && this.logoLink ? (h("a", { href: `${this.logoLink}`, target: "_blank" },
            h("img", { src: `${this.logoImage}`, alt: `${this.logoImageAltText}` }))) : this.logoImage ? (h("img", { src: `${this.logoImage}`, alt: this.logoImageAltText })) : (''),
          h("h1", { style: { color: this.textColor } }, this.titleText)),
        h("slot", { name: "actions-end" }))));
  }
  static get is() { return "instant-apps-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["instant-apps-header.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["instant-apps-header.css"]
  }; }
  static get properties() { return {
    "titleText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "title-text",
      "reflect": false
    },
    "backgroundColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "background-color",
      "reflect": false
    },
    "textColor": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "text-color",
      "reflect": false
    },
    "logoImage": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "logo-image",
      "reflect": false
    },
    "logoImageAltText": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "logo-image-alt-text",
      "reflect": false
    },
    "logoLink": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "logo-link",
      "reflect": false
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "label",
      "reflect": false
    }
  }; }
}
