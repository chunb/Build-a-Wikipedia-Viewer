/* IMPORTANT: The "Result()" function and "search()" function were heavily inspired by Rafael J. Rodriguez (Rafase282). Thanks Rafael. The HTML, CSS and the rest of the JS are original code I wrote. Link: https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki/Zipline-Build-a-Wikipedia-Viewer*/

var arr = [];
var output = '';

function Result(title, snippet) {
  this.title = title;
  this.snippet = snippet;
}

//call the WikiPedia API and get the results
function search() {
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#search').val(),
    dataType: 'jsonp',
    type: 'POST',

    success: function(info) {
      //clear results
      $("#results").html("");
      arr.length = 0;
      var res = info.query.search;

      //sort through all the results and append them
      for (var result in res) {
        arr.push(new Result(res[result].title, res[result].snippet));
        output = '<div id="wiki-articles"><a href="https://en.wikipedia.org/wiki/' + res[result].title + '"target="_blank"><h2>' + res[result].title + '</h2></a><p>' + res[result].snippet + '</p></div>';

        //display the results onto the page
        $('#results').append(output);
      }
    }
  });
}
//initialize the API call to Wikipedia to get search results
function getResults() {
  search();
}

//clear the results
function clearResults() {
  $("#results").html("");
}
