<template>
    <div>
        <b>actions {{myJson.actions.length}}</b>
        <div v-for="data in myJson.actions">

            <div class='action'>
                <router-link :to="{ path: 'action', query: { method: data.method, path: data.path.path }}">
                    <div class='method'>{{data.method}}</div>
                    <div class='path'>{{data.path.path}}</div>

                    <div v-for="response in data.responses">
                        <div class='response'>{{response.status}}</div>

                        <div v-for="combination in response.combination">
                            <div v-if="combination['tests'].length == 0">
                                <div class='error'>!</div>
                            </div>
                        </div>
                    </div>
                </router-link>
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

<style>
    .action {
        background-color: #424242;
        color: #bababa;
        margin: 2px 0px;
        height: 20px;
    }

    .action:hover {
        background-color: #2b2b2b;
    }

    .method {
        width: 100px;
        float: left;
        padding: 0px 10px;
        text-align: left;
    }

    .path {
        width: 400px;
        float: left;
        text-align: left;
    }

    .response {
        width: 50px;
        float: left;
        text-align: left;
    }

    .error {
        color: red;
        width: 10px;
        float: left;
        text-align: left;
    }

    a:link {
        color: #bababa;
        text-decoration: none;
    }

    a:visited {
        color: #bababa;
        text-decoration: none;
    }

    a:hover {
        color: #bababa;
        text-decoration: none;
    }

    a:active {
        color: #bababa;
        text-decoration: none;
    }
</style>