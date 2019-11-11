angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.dizionario', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/dizionario.html',
        controller: 'dizionarioCtrl'
      }
    }
  })

  .state('tabsController.sintassi', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/sintassi.html',
        controller: 'sintassiCtrl'
      }
    }
  })

  .state('tabsController.lectio', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/lectio.html',
        controller: 'lectioCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.GhimelListaNomi', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/GhimelListaNomi.html',
        controller: 'GhimelListaNomiCtrl'
      }
    }
  })

  .state('tabsController.AlephListaNomi', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/AlephListaNomi.html',
        controller: 'AlephListaNomiCtrl'
      }
    }
  })

  .state('tabsController.BethListaNomi', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/BethListaNomi.html',
        controller: 'BethListaNomiCtrl'
      }
    }
  })

  .state('tabsController.AlephDefinizioni', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/AlephDefinizioni.html',
        controller: 'AlephDefinizioniCtrl'
      }
    }
  })

  .state('tabsController.GhimelDefinizioni', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/GhimelDefinizioni.html',
        controller: 'GhimelDefinizioniCtrl'
      }
    }
  })

  .state('tabsController.BethDefinizioni', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/BethDefinizioni.html',
        controller: 'BethDefinizioniCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')


});