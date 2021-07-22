<template>
  <div>

      <img class="tama" :src="getImageTamagotchi()" />
      <img class="scorie" v-for="(scoria, index) in scorie" :key='index' src="../assets/sh.svg"/>

  </div>
</template>

<script>

export default {
  name: 'Display',
  props: {
      happy: Number,
      vivo: Boolean,
      scorie: Array
  },
  methods: {
      // restituisce il path dell'immagine che rappresenta 
      // lo stato del tamagotchi.
      getImageTamagotchi() {
        
        if(!this.vivo) {
            return require('../assets/ghost.svg');
        }

        switch(this.happy) {

            case 0: 
                return require('../assets/saddissimo.svg');

            case 1: 
                return require('../assets/super-sad.svg');

            case 2: 
                return require('../assets/super-sad.svg');

            case 3: 
                return require('../assets/sad.svg');

            case 4: 
                return require('../assets/normal.svg');

            case 5: 
                return require('../assets/normal.svg');

            case 6: 
                return require('../assets/normal.svg');
            
            case 7: 
                return require('../assets/happy.svg');
                
            case 8: 
                return require('../assets/super-happy.svg'); 

            case 9: 
                return require('../assets/super-happy.svg'); 

            case 10: 
                return require('../assets/happyissimo.svg');

        }
    
      }
  }
}
</script>

<style lang="scss">

    .tama {
        width: 100px;
    }

    .scorie {
        width: 50px;
    }

</style>
