class _LineEffect {
  constructor(height, heightMax, heightMin, color) {
    this.width = 20
    this.height = height
    this.heightMax = heightMax
    this.heightMin = heightMin
    this.color = color
    this.velocity = 10
    this.VELOCITY = this.velocity
  }
  setHeight(h) {
    this.height = h
  }
  setHeightMax(h) {
    this.heightMax = h
  }
  setHeightMin(h) {
    this.heightMin = h
  }
  setWidth(w) {
    this.width = w
  }
  getHeight(h) {
    return this.height
  }
  getHeightMax(h) {
    return this.heightMax
  }
  getHeightMin(h) {
    return this.heightMin
  }
  getWidth(w) {
    return this.width
  }
  animate(_vm_) {
    if (this.height >= this.heightMax)
      this.velocity *= -1
    if (this.height <= this.heightMin) {
      if (!_vm_.isPlay) {
        this.velocity = 0
      } else {
        this.velocity = this.VELOCITY
      }
    }
    //if(this.velocity !== 0 && _vm_.isPlay){
    this.height += this.velocity
    //}
  }
}
class _GroupEffect {
  constructor(effectArray = [], options = {}) {
    this.effectArray = Array.isArray(effectArray) ? effectArray : []
    this.context2d = null
    this._vm_ = null
    this.lineGap = options.lineGap ? options.lineGap : 10
    this.sideSpace = options.sideSpace ? options.sideSpace : 35
  }
  setContext2d(ctx2d) {
    this.context2d = ctx2d
  }
  setVm(vm) {
    this._vm_ = vm
  }
  renderContextEffect(context2d, self) {
    this.setVm(self)
    this.setContext2d(context2d)
    this.drawEffectOnCanvas()
  }
  drawEffectOnCanvas() {
    for (let i = 0; i < this.effectArray.length; i++) {
      const effect = this.effectArray[i]

      this.context2d.fillStyle = effect.color
      this.context2d.fillRect(
        ((effect.width + this.lineGap) * i) + this.sideSpace,
        this.context2d.canvas.height - effect.getHeight(),
        effect.getWidth(),
        effect.getHeight()
      )
      effect.animate(this._vm_)
    }
  }
}

export const LineEffect = _LineEffect
export const GroupEffect = _GroupEffect