import { configure, storiesOf } from '@storybook/vue';
import { registerStories } from 'vue-storybook';
import Vue from 'vue';

import '../styles/main.scss';

const req = require.context('../components', true, /\.vue$/);

function loadStories() {
  req.keys().forEach(filename => {
    registerStories(req, filename, storiesOf, {});
  });
}

configure(loadStories, module);
