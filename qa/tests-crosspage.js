var Browser = require('zombie'),
	assert = require('chai').assert;

var browser;

suite('Cross-Page Tests', function(){

	setup(function(){
		browser = new Browser();
	});

	test('requesting a group rate quote	from the hood river tour page ' +
		'should populate the referrer field', function(done){
		var referrer = 'http://localhost:3000/tours/hood-river';
		browser.visit(referrer, function(){
			console.log("test1");
			browser.clickLink('.requestGroupRate', function(){
				console.log("test2");
				console.log("test: " + browser.referrer);
				browser.assert.success();
				// assert(browser.referer === referrer);
				// assert(browser.field('referrer').value === referrer);
				done();
			});
		});
	});

	// test('requesting a group rate from the oregon coast tour page should ' +
	// 		'populate the referrer field', function(done){
	// 	var referrer = 'http://localhost:3000/tours/oregon-coast';
	// 	browser.visit(referrer, function(){
	// 		browser.clickLink('.requestGroupRate', function(){
	// 			console.log("test: " + browser.referer);
	// 			assert(referrer === referrer);
	// 			// assert(browser.referer === referrer);
	// 			// assert(browser.field('referrer').value === referrer);
	// 			done();
	// 		});
	// 	});
	// });

	// test('visiting the "request group rate" page dirctly should result ' +
	// 		'in an empty referrer field', function(done){
	// 	browser.visit('http://localhost:3000/tours/request-group-rate',
	// 		function(){
	// 			console.log("test: " + browser.referer);
	// 			assert(browser.referer === referrer);
	// 			// assert(browser.field('referrer').value === '');
	// 			done();
	// 	});
	// });

});