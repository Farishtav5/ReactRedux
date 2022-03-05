import React from 'react';
import { connect } from 'react-redux';
import { buyCakes, buyIceCreams } from './redux';

function ItemContainer(props) {
    return (
        <div>
           <h2> No. of {props.type} {props.itemCount}</h2> 
           <button onClick={() => props.buyItem(2)}>Buy {props.type}</button>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        itemCount : ownProps.type == "cake" ? state.cake.noOfCakes : state.iceCream.noOfIceCreams
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const buyItem = ownProps.type === "cake" ? 
    (number) => dispatch(buyCakes(number)) :
    (number) => dispatch(buyIceCreams(number))
    return {
        buyItem
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
    )(ItemContainer);