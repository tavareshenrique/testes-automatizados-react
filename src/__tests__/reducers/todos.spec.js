import todosReducer, {
  Creators as TodosActions
} from "../../store/ducks/todos";

describe("Todos Reducers", () => {
  it("should be able to add todos", () => {
    const state = todosReducer({ data: [] }, TodosActions.addTodo("Novo Todo"));

    expect(state.data[0]).toBe("Novo Todo");
  });

  it("should be able to complete todos", () => {
    const todos = ["Fazer Café"];

    const state = todosReducer(
      { data: todos },
      TodosActions.completeTodo("Fazer Café")
    );

    expect(state.data.length).toBe(0);
  });
});
