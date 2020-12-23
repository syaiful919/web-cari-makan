import DrawerInitiator from '../utils/drawer-initiator';
import SkipLinkInitiator from '../utils/skip-link-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import './components/main-hero';
import './components/fav-hero';
import './components/taste-section';
import './components/location-section';
import './components/restaurant-item';
import './components/empty-list';
import './components/empty-detail';

class App {
  constructor({
    button, drawer, content, drawerItems, header, logo, skipLink,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._drawerItems = drawerItems;
    this._header = header;
    this._logo = logo;
    this._skipLink = skipLink;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      drawerItems: this._drawerItems,
      header: this._header,
      logo: this._logo,
    });

    SkipLinkInitiator.init({ button: this._skipLink, content: this._content });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
