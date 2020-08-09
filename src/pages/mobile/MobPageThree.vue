<template>
<div id="page">
<div class='page-overlay' ref="bgaction" :style="{ height : minHeight + 'px'}">
<div id='page-content'>
  <div class='section section-0 margin-center'>
  <div class='module module-image margin-center page-3'>
    <q-img src="/images/webpage/3D Illustration-Product Development-Skin-01.png" :transition="'slide-left'" >
      <template v-slot:loading>
        <q-spinner-gears color="white" />
      </template>
   </q-img>
  </div>
  <div class='module text-module q-pa-md q-mx-auto'>
    <h4 class="q-my-sm">We Design Stuff to create better experience</h4>
    <p>We are a group of young creative individuals who has passion in creating better experiences for our clients as we see to be better creators for them. What to know more about us?</p>
    <p>Check our portfolio through these links:</p>
    <div class='widget widget-2 text-left social-icons'>  
      <div class='module-icons'>
        <i class="lab la-facebook"></i>
        <i class="lab la-instagram"></i>
      </div>
    </div>
  </div>
  </div>
</div>

  </div>
</div>

</template>

<style scoped>

#page .page-overlay{
  background-image: url("/bgimages/red-about-us-mobile.png");
  background-repeat:no-repeat;
  background-size:cover;
  position:relative;
  padding-top:15%;
}

.text-module{
  font-size:17px;
}

.text-module h4{
  font-size: 20pt;
  font-weight: bold;
}

.section .module-image{
  width:100%;
}

.social-icons{
  font-size:20pt;
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
    },
    setNav : {
      type : Function,
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
  created : function(){
    this.setNav('PageThree')
  },
  methods : {
 
  }
}
</script>
