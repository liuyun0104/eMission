// JavaScript Document
$(window).load(function(){
	//create dotted lines between three circles
	var steps = [
	{
		"id": "compare", 
		"x":100,
		"y":200,
	},
	{
		"id": "analyse", 
		"x":400,
		"y":200,
	},
	{
		"id": "track", 
		"x":700,
		"y":200,
	}];
	
	var x1=$("g#compare circle").eq(0).offset().left-$("svg").offset().left+$("g#compare circle").attr("r")*2+5;
	var x2=$("g#analyse circle").eq(0).offset().left-$("svg").offset().left+5;
	var y=Number($("g#compare circle").eq(0).offset().top-$("svg").offset().top+$("g#compare circle").attr("r"))+120;
	//var y=$("g#compare circle").eq(0).offset().top+$("g#compare circle").attr("r");
	var x3=$("g#analyse circle").eq(0).offset().left-$("svg").offset().left+$("g#analyse circle").attr("r")*2+5;
	var x4=$("g#track circle").eq(0).offset().left-$("svg").offset().left+5;
	
	var svg=d3.selectAll("svg");
	var line1 = svg.append("line")
					.attr("x1", x1)
					.attr("y1", y)
					.attr("x2", x2)
					.attr("y2", y)
					.attr("style", "stroke-dasharray: 2,2; stroke: #EEE2C1; stroke-width: 2;");
					
	var line2 = svg.append("line")
					.attr("x1", x3)
					.attr("y1", y)
					.attr("x2", x4)
					.attr("y2", y)
					.attr("style", "stroke-dasharray: 2,2; stroke: #EEE2C1; stroke-width: 2;");
	d3.selectAll("svg rect.panel").on("mouseover", function(){
		//alert('here');
		d3.select(this).transition().style("opacity", 0.1);
	});
	d3.selectAll("svg rect.panel").on("mouseout", function(){
		//alert('here');
		d3.select(this).transition().style("opacity", 0);
	});
	/*$("g.step").mouseover(function(){
		//var trans = $(this).attr("transform");
		activeStep($(this).attr("id"));
	});
	
	function activeStep(id){
		var factor1 = 1.1;
		var factor2 = 0.8;
		var g=d3.selectAll("g.step").data(steps);
		
			g.transition().duration(500)
			.attr("transform",function(d, i){
				if (d.id== id)	{
					return "translate(" + d.x*(-1)*(factor1-1) + "," + d.y*(-1)*(factor1-1) + ")scale(" + factor1 + ")";
				}else{
					return "translate(" + d.x*(-1)*(factor2-1) + "," + d.y*(-1)*(factor2-1) + ")scale(" + factor2 + ")";
				}
			})
			.attr("opacity", 
				function(d, i){
					if (d.id== id)	{
						return 1;
					}else{
						return 0.6;
					}
				}			
			);
	}*/
					
});