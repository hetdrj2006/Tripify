// --- 1. GLOBAL AIRPORT & CITY DATABASE (EXPANDED) ---
const globalAirports = [
    {c:"India", city:"Mumbai", code:"BOM"}, {c:"India", city:"Delhi", code:"DEL"}, {c:"India", city:"Bangalore", code:"BLR"},
    {c:"India", city:"Chennai", code:"MAA"}, {c:"India", city:"Hyderabad", code:"HYD"}, {c:"India", city:"Kolkata", code:"CCU"},
    {c:"India", city:"Ahmedabad", code:"AMD"}, {c:"India", city:"Pune", code:"PNQ"}, {c:"India", city:"Goa", code:"GOI"},
    {c:"India", city:"Jaipur", code:"JAI"}, {c:"India", city:"Lucknow", code:"LKO"}, {c:"India", city:"Kochi", code:"COK"},
    {c:"India", city:"Srinagar", code:"SXR"}, {c:"India", city:"Varanasi", code:"VNS"}, {c:"India", city:"Indore", code:"IDR"},
    
    {c:"USA", city:"New York (JFK)", code:"JFK"}, {c:"USA", city:"Los Angeles", code:"LAX"}, {c:"USA", city:"Chicago", code:"ORD"},
    {c:"USA", city:"San Francisco", code:"SFO"}, {c:"USA", city:"Miami", code:"MIA"}, {c:"USA", city:"Dallas", code:"DFW"},
    {c:"USA", city:"Seattle", code:"SEA"}, {c:"USA", city:"Las Vegas", code:"LAS"}, {c:"USA", city:"Orlando", code:"MCO"},
    {c:"Canada", city:"Toronto", code:"YYZ"}, {c:"Canada", city:"Vancouver", code:"YVR"}, {c:"Canada", city:"Montreal", code:"YUL"},

    {c:"UK", city:"London Heathrow", code:"LHR"}, {c:"UK", city:"London Gatwick", code:"LGW"}, {c:"UK", city:"Manchester", code:"MAN"},
    {c:"Germany", city:"Frankfurt", code:"FRA"}, {c:"Germany", city:"Munich", code:"MUC"}, {c:"Germany", city:"Berlin", code:"BER"},
    {c:"France", city:"Paris CDG", code:"CDG"}, {c:"France", city:"Nice", code:"NCE"},
    {c:"Italy", city:"Rome", code:"FCO"}, {c:"Italy", city:"Milan", code:"MXP"}, {c:"Italy", city:"Venice", code:"VCE"},
    {c:"Spain", city:"Madrid", code:"MAD"}, {c:"Spain", city:"Barcelona", code:"BCN"},
    {c:"Russia", city:"Moscow", code:"SVO"}, {c:"Russia", city:"St. Petersburg", code:"LED"},

    {c:"Australia", city:"Sydney", code:"SYD"}, {c:"Australia", city:"Melbourne", code:"MEL"}, {c:"Australia", city:"Brisbane", code:"BNE"},
    {c:"Australia", city:"Perth", code:"PER"}, {c:"Australia", city:"Adelaide", code:"ADL"},
    {c:"New Zealand", city:"Auckland", code:"AKL"}, {c:"New Zealand", city:"Wellington", code:"WLG"},

    {c:"UAE", city:"Dubai", code:"DXB"}, {c:"UAE", city:"Abu Dhabi", code:"AUH"},
    {c:"Singapore", city:"Singapore", code:"SIN"},
    {c:"Thailand", city:"Bangkok", code:"BKK"}, {c:"Thailand", city:"Phuket", code:"HKT"},
    {c:"Japan", city:"Tokyo Haneda", code:"HND"}, {c:"Japan", city:"Osaka", code:"KIX"},
    {c:"China", city:"Beijing", code:"PEK"}, {c:"China", city:"Shanghai", code:"PVG"},
    {c:"South Korea", city:"Seoul", code:"ICN"}, {c:"South Korea", city:"Busan", code:"PUS"},

    {c:"Brazil", city:"Sao Paulo", code:"GRU"}, {c:"Brazil", city:"Rio de Janeiro", code:"GIG"},
    {c:"South Africa", city:"Johannesburg", code:"JNB"}, {c:"South Africa", city:"Cape Town", code:"CPT"}
];

