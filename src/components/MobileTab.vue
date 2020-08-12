<template>
<q-tabs v-model="tab" no-caps class="text-gray" indicator-color="pink-5" :class='"mobile-tabs"'>
<q-route-tab name="home" icon="las la-home" :to="{ name : 'Home'}"/>
<q-route-tab name="product" icon="las la-pencil-ruler" :to="{ name : 'Products'}" />
<q-route-tab name="product2" icon="las la-info" :to="{ name : 'Home'}"/>
<q-route-tab name="product3" icon="las la-hands-helping" :to="{ name : 'Home'}"/>
<q-route-tab name="product3" icon="las la-phone" :to="{ name : 'Home'}"/>
</q-tabs>
</template>
<style lang="scss">
@media screen and (orientation:landscape) {

  .mobile-tabs .q-tab__icon{
    	font-size: 35px;
  }
  
  .mobile-tabs .q-tabs__content--align-center{
    	justify-content: space-around;
  }
}
@media (max-width:980px) and (min-width:720px) and (orientation:landscape) {

  .mobile-tabs .q-tab__icon{
    	font-size: 24px;
  }

}
</style>
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