define(function (require, exports) { //dedine闭包
	var fun = require("./qkyFunH5.js"); //函数总成

	exports.login = function () {
		var h = $(".zh-login-box").outerHeight() / 2;
		$(".zh-login-box").css("margin-top", -h + "px");
		$(".zh-login-button").click(function () {
			var pass = 0;
			$(this).parents("form").find(".zh-input").each(function (i) {
				if (fun.isNull($(this).val()) == "kong") {
					isErr($(this).parent());
					pass++;
				}
			})
			if (pass == 0) {
				if ($("#user").val() == "zwt" && $("#pwd").val() == "123")
					window.location.href = "index_choose.html"
				else
					alert("账号或者密码错误！")
			}
		})
		function isErr(id) {
			var thisval = id.find(".zh-input").val();
			if (fun.isNull(thisval) == "kong") {
				id.find(".err-tit").show();
				id.find(".zh-input").addClass("error")
			}
		}
	}

	exports.choose = function () {
		$(".zh-choose-list").click(function(){
			window.location.href = "index_.html"
		})
	}

	exports.remove = function () {
		$(".user-chooseli").click(function () {
			$(this).addClass("active").siblings().removeClass("active");
			var sid=$(this).attr("sid");
			$("#"+sid).addClass("open").siblings().removeClass("open");
		});
		$(".zh-sbut").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
		})
	}

	exports.indexs = function () {
		$(".app-list.app_").each(function(i){
			if(i>=7){
				$(this).addClass("app-mores");
				$(".more").show();
			}
		});
		$(".more").click(function(){
			$(".app-mores").toggle();
		})
	}
	exports.newslist = function () {
		$(".zh-select").each(function(i){
			$(this).find(".zh-sel-value").click(function(){
				$(this).parent().find(".zh-sel-box").slideToggle(200);
				$(this).parent().siblings().find(".zh-sel-box").slideUp(200);
			});
			$(this).find(".zh-sel-option").click(function(){
				$(this).addClass("active").siblings().removeClass("active");
				$(this).parent().slideUp(200);
				$(this).parents(".zh-select").find(".zh-sel-value span").html($(this).html());
			});
		})
	}


});