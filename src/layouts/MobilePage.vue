<template>
<q-layout id="page-layout">
<q-page-container style='padding-top:0px;'>
<q-page :style-fn="initHeight">
<Header :openMenu="openMenu" :logo="'/images/webpage/Hyacinth-Logo-Official-white.png'"/>

<div id="page" @click="closeMenuOut($event)">
<transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:after-enter="afterEnter"
    v-on:before-leave="beforeLeave"
    v-on:leave="leave"
    v-on:after-leave="afterLeave" >

  <components v-bind:is="nav" :actionNav="actionNav" :setNav="navigation" :minHeight="clientH"/>

</transition>
<div id='right-sidebar' class='' :class="MenuActive">
  <WebMenuNav :closeMenuOut="closeMenuOut"/>
</div>

<Footer :actionNav="actionNav" :is_page="is_page" :route="route" />

</div>
</q-page>
</q-page-container>
</q-layout>
</template>

<style scoped>
#page{
  overflow:hidden;
  background-color:#300089;
  position:relative;
  width: 100%;
}

#right-sidebar{
    position: absolute;
    right: -200px;
    top: 0px;
    width: 200px;
    height: 100%;
    transition:right 1s;
    background-color: #484848;
}

#right-sidebar.active-nav{
    right:0px;
}

</style>

<script>

import Header from 'layouts/HeaderLayout.vue'
import Footer from 'layouts/FooterLayout.vue'
import WebMenuNav from 'components/WebMenuNav.vue'
import MobPageOne from 'pages/mobile/MobPageOne.vue'
import MobPageTwo from 'pages/mobile/MobPageTwo.vue'
import MobPageThree from 'pages/mobile/MobPageThree.vue'
import MobPageFour from 'pages/mobile/MobPageFour.vue'
import MobPageFive from 'pages/mobile/MobPageFive.vue'

export default {
  name: 'MobilePage',
  components : {
    'Header' : Header,
    'Footer' : Footer,
    'WebMenuNav' : WebMenuNav,
    'PageOne' : MobPageOne,
    'PageTwo' : MobPageTwo,
    'PageThree' : MobPageThree,
    'PageFour' : MobPageFour,
    'PageFive' : MobPageFive
  },
  data () {
  return {
      is_page : 'PageOne',
      nav : 'PageOne',
      isMenuOpen : false,
      animejs : null,
      clientH : 0,
      layoutH : 0,
      route : 'Home'
    }
  },
   computed : {
      MenuActive : function(){
          return {
              'active-nav' : this.isMenuOpen
          }
      },
  },
  methods : {
     initHeight : function(offet, height){
        this.clientH = height
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
      actionNav : function(page){
          this.nav = page
      },
      navigation : function(page){
         this.is_page = page
      },
      beforeEnter: function (el) {
          // this.clientH = this.$refs.domwrapper.clientHeight;
          el.style.transform = 'translateY(0px)'
      },
      enter: function (el, done) {
        this.animejs
          .add({
             targets: el,
             translateY : (-this.clientH),
             complete: function(anim) {
                  done() 
            }
          }, 100)
      },
      afterEnter : function (el) {
          el.style.transform = 'translateY(0px)'
      },
      beforeLeave: function (el) {
          el.style.transform = 'translateY(0px)'
      },
      leave: function (el, done) {
          this.animejs
          .add({
             targets: el,
             translateY : (-this.clientH),
             complete: function(anim) {
                  done() 
            }
          }, 100)
      },  
      afterLeave : function (el) {
          this.animejs = anime.timeline({
            easing: 'easeOutExpo',
            duration: 750
          });
      }
  },
  beforeUpdate : function(){
      
  },
  mounted : function(){
    this.$nextTick(function () {
        this.animejs = anime.timeline({
          easing: 'easeOutExpo',
          duration: 750
        });
       /* this.layoutH = document.getElementById('page-layout').clientHeight
        console.log(this.layoutH)*/
    })
  },
}
</script>