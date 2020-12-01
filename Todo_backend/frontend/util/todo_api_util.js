export const fetchTodos = () => {
    return $.ajax({
        url: 'api/todos',
        method: 'GET'
    })
}

// fetchTodos().then(res => console.log(res))