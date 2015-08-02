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
    expect(ctrl.taskList).toBe();
  });

  describe('when input task,', function(){

    it('displays a list of the tasks', function(){
      ctrl.inputTask = 'laundry';
      ctrl.addTask();
      expect(ctrl.taskList[0].task).toEqual('laundry');
    });
  });

  describe('when user marks task as completed', function(){

    it('task has a completed status of true', function(){
      ctrl.inputTask = 'do laundry';
      ctrl.addTask();
      ctrl.completeItem('do laundry');
      expect(ctrl.taskList[0].completed).toEqual(true);
    });
  });

});
