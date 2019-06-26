<template>
    <div id="stage">
       <v-stage ref="stage" :config="configKonva">

       </v-stage>

    <button id="save">Descargar</button>
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
<style>
#save{
  background-color: #22B24C;
  border-color: #22B24C;
  border-radius: 3px;
  padding: 10px;
  border: 0;
  background: red;
  font-size: 1.2em;
  color: #FFF;
  vertical-align: baseline
}
</style>
