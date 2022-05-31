import { Snack } from "./Models/ChipsModel.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
}

// money = 0

class State {

  snacks = [
    new Snack('Granola Bar', 1.00),
    new Snack('Chips', 1.50),
    new Snack('Cookie', 2.00)
  ]
}

export const state = new State


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
