// document.querySelector("p").addEventListener("Call API", e => {
//     //CanceldefaultbehaviorofsendingasynchronousPOSTrequest
//     e.preventDefault();
//     //CreateaFormDataobject,passingtheformasaparameter
//     constformData = newFormData(e.target);
//     //SendformdatatotheserverwithanasynchronousPOSTrequest
//     fetch("http://localhost:3000/ex1", {
//         method: "POST",
//         body: formData
//     })
//         .then(response => response.text()).then(result => {
//             document.getElementById("countries").textContent = countries;
//         })
//         .catch(err => {
//             console.error(err.message);
//         });

const name = "Mihir Kapur"
const countries = [
    {
        name: "United States",
        year: 2017,
    },
    {
        name: "Dubai",
        year: 2018
    }
];

fetch(
    "https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(countries)
})
    .then(response => response.text())
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err.message);
    });

function fetchAndSetData() {
    let data = {}
    let elem = document.getElementById('countries');
    for (i = 0; i < elem.length; i++) {
        if (elem[i].checked)
            data.countries = elem[i].value;
    }
    document.getElementById("countries").textContent = "Your name is Mihir and you have visited 5 countries"
}


