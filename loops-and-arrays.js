// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in bovenstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================


// INPUT
// - De "je" als koosnaampje in array (waarde)

// OUTPUT
// - Array met koosnaampje -je (log)

// STAPPENPLAN
// - log ongewijzigde array in console
// - Vraag waarden array op en wijzig deze door "je" toe te voegen in een for loop
// - Log gewijzigde array in console

const names = ["Henk", "Piet", "Fred", "Joop"];
console.log(names);

for (let i = 0; i < names.length; i++) {
    names[i] = names[i] + "je";
}
console.log(names);

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(names) geeft: ["Henk", "Piet", "Fred", "Joop"]
// Na jouw script zie je de aangepaste waardes:
// console.log(names) geeft: ["Henkje", "Pietje", "Fredje", "Joopje"]


// ==========================================
// Opdracht 2
// Schrijf een script dat ieder getal in bovenstaande array met 3 vermenigvuldigd.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

// INPUT
// - Vermenigvuldig originele array met 3 (waarde)

// OUTPUT
// - Array met waarden 3x zo groot (log)

// STAPPENPLAN
// - Log originele array numbers in console
// - Vraag waarden array op en wijzig de waarden door te vermenigvuldigen met 3 in een for loop
// - Log gewijzigde array numbers in console

const numbers = [2, 4, 5, 29, 38];
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 3;
}
console.log(numbers);

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [2, 4, 5, 29, 38];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [ 6, 12, 15, 87, 114 ];


// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array het volume uitrekent.
// Het volume is lengte x breedte x hoogte
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

// INPUT
// - volume = l*b*h (waarden)

// OUTPUT
// - Array met volume van ieder vierkant (log)

// STAPPENPLAN
// - log originele array squares in console
// - Vraag waarden array op en wijzig de waarden door deze te vermenigvuldigen met de l*b*h in een for loop
// - log gewijzigde array squares in console

const squares = [30, 2, 8, 24, 11];
console.log(squares);

for (let i = 0; i < squares.length; i++) {
    squares[i] = squares[i] * squares[i] * squares[i];
}
console.log(squares);

// Verwachtte uitkomsten:
// Vóór het script zie je de originele waardes:
// console.log(numbers) geeft: [30, 2, 8, 24, 11];
// Na jouw script zie je de aangepaste waardes:
// console.log(numbers) geeft: [27000, 8, 512, 13824, 1331];