const airlineDatabase = [
    { name: "IndiGo", country: "India" }, { name: "Air India", country: "India" }, { name: "Vistara", country: "India" }, 
    { name: "Delta", country: "USA" }, { name: "United", country: "USA" }, { name: "American Airlines", country: "USA" },
    { name: "British Airways", country: "UK" }, { name: "Virgin Atlantic", country: "UK" }, { name: "Lufthansa", country: "Germany" },
    { name: "Air France", country: "France" }, { name: "KLM", country: "Netherlands" }, { name: "Emirates", country: "UAE" },
    { name: "Singapore Airlines", country: "Singapore" }, { name: "Qantas", country: "Australia" }, { name: "Cathay Pacific", country: "China" },
    { name: "Air Canada", country: "Canada" }, { name: "LATAM", country: "Brazil" }, { name: "South African Airways", country: "South Africa" }
];

const hotelChains = ["Marriott", "Hilton", "Hyatt", "Radisson", "Taj", "Oberoi", "ITC", "Novotel", "Ibis", "Sheraton", "Westin", "Four Seasons"];
const roomTypes = ["Standard", "Deluxe", "Executive Suite", "Ocean View", "Family Studio", "Presidential Suite"];
const bedTypes = ["1 King Bed", "2 Queen Beds", "1 Queen Bed", "2 Twin Beds"];
const views = ["City View", "Sea View", "Garden View", "Pool View"];

const idLabels = { "India": "Aadhar Card", "USA": "SSN", "UK": "NI Number", "Australia": "TFN", "UAE": "Emirates ID" };

let map, mapMarkers = [], mapRoute, selectedTrip = {}, selectedPaymentMethod = "", bookingHistory = []; 
let generatedTripifyID = null;

window.onload = function() {
    // 1. DATE RESTRICTIONS (365 Days)
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 365);
    const maxDateStr = maxDate.toISOString().split('T')[0];

    // Flight
    const fDate = document.getElementById('flight-date');
    fDate.setAttribute('min', todayStr);
    fDate.setAttribute('max', maxDateStr);
    fDate.value = todayStr;
    fDate.addEventListener('input', function() { forceDateLimit(this, maxDateStr); });

    // Hotel
    const hCheckin = document.getElementById('hotel-checkin');
    const hCheckout = document.getElementById('hotel-checkout');

    hCheckin.setAttribute('min', todayStr);
    hCheckin.setAttribute('max', maxDateStr);
    hCheckin.addEventListener('input', function() { forceDateLimit(this, maxDateStr); });

    hCheckout.setAttribute('min', todayStr);
    hCheckout.setAttribute('max', maxDateStr);
    hCheckout.addEventListener('input', function() { forceDateLimit(this, maxDateStr); });

    hCheckin.addEventListener('change', function() {
        hCheckout.setAttribute('min', this.value);
        if(hCheckout.value && hCheckout.value < this.value) hCheckout.value = this.value;
    });

    // 2. POPULATE LISTS
    const countries = [...new Set(globalAirports.map(item => item.c))].sort();
    
    const countryList = document.getElementById('country-list-data');
    countries.forEach(c => { let op = document.createElement('option'); op.value = c; countryList.appendChild(op); });
    
    const hotelCountryList = document.getElementById('hotel-country-list');
    countries.forEach(c => { let op = document.createElement('option'); op.value = c; hotelCountryList.appendChild(op); });

    document.getElementById('user-country-input').value = "India";
};

function forceDateLimit(input, maxDate) {
    if (!input.value) return;
    if (input.value > maxDate) {
        alert("Bookings can only be made up to 1 year in advance.");
        input.value = maxDate;
    }
}

