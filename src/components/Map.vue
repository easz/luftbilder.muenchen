<template>
  <div class="map" id="map"></div>
</template>

<script>
  import 'leaflet/dist/leaflet.css'
  import L from 'leaflet'

  export default {
    name: 'Map',
    props: {
      map: Object,
      center: Array,
      zoom: Number
    },
    data() {
      return {
        leafletMap: null,
        leafletLayer: null
      }
    },
    methods: {
      setupLeafletMap: function() {
        this.leafletMap = L.map('map')
        this.changeView()
        this.changeMap()
      },
      changeMap: function() {
        if (this.leafletLayer) {
          this.leafletMap.removeLayer(this.leafletLayer)
        }

        // aded a base layer
        this.leafletLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", 
                                        {
                                          "attribution": "<a target=\"blank\" href=\"https://geodaten.bayern.de/opengeodata\">geodaten.bayern.de / Digitale farbige Orthophotos 2022 (DOP40)</a>",
                                          "minZoom": 10,
                                          "maxZoom": 18
                                        }).addTo(this.leafletMap)

        this.leafletLayer = L.tileLayer(this.map.url, this.map.options).addTo(this.leafletMap)
      },
      changeView: function() {
        this.leafletMap.setView(this.center, this.zoom)
      },
      changeCenter: function() {
        this.leafletMap.panTo(this.center)
      }
    },
    watch: {
      map() {
        this.changeMap()
      },
      center() {
        this.changeCenter()
      }
    },
    mounted() {
      this.setupLeafletMap()
    }
  }
</script>

<style scoped>
  .map {
    flex: 1;
  }
</style>
