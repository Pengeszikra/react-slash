import React, { createElement } from 'react';

export default ({type}, ...classList) => classList.map( className => props => React.createElement(type, {className, ...props}) );
