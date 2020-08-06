<template>
<q-layout class='product-layout'>
<q-page-container>
<Header :openMenu="openMenu" :logo='"/images/Logo/Hyacinth Logo Official.png"'/>

<router-view />

<div id='right-sidebar' class='' :class="MenuActive">
  <WebMenuNav :closeMenuOut="closeMenuOut"/>
</div>

<Footer :route="route" />

</q-page-container>
</q-layout>
</template>
<style scoped>

#header{
	position:unset;
	height:auto;
}

.menu-wrapper .menu-action{
	color:gray;
}
#right-sidebar{
	position:fixed;
}


</style>
<script>
import Header from 'layouts/HeaderLayout.vue'
import Footer from 'layouts/FooterLayout.vue'
import WebMenuNav from 'components/WebMenuNav.vue'

export default {
  name: 'Product',
  data () {
  	return {
  		isMenuOpen : false,
  		tab : 'all',
  		route : '',
  	}
  },
  components : {
      'Header' : Header,
      'Footer' : Footer,
      'WebMenuNav' : WebMenuNav,
  },
  computed : {
  		MenuActive : function(){
          return {
              'active-nav' : this.isMenuOpen
          }
      }
  },
  methods : {
  	openMenu : function(){
          if(this.isMenuOpen == false){
              this.isMenuOpen = true
          }else{
              this.isMenuOpen = false
          }
     },
     closeMenuOut : function(e){
          var arr = new Array()
          var _class = e.target.classList
          for(var e in _class){
              if(typeof _class[e] == 'string'){
                arr.push(_class[e])
              }
          }

          if(arr.indexOf('active-nav') == -1 && 
              arr.indexOf('menu-action') == -1 && arr.indexOf('menu-item') == -1 && 
              arr.indexOf('icon-menu') == -1){

            if(this.isMenuOpen){
                this.isMenuOpen = false
            }  
          }
      }
  },
  mounted : function(){
  	this.$nextTick(function () {
        this.route = this.$route.name
  	})
  },
}
</script>