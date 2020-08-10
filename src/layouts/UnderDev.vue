<template>
<q-layout class='product-layout'>
<q-page-container>
<q-page :style-fn="initHeight">
<div id="page">
	<div class='page-content'>
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
	</div>
</div>
</q-page>
</q-page-container>
</q-layout>
</template>
<style scoped>
#page .page-overlay{
  background-image: url("/bgimages/pink-contact-us.png");
  background-repeat:no-repeat;
  background-size:cover;
  position:relative;
  padding:30px;
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
	#page .page-overlay{
	    padding-top: 30%;
	}
	.section .module .q-img{
		width:100%;
	}
}
</style>
<script>

export default {
  name : 'UnderDev',
  props : {
  	minHeight : {
  		type : Number
  	},
  },
  data () {
  	return {
  		clientH : 0
  	}
  },
  methods : {
  	initHeight : function(offet, height){
        this.clientH = height
    },

    goBack : function(){
    	this.$router.go(-1)
    }
  }
}
</script>