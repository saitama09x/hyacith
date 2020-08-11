<template>
<div id="page">
<div class='page-overlay' ref="bgaction" :style="{ height : minHeight + 'px'}">
<div id='page-content'>
  <div class='section section-0 margin-center'>
    <MobileContentSlider2 />
  </div>
</div>

  </div>
</div>

</template>

<style scoped>

.page-overlay{
  background-image: url("/bgimages/blue-projects-mobile.png");
  background-repeat:no-repeat;
  background-size:cover;
  padding-top:15%;
}

.section h4{
  padding:0px;
}

.section .text-module{
    font-size:17px;
}

#page-content{
  padding-top:30%; 
}

</style>
<script>

import WebSlider from 'components/WebSlider'
import MobileContentSlider2 from 'components/mobile/MobileContentSlider2'

export default {
  name: 'MobPageTwo',
   components : {
      WebSlider,
      MobileContentSlider2
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
      is_page : 'MobPageTwo',
      nav : 'MobPageTwo',
      animejs : null,
      clientH : 0
    }
  },
  created : function(){
    this.setNav('PageTwo')
  },
  methods : {
   
  }
}
</script>
