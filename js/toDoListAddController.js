taskList.controller('ToDoListAddController', [function() {

  var self=this;

  self.taskList = [];

  self.addTask = function(){

    var item = {"task": self.inputTask}; //save the input task as a variable 'item'

    console.log(item);

    console.log(self.taskList.push(item));

    self.taskList.push(item);


  };

}]);
