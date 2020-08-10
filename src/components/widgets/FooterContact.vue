<template>

<div class='widget widget-1 text-center' v-if="route=='Products' || route=='ProductDetail'">  
<label>Ready to work?</label>
<h2>Let's create a whole new experience!</h2>
<q-btn rounded color="white" text-color="black" label="More" class="readbtn"/>

</div>

</template>
<style scoped>
.widget-1{
	width:80% !important;
	padding: 70px 20px;
}

.widget-1 h2{
	font-size:30pt;
	color:white;
	margin:0px;
}

.widget-1 label{
	color: white;
    font-size: 17pt;
}

@media(max-width:980px){

  .widget-1 h2{
    font-size: 25pt;
    line-height: 35px;
  }

  .q-btn{
  	margin:20px;
  }
}
</style>
<script>
export default {
	name : 'FooterContact',
	props : {
		route : {
			type : String
		}
	}
}
</script>