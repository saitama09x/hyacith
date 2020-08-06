<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="text-white" height-hint="98">
      <div class="row no-wrap shadow-1">
        <q-toolbar class='col-md-4'>
          <q-btn dense flat round icon="menu" @click="left = !left" />

          <q-toolbar-title>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
            Shoppe Details
          </q-toolbar-title>
        </q-toolbar>
        <q-toolbar class="col-6 text-white">
             <q-btn flat round dense icon="search" />
             <q-input filled square standout="text-white" v-model="text" input-class='form-control' label="Search" />
        </q-toolbar>
        <q-toolbar class="col-6 text-black">
           <q-btn flat round dense icon="notifications">
              <q-badge floating color="blue">2</q-badge>
           </q-btn>
           <q-btn flat round dense icon="shopping_cart">
              <q-badge floating color="blue">2</q-badge>
           </q-btn>
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer 
        show-if-above 
        v-model="left"
        side="left" 
        :mini="miniState"
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-white"
        @click.capture="drawerClick"
    >
      
       <q-scroll-area class="fit">
          <q-list v-for="(menuItem, index) in menuList" :key="index">
             <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <img :src="menuItem.icon" />
              </q-item-section>
              <q-item-section :if="left == false">
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
          </q-list>

        </q-scroll-area>

      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
          <q-btn
            dense
            round
            unelevated
            color="accent"
            icon="chevron_left"
            @click="miniState = true"
          />
        </div>   
    </q-drawer>

    <q-drawer 
        show-if-above 
        side="right" 
        :mini="true"
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-white"
    >

      <q-scroll-area class="fit">
          <q-list v-for="(menuItem, index) in rightDrawerMenu" :key="index">
             <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <div class='pp-wrapper'>
                  <div class='pp-item'>
                    <img :src="menuItem.icon" />
                  </div>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
          <q-list class='add-icon'>
              <q-item>
                  <q-item-section avatar>
                    <q-btn flat round dense icon="add_circle_outline" />
                  </q-item-section>
              </q-item>
          </q-list>
        </q-scroll-area>


    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
<style scoped>
.form-control{
    width:100%;
}
.q-toolbar__title{
  font-size:28px;
  color:#8e8e8e;
}
.q-layout__section--marginal{
    background-color: white;
}
.q-btn__content .material-icons{
  color:#000;
  font-size: 20px;
}
.pp-wrapper{
  position:relative;
}
.pp-wrapper::before{
  content:'';
  padding: 5px;
    position: absolute;
    border-radius: 30px;
    border: solid 2px #ffb50f;
    right: 0px;
}
</style>
<script>
import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      left: false,
      miniState : false,
      menuList: [
       {
        icon: 'images/icons/Agile_kanban_button.png',
        label: 'Table 1',
        separator: true
      },
      {
        icon: 'images/icons/cart.png',
        label: 'Table 2',
        separator: false
      },
      {
        icon: 'images/icons/contacts_button.png',
        label: 'Table 3',
        separator: false
      },
      ],

      rightDrawerMenu : [
        {
          icon : 'images/Profile/Ellipse 736.png',
        },
        {
          icon : 'images/Profile/Ellipse 737.png',
        },
        {
          icon : 'images/Profile/Ellipse 738.png',
        },
        {
          icon : 'images/Profile/Ellipse 740.png',
        }
      ]
    }
  },
  methods : {
     drawerClick (e) {
          if (this.miniState) {
            this.miniState = false

            e.stopPropagation()
          }
        }
  }
}
</script>
