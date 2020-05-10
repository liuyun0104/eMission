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
var profileQ =	{
		"title": [
					{"content": "<p>Let’s start from some quick questions of your living condition. </p>"}
		],
		"question": [
					{"content": "<p>Please select <br /><span> Number of People </span> <br />in your living space.  </p>"},
					{"content": "<p>Please select <span> Size </span> of your living space.  </p>"}
		]
};
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

d3.selectAll("#utilitySubmit").on("click", function(){
	getUtility();
});

function getUtility(){
	alert($("#utilityValue").val());	
}

/*for the result of part 1*/
//compareUtility();
var uText1 = new Array();
var uText2 = new Array(); 
function compareUtility(){
	var svg = d3.select("#utility_result").append("svg")
		.attr("width", 960)
		.attr("height", 480);
		
	var comText1, comText2;
	//var uCompare = {"user":250, "us": 300, "eMission":200};
	/*var uCompare = {
		"user": [{ "type":"user" , "consum": 250 }],
		"us": [{ "type":"us" , "consum": 300 }],
		"eMission": [{ "type":"eMission" , "consum": 200 }]};
	*/	
	var uCompare = [
		{ "type":"user" , "title":"Your Home", "consum": 250, "color": "#8cc0bb"},
		{ "type":"us" ,  "title":"U.S. Similar Homes", "consum": 300, "color": "#bcbdc0"  },
		{ "type":"eMission" ,  "title":"eMission Homes", "consum": 200, "color": "#aac051"}		
		];
		
	
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
	var hScale = d3.scale.linear().domain([0, 300]).range([0,200]);
	//var hBar = hScale(uCompare);
	var xBar = 350, yBar = 350;
	var yBar2;
	//yBar2 = yBar-hBar;
	var bar = svg.append("g").attr("id", "utilityBarchart");
	bar.selectAll("rect").data(uCompare)
		.enter().append("rect")
		.attr("x",function(d, i){return xBar + i*120;})
		//.attr("x",function(d, i){return d.type;})
		.attr("y",yBar)
		.attr("width", 85)
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
		.attr("x",function(d, i){return xBar + i*120+40;})
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
		.attr("x",function(d, i){return xBar + i*125;})
		.attr("y",yBar)
		.attr("text-anchor", "middle")
		.attr("font-size", "13px")
		.attr("fill",function(d){return d.color;});
		//.text(function(d){return d.text;})
		
	tblock.append("tspan")
  		.text(function(d){
			if(d['text'][0]!= undefined) {return d['text'][0];}
			else { return '';}})
		.attr("x", function(d, i){return xBar + i*100+50;})
		.attr("dy", "0");
		
	tblock.append("tspan")
  		.text(function(d){
			if(d['text'][1]!= undefined) {return d['text'][1];}
			else { return '';}})
		.attr("x", function(d, i){return xBar + i*100+50;})
		.attr("dy", "10");
		
	tblock.append("tspan")
  		.text(function(d){
			if(d['text'][2]!= undefined) {return d['text'][2];}
			else { return '';}})
		.attr("x", function(d, i){return xBar + i*100+50;})
		.attr("dy", "10");
		
	tblock.transition().duration(1000)
		.attr("height",function(d) { return hScale(d.consum); })
		.transition().duration(1000)
		.attr("y",function(d){return yBar-hScale(d.consum)-40;});
	
	alert('number of adults='+aNum +' number of kids ='+kNum+' size of living space ='+sqf);
		
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


var anaResult = [
	{
		"category": ["heating", "& cooling"],
		"id": "heating",  
		"consum": 680,
		"x":0,
		"y":0,
		"height":0
	},
	{
		"category": ["laundry", "& bathroom appliance"], 
		"id": "laundry", 
		"consum": 380,
		"x":0,
		"y":0,
		"height":0
	},
	{
		"category": ["lighting", " "], 
		"id": "lighting", 
		"consum": 320,
		"x":0,
		"y":0,
		"height":0
	},
	{
		"category": ["entertainment","& home office"], 
		"id": "entertainment", 
		"consum": 200,
		"x":0,
		"y":0,
		"height":0
	},
	{
		"category": ["kitchen", "appliance"], 
		"id": "kitchen", 
		"consum": 180,
		"x":0,
		"y":0,
		"height":0
	}
];

var category = ["heating", "laundry", "lighting", "entertainment", "kitchen"];
var anaConsum = new Array();

for (var i=0; i<anaResult.length; i++){
	anaConsum[i] = anaResult[i].consum;
}
  	
var anaMax = Math.max.apply(Math.max, anaConsum);
	/*var anaWid = 960;
	var anaHei = 420;*/
	
	var anaWid = $("#analysis_result").outerWidth();
	var anaHei = 420;
	//var anaHei = $("#analysis_result").outerHeight();
	var barWid = anaWid/8;
	var hConScale = d3.scale.linear().domain([0, anaMax]).range([0,(0.65*anaHei)]);
	
function createAnaResult(){
	
	//update anaResult position info
	
	for (var i=0; i<anaResult.length; i++){
		anaResult[i]['x'] = (anaWid/16)*(i+1) + anaWid*i/8;
		anaResult[i]['height'] = hConScale(anaResult[i].consum);
		anaResult[i]['y'] = anaHei-anaResult[i]['height']-40;
	}
	
	//begin to build rects
	var svg = d3.select("#analysis_result").append("svg")
		.attr("width", anaWid)
		.attr("height", anaHei)
		.attr("id", "svg_result");
	
	var g = svg.selectAll("g").data(anaResult)
					.enter().append("g")
					.attr("class", "tipBar")
					.attr("id", function(d){return d.id})
					.attr("transform", function(d, i) { return "translate(" + d.x + "," + d.y + ")"; });
	var line = svg.append("line")
					.attr("x1",0 )
					.attr("y1", anaHei-40)
					.attr("x2", anaWid)
					.attr("y2", anaHei-40)
					.style("stroke", "#bcbdc0")
					.style("stroke-width", 1);
									
	var	rect = g.append("rect")	
					.attr("width", barWid)
					.attr("fill","#7db8b5")
					.attr("stroke-width", "1")
					.attr("stroke", "#3c3c3c")
					.attr("rx", 5)
					.attr("ry", 5)
					.attr("id", function(d){return d.id})
					.attr("y", function(d){return d.height; })					
					.attr("height", 0)
					.transition().duration(1000)
					.attr("y", 0)
					.attr("height",function(d) { return d.height; });
					
	var txt1 = g.append("text")
				.text(function(d){return d.consum+'kwh'})
				.attr("y",function(d){return d.height-20;})
				.attr("x",barWid/2)
				.attr('class', 'sTitle txt1')
				.transition().duration(1000)
				.attr("y", -20);
				
	var txt2 = g.append("text")
				.text(function(d){return "$"+(d.consum*0.16).toFixed(2)})
				.attr("y",function(d){return d.height-5;})
				.attr("x",barWid/2)
				.attr('class', 'sTitle txt2')
				.transition().duration(1000)
				.attr("y", -5);
				
	var txt3 = g.append("text")
				//.text(function(d,i){return d['category'][i]})
				.attr("y", function(d, i){return d.height+15; })
				.attr("x",barWid/2)
				.attr('class', 'sTitle txt3');

		txt3.append("tspan")
			.attr("id","t1")
			.attr("x", barWid/2)
			.text(function(d, i){return d.category[0]});
			
		txt3.append("tspan")
			.attr("id","t2")
			.attr("x", barWid/2)
			.attr("dy", 10)
			.text(function(d, i){if(d.category[1]){return d.category[1]}});
}
createAnaResult();

$("#svg_result g.tipBar rect").click(function(){
		//alert('consum= '+this.__data__.consum);
	 // var index = $('g.tipBar').index($(this));
	  var id = $(this).attr("id");
	  var index = category.indexOf(id);
	  transAnaResult(index, id);
	  crtAnaTips(index, id);
		
	});
function transAnaResult(item, id){
		d3.selectAll("#anaTips").remove();
		var aId = anaResult[item].id;
		var aSelect = "#svg_result g#"+aId;
		d3.select(aSelect).classed("activeBar", true)
		//$("#svg_result g").eq(2).addClass("activeBar");

		var gTrans = d3.selectAll("#svg_result g")
							.transition().duration(1000).ease('sin')
							.attr("transform", function(d,i){
								if(i<item){return "translate(" +((barWid/8)*(i+1)+(barWid/4)*i) + "," + d.y + ")"; }
								//else if(i==item) {return "translate(" +((barWid/8)*i+(barWid/4)*(i-1)+(anaWid-2.5*barWid)/2)+ "," + d.y + ")";  }
								else if(i==item) {return "translate(" +((barWid/8)*3*i+(barWid*11)/4)+ "," + d.y + ")";  }
								else if(i>item) {return "translate(" +(anaWid - (barWid/8)*3*(5-i))+ "," + d.y + ")";  }	
								});
								//.each("end", crtAnaTips(item, id));
													
		var rectTrans = d3.selectAll("#svg_result rect")
							.transition().duration(500)
							.attr("opacity", function(d,i){ 
							if(i!=item){return 0.4; }
							else{return 0;}
							})
							.transition().duration(500)
							.attr("width", function(d,i){ 
							if(i!=item){return 0.25*barWid; }
							else{return barWid;}
							});
							//.each("end", crtAnaTips(item, id));
							
		var txt1Trans = d3.selectAll("#svg_result .txt1")
							.transition().duration(500)
							.attr("x", function(d, i){
								if(i!=item){return barWid/8; }
								else{return barWid/2;}
							})
							.transition().duration(500)
							.attr("opacity", function(d,i){ 
							if(i!=item){return 0.4; }
							else{return 1;}
							});
		var txt2Trans = d3.selectAll("#svg_result .txt2")
							.transition().duration(500)
							.attr("x", function(d, i){
								if(i!=item){return barWid/8; }
								else{return barWid/2;}
							})
							.transition().duration(500)
							.attr("opacity", function(d,i){ 
							if(i!=item){return 0.4; }
							else{return 1;}
							});
		var txt3Trans1 = d3.selectAll("#svg_result .txt3 #t1")
							.transition().duration(500)
							.attr("x", function(d, i){
								if(i!=item){return barWid/8; }
								else{return barWid/2;}
							})
							.transition().duration(500)
							.attr("opacity", function(d,i){ 
							if(i!=item){return 0.4; }
							else{return 1;}
							});
		var txt3Trans2 = d3.selectAll("#svg_result .txt3 #t2")
							.transition().duration(500)
							.attr("x", function(d, i){
								if(i!=item){return barWid/8; }
								else{return barWid/2;}
							})
							.transition().duration(500)
							.attr("opacity", function(d,i){ 
							if(i!=item){return 0.4; }
							else{return 1;}
							});
									
							
							
}

/* result of the analysis  */

var heatingTip = [
	
	{
		"category": "tip", 
		"object": "bulb", 
		"consum":25,
		"text": "Change your 4 basic incandescent bulbs to CFL bulbs. Change your 4 basic incandescent bulbs to CFL bulbs.",
		"height":0,
		"y":0
	},
	{
		"category": "tip", 
		"object": "bulb", 
		"consum":45,
		"text": "Tip text 22",
		"height":0,
		"y":0
	},
	{
		"category": "tip", 
		"object": "bulb", 
		"consum":50,
		"text": "Tip text 3",
		"height":0,
		"y":0
	},
	{
		"category": "tip", 
		"object": "bulb", 
		"consum":560,
		"text": "Tip text 4",
		"height":0,
		"y":0
	}
];

var lightingTip = [
	
	{
		"category": "tip", 
		"object": "bulb", 
		"consum":25,
		"text": "Change your 4 basic incandescent bulbs to CFL bulbs. Change your 4 basic incandescent bulbs to CFL bulbs.",
		"height":0,
		"y":0
	},
	{
		"category": "tip", 
		"object": "bulb", 
		"consum":45,
		"text": "Tip text 33",
		"height":0,
		"y":0
	},
	{
		"category": "tip", 
		"object": "bulb", 
		"consum":250,
		"text": "Tip text 3",
		"height":0,
		"y":0
	}
];

var laundryTip = [
	
	{
		"category": "tip", 
		"object": "bulb", 
		"consum":25,
		"text": "Change your 4 basic incandescent bulbs to CFL bulbs",
		"height":0,
		"y":0
	},
	{
		"category": "tip", 
		"object": "bulb", 
		"consum":35,
		"text": "Tip text 2",
		"height":0,
		"y":0
	},
	{
		"category": "tip", 
		"object": "bulb", 
		"consum":320,
		"text": "Tip text 3",
		"height":0,
		"y":0
	}
];

var entertainmentTip = [
	
	{
		"category": "tip", 
		"object": "bulb", 
		"consum":25,
		"text": "Change your 4 basic incandescent bulbs to CFL bulbs",
		"height":0,
		"y":0
	},
	{
		"category": "tip", 
		"object": "bulb", 
		"consum":15,
		"text": "Tip text 2",
		"height":0,
		"y":0
	},
	{
		"category": "tip", 
		"object": "bulb", 
		"consum":160,
		"text": "Tip text 3",
		"height":0,
		"y":0
	}
];

var kitchenTip = [
	
	{
		"category": "tip", 
		"object": "bulb", 
		"consum":15,
		"text": "Change your 4 basic incandescent bulbs to CFL bulbs",
		"height":0,
		"y":0
	},
	{
		"category": "tip", 
		"object": "bulb", 
		"consum":10,
		"text": "Tip text 2",
		"height":0,
		"y":0
	},
	{
		"category": "tip", 
		"object": "bulb", 
		"consum":155,
		"text": "Tip text 3",
		"height":0,
		"y":0
	}
];


var tips = new Array();

tips.heating = heatingTip;
tips.laundry = laundryTip;
tips.lighting = lightingTip;
tips.entertainment = entertainmentTip;
tips.kitchen = kitchenTip;

function crtAnaTips(index, id){
	//remove all old tips
	d3.selectAll("#anaTips").remove();
	//var g = activeG;
	var selection = "#analysis_result g#"+id;
	var height = $(selection).children('rect').attr('height');
	var consum = $(selection)[0].__data__.consum;
	//var width = $(selection).children('rect').attr('width');
	//update height of each bar tip
	
	for (var i=0; i<tips[id].length; i++){	
		tips[id][i].height = (tips[id][i].consum/consum)*height;
		if(i>0){
			tips[id][i].y = tips[id][i-1].y+tips[id][i-1].height;
		};	
	};

	
	//alert('height='+height + 'total consum: '+consum);
	
	//var iBar = transAnaResult($('g.tipBar').index(id));
	
	var svg = d3.select(selection).append("g").attr("id", "anaTips");
	var rect = svg.selectAll("#anaTips rect").data(tips[id])
					.enter().append("rect")
					.attr("y",function(d) { return d.y; })
					.attr("width", barWid)
					.attr("fill","#7db8b5")
					.attr("stroke-width", "2")
					.attr("stroke", "#3c3c3c")
					.attr("rx", 5)
					.attr("ry", 5)
					.attr("class", "barSeg")
					.attr("height",function(d) { return d.height; });
	//var tipX = Number(barWid*3*index)/8+Number(barWid/8);			
	//var tipG = svg.append("g").attr("class", "tip");
	var tipG = svg.selectAll("g.tip").data(tips[id])
					.enter().append("g")
					.attr("class", "tip")
					.attr("transform", function(d, i) { 
					if((i%2)==0){
						return "translate(" + (barWid*(-1)*21)/8  + "," + (50-(anaHei-Number(height))+90*i/2) + ")";
						//return "translate(" + (barWid*(-1)*21)/8  + "," + -250 + ")"; 
					}
					else{
						return "translate(" + barWid*9/8  + "," + (80-(anaHei-Number(height))+90*(i-1)/2) + ")"; 
					}
					});
					

	var tipRect1 = tipG.append("rect")
					.attr("height", 70)
					.attr("width", 2.5*barWid)
					.attr("fill","none")
					.attr("stroke-width", "1")
					.attr("stroke", "#a9c14e");
					
	var tipBtn = tipG.append("g")
					.attr("transform", "translate("+2.15*barWid+", 0)")
					.attr("class", "tipBtn");
	
	tipBtn.append("rect")
					.attr("height", 70)
					.attr("width", 0.35*barWid)
					.attr("fill","#a9c14e");
					
	tipBtn.append("text")
			.text("try")
			.attr("class", "textH2 darkgrey")
					.attr("x", 0.05*barWid)
					.attr("y", 0.35*barWid)
					.attr("fill","#3c3c3c");
					
	var tipTxt1 = tipG.append("text")
					.attr("x", 10)
					.attr("y", 20)
					.attr("fill","#a9c14e"); 
					
	tipTxt1.append("tspan")
			.attr("x",10)
			.text("Save");
			
	tipTxt1.append("tspan")
			.attr("x", 10)
			.attr("dy", 30)
			.attr("class", "textH1")
			.text(function(d, i){return ("$"+(d.consum*0.16).toFixed(0));});
			
	var tipTxt2 = tipG.append("foreignObject")
					.attr("width", 180)
					.attr("height", 80)
					.attr("x", 65)
					.attr("y", 5)
					.append("xhtml:body")
					.style("font", "14px 'Helvetica Neue'")
					.html(function(d){return "<p>"+d.text+"</p>";});	
						
	var lineX2 = $("g#anaTips rect:eq(0)").offset().left- $("#svg_result").offset().left;
	var lineY2 = $("g#anaTips rect:eq(0)").offset().top- $("#svg_result").offset().top;
				
	var tipLine = tipG.append("line")
					.attr("x1", 
						function(d,i){
							if(i%2==0){return 2.5*barWid;}
							else{ return 0;}
						}						
						)
					.attr("y1", 0)
					.attr("x2", function(d, i) {
							return $("g#anaTips rect").eq(i).offset().left- $("g.tip").eq(i).children("rect").offset().left+(i%2)*barWid +Math.pow(-1, i)*10;
						})
					.attr("y2", function(d, i) {
						return $("g#anaTips rect").eq(i).offset().top- $("g.tip").eq(i).children("rect").offset().top+5;
					})
					.style("stroke", "#a9c14e")
					.style("stroke-width", 1);
					
					
		
					

	//connect tips with the bar segments. 
	$("#anaTips g.tip").mouseover(function(){
		var index =$("#anaTips g.tip").index(this);
		//index = $("div").index(this);
		//alert(index);
		$("#anaTips rect.barSeg").eq(index).attr("fill", "#bcbdc0")	  
	});
	$("#anaTips g.tip").mouseout(function(){
		//alert('here');
		var index =$("#anaTips g.tip").index(this);
		//var index = $(this).index($("#anaTips"));
		$("#anaTips rect.barSeg").eq(index).attr("fill", "#7db8b5")	  
	});
	
	$("g.tipBtn").click(function(){		
		if($(this).children("text").text()=="try"){	
			$(this).children("text").text("remove").attr("fill", "#7db8b5");
			$(this).children("rect").attr("fill","#7c7d7e");
			//addTip();
		}else if ($(this).children("text").text()=="remove"){
			$(this).children("text").text("try").attr("fill", "#a9c14e");
			$(this).children("rect").attr("fill", "#a9c14e");
			//removeTip();
		};
	});	
	
}

function crtToConsum(){
		
}

function drawTipLine(){
	
}

//$("#anaTips rect").mouseover();

//});