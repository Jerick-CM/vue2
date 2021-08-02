<template>
    <v-container fluid>
        <h1>Page is not found</h1>
    </v-container>
</template>
<script>
export default {
    name: "About",
    data() {
        return {
            pagetitle: "404 Page not found",
        };
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
