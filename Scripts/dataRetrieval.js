// This function retrieves compounds.json data and populates chart and tables
window.onload = function() {
    // defines groups by number of rings for the compound data to be assigned to
    var rings1 = [], rings2 = [], rings3 = [], rings4 = [], rings5 = [];
    // Extracts data from compounds.json file. Change link to compounds.json when hosted on github
    $.getJSON('/Data/compounds.json', function(compData) {
        for (var i = 0; i < compData.length; i++) {
            // if compound has 1 ring, assign to rings1
            if (compData[i].num_rings == 1) {
                rings1.push({
                    x: compData[i].molecular_weight,
                    y: compData[i].ALogP,
                    compound: compData[i].molecular_formula,
                    num_rings: compData[i].num_rings,
                    comp_id: compData[i].compound_id,
                    smiles: compData[i].smiles,
                    imagePath: compData[i].image
                })
            }
            // if compound has 2 rings, assign to rings2 
            else if (compData[i].num_rings == 2) {
                rings2.push({
                    x: compData[i].molecular_weight,
                    y: compData[i].ALogP,
                    compound: compData[i].molecular_formula,
                    num_rings: compData[i].num_rings,
                    comp_id: compData[i].compound_id,
                    smiles: compData[i].smiles,
                    imagePath: compData[i].image
                })
            } 
            // if compound has 3 rings, assign to rings3
            else if (compData[i].num_rings == 3) {
                rings3.push({
                    x: compData[i].molecular_weight,
                    y: compData[i].ALogP,
                    compound: compData[i].molecular_formula,
                    num_rings: compData[i].num_rings,
                    comp_id: compData[i].compound_id,
                    smiles: compData[i].smiles,
                    imagePath: compData[i].image
                })
            } 
            // if compound has 4 rings, assign to rings4
            else if (compData[i].num_rings == 4) {
                rings4.push({
                    x: compData[i].molecular_weight,
                    y: compData[i].ALogP,
                    compound: compData[i].molecular_formula,
                    num_rings: compData[i].num_rings,
                    comp_id: compData[i].compound_id,
                    smiles: compData[i].smiles,
                    imagePath: compData[i].image
                })
            } 
            // if compound has 5 rings, assign to rings5
            else if (compData[i].num_rings == 5) {
                rings5.push({
                    x: compData[i].molecular_weight,
                    y: compData[i].ALogP,
                    compound: compData[i].molecular_formula,
                    num_rings: compData[i].num_rings,
                    comp_id: compData[i].compound_id,
                    smiles: compData[i].smiles,
                    imagePath: compData[i].image
                })
            }                        
        }
        // Reveals page information once page has loaded 
        $("#pageDiv").addClass("pageBackground");
        $("#compoundTb").removeClass("invisible");
        $("#initiallyVisible").removeClass("invisible");
        $("#headDiv").removeClass("unclicked");
        $("#pageDescription").removeClass("unclicked");
        // Calls chart and table functions with the compound dataset
        var compoundChart = generateChar([rings1, rings2, rings3, rings4, rings5]);
        var compoundTable = generateTable(compData);
        // Removes loading animation on page load
        $('#loading').hide();
        // Returns chart and table
        return compoundChart && compoundTable;
    }); 
}
