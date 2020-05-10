// JavaScript Document
$(window).load(function(){
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
	
	$("g.step").mouseover(function(){
		activeStep($(this).attr("id"));
	});
	
	function activeStep(id){
		var g=d3.selectAll("g.step").data(steps);
		
			g.transition().duration(500)
			.attr("transform",function(d, i){
				if (d.id== id)	{
					return "translate("+d.x+","+d.y+"), scale("+1.2+")";
				}else{
					return "translate("+d.x+","+d.y+"), scale("+0.6+")";
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
	}

});