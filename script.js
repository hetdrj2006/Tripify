// --- CURRENCY DATABASE ---
const currencyData = { "India": { code: "INR", symbol: "₹", rate: 84 }, "USA": { code: "USD", symbol: "$", rate: 1 }, "UK": { code: "GBP", symbol: "£", rate: 0.79 }, "Germany": { code: "EUR", symbol: "€", rate: 0.92 }, "France": { code: "EUR", symbol: "€", rate: 0.92 }, "Italy": { code: "EUR", symbol: "€", rate: 0.92 }, "Spain": { code: "EUR", symbol: "€", rate: 0.92 }, "UAE": { code: "AED", symbol: "AED", rate: 3.67 }, "Australia": { code: "AUD", symbol: "A$", rate: 1.53 }, "Canada": { code: "CAD", symbol: "C$", rate: 1.35 }, "Singapore": { code: "SGD", symbol: "S$", rate: 1.34 }, "Japan": { code: "JPY", symbol: "¥", rate: 150 }, "China": { code: "CNY", symbol: "¥", rate: 7.2 }, "Brazil": { code: "BRL", symbol: "R$", rate: 4.95 }, "South Africa": { code: "ZAR", symbol: "R", rate: 19 }, "Thailand": { code: "THB", symbol: "฿", rate: 36 }, "Russia": { code: "RUB", symbol: "₽", rate: 92 }, "South Korea": { code: "KRW", symbol: "₩", rate: 1330 } };

