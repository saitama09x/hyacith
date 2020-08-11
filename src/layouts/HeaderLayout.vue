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
    <div class='col menu-wrapper d-flex justify-end'>
      <a class='menu-action'><i class="las la-bars icon-menu" @click="openMenu"></i></a>
    </div>
  </div>
  <MobileTab v-if="$q.platform.is.mobile" />
</header>
</template>
<style scoped>

@media(max-width:980px){
  #header{      
      padding:0px 24px;
      background-color:white;
  }
  .menu-wrapper .menu-action{
    color:gray;
    display:flex;
    align-items:center;
  }
}

</style>
<script>
import MobileTab from 'components/MobileTab.vue'
import { dom } from 'quasar'
const { style, height, width } = dom

export default {
  name : 'Header',
  components : {
      'MobileTab' : MobileTab,
  },
  mounted : function(){
    this.$nextTick(function () {
        console.log(this.$refs.header.clientHeight)
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