export default class Model {

    constructor(){
        this.view = null;
        this.todos = JSON.parse(localStorage.getItem('todos'));
        if (!this.todos || this.todos.length < 1){
            this.todos = [
                {
                    id: 0,
                    title: 'Primer Todo',
                    description: 'Primer Todo',
                    completed: false
                }
            ]
            this.currentId = 1;
        } else {
            this.currentId = this.todos[this.todos.length - 1].id + 1;
        }
    }

    setView(view){
        this.view = view;
    }

    save(){
        localStorage.setItem('todos',JSON.stringify(this.todos));
    }

    getTodos(){
        return this.todos;
    }

    findTodo(id){
        return this.todos.findIndex((todo) => todo.id == id);
    }

    toggleCompleted(id){
        const index = this.findTodo(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        this.save();        
    }

    addTodo(title, description){
        const todo = {
            id: 0,
            title,
            description,
            completed: false
        }

        this.todos.push(todo);
        console.log(this.todos)

        this.save()
        return {...todo}
    }

    removeTodo(id){
        const index = this.findTodo(id);
        this.todos.splice(index,1);
        this.save();
    }
}