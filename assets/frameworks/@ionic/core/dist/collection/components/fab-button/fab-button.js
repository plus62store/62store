/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
import { inheritAriaAttributes } from "../../utils/helpers";
import { createColorClasses, hostContext, openURL } from "../../utils/theme";
import { close } from "ionicons/icons";
import { getIonMode } from "../../global/ionic-global";
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @part native - The native HTML button or anchor element that wraps all child elements.
 * @part close-icon - The close icon that is displayed when a fab list opens (uses ion-icon).
 */
export class FabButton {
    constructor() {
        this.fab = null;
        this.inheritedAttributes = {};
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
        this.onClick = () => {
            const { fab } = this;
            if (!fab) {
                return;
            }
            fab.toggle();
        };
        this.color = undefined;
        this.activated = false;
        this.disabled = false;
        this.download = undefined;
        this.href = undefined;
        this.rel = undefined;
        this.routerDirection = 'forward';
        this.routerAnimation = undefined;
        this.target = undefined;
        this.show = false;
        this.translucent = false;
        this.type = 'button';
        this.size = undefined;
        this.closeIcon = close;
    }
    connectedCallback() {
        this.fab = this.el.closest('ion-fab');
    }
    componentWillLoad() {
        this.inheritedAttributes = inheritAriaAttributes(this.el);
    }
    render() {
        const { el, disabled, color, href, activated, show, translucent, size, inheritedAttributes } = this;
        const inList = hostContext('ion-fab-list', el);
        const mode = getIonMode(this);
        const TagType = href === undefined ? 'button' : 'a';
        const attrs = TagType === 'button'
            ? { type: this.type }
            : {
                download: this.download,
                href,
                rel: this.rel,
                target: this.target,
            };
        return (h(Host, { key: '4eee204d20b0e2ffed49a88f6cb3e04b6697965c', onClick: this.onClick, "aria-disabled": disabled ? 'true' : null, class: createColorClasses(color, {
                [mode]: true,
                'fab-button-in-list': inList,
                'fab-button-translucent-in-list': inList && translucent,
                'fab-button-close-active': activated,
                'fab-button-show': show,
                'fab-button-disabled': disabled,
                'fab-button-translucent': translucent,
                'ion-activatable': true,
                'ion-focusable': true,
                [`fab-button-${size}`]: size !== undefined,
            }) }, h(TagType, Object.assign({ key: '914561622c0c6bd41453e828a7d8a39f924875ac' }, attrs, { class: "button-native", part: "native", disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur, onClick: (ev) => openURL(href, ev, this.routerDirection, this.routerAnimation) }, inheritedAttributes), h("ion-icon", { key: '2c8090742a64c62a79243667027a195cca9d5912', "aria-hidden": "true", icon: this.closeIcon, part: "close-icon", class: "close-icon", lazy: false }), h("span", { key: 'c3e55291e4c4d306d34a4b95dd2e727e87bdf39c', class: "button-inner" }, h("slot", { key: 'f8e57f71d8f8878d9746cfece82f57f19ef9e988' })), mode === 'md' && h("ion-ripple-effect", { key: 'a5e94fa0bb9836072300617245ed0c1b4887bac6' }))));
    }
    static get is() { return "ion-fab-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "ios": ["fab-button.ios.scss"],
            "md": ["fab-button.md.scss"]
        };
    }
    static get styleUrls() {
        return {
            "ios": ["fab-button.ios.css"],
            "md": ["fab-button.md.css"]
        };
    }
    static get properties() {
        return {
            "color": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Color",
                    "resolved": "\"danger\" | \"dark\" | \"light\" | \"medium\" | \"primary\" | \"secondary\" | \"success\" | \"tertiary\" | \"warning\" | string & Record<never, never> | undefined",
                    "references": {
                        "Color": {
                            "location": "import",
                            "path": "../../interface",
                            "id": "src/interface.d.ts::Color"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The color to use from your application's color palette.\nDefault options are: `\"primary\"`, `\"secondary\"`, `\"tertiary\"`, `\"success\"`, `\"warning\"`, `\"danger\"`, `\"light\"`, `\"medium\"`, and `\"dark\"`.\nFor more information on colors, see [theming](/docs/theming/basics)."
                },
                "attribute": "color",
                "reflect": true
            },
            "activated": {
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
                    "text": "If `true`, the fab button will be show a close icon."
                },
                "attribute": "activated",
                "reflect": false,
                "defaultValue": "false"
            },
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
                    "text": "If `true`, the user cannot interact with the fab button."
                },
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "download": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "This attribute instructs browsers to download a URL instead of navigating to\nit, so the user will be prompted to save it as a local file. If the attribute\nhas a value, it is used as the pre-filled file name in the Save prompt\n(the user can still change the file name if they want)."
                },
                "attribute": "download",
                "reflect": false
            },
            "href": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Contains a URL or a URL fragment that the hyperlink points to.\nIf this property is set, an anchor tag will be rendered."
                },
                "attribute": "href",
                "reflect": false
            },
            "rel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the relationship of the target object to the link object.\nThe value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types)."
                },
                "attribute": "rel",
                "reflect": false
            },
            "routerDirection": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "RouterDirection",
                    "resolved": "\"back\" | \"forward\" | \"root\"",
                    "references": {
                        "RouterDirection": {
                            "location": "import",
                            "path": "../router/utils/interface",
                            "id": "src/components/router/utils/interface.ts::RouterDirection"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "When using a router, it specifies the transition direction when navigating to\nanother page using `href`."
                },
                "attribute": "router-direction",
                "reflect": false,
                "defaultValue": "'forward'"
            },
            "routerAnimation": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AnimationBuilder | undefined",
                    "resolved": "((baseEl: any, opts?: any) => Animation) | undefined",
                    "references": {
                        "AnimationBuilder": {
                            "location": "import",
                            "path": "../../interface",
                            "id": "src/interface.d.ts::AnimationBuilder"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "When using a router, it specifies the transition animation when navigating to\nanother page using `href`."
                }
            },
            "target": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies where to display the linked URL.\nOnly applies when an `href` is provided.\nSpecial keywords: `\"_blank\"`, `\"_self\"`, `\"_parent\"`, `\"_top\"`."
                },
                "attribute": "target",
                "reflect": false
            },
            "show": {
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
                    "text": "If `true`, the fab button will show when in a fab-list."
                },
                "attribute": "show",
                "reflect": false,
                "defaultValue": "false"
            },
            "translucent": {
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
                    "text": "If `true`, the fab button will be translucent.\nOnly applies when the mode is `\"ios\"` and the device supports\n[`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility)."
                },
                "attribute": "translucent",
                "reflect": false,
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'submit' | 'reset' | 'button'",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of the button."
                },
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'button'"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'small'",
                    "resolved": "\"small\" | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The size of the button. Set this to `small` in order to have a mini fab button."
                },
                "attribute": "size",
                "reflect": false
            },
            "closeIcon": {
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
                    "text": "The icon name to use for the close icon. This will appear when the fab button\nis pressed. Only applies if it is the main button inside of a fab containing a\nfab list."
                },
                "attribute": "close-icon",
                "reflect": false,
                "defaultValue": "close"
            }
        };
    }
    static get events() {
        return [{
                "method": "ionFocus",
                "name": "ionFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the button has focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }, {
                "method": "ionBlur",
                "name": "ionBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the button loses focus."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
