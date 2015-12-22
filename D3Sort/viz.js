// data is an array of objects
var data = [
    {movie: "movie1", cost: 100, genre: "shooting"},
    {movie: "movie2", cost: 200, genre: "comedy"},
    {movie: "movie3", cost: 300, genre: "drama"},
    {movie: "movie4", cost: 200, genre: "drama"},
    {movie: "movie5", cost: 500, genre: "comedy"},
    {movie: "movie6", cost: 200, genre: "shooting"},
    {movie: "movie7", cost: 100, genre: "comedy"},
    {movie: "movie8", cost: 50, genre: "drama"},
    {movie: "movie9", cost: 10, genre: "comedy"},
    {movie: "movie10", cost: 300, genre: "shooting"},
    {movie: "movie11", cost: 600, genre: "drama"}
];
// Set up the render function called anytime when the visualisation is being updated
function render (data, genre) {
    d3.select("#chart").selectAll("div.h-bar")
        .data(data)
        .enter()
        .append("div")
        .attr("class", "h-bar")
        .append("span");
    d3.select("#chart").selectAll("div.h-bar")
        .data(data)
        .exit()
        .remove();
    d3.select("#chart").selectAll("div.h-bar")
        .data(data)
        .attr("class", "h-bar")
        .style("width", function (d) {
            return (d.cost) + "px" })
        .select("span")
        .text(function (d) {
            return d.genre;} );

    if (comparator) {
        d3.select("#chart").selectAll("div.h-bar")
            .sort(comparator)
    }

    var compareByCost = function (a, b) {  // <-F
        return a.cost < b.cost?-1:1;
    };
    var compareByCategory = function (a, b) {  // <-G
        return a.category < b.category?-1:1;
    };


    render(data);

    function sort(comparator) {
        render(data, comparator)
    }


}

