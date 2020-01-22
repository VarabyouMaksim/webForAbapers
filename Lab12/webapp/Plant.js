class Plant {
    constructor(name, description, habitat){
        this.name = name;
        this.description = description;
        this.habitat = habitat;
    }

    get getName(){
        return this.name;
    }

    set setName(name){
        this.name = name;
    }

    get getDescription(){
        return this.name;
    }

    set setDescription(description){
        this.description = description;
    }

    get getHabitat(){
        return this.name;
    }

    set setHabitat(habitat){
        this.habitat = habitat;
    }

}

class Fern extends Plant{
    constructor(name, description, habitat, species){
        super(name, description, habitat);
        this.species = species;
    }

    get getSpecies(){
        return this.species;
    }

    set setSpecies(species){
        this.species = species;
    }

}

class Spruce extends Plant{
    constructor(name, description, habitat, height){
        super(name, description, habitat);
        this.height = height;
    }

    get getSpecies(){
        return this.height;
    }

    set setSpecies(height){
        this.height = height;
    }

}

function setTypeUpdate(){
    var id = $('#uid').val();
    var type;
    var name;
    var description;
    var habitat;
    var species;
    var height;
    
    dpd.plants.get(function(plants, err) {

        if (err) {
  
          // Alert if there's an error
  
          return alert(err.message || "an error occurred");
  
        }
  
  
  
        if (!plants.length) {
  
          $('#empty').show();
  
        }
  
  
  
        // todos is an array
  
        plants.forEach(function(plant) {
          if(plant.id == id ){
              type = plant.type;
              name = plant.name;
              description = plant.description;
              habitat = plant.habitat;
              species = plant.species;
              height = plant.height;
          console.log(type);
          }
  
        });

        if(type == 'Fern'){
            document.getElementById("plant-form-update").innerHTML = '';
            var idUpdate = document.createElement("div");
        idUpdate.className = "form-element";
        idUpdate.innerHTML = '<div class="form-element ">'+
        '<label for="uid">ID: </label>'+
        '<input type="text" class="form-control" id="uid" name="uid" />'+
    '</div>';

        var nameUpdate = document.createElement("div");
        nameUpdate.className = "form-element";
        nameUpdate.innerHTML = '<div class="form-element ">'+
        '<label for="uname">Название: </label>'+
        '<input type="text" class="form-control" id="uname" name="uname" />'+
    '</div>';

        var descriptionUpdate = document.createElement("div");
        descriptionUpdate.className = "form-element";
        descriptionUpdate.innerHTML = '<div class="form-element ">'+
        '<label for="udescription">Описание: </label>'+
        '<input type="text" class="form-control" id="udescription" name="udescription" />'+
    '</div>';

        var habitatUpdate = document.createElement("div");
        habitatUpdate.className = "form-element";
        habitatUpdate.innerHTML = '<div class="form-element ">'+
        '<label for="uhabitat">Среда обитания: </label>'+
        '<input type="text" class="form-control" id="uhabitat" name="uhabitat" />'+
    '</div>';

        var speciesUpdate = document.createElement("div");
        speciesUpdate.className = "form-element";
        speciesUpdate.innerHTML = '<div class="form-element ">'+
        '<label for="uspecies">Вид: </label>'+
        '<input type="text" class="form-control" id="uspecies" name="uspecies" />'+
    '</div>';

        var submitUpdate = document.createElement("div");
        submitUpdate.className = "form-element";
        submitUpdate.innerHTML =
        '<button type="submit" class="btn btn-primary">Update Plant</button>';

        document.getElementById("plant-form-update").appendChild(idUpdate);
        document.getElementById("plant-form-update").appendChild(nameUpdate);
        document.getElementById("plant-form-update").appendChild(descriptionUpdate);
        document.getElementById("plant-form-update").appendChild(habitatUpdate);  
        document.getElementById("plant-form-update").appendChild(speciesUpdate);  
        document.getElementById("plant-form-update").appendChild(submitUpdate);

           
        } else {
            document.getElementById("plant-form-update").innerHTML = '';
            var idUpdate = document.createElement("div");
        idUpdate.className = "form-element";
        idUpdate.innerHTML = '<div class="form-element ">'+
        '<label for="uid">ID: </label>'+
        '<input type="text" class="form-control" id="uid" name="uid" />'+
    '</div>';

        var nameUpdate = document.createElement("div");
        nameUpdate.className = "form-element";
        nameUpdate.innerHTML = '<div class="form-element ">'+
        '<label for="uname">Название: </label>'+
        '<input type="text" class="form-control" id="uname" name="uname" />'+
    '</div>';

        var descriptionUpdate = document.createElement("div");
        descriptionUpdate.className = "form-element";
        descriptionUpdate.innerHTML = '<div class="form-element ">'+
        '<label for="udescription">Описание: </label>'+
        '<input type="text" class="form-control" id="udescription" name="udescription" />'+
    '</div>';

        var habitatUpdate = document.createElement("div");
        habitatUpdate.className = "form-element";
        habitatUpdate.innerHTML = '<div class="form-element ">'+
        '<label for="uhabitat">Среда обитания: </label>'+
        '<input type="text" class="form-control" id="uhabitat" name="uhabitat" />'+
    '</div>';

        var heightUpdate = document.createElement("div");
        heightUpdate.className = "form-element";
        heightUpdate.innerHTML = '<div class="form-element ">'+
        '<label for="uheight">Вид: </label>'+
        '<input type="text" class="form-control" id="uheight" name="uheight" />'+
    '</div>';

        var submitUpdate = document.createElement("div");
        submitUpdate.className = "form-element";
        submitUpdate.innerHTML =
        '<button type="submit" class="btn btn-primary">Update Plant</button>';

        document.getElementById("plant-form-update").appendChild(idUpdate);
        document.getElementById("plant-form-update").appendChild(nameUpdate);
        document.getElementById("plant-form-update").appendChild(descriptionUpdate);
        document.getElementById("plant-form-update").appendChild(habitatUpdate);  
        document.getElementById("plant-form-update").appendChild(heightUpdate);  
        document.getElementById("plant-form-update").appendChild(submitUpdate);


        }
  
      });
}