// --- TRIPIFY ID SIMULATION ---
function sendTripifyID(btnElement) {
    const email = document.getElementById('contact-email').value;
    if (!email) {
        alert("Please enter an email address first.");
        return;
    }
    
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    generatedTripifyID = "TP" + randomNum;

    alert(`Simulation: Email sent to ${email}\n\nYour Tripify Verification ID is: ${generatedTripifyID}`);
    
    // ALLOW REGENERATION
    btnElement.innerText = "Regenerate ID";
    btnElement.disabled = false; // Keep enabled
}

// --- HOTEL LOGIC ---
function populateHotelCities() {
    const country = document.getElementById('hotel-country').value;
    const cityList = document.getElementById('hotel-city-list');
    const cityInput = document.getElementById('hotel-city');
    cityInput.value = ''; 
    cityList.innerHTML = '';
    if(!country) return;
    const cities = globalAirports.filter(item => item.c === country);
    cities.forEach(item => {
        let op = document.createElement('option');
        op.value = item.city.split('(')[0].trim();
        cityList.appendChild(op);
    });
}

// --- SEARCH LOGIC ---
function filterCities(inputElement, type) {
    const query = inputElement.value.toLowerCase();
    const userCountry = document.getElementById('user-country-input').value; 
    const tripType = document.querySelector('input[name="tripType"]:checked').value;
    const datalist = document.getElementById(type === 'origin' ? 'dynamic-list-origin' : 'dynamic-list-dest');
    datalist.innerHTML = '';
    if (query.length < 1) return; 
    
    let candidates = (type === 'origin' || tripType === 'domestic') ? globalAirports.filter(ap => ap.c === userCountry) : globalAirports.filter(ap => ap.c !== userCountry);
    const matches = candidates.filter(item => item.city.toLowerCase().includes(query) || item.code.toLowerCase().includes(query));
    matches.slice(0, 10).forEach(item => { 
        let op = document.createElement('option');
        op.value = `${item.city} (${item.code})`;
        datalist.appendChild(op);
    });
}

function refreshCityLogic() {
    document.getElementById('flight-origin').value = '';
    document.getElementById('flight-destination').value = '';
}

function handleSearch(type) {
    const resultsArea = document.getElementById('results-area');
    const headerTitle = document.querySelector('#results-header h2');
    resultsArea.innerHTML = ''; 
    document.getElementById('main-content').classList.remove('hidden');
    
    const mapWrapper = document.getElementById('map-wrapper');
    if (type === 'hotel') {
        mapWrapper.classList.add('hidden'); 
    } else {
        mapWrapper.classList.remove('hidden');
        if(!map) {
            map = L.map('map-container').setView([20, 78], 3);
            // UPDATED TILE LAYER TO ESRI (Google-like)
            L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(map);
        }
        setTimeout(() => { map.invalidateSize(); }, 100);
        mapMarkers.forEach(m => map.removeLayer(m));
        if(mapRoute) map.removeLayer(mapRoute);
        mapMarkers = [];
    }

    document.getElementById('results-count').innerText = `Searching...`;

    setTimeout(() => {
        if (type === 'flight') {
            const originVal = document.getElementById('flight-origin').value;
            const destVal = document.getElementById('flight-destination').value;
            const date = document.getElementById('flight-date').value;
            const flightClass = document.getElementById('flight-class').value;
            const tripType = document.querySelector('input[name="tripType"]:checked').value;
            const originCountry = document.getElementById('user-country-input').value;

            if(!originVal || !destVal) { alert("Please enter locations."); return; }
            if(originVal === destVal) { alert("Source/Dest cannot be same."); return; }

            headerTitle.innerText = "Available Flights";
            if (map) {
                const oCoord = getFakeCoords(originVal);
                const dCoord = getFakeCoords(destVal);
                const m1 = L.marker(oCoord).addTo(map).bindPopup("Origin");
                const m2 = L.marker(dCoord).addTo(map).bindPopup("Dest");
                mapMarkers.push(m1, m2);
                mapRoute = L.polyline([oCoord, dCoord], {color: '#2563EB', weight: 4}).addTo(map);
                map.fitBounds(mapRoute.getBounds(), {padding: [50, 50]});
            }

            renderFlightResults(originVal, destVal, date, flightClass, tripType, originCountry);

        } else if (type === 'hotel') {
            const country = document.getElementById('hotel-country').value;
            const city = document.getElementById('hotel-city').value;
            const checkin = document.getElementById('hotel-checkin').value;
            const checkout = document.getElementById('hotel-checkout').value;
            const guests = parseInt(document.getElementById('hotel-guests').value) || 1;

            if(!country || !city || !checkin || !checkout) { alert("Please fill all hotel fields."); return; }

            const d1 = new Date(checkin);
            const d2 = new Date(checkout);
            const diffDays = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));

            if (diffDays <= 0) { alert("Checkout must be after Check-in."); return; }
            if (diffDays > 60) { alert("Maximum stay is 60 days."); return; }

            headerTitle.innerText = `Hotels in ${city}`;
            renderHotelResults(city, diffDays);
        }
    }, 800);
}

