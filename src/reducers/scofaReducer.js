const initializeState = {
  users: [],
  user: {}
}

const scofaReducer = (state = initializeState, action) => {
  console.log(action.type);
  switch (action.type) {
      case "user/add":
          if (!state.users) state.users = [];
          console.log(action.data);
          return state;
      case "user/getAll":
          return {users: action.data};
      case "user/getById":
          return {
              users: state.users,
              user: action.data
          }
      default:
          console.log(state.users);
          return state;
  }
}

export default scofaReducer;