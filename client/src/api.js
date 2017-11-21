var axios = require('axios');

const apiKey = "083040deb76744ca8c92a2ec79536c0d";

const query = (topic, startYear, endYear) => {

		let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";

		return axios.get(queryURL)
			.then(function(result){

				let newResults = result.response.docs;
			

				newResults.forEach(function(result) {
   			    console.log(result);

				
		})

	}


	// This function posts saved articles to our database.
// 	postArticle: function(title, date, url){

// 		axios.post('/api/saved', {title: title, date: date, url: url})
// 		.then(function(results){

// 			console.log("Posted to MongoDB");
// 			return(results);
// 		})
// 	}

// }


// We export the helpers function (which contains getGithubInfo)
module.exports = query;