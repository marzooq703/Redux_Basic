import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { addCharecterById } from '../actions';

class HeroList extends Component {
    render() {
        return (
            <div>
                <h4>Your Heroes Squad:</h4>
                <ul className="list-group">
                    {
                        this.props.heroes.map(hero => {
                            return (
                                <li key={hero.id} className="list-group-item">
                                    <div className="list-item">{hero.name}</div>
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
        heroes: state.heroes
    };
}


export default connect(mapStateToProps, null)(HeroList);

//you can even directly use  {addCharecterById} in the connect
//instread of creating mapDispatchToProps