/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { generatePath } from "./path";
export const printRoutes = (routes) => {
    console.group(`[ion-core] ROUTES[${routes.length}]`);
    for (const chain of routes) {
        const segments = [];
        chain.forEach((r) => segments.push(...r.segments));
        const ids = chain.map((r) => r.id);
        console.debug(`%c ${generatePath(segments)}`, 'font-weight: bold; padding-left: 20px', '=>\t', `(${ids.join(', ')})`);
    }
    console.groupEnd();
};
export const printRedirects = (redirects) => {
    console.group(`[ion-core] REDIRECTS[${redirects.length}]`);
    for (const redirect of redirects) {
        if (redirect.to) {
            console.debug('FROM: ', `$c ${generatePath(redirect.from)}`, 'font-weight: bold', ' TO: ', `$c ${generatePath(redirect.to.segments)}`, 'font-weight: bold');
        }
    }
    console.groupEnd();
};
