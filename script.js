// dashboard//
      function dropdown() {
        document.querySelector("#submenu").classList.toggle("hidden");
        document.querySelector("#arrow").classList.toggle("rotate-0");
      }
      dropdown();
//dashbord//
//drop apps
function dropapps() {
    document.querySelector("#apps-menu").classList.toggle("hidden");
    document.querySelector("#arrow-apps").classList.toggle("rotate-0");
     }
       dropapps();

//drop apps
   //drop-user
   function dropUser() {
    document.querySelector("#user-menu").classList.toggle("hidden");
    document.querySelector("#arrow-user").classList.toggle("rotate-0");
     }
       dropUser();
       //drop-user
       //drop table
   function dropTable() {
    document.querySelector("#table-menu").classList.toggle("hidden");
    document.querySelector("#arrow-table").classList.toggle("rotate-0");
     }
       dropTable();
//drop table
//drop page
   function dropPage() {
    document.querySelector("#page-menu").classList.toggle("hidden");
    document.querySelector("#arrow-page").classList.toggle("rotate-0");
  }
  dropPage();
  //drop page
//chart line
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Income', 'Expenses'],
      ['Jan',  1000,      400],
      ['Feb',  1170,      460],
      ['Mar',  660,       1120],
      ['Apr',  1030,      540],
      ['May',  300,       540],
      ['Jun',  1030,      540],
      ['Jul',  500,       700],
      ['Aug',  1030,      540],
      ['Sep',  1030,      300],
      ['Oct',  1300,      900],
      ['Nov',  1030,      600],
      ['Dec',  1030,      540]
    ]);
  
    var options = {
      curveType: 'function',
      legend: { position: 'top' }
    };
  
    var chart = new google.visualization.LineChart(document.getElementById('profit'));
  
    chart.draw(data, options);
  }
  //line chart

  // sale
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(saleChart);
  
  function saleChart() {
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Income', 'Expenses'],
      ['Jan',  1000,      400],
      ['Feb',  1170,      460],
      ['Mar',  660,       1120],
      ['Apr',  1030,      540],
      ['May',  300,       540],
      ['Jun',  1030,      540],
      ['Jul',  500,       700],
      ['Aug',  1030,      540],
      ['Sep',  1030,      300],
      ['Oct',  1300,      900],
      ['Nov',  1030,      600],
      ['Dec',  1030,      540]
    ]);
  
    var options = {
      curveType: 'function',
      legend: { position: 'top' }
    };
  
    var chart = new google.visualization.LineChart(document.getElementById('sale-chart'));
  
    chart.draw(data, options);
  }
  //sale

  
  //pie charts


  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(pieChart);
  
  function pieChart() {
  
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Apparel',     6],
      ['Sports',      6],
      ['Others',  6],
      
    ]);
  
    var options = {
      title: '',
      legend:{position:'bottom'}
    };
  
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  
    chart.draw(data, options);
  }
   //pie charts
   