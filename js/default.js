$(function() {
	$('#tabs').tabs();
    $('#twitter').tweetable({username: 'ubuntued', limit: 5});
});

google.load("feeds", "1");
function feedrss(result) {
    var container = document.getElementById("rss");
    container.innerHTML = '';
    for (var i = 0; i < result.feed.entries.length; i++) {
      var entry = result.feed.entries[i];
      var div = document.createElement("div");
      var a = document.createElement("a")
          a.setAttribute('href', entry.link);
          a.setAttribute('target', '_BLANK');
          a.innerHTML = entry.title;
      div.appendChild(a);
      container.appendChild(div);
    }

}

function OnLoadrss() {
  var feed = new google.feeds.Feed("http://feeds.feedburner.com/ubuntued");
  feed.setNumEntries(10);
  feed.load(feedrss);
}

google.setOnLoadCallback(OnLoadrss);
