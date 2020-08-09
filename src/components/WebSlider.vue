<template>
<div class='slider-wrapper'>
	<div class='slider-content'>
		<div id='sliders'>
			<transition :name='sliderName' :duration="1000">
				<div class='slide-item' v-if="sliderIndex == 0" key="item0">
					<q-img src="/images/webpage/hyacinth-mockups.png" width="100%" style="max-height:260px;" />
				</div>
				<div class='slide-item' v-else-if="sliderIndex == 1" key="item1">
					<q-img src="/images/webpage/IBC-fuel-logistics-mockup.png" width="100%" style="max-height:260px;"/>
				</div>
				<div class='slide-item' v-else-if="sliderIndex == 2" key="item2">
					<q-img src="/images/webpage/IBC-tablet-mockup.png" width="100%" style="max-height:260px;" />
				</div>
				<div class='slide-item' v-else-if="sliderIndex == 3" key="item3">
					<q-img src="/images/webpage/medicine-reminder-mockup.png" width="100%" style="max-height:260px;"/>
				</div>
			</transition>
			<div class='controls'>
				<span class="prev"><i class="las la-arrow-circle-left" @click="slidePrev"></i></span>
				<span class="next"><i class="las la-arrow-circle-right" @click="slideNext"></i></span>
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
}

#sliders{
	width: 95%;
    overflow-x: hidden;
    margin: auto;
    position: relative;
    height: 260px;
}

.slide-item{
	position: absolute;
    left: 14px;
    width: 330px;
}

.slider-wrapper .controls{
    position: absolute;
    width: 100%;
    left: 0px;
    top: 50%;
}
.slider-wrapper .controls .las{
	font-size: 30pt;
    color: white;
}
.slider-wrapper .controls .prev{
	position:absolute;
	left:0px ;
}
.slider-wrapper .controls .next{
	position:absolute;
	right:0px ;
}
.slidernext-enter-active {
  	position:absolute;
  	left:0px;
  	transition: left 1s;
}
.slidernext-enter{
	left:330px;
}

.slidernext-leave-active {
	position:absolute;
  	left:-330px;
  	transition: left 1s;
}

.slidernext-leave{
	left:0px;
}

.sliderprev-enter-active {
  	position:absolute;
  	left:0px;
  	transition: left 1s;
}
.sliderprev-enter{
	left:-330px;
}

.sliderprev-leave-active {
	position:absolute;
  	left:330px;
  	transition: left 1s;
}

.sliderprev-leave{
	left:0px;
}


</style>
<script>
export default {
	name : 'WebSlider',
	data() {
		return {
			sliderIndex : 0,
			sliderName : ''
		}
	},
	methods : {
		slidePrev : function(){
			this.sliderName = 'sliderprev'
			if(this.sliderIndex > 0){
				this.sliderIndex = this.sliderIndex - 1
			}
		},
		slideNext : function(){
			this.sliderName = 'slidernext'
			if(this.sliderIndex > -1 && this.sliderIndex < 3){
				this.sliderIndex = this.sliderIndex + 1
			}	
		}
	}

}
</script>