/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, d as createEvent, h, f as Host, i as getElement } from './index-28849c61.js';
import { a as addEventListener, b as removeEventListener, d as renderHiddenInput } from './helpers-da915de8.js';
import { i as isOptionSelected } from './compare-with-utils-a96ff2ea.js';
import { h as hostContext, c as createColorClasses } from './theme-01f3f29c.js';
import { b as getIonMode } from './ionic-global-c81d82ab.js';

const radioIosCss = ":host{--inner-border-radius:50%;display:inline-block;position:relative;max-width:100%;min-height:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.radio-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.radio-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-alignment-start) .radio-wrapper{-ms-flex-align:start;align-items:start}:host(.radio-alignment-center) .radio-wrapper{-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between),:host(.radio-justify-start),:host(.radio-justify-end),:host(.radio-alignment-start),:host(.radio-alignment-center){display:block}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host(.radio-label-placement-stacked) .radio-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.radio-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host{--color-checked:var(--ion-color-primary, #0054e9)}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{-webkit-margin-start:0;margin-inline-start:0}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:0.125rem;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #1a65eb);content:\"\";opacity:0.2}:host(.ion-focused) .radio-icon::after{inset-inline-start:-9px}.native-wrapper .radio-icon{width:0.9375rem;height:1.5rem}";
const IonRadioIosStyle0 = radioIosCss;

const radioMdCss = ":host{--inner-border-radius:50%;display:inline-block;position:relative;max-width:100%;min-height:inherit;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item){-ms-flex:1 1 0px;flex:1 1 0;width:100%;height:100%}:host([slot=start]),:host([slot=end]){-ms-flex:initial;flex:initial;width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item) .label-text-wrapper{margin-top:10px;margin-bottom:10px}:host(.in-item.radio-label-placement-stacked) .label-text-wrapper{margin-top:10px;margin-bottom:16px}:host(.in-item.radio-label-placement-stacked) .native-wrapper{margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-alignment-start) .radio-wrapper{-ms-flex-align:start;align-items:start}:host(.radio-alignment-center) .radio-wrapper{-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between),:host(.radio-justify-start),:host(.radio-justify-end),:host(.radio-alignment-start),:host(.radio-alignment-center){display:block}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host(.radio-label-placement-stacked) .radio-wrapper{-ms-flex-direction:column;flex-direction:column}:host(.radio-label-placement-stacked) .label-text-wrapper{-webkit-transform:scale(0.75);transform:scale(0.75);margin-left:0;margin-right:0;margin-bottom:16px;max-width:calc(100% / 0.75)}:host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper{-webkit-transform-origin:left top;transform-origin:left top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-start) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-start .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-start:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:right top;transform-origin:right top}}:host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper{-webkit-transform-origin:center top;transform-origin:center top}:host-context([dir=rtl]):host(.radio-label-placement-stacked.radio-alignment-center) .label-text-wrapper,:host-context([dir=rtl]).radio-label-placement-stacked.radio-alignment-center .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}@supports selector(:dir(rtl)){:host(.radio-label-placement-stacked.radio-alignment-center:dir(rtl)) .label-text-wrapper{-webkit-transform-origin:calc(100% - center) top;transform-origin:calc(100% - center) top}}:host{--color:rgb(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #0054e9);--border-width:0.125rem;--border-style:solid;--border-radius:50%}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.radio-disabled) .label-text-wrapper{opacity:0.38}:host(.radio-disabled) .native-wrapper{opacity:0.63}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #1a65eb);content:\"\";opacity:0.2}.native-wrapper .radio-icon{width:1.25rem;height:1.25rem}";
const IonRadioMdStyle0 = radioMdCss;

