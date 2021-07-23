<template>
  <div id="app">
    Ciao! Io sono {{ $route.params.name }}
    <Display :happy="happy" :vivo="vivo" :scorie="scorie"/>
    <button @click="daiDaMangiare">Dai da mangiare</button>
    <button @click="coccola">Coccola</button>
    <button @click="pulisci">Pulisci</button>
    <button @click="resuscita">Resuscita</button>
  </div>
</template>

<script>
import Display from '@/components/Display.vue'
export default {
  name: 'App',
  components: {
    Display
  },
  data: function() {
    return {
      name: 'pippo',
      age: 0,
      stomaco: [],
      happy: 5,
      vivo: true,
      pulito: true,
    }
  },
  computed: {
    scorie() {
      
      if(this.pulito) {
        return []
      }
      const listScorie = [];
      // per ogni elemento (cibo) nello stomaco > 7
      // aggiunge una scoria
      if(this.stomaco.length > 7) {
        for(let x = 7; x < this.stomaco.length; x++) {
          listScorie.push(1);
        }
      }
      return listScorie;
    }
  },
  methods: {
    coccola() {
      if(this.happy < 10) {
        this.happy++;
      }
    },
    pulisci() {
      this.pulito = true;
      //todo, potremmo svuotare lo stomaco
      this.stomaco = []
    },
    resuscita() {
      this.vivo = true;
    },
    daiDaMangiare() {
      this.stomaco.push(1);
        // se lo stomaco è pieno tra 5 e 8 aggiungiamo alla felicità 1
        // se stomaco è pieno 9 in su, la felicità si azzera
        this.pulito = false;
        // todo: potremmo lavorare meglio sul booleano vivo/morto
        if(this.happy === 0) {
          this.vivo = false;
        }
        if (this.stomaco.length >= 5 && this.stomaco.length <= 8 && this.happy < 10) {
            this.happy++;
        }
        
        if (this.stomaco.length >= 9 && this.stomaco.length <= 10) {
            this.happy = 5;
        }
        
        if (this.stomaco.length > 10) {
          this.happy--;
        }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>