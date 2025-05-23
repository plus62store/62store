import type { ComponentInterface } from '../../stencil-public-runtime';
import type { AnchorInterface, ButtonInterface } from "../../utils/element-interface";
import type { AnimationBuilder, Color } from '../../interface';
import type { RouterDirection } from '../router/utils/interface';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @part native - The native HTML button, anchor, or div element that wraps all child elements.
 */
export declare class Card implements ComponentInterface, AnchorInterface, ButtonInterface {
    private inheritedAriaAttributes;
    el: HTMLElement;
    /**
     * The color to use from your application's color palette.
     * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
     * For more information on colors, see [theming](/docs/theming/basics).
     */
    color?: Color;
    /**
     * If `true`, a button tag will be rendered and the card will be tappable.
     */
    button: boolean;
    /**
     * The type of the button. Only used when an `onclick` or `button` property is present.
     */
    type: 'submit' | 'reset' | 'button';
    /**
     * If `true`, the user cannot interact with the card.
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
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */
    routerDirection: RouterDirection;
    /**
     * When using a router, it specifies the transition animation when navigating to
     * another page using `href`.
     */
    routerAnimation: AnimationBuilder | undefined;
    /**
     * Specifies where to display the linked URL.
     * Only applies when an `href` is provided.
     * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
     */
    target: string | undefined;
    componentWillLoad(): void;
    private isClickable;
    private renderCard;
    render(): any;
}
