<template>
<footer id='footer'>
    <div class='footer-wrapper'>
      <div class='section section-1'>
        <div class='d-flex flex-wrap'>
          <div class='widget widget-0 copyright-text'>
            <div class='module-text'>
              <p><small>2020 <a>Hyacith Synergein</a> All right reserved</small></p>
              <p>Developed by <a>Hibicus Strata</a></p>
            </div>
          </div>
          
          <WidgetNavArrow :route="route" :actionNav="actionNav" :is_page="is_page" />
          <FooterContact :route="route" />

          <div class='widget widget-2 text-center social-icons'>  
            <div class='module-icons'>
              <i class="lab la-facebook"></i>
              <i class="lab la-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
</footer>
</template>
<style scoped>

.section{
  max-width:100%;
  width:100%;
  position:relative;
}

#footer{
    position: fixed;
    padding: 12px 33px;
    bottom: 0px;
    width: 100%;
    left: 0px;
}

#footer .widget{
  width:33%;
}

#footer .arrow{
  color: white;
  font-size: 30pt;
  bottom: 0px;
}

#footer .copyright-text{
  color:white;
}

#footer .social-icons{
  color:white;
  font-size:30pt;
}

.product-layout #footer{
  position:unset;
  background-image:url("/bgimages/pink-contact-us.png");
  background-repeat:no-repeat;
  background-size:cover;
}

.product-layout #footer .flex-wrap{
    flex-wrap:nowrap;
}

.product-layout #footer .copyright-text{
    display: flex;
    align-items: flex-end;
}

.product-layout #footer .social-icons{
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}

@media(max-width:980px){
  .widget-0 {
    display:none;
  }
  .widget-1{
    width:100% !important;
  }
  .widget-2{
    display:none;
  }
  #footer{
    bottom:25px;
  }
  .product-layout #footer .flex-wrap{
    flex-wrap:wrap;
  }
  #footer .widget{
    width:100%;
  }
  
  .product-layout .widget-1{
    order:1;
  }
  .product-layout .widget-2{
    order:2;
  }
  .product-layout .widget-0{
    order:3;
  }
  .product-layout #footer .social-icons{
    align-items: initial;
    justify-content: center;
  }

  .product-layout #footer .copyright-text{
     align-items: initial;
     justify-content: center;
  }
}

@media (max-width:980px) and (min-width:720px) and (orientation:landscape) {

#footer{
  bottom:0px;
  height: 50px;
}

.product-layout #footer{
  bottom:25px;
  height:auto;
}

#footer .arrow{
  font-size: 20pt;
}

}
</style>
<script>
import WidgetNavArrow from 'components/widgets/WidgetNavArrow.vue';
import FooterContact from 'components/widgets/FooterContact.vue'

export default {
  name : 'Footer',
  props : {
      actionNav : {
          type : Function,
          default : function( page ){

          }
      },
      is_page : {
          type : String,
          default : ""
      },
      route : {
          type : String
      }
  },
  components : {
      'WidgetNavArrow' : WidgetNavArrow,
      'FooterContact' : FooterContact
  }
}
</script>