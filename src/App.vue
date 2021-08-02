<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <v-btn to="/" color="primary" class="pa-1 ma-1"> Home </v-btn>
                |
                <v-btn to="/about" color="primary" class="pa-1 ma-1">
                    About
                </v-btn>
                |
                <v-btn to="/privacy-policy" color="primary" class="pa-1 ma-1">
                    Privacy Policy
                </v-btn>
                |
                <v-btn to="/terms-of-service" color="primary" class="pa-1 ma-1">
                    Terms of Service
                </v-btn>
            </div>

            <v-spacer></v-spacer>
            <div>
                <button
                    v-for="entry in languages"
                    :key="entry.title"
                    @click="changeLocale(entry.language)"
                >
                    <flag :iso="entry.flag" v-bind:squared="false" />
                    {{ entry.title }}
                </button>
            </div>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>

        <v-footer dark padless>
            <v-card tile class="indigo lighten-1 white--text text-center">
                <v-card-text>
                    <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-4 white--text"
                        icon
                    >
                        <v-icon size="24px">
                            {{ icon }}
                        </v-icon>
                    </v-btn>
                </v-card-text>
                <b>{{ $t("welcomeMsg") }}</b>
                <v-card-text class="white--text pt-0">
                    Phasellus feugiat arcu sapien, et iaculis ipsum elementum
                    sit amet. Mauris cursus commodo interdum. Praesent ut risus
                    eget metus luctus accumsan id ultrices nunc. Sed at orci sed
                    massa consectetur dignissim a sit amet dui. Duis commodo
                    vitae velit et faucibus. Morbi vehicula lacinia malesuada.
                    Nulla placerat augue vel ipsum ultrices, cursus iaculis dui
                    sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
                    vel ut orci. Orci varius natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
import i18n from "@/plugins/i18n";
export default {
    name: "App",
    data: () => ({
        languages: [
            { flag: "us", language: "en", title: "English" },
            { flag: "es", language: "es", title: "Español" },
        ],
        icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    }),
    methods: {
        changeLocale(locale) {
            console.log(locale);
            i18n.locale = locale;
        },
    },
};
</script>
<style scoped>
button {
    padding: 15px;
    border: 1px solid green;
    font-size: 18px;
    margin: 15px;
}
</style>
