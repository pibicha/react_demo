import React, {Component} from 'react'

class State extends Component {

    // constructor(props) {
    //     super(props);
    //     // {}中可以放多个状态;在继承方式中，state的初始化需要放到构造器中
    //     this.state = {liked: false};
    // }

    // 和java语言一样 赋初值的地方可以在声明变量时就赋值，或者在构造器中赋值
    state = {liked: false};

    handleClick() {
        // this.state = { fixme: 直接更新state不会重新渲染！！
        //     liked: !this.state.liked
        // }

        // 要达到重新渲染的目的，需要使用setState方法
        this.setState({
            liked: !this.state.liked
        });
    };


    render() {
        var text = this.state.liked ? "Love" : "Hate";
        return (
            // fixme： 与前一节一样，onclick事件需要显示绑定到this上;可以不在构造器上绑定，在使用时绑定
            <h1 onClick={this.handleClick.bind(this)}>I {text} u </h1>
        );
    }
}

export default State