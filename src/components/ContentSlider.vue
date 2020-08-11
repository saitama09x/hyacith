<template>
<div class='slider-wrapper'>
	<div class='slider-content'>
		<div id='sliders'>
			<transition :name='sliderName' :duration="500">
				
        <SliderPage v-for="(item, index) in carousel" :key="index" v-if="sliderIndex == index">
            <template v-slot:slider-text>
                 <h1>{{item.item_content.header}}</h1>
                 <div v-html="item.item_content.content"></div>
            </template>
            <template v-slot:slider-image>
                  <q-img :src="item.item_content.image" :transition="'slide-left'" style="max-height:400px;max-width:400px;">
                    <template v-slot:loading>
                      <q-spinner-gears color="white" />
                    </template>
                 </q-img>
            </template> 

        </SliderPage>


			</transition>
			<div class='control-wrapper'>
      <div class='row'>
          <div class='col controls'>
    				<span class="prev"><i class="las la-arrow-circle-left" @click="slidePrev"></i></span>
    				<span class="next"><i class="las la-arrow-circle-right" @click="slideNext"></i></span>
    			</div>
          <div class='col'>
            <q-btn rounded color="white" text-color="black" label="More" class="readbtn"/>
          </div>
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

.slide-item{
	position: absolute;
    height: 240px;
    left: 14px;
    width: 330px;
}

.slider-wrapper .controls{
    position: relative;
    margin-left: 15px;
}
.slider-wrapper .control-wrapper{
    position: absolute;
    bottom: -56px;
    width: 80%;
}
.slider-wrapper .controls .las{
	font-size: 21pt;
  color: white;
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
  transform:translateX(1070px);
}

.slidernext-leave-active {
  position:absolute;
	transform:translateX(-1070px);
  opacity: 0;
  transition: transform .5s, opacity .5s;
}

.slidernext-leave{
	transform:translateX(0px);
} 

.sliderprev-enter-active {
  position:absolute;
  transform:translateX(0px);
  transition: transform .5s;
}
.sliderprev-enter{
  transform:translateX(-1070px);
}

.sliderprev-leave-active {
  position:absolute;
  transform:translateX(1070px);
  opacity: 0;
  transition: transform .5s, opacity .5s;
}

.sliderprev-leave{
  transform:translateX(1070px);
} 

</style>
<script>

import SliderPage from './SliderPage'

export default {
	name : 'ContentSlider',
	components : {
      'SliderPage' : SliderPage
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
          if(_new > 1){
              this.sliderIndex = 0
          }
          else if(_new < 0){
              this.sliderIndex = 1
          }
      }
	},
  computed : {
    
  },
	methods : {
		slidePrev : function(){
      this.sliderName = 'sliderprev'
      this.sliderIndex = this.sliderIndex - 1
	  },
		slideNext : function(){
      this.sliderName = 'slidernext'
      this.sliderIndex = this.sliderIndex + 1
		}
	},
	mounted : function(){
	this.$nextTick(function () {

	})
},
}
</script>
