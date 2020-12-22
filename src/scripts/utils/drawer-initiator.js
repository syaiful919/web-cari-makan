/* eslint-disable no-param-reassign */
const DrawerInitiator = {
  init({
    button,
    drawer,
    drawerItems,
    content,
    header,
    logo,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, drawerItems);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    window.onscroll = () => {
      this._scrollFunction(button, drawerItems, header, logo);
    };
  },

  _toggleDrawer(event, drawer, drawerItems) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    drawerItems.forEach((x) => {
      x.style.color = '#2c3e50';
    });
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },

  _scrollFunction(button, drawerItems, header, logo) {
    if (
      document.body.scrollTop > 100
    || document.documentElement.scrollTop > 100
    ) {
      header.style.backgroundColor = 'white';
      logo.style.color = '#2c3e50';
      button.style.color = '#2c3e50';
      drawerItems.forEach((x) => {
        x.style.color = '#2c3e50';
      });
    } else {
      header.style.backgroundColor = 'transparent';
      logo.style.color = 'white';
      button.style.color = 'white';
      drawerItems.forEach((x) => {
        if (window.screen.width < 600) {
          x.style.color = '#2c3e50';
        } else {
          x.style.color = 'white';
        }
      });
    }
  },
};

export default DrawerInitiator;
