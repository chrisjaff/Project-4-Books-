$("document").ready(function(){})
function bookSearch(){
  var search = document.getElementById('search').value
  document.getElementById('results').innerHTML = ""
  console.log(search)

  $.ajax({
    url:"https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType:"json",
    success:function(data) {
      for (var i = 0; i < data.items.length; i++){
        results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
        results.innerHTML += "<p>" + data.items[i].volumeInfo.description + "</p>"
        results.innerHTML += "<a href = " + data.items[i].volumeInfo.infoLink + "></a>"
        results.innerHTML += "<img>" + data.items[i].volumeInfo.imageLinks.smallThumbnail + "</>"
      }
      console.log(data)
    },
    type: 'GET'
  });
}

    document.getElementById('button').addEventListener('click', bookSearch, false)
