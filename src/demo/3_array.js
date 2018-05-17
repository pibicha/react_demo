import React, {Component} from 'react';

class BookList extends Component {

    render() {
        var books = [<li>红楼梦</li>, <li>三国演义</li>,
            <li>水浒传</li>, <li>西游记</li>];
        return (
            <div>
                <ol>
                    {books}
                </ol>
            </div>
        )
    }
}

export default BookList;