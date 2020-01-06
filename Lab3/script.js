$(document).ready(function() {

    loadPlants();

    function showError(error) {
        var message = "An error occurred";
        if (error.message) {
                message = error.message;
        } else if (error.errors) {
                var errors = error.errors;
                message = "";
                Object.keys(errors).forEach(function(k) {
                        message += k + ": " + errors[k] + "\n";
                });
        }

        alert(message);
}

    $('#plant-form').submit(function() {
        //Get the data from the form
        var name = $('#name').val();
        var description = $('#description').val();
        var habitat = $('#habitat').val();

        dpd.plants.post({
            name: name,
            description: description,
            habitat: habitat
    }, function(plant, error) {
            if (error) return showError(error);
    
            addPlant(plant);
            $('#name').val('');
            $('#description').val('');
            $('#habita').val('');
    });

        return false;
    });

    function loadPlants() {
        dpd.plants.get(function(plants, error) { //Use dpd.js to access the API
            $('#plants').empty(); //Empty the list
            plants.forEach(function(plant) { //Loop through the result
                addPlant(plant); //Add it to the DOM.
            });
        });
    }

    function addPlant(plant) {
        $('<div class="plant">')
            .append('<div class="author">Posted by: ' + plant.name + '</div>')
            .append('<p>' + plant.description + '</p>')
            .append('<p>' + plant.habitat +'</p>')
            .appendTo('#plants');
    }

});