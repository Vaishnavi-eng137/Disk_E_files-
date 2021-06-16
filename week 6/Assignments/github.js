$(document).ready(function () {
    var book_details = [];
    var search_by_var;


    function get_book_details() {
        var url_api = 'https://raw.githubusercontent.com/attainu/attainu-flamingo/master/assignments/data/books.json'
        $.ajax({
            url: url_api,
            success: function (response) {
                book_details = JSON.parse(response)
                console.log(book_details)
                
            },
            error: function () {
                alert('something is wrong')
            }
        })
    }

    get_book_details()

    function creating_table() {
        var table = '<table class="table table-striped"><thead class="bg-dark text-light"><th>Title</th><th>Author</th><th>Country</th><th>Language</th><th>Link</th><th>pages</th><th>year</th></thead><tbody></tbody></table>'
        $('#main_body').html(table)
    }

    function searching_data() {            
        $('#main_body').empty()
        var search_input = $('#nav_search_bar').val()
        if (search_input != '') {
            creating_table()
            var found = false;
            book_details.forEach(function (el) {
                
                if (el[search_by_var].slice(0, search_input.length).toLowerCase() == search_input.toLowerCase()) {
                    found=true
                    $('tbody').append($('<tr>'))
                    $('tbody tr:last').append('<td>' + el.title + '</td><td>' + el.author + '</td><td>' + el.country + '</td><td>' + el.language + '</td><td>' + el.link + '</td><td>' + el.pages + '</td><td>' + el.year + '</td>')
                }
            })
            if(!found)
            alert(search_input+' is not available')

        }

    }

    function search_by(){
        search_by_var=$(this).val()
        $('#nav_search_bar').attr('placeholder','Enter '+search_by_var+' here....')
    }

    $('select').on('change',search_by)
    $('#nav_bar_search_button').on('click', searching_data)
})