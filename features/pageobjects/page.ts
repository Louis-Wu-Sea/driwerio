export default class Page {
    public open(): Promise<string> {
        return browser.url(`https://www.carnext.com/en-be/`)
    }
}