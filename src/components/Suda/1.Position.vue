<template>
    <div class='wrapper'>
        <!-- Sidebar Holder -->
        <sidebar></sidebar>
        <position-sidebar></position-sidebar>
        <!-- Page Content Holder -->
        <div id='content'>
            <top-menu></top-menu>
    
            <b-container class="bv-example-row">
                <b-row>
                    <b-col md="auto">
                    </b-col>
                    <b-col>
                        <search></search>
                    </b-col>
                </b-row>
            </b-container>
            Компонент -> {{_uid}}
        </div>
    </div>
</template>

<script>
    import positionsidebar from "./components/1.PositionSidebar";
    export default {
        components: {
            "position-sidebar": positionsidebar
        },
        name: "Suda_1_Position",
        data() {
            return {};
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
