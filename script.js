var apiKey = "vUFjq3MoZWkNyu7gGXylgZHRyU6QsQdH";
var mainDiv = $(".results");
$("button").on("click", function(event) {
	event.preventDefault();
	var searchTerms = document.getElementById("search-term").value;
	var num = document.getElementById("num-records-select").value;
	var startYear = document.getElementById("start-year");
	var endYear = document.getElementById("end-year");
	var start, end;
	if (startYear.value.match(/^\d{4}$/g)) {
		start = startYear.value + "0101";
	} else {
		start = "12000101";
		startYear.value = startYear.value ? "INVALID" : "";
	}
	if (endYear.value.match(/^\d{4}$/g)) {
		end = endYear.value + "0101";
	} else {
		end = "99991231";
		endYear.value = endYear.value ? "INVALID" : "";
	}
	var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerms}&begin_date=${start}&end_date=${end}?&api-key=${apiKey}`;
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
