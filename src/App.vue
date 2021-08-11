<template>
  <div>
    <router-view ></router-view>
    <Navigator></Navigator>
  </div>
</template>

<script>
import Navigator from './components/Navigator.vue'

export default {
  name: 'App',
  components: {
    Navigator
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
  * {
    font-family: 'Poppins', sans-serif;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
