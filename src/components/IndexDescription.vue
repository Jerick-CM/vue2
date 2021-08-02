<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" class="pa-1 ma-0">
                <v-card>
                    <v-card-title>
                        <h1>{{ title }}</h1>
                    </v-card-title>
                    <v-card-subtitle>
                        <h2>{{ subtitle }}</h2>
                    </v-card-subtitle>
                    <v-card-text> {{ description }} </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    props: ["title", "subtitle", "description"],
};
</script>
