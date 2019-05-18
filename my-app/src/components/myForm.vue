<template>
    <div class="container">
        <div class="jumbotron">
            <h4 class="display-4">
                My Location
            </h4>
            <p class="lead">Enter your latitude and longitude to display your location on a Google Map</p>
            <hr>
            <form>
                <div class="form-row">
                    <div class="col">
                        <input type="text" v-model="lat" id="lat" placeholder="Latitude" class="form-control">
                    </div>
                    <div class="col">
                        <input type="text" v-model="lon" id="lon" placeholder="Longitude" class="form-control">
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <input type="submit" @click="findLocation(lat,lon)" value="Show My Location" class="btn btn-primary mt-4" >
                    </div>
                </div>
            </form>
        </div>
        <my-map :lattitude="lat" :longitude="lon"> </my-map>
    </div>
</template>

<script>
import myMap from './my-map.vue'
import { store } from '../store.js'

export default {
    name: 'myForm',
    data () {
        return{ 
            lat: '',
            lon: ''
        }
    },
    components: {
        myMap
    },
    methods: {
        findLocation (lat, lot) {
            store.setLat(lat)
            store.SetLon(lon)

        }
    }
    
}
</script>

