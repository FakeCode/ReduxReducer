import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators} from 'redux';


class BookList extends Component{
renderList()
{
    return this.props.books.map((book)=>{
        return (
            <li 
            key={book.title} 
            onClick={()=>this.props.selectBook(book)} 
            className="list-group-item">{book.title}
            </li>
        );
    });
}

    render() {
        return (
            <div>
                <ul className = "list-group col-sm-4">
                {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // whatever is return will show up as props
    return {
        books: state.books
    };
}

//anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever select book is called, the result should be passed to all our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//promote BookList from a component to a container-it needs to 
// know about this new dispatch method, selectBook. Make it available as prop.
export default connect(mapStateToProps, mapDispatchToProps) (BookList);