//  Geolocation debug code
if('geolocation' in navigator){
  console.log('geolocation available');
  navigator.geolocation.getCurrentPosition(position => {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
  });
} else {
  console.log('geolocation not available');
}

//  These variables store the value of the slider itself and the slider text nearby, respectively
let slider = document.getElementById("myRange");
let output = document.getElementById("slidertext");
output.innerHTML = slider.value+" m"; // Display the default slider value

//  Firstly Update the map initially with the default range value.
//  Update the current slider value (each time you drag the slider handle)
//  range variable is used for in-JavaScript purposes(for comparing the return of the
//  haversine function and manipulating the visibility of the pins)
let range = slider.value;
initMap(range);
slider.oninput = function() {
  output.innerHTML = this.value+ "m";
  range = this.value;
  initMap(range);
}

//  List of objects
let features = [
  {
    title: "Thessaloniki Castle",
    latitude: 40.641276,
    longitude: 22.959007,
    icon: "images/ancienticon.png",
    thumbnail: "images/castle.png",
    text: '<div id="content">' +
          '<div id="siteNotice">' +
           "</div>" +
           '<h1 id="firstHeading" class="firstHeading">Thessaloniki Castle</h1>' +
           '<div id="bodyContent">' +
           "<p>The Castle of Thessaloniki, also known as Heptapyrgion or Yedi Kule, is located on a hill above the Old Town (Ano Poli). Its location gives gorgeous views to the city, the port, and the Aegean Sea.</p>" +
           "</div>" +
           "</div>",
                            
  },
  {
    title: "Aristotelous Square",
    latitude: 40.634266,
    longitude: 22.942681,
    icon: "images/markericon.png",
    thumbnail: "images/aristotelous.png",
    text: '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">Aristotelous Square</h1>' +
          '<div id="bodyContent">' +
          "<p>Aristotelous Square is the main city square of Thessaloniki, Greece and is located on Nikis avenue (on the city's waterfront), in the city center. It was designed by French architect Ernest Hébrard in 1918, but most of the square was built in the 1950s. Many buildings surrounding the central square have since been renovated and its northern parts were largely restored in the 2000s.</p>" +
          "</div>" +
          "</div>",              
  },
  {
    title: "Roman Forum",
    latitude: 40.637675,
    longitude: 22.945873,
    icon: "images/ancienticon.png",
    thumbnail: "images/romanforum.png",
    text: '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">Roman Forum</h1>' +
          '<div id="bodyContent">' +
          "<p>Ruins of a 2nd-century Roman forum with a restored amphitheater & excavated corridors & arches.</p>" +
          "</div>" +
          "</div>",              
  },
  {
    title: "Alaca Imaret",
    latitude: 40.639138,
    longitude: 22.949697,
    icon: "images/ancienticon.png",
    thumbnail: "images/alacaimaret.png",
    text: '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">Alaca İmaret</h1>' +
          '<div id="bodyContent">' +
          "<p>Alaca Imaret Mosque or Ishak Pasha Mosque, literally the 'colourful mosque', is a 15th-century Ottoman mosque in Thessaloniki, Greece.</p>" +
          "</div>" +
          "</div>",              
  },
  {
    title: "Church of St. Demetrios",
    latitude: 40.638759, 
    longitude: 22.947346,
    icon: "images/ancienticon.png",
    thumbnail: "images/stdemetrius.png",
    text: '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">Church of St. Demetrios</h1>' +
          '<div id="bodyContent">' +
          "<p>The Church of Saint Demetrius, or Hagios Demetrios, is the main sanctuary dedicated to Saint Demetrius, the patron saint of Thessaloniki (in Central Macedonia, Greece), dating from a time when it was the second largest city of the Byzantine Empire. It is part of the site Palaeochristian and Byzantine Monuments of Thessaloniki on the list of World Heritage Sites by UNESCO since 1988.</p>" +
          "</div>" +
          "</div>",              
  },
  {
    title: "Rotunda",
    latitude: 40.633171,  
    longitude: 22.952588,
    icon: "images/ancienticon.png",
    thumbnail: "images/rotunda.png",
    text: '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">Rotunda</h1>' +
          '<div id="bodyContent">' +
          "<p>The Rotonda (or Rotunda) is one of the most important Roman monuments in Thessaloniki. It stands just next to the Arch of Galerius in the city center and it is also known as the Church of Agios Georgios. This cylindrical structure was built in 306 AD by the Roman tetrarch Galerius, who intended it to be his grave. </p>" +
          "</div>" +
          "</div>",              
  },
  {
    title: "White Tower of Thessaloniki",
    latitude: 40.626440, 
    longitude: 22.948128,
    icon: "images/ancienticon.png",
    thumbnail: "images/whitetower.png",
    text: '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">White Tower of Thessaloniki</h1>' +
          '<div id="bodyContent">' +
          "<p>The White Tower of Thessaloniki is a monument and museum on the waterfront of the city of Thessaloniki, capital of the region of Macedonia in northern Greece. The present tower replaced an old Byzantine fortification, known to have been mentioned around the 12th century, that the Ottoman Empire reconstructed to fortify the city's fortress after Sultan Murad II captured Thessaloniki in 1430.</p>" +
          "</div>" +
          "</div>",              
  },
  {
    title: "First Pier",
    latitude: 40.632745,  
    longitude: 22.935757,
    icon: "images/seaicon.png",
    thumbnail: "images/firstpier.png",
    text: '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">First Pier</h1>' +
          '<div id="bodyContent">' +
          "<p>The 2300 year old port that embodies the maritime prowess of Thessaloniki, nowadays hosts places of cultural activities such as restaurants, bars, museums like MOMus and Thessaloniki Cinema Museum.</p>" +
          "</div>" +
          "</div>",              
  },
  {
    title: "Western Walls of Thessaloniki",
    latitude: 40.643788,  
    longitude: 22.937271,
    icon: "images/ancienticon.png",
    thumbnail: "images/westernwalls.png",
    text: '<div id="content">' +
          '<div id="siteNotice">' +
          "</div>" +
          '<h1 id="firstHeading" class="firstHeading">Western Walls of Thessaloniki</h1>' +
          '<div id="bodyContent">' +
          "<p>The Walls of Thessaloniki are the city walls surrounding the city of Thessaloniki during the Middle Ages and until the late 19th century, when large parts of the walls, including the entire seaward section, were demolished as part of the Ottoman authorities' restructuring of Thessaloniki's urban fabric.</p>" +
          "</div>" +
          "</div>",              
  },
];

