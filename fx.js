const amount1 = document.getElementById("original-currency-amount");
const amount2 = document.getElementById("new-currency-amount");
//const errorOutput = document.querySelector(".error-output");
const selectCurrencyFrom = document.getElementById("original-country");
const selectCurrencyTo = document.getElementById("new-country")
const currencyUnits = document.querySelectorAll('.currency-unit')
const currencySymbols = document.querySelectorAll('.currency-symbol')
/*
window.onload = function(e) {
    let countryCurrencyInfo;
    let exchRates;

    async function fetchData(url) {
            let response = await fetch(url);
            if(!response.ok) {
                displayHttpError();
            }else {
                return await response.json();
            }
    }

    let m = async () => {
        let ulrCurrency = "iso_currency_codes.json";
        let urlRates = "exchange_rates.json";

        let cy = fetchData(ulrCurrency);
        let rt = fetchData(urlRates);
        let value = await Promise.all([cy, rt]);
        countryCurrencyInfo = value[0];
        exchRates = value[1];
    }

    m();

    initialize();

    function initialize() {
        All MY CODES GOES HERE...
    }

    function displayHttpError() {
        const h1 = document.createElement("h1")
        document.body.appendChild(h1);
        h1.innerHTML = `Status: ${response.status}. The fetch failed due to ${response.message}`
    }
}

*/

//                                    OR
/*
window.onload = function(evt) {
    let countryCurrencyInfo;
    let exchRates;
    let ulr = ["iso_currency_code.json", "exchange_rates.json"];

    let arr = url.map(url => fetchData(url));

    function fetchData(data) {
        fetch(url[i])
        .then(result => result.json())
        .then(json => json)
        .catch(err => console.log(err.message))

    }        

    countryCurrencyInfo = arr[0];
    exchRates = arr[1]

    initialize()

    function initialize() {
        ALL MY CODES GOES HERE...
    }
}

DO NOT FORGET TO WRAP THE REST OF THE CODE AFTER HERE IN A FUNCTION CALLED initialize().
*/
const countryData = {countries:["Afghanistan","Albania","Algeria"]};

