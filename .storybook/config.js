import { configure } from '@storybook/vue';

import Vue from 'vue';

// import components

function loadStories() {
  require('../components/**/*.story.js');
}

configure(loadStories, module);
