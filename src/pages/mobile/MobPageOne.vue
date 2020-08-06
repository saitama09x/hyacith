<template>
  <PageOne :minHeight="minHeight"/>
</template>

<style scoped>

#page-content{
  position:relative;
}

.section{
  max-width:80%;
  width:100%;
  position:relative;
  height:500px;
}

.section .module{
  padding:0px;
  width: 80%;
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
