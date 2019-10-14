<template>
    <div class='wrapper'>
        <!-- Sidebar Holder -->
        <sidebar></sidebar>
        <!-- Page Content Holder -->
        <div id='content'>
            <top-menu></top-menu>
            <center>
                <search></search>
            </center>
            Компонент -> {{_uid}}
        </div>
    </div>
</template>

<script>
    // import LeftMenu from './LeftMenu'
    export default {
        //    components: { 'sudna-left-menu':LeftMenu },
        name: 'Suda_3_Vessel',
        data() {
            return {};
        },
        methods: {},
        computed: {}
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>
