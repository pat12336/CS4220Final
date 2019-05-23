<template>
    <div>
        <img :src="updateURL(lattitude, longitude)">
    </div>
</template>

<script>
import { config } from '../config.js'

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
            +'&key=' + config.MY_KEY
        }
    },
    
}
</script>

<style scoped>
img{
    margin-bottom: 40px;
}

</style>