// --- GLOBAL DATA ---
const globalAirports = [ {c:"India", city:"Mumbai", code:"BOM", lat: 19.0760, lng: 72.8777}, {c:"India", city:"Delhi", code:"DEL", lat: 28.6139, lng: 77.2090}, {c:"India", city:"Bangalore", code:"BLR", lat: 12.9716, lng: 77.5946}, {c:"India", city:"Chennai", code:"MAA", lat: 13.0827, lng: 80.2707}, {c:"India", city:"Hyderabad", code:"HYD", lat: 17.3850, lng: 78.4867}, {c:"India", city:"Kolkata", code:"CCU", lat: 22.5726, lng: 88.3639}, {c:"India", city:"Ahmedabad", code:"AMD", lat: 23.0225, lng: 72.5714}, {c:"India", city:"Pune", code:"PNQ", lat: 18.5204, lng: 73.8567}, {c:"India", city:"Goa", code:"GOI", lat: 15.2993, lng: 74.1240}, {c:"India", city:"Jaipur", code:"JAI", lat: 26.9124, lng: 75.7873}, {c:"India", city:"Lucknow", code:"LKO", lat: 26.8467, lng: 80.9462}, {c:"India", city:"Kochi", code:"COK", lat: 9.9312, lng: 76.2673}, {c:"India", city:"Srinagar", code:"SXR", lat: 34.0837, lng: 74.7973}, {c:"India", city:"Varanasi", code:"VNS", lat: 25.3176, lng: 82.9739}, {c:"India", city:"Indore", code:"IDR", lat: 22.7196, lng: 75.8577}, {c:"USA", city:"New York (JFK)", code:"JFK", lat: 40.7128, lng: -74.0060}, {c:"USA", city:"Los Angeles", code:"LAX", lat: 34.0522, lng: -118.2437}, {c:"USA", city:"Chicago", code:"ORD", lat: 41.8781, lng: -87.6298}, {c:"USA", city:"San Francisco", code:"SFO", lat: 37.7749, lng: -122.4194}, {c:"USA", city:"Miami", code:"MIA", lat: 25.7617, lng: -80.1918}, {c:"USA", city:"Dallas", code:"DFW", lat: 32.7767, lng: -96.7970}, {c:"USA", city:"Seattle", code:"SEA", lat: 47.6062, lng: -122.3321}, {c:"USA", city:"Las Vegas", code:"LAS", lat: 36.1699, lng: -115.1398}, {c:"USA", city:"Orlando", code:"MCO", lat: 28.5383, lng: -81.3792}, {c:"Canada", city:"Toronto", code:"YYZ", lat: 43.6510, lng: -79.3470}, {c:"Canada", city:"Vancouver", code:"YVR", lat: 49.2827, lng: -123.1207}, {c:"Canada", city:"Montreal", code:"YUL", lat: 45.5017, lng: -73.5673}, {c:"UK", city:"London Heathrow", code:"LHR", lat: 51.5074, lng: -0.1278}, {c:"UK", city:"London Gatwick", code:"LGW", lat: 51.1537, lng: -0.1821}, {c:"UK", city:"Manchester", code:"MAN", lat: 53.4808, lng: -2.2426}, {c:"Germany", city:"Frankfurt", code:"FRA", lat: 50.1109, lng: 8.6821}, {c:"Germany", city:"Munich", code:"MUC", lat: 48.1351, lng: 11.5820}, {c:"Germany", city:"Berlin", code:"BER", lat: 52.5200, lng: 13.4050}, {c:"France", city:"Paris CDG", code:"CDG", lat: 48.8566, lng: 2.3522}, {c:"France", city:"Nice", code:"NCE", lat: 43.7102, lng: 7.2620}, {c:"Italy", city:"Rome", code:"FCO", lat: 41.9028, lng: 12.4964}, {c:"Italy", city:"Milan", code:"MXP", lat: 45.4642, lng: 9.1900}, {c:"Italy", city:"Venice", code:"VCE", lat: 45.4408, lng: 12.3155}, {c:"Spain", city:"Madrid", code:"MAD", lat: 40.4168, lng: -3.7038}, {c:"Spain", city:"Barcelona", code:"BCN", lat: 41.3851, lng: 2.1734}, {c:"Russia", city:"Moscow", code:"SVO", lat: 55.7558, lng: 37.6173}, {c:"Russia", city:"St. Petersburg", code:"LED", lat: 59.9343, lng: 30.3351}, {c:"Australia", city:"Sydney", code:"SYD", lat: -33.8688, lng: 151.2093}, {c:"Australia", city:"Melbourne", code:"MEL", lat: -37.8136, lng: 144.9631}, {c:"Australia", city:"Brisbane", code:"BNE", lat: -27.4705, lng: 153.0260}, {c:"Australia", city:"Perth", code:"PER", lat: -31.9505, lng: 115.8605}, {c:"Australia", city:"Adelaide", code:"ADL", lat: -34.9285, lng: 138.6007}, {c:"New Zealand", city:"Auckland", code:"AKL", lat: -36.8485, lng: 174.7633}, {c:"New Zealand", city:"Wellington", code:"WLG", lat: -41.2865, lng: 174.7762}, {c:"UAE", city:"Dubai", code:"DXB", lat: 25.276987, lng: 55.296249}, {c:"UAE", city:"Abu Dhabi", code:"AUH", lat: 24.4539, lng: 54.3773}, {c:"Singapore", city:"Singapore", code:"SIN", lat: 1.3521, lng: 103.8198}, {c:"Thailand", city:"Bangkok", code:"BKK", lat: 13.7563, lng: 100.5018}, {c:"Thailand", city:"Phuket", code:"HKT", lat: 7.8804, lng: 98.3923}, {c:"Japan", city:"Tokyo Haneda", code:"HND", lat: 35.6762, lng: 139.6503}, {c:"Japan", city:"Osaka", code:"KIX", lat: 34.6937, lng: 135.5023}, {c:"China", city:"Beijing", code:"PEK", lat: 39.9042, lng: 116.4074}, {c:"China", city:"Shanghai", code:"PVG", lat: 31.2304, lng: 121.4737}, {c:"South Korea", city:"Seoul", code:"ICN", lat: 37.5665, lng: 126.9780}, {c:"South Korea", city:"Busan", code:"PUS", lat: 35.1796, lng: 129.0756}, {c:"Brazil", city:"Sao Paulo", code:"GRU", lat: -23.5505, lng: -46.6333}, {c:"Brazil", city:"Rio de Janeiro", code:"GIG", lat: -22.9068, lng: -43.1729}, {c:"South Africa", city:"Johannesburg", code:"JNB", lat: -26.2041, lng: 28.0473}, {c:"South Africa", city:"Cape Town", code:"CPT", lat: -33.9249, lng: 18.4241} ];
const airlineDatabase = [ { name: "IndiGo", country: "India" }, { name: "Air India", country: "India" }, { name: "Vistara", country: "India" }, { name: "Delta", country: "USA" }, { name: "United", country: "USA" }, { name: "American Airlines", country: "USA" }, { name: "British Airways", country: "UK" }, { name: "Virgin Atlantic", country: "UK" }, { name: "Lufthansa", country: "Germany" }, { name: "Air France", country: "France" }, { name: "KLM", country: "Netherlands" }, { name: "Emirates", country: "UAE" }, { name: "Singapore Airlines", country: "Singapore" }, { name: "Qantas", country: "Australia" }, { name: "Cathay Pacific", country: "China" }, { name: "Air Canada", country: "Canada" }, { name: "LATAM", country: "Brazil" }, { name: "South African Airways", country: "South Africa" } ];
const hotelChains = ["Marriott", "Hilton", "Hyatt", "Radisson", "Taj", "Oberoi", "ITC", "Novotel", "Ibis", "Sheraton", "Westin", "Four Seasons"];
const roomTypes = ["Standard", "Deluxe", "Executive Suite", "Ocean View", "Family Studio", "Presidential Suite"];
const bedTypes = ["1 King Bed", "2 Queen Beds", "1 Queen Bed", "2 Twin Beds"];
const views = ["City View", "Sea View", "Garden View", "Pool View"];

