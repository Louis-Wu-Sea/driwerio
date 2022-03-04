import {Given, When, Then} from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/main.page';

const pages = {
    login: LoginPage
}

Given(/^User opens (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^User selects in (\w+) and (\w+) dropdowns$/, async (filterBrand, brand) => {
    await LoginPage.selectFilters(filterBrand, brand)
});

When(/^User clicks ([\w\s]+) button$/, async (nameButton) => {
    await LoginPage.clickButton(nameButton)
});

Then(/^Only the following item is displayed in the list (.*)$/, async (message) => {
    await expect(LoginPage.carName).toHaveTextContaining(message).isDisplayed();
});

