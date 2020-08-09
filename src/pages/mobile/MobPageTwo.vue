<template>
<div id="page">
<div class='page-overlay' ref="bgaction" :style="{ height : minHeight + 'px'}">
<div id='page-content'>
  <div class='section section-0 margin-center'>
  <WebSlider />
  <div class='text-module q-pa-md'>
    <h4 class="q-my-sm">Responsive Design anywhere you wish</h4>
    <p>A lot of people says that a responsive design is a good practice in the technology. Whether it's on a desktop, tablet or phone. We can create a better design experience for you. Need to see more?</p>
    <p>Give a tap on the button and take a tour from our projects that we have created to our clients</p>
  </div>
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

</style>
<script>

import WebSlider from 'components/WebSlider'

export default {
  name: 'MobPageTwo',
   components : {
      WebSlider
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
