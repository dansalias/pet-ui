import { configure } from '@storybook/vue';
import { registerStories } from 'vue-storybook';
import Vue from 'vue';

const req = require.context('../components', true, /\.vue$/);

function loadStories() {
  req.keys().forEach(filename => {
    registerStories(req, filename, storiesOf);
  });
}

configure(loadStories, module);
