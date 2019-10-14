<template>
    <div class="sidebar3">
        <h5 @click="display=!display" :class="'accordeon-header'">
            <span>Источники данных</span>
            <i v-show="!display" class="far fa-plus-square"></i>
            <i v-show="display" class="far fa-minus-square"></i> 
        </h5>
    
        <template v-if="display">
            <datasources v-for="source in sources" :key="source.value" :source="source"></datasources> 
        </template>
    </div>
</template>

<script>
import datasources from './1.DataSources'
    export default {
        name: "Accordeons",
        components: {datasources},
        data() {
            return {
                display: false,
                sources: [
                    {text: 'ОСДР',value: null},
                    {text: 'АИС',value: null},
                    {text: 'LRIT',value: null},
                    {text: 'Exact Earth',value: null},
                    {text: 'ГБУ (СКРТ)',value: null},
                    {text: 'АИС Роскосмос',value: null},
                    {text: 'SPHERE',value: null},
                ]
            };
        },
        mounted() {},
        methods: {},
        computed: {}
    };
</script>

<style scoped>
    
</style>

<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
 
    .accordeon-header {
        display: flex;
        justify-content: space-between;
    }
    
    .accordeon-header:hover {
        background: grey;
        cursor: pointer;
    }
    
    .accordeon-header {
        padding: 10px;
        border-radius: 5px;
        color: black;
        font-size: 1em;
        text-align: left;
        padding-left: 5px;
    }
</style>
