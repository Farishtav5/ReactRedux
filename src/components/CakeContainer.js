import React from 'react';
import { connect } from 'react-redux';
import { buyCakes } from './redux';

function CakeContainer(props) {
    return (
        <div>
           <h2>{props.name} No. of cakes {props.noOfCakes} IC {props.noOfIceCreams}</h2> 
           <button onClick={() => props.buyCake(2)}>Buy Cake</button>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        noOfCakes: state.cake.noOfCakes,
        noOfIceCreams: state.iceCream.noOfIceCreams,
        namu : ownProps.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (number) => dispatch(buyCakes(number))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(CakeContainer);