<template>
  <div>
    <myheader></myheader>
    <router-view/>
  </div>
</template>

<script>
import myheader from "./components/myheader"
export default{
  components:{
    myheader
  }
}
</script>

<style>
@font-face {
  font-family: "Londe B";
  src: url("./assets/fonts/Ronde-B_square_subset.woff") format("woff"),
       url("./assets/fonts/Ronde-B_square_subset.woff2") format("woff2");
}
body{
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    "Meiryo",
    sans-serif;
    background-color: ghostwhite;
    margin:0;
}

</style>