var apiKey = "b0463859-e365-4f67-a0c8-3d02e6d75a00";

$("button").on("click", function() {
	var searchTerms = "";
	var num = 1;
	var queryURL =
		"https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
		searchTerms +
		"&api-key=" +
		apiKey;

	$.ajax({ url: queryURL, method: "GET" }).then(function(response) {});
});
