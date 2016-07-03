var app = angular.module("firebaseApp", []);

app.controller('SignInController', ['$scope', function($scope) {
  $scope.login = function(user) {
   console.log('call #3');
    console.log(user);
  };
}]);

app.directive('signIn', function() {
  return {
    restrict: 'E',
    template:
    '    Log in. ' +
    '    <form method="post" ng-submit="login(user)" name="form"> ' +
    '        <div class="form-group has-feedback"> ' +
    '            <input class="form-control input-lg" type="text" name="email" ng-model="user.email" placeholder="Email" required autofocus> ' +
    '                <span class="ion-at form-control-feedback"></span> ' +
    '        </div> ' +
    '        <div class="form-group has-feedback"> ' +
    '            <input class="form-control input-lg" type="password" name="password" ng-model="user.password" placeholder="Password" required> ' +
    '                <span class="ion-key form-control-feedback"></span> ' +
    '        </div> ' +
    '        <button type="submit" class="btn btn-lg btn-block btn-success">Log in</button> ' +
    '    </form> ' +
    '</section> ',
    controller: 'SignInController'
    };
});
