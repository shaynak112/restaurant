<?php
	require_once 'header.php';
	require_once 'navHeading.php';
?>


<div>

		<div class="feedback">
		
		
		<h1 id="contactHead">Contact Us</h1>
		<form name="f1" action="contact.php" method="POST">
		Name :<br/>
		<input type="text" id="t1"><br/>                                       
    	E-mail :<br>
		<input type="text" id="t2"><br/>
		Phone :<br>
		<input type="text" id="t3"><br/>
		Message :<br>
		<textarea id="t4"></textarea><br/>
		<input type="Submit" id="b1" value="Submit" action="onsubmit""><br>
		</form>
		<script type = "text/javascript" src="script/script.js"></script>
		</div>
</div>

	<?php
require_once('footer.php');
?>


</body>
</html>