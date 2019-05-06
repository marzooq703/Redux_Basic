import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addCharecterById } from '../actions';

class CharecterList extends Component {
    render() {
        console.log('this.props', this.props);
        return (
            <div>
                <h4>Charecters</h4>
                <ul className="list-group">
                    {
                        this.props.charecters.map(charecter => {
                            return (
                                <li key={charecter.id} className="list-group-item">
                                    <div className="list-item">{charecter.name}</div>
                                    <div className="list-item right-button" onClick={() => this.props.addCharecterById(charecter.id)}>+</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        charecters: state.charecters
    };
}

// function mapDispathToProps(dispatch) {
//     return bindActionCreators({ addCharecterById }, dispatch)
// }

export default connect(mapStateToProps, { addCharecterById })(CharecterList);

//you can even directly use  {addCharecterById} in the connect
//instread of creating mapDispatchToProps