angular.module('app',['ngAnimate',
                      'ui.router',
                      'color.picker',
                      'app.directives.customerCards'])
  .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('opportunities',{
      url: '/',
      templateUrl: 'templates/opportunities.html'
    });

    $stateProvider.state('about',{
      url: '/about',
      templateUrl: 'templates/about.html'
    });
  }])
