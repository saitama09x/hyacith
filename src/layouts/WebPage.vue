<template>
<q-layout>
<q-page-container style='padding-top:0px'>
<div id="page" @click="closeMenuOut($event)">
<div class='page-overlay WebIndex' ref="bgaction">
<div class='overlay-bg on-enter-bg'></div>
<div class='overlay-bg on-leave-bg'></div>

<header id='header'>
  <div class='container row'>
    <div class='col logo-wrapper'>
      <span class='logo'>
        <a class='logo-link'>
          <img src="/images/webpage/Hyacinth-Logo-Official-white.png" />
        </a>
      </span>
    </div>
    <div class='col menu-wrapper d-flex justify-end'>
      <a class='menu-action'><i class="las la-bars icon-menu" @click="openMenu"></i></a>
    </div>
  </div>
</header>

<div id="left-sidebar">
  <WebNav :is_page="is_page" :actionNav="actionNav" />
</div>

<div id='page-content'>
  <div class='section section-0 margin-center'>

<transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:after-enter="afterEnter"
    v-on:before-leave="beforeLeave"
    v-on:leave="leave"
    v-on:after-leave="afterLeave">
  >
<!-- <router-view :setNav="navigation" ></router-view> -->
  <components v-bind:is="nav" :setNav="navigation" />

</transition>

  </div>
</div>

<div id='right-sidebar' class='' :class="MenuActive">
  <WebMenuNav :closeMenuOut="closeMenuOut"/>
</div>

<footer id='footer'>
    <div class='footer-wrapper'>
      <div class='widget widget-0 text-center'>        
        <a @click="actionNav('PageTwo')"  v-if="is_page=='WebIndex'" class='arrow'><i class="las la-angle-double-down"></i></a>
        <a @click="actionNav('PageThree')" v-if="is_page=='PageTwo'" class='arrow'><i class="las la-angle-double-down"></i></a>
        <a @click="actionNav('WebIndex')"  v-if="is_page=='PageThree'" class='arrow'><i class="las la-angle-double-down"></i></a>
        <a @click="actionNav('PageFour')"  v-if="is_page=='PageFour'" class='arrow'><i class="las la-angle-double-down"></i></a>
      </div>
    </div>
  </footer>
  </div>
</div>
</q-page-container>
</q-layout>
</template>
<style scoped>
#page {
  background-color:#300089;
  position:relative;
  width: 100%;
  overflow-x: hidden;
}

#page .page-overlay{
  background-image: url("/bgimages/purple-home.png");
  background-repeat:no-repeat;
  background-size:cover;
  position:relative;
  padding:30px;
}

/*#page .page-overlay .overlay-bg::before{
    content:"";
    position:absolute;
    background: rgb(236,236,236);
    background: radial-gradient(circle, rgba(236,236,236,0.45) 0%, rgba(140,198,64,0) 50%);
    width: 100%;
    height: 100%;
    background-size: 67%;
    background-repeat: no-repeat;
    background-position: center;
}

#page .page-overlay .overlay-bg{
  background:radial-gradient(circle, rgba(44,2,114,0.5) 0%, rgba(44,2,114,0.95) 50%);
  position:absolute;
  content:"";
  width:100%;
  height:100%;
  top:0px;
  left:0px;
}*/

#page .page-overlay .overlay-bg{
    background-size: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
}
    
#page .page-overlay .overlay-bg.on-enter-bg{
  opacity : 0;
}

/*#page .page-overlay.WebIndex{
    background-image: url("/bgimages/purple-home.png");
}

#page .page-overlay.PageTwo{ 
    background-image: url("/bgimages/green-services.png");
}
  

#page .page-overlay.PageThree{ 
    background-image: url("/bgimages/red-about-us.png");
}*/

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
    width: 200px;
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
import WebIndex from 'pages/webpage/index.vue'
import PageTwo from 'pages/webpage/PageTwo.vue'
import PageThree from 'pages/webpage/PageThree.vue'
import PageFour from 'pages/webpage/PageFour.vue'
import WebNav from 'components/WebNav.vue'
import WebMenuNav from 'components/WebMenuNav.vue'

