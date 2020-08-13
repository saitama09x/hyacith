<template>
<div id="page">
<div class='page-overlay' ref="bgaction">
<div id='page-content'>
  <div class='row content-center' :style="{ height : minHeight + 'px'}">
  <div class='col-md col-xs-12 text-center top-image'>
    <q-img :src="content.featimg" :transition="'slide-left'">
      <template v-slot:loading>
        <q-spinner-gears color="white" />
      </template>
   </q-img>
  </div>
  <div class='col-md col-xs-12 q-pa-md q-mx-auto text-white'>
    <h4 class="q-my-sm">{{content.title}}</h4>
    <div v-html="content.text"></div>
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

#page-content{
  padding-top:5%;
}

#page .page-overlay{
  background-image: url("/bgimages/red-about-us-mobile.png");
  background-repeat:no-repeat;
  background-size:cover;
  position:relative;
}

.text-module h4{
  font-size: 20pt;
  font-weight: bold;
}

.section .module-image{
  width:90%;
}

.social-icons{
  font-size:20pt;
}

.q-img{
  max-height :350px;
  max-width:400px;
  width:80%;
}

@media (max-width:980px) and (min-width:720px) and (orientation:landscape) {
  h4{
    font-size:15pt;
    line-height:25px;
  }
  #page-content{
    padding-top:0%;
  }
  
  .row{
    padding-top: 14%;
  }

  .row .col-md{
    width:50%;
  }

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
      clientH : 0
    }
  },
  created : function(){
    this.setNav('PageThree', 3)
  },
  methods : {
 
  }
}
</script>
