var taal = "fr";

var attracties = [
    ["1", "Bunga Banga", "attractie", "3", "0-90cm : interdit<br>90-120cm : accompagné<br>+120cm : seul"],
    ["2", "Tam Tam twist", "attractie", "3", "0-105cm : accompagné<br>+105cm : seul"],
    ["3", "Savana fall", "attractie", "3", "0-90cm : interdit<br>90-105cm : accompagné<br>+105cm : seul<br>Max 195cm / 85kg"],
    ["4", "Flying Treehouse", "attractie", "3", "0-90cm : interdit<br>+90cm : seul"],
    ["5", "Bâteau pirate", "attractie", "3", "0-90cm : interdit<br>90-120cm : accompagné<br>+120cm : seul"],
    ["6", "Jungle Carrousel", "attractie", "2", "0-80cm : interdit<br>80-100cm : accompagné<br>+100cm : seul"],
    ["7", "Jungle Express", "attractie", "2", "0-105cm : accompagné<br>+105cm : seul"],
    ["8", "Tiki River", "attractie", "2", "0-110cm : accompagné<br>+110cm : seul"],
    ["9", "Tribal Village", "attractie", "3", "0-105cm : accompagné<br>+105cm : seul"],
    ["10", "Electric Mini Quads", "attractie", "3", "Plus disponible (remplacé)"],
    ["12", "Trampoline", "attractie", "2", "Tout public<br>Max 100kg"],
    ["13", "Dinosaur Discovery", "attractie", "1", "Tous publics"],
    ["14", "Tropical Stage", "show", "2", "Tous publics"],
    ["15", "Mini Trampolines", "attractie", "1", "3-13 ans"],
    ["16", "Mini Camp", "attractie", "1", "0-3 ans"],
    ["20", "Alligator Battle", "attractie", "3", "0-90cm : interdit<br>90-120cm : accompagné<br>+120cm : seul"],
    ["37", "NEW: Crazy Buggies", "attractie", "3", "0-105cm : accompagné<br>+105cm : seul"],
    ["32", "Jungle Goolfy", "attractie", "3", "Tous publics"],
    ["22", "Big Fun Zone", "attractie", "1", "3-13 ans"],
    ["23", "Zone Arcade", "attractie", "1", "Tous publics"],
    ["25", "Tyroliennes", "attractie", "1", "0-105cm : accompagné<br>+105cm : seul"],
    ["26", "Zone Lego", "attractie", "1", "3-13 ans"],
    ["27", "Tour élastique", "attractie", "1", "3-13 ans"],
    ["21", "Baby Zone", "attractie", "1", "0-3 ans"],
    ["33", "Jungle Restaurant", "resto", "", "Ouvert été/hiver"],
    ["36", "Jungle Bazar", "shop", "", "Ouvert été/hiver"]
];

// Rendering
let container = document.getElementById("attracties-container");

attracties.forEach(function(a) {
    let html = `
    <a class="a-item" href="https://www.jungle-city.be/${taal}/attractie${a[0]}">
      <div class="attractie-item">
        <div class="attractie-image" style="background-image: url(https://www.jungle-city.be/site/files/images/attracties/attractie${a[0]}.jpg);"></div>
        <h1 class="attractie-title">${a[1]}</h1>
        <div class="info-wrapper">
          <div class="info-cat" style="background-image: url(https://www.jungle-city.be/site/files/images/attracties/${a[2]}-icon.png);">CATEGORIE</div>
          <div class="info-level" style="background-image: url(https://www.jungle-city.be/site/files/images/attracties/ex${a[3]}.png);">EXCITEMENT LEVEL</div>
          <div class="info-level">${a[4]}</div>
        </div>
      </div>
    </a>`;
    container.innerHTML += html;
});
