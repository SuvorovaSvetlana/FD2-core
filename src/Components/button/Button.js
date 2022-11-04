import { Component } from '../../core'
import './button.scss'
export class Button extends Component {
    constructor() {
        super();
        this.state = {
            count:1
        }
    }

    render() {
        return `
        <button class="plus">+</button>
        <span>${this.state.count}</span>
        <button class="minus">-</button>
        `
    }


}

customElements.define('my-button', Button)

