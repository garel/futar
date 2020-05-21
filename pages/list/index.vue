<template>
    <v-layout>
        <v-container>
            <v-row>
                <v-col>
                    <h1>List index</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col 
                    v-for="(ad,index) in ads"
                    :key="ad.name"
                    cols=12
                    xl=4
                    lg=4
                    md=4
                    sm=12
                    xs=12
                >
                    <v-card 
                        :raised="true"
                    >
                        <v-card-title class="justify-space-between">
                            {{ad.name}}
                            <v-btn 
                                class="align-self-end" 
                                dark 
                                fab
                                small
                                @click="close(index)"
                            >
                                <v-icon dark>mdi-close</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn :to="'/list/'+index">
                                More
                            </v-btn>
                        </v-card-actions>
                    </v-card> 
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>

<script>
    export default{
        name : "ListIndex",
        layout: "frontend",
        computed: {
            ads () {
                return this.$store.state.ads.list
            }
        },
        methods: {
            close(id){
                this.$store.commit('ads/remove', id)
            }
        }
    }
</script>

<style>
    .high{
        min-height: 500px;
    }
</style>
