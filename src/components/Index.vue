<template>
  <div>
    <div class="twicon">
      <img src="@/assets/imgs/twicon.png" />
    </div>
    <article>
      <h1>着信塗料</h1>
      関東に生きている人。
    </article>
  </div>
</template>

<script>
export default{
  name: "index"
}
</script>
<style scoped>
article{

  margin-left: 10px;
}
.twicon{
  position:relative;
  top:-12vw;
  margin-bottom: -12vw;;
  /* justify-content: space-around; */
}
.twicon img{
  width:30%;
  height:auto;
  
  /* margin:20px 25% 0px 27%; */

  border-radius: 50%;
  border-style: solid;
  border-color: white;
  border-width: 5px;
	box-sizing: border-box;
  
}
</style>