<template>
<q-layout class='product-detail-layout'>
<q-page-container>
<div id="page">
	<div class='page-content'>
		<Breadcrumbs :route="route" />
		<div class='section section-0'>
			<div class='module margin-center'>
				<div class='text-module'>
					<h1 class='section-title'>IBC International Builders Corporation</h1>
				</div>
			</div>
		</div>
		<div class='section section-1'>
			<div class='module margin-center'>
				<div class='row'>
					<div class='col-md-1'>
						<label>Client</label>
						<p><strong>IBC</strong></p>
					</div>
					<div class='col-md-2'>
						<label>Industry</label>
						<p><strong>Construction</strong></p>
					</div>
					<div class='col-md-2'>
						<label>Project</label>
						<p><strong>Fuel Logistics</strong></p>
					</div>
					<div class='col-md-2'>
						<label>Platform</label>
						<p><strong>Tablet</strong></p>
					</div>
				</div>
			</div>
		</div>
		<div class='section section-1'>
			<div class='module margin-center'>
				<div class='row'>
					<div class='col'>
						<q-img src="/images/webpage/Sign in – 4@2x.png" />
					</div>
					<div class='col'>
						<q-img src="/images/webpage/Home.png" />
					</div>
					<div class='col'>
						<q-img src="/images/webpage/Fuel Issuance – refueled@2x.png" />
					</div>
				</div>
			</div>
		</div>
		<div class='section section-2'>
			<div class='module margin-center product-overview'>
				<div class='text-module'>
					<h4 class='section-title'>The Concept</h4>
					<p>The projet was focused to reduce the use of paper works and to be adaptive to modern technology. Although they are a construction firm, we made sure to get them on the trend of the industry</p>
				</div>
				<div class='text-module'>
					<h4 class='section-title'>The Challenge</h4>
					<p>The challenge was to convert the flow from paper to digital, for the manager or the control unit to easily monitor the work flow.</p>
				</div>
				<div class='text-module'>
					<h4 class='section-title'>The Solution</h4>
					<p>We gathered all the data and translate it into a minimal and modern design. Users like drivers and tenders may able to use it property without difficulty.</p>
				</div>
			</div>
		</div>
		<div class='section section-3'>
			<div class='module margin-center q-pa-lg light-blue-11'>
				<div class='text-module'>
					<label>Type</label>
					<h2>INTER</h2>
					<div class='row'>
						<div class='col'>
							<p>Characters</p>
							<p>A B C</p>
							<p>a b c</p>
						</div>
						<div class='col'>
							<p>Variant/Weight</p>
							<p>Regular Semi Bold Bold</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class='section section-4'>
			<div class='module margin-center'>
				<h4 class='section-title'>Color Pallete</h4>
			</div>
			<div class='module module-image margin-center'>
				<img src="/images/webpage/color_IBC_Desktop@2x.png" />
			</div>
		</div>
		<div class='section section-5'>
			<div class='module margin-center'>
				<h4 class='section-title'>Design Screen</h4>
			</div>
			<div class='module margin-center'>
				<div class='row q-gutter-sm'>
					<div class='col'>
						<img src="/images/webpage/Home.png" width="100%"/>
					</div>
					<div class='col'>
						<img src="/images/webpage/Home.png" width="100%" />
					</div>
					<div class='col'>
						<img src="/images/webpage/Home.png" width="100%"/>
					</div>
					<div class='col'>
						<img src="/images/webpage/Home.png" width="100%"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</q-page-container>
</q-layout>
</template>
<style scoped>
.section-title{
	color:gray;
}
.text-module{
	color:#000;
	font-size:17px;
}
.light-blue-11{
	background-color:#f2faff;
}
.product-overview{
	padding: 0px 75px;
    margin-bottom: 40px;
}
.section-4{
	width:80%;
	margin:auto;
}
.section-4 .module{
	width:100%;
}
</style>
<script>

import Header from 'layouts/HeaderLayout.vue'
import Footer from 'layouts/FooterLayout.vue'
import Breadcrumbs from 'components/widgets/Breadcrumbs.vue'
import {
  QImg
} from 'quasar'

export default {
  name: 'ProductDetail',
  data () {
  	return {
  		route : 'ProductDetail'
  	}
  },
  components : {
      'Header' : Header,
      'Footer' : Footer,
      'Breadcrumbs' : Breadcrumbs
  },
  methods : {
  	openMenu : function(){
          if(this.isMenuOpen == false){
              this.isMenuOpen = true
          }else{
              this.isMenuOpen = false
          }
     },
     closeMenuOut : function(e){
          var arr = new Array()
          var _class = e.target.classList
          for(var e in _class){
              if(typeof _class[e] == 'string'){
                arr.push(_class[e])
              }
          }

          if(arr.indexOf('active-nav') == -1 && 
              arr.indexOf('menu-action') == -1 && arr.indexOf('menu-item') == -1 && 
              arr.indexOf('icon-menu') == -1){

            if(this.isMenuOpen){
                this.isMenuOpen = false
            }  
          }
      }
  },
  mounted : function(){
  	this.$nextTick(function () {
        this.route = this.$route.name
  	})
  },
}

</script>

