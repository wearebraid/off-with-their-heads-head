import Vue from 'vue'

/**
 * Import components
 */
import siteHeader from '~/components/siteHeader'
import siteFooter from '~/components/siteFooter'
import bannerArea from '~/components/bannerArea'
import cardsArea from '~/components/cardsArea'
import staffCard from '~/components/staffCard'

/**
 * Register components.
 */
Vue.component('site-header', siteHeader)
Vue.component('site-footer', siteFooter)
Vue.component('banner-area', bannerArea)
Vue.component('cards-area', cardsArea)
Vue.component('staff-card', staffCard)
