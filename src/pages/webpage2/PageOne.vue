<template>
<div class='page-overlay' :style="{ minHeight : minHeight + 'px'}">
<div id='page-content'>
  <div class='section section-0 margin-center'>
      <div class='module margin-center'>
      <div class='module-image margin-center page-1'>
        <img src="/images/webpage/Hyacinth-Logo-Official-white.png" />
      </div>  
      <div class='text-module text-center'>
        <p>Creating a whole new experience</p>
        <p>for you and your business</p>
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
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section .module-image{
    width:100%;
  }

  .page-overlay {
    background-image: url("/bgimages/purple-home-mobile.png");
    background-repeat:no-repeat;
    background-size:cover;
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
    this.setNav('PageOne')
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