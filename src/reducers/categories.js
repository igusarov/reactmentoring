const categories = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      console.log('add');
      break;
    default:
      return state
  }
};

export default categories
