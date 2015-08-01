describe('ToDoListAddController', function(){
  beforeEach(module('ToDoListApplication'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListAddController');
  }));

  it('initialises with an empty task input box', function(){
    expect(ctrl.inputTask).toBeUndefined();
  });

});
