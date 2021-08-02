<template>
    <!-- <hello-world /> -->
    <v-container fluid>
        <h1>Homepage</h1>
        <i class="mdi mdi-flask" aria-hidden="true"></i>
        {{ info }}
        <!-- <span class="material-icons-outlined"></span> -->
        <v-icon>facebook</v-icon>
    </v-container>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";
// import ApiHandler from "../lib/ApiHandler";
// const apiRequest = new ApiRequest();
import axios from "axios";


export default {
    name: "Home",
    data() {
        return {
            info: null,
            pagetitle: "Homepage",
        };
    },
    components: {
        // HelloWorld,
    },
    beforeMount() {},
    mounted() {
        // axios
        //     .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        //     // .get("http://localhost:3002/users",{ withCredentials: true })
        //     .then((response) => (this.info = response));

        axios.get("/hello").then((response) => (this.info = response.data));
        //  apiRequest.user()
        // .then(()=>{
        //   // yay - I'm logged in
        // })
        // .catch(err => {
        //   // oh oh, display error
        // })
        console.log(process.env.VUE_APP_ROOT_API);
        // console.log(process.env.VUE_APP_TITLE);
        // console.log(process.env.APP_URL);
        // console.log(process.env.VUE_APP_ROOT_API);
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
