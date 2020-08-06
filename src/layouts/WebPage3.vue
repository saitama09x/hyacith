<template>
<q-layout class='home-layout'>
<q-page-container style='padding-top:0px'>
<q-page :style-fn="initHeight">
<Header :openMenu="openMenu" :logo="'/images/webpage/Hyacinth-Logo-Official-white.png'"/>
<div id="page" @click="closeMenuOut($event)" :style="{height : clientH + 'px'}">

<div id="left-sidebar">
  <WebNav :is_page="is_page" :actionNav="actionNav" />
</div>

  <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave">
    >

    <components 
      :is="nav" 
      :setNav="navigation" 
      :minHeight="clientH"
      :openMenu="openMenu"
      :actionNav="actionNav"
      :is_page="is_page"
      :MenuActive="MenuActive"
      :closeMenuOut="closeMenuOut"
      :content="_content"
      :carousel="_carousel"
    />

  </transition>



<div id='right-sidebar' class='' :class="MenuActive">
  <WebMenuNav :closeMenuOut="closeMenuOut"/>
</div>

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

#page .page-overlay{
  padding:30px;
}
    
#page .page-overlay .overlay-bg.on-enter-bg{
  opacity : 0;
}


#left-sidebar{
  position:fixed;
  top: 40%;
  z-index: 9;
}


.d-flex{
  display:flex;
}

.flex-wrap{
  flex-wrap:wrap;
}

.text-center{
  text-align:center;
}


</style>

<script>

import Header from 'layouts/HeaderLayout.vue'
import Footer from 'layouts/FooterLayout.vue'
import WebNav from 'components/WebNav2.vue'
import WebMenuNav from 'components/WebMenuNav.vue'
import PageOne from 'pages/webpage3/PageOne.vue'
import PageTwo from 'pages/webpage3/PageTwo.vue'
import PageThree from 'pages/webpage3/PageThree.vue'
import PageFour from 'pages/webpage3/PageFour.vue'
import PageFive from 'pages/webpage3/PageFive.vue'
import { mapActions, mapState  } from 'vuex'

import axios from 'axios'

export default {
  name: 'WebPage3',
  components : {
      'Header' : Header,
      'Footer' : Footer,
      'WebNav' : WebNav,
      'WebMenuNav' : WebMenuNav,
  	  'PageOne' : PageOne,
  	  'PageTwo' : PageTwo,
      'PageThree' : PageThree,
      'PageFour' : PageFour,
      'PageFive' : PageFive
  },
  data () {
  	return {
  		  is_page : 'PageOne',
        nav : 'PageOne',
        animejs : null,
        isMenuOpen : false,
        indexPage : 0,
        indexPage2 : 0,
        slideType : 'slideUp',
        clientH : 0,
        route : 'Home',
        db : null
  	 }
  },
  watch : {
      indexPage2 : function(_new, _old){
          if(_new < _old){
              this.slideType = 'slideDown'
          }else if(_new > _old){
              this.slideType = 'slideUp'
          }
      }
  },
  computed : {
  		MenuActive : function(){
          return {
              'active-nav' : this.isMenuOpen
          }
      },
      ...mapState({
          _content( state ){
              var obj = { text : '' }

              if(state.homeContent != ''){
                var value = state.homeContent.filter((item, index) => {
                    if(index == 0){
                        return true
                    }
                })

                Object.assign(obj, { text : value[0].text })

              }

              return obj.text
          },
          _carousel(state){
              var obj = []
              if(state.carousel != ''){
                  obj = state.carousel
              }
              return obj
          }
      })
  },
  methods : {
       ...mapActions([
          'getHomeContent',
          'getHomeCarousel'
      ]),
      initHeight : function(offet, height){
        this.clientH = height
      },
      initIndexPage : function(index){
        this.indexPage = index
      },
      actionNav : function(page, index){
          this.nav = page
          this.indexPage2 = index
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
        
         if(this.slideType == "slideDown" ){          
            el.style.transform = 'translateY('+(-this.clientH*2)+'px)'
         }
         else{
            el.style.transform = 'translateY(0px)'
         }
      },
      
      enter: function (el, done) {
         var sliderHeight = (-((this.clientH)))
         if(this.slideType == "slideDown" ){
            sliderHeight = (-((this.clientH)))

         }
        
         this.animejs
          .add({
             targets: el,
             translateY : sliderHeight,
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
         var sliderHeight = (-this.clientH)
         if( this.slideType == "slideDown" ){
            sliderHeight = this.clientH
         }

         this.animejs
          .add({
             targets: el,
             translateY : sliderHeight,
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
  created : function(){
      this.getHomeContent()
      this.getHomeCarousel()
  },
  mounted : function(){
  	this.$nextTick(function () {
        
        this.animejs = anime.timeline({
          easing: 'easeOutExpo',
          duration: 750
        });
        
        

  	})
  },
  beforeUpdate : function(){

  },
  updated : function(){
  	
  	this.$nextTick(function () {
       
  	})

  }
}
</script>