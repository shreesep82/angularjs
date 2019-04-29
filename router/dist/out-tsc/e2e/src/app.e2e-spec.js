'use strict'; // necessary for es6 output in node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
import { browser, element, by, ExpectedConditions } from 'protractor';
var numDashboardTabs = 5;
var numCrises = 4;
var numHeroes = 10;
var EC = ExpectedConditions;
describe('Router', function () {
    beforeAll(function () { return browser.get(''); });
    function getPageStruct() {
        var hrefEles = element.all(by.css('app-root > nav a'));
        var crisisDetail = element.all(by.css('app-root > div > app-crisis-center > app-crisis-list > app-crisis-detail > div')).first();
        var heroDetail = element(by.css('app-root > div > app-hero-detail'));
        return {
            hrefs: hrefEles,
            activeHref: element(by.css('app-root > nav a.active')),
            crisisHref: hrefEles.get(0),
            crisisList: element.all(by.css('app-root > div > app-crisis-center > app-crisis-list li')),
            crisisDetail: crisisDetail,
            crisisDetailTitle: crisisDetail.element(by.xpath('*[1]')),
            heroesHref: hrefEles.get(1),
            heroesList: element.all(by.css('app-root > div > app-hero-list li')),
            heroDetail: heroDetail,
            heroDetailTitle: heroDetail.element(by.xpath('*[2]')),
            adminHref: hrefEles.get(2),
            adminPage: element(by.css('app-root > div > app-admin')),
            adminPreloadList: element.all(by.css('app-root > div > app-admin > app-admin-dashboard > ul > li')),
            loginHref: hrefEles.get(3),
            loginButton: element.all(by.css('app-root > div > app-login > p > button')),
            contactHref: hrefEles.get(4),
            contactCancelButton: element.all(by.buttonText('Cancel')),
            primaryOutlet: element.all(by.css('app-root > div > app-hero-list')),
            secondaryOutlet: element.all(by.css('app-root > app-compose-message'))
        };
    }
    it('has expected dashboard tabs', function () {
        var page = getPageStruct();
        expect(page.hrefs.count()).toEqual(numDashboardTabs, 'dashboard tab count');
        expect(page.crisisHref.getText()).toEqual('Crisis Center');
        expect(page.heroesHref.getText()).toEqual('Heroes');
        expect(page.adminHref.getText()).toEqual('Admin');
        expect(page.loginHref.getText()).toEqual('Login');
        expect(page.contactHref.getText()).toEqual('Contact');
    });
    it('has heroes selected as opening tab', function () {
        var page = getPageStruct();
        expect(page.activeHref.getText()).toEqual('Heroes');
    });
    it('has crises center items', function () { return __awaiter(_this, void 0, void 0, function () {
        var page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = getPageStruct();
                    return [4 /*yield*/, page.crisisHref.click()];
                case 1:
                    _a.sent();
                    expect(page.activeHref.getText()).toEqual('Crisis Center');
                    expect(page.crisisList.count()).toBe(numCrises, 'crisis list count');
                    return [2 /*return*/];
            }
        });
    }); });
    it('has hero items', function () { return __awaiter(_this, void 0, void 0, function () {
        var page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = getPageStruct();
                    return [4 /*yield*/, page.heroesHref.click()];
                case 1:
                    _a.sent();
                    expect(page.activeHref.getText()).toEqual('Heroes');
                    expect(page.heroesList.count()).toBe(numHeroes, 'hero list count');
                    return [2 /*return*/];
            }
        });
    }); });
    it('toggles views', function () { return __awaiter(_this, void 0, void 0, function () {
        var page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = getPageStruct();
                    return [4 /*yield*/, page.crisisHref.click()];
                case 1:
                    _a.sent();
                    expect(page.activeHref.getText()).toEqual('Crisis Center');
                    expect(page.crisisList.count()).toBe(numCrises, 'crisis list count');
                    return [4 /*yield*/, page.heroesHref.click()];
                case 2:
                    _a.sent();
                    expect(page.activeHref.getText()).toEqual('Heroes');
                    expect(page.heroesList.count()).toBe(numHeroes, 'hero list count');
                    return [2 /*return*/];
            }
        });
    }); });
    it('saves changed crisis details', function () { return __awaiter(_this, void 0, void 0, function () {
        var page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = getPageStruct();
                    return [4 /*yield*/, page.crisisHref.click()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, crisisCenterEdit(2, true)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    // TODO: Figure out why this test is failing now
    xit('can cancel changed crisis details', function () { return __awaiter(_this, void 0, void 0, function () {
        var page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = getPageStruct();
                    return [4 /*yield*/, page.crisisHref.click()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, crisisCenterEdit(3, false)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('saves changed hero details', function () { return __awaiter(_this, void 0, void 0, function () {
        var page, heroEle, text, heroText, inputEle, buttonEle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = getPageStruct();
                    return [4 /*yield*/, page.heroesHref.click()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, browser.sleep(600)];
                case 2:
                    _a.sent();
                    heroEle = page.heroesList.get(4);
                    return [4 /*yield*/, heroEle.getText()];
                case 3:
                    text = _a.sent();
                    expect(text.length).toBeGreaterThan(0, 'hero item text length');
                    heroText = text.substr(text.indexOf(' ')).trim();
                    return [4 /*yield*/, heroEle.click()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, browser.sleep(600)];
                case 5:
                    _a.sent();
                    expect(page.heroesList.count()).toBe(0, 'hero list count');
                    expect(page.heroDetail.isPresent()).toBe(true, 'hero detail');
                    expect(page.heroDetailTitle.getText()).toContain(heroText);
                    inputEle = page.heroDetail.element(by.css('input'));
                    return [4 /*yield*/, inputEle.sendKeys('-foo')];
                case 6:
                    _a.sent();
                    expect(page.heroDetailTitle.getText()).toContain(heroText + '-foo');
                    buttonEle = page.heroDetail.element(by.css('button'));
                    return [4 /*yield*/, buttonEle.click()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, browser.sleep(600)];
                case 8:
                    _a.sent();
                    expect(heroEle.getText()).toContain(heroText + '-foo');
                    return [2 /*return*/];
            }
        });
    }); });
    it('sees preloaded modules', function () { return __awaiter(_this, void 0, void 0, function () {
        var page, list, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    page = getPageStruct();
                    return [4 /*yield*/, page.loginHref.click()];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, page.loginButton.click()];
                case 2:
                    _b.sent();
                    list = page.adminPreloadList;
                    expect(list.count()).toBe(1, 'preloaded module');
                    _a = expect;
                    return [4 /*yield*/, list.first().getText()];
                case 3:
                    _a.apply(void 0, [_b.sent()]).toBe('crisis-center', 'first preloaded module');
                    return [2 /*return*/];
            }
        });
    }); });
    it('sees the secondary route', function () { return __awaiter(_this, void 0, void 0, function () {
        var page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = getPageStruct();
                    return [4 /*yield*/, page.heroesHref.click()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, page.contactHref.click()];
                case 2:
                    _a.sent();
                    expect(page.primaryOutlet.count()).toBe(1, 'primary outlet');
                    expect(page.secondaryOutlet.count()).toBe(1, 'secondary outlet');
                    return [2 /*return*/];
            }
        });
    }); });
    it('should redirect with secondary route', function () { return __awaiter(_this, void 0, void 0, function () {
        var page, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    page = getPageStruct();
                    // go to login page and login
                    return [4 /*yield*/, browser.get('')];
                case 1:
                    // go to login page and login
                    _b.sent();
                    return [4 /*yield*/, page.loginHref.click()];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, page.loginButton.click()];
                case 3:
                    _b.sent();
                    // open secondary outlet
                    return [4 /*yield*/, page.contactHref.click()];
                case 4:
                    // open secondary outlet
                    _b.sent();
                    // go to login page and logout
                    return [4 /*yield*/, page.loginHref.click()];
                case 5:
                    // go to login page and logout
                    _b.sent();
                    return [4 /*yield*/, page.loginButton.click()];
                case 6:
                    _b.sent();
                    // attempt to go to admin page, redirects to login with secondary outlet open
                    return [4 /*yield*/, page.adminHref.click()];
                case 7:
                    // attempt to go to admin page, redirects to login with secondary outlet open
                    _b.sent();
                    // login, get redirected back to admin with outlet still open
                    return [4 /*yield*/, page.loginButton.click()];
                case 8:
                    // login, get redirected back to admin with outlet still open
                    _b.sent();
                    _a = expect;
                    return [4 /*yield*/, page.adminPage.isDisplayed()];
                case 9:
                    _a.apply(void 0, [_b.sent()]).toBeTruthy();
                    expect(page.secondaryOutlet.count()).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    function crisisCenterEdit(index, save) {
        return __awaiter(this, void 0, void 0, function () {
            var page, crisisEle, text, crisisText, inputEle, buttonEle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        page = getPageStruct();
                        return [4 /*yield*/, page.crisisHref.click()];
                    case 1:
                        _a.sent();
                        crisisEle = page.crisisList.get(index);
                        return [4 /*yield*/, crisisEle.getText()];
                    case 2:
                        text = _a.sent();
                        expect(text.length).toBeGreaterThan(0, 'crisis item text length');
                        crisisText = text.substr(text.indexOf(' ')).trim();
                        return [4 /*yield*/, crisisEle.click()];
                    case 3:
                        _a.sent();
                        expect(page.crisisDetail.isPresent()).toBe(true, 'crisis detail present');
                        expect(page.crisisDetailTitle.getText()).toContain(crisisText);
                        inputEle = page.crisisDetail.element(by.css('input'));
                        return [4 /*yield*/, inputEle.sendKeys('-foo')];
                    case 4:
                        _a.sent();
                        buttonEle = page.crisisDetail.element(by.buttonText(save ? 'Save' : 'Cancel'));
                        return [4 /*yield*/, buttonEle.click()];
                    case 5:
                        _a.sent();
                        crisisEle = page.crisisList.get(index);
                        if (!save) return [3 /*break*/, 6];
                        expect(crisisEle.getText()).toContain(crisisText + '-foo');
                        return [3 /*break*/, 9];
                    case 6: return [4 /*yield*/, browser.wait(EC.alertIsPresent(), 4000)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, browser.switchTo().alert().accept()];
                    case 8:
                        _a.sent();
                        expect(crisisEle.getText()).toContain(crisisText);
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    }
});
//# sourceMappingURL=app.e2e-spec.js.map