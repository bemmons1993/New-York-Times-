var apiKey = "vUFjq3MoZWkNyu7gGXylgZHRyU6QsQdH";
var mainDiv = $(".results");
$("button").on("click", function(event) {
	event.preventDefault();
	var searchTerms = document.getElementById("search-term").value;
	console.log(searchTerms);
	var num = 1;
	var queryURL =
		"https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
		searchTerms +
		"&api-key=" +
		apiKey;
	$.ajax({ url: queryURL, method: "GET" }).then(function(response) {
		console.log(response);
		response.response.docs.forEach(element => {
			var newDiv = $("<div>").html("<br><br>");
			var headline = $("<p>").text("Headline: " + element.headline.main);
			var url = $("<p>").html(
				`<p>URL: <a href="${element.web_url}"  target="_blank">${element.web_url}</a></p>`
			);
			var leadParagraph = $("<p>").text(
				"Lead Paragraph: " + element.lead_paragraph
			);
			newDiv.append(headline, url, leadParagraph);
			mainDiv.prepend(newDiv);
		});
	});
});
