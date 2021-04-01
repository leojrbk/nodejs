

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'AAA',
        completed: false
    }, {
        text: 'zzz',
        completed: false
    }],
    getTaskToDo() {
        console.log('Task to do: ' + this.tasks)
        return this.tasks.filter((task) => task.completed === false)
    }
}


console.log(tasks.getTaskToDo())