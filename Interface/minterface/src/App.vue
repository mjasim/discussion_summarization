<template>
  <v-app>
    <v-app-bar dense app color="#2c485b" dark>
      <v-btn text x-large @click="goToOverview">Matryona</v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import OverView from "./components/OverView.vue";
import Details from "./components/Details.vue";

export default {
  name: "App",

  components: {
    OverView,
    Details
  },

  data: () => ({
    //
  }),

  methods: {
    goToOverview() {
      console.log("Go to Overview");
      this.$router.push("/overview").catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    }
  }
};
</script>
