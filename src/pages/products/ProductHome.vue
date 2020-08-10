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
			 <q-tab-panels v-model="tab" animated>
        		  <q-tab-panel name="all">
						<ProductLists />
				</q-tab-panel>
				 <q-tab-panel name="desktop">
						<ProductLists />
				</q-tab-panel>
				 <q-tab-panel name="tablet">
						<ProductLists />
				</q-tab-panel>
				 <q-tab-panel name="mobile">
						<ProductLists />
				</q-tab-panel>
			</q-tab-panels>
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

@media(max-width:980px){
	.q-tabs{
		width:100%;
	}

	.section{
		margin:30px 0px;
	}

	.section .module{
		width:100%;
	}
}

</style>
<script>
import Breadcrumbs from 'components/widgets/Breadcrumbs.vue'
import ProductLists from './ProductLists'

export default {
  name: 'ProductHome',
   data () {
  	return {
  		tab : 'all',
  		route : 'Products'
  	}
  },
  components : {
  	'Breadcrumbs' : Breadcrumbs,
  	'ProductLists' : ProductLists
  }
}

</script>