<template>
  <div id="stage">
    <v-stage ref="stage" :config="configKonva">
      <v-layer>
        <v-line :config="configLine" />
      </v-layer>
      <v-layer ref="layer">
        <v-rect v-for="item in square" :key="item.id" :config="item" />
        <v-image
          :config="{
            x:222,
            y:62,
            width:596,
            height:346,
            image: image
          }"
        />

        <v-image
          :config="{
            x:222,
            y:62,
            width:280,
            height: 346,
            image: curtain
          }"
        />
        <v-image
          :config="{
            x:538,
            y:62,
            width:280,
            height: 346,
            image: curtain
          }"
        />
      </v-layer>
    </v-stage>

    <button id="save" v-on:click="downloadImage">Descargar</button>
  </div>
</template>
<script>
const curtainSRC = require("../img/cortina1.png");
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
          x: 220,
          y: 60,
          width: 600,
          height: 350,
          fill: "white",
          stroke: "black",
          strokeWidth: 4,
          name: "rect2"
        }
      ],
      image: null,
      curtain: null
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
  },
  created() {
    const image = new window.Image();
    const curtain = new window.Image();
    curtain.src = curtainSRC;
    curtain.onload = () => {
      this.curtain = curtain;
    };
    image.src = "https://wallpaperstock.net/wallpapers/thumbs1/44468wide.jpg";
    image.onload = () => {
      // set image only when it is loaded
      this.image = image;
    };
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
