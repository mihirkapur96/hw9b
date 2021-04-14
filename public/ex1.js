//Handleformsubmission
document.querySelector("form").addEventListener("submit", e => {
    //CanceldefaultbehaviorofsendingasynchronousPOSTrequest
    e.preventDefault();
    //CreateaFormDataobject,passingtheformasaparameter
    constformData = newFormData(e.target);
    //SendformdatatotheserverwithanasynchronousPOSTrequest
    fetch("http://localhost:3000/ex1", {
        method: "POST",
        body: formData
    })
        .then(response => response.text()).then(result => {
            document.getElementById("result").textContent = result;
        })
        .catch(err => {
            console.error(err.message);
        });
});

function fetchAndSetData() {
    let formData = {};
    formData.name = document.getElementById("name").value;
    formData.email = document.getElementById("email").value;

    let elem = document.getElementsByName('payment');
    for (i = 0; i < elem.length; i++) {
        if (elem[i].checked)
            formData.payment = elem[i].value;
    }

    formData.checkbox = document.querySelector('#value').checked;
    if (formData.checkbox == true) {
        formData.checkbox = "on";
    } else {
        formData.checkbox = "off";
    }
    formData.country = document.getElementById("country").value;

    console.log(formData);

    document.getElementById("result").textContent = `${formData.name} Thank you for your order. We will keep you posted on delivery status at ${formData.email}`
}
