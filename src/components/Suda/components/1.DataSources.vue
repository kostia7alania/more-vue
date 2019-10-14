<template>
    <transition name="bounce">
        <div class="sidebar3"> 
                <fieldset class="border p-2">
                    <legend class="w-auto scheduler-border">
                        <b-form-checkbox v-model="allSelected" :indeterminate="indeterminate" aria-describedby="flavours" aria-controls="flavours" @change="toggleAll">{{source.text}}</b-form-checkbox>
                    </legend>
                    <div class="mss-ps mss-ps-osdr-21"></div>
                    <div class="mss-ps mss-ps-sphere1-24"></div>
                    <b-form-checkbox-group @change="change_handler" class="d-flex  justify-content-between" :id="'flavors'+_uid"  v-model="selected" name="flavs" :options="flavours"  aria-label="Individual flavours"></b-form-checkbox-group>
                </fieldset> 
        </div>
    </transition>
</template>

<script>
    export default {
        props:{
            source: {
                type: [Array, Object],
                default(){ return [] }
            }
        },
        name: "dataSources",
        data() {
            return {
                flavours: ['менее 24ч.', 'от 24 до 72ч.', 'более 72ч.'],
                selected: [],
                allSelected: false,
                indeterminate: false,
    
                display: false
            };
        },
        mounted() {},
        methods: {
            change_handler(){
                console.log(arguments);
                window.t = this;
            },
            toggleAll(checked) {
                this.selected = checked ? this.flavours.slice() : []
            }
        },
        computed: {},
        watch: {
            selected(newVal, oldVal) {
                // Handle changes in individual flavour checkboxes
                if (newVal.length === 0) {
                    this.indeterminate = false
                    this.allSelected = false
                } else if (newVal.length === this.flavours.length) {
                    this.indeterminate = false
                    this.allSelected = true
                } else {
                    this.indeterminate = true
                    this.allSelected = false
                }
            }
        }
    };
</script>

<style scoped>
.mss-ps-sphere1-24 {
    background-position: 0px -96px !important;
}
.mss-ps {
    width: 16px !important;
    height: 16px !important;
    background-image: url(..\..\..\assets\download.png) !important;
    vertical-align: middle;
    display: inline-block;
    margin-right: 2px;
}
 
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
    
    fieldset.scheduler-border {
        border: 1px groove #ddd !important;
        padding: 0 1.4em 1.4em 1.4em !important;
        margin: 0 0 1.5em 0 !important;
        -webkit-box-shadow: 0px 0px 0px 0px #000;
        box-shadow: 0px 0px 0px 0px #000;
    }
    
    legend.scheduler-border {
        font-size: 1.2em !important;
        font-weight: bold !important;
        text-align: left !important;
        width: auto;
        padding: 0 10px;
        border-bottom: none;
    }
</style>
