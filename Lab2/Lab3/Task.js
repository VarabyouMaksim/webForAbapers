function Plant( name, description, habitat){
    var fName = 'Name - ';
    var fDescription = 'Description - ';
    var fHabitat = 'Habitat - ';
    this.getName = function(){
        return fName + name;
    }
    this.getDescription = function(){
        return fDescription + description;
    }
    this.getHabitat = function(){
        return fHabitat + habitat;
    }

    this.setName = function( name ){
        this.getName = function(){
            return fName + name;
        }
    }

    this.setDescription = function ( description ){
        this.getDescription = function(){
            return fDescription + description;
        }
    }

    this.setHabitat = function ( habitat ){
        this.getHabitat = function(){
            return fHabitat + habitat;
        }
    }
}

function Fern(name, description, habitat, species){
    Plant.call(this);
    this.setDescription(description);
    this.setName(name);
    this.setHabitat(habitat);
    var fSpecies = "Species - ";
    this.getSpecies = function(){
        return fSpecies + species;
    }

    this.setSpecies = function(species){
        this.getSpecies = function(){
            return fSpecies + species;
        }
    }
}

function Spruce(name, description, habitat, height){
    Plant.call(this);
    this.setDescription(description);
    this.setName(name);
    this.setHabitat(habitat);
    var fHeight = "Height - ";
    this.getHeight = function(){
        return fHeight + height;
    }

    this.setSpecies = function(height){
        this.getSpecies = function(){
            return fHeight + height;
        }
    }
}

var plant = new Spruce( 'X' , 'Y', 'Z', 'W');
plant.setDescription('Y2');
plant.setHabitat('Z2');
console.log(plant.getName());
console.log(plant.getDescription());
console.log(plant.getHabitat());
console.log(plant.getHeight());
