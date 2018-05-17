import React, {Component} from 'react';

import './App.css';
import MyNavBar from './base/navbar'
// import demo
import HelloWorld from './demo/1_helloworld'
import Button from './demo/2_jsx_grammer'
import BookList from './demo/3_array'
import User from './demo/4_componentProps'
import StudyGroup from "./demo/5_propsChildren";
import StringInput from "./demo/6_propsTypeRestrict"
import Focus from "./demo/7_realDomNode"
import State from "./demo/8_state"
import Form from "./demo/9_form"
import Ajax from "./demo/10_ajax";

class App extends Component {
    render() {
        return (
            //<MyNavBar/>
            //demo :
            //1 <HelloWorld/>
            //2 <Button/>
            //3 <BookList/>
            //4 <User name='James' addr='北京'/>

            // 5 <StudyGroup>
            //     <span>James</span>
            //     <span>Haden</span>
            //     <span>Yao</span>
            // </StudyGroup>

            // 6 <StringInput title="xx"/>
            // 7 <Focus/>
            // 8 <State/>
            //<Form/>
            <Ajax url='https://api.github.com/search/repositories?q=javascript&sort=stars'/>
        );
    }
}

export default App;
