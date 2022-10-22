const toggleSwitch = document.getElementById("cb-dark-theme");

// Primeiro se verificar a preferência do usuário. Se o usuário
// preferir dark mode, se seta este tema e se muda o switch para
// true. Senão, faz-se o contrário.
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.documentElement.setAttribute("data-theme", "dark");
  toggleSwitch.checked = true;
} else {
  document.documentElement.setAttribute("data-theme", "light");
  toggleSwitch.checked = false;
}

// Definição da função mudarTema(), que é acionada quando o usuário
// interage com o switch de dark mode.
function mudarTema() {
  if (document.documentElement.attributes["data-theme"].value != "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
