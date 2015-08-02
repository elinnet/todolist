taskList.controller('ToDoListAddController', [function() {

  var self=this;

  // self.taskList = [];

  self.addTask = function(){

    if (self.taskList === undefined) {
     self.taskList = [];
    }

    var item = {"task": self.inputTask};

    self.taskList.push(item);

  };

}]);
