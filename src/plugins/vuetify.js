import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import light from './theme';


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        // dark: false,
        // themes: {
        //   dark: {
        //     primary: '#4caf50',
        //     secondary: '#ff8c00',
        //     accent: '#9c27b0'
        //   }
        // }
        themes: {
          light: {
            primary: '#3f51b5',
            secondary: '#b0bec5',
            anchor: '#8c9eff',
          },
        },

          // primary: '#1976D2',
          // secondary: '#424242',
          // accent: '#82B1FF',
          // error: '#FF5252',
          // info: '#2196F3',
          // success: '#4CAF50',
          // warning: '#FFC107',
      }
})