// 发送 GET 请求，返回 JSON 格式数据
var jqxhr = $.ajax('/api/categories', {
	dataType: 'json'
});

//链式调用处理请求结果
'use strict';
function ajaxLog(s) {
	var txt = $('#test-response-text');
	txt.val(txt.val() + '\n' + s);
}
$('#test-response-text').val('');
var jqxhr = $.ajax('/api/categories', {
	dataType: 'json'
}).done(function (data) {
	ajaxLog('成功，收到的数据：' + JSON.stringify(data));
}).fail(function (xhr, status) {
	ajaxLog('失败：' + xhr.status + '，原因：' + status);
}).always(function () {
	ajaxLog('请求完成：无论成功或失败都会调用');
})

// 常用 AJAX 操作的辅助方法
//GET
var jqxhr = $.get('/path/to/resource', {
	name: 'S',
	check: 1
});
// POST
var jqxhr = $.post('/path/to/resource', {
	name: 'S',
	check: 1
});
// getJSON
var jqxhr = $.getJSON('/path/to/resource', {
	name: 'S',
	check: 1
}).done(function (data) {
	// data 为解析后的 JSON 对象
})




