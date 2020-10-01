<template>
  <div class="sidebar-widgets">
    {{ title }}
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: "Testing"
    };
  },
  name: "Blog_sidebar",
  filters: {
    uppercase: function(v) {
      return v.toUpperCase();
    }
  }
};
</script>

<style scoped></style>
