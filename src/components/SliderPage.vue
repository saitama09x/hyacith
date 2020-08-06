<template>
<div class='q-pa-md slider-item'>
  <div class="row">
  	<div class='col-md'>
  	<div class='text-module'>
  			<slot name='slider-text'></slot>
  	</div>
  	</div>
  	<div class='col-md'>
  	<div class='module-image margin-center page-2'>
  	 		<slot name='slider-image'></slot>
  	</div>
  	</div>
  </div>
</div>
</template>
<style scoped>

.text-module{
  font-size: 17px;
  color:white;
}

.text-module h1{
  font: Bold 40px Roboto;
  line-height: 60px;
}

.section .module{
  padding:0px;
  width: 90%;
}

.d-flex{
  display:flex;
}

.flex-wrap{
  flex-wrap:wrap;
}

.module .col{
	width:33%;
}

.section .module-image{
  text-align:center;
  width:80%;
}

.section .module-image img{
  width:100%;
}

.margin-center{
  margin:auto;
}

@media(max-width:980px){

  .slider-item .col-md:nth-child(1){
      order:2;
  }

  .slider-item .col-md:nth-child(2){
      order:1;
  }
}

</style>
<script>
export default {
  name : 'SliderPage', 
  props : {
  	text : {
  		type : String,
  		default : ''
  	},
  	image : {
  		type : String,
  		default : ''
  	}
  },
  mounted : function(){
	this.$nextTick(function () {

	})	
  }
}
</script>