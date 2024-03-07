const tariffDefault = document.getElementById("tariff-filter-default")

const tariffOptions = document.querySelectorAll(".tariff-filter-option")
tariffOptions.forEach(element => {
  element.addEventListener("click", function (e) {
    if (e.target.checked != undefined) {
      showTariffsOnly(e.target.value, e.target.checked, e.target.id, e);
    }
  });
});

const corporateTariffs = document.querySelectorAll(".js-tariff-corporate");
const personalTariffs = document.querySelectorAll(".js-tariff-personal");
const tariffsTitles = document.querySelectorAll(".js-tariff-title");
const tariffsSubtitles = document.querySelectorAll(".js-tariff-subtitle");
const corporateCheckmark = document.getElementById("corporate-checkmark");
const personalCheckmark = document.getElementById("personal-checkmark");

const cleanHeaders = () => {
  [...tariffsSubtitles, ...tariffsTitles].forEach((tariffSubtitle, index) => {
    let count = 0;
    [...tariffSubtitle.children].forEach((tariff, index) => {
      if (!tariff.classList.contains("tariff-subtitle") && !tariff.classList.contains("tariff-title") && tariff.style.display != "none") {
        count++;
      }
    });
    if (count == 0) {
      tariffSubtitle.style.display = "none";
    } else {
      tariffSubtitle.style.display = "block";
    }
  });
}

const state = { Corporate:true, Personal:false };
const showTariffsOnly = (value, checked, id, e) => { 
  
  state[value] = checked;

  if (!state.Personal && !state.Corporate) {
    e.target.checked = true;
    state[value] = true;
    return;
  }
  else if (state.Personal && state.Corporate) {
    let isPersonal = (value == "Personal")
    corporateCheckmark.checked = !isPersonal;
    state["Corporate"] = !isPersonal;
    state["Personal"] = isPersonal;
    personalCheckmark.checked = isPersonal;
  }

  tariffDefault.innerHTML = state.Personal?"Personal":"Corporate";

  corporateTariffs.forEach(element => {
    element.style.display = state.Corporate?"flex":"none";
  });
  personalTariffs.forEach(element => {
    element.style.display = state.Personal?"flex":"none";
  })

  cleanHeaders();
}
showTariffsOnly("Corporate", true, "corporate-checkmark", null);