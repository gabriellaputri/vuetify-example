/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { VBtn } from "vuetify/components/VBtn";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#1867C0",
          secondary: "#5CBBF6",
        },
      },
    },
  },
  aliases: {
    MyBtn: VBtn,
  },
  defaults: {
    global: {
      ripple: false,
    },
    VBtn: { variant: "outlined" },
    MyBtn: { variant: "flat", ripple: true },
  },
});
