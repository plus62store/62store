/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
import { inheritAttributes } from "../../utils/helpers";
import { getIonMode } from "../../global/ionic-global";
/**
 * @part image - The inner `img` element.
 */
export class Img {
    constructor() {
        this.inheritedAttributes = {};
        this.onLoad = () => {
            this.ionImgDidLoad.emit();
        };
        this.onError = () => {
            this.ionError.emit();
        };
        this.loadSrc = undefined;
        this.loadError = undefined;
        this.alt = undefined;
        this.src = undefined;
    }
    srcChanged() {
        this.addIO();
    }
    componentWillLoad() {
        this.inheritedAttributes = inheritAttributes(this.el, ['draggable']);
    }
    componentDidLoad() {
        this.addIO();
    }
    addIO() {
        if (this.src === undefined) {
            return;
        }
        if (typeof window !== 'undefined' &&
            'IntersectionObserver' in window &&
            'IntersectionObserverEntry' in window &&
            'isIntersecting' in window.IntersectionObserverEntry.prototype) {
            this.removeIO();
            this.io = new IntersectionObserver((data) => {
                /**
                 * On slower devices, it is possible for an intersection observer entry to contain multiple
                 * objects in the array. This happens when quickly scrolling an image into view and then out of
                 * view. In this case, the last object represents the current state of the component.
                 */
                if (data[data.length - 1].isIntersecting) {
                    this.load();
                    this.removeIO();
                }
            });
            this.io.observe(this.el);
        }
        else {
            // fall back to setTimeout for Safari and IE
            setTimeout(() => this.load(), 200);
        }
    }
    load() {
        this.loadError = this.onError;
        this.loadSrc = this.src;
        this.ionImgWillLoad.emit();
    }
    removeIO() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    render() {
        const { loadSrc, alt, onLoad, loadError, inheritedAttributes } = this;
        const { draggable } = inheritedAttributes;
        return (h(Host, { key: 'da600442894427dee1974a28e545613afac69fca', class: getIonMode(this) }, h("img", { key: '16df0c7069af86c0fa7ce5af598bc0f63b4eb71a', decoding: "async", src: loadSrc, alt: alt, onLoad: onLoad, onError: loadError, part: "image", draggable: isDraggable(draggable) })));
    }
    static get is() { return "ion-img"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["img.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["img.css"]
        };
    }
    static get properties() {
        return {
            "alt": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "This attribute defines the alternative text describing the image.\nUsers will see this text displayed if the image URL is wrong,\nthe image is not in one of the supported formats, or if the image is not yet downloaded."
                },
                "attribute": "alt",
                "reflect": false
            },
            "src": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The image URL. This attribute is mandatory for the `<img>` element."
                },
                "attribute": "src",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "loadSrc": {},
            "loadError": {}
        };
    }
    static get events() {
        return [{
                "method": "ionImgWillLoad",
                "name": "ionImgWillLoad",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the img src has been set"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "ionImgDidLoad",
                "name": "ionImgDidLoad",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the image has finished loading"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "ionError",
                "name": "ionError",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the img fails to load"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "src",
                "methodName": "srcChanged"
            }];
    }
}
/**
 * Enumerated strings must be set as booleans
 * as Stencil will not render 'false' in the DOM.
 * The need to explicitly render draggable="true"
 * as only certain elements are draggable by default.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable.
 */
const isDraggable = (draggable) => {
    switch (draggable) {
        case 'true':
            return true;
        case 'false':
            return false;
        default:
            return undefined;
    }
};
