# REACT-CAT  
Small react library with helper functions.

**Highlights:**
- Multiple div factory from classList, with hook like naming
- Single stepp action constans and object definition
- Custom hook return actions calls include dispatch
- Unify action object
- Prevent overclick
- show on/of capable hof

## Usage
```npm install react-cat```

### divFactory
```jsx
  const [FooHolder, FooButton] = divFactory('foo-holder, foo-holder_button');

  return (
    <FooHolder>
      <FooButton>Foo Button</FooButton>
    </FooHolder>
  );
```

### actionCreator
```jsx
  const [FOO_ACTION, fooAction] = actionCreator('foo-action');

  const fooReducer = (state, {type, payload}) => {
    switch (type) {
      case FOO_ACTION: return {...state, foo: payload};
    }
```

### useReducerActions
```jsx
  const {state, fooAction} = useReducerActions(fooReducer, fooInitialState, {fooAction});
```

### noprop
```jsx
  const clickFoo = noprop(fooAction);

  return <div onClick={clickFoo} />;
```

### showtime
```jsx
  const FooComponent = showtime(RootOfFooComponent);

  return <FooComponent show={true} />
```

## react-cat programming example

```jsx
import React from 'react';
import { render } from 'react-dom';
import { divFactory, actionCreator, useReducerActions } from 'react-cat';

const [INC_COUNTER, incCounter] = actionCreator('inc-counter');
const [DEC_COUNTER, decCounter] = actionCreator('dec-counter');

const fooActions = {
  incCounter,
  decCounter,
}

const initialState = {
  counter: 0;
}

const fooReducer = (state, {type, payload}) => {
  switch (type) {
    case INC_COUNTER: return {...state, counter: state.counter + 1};
    case DEC_COUNTER: return {...state, counter: state.counter - 1};
    default: return state;
  }
}

export default props => {
  const {state, incCounter, decCounter} = useReducerActions(fooReducer, initialState, fooActions);
  const {counter} = state;

  const [CatCounterFrame, Counter, CounterUpButton, CounterDownButton] = 
    divFactory('cat-frame', 'cat-counter', 'cat-counter--up', 'cat-counter--down');

  return (
    <CatCounterFrame>
      <Counter>{counter}</Counter>
      <CounterUpButton onClick = {incCounter} />
      <CounterDownButton onClick = {decCounter} />
    </CatCounterFrame>
  );
}
```