import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { AnchorInterface } from "../../utils/element-interface";
import type { TabBarChangedEventDetail, TabButtonClickEventDetail, TabButtonLayout } from '../tab-bar/tab-bar-interface';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @part native - The native HTML anchor element that wraps all child elements.
 */
export declare class TabButton implements ComponentInterface, AnchorInterface {
    private inheritedAttributes;
    el: HTMLElement;
    /**
     * If `true`, the user cannot interact with the tab button.
     */
    disabled: boolean;
    /**
     * This attribute instructs browsers to download a URL instead of navigating to
     * it, so the user will be prompted to save it as a local file. If the attribute
     * has a value, it is used as the pre-filled file name in the Save prompt
     * (the user can still change the file name if they want).
     */
    download: string | undefined;
    /**
     * Contains a URL or a URL fragment that the hyperlink points to.
     * If this property is set, an anchor tag will be rendered.
     */
    href: string | undefined;
    /**
     * Specifies the relationship of the target object to the link object.
     * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
     */
    rel: string | undefined;
    /**
     * Set the layout of the text and icon in the tab bar.
     * It defaults to `"icon-top"`.
     */
    layout?: TabButtonLayout;
    /**
     * The selected tab component
     */
    selected: boolean;
    /**
     * A tab id must be provided for each `ion-tab`. It's used internally to reference
     * the selected tab or by the router to switch between them.
     */
    tab?: string;
    /**
     * Specifies where to display the linked URL.
     * Only applies when an `href` is provided.
     * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
     */
    target: string | undefined;
    /**
     * Emitted when the tab bar is clicked
     * @internal
     */
    ionTabButtonClick: EventEmitter<TabButtonClickEventDetail>;
    onTabBarChanged(ev: CustomEvent<TabBarChangedEventDetail>): void;
    componentWillLoad(): void;
    private selectTab;
    private get hasLabel();
    private get hasIcon();
    private onKeyUp;
    private onClick;
    render(): any;
}
