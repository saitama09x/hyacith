<template>
<header id='header' ref="header" class="fixed-top">
  <div class='container row'>
    <div class='col logo-wrapper'>
      <span class='logo'>
        <a class='logo-link'>
          <q-img :src="logo" />
        </a>
      </span>
    </div>
  </div>
  <MobileTab />
</header>
</template>
<style scoped>

#header{      
    padding:0px 24px;
    background-color:white;
}
.menu-wrapper .menu-action{
  color:gray;
  display:flex;
  align-items:center;
}

#header .logo{
  width:100px;
}

@media screen and (orientation:landscape) {
  #header .logo{
    width:200px;
  }
}


@media (max-width:980px) and (min-width:720px) and (orientation:landscape) {

  #header .logo{
    width:100px;
  }

}
</style>
<script>
import MobileTab from 'components/MobileTab.vue'

export default {
  name : 'HeaderMobile',
  components : {
      'MobileTab' : MobileTab,
  },
  mounted : function(){
    this.$nextTick(function () {
        
    })
  },
  props : {
  	openMenu : {
  		type : Function
  	},
    logo : {
      type : String
    }
  }
}

</script>