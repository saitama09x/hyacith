<template>
<div class='page-overlay'>
<div id='page-content' >
  <div class='row content-center' :style="{ minHeight : minHeight + 'px'}">
    <div class='col-md-12 col-xs-12'>
        <div class='module-image text-center'>
          <q-img src="/images/webpage/Hyacinth-Logo-Official-white.png" />
        </div>  
      </div> 
      <div class='col-md-12 col-xs-12'>
        <div class='text-module text-center'>
          <p>Creating a whole new experience</p>
          <p>for you and your business</p>
        </div>
    </div>
  </div>
</div>
</div>
</template>

<style scoped>

.page-overlay{
  background-image: url("/bgimages/purple-home-mobile.png");
  background-repeat:no-repeat;
  background-size:cover;
}

#page-content{
    height: 100%;
    width: 100%;
    padding:0px 30px;
}

.q-img{
  max-height :350px;
  max-width:900px;
}

@media (max-width:980px) and (min-width:720px) and (orientation:landscape) {

  .q-img{
    max-height :250px;
    max-width:400px;
  }
  
  .text-module{
    font-size:15pt;
  }

}

</style>
<script>
import Header from 'layouts/HeaderLayout.vue'
import PageOne from 'pages/webpage2/PageOne.vue'
import WebMenuNav from 'components/WebMenuNav.vue'

export default {
  name: 'MobPageOne',
  components : {
  		PageOne,
      WebMenuNav,
      Header
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
    }
  },
  data () {
  return {
      is_page : 'MobPageOne',
      nav : 'MobPageOne',
      animejs : null,
      clientH : 0,
      isMenuOpen : false,
    }
  },
  computed : {
      MenuActive : function(){
          return {
              'active-nav' : this.isMenuOpen
          }
      }
  },
  created : function(){
      this.setNav('PageOne')
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
  }
}
</script>
