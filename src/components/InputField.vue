<template>
  <div class="input">
    <label class="input-label">{{ label }}</label>
    <input :placeholder="placeholder" :type="type" :id="label" class="input-input"/>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    type: String,
    placeholder: String,
    id: Number
  }
}
</script>
