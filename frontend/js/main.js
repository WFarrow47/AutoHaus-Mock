"use strict"
const vehicles = [
    {
        "vehName": "AutoHaus Outlander",
        "vehPrice": "189000",
        "vehImg": "/SUPERLUX-Outlander.jpg",
        "vehCategory": "Superlux"
    },
    {
        "vehName": "AutoHaus Elite",
        "vehPrice": "489099",
        "vehImg": "/SUPERLUX-Elite.jpg",
        "vehCategory": "Superlux"
    },
    {
        "vehName": "AutoHaus F1",
        "vehPrice": "632999",
        "vehImg": "/SUPERLUX-F1.jpg",
        "vehCategory": "Superlux"
    },
    {
        "vehName": "AutoHaus M70",
        "vehPrice": "67999",
        "vehImg": "/SEDAN-M70.jpg",
        "vehCategory": "Sedan"
    },
    {
        "vehName": "AutoHaus M88",
        "vehPrice": "79000",
        "vehImg": "/SEDAN-M88.jpg",
        "vehCategory": "Sedan"
    },
    {
        "vehName": "AutoHaus M90",
        "vehPrice": "97999",
        "vehImg": "/SEDAN-M90.jpg",
        "vehCategory": "Sedan"
    },
    {
        "vehName": "AutoHaus K8",
        "vehPrice": "124999",
        "vehImg": "/SUV-K8.jpg",
        "vehCategory": "SUV"
    },
    {
        "vehName": "AutoHaus S6A",
        "vehPrice": "88000",
        "vehImg": "/SUV-S6A.jpg",
        "vehCategory": "SUV"
    },
    {
        "vehName": "AutoHaus S8",
        "vehPrice": "123999",
        "vehImg": "/SUV-S8.jpg",
        "vehCategory": "SUV"
    }
];

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
    lcResPaySchedule2: document.getElementById('lc_loan_payschedule_2'),
    lcResPaySchedule2Amt: document.getElementById('lc_loan_payschedule_2_amt'),
    lcResDetails: document.getElementById('lc_details')
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

(function () {
    // Google Map

    //copyright in footer.
    document.getElementById('copydate').innerHTML = new Date().getFullYear();
    if(document.currentScript.getAttribute('data-calculator') === "valid") {
        loadEventListenersAll();
        vehicles.forEach(vehicle => {
            let opt = new Option(vehicle.vehName, vehicle.vehPrice);
            lcForm.lcVehSelect.appendChild(opt);
        });
    }
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
    let l, i, n, t, v, s, k, o, a, d;
    l = lcForm.lcLoanAmt.value; //Loan Amount pre interest
    i = lcForm.lcInterestRate.value; // intrest rate per year
    if (i.includes('%')) i = i.replace('%', '');
    if (lcForm.lcLoanRepaySchedule.value == "Weekly") n = 52;
    else if (lcForm.lcLoanRepaySchedule.value == "Monthly") n = 12;
    else if (lcForm.lcLoanRepaySchedule.value == "Fortnightly") n = 26
    else n = null;
    t = lcForm.lcLoanTerm.value;
    let c = [l, i, n, t];
    if (isValid(c)) {
        l = parseFloat(l);
        i = parseFloat(i);
        t = parseFloat(t);
        n = parseFloat(n);
        v = parseFloat((l / t).toFixed(2));
        s = parseFloat(((v * i) / 100).toFixed(2));
        k = parseFloat((s * t).toFixed(2));
        o = ((v + s) / n).toFixed(2);
        a = (l + k).toFixed(2);
        d = {
            loanAmount: l,
            loanTerm: t,
            loanIntRate: i + "%",
            repaySchedule: lcForm.lcLoanRepaySchedule.value,
            interestRepay: ((l * i) / 100).toFixed(2),
            repayAmtSchedule: o,
            totalPayable: a
        };
        showLoanDetails(d);
    } else throwCalcError().show();
}

function isValid(val) {
    let x = true;
    let m = [];

    for (let i = 0; i < val.length; i++) {
        let z = false; // undef
        let y = false; // null
        if (val[i] != "undefined") z = true;
        if (val[i] != null) y = true;
        if (z == false || y == false) {
            x = false;
            break;
        }
    }
    return x;

}

function showLoanDetails(data) {
    throwCalcError().hide();
    lcResults.lcResLoanAmt.innerText = "$" + formatMoney(data.loanAmount);
    lcResults.lcResLoanTerm.innerText = data.loanTerm == 1 ? data.loanTerm + " Year" : data.loanTerm + " Years";
    lcResults.lcResInterestRate.innerText = data.loanIntRate;
    lcResults.lcResPaySchedule.innerText = data.repaySchedule;
    lcResults.lcResInterestRepaymentAmt.innerText = "$" + formatMoney(data.interestRepay);
    lcResults.lcResPaySchedule2.innerText = data.repaySchedule;
    lcResults.lcResPaySchedule2Amt.innerText = "$" + formatMoney(data.repayAmtSchedule);
    lcResults.lcResTotalRepayments.innerText = "$" + formatMoney(data.totalPayable);

    lcResults.lcResDetails.style.display = "";
}



function throwCalcError() {
    let isShowing;
    return {
        show() {
            lcForm.lcErrorMsg.innerHTML = "<strong>Error processing form!</strong> - Are you missing a value?";
            lcForm.lcErrorMsg.style.display = "";
        }, isShowing() {
            return isShowing;
        }, hide() {
            lcForm.lcErrorMsg.style.display = "none";
        }
    }
}

function formatMoney(n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};
