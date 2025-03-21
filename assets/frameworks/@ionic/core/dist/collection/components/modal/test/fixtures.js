/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { dragElementBy } from "../../../utils/test/playwright/index";
export class CardModalPage {
    constructor(page) {
        this.page = page;
    }
    async navigate(url, config) {
        const { page } = this;
        await page.goto(url, config);
        this.ionModalDidPresent = await page.spyOnEvent('ionModalDidPresent');
        this.ionModalDidDismiss = await page.spyOnEvent('ionModalDidDismiss');
    }
    async openModalByTrigger(selector) {
        await this.page.locator(selector).click();
        await this.ionModalDidPresent.next();
        return this.page.locator('ion-modal');
    }
    async swipeToCloseModal(selector, waitForDismiss = true, swipeY = 300) {
        const { page } = this;
        const elementRef = page.locator(selector);
        await dragElementBy(elementRef, page, 0, swipeY);
        if (waitForDismiss) {
            await this.ionModalDidDismiss.next();
        }
    }
}
