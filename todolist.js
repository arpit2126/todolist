var TodoList = function(){

		 		var tasks = [];
		 		var counter = 0;
		 		var Task = function(description){
				 	this.id = counter+1;
				 	this.description = description;
				 	this.completed = false;
				};

				Task.prototype.complete = function(){
				  	this.completed = true;
				};

				var removeTask = function(index){
				  	tasks.splice(index, 1);
				};

				var addTask = function(description){
					var task = new Task(description);
					tasks.push(task);
				};

				var completeTask = function(task){
     				task.complete();
				};

				var taskList = function(){
					return tasks;
				}

				return {
					addTask : addTask,
					removeTask:removeTask,
					taskList:taskList,
					completeTask:completeTask
				};
	}
