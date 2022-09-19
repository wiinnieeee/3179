// Define variable called vg_1 that contains location of Vegalite json file
var vg_1 = "daily_cost_bar_chart.vg.json";

//Embeds the visualisation stored in vg_1 in the div container
//If there is another one VegaLite vis, add another div container to the page
//Define a new vg_2 variable to embed second
vegaEmbed("#bar_chart", vg_1).then(function(result) {

// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);