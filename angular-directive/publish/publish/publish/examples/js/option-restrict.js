/*
 * option-strict.js
 * Copyright (C) 2015 fengye <fengye@fengyedeMacBook-Air.local>
 *
 * Distributed under terms of the MIT license.
 */

directiveSlideShare.directive('myele', function() {
  return {
    restrict: "E",
    template: '<button>myEle</button>'
  };
});

directiveSlideShare.directive('myattr', function() {
  return {
    restrict: "A",
    template: '<button>myAttr</button>'
  };
});

directiveSlideShare.directive('myclass', function() {
  return {
    restrict: "C",
    template: '<button>myClass</button>'
  };
});

directiveSlideShare.directive('mycomment', function() {
  return {
    restrict: "M",
    link: function(scope, ele) {
      ele.parent().on('click', function() {
        alert('comment');
      });
    }
  };
});
