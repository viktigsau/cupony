function loadCupons(domain, Element) {
    const url = `http://localhost:5000/cupons?domain=${domain}`;

    fetch(url)
    .then(response => {
        if (response.ok) {
            console.log("resonse ok");
            return response.json();
        }
        throw new Error(`the server responded with ${response.status}`)
    }).then(data => {
        if (data.error != null) throw new Error(`the server retured an error ${error}`)
        console.log("no errors");
        if (data.cupons == null) throw new Error(`the server didn't give any cupons`)
        console.log("found cupons");

        console.log(`found ${data.cupons.length} cupons at domain ${domain}`)
        
        data.cupons.forEach(cupon => {
            if (cupon.code == null || cupon.lastGood == null) throw new Error(`the cupon is not the correct format`);
            const cuponElement = document.createElement("div");
            cuponElement.id = cupon.code;
            cuponElement.className = "cupon";
            
            const header = document.createElement("h3");
            header.innerText = `Cupon: ${cupon.code}`;
            cuponElement.appendChild(header);

            const lastGood = document.createElement("p");
            lastGood.innerText = `last checked: ${cupon.lastGood}`;
            cuponElement.appendChild(lastGood);

            Element.appendChild(cuponElement);
        });
    }).catch(err => console.error(err));
}