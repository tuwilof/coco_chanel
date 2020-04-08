<template>
    <div>
        <b>actions {{myJson.actions.length}}</b>
        <div class="accordion" id="accordion">
            <div v-for="data in myJson.actions">

                <div class="accordion-item">
                    <router-link :to="{ path: 'action', query: { method: data.method, path: data.path.path }}">
                        {{data.method}} {{data.path.path}}
                    </router-link>
                    <h3 v-if="data.tests.length == 0" class="accordion-item-head" v-on:click="accordion">
                        {{data.method}} {{data.path.path}}, tests {{data.tests.length}}, responses
                        {{data.responses.length}}
                    </h3>
                    <h3 v-else style="background-color: #ff0000;" class="accordion-item-head"
                        v-on:click="accordion">
                        {{data.method}} {{data.path.path}}, tests {{data.tests.length}}, responses
                        {{data.responses.length}}
                    </h3>
                    <div class="accordion-item-body">
                        <div v-for="response in data.responses">
                            <div class="accordion-item">
                                <h3 class="accordion-item-head" v-on:click="accordion" style="margin-left:100px;">
                                    {{response.status}}, tests {{response.tests.length}}
                                </h3>
                                <div class="accordion-item-body" style="margin-left:100px;">
                                    <div v-for="test in response.tests">
                                        {{test.method}} {{test.path}}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div v-for="test in data.tests">
                            {{test.method}} {{test.path}}
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <b>tests {{myJson.tests.length}}</b>
        <div v-for="data in myJson.tests">
            {{data}}
        </div>
    </div>
</template>

<script>
    import json from '/Users/dima/pet_projects/open_source/report.json'

    export default {
        data() {
            return {
                myJson: json
            }
        },
        methods: {
            accordion: function (event) {
                event.target.classList.toggle('active');
            }
        }
    }
</script>
