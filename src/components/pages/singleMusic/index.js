
import CardMusic from '../../card'

export default {
  name:"single-music",
  template:"#single-music-template",
  components:{
    'card-music': CardMusic,
  },
  computed: {
    musicas() {
      return this.$store.state.musicas
    },
    a_musica(){
      return this.$store.state.a_musica.musica
    },
    selfs(){
      return this.$store.state.a_musica.selfs
    }
  },
  created(){
    console.log('', (this.$store.state.a_musica.musica.length === 1))
   if(!(this.$store.state.a_musica.musica.length === 1))
      this.$store.dispatch('getOneMusicaAction', this.$route.params.id)
  },
  updated(){
    //
  },
  beforeRouteUpdate (to, from, next) {
     this.$route.params.id = to.params.id
    next()
  },
  beforeRouteEnter (to, from, next) {
    next()
  }
}