function getFakeCoords(cityString) {
    let hash = 0;
    for (let i = 0; i < cityString.length; i++) hash = cityString.charCodeAt(i) + ((hash << 5) - hash);
    return [(Math.abs(hash) % 18000) / 100, (Math.abs(hash) % 36000) / 100]; 
}

function renderFlightResults(origin, dest, date, flightClass, tripType, originCountry) {
    const resultsArea = document.getElementById('results-area');
    let relevantAirlines = (tripType === 'domestic') ? airlineDatabase.filter(a => a.country === originCountry) : airlineDatabase.filter(a => a.country === originCountry || ["UAE", "UK", "USA", "Germany", "Singapore"].includes(a.country));
    if (relevantAirlines.length === 0) relevantAirlines = [{name: "Global Air", country: "International"}];

    document.getElementById('results-count').innerText = `Found 5 options`;
    for(let i=0; i<Math.min(5, relevantAirlines.length); i++) {
        const airline = relevantAirlines[Math.floor(Math.random() * relevantAirlines.length)].name;
        let basePrice = (tripType === 'domestic') ? 50 + Math.floor(Math.random() * 100) : 450 + Math.floor(Math.random() * 500);
        if(flightClass === 'Business') basePrice *= 3;
        if(flightClass === 'First') basePrice *= 5;
        const flightCode = `${airline.substring(0,2).toUpperCase()}-${Math.floor(Math.random()*900)+100}`;
        const plane = Math.random() > 0.5 ? "Boeing 737" : "Airbus A320";
        
        resultsArea.innerHTML += `
            <div class="flight-card">
                <div class="airline-info"><h3>${airline}</h3><p style="color:#6B7280">${flightCode} • ${flightClass}</p></div>
                <div class="flight-meta"><strong>${origin.split('(')[0]} ➝ ${dest.split('(')[0]}</strong><small>${date}</small></div>
                <div class="flight-meta"><strong>Non-stop</strong><small>2h 30m</small></div>
                <div class="price-tag"><h2>$${basePrice}</h2><div class="action-buttons"><button class="detail-btn" onclick="openFlightDetails('${airline}', '${flightCode}', '${plane}')">Details</button><button class="book-btn" onclick="initBooking('${airline}', ${basePrice}, 'flight', '${origin} -> ${dest}')">Book Now</button></div></div>
            </div>`;
    }
}

