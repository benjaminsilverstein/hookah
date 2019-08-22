function autoComplete() {
    var input = document.getElementById('address-search-js');
    var autocomplete = new google.maps.places.Autocomplete(input);
   
    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
    });
}


$(autoComplete)



