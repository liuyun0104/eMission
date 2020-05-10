
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
	//var anaHei = $("#analysis_result").outerHeight()*0.7;
	var anaHei = 360;
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

var toConHei = 160;
var toConWid = $("#analysis_result").outerWidth();
crtToConsum();

function crtToConsum(){
	var svg2 = d3.select("#analysis_result").append("svg")
					.attr("id", "svg_total")
					.attr("width", toConWid)
					.attr("height", toConHei);
	
	var beBar = svg2.append("rect")
					.attr("width", toConWid*0.8)
					.attr("height", toConHei*0.1)
					.attr("fill","#7c7d7e")
					.attr("rx", 5)
					.attr("ry", 5)
					.attr("x", 0)
					.attr("y", toConHei*0.3);
					
	var aftBar = svg2.append("rect")
					.attr("width", toConWid*0.6)
					.attr("height", toConHei*0.1)
					.attr("fill","#7db8b5")
					.attr("rx", 5)
					.attr("ry", 5)
					.attr("x", 0)
					.attr("y", toConHei*0.3);
}

function drawTipLine(){
	
}

//$("#anaTips rect").mouseover();

//});