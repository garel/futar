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
                                @click="close(ad.id)"
                            >
                                <v-icon dark>mdi-close</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn :to="'/list/'+ad.id">
                                More
                            </v-btn>
                        </v-card-actions>
                    </v-card> 
                </v-col>
            </v-row>
        </v-container>

        <v-overlay :value="overlay">
            <div class="loading-screen">
                <div class="lds-facebook">
                    <div></div><div></div><div></div>
                </div>
            </div>
        </v-overlay>
    </v-layout>
</template>

<script>
    export default{
        name : "ListIndex",
        layout: "frontend",
        data () {
            return {
                ads: [],
                overlay: true
            }
        },
        async fetch() {
            this.overlay = true;
            try{
                this.ads = await this.$axios.$get("/list")
            }
            catch (e) {
                console.log(e);
                alert("Error")
            }
            finally {
                this.overlay = false;
            }
        },
        methods: {
            async close(id){
                this.overlay = true;
                await  this.$axios.$post("/list/remove/",{id: id});
                this.$fetch();
            }
        }
    }
</script>

<style>
    .high{
        min-height: 500px;
    }

    .loading-screen .lds-facebook {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .loading-screen .lds-facebook div {
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: #5a73ff;
        animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    .loading-screen .lds-facebook div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
    }
    .loading-screen .lds-facebook div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
    }
    .loading-screen .lds-facebook div:nth-child(3) {
        left: 56px;
        animation-delay: 0s;
    }
    @keyframes lds-facebook {
        0% {
            top: 8px;
            height: 64px;
        }
        50%, 100% {
            top: 24px;
            height: 32px;
        }
    }
</style>
