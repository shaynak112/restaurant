<?php
	require_once 'header.php';
	require_once 'navHeading.php';
?>

<main>

	<h1>Locations</h1>

	<p id="locationInfo">Little Anthony's Vegetarian Italian Restaurant has three locations throughout the city.</p>

	<ul>
		<li>238 Augusta Ave</li>
		<li>3080 Dundas Street West</li>
		<li>2 Gladsmore Crescent</li>
	</ul>

	<h2>Contact Information</h2>
 
 	<div>Phone: +1 (416) 258-2223</div>
 	<div>Email: <a href="mailto:info@anthonysrestaurant.ca">info@anthonysrestaurant.ca</a></div>

 	<h2>Hours of Operation</h2>

 	<table class="table-hours" cellpadding="7">
	  
	  <tr class="locationsTR">
	    <td class="locationsTD">Monday</td>
	    <td class="locationsTD">11:00 AM</td>
	    <td class="locationsTD">9:30 PM</td>
	  </tr>
	  <tr class="locationsTR">
	    <td class="locationsTD">Tuesday</td>
	     <td class="locationsTD">11:00 AM</td>
	    <td class="locationsTD">9:30 PM</td>
	  </tr>
	  <tr class="locationsTR">
	    <td class="locationsTD">Wednesday</td>
	     <td class="locationsTD">11:00 AM</td>
	    <td class="locationsTD">9:30 PM</td>
	  </tr>
	  <tr class="locationsTR">
	    <td class="locationsTD">Thursday</td>
	     <td class="locationsTD">11:00 AM</td>
	    <td class="locationsTD">9:30 PM</td>
	  </tr>
	  <tr class="locationsTR">
	    <td class="locationsTD">Friday</td>
	    <td class="locationsTD">11:00 AM</td>
	    <td class="locationsTD">9:30 PM</td>
	  </tr>
	  <tr class="locationsTR">
	    <td class="locationsTD">Saturday</td>
	    <td class="locationsTD">12:00 AM</td>
	    <td class="locationsTD">8:30 PM</td>
	  </tr>
	   <tr class="locationsTR">
	    <td class="locationsTD">Sunday</td>
	     <td class="locationsTD">12:00 AM</td>
	    <td class="locationsTD">8:30 PM</td>
	  </tr>
	  
	</table>

	<div id="mapNumOne" style="width:70%;height:600px"></div>
	<!--necessary for google API-->
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBz2EuIG498Y9d1FyG6R28kR-owWyufHco
&callback=mapOne"></script>

</main>



</body>

<?php
require_once('footer.php');
?>

</html>
