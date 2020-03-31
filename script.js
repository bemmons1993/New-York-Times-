var apiKey = "vUFjq3MoZWkNyu7gGXylgZHRyU6QsQdH";
var mainDiv = $("#main-div");
$("button").on("click", function() {
	var searchTerms = "COVID";
	var num = 1;
	var queryURL =
		"https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
		searchTerms +
		"&api-key=" +
		apiKey;
	$.ajax({ url: queryURL, method: "GET" }).then(function(response) {
		console.log(response);
		var newDiv = $("<div>");
		var abstract = $("<p>").text(response.response.docs[0].abstract);
		var url = $("<p>").text(response.response.docs[0].web_url);
		var leadParagraph = $("<p>").text(response.response.docs[0].lead_paragraph);
		newDiv.append(abstract, url, leadParagraph);
		mainDiv.prepend(newDiv);
	});
});
