<template>
<div class='q-pa-md slider-item'>
  <div class="section">
    <div class='module-image q-my-md q-mx-auto'>
        <slot name='slider-image'></slot>
    </div>
  	<div class='text-module text-center'>
  			<slot name='slider-text'></slot>
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
  width:100px;
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
  name : 'MobileSliderPage', 
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