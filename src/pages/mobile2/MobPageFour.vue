<template>
<div id="page">
<div class='page-overlay' ref="bgaction" >
    <div id='page-content'>
      <div class='row content-center items-center' :style="{ minHeight : minHeight + 'px'}">
       <div class='col-md-12 col-xs-12'>
          <div class='module text-module q-mx-auto'>
              <h4 class='text-center'>{{content.title}}</h4>
          </div>
      </div>
      <div class='col-md-12 col-xs-12'>
          <MobileContentSlider :carousel="content.cols" />
      </div>
      </div>
    </div>
  </div>
</div>

</template>

<style scoped>

#page-content{
  height: 100%;
  width: 100%;
}

#page .page-overlay{
  background-image: url("/bgimages/green-services-mobile.png");
  background-repeat:no-repeat;
  background-size:cover;
  position:relative;
}

.text-module{
  font-size:17px;
}

.text-module h4{
  font-size: 20pt;
  font-weight: bold;
  margin:0px;

}

.section .module-image{
  width:100%;
}

.social-icons{
  font-size:20pt;
}

@media screen and (orientation:landscape) {
  .text-module h4{
    padding-top:10%;
  }
}

@media (max-width:980px) and (min-width:720px) and (orientation:landscape) {
.text-module h4{
  padding-top:15%;
}

}
</style>
<script>

import MobileContentSlider from 'components/mobile/MobileContentSlider'

export default {
  name: 'MobPageFour',
  components : {
      MobileContentSlider
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
    },
    content : {
        type : Object
    }
  },
  data () {
  return {
      is_page : 'MobPageThree',
      nav : 'MobPageThree',
      animejs : null,
      clientH : 0,
      carousel : []
    }
  },
  created : function(){
    this.setNav('PageFour', 4)
  },
  methods : {
 
  }
}
</script>
