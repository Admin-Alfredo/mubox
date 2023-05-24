export default {
  template: '#menu-template',
  data() {
    return {
      tab: 0,
      isNavbarShow: false
    }
  },
  methods: {
    setTab(index) {
      this.tab = index
    },
    handlerShowMenu() {
      this.isNavbarShow = !this.isNavbarShow
    },
    fnResize(){
      const navbar  = this.$refs.navbar
      const HEIGHT = window.innerHeight
      const WIDTH = window.innerWidth

      if(WIDTH < 480){
        navbar.style.top = (HEIGHT - navbar.offsetHeight) + 'px'
      }else{
        navbar.style.top = '0%'
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.fnResize)
    this.fnResize()
  }
}