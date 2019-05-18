<template>
    <div>
        <!-- <img src="'https://maps.googleapis.com/maps/api/staticmap?center=51.477222,0&zoom=14&size=400x400
            &markers=color:orange%7c51.477222,0&key=AIzaSyAcWHUtcmdOXwJNDckVd8XyRDn9fnw7BHE'"> -->
        <img :src="updateURL(lattitude, longitude)">
    </div>
</template>

<script>
import { store } from '../store.js'

export default {
    name: 'my-map',

    data () {
        return {}
    },
    props: [
        'lattitude',
        'longitude'
    ],
    methods: {
        updateURL(lat, lon){
            return 'https://maps.googleapis.com/maps/api/staticmap?center='+ lat +','+ lon  
            +'&zoom=14&size=400x400&markers=color:orange%7c'+ lat +','+ lon 
            +'&key=AIzaSyAcWHUtcmdOXwJNDckVd8XyRDn9fnw7BHE'
        }
    },
    // computed: {
    //     updateURL(){
    //         return 'https://maps.googleapis.com/maps/api/staticmap?center='+ store.getLat() +','+ store.getLon() 
    //         +'&zoom=14&size=400x400&markers=color:orange%7c'+ store.getLat() +','+ store.getLon() 
    //         +'&key=AIzaSyAcWHUtcmdOXwJNDckVd8XyRDn9fnw7BHE'
    //     }
    // }
    
}
</script>

<style scoped>
img{
    margin-bottom: 40px;
}

</style>