const countryCurrencyInfo =  [
    {
        "name":["Abkhazia", "Russia", "South Ossetia"],
        "iso_currency_code":"RUB",
        "currency":"Russian Ruble",
        "symbol":"₽"
    },
    {
        "name":["Afghanistan"],
        "iso_currency_code":"AFN",
        "currency":"Afghan afghani",
        "symbol":"؋"
    },
    {
        "name":[
            "Akrotiri and Dhekelia",
            "Andorra",
            "Austria",
            "Belgium",
            "Cyprus",
            "Estonia",
            "Finland",
            "France",
            "Germany",
            "Greece",
            "Ireland",
            "Italy",
            "Kosovo",
            "Lativia",
            "Luthuania",
            "Luxemburg",
            "Monaco",
            "Montenegro",
            "Netherlands",
            "Portugal",
            "San Marino",
            "Slovakia",
            "Slovenia",
            "Spain",
            "Holy See (Vatican City)"
        ],
        "iso_currency_code":"EUR",
        "currency":"Euro",
        "symbol":"€"
    },
    {
        "name":["Albania"],
        "iso_currency_code":"ALL",
        "currency":"Albanian lek",
        "symbol":"L"
    },
    {
        "name":[
            "Alderney",
            "Guernsey",
            "Isle of Man",
            "Jersey",
            "United Kingdom"
        ],
        "iso_currency_code":"GBP",
        "currency":"British pound",
        "symbol":"£"
    },
    {
        "name":["Algeria"],
        "iso_currency_code":"DZD",
        "currency":"Algerian dinar",
        "symbol":"د.ج"
    },
    {
        "name":["Angola"],
        "iso_currency_code":"AOA",
        "currency":"Angolan kwanza",
        "symbol":"Kz"
    },
    {
        "name":[
            "Anguilla",
            "Antigua and Barbuda",
            "Dominica",
            "Grenada",
            "Montserrat",
            "Saint Kitts and Nevis",
            "Saint Lucia",
            "Saint Vincent and the Grenadines"
        ],
        "iso_currency_code":"XCD",
        "currency":"Eastern Caribbean dollar",
        "symbol":"$"
    },
    {
        "name":["Argentina"],
        "iso_currency_code":"ARS",
        "currency":"Argentine peso",
        "symbol":"$"
    },
    {
        "name":["Armenia","Artsakh"],
        "iso_currency_code":"AMD",
        "currency":"Armenian dram",
        "symbol":"դր."
    },
    {
        "name":["Aruba"],
        "iso_currency_code":"AWG",
        "currency":"Aruban florin",
        "symbol":"ƒ"
    },
    {
        "name":["Ascension Island"],
        "iso_currency_code":"SHP",
        "currency":"Saint Helena Pound",
        "symbol":"£"
    },
    {
        "name":["Australia","Nauru","Tuvalu"],
        "iso_currency_code":"AUD",
        "currency":"Australian Dollar",
        "symbol":"$"
    },
    {
        "name":["Azerbaijan"],
        "iso_currency_code":"AZN",
        "currency":"Azerbaijani manat",
        "symbol":"₼"
    },
    {
        "name":["Bahamas"],
        "iso_currency_code":"BSD",
        "currency":"Bahamian dollar",
        "symbol":"$"
    },
    {
        "name":["Bahrain"],
        "iso_currency_code":"BHD",
        "currency":"Bahraini dinar",
        "symbol":".د.ب"
    },
    {
        "name":["Bangladesh"],
        "iso_currency_code":"BDT",
        "currency":"Bangladeshi taka",
        "symbol":"৳"
    },
    {
        "name":["Barbados"],
        "iso_currency_code":"BBD",
        "currency":"Barbadian dollar",
        "symbol":"$"
    },
    {
        "name":["Belarus"],
        "iso_currency_code":"BYR",
        "currency":"Belarusian ruble",
        "symbol":"Br"
    },
    {
        "name":["Belize"],
        "iso_currency_code":"BZD",
        "currency":"Belize dollar",
        "symbol":"$"
    },
    {
        "name":[
            "Benin",
            "Burkina Faso",
            "Côte d'Ivoire",
            "Guinea-Bissau",
            "Mali",
            "Niger",
            "Senegal",
            "Togo"
        ],
        "iso_currency_code":"XOF",
        "currency":"West African CFA franc",
        "symbol":"Fr"
    },
    {
        "name":["Bhutan"],
        "iso_currency_code":"BTN",
        "currency":"Bhutanese ngultrum",
        "symbol":"Nu."
    },
    {
        "name":["Bolivia"],
        "iso_currency_code":"BOB",
        "currency":"Bolivian boliviano",
        "symbol":"Bs."
    },
    {
        "name":[
            "Bonaire",
            "British Indian Ocean Territory",
            "British Virgin Islands",
            "East Timor",
            "Ecuador",
            "El Salvador",
            "Marshall Islands",
            "Micronesia",
            "Saba",
            "Sint Eustatius",
            "Turks and Caicos Islands",
            "United States of America"
        ],
        "iso_currency_code":"USD",
        "currency":"United State Dollars",
        "symbol":"$"
    },
    {
        "name":["Sint Maarten"],
        "iso_currency_code":"ANG",
        "currency":"Netherlands Antillean guilder",
        "symbol":"ƒ"
    },
    {
        "name":["Bosnia and Herzegovina"],
        "iso_currency_code":"BAM",
        "currency":"Bosnia and Herzegovina convertible mark",
        "symbol":"КМ"
    },
    {
        "name":["Bulgaria"],
        "iso_currency_code":"BGN",
        "currency":"Bulgarian lev",
        "symbol":"лв."
    },
    {
        "name":["Burundi"],
        "iso_currency_code":"BIF",
        "currency":"Burundian franc",
        "symbol":"Fr"
    },
    {
        "name":["Bermuda"],
        "iso_currency_code":"BMD",
        "currency":"Bermudian dollar",
        "symbol":"$"
    },
    {
        "name":["Brunei"],
        "iso_currency_code":"BND",
        "currency":"Brunei dollar",
        "symbol":"$"
    },
    {
        "name":["Brazil"],
        "iso_currency_code":"BRL",
        "currency":"Brazilian real",
        "symbol":"R$"
    },
    {
        "name":["Botswana"],
        "iso_currency_code":"BWP",
        "currency":"Botswana pula",
        "symbol":"P"
    },
    {
        "name":["Canada"],
        "iso_currency_code":"CAD",
        "currency":"Canadian Dollar",
        "symbol":"$"
    },
    {
        "name":["Democratic Republic of the Congo"],
        "iso_currency_code":"CDF",
        "currency":"Congolese franc",
        "symbol":"Fr"
    },
    {
        "name":["Liechtenstein","Switzerland"],
        "iso_currency_code":"CHF",
        "currency":"Swiss franc",
        "symbol":"Fr."
    },
    {
        "name":["Chile"],
        "iso_currency_code":"CLP",
        "currency":"Chilean peso",
        "symbol":"$"
    },
    {
        "name":["China"],
        "iso_currency_code":"CNY",
        "currency":"Chinese yuan",
        "symbol":"¥ "
    },
    {
        "name":["Colombia"],
        "iso_currency_code":"COP",
        "currency":"Colombian peso",
        "symbol":"$"
    },
    {
        "name":["Costa Rica"],
        "iso_currency_code":"CRC",
        "currency":"Costa Rican colón",
        "symbol":"₡"
    },
    {
        "name":["Cuba"],
        "iso_currency_code":"CUP",
        "currency":"Cuban peso",
        "symbol":"$"
    },
    {
        "name":["Cabo Verde"],
        "iso_currency_code":"CVE",
        "currency":"Cape Verdean escudo",
        "symbol":"Esc or $"
    },
    {
        "name":["Czechia (Czech Republic)"],
        "iso_currency_code":"CZK",
        "currency":"Czech koruna",
        "symbol":"Kč"
    },
    {
        "name":["Djibouti"],
        "iso_currency_code":"DJF",
        "currency":"Djiboutian franc",
        "symbol":"Fr"
    },
    {
        "name":["Denmark","Faroe Islands"],
        "iso_currency_code":"DKK",
        "currency":"Danish krone",
        "symbol":"kr"
    },
    {
        "name":["Dominican Republic"],
        "iso_currency_code":"DOP",
        "currency":"Dominican peso",
        "symbol":"RD$"
    },
    {
        "name":["Egypt"],
        "iso_currency_code":"EGP",
        "currency":"Egyptian pound",
        "symbol":"£ or ج.م"
    },
    {
        "name":["Eritrea"],
        "iso_currency_code":"ERN",
        "currency":"Eritrean nakfa",
        "symbol":"Nfk"
    },
    {
        "name":["Ethiopia"],
        "iso_currency_code":"ETB",
        "currency":"Ethiopian birr",
        "symbol":"Br"
    },
    {
        "name":["Fiji"],
        "iso_currency_code":"FJD",
        "currency":"Fijian dollar",
        "symbol":"$"
    },
    {
        "name":["Falkland Islands"],
        "iso_currency_code":"FKP",
        "currency":"Falkland Islands pound",
        "symbol":"£"
    },
    {
        "name":["Georgia"],
        "iso_currency_code":"GEL",
        "currency":"Georgian lari",
        "symbol":"₾"
    },
    {
        "name":["Ghana"],
        "iso_currency_code":"GHS",
        "currency":"Ghanaian cedi",
        "symbol":"₵"
    },
    {
        "name":["Gibraltar"],
        "iso_currency_code":"GIP",
        "currency":"Gibralta",
        "symbol":"£"
    },
    {
        "name":["Gambia"],
        "iso_currency_code":"GMD",
        "currency":"Gambian dalasi",
        "symbol":"D"
    },
    {
        "name":["Guinea"],
        "iso_currency_code":"GNF",
        "currency":"Guinea franc",
        "symbol":"Fr"
    },
    {
        "name":["Guatemala"],
        "iso_currency_code":"GTQ",
        "currency":"Guatemalan quetzal",
        "symbol":"Q"
    },
    {
        "name":["Guyana"],
        "iso_currency_code":"GYD",
        "currency":"Guyanese dollar",
        "symbol":"$"
    },
    {
        "name":["Hong Kong"],
        "iso_currency_code":"HKD",
        "currency":"Hong Kong Dollar",
        "symbol":"$"
    },
    {
        "name":["Honduras"],
        "iso_currency_code":"HNL",
        "currency":"Honduran lempira",
        "symbol":"L"
    },
    {
        "name":["Croatia"],
        "iso_currency_code":"HRK",
        "currency":"Croatian kuna",
        "symbol":"kn"
    },
    {
        "name":["Haiti"],
        "iso_currency_code":"HTG",
        "currency":"Haitian gourde",
        "symbol":"G"
    },
    {
        "name":["Hungary"],
        "iso_currency_code":"HUF",
        "currency":"Hungarian forint",
        "symbol":"Ft"
    },
    {
        "name":["Indonesia"],
        "iso_currency_code":"IDR",
        "currency":"Indonesian rupiah",
        "symbol":"Rp"
    },
    {
        "name":["Israel"],
        "iso_currency_code":"ILS",
        "currency":"Israeli new shekel",
        "symbol":"₪"
    },
    {
        "name":["India"],
        "iso_currency_code":"INR",
        "currency":"Indian rupee",
        "symbol":"₹"
    },
    {
        "name":["Iraq"],
        "iso_currency_code":"IQD",
        "currency":"Iraqi dinar",
        "symbol":"ع.د"
    },
    {
        "name":["Iran"],
        "iso_currency_code":"IRR",
        "currency":"Iranian rial",
        "symbol":"﷼"
    },
    {
        "name":["Iceland"],
        "iso_currency_code":"ISK",
        "currency":"Icelandic króna",
        "symbol":"Kr"
    },
    {
        "name":["Jamaica"],
        "iso_currency_code":"JMD",
        "currency":"Jamaican dollar",
        "symbol":"$"
    },
    {
        "name":["Jordan","Palestine State"],
        "iso_currency_code":"JOD",
        "currency":"Jordanian dinar",
        "symbol":"د.ا"
    },
    {
        "name":["Japan"],
        "iso_currency_code":"JPY",
        "currency":"Japanese yen",
        "symbol":"¥"
    },
    {
        "name":["Kenya"],
        "iso_currency_code":"KES",
        "currency":"Kenyan shilling",
        "symbol":"Sh"
    },
    {
        "name":["Kyrgyzstani"],
        "iso_currency_code":"KGS",
        "currency":"Kyrgyzstani som",
        "symbol":"с"
    },
    {
        "name":["Cambodia"],
        "iso_currency_code":"KHR",
        "currency":"Riel",
        "symbol":"៛"
    },
    {
        "name":["Comoros"],
        "iso_currency_code":"KMF",
        "currency":"Comorian franc",
        "symbol":"Fr"
    },
    {
        "name":["North Korea"],
        "iso_currency_code":"KPW",
        "currency":"North Korea won",
        "symbol":"₩"
    },
    {
        "name":["South Korea"],
        "iso_currency_code":"KRW",
        "currency":"South Korean won",
        "symbol":"₩"
    },
    {
        "name":["Kuwait"],
        "iso_currency_code":"KWD",
        "currency":"Kuwaiti dinar",
        "symbol":"د.ك"
    },
    {
        "name":["Cayman Islands"],
        "iso_currency_code":"KYD",
        "currency":"Cayman Islands dollar",
        "symbol":"$"
    },
    {
        "name":["Kazakhstan"],
        "iso_currency_code":"KZT",
        "currency":"Kazakhstani tenge",
        "symbol":"₸"
    },
    {
        "name":["Laos"],
        "iso_currency_code":"LAK",
        "currency":"Lao kip",
        "symbol":"₭"
    },
    {
        "name":["Lebanon"],
        "iso_currency_code":"LBP",
        "currency":"Lebanese pound",
        "symbol":"ل.ل"
    },
    {
        "name":["Sri Lanka"],
        "iso_currency_code":"LKR",
        "currency":"Sri Lankan rupee",
        "symbol":"Rs"
    },
    {
        "name":["Liberia"],
        "iso_currency_code":"LRD",
        "currency":"Liberian dollar",
        "symbol":"$"
    },
    {
        "name":["Lesotho"],
        "iso_currency_code":"LSL",
        "currency":"Lesotho loti",
        "symbol":"L"
    },
    {
        "name":["Libya"],
        "iso_currency_code":"LYD",
        "currency":"Libyan dinar",
        "symbol":"ل.د"
    },
    {
        "name":["Morocco"],
        "iso_currency_code":"MAD",
        "currency":"Moroccan dirham",
        "symbol":"د.م."
    },
    {
        "name":["Moldova"],
        "iso_currency_code":"MDL",
        "currency":"Moldovan leu",
        "symbol":"L"
    },
    {
        "name":["Madagascar"],
        "iso_currency_code":"MGA",
        "currency":"Malagasy ariary",
        "symbol":"Ar"
    },
    {
        "name":["North Macedonia"],
        "iso_currency_code":"MKD",
        "currency":"Macedonian denar",
        "symbol":"ден"
    },
    {
        "name":["Myanmar"],
        "iso_currency_code":"MMK",
        "currency":"Burmese kyat",
        "symbol":"K"
    },
    {
        "name":["Mongolia"],
        "iso_currency_code":"MNT",
        "currency":"Mongolian tögrög",
        "symbol":"₮"
    },
    {
        "name":["Macau"],
        "iso_currency_code":"MOP",
        "currency":"Macanese pataca",
        "symbol":"MOP$"
    },
    {
        "name":["Mauritania"],
        "iso_currency_code":"MRU",
        "currency":"Mauritanian ouguiya",
        "symbol":"UM"
    },
    {
        "name":["Mauritius"],
        "iso_currency_code":"MUR",
        "currency":"Mauritian rupee",
        "symbol":"Rs"
    },
    {
        "name":["Maldives"],
        "iso_currency_code":"MVR",
        "currency":"Maldivian rufiyaa",
        "symbol":".ރ"
    },
    {
        "name":["Malawi"],
        "iso_currency_code":"MWK",
        "currency":"Malawian kwacha",
        "symbol":"MK"
    },
    {
        "name":["Mexico"],
        "iso_currency_code":"MXN",
        "currency":"Mexican peso",
        "symbol":"$"
    },
    {
        "name":["Mozambique"],
        "iso_currency_code":"MZN",
        "currency":"Mozambican metical",
        "symbol":"MT"
    },
    {
        "name":["Namibia"],
        "iso_currency_code":"NAD",
        "currency":"Namibian dollar",
        "symbol":"$"
    },
    {
        "name":["Nigeria"],
        "iso_currency_code":"NGN",
        "currency":"Nigerian naira",
        "symbol":"₦"
    },
    {
        "name":["Nicaragua"],
        "iso_currency_code":"NIO",
        "currency":"Nicaraguan córdoba",
        "symbol":"C$"
    },
    {
        "name":["Norway"],
        "iso_currency_code":"NOK",
        "currency":"Norwegian krone",
        "symbol":"kr"
    },
    {
        "name":["Nepal"],
        "iso_currency_code":"NPR",
        "currency":"Nepalese rupee",
        "symbol":"रू"
    },
    {
        "name":["Cooks Island","New Zealand","Niue"],
        "iso_currency_code":"NZD",
        "currency":"New Zealand dollar",
        "symbol":"$"
    },
    {
        "name":["Oman"],
        "iso_currency_code":"OMR",
        "currency":"Omani rial",
        "symbol":"ر.ع."
    },
    {
        "name":["Panama"],
        "iso_currency_code":"PAB",
        "currency":"Panamanian balboa",
        "symbol":"B/."
    },
    {
        "name":["Peru"],
        "iso_currency_code":"PEN",
        "currency":"Peruvian sol",
        "symbol":"S/."
    },
    {
        "name":["Papua New Guinean"],
        "iso_currency_code":"PGK",
        "currency":"Papua New Guinean kina",
        "symbol":"K"
    },
    {
        "name":["Philippines"],
        "iso_currency_code":"PHP",
        "currency":"Philippine peso",
        "symbol":"₱"
    },
    {
        "name":["Pakistan"],
        "iso_currency_code":"PKR",
        "currency":"Pakistani rupee",
        "symbol":"Rs"
    },
    {
        "name":["Poland"],
        "iso_currency_code":"PLN",
        "currency":"Polish złoty",
        "symbol":"zł"
    },
    {
        "name":["Paraguay"],
        "iso_currency_code":"PYG",
        "currency":"Paraguayan guaraní",
        "symbol":"₲"
    },
    {
        "name":["Qatar"],
        "iso_currency_code":"QAR",
        "currency":"Qatari riyal",
        "symbol":"ر.ق"
    },
    {
        "name":["Romania"],
        "iso_currency_code":"RON",
        "currency":"Romanian leu",
        "symbol":"lei"
    },
    {
        "name":["Serbia"],
        "iso_currency_code":"RSD",
        "currency":"Serbian dinar",
        "symbol":"дин."
    },
    {
        "name":["Rwanda"],
        "iso_currency_code":"RWF",
        "currency":"Rwandan franc",
        "symbol":"Fr"
    },
    {
        "name":["Saudi Arabia"],
        "iso_currency_code":"SAR",
        "currency":"Saudi riyal",
        "symbol":"﷼"
    },
    {
        "name":["Solomon Islands"],
        "iso_currency_code":"SBD",
        "currency":"Solomon Islands dollar",
        "symbol":"$"
    },
    {
        "name":["Seychelles"],
        "iso_currency_code":"SCR",
        "currency":"Seychellois rupee",
        "symbol":"Rs"
    },
    {
        "name":["Singapore"],
        "iso_currency_code":"SGD",
        "currency":"Singapore dollar",
        "symbol":"$"
    },
    {
        "name":["Sweden"],
        "iso_currency_code":"SEK",
        "currency":"Swedish krona",
        "symbol":"Kr"
    },
    {
        "name":["Sudan"],
        "iso_currency_code":"SGD",
        "currency":"Sudanese pound",
        "symbol":"ج.س."
    },
    {
        "name":["Sierra Leone"],
        "iso_currency_code":"SLL",
        "currency":"Sierra Leonean leone",
        "symbol":"Le"
    },
    {
        "name":["Somalia"],
        "iso_currency_code":"SOS",
        "currency":"Somali shilling",
        "symbol":"Sh"
    },
    {
        "name":["Suriname"],
        "iso_currency_code":"SRD",
        "currency":"Surinamese dollar",
        "symbol":"$"
    },
    {
        "name":["South Sudan"],
        "iso_currency_code":"SSP",
        "currency":"South Sudanese pound",
        "symbol":"£"
    },
    {
        "name":["São Tomé and Príncipe"],
        "iso_currency_code":"STN",
        "currency":"São Tomé and Príncipe dobra",
        "symbol":"Db"
    },
    {
        "name":["El Savador"],
        "iso_currency_code":"SVC",
        "currency":"El savador colon",
        "symbol":"₡"
    },
    {
        "name":["Syria"],
        "iso_currency_code":"SYP",
        "currency":"Syrian pound",
        "symbol":"ل.س"
    },
    {
        "name":["Eswatini (fmr. 'Swaziland')"],
        "iso_currency_code":"SZL",
        "currency":"Swazi lilangeni",
        "symbol":"L"
    },
    {
        "name":["Thailand"],
        "iso_currency_code":"THB",
        "currency":"Thai baht",
        "symbol":"฿"
    },
    {
        "name":["Tajikistan"],
        "iso_currency_code":"TJS",
        "currency":"Tajikistani somoni",
        "symbol":"SM"
    },
    {
        "name":["Turkmenistan"],
        "iso_currency_code":"TMT",
        "currency":"Turkmenistan manat",
        "symbol":"m"
    },
    {
        "name":["Tunisia"],
        "iso_currency_code":"TND",
        "currency":"Tunisian dinar",
        "symbol":"د.ت"
    },
    {
        "name":["Tonga"],
        "iso_currency_code":"TOP",
        "currency":"Tongan paʻanga",
        "symbol":"T$"
    },
    {
        "name":["Northern Cyprus","Turkey"],
        "iso_currency_code":"TRY",
        "currency":"Turkish lira",
        "symbol":"₺"
    },
    {
        "name":["Trinidad and Tobago"],
        "iso_currency_code":"TTD",
        "currency":"Trinidad and Tobago dollar",
        "symbol":"$"
    },
    {
        "name":["Taiwan"],
        "iso_currency_code":"TWD",
        "currency":"New Taiwan dollar",
        "symbol":"$"
    },
    {
        "name":["Tanzania"],
        "iso_currency_code":"TZS",
        "currency":"Tanzanian shilling",
        "symbol":"Sh"
    },
    {
        "name":["Ukrain"],
        "iso_currency_code":"UAH",
        "currency":"Ukrainian hryvnia",
        "symbol":"₴"
    },
    {
        "name":["Uganda"],
        "iso_currency_code":"UGX",
        "currency":"Ugandan shilling",
        "symbol":"Sh"
    },
    {
        "name":["Uruguay"],
        "iso_currency_code":"UYU",
        "currency":"peso Uruguayo",
        "symbol":"$"
    },
    {
        "name":["Uzbekistan"],
        "iso_currency_code":"UZS",
        "currency":"Uzbekistani soʻm",
        "symbol":"сўм"
    },
    {
        "name":["Venezuela"],
        "iso_currency_code":"VEF",
        "currency":"Venezuelan bolívar soberano",
        "symbol":"Bs."
    },
    {
        "name":["Vietnam"],
        "iso_currency_code":"VND",
        "currency":"Vietnamese đồng",
        "symbol":"₫"
    },
    {
        "name":["Vanuatu"],
        "iso_currency_code":"VUV",
        "currency":"Vanuatu vatu",
        "symbol":"Vt"
    },
    {
        "name":["Samoa"],
        "iso_currency_code":"WST",
        "currency":"Samoan tālā",
        "symbol":"T"
    },
    {
        "name":[
            "Cameroon",
            "Central African Republic",
            "Chad",
            "Equitorial Guinea",
            "Gabon"
        ],
        "iso_currency_code":"XAF",
        "currency":"Central African CFA franc",
        "symbol":"Fr"
    },
    {
        "name":["INTERNATIONAL MONETARY FUND (IMF)"],
        "iso_currency_code":"XDR",
        "currency":"SDR",
        "symbol":""
    },
    {
        "name":["French Polynesia","New Caledonia","Wallis and Futuna"],
        "iso_currency_code":"XPF",
        "currency":"CFP franc",
        "symbol":"₣"
    },
    {
        "name":["Yemen"],
        "iso_currency_code":"YER",
        "currency":"Yemeni rial",
        "symbol":"ر.ي"
    },
    {
        "name":["South Africa"],
        "iso_currency_code":"ZAR",
        "currency":"South African rand",
        "symbol":"R"
    },
    {
        "name":["Zambia"],
        "iso_currency_code":"ZMW",
        "currency":"Zambian kwacha",
        "symbol":"ZK"
    },
    {
        "name":["Zimbabwe"],
        "iso_currency_code":"ZWL",
        "currency":"Zimbabwean Dollar",
        "symbol":"$"
    },
    {
        "name":["United Arab Emirate"],
        "iso_currency_code":"AED",
        "currency":"United Arab Emirates dirham",
        "symbol":"د.إ"
    }
];

