// 扩展 jQuery 实现自定义方法，也叫编写 jQuery 插件
$.fn.highlight1 = function () {
	// this 为当前 jQuery 对象
	this.css('backgroundColor', '#fffceb').css('color', '#d85030');
	return this;
}

// 自定义参数
$.fn.highlight2 = function (options) {
	// options 检查：如果无效则取默认值
	var bgcolor = options && options.backgroundColor || '#fffceb';
	var color = options && options.color || '#d85030';
	this.css('backgroundColor', bgcolor).css('color', color);
	return this;
}

// 另一种处理默认值的方式：$.extend(target, obj1, obj2)，
// 合并多个 obj 到 target 中，同名属性取后面的 obj 中的值（即后面覆盖前面的属性）
var opts = $.extend({}, {
	backgroundColor: '#00a8e6',
	color: '#ffffff'
}, options);

// 自定义默认值示例
$.fn.highlight = function (options) {
	// 合并参数和默认值（options 可不传），如果 options 不空，则覆盖默认值
	var opts = $.extend({}, $.fn.highlight.defaults, options);
	this.css('backgroundColor', opts.backgroundColor).css('color', opts.color);
	return this;
}
// 初始默认值
$.fn.highlight.defaults = {
	color: '#d85030',
	backgroundColor: '#fff8de'
}
// 用户自定义默认值
$.fn.highlight.defaults.color = '#fff';
$.fn.highlight.defaults.backgroundColor = '#000';

// 针对特定元素的扩展
// 调用示例：
$('#main a').external();
// 扩展的定义：
$.fn.external = function () {
	// this 是当前的 DOM 对象
	return this.filter('a').each(function () {
		var a = $(this);
		var url = a.attr('href');
		if (url && (url.indexOf('http://')===0 || url.indexOf('https://')===0)) {
			a.attr('href', '#0') // 修改原有链接
			.removeAttr('target') // 移除 target 属性，避免打开一个新标签页
			.append(' <i class="uk-icon-external-link"></i>') // 增加 icon
			.click(function () { // 点击时显示确认弹窗，确认后打开链接
				if (confirm('你确定要前往' + url + '?')) {
					window.open(url);
				}
			});
		}
	});
}



