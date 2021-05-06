<template>
  <div class="about">
    <img id="twicon" src="@/assets/imgs/twicon.png">
    <ul>
      <li>名前：<br>着信塗料、みかんの波、neeなど</li>
      <li>レート単調減少系水コーダー</li>
      <li>触った言語：<br>C++, Java, JavaScript, Python, Rustなど</li>
      <li>興味分野：<br>動画編集、お絵描き、作曲、競プロ、音声合成など</li>
      <li>好きなもの：<br>VOICEROID、猫、パソコン、自室、ゆるいもの、
          不思議な雰囲気のもの、ちょっと暗いもの、かわいいものなど</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "about"
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about{
  margin-top:5px;
  margin-left: 8px;
}
#twicon{
  margin:0 35%;
  max-width:30%;
  height:auto;
  border-radius: 5%;;
}
</style>
