//how do i see what is inside of tasklist??


taskList.controller('ToDoListAddController', [function() {

  var self=this;

  // self.taskList = [];

  self.addTask = function(){

    if (self.taskList === undefined) {
     self.taskList = [];
    }

    var item = {task: self.inputTask, completed: false};

    self.taskList.push(item);

  };

  self.completeItem = function(task){ //how can I see the value from this?

    for (i=0; i < self.taskList.length; i++){
      if (self.taskList[i].task === task){
        // self.taskList[i].completed = !(self.taskList[i].completed);
        self.taskList[i].completed = true;
      }
    }
  };

  self.completedTask = function(){


  };

}]);