const fx = {
       "base_currency":"USD",
       "time":"03-22-2019 10:00:02",
       "timestamp":1553248802,
       "rates":{  
          "AED":3.6733,
          "AFN":76.05,
          "ALL":110.1196,
          "AMD":486.9206,
          "ANG":1.8392,
          "AOA":316.854,
          "ARS":41.025,
          "AUD":1.4099,
          "AWG":1.801,
          "AZN":1.705,
          "BAM":1.7205,
          "BBD":1.9953,
          "BDT":84.232,
          "BGN":1.73,
          "BHD":0.3771,
          "BIF":1809.95,
          "BMD":1,
          "BND":1.3506,
          "BOB":6.9041,
          "BRL":3.7927,
          "BSD":1.0005,
          "BTN":69.0055,
          "BWP":10.656,
          "BYR":19600,
          "BZD":2.0197,
          "CAD":1.3375,
          "CDF":1630,
          "CHF":0.9964,
          "CLP":667.4036,
          "CNY":6.7131,
          "COP":3089,
          "CRC":598.295,
          "CUP":26.5,
          "CVE":97.1965,
          "CZK":22.7319,
          "DJF":177.72,
          "DKK":6.6003,
          "DOP":50.715,
          "DZD":118.825,
          "EGP":17.252,
          "ERN":14.9997,
          "ETB":28.523,
          "EUR":0.8845,
          "FJD":2.1228,
          "FKP":0.76,
          "GBP":0.763,
          "GEL":2.685,
          "GHS":5.232,
          "GIP":0.76,
          "GMD":49.665,
          "GNF":9142.9029,
          "GTQ":7.7052,
          "GYD":208.455,
          "HKD":7.8471,
          "HNL":24.496,
          "HRK":6.5618,
          "HTG":82.8325,
          "HUF":279.337,
          "IDR":14187.55,
          "ILS":3.6125,
          "INR":68.98,
          "IQD":1196,
          "IRR":42105.0001,
          "ISK":118.77,
          "JMD":125.0002,
          "JOD":0.709,
          "JPY":110.5194,
          "KES":100.6989,
          "KGS":69.7563,
          "KHR":4003.9502,
          "KMF":432.7006,
          "KPW":900.0853,
          "KRW":1133.5973,
          "KWD":0.3035,
          "KYD":0.8353,
          "KZT":378.4803,
          "LAK":8605.297,
          "LBP":1513.8497,
          "LKR":178.1502,
          "LRD":162.125,
          "LSL":14.3802,
          "LYD":1.388,
          "MAD":9.6189,
          "MDL":17.307,
          "MGA":3563.2112,
          "MKD":54.1195,
          "MMK":1533.5499,
          "MNT":2630.9246,
          "MOP":8.1017,
          "MUR":34.5265,
          "MVR":15.492,
          "MWK":723.985,
          "MXN":18.9725,
          "MYR":4.0606,
          "MZN":63.2301,
          "NAD":14.3801,
          "NGN":361.84,
          "NIO":32.9555,
          "NOK":8.5262,
          "NPR":109.955,
          "NZD":1.4558,
          "OMR":0.385,
          "PAB":1.0005,
          "PEN":3.2879,
          "PGK":3.3755,
          "PHP":52.5155,
          "PKR":140.1702,
          "PLN":3.7946,
          "PYG":6162.7502,
          "QAR":3.641,
          "RON":4.206,
          "RSD":104.3399,
          "RUB":64.0834,
          "RWF":903.735,
          "SAR":3.75,
          "SBD":8.0557,
          "SCR":13.6745,
          "SDG":47.7279,
          "SEK":9.2607,
          "SGD":1.351,
          "SHP":1.3209,
          "SLL":8875.0003,
          "SOS":581.9998,
          "SRD":7.458,
          "SVC":8.7708,
          "SYP":515.0002,
          "SZL":14.269,
          "THB":31.69,
          "TJS":9.4613,
          "TMT":3.5,
          "TND":3.0197,
          "TOP":2.2572,
          "TRY":5.5488,
          "TTD":6.7911,
          "TWD":30.827,
          "TZS":2344.103,
          "UAH":27.1951,
          "UGX":3708.5025,
          "USD":1,
          "UYU":33.24,
          "UZS":8396.1022,
          "VEF":9.9875,
          "VND":23201.5,
          "VUV":113.8588,
          "WST":2.5987,
          "XAF":577.0605,
          "XCD":2.7033,
          "XDR":0.7187,
          "XOF":577.0602,
          "XPF":104.9098,
          "YER":250.3504,
          "ZAR":14.3397,
          "ZMW":12.029,
          "ZWL":322.355
       }
};
//function initialize() {All code below goes here...}

