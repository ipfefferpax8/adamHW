<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @import '~bulma/bulma';
}
#edit-button {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @import '~bulma/bulma';
}
tr.colorRow{
  background-color: rgba(20, 161, 156, 0.5);
}
table tbody tr:hover {
  background-color: rgba(20, 161, 156, .3);
  cursor: pointer;
}
#app table th{
  margin: 20px 10px;
  padding: 20px 10px;
}
#app table td{
  padding: 20px 10px;
  text-align: center;
  vertical-align: middle;
  width: 20%;
}
</style>
