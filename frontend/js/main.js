const vehicles = [{
        "vehName": "AutoHaus M70",
        "vehPrice": "82000"
    },
    {
        "vehName": "AutoHaus M70A",
        "vehPrice": "88000"
    },
    {
        "vehName": "AutoHaus M72",
        "vehPrice": "96000"
    },
    {
        "vehName": "AutoHaus M80",
        "vehPrice": "104000"
    },
    {
        "vehName": "AutoHaus M88",
        "vehPrice": "110000"
    },
    {
        "vehName": "AutoHaus M90",
        "vehPrice": "189000"
    }
]

// Loan Calculator! - F@$% 
const lcForm = {
    lcErrorMsg: document.getElementById('lc_form_error_msg'),
    lcVehSelect: document.getElementById('lc_form_vehicle_select'),
    lcLoanAmt: document.getElementById('lc_form_loan_amt'),
    lcInterestRate: document.getElementById('lc_form_interest_rate'),
    lcLoanTerm: document.getElementById('lc_form_loan_term'),
    lcLoanRepaySchedule: document.getElementById('lc_form_loan_repay_schedule'),
    lcProcessCalculation: document.getElementById('lc_form_process_calculation')
};

const lcResults = {
    lcResLoanAmt: document.getElementById('lc_loan_amt'),
    lcResLoanTerm: document.getElementById('lc_loan_term'),
    lcResInterestRate: document.getElementById('lc_loan_intRate'),
    lcResPaySchedule: document.getElementById('lc_loan_payschedule'),
    lcResInterestRepaymentAmt: document.getElementById('lc_loan_intRepayAmt'),
    lcResTotalRepayments: document.getElementById('lc_loan_total_repay'),
};
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -37.82,
            lng: 144.96
        },
        zoom: 11
    });
}

(function() {
    // Google Map
    
    //copyright in footer.
    document.getElementById('copydate').innerHTML = new Date().getFullYear();
    loadEventListenersAll();
    vehicles.forEach(vehicle => {
        let opt = new Option(vehicle.vehName, vehicle.vehPrice);
        // let opt = document.createElement('option', vehicle.vehPrice);
        // let text = document.createTextNode(vehicle.vehName);
        // opt.appendChild(text);
        lcForm.lcVehSelect.appendChild(opt);
    });
})();

function loadEventListenersAll() {
    lcForm.lcProcessCalculation.addEventListener('click', processLoanCalculation);
    lcForm.lcVehSelect.addEventListener('change', setLoanAmtByVehicle);
}

function setLoanAmtByVehicle(e) {
    e.preventDefault();
    let amt = e.target.value;
    lcForm.lcLoanAmt.value = amt;
}

function processLoanCalculation(e) {
    e.preventDefault();
    // let l, i, n, t;
    // l = lcForm.lcLoanAmt.value; //Loan Amount pre interest
    // i = lcForm.lcInterestRate.value; // intrest rate per year
    // if(i.includes('%')) i = i.replace('%', '');
    // if(lcForm.lcLoanRepaySchedule.value == "Weekly") n = 52;
    // else if(lcForm.lcLoanRepaySchedule.value == "Monthly") n = 12;
    // else if(lcForm.lcLoanRepaySchedule.value == "Fortnightly") n = 26
    // else n = null;
    // let t = lcForm.lcLoanTerm.value;

    
    let a = [2, 'test', null, 'yes'];

    console.log(isValidString(a))
    
    
    // if(n == null) return throwCalcError();

    

    // let calc = 

}

function isValidString(val) {
    let x = true;
    let m = [];
   
    for(let i = 0; i < val.length; i++) {
        let z = false; // undef
        let y = false; // null
        if (val[i] != "undefined") z = true;
        if(val[i] != null) y = true; 
        if(z == false || y == false) {
            x = false;
            break;  
        }
    }
    return x;

}



function throwCalcError() {
    lcForm.lcErrorMsg.innerText = "Error processing form.";
    lcForm.lcErrorMsg.style.display = "";
}