//#region Funkcje które będą wykorzystywane jako parametr userDataCallbackFn
const addTwoNumbers = userData => {
    const liczba1 = parseFloat(userData.address.geo.lat);
    const liczba2 = parseFloat(userData.address.geo.lng);
    const fun = (liczba1, liczba2) => liczba1 + liczba2;
    console.log(`Suma długości i szerokości geograficznej wynosi: ${fun(liczba1, liczba2)}`);
}

const createNewObject = userData => {
    const zasob1 = userData.username;
    const zasob2 = userData.email;
    const fun = (nickname, email) => ({ "nickname": nickname, "email": email });
    console.log(`Nowo powstaly obiekt: ${JSON.stringify(fun(zasob1, zasob2))}`);

}
//#endregion

//#region 1. Funkcja zwrotna (callback)

const myJSONObj = {
    "imie": "Jan",
    "nazwisko": "Kowalski",
    "wiek": 30,
    "smartfon": {
        "marka": "Xiaomi",
        "model": "Redmi Note 8 Pro",
        "cena": 899,
        "system": {
            "nazwa": "Android",
            "wersja": "10 QP1A",
        }
    },
    "ulubioneLiczby": [2, 4, 8, 16, 32, 64]
}

const getMyObj = (jsonObj, callbackfn) => callbackfn(jsonObj);

const task1_1 = data => {
    const liczba1 = data.smartfon.cena;
    const liczba2 = data.ulubioneLiczby.reduce((a, b) => a + b);
    console.log(`Wynik działania na liczbach: ${liczba1 + liczba2}`);
}

const task1_2 = data => {
    const string1 = data.smartfon.marka;
    const string2 = data.smartfon.system.nazwa;
    console.log(`Łańcuch znakowy: Smartfon ${string1} posiada system operacyjny ${string2}`);
};

//#endregion

//#region 2. Obiekt Promise

const task2Promise = id => new Promise((resolve, reject) => {
    if (id >= 1 && id <= 10) resolve(
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
    )
    else {
        reject('Id musi znajdować się w przedziale (0 < Id < 11)');
    }
});

const task2 = (id, userDataCallBackFn) => {
    task2Promise(id)
        .then(userData => userDataCallBackFn(userData))
        .catch(error => console.log( 'error: ', error))
        .finally(() => console.log(' Użyto funkcji task2'));
}

//#endregion

//#region 3. async/await */
async function task3(id, userDataCallBackFn) {
    const userData = await task2Promise(id);
    userDataCallBackFn(userData);
}
//#endregion 

//#region 4. Zapytania AJAX */

const task4 = (id, userDataCallBackFn) => {
    if (id >= 1 && id <= 10) {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';

        xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
                const userData = xhr.response;

                userDataCallBackFn(userData);
            }
        });

        xhr.addEventListener("error", () => {
            console.log("Nie udało się nawiązać połączenia");
        })

        xhr.open('GET', `https://jsonplaceholder.typicode.com/users/${id}`);
        xhr.send();

    } else console.log('Error: Id musi znajdować się w przedziale (0 < Id < 11)');

}
//#endregion

//#region 5. metoda fetch */

const task5 = (id, userDataCallBackFn) => {
    if (id >= 1 && id <= 10) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(userData => userDataCallBackFn(userData));
    } else console.log('Error: Id musi znajdować się w przedziale (0 < Id < 11)');
}
//#endregion

//#region 6. biblioteka axios */

const task6 = (id, userDataCallBackFn) => {
    if (id >= 1 && id <= 10) {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => userDataCallBackFn(response.data))
            .catch(error => console.log(error));
    } else console.log('Error: Id musi znajdować się w przedziale (0 < Id < 11)');
}
//#endregion

//#region Przykładowe wywołania funkcji

// //[TASK #1]
// getMyObj(myJSONObj, task1_1);
// getMyObj(myJSONObj, task1_2);

// //[TASK #2]
// task2(2, addTwoNumbers);
// task2(2, createNewObject);

// //[TASK #3]
// task3(3, addTwoNumbers);
// task3(3, createNewObject);

// //[TASK #4]
// task4(4, addTwoNumbers);
// task4(4, createNewObject);

// //[TASK #5]
// task5(5, addTwoNumbers);
// task5(5, createNewObject);

// //[TASK #6]
// task6(6, addTwoNumbers);
// task6(6, createNewObject);

//#endregion