function renderHotelResults(city, nights) {
    const resultsArea = document.getElementById('results-area');
    document.getElementById('results-count').innerText = `Found 5 hotels`;
    
    for(let i=0; i<5; i++) {
        const hotelName = `${hotelChains[Math.floor(Math.random() * hotelChains.length)]} ${city.split('(')[0]}`;
        const randomRoom = roomTypes[Math.floor(Math.random() * roomTypes.length)]; 
        const pricePerNight = 80 + Math.floor(Math.random() * 300);
        const totalPrice = pricePerNight * nights; // Base Price
        
        resultsArea.innerHTML += `
            <div class="hotel-card">
                <div class="hotel-info">
                    <h3>${hotelName}</h3>
                    <p style="color:#2563EB; font-weight:600;">${randomRoom}</p>
                    <p>City Center • 2.5km from airport</p>
                    <span class="rating-badge">⭐ 4.${Math.floor(Math.random()*9)} Excellent</span>
                </div>
                <div class="price-tag">
                    <h2>$${totalPrice}</h2>
                    <small>for ${nights} nights</small>
                </div>
                <div class="action-buttons">
                    <button class="detail-btn" onclick="openHotelDetails('${hotelName}', '${randomRoom}')">Details</button>
                    <button class="book-btn" onclick="initBooking('${hotelName}', ${totalPrice}, 'hotel', '${city}', '${randomRoom}')">Book Room</button>
                </div>
            </div>`;
    }
}

function openFlightDetails(name, code, plane) {
    document.getElementById('detail-airline').innerText = name;
    document.getElementById('detail-content').innerHTML = `
        <div class="detail-row"><span>Flight Code:</span> <strong>${code}</strong></div>
        <div class="detail-row"><span>Aircraft:</span> <strong>${plane}</strong></div>
        <div class="detail-row"><span>Meal:</span> <strong>Included</strong></div>
        <div class="detail-row"><span>Baggage:</span> <strong>25kg Check-in</strong></div>
    `;
    document.getElementById('details-modal').classList.remove('hidden');
}

function openHotelDetails(name, roomType) {
    const bed = bedTypes[Math.floor(Math.random() * bedTypes.length)];
    const view = views[Math.floor(Math.random() * views.length)];
    const ac = Math.random() > 0.1 ? "Air Conditioned" : "Non-AC";
    
    document.getElementById('detail-airline').innerText = name;
    document.getElementById('detail-content').innerHTML = `
        <div class="detail-row"><span>Room Type:</span> <strong>${roomType}</strong></div>
        <div class="detail-row"><span>Bedding:</span> <strong>${bed}</strong></div>
        <div class="detail-row"><span>View:</span> <strong>${view}</strong></div>
        <div class="detail-row"><span>Climate:</span> <strong>${ac}</strong></div>
        <div class="detail-row"><span>Occupancy:</span> <strong>Max 3 Adults</strong></div>
        <div class="detail-row"><span>Cancellation:</span> <strong>Free up to 24h</strong></div>
    `;
    document.getElementById('details-modal').classList.remove('hidden');
}

function closeDetailsModal() { document.getElementById('details-modal').classList.add('hidden'); }

// --- REFACTORED BOOKING LOGIC ---
function initBooking(name, price, type, routeInfo, roomType = "") {
    const date = document.getElementById(type === 'flight' ? 'flight-date' : 'hotel-checkin').value;
    
    let checkOut = "";
    if (type === 'hotel') {
        checkOut = document.getElementById('hotel-checkout').value;
    }

    selectedTrip = { name, price, type, routeInfo, date, checkOut, roomType };
    document.getElementById('modal-trip-name').innerText = name;
    document.getElementById('guest-breakdown-section').innerHTML = ''; 

    if (type === 'flight') {
        const count = parseInt(document.getElementById('flight-passengers').value) || 1;
        setupFlightForms(count, price);
    } else {
        const searchGuests = parseInt(document.getElementById('hotel-guests').value) || 1;
        selectedTrip.maxGuests = searchGuests;
        selectedTrip.unitPrice = price / searchGuests; 
        setupHotelForms(searchGuests);
    }

    document.getElementById('booking-step-1').classList.remove('hidden');
    document.getElementById('booking-step-payment').classList.add('hidden');
    document.getElementById('booking-step-3').classList.add('hidden');
    document.getElementById('modal-footer-action').classList.remove('hidden');
    document.getElementById('booking-modal').classList.remove('hidden');
    generatedTripifyID = null; 
}

