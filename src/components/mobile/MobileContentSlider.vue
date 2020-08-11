<template>
<div class='slider-wrapper'>
	<div class='slider-content'>
		<div id='sliders'>
			<transition :name='sliderName' :duration="5000">
				  <MobileSliderPage v-if="sliderIndex == 0" :key="0">
            <template v-slot:slider-image>
                <q-img src="/images/webpage/UI-icon.png" style="min-height:100px;width:100px;"/>
            </template>
            <template v-slot:slider-text>
                <div class="text-h6 text-center">Data Research</div>
                <p>We make our user interface design from scratch. We give better insights in designing, whether on web or in app.</p>
            </template>
          </MobileSliderPage>
          <MobileSliderPage v-if="sliderIndex == 1" :key="1">
            <template v-slot:slider-image>
                <q-img src="/images/webpage/UX-icon.png" style="max-height:100px;width:100px;"/>
            </template>
            <template v-slot:slider-text>
                <div class="text-h6 text-center">User Interface Design</div>
                <p>We make our user interface design from scratch. We give better insights in designing, whether on web or in app.123</p>
            </template>
          </MobileSliderPage>
          <MobileSliderPage v-if="sliderIndex == 2" :key="2">
            <template v-slot:slider-image>
                <q-img src="/images/webpage/Data-research-icon.png" style="max-height:100px;width:100px;"/>
            </template>
            <template v-slot:slider-text>
                <div class="text-h6 text-center">User Experience Design</div>
                <p>We make our user interface design from scratch. We give better insights in designing, whether on web or in app.1234</p>
            </template>
          </MobileSliderPage>
			</transition>
			<div class='control-wrapper'>
          <div class='col controls'>
            <a @click="controlSlider(0)"><i class="las la-circle" :class="{ active : (sliderIndex == 0) ? true : false }"></i></a>
            <a @click="controlSlider(1)"><i class="las la-circle" :class="{ active : (sliderIndex == 1) ? true : false}"></i></a>
            <a @click="controlSlider(2)"><i class="las la-circle" :class="{ active : (sliderIndex == 2) ? true : false} "></i></a>
    			</div>
      </div>
		</div>
	</div>
</div>
</template>
<style scoped>
.slider-wrapper{
	padding: 10px;
    width: 100%;
}
.slider-content{
	width: 100%;
    position: relative;
    padding:0px 30px;
}

#sliders{
	width: 90%;
  margin: auto;
  position: relative;
  height: 340px;
}

.text-h6{
  font-weight:bold;
  color:#ffff00;
}

.slide-item{
	position: absolute;
    height: 240px;
    left: 14px;
    width: 330px;
}

.slider-wrapper .controls{
    position: relative;
    
    display: flex;
    justify-content: space-around;
}
.slider-wrapper .control-wrapper{
    position: absolute;
    bottom: 0px;
    left:10%;
    width: 80%;
}
.slider-wrapper .controls .las{
	font-size: 21pt;
  color: white;
}

.slider-wrapper .controls .active{
  background-color:white;
  border-radius:30px;
}

.slider-wrapper .controls .prev{
	position:absolute;
	left:0px ;
}
.slider-wrapper .controls .next{
	position:absolute;
	left:55px ;
}
.slidernext-enter-active {
  position:absolute;
  transform:translateX(0px);
  transition: transform .5s;
}
.slidernext-enter{
  transform:translateX(540px);
}

.slidernext-leave-active {
  position:absolute;
	transform:translateX(-340px);
  opacity: 0;
  transition: transform .5s, opacity .5s;
}

.slidernext-leave{
	/*transform:translateX(0px);*/
} 

.sliderprev-enter-active {
  position:absolute;
  transform:translateX(0px);
  transition: transform .5s;
}
.sliderprev-enter{
  transform:translateX(-540px);
}

.sliderprev-leave-active {
  position:absolute;
  transform:translateX(340px);
  opacity: 0;
  transition: transform .5s, opacity .5s;
}

.sliderprev-leave{
  /*transform:translateX(540px);*/
} 

</style>
<script>

import MobileSliderPage from './MobileSliderPage'

export default {
	name : 'MobileContentSlider',
	components : {
      MobileSliderPage
  	},
  props : {
    carousel : {
        type : Array
    },
  },
	data() {
		return {
  		sliderIndex : 0,
			sliderName : 'slidernext',
		}
	},
	watch: {
      sliderIndex : function(_new, _old){
          if(_new < _old){
              this.sliderName = 'sliderprev'
          }else{
              this.sliderName = 'slidernext'
          }
      }
	},
  computed : {
    
  },
	methods : {
    controlSlider : function(index){
        console.log(index)
        this.sliderIndex = index
    }
	},
	mounted : function(){
	this.$nextTick(function () {

	})
},
}
</script>
