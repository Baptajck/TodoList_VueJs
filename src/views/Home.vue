/* eslint-disable vue/valid-v-for */
<template>
  <div>
    <h1 class="home-title">VueJs</h1>
    <p class="home-desc">Je suis la page <strong class="home-desc--strong">{{ titlePage() }}</strong></p>
    <div class="home-form">
    <div class="input">
      <label class="input-label">Votre tâche</label>
      <input placeholder="Votre tâche..." type="text" v-model="value" class="input-input"/>
    </div>
      <button v-on:click="pushTask(value)">Clique</button>
    </div>
    <div v-if="tasks.length > 0" class="home-form">
      <ul>
        <li v-for="(item, key) in tasks" :key="key" class="task-item">{{ item }}</li>
      </ul>
      </div>
    <a href="/register" class="home-link">Passer à la prochaine page</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      id: 2,
      tasks: []
    }
  },
  methods: {
    titlePage () {
      return document.location.pathname
    },
    pushTask (value) {
      this.tasks.push(value)
    }
  }
}
</script>