function setupFlightForms(count, price) {
    document.getElementById('summary-lbl-1').innerText = "Airline";
    document.getElementById('summary-lbl-2').innerText = "Class";
    document.getElementById('modal-trip-class').innerText = "Economy";
    selectedTrip.total = price * count; 
    document.getElementById('modal-total').innerText = `$${Math.round(selectedTrip.total)}`;
    renderPassengerForms(count, "Passenger");
}

function setupHotelForms(maxGuests) {
    document.getElementById('summary-lbl-1').innerText = "Hotel";
    document.getElementById('summary-lbl-2').innerText = "Room";
    document.getElementById('modal-trip-class').innerText = selectedTrip.roomType; 
    
    const breakdownDiv = document.getElementById('guest-breakdown-section');
    breakdownDiv.innerHTML = `
        <div class="grid-2" style="background:#F3F4F6; padding:1rem; border-radius:8px; margin-bottom:1.5rem;">
            <div class="input-wrapper">
                <label>No. of Adults (18+)</label>
                <input type="number" id="modal-adults" value="${maxGuests}" min="1" class="input-field" onchange="handleHotelGuestChange()">
            </div>
            <div class="input-wrapper">
                <label>No. of Children (<18)</label>
                <input type="number" id="modal-children" value="0" min="0" class="input-field" onchange="handleHotelGuestChange()">
            </div>
        </div>
        <p style="text-align:right; font-size:0.8rem; color:#6B7280; margin-top:-10px; margin-bottom:15px;">Max Allowed Guests: <strong>${maxGuests}</strong></p>
    `;
    
    handleHotelGuestChange(); 
}

function handleHotelGuestChange() {
    const adultsInput = document.getElementById('modal-adults');
    const childrenInput = document.getElementById('modal-children');
    
    let adults = parseInt(adultsInput.value) || 1;
    let children = parseInt(childrenInput.value) || 0;
    
    if (adults + children > selectedTrip.maxGuests) {
        alert(`Total guests cannot exceed ${selectedTrip.maxGuests} (as selected in search).`);
        adults = selectedTrip.maxGuests;
        children = 0;
        adultsInput.value = adults;
        childrenInput.value = children;
    }

    selectedTrip.total = (selectedTrip.unitPrice * adults) + (selectedTrip.unitPrice * 0.5 * children);
    document.getElementById('modal-total').innerText = `$${Math.round(selectedTrip.total)}`;

    renderPassengerForms(adults + children, "Guest", adults, children);
}

function renderPassengerForms(totalCount, labelType, adultCount = 0, childCount = 0) {
    const formContainer = document.getElementById('passenger-forms');
    let html = '';
    const userCountry = document.getElementById('user-country-input').value;

    let adultIdx = 1;
    let childIdx = 1;

    if (labelType === "Passenger") {
        for(let i=1; i<=totalCount; i++) {
            html += generateFormHTML(i, "Passenger", userCountry);
        }
    } 
    else {
        // Adult Loop with specific index
        for(let i=1; i<=adultCount; i++) {
            html += generateFormHTML(adultIdx++, "Adult", userCountry);
        }
        // Child Loop with specific index
        for(let i=1; i<=childCount; i++) {
            html += generateFormHTML(childIdx++, "Child", userCountry);
        }
    }

    html += `<div class="passenger-item" style="border-left: 4px solid #2563EB;"><h4 class="form-section-title">Security</h4><div class="input-wrapper"><label>Set Booking PIN (4 Digits) *</label><input type="password" id="booking-pin" class="input-field mandatory" maxlength="4" placeholder="1234"></div></div>`;
    formContainer.innerHTML = html;
}

