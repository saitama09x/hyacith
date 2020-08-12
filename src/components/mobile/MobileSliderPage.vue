<template>
<div class='slider-item'>
  <div class="row">
    <div class='col-md-12 col-xs-12 text-center item-one'>
        <slot name='slider-image'></slot>
    </div>
  	<div class='text-center col-md-12 col-xs-12 text-subtitle1 item-two'>
  			<slot name='slider-text'></slot>
  	</div>
  </div>
</div>
</template>
<style scoped>

.q-img{
  max-height :350px;
  max-width:300px;
}

@media (max-width:980px) and (min-width:720px) and (orientation:landscape) {

  .slider-item .col-md-12{
     width:50%;
  }

  .q-img{
    width:50%;
  }

  .slider-item .item-one{
    order:2;
  }

  .slider-item .item-two{
    order:1;
    display: flex;
    align-items: center;
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