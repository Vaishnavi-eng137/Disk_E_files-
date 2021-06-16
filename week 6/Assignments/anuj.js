var cities_data = [];


$.ajax({
    url: "https://raw.githubusercontent.com/attainu/attainu-eagle/master/coding-challenges/week-4/day-4/cities.json",
    success: function (response) {
        cities_data = JSON.parse(response)
        console.log(cities_data[0])
    }
});


function finding_cities_of_state() {
    var inp_value = $('#search_bar').val()
    var pttrn = new RegExp('^' + inp_value, 'i')
    $('#search').html('<h5>Cities</h5><ul id="myul"></ul>')
    $('#states_name').html('<h5 id="state_list"></h5>')
    var state_list = []

    cities_data.forEach(function (el) {
        var res = el.state.match(pttrn)
        if (res != null && res != '') {
            if (state_list.indexOf(el.state) == -1) {
                state_list.push(el.state)
            }
            $('#state_list').html('States:-' + state_list.join(','))
            $('#myul').append('<li>' + el.name + '</li>')
        }
    })
}



$('#search_bar').on('keyup',finding_cities_of_sate)

