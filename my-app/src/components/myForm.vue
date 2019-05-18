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
                        <input type="submit" v-on:click="findLocation(lat,lon)" value="Show My Location" class="btn btn-primary mt-4" >
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js'

export default {
    name: 'myForm',
    data () {
        return{ 
            lat: '',
            lon: ''
        }
    },
    methods: {
        findLocation (lat, lot) {
            store.setLat(lat)
            store.SetLon(lon)

        }
    }
    
}
</script>