let map, mapMarkers = [], mapRoute, selectedTrip = {}, selectedPaymentMethod = "", bookingHistory = []; 
let generatedTripifyID = null;
let loggedInUser = null; 
let currentAuthMode = 'signin';
let simulatedOTP = "123456";
let forgotPasswordEmail = ""; 

window.onload = function() {
    const savedUser = localStorage.getItem('tripify_user');
    if (savedUser) loginSuccess(JSON.parse(savedUser), false);

    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 365);
    const maxDateStr = maxDate.toISOString().split('T')[0];

    const fDate = document.getElementById('flight-date');
    fDate.setAttribute('min', todayStr); fDate.setAttribute('max', maxDateStr); fDate.value = todayStr;
    const hCheckin = document.getElementById('hotel-checkin');
    const hCheckout = document.getElementById('hotel-checkout');
    hCheckin.setAttribute('min', todayStr); hCheckin.setAttribute('max', maxDateStr);
    hCheckout.setAttribute('min', todayStr); hCheckout.setAttribute('max', maxDateStr);
    
    const countries = [...new Set(globalAirports.map(item => item.c))].sort();
    const countryList = document.getElementById('country-list-data');
    countries.forEach(c => { let op = document.createElement('option'); op.value = c; countryList.appendChild(op); });
    const hotelCountryList = document.getElementById('hotel-country-list');
    countries.forEach(c => { let op = document.createElement('option'); op.value = c; hotelCountryList.appendChild(op); });
    document.getElementById('user-country-input').value = "India";
};

// --- AUTHENTICATION LOGIC ---
function openAuthModal() {
    if(loggedInUser) {
        if(confirm(`Logout as ${loggedInUser.name}?`)) logout();
    } else {
        document.getElementById('auth-modal').classList.remove('hidden');
        document.getElementById('auth-step-1').classList.remove('hidden');
        document.getElementById('auth-step-forgot').classList.add('hidden'); 
    }
}

function closeAuthModal() {
    document.getElementById('auth-modal').classList.add('hidden');
    document.getElementById('auth-step-1').classList.remove('hidden');
    document.getElementById('auth-step-otp').classList.add('hidden');
    document.getElementById('auth-step-forgot').classList.add('hidden');
}

function switchAuthTab(tab) {
    currentAuthMode = tab;
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`tab-${tab}`).classList.add('active');
    const title = document.getElementById('auth-title');
    const regFields = document.getElementById('register-fields');
    const forgotLink = document.getElementById('forgot-link-container');
    
    if(tab === 'register') { 
        title.innerText = "Create Account"; 
        regFields.classList.remove('hidden');
        forgotLink.classList.add('hidden');
    } else { 
        title.innerText = "Welcome Back"; 
        regFields.classList.add('hidden');
        forgotLink.classList.remove('hidden');
    }
}

function initGoogleAuth() {
    const email = document.getElementById('auth-email').value;
    if(!email) return alert("Please enter your email first.");
    handleAuthProceed();
}

function handleAuthProceed() {
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value.trim();
    
    if(!email || !password) return alert("Please enter both email and password.");

    const usersDB = JSON.parse(localStorage.getItem('tripify_users_db')) || [];
    
    if (currentAuthMode === 'signin') {
        const existingUser = usersDB.find(u => u.email === email);
        if (!existingUser) { alert("No user found. Please register."); switchAuthTab('register'); return; }
        if (existingUser.password !== password) { alert("Incorrect password."); return; }
    } else {
        const existingUser = usersDB.find(u => u.email === email);
        if (existingUser) { alert("User already exists. Please Sign In."); switchAuthTab('signin'); return; }
    }
    
    simulatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    const btn = document.querySelector('.auth-body .btn-primary');
    const oldText = btn.innerText;
    btn.innerText = "Sending OTP...";
    btn.disabled = true;

    setTimeout(() => {
        btn.innerText = oldText; btn.disabled = false;
        document.getElementById('auth-step-1').classList.add('hidden');
        document.getElementById('auth-step-otp').classList.remove('hidden');
        document.getElementById('otp-email-display').innerText = email;
        alert(`GMAIL NOTIFICATION:\n\nYour Tripify Verification Code is: ${simulatedOTP}`);
    }, 1500);
}

function verifyOTP() {
    const entered = document.getElementById('auth-otp').value;
    if(entered === simulatedOTP) {
        const nameInput = document.getElementById('auth-name').value;
        const emailInput = document.getElementById('auth-email').value;
        const passwordInput = document.getElementById('auth-password').value;
        
        if (currentAuthMode === 'register') {
            const usersDB = JSON.parse(localStorage.getItem('tripify_users_db')) || [];
            // Init history array
            const newUser = { name: nameInput || emailInput.split('@')[0], email: emailInput, password: passwordInput, history: [] };
            usersDB.push(newUser);
            localStorage.setItem('tripify_users_db', JSON.stringify(usersDB));
            loginSuccess(newUser, true);
        } else {
            const usersDB = JSON.parse(localStorage.getItem('tripify_users_db')) || [];
            const existingUser = usersDB.find(u => u.email === emailInput);
            loginSuccess(existingUser, true);
        }
        closeAuthModal();
    } else { alert("Incorrect OTP. Please try again."); }
}

