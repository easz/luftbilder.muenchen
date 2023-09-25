<template>
  <div class="modal">
    <a href="" class="close" @click.prevent="handleClose">&times;</a>
    <p>
      Diese Webseite ist ein Fork vom Luftbilder-Projekt aus Berlin <a href="https://luftbilder.berlin.codefor.de">https://luftbilder.berlin.codefor.de</a>.
    </p>
    <p>
      Den Source-Code gibt es auf <a href="https://github.com/easz/luftbilder.muenchen">GitHub</a>.
    </p>
    <p>
      Die Bilder stammen aus <a href="https://opendata.muenchen.de">OpenData München</a> und <a href="https://geodaten.bayern.de/opengeodata">Bayerische Vermessungsverwaltung</a>.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Info',
    props: {
      map: Object,
      onClose: Function
    },
    methods: {
      handleClose: function() {
        this.$emit('onClose')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    position: absolute;
    top: 20%;
    right: 20%;
    left: 20%;
    z-index: 2000;

    background-color: #f2f2f2;
    box-shadow: 0px 0px 10px silver;

    padding: 10px 20px 20px 20px;

    pre {
      background-color: #333;
      color: white;

      white-space: pre-wrap;
      word-wrap: break-word;

      margin: 0;
      padding: 10px;
      border-radius: 4px;
    }

    .close {
      float: right;
      text-decoration: none;
    }

    :last-child {
      margin-bottom: 0;
    }
  }
</style>