function generateFormHTML(index, typeLabel, country) {
    const showID = (typeLabel === "Passenger" && index === 1) || (typeLabel === "Adult" && index === 1);
    
    const idLabel = showID ? "Enter Tripify ID *" : (typeLabel === "Child" ? "" : "ID Number *");
    const idPlaceholder = showID ? "Enter ID sent to email" : "National ID";
    const idId = showID ? `id="p1-id"` : "";
    
    const color = (typeLabel === "Child") ? "#10B981" : "#E5E7EB"; 
    const ageLimit = (typeLabel === "Child") ? 'max="17"' : 'min="18"';

    let extraFieldHTML = "";
    if (typeLabel !== "Child") {
        extraFieldHTML = `<div class="input-wrapper"><label>${idLabel}</label><input type="text" ${idId} class="input-field mandatory" placeholder="${idPlaceholder}"></div>`;
    } else {
        extraFieldHTML = `<div class="input-wrapper"></div>`; 
    }

    return `
    <div class="passenger-item" style="border-left: 4px solid ${color};">
        <h4 class="form-section-title">${typeLabel} ${index} Details</h4>
        <div class="grid-2"><div class="input-wrapper"><label>First Name *</label><input type="text" id="${typeLabel.toLowerCase()}${index}-first" class="input-field mandatory"></div><div class="input-wrapper"><label>Last Name *</label><input type="text" id="${typeLabel.toLowerCase()}${index}-last" class="input-field mandatory"></div></div>
        <div class="grid-2"><div class="input-wrapper"><label>Gender</label><select class="input-field mandatory"><option>Male</option><option>Female</option></select></div><div class="input-wrapper"><label>Age</label><input type="number" class="input-field mandatory" width="50px" ${ageLimit} oninput="if(this.value.length > 3) this.value = this.value.slice(0,3);"></div></div>
        <div class="grid-2"><div class="input-wrapper"><label>Nationality</label><input type="text" class="input-field mandatory" value="${country}"></div>${extraFieldHTML}</div>
    </div>`;
}

function proceedToPayment() {
    let valid = true;
    document.querySelectorAll('.mandatory').forEach(el => {
        if(!el.value) { el.style.borderColor = 'red'; valid = false; } else { el.style.borderColor = '#E5E7EB'; }
    });
    if(!valid) return alert("Please fill all fields.");

    const phoneInput = document.getElementById('contact-phone');
    if (phoneInput && phoneInput.value.length !== 10) {
        alert("Mobile number must be exactly 10 digits.");
        phoneInput.style.borderColor = 'red';
        return;
    }

    const enteredID = document.getElementById('p1-id').value.trim();
    if (!generatedTripifyID) {
        alert("Please generate a Tripify ID first by clicking 'Send Tripify ID'.");
        return;
    }
    if (enteredID !== generatedTripifyID) {
        alert("Invalid Tripify ID! Please check the alert popup for the correct code.");
        return;
    }

    document.getElementById('booking-step-1').classList.add('hidden');
    document.getElementById('booking-step-payment').classList.remove('hidden');
}

function selectPayment(el, method) {
    document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    selectedPaymentMethod = method;
    document.getElementById('btn-pay-confirm').classList.remove('hidden');
}

function confirmPayment() {
    document.getElementById('payment-loader').classList.remove('hidden');
    document.querySelector('.payment-options').classList.add('hidden');
    document.getElementById('btn-pay-confirm').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('payment-loader').classList.add('hidden');
        document.querySelector('.payment-options').classList.remove('hidden'); 
        generateTicket();
    }, 2000);
}