// --- FORGOT PASSWORD FLOW ---
function initForgotFlow() {
    document.getElementById('auth-step-1').classList.add('hidden');
    document.getElementById('auth-step-forgot').classList.remove('hidden');
    document.getElementById('forgot-otp-section').classList.add('hidden');
    document.getElementById('forgot-reset-section').classList.add('hidden'); 
    document.getElementById('btn-forgot-action').innerText = "Send OTP";
    document.getElementById('btn-forgot-action').setAttribute('onclick', 'handleForgotOTP()');
    document.getElementById('btn-forgot-action').classList.remove('hidden');
    document.getElementById('btn-reset-confirm').classList.add('hidden'); 
}

function handleForgotOTP() {
    const email = document.getElementById('forgot-email').value.trim();
    if(!email) return alert("Please enter your email.");

    const usersDB = JSON.parse(localStorage.getItem('tripify_users_db')) || [];
    const existingUser = usersDB.find(u => u.email === email);

    if(!existingUser) {
        alert("Email not registered.");
        return;
    }

    forgotPasswordEmail = email;
    simulatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    
    const btn = document.getElementById('btn-forgot-action');
    btn.innerText = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
        btn.innerText = "Verify OTP";
        btn.disabled = false;
        btn.setAttribute('onclick', 'verifyForgotOTP()');
        document.getElementById('forgot-otp-section').classList.remove('hidden');
        alert(`GMAIL NOTIFICATION:\n\nPassword Recovery Code: ${simulatedOTP}`);
    }, 1500);
}

function verifyForgotOTP() {
    const entered = document.getElementById('forgot-otp').value;
    if(entered === simulatedOTP) {
        document.getElementById('forgot-otp-section').classList.add('hidden');
        document.getElementById('btn-forgot-action').classList.add('hidden'); 
        document.getElementById('forgot-reset-section').classList.remove('hidden'); 
        document.getElementById('btn-reset-confirm').classList.remove('hidden'); 
    } else {
        alert("Incorrect OTP.");
    }
}

function confirmPasswordReset() {
    const newPass = document.getElementById('forgot-new-password').value.trim();
    if(!newPass) return alert("Please enter a new password.");

    const usersDB = JSON.parse(localStorage.getItem('tripify_users_db')) || [];
    const userIndex = usersDB.findIndex(u => u.email === forgotPasswordEmail);

    if(userIndex !== -1) {
        usersDB[userIndex].password = newPass;
        localStorage.setItem('tripify_users_db', JSON.stringify(usersDB));
        loginSuccess(usersDB[userIndex], true);
        alert("Password updated successfully!");
        closeAuthModal();
    } else {
        alert("Error updating password.");
    }
}

function loginSuccess(user, save) {
    loggedInUser = user;
    if(save) localStorage.setItem('tripify_user', JSON.stringify(user));
    const btn = document.getElementById('nav-user-btn');
    btn.innerText = `👤 ${user.name}`;
    btn.classList.add('logged-in');
    
    // Refresh history view if visible
    if(!document.getElementById('history-view').classList.contains('hidden')) {
        showHistory();
    }
}

function logout() {
    localStorage.removeItem('tripify_user');
    loggedInUser = null;
    const btn = document.getElementById('nav-user-btn');
    btn.innerText = "Sign In";
    btn.classList.remove('logged-in');
    alert("Logged out successfully.");
    switchTab('flights'); 
}

