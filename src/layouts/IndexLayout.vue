<template>
<WebPage3 v-if="$q.platform.is.desktop"/>
<MobilePage2 v-else-if="$q.platform.is.mobile"/>
</template>
<script>
import WebPage3 from './WebPage3.vue'
import MobilePage2 from './MobilePage2.vue'
import arangojs from 'arangojs'

export default {
  name: 'IndexLayout',
  components : {
  	"WebPage3" : WebPage3,
  	"MobilePage2" : MobilePage2
  },
  data () {
  	return {

  	}
  }
}
</script> 