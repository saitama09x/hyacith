<template>
<div id="page">
<div class='page-overlay' ref="bgaction">
    <div id='page-content'>
       <div class='row content-center items-center' :style="{ height : minHeight + 'px'}">
          <div class='col-md col-xs-12 text-center'>
            <q-img :src="content.featimg" />
            </div>
            <div class='col-md col-xs-12 q-px-md text-white text-body1'>
            <div class='row justify-center'>
              <div v-html='content.text'>
              
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>

</template>
<style lang='scss'>

strong{
  color:#ffff00;
}

</style>
<style scoped>

#page-content{
  height: 100%;
  width: 100%;
  padding-top:2%;
}

#page .page-overlay{
  background-image: url("/bgimages/pink-contact-us-mobile.png");
  background-repeat:no-repeat;
  background-size:cover;
  position:relative;
}

.text-module{
  font-size:17px;
}

.text-module h4{
  font-size: 20pt;
  font-weight: bold;
}

.section .module-image{
  width:100%;
}

.social-icons{
  font-size:20pt;
}

strong{
  color:#ffff00;
}

.section-title{
  font: Bold 40px Roboto;
  color:white;
}

.q-img{
  max-height :350px;
  max-width:300px;
  width:70%;
}


@media screen and (orientation:portrait) {
  #page-content{
      padding-top:0%;
  }
}

@media (max-width:980px) and (min-width:720px) and (orientation:landscape) {
  h4{
    font-size:15pt;
  }
  #page-content{
    padding-top:0%;
  }
  
  .row{
    padding-top: 7%;
  }

  .row .col-md{
    width:50%;
  }

  .text-h4{
    font-size:15pt;
    line-height:25px;
  }
}
</style>
<script>

export default {
  name: 'MobPageFive',
  components : {
      
  },
  props : {
    actionNav : {
      type : Function,
      default : function(page){
        
      }
    },
    minHeight : {
      type : Number
    },
    setNav : {
      type : Function,
    },
    content : {
      type : Object
    }
  },
  data () {
  return {
      is_page : 'MobPageFive',
      nav : 'MobPageFive',
      animejs : null,
      clientH : 0,
      carousel : []
    }
  },
  created : function(){
    this.setNav('PageFive', 5)
  },
  methods : {
 
  }
}
</script>
