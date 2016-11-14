// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers']);



app.run(function($ionicPlatform, $state, $ionicHistory) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.hide();
    }
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
  });

  $ionicPlatform.registerBackButtonAction(function (event) {
    if($state.current.name=="app.home"){
      navigator.app.exitApp();
    }
    else {
      history.go(-1);
      
      $ionicHistory.clearHistory();
      /*
      $ionicHistory.clearCache();
      $ionicHistory.clearHistory();
      navigator.app.backHistory();
      navigator.app.clearHistory();*/
    }
    /*count = -1;*/
  }, 100);



})

app.controller('EmailCtrl', function($cordovaEmailComposer, $scope) {
  console.log("entrei no email composer");
  $cordovaEmailComposer.isAvailable().then(function() {
    // is available
    alert("available");
  }, function () {
    // not available
    alert("not available");
    });
  $scope.sendEmail = function(){
    console.log("entrei na função de email")
    var email = {
      to: 'teste@example.com',
      cc: 'teste@example.com',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
     ],
      subject: 'Mail subject',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };

    $cordovaEmailComposer.open(email).then(null, function () {
      // user cancelled email
    });
  }
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/introducao.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.ligue', {
      url: '/ligue',
      views: {
        'menuContent': {
          templateUrl: 'templates/ligue.html'
        }
      }
    })
    .state('app.introducao', {
      url: '/introducao',
      views: {
        'menuContent': {
          templateUrl: 'templates/introducao.html',
        }
      }
    })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/' + '/:playlistId' +'.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
   .state('app.acesso', {
      url: '/acesso',
      views: {
        'menuContent': {
          templateUrl: 'templates/VerifiqueAcesso.html',
        }
      }
    })

  .state('app.problemas', {
      url: '/problemas',
      views: {
        'menuContent': {
          templateUrl: 'templates/problemas.html',
        }
      }
  })

  .state('app.habilitando', {
      url: '/habilitando',
      views: {
        'menuContent': {
          templateUrl: 'templates/habilitando.html',
        }
      }
  })

  .state('app.redefinindo', {
      url: '/redefinindo',
      views: {
        'menuContent': {
          templateUrl: 'templates/redefinindo.html',
        }
      }
  })

  .state('app.atualizando', {
      url: '/atualizando',
      views: {
        'menuContent': {
          templateUrl: 'templates/atualizando.html',
        }
      }
  })

  .state('app.dns', {
      url: '/dns',
      views: {
        'menuContent': {
          templateUrl: 'templates/dns.html',
        }
      }
  })
  
  .state('app.ip', {
      url: '/ip',
      views: {
        'menuContent': {
          templateUrl: 'templates/ip.html',
        }
      }
  })

  .state('app.verifiqueComputador', {
      url: '/verifiqueComputador',
      views: {
        'menuContent': {
          templateUrl: 'templates/verifiqueComputador.html',
        }
      }
    })

  .state('app.mudeSenha', {
      url: '/mudeSenha',
      views: {
        'menuContent': {
          templateUrl: 'templates/mudeSenha.html',
        }
      }
    })

    .state('app.listaipsenha', {
      url: '/listaipsenha',
      views: {
        'menuContent': {
          templateUrl: 'templates/listaipsenha.html',
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
