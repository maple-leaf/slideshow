/*
 * option-template.js
 * Copyright (C) 2015 fengye <fengye@fengyedeMacBook-Air.local>
 *
 * Distributed under terms of the MIT license.
 */

directiveSlideShare.directive('mytemplate', function() {
  return {
    template: '<strong>&#x261e; Template string &#x261c;</strong>'
  };
})
.directive('mytemplateFunc', function() {
  return {
      template: function(tEle, tAttr) {
          console.log(tEle, tAttr);
          if (tEle[0].tagName.toLowerCase() === 'p') {
              return '<strong>&#x261e; Template string returned from `template` function , --> P TAG <-- &#x261c;</strong>';
          } else {
              return '<strong>&#x261e; Template string returned from `template` function , --> NOT P TAG <-- &#x261c;</strong>';
          }
      }
  };
})
.directive('mytemplateUrl', function() {
  return {
      templateUrl: 'template.html'
  };
})
.directive('mytemplateUrlFunc', function() {
  return {
      templateUrl: function() {
          return 'template.html';
      }
  };
})
.directive('mytemplateRe', function() {
  return {
      replace: true,
      templateUrl: 'template.html'
  };
})
.directive('mytemplateTr', function() {
  return {
      transclude: true,
      template: '<h3 ng-transclude></h3><div>&#x261d;被放在上一个标签里&#x261d;</div>'
  };
});


