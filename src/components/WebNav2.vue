<template>

<div class="navigation">
	<ul id='nav-btns'>
		<li class="nav-item" v-bind:class="{ active : (is_page == 'PageOne') ? true : false }" >
			<a @click="actionNav('PageOne', 1)" ><!-- <i class="las la-circle"></i> --><span class='las'>*</span></a>
		</li>
		<li class="nav-item" v-bind:class="{ active : (is_page == 'PageTwo') ? true : false }" ><a @click="actionNav('PageTwo', 2)" ><!-- <i class="las la-circle"></i> --><span class='las'>*</span></a></li>
		<li class="nav-item" v-bind:class="{ active : (is_page == 'PageThree') ? true : false }" ><a @click="actionNav('PageThree', 3)"><!-- <i class="las la-circle"></i> --><span class='las'>*</span></a></li>
		<li class="nav-item" v-bind:class="{ active : (is_page == 'PageFour') ? true : false }" ><a @click="actionNav('PageFour', 4)"><!-- <i class="las la-circle"></i> --><span class='las'>*</span></a></li>
		<li class="nav-item" v-bind:class="{ active : (is_page == 'PageFive') ? true : false }" ><a @click="actionNav('PageFive', 5)"><!-- <i class="las la-circle"></i> --><span class='las'>*</span></a></li>
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
	    height: 12px;
    	width: 12px;
	    border-radius: 30px;
	   	font-size: 12px;
	   	display:block;	
	}

	#nav-btns .nav-item.active a{
		height: 17px;
    	width: 17px;
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
			default : 'PageOne'
		},
		actionNav : {
			type : Function
		}
	},
	computed : {

	}
}

</script>