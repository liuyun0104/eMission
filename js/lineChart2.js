(function() {
  $(function() {
    var data, h, max, pb, pl, pr, pt, ticks, version, vis, w, x, y, _ref;
    version = Number(document.location.hash.replace('#', ''));
    data = [3, 7, 9, 1, 4, 6, 8, 2, 5];
    _ref = [20, 20, 20, 20], pt = _ref[0], pl = _ref[1], pr = _ref[2], pb = _ref[3];
    w = 600 - (pl + pr);
    h = 200 - (pt + pb);
    max = d3.max(data);
    x = d3.scale.linear().domain([0, data.length - 1]).range([0, w]);
    y = d3.scale.linear().domain([0, max]).range([h, 0]);
    vis = d3.select('#month-compare').style('margin', '20px auto').style('width', "" + w + "px").append('svg:svg').attr('width', w + (pl + pr)).attr('height', h + pt + pb).attr('class', 'viz').append('svg:g').attr('transform', "translate(" + pl + "," + pt + ")");
    vis.selectAll('path.line').data([data]).enter().append("svg:path").attr("d", d3.svg.line().x(function(d, i) {
      return x(i);
    }).y(y));
    if (version < 2 && version !== 0) {
      return;
    }
    ticks = vis.selectAll('.ticky').data(y.ticks(7)).enter().append('svg:g').attr('transform', function(d) {
      return "translate(0, " + (y(d)) + ")";
    }).attr('class', 'ticky');
    ticks.append('svg:line').attr('y1', 0).attr('y2', 0).attr('x1', 0).attr('x2', w);
    ticks.append('svg:text').text(function(d) {
      return d;
    }).attr('text-anchor', 'end').attr('dy', 2).attr('dx', -4);
    ticks = vis.selectAll('.tickx').data(x.ticks(data.length)).enter().append('svg:g').attr('transform', function(d, i) {
      return "translate(" + (x(i)) + ", 0)";
    }).attr('class', 'tickx');
    ticks.append('svg:line').attr('y1', h).attr('y2', 0).attr('x1', 0).attr('x2', 0);
    ticks.append('svg:text').text(function(d, i) {
      return i;
    }).attr('y', h).attr('dy', 15).attr('dx', -2);
    if (version < 3 && version !== 0) {
      return;
    }
    return vis.selectAll('.point').data(data).enter().append("svg:circle").attr("class", function(d, i) {
      if (d === max) {
        return 'point max';
      } else {
        return 'point';
      }
    }).attr("r", function(d, i) {
      if (d === max) {
        return 6;
      } else {
        return 4;
      }
    }).attr("cx", function(d, i) {
      return x(i);
    }).attr("cy", function(d) {
      return y(d);
    }).on('mouseover', function() {
      return d3.select(this).attr('r', 8);
    }).on('mouseout', function() {
      return d3.select(this).attr('r', 4);
    }).on('click', function(d, i) {
      return console.log(d, i);
    });
  });
}).call(this);