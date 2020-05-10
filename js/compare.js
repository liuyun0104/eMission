// JavaScript Document
//$(window).load(function(){
var stepData = [
	{
		"category": ["profile", " "],
		"id": "profile", 
		"length": 1,
		"questions": ["Q1"],
		"width": 7,
		"color": "#d94d4d"
	},
	{
		"category": ["heating", "& cooling"],
		"id": "heating",  
		"length": 4,
		"questions": ["Q1", "Q2", "Q3", "Q4"],
		"width": 17,
		"color": "#dc7d66"
	},
	{
		"category": ["laundry", "& bathroom appliance"], 
		"id": "laundry", 
		"length": 6,
		"questions": ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
		"width": 28,
		"color": "#de9e39"
	},
	{
		"category": ["lighting", " "], 
		"id": "lighting", 
		"length": 1,
		"questions": ["Q1"],
		"width": 8,
		"color": "#efe3c1"
	},
	{
		"category": ["entertainment","& home office"], 
		"id": "entertainment", 
		"length": 4,
		"questions": ["Q1", "Q2", "Q3", "Q4"],
		"width": 27,
		"color": "#92a54a"
	},
	{
		"category": ["kitchen", "appliance"], 
		"id": "kitchen", 
		"length": 3,
		"questions": ["Q1", "Q2", "Q3"],
		"width": 17,
		"color": "#4aaecc"
	}
];

var aStep=0;
var aQuest=0;
var svg, steps, labels, line, aId;
var x1=35;
var y1 = 50;
var d1=100;
var r1=10, r2 = 6;
var qCircles, qCircleColor, d2, qLength, xq;
var aNum=0, aNumPre = 0, aChange;
var kNum=0, kNumPre = 0, kChange;
//var qCircleX, qCircleColor;

/* create the top progress bar*/
$("ol.progtrckr").each(function(){
        $(this).attr("data-progtrckr-steps", 
                     $(this).children("li").length);
    });
/* end of top progress bar*/


d3.selectAll("#adultNumBtn .numBtnMinus").on("click", function(){
	if (aNum>0){
	aNum -=1;
	aChange = -1;
	d3.select("#adultNumBtn .numBtnResult").text(aNum);
	createAdult();
	}
});
d3.selectAll("#adultNumBtn .numBtnPlus").on("click", function(){
	aNum +=1;
	aChange = 1;
	d3.select("#adultNumBtn .numBtnResult").text(aNum);
	createAdult();
});
d3.selectAll("#kidNumBtn .numBtnMinus").on("click", function(){
	if (kNum>0){
	kNum -=1;
	kChange = -1;
	d3.select("#kidNumBtn .numBtnResult").text(kNum);
	createKid();
	}
});
d3.selectAll("#kidNumBtn .numBtnPlus").on("click", function(){
	kNum +=1;
	kChange = 1;
	d3.select("#kidNumBtn .numBtnResult").text(kNum);
	createKid();
});
var iAdultLeft, aAdultLeft, aAdultDiv, aAdultImg;
var iKidLeft, aKidLeft, aKidDiv, aKidImg;
function createAdult(){
	if(aChange == 1){ //add adult icon
		//iAdultLeft = $("#adultEmpty").position().left;
		//aAdultLeft = iAdultLeft;
		//iAdultLeft += 75;
		aAdultDiv = ("<div class=\"adultActive\">");
		aAdultImg = ("<img src=\"images/adult.png\" class=\"adultActive\" >");
		aimg = $("#adult").append(aAdultImg);
	
		$('.adultInactive').transition({left:'+=60px', opacity:'1'});
		$('.adultActive').transition({left:'+=60px', opacity:'1'});
		/*if(aNum >5){
			$('#adultEmpty').transition({top:'+=180px', opacity:'1'});
			$('.adultActive:nth-child(aNum)').transition({top:'+=180px', opacity:'1'});
		//}*/
		
	}
	else if(aChange == -1){ //remove adult icon
		$('.adultActive:last').transition({opacity:'0', delay:'500'}).remove();
		$('.adultActive').transition({left:'-=60px', opacity:'1'});
		$('.adultInactive').transition({left:'-=60px', opacity:'1'});
		//$('.adultActive:last').remove();
	}
}

