const noprop = call => event => {
  event.stopPropagation();
  call(event);
};

export const stopProp = noprop(()=>{});

export default noprop;