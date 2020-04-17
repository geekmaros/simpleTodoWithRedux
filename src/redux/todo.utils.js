export const removeTodo = (todos, todosToRemove) => {
    const existingTodo = todos.find((todo) => todo === todosToRemove)
    console.log(existingTodo)

    if (existingTodo){
        return todos.filter((todo ) => todo !== existingTodo )

    }

    return todos
}