<template>
  <div>
    <h1 class="home-title">VueJs</h1>
    <p class="home-desc">Je suis la page <strong class="home-desc--strong">{{ titlePage() }}</strong></p>
    <div class="home-form">
      <InputField
        type="text"
        label="Prénom"
        placeholder="Votre prénom..."
      />
      <InputField
        type="text"
        label="Nom"
        placeholder="Votre nom..."
      />
    </div>
    <a href="/register" class="home-link">Passer à la prochaine page</a>
  </div>
</template>

<script>
import InputField from '@/components/InputField'
export default {
  name: 'Home',
  components: {
    InputField
  },
  methods: {
    titlePage () {
      return document.location.pathname
    }
  }
}
</script>
