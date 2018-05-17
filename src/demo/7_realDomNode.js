import React, {Component} from 'react'

class Focus extends Component {

    constructor(props) {
        super(props);

        // fixme 通过继承Component的方式必须显示绑定回调方法，React.createClass自动绑定了
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.refs.focusInput.focus();
    };

    render() {
        return (
            <div>
                <input type="text" ref="focusInput"/><br/>
                <input type="submit" value="点击获取焦点" onClick={this.handleClick}/>
            </div>
        )
    }
}

export default Focus;