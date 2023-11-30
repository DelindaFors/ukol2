const castka = prompt ("Zadejte částku před zdaněním: ");
const zdaneni = prompt ("Zadejte procento zdanění: ");

function taxed (castka, zdaneni) {
    const castkaCislo = parseFloat(castka);
    const zdaneniCislo = parseFloat(zdaneni);
    const celkovaCastka = castka * (1 * zdaneni / 100)

return Math.round (celkovaCastka);
}

const zaokrouhlCastka = taxed (castka, zdaneni);

document.body.innerHTML = "Částka po zdanění je: " + zaokrouhlCastka + " Kč" + "."
