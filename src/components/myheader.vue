<template>
  <div>
    <div id=header>
        <router-link id="header_title" to="./"><div>発信みかん園</div></router-link>
        <router-link class="header_link" to="./about"><div>About</div></router-link>
    </div>
    <img class=uuuu src="@/assets/imgs/uuuu2.png" />
  </div>
</template>

<style scoped>
#header {
    position:fixed;
    z-index:2;
    top:0;
    width:100%;
    display: flex;
    background-color:rgb(34, 117, 185);
    color:rgb(255, 255, 255);
    /* height:3em; */
}
#header_title{
    font-family: "Londe B";
    font-size: 1.8em;
    flex-grow:0;
    width:7em;
    min-width: 7em;
    margin:4px 0 6px 0;
    text-decoration: none;
    color:rgb(240, 240, 240);
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    cursor:pointer;
    /* display:flex;
    flex-direction: column; */
    /* margin-top: 20px; */
}
.header_link{
    flex-grow:0;
    /* display:block; */
    width: 4em;
    display:flex;
    flex-direction: column;
    
    line-height: 1em;
    text-align: center;

    text-decoration: none;
    color:rgb(231, 231, 231);
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    cursor:pointer;
}
.header_link div{
    margin:auto;
    position: relative;
}
.header_link:hover{
    background-color: rgba(230, 230, 230, 0.24);
    color:white;
}
.uuuu{
  width:100%;
  height: 30vw;
  object-fit: cover;
  object-position: 0% 0%;
}
</style>