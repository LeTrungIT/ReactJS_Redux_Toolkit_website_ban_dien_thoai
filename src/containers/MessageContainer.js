import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Message from './../components/Message';
function MessageContainer() {
    const message = useSelector((state) => state.messages);
    return <Message message={message} />;
}
MessageContainer.propTypes = {
    messsage: PropTypes.string,
};
MessageContainer.defaultProps = {
    message: '',
};

export default MessageContainer;
