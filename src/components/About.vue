<template>
  <div class="about">
    <img id="twicon" src="@/assets/imgs/twicon.png">
    <table class="selfint">
      <tr><th>名前</th>
      </tr><tr><td>着信塗料、みかんの波、neeなど</td></tr>
      <tr><th>触った言語</th>
      </tr><tr><td><span>C++, Java, JavaScript, Python, Rust</span><wbr><span>など</span></td></tr>
      <tr><th>興味分野</th>
      </tr><tr><td>動画編集、お絵描き、作曲、競プロ、音声合成など</td></tr>
      <tr><th>好きなもの</th>
      </tr><tr><td>VOICEROID、猫、パソコン、自室、ゆるいもの、不思議な雰囲気のもの、
      ちょっと暗いもの、かわいいものなど</td></tr>
    </table>
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
.selfint span{
  white-space: nowrap;
}
.selfint{
  margin:5px 10%;
}
.selfint th{
  background-color: lavender;
}
#twicon{
  margin:0 35%;
  max-width:30%;
  height:auto;
  border-radius: 5%;;
}
</style>
