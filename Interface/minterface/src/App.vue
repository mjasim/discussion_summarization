<template>
  <v-app>
    <v-app-bar app color="#2c485b" dark>
      <v-btn text @click="goToOverview">Matryona</v-btn>
    </v-app-bar>

    <v-content>
      <OverView />
    </v-content>
  </v-app>
</template>

<script>
import OverView from "./components/OverView";

export default {
  name: "App",

  components: {
    OverView
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
