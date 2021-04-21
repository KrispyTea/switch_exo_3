let x = prompt("Donnez un chiffre")
let y = x%2

switch (y) {
    case 0:
        alert("Le nombre est multiple de 2");
        break;
    case 1:
        alert("Le nombre n'est pas un multiple de 2");
        break;
    default:
        alert("Ceci n'est pas un nombre")
        break;
}