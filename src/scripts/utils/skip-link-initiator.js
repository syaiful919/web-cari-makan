/* eslint-disable no-param-reassign */
const SkipLinkInitiator = {
  init({ button, content }) {
    button.addEventListener('click', () => {
      content.tabIndex = 1;
      content.focus();
    });
  },
};

export default SkipLinkInitiator;
