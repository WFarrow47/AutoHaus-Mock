"use strict"
const vehicles = [{
            "id": 0,
            "vehName": "AutoHaus Outlander",
            "vehPrice": "189000",
            "vehImg": "/SUPERLUX-Outlander.jpg",
            "vehCategory": "Superlux",
            "shortText": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer quis porta massa. Morbi volutpat mattis augue, eu viverra enim congue ac. Pellentesque varius lectus ut velit dignissim accumsan. Fusce purus mauris, convallis nec congue id, auctor id diam. Sed nulla eros, aliquet vitae porttitor et, venenatis ut sem. Nulla metus velit, fringilla sit amet varius sit amet, feugiat in ligula. Curabitur imperdiet mollis sagittis. Curabitur dignissim nec nunc id porttitor."
        },
        {
            "id": 1,
            "vehName": "AutoHaus Elite",
            "vehPrice": "489099",
            "vehImg": "/SUPERLUX-Elite.jpg",
            "vehCategory": "Superlux",
            "shortText": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer quis porta massa. Morbi volutpat mattis augue, eu viverra enim congue ac. Pellentesque varius lectus ut velit dignissim accumsan. Fusce purus mauris, convallis nec congue id, auctor id diam. Sed nulla eros, aliquet vitae porttitor et, venenatis ut sem. Nulla metus velit, fringilla sit amet varius sit amet, feugiat in ligula. Curabitur imperdiet mollis sagittis. Curabitur dignissim nec nunc id porttitor."
        },
        {
            "id": 2,
            "vehName": "AutoHaus F1",
            "vehPrice": "632999",
            "vehImg": "/SUPERLUX-F1.jpg",
            "vehCategory": "Superlux",
            "shortText": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer quis porta massa. Morbi volutpat mattis augue, eu viverra enim congue ac. Pellentesque varius lectus ut velit dignissim accumsan. Fusce purus mauris, convallis nec congue id, auctor id diam. Sed nulla eros, aliquet vitae porttitor et, venenatis ut sem. Nulla metus velit, fringilla sit amet varius sit amet, feugiat in ligula. Curabitur imperdiet mollis sagittis. Curabitur dignissim nec nunc id porttitor."
        },
        {
            "id": 3,
            "vehName": "AutoHaus M70",
            "vehPrice": "67999",
            "vehImg": "/SEDAN-M70.jpg",
            "vehCategory": "Sedan",
            "shortText": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer quis porta massa. Morbi volutpat mattis augue, eu viverra enim congue ac. Pellentesque varius lectus ut velit dignissim accumsan. Fusce purus mauris, convallis nec congue id, auctor id diam. Sed nulla eros, aliquet vitae porttitor et, venenatis ut sem. Nulla metus velit, fringilla sit amet varius sit amet, feugiat in ligula. Curabitur imperdiet mollis sagittis. Curabitur dignissim nec nunc id porttitor."
        },
        {
            "id": 4,
            "vehName": "AutoHaus M88",
            "vehPrice": "79000",
            "vehImg": "/SEDAN-M88.jpg",
            "vehCategory": "Sedan",
            "shortText": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer quis porta massa. Morbi volutpat mattis augue, eu viverra enim congue ac. Pellentesque varius lectus ut velit dignissim accumsan. Fusce purus mauris, convallis nec congue id, auctor id diam. Sed nulla eros, aliquet vitae porttitor et, venenatis ut sem. Nulla metus velit, fringilla sit amet varius sit amet, feugiat in ligula. Curabitur imperdiet mollis sagittis. Curabitur dignissim nec nunc id porttitor."
        },
        {
            "id": 5,
            "vehName": "AutoHaus M90",
            "vehPrice": "97999",
            "vehImg": "/SEDAN-M90.jpg",
            "vehCategory": "Sedan",
            "shortText": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer quis porta massa. Morbi volutpat mattis augue, eu viverra enim congue ac. Pellentesque varius lectus ut velit dignissim accumsan. Fusce purus mauris, convallis nec congue id, auctor id diam. Sed nulla eros, aliquet vitae porttitor et, venenatis ut sem. Nulla metus velit, fringilla sit amet varius sit amet, feugiat in ligula. Curabitur imperdiet mollis sagittis. Curabitur dignissim nec nunc id porttitor."
        },
        {
            "id": 6,
            "vehName": "AutoHaus K8",
            "vehPrice": "124999",
            "vehImg": "/SUV-K8.jpg",
            "vehCategory": "SUV",
            "shortText": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer quis porta massa. Morbi volutpat mattis augue, eu viverra enim congue ac. Pellentesque varius lectus ut velit dignissim accumsan. Fusce purus mauris, convallis nec congue id, auctor id diam. Sed nulla eros, aliquet vitae porttitor et, venenatis ut sem. Nulla metus velit, fringilla sit amet varius sit amet, feugiat in ligula. Curabitur imperdiet mollis sagittis. Curabitur dignissim nec nunc id porttitor."
        },
        {
            "id": 7,
            "vehName": "AutoHaus S6A",
            "vehPrice": "88000",
            "vehImg": "/SUV-S6A.jpg",
            "vehCategory": "SUV",
            "shortText": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer quis porta massa. Morbi volutpat mattis augue, eu viverra enim congue ac. Pellentesque varius lectus ut velit dignissim accumsan. Fusce purus mauris, convallis nec congue id, auctor id diam. Sed nulla eros, aliquet vitae porttitor et, venenatis ut sem. Nulla metus velit, fringilla sit amet varius sit amet, feugiat in ligula. Curabitur imperdiet mollis sagittis. Curabitur dignissim nec nunc id porttitor."
        },
        {
            "id": 8,
            "vehName": "AutoHaus S8",
            "vehPrice": "123999",
            "vehImg": "/SUV-S8.jpg",
            "vehCategory": "SUV",
            "shortText": "Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer quis porta massa. Morbi volutpat mattis augue, eu viverra enim congue ac. Pellentesque varius lectus ut velit dignissim accumsan. Fusce purus mauris, convallis nec congue id, auctor id diam. Sed nulla eros, aliquet vitae porttitor et, venenatis ut sem. Nulla metus velit, fringilla sit amet varius sit amet, feugiat in ligula. Curabitur imperdiet mollis sagittis. Curabitur dignissim nec nunc id porttitor."
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

const contactForm = document.getElementById("ah-contact-us");



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
    setInverse(localStorage.getItem('ah-color-choice'));
    // 1 = light / 0 = default/dark
    document.getElementById('theme_change').addEventListener('click', checkInverse);
    //copyright in footer.
    document.getElementById('copydate').innerHTML = new Date().getFullYear();

    // contact us form
    contactForm.addEventListener('submit', handleContact);
    if(document.currentScript.getAttribute('data-calculator') === "valid") {
        loadEventListenersAll();
        vehicles.forEach(vehicle => {
            let opt = new Option(vehicle.vehName, vehicle.vehPrice);
            lcForm.lcVehSelect.appendChild(opt);
        });
    }
})();

