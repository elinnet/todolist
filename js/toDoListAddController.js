taskList.controller('ToDoListAddController', [function() {

  var self=this;

  self.addTask = function(){
    self.taskList = {
      "task": [
        {"item": "do laundry"},
        {"item": "feed dog"},
        {"item": "do banking"}
      ]
    };
    console.log(self.inputTask);
  };
}]);
