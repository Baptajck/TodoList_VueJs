<template>
  <div class="task">
    <ul>
      <li v-for:="tasks in task" class="task-item">{{ task }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tasks: String
  }
}
</script>