// --- INTRO & CORE ---
function enterSite() {
    const overlay = document.getElementById('intro-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => { overlay.style.display = 'none'; }, 500);
}

function getCurrencyInfo() {
    const country = document.getElementById('user-country-input').value;
    return currencyData[country] || { code: "USD", symbol: "$", rate: 1 };
}

function forceDateLimit(input, maxDate) {
    if (!input.value) return;
    if (input.value > maxDate) {
        alert("Bookings can only be made up to 1 year in advance.");
        input.value = maxDate;
    }
}

function sendTripifyID(btnElement) {
    const email = document.getElementById('contact-email').value;
    if (!email) { alert("Please enter an email address first."); return; }
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    generatedTripifyID = "TP" + randomNum;
    alert(`Simulation: Email sent to ${email}\n\nYour Tripify Verification ID is: ${generatedTripifyID}`);
    btnElement.innerText = "Regenerate ID";
    btnElement.disabled = false;
}

// --- HELPER FUNCS (Populate, Filter, Refresh) ---
function populateHotelCities() {
    const country = document.getElementById('hotel-country').value;
    const cityList = document.getElementById('hotel-city-list');
    const cityInput = document.getElementById('hotel-city');
    cityInput.value = ''; cityList.innerHTML = '';
    if(!country) return;
    const cities = globalAirports.filter(item => item.c === country);
    cities.forEach(item => { let op = document.createElement('option'); op.value = item.city; cityList.appendChild(op); });
}

function filterCities(inputElement, type) {
    const query = inputElement.value.toLowerCase();
    const userCountry = document.getElementById('user-country-input').value; 
    const tripType = document.querySelector('input[name="tripType"]:checked').value;
    const datalist = document.getElementById(type === 'origin' ? 'dynamic-list-origin' : 'dynamic-list-dest');
    datalist.innerHTML = '';
    if (query.length < 1) return; 
    let candidates = (type === 'origin' || tripType === 'domestic') ? globalAirports.filter(ap => ap.c === userCountry) : globalAirports.filter(ap => ap.c !== userCountry);
    const matches = candidates.filter(item => item.city.toLowerCase().includes(query) || item.code.toLowerCase().includes(query));
    matches.slice(0, 10).forEach(item => { let op = document.createElement('option'); op.value = `${item.city} (${item.code})`; datalist.appendChild(op); });
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
            L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', { attribution: 'Tiles &copy; Esri' }).addTo(map);
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
                const oCoord = getCityCoords(originVal);
                const dCoord = getCityCoords(destVal);
                const m1 = L.marker(oCoord).addTo(map).bindPopup("Origin: " + originVal);
                const m2 = L.marker(dCoord).addTo(map).bindPopup("Dest: " + destVal);
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
            if(!country || !city || !checkin || !checkout) { alert("Please fill all hotel fields."); return; }
            const d1 = new Date(checkin); const d2 = new Date(checkout);
            const diffDays = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
            if (diffDays <= 0) { alert("Checkout must be after Check-in."); return; }
            if (diffDays > 60) { alert("Maximum stay is 60 days."); return; }
            headerTitle.innerText = `Hotels in ${city}`;
            renderHotelResults(city, diffDays);
        }
    }, 800);
}

function getCityCoords(cityString) {
    const match = cityString.match(/\(([^)]+)\)/);
    const code = match ? match[1] : null;
    let cityObj = globalAirports.find(item => item.code === code);
    if (!cityObj) {
        const cleanName = cityString.split('(')[0].trim();
        cityObj = globalAirports.find(item => item.city === cleanName);
    }
    return cityObj ? [cityObj.lat, cityObj.lng] : [20.5937, 78.9629];
}

function renderFlightResults(origin, dest, date, flightClass, tripType, originCountry) {
    const resultsArea = document.getElementById('results-area');
    const currency = getCurrencyInfo();
    let relevantAirlines = (tripType === 'domestic') ? airlineDatabase.filter(a => a.country === originCountry) : airlineDatabase.filter(a => a.country === originCountry || ["UAE", "UK", "USA", "Germany", "Singapore"].includes(a.country));
    if (relevantAirlines.length === 0) relevantAirlines = [{name: "Global Air", country: "International"}];

    document.getElementById('results-count').innerText = `Found 5 options`;
    for(let i=0; i<Math.min(5, relevantAirlines.length); i++) {
        const airline = relevantAirlines[Math.floor(Math.random() * relevantAirlines.length)].name;
        let basePriceUSD = (tripType === 'domestic') ? 50 + Math.floor(Math.random() * 100) : 450 + Math.floor(Math.random() * 500);
        if(flightClass === 'Business') basePriceUSD *= 3; if(flightClass === 'First') basePriceUSD *= 5;
        const finalPrice = Math.round(basePriceUSD * currency.rate);
        const flightCode = `${airline.substring(0,2).toUpperCase()}-${Math.floor(Math.random()*900)+100}`;
        const plane = Math.random() > 0.5 ? "Boeing 737" : "Airbus A320";
        
        resultsArea.innerHTML += `
            <div class="flight-card">
                <div class="airline-info"><h3>${airline}</h3><p style="color:#6B7280">${flightCode} • ${flightClass}</p></div>
                <div class="flight-meta"><strong>${origin.split('(')[0]} ➝ ${dest.split('(')[0]}</strong><small>${date}</small></div>
                <div class="flight-meta"><strong>Non-stop</strong><small>2h 30m</small></div>
                <div class="price-tag"><h2>${currency.symbol}${finalPrice}</h2><div class="action-buttons"><button class="detail-btn" onclick="openFlightDetails('${airline}', '${flightCode}', '${plane}')">Details</button><button class="book-btn" onclick="initBooking('${airline}', ${finalPrice}, 'flight', '${origin} -> ${dest}')">Book Now</button></div></div>
            </div>`;
    }
}