const d = fx.rates;
let ratesPerDollar1;
let ratesPerDollar2;

selectCurrencyFrom.addEventListener(
    "change",
    (e) => {
        ratesPerDollar1 = upDateSelects(e.target, currencyUnits[0], currencySymbols[0])
        if (!selectCurrencyTo.value) {
            return
        }
        if (!amount2.value) { return }
        console.log(amount2.value)
        console.log(ratesPerDollar1)
        console.log(ratesPerDollar2)
        amount1.value = convertToOtherCurrency(amount2.value, ratesPerDollar2, ratesPerDollar1)
    }
);

selectCurrencyTo.addEventListener("change",
    (e) => {
        ratesPerDollar2 = upDateSelects(e.target, currencyUnits[1], currencySymbols[1]);
        if (!selectCurrencyFrom.value) { return }
        if (!amount1.value) { return }
        amount2.value = convertToOtherCurrency(amount1.value, ratesPerDollar1, ratesPerDollar2);
})

amount1.onfocus = function(e) {
    e.target.value = 1;
}
    
amount2.onfocus = function(e) {
    e.target.value = 1;
}

amount1.addEventListener(
    'change',
    (e) => {
        if (ratesPerDollar1 && ratesPerDollar2) {
            amount2.value = convertAmount(e.target.value, ratesPerDollar1, ratesPerDollar2, convertToOtherCurrency)
        }
    }
)

