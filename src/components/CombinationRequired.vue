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
                                            {{response.body}}
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
                                                {{combination['tests']}}

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
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .accordion-item{
        position: relative;
    }
    .accordion-item-head{
        background-color: #dfdfdf;
        border-top-left-radius: 5px ;
        border-top-right-radius: 5px;
        cursor: pointer;
        padding:10px;
    }
    .accordion-item-head:after{
        content: ' > ';
        display: block;
        height: 29px;
        position: absolute;
        right: 25px;
        transform: rotate(90deg) scaleY(2);
        top: 8px;
    }
    .accordion-item-head.active:after{
        content: ' < ';
    }
    .accordion-item-body{
        display: none;
    }
    .accordion-item-head.active + .accordion-item-body{
        display: block !important;
    }
</style>
