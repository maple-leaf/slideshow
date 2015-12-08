title: Angular Directive Basic
speaker: fengye
url: https://github.com/ksky521/nodePPT
transition: slide
[slide]

# Angular Directive Basic
## 演讲者：fengye
<style>
	.text-left { text-align: left; }
	slides>slide .slide-wrapper { max-width: 100%; text-align: left;}
	h1, h2 { text-align: center; }
	
</style>
<script>
var base = document.createElement('base');
base.href = location.origin;
if (base.href.indexOf('github') !== 0) {
base.href += '/slideshow/publish';
document.head.appendChild(base);
} else {
document.head.appendChild(base);
}
</script>

[slide]
# 指令基础
[subslide]
=====
## 什么是 Directives
```
At a high level, directives are markers on a DOM element (such as an attribute, element name, comment or CSS class)
that tell AngularJS's HTML compiler ($compile) to attach a specified behavior to that DOM element (e.g. via event listeners),
or even to transform the DOM element and its children.
```
这是angular文档的介绍。 directive主要就是创建自定义的标签/标签属性/class/注释，通过`$compile`编译链接自定义的js逻辑处理或者dom结构转换
=====
## 指令类型
正如之前的定义所说，directive有四种类型
```
<my-dir></my-dir>
<span my-dir="exp"></span>
<!-- directive: my-dir exp -->
<span class="my-dir: exp;"></span>
```
```
Best Practice: Prefer using directives via tag name and attributes over comment and class names.
Doing so generally makes it easier to determine what directives a given element matches.
```
----
关于IE: 推荐使用属性`<div my-dir></div>`. [IE guide](https://code.angularjs.org/1.2.28/docs/guide/ie)
[/subslide]

[slide]
# 自定义指令
[subslide]
=====
## Api: module.directive
```
To register a directive, you use the module.directive API. module.directive takes the normalized directive name followed by a factory function. 
This factory function should return an object with the different options to tell $compile how the directive should behave when matched.
```
======
## 常用的options
=====
###option.restrict
	```
	总共有 EACM 四种，可设置多个值。没有设置时默认为"EA"

	E - Element name (default): <my-directive></my-directive>
	A - Attribute (default): <div my-directive="exp"></div>
	C - Class: <div class="my-directive: exp;"></div>
	M - Comment: <!-- directive: my-directive exp -->
	```
=====
	<iframe data-src="examples/option-restrict.html" src="about:blank;"></iframe>
=====
###option.template
	```
	默认替换掉里面的内容
	- 字符串模版， 如 <div red-on-hover>{{delete_str}}</div>.
	- 返回字符串模版的函数，有两个参数可用：tElement and tAttrs
	```
	
###option.templateUrl
	```
	 异步获取给定的url内容，即便加进了$templateCache，也同样是异步去获取
	 - url字符串， 如 abc.html.
	 - 返回url的函数，有两个参数可用：tElement and tAttrs
	```
###option.transclude/option.replace
```
replace设为ture时，替换掉自身
transclude设为true时，里面的内容会被放到模版里设置了 `ng-transclude` 的标签
```
======
	<iframe data-src="examples/option-template.html" src="about:blank;"></iframe>
=====
###option.scope
```
- false: 默认值，沿用父元素scope
- true: 创建一个子scope，从父元素原型继承，值的改变是隔离的
- {}: 创建一个独立的scope，不从父元素原型继承
```
======
<iframe data-src="examples/option-scope.html" src="about:blank;"></iframe>
=====
###option.link 
	```
	用来自定义DOM操作，事件,scope操作的函数，有五个参数： scope, element, attrs, ctrl, transcludeFn。常用前三个。
	function link(scope, element, attrs) { ... }
	- scope: directive的scope object
	- element: jqLite封装过的 object
	- attrs: directive所属标签属性的key－value object
	```
=====
<iframe data-src="examples/option-link.html" src="about:blank;"></iframe>
[/subslide]

[slide]

# 谢谢 ^_^
- 本ppt的github地址: 
	* repo: [https://github.com/maple-leaf/slideshow](https://github.com/maple-leaf/slideshow)
	* slide: [http://maple-leaf.github.io/slideshow/angular-directive/publish](http://maple-leaf.github.io/slideshow/angular-directive)
- github账号: [@maple-leaf](https://github.com/maple-leaf)

<br><br>

本ppt使用[nodePPT](https://github.com/ksky521/nodePPT)编写
