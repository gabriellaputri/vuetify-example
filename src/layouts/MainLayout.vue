<template>
  <v-app>
    <v-responsive class="fill-height">
      <default-bar />
      <v-navigation-drawer
        mobile-breakpoint="sm"
        :permanent="$vuetify.display.name.mdAndUp"
      >
        <v-list-item link title="Home" to="/"></v-list-item>
        <v-list-item link title="Member" to="/member"></v-list-item>
      </v-navigation-drawer>
      <default-view />
    </v-responsive>
  </v-app>
</template>

<script setup>
import DefaultBar from "./AppBar.vue";
import DefaultView from "./MainView.vue";
</script>
