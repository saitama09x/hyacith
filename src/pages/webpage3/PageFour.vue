<template>
<div class='page-overlay WebIndex' :style="{ minHeight : minHeight + 'px'}">

<div id='page-content'>
<div class='section section-0 q-pa-md margin-center'>
<h1 class='section-title'>{{content.title}}</h1>
<div class="row row-modules margin-center" >
<div class='col' v-for="col in content.cols">
<q-card class="service">
<q-img :src="col['featured-image']" />
<q-card-section>
<div class="text-h6">{{col.title}}</div>
<div class='text-module' v-html="col.text"></div>
</q-card-section>
</q-card>
</div>
</div>
</div>
</div>

</div>

</template>

<style scoped>

#page .page-overlay{
  background-image: url("/bgimages/green-services.png");
  background-repeat:no-repeat;
  background-size:cover;
  position:relative;
  padding:30px;
}

#page-content{
  padding-top:5%;
}

.section .row-modules{
  width:100%;
  max-width:100%;
}

.service.q-card{
  background:#fff0;
  box-shadow:unset;
  text-align:center;
}

.service.q-card .q-img{
  width:30%;
}

.service.q-card .text-h6{
  font-weight:bold;
  color:#ffff00;
}

.text-module{
  font-size: 17px;
  color:white;
}

.section.section-0 {
  width:75%;
}

@media(max-width:980px){
  .section .module-image{
    width:100%;
  }
}

</style>
<script>
import WebNav from 'components/WebNav2.vue'
import WebMenuNav from 'components/WebMenuNav.vue'
import Header from 'layouts/HeaderLayout.vue'
import Footer from 'layouts/FooterLayout.vue'

export default {
  name : 'PageFour',
   components : {
      'WebNav' : WebNav,
      'WebMenuNav' : WebMenuNav,
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
    content : {
      type : Object
    },
    initIndexPage : {
        type : Function,
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
    minHeight : 0,
  },
  methods : {
      goToPage : function(){
          this.actionNav('PageFive', 5)
      }
  },
  created : function(){
    this.setNav('PageFour', 4)    
  },
  mounted : function(){

    this.$nextTick(function () {

    });
  }
}
</script>