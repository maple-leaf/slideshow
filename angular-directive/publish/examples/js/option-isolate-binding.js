/*
 * option-template.js
 * Copyright (C) 2015 fengye <fengye@fengyedeMacBook-Air.local>
 *
 * Distributed under terms of the MIT license.
 */

directiveSlideShare.directive('equalSign', function() {
  return {
      scope: {
          dTest: '='
      },
      template: 'test in directive: <input ng-model="dTest" type="text"> => {{dTest}}'
  };
})
.directive('atSign', function() {
  return {
      scope: {
          dTest: '@',
          dTest2: '@'
      },
      template: 'test in directive: <input ng-model="dTest" type="text"> => {{dTest}}<div>不使用双括号会被解析成字符串{{dTest2}}</div>'
  };
})
.directive('andSign', function() {
  return {
      scope: {
          andSign: '&'
      },
      template: 'test in andSign: <input ng-model="test" type="text" ng-change=\'andSign({test: test, happyFace: "^_^"})\'>',
  };
})
.controller('bindingCtrl', function($scope) {
    $scope.getValue = function(value, happyFace) {
        alert(value + happyFace);
    };
});
