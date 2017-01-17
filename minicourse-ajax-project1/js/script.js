
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
var streetStr=$('#street').val();
var cityStr=$('#city').val();
var address=streetStr+','+cityStr;
$greeting.text('so, you want to live at'+address+'?');
var streetviewUrl='http://maps.googleapis.com/maps/api/streetview?size=600x300&location='+address+'';
$body.append('<img class="bgimg" src="'+streetviewUrl+'">');
  
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

    return false;
};

$('#form-container').submit(loadData);
