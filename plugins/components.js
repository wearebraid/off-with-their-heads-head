import Vue from 'vue'

/**
 * Import components
 */
import siteHeader from '~/components/siteHeader'
import siteFooter from '~/components/siteFooter'
import bannerArea from '~/components/bannerArea'
import cardsArea from '~/components/cardsArea'
import staffCard from '~/components/staffCard'
import staffFullBio from '~/components/staffFullBio'
import modal from '~/components/modal'

/**
 * Register components.
 */
Vue.component('site-header', siteHeader)
Vue.component('site-footer', siteFooter)
Vue.component('banner-area', bannerArea)
Vue.component('cards-area', cardsArea)
Vue.component('staff-card', staffCard)
Vue.component('staff-full-bio', staffFullBio)
Vue.component('modal', modal)
