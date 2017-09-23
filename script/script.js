
//homepage slideshow
var myIndex = 0;

  function gallerySlideshow()
  {
      var y;
      var x = document.getElementsByClassName("slidesHome");
      for (y = 0; y < x.length; y++)
      {
         x[y].style.display = "none";  
      }

      myIndex++;
      
      if (myIndex > x.length)
        {
          myIndex = 1
        }    

      x[myIndex-1].style.display = "block";  
      setTimeout(gallerySlideshow, 3000);
  }

  gallerySlideshow();



//menu page 

// function to load appetizers
function loadApps()
  {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
      if (this.readyState == 4 && this.status == 200)
      {
        document.getElementById("menuItems").innerHTML = this.responseText;
      }
    };
  xhttp.open("GET", "apps.html", true);
  xhttp.send();
}


// function to load main courses
function loadMainCourse()
  {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
      if (this.readyState == 4 && this.status == 200)
      {
        document.getElementById("menuItems").innerHTML = this.responseText;
      }
    };
  xhttp.open("GET", "mainCourse.html", true);
  xhttp.send();
}

// function to load pasta
function loadPasta()
  {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
      if (this.readyState == 4 && this.status == 200)
      {
        document.getElementById("menuItems").innerHTML = this.responseText;
      }
    };
  xhttp.open("GET", "pasta.html", true);
  xhttp.send();
}

// function to load pizza
function loadPizza()
  {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
      if (this.readyState == 4 && this.status == 200)
      {
        document.getElementById("menuItems").innerHTML = this.responseText;
      }
    };
  xhttp.open("GET", "pizza.html", true);
  xhttp.send();
}

// function to load desserts
function loadDesserts()
  {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
      if (this.readyState == 4 && this.status == 200)
      {
        document.getElementById("menuItems").innerHTML = this.responseText;
      }
    };
  xhttp.open("GET", "desserts.html", true);
  xhttp.send();
}

//locations

//function that shows map
function mapOne()
{
  //get lat and long for each location
  var myLatlng = new google.maps.LatLng(43.655555, -79.402491);
  var myLatlng2 = new google.maps.LatLng(43.665613, -79.472457);
  var myLatlng3 = new google.maps.LatLng(43.719823, -79.563427);
  
  //set up the map on the HTML page
  var mapOptions =
  {
    zoom: 12,
    center: myLatlng2
  }
  var map = new google.maps.Map(document.getElementById("mapNumOne"), mapOptions);

  //set up markers for each of the three locations

  var marker1 = new google.maps.Marker(
  {
      position: myLatlng,
      title:"238 Augusta Ave"
  });

  marker1.setMap(map);

  var marker2 = new google.maps.Marker(
  {
      position: myLatlng2,
      title:"3080 Dundas Street West"
  });

  marker2.setMap(map);

  var marker3 = new google.maps.Marker(
  {
      position: myLatlng3,
      title:"2 Gladsmore Crescent"
  });

  marker3.setMap(map);
}



//Contact Us

  var formHandle = document.forms[0];
  formHandle.onsubmit = processForm;


function processForm()
{
  alert("Thank you for your interest in our restaurant.. !! We will contact you soon.");
  form.reset();
  return false;
}






//Careers

var kitchen_table = "<table> <tr> <th>Position</th> <th>Location</th> </tr> <tr> <td>Cook</td> <td>Augusta</td> </tr> <tr> <td>Cook</td> <td>Dundas</td> </tr> <tr> <td>Cook</td> <td>Gladsmore</td> </tr> <tr> <td>Scullery</td> <td>Augusta</td> </tr> <tr> <td>Scullery</td><td>Dundas</td> </tr> </table>";

var front_table = "<table> <tr> <th>Position</th> <th>Location</th> </tr><tr> <td>Server</td> <td>Augusta</td> </tr> <tr> <td>Server</td> <td>Dundas</td> </tr> <tr> <td>Server</td> <td>Gladsmore</td> </tr> <tr> <td>Bartender</td> <td>Augusta</td> </tr> <tr> <td>Bartender</td> <td>Dundas</td> </tr> </table>";

var public_table = "<table> <tr> <th>Position</th> <th>Location</th> </tr><tr> <td>Community Relations Coordinator</td> <td>Augusta</td> </tr> <tr> <td>Community Relations Coordinator</td> <td>Dundas</td> </tr> <tr> <td>Community Relations Coordinator</td> <td>Gladsmore</td> </tr></table>";

var management_table = "<table> <tr> <th>Position</th> <th>Location</th> </tr><tr> <td>General Manager</td> <td>Augusta</td> </tr> <tr> <td>Kitchen Manager</td> <td>Dundas</td> </tr> <tr> <td>Assistant General Manager</td> <td>Gladsmore</td> </tr> <tr> <td>Kitchen Manager</td> <td>Augusta</td> </tr> <tr> <td>Assistant General Manager</td> <td>Dundas</td> </tr> </table";

window.onload = function(){
    var table_output = document.getElementById("tableCareers");
    var position = document.getElementById("position");
  
  if (location.search === "?kitchen"){
    table_output.innerHTML = kitchen_table;
    
  }
  else if (location.search === "?front") {    
    table_output.innerHTML = front_table;
    
  }
  else if (location.search === "?public") {   
    table_output.innerHTML = public_table;
    
  }
  else  if (location.search === "?management"){ 
    table_output.innerHTML = management_table;
  }
    else {
        table_output.style.display = "none";
    }

}
