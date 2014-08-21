<html>
	<head>
		<title>Sports Database</title>
		<script src="js/jquery-1.3.2.min.js"></script>
		<script src="js/jquery-ui-1.8.17.custom.min.js"></script>
		<script src="js/controller.js"></script>

	<LINK href="css/search.css" rel="stylesheet" type="text/css">
	</head>
	<body>
		<h1>Sports Database</h1>
<p>Type in baseball, basketball, football or hockey to view the results of the major sports.</p>
<p>You may also type in an individual player such as 'Michael Jordan' or 'Joe Montana'.</p>
		<div id="form">
		<form>
			<input type="text" id="searchbox" name="searchbox" />
			</form>
			<div id="buttonContainer">
				<a class="button" id="submitbutton" href="#"><span id="buttontext">Search</span></a>
			</div>
		</div>
		<div id="resultsContainer"></div>



	</body>
</html>
