<template>
<header id='header'>
  <div class='container row'>
    <div class='col logo-wrapper'>
      <span class='logo'>
        <a class='logo-link'>
          <img :src="logo" />
        </a>
      </span>
    </div>
    <div class='col menu-wrapper d-flex justify-end'>
      <a class='menu-action'><i class="las la-bars icon-menu" @click="openMenu"></i></a>
    </div>
  </div>
</header>
</template>
<style scoped>

@media(max-width:980px){
  #header{
      padding:24px;
  }
}

</style>
<script>
export default {
  name : 'Header',
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