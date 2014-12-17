'use strict';

angular.module('siteApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        'title': 'Home',
        'link': '/'
      },
      {
        'title': 'Resume',
        'link': '/resume'
      }, 
      {
        'title': 'Projects',
        'link': '/projects'
      },
      {
        'title': 'Network',
        'link': '/network'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });