<template>
<div class='d-flex flex-wrap' v-if="$q.platform.is.desktop">
	<div class='text-module'>
		<h1>Responsive Design anywhere you wish</h1>
		<p>Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, </p>
	</div>
	<div class='module module-image margin-center page-2'>
		<img src="/images/webpage/hyacinth-mockups.png" />
	</div>
</div>
<div class='d-flex flex-wrap' v-else-if="$q.platform.is.mobile">
<WebSlider />
<div class='text-module'>
	<h1>Responsive Design anywhere you wish</h1>
	<p>Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor, Lorem ipsum dolor</p>
</div>
</div>
</template>
<style scoped>

.section .module-image{
	width:50% !important;
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

@media(max-width:980px){
	.text-module h1{
		font-size:25pt;
	}
	.text-module{
		width:100%;
		color:white;
	}
}

</style>
<script>
import WebSlider from 'components/WebSlider'

export default {
	name : 'PageTwo',
	components : {
		WebSlider
	},
	props : {
		setNav : {
			type : Function,
			default : function( page ){
				
			}
		}
	},
	created : function(){
		this.setNav('PageTwo')
	},
}
</script>