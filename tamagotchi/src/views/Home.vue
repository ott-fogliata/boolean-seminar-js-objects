<template>
  <div class="home">
    <input v-model="tamaName" />
    <!--<a :href="'/tama/' + tamaName">Crea Tamagotchi</a>-->
    <router-link :to="'/tama/' + tamaName">Crea Tamagotchi</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      tamaName: ''
    }
  }
}
</script>