amount2.addEventListener(
    'change',
    (e) => {
        if (ratesPerDollar1 && ratesPerDollar2) {
            amount1.value = convertAmount(e.target.value, ratesPerDollar2, ratesPerDollar1, convertToOtherCurrency)
        }
    }
)

amount1.addEventListener(
    'blur',
    (e) => {
        if (ratesPerDollar1 && ratesPerDollar2) {
            amount2.value = convertAmount(e.target.value, ratesPerDollar1, ratesPerDollar2, convertToOtherCurrency)
        }
    }
)

amount2.addEventListener(
    'blur',
    (e) => {
        if (ratesPerDollar1 && ratesPerDollar2) {
            amount1.value = convertAmount(e.target.value, ratesPerDollar2, ratesPerDollar1, convertToOtherCurrency)
        }
    }
)

function upDateSelects(select, unit, symbol) {
    let a = countryCurrencyInfo
    //let i = 0
    let rpd

    a.forEach(a => {
        for (let j in a.name) {
            if (select.value.toLowerCase() === a.name[j].toLowerCase()) {
                unit.value = a.iso_currency_code
                symbol.value = a.symbol
                for(let k in d) {
                    if(unit.value === k) {
                        rpd = parseFloat(d[k])
                    }
                }
            }
        }
    })
    /*
    while(i < a.length) {
        for(let j = 0; j < a[i].name.length; j++) {
            if(select.value.toLowerCase() === a[i].name[j].toLowerCase()) {
                unit.value = a[i].iso_currency_code
                symbol.value = a[i].symbol
                for(let k in d) {
                    if(unit.value === k) {
                        rpd = parseFloat(d[k])
                        break
                    }
                }
                break
            }
        }
        i++;
    }
    */
    console.log(unit.value);
    console.log(rpd);
    return rpd;
}

