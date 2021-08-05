$(function(){
	var ieTest = false,
		screenWidth = $(window).width(),
		screenHeight = $(window).height(),
		imgURL = "http://img.khan.co.kr/spko/storytelling/2021/lawrevision/",
		isMobile = screenWidth <= 800 && true || false,
		isNotebook = (screenWidth <= 1300 && screenHeight < 750) && true || false,
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
        if(isMobile==true){

        }else{

        }

	}


	$(".loading-page").fadeOut(200, function(){
		init();
	});


	/******** 모바일 전용 조정 ********/
	if(isMobile==true){

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
         }
      }else if( nowScroll >= endPoint){
         if(stage !== "after"){
            stage = "after";
         //   console.log("맵영역이후");
            $(".fixed-holder").removeClass("fixed-holder-on");
            $(".fixed-holder").addClass("fixed-holder-bottom");
			$(".people-info").fadeOut();
			$(".person-number-board").hide();
         }
      }

		$(".hideme").each(function(i){
			if( $(this).hasClass("shown") == false && nowScroll + screenHeight > $(this).offset().top + $(this).outerHeight()*0.5 ){
				$(this).addClass("shown")
				$(this).stop().animate({"opacity": 1},1000);
			}
		});


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
	   
	   	/*
	function drawStage(n){
		switch (n){
			case 0:
				$(".square").css({"opacity":"1"});
				break;
			case 1: 
			  	$(".square").css({"opacity":"0.2"});
				$(".elected").css({"opacity":"1"});  
				break;
			case 2:
				$(".elected").css({"opacity":"0.2"});
				$(".steps").css({"opacity":"1"});  
				break;
			case 3:
				$(".steps").css({"opacity":"0.2"});
				$(".final").css({"opacity":"1"});
				$(".notElected").removeClass("squareHidden");
				$(".section-graphic").css({"margin-top": "-187px"});

				$(".graphic-nar").fadeOut();
				$(".fixed-holder").css({"z-index": "1"});
				break;
			case 4:
				$(".notElected").addClass("squareHidden");
				$(".section-graphic").css({"margin-top": "-50px"});
				$(".graphic-nar").fadeIn();
				
				$(".fixed-holder").css({"z-index": "3"});
				break;
		}
	}*/

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
					animateValue("score", 22, 15, 300);
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
					animateValue("score", 10, 22, 300);
				} else {
					animateValue("score", 15, 22, 300);
				}
				$("#square-holder-2").hide();
				$("#square-holder").show();
				$(".steps").css({"opacity":"0.2"});
				$(".final").css({"opacity":"1"});

				$(".person-number-board .value").html(22);


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
				$("#square-holder").stop().animate({"left":"-15em"}, 500);
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



	//    function positionSquare(){
	// 		var $sq = $(".elected");
	// 		var maxlineNum = $(".section-graphic").width()/($(".section-graphic .square").width()+2);
	// 		maxlineNum = parseInt(maxlineNum);

	// 		for(s=0;s<$sq.length;s++){
	// 			var posX = (s % maxlineNum) * ($(".section-graphic .square").width()+2);
	// 			console.log(posX);
	// 			var posY = (s / maxlineNum).toFixed(0) * ($(".section-graphic .square").height()+2);
	// 			console.log(posY);
	// 			$sq.eq(s).css({"position": "absolute", "top": posY + "px", "left": posX + "px"});
	// 		}

	//    }
	
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
	   
	   /*
	   document.getElementsByClassName("elected").addEventListener("click", function() {
			var thisIndex = $(this).index();
			console.log(thisIndex);
	   });*/
	   


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
			$(".people-agree-YorN").attr("src", "img/rec.png");
		} else {
			$(".people-agree-YorN").attr("src", "img/close.png");
		}
		
		if (persondata.steps == "O") {
			$(".people-raise-YorN").attr("src", "img/rec.png");
		} else {
			$(".people-raise-YorN").attr("src", "img/close.png");
		}

		if (persondata.final == "O") {
			$(".people-final-YorN").attr("src", "img/rec.png");
		} else {
			$(".people-final-YorN").attr("src", "img/close.png");
		}

		$(".people-info").fadeIn();
		$(".people-info-name").text(persondata.name);
		$(".people-info-party").text(persondata.party);
		$(".people-info-legion").text(persondata.legion);
		$(".people-photo").attr("src", "img/profile_"+ thisIndex +".jpg");
		$(".people-info-back").fadeIn();
	});

	$(".people-info-back").on("click", function(){
		$(".people-info").fadeOut()
		$(".people-info-back").hide();
		$(".square").css({"border": "none"});
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
