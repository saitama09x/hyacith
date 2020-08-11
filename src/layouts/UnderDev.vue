<template>
<q-layout class='product-layout'>
<q-page-container>
<q-page :style-fn="initHeight">
<Header :openMenu="openMenu" :logo="'/images/Logo/Hyacinth Logo Official.png'"/>
<div id="page">
	<div id='page-content'>
		<div class='page-overlay' :style="{ minHeight : clientH + 'px'}">
			<div class='section'>
				<div class='module module-image row justify-center'>
					<q-img src="/images/webpage/3D Illustration-Vision & Mission Skin-01.png"/>
				</div>
				<div class='module text-module text-center'>
					<p>We apologized for the inconvenience, this page is still under development.</p>
					<p>Check back again soon!</p>
					<a class='go-back' @click="goBack"><i class="las la-arrow-circle-left"></i></a>
				</div>
			</div>
		</div>
		</div>
	<div id='right-sidebar' class='' :class="MenuActive">
  		<WebMenuNav :closeMenuOut="closeMenuOut"/>
	</div>
	</div>
</div>
</q-page>
</q-page-container>
</q-layout>
</template>
<style scoped>
#page{
  overflow:hidden;
  background-color:#300089;
  position:relative;
  width: 100%;
}
#page .page-overlay{
  background-image: url("/bgimages/pink-contact-us.png");
  background-repeat:no-repeat;
  background-size:cover;
  position:relative;
  padding:30px;
}

#page .page-overlay{
	padding-top:8%;
}

.section .module{
	width:100%;
}


.section .module .q-img{
	width:50%;
}

.go-back{
	font-size:30pt;
}

@media(max-width:980px){
  #page-content{
    padding-top:20%;
  }

	#page .page-overlay{
	    padding-top: 30%;
	}
	.section .module .q-img{
		width:100%;
	}
}
</style>
<script>
import Header from 'layouts/HeaderLayout.vue'
import WebMenuNav from 'components/WebMenuNav.vue'
export default {
  name : 'UnderDev',
  props : {
  	minHeight : {
  		type : Number
  	},
  },
  components : {
  	Header,
  	WebMenuNav
  },
  computed : {
  	MenuActive : function(){
          return {
              'active-nav' : this.isMenuOpen
          }
      }
  },
  data () {
  	return {
  		clientH : 0,
  		isMenuOpen : false
  	}
  },
  methods : {
  	initHeight : function(offet, height){
        this.clientH = height
    },

    goBack : function(){
    	this.$router.go(-1)
    },
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
      },
  }
}
</script>