let listgroup = document.getElementById("markerlist");
let divlist = [];


for (let i = 0; i < features.length; i++) {

  //  List item div creation and class attribution
  let mainitemdiv = document.createElement("div");
  mainitemdiv.classList.add("list-group-item","list-group-item-action");

  //  The secondary div contains the object title and thumbnail
  let secondarydiv = document.createElement("div");
  secondarydiv.classList.add("d-flex", "w-100", "justify-content-between","vstack", "gap-3");
      
  let h5 = document.createElement("h5");
  h5.classList.add("mb-1");
  h5.textContent = features[i].title;

  //  Connects the array object thumbnail with the HTML img tag
  let thumbnail = document.createElement("img");
  thumbnail.src = features[i].thumbnail;
  secondarydiv.appendChild(h5)  
  secondarydiv.appendChild(thumbnail);
      
  mainitemdiv.appendChild(secondarydiv);
  divlist.push(mainitemdiv);
}  
 
//  Initialize and add the map
function initMap(range) {
  navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    //  The map, centered at user location
    let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: new google.maps.LatLng(latitude, longitude),
    });

    //  My location variable
    const mylocation = {
      title: "Your location",
      latitude: latitude,
      longitude: longitude,
      icon: "images/mylocation.png",
      text: '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">Your location</h1>' +
            "</div>" +
            "</div>",  
    }

    //  Initalizing the location marker and placing it on the map
    const locationmarker = new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      icon: mylocation.icon,
      title: mylocation.title,
      map: map,
    });

    //  Infowindow object initialization
    const infowindow = new google.maps.InfoWindow({
      content: "",
    });

    //  Add Infowindow onject on location marker 
    locationmarker.addListener("click", () => {
      infowindow.setContent(mylocation.text)
      infowindow.open({
        anchor: locationmarker,
        map,
        shouldFocus: false,
      });
    });

    //  Create markers, by default they are not shown on the map
    for (let i = 0; i < features.length; i++) {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(features[i].latitude, features[i].longitude),
        icon: features[i].icon,
        title: features[i].title,
        map: map,
      });

      //  By default markers are off
      marker.setMap(null);

      //  Infowindow on click Listener for every marker
      marker.addListener("click", () => {
        infowindow.setContent(features[i].text)
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });

      //  Only when the haversine algorithm check happens,
      //  the markers are allowed to be shown
      //  and the objects get appended to the navbar sliding menu
      if(haversine(latitude,features[i].latitude,longitude,features[i].longitude)<range){
        listgroup.appendChild(divlist[i]);
        marker.setMap(map);
      }
      else{
        //  Removes the DOM element if they are not nearby
        divlist[i].remove();
      }
    }
  });
}

//Haversine algorithm to calculate distance between 
//two points on the surface pf the earth
function haversine(lat1,lat2,lon1,lon2){
  // The math module contains a function
	// named toRadians which converts from
	// degrees to radians.
	lon1 = lon1 * Math.PI / 180;
	lon2 = lon2 * Math.PI / 180;
	lat1 = lat1 * Math.PI / 180;
	lat2 = lat2 * Math.PI / 180;

	// Haversine formula
	let dlon = lon2 - lon1;
	let dlat = lat2 - lat1;
	let a = Math.pow(Math.sin(dlat / 2), 2)
		+ Math.cos(lat1) * Math.cos(lat2)
		* Math.pow(Math.sin(dlon / 2),2);
			
	let c = 2 * Math.asin(Math.sqrt(a));

	// Radius of earth in kilometers.
	let r = 6371;

	// calculate the result in meters
	return (c * r * 1000);
}