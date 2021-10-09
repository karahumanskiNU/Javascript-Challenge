// from data.js
var tableData = data;


//[{
 //   datetime: "1/1/2010",
   //city: "benton",
    //state: "ar",
    //country: "us",
    //shape: "circle",
    //durationMinutes: "5 mins.",
    //comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  //},
// YOUR CODE HERE!
var tbody = d3.select("tbody");


tableData.forEach(function(alienReport){
    console.log(alienReport);
    var row =tbody.append("tr");
    var values = Object.values(alienReport);
    values.forEach(
        function(value){
            
            console.log(value);
            var cell = row.append("td").text(value);
        }  
    );

})

var textInput = d3.select("text");
var button = d3.select('#filter-btn');
  button.on("click", function(){
    tbody.html("")

    var inputDate = d3.select("#datetime");
    var inputValue =inputDate.property("value");
    console.log(inputValue);
  
    var filteredReport = tableData.filter(report => report.datetime === inputValue);
  
    filteredReport.forEach(function(filtered){
        console.log(filtered);
        var row =tbody.append("tr");
        var values = Object.values(filtered);
        values.forEach(
            function(value){
                
                console.log(value);
                var cell = row.append("td").text(value);
            }  

    );
});
});
