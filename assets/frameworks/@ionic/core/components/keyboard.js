/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { g as getCapacitor } from './capacitor.js';

var ExceptionCode;
(function (ExceptionCode) {
    /**
     * API is not implemented.
     *
     * This usually means the API can't be used because it is not implemented for
     * the current platform.
     */
    ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
    /**
     * API is not available.
     *
     * This means the API can't be used right now because:
     *   - it is currently missing a prerequisite, such as network connectivity
     *   - it requires a particular platform or browser version
     */
    ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));

var KeyboardResize;
(function (KeyboardResize) {
    /**
     * Only the `body` HTML element will be resized.
     * Relative units are not affected, because the viewport does not change.
     *
     * @since 1.0.0
     */
    KeyboardResize["Body"] = "body";
    /**
     * Only the `ion-app` HTML element will be resized.
     * Use it only for Ionic Framework apps.
     *
     * @since 1.0.0
     */
    KeyboardResize["Ionic"] = "ionic";
    /**
     * The whole native Web View will be resized when the keyboard shows/hides.
     * This affects the `vh` relative unit.
     *
     * @since 1.0.0
     */
    KeyboardResize["Native"] = "native";
    /**
     * Neither the app nor the Web View are resized.
     *
     * @since 1.0.0
     */
    KeyboardResize["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));
const Keyboard = {
    getEngine() {
        const capacitor = getCapacitor();
        if (capacitor === null || capacitor === void 0 ? void 0 : capacitor.isPluginAvailable('Keyboard')) {
            return capacitor.Plugins.Keyboard;
        }
        return undefined;
    },
    getResizeMode() {
        const engine = this.getEngine();
        if (!(engine === null || engine === void 0 ? void 0 : engine.getResizeMode)) {
            return Promise.resolve(undefined);
        }
        return engine.getResizeMode().catch((e) => {
            if (e.code === ExceptionCode.Unimplemented) {
                // If the native implementation is not available
                // we treat it the same as if the plugin is not available.
                return undefined;
            }
            throw e;
        });
    },
};

export { Keyboard as K, KeyboardResize as a };
