<template>
    <div id="stage">
       <v-stage ref="stage" :config="configKonva">

       </v-stage>
    </div>
</template>
<script>
export default {
    data(){
        return{
            configKonva:{
                width:1000,
                height:500
            }
        }
    }
}
</script>
