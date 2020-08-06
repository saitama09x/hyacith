<template>
<div class="q-px-lg">
<q-breadcrumbs v-if="route=='Products'">
		 <template v-slot:separator>
		    <q-icon
		      size="1.5em"
		      name="chevron_right"
		      color="primary"
		    />
		  </template>
	 <q-breadcrumbs-el label="Product"/>
</q-breadcrumbs>

<q-breadcrumbs v-if="route=='ProductDetail'">
		 <template v-slot:separator>
		    <q-icon
		      size="1.5em"
		      name="chevron_right"
		      color="primary"
		    />
		  </template>
	 <q-breadcrumbs-el label="Product" :to="{ name: 'Products' }"/>
	 <q-breadcrumbs-el label="IBC International Builders"/>
</q-breadcrumbs>
</div>
</template>
<script>
export default {
	name: 'Breadcrumbs',
	props : {
		route : {
			type : String
		}
	}
}
</script>