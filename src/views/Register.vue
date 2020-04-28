<template>
  <div>
    <h1 class="home-title">VueJs</h1>
    <p class="home-desc">Je suis la page <strong class="home-desc--strong">{{ titlePage() }}</strong></p>
     <div class="home-form">
      <InputField
        type="text"
        label="Email"
        placeholder="Votre email..."
      />
      <InputField
        type="Password"
        label="Mot de passe"
        placeholder="Votre mot de passe..."
      />
    </div>
    <a href="/" class="home-link">Retourner à la première page</a>
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
  },
  mounted () {
    this.titlePage()
  }
}
</script>