function setType() {
    var type1 = $('#type').val();
console.log(type1);
if(type1 == 'Fern' ){
    document.getElementById("plant-form").innerHTML = '';
    var typeCreate = document.createElement("div");
        typeCreate.className = "form-element";
        typeCreate.innerHTML = '<label for="type">Тип: </label>'+
        '<select id = "type" name = "type"  onchange="setType()">'+
            '<option value="Fern">Папоротник</option>'+
            '<option value="Spruce">Ель</option>'+
        '</select>';

        var nameCreate = document.createElement("div");
        nameCreate.className = "form-element";
        nameCreate.innerHTML = '<div class="form-element ">'+
        '<label for="name">Название: </label>'+
        '<input type="text" class="form-control" id="name" name="name" />'+
    '</div>';

        var descriptionCreate = document.createElement("div");
        descriptionCreate.className = "form-element";
        descriptionCreate.innerHTML = '<div class="form-element ">'+
        '<label for="description">Описание: </label>'+
        '<input type="text" class="form-control" id="description" name="description" />'+
    '</div>';

        var habitatCreate = document.createElement("div");
        habitatCreate.className = "form-element";
        habitatCreate.innerHTML = '<div class="form-element ">'+
        '<label for="habitat">Среда обитания: </label>'+
        '<input type="text" class="form-control" id="habitat" name="habitat" />'+
    '</div>';

        var speciesCreate = document.createElement("div");
        speciesCreate.className = "form-element";
        speciesCreate.innerHTML = '<div class="form-element ">'+
        '<label for="species">Вид: </label>'+
        '<input type="text" class="form-control" id="species" name="species" />'+
    '</div>';

        var submitCreate = document.createElement("div");
        submitCreate.className = "form-element";
        submitCreate.innerHTML =
        '<button type="submit" class="btn btn-primary">Add New Plant</button>';

        document.getElementById("plant-form").appendChild(typeCreate);
                        document.getElementById("plant-form").appendChild(nameCreate);
                        document.getElementById("plant-form").appendChild(descriptionCreate);
                        document.getElementById("plant-form").appendChild(habitatCreate);   
                        document.getElementById("plant-form").appendChild(speciesCreate);
                        document.getElementById("plant-form").appendChild(submitCreate);

    }else if(type1 == "Spruce"){
        document.getElementById("plant-form").innerHTML = '';
    var typeCreate = document.createElement("div");
        typeCreate.className = "form-element";
        typeCreate.innerHTML = '<label for="type">Тип: </label>'+
        '<select id = "type" name = "type"  onchange="setType()">'+
            '<option value="Spruce">Ель</option>'+
            '<option value="Fern">Папоротник</option>'+
        '</select>';

        var nameCreate = document.createElement("div");
        nameCreate.className = "form-element";
        nameCreate.innerHTML = '<div class="form-element ">'+
        '<label for="name">Название: </label>'+
        '<input type="text" class="form-control" id="name" name="name" />'+
    '</div>';

        var descriptionCreate = document.createElement("div");
        descriptionCreate.className = "form-element";
        descriptionCreate.innerHTML = '<div class="form-element ">'+
        '<label for="description">Описание: </label>'+
        '<input type="text" class="form-control" id="description" name="description" />'+
    '</div>';

        var habitatCreate = document.createElement("div");
        habitatCreate.className = "form-element";
        habitatCreate.innerHTML = '<div class="form-element ">'+
        '<label for="habitat">Среда обитания: </label>'+
        '<input type="text" class="form-control" id="habitat" name="habitat" />'+
    '</div>';

        var heightCreate = document.createElement("div");
        heightCreate.className = "form-element";
        heightCreate.innerHTML = '<div class="form-element ">'+
        '<label for="height">Высота: </label>'+
        '<input type="text" class="form-control" id="height" name="height" />'+
    '</div>';

        var submitCreate = document.createElement("div");
        submitCreate.className = "form-element";
        submitCreate.innerHTML =
        '<button type="submit" class="btn btn-primary">Add New Plant</button>';

        document.getElementById("plant-form").appendChild(typeCreate);
                        document.getElementById("plant-form").appendChild(nameCreate);
                        document.getElementById("plant-form").appendChild(descriptionCreate);
                        document.getElementById("plant-form").appendChild(habitatCreate);   
                        document.getElementById("plant-form").appendChild(heightCreate);
                        document.getElementById("plant-form").appendChild(submitCreate);
    }
}


