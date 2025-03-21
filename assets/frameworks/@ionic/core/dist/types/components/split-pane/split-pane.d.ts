import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class SplitPane implements ComponentInterface {
    private rmL?;
    el: HTMLElement;
    visible: boolean;
    /**
     * The `id` of the main content. When using
     * a router this is typically `ion-router-outlet`.
     * When not using a router, this is typically
     * your main view's `ion-content`. This is not the
     * id of the `ion-content` inside of your `ion-menu`.
     */
    contentId?: string;
    /**
     * If `true`, the split pane will be hidden.
     */
    disabled: boolean;
    /**
     * When the split-pane should be shown.
     * Can be a CSS media query expression, or a shortcut expression.
     * Can also be a boolean expression.
     */
    when: string | boolean;
    /**
     * Expression to be called when the split-pane visibility has changed
     */
    ionSplitPaneVisible: EventEmitter<{
        visible: boolean;
    }>;
    visibleChanged(visible: boolean): void;
    /**
     * @internal
     */
    isVisible(): Promise<boolean>;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    protected updateState(): void;
    /**
     * Attempt to find the main content
     * element inside of the split pane.
     * If found, set it as the main node.
     *
     * We assume that the main node
     * is available in the DOM on split
     * pane load.
     */
    private styleMainElement;
    render(): any;
}
