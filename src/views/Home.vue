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
