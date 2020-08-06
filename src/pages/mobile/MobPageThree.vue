<template>
<div id="page">
<div class='page-overlay WebIndex' ref="bgaction" :style="{ height : minHeight + 'px'}">
<div class='overlay-bg'></div>
<div id='page-content'>
  <div class='section section-0 margin-center'>
  		<PageThree />
  </div>
</div>

<footer id='footer'>
    <div class='footer-wrapper'>
      <div class='widget widget-0 text-center'>        
        <a @click="actionNav('MobPageOne')"  class='arrow'><i class="las la-angle-double-down"></i></a>
      </div>
    </div>
  </footer>
  </div>
</div>
</template>

<style scoped>
#page {
  background-color:#300089;
  position:relative;
  width: 100%;
  overflow-x: hidden;
}

#page .page-overlay{
  background-image: url("/images/webpage/flower-pattern-1920x1080.png");
  background-repeat:no-repeat;
  background-size:cover;
  position:relative;
  padding:30px;
}

#page .page-overlay .overlay-bg{
  background:radial-gradient(circle, rgba(44,2,114,0.5) 0%, rgba(44,2,114,0.95) 50%);
  position:absolute;
  content:"";
  width:100%;
  height:100%;
  top:0px;
  left:0px;
}

#page .page-overlay .overlay-bg.on-enter-bg{
  opacity : 0;
}

#page .page-overlay.WebIndex{
    background-image: url("/images/webpage/flower-pattern-home.png");
}

#page .page-overlay.PageTwo{ 
    background-image: url("/images/webpage/flower-pattern-01.png");
}


#page .page-overlay.PageThree{ 
    background-image: url("/images/webpage/flower-pattern-1920x1080.png");
}

#page-content{
  position:relative;
}

.section{
  max-width:80%;
  width:100%;
  position:relative;
  height:500px;
}

.section .module{
  padding:0px;
  width: 80%;
}

.margin-center{
  margin:auto;
}

#header{
    position: relative;
    height: 130px;
    display: block;
    padding: 20px;
}

#header .logo{
  display: block;
    width: 130px;
}

#header .logo img{
  width: 100%;
    height: 100%;
}

#left-sidebar{
  position:fixed;
  top: 40%;
  z-index: 9;
}

#right-sidebar{
    position: absolute;
    right: -500px;
    top: 0px;
    width: 500px;
    height: 100%;
    transition:right 1s;
    background-color: #484848;
}

#right-sidebar .menu-wrapper{
    position: relative;
}



#right-sidebar.active-nav{
    right:0px;
} 

.menu-wrapper .menu-action{
  color:white;
  font-size:30pt;
}

.d-flex{
  display:flex;
}

.justify-end{
  justify-content:flex-end;
}

.flex-wrap{
  flex-wrap:wrap;
}

.text-center{
  text-align:center;
}

#footer{
  position:relative;
  padding: 12px;
}

#footer .arrow{
  color: white;
    font-size: 30pt;
    position: fixed;
    bottom: 0px;
}

</style>
<script>
import PageThree from 'pages/webpage/PageThree.vue'
export default {
  name: 'MobPageThree',
   components : {
      PageThree
  },
  props : {
    actionNav : {
      type : Function,
      default : function(page){
        
      }
    },
    minHeight : {
      type : Number
    }
  },
  data () {
  return {
      is_page : 'MobPageThree',
      nav : 'MobPageThree',
      animejs : null,
      clientH : 0
    }
  },
  methods : {
 
  }
}
</script>
