<template>
  <div id="app">
      <h3>{{ title }}</h3>
      <Character />
      <!-- <button class="btn btn-primary" @click="fetchCharacter" type="button" name="button">Test Fetch Character</button> -->
  </div>
</template>

<script>
import Character from './components/character.vue'

export default {
    name: 'app',
    data() {
        return {
            title: 'Generate Your Team'
        }
    },
    components: {
        Character
    }
    // methods: {
    //     fetchCharacter() {
    //         fetch('https://cors-anywhere.herokuapp.com/http://swapi.co/api/people/1',{
    //             method: 'GET'
    //         })
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    //     }
    // }
}
</script>
