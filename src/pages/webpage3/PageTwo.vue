<template>
<div class='page-overlay' :style="{ minHeight : minHeight + 'px'}">
<div id='page-content'>
  <div class='section section-0'>
      <ContentSlider :carousel="carousel"/>
  </div>
</div>
</div>
</template>

<style scoped>

#page-content{
  padding-top:5%;
}

.text-module h1{
  font-size:30pt;
  line-height: 40px;
}

.page-overlay{
  background-image: url("/bgimages/blue-projects.png");
  background-repeat:no-repeat;
  background-size:cover;
}

@media(max-width:980px){
  #page-content{
     padding-top:50%; 
  }
  .section .module-image{
    width:100%;
  }
}

</style>
<script>
import WebNav from 'components/WebNav2.vue'
import WebMenuNav from 'components/WebMenuNav.vue'
import ContentSlider from 'components/ContentSlider'
import Header from 'layouts/HeaderLayout.vue'
import Footer from 'layouts/FooterLayout.vue'

export default {
  name : 'PageTwo',
   components : {
      'WebNav' : WebNav,
      'WebMenuNav' : WebMenuNav,
      'ContentSlider' : ContentSlider,
      'Header' : Header,
      'Footer' : Footer
  },
  props : {
    setNav : {
      type : Function,
      default : (page) => {}
    },
    is_page : {
      type : String,
      default : ''
    },
    openMenu : {
      type : Function,
      default : () => {}
    },
    actionNav : {
      type : Function,
      default : () => {}
    },
    MenuActive : {
      type : Object
    },
    closeMenuOut : {
      type : Function
    },
    carousel : {
        type : Array
    },
    minHeight : 0,
  },
  methods : {
      goToPage : function(){
          this.actionNav('PageThree', 3)
      }
  },
  created : function(){
    this.setNav('PageTwo', 2)    
  },
  mounted : function(){
    this.$nextTick(function () {

    });
  }
}
</script>