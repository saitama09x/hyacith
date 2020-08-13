<template>
<div class='slider-wrapper'>
	<div class='slider-content'>
		<div id='sliders'>
      <div class='slider-items'>
	   <transition :name='sliderName' :duration="1000">
				  <MobileSliderPage v-for="(item, index) in carousel" :key="index" v-if="sliderIndex == index">
            <template v-slot:slider-image>
                <div :class="'image-' + sliderIndex">
                  <q-img :src="item.item_content.image" />
                </div>
            </template>
            <template v-slot:slider-text>
                <div class='text-module q-pa-md'>
                  <div class="text-h6 text-center q-my-lg">{{item.item_content.header}}</div>
                  <div class="row justify-center">
                  <q-btn rounded color="white" text-color="black" label="More" class="readbtn"/>
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
    			</div>
      </div>

		</div>
	</div>
</div>
</template>
<style lang="scss">


.readbtn .q-btn__wrapper{
  font-size:16px;
  padding: 11px 54px 10px 54px;
  min-height:0px;
}


</style>
<style scoped>

.q-img{
  max-height :350px;
  max-width:500px;
  width:100%;
}

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
  height: 550px;
  max-height: 550px;
  padding-top:7%;
}

.text-h6{
  font-weight:bold;
  color:#fff;
}

.slider-items{
    display:flex;
    position:relative;
    justify-content:center;
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
  transform:translateX(0px);
  transition: transform .5s;
}
.slidernext-enter{
  transform:translateX(540px);
}

.slidernext-leave-active {
	transform:translateX(-340px);
  opacity: 0;
  transition: transform .5s, opacity .5s;
}


.sliderprev-enter-active {
  transform:translateX(0px);
  transition: transform .5s;
}
.sliderprev-enter{
  transform:translateX(-540px);
}

.sliderprev-leave-active {
  transform:translateX(340px);
  opacity: 0;
  transition: transform .5s, opacity .5s;
}


@media screen and (orientation:landscape) {

  #page-content{
      padding-top:3%;
  }

  .q-img{
    width:80%;
  }

  .slider-item{
    width:50%;
  }

  #sliders .image-1{
    width:70%;
    margin:auto;
  }

  .slidernext-enter-active {
    position:absolute;
    transition: transform .5s;
  }

  .slidernext-enter{
    transform:translateX(540px);
  }

  .slidernext-leave-active {
    position:absolute;
    transform:translateX(-540px);
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
    transform:translateX(540px);
    opacity: 0;
    transition: transform .5s, opacity .5s;
  }

}

@media screen and (orientation:portrait) {

  #sliders{
    height: 550px;
  }

  #sliders .image-0{
    padding-top:24px;
  }

  #sliders .image-1{
      max-width:300px;
      max-height:300px;
      margin:0 auto;
  }

  .slidernext-enter-active {
    position:absolute;
    transition: transform .5s;
  }

  .slidernext-enter{
    transform:translateX(340px);
  }

  .slidernext-leave-active {
    position:absolute;
    transform:translateX(-540px);
    opacity: 0;
    transition: transform .5s, opacity .5s;
  }


  .sliderprev-enter-active {
    position:absolute;
    transform:translateX(0px);
    transition: transform .5s;
  }
  .sliderprev-enter{
    transform:translateX(-340px);
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
    height: 290px;
  }

  .slider-items{
    height: 100%;
    align-items: center;
  }

  #sliders .slider-item{
      width:100%;
  }

  .q-img{
    width:60%;
  }

  #sliders .image-1{
    width:85%;
  }

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
