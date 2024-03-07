const forms = document.getElementById('bsi-forms');
const formTogglers = document.querySelectorAll(".js-toggle-forms");
let isFormsHide = true;
for (let formToggler of formTogglers) { 
  formToggler.addEventListener("click", function (e) {
    forms.classList.toggle("bsi-forms-hide");
    document.body.classList.toggle("stop-scrolling");
  });
}