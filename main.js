const amount = document.getElementById("original-currency-amount");
const currencyFrom = document.getElementById("original-currency-unit");
const currencyTo = document.getElementById("new-currency-unit");
const exchangeRate = document.getElementById("exchange-rate");
const outPut = document.getElementById("output-text");
const btn = document.querySelector("button")
const errorOutput = document.querySelector(".error-output");

let countryCurrencyInfo;
let exchRates;
const key = "NXNowPtoA5EpnL7OogTxHleX";
const baseURL = "https://www1.oanda.com/rates/api/v2/rates/spot.json";

window.onload = function(e) {
    const baseURL1 = "iso_currency_codes.json";    

    fetch(baseURL1)
    .then(result => result.json())
    .then(json => {
        console.log(json)
        return countryCurrencyInfo = json})
    .catch(err => console.log(err.message))

    initialize()
}
    function initialize() {
        let url;

        let exchange_Rate = 0;

        currencyFrom.addEventListener("change", upDateSelect);
        currencyTo.addEventListener("change", upDateSelect2)

        function upDateSelect() {
            let a = countryCurrencyInfo;
            let i = 0;
            let iso_code1;

            while(i < a.length) {
                for(let j = 0; j < a[i].name.length; j++) {
                    if(currencyFrom.value.toLowerCase() === a[i].name[j].toLowerCase()) {
                        currencyFrom.value = `${a[i].currency}, ${a[i].symbol}`;
                        iso_code1 = a[i].iso_currency_code;
                    }
                }
                i++;
            }
            console.log(url = `${baseURL}?${key}&base=${iso_code1}`);
            return url = `${baseURL}?api_key=${key}&base=${iso_code1}`;
        }

        function upDateSelect2() {
            let a = countryCurrencyInfo;
            let i = 0;
            let iso_code;

            while(i < a.length) {
                for(let j = 0; j < a[i].name.length; j++) {
                    if(currencyTo.value.toLowerCase() === a[i].name[j].toLowerCase()) {
                        currencyTo.value = `${a[i].currency}, ${a[i].symbol}`;
                        iso_code = a[i].iso_currency_code;
                    }
                }
                i++;
            }
            fetchData(url += `&quote=${iso_code}`);
        }



        currencyFrom.onfocus = function() {
            currencyFrom.value = "";
            url = "";
        }

        currencyTo.onfocus = function() {
            currencyTo.value = "";
            url = url.slice(0, url.indexOf("&") + 9)
        }
        
        function fetchData(url1) {
            fetch(url1)
            .then(response => response.json())
            .then(json => exchRates = json)
            .catch(err => console.log(`Your request to ${url} failed due to ${err.message}`))
            populateRate()
        }

        function populateRate() {
            if(exchRates.quotes[0].midpoint) {

                exchange_Rate = parseFloat(exchRates.quotes[0].midpoint);
                
                exchangeRate.value = exchange_Rate.toFixed(2);
            }
            console.log(exchange_Rate)
            return exchange_Rate;
        }
        function convertAmount() {
            let value;
            let a = amount;
            let b = currencyFrom;
            let c = currencyTo;

        
            if(!exchange_Rate) {
                if(a.value === "" || b.value === "" || c.value === "") {
                    showError();
                    return
                }
            }else {
                value = a.value * exchange_Rate
            }

            if(outPut.style.display === "none") {
                outPut.style.display = "block";
                while(errorOutput.firstChild) {
                    errorOutput.removeChild(errorOutput.firstChild);
                }
            }

            outPut.textContent = "";
            let span1 = document.createElement("span");
            let span3 = document.createElement("span")
            let span2 = document.createElement("span");
            span1.textContent = `${b.value.slice(b.value.indexOf(",") + 1)} ${a.value}`;
            span3.innerHTML = " = ";
            span2.textContent = `${c.value.slice(c.value.indexOf(",") + 1)} ${value.toFixed(2)} `;
            outPut.appendChild(span1);
            outPut.appendChild(span3);
            outPut.appendChild(span2);
        //    outPut.innerHTML = 
        //  `${a.value} ${b.value.slice(0, b.value.indexOf(","))} = ${value} ${c.value.slice(0, c.value.indexOf(","))}`;
        }

        btn.addEventListener("click", convertAmount)

        function showError() {
            while(errorOutput.firstChild) {
                errorOutput.removeChild(errorOutput.firstChild)
            }
            let h3 = document.createElement("h3");
            let list = document.createElement("ul");
            h3.textContent = `Error message: `;
            if(amount.value === "") {
                let listItem1 = document.createElement("li");
                listItem1.textContent = "You need to enter the amount you want to convert.";
                list.appendChild(listItem1);
                amount.focus();
            }
            if(currencyFrom.value === "") {
                let listItem2 = document.createElement("li")
                listItem2.textContent = "The country of the currency you wish to convert is a requirement to proceed.";
                list.appendChild(listItem2);
                if(amount.value) currencyFrom.focus();
            }
            if(currencyTo.value === "") {
                let listItem3 = document.createElement("li")
                listItem3.textContent = "The country you wish to convert your money to is required for this calculation to work."
                list.appendChild(listItem3);
                if(amount.value && currencyFrom.value) currencyTo.focus();
            }
            list.style.color = "red"
            outPut.style.display = "none"
            errorOutput.appendChild(h3)
            errorOutput.appendChild(list)
        }
}