function createKid(){
	if(kChange == 1){ //add adult icon
		//iAdultLeft = $("#adultEmpty").position().left;
		//aAdultLeft = iAdultLeft;
		//iAdultLeft += 75;
		aKidDiv = ("<div class=\"kidActive\">");
		aKidImg = ("<img src=\"images/kid.png\" class=\"kidActive\" >");
		kimg = $("#kid").append(aKidImg);
	
		$('.kidInactive').transition({left:'+=60px', opacity:'1'});
		$('.kidActive').transition({left:'+=60px', opacity:'1'});
		/*if(aNum >5){
			$('#adultEmpty').transition({top:'+=180px', opacity:'1'});
			$('.adultActive:nth-child(aNum)').transition({top:'+=180px', opacity:'1'});
		//}*/
		
	}
	else if(kChange == -1){ //remove adult icon
		$('.kidActive:last').transition({opacity:'0', delay:'500'}).remove();
		$('.kidActive').transition({left:'-=60px', opacity:'1'}, 'ease');
		$('.kidInactive').transition({left:'-=60px', opacity:'1'});
		//$('.adultActive:last').remove();
	}
}
/*$("#question").append(profileQ['title'][0]['content']);
$("#question p").transition({opacity:'1', y: -50, delay: '1000'});
$("#question").append(profileQ['question'][0]['content']);
$("#question p").transition({opacity:'1',y: -50,  delay: '2000'});
$("#question").append(profileQ['question'][1]['content']);
$("#question p").transition({opacity:'1', y: -50, delay: '3000'});*/
/*function createQuestions(category, qNum){
	
}*/
/*--------------------------------- #image_of_house ---------------------------------*/
var sqf=0; 

d3.selectAll("#houzeSizeBtn .numBtnMinus").on("click", function(){
	if (sqf >=100){
	sqf -=100;
	d3.select("#houzeSizeBtn .numBtnResult").text(sqf);
	createHouse(sqf);
	}
});
d3.selectAll("#houzeSizeBtn .numBtnPlus").on("click", function(){
	sqf  +=100;
	d3.select("#houzeSizeBtn .numBtnResult").text(sqf);
	createHouse(sqf);
});

function createHouse(sqf) {
		house1 = ("<img src=\"images/house.png\" class=\"sHouse\" id=\"house1\">");
		house2 = ("<img src=\"images/house.png\" class=\"sHouse\" id=\"house2\">");
		house3 = ("<img src=\"images/house.png\" class=\"sHouse\" id=\"house3\">");
		fence1 = ("<img src=\"images/fence.png\" class=\"fence\" id=\"house4\" >");
		fence2 = ("<img src=\"images/fence.png\" class=\"fence\" id=\"house5\" >");
		
		if(sqf>=0 && sqf<500){
			var sWidth = sqf/10 + 100;
			var sHeight = sqf*0.075 + 73.5;
			$("#house2").transition({bottom:-75});
			$("#house3").transition({bottom:-75});
			$("#house4").transition({bottom:-75});
			$("#house5").transition({bottom:-75});
			$("#house6").transition({bottom:-75});
			if($("#house1").length != 0){
				//alert("here")
				//house = $("#house1");
				$("#house1").transition({width:sWidth, height:sHeight});
			}else{
			house = $("#image_of_house").append(house1);
			$("#house1").transition({width:sWidth, height:sHeight, bottom:0});
			}
		}
		if(sqf>=500 && sqf<1000){
			$("#house3").transition({bottom:-75});
			$("#house4").transition({bottom:-75});
			$("#house5").transition({bottom:-75});
			$("#house6").transition({bottom:-75});
			//$("#house3").remove();
			if($("#house2").length == 0){
				$("#image_of_house").append(house2);
				$("#house2").transition({bottom:0});
			}
		}
		if(sqf>=1000 && sqf<1500){
			$("#house4").transition({bottom:-75});
			$("#house5").transition({bottom:-75});
			$("#house6").transition({bottom:-75});
			if($("#house3").length == 0){
				 $("#image_of_house").append(house3);
				 $("#house3").transition({bottom:0});	
			}
		}
		if(sqf>=1500 && sqf<2500){
			$("#house5").transition({bottom:-75});
			$("#house6").transition({bottom:-75});
			if($("#house4").length == 0){
				$("#image_of_house").append(fence1);
				$("#house4").transition({bottom:0});	
			}
		}
		if(sqf>=2500){
			$("#house6").transition({bottom:-75});
			if($("#house5").length == 0){
				$("#image_of_house").append(fence2);	
				$("#house5").transition({bottom:0});
			}
		}
}
var userConsum=0;
//d3.selectAll("#utilitySubmit").on("click", function(){
//	getUtility();
//});
$("#utilityValue").change(function(){
	userConsum = $("#utilityValue").val();
});
//function getUtility(){
//	userConsum = $("#utilityValue").val();
//}

