import amplitude from 'amplitude-js';

export default {
  install: (Vue, { apiKey, userId, config }) => {
    amplitude.init(apiKey, userId, config);

    // eslint-disable-next-line
    Vue.prototype.$amplitude = amplitude;
  },
};
