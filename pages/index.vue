<template>
    <v-layout>
        <v-container>
            <v-row>
                <v-col
                    xl=6
                    lg=6
                    md=6
                    sm=12
                    xs=12
                >
                    <v-card
                        :raised="true"
                    >
                        <v-card-title class="justify-space-between">
                            List
                        </v-card-title>
                        <v-card-actions>
                            <v-btn :to="'/list/'">
                                Show ad list
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col
                    xl=6
                    lg=6
                    md=6
                    sm=12
                    xs=12
                >
                    <v-card
                        :raised="true"
                    >
                        <v-card-title class="justify-space-between">
                            Create
                        </v-card-title>
                        <v-card-actions>
                            <v-btn :to="'/create/'">
                                Post an add
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
        layout: "frontend"
    }
</script>

<style>
</style>
