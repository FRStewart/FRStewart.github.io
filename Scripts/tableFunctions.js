// When the 'more information' button is clicked, this function displays it in the master detail table and opens the detail tab
function onTable() {
    var searchDiv = document.getElementById("moreInfBut").getAttribute('molForm');
    var tableSearch = $("#compoundTb").DataTable();
    tableSearch.search(searchDiv).draw()
    $(".details-control").click();
}

// Populates and formats detail information when opened.
function format(d) {
    var toReturn = 
    '<table id="noHoverBack" style="margin-left:auto;margin-right:auto;margin-bottom:50px;"">'+
        '<tr>'+
            '<td style="vertical-align:center;">'+
                '<table class="masterDetailTable" cellpadding="5" cellspacing="0" border="0">'+
                    // Sets column headers
                    '<tr>'+
                        '<th rowspan='+(d.assay_results.length+1)+'>Assay Results</th>'+
                        '<th>Index</th>'+
                        '<th>Result ID</th>'+
                        '<th>Target</th>'+
                        '<th>Result</th>'+
                    '</tr>';
    // loops through each assay result and renders a new row in detail table.
    d.assay_results.forEach(function(result, index) {
        toReturn += 
                    '<tr>'+
                        '<td>'+(index+1)+'</td>'+
                        '<td>'+result.result_id+'</td>'+
                        '<td>'+result.target+'</td>'+
                        '<td>'+(result.result + " " + result.operator + " " + result.value + result.unit)+'</td>' +
                    '</tr>'
    });
    // returns SMILES information in seperate table beneath assay results.
    toReturn += 
                    '<tr>'+
                        '<th style="padding-top: 40px !important;">SMILES</th>'+
                        '<td colspan=4 style="padding-top: 40px !important; text-align: left; !important">'+d.smiles+'</td>'+
                    '</tr>'+
                '</table>'+
            '</td>'+
            // Renders image next to assay result and SMILES.
            '<td style="vertical-align:center;">'+
                '<img src="Data/'+d.image+'"></img>'+
            '</td>'+
        '</tr>'+
    '</table>';
    return toReturn;
}

// Locates unrendered html table and applies DataTables.js formatting
function generateTable(compoundDats) {
    var table = $('#compoundTb').DataTable( {
        // Assigns compound dataset to table
        "data": compoundDats,
        "columns": [
            // sets column headers and data to be polulated
            { "data": "compound_id", "className": "dt-specialColor" },
            { "data": "molecular_formula", "className": "dt-specialColor", "render": function ( data, type, row, meta ) { return data.replace(/(\d+)/g, '<sub>$1</sub>')} },
            { "data": "num_rings", "className": "dt-specialColor" },
            { "data": "ALogP", "className": "dt-specialColor" },
            { "data": "molecular_weight", "className": "dt-specialColor" },
            { "data": "assay_results.length", "className": "dt-specialColor" },
            // this assigns the detail button column and sets initial icon
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": '<i class="fas fa-plus-circle colorRed" aria-hidden="true"></i>'
            },
        ],
        // lets user set number of compounds to display on one page
        "lengthMenu": [ 20, 50, 100 ],
        "order": [[1, 'asc']],
    });
    // Add event listener for opening and closing details
    $('#compoundTb tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
        var chosen = $(this).parent()
        // Decides whether to open or close that row
        if ( row.child.isShown() ) {
            // This row is already open - close it
            chosen[0].cells[6].innerHTML = '<i class="fas fa-plus-circle colorRed" aria-hidden="true"></i>';
            chosen[0].style.background = '';
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            chosen[0].cells[6].innerHTML = '<i class="fas fa-minus-circle" aria-hidden="true"></i>';
            chosen[0].style.background = 'rgba(232,90,36, 0.5)';
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    });
};
