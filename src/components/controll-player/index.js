import {
  handlerPlayMusic,
  getProgressBarPorcent,
  handlerDownSlider,
  handlerUpSlider,
  handlerHoverSlider,
  updateDurationTime,
  getCurrentTimePorcent,
  getcurrentTimeSegunds,
  setCurrentTime,
  setCurrentTimePorcent,
  setVolumePorcent,
  setVolume,
  getVolume,
  getCurrentProgress,
  handlerHoverVolume,
  handlerDownVolume,
  handlerUpVolume,
  destroyTimer
} from './methods'

import {updateEffectsMusic} from './canvas/effects-music'

export default {
  name: "controll-player",
  template: "#controll-player-template",
  data() {

    return {
      isPlay: false,
      isPressSlider: false,
      /**PROPS DO TIMER */
      tagAudio: null,
      tagProgressSlider: null,
      currentTime: 0,
      duration: 0,
      currentTimePorcent: 0,
      eventTimer: 0,
      /**PROPS DO VOLUME */
      currentVolumePorcent: 0,
      isPressVolume: false,
      /**Musica atuaç */
      a_musica: null,
      context: null,
      canvas:null
    }
  },
  methods: {
    updateEffectsMusic,
    handlerPlayMusic,
    getProgressBarPorcent,
    handlerDownSlider,
    handlerUpSlider,
    handlerHoverSlider,
    updateDurationTime,
    getCurrentTimePorcent,
    getcurrentTimeSegunds,
    setCurrentTime,
    setCurrentTimePorcent,
    setVolumePorcent,
    setVolume,
    getVolume,
    getCurrentProgress,
    handlerHoverVolume,
    handlerDownVolume,
    handlerUpVolume,
    destroyTimer,
    initMediaSource(src) {
      const source = document.createElement('source')
      source.src = src
      this.tagAudio
        .appendChild(source)

    },
    nextMediaSource(src) {
      const source = this.tagAudio.querySelector('source')
      if (source) {
        source.src = src
        this.tagAudio.load()
        this.play()

      } else {
        this.initMediaSource(src)
      }
    },
    play(callback) {
      if (this.tagAudio) {
        this.tagAudio.play().then(callback)
        this.isPlay = true

      }
    },
    pause() {
      if (this.tagAudio) {
        this.tagAudio.pause()
        this.isPlay = false
      }
    },
    hooksEndMusic(){
      console.log('PAUSOOOOUU', '')
      setTimeout(()=>this.play(()=> console.log("REINICIAR :"+ this.getAMusica.title)),500)
      
    }
  },
  watch: {
    getAMusica(__new_m, __old_m) {
      if (this.tagAudio &&
        __old_m === undefined &&
        __new_m.hasOwnProperty('url_musica')) {

        this.initMediaSource(__new_m.url_musica)

      } else if (this.tagAudio &&
        __old_m !== undefined &&
        __new_m.hasOwnProperty('url_musica')) {
        this.nextMediaSource(__new_m.url_musica)
      }


    }
  },
  computed: {
    getAMusica() {
      return this.$store.state.a_musica.musica[0]
    }
  },
  mounted() {
    this.tagAudio = this.$refs.tagAudio
    this.tagProgressSlider = this.$refs.progressBarSlider
    this.tagProgressVolume = this.$refs.progressBarVolume

    this.canvas = this.$refs.canvas
    this.canvas.width = this.canvas.parentElement.offsetWidth
    this.canvas.height = this.canvas.parentElement.offsetHeight
    
    this.context = this.canvas.getContext('2d')

    this.setCurrentTimePorcent(0)
    this.setVolumePorcent(100)

    this.tagAudio.onloadeddata = (e) => {
      console.log('LOADED_DATA',)

      //this.setCurrentTime(this.getCurrentProgress(this.tagProgressSlider, this.tagAudio.duration))
      //this.setVolume(this.getCurrentProgress(this.tagProgressVolume, 1))
    }
    this.tagAudio.onloadedmetadata = (e) => {
      console.log('LOADED_METADATA', e)
      //this.setCurrentTime(this.getCurrentProgress(this.tagProgressSlider, this.tagAudio.duration))
      //this.setVolume(this.getCurrentProgress(this.tagProgressVolume, 1))
    }
    // 
    //this.tagAudio.autoPlay = true
    this.eventTimer = setInterval(this.updateDurationTime, 60)
  }
}
