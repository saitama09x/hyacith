<template>
<div class='page-overlay' :style="{ minHeight : minHeight + 'px'}">
<div id='page-content'>
<div class='section q-pa-md'>
  <div class="row row-modules margin-center">
    <div class='col'>
    <div class='text-module'>
		<h1>{{content.title}}</h1>
		<div v-html="content.text"></div>
	</div>
	</div>
	<div class='col'>
	<div class='module module-image margin-center page-3'>
      <q-img :src="content.featimg" :transition="'slide-left'" >
        <template v-slot:loading>
          <q-spinner-gears color="white" />
        </template>
     </q-img>
    </div>
    </div>
  </div>
</div>
</div>
</div>
</template>
<style scoped>

#page .page-overlay{
  background-image: url("/bgimages/red-about-us.png");
  background-repeat:no-repeat;
  background-size:cover;
  position:relative;
  padding:30px;
}

#page-content{
  padding-top:5%;
}

.text-module h1{
  font: Bold 50px Roboto;
  line-height: 55px;
}

.text-module{
  font-size:17px;
}

.section .module-image{
    width:100%;
}

@media(max-width:980px){
  .section .module-image{
    width:100%;
  }
}

</style>
<script>
import WebNav from 'components/WebNav2.vue'
import WebMenuNav from 'components/WebMenuNav.vue'
import Header from 'layouts/HeaderLayout.vue'
import Footer from 'layouts/FooterLayout.vue'

export default {
	name : 'PageThree',
	components : {
      'WebNav' : WebNav,
      'WebMenuNav' : WebMenuNav,
      'Header' : Header,
      'Footer' : Footer
  	},
	props : {
	    setNav : {
	      type : Function,
	      default : (page) => {}
	    },
	    is_page : {
	      type : String,
	      default : ''
	    },
      content : {
        type : Object
      },
	    openMenu : {
	      type : Function,
	      default : () => {}
	    },
	    actionNav : {
	      type : Function,
	      default : () => {}
	    },
      MenuActive : {
        type : Object
      },
      closeMenuOut : {
        type : Function
      },
	    minHeight : 0,
	 },
  methods : {
      goToPage : function(){
          this.actionNav('PageFour', 4)
      }
  },
	created : function(){
		this.setNav('PageThree', 3)    
	},
}
</script>