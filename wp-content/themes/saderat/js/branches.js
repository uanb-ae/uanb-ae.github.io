function hideAllInfos(elem) {
  var rect = elem.getBoundingClientRect();
  maxScreenHeight = 350;
  if (rect.bottom >= maxScreenHeight) {
    elem.nextSibling.nextSibling.classList.add("info-open-from-top");
  } else {
    elem.nextSibling.nextSibling.classList.remove("info-open-from-top");
  }

  if (elem.nextSibling.nextSibling.classList.contains("hide-info")) {
    document.querySelectorAll(".branch-more-info").forEach(function (item) {
      item.classList.add("hide-info");
    });

    elem.nextSibling.nextSibling.classList.toggle("hide-info");
  } else {
    elem.nextSibling.nextSibling.classList.toggle("hide-info");
  }

}

function toggleShowBranches(id) {
  document.body.classList.toggle("stop-scrolling");
  document.getElementById("branches-of-" + id).classList.toggle("hide-branches");
}