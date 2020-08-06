<template>

<div class="navigation">
	<ul id='nav-btns'>
		<li class="nav-item" v-bind:class="{ active : (is_page == 'WebIndex') ? true : false }" >
			<a @click="actionNav('WebIndex')" ><!-- <i class="las la-circle"></i> --><span class='las'>*</span></a>
		</li>
		<li class="nav-item" v-bind:class="{ active : (is_page == 'PageTwo') ? true : false }" ><a @click="actionNav('PageTwo')" ><!-- <i class="las la-circle"></i> --><span class='las'>*</span></a></li>
		<li class="nav-item" v-bind:class="{ active : (is_page == 'PageThree') ? true : false }" ><a @click="actionNav('PageThree')"><!-- <i class="las la-circle"></i> --><span class='las'>*</span></a></li>
		<li class="nav-item" v-bind:class="{ active : (is_page == 'PageFour') ? true : false }" ><a @click="actionNav('PageFour')"><!-- <i class="las la-circle"></i> --><span class='las'>*</span></a></li>
	</ul>
</div>

</template>
<style scoped>
	a:hover{
		cursor:pointer;
	}

	#nav-btns .nav-item{
		list-style:none;
		color:white;
		margin-bottom:10px;
	}

	#nav-btns .nav-item a{
		background-color: white;
	    height: 15px;
    	width: 15px;
	    border-radius: 30px;
	   	font-size: 12px;
	   	display:block;	
	}

	#nav-btns .nav-item.active a{
		height: 20px;
    	width: 20px;
	}
	
	#nav-btns .nav-item .las{
    	
	}
	
</style>
<script>
export default {
	name : 'WebNav',
	props : {
		is_page : {
			type : String,
			default : 'WebIndex'
		},
		actionNav : {
			type : Function
		}
	},
	computed : {

	}
}

</script>