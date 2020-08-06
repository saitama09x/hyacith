<template>
<div class='d-flex'>
	<div class='text-module'>
		<h1>Responsive Design anywhere you wish</h1>
		<p>Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, </p>
	</div>
<div class='module module-image margin-center page-3'>
	<img src="/images/webpage/3D Illustration-Product Development-Skin-01.png" />
</div>
</div>
</template>
<style scoped>

.section{
	max-width: 80% !important;
}

.section .module-image{
	width:90% !important;
}

.section .module-image img{
	width:100%;
}
.margin-center{
	margin:auto;
}
.text-module h1{
	font-size:30pt;
	line-height: 50px;
	color:white;
}

.text-module{
	width:45%;
	color:white;
}
</style>
<script>
export default {
	name : 'PageThree',
	props : {
		setNav : {
			type : Function,
			default : function( page ){
				
			}
		}
	},
	created : function(){
		this.setNav('PageThree')
	},
}
</script>