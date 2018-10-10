console.log('-index.js-');


//---------------------------------------------------------
// using DOM API
//---------------------------------------------------------
let alertBox = document.querySelector('.alert');
let showBtn = document.querySelector('.btn-primary');
let hideBtn = document.querySelector('.btn-danger');
let greetBtn = document.querySelector('.btn-success');

showBtn.addEventListener('click', e => {
    alertBox.style.display = 'block'
});
hideBtn.addEventListener('click', e => {
    alertBox.style.display = 'none'
});
greetBtn.addEventListener('click', e => {
    alertBox.innerHTML = "good evening";
});

//---------------------------------------------------------
// XHR/Fetch api
//---------------------------------------------------------

let todosBtn = document.querySelector('.btn-dark');
todosBtn.addEventListener('click', e => {
    let api = 'https://jsonplaceholder.typicode.com/todos?_limit=5'
    // async http-request, by XHR/Fetch api
    let promise = fetch(api);
    let arr = [];
    let todosList = document.getElementById('todos'); // ??
    promise
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                let liTemplate = `
                <li class="list-group-item">
                    <span>${todo.id}</span>
                    <label>${todo.title}</label>
                    <span>${todo.completed}</span>
                </li>
            `;
            arr.push(liTemplate)
            })
            todosList.innerHTML = arr.join("");
        })

});