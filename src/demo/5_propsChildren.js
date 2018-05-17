import React, {Component,Children} from 'react'

class StudyGroup extends Component {
    render() {
        return (
            <ol>
                {Children.map(this.props.children, function (ele) {
                    return <li>{ele}</li>
                })}
            </ol>
        )
    }
}

export default StudyGroup;