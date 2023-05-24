import {fv_musicas} from '../test_api'
import Card from './card'

export default  {
  template: '#slider-template',
  components:{
    'card-music':Card
  },
  data() {
    return {
      marginLeftSlider:-525,
      widthSliderWrapper: fv_musicas.length * 190,
      musicas: fv_musicas,
    }
  },
  computed: {
    fvMusicas(){return this.musicas}
  },
  methods: {
    handleClickLeft(){
      const widthCSlider = this.$refs.conSlider.clientWidth
      this.marginLeftSlider += Math.round(widthCSlider)
      if(this.marginLeftSlider > 0){
        this.marginLeftSlider = 0
      }
    },
    handleClickRight(){
      console.log(this.$refs)
      const widthCSlider = this.$refs.conSlider.clientWidth
      this.marginLeftSlider -= Math.round(widthCSlider)
      if((widthCSlider - this.widthSliderWrapper) > this.marginLeftSlider){
        this.marginLeftSlider =  (widthCSlider - this.widthSliderWrapper)
      }
    }
  },
  created(){
    const self = this 
    setTimeout(()=>{self.marginLeftSlider = 0}, 10) 
  }
}