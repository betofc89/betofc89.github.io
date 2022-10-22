document.documentElement.setAttribute("data-theme", "light");

function mudarTema() {
  if (document.documentElement.attributes["data-theme"].value != "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

/* ------------------------------------------------------------- */

/* const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
); */

/* const toggleSwitch = document.getElementById("cb-dark-theme");

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
 */