function generateTicket() {
    let p1Name = "Guest";
    const p1First = document.getElementById('p1-first') || document.getElementById('adult1-first');
    const p1Last = document.getElementById('p1-last') || document.getElementById('adult1-last');
    
    if (p1First && p1Last) {
        p1Name = p1First.value + " " + p1Last.value;
    }

    const pin = document.getElementById('booking-pin').value;
    const pnr = "TRIP" + Math.floor(Math.random() * 100000);

    document.getElementById('ticket-passenger').innerText = p1Name;
    document.getElementById('ticket-pnr').innerText = pnr;
    document.getElementById('ticket-date').innerText = selectedTrip.date;
    document.getElementById('ticket-airline').innerText = selectedTrip.name;

    if (selectedTrip.type === 'flight') {
        document.getElementById('ticket-flight-header').classList.remove('hidden');
        document.getElementById('ticket-hotel-header').classList.add('hidden');
        document.getElementById('ticket-date-field').classList.remove('hidden');

        document.getElementById('ticket-origin-code').innerText = selectedTrip.routeInfo.split('->')[0].trim().substring(0,3).toUpperCase();
        document.getElementById('ticket-dest-code').innerText = selectedTrip.routeInfo.split('->')[1].trim().substring(0,3).toUpperCase();
        
        document.getElementById('ticket-lbl-provider').innerText = "Airline";
        document.getElementById('ticket-lbl-class').innerText = "Class";
        document.getElementById('ticket-class-display').innerText = "Economy";
        document.getElementById('ticket-lbl-pax').innerText = "Passenger";
    } else {
        document.getElementById('ticket-flight-header').classList.add('hidden');
        document.getElementById('ticket-hotel-header').classList.remove('hidden');
        document.getElementById('ticket-date-field').classList.add('hidden'); 

        document.getElementById('ticket-checkin-date').innerText = selectedTrip.date;
        document.getElementById('ticket-checkout-date').innerText = selectedTrip.checkOut;

        document.getElementById('ticket-lbl-provider').innerText = "Hotel";
        document.getElementById('ticket-lbl-class').innerText = "Room";
        document.getElementById('ticket-class-display').innerText = selectedTrip.roomType;
        document.getElementById('ticket-lbl-pax').innerText = "Guest";
    }

    bookingHistory.push({
        pnr, pin, title: selectedTrip.name, 
        meta: selectedTrip.type === 'flight' ? selectedTrip.routeInfo : "Hotel Stay",
        date: selectedTrip.date, price: selectedTrip.total, status: "Confirmed"
    });

    document.getElementById('booking-step-payment').classList.add('hidden');
    document.getElementById('modal-footer-action').classList.add('hidden');
    document.getElementById('booking-step-3').classList.remove('hidden');
}

// --- UTILS & TABS ---
function switchTab(tab) {
    document.getElementById('flight-section').classList.toggle('hidden', tab !== 'flights');
    document.getElementById('hotel-section').classList.toggle('hidden', tab !== 'hotels');
    document.getElementById('main-content').classList.toggle('hidden', tab !== 'flights'); 
    
    // Clear results
    document.getElementById('results-area').innerHTML = '';
    document.getElementById('results-count').innerText = '';
    
    document.getElementById('history-view').classList.add('hidden');
    document.getElementById('main-hero').classList.remove('hidden');
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + tab).classList.add('active');
}

function showHistory() {
    document.getElementById('main-hero').classList.add('hidden');
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('history-view').classList.remove('hidden');
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-history').classList.add('active');
    
    const list = document.getElementById('history-list');
    list.innerHTML = '';
    if(bookingHistory.length === 0) { list.innerHTML = '<p class="text-muted" style="text-align:center;">No bookings found.</p>'; return; }
    
    bookingHistory.forEach(b => {
        let btn = b.status === 'Confirmed' ? `<button class="btn-danger" onclick="cancelHistoryBooking('${b.pnr}')">Cancel</button>` : `<span class="badge-cancelled">Cancelled</span>`;
        list.innerHTML += `<div class="history-card"><div class="history-details"><h3>${b.title}</h3><p>${b.meta} • ${b.date}</p><small>PNR: ${b.pnr}</small></div><div class="history-actions"><strong>$${b.price}</strong>${btn}</div></div>`;
    });
}

function cancelHistoryBooking(pnr) {
    const b = bookingHistory.find(x => x.pnr === pnr);
    if(b && prompt(`Enter PIN for ${pnr}:`) === b.pin) { b.status = 'Cancelled'; showHistory(); alert("Booking Cancelled."); } 
    else { alert("Incorrect PIN"); }
}

function downloadTicket() { window.print(); }
function closeModal() { document.getElementById('booking-modal').classList.add('hidden'); }
