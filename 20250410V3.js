var taal = "fr";
var attracties = [
  ["1", "Bunga Banga", "attractie", "3", { "accompanied": "90-120cm", "solo": "+120cm" }],
  ["2", "Tam Tam twist", "attractie", "3", { "accompanied": "0-105cm", "solo": "+105cm" }],
  ["3", "Savana fall", "attractie", "3", { "accompanied": "90-105cm", "solo": "+105cm", "note": "Max 195cm / 85kg" }],
  // ... add the rest as needed
];

let container = document.getElementById("attracties-container");

attracties.forEach(function(a) {
  let html = `
    <a class="a-item" href="https://www.jungle-city.be/${taal}/attractie${a[0]}">
      <div class="attractie-item" ontouchstart="">
        <h1 class="attractie-title">${a[1]}</h1>
        <div class="attractie-image" style="background-image: url(https://www.jungle-city.be/site/files/images/attracties/attractie${a[0]}.jpg);"></div>
        <div class="info-wrapper">
          <div class="info-cat" style="background-image: url(https://www.jungle-city.be/site/files/images/attracties/${a[2]}-icon.png);">CATEGORIE</div>
          <div class="info-level" style="background-image: url(https://www.jungle-city.be/site/files/images/attracties/ex${a[3]}.png);">EXCITEMENT LEVEL</div>
        </div>`;

  let conditions = a[4];
  let heightInfo = "";

  if (typeof conditions === "object") {
    if (conditions.accompanied) {
      heightInfo += `
        <div class="info-height">
          <img src="https://www.jungle-city.be/site/files/images/Icons/dydy%20-%20till%20x%2C%20with%20adult.jpg" class="icon-height" />
          ${conditions.accompanied}
        </div>`;
    }
    if (conditions.solo) {
      heightInfo += `
        <div class="info-height">
          <img src="https://www.jungle-city.be/site/files/images/Icons/dydy%20-%20children%20OK%20from%20x.jpg" class="icon-height" />
          ${conditions.solo}
        </div>`;
    }
    if (conditions.note) {
      heightInfo += `<div class="note">${conditions.note}</div>`;
    }
  }

  html += `
        <div class="info-height-wrapper">
          ${heightInfo}
        </div>
      </div>
    </a>`;

  container.innerHTML += html;
});

// Slide-in animation when title enters viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll('.attractie-title').forEach(title => {
  observer.observe(title);
});

// Optional: tap-to-expand for mobile
document.addEventListener("touchstart", function (e) {
  const item = e.target.closest(".attractie-item");
  if (item) {
    item.classList.toggle("expanded");
  }
}, { passive: true });
