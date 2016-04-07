import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default ({ children }) => (
    <ReactCSSTransitionGroup
        transitionName="animate--transition"
        transitionEnterTimeout={700}
        transitionLeaveTimeout={700}
        component="div"
    >
        {children}
    </ReactCSSTransitionGroup>
);
