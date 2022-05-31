import { state } from "../AppState.js"

function _drawSnacks() {
    let snacks = state.snacks
    let template = ''

    snacks.forEach(s => template += `<li> ${s.name} </li>)`)
    document.getElementById('snacks').innerHTML = template
}

export class ChipsController {
    constructor() {
        _drawSnacks()
    }
}