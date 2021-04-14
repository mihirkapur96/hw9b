function fetchAndSetData() {
    let data = {}
    let elem = document.getElementById('articles');
    for (i = 0; i < elem.length; i++) {
        if (elem[i].checked)
            data.countries = elem[i].value;
    }
    document.getElementById("articles").textContent = 'New article added successfully with title "Test" and ID 5!'
}