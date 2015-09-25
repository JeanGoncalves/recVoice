<!DOCTYPE html>
<html>
<head>
    <title>RecVoice 1.0</title>
    <meta charset="utf-8">
    <script type="text/javascript" src="jquery/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="recvoice-1.0.js"></script>
</head>
<body>

    <h2>Gravando o que estou dizendo</h2>

    <textarea class="text" style="width: 550px; height: 100px; font-size: 20px;" placeholder="Aguarde"></textarea>

	<script>
		$(document).ready(function() {
		    $('.text').recVoice();
		});
	</script>

</body>
</html>