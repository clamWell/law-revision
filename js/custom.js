$(function(){
	var ieTest = false,
		screenWidth = $(window).width(),
		screenHeight = $(window).height(),
		imgURL = "http://img.khan.co.kr/spko/storytelling/2021/lawrevision/",
		isMobile = screenWidth <= 800 && true || false,
		isNotebook = (screenWidth <= 1380 && screenHeight < 750) && true || false,
		isMobileLandscape = ( screenWidth > 400 && screenWidth <= 800 && screenHeight < 450 ) && true || false;
	window.onbeforeunload = function(){ window.scrollTo(0, 0) ;}
	var randomRange = function(n1, n2) {
		return Math.floor((Math.random() * (n2 - n1 + 1)) + n1);
	};
	$(window).resize(function() {
		screenWidth = $(window).width();
		screenHeight = $(window).height();
    });


	$(".close-ie-block").on("click", function(){
		$(".ie-block-9").hide();
	})

    var ieUnder = false;
    function checkIe(){
        var word;
        if (navigator.userAgent.indexOf("MSIE") >= 0) {
            console.log("ieUNDER 10");
            ieUnder = true;
            return true;
        }else {
            return false;
        }
    }
    checkIe();
	
	var inApp = false;
	function checkKApp(){
		//$(".table-title").html(navigator.userAgent);
		 if(navigator.userAgent.match(/inapp|NAVER|KAKAOTALK|Snapchat|Line|WirtschaftsWoche|Thunderbird|Instagram|everytimeApp|WhatsApp|Electron|wadiz|AliApp|zumapp|iPhone(.*)Whale|Android(.*)Whale|kakaostory|band|twitter|DaumApps|DaumDevice\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|SamsungBrowser\/[^1]/i)){ 
			inApp = true;	
			$("body").addClass("inApp");
			$(".hideme").css({"opacity":"1"})
			$(".case-2019-effect").css({"opacity":"1"})
			return true;
		 }else {
            return false;
        }
		
	}
	checkKApp();
	
	/*								*/
	/*------  INTRO ANIMATION	-----*/
	/*								*/


	

	/*								*/
	/*------  INTRO ANIMATION	-----*/
	/*								*/


	/*								*/
	/*------    QUERY CLICK     -----*/
	/*								*/



	function init(){
		spreadIcon();
        if(isMobile==true){

        }else{

        }

	}


    function avoid100vh(){
        $(".fixed-holder").height(screenHeight);
		$(".spacer").height(screenHeight);
		$(".loading-page").height(screenHeight);
		$(".ie-block").height(screenHeight);
	}
	/******** ????????? ?????? ?????? ********/
	if(isMobile==true){
        $(".page-title-main").attr("src", "https://img.khan.co.kr/spko/storytelling/2021/lawrevision/page-title-01-m2.png");
		$(".graphic-holder img").attr("src", "https://img.khan.co.kr/spko/storytelling/2021/lawrevision/main-top-graphic-4-m.png");
         avoid100vh();
        $(".video-boxing iframe").css({"width":$(".blank img").width(),"height": (14*(screenWidth-30)/25 )});
        $(".interactive-header .page-title").html("?????????????????? ?????? 1???, ????????? ?????????")
	}else{

	}
	/******** ????????? ?????? ?????? ********/



	function makeFakeSquare(){
		var $container = $("#square-holder-2"); //???????????? ??????
		var conWidth = Math.floor(screenWidth);
		var conHeight = Math.floor(screenHeight);
		for(i=0;i<1430;i++){
			var class_name = "square fakeSquare" 
			var pixel = $("<div />", { "class": class_name } );
			var opacity = 1;
			pixel.css({"opacity": opacity});
			$container.append(pixel);
		}
		
	};

	function makeSquare(){
		var $container = $("#square-holder"); //???????????? ??????
		var conWidth = Math.floor(screenWidth);
		var conHeight = Math.floor(screenHeight);
	 
		var _data = commmitteeList;
		_data.forEach(function(v,i,a){
			//?????????:party1, ?????????:party2, ????????????:party3, ?????????:party4, ?????????:party5, ??????:party6
			var partyStr = "";
			switch (v.party) {
				
				case "??????????????????": partyStr="party1"; break;			
				case "??????????????????": partyStr="party2"; break;
				case "???????????????": partyStr="party3"; break;
				case "?????????": partyStr="party4"; break;
				case "?????????": partyStr="party5"; break;
				default: partyStr="party6"; 
			}
			if(v.elected == "O"){
				partyStr += " elected"
			}else{
				partyStr += " notElected"
			}
			if(v.steps == "O"){
				partyStr += " steps"
			}
			if(v.final == "O"){
				partyStr += " final"
			}
			//console.log(partyStr);
			var class_name = "square " + partyStr; 
			var pixel = $("<div />", { "class": class_name } );
			var opacity = 1;
	  
			pixel.css({"opacity": opacity});
			$container.append(pixel);
		})
		/*
		for (var i=0; i <206; i++){
		   var pixel = $("<div />", { "class": "square" } );
		   //var x = randomRange(0, conWidth)+"px";
		   //var y = randomRange(0, conHeight)+"px";
		   //var width = randomRange(3, 12)+"px";
		   //var opacity = randomRange(10, 25)/100;
		   var opacity = 1;
	 
		//    pixel.css({"background": "#fff"});
		   pixel.css({"opacity": opacity});
		   $container.append(pixel);
	 
		};*/
		   
	};

	var colors = {
		"?????????": "#eeb612", 
		"??????????????????": "#0091a4",
		"??????????????????": "#00b09a",
		"???????????????": "#ee3a46",
		"?????????": "#ee6915"
	}


	makeFakeSquare();
	makeSquare();
	var stage = "before";
	var isChange = false;
	$(window).scroll(function(){
      var nowScroll = $(window).scrollTop();

      var endPoint = $(".fixed-animation").offset().top + $(".fixed-animation").height() - screenHeight;

      if( nowScroll >= $(".fixed-animation").offset().top && nowScroll < endPoint ){
         if(stage !== "on"){
            stage = "on";
         //   console.log("?????????");
            $(".fixed-holder").addClass("fixed-holder-on");
            $(".fixed-holder").removeClass("fixed-holder-bottom");
			$(".person-number-board").fadeIn();
         }

      }else if( nowScroll < $(".fixed-animation").offset().top ){
         if(stage !== "before"){
            stage = "before";
         //   console.log("???????????????");
            $(".fixed-holder").removeClass("fixed-holder-on");
            $(".fixed-holder").removeClass("fixed-holder-bottom");
			$(".person-number-board").hide();
			$(".people-info-back").fadeOut();
			$(".people-info").fadeOut();
         }
      }else if( nowScroll >= endPoint){
         if(stage !== "after"){
            stage = "after";
         //   console.log("???????????????");
            $(".fixed-holder").removeClass("fixed-holder-on");
            $(".fixed-holder").addClass("fixed-holder-bottom");
			$(".people-info-back").hide();
			$(".people-info").hide();
			$(".person-number-board").hide();
         }
      }

		if(inApp == false){
			$(".hideme").each(function(i){
				if( $(this).hasClass("shown") == false && nowScroll + screenHeight > $(this).offset().top + $(this).outerHeight()*0.5){
					$(this).addClass("shown")
					$(this).stop().animate({"opacity": 1},400);
				}
			});
			if (nowScroll >= $(".case-2019").offset().top - 250) {
				$(".case-2019-effect").stop().animate({"opacity": "1"});
			} else {
				$(".case-2019-effect").stop().animate({"opacity": "0"});
			}
		}
		

		$pun = $(".icon-pun");
		$ind = $(".icon-ind");
		$rp = $(".icon-rp");
		
		if (nowScroll >= $(".num_report").offset().top + ((isNotebook==true)? -30 : -170) && isChange == false){
			isChange = true;
			$pun.attr("class", 'icon-path icon-pun icon-rp-2');
			$ind.attr("class", 'icon-path icon-ind icon-rp-2');
			$rp.attr("class", 'icon-path icon-rp icon-rp-2');
			$(".report-text-rp").stop().animate({"opacity":"1"}, 300, function(){
				$pun.attr("class", 'icon-path icon-pun icon-ind-2');
				$ind.attr("class", 'icon-path icon-ind icon-ind-2');
				$(".report-text-ind").stop().animate({"opacity":"1"}, 300, function(){
					$pun.attr("class", 'icon-path icon-pun icon-pun-2');
						$(".report-text-pun").stop().animate({"opacity":"1"}, 300)
				})
			})
		} else if (nowScroll < $(".num_report").offset().top + ((isNotebook==true)? -30 : -170) && isChange == true) {
			isChange = false;
			$pun.attr("class", 'icon-path icon-pun');
			$ind.attr("class", 'icon-path icon-ind');
			$rp.attr("class", 'icon-path icon-rp');
			$(".report-text-pun").stop().animate({"opacity":"0"});
			$(".report-text-ind").stop().animate({"opacity":"0"});
			$(".report-text-rp").stop().animate({"opacity":"0"});
		}

		
		checkMapStage(nowScroll);
   	});

	   
	var mapStage = 0;
	var mapStage_before;
	function adjustStage(g){
		if( mapStage == g){
		}else if( mapStage !==g ){
			mapStage_before = mapStage;
			mapStage = g;
			drawStage(mapStage, mapStage_before);
		  	console.log(mapStage);
		}
	};

	function animateValue(id, start, end, duration) {
		var range = end - start;
		var current = start;
		var increment = end > start ? 1 : -1;
		var stepTime = Math.abs(Math.floor(duration / range));
		var obj = document.getElementById(id);
		var timer = setInterval(function(){
			  current = Number((current + increment).toFixed(1));
			  obj.innerHTML = current;
			  if (current == Math.floor(end)) {
				 increment = increment / 10;
			  }
			  if (current == end) {
				 clearInterval(timer);
			  }
		   }, stepTime);
	 }

	function drawStage(n, n_before){
		var reverse = (n - n_before>0)? false : true;

		switch (n){
			case 0:
				$("#square-holder-2").css({"top": - ($("#square-holder-2").height() / 2)});
				$(".square").css({"opacity":"1"});
				$("#square-holder-2").show();
				$("#square-holder-2").addClass("before");
				$("#square-holder").hide();
				$(".person-number-board .value").html(1430);
				$("#square-holder").removeClass("scaleUp");

				$(".fixed-holder").css({"z-index": "1"});
				$(".notElected").removeClass("squareHidden");
				$(".graphic-nar").stop().fadeOut();
				break;
			case 1:  //1430???
				if (reverse) {
					animateValue("score", 1330, 1430, 20);
				} else {
					$(".person-number-board .value").html(1430);
				}
				$("#square-holder-2").css({"top": - ($("#square-holder-2").height() / 2)});
				$("#square-holder-2").show();
				$("#square-holder").hide();
			//	$(".person-number-board .value").html(1430);
				$("#square-holder-2").removeClass("before");
				$("#square-holder").removeClass("scaleUp");

				$(".fixed-holder").css({"z-index": "1"});
				$(".notElected").removeClass("squareHidden");
				$(".graphic-nar").stop().fadeOut();
				break;
			case 2:  // 204???
				if (reverse) {
					animateValue("score", 100, 204, 20);
				} else {
					animateValue("score", 300, 204, 20);
				}
				$("#square-holder").css({"top": - ($("#square-holder").height() / 2)});
				$("#square-holder-2").hide();
				$("#square-holder").show();
				$("#square-holder-2").removeClass("before");
				$("#square-holder").removeClass("scaleUp");
		
				//$(".person-number-board .value").html(204);
				$("#square-holder .square").css({"opacity":"1"});

				$(".fixed-holder").css({"z-index": "1"});
				$(".notElected").removeClass("squareHidden");
				$(".graphic-nar").hide();
				if (isMobile) {
					$("#square-holder").stop().animate({"left":	"0"}, 500);
				} else{
					$("#square-holder").stop().animate({"left":	"-15em"}, 500);
				}

				break;
			case 3:  // 45???
				if (reverse) {
					animateValue("score", 15, 45, 200);
				} else {
					animateValue("score", 145, 45, 20);
				}
				$("#square-holder-2").hide();
				$("#square-holder").show();
			  	$("#square-holder .square").css({"opacity":"0.2"});
				$("#square-holder .elected").css({"opacity":"1"});  
				//$(".person-number-board .value").html(45);
				$("#square-holder").removeClass("scaleUp");

				$(".fixed-holder").css({"z-index": "1"});
				$(".notElected").removeClass("squareHidden");
				$(".graphic-nar").hide();
				if (isMobile) {
					$("#square-holder").stop().animate({"left":	"0"}, 500);
				} else{
					$("#square-holder").stop().animate({"left":	"-15em"}, 500);
				}

				break;
			case 4: //15???
				if (reverse) {
					animateValue("score", 14, 15, 500);
				} else {
					animateValue("score", 45, 15, 200);
				}
				$("#square-holder-2").hide();
				$("#square-holder").show();
				$("#square-holder .elected").css({"opacity":"0.2"});
				$("#square-holder .steps").css({"opacity":"1"});  
				//$(".person-number-board .value").html(15);
				$("#square-holder").removeClass("scaleUp");

				$(".fixed-holder").css({"z-index": "1"});
				$(".notElected").removeClass("squareHidden");
				$(".graphic-nar").hide();
				if (isMobile) {
					$("#square-holder").stop().animate({"left":	"0"}, 500);
				} else{
					$("#square-holder").stop().animate({"left":	"-15em"}, 500);
				}

				break;
			case 5: //????????????
				if (reverse) {
					animateValue("score", 10, 14, 300);
				} else {
					animateValue("score", 15, 14, 300);
				}
				$("#square-holder-2").hide();
				$("#square-holder").show();
				$(".steps").css({"opacity":"0.2"});
				$(".final").css({"opacity":"1"});
				$(".fixed-holder").css({"z-index": "1"});

				//$(".person-number-board .value").html(14);

				$(".notElected").removeClass("squareHidden");
				$("#square-holder").css({"top": - ($("#square-holder").height() / 2)});
				$("#square-holder").removeClass("scaleUp");

				$(".graphic-nar").hide();
				if (isMobile) {
					$("#square-holder").stop().animate({"left":	"0"}, 500);
				} else{
					$("#square-holder").stop().animate({"left":	"-15em"}, 500);
				}

				break;

			case 6: //?????? 45???
				$("#square-holder-2").hide();
				$("#square-holder").show();
				
				$(".notElected").addClass("squareHidden");
				$("#square-holder .elected").css({"opacity":"0.2"});

				$(".final").css({"opacity":"1"});
				$(".person-number-board .value").html("");
				$(".fixed-holder").css({"z-index": "1"});
				$(".graphic-nar").hide();
				$("#square-holder").css({"top": - ($("#square-holder").height() / 2)});

				if (isMobile) {
					$("#square-holder").stop().animate({"left":	"0"}, 500);
				} else{
					$("#square-holder").stop().animate({"left":	"-15em"}, 500);
				}
				$("#square-holder").removeClass("scaleUp");
				break;

			case 7: //??????
				$("#square-holder-2").hide();
				$("#square-holder").show();
				$("#square-holder").css({"top": - ($("#square-holder").height() / 2)});

				$(".notElected").addClass("squareHidden");
				$("#square-holder .elected").css({"opacity":"1"});

				$(".person-number-board .value").html("");
				$(".graphic-nar").stop().fadeIn();
				$(".fixed-holder").css({"z-index": "3"});

				$("#square-holder").stop().animate({"left":"0"}, 500,"swing");
				$("#square-holder").addClass("scaleUp");
				
				break;

		}
	}

	function checkMapStage(n){
		var $StagePoint = $(".fixed-animation .spacer");
		if( n < $StagePoint.eq(0).offset().top){ 
			adjustStage(0);
		}else if( n >= $StagePoint.eq($StagePoint.length-1).offset().top ){
			adjustStage($StagePoint.length);
		}else if( n >= $StagePoint.eq(0).offset().top && n < $StagePoint.eq($StagePoint.length-1).offset().top){
			for(s=0;s<$StagePoint.length-1;s++){
				if( n >= $StagePoint.eq(s).offset().top && n <$StagePoint.eq(s+1).offset().top){
				   adjustStage(s+1);
				}
			}
		}
	}

	if(isMobile) {

	} else {
		$(".p-hover1").hover(function(){
			$(".baeck-with14").stop().fadeIn();
		}, function() {
			$(".baeck-with14").stop().hide();
		});
		$(".p-hover2").hover(function(){
			$(".ryu-with13").stop().fadeIn();
		}, function() {
			$(".ryu-with13").stop().hide();
		});
	}


	$(".case-box").each(function(){
		$(this).css({"top": (screenHeight-$(this).height())/2+"px"});
	})

	$(".elected").on("click", function(){
		$(this).css({"border": "1px solid #282828"});
		var thisIndex = $(this).index();
		var persondata = commmitteeList[thisIndex];

		$postColor = $(".people-info-post");
		$post = $(".people-info");
		switch (persondata.party) {
			case "??????????????????":
				$postColor.css({"background": colors.??????????????????});
				$post.css({"border-bottom": "2px solid" + colors.??????????????????});
				break;
			case "?????????":
				$postColor.css({"background": colors.?????????});
				$post.css({"border-bottom": "2px solid" + colors.?????????});
				break;
			case "??????????????????":
				$postColor.css({"background": colors.??????????????????});
				$post.css({"border-bottom": "2px solid" + colors.??????????????????});
				break;
			case "?????????":
				$postColor.css({"background": colors.?????????});
				$post.css({"border-bottom": "2px solid" + colors.?????????});
				break;
			case "???????????????":
				$postColor.css({"background": colors.???????????????});
				$post.css({"border-bottom": "2px solid" + colors.???????????????});
				break;
			default:
				$postColor.css({"background": "#7d7870"});
				$post.css({"border-bottom": "2px solid #7d7870"});
		}

		// console.log(persondata.elected)
		if (persondata.elected == "O") {
			// $(".people-agree-YorN").attr("src", "https://img.khan.co.kr/spko/storytelling/2021/lawrevision/rec.png");
			$(".people-agree-YorN").html("??????");
		} else {
			$(".people-agree-YorN").html("??????");
		}
		
		if (persondata.steps == "O") {
			// $(".people-raise-YorN").attr("src", "https://img.khan.co.kr/spko/storytelling/2021/lawrevision/rec.png");
			$(".people-raise-YorN").html("??????");
		} else {
			// $(".people-raise-YorN").attr("src", "https://img.khan.co.kr/spko/storytelling/2021/lawrevision/close.png");
			$(".people-raise-YorN").html("??????");
		}

		if (persondata.final == "O") {
			// $(".people-final-YorN").attr("src", "https://img.khan.co.kr/spko/storytelling/2021/lawrevision/rec.png");
			$(".people-final-YorN").html("??????");
		} else {
			$(".people-final-YorN").html("????????????");
		}
		$("body").addClass("fixed");
		$(".people-info").fadeIn();
		$(".people-info-name").text(persondata.name);
		$(".people-info-party").text(persondata.party);
		$(".people-info-legion").text(persondata.legion);
		$(".people-photo").attr("src", "https://img.khan.co.kr/spko/storytelling/2021/lawrevision/profile_"+ thisIndex +".jpg");
		$(".people-info-back").fadeIn();
	});

	$(".people-info-back").on("click", function(){
		$("body").removeClass("fixed");
		$(".people-info").hide();
		$(".people-info-back").hide();
		$(".square").css({"border": "none"});
   });


   function spreadIcon(){
		var icon_num = (isMobile)? 200: 300;
		var icon_rp_num = icon_num * 0.11;
		var icon_ind_num =  icon_rp_num * 0.41;
		var icon_pun_num = icon_ind_num * 0.265;
        var icon_width = 10, icon_height = 27;
		var width = (isMobile)? screenWidth-10: 600;
        var icon_Wmargin = (isMobile)? icon_width + 5 :icon_width + 10;
		var icon_Hmargin = icon_height + 12;
		var maxlineNum = Math.floor(width / icon_Wmargin);

		var height= (isMobile)? ( (Math.round(icon_num/maxlineNum)+1)*icon_Hmargin ): 390,
		    margin= 10;
		
		var path = womenList;
		
		var icon_svg = d3.select("#ICON_HOLDER svg")
		.attr("width", width +"px" )
		.attr("height", height +"px")

		var icon_holder = icon_svg.append("g")
		.attr("class","icon_holder");

		var each_group = icon_holder.append("g")
		.attr("class", "each-g");

		for(i=0; i<icon_num; i++){
			var g = each_group.append("g")
				.attr("class", "icon")
				.attr("transform", function() {
					
					var x = Math.floor((i % maxlineNum)) * icon_Wmargin;
					var y = Math.floor((i / maxlineNum)) * icon_Hmargin;
					return "translate(" + x + "," + y + ")";
				}).style("width", icon_width)
				.style("height", icon_height)
				.style("opacity","1")
			var iconPath = g.append("path")
				.attr("class", function(){
					var classStr = "";
					if ((icon_num-Math.floor(icon_pun_num)) <= i) {
						classStr = "icon-path icon-pun"
					} else if ((icon_num-Math.floor(icon_ind_num)) <= i){
						classStr = "icon-path icon-ind"
					} else if ((icon_num-Math.floor(icon_rp_num)) <= i){
						classStr = "icon-path icon-rp"
					} else{
						classStr = "icon-path"
					}
					//console.log(i, classStr)
					return classStr;
				})
				.attr("d", function(i) {
					var n = randomRange(0, 3);
					return path[n].path;
				})
			

		}

		
		
	}     
	/******** ???????????? ?????????  ********/

	init();
	$(".loading-page").fadeOut(1500, function(){
	    $("body").removeClass("fixed");
	});

	   
});



function sendSns(s) {
  var url = encodeURIComponent(location.href),
	  txt = encodeURIComponent($("title").html());
  switch (s) {
    case 'facebook':
      window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
      break;
    case 'twitter':
      window.open('http://twitter.com/intent/tweet?text=' + txt + '&url=' + url);
      break;
  }
}
