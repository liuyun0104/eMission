
// JavaScript Document
//$(window).load(function(){
var stepData = [
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

/* set up navigation and prev, next button. */
//laundry.washer.choice;

var laundry = [
	{
		"id": "washer", 
		"choice": "",
		"cost": 0
	},
	{
		"id": "temperature", 
		"choice": "",
		"cost": 0
	},
	{
		"id": "load", 
		"choice": 0,
		"cost": 0
	},
	{
		"id": "dryer", 
		"choice": 0,
		"cost": 0
	},
	{
		"id": "shower", 
		"freq":0,
		"time":0,
		"cost": 0
	},
	{
		"id": "bath", 
		"freq":0,
		"time":0,
		"cost": 0
	},
	{
		"id":"result",
		"cost":0	
	}
	];
	

var laundryStep = ["washer", "temperature", "load", "dryer", "shower", "bath", "result"];
var category = ["heating", "laundry", "lighting", "entertainment", "kitchen", "analysis_result"];
var aStep = 0, nextStep =0;
var aCate, nextCate;
var indexNextStep = 0;
var nextStep;
$(".nextBtn").click(function() {
	aStep = $(this).parent().attr('id');
	aCate = $(this).closest('.category').attr('id');
	if(aStep == "result"){ // last step of current category
		indexNextCate = category.indexOf(aCategory)+1;
		indexNextStep = 0;
		nextCate = category[indexNextCate];
		nextStep = window[nextCate][indexNextStep]['id'];
		activeComp(nextCate, nextStep);
	}else{ // still in current category
		nextCate = aCate;
		nextCateStep = aCate+"Step";
		indexNextStep = window[nextCateStep].indexOf(aStep)+1;
		nextStep =  window[nextCate][indexNextStep]['id'];
		activeComp(nextCate, nextStep);
	}
});
function activeComp(nextCate, nextStep){
	//update progress tracker
	
	for (var i=0; i<$(".progtrckr li").length; i++){
		if(i<=category.indexOf(nextCate)){
			$(".progtrckr li").eq(i).removeClass();
			$(".progtrckr li").eq(i).addClass('progtrckr-done');
		}else{
			$(".progtrckr li").eq(i).removeClass();
			$(".progtrckr li").eq(i).addClass('progtrckr-todo');	
		}
    }
	
	//update question content - set inactive category
	for (var i=0; i<category.length; i++){
		var cid = "#"+category[i];
		if(category[i]==nextCate){
			$(cid).removeClass("inactiveQuestion");
		}else{
			$(cid).addClass("inactiveQuestion");
		}
	}
	//update question content - set inactive steps
	for (var i =0; i<window[nextCate].length; i++){
		var sid = "#"+window[nextCate][i]['id'];
		if(window[nextCate][i]['id']==nextStep){
			$(sid).removeClass("inactiveQuestion");
		}else{
			$(sid).addClass("inactiveQuestion");
		}
	}
				
	/*if (aComp =="utility_result"){
		compareUtility();
	}*/
}
/* functions for laundry section */

function crtWasher(){
	if(washer=='washerF'){
		$("img#washerF").attr("src", "images/washerF_a.png");
		$("img#washerT").attr("src", "images/washerT_in.png");
	}else if(washer=='washerT'){
		$("img#washerF").attr("src", "images/washerF_in.png");
		$("img#washerT").attr("src", "images/washerT_a.png");
	}else{
		$("img#washerF").attr("src", "images/washerF_a.png");
		$("img#washerT").attr("src", "images/washerT_a.png");
	}
}
crtWasher();
$("#washer img").click(function(){
	washer = $(this).attr("id");
	crtWasher();
});

/* functions for lighting section */
function dyOption(element, s1,s2){
	//first change bulb img
	var trId = $(element).closest(".bulbTr").attr("id");
	var ss1= "#"+trId+" #"+s1;
	var ss2= "#"+trId+" #"+s2;
	//then change select options. 
	var s1 = $(ss1);
	var s2 = $(ss2);
	//s2.innerHTML = "";
	var op = ss2+" option";
	var img = "#"+trId+" img.bulbImg";
	$(op).remove();
	if(s1.val() == "basic"){
		var optionArray = ["25|25","40|40","60|60(typical)","75|75", "100|100"];
		$(img).attr("src","images/icon_bulb1.png" );
	} else if(s1.val() == "CFL"){
		var optionArray = ["10|10","15|15(typical)","20|20","25|25", "40|40"];
		$(img).attr("src","images/icon_bulb2.png" );
	} else if(s1.val() == "LED"){
		var optionArray = ["25|25","40|40"];
		$(img).attr("src","images/icon_bulb3.png" );
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		//s2.options.add(newOption);
		s2.append(newOption);
	}
}

function displayBulbCost() {
	var trId = $(this).closest(".bulbTr").attr("id");
	var bulbNo = "#"+trId+" #bulbNo";
	var bulbWa = "#"+trId+" #bulbWa";
	var bulbHour = "#"+trId+" #bulbHour";
	
	bulbNo = $(bulbNo).val();
	bulbWa = $(bulbWa).val();
	bulbHour = $(bulbHour).val();
	
	var bulbCost = (bulbNo*bulbWa*bulbHour*0.16*30)/1000;
	var bulbCostP =  "#"+trId+" p#bulbCost";
	$(bulbCostP).html("Cost per Month:<br> $<div class=\"cost\"> " +bulbCost.toFixed(2)+"</div>");
	
	totalLightingCost();
	}
	
var lightingCost;
	
function totalLightingCost(){
	lightingCost = 0;
	for (var i=0; i<$(".cost").length; i++){
		lightingCost += Number($("#bulbCost .cost").eq(i).text());
	}
	$("#lightingCost p").html("<b>Total Lighting Cost::<br> $</b>" +lightingCost.toFixed(2));
}
$(".bulb").change(displayBulbCost);
displayBulbCost();



//$("#anaTips rect").mouseover();

//});