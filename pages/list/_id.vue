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
                            {{ad.description}}
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
        computed : {
            ad(){
                return this.$store.state.ads.list[this.$route.params.id]
            }
        }
    }
</script>

<style>
</style>
