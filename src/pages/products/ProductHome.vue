<template>
<q-page-container>
	<q-page>
<div id="page">
	<div class='page-content'>
		<Breadcrumbs :route="route" />
		<div class='section section-0 margin-center'>
			<q-tabs v-model="tab" no-caps class="text-gray" indicator-color="pink-5">
				<q-tab name="all" label="All" />
				<q-tab name="desktop" label="Desktop" />
				<q-tab name="tablet" label="Tablet" />
				<q-tab name="mobile" label="Mobile" />
			</q-tabs>

		</div>

		<div class='section section-1'>
			<div class='module'>
				<div class='row'>
					<div class='col-md col-xs-12'>
						<div class="item-wrapper">
							<div class='icon-shape red'></div>
							<div class='image-feat'>
								<router-link :to="{ name : 'ProductDetail' }">

								 <q-img src="/images/webpage/IBC-tablet-mockup.png" :transition="'fade'" spinner-size="82px" />

								</router-link>
							</div>
							<div class='item-desc'>
								<h4 class='item-label'>IBC Fuel Logistic</h4>
								<label>Platform:</label>
								<p>Tablet</p>
							</div>
						</div>
					</div>
					<div class='col-md col-xs-12'>
						<div class="item-wrapper">
							<div class='icon-shape blue'></div>
							<div class='image-feat'>
								 <q-img src="/images/webpage/medicine-reminder-mockup.png" :transition="'fade'" spinner-size="82px" />
							</div>
							<div class='item-desc'>
								<h4 class='item-label'>IBC Fuel Logistic</h4>
								<label>Platform:</label>
								<p>Tablet</p>
							</div>
						</div>
					</div>
				</div>
		<div class='row'>
				<div class='col-md col-xs-12'>
					<div class="item-wrapper">
						<div class='icon-shape red'></div>
						<div class='image-feat'>
							<img src="/images/webpage/IBC-tablet-mockup.png" />
						</div>
						<div class='item-desc'>
							<h4 class='item-label'>IBC Fuel Logistic</h4>
							<label>Platform:</label>
							<p>Tablet</p>
						</div>
					</div>
				</div>
				<div class='col-md col-xs-12'>
					<div class="item-wrapper">
						<div class='icon-shape blue'></div>
						<div class='image-feat'>
							<img src="/images/webpage/medicine-reminder-mockup.png" />
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
	</div>
</div>
</div>
</q-page>
</q-page-container>
</template>
<style scoped>
#page{
  overflow:hidden;
  position:relative;
  width: 100%;
  margin-bottom: 35px;
}

.section{
	margin:30px;
}

.q-tabs{
	width:30%;
}

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

</style>
<script>
import Breadcrumbs from 'components/widgets/Breadcrumbs.vue'

export default {
  name: 'ProductHome',
   data () {
  	return {
  		tab : 'all',
  		route : 'Products'
  	}
  },
  components : {
  	'Breadcrumbs' : Breadcrumbs
  }
}

</script>