<template>
  <!-- <hello-world /> -->
  <v-container fluid>
    <h1>Homepage</h1>
  </v-container>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",

  components: {
    // HelloWorld,
  },
  metaInfo() {
    return {
      title: "Home page",
      meta: [
        {
          name: "description",
          content:
            "",
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
