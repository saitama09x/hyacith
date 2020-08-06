<template>
<div class='module'>
	<div class='text-module'>
		<h1>We provide excellent services with professional practice.</h1>
	</div>
	<div class='d-flex flex-wrap'>
		<div class='col'>
			<div class='image-module'>
				<img src="/icons/Data-research-icon.png" />
			</div>
			<div class="text-module">
				<h1>User Interface Design</h1>
				<p>We make our own interface design from scratch. We give better insights in designing, whether on web or in app</p>
			</div>
		</div>
		<div class='col'>
			<div class='image-module'>
				<img src="/icons/UX-icon.png" />
			</div>
			<div class="text-module">
				<h1>User Experience Design</h1>
				<p>We make our own interface design from scratch. We give better insights in designing, whether on web or in app</p>
			</div>
		</div>
		<div class='col'>
			<div class='image-module'>
				<img src="/icons/UX-icon.png" />
			</div>
			<div class="text-module">
				<h1>User Experience Design</h1>
				<p>We make our own interface design from scratch. We give better insights in designing, whether on web or in app</p>
			</div>
		</div>
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
.d-flex{
	display:flex;
}

.flex-wrap{
	flex-wrap:wrap;
}

</style>
<script>
export default {
	name : 'PageFour',
	props : {
		setNav : {
			type : Function,
			default : function( page ){
				
			}
		}
	},
	created : function(){
		this.setNav('PageFour')
	},
}
</script>