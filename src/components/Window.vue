<template>
  <div id="stage">
    <v-stage ref="stage" :config="configKonva">
      <v-layer>
        <v-rect v-for="item in square" :key="item.id" :config="item" />
      </v-layer>
      <v-layer>
        <v-line :config="configLine" />
      </v-layer>
    </v-stage>

    <button id="save" v-on:click="downloadImage">Descargar</button>
  </div>
</template>
<script>
export default {
  props: ["configLine"],
  data() {
    return {
      configKonva: {
        width: 1000,
        height: 500
      },
      square: [
        {
          id: 1,
          x: 80,
          width: 900,
          height: 480,
          fill: "pink",
          stroke: "black",
          strokeWidth: 4,
          name: "rect2"
        },

        {
          x: 210,
          y: 40,
          width: 650,
          height: 400,
          fill: "red",
          stroke: "black",
          strokeWidth: 4,
          name: "rect1"
        }
      ]
    };
  },
  methods: {
    downloadURI: function(uri, name) {
      var link = document.createElement("a");
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      //delete link;
    },
    downloadImage: function() {
      var stage = this.$refs.stage.getStage();

      var dataURL = stage.toDataURL();
      this.downloadURI(dataURL, "diseño.jpg");
    }
  }
};
</script>
<style>
#save {
  background-color: #22b24c;
  border-color: #22b24c;
  border-radius: 3px;
  padding: 10px;
  border: 0;
  background: red;
  font-size: 1.2em;
  color: #fff;
  vertical-align: baseline;
}
</style>