function renderHotelResults(city, nights) {
    const resultsArea = document.getElementById('results-area');
    const currency = getCurrencyInfo();
    document.getElementById('results-count').innerText = `Found 5 hotels`;
    for(let i=0; i<5; i++) {
        const hotelName = `${hotelChains[Math.floor(Math.random() * hotelChains.length)]} ${city.split('(')[0]}`;
        const randomRoom = roomTypes[Math.floor(Math.random() * roomTypes.length)]; 
        const pricePerNightUSD = 80 + Math.floor(Math.random() * 300);
        const totalPriceUSD = pricePerNightUSD * nights;
        const finalPrice = Math.round(totalPriceUSD * currency.rate);

        resultsArea.innerHTML += `
            <div class="hotel-card">
                <div class="hotel-info">
                    <h3>${hotelName}</h3>
                    <p style="color:#2563EB; font-weight:600;">${randomRoom}</p>
                    <p>City Center • 2.5km from airport</p>
                    <span class="rating-badge">⭐ 4.${Math.floor(Math.random()*9)} Excellent</span>
                </div>
                <div class="price-tag"><h2>${currency.symbol}${finalPrice}</h2><small>for ${nights} nights</small></div>
                <div class="action-buttons"><button class="detail-btn" onclick="openHotelDetails('${hotelName}', '${randomRoom}')">Details</button><button class="book-btn" onclick="initBooking('${hotelName}', ${finalPrice}, 'hotel', '${city}', '${randomRoom}')">Book Room</button></div>
            </div>`;
    }
}