$(document).ready(function() {

    initPage();
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
    
            //addPlant(plant);

		const odata = require('odata-client');
		var q = odata({service: 'https://p2001928110trial-trial-dev-myui5app.cfapps.eu10.hana.ondemand.com/index.html', resources: 'Customers'});
		q.top(5).skip(10).filter('Balance gt 5000').and('CreditLimit', '<', 10000).get()
		.then(function(response) {
		  console.log(response);
		});
	    //
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

    function initPage() {

        var accordion = document.createElement("div");
        accordion.className = "accordion";
        accordion.id = "accordionExample";

        var card  = document.createElement("div");
        card.className = "card";
        card.id = "card_id";

        var headingOne = document.createElement("div");
        headingOne.className = "card-header";
        headingOne.id = "headingOne";


        var h5_1 = document.createElement("h5");
        h5_1.id = "h5_1";
        h5_1.className = "mb-0";

        var buttonCreate = document.createElement("button");
        buttonCreate.className = "btn btn-link";
        buttonCreate.setAttribute("type","button");
        buttonCreate.setAttribute("data-toggle","collapse");
        buttonCreate.setAttribute("data-target","#collapseOne");
        buttonCreate.setAttribute("aria-expanded","true");
        buttonCreate.setAttribute("aria-controls","collapseOne");
        buttonCreate.formTarget = "#collapseOne";
        buttonCreate.innerHTML = "Create";
        
        var collapseOne = document.createElement("div");
        collapseOne.id = "collapseOne";
        collapseOne.className = "collapse show container";
        collapseOne.setAttribute("aria-labelledby","headingOne");
        collapseOne.setAttribute("data-parent","#accordionExample");

        var createForm = document.createElement("form");
        createForm.id = "plant-form";

        var typeCreate = document.createElement("div");
        typeCreate.className = "form-element";
        typeCreate.innerHTML = '<label for="type">Тип: </label>'+
        '<select id = "type" name = "type"  onchange="setType()">'+
            '<option value="Fern">Папоротник</option>'+
            '<option value="Spruce">Ель</option>'+
        '</select>';

        var nameCreate = document.createElement("div");
        nameCreate.className = "form-element";
        nameCreate.innerHTML = '<div class="form-element ">'+
        '<label for="name">Название: </label>'+
        '<input type="text" class="form-control" id="name" name="name" />'+
    '</div>';

        var descriptionCreate = document.createElement("div");
        descriptionCreate.className = "form-element";
        descriptionCreate.innerHTML = '<div class="form-element ">'+
        '<label for="description">Описание: </label>'+
        '<input type="text" class="form-control" id="description" name="description" />'+
    '</div>';

        var habitatCreate = document.createElement("div");
        habitatCreate.className = "form-element";
        habitatCreate.innerHTML = '<div class="form-element ">'+
        '<label for="habitat">Среда обитания: </label>'+
        '<input type="text" class="form-control" id="habitat" name="habitat" />'+
    '</div>';

        var speciesCreate = document.createElement("div");
        speciesCreate.className = "form-element";
        speciesCreate.innerHTML = '<div class="form-element ">'+
        '<label for="species">Вид: </label>'+
        '<input type="text" class="form-control" id="species" name="species" />'+
    '</div>';

        var submitCreate = document.createElement("div");
        submitCreate.className = "form-element";
        submitCreate.innerHTML =
        '<button type="submit" class="btn btn-primary">Add New Plant</button>';


        var card2  = document.createElement("div");
        card2.className = "card";
        card2.id = "card_id2";

        var headingTwo = document.createElement("div");
        headingTwo.className = "card-header";
        headingTwo.id = "headingTwo";

        var h5_2 = document.createElement("h5");
        h5_2.id = "h5_2";
        h5_2.className = "mb-0";

        var buttonRead = document.createElement("button");
        buttonRead.className = "btn btn-link";
        buttonRead.setAttribute("type","button");
        buttonRead.setAttribute("data-toggle","collapse");
        buttonRead.setAttribute("data-target","#collapseTwo");
        buttonRead.setAttribute("aria-expanded","true");
        buttonRead.setAttribute("aria-controls","collapseTwo");
        buttonRead.formTarget = "#collapseTwo";
        buttonRead.innerHTML = "Read";
        
        var collapseTwo = document.createElement("div");
        collapseTwo.id = "collapseTwo";
        collapseTwo.className = "collapse";
        collapseTwo.setAttribute("aria-labelledby","headingTwo");
        collapseTwo.setAttribute("data-parent","#accordionExample");

        var rTable = document.createElement("table");
        rTable.id = "rTable";
        rTable.className = "table";
        rTable.innerHTML = ' <thead>'+
                                    '<tr>'+
                                        '<th scope="col">#</th>'+
                                        '<th scope="col">Type</th>'+
                                        '<th scope="col">Name</th>'+
                                        '<th scope="col">Description</th>'+
                                        '<th scope="col">Habitat</th>'+
                                        '<th scope="col">Species</th>'+
                                        '<th scope="col">Height</th>'+
                                    '</tr>'+
                                '</thead>'+
                                "<tbody id='rTBody'>"+
                                    '<tr>'+
                                        '<td id="cid"></td>'+
                                        '<td id="ctype"></td>'+
                                        '<td id="cname"></td>'+
                                        '<td id="cdescr"></td>'+
                                        '<td id="chabitat"></td>'+
                                        '<td id="cspecies"></td>'+
                                        '<td id="cheight"></td>'+
                                    '</tr>'+
                                '</tbody>' ;

        var card3  = document.createElement("div");
        card3.className = "card";
        card3.id = "card_id3";

        var headingThree = document.createElement("div");
        headingThree.className = "card-header";
        headingThree.id = "headingThree";

        var h5_3 = document.createElement("h5");
        h5_3.id = "h5_3";
        h5_3.className = "mb-0";

        var buttonUpdate = document.createElement("button");
        buttonUpdate.className = "btn btn-link";
        buttonUpdate.setAttribute("type","button");
        buttonUpdate.setAttribute("data-toggle","collapse");
        buttonUpdate.setAttribute("data-target","#collapseThree");
        buttonUpdate.setAttribute("aria-expanded","true");
        buttonUpdate.setAttribute("aria-controls","collapseThree");
        buttonUpdate.formTarget = "#collapseThree";
        buttonUpdate.innerHTML = "Update";
        
        var collapseThree = document.createElement("div");
        collapseThree.id = "collapseThree";
        collapseThree.className = "collapse";
        collapseThree.setAttribute("aria-labelledby","headingThree");
        collapseThree.setAttribute("data-parent","#accordionExample");

        var updateForm = document.createElement("form");
        updateForm.id = "plant-form-update";

        var idUpdate = document.createElement("div");
        idUpdate.className = "form-element";
        idUpdate.innerHTML = '<div class="form-element ">'+
        '<label for="uid">ID: </label>'+
        '<input type="text" class="form-control" id="uid" name="uid" />'+
    '</div>';

        var nameUpdate = document.createElement("div");
        nameUpdate.className = "form-element";
        nameUpdate.innerHTML = '<div class="form-element ">'+
        '<label for="uname">Название: </label>'+
        '<input type="text" class="form-control" id="uname" name="uname" />'+
    '</div>';

        var descriptionUpdate = document.createElement("div");
        descriptionUpdate.className = "form-element";
        descriptionUpdate.innerHTML = '<div class="form-element ">'+
        '<label for="udescription">Описание: </label>'+
        '<input type="text" class="form-control" id="udescription" name="udescription" />'+
    '</div>';

        var habitatUpdate = document.createElement("div");
        habitatUpdate.className = "form-element";
        habitatUpdate.innerHTML = '<div class="form-element ">'+
        '<label for="uhabitat">Среда обитания: </label>'+
        '<input type="text" class="form-control" id="uhabitat" name="uhabitat" />'+
    '</div>';


        var submitUpdate = document.createElement("div");
        submitUpdate.className = "form-element";
        submitUpdate.innerHTML =
        '<button type="submit" class="btn btn-primary">Update Plant</button>';


        var card4  = document.createElement("div");
        card4.className = "card";
        card4.id = "card_id4";

        var headingFour = document.createElement("div");
        headingFour.className = "card-header";
        headingFour.id = "headingFour";

        var h5_4 = document.createElement("h5");
        h5_4.id = "h5_4";
        h5_4.className = "mb-0";

        var buttonDelete = document.createElement("button");
        buttonDelete.className = "btn btn-link";
        buttonDelete.setAttribute("type","button");
        buttonDelete.setAttribute("data-toggle","collapse");
        buttonDelete.setAttribute("data-target","#collapseFour");
        buttonDelete.setAttribute("aria-expanded","true");
        buttonDelete.setAttribute("aria-controls","collapseFour");
        buttonDelete.formTarget = "#collapseFour";
        buttonDelete.innerHTML = "Delete";
        
        var collapseFour = document.createElement("div");
        collapseFour.id = "collapseFour";
        collapseFour.className = "collapse";
        collapseFour.setAttribute("aria-labelledby","headingFour");
        collapseFour.setAttribute("data-parent","#accordionExample");

        var deleteForm = document.createElement("form");
        deleteForm.id = "plant-form-delete";

        var idDelete = document.createElement("div");
        idDelete.className = "form-element";
        idDelete.innerHTML = '<div class="form-element ">'+
        '<label for="did">ID: </label>'+
        '<input type="text" class="form-control" id="did" name="did" />'+
    '</div>';

        var submitDelete = document.createElement("div");
        submitDelete.className = "form-element";
        submitDelete.innerHTML =
        '<button type="submit" class="btn btn-primary">Delete Plant</button>';

        
        
        

        document.getElementById("main").appendChild(accordion);
            document.getElementById("accordionExample").appendChild(card);
                document.getElementById("card_id").appendChild(headingOne);
                    document.getElementById("headingOne").appendChild(h5_1);
                        document.getElementById("h5_1").appendChild(buttonCreate);
                document.getElementById("card_id").appendChild(collapseOne);
                    document.getElementById("collapseOne").appendChild(createForm);
                        document.getElementById("plant-form").appendChild(typeCreate);
                        document.getElementById("plant-form").appendChild(nameCreate);
                        document.getElementById("plant-form").appendChild(descriptionCreate);
                        document.getElementById("plant-form").appendChild(habitatCreate);   
                        document.getElementById("plant-form").appendChild(speciesCreate);
                        document.getElementById("plant-form").appendChild(submitCreate);
            document.getElementById("accordionExample").appendChild(card2);
                document.getElementById("card_id2").appendChild(headingTwo);
                    document.getElementById("headingTwo").appendChild(h5_2);
                        document.getElementById("h5_2").appendChild(buttonRead);
                document.getElementById("card_id2").appendChild(collapseTwo);
                    document.getElementById("collapseTwo").appendChild(rTable);
            document.getElementById("accordionExample").appendChild(card3);
                document.getElementById("card_id3").appendChild(headingThree);
                    document.getElementById("headingThree").appendChild(h5_3);
                        document.getElementById("h5_3").appendChild(buttonUpdate);
                document.getElementById("card_id3").appendChild(collapseThree);
                    document.getElementById("collapseThree").appendChild(updateForm);
                        document.getElementById("plant-form-update").appendChild(idUpdate);
                        document.getElementById("plant-form-update").appendChild(nameUpdate);
                        document.getElementById("plant-form-update").appendChild(descriptionUpdate);
                        document.getElementById("plant-form-update").appendChild(habitatUpdate);   
                        document.getElementById("plant-form-update").appendChild(submitUpdate);
            document.getElementById("accordionExample").appendChild(card4);
                document.getElementById("card_id4").appendChild(headingFour);
                    document.getElementById("headingFour").appendChild(h5_4);
                        document.getElementById("h5_4").appendChild(buttonDelete);
                document.getElementById("card_id4").appendChild(collapseFour);
                    document.getElementById("collapseFour").appendChild(deleteForm);
                    document.getElementById("plant-form-delete").appendChild(idDelete);  
                    document.getElementById("plant-form-delete").appendChild(submitDelete);

                

        
    }

});

const express = require('express')

const app = express()

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

/*var mongojs = require('mongojs');
var db = mongojs('lab11',['user']);*/

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
