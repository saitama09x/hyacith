<template>
<div class='page-overlay' :style="{ minHeight : minHeight + 'px'}">
<div id='page-content'>
  <div class='section section-0 margin-center'>
      <div class='module margin-center'>
      <div class='module-image margin-center page-1'>
        <q-img :src="content.featimg" />
      </div>  
      <div class='text-module text-center' v-html="content.text">          
      </div>
    </div>
  </div>
</div>
</div>
</template>
<style scoped>

#page-content{
  padding-top:14%;
}

.page-overlay{
  background-image: url("/bgimages/purple-home.png");
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

export default {
  name : 'PageOne',
  components : {
      'WebNav' : WebNav,
      'WebMenuNav' : WebMenuNav,
  },
  props : {
    setNav : {
      type : Function,
      default : function( page ){
        
      }
    },
    content : {
        type : Object
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
    minHeight : 0,
  },
  created : function(){
      this.setNav('PageOne', 1)
  },
  methods : {
      goToPage : function(){
          this.actionNav('PageTwo', 2)
      }
  },
  mounted : function(){

    this.$nextTick(function () {

    });
  }
}
</script> 