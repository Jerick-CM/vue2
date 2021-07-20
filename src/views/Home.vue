<template>
  <!-- <hello-world /> -->
  <v-container fluid>
    <h1>Homepage</h1>
    <i class="mdi mdi-flask" aria-hidden="true"></i>
    <!-- <span class="material-icons-outlined"></span> -->
    <v-icon>facebook</v-icon>
  </v-container>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",
  data() {
    return {
      pagetitle: "Homepage",
    };
  },
  components: {
    // HelloWorld,
  },
  beforeMount() {
    console.log("base url: " + process.env.API_BASE_URL);
    console.log("base url: " + process.env.VUE_APP_TITLE);
    console.log("base url: " + process.env.VUE_MY_VAR);
    console.log("base url: " + process.env.VUE_APP_VERSION);
  },
  mounted() {
    // console.log(process.env.APP_URL);
    console.log(process.env.VUE_APP_TITLE);
  },
  metaInfo() {
    return {
      title: `${this.pagetitle} - Vue2 Project`,
      meta: [
        {
          name: "description",
          content: "",
        },
        {
          property: "og:title",
          content: "",
        },
        { property: "og:site_name", content: "" },
        { property: "og:type", content: "" },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
};
</script>
