/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
import { getIonMode } from "../../global/ionic-global";
export class SelectOption {
    constructor() {
        this.inputId = `ion-selopt-${selectOptionIds++}`;
        this.disabled = false;
        this.value = undefined;
    }
    render() {
        return h(Host, { key: '8c96c199ce3a3065de3fe446500f567236e0610a', role: "option", id: this.inputId, class: getIonMode(this) });
    }
    static get is() { return "ion-select-option"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["select-option.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["select-option.css"]
        };
    }
    static get properties() {
        return {
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If `true`, the user cannot interact with the select option. This property does not apply when `interface=\"action-sheet\"` as `ion-action-sheet` does not allow for disabled buttons."
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "value": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "any | null",
                    "resolved": "any",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The text value of the option."
                },
                "attribute": "value",
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
let selectOptionIds = 0;
