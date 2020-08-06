<template>
<div class='menu-wrapper'>
	<span class='close-menu'><i class="las la-times" @click="closeMenuOut($event)"></i></span>
	<div class='menus'>
		<ul id="menu">
			<li class='menu-item'><router-link to="/">Home</router-link></li>
			<li class='menu-item'><router-link to="/products">Products</router-link></li>
			<li class='menu-item'><a>Blogs</a></li>
			<li class='menu-item'><a>Contact Us</a></li>
		</ul>
	</div>
</div>
</template>
<style scoped>

#menu li{
	list-style:none;
	margin-bottom:40px;
}
#menu li a{
  color:white;
  font-size:20px;
  text-decoration: none;
}
.close-menu{
	font-size: 20px;
    color: white;
    right: 36px;
    display: flex;
    justify-content: flex-end;
    margin: 30px;
}
a:hover{
	cursor:pointer;
}
</style>
<script>
export default {
	name : 'WebMenuNav',
	props : {
		closeMenuOut : {
			type : Function
		}
	}
}
</script>