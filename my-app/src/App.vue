<template>
  <div id="app">
    
    <my-form/>
    
  </div>
</template>

<script>

import myForm from './components/myForm.vue'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: {
    myForm
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
