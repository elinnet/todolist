describe('ToDoListAddController', function(){
  beforeEach(module('ToDoListApplication'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListAddController');
  }));

  it('initialises with an empty task input box', function(){
    expect(ctrl.inputTask).toBeUndefined();
  });

  it('initialises with an empty task list',function(){
    expect(ctrl.taskList).toBeUndefined();
  });

  describe('when input task,', function(){
    var task = [
      {'item': 'do laundry'},
      {'item': 'feed dog'},
      {'item': 'do banking'}
    ];

    it('displays a list of the tasks', function(){
      ctrl.inputTask = 'laundry';
      ctrl.addTask();
      expect(ctrl.taskList.task).toEqual(task);
    });
  });
});
