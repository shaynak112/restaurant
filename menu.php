<?php
	require_once 'header.php';
	require_once 'navHeading.php';
?>

<main>


<!-- header images -->

<div id="menuHead">
	<img src="menu/images/pastaGnocchi.jpg" alt="image of gnocchi" class="headPics" id="headPic1">
	<img src="menu/images/pastaManicotti.jpg" alt="image of manicotti with cashew cheese" class="headPics" id="headPic2">
	<img src="menu/images/appLasagnaRollup.jpg" alt="image of lasagna rollups" class="headPics" id="headPic3">
	<img src="menu/images/mainPierogi.jpg" alt="image of pierogis" class="headPics" id="headPic4">
	<img src="menu/images/appMushrooms.jpg" alt="image of mushroom stuffed with pesto" class="headPics" id="headPic5">
</div>


	<div id="changeType">

	<!--buttons!-->	

	<button type="button" onclick="loadApps()">Appetizers</button>

	<button type="button" onclick="loadMainCourse()">Main Course</button>

	<button type="button" onclick="loadPasta()">Pasta</button>

	<button type="button" onclick="loadPizza()">Pizza</button>

	<button type="button" onclick="loadDesserts()">Desserts</button>

	</div>

	<!--Ajax will change values below-->


	<div id="menuItems">

	<br/>

	<p>Click one of the options above to view the menu. Be sure to check out the <a href="specials.php" target="_blank">Specials</a> page for our regular specials.</p>

	</div>

</main>



</body>

<?php
require_once('footer.php');
?>

</html>
