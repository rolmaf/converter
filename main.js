function transferCurrence() {
    let currentValue1 = document.querySelector(".current-1__currency").value;
    let currentValue2 = document.querySelector(".current-2__currency").value;
    let amountCurrentValue1 = document.querySelector(".current-1__amount").value;
    let xhr = new XMLHttpRequest();

    let url = `https://api.exchangerate-api.com/v4/latest/${currentValue1}`;

    xhr.open("GET", url, true);

    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            let res = JSON.parse(xhr.response);
            console.log(res);
            document.querySelector(".current-2__amount").value = res.rates[currentValue2] * amountCurrentValue1;

        };
    };

}



document.querySelector(".current-1__amount").addEventListener("input", transferCurrence);

document.querySelector(".current-1__currency").addEventListener("change", transferCurrence);