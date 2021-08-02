<template>
    <v-container fluid>
        <v-row>
            <v-col class="pa-0 ma-0" cols="12">
                <DescriptionComponent
                    title="title"
                    subtitle="subtitle"
                    description="description"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-1 ma-1" cols="12">
                <v-card>{{ info }} </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-1 ma-1" cols="12"> </v-col>
        </v-row>
    </v-container>
</template>

<script>
import DescriptionComponent from "../components/IndexDescription";
import axios from "axios";
// import VueI18n from "vue-i18n";
// Vue.use(VueI18n);
export default {
    name: "Home",
    data() {
        return {
            info: null,
            pagetitle: "Homepage",
        };
    },
    components: {
        DescriptionComponent,
    },
    beforeMount() {},
    mounted() {
        axios.get("/hello").then((response) => (this.info = response.data));
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
