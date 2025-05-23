// Generated by dts-bundle-generator v9.5.1

import { Readable } from 'node:stream';

export declare function createWindowFromHtml(templateHtml: string, uniqueId: string): any;
export interface HydrateDocumentOptions {
	/**
	 * Build ID that will be added to `<html data-stencil-build="BUILD_ID">`. By default
	 * a random ID will be generated
	 */
	buildId?: string;
	/**
	 * Sets the `href` attribute on the `<link rel="canonical">`
	 * tag within the `<head>`. If the value is not defined it will
	 * ensure a canonical link tag is no included in the `<head>`.
	 */
	canonicalUrl?: string;
	/**
	 * Include the HTML comments and attributes used by the client-side
	 * JavaScript to read the structure of the HTML and rebuild each
	 * component. Defaults to `true`.
	 */
	clientHydrateAnnotations?: boolean;
	/**
	 * Constrain `setTimeout()` to 1ms, but still async. Also
	 * only allows `setInterval()` to fire once, also constrained to 1ms.
	 * Defaults to `true`.
	 */
	constrainTimeouts?: boolean;
	/**
	 * Sets `document.cookie`
	 */
	cookie?: string;
	/**
	 * Sets the `dir` attribute on the top level `<html>`.
	 */
	direction?: string;
	/**
	 * Component tag names listed here will not be prerendered, nor will
	 * hydrated on the client-side. Components listed here will be ignored
	 * as custom elements and treated no differently than a `<div>`.
	 */
	excludeComponents?: string[];
	/**
	 * Sets the `lang` attribute on the top level `<html>`.
	 */
	language?: string;
	/**
	 * Maximum number of components to hydrate on one page. Defaults to `300`.
	 */
	maxHydrateCount?: number;
	/**
	 * Sets `document.referrer`
	 */
	referrer?: string;
	/**
	 * Removes every `<script>` element found in the `document`. Defaults to `false`.
	 */
	removeScripts?: boolean;
	/**
	 * Removes CSS not used by elements within the `document`. Defaults to `true`.
	 */
	removeUnusedStyles?: boolean;
	/**
	 * The url the runtime uses for the resources, such as the assets directory.
	 */
	resourcesUrl?: string;
	/**
	 * Prints out runtime console logs to the NodeJS process. Defaults to `false`.
	 */
	runtimeLogging?: boolean;
	/**
	 * Component tags listed here will only be prerendered or server-side-rendered
	 * and will not be client-side hydrated. This is useful for components that
	 * are not dynamic and do not need to be defined as a custom element within the
	 * browser. For example, a header or footer component would be a good example that
	 * may not require any client-side JavaScript.
	 */
	staticComponents?: string[];
	/**
	 * The amount of milliseconds to wait for a page to finish rendering until
	 * a timeout error is thrown. Defaults to `15000`.
	 */
	timeout?: number;
	/**
	 * Sets `document.title`.
	 */
	title?: string;
	/**
	 * Sets `location.href`
	 */
	url?: string;
	/**
	 * Sets `navigator.userAgent`
	 */
	userAgent?: string;
}
export interface SerializeDocumentOptions extends HydrateDocumentOptions {
	/**
	 * Runs after the `document` has been hydrated.
	 */
	afterHydrate?(document: any): any | Promise<any>;
	/**
	 * Sets an approximate line width the HTML should attempt to stay within.
	 * Note that this is "approximate", in that HTML may often not be able
	 * to be split at an exact line width. Additionally, new lines created
	 * is where HTML naturally already has whitespace, such as before an
	 * attribute or spaces between words. Defaults to `100`.
	 */
	approximateLineWidth?: number;
	/**
	 * Runs before the `document` has been hydrated.
	 */
	beforeHydrate?(document: any): any | Promise<any>;
	/**
	 * Format the HTML in a nicely indented format.
	 * Defaults to `false`.
	 */
	prettyHtml?: boolean;
	/**
	 * Remove quotes from attribute values when possible.
	 * Defaults to `true`.
	 */
	removeAttributeQuotes?: boolean;
	/**
	 * Remove the `=""` from standardized `boolean` attributes,
	 * such as `hidden` or `checked`. Defaults to `true`.
	 */
	removeBooleanAttributeQuotes?: boolean;
	/**
	 * Remove these standardized attributes when their value is empty:
	 * `class`, `dir`, `id`, `lang`, and `name`, `title`. Defaults to `true`.
	 */
	removeEmptyAttributes?: boolean;
	/**
	 * Remove HTML comments. Defaults to `true`.
	 */
	removeHtmlComments?: boolean;
	/**
	 * If set to `false` Stencil will ignore the fact that a component has a `shadow: true`
	 * flag and serializes it as a scoped component. If set to `true` the component will
	 * be rendered within a Declarative Shadow DOM.
	 * @default false
	 */
	serializeShadowRoot?: boolean;
	/**
	 * The `fullDocument` flag determines the format of the rendered output. Set it to true to
	 * generate a complete HTML document, or false to render only the component.
	 * @default true
	 */
	fullDocument?: boolean;
}
export interface HydrateFactoryOptions extends SerializeDocumentOptions {
	serializeToHtml: boolean;
	destroyWindow: boolean;
	destroyDocument: boolean;
}
export interface Diagnostic {
	absFilePath?: string | undefined;
	code?: string;
	columnNumber?: number | undefined;
	debugText?: string;
	header?: string;
	language?: string;
	level: "error" | "warn" | "info" | "log" | "debug";
	lineNumber?: number | undefined;
	lines: PrintLine[];
	messageText: string;
	relFilePath?: string | undefined;
	type: string;
}
export interface PrintLine {
	lineIndex: number;
	lineNumber: number;
	text: string;
	errorCharStart: number;
	errorLength?: number;
}
export interface HydrateResults {
	buildId: string;
	diagnostics: Diagnostic[];
	url: string;
	host: string | null;
	hostname: string | null;
	href: string | null;
	port: string | null;
	pathname: string | null;
	search: string | null;
	hash: string | null;
	html: string | null;
	components: HydrateComponent[];
	anchors: HydrateAnchorElement[];
	imgs: HydrateImgElement[];
	scripts: HydrateScriptElement[];
	styles: HydrateStyleElement[];
	staticData: HydrateStaticData[];
	title: string | null;
	hydratedCount: number;
	httpStatus: number | null;
}
export interface HydrateComponent {
	tag: string;
	mode: string;
	count: number;
	depth: number;
}
export interface HydrateElement {
	[attrName: string]: string | undefined;
}
export interface HydrateAnchorElement extends HydrateElement {
	href?: string;
	target?: string;
}
export interface HydrateImgElement extends HydrateElement {
	src?: string;
}
export interface HydrateScriptElement extends HydrateElement {
	src?: string;
	type?: string;
}
export interface HydrateStyleElement extends HydrateElement {
	href?: string;
}
export interface HydrateStaticData {
	id: string;
	type: string;
	content: string;
}
export declare function streamToString(html: string | any, option?: SerializeDocumentOptions): Readable;
export declare function renderToString(html: string | any, options?: SerializeDocumentOptions): Promise<HydrateResults>;
export declare function renderToString(html: string | any, options: SerializeDocumentOptions | undefined, asStream: true): Readable;
export declare function hydrateDocument(doc: any | string, options?: HydrateDocumentOptions): Promise<HydrateResults>;
export declare function hydrateDocument(doc: any | string, options: HydrateDocumentOptions | undefined, asStream?: boolean): Readable;
export declare function serializeDocumentToString(doc: Document, opts: HydrateFactoryOptions): string;

export {};
