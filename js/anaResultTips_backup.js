// JavaScript Document
function crtAnaTips(activeG){
	
	var svg = d3.select("#analysis_result").append("svg")
		.attr("width", 960)
		.attr("height", 480)
		.attr("id", "svg_result");
	
	var rect = svg.selectAll("rect").data(lightData)
					.enter().append("rect")
					.attr("x",450)
					.attr("y",function(d) { return d.y; })
					.attr("width", 85)
					.attr("fill","#7db8b5")
					.attr("stroke-width", "1")
					.attr("stroke", "#3c3c3c")
					.attr("height",function(d) { return d.height; });
	
	/*$('#analysis_result rect').mouseover(function() {
	alert($(this).__data__);
	});	
	*/
	/*d3.selectAll('#analysis_result rect').on("click", function(){
	alert(this.__data__.text);
	});*/
	var tipG = svg.append("g").attr("class", "tip");
	var tipG = svg.selectAll("g").data(lightData)
					.enter().append("g")
					.attr("class", "tip")
					.attr("transform", function(d, i) { return "translate(" + (i%2)*400 + "," + (i%2)*i*70 + ")"; });
					//.attr("transform","translate("+function(d, i){return (i%2)*400}+","+function(d, i){return (i%2)*i*70}+")");
					//.attr("y",function(d, i){return (i%2)*i*70})
	var tipRect = tipG.append("rect")
					.attr("height", 50)
					.attr("width", 270)
					.attr("fill","none")
					.attr("stroke-width", "1")
					.attr("stroke", "#a9c14e");
	var tipTxt = tipG.append("text")
					.text(function(d){return d.text;})
					.attr("x", 10)
					.attr("y", 20)
					.attr("fill","#a9c14e");
					
	/*var tipRect = svg.selectAll("#tip_group rect").data(lightData)
					.enter().append("rect")
					.attr("x",function(d, i){return (i%2)*400})
					.attr("y",function(d, i){return (i%2)*i*70})
					.attr("height", 50)
					.attr("width", 270)
					.attr("fill","none")
					.attr("stroke-width", "1")
					.attr("stroke", "#a9c14e");*/

}
