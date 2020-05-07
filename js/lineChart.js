// JavaScript Document

var data1 = [3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5],
data2 = [ 0,  0,  0, 8, 7, 5, 8, 6, 7, 5, 5, 3],
data3 = [ 9, 8, 4, 3, 8, 7, 6, 5, 4, 5, 5, 2],
data4 = [ 7, 6, 7, 5, 6, 4, 7, 5, 6, 4, 6, 5],
xLabel = ["","Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "sept", "Oct", "Nov", "Dec"],
w = 600,
h = 250,
margin = 20,
y = d3.scale.linear().domain([0, d3.max(data1)]).range([0 + margin, h - margin]),
x = d3.scale.linear().domain([0, data1.length]).range([0 + margin, w - margin]);

var vis = d3.select("#month-compare")
	.append("svg:svg")
	.attr("width", w)
	.attr("height", h);
	
var g = vis.append("svg:g")
	.attr("transform", "translate(0, 250)");

var line = d3.svg.line()
	.x(function(d,i) { return x(i); })
	.y(function(d) { return -1 * y(d); });

g.append("svg:path").attr("d", line(data1)).attr("class","point1");
g.append("svg:path").attr("d", line(data2)).attr("class","point2");
g.append("svg:path").attr("d", line(data3)).attr("class","point3");
g.append("svg:path").attr("d", line(data4)).attr("class","point4");

g.append("svg:line")
	.attr("x1", x(0))
	.attr("y1", -1 * y(0))
	.attr("x2", x(w))
	.attr("y2", -1 * y(0));

g.append("svg:line")
	.attr("x1", x(0))
	.attr("y1", -1 * y(0))
	.attr("x2", x(0))
	.attr("y2", -1 * y(d3.max(data1)));

g.selectAll(".xLabel")
	.data(x.ticks(10))
	.enter().append("svg:text")
	.attr("class", "xLabel")
	//.text(String)
	.text(function(i){return xLabel[i];})
	.attr("x", function(d) { return x(d) })
	.attr("y", 0)
	.attr("text-anchor", "middle");

g.selectAll(".yLabel")
	.data(y.ticks(6))
	.enter().append("svg:text")
	.attr("class", "yLabel")
	.text(String)
	.attr("x", 0)
	.attr("y", function(d) { return -1 * y(d) })
	.attr("text-anchor", "right")
	.attr("dy", 4);

g.selectAll(".xTicks")
	.data(x.ticks(10))
	.enter().append("svg:line")
	.attr("class", "xTicks")
	.attr("x1", function(d) { return x(d); })
	.attr("y1", -1 * y(d3.max(data1)))
	.attr("x2", function(d) { return x(d); })
	.attr("y2", -1 * y(-0.3));

g.selectAll(".yTicks")
	.data(y.ticks(4))
	.enter().append("svg:line")
	.attr("class", "yTicks")
	//.attr("y1", function(d) { return -1 * y(d); })
	.attr("y1", function(d) { return -1 * y(d); })
	.attr("x1", x(-0.3))
	.attr("y2", function(d) { return -1 * y(d); })
	.attr("x2", x(0));
	
g.selectAll('.point1')
	.data(data1).enter().append("svg:circle").attr("class","point1")
	.attr("r",5)
	.attr("cx", function(d, i) {  return x(i);})
	.attr("cy", function(d) {return -1*y(d);});
	
g.selectAll('.point2')
	.data(data2).enter().append("svg:circle").attr("class","point2")
	.attr("r",5)
	.attr("cx", function(d, i) {  return x(i);})
	.attr("cy", function(d) {return -1*y(d);});
	
g.selectAll('.point3')
	.data(data3).enter().append("svg:circle").attr("class","point3")
	.attr("r",5)
	.attr("cx", function(d, i) {  return x(i);})
	.attr("cy", function(d) {return -1*y(d);});
	
g.selectAll('.point4')
	.data(data4).enter().append("svg:circle").attr("class","point4")
	.attr("r",5)
	.attr("cx", function(d, i) {  return x(i);})
	.attr("cy", function(d) {return -1*y(d);});
	/*.on('mouseover', function() {
      return d3.select(this).attr('r', 8);
    }).on('mouseout', function() {
      return d3.select(this).attr('r', 4);
    }).on('click', function(d, i) {
      return console.log(d, i);
    });*/
	
$("#month-compare-friends #compare input").click(function(){
	
	var sclass= "."+$(this).attr("id");
	//alert (sclass);
	//alert($(this).prop('checked'));
	if($(this).prop('checked')){
		d3.selectAll(sclass).style("opacity", 1);
	}else{
		d3.selectAll(sclass).style("opacity", 0);
	}
	});