<template>
<div class='slider-wrapper'>
	<div class='slider-content'>
		<div id='sliders'>
			<transition :name='sliderName' :duration="500">
				  <MobileSliderPage v-if="sliderIndex == 0" :key="0">
            <template v-slot:slider-image>
                <q-img src="/images/webpage/hyacinth-mockups.png" style="max-height:150px;width:250px;"/>
            </template>
            <template v-slot:slider-text>
                <div class='text-module q-pa-md'>
                  <div class="text-h6 text-center">Responsive Design anywhere you wish</div>
                  <div class="row justify-center">
                  <q-btn rounded color="white" text-color="black" label="More" class="readbtn"/>
                  </div>
                </div>
            </template>
          </MobileSliderPage>
          <MobileSliderPage v-if="sliderIndex == 1" :key="1">
            <template v-slot:slider-image>
                <q-img src="/images/webpage/IBC-tablet-mockup.png" style="max-height:150px;width:250px;"/>
            </template>
            <template v-slot:slider-text>
                 <div class='text-module q-pa-md'>
                  <div class="text-h6 text-center">Application Design that meets your business needs
                    <div class="row justify-center">
                    <q-btn rounded color="white" text-color="black" label="More" class="readbtn"/>
                    </div>
                  </div>
                </div>
            </template>
          </MobileSliderPage>
			</transition>
			<div class='control-wrapper'>
          <div class='col controls'>
            <a @click="controlSlider(0)"><i class="las la-circle" :class="{ active : (sliderIndex == 0) ? true : false }"></i></a>
            <a @click="controlSlider(1)"><i class="las la-circle" :class="{ active : (sliderIndex == 1) ? true : false}"></i></a>
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
  color:#fff;
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
    justify-content: center;
}
.slider-wrapper .control-wrapper{
    position: absolute;
    width: 100%;
    bottom: -75px;
}
.slider-wrapper .controls .las{
	font-size: 21pt;
  color: white;
  margin:0px 20px;
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
	name : 'MobileContentSlider2',
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
