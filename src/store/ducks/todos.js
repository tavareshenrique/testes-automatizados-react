export const Types = {
  ADD: "ADD_TODO"
};

const INITIAL_STATE = {
  data: []
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { data: [...state.todos, action.payload.todo] };
    default:
      return state;
  }
}

export const Creators = {
  addTodo: todo => ({
    type: Types.ADD,
    payload: { todo }
  })
};
