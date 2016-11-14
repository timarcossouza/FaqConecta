var myapp = angular.module('starter.controllers', ['ionic'])

myapp.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  $scope.GotoLink = function (url) {
    window.open(url,'_system');
  }

  $scope.sendEmail = function() {
    //console.log("entrei no sendEmail");
    window.open('mailto:suporte@conectatelecom.com.br');
  }

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  function anuncia() {
    console.log("entrei em anuncia");
    var inputs = document.getElementsByName('pesquisa');
    var x = inputs[0].value;
    console.log(x);
    var teste = document.getElementsByName("modem-name");
    
    for (var i = 0;i < teste.length ; i++) {
      var t = teste[i].innerHTML;
      console.log(t);
      if (t == x) {
        t.style.color = "red";
      }
      
    }
  }

  $scope.procura = function() {
        var  x = anuncia();
        x.style.color = "red";
          if(x == 'Alca') {
              console.log("entrei no if");
            // do more stuff here
            }
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});

myapp.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: '1°) Verifique o moldem;', desc: 'uasuhasuhasuhuashuashushauashuas', id: 1},
    { title: '2°) Reinicie o Molden', desc: 'gelo em japones', id: 2 },
    { title: '3°) fale com nossos atendentes', desc: 'entao ne', id: 3 },
  ];
});

myapp.controller('PlaylistCtrl', function($scope, $stateParams) {
});