function checkInverse(e) {
    e.preventDefault();
    const color = localStorage.getItem('ah-color-choice');
    if(color === null) {
        // if null assume dark (0) set light (1)
        localStorage.setItem('ah-color-choice', 1);
        setInverse(1, false);
    } else {
        // else must have a value assigned.
        if(color == 1) {
            // if 1 then set 0
            localStorage.setItem('ah-color-choice', 0);
            setInverse(0, false);
        } else {
            // else must be 0 so set 1
            localStorage.setItem('ah-color-choice', 1);
            setInverse(1, false);
        }
    }
}

function handleContact(e) {
    e.preventDefault();
    let cf,ce,ct,cm;

    cf = e.target.elements['fname'].value.trim();
    ce = e.target.elements['email'].value.trim();
    ct = e.target.elements['tnum'].value.trim();
    cm = e.target.elements['msg'].value.trim();

    if (isValid([cf, ce, ct, cm])) {
        e.target.elements['fname'].setAttribute('disabled', 'disabled');
        e.target.elements['email'].setAttribute('disabled', 'disabled');
        e.target.elements['tnum'].setAttribute('disabled', 'disabled');
        e.target.elements['msg'].setAttribute('disabled', 'disabled');
        $.ajax({
            method: 'POST',
            async: true,
            url: '/contact',
            data: {
                fullName: cf,
                email: ce,
                tele: ct,
                msg: cm
            }
        }).then(value => {
            e.target.elements['fname'].removeAttribute('disabled');
            e.target.elements['email'].removeAttribute('disabled');
            e.target.elements['tnum'].removeAttribute('disabled');
            e.target.elements['msg'].removeAttribute('disabled');
            if(!value.hasError) {
                document.getElementById('ah-success-box_1').style.display = 'block';                
                e.target.elements['fname'].value = "";                
                e.target.elements['email'].value = "";                
                e.target.elements['tnum'].value = "";                
                e.target.elements['msg'].value = "";
            } else {
                const error = value.errorMsg;
                console.error(`[AH] Error Processing AJAX Request: ${error} &#9650;`);
                document.getElementById('ah-error-box_1').innerHTML = "<strong>Error!</strong> The server could not process the request.";
                document.getElementById('ah-error-box_1').style.display = 'block';
                e.target.elements['fname'].removeAttribute('disabled');
                e.target.elements['email'].removeAttribute('disabled');
                e.target.elements['tnum'].removeAttribute('disabled');
                e.target.elements['msg'].removeAttribute('disabled');
            }
        });

    } else {
        document.getElementById('ah-error-box_1').style.display = 'block';
        setTimeout(() => {
            $('#ah-error-box_1').fadeOut();
        }, 5000);
    }
}