const Radio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ionFocus = createEvent(this, "ionFocus", 7);
        this.ionBlur = createEvent(this, "ionBlur", 7);
        this.inputId = `ion-rb-${radioButtonIds++}`;
        this.radioGroup = null;
        this.updateState = () => {
            if (this.radioGroup) {
                const { compareWith, value: radioGroupValue } = this.radioGroup;
                this.checked = isOptionSelected(radioGroupValue, this.value, compareWith);
            }
        };
        this.onClick = () => {
            const { radioGroup, checked, disabled } = this;
            if (disabled) {
                return;
            }
            /**
             * The modern control does not use a native input
             * inside of the radio host, so we cannot rely on the
             * ev.preventDefault() behavior above. If the radio
             * is checked and the parent radio group allows for empty
             * selection, then we can set the checked state to false.
             * Otherwise, the checked state should always be set
             * to true because the checked state cannot be toggled.
             */
            if (checked && (radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.allowEmptySelection)) {
                this.checked = false;
            }
            else {
                this.checked = true;
            }
        };
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.ionBlur.emit();
        };
        this.checked = false;
        this.buttonTabindex = -1;
        this.color = undefined;
        this.name = this.inputId;
        this.disabled = false;
        this.value = undefined;
        this.labelPlacement = 'start';
        this.justify = undefined;
        this.alignment = undefined;
    }
    valueChanged() {
        /**
         * The new value of the radio may
         * match the radio group's value,
         * so we see if it should be checked.
         */
        this.updateState();
    }
    componentDidLoad() {
        /**
         * The value may be `undefined` if it
         * gets set before the radio is
         * rendered. This ensures that the radio
         * is checked if the value matches. This
         * happens most often when Angular is
         * rendering the radio.
         */
        this.updateState();
    }
    /** @internal */
    async setFocus(ev) {
        if (ev !== undefined) {
            ev.stopPropagation();
            ev.preventDefault();
        }
        this.el.focus();
    }
    /** @internal */
    async setButtonTabindex(value) {
        this.buttonTabindex = value;
    }
    connectedCallback() {
        if (this.value === undefined) {
            this.value = this.inputId;
        }
        const radioGroup = (this.radioGroup = this.el.closest('ion-radio-group'));
        if (radioGroup) {
            this.updateState();
            addEventListener(radioGroup, 'ionValueChange', this.updateState);
        }
    }
    disconnectedCallback() {
        const radioGroup = this.radioGroup;
        if (radioGroup) {
            removeEventListener(radioGroup, 'ionValueChange', this.updateState);
            this.radioGroup = null;
        }
    }
    get hasLabel() {
        return this.el.textContent !== '';
    }
    renderRadioControl() {
        return (h("div", { class: "radio-icon", part: "container" }, h("div", { class: "radio-inner", part: "mark" }), h("div", { class: "radio-ripple" })));
    }
    render() {
        const { checked, disabled, color, el, justify, labelPlacement, hasLabel, buttonTabindex, alignment } = this;
        const mode = getIonMode(this);
        const inItem = hostContext('ion-item', el);
        return (h(Host, { key: '5a0adab55ad009305de4856fa1b9f93f2279a734', onFocus: this.onFocus, onBlur: this.onBlur, onClick: this.onClick, class: createColorClasses(color, {
                [mode]: true,
                'in-item': inItem,
                'radio-checked': checked,
                'radio-disabled': disabled,
                [`radio-justify-${justify}`]: justify !== undefined,
                [`radio-alignment-${alignment}`]: alignment !== undefined,
                [`radio-label-placement-${labelPlacement}`]: true,
                // Focus and active styling should not apply when the radio is in an item
                'ion-activatable': !inItem,
                'ion-focusable': !inItem,
            }), role: "radio", "aria-checked": checked ? 'true' : 'false', "aria-disabled": disabled ? 'true' : null, tabindex: buttonTabindex }, h("label", { key: 'f5673a798e6d87868339f046445f707e1d93b7b6', class: "radio-wrapper" }, h("div", { key: 'e9190c06f75a171cab63e3f74ccf771c3ed87005', class: {
                'label-text-wrapper': true,
                'label-text-wrapper-hidden': !hasLabel,
            }, part: "label" }, h("slot", { key: '6cedf4e7b3bd03e4a635727dd7b6094bab64af64' })), h("div", { key: '26dd48d9d2848b7f100b732abdc4a3171adde483', class: "native-wrapper" }, this.renderRadioControl()))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
};
let radioButtonIds = 0;
Radio.style = {
    ios: IonRadioIosStyle0,
    md: IonRadioMdStyle0
};

const RadioGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ionChange = createEvent(this, "ionChange", 7);
        this.ionValueChange = createEvent(this, "ionValueChange", 7);
        this.inputId = `ion-rg-${radioGroupIds++}`;
        this.labelId = `${this.inputId}-lbl`;
        this.setRadioTabindex = (value) => {
            const radios = this.getRadios();
            // Get the first radio that is not disabled and the checked one
            const first = radios.find((radio) => !radio.disabled);
            const checked = radios.find((radio) => radio.value === value && !radio.disabled);
            if (!first && !checked) {
                return;
            }
            // If an enabled checked radio exists, set it to be the focusable radio
            // otherwise we default to focus the first radio
            const focusable = checked || first;
            for (const radio of radios) {
                const tabindex = radio === focusable ? 0 : -1;
                radio.setButtonTabindex(tabindex);
            }
        };
        this.onClick = (ev) => {
            ev.preventDefault();
            /**
             * The Radio Group component mandates that only one radio button
             * within the group can be selected at any given time. Since `ion-radio`
             * is a shadow DOM component, it cannot natively perform this behavior
             * using the `name` attribute.
             */
            const selectedRadio = ev.target && ev.target.closest('ion-radio');
            /**
             * Our current disabled prop definition causes Stencil to mark it
             * as optional. While this is not desired, fixing this behavior
             * in Stencil is a significant breaking change, so this effort is
             * being de-risked in STENCIL-917. Until then, we compromise
             * here by checking for falsy `disabled` values instead of strictly
             * checking `disabled === false`.
             */
            if (selectedRadio && !selectedRadio.disabled) {
                const currentValue = this.value;
                const newValue = selectedRadio.value;
                if (newValue !== currentValue) {
                    this.value = newValue;
                    this.emitValueChange(ev);
                }
                else if (this.allowEmptySelection) {
                    this.value = undefined;
                    this.emitValueChange(ev);
                }
            }
        };
        this.allowEmptySelection = false;
        this.compareWith = undefined;
        this.name = this.inputId;
        this.value = undefined;
    }
    valueChanged(value) {
        this.setRadioTabindex(value);
        this.ionValueChange.emit({ value });
    }
    componentDidLoad() {
        /**
         * There's an issue when assigning a value to the radio group
         * within the Angular primary content (rendering within the
         * app component template). When the template is isolated to a route,
         * the value is assigned correctly.
         * To address this issue, we need to ensure that the watcher is
         * called after the component has finished loading,
         * allowing the emit to be dispatched correctly.
         */
        this.valueChanged(this.value);
    }
    async connectedCallback() {
        // Get the list header if it exists and set the id
        // this is used to set aria-labelledby
        const header = this.el.querySelector('ion-list-header') || this.el.querySelector('ion-item-divider');
        if (header) {
            const label = (this.label = header.querySelector('ion-label'));
            if (label) {
                this.labelId = label.id = this.name + '-lbl';
            }
        }
    }
    getRadios() {
        return Array.from(this.el.querySelectorAll('ion-radio'));
    }
    /**
     * Emits an `ionChange` event.
     *
     * This API should be called for user committed changes.
     * This API should not be used for external value changes.
     */
    emitValueChange(event) {
        const { value } = this;
        this.ionChange.emit({ value, event });
    }
    onKeydown(ev) {
        // We don't want the value to automatically change/emit when the radio group is part of a select interface
        // as this will cause the interface to close when navigating through the radio group options
        const inSelectInterface = !!this.el.closest('ion-select-popover') || !!this.el.closest('ion-select-modal');
        if (ev.target && !this.el.contains(ev.target)) {
            return;
        }
        // Get all radios inside of the radio group and then
        // filter out disabled radios since we need to skip those
        const radios = this.getRadios().filter((radio) => !radio.disabled);
        // Only move the radio if the current focus is in the radio group
        if (ev.target && radios.includes(ev.target)) {
            const index = radios.findIndex((radio) => radio === ev.target);
            const current = radios[index];
            let next;
            // If hitting arrow down or arrow right, move to the next radio
            // If we're on the last radio, move to the first radio
            if (['ArrowDown', 'ArrowRight'].includes(ev.key)) {
                next = index === radios.length - 1 ? radios[0] : radios[index + 1];
            }
            // If hitting arrow up or arrow left, move to the previous radio
            // If we're on the first radio, move to the last radio
            if (['ArrowUp', 'ArrowLeft'].includes(ev.key)) {
                next = index === 0 ? radios[radios.length - 1] : radios[index - 1];
            }
            if (next && radios.includes(next)) {
                next.setFocus(ev);
                if (!inSelectInterface) {
                    this.value = next.value;
                    this.emitValueChange(ev);
                }
            }
            // Update the radio group value when a user presses the
            // space bar on top of a selected radio
            if ([' '].includes(ev.key)) {
                const previousValue = this.value;
                this.value = this.allowEmptySelection && this.value !== undefined ? undefined : current.value;
                if (previousValue !== this.value || this.allowEmptySelection) {
                    /**
                     * Value change should only be emitted if the value is different,
                     * such as selecting a new radio with the space bar or if
                     * the radio group allows for empty selection and the user
                     * is deselecting a checked radio.
                     */
                    this.emitValueChange(ev);
                }
                // Prevent browsers from jumping
                // to the bottom of the screen
                ev.preventDefault();
            }
        }
    }
    /** @internal */
    async setFocus() {
        const radioToFocus = this.getRadios().find((r) => r.tabIndex !== -1);
        radioToFocus === null || radioToFocus === void 0 ? void 0 : radioToFocus.setFocus();
    }
    render() {
        const { label, labelId, el, name, value } = this;
        const mode = getIonMode(this);
        renderHiddenInput(true, el, name, value, false);
        return h(Host, { key: 'a853e38901f0f4ba17bbf21ebb5da5b5c20b327e', role: "radiogroup", "aria-labelledby": label ? labelId : null, onClick: this.onClick, class: mode });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
};
let radioGroupIds = 0;

export { Radio as ion_radio, RadioGroup as ion_radio_group };
