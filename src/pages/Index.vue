<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    />
	<div class="row">
		<div class='col'>
			<p>{{testing}}</p>
		</div>
		<div class='col'>
			 <q-btn color="primary" label="Primary" @click="testMethod()" />
		</div>
	</div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
  	return {
  		testing : "Lorem Ipsum"
  	}
  },

  methods : {
  		testMethod : function(){
  			console.log("testing")
  		}

  }
}
</script>
