import { LineEffect, GroupEffect } from './effects'

const effect1 = new LineEffect(40, 50, 10, '#257804')
const effect2 = new LineEffect(55, 60, 15, '#2566a7')
const effect3 = new LineEffect(70, 70, 10, '#257804')
const effect4 = new LineEffect(55, 60, 15, '#2566a7')
const effect5 = new LineEffect(40, 50, 10, '#257804')

const ArrayEffect = [effect1, effect2, effect3, effect4, effect5]
const optionsEffect = { lineGap: 10, sideSpace: 40 }

const groupEffect = new GroupEffect(ArrayEffect, optionsEffect)
export const updateEffectsMusic = function () {
  groupEffect.renderContextEffect(this.context, this)
}