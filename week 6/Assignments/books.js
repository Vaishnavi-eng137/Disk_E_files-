var books = [];

$(document).ready(function () {
  books.json;
  $.ajax({
    url:
      "https://raw.githubusercontent.com/attainu/attainu-flamingo/master/assignments/data/books.json",
    success: function (response) {
      books = JSON.parse(response);
      // books_data =JSON.parse(response)
    //   console.log(books)
    },
  });
});

function getresult() {
  var searchvalue = $("#searchbar").val();
  var searchedbooks=[]
  books.forEach(function (book) {
    // console.log(books)
    if (book.language[0] === searchvalue.toUpperCase()) {
    //   return book;
      searchedbooks.push(book)
    }
    console.log(searchedbooks)
  });
  displaybooks()
  searchedbooks.forEach((book)=>{
      let row=`<tr><td>${book.title}</td><td>${book.author}</td><td>${book.country}</td><td>${book.language}</td><td>${book.link}</td><td>${book.pages}</td><td>${book.year}</td></tr>`
      $("#tb").append(row)
      
  })
  
}

function displaybooks(){
   var table = '<table class="table table-striped"><thead class="bg-dark text-light"><th>Title</th><th>Author</th><th>Country</th><th>Language</th><th>Link</th><th>pages</th><th>year</th></thead><tbody id="tb"></tbody></table>'
$("#tableofbooks").html(table)
}
$("#booksubmit").on("click", getresult);