export default {
  name: 'WebPage',
  components : {
  	  'WebIndex' : WebIndex,
  	  'PageTwo' : PageTwo,
      'PageThree' : PageThree,
      'PageFour' : PageFour,
      'WebNav' : WebNav,
      'WebMenuNav' : WebMenuNav
  },
  data () {
	return {
		is_page : 'WebIndex',
      nav : 'WebIndex',
      animejs : null,
      isMenuOpen : false,
      prevbg : "",
      route : ''
	 }
  },
  computed : {
  		MenuActive : function(){
          return {
              'active-nav' : this.isMenuOpen
          }
      }
  },
  methods : {
      actionNav : function(page){
          this.nav = page
      },
  	  navigation : function(page){
  			 this.is_page = page
  	  },
      openMenu : function(){
          if(this.isMenuOpen == false){
              this.isMenuOpen = true
          }else{
              this.isMenuOpen = false
          }
      },
      closeMenuOut : function(e){
          var arr = new Array()
          var _class = e.target.classList
          for(var e in _class){
              if(typeof _class[e] == 'string'){
                arr.push(_class[e])
              }
          }

          if(arr.indexOf('active-nav') == -1 && 
              arr.indexOf('menu-action') == -1 && arr.indexOf('menu-item') == -1 && 
              arr.indexOf('icon-menu') == -1){

            if(this.isMenuOpen){
                this.isMenuOpen = false
            }  
          }
      },
      beforeEnter: function (el) {

            el.style.position = "absolute"
            el.style.top = "0px"
            el.style.opacity = "0"
            var _child = this.$refs.bgaction.childNodes;
            _child[0].style.opacity = 0.5
           if(this.is_page == "WebIndex"){
             el.style.transform = "translateX(100px)"
             _child[0].style.left = "50px"
           }
           else if(this.is_page == "PageTwo"){
             el.style.transform = "translateX(-100px)"
           } 
           else if(this.is_page == "PageThree"){

           }
      },
      
      enter: function (el, done) {
          var _el = this.$refs.bgaction
          var _elchild = this.$refs.bgaction.childNodes
          var bgColor = ""
          var translateX = 0;
          var opacity = 1
          var posx = 0;
          if(this.is_page == "WebIndex"){
              _el.classList.remove('PageTwo')
              _el.classList.remove('PageThree')
              _el.classList.add('WebIndex')
              bgColor = 'url("/bgimages/purple-home.png")'
              translateX = 0;
          }
          else if(this.is_page == "PageTwo"){
              _el.classList.remove('PageThree')
              _el.classList.remove('WebIndex')
              _el.classList.add('PageTwo')
              bgColor = 'url("/bgimages/green-services.png")'
              translateX = 0;
          }
          else if(this.is_page == "PageThree"){
              _el.classList.remove('PageTwo')
              _el.classList.remove('WebIndex')
              _el.classList.add('PageThree')
              bgColor = 'url("/bgimages/red-about-us.png")'
          }

          _elchild[0].style.backgroundImage = bgColor

          this.animejs
          .add({
             targets: _elchild[0],
             opacity : 1,
             left : 0,
          }, '-=750')

          this.animejs.add({
            targets: el,
            translateX: translateX,
            opacity : 1,
            complete: function(anim) {
                  done() 
            }
          }, '-=500')
      },
      
      afterEnter : function (el) {
           el.style.position = "unset"
           el.style.top = "0px"
      },

      beforeLeave: function (el) {
          el.style.transform = "translateX(0px)"
          var _child = this.$refs.bgaction.childNodes
          _child[1].style.opacity = 1
          _child[1].style.left = "0px"
          _child[1].style.backgroundImage =  _child[0].style.backgroundImage
      },

      leave: function (el, done) {
          var _el = this.$refs.bgaction
          var _elchild = this.$refs.bgaction.childNodes

          var translateX = 0;
          var posx = 0
          if(this.is_page == "WebIndex"){
              translateX = -100
              posx = -50
          }
          else if(this.is_page == "PageTwo"){
              translateX = 100
              posx = 50
          }
          else if(this.is_page == "PageThree"){
              translateX = 0
          }

          this.animejs
          .add({
              targets : _elchild[1],
              left : posx,
          }, "-=200")
          .add({
              targets : _elchild[1],
              opacity : 0
          }, "-=500")
          .add({
            targets: el,
            translateX: translateX,
            opacity : 0,
            complete: function(anim) {
                done()
            }
          }, "-=200")
      },
      afterLeave : function (el) {
          this.animejs = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
          });
      }
  },
  mounted : function(){
  	this.$nextTick(function () {
        this.animejs = anime.timeline({
          easing: 'easeOutExpo',
          duration: 750
        });

        var _elchild = this.$refs.bgaction.childNodes
        _elchild[0].style.backgroundImage = 'url("/bgimages/purple-home.png")'


  	})
  },
  updated : function(){
  	
  	this.$nextTick(function () {
        this.route = this.$route.name
  	})

  }
}
</script>