<template>
  <q-layout view="hHh lpR fFf">
    <div class='row'>
    <div class='col-md-2'>
        <q-drawer 
          show-if-above 
          v-model="left"
          side="left" 
          :mini="miniState"
          :width="200"
          :breakpoint="500"
          bordered
          content-class="bg-grey-3"
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

        <div class="q-mini-drawer-hide absolute" style="top: 0px; right: -17px">
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
    </div>
    <div class='col-md'>
    <q-header class="bg-primary text-white header-2" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Shoppe 2 Details
        </q-toolbar-title>
      </q-toolbar>

    </q-header>


    <div class='container'>
      <router-view />
    </div>


      </div>
  </div>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>
<style scoped>
.header-2{
  position:unset;
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
