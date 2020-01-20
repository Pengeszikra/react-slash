import React from 'react';
import { render } from 'react-dom';
import './index.scss';

render(
    <pre>{`REACT-CAT

    lightweight react library for simplify div classname settings,
    reducers and actions and so much more.
    
    this is my first npm packag so the first stepp is 
    create correct npm compatible library, sounds a little bit wierd.

    <pre> is the best way for formatted text by single DOM element. 

    -----------------------------------------------------------------

    library functions:

    - divFactory
    - createAction
    - useReducerWithActions
    - noprop
    - showtime

    `}</pre>
, document.getElementById('root'));