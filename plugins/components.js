import Vue from 'vue'

/**
 * Import components
 */
import siteHeader from '~/components/siteHeader'
import bannerArea from '~/components/bannerArea'
// import siteFooter from '~/components/siteFooter'

/**
 * Register components.
 */
Vue.component('site-header', siteHeader)
// Vue.component('site-footer', siteFooter)
Vue.component('banner-area', bannerArea)
