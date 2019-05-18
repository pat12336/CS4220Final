<template>
    <div class="container">
        <div class="jumbotron">
            <h4 class="display-4">
                My Location
            </h4>
            <p class="lead">Enter your latitude and longitude to display your location on a Google Map</p>
            <hr>
            
                <div class="form-row">
                    <div class="col">
                        <input type="text" v-model="formLat" id="lat" placeholder="Latitude" class="form-control">
                    </div>
                    <div class="col">
                        <input type="text" v-model="formLon" id="lon" placeholder="Longitude" class="form-control">
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <input type="submit" @click="findLocation(formLat,formLon)" value="Show My Location" class="btn btn-primary mt-4" >
                    </div>
                </div>
           
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
            lat: '51.477222',
            lon: '0'
        }
    },
    components: {
        myMap
    },
    methods: {
        findLocation (formLat, formLon) {
            this.lat = formLat
            this.lon = formLon
        }
    }
    
}
</script>

