<template>
<div id="page">
<div class='page-overlay' ref="bgaction" :style="{ height : minHeight + 'px'}">
    <div id='page-content'>
       <div class='section section-0 margin-center'>
            <div class='module module-image margin-center page-3'>
            <q-img src="/images/webpage/3D-characters.png" style="max-height:200px;"/>
            </div>
            <div class='module text-module q-mx-auto'>
            <h4 class='section-title q-my-sm'>Got an idea to work with? <br /> Feel free to contact us.</h4>
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
    </div>
  </div>
</div>

</template>

<style scoped>

#page .page-overlay{
  background-image: url("/bgimages/pink-contact-us-mobile.png");
  background-repeat:no-repeat;
  background-size:cover;
  position:relative;
  padding-top:20%;
}

.text-module{
  font-size:17px;
}

.text-module h4{
  font-size: 20pt;
  font-weight: bold;
}

.section .module-image{
  width:70%;
}

.social-icons{
  font-size:20pt;
}

.text-module strong{
  font-size:15pt;
  color:#ffff00;
}

.section-title{
  font: Bold 40px Roboto;
  color:white;
}


</style>
<script>

export default {
  name: 'MobPageFive',
  components : {
      
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
      is_page : 'MobPageFive',
      nav : 'MobPageFive',
      animejs : null,
      clientH : 0,
      carousel : []
    }
  },
  created : function(){
    this.setNav('PageFive')
  },
  methods : {
 
  }
}
</script>
