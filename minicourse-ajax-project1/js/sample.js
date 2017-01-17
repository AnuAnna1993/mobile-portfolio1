 var nytimesUrl='http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+cityStr+'&sort=newst&api-key=021b0ca2b42442159ceb8c7eb15b10bb'
 $getJSON(nytimesUrl,function(data){
 	$nytHeaderElem.text('New York Times Article About'+cityStr);
 	articles=data.response.docs;
 	for(var i=0;i<articles.length;i++){
 	var article=articles[i];
 	$nytElem.append('<li class="article">'+'<a href="'+article.web_url+'">'+article.headline.main+'</a>'+'<p>'+article.snippet+'</p>'+'</li>');
 	};
 	 });
 var wikiUrl='http://en.wikipedia.org/w/api.php?action=opensearch&search='+cityStr+'&format=jso&callback+wikiCallback';
$.ajax(
{
	url:wikiUrl,
	dataType:"jsonp",
	//jsonp:"callback",
	success:function(response){
		var articleList=response[1];
		for (var i=0;i<articleList.length;i++){
			articleStr=articleList[i];
			var url='http://en.wikipedia.org/wiki/'+articleStr;
			$wikiElem.append('<li><a href="'+url+'">'+articleStr+'</a></li>');

		};
	}
});