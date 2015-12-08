/*
 * option-template.js
 * Copyright (C) 2015 fengye <fengye@fengyedeMacBook-Air.local>
 *
 * Distributed under terms of the MIT license.
 */

directiveSlideShare.directive('falsyscope', function() {
  return {
      scope: false,
      template: 'test in falsyscope: <input ng-model="test" type="text">'
  };
})
.directive('truyscope', function() {
  return {
      scope: true,
      template: 'test in truyscope: <input ng-model="test" type="text">'
  };
})
.directive('isolatedscope', function() {
  return {
      scope: {},
      template: 'test in isolatedscope: <input ng-model="test" type="text">',
      link: function(scope) {
          console.log(scope.$parent.test);
      }
  };
})
.directive('transcludescope', function() {
  return {
      template: 'test in transcludescope: <input ng-model="test" type="text" placeholder="test"><input ng-model="test2" type="text" placeholder="test2">',
  };
})
.directive('transcludescopeisolate', function() {
  return {
      template: 'test in transcludescope: <input ng-model="test" type="text" placeholder="test"><input ng-model="test3" type="text" placeholder="test3">',
  };
});