function convertToOtherCurrency(a, rpdd, rpdy) {
    return a * rpdy / rpdd
}

function convertAmount(a, rpdx, rpdy, exchRate) {
    const input = parseFloat(a)

    if (!input) {
        if (!a) {
            showError();
            return
        }
    }
    const output = exchRate(input, rpdx, rpdy).toFixed(2)
    console.log(output)
    return output
}

/*
const exchRates = {
    "meta": {
        "effective_params": {
            "data_set": "OANDA",
            "base_currencies": [
            "EUR"
            ],
            "quote_currencies": [
            "USD"
            ],
            "date_time": "2017-01-01T00:00:00+00:00"
        },
        "endpoint": "spot",
        "request_time": "2017-01-20T03:45:00+00:00",
        "skipped_currency_pairs": []
    },
    "quotes": [
        {
            "base_currency": "EUR",
            "quote_currency": "USD",
            "date_time": "2017-01-01T00:00:00+00:00",
            "bid": "1.05155",
            "ask": "1.05252",
            "midpoint": "1.05204"
        }
    ]
}

const d = exchRates.quotes[0];
let exchange_Rate = 0;

currencyFrom.addEventListener("change", upDateSelects);
currencyTo.addEventListener("change", upDateSelects)

function upDateSelects() {
    let a = countryCurrencyInfo;
    let i = 0;

    while(i < a.length) {
        for(let j = 0; j < a[i].name.length; j++) {
            if(this.value.toLowerCase() === a[i].name[j].toLowerCase()) {
                this.value = `${a[i].currency}, ${a[i].symbol}`;
            }
        }
        i++;
    }
    populateRate();
    return;
}

currencyFrom.onfocus = function() {
    currencyFrom.value = "";
}

currencyTo.onfocus = function() {
    currencyTo.value = "";
}

function populateRate() {
    if(d.midpoint) {

        exchange_Rate = parseFloat(d.midpoint);
        
        exchangeRate.value = exchange_Rate.toFixed(2);
    }
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
    let pre = document.createElement("p");
    pre.innerHTML = ""
    h3.textContent = `Error message: `;
    if(amount.value === "") {
        pre.textContent += "You need to enter the amount you want to convert.";
        amount.focus();
    }
    if(currencyFrom.value === "") {
        pre.textContent +=
        "The country of the currency you wish to convert is a requirement to proceed.";
        if(amount.value) {
            currencyFrom.focus();
        }
    }
    if(currencyTo.value === "") {
        pre.textContent += 
        "The country you wish to convert your money to is required for this calculation to work.";
        if(amount.value && currencyFrom.value) {
            currencyTo.focus();
        }
    }
    pre.style.color = "red"
    outPut.style.display = "none"
    errorOutput.appendChild(h3)
    errorOutput.appendChild(pre)
}
*/