function openFlightDetails(name, code, plane) {
    document.getElementById('detail-airline').innerText = name;
    document.getElementById('detail-content').innerHTML = `
        <div class="detail-row"><span>Flight Code:</span> <strong>${code}</strong></div>
        <div class="detail-row"><span>Aircraft:</span> <strong>${plane}</strong></div>
        <div class="detail-row"><span>Meal:</span> <strong>Included</strong></div>
        <div class="detail-row"><span>Baggage:</span> <strong>25kg Check-in</strong></div>`;
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
        <div class="detail-row"><span>Cancellation:</span> <strong>Free up to 24h</strong></div>`;
    document.getElementById('details-modal').classList.remove('hidden');
}

function closeDetailsModal() { document.getElementById('details-modal').classList.add('hidden'); }

function initBooking(name, price, type, routeInfo, roomType = "") {
    if(!loggedInUser) {
        alert("Please Sign In to book a trip.");
        openAuthModal();
        return;
    }

    const date = document.getElementById(type === 'flight' ? 'flight-date' : 'hotel-checkin').value;
    const currency = getCurrencyInfo();
    let checkOut = (type === 'hotel') ? document.getElementById('hotel-checkout').value : "";
    selectedTrip = { name, price, type, routeInfo, date, checkOut, roomType, symbol: currency.symbol };
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

    // RESET PAYMENT UI
    document.getElementById('booking-step-1').classList.remove('hidden');
    document.getElementById('booking-step-payment').classList.add('hidden');
    document.getElementById('booking-step-3').classList.add('hidden');
    document.getElementById('modal-footer-action').classList.remove('hidden');
    
    // Ensure Proceed button is visible and Confirm is hidden initially
    document.getElementById('btn-proceed').classList.remove('hidden');
    document.getElementById('btn-pay-confirm').classList.add('hidden');

    document.getElementById('booking-modal').classList.remove('hidden');
    generatedTripifyID = null; 
}

function setupFlightForms(count, price) {
    document.getElementById('summary-lbl-1').innerText = "Airline";
    document.getElementById('summary-lbl-2').innerText = "Class";
    document.getElementById('modal-trip-class').innerText = "Economy";
    selectedTrip.total = price * count; 
    document.getElementById('modal-total').innerText = `${selectedTrip.symbol}${Math.round(selectedTrip.total)}`;
    renderPassengerForms(count, "Passenger");
}

function setupHotelForms(maxGuests) {
    document.getElementById('summary-lbl-1').innerText = "Hotel";
    document.getElementById('summary-lbl-2').innerText = "Room";
    document.getElementById('modal-trip-class').innerText = selectedTrip.roomType; 
    const breakdownDiv = document.getElementById('guest-breakdown-section');
    breakdownDiv.innerHTML = `
        <div class="grid-2" style="background:#F3F4F6; padding:1rem; border-radius:8px; margin-bottom:1.5rem;">
            <div class="input-wrapper"><label>No. of Adults (18+)</label><input type="number" id="modal-adults" value="${maxGuests}" min="1" class="input-field" onchange="handleHotelGuestChange()"></div>
            <div class="input-wrapper"><label>No. of Children (<18)</label><input type="number" id="modal-children" value="0" min="0" class="input-field" onchange="handleHotelGuestChange()"></div>
        </div>
        <p style="text-align:right; font-size:0.8rem; color:#6B7280; margin-top:-10px; margin-bottom:15px;">Max Allowed Guests: <strong>${maxGuests}</strong></p>`;
    handleHotelGuestChange(); 
}

function handleHotelGuestChange() {
    const adultsInput = document.getElementById('modal-adults');
    const childrenInput = document.getElementById('modal-children');
    let adults = parseInt(adultsInput.value) || 1;
    let children = parseInt(childrenInput.value) || 0;
    if (adults + children > selectedTrip.maxGuests) {
        alert(`Total guests cannot exceed ${selectedTrip.maxGuests} (as selected in search).`);
        adults = selectedTrip.maxGuests; children = 0;
        adultsInput.value = adults; childrenInput.value = children;
    }
    selectedTrip.total = (selectedTrip.unitPrice * adults) + (selectedTrip.unitPrice * 0.5 * children);
    document.getElementById('modal-total').innerText = `${selectedTrip.symbol}${Math.round(selectedTrip.total)}`;
    renderPassengerForms(adults + children, "Guest", adults, children);
}

function renderPassengerForms(totalCount, labelType, adultCount = 0, childCount = 0) {
    const formContainer = document.getElementById('passenger-forms');
    let html = '';
    const userCountry = document.getElementById('user-country-input').value;
    let adultIdx = 1, childIdx = 1;

    if (labelType === "Passenger") { for(let i=1; i<=totalCount; i++) html += generateFormHTML(i, "Passenger", userCountry); } 
    else { for(let i=1; i<=adultCount; i++) html += generateFormHTML(adultIdx++, "Adult", userCountry); for(let i=1; i<=childCount; i++) html += generateFormHTML(childIdx++, "Child", userCountry); }

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
    let extraFieldHTML = typeLabel !== "Child" ? `<div class="input-wrapper"><label>${idLabel}</label><input type="text" ${idId} class="input-field mandatory" placeholder="${idPlaceholder}"></div>` : `<div class="input-wrapper"></div>`; 

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
    document.querySelectorAll('.mandatory').forEach(el => { if(!el.value) { el.style.borderColor = 'red'; valid = false; } else { el.style.borderColor = '#E5E7EB'; } });
    if(!valid) return alert("Please fill all fields.");
    const phoneInput = document.getElementById('contact-phone');
    if (phoneInput && phoneInput.value.length !== 10) { alert("Mobile number must be exactly 10 digits."); phoneInput.style.borderColor = 'red'; return; }
    const enteredID = document.getElementById('p1-id').value.trim();
    if (!generatedTripifyID || enteredID !== generatedTripifyID) { alert("Invalid or missing Tripify ID."); return; }
    
    // SWITCH TO PAYMENT UI
    document.getElementById('booking-step-1').classList.add('hidden');
    document.getElementById('booking-step-payment').classList.remove('hidden');
    
    // HIDE PROCEED, SHOW CONFIRM
    document.getElementById('btn-proceed').classList.add('hidden');
    document.getElementById('btn-pay-confirm').classList.remove('hidden');
}

function selectPayment(el, method) {
    document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected'); selectedPaymentMethod = method;
}

function confirmPayment() {
    if(!selectedPaymentMethod) return alert("Please select a payment method.");
    
    document.getElementById('payment-loader').classList.remove('hidden');
    document.querySelector('.payment-options').classList.add('hidden');
    document.getElementById('btn-pay-confirm').classList.add('hidden');
    setTimeout(() => { document.getElementById('payment-loader').classList.add('hidden'); document.querySelector('.payment-options').classList.remove('hidden'); generateTicket(); }, 2000);
}

function generateTicket() {
    let p1Name = "Guest";
    const p1First = document.getElementById('p1-first') || document.getElementById('adult1-first');
    const p1Last = document.getElementById('p1-last') || document.getElementById('adult1-last');
    if (p1First && p1Last) p1Name = p1First.value + " " + p1Last.value;
    const pin = document.getElementById('booking-pin').value;
    const pnr = "TRIP" + Math.floor(Math.random() * 100000);

    // PERSIST BOOKING (USER SPECIFIC)
    if(loggedInUser) {
        const newBooking = { pnr, pin, title: selectedTrip.name, meta: selectedTrip.type === 'flight' ? selectedTrip.routeInfo : "Hotel Stay", date: selectedTrip.date, price: selectedTrip.total, status: "Confirmed" };
        
        // Update User Object in Memory
        if(!loggedInUser.history) loggedInUser.history = [];
        loggedInUser.history.push(newBooking);
        
        // Update User Object in DB
        const usersDB = JSON.parse(localStorage.getItem('tripify_users_db')) || [];
        const dbIdx = usersDB.findIndex(u => u.email === loggedInUser.email);
        if(dbIdx !== -1) {
            usersDB[dbIdx].history = loggedInUser.history;
            localStorage.setItem('tripify_users_db', JSON.stringify(usersDB));
        }
        
        // Save current session
        localStorage.setItem('tripify_user', JSON.stringify(loggedInUser));
    }

    document.getElementById('ticket-passenger').innerText = p1Name;
    document.getElementById('ticket-pnr').innerText = pnr;
    document.getElementById('ticket-date').innerText = selectedTrip.date;
    document.getElementById('ticket-airline').innerText = selectedTrip.name;

    if (selectedTrip.type === 'flight') {
        document.getElementById('ticket-flight-header').classList.remove('hidden'); document.getElementById('ticket-hotel-header').classList.add('hidden'); document.getElementById('ticket-date-field').classList.remove('hidden');
        document.getElementById('ticket-origin-code').innerText = selectedTrip.routeInfo.split('->')[0].trim().substring(0,3).toUpperCase();
        document.getElementById('ticket-dest-code').innerText = selectedTrip.routeInfo.split('->')[1].trim().substring(0,3).toUpperCase();
        document.getElementById('ticket-lbl-provider').innerText = "Airline"; document.getElementById('ticket-lbl-class').innerText = "Class"; document.getElementById('ticket-class-display').innerText = "Economy"; document.getElementById('ticket-lbl-pax').innerText = "Passenger";
    } else {
        document.getElementById('ticket-flight-header').classList.add('hidden'); document.getElementById('ticket-hotel-header').classList.remove('hidden'); document.getElementById('ticket-date-field').classList.add('hidden'); 
        document.getElementById('ticket-checkin-date').innerText = selectedTrip.date; document.getElementById('ticket-checkout-date').innerText = selectedTrip.checkOut;
        document.getElementById('ticket-lbl-provider').innerText = "Hotel"; document.getElementById('ticket-lbl-class').innerText = "Room"; document.getElementById('ticket-class-display').innerText = selectedTrip.roomType; document.getElementById('ticket-lbl-pax').innerText = "Guest";
    }

    document.getElementById('booking-step-payment').classList.add('hidden');
    document.getElementById('modal-footer-action').classList.add('hidden');
    document.getElementById('booking-step-3').classList.remove('hidden');
}

// --- UTILS ---
function switchTab(tab) {
    document.getElementById('flight-section').classList.toggle('hidden', tab !== 'flights');
    document.getElementById('hotel-section').classList.toggle('hidden', tab !== 'hotels');
    document.getElementById('main-content').classList.toggle('hidden', tab !== 'flights'); 
    document.getElementById('results-area').innerHTML = ''; document.getElementById('results-count').innerText = '';
    document.getElementById('history-view').classList.add('hidden'); document.getElementById('main-hero').classList.remove('hidden');
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active')); document.getElementById('btn-' + tab).classList.add('active');
}

function showHistory() {
    // SECURITY CHECK
    if(!loggedInUser) {
        alert("Please login to view your history.");
        openAuthModal();
        return;
    }

    document.getElementById('main-hero').classList.add('hidden'); document.getElementById('main-content').classList.add('hidden'); document.getElementById('history-view').classList.remove('hidden');
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active')); document.getElementById('btn-history').classList.add('active');
    const list = document.getElementById('history-list'); list.innerHTML = '';
    
    // LOAD USER SPECIFIC HISTORY
    const history = loggedInUser.history || [];

    if(history.length === 0) { list.innerHTML = '<p class="text-muted" style="text-align:center;">No bookings found.</p>'; return; }
    history.forEach(b => {
        let btn = b.status === 'Confirmed' ? `<button class="btn-danger" onclick="cancelHistoryBooking('${b.pnr}')">Cancel</button>` : `<span class="badge-cancelled">Cancelled</span>`;
        list.innerHTML += `<div class="history-card"><div class="history-details"><h3>${b.title}</h3><p>${b.meta} • ${b.date}</p><small>PNR: ${b.pnr}</small></div><div class="history-actions"><strong>${b.price}</strong>${btn}</div></div>`;
    });
}

function cancelHistoryBooking(pnr) {
    const history = loggedInUser.history;
    const b = history.find(x => x.pnr === pnr);
    
    if(b && prompt(`Enter PIN for ${pnr}:`) === b.pin) { 
        b.status = 'Cancelled'; 
        
        // SYNC DB
        const usersDB = JSON.parse(localStorage.getItem('tripify_users_db'));
        const idx = usersDB.findIndex(u => u.email === loggedInUser.email);
        usersDB[idx].history = history;
        localStorage.setItem('tripify_users_db', JSON.stringify(usersDB));
        localStorage.setItem('tripify_user', JSON.stringify(loggedInUser));
        
        showHistory(); 
        alert("Booking Cancelled."); 
    } else { alert("Incorrect PIN"); }
}

function downloadTicket() { window.print(); }
function closeModal() { document.getElementById('booking-modal').classList.add('hidden'); }
