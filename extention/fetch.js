function loadCupons(domain, Element) {
    const url = `http://localhost:5000/cupons?domain=${domain}`;

    alert("fetching");
    fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        alert("not ok");
        throw new Error(`the server responded with ${response.status}`)
    }).then(data => {
        if (data.error != null) throw new Error(`the server retured an error ${error}`)
        if (data.cupons == null) throw new Error(`the server didn't give any cupons`)
        
        data.cupons.forEach(cupon => {
            if (cupon.code == null || cupon.lastGood == null) throw new Error(`the cupon is not the correct format`);
            const cuponElement = document.createElement("div");
            cuponElement.id = cupon.code;
            
            const header = document.createElement("h3");
            header.innerText = cupon.code;
            cuponElement.appendChild(header);

            const lastGood = document.createElement("p");
            lastGood.innerText = cupon.lastGood;
            cuponElement.appendChild(lastGood);

            Element.appendChild(cuponElement);
        });
    }).catch(err => console.error(err));
}