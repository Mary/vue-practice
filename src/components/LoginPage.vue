<template>
  <div class="login">
    <h1>{{ msg }}</h1>
   <input/>
   <button/>
  </div>
</template>

<script>
export default {
  name: 'LoginPage', //name of the component used for router purposes
  props: {
    msg: String //props: ['msg']
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
