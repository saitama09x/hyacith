<template>
<WebPage3 v-if="$q.platform.is.desktop"/>
<MobilePage v-else-if="$q.platform.is.mobile"/>
</template>
<script>
import WebPage3 from './WebPage3.vue'
import MobilePage from './MobilePage.vue'
import arangojs from 'arangojs'

export default {
  name: 'IndexLayout',
  components : {
  	"WebPage3" : WebPage3,
  	"MobilePage" : MobilePage
  },
  data () {
  	return {

  	}
  }
}
</script> 