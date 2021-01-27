// coindesk btc api 
const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-10-30&end=2021-01-27';
const chartButton = document.querySelector('#line-btn')

chartButton.addEventListener("click", (event) => {
    fetch(api)
        .then(function (response) { return response.json(); })
        .then(function (data) {
            var parsedData = parseData(data);
            drawChart(parsedData);
        })
        .catch(function (err) { console.log(err); })
});

/**
 * @param {object} data Object containing historical data of BPI
 */
const parseData = (data) => {
    var arr = [];
    for (var i in data.bpi) {
        arr.push({
            date: new Date(i), //date
            value: +data.bpi[i] //convert string to number
        });
    }
    return arr;
}

/**
 * Creates a chart using D3
 * @param {object} data Object containing historical data of BPI
 */
const drawChart = (data) => {
    const svgWidth = 600, svgHeight = 400;
    const margin = { top: 00, right: 20, bottom: 30, left: 50 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    const svg = d3.select('#line-graph')
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    const g = svg.append("svg:g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleTime()
        .rangeRound([0, width]);

    const y = d3.scaleLinear()
        .rangeRound([height, 0]);

    const line = d3.line()
        .x(function (d) { return x(d.date) })
        .y(function (d) { return y(d.value) })
    x.domain(d3.extent(data, function (d) { return d.date }));
    y.domain(d3.extent(data, function (d) { return d.value }));

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .select(".domain")
        .remove();

    g.append("g")
        .call(d3.axisLeft(y))
        .append("text")
        .attr("fill", "#000")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "1.2em")
        .attr("text-anchor", "end")
        .text("Price (USD)");

    g.append("path")
        .datum(data)
        .attr("fill", "#fff")
        .attr("stroke", "red")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", 3)
        .attr("d", line);
}

