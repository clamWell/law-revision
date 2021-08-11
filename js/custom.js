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
	
	var kakao = false;
	function checkKaKao(){
		 if (navigator.userAgent.indexOf("KAKAOTALK") >= 0) {
			kakao = true;
			$("body").addClass("kakao");
			return true;
		 }else {
            return false;
        }
	}
	
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
	}
	/******** 모바일 전용 조정 ********/
	if(isMobile==true){
        $(".page-title-main").attr("src", "img/page-title-01-m2.png");
		$(".graphic-holder img").attr("src", "img/main-top-graphic-4-m.png");
         avoid100vh();
        $(".video-boxing iframe").css({"width":$(".blank img").width(),"height": (14*(screenWidth-30)/25 )});
        $(".interactive-header .page-title").html("비동의강간죄 발의 1년, 여전히 계류중")
	}else{

	}
	/******** 모바일 전용 조정 ********/



	function makeFakeSquare(){
		var $container = $("#square-holder-2"); //박스담을 이름
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
		var $container = $("#square-holder"); //박스담을 이름
		var conWidth = Math.floor(screenWidth);
		var conHeight = Math.floor(screenHeight);
	 
		var _data = commmitteeList;
		_data.forEach(function(v,i,a){
			//더민주:party1, 더시민:party2, 미래통합:party3, 민중당:party4, 정의당:party5, 기타:party6
			var partyStr = "";
			switch (v.party) {
				
				case "더불어민주당": partyStr="party1"; break;			
				case "더불어시민당": partyStr="party2"; break;
				case "미래통합당": partyStr="party3"; break;
				case "민중당": partyStr="party4"; break;
				case "정의당": partyStr="party5"; break;
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
		"정의당": "#eeb612", 
		"더불어민주당": "#0091a4",
		"더불어시민당": "#00b09a",
		"미래통합당": "#ee3a46",
		"민중당": "#ee6915"
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
         //   console.log("맵영역");
            $(".fixed-holder").addClass("fixed-holder-on");
            $(".fixed-holder").removeClass("fixed-holder-bottom");
			$(".person-number-board").fadeIn();
         }

      }else if( nowScroll < $(".fixed-animation").offset().top ){
         if(stage !== "before"){
            stage = "before";
         //   console.log("맵영역이전");
            $(".fixed-holder").removeClass("fixed-holder-on");
            $(".fixed-holder").removeClass("fixed-holder-bottom");
			$(".person-number-board").hide();
			$(".people-info-back").fadeOut();
			$(".people-info").fadeOut();
         }
      }else if( nowScroll >= endPoint){
         if(stage !== "after"){
            stage = "after";
         //   console.log("맵영역이후");
            $(".fixed-holder").removeClass("fixed-holder-on");
            $(".fixed-holder").addClass("fixed-holder-bottom");
			$(".people-info-back").fadeOut();
			$(".people-info").fadeOut();
			$(".person-number-board").hide();
         }
      }

		$(".hideme").each(function(i){
			if( $(this).hasClass("shown") == false && nowScroll + screenHeight > $(this).offset().top + $(this).outerHeight()*0.5 && kakao == false ){
				$(this).addClass("shown")
				$(this).stop().animate({"opacity": 1},400);
			}
		});

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

		if (nowScroll >= $(".case-2019").offset().top - 250) {
			$(".case-2019-effect").fadeIn();
		} else {
			$(".case-2019-effect").fadeOut();
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

				break;
			case 1:  //1430명
				
				if (reverse) {
					animateValue("score", 1330, 1430, 20);
				} else {
					$(".person-number-board .value").html(1430);
				}
				$("#square-holder-2").css({"top": - ($("#square-holder-2").height() / 2)});
				$("#square-holder-2").show();
				$("#square-holder").hide();
				$("#square-holder-2").removeClass("before");
				$("#square-holder").removeClass("scaleUp");

				break;
			case 2:  // 204명
				if (reverse) {
					animateValue("score", 100, 204, 20);
				} else {
					animateValue("score", 300, 204, 20);
				}
				$("#square-holder-2").hide();
				$("#square-holder").css({"top": - ($("#square-holder").height() / 2)});
				$("#square-holder").fadeIn(1000);
				$(".person-number-board .value").html(204);
				$("#square-holder .square").css({"opacity":"1"});
				$("#square-holder").removeClass("scaleUp");
				break;
			case 3:  // 45명
				if (reverse) {
					animateValue("score", 15, 45, 200);
				} else {
					animateValue("score", 145, 45, 20);
				}
				$("#square-holder-2").hide();
				$("#square-holder").show();
			  	$("#square-holder .square").css({"opacity":"0.2"});
				$("#square-holder .elected").css({"opacity":"1"});  
				$(".person-number-board .value").html(45);
				$("#square-holder").removeClass("scaleUp");
				break;
			case 4: //15명
				if (reverse) {
					animateValue("score", 14, 15, 500);
				} else {
					animateValue("score", 45, 15, 200);
				}
				$("#square-holder-2").hide();
				$("#square-holder").show();
				$("#square-holder .elected").css({"opacity":"0.2"});
				$("#square-holder .steps").css({"opacity":"1"});  
				$(".person-number-board .value").html(15);
				$("#square-holder").removeClass("scaleUp");
				break;
			case 5: //현재동의
				if (reverse) {
					animateValue("score", 10, 14, 300);
				} else {
					animateValue("score", 15, 14, 300);
				}
				$("#square-holder-2").hide();
				$("#square-holder").show();
				$(".steps").css({"opacity":"0.2"});
				$(".final").css({"opacity":"1"});

				$(".person-number-board .value").html(14);


				$(".notElected").removeClass("squareHidden");
				$("#square-holder").css({"top": - ($("#square-holder").height() / 2)});
				$("#square-holder").removeClass("scaleUp");
				break;

			case 6: //이전 45명
				$(".notElected").addClass("squareHidden");
				$("#square-holder").css({"top": - ($("#square-holder").height() / 2)});
				$("#square-holder .elected").css({"opacity":"0.2"});
				$(".final").css({"opacity":"1"});

				$(".person-number-board .value").html("");
				$(".fixed-holder").css({"z-index": "1"});
				$(".graphic-nar").fadeOut();
				if (isMobile) {
					$("#square-holder").stop().animate({"left":	"0"}, 500);
				} else{
					$("#square-holder").stop().animate({"left":	"-15em"}, 500);
				}
				$("#square-holder").removeClass("scaleUp");
				break;

			case 7: //클릭
				$(".notElected").addClass("squareHidden");
				$("#square-holder").css({"top": - ($("#square-holder").height() / 2)});
				$("#square-holder .elected").css({"opacity":"1"});

				$(".person-number-board .value").html("");
				$(".graphic-nar").fadeIn();
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
			case "더불어민주당":
				$postColor.css({"background": colors.더불어민주당});
				$post.css({"border-bottom": "2px solid" + colors.더불어민주당});
				break;
			case "정의당":
				$postColor.css({"background": colors.정의당});
				$post.css({"border-bottom": "2px solid" + colors.정의당});
				break;
			case "더불어시민당":
				$postColor.css({"background": colors.더불어시민당});
				$post.css({"border-bottom": "2px solid" + colors.더불어시민당});
				break;
			case "민중당":
				$postColor.css({"background": colors.민중당});
				$post.css({"border-bottom": "2px solid" + colors.민중당});
				break;
			case "미래통합당":
				$postColor.css({"background": colors.미래통합당});
				$post.css({"border-bottom": "2px solid" + colors.미래통합당});
				break;
			default:
				$postColor.css({"background": "#7d7870"});
				$post.css({"border-bottom": "2px solid #7d7870"});
		}

		// console.log(persondata.elected)
		if (persondata.elected == "O") {
			// $(".people-agree-YorN").attr("src", "img/rec.png");
			$(".people-agree-YorN").html("찬성");
		} else {
			$(".people-agree-YorN").html("반대");
		}
		
		if (persondata.steps == "O") {
			// $(".people-raise-YorN").attr("src", "img/rec.png");
			$(".people-raise-YorN").html("참여");
		} else {
			// $(".people-raise-YorN").attr("src", "img/close.png");
			$(".people-raise-YorN").html("불참");
		}

		if (persondata.final == "O") {
			// $(".people-final-YorN").attr("src", "img/rec.png");
			$(".people-final-YorN").html("응답");
		} else {
			$(".people-final-YorN").html("응답없음");
		}

		$(".people-info").fadeIn();
		$(".people-info-name").text(persondata.name);
		$(".people-info-party").text(persondata.party);
		$(".people-info-legion").text(persondata.legion);
		$(".people-photo").attr("src", "img/profile_"+ thisIndex +".jpg");
		$(".people-info-back").fadeIn();
	});

	$(".people-info-back").on("click", function(){
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
	/******** 검색영역 아이콘  ********/

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
