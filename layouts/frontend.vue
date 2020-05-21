<template>
    <v-app dark>
        <v-navigation-drawer
            :mini-variant="true"
            :clipped="true"            
            app
        >
            <v-list>
                <v-list-item
                    v-for="link in links"
                    :key="link.to"
                    :to="link.to"
                    router
                    exact
                >
                    <v-list-item-action>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar 
            :clipped-left="true" 
            app
        >
            <v-toolbar-title>
                Application
            </v-toolbar-title>
        </v-app-bar>

        <v-content>
            <nuxt />
        </v-content>

        <v-footer app>
            <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data(){
        return {
            links: [
                {to: "/",icon: "mdi-home"},
                {to: "/create",icon: "mdi-pencil"},
                {to: "/list",icon: "mdi-view-list"},
            ]
        }
    }
};
</script>