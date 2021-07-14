<template>
  <v-container fluid>
    <h1>This is an about page</h1>
    <v-icon v-text="icon"></v-icon>
    <v-icon>abugida-thai</v-icon>
    <v-icon>arrow_downward</v-icon>
  </v-container>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      pagetitle: "About",
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
