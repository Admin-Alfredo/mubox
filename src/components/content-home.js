import Card from './card'
import {all_musicas} from '../test_api'
export default {
  template:"#content-home-template",
  components:{'card-music': Card },
  computed:{
    musicas(){
      return this.$store.state.musicas
    }
  }
}