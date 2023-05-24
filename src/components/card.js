  
export default {
  name:"card",
  template:"#card-template", 
  props: ['musica', 'styleCard'],
  computed: {
    m() {return this.musica}
  },
  methods: {
    showMenu(e) {
      const el = e.currentTarget
      const menuMusic = el.nextElementSibling 
      
      if(!menuMusic.classList.contains('menu-music-visible')){
        menuMusic.classList.add('menu-music-visible')
      }else{
        menuMusic.classList.remove('menu-music-visible')
      }
    },
    handlerClickCard(e){
      const target = e.target
      
      if(!target.classList.contains('bmm')){
        this.$store.dispatch('addAtualMusicasAction', this.m)
        this.$router.push({path:`/single-music/${this.m._id}`})
      }
    }
  }
}
window.addEventListener('click', function(e){
  const el = e.target;
 if(el.classList.contains('bmm')){
    
    const menuMusic = el.tagName === 'DIV' ? 
                    el.nextElementSibling : 
                    el.parentElement.nextElementSibling
    
 }else{
    document.querySelectorAll('.menu-music').forEach(m =>{
      m.classList.remove('menu-music-visible')
    })
  }
})
