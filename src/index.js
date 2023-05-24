import Vue from 'vue'
import menuBar from './components/menu'
import router from './routes'
import store from './store'
import ControllPlayer from './components/controll-player'
import BarRoueter from './components/bar-router'
const app = new Vue({
	components: {
		'menu-bar': menuBar,
		'controll-player': ControllPlayer,
		'bar-router': BarRoueter
	},
	data: () => {
		return {
			nome: "Admiro Alfredo",
			isSCroll: false,
			timeStopScroll: 0,
			scrollDefault: 350
		}
	},
	methods: {
		fnScrollIHide() {
			const scrollY = window.scrollY
			if (scrollY > this.scrollDefault) {
				this.isSCroll = true
			} else {
				this.isSCroll = false
			}
		},
		fnUpdateScroll() {
			var offsetY = window.pageYOffset
			if (offsetY <= 0) {
				window.scroll(0, 0)
				clearInterval(this.timeStopScroll)
			} else {
				offsetY -= (offsetY * 2.5) / 100
				window.scroll(0, offsetY)
			}
		},
		handlerBtnHide() {
			this.timeStopScroll = setInterval(this.fnUpdateScroll)
		}
	},
	mounted() {
		window.addEventListener('scroll', this.fnScrollIHide)
	},
	router,
	store
}).$mount('#app')

export default app