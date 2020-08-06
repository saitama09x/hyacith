<template>

<div class='widget widget-1 text-center' v-if="route=='Home'">   
  <a @click="actionNav('PageTwo', 2)" class='arrow' v-if="is_page == 'PageOne'"><i class="las la-angle-down"></i></a>

  <a @click="actionNav('PageThree', 3)" class='arrow' v-if="is_page == 'PageTwo'"><i class="las la-angle-down"></i></a>

  <a @click="actionNav('PageFour', 4)" class='arrow' v-if="is_page == 'PageThree'"><i class="las la-angle-down"></i></a>

  <a @click="actionNav('PageFive', 5)" class='arrow' v-if="is_page == 'PageFour'"><i class="las la-angle-down"></i></a>

  <a @click="actionNav('PageOne', 1)" class='arrow' v-if="is_page == 'PageFive'"><i class="las la-angle-down"></i></a>
</div>

</template>
<style scoped>

.section{
  max-width:100%;
  width:100%;
  position:relative;
}

#footer{
    position: fixed;
    padding: 12px 33px;
    bottom: 0px;
    width: 100%;
    left: 0px;
}

#footer .widget{
  width:33%;
}

#footer .arrow{
  color: white;
  font-size: 30pt;
  bottom: 0px;
}

#footer .copyright-text{
  color:white;
}

#footer .social-icons{
  color:white;
  font-size:30pt;
}
</style>
<script>
export default {
  name : 'WidgetNavArrow',
   props : {
      actionNav : {
          type : Function
      },
      is_page : {
          type : String
      },
      route : {
		  type : String
	  }
  }
}
</script>