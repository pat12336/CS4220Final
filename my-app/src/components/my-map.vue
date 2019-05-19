<template>
    <div>
        <img :src="updateURL(lattitude, longitude)">
    </div>
</template>

<script>

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
    
}
</script>

<style scoped>
img{
    margin-bottom: 40px;
}

</style>
