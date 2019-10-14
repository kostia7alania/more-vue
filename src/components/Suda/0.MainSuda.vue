<template>
    <div class='wrapper'>
        <!-- Sidebar Holder -->
        <sidebar></sidebar>
        <!-- Page Content Holder -->
        <div id='content'>
            <top-menu></top-menu>
            <center>
                <div id='razdelDescriptionDiv'> Данный раздел позволяет вывести данные о судне/судах в табличной форме (местоположение судна, история движения, данные о судне) и при необходимости скачать эти данные на свой компьютер или вывести на печать. Для выбора судна вам необходимо
                    знать хотя бы один из атрибутов судна: название, номер ИМО, MMSI, позывной, номер РМРС или РРР. В базе данных системы хранятся данные и о судах под иностранным флагом. Для получения данных о местоположении судов в нужном регионе необходимо
                    перейти на ГИС-интерфейс ситемы, где будет предоставлена возможность выбора региона и источников информации. </div>
            </center>
        </div>
    </div>
</template>

<script>

    
    export default {
        components: {},
        name: 'MainSuda',
        data() {
            return {
                sidebar: false
            }
        },
        mounted() { }
    }
</script>

<style>
    #razdelDescriptionDiv {
        color: #8E999D;
        font-family: arial;
        text-align: justify;
        padding: 90px 30px 0;
        font-size: 1.4vh;
        background-repeat: no-repeat;
        font-weight: bold;
    }
    
    @media (min-width: 577px) {
        #razdelDescriptionDiv {
            color: #8E999D;
            width: 47vh;
            height: 47vh;
            background-image: url(../../assets/bg.png);
            font-family: arial;
            text-align: justify;
            padding: 90px 30px 0;
            font-size: 1.4vh;
            background-repeat: no-repeat;
            font-weight: bold;
            background-size: contain;
        }
    }
</style>
