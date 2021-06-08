const amount1 = document.getElementById("original-currency-amount");
const amount2 = document.getElementById("new-currency-amount");
const selectCurrencyFrom = document.getElementById("original-country");
const selectCurrencyTo = document.getElementById("new-country")
const isoCode = document.querySelectorAll('.currency-unit')
const currencySymbols = document.querySelectorAll('.currency-symbol')

let countryCurrencyInfo;
let exchRates;
const key = "NXNowPtoA5EpnL7OogTxHleX";
const baseurl = "https://www1.oanda.com/rates/api/v2/rates/spot.json";

window.onload = function(e) {
    const baseurl1 = "iso_currency_codes.json";    

    fetch(baseurl1)
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


        currencyTo.onfocus = function() {
        }

        selectCurrencyFrom.addEventListener(
            "change",
            (e) => {
                selectionChange(e.target, url, isoCode[0].value,selectCurrencyTo, currencySymbols[0], amount2.value, exchRates.quotes[0].midpoint, upDateSelects, fetchData, convertToOtherCurrency)
                /*
                url = ''
                isoCode[0].value = upDateSelects(e.target, currencySymbols[0])
                url = `${baseurl}?api_key=${key}&base=${isoCode[0].value}`
                if (!selectCurrencyTo.value) { return }
                fetchData(url += `&quote=${isoCode[1].value}`)
                amount2.value = convertToOtherCurrency(e.target, exchRates.quotes[0].midpoint)
                */
            }
        );
        selectCurrencyTo.addEventListener(
            "change",
            (e) => {
                selectionChange(e.target, url, isoCode[1].value,selectCurrencyFrom, currencySymbols[1], amount1.value, exchRates.quotes[0].midpoint, upDateSelects, fetchData, convertToOtherCurrency)
                /*
                url = url && url.slice(0, url.indexOf("&") + 9)                
                isoCode[1].value = upDateSelects(e.target, currencySymbols[1])
                if (!selectCurrencyFrom.value) {
                    selectCurrencyFrom.focus()
                    return
                }
                fetchData(url += `&quote=${isoCode[1].value}`)
                amount1.value = convertToOtherCurrency(e.target, exchRates.quotes[0].midpoint)
                */
            }
        )

        function selectionChange(target, url, code, selection, symbol, amount, quotes, upDate, fetch, ctoc) {
            url = (target === selectCurrencyTo && url) ? url.slice(0, url.indexOf('&') + 9) : ''
            code = upDate(target, symbol)
            url = url ? url : `${baseurl}?api_key=${key}&base=${code}`
            if (!selection.value) {
                selection.focus()
                return
            }
            fetch(url += `&quote=${code}`)
            amount = ctoc(target, quotes)
        }

        function upDateSelects(select, symbol) {
            let a = countryCurrencyInfo
            let isoCode
        
            a.forEach(a => {
                for (let j in a.name) {
                    if (select.value.toLowerCase() === a.name[j].toLowerCase()) {
                        isoCode = a.iso_currency_code
                        symbol.value = a.symbol
                    }
                }
            })
            return isoCode;
        }

        
        function fetchData(url1) {
            fetch(url1)
            .then(response => response.json())
            .then(json => exchRates = json)
            .catch(err => console.log(`Your request to ${url} failed due to ${err.message}`))
            populateRate()
        }
        
        const quotes = exchRates.quotes[0].midpoint

        amount1.onfocus = function(e) {
            e.target.value = 1;
        }
            
        amount2.onfocus = function(e) {
            e.target.value = 1;
        }
        
        amount1.addEventListener(
            'change',
            (e) => {
                if (quotes) {
                    amount2.value = convertAmount(e.target, quotes, convertToOtherCurrency)
                }
            }
        )
        
        amount2.addEventListener(
            'change',
            (e) => {
                if (quotes) {
                    amount1.value = convertAmount(e.target, quotes, convertToOtherCurrency)
                }
            }
        )
        
        amount1.addEventListener(
            'blur',
            (e) => {
                if (quotes) {
                    amount2.value = convertAmount(e.target, quotes, convertToOtherCurrency)
                }
            }
        )
        
        amount2.addEventListener(
            'blur',
            (e) => {
                if (quotes) {
                    amount1.value = convertAmount(e.target, quotes, convertToOtherCurrency)
                }
            }
        )
        
        function convertToOtherCurrency(a, rpd) {
            if (a != amount1) {
                return a.value / rpd 
            }
            return a.value * rpd
        }
        
        function convertAmount(a, rpd, exchRate) {
            const input = parseFloat(a)
        
            if (!input) {
                if (!a) {
                    showError();
                    return
                }
            }
            const output = exchRate(input, rpd).toFixed(2)
            console.log(output)
            return output
        }
}