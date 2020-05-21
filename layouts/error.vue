<template>
    <v-container dark>
        <v-row>
            <v-col>
                <h1 v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
                <h1 v-else>{{ otherError }}</h1>
                <NuxtLink to="/">Home page</NuxtLink>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    layout: "frontend",
    props: {
        error: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            pageNotFound: "404 Not Found",
            otherError: "An error occurred"
        };
    },
    head() {
        const title =
            this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
        return {
            title
        };
    }
};
</script>

<style>
h1 {
    font-size: 20px;
}
</style>
