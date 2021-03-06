/*
 * init.js
 * Copyright (C) 2015 fengye <fengye@fengyedeMacBook-Air.local>
 *
 * Distributed under terms of the MIT license.
 */

var directiveSlideShare = angular.module('directiveSlideShare', []);

directiveSlideShare.directive('ngVersion', function() {
  return {
      template: '<h2>Angular version: ' + angular.version.full + '</h2><a ng-href="{{pageLink}}" target="_blank" style="position:fixed;right:10px;top:60px;">Open in new tab</a>',
    link: function(scope) {
        scope.pageLink = window.location.href;
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
                url = [location.href.replace(/examples.*/, '/examples/js/init.js'), location.href.replace(/html$/, 'js').replace(/examples/, 'examples/js')];
            } else {
                url = location.href.replace(/examples.*/, '/examples/css/style.css');
            }
            if (angular.isArray(url)) {
                scope.code = '';
                url.forEach(function(u) {
                    $http.get(u).success(function(data) {
                        scope.code += data + '\n\n';
                    });
                });
            } else {
                $http.get(url).success(function(data) {
                    scope.code = data;
                });
            }
            $timeout(function() {
                hljs.highlightBlock(ele.children()[0]);
            });
        }
    };
});
