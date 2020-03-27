<template>
    <div>
        <b>required {{myJson.actions.length}}?</b>
        <div class="accordion" id="accordion">
            <div v-for="data in myJson.actions">

                <div class="accordion-item">
                    <h3 v-if="data.tests.length == 0" class="accordion-item-head active" v-on:click="accordion">
                        {{data.method}} {{data.path.path}}, tests {{data.tests.length}}, responses {{data.responses.length}}
                    </h3>
                    <h3 v-else style="background-color: #ff0000;" class="accordion-item-head active" v-on:click="accordion">
                        {{data.method}} {{data.path.path}}, tests {{data.tests.length}}, responses {{data.responses.length}}
                    </h3>
                    <div class="accordion-item-body">
                        <div v-for="response in data.responses">
                            <div class="accordion-item">
                                <h3 class="accordion-item-head active" v-on:click="accordion" style="margin-left:100px;">
                                    {{response.status}}, tests {{response.tests.length}}
                                </h3>
                                <div class="accordion-item-body" style="margin-left:100px;">

                                    <div class="accordion-item">
                                        <h3 class="accordion-item-head" v-on:click="accordion" style="margin-left:200px;">
                                            json-schema
                                        </h3>
                                        <div class="accordion-item-body" style="margin-left:200px;">
                                            <vue-json-compare :oldData="response.body" :newData="response.body"></vue-json-compare>
                                        </div>
                                    </div>

                                    <div v-for="combination in response.combination">
                                        <div class="accordion-item">
                                            <h3 v-if="combination['tests'].length != 0" class="accordion-item-head" v-on:click="accordion" style="margin-left:300px;">
                                                {{combination['type']}}  {{combination['combination']}} tests: {{combination['tests'].length}}
                                            </h3>
                                            <h3 v-else style="background-color: #ff0000; margin-left:300px;" class="accordion-item-head" v-on:click="accordion">
                                                {{combination['type']}}  {{combination['combination']}} tests: {{combination['tests'].length}} not covered by tests
                                            </h3>

                                            <div class="accordion-item-body" style="margin-left:300px;">
                                                <vue-json-compare :oldData="response.body" :newData="combination['json_schema']"></vue-json-compare>

                                                <p>tests:</p>
                                                <div v-for="test in combination['tests']">
                                                    <vue-json-compare :oldData="test" :newData="test"></vue-json-compare>
                                                    <br/>
                                                </div>

                                                <p>error</p>
                                                <div v-for="error in combination['error']">
                                                    <p>{{error.test}}</p>
                                                    <p>{{error.error}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-for="test in response.tests">
                                        <div class="accordion-item">
                                            <h3 class="accordion-item-head" v-on:click="accordion" style="margin-left:200px;">
                                                {{test.method}} {{test.path}}
                                            </h3>
                                            <div class="accordion-item-body" style="margin-left:200px;">
                                                {{test.response}}
                                            </div>
                                        </div>
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
    import vueJsonCompare from 'vue-json-compare'
    import json from '/Users/dima/pet_projects/open_source/report.json'

    export default {
        components: {
            vueJsonCompare
        },
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

<style>
    /* darkmode */
    .alpaca-json{
        background-color: #131a20;
    }
    .alpaca-add{
        background-color: #004313;
    }
    .alpaca-del {
        background-color: #160004;
    }
    .alpaca-upd{
        background-color: #423200;
    }
</style>
