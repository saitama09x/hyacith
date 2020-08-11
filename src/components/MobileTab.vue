<template>
<q-tabs v-model="tab" no-caps class="text-gray" indicator-color="pink-5">
<q-route-tab name="home" icon="las la-home" :to="{ name : 'Home'}"/>
<q-route-tab name="product" icon="las la-pencil-ruler" :to="{ name : 'Products'}" />
<q-route-tab name="product2" icon="las la-info" :to="{ name : 'Home'}"/>
<q-route-tab name="product3" icon="las la-hands-helping" :to="{ name : 'Home'}"/>
<q-route-tab name="product3" icon="las la-phone" :to="{ name : 'Home'}"/>
</q-tabs>
</template>
<script>

export default {
  name : 'MobileTab',
  data () {
  	return {
  		tab : 'home',
  		route : 'Products'
  	}
  },
}
</script>