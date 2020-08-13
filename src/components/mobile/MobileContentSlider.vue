<template>
<div class='slider-wrapper'>
	<div class='slider-content'>
		<div id='sliders'>
        <div class='slider-items'>
			<transition :name='sliderName' :duration="1000">
				  <MobileSliderPage v-for="(item, index) in carousel" :key="index" v-if="sliderIndex == index">
            <template v-slot:slider-image>
                <div :class="'image image-' + sliderIndex">
                  <q-img :src="item['featured-image']"/>
                </div>
            </template>
            <template v-slot:slider-text>
              <div>
                <div class="text-h6 text-center">{{item.title}}</div>
                <div class="text-white text-body1" v-html="item.text">
                </div>
              </div>
            </template>
          </MobileSliderPage>
			</transition>
      </div>
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
    padding:0px 0px;
}

#sliders{
	width: 100%;
  margin: auto;
  position: relative;
  height: 400px;
}

.slider-items{
    display:flex;
    position:relative;
    justify-content:center;
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

#sliders .q-img{
  max-height :270px;
  max-width:270px;
  width:70%;
}

.slider-wrapper .controls{
    position: relative;
    display: flex;
    justify-content: center;
}
.slider-wrapper .control-wrapper{
    position: absolute;
    bottom: 0%;
    left:10%;
    width: 80%;
}
.slider-wrapper .controls .las{
	font-size: 15pt;
  color: white;
  margin:0px 24px;
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

@media screen and (orientation:landscape) {


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

}

@media (max-width:980px) and (min-width:720px) and (orientation:landscape) {
  
  #sliders{
    height:210px;
  }

  #sliders .q-img{
      width: 50%;
  }

  #sliders .slider-items{
    align-items: flex-start;
    height: 100%;
  }

  #sliders .image{
      max-width:300px;
      max-height:300px;
  }

  .slider-wrapper .control-wrapper{
      bottom: 14%;
  }

}

@media (max-width:480px) and (min-width:320px) and (orientation:portrait) {

  #sliders .q-img{
      width: 50%;
  }

  #sliders .image{
      padding: 20px 0px;
  }

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
