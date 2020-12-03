// Zadanie 1
// Napisz funkcję, która przyjmie jeden parametr - dowolny tekst.
// Funkcja niech ZWRACA tekst Liczba liter: .... gdzie .... to liczba liter tekstu.
// Wynik jej użycia wypisz w konsoli za pomocą console.info()

console.info("Zadanie 1");

function strLength(str) {
    let letterCounter = 0;
    const polLetters = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźżAĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ"

    for (const letter of str) {
        if (polLetters.includes(letter)) {
            letterCounter++;
        }
    }

    console.info(`Liczba liter: ${letterCounter}`);
}
console.info("strLength('Przykł@d0wy t3ks7') = ")
strLength("Przykł@d0wy t3ks7");

// Zadanie 2
// Napisz funkcje, która zsumuje przekazaną do niej tablicę i zwraca jej sumę.
// Stwórz dowolną tablicę, a następnie przekaż ją do tej funkcji i wynik wypisz w konsoli.

console.info("Zadanie 2");

function sumOfArray(tab) {
    let sumOfTab = 0;
    for (const el of tab) {
        if (typeof (el) === "number") {
            sumOfTab += el;
        } else {
            continue;
        }
    }

    return sumOfTab;
}

const tab = [1, 2, 3, "kek", true];
console.table(tab);
console.info("sumOfArray(tab) = " + sumOfArray(tab));

// Zadanie 3
// Napisz funkcję, która przyjmie dowolny tekst.
// Funkcja niech zwraca tekst, który ma zmiksowana wielkość liter np:
// input -> Ala ma kota
// output -> AlA Ma kOtA
// Dla ułatwienia spacje liczmy jako literę.

console.info("Zadanie 3");

function mixUpperLowerCase(str) {
    newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            newStr += str.charAt(i).toUpperCase();
        } else {
            newStr += str.charAt(i).toLowerCase();
        }
    }
    return newStr;
}

console.info("mixUpperLowerCase('przykładowy tekst') = " + mixUpperLowerCase("przykładowy tekst"));

// Zadanie 4
// Napisz funkcje, która będzie wymagać 2 atrybutów.
// Funkcja niech sprawdza, czy oba atrybuty są liczbami.
// Funkcja ma zwracać iloczyn (*) obu liczb.
// Jeżeli któryś z atrybutów nie jest liczba, funkcja niech zwraca false.

console.info("Zadanie 4");

function multiplication(num1, num2) {
    if (typeof (num1) === "number" && typeof (num2) === "number") {
        return num1 * num2;
    } else {
        return false;
    }
}

console.info("multiplication(3, 4) = " + multiplication(3, 4));
console.info("multiplication(true, 2) = " + multiplication(true, 2));

// Zadanie 5
// Napisz funkcje, która przyjmuje 2 parametry:

// imię - np: Ala
// miesiac - np: styczen
// Funkcja ma zwracac:

// jezeli miesiac to grudzien, styczen, luty: "Ala jezdzi na sankach"
// jezeli miesiac to marzec, kwiecien, maj: "Ala chodzi po kaluzach"
// jezeli miesiac to czerwiec, lipiec, sierpien: "Ala sie opala"
// jezeli miesiac to wrzesien, pazdziernik, listopad: "Ala zbiera liscie"
// Wywołaj funkcje przekazując do niej zmienne: twoje imię i dowolny miesiąc.

// Dopisz w funkcji zabezpieczenie, które pozwoli wpisać miesiac małymi lub dużymi literami.
// Jeżeli miesiac jest "innym słowem", funkcja niech zwraca "Ala uczy się JS".

console.info("Zadanie 5");

