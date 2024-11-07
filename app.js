const submitBtn = document.getElementById('submit-btn');
const vehicleType = document.getElementById('vehicleType');
const plateNum = document.getElementById('plateNum');
const day = document.getElementById('day');
const time = document.getElementById('time');
const output = document.getElementById('output');
const city = document.getElementById('city');

// Rules
const codingRules = {
    "Monday": [1, 2],
    "Tuesday": [3, 4],
    "Wednesday": [5, 6],
    "Thursday": [7, 8],
    "Friday": [9, 0],
}

const cities = {
    "Caloocan": {
        "morningStart": 700,
        "morningEnd": 1000,
        "eveningStart": 500 + 1200,
        "eveningEnd": 800 + 1200
    },
    "Las Pinas": {
        "morningStart": 700,
        "morningEnd": 1000,
        "eveningStart": 500 + 1200,
        "eveningEnd": 800 + 1200
    },
    "Makati": {
        "morningStart": 700,
        "morningEnd": 459 + 1200,
        "eveningStart": 500 + 1200,
        "eveningEnd": 700 + 1200
    },
    "Mandaluyong": {
        "morningStart": 700,
        "morningEnd": 1000,
        "eveningStart": 500 + 1200,
        "eveningEnd": 800 + 1200
    },
    "Malabon": {
        "morningStart": 700,
        "morningEnd": 1000,
        "eveningStart": 500 + 1200,
        "eveningEnd": 800 + 1200
    },
    "Manila": {
        "morningStart": 700,
        "morningEnd": 1000,
        "eveningStart": 500 + 1200,
        "eveningEnd": 800 + 1200
    },
    "Marikina": {
        "morningStart": 700,
        "morningEnd": 1000,
        "eveningStart": 500 + 1200,
        "eveningEnd": 800 + 1200
    },
    "Muntinlupa": {
        "morningStart": 700,
        "morningEnd": 1000,
        "eveningStart": 500 + 1200,
        "eveningEnd": 800 + 1200
    },
    "Navotas": {
        "morningStart": 700,
        "morningEnd": 1000,
        "eveningStart": 500 + 1200,
        "eveningEnd": 800 + 1200
    },
    "Paranaque": {
        "morningStart": 700,
        "morningEnd": 1000,
        "eveningStart": 500 + 1200,
        "eveningEnd": 800 + 1200
    },
    "Pasay": {
        "morningStart": 700,
        "morningEnd": 1000,
        "eveningStart": 500 + 1200,
        "eveningEnd": 800 + 1200
    },
    "Pasig": {
        "morningStart": 700,
        "morningEnd": 1000,
        "eveningStart": 500 + 1200,
        "eveningEnd": 800 + 1200
    },
    "Pateros": {
        "morningStart": 700,
        "morningEnd": 1000,
        "eveningStart": 500 + 1200,
        "eveningEnd": 800 + 1200
    },
    "Quezon City": {
        "morningStart": 700,
        "morningEnd": 1000,
        "eveningStart": 500 + 1200,
        "eveningEnd": 800 + 1200
    },
    "San Juan": {
        "morningStart": 700,
        "morningEnd": 1000,
        "eveningStart": 500 + 1200,
        "eveningEnd": 800 + 1200
    },
    "Taguig": {
        "morningStart": 700,
        "morningEnd": 1000,
        "eveningStart": 500 + 1200,
        "eveningEnd": 800 + 1200
    },
    "Valenzuela": {
        "morningStart": 700,
        "morningEnd": 1000,
        "eveningStart": 500 + 1200,
        "eveningEnd": 800 + 1200
    },
}



submitBtn.addEventListener("click", function(e) {
    // Check if fields are filled;
    if(isEmptyOrSpaces(vehicleType.value) || isEmptyOrSpaces(plateNum.value) || isEmptyOrSpaces(day.value) || isEmptyOrSpaces(time.value)) {
        alert("Please fill-up all the fields");
        return;
    }

    // If Motorcycle
    const motorcyclePattern = /^[A-Z]{3}\s?\d{3}$/i;
    console.log(motorcyclePattern.test(plateNum.value));
    if(motorcyclePattern.test(plateNum.value)) {
        output.innerHTML = `Motor Vehicle <b>${vehicleType.value}</b> with Plate No. <b>${plateNum.value}</b> is <b>Exempted for coding</b>.`;
        return;
    }

    // If Weekends
    if(day.value === "Saturday" || day.value === "Sunday") {
        output.innerHTML = 'No coding in weekends.';
        return;
    }

    
    const lastDigit = plateNum.value.slice(-1);
    const isVehicleCoding = codingRules[day.value].some(code => code == lastDigit);
    const intTime = parseInt(time.value.replace(':', ''));
    

    // if Inside of the Coding Window
    if((intTime >= cities[city.value].morningStart && intTime <= cities[city.value].morningEnd) || (intTime >= cities[city.value].eveningStart && intTime <= cities[city.value].eveningEnd)){
        output.innerHTML = `Motor Vehicle <b>${vehicleType.value}</b> with Plate No. <b>${plateNum.value}</b> is <b>${isVehicleCoding ? 'CODING today' : 'NOT CODING today'}</b> in <b>${city.value}</b>.`;
        return;
    }

    output.innerHTML = `No coding scheme for this hour in <b>${city.value}</b>.`;
});


// Empty Strings Checker
function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

