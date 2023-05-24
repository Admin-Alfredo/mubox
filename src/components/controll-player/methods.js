
export const handlerPlayMusic = function () {
  // console.log('INITIAL', this.currentTime)
  if(this.currentTime === 0){
    const initialTime = this.getCurrentProgress(this.tagProgressSlider, this.tagAudio.duration)
    //console.log('initialTime', initialTime)
    //this.setCurrentTime(initialTime)
    // console.log('INITIAL', )
  }
  if(!this.isPlay){
    this.play()
  }else{
    this.pause()
  }
}
export const getProgressBarPorcent = function (e) {
  const progressBarPx = e.currentTarget.offsetWidth
  const cursorPositionBar = e.x - e.currentTarget.offsetLeft
  const porcentPostion = (cursorPositionBar * 100) / progressBarPx
  return porcentPostion
}
export const getCurrentProgress = function(el, duration){
  const progressFull = el.offsetWidth
  const progressMini = el.querySelector('.progress-bar-state').offsetWidth
  const progressPorcent = (progressMini * 100) / progressFull
  const initial = (duration * progressPorcent)/100
  return initial
}
export const handlerDownSlider = function (e) {
  /**
   * dispara quando sliderBar e clicado
   */
  this.isPressSlider = true
  // if(!this.isPlay ){
  //   this.pause()
  // }
  
  this.currentTimePorcent = this.getProgressBarPorcent(e)
  
  this.setCurrentTime(this.getcurrentTimeSegunds())
  this.setCurrentTimePorcent(this.currentTimePorcent)

}
export const handlerUpSlider = function (e) {
  this.isPressSlider = false
}

export const handlerHoverSlider = function (e) {
  this.currentTimePorcent = this.getProgressBarPorcent(e)
  if (this.isPressSlider) {
    this.setCurrentTimePorcent(this.currentTimePorcent)
    this.setCurrentTime(this.getcurrentTimeSegunds())
  }
}

export const updateDurationTime = function () {
  /**
   * atualiza o [this.duration] e o [this.currentTime] 
   * se a musica estiver no isPlay = true
   */
  this.context.clearRect(0,0,this.canvas.width, this.canvas.height)
  this.updateEffectsMusic()
  //Este metodo será chamado para 
  //atualizar os efeitos da musica 

  if (this.isPlay) {
    this.duration = this.tagAudio.duration
    this.currentTime = this.tagAudio.currentTime

    if (this.duration === this.currentTime) {
      //console.log('DU', vai entrar neste fluxi quando a musica erminar)
      
      if(this.hooksEndMusic &&  typeof this.hooksEndMusic === 'function'){
        this.hooksEndMusic()
      }
      this.pause()
    }
    this.currentTimePorcent = this.getCurrentTimePorcent()
    this.setCurrentTimePorcent(this.currentTimePorcent)
    //console.log('Time:', this.tagAudio.currentTime +'(s)', 'MUISCA:', Math.round(this.currentTimePorcent) + '(%)')
  }
}
export const getCurrentTimePorcent = function () {
  /**
   * converte o this.currentTime de (s) para (%)
   * e retorna-o
   */
  return Math.round((this.currentTime * 100) / this.duration)
}
export const getcurrentTimeSegunds = function () {
  /**
   * converte o this.currentTime de (%) para (s)
   * e retorna-o
   */
  return (this.duration * this.currentTimePorcent) / 100
}
export const setCurrentTime = function (currentTime) {
  /**
   * set o currentTime em (s) no control-player
   */
  if (this.tagAudio)
    this.tagAudio.currentTime = currentTime
}
export const setCurrentTimePorcent = function (porcent) {
  /**
   * set o currentTime em (%) no DOM
   */
  if (this.tagProgressSlider) {
    this.tagProgressSlider
      .querySelector('.progress-bar-state')
      .style.width = porcent + '%'
  }
}
export const setVolumePorcent = function (vol) {
  if (this.tagProgressVolume) {
    this.tagProgressVolume
      .querySelector('.progress-bar-state')
      .style.width = vol + '%'
  }
}
export const setVolume = function (vol) {
  if (this.tagAudio) {
    this.tagAudio
      .volume = vol
  }
}

export const getVolume = function () {
  const _volume_ = ((1 * this.currentVolumePorcent) / 100)
  const volume = _volume_ < 0  ? 0 : _volume_ > 0.98 ? 1 : _volume_
  return volume
}

export const handlerHoverVolume = function (e) {
  if (this.isPressVolume) {
    this.currentVolumePorcent = this.getProgressBarPorcent(e)
    this.setVolumePorcent(this.currentVolumePorcent)
    this.setVolume(this.getVolume())
  }
  //console.log('VOLUME (%)', this.currentVolumePorcent)
}

export const handlerDownVolume = function (e) {
  this.currentVolumePorcent = this.getProgressBarPorcent(e)
  this.setVolumePorcent(this.currentVolumePorcent)
  this.setVolume(this.getVolume())
  console.log('VOLUME', this.getVolume())
  this.isPressVolume = true
}

export const handlerUpVolume = function (e) {
  this.isPressVolume = false
}

export const destroyTimer = function () {
  /**
   * destroi o ciclo de atualização 
   * do controll-player
   */
  clearInterval(this.eventTimer)
}