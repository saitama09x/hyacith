<template>
<div id="page">
<div class='page-overlay WebIndex' ref="bgaction" :style="{ height : minHeight + 'px'}">
<div class='overlay-bg'></div>
<div id='page-content'>
  <div class='section section-0 margin-center'>
  		<PageTwo />
  </div>
</div>

<footer id='footer'>
    <div class='footer-wrapper'>
      <div class='widget widget-0 text-center'>        
        <a @click="actionNav('MobPageThree')" class='arrow'><i class="las la-angle-double-down"></i></a>
      </div>
    </div>
  </footer>
  </div>
</div>

</template>

<style scoped>


</style>
<script>
import PageTwo from 'pages/webpage/PageTwo.vue'
export default {
  name: 'MobPageTwo',
   components : {
      PageTwo
  },
  props : {
    actionNav : {
      type : Function,
      default : function(page){
        
      }
    },
    minHeight : {
      type : Number
    }
  },
  data () {
  return {
      is_page : 'MobPageTwo',
      nav : 'MobPageTwo',
      animejs : null,
      clientH : 0
    }
  },
  methods : {
   
  }
}
</script>
