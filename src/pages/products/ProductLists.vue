<template>
<div class='module'>
		<div class='row justify-center'>
			<div class='col-md col-xs-8 q-mb-md'>
				<div class="item-wrapper">
					<div class='icon-shape red'></div>
					<div class='image-feat'>
						<router-link :to="{ name : 'ProductDetail' }">
						 <q-img src="/images/webpage/IBC-tablet-mockup.png" :transition="'fade'" spinner-size="82px" :ratio="1"/>

						</router-link>
					</div>
					<div class='item-desc'>
						<h4 class='item-label'>IBC Fuel Logistic</h4>
						<label>Platform:</label>
						<p>Tablet</p>
					</div>
				</div>
			</div>
			<div class='col-md col-xs-8 q-mb-md'>
				<div class="item-wrapper">
					<div class='icon-shape blue'></div>
					<div class='image-feat'>
						<router-link :to="{ name : 'error' }">
						 <q-img src="/images/webpage/medicine-reminder-mockup.png" :transition="'fade'" spinner-size="82px" :ratio="1"/>
						</router-link>
					</div>
					<div class='item-desc'>
						<h4 class='item-label'>IBC Fuel Logistic</h4>
						<label>Platform:</label>
						<p>Tablet</p>
					</div>
				</div>
			</div>
		</div>
<div class='row justify-center'>
		<div class='col-md col-xs-8 q-mb-lg'>
			<div class="item-wrapper">
				<div class='icon-shape red'></div>
				<div class='image-feat'>
					<router-link :to="{ name : 'error' }">
						<q-img src="/images/webpage/IBC-tablet-mockup.png" :ratio="1"/>
					</router-link>
				</div>
				<div class='item-desc'>
					<h4 class='item-label'>IBC Fuel Logistic</h4>
					<label>Platform:</label>
					<p>Tablet</p>
				</div>
			</div>
		</div>
		<div class='col-md col-xs-8 q-mb-lg'>
			<div class="item-wrapper">
				<div class='icon-shape blue'></div>
				<div class='image-feat'>
					<q-img src="/images/webpage/medicine-reminder-mockup.png" :ratio="1"/>
				</div>
				<div class='item-desc'>
					<h4 class='item-label'>IBC Fuel Logistic</h4>
					<label>Platform:</label>
					<p>Tablet</p>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<style scoped>
.item-wrapper{
	position:relative;
}
.item-wrapper .image-feat{
	width:100%;
}

.item-wrapper .image-feat img{
	width:80%;
}

.item-wrapper .item-desc{
	padding-left:9%;
}
.item-desc .item-label{
	font-size: 17pt;
    font-weight: bold;
    color: #4c4b4b;
    line-height: 0px;
}
.item-wrapper .icon-shape{
	width: 0px;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    position: absolute;
    transform: rotate(-40deg);
    top: 10px;
    left: 10px;
}

.item-wrapper .icon-shape.red{
	border-bottom: 15px solid #ed2223;
}

.item-wrapper .icon-shape.blue{
	border-bottom: 15px solid #0179ff;
}

@media screen and (orientation:landscape) {
	.q-img{
		max-height :350px;
  		max-width:300px;
  		width:80%;
	}
}

@media screen and (orientation:portrait) {
	.q-img{
		max-height :400px;
  		max-width:400px;
  		width:80%;
	}
}
</style>
<script>
export default {
  name: 'ProductLists',

}

</script>