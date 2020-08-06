<template>
<div class='page-overlay WebIndex' :style="{ minHeight : minHeight + 'px'}">

<div id='page-content'>

<div class='section section-0 margin-center'>
  <div class="row row-modules margin-center">
    <div class='col'>
    <div class='text-module'>
    <h1 class='section-title'>Got an idea to work with? <br /> Feel free to contact us.</h1>
    <p>Call us for more information</p>
    <p><strong>(033) 500 1749</strong></p>
    <div class='spacing'></div>
    <p>Send us an email for any kind of inquiry</p>
    <p><strong>corporate@summitdefleur.com</strong></p>
    <div class='spacing'></div>
    <p>or visit us at our office</p>
    <p><strong>MCB108 CPBC Centennial Bldg., Fajardo-Arguelles Street, Jaro 5000</strong></p>
    <p><strong>Iloilo City, Philippines</strong></p>
  </div>
  </div>
  <div class='col'>
  <div class='module module-image margin-center page-3'>
    <img src="/images/webpage/3D-characters.png" />
    </div>
    </div>
  </div>
</div>

</div>
</div>
</template>
<style scoped>


#page-content{
  padding-top:5%;
}

.section .module-image{
  text-align:center;
  width:80%;
}

#page .page-overlay{
  background-image: url("/bgimages/pink-contact-us.png");
  background-repeat:no-repeat;
  background-size:cover;
  position:relative;
  padding:30px;
}

.section .module-image img{
  width:100%;
}

.section .row-modules{
  width:100%;
  max-width:100%;
}

.text-module{
  font-size: 17px;
  color:white;
}

.text-module strong{
  font-size:15pt;
  color:#ffff00;
}

.section-title{
  font: Bold 40px Roboto;
  line-height: 55px;
  color:white;
}

.spacing{
  margin:20px 0px;
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
  name : 'PageFive',
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
          this.actionNav('PageOne', 1)
      }
  },
  created : function(){
    this.setNav('PageFive')
  },
  mounted : function(){

    this.$nextTick(function () {

    });
  }
}
</script>
