function MainController($scope) {
  $scope.contact = {
    name: 'Steve',
    email: 'myemail@mydomain.com',
    phone: '0123456789'
  };
}

angular
  .module('app')
  .controller('MainController', MainController);