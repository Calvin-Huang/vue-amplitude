# vue-amplitude
Amplitude module for Vue

## Getting Started
```js
import Vue from 'vue';
import VueAmplitude from 'vue-amplitude';

Vue.use(VueAmplitude, { apiKey: '[API_KEY]' });
```

## Options
|       |Prop        |
|-------|------------|
|apiKey |API Key of Amplitude|
|userId (optional) |Initialize Amplitude instance with user id|
|config (optional) |The rest configs you can use simply same to Amplitude-Javascript https://amplitude.zendesk.com/hc/en-us/articles/115001361248#settings-configuration-options|
