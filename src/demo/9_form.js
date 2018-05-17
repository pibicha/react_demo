import React, {Component} from 'react'

/**
 * 前几节总结了state初始值赋值情况，个人不太喜欢在
 * 构造器中赋值，直接在类中变量声明时赋值
 */
class Form extends Component {

    // {1:'1',2:'2'} json格式、js对象、python字典(三者实际上一样)形式声明state即可
    state = {value: "where r u wanna go"};


    // 变化时，获取文本目标，更新为state的value
    changeHandle(event) {
        let value = event.target.value;
        this.setState({value: value})
    }

    render() {
        var value = this.state.value;
        return (
            <div>
                <input type="text" onChange={this.changeHandle.bind(this)} value={value}/> <br/>
                <span>{value}</span>
            </div>
        )
    }
}

export default Form;