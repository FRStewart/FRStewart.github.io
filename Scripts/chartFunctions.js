// This function reveals further information about the compound once it has been selected from chart
function clickedPointDisplay(compData) {
    //calls molucularFormulaFormat function from middleware.js to apply formatting to the molucular formula.
    var formula = molecularFormulaFormat(compData.compound);
    //assigns compound information to appropriate label after being clicked on the chart.
    document.getElementById('moleName').innerHTML = formula;
    document.getElementById('compID').innerHTML = compData.comp_id;
    document.getElementById('moleWeight').innerHTML = compData.x;
    document.getElementById('alogp').innerHTML = compData.y;
    document.getElementById('numRing').innerHTML = compData.num_rings;
    document.getElementById('moreInfBut').setAttribute("molForm", compData.compound);
    //assigns selected compound image
    $('#compImage').attr("src", "Data/" + compData.imagePath)
    //hides label telling the user to select a compound from the chart. 
    $('#initiallyVisible').addClass("unclicked");
    //reveals compound information labels once user has selected a compound.
    $('#viewOnClick').removeClass("unclicked");
    //resets master detail table if user has clicked 'more information' button
    var resetTab = $("#compoundTb").DataTable();
    resetTab.search('').draw()
}

// This function identifies where the clicked compound is located in the dataset and passes the information to clickedPointDisplay.
$("#canvas").click(function(evt) {
    //identifies selected point metadata
    const activePoint = myScatter.getElementAtEvent(evt);
    const datasetIndex = activePoint[0]._datasetIndex;
    const itemIndex = activePoint[0]._index;
    //uses point metadata to locate compound in dataset
    var pointData = activePoint[0]._chart.data.datasets[datasetIndex].data[itemIndex];
    //info passed to clickedPointDisplay for formatting.
    clickedPointDisplay(pointData);
});

// declare myScatter chart globally so it can be called by onClick function
var myScatter; 
// function that generates chart from the compound data from compounds.json
function generateChar(compoDat) {
    var color = Chart.helpers.color;
    var ctx = document.getElementById('canvas');
    myScatter = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label:"1 Ring",
                    borderColor: 'rgb(75, 192, 192)',
                    backgroundColor: color('rgb(75, 192, 192)').alpha(0.2).rgbString(),
                    data: compoDat[0],
                    pointRadius: 5,
                    pointHoverRadius: 15
                },
                {
                    label:"2 Rings",
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: color('rgb(255, 99, 132)').alpha(0.2).rgbString(),
                    data: compoDat[1],
                    pointRadius: 5,
                    pointHoverRadius: 15
                },
                {
                    label:"3 Rings",
                    borderColor: 'rgb(54, 162, 235)',
                    backgroundColor: color('rgb(54, 162, 235)').alpha(0.2).rgbString(),
                    data: compoDat[2],
                    pointRadius: 5,
                    pointHoverRadius: 15
                },
                {
                    label:"4 Rings",
                    borderColor: 'rgb(255, 205, 86)',
                    backgroundColor: color('rgb(255, 205, 86)').alpha(0.2).rgbString(),
                    data: compoDat[3],
                    pointRadius: 5,
                    pointHoverRadius: 15
                },
                {
                    label:"5 Rings",
                    borderColor: 'rgb(33, 51, 61)',
                    backgroundColor: color('rgb(33, 51, 61)').alpha(0.2).rgbString(),
                    data: compoDat[4],
                    pointRadius: 5,
                    pointHoverRadius: 15
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Selected ChEMBL Compounds',
                fontSize: 20,
                fontFamily: "Raleway",
                fontColor: "black",
            },
            hover: {
                onHover: function(e, el) {
                    $("#canvas").css("cursor", el[0] ? "pointer" : "default");
                }
            },
            scales: {
                yAxes: [
                    {
                        id: "ALogP",
                        type: "linear",
                        display: true,
                        position: "left",
                        scaleLabel: {
                            display: true,
                            labelString: "ALogP",
                            fontStyle: "bold",
                            fontSize: 20,
                            fontFamily: "Raleway",
                            fontColor: "black",
                            padding: 10
                        },
                        ticks: {
                            fontSize: 15,
                            fontFamily: "Raleway",
                            fontColor: "black"
                        },
                        gridLines: {
                            zeroLineColor: 'unset',
                            borderDash: [2, 2]
                        }
                    }
                ],
                xAxes: [
                    {
                        id: "Molecular Weight",
                        type: "linear",
                        scaleLabel: {
                            display: true,
                            labelString: "Molecular Weight",
                            fontStyle: "bold",
                            fontSize: 18,
                            fontFamily: "Raleway",
                            fontColor: "black",
                            padding: 10
                        },
                        ticks: {
                            fontSize: 15,
                            fontFamily: "Raleway",
                            fontColor: "black"
                        },
                        gridLines: {
                            zeroLineColor: 'unset',
                            borderDash: [2, 2]
                        }
                    }
                ]
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItems, data) {
                        //Return value for label
                        return ['Molecular Weight: ' + tooltipItems.xLabel, 'ALogP: ' + tooltipItems.yLabel, 'Number of Rings: ' + (tooltipItems.datasetIndex + 1)];
                    }
                },
                backgroundColor: '#FFF',
                enableHTML: true,
                borderColor: '#E85A24',
                borderWidth: 3,
                titleFontSize: 16,
                titleFontColor: '#0066ff',
                bodyFontColor: '#000',
                bodyFontSize: 14,
                bodyFontFamily: 'Raleway',
                displayColors: false
            },
            legend: {
                display: true,
                position: "right",
                labels: {
                    // fontColor: "#333",
                    fontSize: 16,
                    fontFamily: "Raleway",
                    fontColor: "black",
                    usePointStyle: true,
                    boxWidth: 10,
                    padding: 20
                },
                onHover: function(e) {
                    e.target.style.cursor = 'pointer';
                }
            }
        }
    });
};