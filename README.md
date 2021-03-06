# Exscientia ChEMBL Compounds 

This is a simple web app that represents a selection of compounds and assay results from the [***ChEMBL*** database](https://www.ebi.ac.uk/chembl/).


## Accessing the Web App

The web app is hosted on github pages. No deployment or log in necessary. 

Access at [***Exscientia Compounds***](https://frstewart.github.io).


## Using the Web App

The application is optimised for **Full HD displays (1080p)** at **standard zoom**. Responsive features will be added later.

The web app has the following functionality:
- **Navigation Bar:**
  - ***Exscientia*** button (far left) directs you to the Exscientia.ai web page.
  - ***Source*** button directs you to the project repository hosted on github.
  - ***App Info.*** button directs you to the README.md file.
  - ***Fullscreen button*** toggles the app between fullscreen and normalscreen.
- **Charts:**
  - The chart displays the compounds with _Molecular Weight_ plotted against _Partition Coefficient_ (_ALogP_).
  - Compounds are colour coded depending on their Number of Rings.
  - Data is grouped via number of rings and this can be toggled by clicking the data group in the chart legend.
  - Clicking a point on the chart will reveal more information. 
    -   This will also reveal a _More Information_ button. Clicking this will open the selected compound(s) in the data table.
- **Tables:**
  - The tables are formatted in a master-detail setup.
  - 20 compounds are displayed as default, this can be changed by the user via the dropdown. Other options are 50 or 100 compounds.
  - The user can search for different compounds using the search box.
  - All columns are sortable using the toggles in the column header.
  - The table can be expanded to display detailed information relating to Assay Results and SMILES
    - Toggling it again will close it.
  - Information relating to page number and compounds selected can be found at the footer of the table.


## Data Structure

***Compound data*** that is represented in the web app can be found in _Data/compounds.json_.
The ***data schema*** is also found in _Data/schema.json_.


## Tools and Packages Used

**Tools used:**
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

**Packages used:**
- [Chart.js](https://www.chartjs.org/)
- [DataTables](https://datatables.net/)
- [jQuery 3.4.1](https://jquery.com/)

All tools and packages are open source and no costs were incurred during development.

