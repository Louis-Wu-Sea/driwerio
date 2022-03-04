import {ChainablePromiseElement} from 'webdriverio';

import Page from './page';

class MainPage extends Page {

    filterBrand: string;
    nameBrand: string;
    nameButton: string;

    public get openListBrand(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//span[contains(text(), "' + this.filterBrand + '")]');
    }

    public get selectBrand(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//input[(@name = "' + this.nameBrand + '")]');
    }

    public get btnSubmit(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
        return $('//span[contains(text(), "' + this.nameButton + '")]');
    }

    public get carName(): ChainablePromiseElement<Promise<WebdriverIO.Elements>> {
        return $('//div[contains(@class, "GridItem-sc-")][1]//p[@data-e2e-id="carCardName"]');
    }


    public async selectFilters(filterBrand: string, brand: string): Promise<void> {
        this.filterBrand = filterBrand;
        this.nameBrand = brand;
        await this.openListBrand.click();
        await this.selectBrand.click({timeout: 10000})
    }

    public async clickButton(nameButton: string): Promise<void> {
        this.nameButton = nameButton;
        await this.btnSubmit.click();
    }


    public open(): Promise<string> {
        return super.open();
    }
}

export default new MainPage();
