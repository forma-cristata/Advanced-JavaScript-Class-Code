<template>
  <main>
    <button class="btn btn-primary" @click="counter++">Add 1</button> <!--Clicking on the button increases the counter-->
    <div>Count is: {{counter}}</div> <!--Displays the counter-->
  </main>
</template>

<script>
export default {
  name: "Counter",
  data(){
    return{
      counter: 0
    }
  }
}
</script>

<style scoped>

</style>