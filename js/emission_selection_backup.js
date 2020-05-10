// JavaScript Document

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
function topmenu(){
	//if(aStep ==0){
		
		svg = d3.select("#selection").append("svg")
				.attr("width", 700)
				.attr("height", 80);
				
		var endLine = x1+(d1+2*r1)*5;
		var pathLine = "M "+x1+" "+y1+" L "+endLine+" "+y1;
		line = svg.append("path")
					.attr("d", pathLine)
					.style("stroke-width", 1)
					.style("stroke-dasharray", "2, 4")
					.style("stroke", "#efe3c1");
							
		steps = svg.selectAll("circle").data(stepData)
					.enter().append("circle");
		
		steps.attr("cx", function(d, i){return x1+(d1+r1*2)*i; })	
			 .attr("cy", y1)
			 .attr("r", r1)
			 .attr("id", function(d){return d.id; })
			 .style("fill",  function(d){return d.color; });
		//steps.transition().duration(500).delay(0).style("fill", "steelblue");
		//steps.transition().duration(500).delay(0).style("fill", "steelblue");
		
		labels = svg.selectAll("text").data(stepData)
						.enter().append("text").attr("class", "labels");
		labels.attr("x", function(d, i){return x1+(d1+ 2*r1)*i-(d.width*7)/2; })
			.attr("y", y1-20)
			.append("tspan")
			.text(function(d, i){return d.category[0]});
			
		labels.attr("x", function(d, i){return x1+(d1+ 2*r1)*i-(d.width*7)/2; })
			.attr("y", y1-20)
			.append("tspan")
			.attr("dx", -50)
			.attr("dy", 10)
			.text(function(d, i){if(d.category[1]){return d.category[1]}});
			
			
		/*labels = svg.selectAll("g").data(stepData)
						.enter().append("g");
		labels = svg.selectAll("text").data(stepData)
						.enter().append("text");*/
		
					
		
	//}
	
	if (aStep>0 && aStep< stepData.length){
		sLength = stepData.length;
		qLength = stepData[aStep].length;
		d2= (d1*(sLength-1)-r2*2*qLength)/(sLength+qLength-1);
		
		steps.transition().duration(500).delay(200)
		//.style("fill", "steelblue")
			 .attr("cx", function(d, i){ if(i<=aStep){return x1+(d2+r1*2)*i;}
			 							// else if(i>aStep){return (d1*(sLength-1)+2*r1*sLength) - (d2+r1*2)*(sLength-i)}});
										 else if(i>aStep){return x1+(d1+2*r1)*(sLength-1)-(d2+r1*2)*(sLength-i-1)}});
		labels.transition().duration(500).delay(200)
		//.style("fill", "steelblue")
			 .attr("x", function(d, i){ if(i<=aStep){return x1+(d2+r1*2)*i;}
			 							 else if(i>aStep){return x1+(d1+2*r1)*(sLength-1)-(d2+r1*2)*(sLength-i-1)-(d.width*7)/2}});
		//add small circles
		qCircles = svg.selectAll(".questions circle").data(stepData[aStep].questions)
							.enter().append("circle");
		aId = "#"+stepData[aStep].id;
		var qCircleX = d3.select(aId).attr("cx"); 
		//qCircleX = d3.select(aId).attr("cx");
		qCircleColor = d3.select(aId).style("fill");  
		qCircles.attr("r", r2)
				//.attr("cx", function(d, i){ return Number(qCircleX) + ((d1*3)/d.length)*i; })
				.attr("cx", qCircleX)				
				.attr("cy", y1)
				.style("fill", qCircleColor)
				.transition().duration(500).delay(200)
				.attr("cx", function(d, i){ return x1+(d2+r1*2)*aStep+r1+(2*r2+d2)*(i+1)-r2; });
	}
	
}
	aStep =0;
topmenu();	
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
$("#question").append(profileQ['title'][0]['content']);
$("#question p").transition({opacity:'1', y: -50, delay: '1000'});
$("#question").append(profileQ['question'][0]['content']);
$("#question p").transition({opacity:'1',y: -50,  delay: '2000'});
//$("#question").append(profileQ['question'][1]['content']);
//$("#question p").transition({opacity:'1', y: -50, delay: '3000'});
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
compareUtility();

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
		{ "type":"user" , "consum": 250, "color": "#8cc0bb"},
		{ "type":"us" , "consum": 300, "color": "#bcbdc0"  },
		{ "type":"eMission" , "consum": 200, "color": "#aac051"}		
		];
		
	
	var uResult1 = ((uCompare[0]['consum']-uCompare[1]['consum'])/uCompare[1]['consum'])*100;
	var uResult2 = ((uCompare[0]['consum']-uCompare[2]['consum'])/uCompare[2]['consum'])*100;
	
	if(uResult1>0){
		uText1 = "You used "+uResult1 +"% more than average U.S. home. "
	}else if(uResult1<=0){
		uText1 = "You used "+uResult1 +"% less than average U.S. home. "
	}
	if(uResult2>0){
		uText2 = "You used "+uResult2 +"% more than average eMission home. "
	}else if(uResult2<=0){
		uText2 = "You used "+uResult2 +"% less than average eMission home. "
	}
	uCompare[0]['text'] = "";
	uCompare[1]['text'] = uText1;
	uCompare[2]['text'] = uText2;
	var hScale = d3.scale.linear().domain([0, 300]).range([0,200]);
	//var hBar = hScale(uCompare);
	var xBar = 350, yBar = 400;
	var yBar2;
	//yBar2 = yBar-hBar;
	var bar = svg.append("g").attr("id", "utilityBarchart");
	bar.selectAll("rect").data(uCompare)
		.enter().append("rect")
		.attr("x",function(d, i){return xBar + i*100;})
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
		
	bar.selectAll("text").data(uCompare)
		.enter().append("text")
		.attr("x",function(d, i){return xBar + i*100;})
		//.attr("x",function(d, i){return d.type;})
		.attr("y",yBar-10)
		.attr("fill",function(d){return d.color;})
		.text(function(d){return d.text;})
		.transition().duration(1000)
		.attr("height",function(d) { return hScale(d.consum); })
		.transition().duration(1000)
		.attr("y",function(d){return yBar-hScale(d.consum)-10;});
		
}



