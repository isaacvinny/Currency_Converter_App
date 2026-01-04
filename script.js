const currencies = {
  AED: "United Arab Emirates Dirham (AED)",
  AFN: "Afghan Afghani (AFN)",
  ALL: "Albanian Lek (ALL)",
  AMD: "Armenian Dram (AMD)",
  ANG: "Netherlands Antillean Guilder (ANG)",
  AOA: "Angolan Kwanza (AOA)",
  ARS: "Argentine Peso (ARS)",
  AUD: "Australian Dollar (AUD)",
  AWG: "Aruban Florin (AWG)",
  AZN: "Azerbaijani Manat (AZN)",
  BAM: "Bosnia and Herzegovina Convertible Mark (BAM)",
  BBD: "Barbadian Dollar (BBD)",
  BDT: "Bangladeshi Taka (BDT)",
  BGN: "Bulgarian Lev (BGN)",
  BHD: "Bahraini Dinar (BHD)",
  BIF: "Burundian Franc (BIF)",
  BMD: "Bermudian Dollar (BMD)",
  BND: "Brunei Dollar (BND)",
  BOB: "Bolivian Boliviano (BOB)",
  BRL: "Brazilian Real (BRL)",
  BSD: "Bahamian Dollar (BSD)",
  BTN: "Bhutanese Ngultrum (BTN)",
  BWP: "Botswana Pula (BWP)",
  BYN: "Belarusian Ruble (BYN)",
  BZD: "Belize Dollar (BZD)",
  CAD: "Canadian Dollar (CAD)",
  CDF: "Congolese Franc (CDF)",
  CHF: "Swiss Franc (CHF)",
  CLP: "Chilean Peso (CLP)",
  CNY: "Chinese Yuan (CNY)",
  COP: "Colombian Peso (COP)",
  CRC: "Costa Rican Colón (CRC)",
  CUP: "Cuban Peso (CUP)",
  CVE: "Cape Verdean Escudo (CVE)",
  CZK: "Czech Koruna (CZK)",
  DJF: "Djiboutian Franc (DJF)",
  DKK: "Danish Krone (DKK)",
  DOP: "Dominican Peso (DOP)",
  DZD: "Algerian Dinar (DZD)",
  EGP: "Egyptian Pound (EGP)",
  ERN: "Eritrean Nakfa (ERN)",
  ETB: "Ethiopian Birr (ETB)",
  EUR: "Euro (EUR)",
  FJD: "Fijian Dollar (FJD)",
  FKP: "Falkland Islands Pound (FKP)",
  GBP: "British Pound Sterling (GBP)",
  GEL: "Georgian Lari (GEL)",
  GHS: "Ghanaian Cedi (GHS)",
  GIP: "Gibraltar Pound (GIP)",
  GMD: "Gambian Dalasi (GMD)",
  GNF: "Guinean Franc (GNF)",
  GTQ: "Guatemalan Quetzal (GTQ)",
  GYD: "Guyanese Dollar (GYD)",
  HKD: "Hong Kong Dollar (HKD)",
  HNL: "Honduran Lempira (HNL)",
  HRK: "Croatian Kuna (HRK)",
  HTG: "Haitian Gourde (HTG)",
  HUF: "Hungarian Forint (HUF)",
  IDR: "Indonesian Rupiah (IDR)",
  ILS: "Israeli New Shekel (ILS)",
  INR: "Indian Rupee (INR)",
  IQD: "Iraqi Dinar (IQD)",
  IRR: "Iranian Rial (IRR)",
  ISK: "Icelandic Króna (ISK)",
  JMD: "Jamaican Dollar (JMD)",
  JOD: "Jordanian Dinar (JOD)",
  JPY: "Japanese Yen (JPY)",
  KES: "Kenyan Shilling (KES)",
  KGS: "Kyrgyzstani Som (KGS)",
  KHR: "Cambodian Riel (KHR)",
  KMF: "Comorian Franc (KMF)",
  KRW: "South Korean Won (KRW)",
  KWD: "Kuwaiti Dinar (KWD)",
  KYD: "Cayman Islands Dollar (KYD)",
  KZT: "Kazakhstani Tenge (KZT)",
  LAK: "Lao Kip (LAK)",
  LBP: "Lebanese Pound (LBP)",
  LKR: "Sri Lankan Rupee (LKR)",
  LRD: "Liberian Dollar (LRD)",
  LSL: "Lesotho Loti (LSL)",
  LYD: "Libyan Dinar (LYD)",
  MAD: "Moroccan Dirham (MAD)",
  MDL: "Moldovan Leu (MDL)",
  MGA: "Malagasy Ariary (MGA)",
  MKD: "Macedonian Denar (MKD)",
  MMK: "Myanmar Kyat (MMK)",
  MNT: "Mongolian Tögrög (MNT)",
  MOP: "Macanese Pataca (MOP)",
  MRU: "Mauritanian Ouguiya (MRU)",
  MUR: "Mauritian Rupee (MUR)",
  MVR: "Maldivian Rufiyaa (MVR)",
  MWK: "Malawian Kwacha (MWK)",
  MXN: "Mexican Peso (MXN)",
  MYR: "Malaysian Ringgit (MYR)",
  MZN: "Mozambican Metical (MZN)",
  NAD: "Namibian Dollar (NAD)",
  NGN: "Nigerian Naira (NGN)",
  NIO: "Nicaraguan Córdoba (NIO)",
  NOK: "Norwegian Krone (NOK)",
  NPR: "Nepalese Rupee (NPR)",
  NZD: "New Zealand Dollar (NZD)",
  OMR: "Omani Rial (OMR)",
  PAB: "Panamanian Balboa (PAB)",
  PEN: "Peruvian Sol (PEN)",
  PGK: "Papua New Guinean Kina (PGK)",
  PHP: "Philippine Peso (PHP)",
  PKR: "Pakistani Rupee (PKR)",
  PLN: "Polish Złoty (PLN)",
  PYG: "Paraguayan Guaraní (PYG)",
  QAR: "Qatari Riyal (QAR)",
  RON: "Romanian Leu (RON)",
  RSD: "Serbian Dinar (RSD)",
  RUB: "Russian Ruble (RUB)",
  RWF: "Rwandan Franc (RWF)",
  SAR: "Saudi Riyal (SAR)",
  SBD: "Solomon Islands Dollar (SBD)",
  SCR: "Seychellois Rupee (SCR)",
  SDG: "Sudanese Pound (SDG)",
  SEK: "Swedish Krona (SEK)",
  SGD: "Singapore Dollar (SGD)",
  SHP: "Saint Helena Pound (SHP)",
  SLL: "Sierra Leonean Leone (SLL)",
  SOS: "Somali Shilling (SOS)",
  SRD: "Surinamese Dollar (SRD)",
  SSP: "South Sudanese Pound (SSP)",
  STN: "São Tomé and Príncipe Dobra (STN)",
  SYP: "Syrian Pound (SYP)",
  THB: "Thai Baht (THB)",
  TJS: "Tajikistani Somoni (TJS)",
  TMT: "Turkmenistan Manat (TMT)",
  TND: "Tunisian Dinar (TND)",
  TOP: "Tongan Paʻanga (TOP)",
  TRY: "Turkish Lira (TRY)",
  TTD: "Trinidad and Tobago Dollar (TTD)",
  TWD: "New Taiwan Dollar (TWD)",
  TZS: "Tanzanian Shilling (TZS)",
  UAH: "Ukrainian Hryvnia (UAH)",
  UGX: "Ugandan Shilling (UGX)",
  USD: "United States Dollar (USD)",
  UYU: "Uruguayan Peso (UYU)",
  UZS: "Uzbekistani Som (UZS)",
  VES: "Venezuelan Bolívar (VES)",
  VND: "Vietnamese Đồng (VND)",
  VUV: "Vanuatu Vatu (VUV)",
  WST: "Samoan Tala (WST)",
  XAF: "Central African CFA Franc (XAF)",
  XCD: "East Caribbean Dollar (XCD)",
  XOF: "West African CFA Franc (XOF)",
  XPF: "CFP Franc (XPF)",
  YER: "Yemeni Rial (YER)",
  ZAR: "South African Rand (ZAR)",
  ZMW: "Zambian Kwacha (ZMW)",
  ZWL: "Zimbabwean Dollar (ZWL)"
};




const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const resultInput = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

async function convertCurrency() {
    const amount = amountInput.value;

    if (amount === "" || amount <= 0 || amount === isNaN) {
        alert("Please enter a valid amount");
        return;
    }

    const fromCu = fromCurrency.value;
    const toCu = toCurrency.value;

    try {
        
        const response = await fetch(`https://v6.exchangerate-api.com/v6/a9fa271a1d87b66c1444199b/latest/${fromCu}`);

    const data = await response.json();

    const rate = data.conversion_rates[toCu];
    const convertedAmount = amount * rate;

    resultInput.value = convertedAmount;
    
    } catch (error) {
        alert("Error fetching exchange rates. Please try again.");
        console.error(error);
    }
}

function populateCurrencies() {
  for (const code in currencies) {
    const optionFrom = document.createElement("option");
    optionFrom.value = code;                  
    optionFrom.textContent = currencies[code]; 
    fromCurrency.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = code;
    optionTo.textContent = currencies[code];
    toCurrency.appendChild(optionTo);
  }


}

populateCurrencies();

convertBtn.addEventListener("click", convertCurrency);

