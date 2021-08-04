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
         }

      }else if( nowScroll < $(".fixed-animation").offset().top ){
         if(stage !== "before"){
            stage = "before";
         //   console.log("맵영역이전");
            $(".fixed-holder").removeClass("fixed-holder-on");
            $(".fixed-holder").removeClass("fixed-holder-bottom");
         }
      }else if( nowScroll >= endPoint){
         if(stage !== "after"){
            stage = "after";
         //   console.log("맵영역이후");
            $(".fixed-holder").removeClass("fixed-holder-on");
            $(".fixed-holder").addClass("fixed-holder-bottom");
			$(".people-info").fadeOut();
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

	   
	var mapStage;
	function adjustStage(g){
		if( mapStage == g){
		}else if( mapStage !==g ){
			mapStage = g;
			drawStage(mapStage);
		  	console.log(mapStage);
		}
	};
	   
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
		console.log(thisIndex);
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
