import { connect } from 'react-redux';
import React, { Component } from 'react';
import Message from './../components/Message';
import * as messages from '../constants/Message';
//import PropTypes from 'prop-types';
class MessageContainer extends Component {
    render() {
        var message = this.props.message;
        return (
            <Message
                message={message}
            />
        );
    }
}
// ProductListContainer.propTypes = {
//     // product phải là array
//     product : PropTypes.arrayOf(
//         // bên trong array phải là object
//         PropTypes.shape({

//         })
//     ).isRequired
// }
const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);
