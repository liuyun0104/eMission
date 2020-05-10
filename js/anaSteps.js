// JavaScript Document
//$(window).load(function(){
var stepData = [
	{
		"category": ["heating", "& cooling"],
		"id": "cooling",  
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

/* set up navigation and prev, next button. */

var cooling = {
	/*acCentral:{
		id: "acCentral", 
		choice:"",
		wattage: 3500,
		price: 0.04, 
		cost:0
	},
	acWinL:{
		id: "acWinL", 
		choice:"",
		wattage: 1500,
		price: 0.04, 
		cost:0
	},
	acWinM:{
		id: "acWinM", 
		choice:"",
		wattage: 1000,
		price: 0.04, 
		cost:0
	},
	acWinS:{
		id: "acWinS", 
		choice:"",
		wattage: 500,
		price: 0.04, 
		cost:0
	},*/
	ac:{
		id: "ac", 
		choice:"",
		time:0,
		wattage: 3500,
		price: 0,
		temp:0, 
		cost:0
	},
	fan:{
		id: "fan", 
		choice:"",
		time: 0,
		wattage: 100,
		price: 0.016, 
		cost:0
	},
	result:{
		id:"result",
		cost:0
	}	
		
};

var laundry = {
	washer:{
		id: "washer", 
		choice:"",
		price: 0.04, 
		cost:0
	},
	temperature:{
		id: "temperature", 
		choice: "", 
		cost: 0
	},
	loads:{
		id: "loads", 
		choice: 0,
		cost: 0
	},
	dryer:{
		id: "dryer",
		price: 0.46, 
		choice: 0,
		cost: 0
	},
	shower:{
		id: "shower",
		freq:0,
		time:0,
		price: 0.068,
		cost:0
	},
	bath:{
		id: "bath", 
		freq:0,
		size:0,
		price: 0.008,
		cost:0
	},
	result:{
		id:"result",
		cost:0
	}};
var washerPrice = {
		washerT:{
			waterH: 0.68,
			waterM: 0.29,
			waterL: 0.04
		},
		washerF:{
			waterH: 0.44,
			waterM: 0.19,
			waterL: 0.04
		}
};
var lighting = {
		lighting:{
			choice:"", 
			number:0,
			cost:0
		},
		result:{
			id:"result",
			cost:0
		}
};

var entertainment = {
		tv:{
			choice:"", 
			number:0,
			freq:0,
			cost:0
		},
		audio:{
			choice:"",
			freq:0,
			cost:0
		},
		computer:{
			choice:"", 
			number:0,
			freq:0,
			cost:0
		},
		result:{
			choice:"", 
			number:0,
			freq:0,
			cost:0
		}
};
var kitchen = {
		fridge:{
			choice:"", 
			size:0,
			cost:0
		},
		stove:{
			time:0,
			freq:0,
			price: 0.0013,
			cost:0
		},
		oven:{
			time:0, 
			freq:0,
			price: 0.0015,
			cost:0
		},
		microwave:{
			time:0,
			freq:0,
			price: 0.002,
			cost:0
		},
		result: {
			choice: "", 
			cost: 0	
		}
};

var anaResult = [
	{
		"category": ["heating", "& cooling"],
		"id": "cooling",  
		"consum": 0,
		"x":0,
		"y":0,
		"height":0,
		"tipNo": 5
	},
	{
		"category": ["laundry", "& bathroom appliance"], 
		"id": "laundry", 
		"consum": 0,
		"x":0,
		"y":0,
		"height":0,
		"tipNo": 3
	},
	{
		"category": ["lighting", " "], 
		"id": "lighting", 
		"consum": 0,
		"x":0,
		"y":0,
		"height":0,
		"tipNo": 3
	},
	{
		"category": ["entertainment","& home office"], 
		"id": "entertainment", 
		"consum": 0,
		"x":0,
		"y":0,
		"height":0,
		"tipNo": 2
	},
	{
		"category": ["kitchen", "appliance"], 
		"id": "kitchen", 
		"consum": 0,
		"x":0,
		"y":0,
		"height":0,
		"tipNo": 3
	}
];
var coolingStep = ["ac", "fan", "result"];
var laundryStep = ["washer", "temperature", "loads", "dryer", "shower", "bath", "result"];
var lightingStep = ["lighting"];
var entertainmentStep = ["tv", "computer", "result"];
var kitchenStep = ["fridge", "cooking", "result"];
//var kitchenStep = ["fridge", "result"];
var analysis_resultStep = ["analysis_result"];

var category = ["cooling", "laundry", "lighting", "entertainment", "kitchen", "analysis_result"];
var aStep = 0, nextStep =0;
var aCate, nextCate;
var indexNextStep = 0;
var nextStep;

/*for menu 2*/

$(".progtrckr li").click(function(){
	
	var cate = $(this).attr('id');
	cate = cate.substring(0, cate.length-2);
	if(cate == "analysis_result"){
		createAnaResult();
	}; // skip to get result
	step = window[cate+"Step"][0]; 
	activeComp(cate, step);
});

$(".nextBtn").click(function() {
	aStep = $(this).parent().attr('id');
	aCate = $(this).closest('.category').attr('id');
	if((aStep == "result")||(aStep == "lighting")){ // last step of current category
		indexNextCate = category.indexOf(aCate)+1;
		indexNextStep = 0;
		nextCate = category[indexNextCate];
		nextCateStep = nextCate+"Step";
		nextStep = window[nextCateStep][indexNextStep];
		activeComp(nextCate, nextStep);
		if(aCate == "kitchen"){ //load analysis_result
			createAnaResult();
		}
	}else{ // still in current category
		nextCate = aCate;
		nextCateStep = aCate+"Step";
		indexNextStep = window[nextCateStep].indexOf(aStep)+1;
		nextStep = window[nextCateStep][indexNextStep];
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
	for (var i =0; i<window[nextCate+"Step"].length; i++){
		if(nextCate == "analysis_result"){
			var sid = "#"+nextCate;
		}else{
			var sid = "#"+nextCate+" #"+window[nextCate+"Step"][i];
		}
		if(window[nextCate+"Step"][i]==nextStep){
			$(sid).removeClass("inactiveQuestion");
		}else{
			$(sid).addClass("inactiveQuestion");
		}
	}
				
	/*if (aComp =="utility_result"){
		compareUtility();
	}*/
}

/* functions for cooling section */
function crtAC(){
	if(cooling.ac.choice=='acCentral'){
		$("img#acCentral").attr("src", "images/acC_a.png");
		$("img#acWinL").attr("src", "images/acWinL_in.png");
		$("img#acWinM").attr("src", "images/acWinM_in.png");
		$("img#acWinS").attr("src", "images/acWinS_in.png");
		
		$("#acIcon img").attr("src", "images/acC_s.png");
		//$("#ac #monthlyCost").html("<p>Cost per Load:</p><h2> $" +laundry.washer.price+"</h2>");
	}else if(cooling.ac.choice=='acWinL'){
		$("img#acCentral").attr("src", "images/acC_in.png");
		$("img#acWinL").attr("src", "images/acWinL_a.png");
		$("img#acWinM").attr("src", "images/acWinM_in.png");
		$("img#acWinS").attr("src", "images/acWinS_in.png");
		
		$("#acIcon img").attr("src", "images/acWin_s.png");
		//$("#washer #monthlyCost").html("<p>Cost per Load:</p><h2> $" +laundry.washer.price+"</h2>");
	}else if(cooling.ac.choice=='acWinM'){
		$("img#acCentral").attr("src", "images/acC_in.png");
		$("img#acWinL").attr("src", "images/acWinL_in.png");
		$("img#acWinM").attr("src", "images/acWinM_a.png");
		$("img#acWinS").attr("src", "images/acWinS_in.png");
		
		$("#acIcon img").attr("src", "images/acWin_s.png");
	}else if(cooling.ac.choice=='acWinS'){
		$("img#acCentral").attr("src", "images/acC_in.png");
		$("img#acWinL").attr("src", "images/acWinL_in.png");
		$("img#acWinM").attr("src", "images/acWinM_in.png");
		$("img#acWinS").attr("src", "images/acWinS_a.png");
		
		$("#acIcon img").attr("src", "images/acWin_s.png");
	}else{
		$("img#acCentral").attr("src", "images/acC_a.png");
		$("img#acWinL").attr("src", "images/acWinL_a.png");
		$("img#acWinM").attr("src", "images/acWinM_a.png");
		$("img#acWinS").attr("src", "images/acWinS_a.png");
		
		$("#acIcon img").attr("src", "images/acWin_s.png");
	}
	
	displayACCost();
}
crtAC();
$("#ac img").click(function(){
	//alert('here');
	cooling.ac.choice = $(this).attr("id");
	crtAC();
});

var acWattage = {
	acCentral: 3500,
	acWinL: 1500,
	acWinM: 1000,
	acWinS: 500
};

function displayACCost(){
	var actime = $("#acTime").val();	
	var actemp = $("#acTemp").val();
	var acType = cooling.ac.choice;
	var acWat;
	if(acType){
		acWat = acWattage[acType];
	}else{
		acWat = 0;	
	}
	var acCost = ((actime*acWat*0.16)*((80-actemp)*1.03+1)/1000).toFixed(2);
	
	cooling.ac.time = actime;
	cooling.ac.wattage = acWat;
	cooling.ac.cost = acCost;
	cooling.ac.temp = actemp;
	cooling.ac.price = (acWat*0.16)*((80-actemp)*1.03+1)/1000;
	totalCoolingCost = acCost;
	cooling.result.cost = acCost;
	$("#ac #monthlyCost").html("<p>Cost per Month:</p><h2> $" +acCost+"</h2>");
	$("#cooling #result #acCost").html("<h2> $" +acCost+"</h2>");
}
displayACCost();

$("#acTemp").change(displayACCost);
$("#acTime").change(displayACCost);

/* for fan*/

function displayFanCost(){
	var fantime = $("#fanTime").val();	
	var fanprice = cooling.fan.price;
	var fanCost = (fantime*fanprice*30).toFixed(2);
	
	cooling.fan.time = fantime;
	cooling.fan.cost = fanCost;
	
	$("#fan #monthlyCost").html("<p>Cost per Month:</p><h2> $" +fanCost+"</h2>");
	//$("#cooling #result #fanCost").html("<p>Fan cost per Month:</p><h2> $" +fanCost+"</h2>");
	$("#cooling #result #fanCost").html("<h2> $" +fanCost+"</h2>");
	totalCoolingCost = (Number(cooling.ac.cost) + Number(cooling.fan.cost)).toFixed(2);
	cooling.result.cost = totalCoolingCost;
	anaResult[0].consum = (cooling.result.cost/0.16).toFixed(0);
	/*$("#cooling #result #totalCoolingCost").html("<p>Total Cooling Cost per Month:</p><h2> $" +
	totalCoolingCost	+"</h2>");*/
	$("#cooling #result #totalCoolingCost").html("<h2> $" +	totalCoolingCost	+"</h2>");
}
displayFanCost();

$("#fanTime").change(displayFanCost);
/* functions for laundry section */
/* for washer */
function crtWasher(){
	if(laundry.washer.choice=='washerF'){
		$("img#washerF").attr("src", "images/washerF_a.png");
		$("img#washerT").attr("src", "images/washerT_in.png");
		$("#washer #monthlyCost").html("<p>Cost per Load:</p><h2> $" +laundry.washer.price+"</h2>");
		$("#washerIcon img").attr("src", "images/washerF_s.png");
	}else if(laundry.washer.choice=='washerT'){
		$("img#washerF").attr("src", "images/washerF_in.png");
		$("img#washerT").attr("src", "images/washerT_a.png");
		$("#washer #monthlyCost").html("<p>Cost per Load:</p><h2> $" +laundry.washer.price+"</h2>");
		$("#washerIcon img").attr("src", "images/washerT_s.png");
	}else{
		$("img#washerF").attr("src", "images/washerF_a.png");
		$("img#washerT").attr("src", "images/washerT_a.png");
		$("#washer #monthlyCost").html("<p>Cost per Load:</p><h2> $" +laundry.washer.price+"</h2>");
		$("#washerIcon img").attr("src", "images/washerF_s.png");
	}
}
crtWasher();
$("#washer img").click(function(){
	laundry.washer.choice = $(this).attr("id");
	crtWasher();
});
/* for temperature */
function crtTemp(){
	if(laundry.temperature.choice=='waterH'){
		$("img#waterH").attr("src", "images/waterH_a.png");
		$("img#waterM").attr("src", "images/waterM_in.png");
		$("img#waterL").attr("src", "images/waterL_in.png");
		  if(laundry.washer.choice=='washerT'){
			  laundry.temperature.cost = 0.68;
			  $("#temperature #monthlyCost").html("<p>Washer Choice:</p><h2>Top Loader</h2><p>Cost per Load:</p><h2> $" +laundry.temperature.cost+"</h2>");
		  }else if(laundry.washer.choice=='washerF'){
			  laundry.temperature.cost = 0.44;
			  $("#temperature #monthlyCost").html("<p>Washer Choice:</p><h2>Front Loader</h2><p>Cost per Load:</p><h2> $" +laundry.temperature.cost+"</h2>");
		  }
	}else if(laundry.temperature.choice=='waterM'){
		$("img#waterH").attr("src", "images/waterH_in.png");
		$("img#waterM").attr("src", "images/waterM_a.png");
		$("img#waterL").attr("src", "images/waterL_in.png");
		if(laundry.washer.choice=='washerT'){
			laundry.temperature.cost = 0.29;
			$("#temperature #monthlyCost").html("<p>Washer Choice:</p><h2>Top Loader</h2><p>Cost per Load:</p><h2> $" +laundry.temperature.cost+"</h2>");
		}else if(laundry.washer.choice=='washerF'){
			laundry.temperature.cost = 0.19;
			$("#temperature #monthlyCost").html("<p>Washer Choice:</p><h2>Front Loader</h2><p>Cost per Load:</p><h2> $" +laundry.temperature.cost+"</h2>");
		}
	}else{
		$("img#waterH").attr("src", "images/waterH_a.png");
		$("img#waterM").attr("src", "images/waterM_a.png");
		$("img#waterL").attr("src", "images/waterL_a.png");
		if(laundry.washer.choice=='washerT'){
			laundry.temperature.cost = 0.04;
			$("#temperature #monthlyCost").html("<p>Washer Choice:</p><h2>Top Loader</h2><p>Cost per Load:</p><h2> $" +laundry.temperature.cost+"</h2>");
		}else if(laundry.washer.choice=='washerF'){
			laundry.temperature.cost = 0.04;
			$("#temperature #monthlyCost").html("<p>Washer Choice:</p><h2>Front Loader</h2><p>Cost per Load:</p><h2> $" +laundry.temperature.cost+"</h2>");
		}
	}
}
crtTemp();
$("#temperature img").click(function(){
	laundry.temperature.choice = $(this).attr("id");
	crtTemp();
});

/* for laundry loads*/
var lNum = 0, lChange =0;
d3.selectAll("#laundryLoads .numBtnMinus").on("click", function(){
	if (lNum>0){
	lNum -=1;
	lChange = -1;
	d3.select("#laundryLoads .numBtnResult").text(lNum);
	laundry.loads.choice = lNum;
	crtLoads();
	crtDryerLoads();
	}
});
d3.selectAll("#laundryLoads .numBtnPlus").on("click", function(){
	lNum +=1;
	lChange = 1;
	d3.select("#laundryLoads .numBtnResult").text(lNum);
	laundry.loads.choice = lNum;
	crtLoads();
	crtDryerLoads();
});

function crtLoads(){
	if(lChange == 1){ 
		aAdultImg = ("<img src=\"images/basket.png\" class=\"loadsActive\" >");
		aimg = $("#loads #choices").append(aAdultImg);
	
		$('.loadsInactive').transition({left:'+=80px', opacity:'1'});
		$('.loadsActive').transition({left:'+=80px', opacity:'1'});
		var loadsCost = (laundry.temperature.cost*laundry.loads.choice).toFixed(2);
		laundry.loads.cost = loadsCost;
		laundry.result.cost = laundry.loads.cost;
		$("#loads #monthlyCost").html("<p>Washer Cost Per Month</p><h2> $" +loadsCost+"</h2>");
		$("#laundry #result #washerCost").html("<h2> $" +loadsCost+"</h2>");
		
	}
	else if(lChange == -1){ //remove adult icon
		$('.loadsActive:last').transition({opacity:'0', delay:'500'}).remove();
		$('.loadsActive').transition({left:'-=80px', opacity:'1'});
		$('.loadsInactive').transition({left:'-=80px', opacity:'1'});
		var loadsCost = (laundry.temperature.cost*laundry.loads.choice).toFixed(2);
		laundry.loads.cost = loadsCost;
		laundry.result.cost = laundry.loads.cost;
		$("#loads #monthlyCost").html("<p>Washer Cost Per Month</p><h2> $" +loadsCost+"</h2>");
		$("#laundry #result #washerCost").html("<h2> $" +loadsCost+"</h2>");
	}
}

/* for dryer */
function crtDryerLoads(){
	$("#displayLoads img").remove();
	for (var i=0; i<laundry.loads.choice; i++){
		var dryerLoads = ("<img src=\"images/basket.png\" class=\"dryerLoads_a\" >");
		$("#displayLoads").append(dryerLoads);
	}
};
crtDryerLoads();

function updateDryerLoads(){
	$("#displayLoads img").remove();
	var selectedLoads = laundry.loads.choice-dryerHNum-dryerDNum;
	for (var i=0; i<laundry.loads.choice; i++){
		if(i<selectedLoads){
			var dryerLoads = ("<img src=\"images/basket.png\" class=\"dryerLoads_a\" >");
			$("#displayLoads").append(dryerLoads);
			
		}
		else{
			var dryerLoads = ("<img src=\"images/basket_e.png\" class=\"dryerLoads_in\" >");
			$("#displayLoads").append(dryerLoads);
		}
	}
}

var dryerDNum = 0, dryerHNum = 0, dryerDChange =0, dryerHChange = 0;
$("#dryerD .numBtnMinus").click(function(){
	if (dryerDNum>0){
		dryerDNum -=1;
		dryerDChange = -1;
		$("#dryerD .numBtnResult").text(dryerDNum);
		laundry.dryer.choice = dryerDNum;
		var dryerCost = (laundry.dryer.choice * laundry.dryer.price).toFixed(2);
		laundry.dryer.cost = dryerCost;
		laundry.result.cost = Number(laundry.loads.cost) + Number(laundry.dryer.cost);
		$("#dryer #monthlyCost").html("<p>Dryer Cost Per Month</p><h2> $" +dryerCost+"</h2>");
		$("#laundry #result #dryerCost").html("<h2> $" +dryerCost+"</h2>");
		updateDryerLoads();
	}
});

$("#dryerD .numBtnPlus").click(function(){
	if (dryerDNum<(laundry.loads.choice-dryerHNum)){
		dryerDNum +=1;
		dryerDChange = +1;
		$("#dryerD .numBtnResult").text(dryerDNum);
		laundry.dryer.choice = dryerDNum;
		var dryerCost = (laundry.dryer.choice * laundry.dryer.price).toFixed(2);
		laundry.dryer.cost = dryerCost;
		laundry.result.cost = Number(laundry.loads.cost) + Number(laundry.dryer.cost);
		$("#dryer #monthlyCost").html("<p>Dryer Cost Per Month</p><h2> $" +dryerCost+"</h2>");
		$("#laundry #result #dryerCost").html("<h2> $" +dryerCost+"</h2>");
		updateDryerLoads();
	}
});

$("#dryerH .numBtnMinus").click(function(){
	if (dryerHNum>0){
		dryerHNum -=1;
		dryerHChange = -1;
		$("#dryerH .numBtnResult").text(dryerHNum);
		updateDryerLoads();
	}
});

$("#dryerH .numBtnPlus").click(function(){
	if (dryerHNum<(laundry.loads.choice-dryerDNum)){
		dryerHNum +=1;
		dryerHChange = +1;
		$("#dryerH .numBtnResult").text(dryerHNum);
		updateDryerLoads();
	}
});

/*for shower*/

function displayShowerCost(){
	var time = $("#showerTime").val();	
	var freq = $("#showerFreq").val()*4;
	var showerCost = (laundry.shower.price*time*freq).toFixed(2);
	
	laundry.shower.time = time;
	laundry.shower.freq = freq;
	laundry.shower.cost = showerCost;
	
	laundry.result.cost = Number(laundry.loads.cost) + Number(laundry.dryer.cost)+Number(laundry.shower.cost);
	$("#shower #monthlyCost").html("<p>Cost per Month:</p><h2> $" +showerCost+"</h2>");
	$("#laundry #result #showerCost").html("<h2> $" +showerCost+"</h2>");
}
displayShowerCost();

$("#showerTime").change(displayShowerCost);
$("#showerFreq").change(displayShowerCost);

/* for bath*/
function displayBathCost(){
	var size = $("#bathSize").val();	
	var freq = $("#bathFreq").val()*4;
	var bathCost = (laundry.bath.price*size*freq).toFixed(2);
	
	laundry.bath.size = size;
	laundry.bath.freq = freq;
	laundry.bath.cost = bathCost;
	$("#bath #monthlyCost").html("<p>Cost per Month:</p><h2> $" +bathCost+"</h2>");
	$("#laundry #result #bathCost").html("<h2> $" +bathCost+"</h2>");
	var totalLaundryCost = Number(laundry.loads.cost) + Number(laundry.dryer.cost) + Number(laundry.shower.cost) + Number(laundry.bath.cost);
	totalLaundryCost = totalLaundryCost.toFixed(2);
	laundry.result.cost = totalLaundryCost;
	anaResult[1].consum = (laundry.result.cost/0.16).toFixed(0);
	$("#laundry #result #totalLaundryCost").html("<h2> $" +	laundry.result.cost	+"</h2>");
}
displayBathCost();

$("#bathSize").change(displayBathCost);
$("#bathFreq").change(displayBathCost);


/* functions for lighting section */

/*$("td.LED p").click(function(){
	$("tr#bulb2.bulbTr").show();
});
*/

$(".bulbB p#add").click(function(){
	if($("#bulbB2").css("display")=="none"){
		$("#bulbB2").show();
	}else{
		$("#bulbB3").show();
		$(".bulbB p#add").hide();
	}
});
$(".bulbCFL p#add").click(function(){
	if($("#bulbCFL2").css("display")=="none"){
		$("#bulbCFL2").show();
	}else{
		$("#bulbCFL3").show();
		$(".bulbCFL p#add").hide();
	}
});
$(".bulbLED p#add").click(function(){
	if($("#bulbLED2").css("display")=="none"){
		$("#bulbLED2").show();
	}else{
		$("#bulbLED3").show();
		$(".bulbLED p#add").hide();
	}
});
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
	$("#lighting #monthlyCost").html("<p>Cost per Month:</p><h2> $" +lightingCost.toFixed(2)+"</h2>");
	lighting.result.cost = lightingCost.toFixed(2);
	anaResult[2].consum = (lighting.result.cost/0.16).toFixed(0);
}
$(".bulb").change(displayBulbCost);
displayBulbCost();

/*for tv*/
var tvWattage = {
	19: 80,
	25: 140,
	32: 125,
	42: 210,
	52: 260
};

$(".tvLED p#add").click(function(){
	if($("#tvLED2").css("display")=="none"){
		$("#tvLED2").show();
	}else{
		$("#tvLED3").show();
		$(".tvLED p#add").hide();
	}
});
$(".tvCRT p#add").click(function(){
	if($("#tvCRT2").css("display")=="none"){
		$("#tvCRT2").show();
	}else{
		$("#tvCRT3").show();
		$(".tvCRT p#add").hide();
	}
});

function displayTVCost() {
	var tvId = $(this).closest(".tvTr").attr("id");
	//var tvNo = "#"+tvId+" #tvNo";
	var tvSize = "#"+tvId+" #tvSize";
	var tvHour = "#"+tvId+" #tvHour";
	
	//tvNo = $(tvNo).val();
	tvSize = $(tvSize).val();
	tvWa = tvWattage[tvSize];
	tvHour = $(tvHour).val();
	
	var tvCost = (tvWa*tvHour*0.16*30)/1000;
	var tvCostP =  "#"+tvId+" p#tvCost";
	$(tvCostP).html("Cost per Month:<br> $<div class=\"cost\"> " +tvCost.toFixed(2)+"</div>");
	
	totalTVCost();
	}
	
	
function totalTVCost(){
	tvTotalCost = 0;
	for (var i=0; i<$(".cost").length; i++){
		tvTotalCost += Number($("#tvCost .cost").eq(i).text());
	}
	entertainment.tv.cost= tvTotalCost;
	$("#tv #monthlyCost").html("<p>Cost per Month:</p><h2> $" +tvTotalCost.toFixed(2)+"</h2>");
	$("#entertainment #result #tvCost").html("<h2> $" +	tvTotalCost.toFixed(2)	+"</h2>");
	
	entertainment.result.cost = (Number(entertainment.tv.cost) + Number(entertainment.computer.cost)).toFixed(2);
	$("#entertainment #result #totalEntertainCost").html("<h2> $" +	entertainment.result.cost	+"</h2>");
}

totalTVCost();
$(".tv").change(displayTVCost);

/*for computer*/
var compuWattage = {
	"compuD compuTr": 200,
	"compuL compuTr": 30
};

$(".compuD p#add").click(function(){
	if($("#compuD2").css("display")=="none"){
		$("#compuD2").show();
	}else{
		$("#compuD3").show();
		$(".compuD p#add").hide();
	}
});
$(".compuL p#add").click(function(){
	if($("#compuL2").css("display")=="none"){
		$("#compuL2").show();
	}else{
		$("#compuL3").show();
		$(".compuL p#add").hide();
	}
});

function displayCompuCost() {
	var compuId = $(this).closest(".compuTr").attr("id");
	var compuType = $(this).closest("tr").attr("class");
	var compuHour = "#"+compuId+" #compuHour";
	compuWa = compuWattage[compuType];
	compuHour = $(compuHour).val();
	var compuCost = (compuWa*compuHour*0.16*30)/1000;
	
	var compuCostP =  "#"+compuId+" p#compuCost";
	$(compuCostP).html("Cost per Month:<br> $<div class=\"cost\"> " +compuCost.toFixed(2)+"</div>");
	
	totalCompuCost();
	}
	
totalCompuCost();
	
function totalCompuCost(){
	compuTotalCost = 0;
	for (var i=0; i<$(".cost").length; i++){
		compuTotalCost += Number($("#compuCost .cost").eq(i).text());
	}
	$("#computer #monthlyCost").html("<p>Cost per Month:</p><h2> $" +compuTotalCost.toFixed(2)+"</h2>");
	entertainment.computer.cost= compuTotalCost.toFixed(2);
	
	$("#entertainment #result #compuCost").html("<h2> $" + compuTotalCost.toFixed(2)	+"</h2>");
	entertainment.result.cost = (Number(entertainment.tv.cost) + Number(entertainment.computer.cost)).toFixed(2);
	anaResult[3].consum = (entertainment.result.cost/0.16).toFixed(0);
	$("#entertainment #result #totalEntertainCost").html("<h2> $" +	entertainment.result.cost	+"</h2>");
}
$(".compu").change(displayCompuCost);

/* for fridge */
var fridgeWattage = {
	1976: 1800,
	1986: 1400,
	1987: 950,
	1990: 900,
	1993: 700,
	2001: 500,
	2004: 450,
	2008: 425,
	2010: 400
};

function displayFridgeCost() {
	var fridgeModel = $("#fridgeModel").val();
	var fridgeSize = $("#fridgeSize").val();
	var fridgeWa = fridgeWattage[fridgeModel];
	var fridgeCost = ((fridgeWa*0.16)*(fridgeSize/18)/12).toFixed(2);
	kitchen.fridge.choice = fridgeModel;
	kitchen.fridge.size = fridgeSize;
	kitchen.fridge.cost = fridgeCost;
	
	kitchen.result.cost = kitchen.fridge.cost;
	anaResult[4].consum = (kitchen.result.cost/0.16).toFixed(0);
	$("#fridgeCost").html("Cost per Month:<br> $<div class=\"cost\"> " +fridgeCost+"</div>");
	$("#kitchen #result #fridgeCost").html("<h2> $" + fridgeCost	+"</h2>");
	$("#kitchen #result #totalKitchenCost").html("<h2> $" +	kitchen.result.cost	+"</h2>");
}
displayFridgeCost();	
$(".fridge").change(displayFridgeCost);


function displayStoveCost() {
	var stoveHour = $("#stoveHour").val();
	var stoveFreq = $("#stoveFreq").val();
	var stoveCost = (kitchen.stove.price*stoveHour*stoveFreq*4).toFixed(2);
	kitchen.stove.time = stoveHour ;
	kitchen.stove.freq = stoveFreq;
	kitchen.stove.cost = stoveCost;
	
	kitchen.result.cost = Number(kitchen.fridge.cost) +Number(kitchen.stove.cost);
	anaResult[4].consum = (kitchen.result.cost/0.16).toFixed(0);
	$("#stoveCost").html("Cost per Month:<br> $<div class=\"cost\"> " +stoveCost+"</div>");
	$("#kitchen #result #stoveCost").html("<h2> $" + stoveCost	+"</h2>");	
	$("#kitchen #result #totalKitchenCost").html("<h2> $" +	kitchen.result.cost	+"</h2>");
}
displayStoveCost();	
$(".stove").change(displayStoveCost);

function displayOvenCost() {
	var ovenHour = $("#ovenHour").val();
	var ovenFreq = $("#ovenFreq").val();
	var ovenCost = (kitchen.oven.price*ovenHour*ovenFreq*4).toFixed(2);
	kitchen.oven.time = ovenHour ;
	kitchen.oven.freq = ovenFreq;
	kitchen.oven.cost = ovenCost;
	
	kitchen.result.cost = Number(kitchen.fridge.cost) +Number(kitchen.stove.cost)+Number(kitchen.oven.cost);
	anaResult[4].consum = (kitchen.result.cost/0.16).toFixed(0);
	$("#ovenCost").html("Cost per Month:<br> $<div class=\"cost\"> " +ovenCost+"</div>");
	$("#kitchen #result #ovenCost").html("<h2> $" + ovenCost	+"</h2>");
	$("#kitchen #result #totalKitchenCost").html("<h2> $" +	kitchen.result.cost	+"</h2>");
}	
displayOvenCost();	
$(".oven").change(displayOvenCost);


function displayMicrowaveCost() {
	var microwaveHour = $("#microwaveHour").val();
	var microwaveFreq = $("#microwaveFreq").val();
	var microwaveCost = (kitchen.microwave.price*microwaveHour*microwaveFreq*4).toFixed(2);
	kitchen.microwave.time = microwaveHour ;
	kitchen.microwave.freq = microwaveFreq;
	kitchen.microwave.cost = microwaveCost;
	
	kitchen.result.cost = (Number(kitchen.fridge.cost) +Number(kitchen.stove.cost)+Number(kitchen.oven.cost)+Number(kitchen.microwave.cost)).toFixed(2);
	anaResult[4].consum = (kitchen.result.cost/0.16).toFixed(0);
	$("#microwaveCost").html("Cost per Month:<br> $<div class=\"cost\"> " +microwaveCost+"</div>");
	$("#kitchen #result #microwaveCost").html("<h2> $" + microwaveCost	+"</h2>");
	$("#kitchen #result #totalKitchenCost").html("<h2> $" +	kitchen.result.cost	+"</h2>");
}	
displayMicrowaveCost();	
$(".microwave").change(displayMicrowaveCost);
//});