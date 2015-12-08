/*
 * option-link.js
 * Copyright (C) 2015 fengye <fengye@fengyedeMacBook-Air.local>
 *
 * Distributed under terms of the MIT license.
 */

directiveSlideShare.directive('linkDemo', function() {
  return {
      template: 'test: <input ng-model="test" type="text" ng-focus="noticeUser()"><span>{{noticeStr}}</span><div>test的值为: <span id="domEvil"></span></div>',
      link: function(scope, ele, attrs) {
          var count = 0;
          scope.noticeUser = function() {
              scope.noticeStr = "哟哟，你想干嘛!!" + (!count ? "" : (" +" + count));
              count++;
          };
          ele.find('input').on('change', function() {
              document.querySelector('#domEvil').textContent = scope.test;
              scope.noticeStr = '';
          });
      }
  };
});
