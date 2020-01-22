//@ui5-bundle com/myorg/myUI5App/Component-preload.js
sap.ui.require.preload({
	"com/myorg/myUI5App/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/myorg/myUI5App/model/models"],function(e,t,i){"use strict";return e.extend("com.myorg.myUI5App.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"com/myorg/myUI5App/Plant.js":'class Plant{constructor(e,t,a){this.name=e;this.description=t;this.habitat=a}get getName(){return this.name}set setName(e){this.name=e}get getDescription(){return this.name}set setDescription(e){this.description=e}get getHabitat(){return this.name}set setHabitat(e){this.habitat=e}}class Fern extends Plant{constructor(e,t,a,n){super(e,t,a);this.species=n}get getSpecies(){return this.species}set setSpecies(e){this.species=e}}class Spruce extends Plant{constructor(e,t,a,n){super(e,t,a);this.height=n}get getSpecies(){return this.height}set setSpecies(e){this.height=e}}function setTypeUpdate(){var e=$("#uid").val();var t;var a;var n;var l;var d;var m;dpd.plants.get(function(r,i){if(i){return alert(i.message||"an error occurred")}if(!r.length){$("#empty").show()}r.forEach(function(r){if(r.id==e){t=r.type;a=r.name;n=r.description;l=r.habitat;d=r.species;m=r.height;console.log(t)}});if(t=="Fern"){document.getElementById("plant-form-update").innerHTML="";var o=document.createElement("div");o.className="form-element";o.innerHTML=\'<div class="form-element ">\'+\'<label for="uid">ID: </label>\'+\'<input type="text" class="form-control" id="uid" name="uid" />\'+"</div>";var c=document.createElement("div");c.className="form-element";c.innerHTML=\'<div class="form-element ">\'+\'<label for="uname">Название: </label>\'+\'<input type="text" class="form-control" id="uname" name="uname" />\'+"</div>";var s=document.createElement("div");s.className="form-element";s.innerHTML=\'<div class="form-element ">\'+\'<label for="udescription">Описание: </label>\'+\'<input type="text" class="form-control" id="udescription" name="udescription" />\'+"</div>";var p=document.createElement("div");p.className="form-element";p.innerHTML=\'<div class="form-element ">\'+\'<label for="uhabitat">Среда обитания: </label>\'+\'<input type="text" class="form-control" id="uhabitat" name="uhabitat" />\'+"</div>";var u=document.createElement("div");u.className="form-element";u.innerHTML=\'<div class="form-element ">\'+\'<label for="uspecies">Вид: </label>\'+\'<input type="text" class="form-control" id="uspecies" name="uspecies" />\'+"</div>";var f=document.createElement("div");f.className="form-element";f.innerHTML=\'<button type="submit" class="btn btn-primary">Update Plant</button>\';document.getElementById("plant-form-update").appendChild(o);document.getElementById("plant-form-update").appendChild(c);document.getElementById("plant-form-update").appendChild(s);document.getElementById("plant-form-update").appendChild(p);document.getElementById("plant-form-update").appendChild(u);document.getElementById("plant-form-update").appendChild(f)}else{document.getElementById("plant-form-update").innerHTML="";var o=document.createElement("div");o.className="form-element";o.innerHTML=\'<div class="form-element ">\'+\'<label for="uid">ID: </label>\'+\'<input type="text" class="form-control" id="uid" name="uid" />\'+"</div>";var c=document.createElement("div");c.className="form-element";c.innerHTML=\'<div class="form-element ">\'+\'<label for="uname">Название: </label>\'+\'<input type="text" class="form-control" id="uname" name="uname" />\'+"</div>";var s=document.createElement("div");s.className="form-element";s.innerHTML=\'<div class="form-element ">\'+\'<label for="udescription">Описание: </label>\'+\'<input type="text" class="form-control" id="udescription" name="udescription" />\'+"</div>";var p=document.createElement("div");p.className="form-element";p.innerHTML=\'<div class="form-element ">\'+\'<label for="uhabitat">Среда обитания: </label>\'+\'<input type="text" class="form-control" id="uhabitat" name="uhabitat" />\'+"</div>";var v=document.createElement("div");v.className="form-element";v.innerHTML=\'<div class="form-element ">\'+\'<label for="uheight">Вид: </label>\'+\'<input type="text" class="form-control" id="uheight" name="uheight" />\'+"</div>";var f=document.createElement("div");f.className="form-element";f.innerHTML=\'<button type="submit" class="btn btn-primary">Update Plant</button>\';document.getElementById("plant-form-update").appendChild(o);document.getElementById("plant-form-update").appendChild(c);document.getElementById("plant-form-update").appendChild(s);document.getElementById("plant-form-update").appendChild(p);document.getElementById("plant-form-update").appendChild(v);document.getElementById("plant-form-update").appendChild(f)}})}function setType(){var e=$("#type").val();console.log(e);if(e=="Fern"){document.getElementById("plant-form").innerHTML="";var t=document.createElement("div");t.className="form-element";t.innerHTML=\'<label for="type">Тип: </label>\'+\'<select id = "type" name = "type"  onchange="setType()">\'+\'<option value="Fern">Папоротник</option>\'+\'<option value="Spruce">Ель</option>\'+"</select>";var a=document.createElement("div");a.className="form-element";a.innerHTML=\'<div class="form-element ">\'+\'<label for="name">Название: </label>\'+\'<input type="text" class="form-control" id="name" name="name" />\'+"</div>";var n=document.createElement("div");n.className="form-element";n.innerHTML=\'<div class="form-element ">\'+\'<label for="description">Описание: </label>\'+\'<input type="text" class="form-control" id="description" name="description" />\'+"</div>";var l=document.createElement("div");l.className="form-element";l.innerHTML=\'<div class="form-element ">\'+\'<label for="habitat">Среда обитания: </label>\'+\'<input type="text" class="form-control" id="habitat" name="habitat" />\'+"</div>";var d=document.createElement("div");d.className="form-element";d.innerHTML=\'<div class="form-element ">\'+\'<label for="species">Вид: </label>\'+\'<input type="text" class="form-control" id="species" name="species" />\'+"</div>";var m=document.createElement("div");m.className="form-element";m.innerHTML=\'<button type="submit" class="btn btn-primary">Add New Plant</button>\';document.getElementById("plant-form").appendChild(t);document.getElementById("plant-form").appendChild(a);document.getElementById("plant-form").appendChild(n);document.getElementById("plant-form").appendChild(l);document.getElementById("plant-form").appendChild(d);document.getElementById("plant-form").appendChild(m)}else if(e=="Spruce"){document.getElementById("plant-form").innerHTML="";var t=document.createElement("div");t.className="form-element";t.innerHTML=\'<label for="type">Тип: </label>\'+\'<select id = "type" name = "type"  onchange="setType()">\'+\'<option value="Spruce">Ель</option>\'+\'<option value="Fern">Папоротник</option>\'+"</select>";var a=document.createElement("div");a.className="form-element";a.innerHTML=\'<div class="form-element ">\'+\'<label for="name">Название: </label>\'+\'<input type="text" class="form-control" id="name" name="name" />\'+"</div>";var n=document.createElement("div");n.className="form-element";n.innerHTML=\'<div class="form-element ">\'+\'<label for="description">Описание: </label>\'+\'<input type="text" class="form-control" id="description" name="description" />\'+"</div>";var l=document.createElement("div");l.className="form-element";l.innerHTML=\'<div class="form-element ">\'+\'<label for="habitat">Среда обитания: </label>\'+\'<input type="text" class="form-control" id="habitat" name="habitat" />\'+"</div>";var r=document.createElement("div");r.className="form-element";r.innerHTML=\'<div class="form-element ">\'+\'<label for="height">Высота: </label>\'+\'<input type="text" class="form-control" id="height" name="height" />\'+"</div>";var m=document.createElement("div");m.className="form-element";m.innerHTML=\'<button type="submit" class="btn btn-primary">Add New Plant</button>\';document.getElementById("plant-form").appendChild(t);document.getElementById("plant-form").appendChild(a);document.getElementById("plant-form").appendChild(n);document.getElementById("plant-form").appendChild(l);document.getElementById("plant-form").appendChild(r);document.getElementById("plant-form").appendChild(m)}}$(document).ready(function(){n();t();function e(e){var t="An error occurred";if(e.message){t=e.message}else if(e.errors){var a=e.errors;t="";Object.keys(a).forEach(function(e){t+=e+": "+a[e]+"\\n"})}alert(t)}$("#plant-form").submit(function(){var t=$("#name").val();var a=$("#description").val();var n=$("#habitat").val();dpd.plants.post({name:t,description:a,habitat:n},function(t,a){if(a)return e(a);const n=require("odata-client");var l=n({service:"https://p2001928110trial-trial-dev-myui5app.cfapps.eu10.hana.ondemand.com/index.html",resources:"Customers"});l.top(5).skip(10).filter("Balance gt 5000").and("CreditLimit","<",1e4).get().then(function(e){console.log(e)});$("#name").val("");$("#description").val("");$("#habita").val("")});return false});function t(){dpd.plants.get(function(e,t){$("#plants").empty();e.forEach(function(e){a(e)})})}function a(e){$(\'<div class="plant">\').append(\'<div class="author">Posted by: \'+e.name+"</div>").append("<p>"+e.description+"</p>").append("<p>"+e.habitat+"</p>").appendTo("#plants")}function n(){var e=document.createElement("div");e.className="accordion";e.id="accordionExample";var t=document.createElement("div");t.className="card";t.id="card_id";var a=document.createElement("div");a.className="card-header";a.id="headingOne";var n=document.createElement("h5");n.id="h5_1";n.className="mb-0";var l=document.createElement("button");l.className="btn btn-link";l.setAttribute("type","button");l.setAttribute("data-toggle","collapse");l.setAttribute("data-target","#collapseOne");l.setAttribute("aria-expanded","true");l.setAttribute("aria-controls","collapseOne");l.formTarget="#collapseOne";l.innerHTML="Create";var d=document.createElement("div");d.id="collapseOne";d.className="collapse show container";d.setAttribute("aria-labelledby","headingOne");d.setAttribute("data-parent","#accordionExample");var m=document.createElement("form");m.id="plant-form";var r=document.createElement("div");r.className="form-element";r.innerHTML=\'<label for="type">Тип: </label>\'+\'<select id = "type" name = "type"  onchange="setType()">\'+\'<option value="Fern">Папоротник</option>\'+\'<option value="Spruce">Ель</option>\'+"</select>";var i=document.createElement("div");i.className="form-element";i.innerHTML=\'<div class="form-element ">\'+\'<label for="name">Название: </label>\'+\'<input type="text" class="form-control" id="name" name="name" />\'+"</div>";var o=document.createElement("div");o.className="form-element";o.innerHTML=\'<div class="form-element ">\'+\'<label for="description">Описание: </label>\'+\'<input type="text" class="form-control" id="description" name="description" />\'+"</div>";var c=document.createElement("div");c.className="form-element";c.innerHTML=\'<div class="form-element ">\'+\'<label for="habitat">Среда обитания: </label>\'+\'<input type="text" class="form-control" id="habitat" name="habitat" />\'+"</div>";var s=document.createElement("div");s.className="form-element";s.innerHTML=\'<div class="form-element ">\'+\'<label for="species">Вид: </label>\'+\'<input type="text" class="form-control" id="species" name="species" />\'+"</div>";var p=document.createElement("div");p.className="form-element";p.innerHTML=\'<button type="submit" class="btn btn-primary">Add New Plant</button>\';var u=document.createElement("div");u.className="card";u.id="card_id2";var f=document.createElement("div");f.className="card-header";f.id="headingTwo";var v=document.createElement("h5");v.id="h5_2";v.className="mb-0";var h=document.createElement("button");h.className="btn btn-link";h.setAttribute("type","button");h.setAttribute("data-toggle","collapse");h.setAttribute("data-target","#collapseTwo");h.setAttribute("aria-expanded","true");h.setAttribute("aria-controls","collapseTwo");h.formTarget="#collapseTwo";h.innerHTML="Read";var b=document.createElement("div");b.id="collapseTwo";b.className="collapse";b.setAttribute("aria-labelledby","headingTwo");b.setAttribute("data-parent","#accordionExample");var y=document.createElement("table");y.id="rTable";y.className="table";y.innerHTML=" <thead>"+"<tr>"+\'<th scope="col">#</th>\'+\'<th scope="col">Type</th>\'+\'<th scope="col">Name</th>\'+\'<th scope="col">Description</th>\'+\'<th scope="col">Habitat</th>\'+\'<th scope="col">Species</th>\'+\'<th scope="col">Height</th>\'+"</tr>"+"</thead>"+"<tbody id=\'rTBody\'>"+"<tr>"+\'<td id="cid"></td>\'+\'<td id="ctype"></td>\'+\'<td id="cname"></td>\'+\'<td id="cdescr"></td>\'+\'<td id="chabitat"></td>\'+\'<td id="cspecies"></td>\'+\'<td id="cheight"></td>\'+"</tr>"+"</tbody>";var E=document.createElement("div");E.className="card";E.id="card_id3";var g=document.createElement("div");g.className="card-header";g.id="headingThree";var T=document.createElement("h5");T.id="h5_3";T.className="mb-0";var I=document.createElement("button");I.className="btn btn-link";I.setAttribute("type","button");I.setAttribute("data-toggle","collapse");I.setAttribute("data-target","#collapseThree");I.setAttribute("aria-expanded","true");I.setAttribute("aria-controls","collapseThree");I.formTarget="#collapseThree";I.innerHTML="Update";var B=document.createElement("div");B.id="collapseThree";B.className="collapse";B.setAttribute("aria-labelledby","headingThree");B.setAttribute("data-parent","#accordionExample");var C=document.createElement("form");C.id="plant-form-update";var N=document.createElement("div");N.className="form-element";N.innerHTML=\'<div class="form-element ">\'+\'<label for="uid">ID: </label>\'+\'<input type="text" class="form-control" id="uid" name="uid" />\'+"</div>";var H=document.createElement("div");H.className="form-element";H.innerHTML=\'<div class="form-element ">\'+\'<label for="uname">Название: </label>\'+\'<input type="text" class="form-control" id="uname" name="uname" />\'+"</div>";var L=document.createElement("div");L.className="form-element";L.innerHTML=\'<div class="form-element ">\'+\'<label for="udescription">Описание: </label>\'+\'<input type="text" class="form-control" id="udescription" name="udescription" />\'+"</div>";var M=document.createElement("div");M.className="form-element";M.innerHTML=\'<div class="form-element ">\'+\'<label for="uhabitat">Среда обитания: </label>\'+\'<input type="text" class="form-control" id="uhabitat" name="uhabitat" />\'+"</div>";var x=document.createElement("div");x.className="form-element";x.innerHTML=\'<button type="submit" class="btn btn-primary">Update Plant</button>\';var A=document.createElement("div");A.className="card";A.id="card_id4";var _=document.createElement("div");_.className="card-header";_.id="headingFour";var F=document.createElement("h5");F.id="h5_4";F.className="mb-0";var w=document.createElement("button");w.className="btn btn-link";w.setAttribute("type","button");w.setAttribute("data-toggle","collapse");w.setAttribute("data-target","#collapseFour");w.setAttribute("aria-expanded","true");w.setAttribute("aria-controls","collapseFour");w.formTarget="#collapseFour";w.innerHTML="Delete";var $=document.createElement("div");$.id="collapseFour";$.className="collapse";$.setAttribute("aria-labelledby","headingFour");$.setAttribute("data-parent","#accordionExample");var P=document.createElement("form");P.id="plant-form-delete";var S=document.createElement("div");S.className="form-element";S.innerHTML=\'<div class="form-element ">\'+\'<label for="did">ID: </label>\'+\'<input type="text" class="form-control" id="did" name="did" />\'+"</div>";var D=document.createElement("div");D.className="form-element";D.innerHTML=\'<button type="submit" class="btn btn-primary">Delete Plant</button>\';document.getElementById("main").appendChild(e);document.getElementById("accordionExample").appendChild(t);document.getElementById("card_id").appendChild(a);document.getElementById("headingOne").appendChild(n);document.getElementById("h5_1").appendChild(l);document.getElementById("card_id").appendChild(d);document.getElementById("collapseOne").appendChild(m);document.getElementById("plant-form").appendChild(r);document.getElementById("plant-form").appendChild(i);document.getElementById("plant-form").appendChild(o);document.getElementById("plant-form").appendChild(c);document.getElementById("plant-form").appendChild(s);document.getElementById("plant-form").appendChild(p);document.getElementById("accordionExample").appendChild(u);document.getElementById("card_id2").appendChild(f);document.getElementById("headingTwo").appendChild(v);document.getElementById("h5_2").appendChild(h);document.getElementById("card_id2").appendChild(b);document.getElementById("collapseTwo").appendChild(y);document.getElementById("accordionExample").appendChild(E);document.getElementById("card_id3").appendChild(g);document.getElementById("headingThree").appendChild(T);document.getElementById("h5_3").appendChild(I);document.getElementById("card_id3").appendChild(B);document.getElementById("collapseThree").appendChild(C);document.getElementById("plant-form-update").appendChild(N);document.getElementById("plant-form-update").appendChild(H);document.getElementById("plant-form-update").appendChild(L);document.getElementById("plant-form-update").appendChild(M);document.getElementById("plant-form-update").appendChild(x);document.getElementById("accordionExample").appendChild(A);document.getElementById("card_id4").appendChild(_);document.getElementById("headingFour").appendChild(F);document.getElementById("h5_4").appendChild(w);document.getElementById("card_id4").appendChild($);document.getElementById("collapseFour").appendChild(P);document.getElementById("plant-form-delete").appendChild(S);document.getElementById("plant-form-delete").appendChild(D)}});',
	"com/myorg/myUI5App/controller/MainView.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("com.myorg.myUI5App.controller.MainView",{})});
},
	"com/myorg/myUI5App/i18n/i18n.properties":'title=myUI5App\nappTitle=myUI5App\nappDescription=App Description\n',
	"com/myorg/myUI5App/i18n/i18n_en.properties":'title=myUI5App\nappTitle=myUI5App\nappDescription=App Description\n',
	"com/myorg/myUI5App/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.myorg.myUI5App","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}"},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"com.myorg.myUI5App.view.MainView","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.60.0","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.layout":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.myorg.myUI5App.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"com.myorg.myUI5App.view","controlId":"app","controlAggregation":"pages","async":true},"routes":[{"name":"RouteMainView","pattern":"RouteMainView","target":["TargetMainView"]}],"targets":{"TargetMainView":{"viewType":"XML","viewLevel":1,"viewName":"MainView"}}}}}',
	"com/myorg/myUI5App/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"com/myorg/myUI5App/view/MainView.view.xml":' <mvc:View controllerName="com.myorg.myUI5App.controller.MainView"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"><App id="idAppControl"><pages><Page title="{i18n>title}"><content></content></Page></pages></App></mvc:View> \n'
});