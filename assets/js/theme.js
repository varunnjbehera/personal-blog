function hasScrolled(){var a=$(this).scrollTop();Math.abs(lastScrollTop-a)<=delta||(a>lastScrollTop&&a>navbarHeight?($("nav").removeClass("nav-down").addClass("nav-up"),$(".nav-up").css("top",-$("nav").outerHeight()+"px")):a+$(window).height()<$(document).height()&&($("nav").removeClass("nav-up").addClass("nav-down"),$(".nav-up, .nav-down").css("top","0px")),lastScrollTop=a)}function loadSearch(){idx=lunr(function(){this.field("id"),this.field("title",{boost:10}),this.field("summary")}),$.getJSON("/content.json",function(a){window.searchData=a,$.each(a,function(a,b){idx.add($.extend({id:a},b))})}),$("#search").on("click",function(){$(".searchForm").toggleClass("show")}),$("#searchForm").on("submit",function(a){a.preventDefault(),results=idx.search($("#searchField").val()),$("#content").html("<h1>Search Results ("+results.length+")</h1>"),$("#content").append('<ul id="searchResults"></ul>'),$.each(results,function(a,b){entry=window.searchData[b.ref],$("#searchResults").append('<li><a href="'+entry.url+'">'+entry.title+"</li>")})})}$(document).scroll(function(){var a=$(this).scrollTop();a>280?$(".alertbar").fadeIn():$(".alertbar").fadeOut()});var didScroll,lastScrollTop=0,delta=5,navbarHeight=$("nav").outerHeight();$(window).scroll(function(){didScroll=!0}),setInterval(function(){didScroll&&(hasScrolled(),didScroll=!1)},250),$(".site-content").css("margin-top",$("header").outerHeight()+"px"),$(function(){function a(a){a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length&&$("html,body").animate({scrollTop:a.offset().top},1e3)}setTimeout(function(){location.hash&&(window.scrollTo(0,0),target=location.hash.split("#"),a($("#"+target[1])))},1),$("a[href*=\\#]:not([href=\\#])").click(function(){return location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname?(a($(this.hash)),!1):void 0})});