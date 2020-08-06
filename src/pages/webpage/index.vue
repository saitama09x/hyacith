<template>
<div>
<div class='module module-image margin-center page-1'>
	<img src="/images/webpage/Hyacinth-Logo-Official-white.png" />
</div>	

<div class='text-module text-center'>
	<p>Creating a whole new experience</p>
	<p>for you and your business</p>
</div>
</div>
</template>
<style scoped>

.section .module-image{
	text-align:center;
	width:55%;
}

.section .module-image img{
	width:100%;
}

.margin-center{
	margin:auto;
}

.text-module{
	font-size: 23px;
	color:white;
}

@media(max-width:980px){
	.section .module-image{
		width:100%;
	}
}

</style>
<script>
export default {
	name : 'WebIndex',
	props : {
		setNav : {
			type : Function,
			default : function( page ){
				
			}
		}
	},
	created : function(){
		this.setNav('WebIndex')
	},
	mounted : function(){

		this.$nextTick(function () {

		});
	}
}
</script>