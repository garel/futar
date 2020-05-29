<template>
    <v-layout>
        <v-container>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-title>
                            {{ad.name}}
                        </v-card-title>
                        <v-card-text>
                            <div>
                                {{ad.description}}
                            </div>
                            <div>
                                {{ad.payment}}
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-layout>
</template>

<script>
    export default{
        name : "ListItem",
        layout: "frontend",
        data () {
            return {
                ad: {}
            }
        },
        async fetch(){
            this.ad = await this.$axios.$get("/list/"+this.$route.params.id)
        }
    }
</script>

<style>
</style>
