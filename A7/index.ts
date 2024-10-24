
enum Priority {
    Low = 1,
    Medium = 2,
    High = 3,
    
   
}





interface Task{
    id : number,
    name : string,
    date : string,
    category : "work" | "home" | "hobby" | "other", 
    priority : Priority,
    tags? : Array<string>,
    completed : boolean

}


class TaskManager {
    private _tasks: Array<Task>; 

    constructor(arr?: Array<Task>) {
        this._tasks = arr || [];
    }

    getTasks() {
        return this._tasks;
    }

    addTask(task: Task) {
        this._tasks.push(task);
    }

    listTasks() {
        return this._tasks.map(task => {
            return `${task.id} | ${task.name}  (${task.category})\n
            Priority: ${Priority[task.priority]} \nDate: ${task.date} \nTags: ${task.tags?.join(', ') || 'None'} \nCompleted: ${task.completed}`;
        });
    }

    
    sortTasksByPriority() {
        this._tasks.sort((a, b) => a.priority - b.priority);
        
    }

    findTask(input: number | string): Task | string { //allow string and number as input and then apply the appropriate search method according to case
        let foundTask: Task | undefined;

        if (typeof input === 'number') {
            foundTask = this._tasks.find(task => task.id === input);
        } else if (typeof input === 'string') {
            foundTask = this._tasks.find(task => task.name.toLowerCase() === input.toLowerCase());
        }

        return foundTask || "Task not found";
    }
}