export const removeTodo = (todos, todosToRemove) => {
    const existingTodo = todos.findIndex((todo, i) => todo === todosToRemove)
    console.log(existingTodo)
    if (existingTodo){
        return todos.filter((todo, i) => i !== existingTodo )
    }

    return todos
}