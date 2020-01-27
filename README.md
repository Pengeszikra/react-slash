# REACT-CAT -- ! *slowly deprecated* !
Tiny useReducer / jsx element naming oriented react helper library.

**Highlights:**
- Multiple div factory from classList, with hook like naming
- css -> jsx naming layer
- Single stepp action constans and object definition
- Custom hook return actions calls include dispatch
- Unify action object
- Prevent overclick
- show on/of capable hof

## Usage
```npm install @pengeszikra/react-cat```

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
import { divFactory, actionCreator, useReducerActions } from '@pengeszikra/react-cat';

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

### create react library on npm link set: 
- <https://www.pluralsight.com/guides/publish-es6-react-modules-to-npm> 
- <https://medium.com/quick-code/publish-your-own-react-component-as-npm-package-under-5-minutes-8a47f0cb92b9>
- <https://medium.com/@vmarchesin/how-to-publish-a-npm-package-in-four-steps-4344ab88e852>
- <https://stackoverflow.com/questions/52092739/upgrade-to-babel-7-cannot-read-property-bindings-of-null>
- <https://dev.to/devdebelistic/setup-react-using-webpack4-babel-7-and-es-lint-airbnb-styling-4d65>
