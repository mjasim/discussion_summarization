<template>
  <div class="home">
    <OverView msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import OverView from "@/components/OverView.vue";

export default {
  name: "Home",
  components: {
    OverView
  }
};
</script>
