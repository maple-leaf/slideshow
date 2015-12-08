/*
 * init.js
 * Copyright (C) 2015 fengye <fengye@fengyedeMacBook-Air.local>
 *
 * Distributed under terms of the MIT license.
 */

var directiveSlideShare = angular.module('directiveSlideShare', []);

directiveSlideShare.directive('ngVersion', function() {
  return {
      template: '<h2>Angular version: ' + angular.version.full + '</h2><a ng-href="{{pageLink}} target="_blank" style="margin-left: 100px">Open in new tab</a>',
    link: function(scope) {
        console.log(window.location.href);
        scope.pageLink = window.location;
    }
  };
})
.directive('secTitle', function() {
  return {
    scope: true,
    transclude: true,
    template: '<h3>{{title}}: </h3><div ng-transclude></div>',
    link: function(scope, ele, attrs) {
      scope.title = attrs.secTitle;
    }
  };
})
.directive('secTitleIsolate', function() {
  return {
    scope: {},
    transclude: true,
    template: '<h3>{{title}}: </h3><div ng-transclude></div>',
    link: function(scope, ele, attrs) {
      scope.title = attrs.secTitle;
    }
  };
})
.directive('codes', function($http, $timeout) {
    return {
        scope: {},
        template: '<pre><code>{{code}}</code></pre>',
        link: function(scope, ele, attrs) {
            var url;
            if (attrs.id === "html") {
                url = location.href;
            } else if (attrs.id === "js") {
                url = location.href.replace(/html$/, 'js').replace(/examples/, 'examples/js');
            } else {
                url = location.origin + '/examples/css/style.css';
            }
           $http.get(url).success(function(data) {
                scope.code = data;
            });
            $timeout(function() {
                hljs.highlightBlock(ele.children()[0]);
            });
        }
    };
});
