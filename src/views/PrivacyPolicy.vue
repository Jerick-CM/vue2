<template>
  <v-container fluid>
    <h1>This is an {{ pagetitle }} page</h1>


  </v-container>
</template>
<script>
export default {
  name: "PrivacyPolicy", //must have no space
  data() {
    return {
      pagetitle: "Privacy Policy",
    };
  },
  components: {},
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
