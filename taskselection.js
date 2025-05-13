class TaskManager {
    constructor() {
        this.tasks = [];
    }

    selectionSortTasks(taskList) {
        const tasks = [...taskList];
        for (let i = 0; i < tasks.length - 1; i++) {
            let minIndex = i;
        for (let j = i + 1; j < tasks.length; j++) {
            if (tasks[j].priority < tasks[minIndex].priority) {
                minIndex = j;          
        }
    }
            if (minIndex !== i) {
                [tasks[i].priority, tasks[minIndex].priority] = [tasks[minIndex].priority, tasks[i].priority];
            }
        }
        return tasks;
    }

    addTasks(title, description, priority) {
        return this.tasks.push({title, description, priority});
    }

    removeTask(title) {
        this.tasks = this.tasks.filter(task => task.title !== title);
        return this.tasks;
    }

    allTasks() {
        if (this.tasks.length === 0) {
            return "No tasks found";
        }
        return this.tasks;
    }

    findTasksByPriority(priority) {
        if (typeof priority !== "number" || priority < 1 || priority > 5) {
            return "Priority must be a number between 1 and 5.";
        }
        const filteredTasks = this.tasks.filter(task => task.priority === priority);
        return filteredTasks.length > 0 ? filteredTasks : "No tasks found with the given priority.";
    }

    getHighestPriority() {
        if (this.tasks.length === 0) {
            return "No tasks found";
        }
        const sortedTasks = this.selectionSortTasks(this.tasks);
        const task = sortedTasks[0]; 
        console.log(`Highest priority task: [${task.priority}] ${task.title}`);
        return task; 
    }

    getLowestPriority() {
      if (this.tasks.length === 0) {
          return "No tasks found";
      }
      const sortedTasks = this.selectionSortTasks(this.tasks);
      const task = sortedTasks[sortedTasks.length - 1]; 
      console.log(`Lowest priority task: [${task.priority}] ${task.title}`);
      return task; 
  }

}

const taskManager = new TaskManager();
taskManager.addTasks("Task 1", "Description 1", 3);
taskManager.addTasks("Task 2", "Description 2", 5);
taskManager.addTasks("Task 3", "Description 3", 1);
taskManager.addTasks("Task 4", "Description 4", 4);
taskManager.addTasks("Task 5", "Description 5", 2);

console.log(taskManager.removeTask("Task 3"));
console.log(taskManager.findTasksByPriority(3)); 
console.log(taskManager.findTasksByPriority(6)); 
console.log(taskManager.findTasksByPriority(2)); 
console.log(taskManager.allTasks());
console.log(taskManager.selectionSortTasks(taskManager.tasks));
console.log(taskManager.getHighestPriority());
console.log(taskManager.getLowestPriority());