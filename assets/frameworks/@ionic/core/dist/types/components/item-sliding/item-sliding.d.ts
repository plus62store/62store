import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { Side } from '../menu/menu-interface';
declare const enum SlidingState {
    Disabled = 2,
    Enabled = 4,
    End = 8,
    Start = 16,
    SwipeEnd = 32,
    SwipeStart = 64
}
export declare class ItemSliding implements ComponentInterface {
    private item;
    private openAmount;
    private initialOpenAmount;
    private optsWidthRightSide;
    private optsWidthLeftSide;
    private sides;
    private tmr?;
    private leftOptions?;
    private rightOptions?;
    private optsDirty;
    private gesture?;
    private contentEl;
    private initialContentScrollY;
    private mutationObserver?;
    el: HTMLIonItemSlidingElement;
    state: SlidingState;
    /**
     * If `true`, the user cannot interact with the sliding item.
     */
    disabled: boolean;
    disabledChanged(): void;
    /**
     * Emitted when the sliding position changes.
     */
    ionDrag: EventEmitter;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    /**
     * Get the amount the item is open in pixels.
     */
    getOpenAmount(): Promise<number>;
    /**
     * Get the ratio of the open amount of the item compared to the width of the options.
     * If the number returned is positive, then the options on the right side are open.
     * If the number returned is negative, then the options on the left side are open.
     * If the absolute value of the number is greater than 1, the item is open more than
     * the width of the options.
     */
    getSlidingRatio(): Promise<number>;
    /**
     * Open the sliding item.
     *
     * @param side The side of the options to open. If a side is not provided, it will open the first set of options it finds within the item.
     */
    open(side: Side | undefined): Promise<void>;
    /**
     * Close the sliding item. Items can also be closed from the [List](./list).
     */
    close(): Promise<void>;
    /**
     * Close all of the sliding items in the list. Items can also be closed from the [List](./list).
     */
    closeOpened(): Promise<boolean>;
    /**
     * Given an optional side, return the ion-item-options element.
     *
     * @param side This side of the options to get. If a side is not provided it will
     * return the first one available.
     */
    private getOptions;
    private updateOptions;
    private canStart;
    private onStart;
    private onMove;
    private onEnd;
    private calculateOptsWidth;
    private setOpenAmount;
    private getSlidingRatioSync;
    render(): any;
}
export {};
