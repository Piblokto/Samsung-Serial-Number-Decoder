const assemblyCodes = {
    'S': "Slovenia",
    'H': "Hungary",
    '4': "Romania",
    '1': "South Korea",
    '3': "South Korea",
    'L': "Russia",
    'W': "China",
    'C': "Mexico",
    'M': "Malaysia",
};

const yearCodes = {
    'R': '2001',
    'T': '2002',
    'W': '2003',
    'X': '2004',
    'Y': '2005',
    'A': '2006',
    'L': '2006',
    'P': '2007',
    'Q': '2008',
    'S': '2009',
    'Z': '2010',
    'B': '2011',
    'C': '2012',
    'D': '2013',
    'E': '2014',
    'G': '2015',
    'H': '2016',
    'J': '2017',
    'K': '2018',
    'M': '2019',
    'N': '2020',
    'R': '2021',
    'T': '2022',
    'W': '2023',
};

const monthCodes = {
    '1': "January",
    '2': "February",
    '3': "March",
    '4': "April",
    '5': "May",
    '6': "June",
    '7': "July",
    '8': "August",
    '9': "September",
    'A': "October",
    'B': "November",
    'C': "December",
};

function validateSerial(serial) {
    if (serial.length !== 15) {
        return "Invalid Serial Number (Must Be 15 Digits)";
    }

    const tvModel = serial.substring(0, 4);
    const productCode = serial.charAt(4);
    const assemblyCountry = serial.charAt(5);
    const assemblyPlant = serial.charAt(6);
    const tvYear = serial.charAt(7);
    const tvMonth = serial.charAt(8);
    const serialNumber = serial.substring(9, 15);

    if (assemblyCountry in assemblyCodes && tvYear in yearCodes && tvMonth in monthCodes) {
        return {
            tvModel: tvModel,
            productCode: productCode,
            assemblyCountry: assemblyCodes[assemblyCountry],
            assemblyPlant: assemblyPlant,
            tvYear: yearCodes[tvYear],
            tvMonth: monthCodes[tvMonth],
        };
    } else {
        return "Invalid Serial Number";
    }
}

function decodeSerial() {
    const serialInput = document.getElementById("serialInput").value.trim().toUpperCase();
    const resultDiv = document.getElementById("result");

    const validationResult = validateSerial(serialInput);

    if (typeof validationResult === "string") {
        resultDiv.innerText = validationResult;
    } else {
        resultDiv.innerHTML = `
            <p>TV Code: ${validationResult.tvModel}</p>
            <p>Product Code: ${validationResult.productCode}</p>
            <p>Country of Assembly: ${validationResult.assemblyCountry}</p>
            <p>Assembly Plant Code: ${validationResult.assemblyPlant}</p>
            <p>Year Manufactured: ${validationResult.tvYear}</p>
            <p>Month Manufactured: ${validationResult.tvMonth}</p>
        `;
    }
}
