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
});
