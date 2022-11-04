import { render } from 'sass'
import{ Component } from '../../core'

export class Button extends Component{
        constructor()
        super();
        this.state = {
            isActiv: false
        }
}

render(){
    return`
    <button>Click</button>
    `
}

customElements.define('my-button', Button)
