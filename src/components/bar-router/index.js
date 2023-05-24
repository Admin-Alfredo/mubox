export default  {
  template: '#bar-router-template',
  data(){
    
    return{

    }
  },
  computed:{
    getAMusica(){
      const a_musica = this.$store.state.a_musica.musica[0] ? 
      this.$store.state.a_musica.musica[0] : {title: ' - ', author:' - '};
      return a_musica
    }
  },
  methods: {
    handlerBack() {
      window.history.back()
    },
    handlerForward(){
      window.history.forward()
  
    },
  }  
}
    