function setInverse(val, onload = true) {
    const html = document.querySelector('html');
    if(val == 1 && val != null) {
        if(!html.classList.contains('ah-inverse')) {
            html.classList.add('ah-inverse');
        } else {
            console.error(`[AH] Error Inversing Page: html already contains classname. (${val})`);
        }
    } else if (val == 0 && val != null) {
        if(onload != true) {
            if(html.classList.contains('ah-inverse')) {
                html.classList.remove('ah-inverse');
            } else {
                console.error(`[AH] Error Inversing Page: html does't contain classname. (${val})`);
            }
        }
    }
}

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
    if(i.includes('%')) i = i.replace('%', '');
    if(lcForm.lcLoanRepaySchedule.value == "Weekly") n = 52;
    else if(lcForm.lcLoanRepaySchedule.value == "Monthly") n = 12;
    else if(lcForm.lcLoanRepaySchedule.value == "Fortnightly") n = 26
    else n = null;
    t = lcForm.lcLoanTerm.value;
    let c = [l,i,n,t];
    if(isValid(c)) {
        l = parseFloat(l); i = parseFloat(i); t = parseFloat(t); n = parseFloat(n);
        v = parseFloat((l / t).toFixed(2));
        s = parseFloat(((v * i) / 100).toFixed(2));
        k = parseFloat((s * t).toFixed(2));
        o = ((v + s) / n).toFixed(2);
        a = (l + k).toFixed(2);
        d = {loanAmount: l,loanTerm: t,loanIntRate: i + "%",repaySchedule: lcForm.lcLoanRepaySchedule.value,interestRepay: ((l * i) / 100).toFixed(2),repayAmtSchedule: o,totalPayable: a};
        showLoanDetails(d);
    } else throwCalcError();
}

function isValid(val, trim = false) {
    let x = true;
    let m = [];
    let k = [];
    if(trim) {
        val.forEach(item => {
            k.push(item.trim());
        });
        val = k;
    }
    for(let i = 0; i < val.length; i++) {
        let z = false; // undef
        let y = false; // null
        let v = false; // ""
        if (val[i] != "undefined") z = true;
        if(val[i] != null) y = true; 
        if(val[i] != "") v = true;
        if(z == false || y == false || v == false) {
            x = false;
            break;  
        }
    }
    return x;

}

function showLoanDetails(data) {
    

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
    lcForm.lcErrorMsg.innerHTML = "<strong>Error processing form!</strong> - Are you missing a value?";
    lcForm.lcErrorMsg.style.display = "";
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
