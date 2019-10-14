<template>
    <div class="main">
        <!-- Page Content Holder -->
        <div id="content">
            <center>
                <b-card bg-variant="dark" text-variant="white" title="MORE">
                    <p class="card-text">
                        Не пугайтесь, это новая версия Море.
                    </p>
                    <b-button href="#" variant="primary">
                        <router-link to='ship'><button class="btn btn-danger">Перейти в суда</button></router-link>
                    </b-button>
                </b-card>
            </center>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {};
        }
    };
</script>
 