/*for the result of part 1*/
//compareUtility();
var uText1 = new Array();
var uText2 = new Array();
 

var averConsumption = { //average by number of people
	1: {consum: 89},
	2: {consum: 138.6},
	3: {consum: 139.75},
	4: {consum: 148.91},
	5: {consum: 154.3},
	6: {consum: 168.25}
}



var pplNo;

function compareUtility(){
	var svg = d3.select("#utility_result").append("svg")
		.attr("id", "compare_svg")
		.attr("width", 960)
		.attr("height", 380);
		
	
	var comText1, comText2;
	var uCompare = [
		{ "type":"user" , "title":"Your Home", "consum": 250, "color": "#8cc0bb"},
		{ "type":"us" ,  "title":"U.S. Similar Homes", "consum": 89, "color": "#bcbdc0"  },
		{ "type":"eMission" ,  "title":"eMission Homes", "consum": 50, "color": "#aac051"}		
		];
	pplNo = aNum + kNum;	
	if(pplNo <6){
		uCompare[1]["consum"]=averConsumption[pplNo].consum;
	}else{
		uCompare[1]["consum"] = 168.25
	}	
	uCompare[0]["consum"] = userConsum;
	
	var consumArray = new Array();
	consumArray[0]= uCompare[0]['consum'];
	consumArray[1]= uCompare[1]['consum'];
	consumArray[2]= uCompare[2]['consum'];
	
	var consumMax = Math.max.apply(Math,consumArray);
	
	var uResult1 = ((uCompare[0]['consum']-uCompare[1]['consum'])/uCompare[1]['consum'])*100;
	uResult1 = uResult1.toFixed(2);
	var uResult2 = ((uCompare[0]['consum']-uCompare[2]['consum'])/uCompare[2]['consum'])*100;
	uResult2 = uResult2.toFixed(2);
	
	if(uResult1>0){
		uText1[0] = "You used "+uResult1 +"%";
		uText1[1] = "more than average";
		uText1[2] = "U.S. home. ";
		
	}else if(uResult1<=0){
		uResult1 *= -1;
		uText1[0] = "You used "+uResult1 +"%";
		uText1[1] = "less than average";
		uText1[2] = "U.S. home. ";
	}
	if(uResult2>0){
		uText2[0] = "You used "+uResult2 +"%";
		uText2[1] = "more than average";
		uText2[2] = "eMission home. "
	}else if(uResult2<=0){
		uResult2 *= -1;
		uText2[0] = "You used "+uResult2 +"%";
		uText2[1] = "less than average";
		uText2[2] = "eMission home. ";
	}
	uCompare[0]['text'] = "";
	uCompare[1]['text'] = uText1;
	uCompare[2]['text'] = uText2;
	var hScale = d3.scale.linear().domain([0, consumMax]).range([0,280]);
	//var hBar = hScale(uCompare);
	var xBar = 250, yBar = 350;
	var yBar2;
	//yBar2 = yBar-hBar;
	var bar = svg.append("g").attr("id", "utilityBarchart");
	
	var line = svg.append("line")
					.attr("x1",xBar-100 )
					.attr("y1",yBar)
					.attr("x2", xBar+530)
					.attr("y2", yBar)
					.style("stroke", "#bcbdc0")
					.style("stroke-width", 1);
					
	bar.selectAll("rect").data(uCompare)
		.enter().append("rect")
		.attr("x",function(d, i){return xBar + i*150;})
		//.attr("x",function(d, i){return d.type;})
		.attr("y",yBar)
		.attr("width", 120)
		.attr("fill",function(d){return d.color;})
		.attr("height",0)
		.attr("rx", 5)
		.attr("ry", 5)
		.transition().duration(1000)
		.attr("height",function(d) { return hScale(d.consum); })
		.transition().duration(1000)
		.attr("y",function(d){return yBar-hScale(d.consum);});
	
	var tTitle1 = bar.selectAll("text").data(uCompare)
		.enter().append("text")
		.attr("x",function(d, i){return xBar + i*150+60;})
		.attr("y",yBar)
		.attr("text-anchor", "middle")
		.attr("font-size", "13px")
		.text(function(d){return d.title})
		.attr("fill",'#3c3c3c')
		.transition().duration(1000)
		.attr("y",function(d){return yBar-hScale(d.consum)+50;});
		
	var textBlock = bar.append("g").attr("class", "tblock")
			
	var tblock = bar.selectAll(".tblock text").data(uCompare)
		.enter().append("text")
		.attr("x",function(d, i){return xBar + (i+1)*100;})
		.attr("y",yBar)
		.attr("text-anchor", "middle")
		.attr("font-size", "13px")
		.attr("fill",function(d){return d.color;});
		//.text(function(d){return d.text;})
		
	tblock.append("tspan")
  		.text(function(d){
			if(d['text'][0]!= undefined) {return d['text'][0];}
			else { return '';}})
		//.attr("x", function(d, i){return xBar + (i+1)*110;})
		.attr("x", function(d, i){
			if (i==1){return 460;}
			else if(i==2){ return 610;}	
		})
		.attr("dy", "0");
		
	tblock.append("tspan")
  		.text(function(d){
			if(d['text'][1]!= undefined) {return d['text'][1];}
			else { return '';}})
		.attr("x", function(d, i){
			if (i==1){return 460;}
			else if(i==2){ return 610;}	
		})
		.attr("dy", "15");
		
	tblock.append("tspan")
  		.text(function(d){
			if(d['text'][2]!= undefined) {return d['text'][2];}
			else { return '';}})
		.attr("x", function(d, i){
			if (i==1){return 460;}
			else if(i==2){ return 610;}	
		})
		.attr("dy", "15");
		
	tblock.transition().duration(1000)
		.attr("height",function(d) { return hScale(d.consum); })
		.transition().duration(1000)
		.attr("y",function(d){return yBar-hScale(d.consum)-40;});
	
	//alert('number of adults='+aNum +' number of kids ='+kNum+' size of living space ='+sqf);
		
}
var activeCompSteps = ["number_of_people", "size_of_house", "utility_bill", "utility_result"];
var aComp = 0;
var indexNextStep = 0;
var nextStep;
$(".nextBtn").click(function() {
	//aComp = $(".nextBtn").parent().attr('id');
	aComp = $(this).parent().attr('id');
	indexNextStep = activeCompSteps.indexOf(aComp)+1;
	nextStep = activeCompSteps[indexNextStep];
	activeComp(nextStep);
});
function activeComp(aComp){
	//update progress tracker
	
	for (var i=0; i<$(".progtrckr li").length; i++){
		if(i<=activeCompSteps.indexOf(aComp)){
			$(".progtrckr li").eq(i).removeClass();
			$(".progtrckr li").eq(i).addClass('progtrckr-done');
		}else{
			$(".progtrckr li").eq(i).removeClass();
			$(".progtrckr li").eq(i).addClass('progtrckr-todo');	
		}
    }
	
	//update question content
	for (var i=0; i<activeCompSteps.length; i++){
		var id = "#"+activeCompSteps[i];
		if(activeCompSteps[i]==aComp){
			$(id).removeClass("inactiveQuestion");
		}else{
			$(id).addClass("inactiveQuestion");
		}
	}
				
	if (aComp =="utility_result"){
		compareUtility();
	}
}
//$("#anaTips rect").mouseover();

//});