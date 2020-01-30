<template>
  <div id="app">
      <h3>{{ title }}</h3>
      <button class="btn btn-primary" @click="fetchCharacter" type="button" name="button">Test Fetch Character</button>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            title: 'Generate Your Team'
        }
    },
    methods: {
        fetchCharacter() {
            fetch('https://cors-anywhere.herokuapp.com/http://swapi.co/api/people',{
                method: 'GET'
            })
            .then(response => response.json())
            .then(json => console.log(json))
        }
    }
}
</script>
