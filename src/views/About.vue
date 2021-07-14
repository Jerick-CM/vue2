<template>
  <v-container fluid>
    <h1>This is an about page</h1>
  </v-container>
</template>
<script>
export default {
   name: "About",

  components: {
    // HelloWorld,
  },
  metaInfo() {
    return {
      title: "About page",
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
}
</script>