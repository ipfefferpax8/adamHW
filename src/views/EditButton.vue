<template>
<button @: class="button">Edit</button>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      isSelected: null,
    };
  },
  methods: {
    rowSelected(e) {
      console.log(e);
      this.isSelected = e;
    },
  },
};
</script>