function whatYouDoin(name, month) {
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    month = month.toLowerCase();
    switch (month) {
        case "grudzień":
        case "styczeń":
        case "luty":
            return `${name} jeździ na sankach`;
            break;
        case "marzec":
        case "kwiecień":
        case "maj":
            return `${name} chodzi po kalużach`;
            break;
        case "czerwiec":
        case "lipiec":
        case "sierpień":
            return `${name} się opala`;
            break;
        case "wrzesień":
        case "październik":
        case "listopad":
            return `${name} zbiera liscie`;
            break;
        default:
            return `${name} uczy się JS`;
            break;
    }
}

console.info("whatYouDoin('maksymilian' , 'marzec') = " + whatYouDoin("maksymilian", "marzec"));

// Zadanie 6
// Mamy przykładowy tekst:

const namesString = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
// Napisz funkcję, która przyjmie 2 atrybuty: tekst i znak rozdziału (np. |)

// Skorzystaj z odpowiedniej metody, tak aby rozdzielić przekazany do funkcji tekst na części za pomocą przekazanego znaku rozdziału.
// W wyniku rozdzielenia powinieneś dostać tablicę. Funkcja niech posegreguje tą tablicę alfabetycznie.
// Następnie funkcja niech połączy tą tablicę w nowy tekst wstawiając między imiona znak wcześniejszego rozdziału.
// Skorzystaj tutaj z innej odpowiedniej metody js.

// input -> "Ania|Marcin|Bartek" output -> "Ania|Bartek|Marcin"

// Wywołaj tę funkcję przekazując do niej string names z początku zadania.

console.info("Zadanie 6");


function namesSorting(names, separator) {
    const namesTable = names.split(separator);
    namesTable.sort();
    return namesTable.join(separator);
}

console.info("Posortowane imiona:\n" + namesSorting(namesString, '|'));

// Zadanie 7
// Napisz 2 funkcje. Każda z nich niech przyjmuje tablicę imion.

// Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane dużymi literami.
// Druga funkcja niech zwraca nową tablicę, w której imiona mają zmienną wielkość liter.

// input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
// output1 -> ["ANIA" , "MARCIN" , "BARTEK" , "PIOTR"]
// output2 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]

console.info("Zadanie 7");
const namesTable = ["Ania", "Marcin", "Bartek", "Piotr", "Kuba", "Beata", "Agnieszka"];

const tableToUpperCase = table => table.map(el => el.toUpperCase());

const tableToMixedCase = table => table.map(el => mixUpperLowerCase(el));

console.table(tableToUpperCase(namesTable));
console.table(tableToMixedCase(namesTable));

// Zadanie 8
// Napisz funkcję checkFemale, która sprawdza przekazane do niej imię.
// Zróbmy proste teoretyczne założenie, że jeżeli imię kończy się literą "a" to jest to żeńskie imię,
// w przeciwnym wypadku męskie. Funkcja powinna wracać true jeżeli imię jest żeńskie i false jeżeli jest męskie.
// Przykładowo:

// checkFemale("Ania") === true
// checkFemale("Marcin") === false

console.info("Zadanie 8");

const checkFemale = name => {
    if (name.endsWith('a')) return true;
    else return false;
}

console.info('checkFemale("Anna") = ' + checkFemale("Anna"));
console.info('checkFemale("Adam") = ' + checkFemale("Adam"));

// Zadanie 9
// Napisz funkcję countWomanInTable(arr), do której przekażesz tablicę userów, którą masz poniżej.
// Funkcja powinna sprawdzić każdego użytkownika w tablicy i zwrócić ile jest kobiet.
// Wykorzystaj tutaj funkcję z poprzedniego zadania.Jak pobrać imię z usera?
// Możesz to osiągnąć za pomocą metody split(). Podziel string na 2 części - uzyskasz tablicę 2 elementów.
// Pierwszy to imię, drugi to nazwisko.

console.info("Zadanie 9");

const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"
];

const countWomanInTable = table => {
    womanCounter = 0;

    table.forEach(el => {
        const name = el.split(' ');
        if (checkFemale(name[0])) womanCounter++;
    })
    return womanCounter;
}

console.table(users);
console.info("Ilość kobiet w tablicy: " + countWomanInTable(users));