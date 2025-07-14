<template>
  <div>
    <label for="priority-filter">Filter by Priority:</label>
    <select id="priority-filter" @change="updateFilter">
      <option value="All">All</option>
      <option value="High">High</option>
      <option value="Medium">Medium</option>
      <option value="Low">Low</option>
    </select>
  </div>
</template>

<script>
export default {
  methods: {
    updateFilter(event) {
      this.$emit('filter-change', event.target.value);
    }
  }
}
</script>
