import type { ModalAnimationOptions } from '../modal-interface';
export declare const createSheetEnterAnimation: (opts: ModalAnimationOptions) => {
    wrapperAnimation: import("../../../interface").Animation;
    backdropAnimation: import("../../../interface").Animation;
    contentAnimation: import("../../../interface").Animation | undefined;
};
export declare const createSheetLeaveAnimation: (opts: ModalAnimationOptions) => {
    wrapperAnimation: import("../../../interface").Animation;
    backdropAnimation: import("../../../interface").Animation;
};
