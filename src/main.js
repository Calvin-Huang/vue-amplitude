const amplitude = require('amplitude-js');

export default {
  install: (Vue, { apiKey, userId, config }) => {
    amplitude.getInstance().init(apiKey, userId, config);

    // eslint-disable-next-line
    Vue.prototype.$amplitude = amplitude;
  },
};
