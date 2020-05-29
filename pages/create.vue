<template>
    <v-layout
        column  
        align-center
    >
        <v-container>
            <v-alert
                v-model="alert"
                type="success"
                close-text="Close Alert"
                dark
                dismissible
            >
                Saved successfully
            </v-alert>
            <v-form>
                <v-row>
                    <v-col>
                        <v-card>
                            <v-card-text>
                                <v-text-field
                                    placeholder="Name"
                                    v-model="formData.name"
                                >
                                </v-text-field>
                                <v-textarea
                                    placeholder="Description"
                                    v-model="formData.description"
                                    :clearable="true"
                                    :full-width="true"
                                    :auto-grow="true"
                                >
                                </v-textarea>
                                <v-text-field
                                    placeholder="Payment"
                                    v-model="formData.payment"
                                >

                                </v-text-field>
                                <v-btn @click="add">
                                    Add Ad
                                </v-btn>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-form>
            <v-row>
                
            </v-row>
        </v-container>
    </v-layout>
</template>

<script>


export default {
    components: {},
    layout: "frontend",
    name: "Create",
    data : function(){
        return {
            alert : false,
            formData:{
                name : "",
                description : "",
                payment : ""
            }
        }
    },
    methods : {
        async add () {
            await this.$axios.$post("/list/create",this.formData).then(
                function(){
                    console.log("anyád");
                    this.alert = true;
                    let prop;

                    for(prop in this.formData){
                        this.formData[prop] = ""
                    }

                    setTimeout(() => {
                        this.alert = false
                    }, 5000);
                },
                function() {
                    alert("Error");
                }
            );
        },
    }
};
</script>
