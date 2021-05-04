<template>
  <div>
    <img class=uuuu src="../assets/imgs/uuuu2.png" />
    <div class="twicon">
      <img src="../assets/imgs/twicon.png" />
    </div>
    <article>
      <h1>着信塗料</h1>
      関東に生きている人。
    </article>
  </div>
</template>

<script>
export default{
}
</script>
<style scoped>
article{

  margin-left: 10px;
}
.uuuu{
  width:100%;
  height: 30vw;
  object-fit: cover;
  object-position: 0% 10%;
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