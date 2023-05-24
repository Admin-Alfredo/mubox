import Slider from '../../slider'
import ContentHome from '../../content-home'
export default  {
  template: '#home-template',
  components:{
    'slider-image':Slider,
    'content-home':ContentHome
  },
  created(){
    if(this.$store.state.musicas.length === 0)
      this.$store.dispatch('getAllMusicasAction')
  }
}