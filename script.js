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
// Global array to store current search results for index-based access
let currentMockData = []; 
let currentSearchType = "";
let currentCancellationPNR = null;
let pendingLoginUser = null; 
let selectedSeats = []; 
let recentSearches = JSON.parse(localStorage.getItem('tripify_recent_searches')) || [];
let mockDataId = 0; // Unique ID counter for mock data items

window.onload = function() {
    const savedTheme = localStorage.getItem('tripify_theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').innerText = '☀️';
    }

    const savedUser = localStorage.getItem('tripify_user');
    if (savedUser) loginSuccess(JSON.parse(savedUser), false);
 
    loadRecentSearches();

    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 365);
    const maxDateStr = maxDate.toISOString().split('T')[0];
 
    const fDate = document.getElementById('flight-date');
    const fRetDate = document.getElementById('flight-return-date');
    fDate.setAttribute('min', todayStr); fDate.setAttribute('max', maxDateStr); fDate.value = todayStr;
    
    // Set initial min return date
    fRetDate.setAttribute('min', todayStr); 
    fRetDate.setAttribute('max', maxDateStr);

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

// --- HELPER: DATE CONSTRAINT LOGIC ---
function updateReturnMinDate() {
    const depInput = document.getElementById('flight-date');
    const retInput = document.getElementById('flight-return-date');
    
    if (depInput.value) {
        retInput.setAttribute('min', depInput.value);
    }
}

// --- COIN CALCULATION LOGIC ---
function getCoinValue() {
    const currency = getCurrencyInfo();
    // 1 Coin = 0.25 INR
    // Convert 0.25 INR to current currency.
    // 1 USD = 84 INR => 1 INR = 1/84 USD.
    return (0.25 / 84) * currency.rate;
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'default') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="toast-msg">${message}</span><span style="cursor:pointer" onclick="this.parentElement.remove()">✖</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.animation = 'fadeOut 0.5s forwards'; setTimeout(() => toast.remove(), 500); }, 3000);
}

// --- DARK MODE ---
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-toggle');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('tripify_theme', 'dark'); btn.innerText = '☀️';
    } else {
        localStorage.setItem('tripify_theme', 'light'); btn.innerText = '🌙';
    }
}

// --- RECENT SEARCHES ---
function loadRecentSearches() {
    const container = document.getElementById('recent-searches');
    container.innerHTML = '';
    recentSearches.forEach(search => {
        const chip = document.createElement('div');
        chip.className = 'chip';
        chip.innerText = search;
        chip.onclick = () => {
            const parts = search.split(' ➝ ');
            if (parts.length === 2) {
                document.getElementById('flight-origin').value = parts[0];
                document.getElementById('flight-destination').value = parts[1];
            }
        };
        container.appendChild(chip);
    });
}

function saveRecentSearch(origin, dest) {
    const query = `${origin.split('(')[0]} ➝ ${dest.split('(')[0]}`;
    if (!recentSearches.includes(query)) {
        recentSearches.unshift(query);
        if (recentSearches.length > 5) recentSearches.pop();
        localStorage.setItem('tripify_recent_searches', JSON.stringify(recentSearches));
        loadRecentSearches();
    }
}
 
// --- AUTHENTICATION ---
function handleUserNavClick() {
    if (loggedInUser) { openProfileModal(); } else { openAuthModal(); }
}

function openAuthModal() {
    document.getElementById('auth-modal').classList.remove('hidden');
    document.getElementById('auth-step-1').classList.remove('hidden');
    document.getElementById('auth-step-otp').classList.add('hidden');
    document.getElementById('auth-step-forgot').classList.add('hidden'); 
    document.getElementById('auth-step-set-pin').classList.add('hidden');
    document.getElementById('auth-step-pin').classList.add('hidden');
    pendingLoginUser = null;
}
 
function closeAuthModal() { document.getElementById('auth-modal').classList.add('hidden'); }
 
function switchAuthTab(tab) {
    currentAuthMode = tab;
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`tab-${tab}`).classList.add('active');
    const title = document.getElementById('auth-title');
    const regFields = document.getElementById('register-fields');
    const forgotLink = document.getElementById('forgot-link-container');
    if(tab === 'register') { 
       title.innerText = "Create Account"; regFields.classList.remove('hidden'); forgotLink.classList.add('hidden');
    } else { 
       title.innerText = "Welcome Back"; regFields.classList.add('hidden'); forgotLink.classList.remove('hidden');
    }
}
 
function initGoogleAuth() {
    const email = document.getElementById('auth-email').value;
    if(!email) return showToast("Please enter your email first.", "error");
    handleAuthProceed();
}
 
function handleAuthProceed() {
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value.trim();
    if(!email || !password) return showToast("Please enter both email and password.", "error");
    const usersDB = JSON.parse(localStorage.getItem('tripify_users_db')) || [];
    
    if (currentAuthMode === 'signin') {
        const existingUser = usersDB.find(u => u.email === email);
        if (!existingUser) { showToast("No user found. Please register.", "error"); switchAuthTab('register'); return; }
        if (existingUser.password !== password) { showToast("Incorrect password.", "error"); return; }
        pendingLoginUser = existingUser;
        if (existingUser.loginPin) {
            document.getElementById('auth-step-1').classList.add('hidden');
            document.getElementById('auth-step-pin').classList.remove('hidden');
        } else {
            document.getElementById('auth-step-1').classList.add('hidden');
            document.getElementById('auth-step-set-pin').classList.remove('hidden');
        }
    } else {
        const existingUser = usersDB.find(u => u.email === email);
        if (existingUser) { showToast("User already exists. Please Sign In.", "error"); switchAuthTab('signin'); return; }
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
}
 
function verifyOTP() {
    const entered = document.getElementById('auth-otp').value;
    if(entered === simulatedOTP) {
        document.getElementById('auth-step-otp').classList.add('hidden');
        document.getElementById('auth-step-set-pin').classList.remove('hidden');
    } else { showToast("Incorrect OTP.", "error"); }
}

function saveNewLoginPinReg() {
    const pin = document.getElementById('set-pin-input').value;
    if (pin.length !== 4) return showToast("PIN must be 4 digits.", "error");
    const nameInput = document.getElementById('auth-name').value;
    const emailInput = document.getElementById('auth-email').value;
    const passwordInput = document.getElementById('auth-password').value;
    const usersDB = JSON.parse(localStorage.getItem('tripify_users_db')) || [];
    // COINS DEFAULT 0
    const newUser = { name: nameInput || emailInput.split('@')[0], email: emailInput, password: passwordInput, history: [], loginPin: pin, coins: 0 };
    usersDB.push(newUser);
    localStorage.setItem('tripify_users_db', JSON.stringify(usersDB));
    loginSuccess(newUser, true);
    closeAuthModal();
}

function verifyLoginPin() {
    const pin = document.getElementById('login-pin-input').value;
    if (!pendingLoginUser) return; 
    if (pin === pendingLoginUser.loginPin) {
        loginSuccess(pendingLoginUser, true);
        closeAuthModal();
    } else { showToast("Incorrect Login PIN.", "error"); }
}

function recoverLoginPinAuth() {
    if (pendingLoginUser) {
        alert(`GMAIL SIMULATION:\n\nHello ${pendingLoginUser.name},\nYour Login PIN is: ${pendingLoginUser.loginPin}`);
    } else { showToast("Error recovering PIN.", "error"); }
}
 
// --- FORGOT PASSWORD ---
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
    if(!email) return showToast("Please enter your email.", "error");
    const usersDB = JSON.parse(localStorage.getItem('tripify_users_db')) || [];
    const existingUser = usersDB.find(u => u.email === email);
    if(!existingUser) { showToast("Email not registered.", "error"); return; }
    forgotPasswordEmail = email;
    simulatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    const btn = document.getElementById('btn-forgot-action');
    btn.innerText = "Sending...";
    btn.disabled = true;
    setTimeout(() => {
        btn.innerText = "Verify OTP"; btn.disabled = false;
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
    } else { showToast("Incorrect OTP.", "error"); }
}
 
function confirmPasswordReset() {
    const newPass = document.getElementById('forgot-new-password').value.trim();
    if(!newPass) return showToast("Please enter a new password.", "error");
    const usersDB = JSON.parse(localStorage.getItem('tripify_users_db')) || [];
    const userIndex = usersDB.findIndex(u => u.email === forgotPasswordEmail);
    if(userIndex !== -1) {
       usersDB[userIndex].password = newPass;
       localStorage.setItem('tripify_users_db', JSON.stringify(usersDB));
       showToast("Password updated! Please login.", "success");
       closeAuthModal();
    } else { showToast("Error updating password.", "error"); }
}
 
function loginSuccess(user, save) {
    loggedInUser = user;
    if (loggedInUser.coins === undefined) loggedInUser.coins = 0; 
    
    if(save) localStorage.setItem('tripify_user', JSON.stringify(user));
    const btn = document.getElementById('nav-user-btn');
    btn.innerText = `👤 ${user.name}`;
    btn.classList.add('logged-in');
    
    if(!document.getElementById('history-view').classList.contains('hidden')) {
        showHistory();
    }
    showToast(`Welcome back, ${user.name}!`, "success");
}
 
function logout() {
    localStorage.removeItem('tripify_user');
    loggedInUser = null;
    const btn = document.getElementById('nav-user-btn');
    btn.innerText = "Sign In";
    btn.classList.remove('logged-in');
    closeProfileModal(); 
    showToast("Logged out successfully.");
    switchTab('flights'); 
}
 
// --- PROFILE ---
function openProfileModal() {
    if (!loggedInUser) return;
    const currency = getCurrencyInfo();
    const coinVal = getCoinValue().toFixed(3);

    document.getElementById('profile-name').innerText = loggedInUser.name;
    document.getElementById('profile-email').innerText = loggedInUser.email;
    document.getElementById('profile-avatar').innerText = loggedInUser.name.charAt(0).toUpperCase();
    document.getElementById('profile-coins').innerText = loggedInUser.coins || 0;
    
    document.getElementById('coin-rate-text').innerText = `1 Coin = ${currency.symbol}${coinVal}`;

    resetProfileView();
    document.getElementById('profile-modal').classList.remove('hidden');
}

function closeProfileModal() { document.getElementById('profile-modal').classList.add('hidden'); }

function resetProfileView() {
    document.getElementById('profile-main-view').classList.remove('hidden');
    document.getElementById('profile-change-pass').classList.add('hidden');
    document.getElementById('profile-manage-pin').classList.add('hidden');
    document.querySelectorAll('#profile-modal input').forEach(i => i.value = '');
}

function openChangePassword() {
    document.getElementById('profile-main-view').classList.add('hidden');
    document.getElementById('profile-change-pass').classList.remove('hidden');
}

function saveNewPassword() {
    const cur = document.getElementById('cp-current').value;
    const newP = document.getElementById('cp-new').value;
    if (cur !== loggedInUser.password) return showToast("Current password incorrect.", "error");
    if (!newP) return showToast("Enter new password.", "error");
    loggedInUser.password = newP;
    updateUserInDB();
    showToast("Password changed.", "success");
    resetProfileView();
}

function openManageLoginPin() {
    document.getElementById('profile-main-view').classList.add('hidden');
    document.getElementById('profile-manage-pin').classList.remove('hidden');
    const title = document.getElementById('pin-manage-title');
    const removeBtn = document.getElementById('btn-remove-pin');
    if (loggedInUser.loginPin) {
        title.innerText = "Change Login PIN";
        removeBtn.classList.remove('hidden');
    } else {
        title.innerText = "Set Login PIN";
        removeBtn.classList.add('hidden');
    }
}

function saveLoginPin() {
    const newPin = document.getElementById('mp-new').value;
    if (newPin.length !== 4) return showToast("PIN must be 4 digits.", "error");
    loggedInUser.loginPin = newPin;
    updateUserInDB();
    showToast("Login PIN updated.", "success");
    resetProfileView();
}

function removeLoginPin() {
    if(confirm("Are you sure? Removing the PIN reduces account security.")) {
        delete loggedInUser.loginPin;
        updateUserInDB();
        showToast("Login PIN removed.");
        resetProfileView();
    }
}

function recoverLoginPin() {
    if (loggedInUser && loggedInUser.loginPin) {
         alert(`GMAIL SIMULATION:\n\nHello ${loggedInUser.name},\nYour Login PIN is: ${loggedInUser.loginPin}`);
    } else { showToast("No PIN set for this account.", "error"); }
}

function updateUserInDB() {
    localStorage.setItem('tripify_user', JSON.stringify(loggedInUser));
    const usersDB = JSON.parse(localStorage.getItem('tripify_users_db')) || [];
    const idx = usersDB.findIndex(u => u.email === loggedInUser.email);
    if (idx !== -1) {
        usersDB[idx] = loggedInUser;
        localStorage.setItem('tripify_users_db', JSON.stringify(usersDB));
    }
}

// --- CORE ---
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
       showToast("Bookings max 1 year in advance.", "error");
        input.value = maxDate;
    }
}
 
function sendTripifyID(btnElement) {
    const email = document.getElementById('contact-email').value;
    if (!email) { showToast("Please enter email first.", "error"); return; }
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    generatedTripifyID = "TP" + randomNum;
    alert(`Simulation: Email sent to ${email}\n\nYour Tripify Verification ID is: ${generatedTripifyID}`);
    btnElement.innerText = "Regenerate ID";
    btnElement.disabled = false;
}
 
// --- HELPER FUNCS ---
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
    const tripType = document.querySelector('input[name="regionType"]:checked').value; // domestic/intl
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
    resetResultsUI();
}

function resetResultsUI() {
    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('results-area').innerHTML = '';
    currentMockData = [];
}

// ROUND TRIP LAYOUT LOGIC
function toggleReturnDate() {
    const isRound = document.querySelector('input[name="tripType"]:checked').value === 'roundtrip';
    const retGroup = document.getElementById('return-date-group');
    const grid = document.getElementById('flight-search-grid');
    
    if (isRound) {
        retGroup.classList.remove('hidden');
        grid.classList.add('round-trip-active');
    } else {
        retGroup.classList.add('hidden');
        grid.classList.remove('round-trip-active');
    }
    resetResultsUI();
    updateReturnMinDate();
}
 
function handleSearch(type) {
    currentSearchType = type;
    const resultsArea = document.getElementById('results-area');
    const headerTitle = document.querySelector('#results-header h2');
    
    if (type === 'flight') {
        const originVal = document.getElementById('flight-origin').value;
        const destVal = document.getElementById('flight-destination').value;
        const depDate = document.getElementById('flight-date').value;
        const retDate = document.getElementById('flight-return-date').value;
        const isRound = document.querySelector('input[name="tripType"]:checked').value === 'roundtrip';
        
        if(!originVal || !destVal) { showToast("Please enter locations.", "error"); return; }
        if(originVal === destVal) { showToast("Source/Dest cannot be same.", "error"); return; }
        
        if (!depDate) { showToast("Select Departure Date.", "error"); return; }
        if(isRound) {
            if (!retDate) { showToast("Select Return Date.", "error"); return; }
            if (retDate < depDate) { showToast("Return date cannot be before departure.", "error"); return; }
        }
        
        saveRecentSearch(originVal, destVal);

    } else if (type === 'hotel') {
        const country = document.getElementById('hotel-country').value;
        const city = document.getElementById('hotel-city').value;
        const checkin = document.getElementById('hotel-checkin').value;
        const checkout = document.getElementById('hotel-checkout').value;
        if(!country || !city || !checkin || !checkout) { showToast("Please fill all hotel fields.", "error"); return; }
        const d1 = new Date(checkin); const d2 = new Date(checkout);
        const diffDays = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
        if (diffDays <= 0) { showToast("Checkout must be after Check-in.", "error"); return; }
        if (diffDays > 60) { showToast("Maximum stay is 60 days.", "error"); return; }
        
        const checkinTime = document.getElementById('hotel-checkin-time').value;
        const checkoutTime = document.getElementById('hotel-checkout-time').value;
        const rooms = document.getElementById('hotel-rooms').value;
        const beds = document.getElementById('hotel-beds').value;
        const floor = document.getElementById('hotel-floor').value;

        headerTitle.innerText = `Hotels in ${city}`;
        renderHotelResults(city, diffDays, checkinTime, checkoutTime, rooms, beds, floor);
    }

    resultsArea.innerHTML = ''; 
    document.getElementById('main-content').classList.remove('hidden');
    clearFilters(false);
    
    const mapWrapper = document.getElementById('map-wrapper');
    if (type === 'hotel') {
       mapWrapper.classList.add('hidden'); 
       document.getElementById('flight-filters').classList.add('hidden');
       document.getElementById('hotel-filters').classList.remove('hidden');
    } else {
       mapWrapper.classList.remove('hidden');
       document.getElementById('flight-filters').classList.remove('hidden');
       document.getElementById('hotel-filters').classList.add('hidden');
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
        currentMockData = []; 
        if (type === 'flight') {
            const originVal = document.getElementById('flight-origin').value;
            const destVal = document.getElementById('flight-destination').value;
            const date = document.getElementById('flight-date').value;
            const flightClass = document.getElementById('flight-class').value;
            const tripType = document.querySelector('input[name="regionType"]:checked').value; 
            const originCountry = document.getElementById('user-country-input').value;
            const timeSlot = document.getElementById('flight-timeslot').value;

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
            renderFlightResults(originVal, destVal, date, flightClass, tripType, originCountry, timeSlot);
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

function calculateFlightDuration(origin, dest) {
    const c1 = getCityCoords(origin);
    const c2 = getCityCoords(dest);
    const R = 6371; 
    const dLat = (c2[0] - c1[0]) * Math.PI / 180;
    const dLon = (c2[1] - c1[1]) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(c1[0] * Math.PI / 180) * Math.cos(c2[0] * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c;
    const hours = (d / 800) + 0.5;
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m}m`;
}

function updatePriceLabel(val) {
    document.getElementById('price-val').innerText = getCurrencyInfo().symbol + val;
}

function clearFilters(apply = true) {
    document.getElementById('price-range').value = 5000;
    document.getElementById('price-val').innerText = 'Any';
    document.getElementById('filter-airline').value = 'all';
    document.getElementById('filter-rating').value = '0';
    document.getElementById('filter-timing').value = 'all'; // Reset timing
    if(apply && currentMockData.length > 0) applyFilters();
}

function renderFlightResults(origin, dest, date, flightClass, tripType, originCountry, timeSlot) {
    const currency = getCurrencyInfo();
    const isRoundTrip = document.querySelector('input[name="tripType"]:checked').value === 'roundtrip';
    
    let relevantAirlines = (tripType === 'domestic') ? airlineDatabase.filter(a => a.country === originCountry) : airlineDatabase.filter(a => a.country === originCountry || ["UAE", "UK", "USA", "Germany", "Singapore"].includes(a.country));
    if (relevantAirlines.length === 0) relevantAirlines = [{name: "Global Air", country: "International"}];
 
    const filterAirlineSelect = document.getElementById('filter-airline');
    filterAirlineSelect.innerHTML = '<option value="all">All Airlines</option>';
    const uniqueAirlines = [...new Set(relevantAirlines.map(a => a.name))];
    uniqueAirlines.forEach(name => {
        filterAirlineSelect.innerHTML += `<option value="${name}">${name}</option>`;
    });

    const calculatedDuration = calculateFlightDuration(origin, dest);

    for(let i=0; i<Math.min(10, relevantAirlines.length + 2); i++) {
        const airline = relevantAirlines[Math.floor(Math.random() * relevantAirlines.length)].name;
        let basePriceUSD = (tripType === 'domestic') ? 50 + Math.floor(Math.random() * 100) : 450 + Math.floor(Math.random() * 500);
        if(flightClass === 'Business') basePriceUSD *= 3; if(flightClass === 'First') basePriceUSD *= 5;
        if (isRoundTrip) basePriceUSD *= 1.8;

        // TIME GENERATION
        let hour;
        if (timeSlot === 'morning') hour = 6 + Math.floor(Math.random() * 5); // 6-11
        else if (timeSlot === 'afternoon') hour = 12 + Math.floor(Math.random() * 5); // 12-17
        else if (timeSlot === 'evening') hour = 18 + Math.floor(Math.random() * 5); // 18-23
        else if (timeSlot === 'night') hour = 0 + Math.floor(Math.random() * 5); // 0-5
        else hour = Math.floor(Math.random() * 23); // Any
        
        const min = Math.floor(Math.random() * 11) * 5; // 00, 05, 10...
        const timeString = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;

        const finalPrice = Math.round(basePriceUSD * currency.rate);
        
        currentMockData.push({
            id: mockDataId++, 
            type: 'flight',
            airline: airline,
            flightCode: `${airline.substring(0,2).toUpperCase()}-${Math.floor(Math.random()*900)+100}`,
            plane: Math.random() > 0.5 ? "Boeing 737" : "Airbus A320",
            origin: origin,
            dest: dest,
            date: date,
            time: timeString, // New Time Property
            hour: hour, // For filtering
            class: flightClass,
            price: finalPrice,
            currencySym: currency.symbol,
            duration: calculatedDuration,
            durationMins: parseInt(calculatedDuration.split('h')[0])*60 + parseInt(calculatedDuration.split(' ')[1]),
            isRoundTrip: isRoundTrip
        });
    }
    applyFilters();
}
 
function renderHotelResults(city, nights, checkInT, checkOutT, rooms, beds, floor) {
    const currency = getCurrencyInfo();
    for(let i=0; i<8; i++) {
        const hotelName = `${hotelChains[Math.floor(Math.random() * hotelChains.length)]} ${city.split('(')[0]}`;
        const randomRoom = roomTypes[Math.floor(Math.random() * roomTypes.length)]; 
        const rating = (3.5 + Math.random() * 1.5).toFixed(1); 
        
        // Base Price logic
        let basePriceUSD = 80 + Math.floor(Math.random() * 300);
        
        // Add Room/Bed costs
        const roomMultiplier = parseInt(rooms); 
        const bedCost = (parseInt(beds) - 1) * 20; // Extra bed costs $20
        
        basePriceUSD = (basePriceUSD + bedCost) * roomMultiplier;
        
        if (floor === 'High') basePriceUSD += 50; 

        const totalPriceUSD = basePriceUSD * nights;
        const finalPrice = Math.round(totalPriceUSD * currency.rate);

        currentMockData.push({
            id: mockDataId++, 
            type: 'hotel',
            name: hotelName,
            room: randomRoom,
            rating: rating,
            nights: nights,
            price: finalPrice,
            currencySym: currency.symbol,
            city: city,
            // Capture specific hotel details
            checkInTime: checkInT,
            checkOutTime: checkOutT,
            roomCount: rooms,
            bedCount: beds,
            floorPref: floor
        });
    }
    applyFilters();
}

function applyFilters() {
    const resultsArea = document.getElementById('results-area');
    resultsArea.innerHTML = '';
    
    const sliderVal = parseInt(document.getElementById('price-range').value); 
    const sortVal = document.getElementById('sort-results').value;
    const timeFilter = document.getElementById('filter-timing').value; // NEW FILTER

    let filtered = currentMockData.filter(item => {
        if (item.price > sliderVal * (item.currencySym === '₹' ? 50 : 1)) return false; 

        if (currentSearchType === 'flight') {
            const airlineFilter = document.getElementById('filter-airline').value;
            if (airlineFilter !== 'all' && item.airline !== airlineFilter) return false;
            
            // TIMING LOGIC
            if (timeFilter !== 'all') {
                const h = item.hour;
                if (timeFilter === 'morning' && (h < 6 || h >= 12)) return false;
                if (timeFilter === 'afternoon' && (h < 12 || h >= 18)) return false;
                if (timeFilter === 'evening' && (h < 18 || h >= 24)) return false;
                if (timeFilter === 'night' && (h >= 6)) return false;
            }
        }
        
        if (currentSearchType === 'hotel') {
            const ratingFilter = parseFloat(document.getElementById('filter-rating').value);
            if (parseFloat(item.rating) < ratingFilter) return false;
        }
        return true;
    });

    if (sortVal === 'price_low') filtered.sort((a, b) => a.price - b.price);
    if (sortVal === 'price_high') filtered.sort((a, b) => b.price - a.price);
    if (sortVal === 'duration') filtered.sort((a, b) => (a.durationMins || 0) - (b.durationMins || 0));

    document.getElementById('results-count').innerText = `Found ${filtered.length} options`;

    if (filtered.length === 0) {
        resultsArea.innerHTML = '<div style="text-align:center; padding:2rem; width:100%;"><h3>No results match your filters.</h3><button class="nav-btn" onclick="clearFilters()">Clear Filters</button></div>';
        return;
    }

    filtered.forEach(item => {
        if (item.type === 'flight') {
            const routeStr = `${item.origin} -> ${item.dest}`;
            const badge = item.isRoundTrip ? `<span class="badge-eco" style="background:#DBEAFE; color:#1E40AF; margin-left:10px;">Round Trip</span>` : '';
            
            resultsArea.innerHTML += `
            <div class="flight-card">
                <div class="airline-info">
                    <h3>${item.airline}</h3>
                    <p style="color:var(--text-muted)">${item.flightCode} • ${item.class}</p>
                </div>
                
                <div class="flight-meta">
                    <div style="font-size:1.1rem; font-weight:700;">${item.origin.split('(')[0]} ➝ ${item.dest.split('(')[0]}</div>
                    <div style="color:var(--text-muted); font-size:0.9rem;">${item.date} at ${item.time}</div>
                    ${badge}
                </div>
                
                <div class="flight-meta">
                    <div style="font-weight:700;">Non-stop</div>
                    <div style="color:var(--text-muted); font-size:0.9rem;">${item.duration}</div>
                </div>
                
                <div class="price-tag">
                    <h2>${item.currencySym}${item.price}</h2>
                    <div class="action-buttons">
                        <button class="detail-btn" onclick="openFlightDetails('${item.airline}', '${item.flightCode}', '${item.plane}')">Details</button>
                        <button class="book-btn" onclick="initBooking(${item.id})">Book Now</button>
                    </div>
                </div>
            </div>`;
        } else {
            // Updated Hotel Card to show beds/floor/rooms
            resultsArea.innerHTML += `
            <div class="hotel-card">
                <div class="hotel-info">
                    <h3>${item.name}</h3>
                    <p style="color:var(--primary); font-weight:600;">${item.room}</p>
                    <p>${item.roomCount} Rooms • ${item.bedCount} Bed(s)/Room • ${item.floorPref} Floor</p>
                    <span class="rating-badge">⭐ ${item.rating} Excellent</span>
                </div>
                <div class="price-tag"><h2>${item.currencySym}${item.price}</h2><small>for ${item.nights} nights</small></div>
                <div class="action-buttons">
                    <button class="detail-btn" onclick="openHotelDetails('${item.name}', '${item.room}')">Details</button>
                    <button class="book-btn" onclick="initBooking(${item.id})">Book Room</button>
                </div>
            </div>`;
        }
    });
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
 
function initBooking(arg1) {
    if(!loggedInUser) {
       showToast("Please Sign In to book.", "error");
       openAuthModal();
       return;
    }

    let item = null;
    if(typeof arg1 === 'number') {
        item = currentMockData.find(x => x.id === arg1);
    }
    
    if(!item) return;

    const currency = getCurrencyInfo();
    let name, price, type, routeInfo, roomType = "", date, checkOut = "";

    // Capture generic and specific props
    if(item.type === 'flight') {
        name = item.airline;
        price = item.price;
        type = 'flight';
        routeInfo = `${item.origin} -> ${item.dest}`;
        date = item.date; // Contains specific date
    } else {
        name = item.name;
        price = item.price;
        type = 'hotel';
        routeInfo = item.city;
        roomType = item.room;
        date = document.getElementById('hotel-checkin').value; 
        checkOut = document.getElementById('hotel-checkout').value;
    }
    
    selectedTrip = { 
        name, price, type, routeInfo, date, checkOut, roomType, 
        symbol: currency.symbol,
        passengerName: loggedInUser.name,
        originalPrice: price,
        discountApplied: 0,
        coinsRedeemed: 0,
        // Save specific preferences to trip object
        metaDetails: item.type === 'hotel' ? `${item.roomCount} Rooms, ${item.bedCount} Beds, ${item.floorPref} Floor` : `Time: ${item.time}`
    };
    
    document.getElementById('modal-trip-name').innerText = name;
    document.getElementById('guest-breakdown-section').innerHTML = ''; 
    document.getElementById('loyalty-redeem-block').classList.add('hidden'); 

    if(loggedInUser.coins > 0) {
        document.getElementById('loyalty-redeem-block').classList.remove('hidden');
        document.getElementById('coin-balance-display').innerText = `Bal: ${loggedInUser.coins}`;
        const coinVal = getCoinValue();
        const discountValue = (loggedInUser.coins * coinVal).toFixed(2);
        document.getElementById('redeemable-coins').innerText = loggedInUser.coins; 
        document.getElementById('coin-save-amount').innerText = `${currency.symbol}${discountValue}`;
        document.getElementById('use-coins-check').checked = false;
    }

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
    document.getElementById('booking-step-seats').classList.add('hidden');
    document.getElementById('booking-step-payment').classList.add('hidden');
    document.getElementById('booking-step-3').classList.add('hidden');
    document.getElementById('modal-footer-action').classList.remove('hidden');
    document.getElementById('btn-proceed').classList.remove('hidden');
    document.getElementById('btn-pay-confirm').classList.add('hidden');
    document.getElementById('booking-modal').classList.remove('hidden');
    generatedTripifyID = null; 
    document.getElementById('promo-code-input').value = ''; 
    document.getElementById('promo-message').innerText = '';
    document.getElementById('promo-code-input').disabled = false;
}
 
function setupFlightForms(count, price) {
    document.getElementById('summary-lbl-1').innerText = "Airline";
    document.getElementById('summary-lbl-2').innerText = "Class";
    document.getElementById('modal-trip-class').innerText = "Economy";
    selectedTrip.total = price * count; 
    selectedTrip.originalTotal = selectedTrip.total; 
    document.getElementById('modal-total').innerText = `${selectedTrip.symbol}${Math.round(selectedTrip.total)}`;
    renderPassengerForms(count, "Passenger");
}
 
function setupHotelForms(maxGuests) {
    document.getElementById('summary-lbl-1').innerText = "Hotel";
    document.getElementById('summary-lbl-2').innerText = "Room";
    document.getElementById('modal-trip-class').innerText = selectedTrip.roomType; 
    const breakdownDiv = document.getElementById('guest-breakdown-section');
    breakdownDiv.innerHTML = `
        <div class="grid-2" style="background:var(--bg-light); padding:1rem; border-radius:8px; margin-bottom:1.5rem;">
            <div class="input-wrapper"><label>No. of Adults (18+)</label><input type="number" id="modal-adults" value="${maxGuests}" min="1" class="input-field" onchange="handleHotelGuestChange()"></div>
            <div class="input-wrapper"><label>No. of Children (<18)</label><input type="number" id="modal-children" value="0" min="0" class="input-field" onchange="handleHotelGuestChange()"></div>
        </div>
        <p style="text-align:right; font-size:0.8rem; color:var(--text-muted); margin-top:-10px; margin-bottom:15px;">Max Allowed Guests: <strong>${maxGuests}</strong></p>`;
    handleHotelGuestChange(); 
}
 
function handleHotelGuestChange() {
    const adultsInput = document.getElementById('modal-adults');
    const childrenInput = document.getElementById('modal-children');
    let adults = parseInt(adultsInput.value) || 1;
    let children = parseInt(childrenInput.value) || 0;
    if (adults + children > selectedTrip.maxGuests) {
        showToast(`Max guests: ${selectedTrip.maxGuests}`, "error");
        adults = selectedTrip.maxGuests; children = 0;
        adultsInput.value = adults; childrenInput.value = children;
    }
    selectedTrip.total = (selectedTrip.unitPrice * adults) + (selectedTrip.unitPrice * 0.5 * children);
    selectedTrip.originalTotal = selectedTrip.total;
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
    if(!valid) return showToast("Please fill all fields.", "error");
    const phoneInput = document.getElementById('contact-phone');
    if (phoneInput && phoneInput.value.length !== 10) { showToast("Mobile number must be 10 digits.", "error"); phoneInput.style.borderColor = 'red'; return; }
    const enteredID = document.getElementById('p1-id').value.trim();
    if (!generatedTripifyID || enteredID !== generatedTripifyID) { showToast("Invalid or missing Tripify ID.", "error"); return; }
    
    // Capture name
    const p1First = document.getElementById('passenger1-first') || document.getElementById('adult1-first');
    const p1Last = document.getElementById('passenger1-last') || document.getElementById('adult1-last');
    if(p1First && p1Last) { selectedTrip.passengerName = p1First.value + " " + p1Last.value; }

    if (selectedTrip.type === 'flight') {
        const pCount = parseInt(document.getElementById('flight-passengers').value) || 1;
        generateSeatMap(pCount);
        document.getElementById('booking-step-1').classList.add('hidden');
        document.getElementById('booking-step-seats').classList.remove('hidden');
    } else {
        document.getElementById('booking-step-1').classList.add('hidden');
        document.getElementById('booking-step-payment').classList.remove('hidden');
        document.getElementById('btn-proceed').classList.add('hidden');
        document.getElementById('btn-pay-confirm').classList.remove('hidden');
    }
}

// SEAT SELECTION
function generateSeatMap(passengerCount) {
    const grid = document.getElementById('seat-map-grid');
    grid.innerHTML = '';
    selectedSeats = [];
    document.getElementById('seats-to-select').innerText = passengerCount;
    for (let i = 1; i <= 32; i++) {
        const seat = document.createElement('div');
        seat.className = 'seat available';
        if (Math.random() < 0.3) { seat.className = 'seat occupied'; }
        seat.onclick = function() {
            if (seat.classList.contains('occupied')) return;
            if (seat.classList.contains('selected')) {
                seat.classList.remove('selected'); selectedSeats.pop();
            } else {
                if (selectedSeats.length < passengerCount) { seat.classList.add('selected'); selectedSeats.push(i); } else { showToast(`Max ${passengerCount} seats allowed.`, "error"); }
            }
        };
        grid.appendChild(seat);
    }
}

function confirmSeats() {
    const pCount = parseInt(document.getElementById('flight-passengers').value) || 1;
    if (selectedSeats.length !== pCount) { return showToast(`Please select ${pCount} seats.`, "error"); }
    document.getElementById('booking-step-seats').classList.add('hidden');
    document.getElementById('booking-step-payment').classList.remove('hidden');
    document.getElementById('btn-proceed').classList.add('hidden');
    document.getElementById('btn-pay-confirm').classList.remove('hidden');
}

// PROMO & COINS LOGIC
function applyPromoCode() {
    const code = document.getElementById('promo-code-input').value.trim().toUpperCase();
    const msg = document.getElementById('promo-message');
    if (code === 'TRIP10') {
        const discount = selectedTrip.originalTotal * 0.10;
        selectedTrip.discountApplied = discount;
        recalcTotal();
        msg.innerText = `Success! 10% Discount Applied.`; msg.style.color = 'green';
    } else if (code === 'WELCOME50') {
        const discount = 50 * getCurrencyInfo().rate; 
        selectedTrip.discountApplied = discount;
        recalcTotal();
        msg.innerText = `Success! Flat 50 Discount Applied.`; msg.style.color = 'green';
    } else {
        msg.innerText = "Invalid Promo Code."; msg.style.color = 'red'; return;
    }
    document.getElementById('promo-code-input').disabled = true; 
}

function toggleCoinRedemption() {
    const checkBox = document.getElementById('use-coins-check');
    if (checkBox.checked) {
        const coinVal = getCoinValue();
        const discount = loggedInUser.coins * coinVal;
        selectedTrip.coinsRedeemed = discount; 
        showToast("Coins Applied!", "success");
    } else {
        selectedTrip.coinsRedeemed = 0;
    }
    recalcTotal();
}

function recalcTotal() {
    let newTotal = selectedTrip.originalTotal - selectedTrip.discountApplied - selectedTrip.coinsRedeemed;
    if(newTotal < 0) newTotal = 0;
    selectedTrip.total = newTotal;
    document.getElementById('modal-total').innerText = `${selectedTrip.symbol}${Math.round(selectedTrip.total)}`;
}
 
function selectPayment(el, method) {
    document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected'); selectedPaymentMethod = method;
}
 
function confirmPayment() {
    if(!selectedPaymentMethod) return showToast("Please select a payment method.", "error");
    document.getElementById('payment-loader').classList.remove('hidden');
    document.querySelector('.payment-options').classList.add('hidden');
    document.querySelector('.promo-section').classList.add('hidden'); 
    document.getElementById('btn-pay-confirm').classList.add('hidden');
    setTimeout(() => { 
        document.getElementById('payment-loader').classList.add('hidden'); 
        document.querySelector('.payment-options').classList.remove('hidden'); 
        document.querySelector('.promo-section').classList.remove('hidden');
        generateTicket(); 
    }, 2000);
}
 
function generateTicket() {
    const pin = document.getElementById('booking-pin').value;
    const pnr = "TRIP" + Math.floor(Math.random() * 100000);
    const p1First = document.getElementById('passenger1-first') || document.getElementById('adult1-first');
    const p1Last = document.getElementById('passenger1-last') || document.getElementById('adult1-last');
    if(p1First && p1Last) selectedTrip.passengerName = p1First.value + " " + p1Last.value;
 
    if(loggedInUser) {
        const earnedCoins = Math.floor(selectedTrip.total * 0.05);
        let coinsUsedCount = 0;
        if(selectedTrip.coinsRedeemed > 0) {
             coinsUsedCount = loggedInUser.coins; 
        }
        loggedInUser.coins = (loggedInUser.coins - coinsUsedCount) + earnedCoins;
        document.getElementById('reward-earned-msg').innerText = `🪙 You earned ${earnedCoins} Tripify Coins!`;

        const newBooking = { 
            pnr, pin, 
            title: selectedTrip.name, 
            meta: selectedTrip.routeInfo, 
            date: selectedTrip.date, 
            checkOut: selectedTrip.checkOut,
            price: selectedTrip.total, 
            status: "Confirmed", 
            symbol: selectedTrip.symbol,
            passengerName: selectedTrip.passengerName,
            type: selectedTrip.type,
            roomType: selectedTrip.roomType,
            // Save meta details
            extraDetails: selectedTrip.metaDetails
        };
        
        if(!loggedInUser.history) loggedInUser.history = [];
        loggedInUser.history.push(newBooking);
        updateUserInDB();
    }
 
    populateTicketView(selectedTrip.passengerName, pnr, selectedTrip);
    document.getElementById('booking-step-payment').classList.add('hidden');
    document.getElementById('modal-footer-action').classList.add('hidden');
    document.getElementById('booking-step-3').classList.remove('hidden');
    showToast("Booking Successful!", "success");
}

function populateTicketView(pName, pnr, tripData) {
    document.getElementById('ticket-passenger').innerText = pName;
    document.getElementById('ticket-pnr').innerText = pnr;
    document.getElementById('ticket-date').innerText = tripData.date;
    document.getElementById('ticket-airline').innerText = tripData.name;
    if (tripData.type === 'flight') {
        document.getElementById('ticket-flight-header').classList.remove('hidden'); document.getElementById('ticket-hotel-header').classList.add('hidden'); document.getElementById('ticket-date-field').classList.remove('hidden');
        document.getElementById('ticket-origin-code').innerText = tripData.routeInfo.split('->')[0].trim().substring(0,3).toUpperCase();
        document.getElementById('ticket-dest-code').innerText = tripData.routeInfo.split('->')[1].trim().substring(0,3).toUpperCase();
        document.getElementById('ticket-lbl-provider').innerText = "Airline"; document.getElementById('ticket-lbl-class').innerText = "Class"; document.getElementById('ticket-class-display').innerText = "Economy"; document.getElementById('ticket-lbl-pax').innerText = "Passenger";
    } else {
        document.getElementById('ticket-flight-header').classList.add('hidden'); document.getElementById('ticket-hotel-header').classList.remove('hidden'); document.getElementById('ticket-date-field').classList.add('hidden'); 
        document.getElementById('ticket-checkin-date').innerText = tripData.date; document.getElementById('ticket-checkout-date').innerText = tripData.checkOut;
        document.getElementById('ticket-lbl-provider').innerText = "Hotel"; document.getElementById('ticket-lbl-class').innerText = "Room"; document.getElementById('ticket-class-display').innerText = tripData.roomType || "Standard"; document.getElementById('ticket-lbl-pax').innerText = "Guest";
    }
}
 
// --- UTILS ---
function switchTab(tab) {
    document.getElementById('flight-section').classList.toggle('hidden', tab !== 'flights');
    document.getElementById('hotel-section').classList.toggle('hidden', tab !== 'hotels');
    document.getElementById('main-content').classList.toggle('hidden', tab !== 'flights'); 
    resetResultsUI();
    document.getElementById('history-view').classList.add('hidden'); document.getElementById('main-hero').classList.remove('hidden');
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active')); document.getElementById('btn-' + tab).classList.add('active');
}

// DATE LOGIC FOR PAST TRIPS
function isPastDate(dateString) {
    if (!dateString) return false;
    const date = new Date(dateString);
    const today = new Date();
    // Compare dates (set time to 0 to compare only days)
    return date.setHours(0,0,0,0) < today.setHours(0,0,0,0);
}
 
function showHistory() {
    if(!loggedInUser) { showToast("Please login to view your history.", "error"); openAuthModal(); return; }
    document.getElementById('main-hero').classList.add('hidden'); document.getElementById('main-content').classList.add('hidden'); document.getElementById('history-view').classList.remove('hidden');
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active')); document.getElementById('btn-history').classList.add('active');
    const list = document.getElementById('history-list'); list.innerHTML = '';
    
    let cleanHistory = loggedInUser.history.filter(b => b.meta && b.meta !== 'undefined' && b.meta !== 'Route info unavailable');
    if(cleanHistory.length !== loggedInUser.history.length) { loggedInUser.history = cleanHistory; updateUserInDB(); }
    if(cleanHistory.length === 0) { list.innerHTML = '<p class="text-muted" style="text-align:center;">No bookings found.</p>'; return; }
    
    cleanHistory.forEach(b => {
        let actionBtns = '';
        
        // CHECK IF PAST
        const relevantDate = (b.type === 'hotel' && b.checkOut) ? b.checkOut : b.date;
        const isCompleted = isPastDate(relevantDate) && b.status === 'Confirmed';
        
        if (isCompleted) {
            // PAST: Download & Delete
            actionBtns = `
                <span class="badge-completed" style="margin-right:10px;">Completed</span>
                <button class="btn-secondary" style="padding:0.4rem 0.8rem; font-size:0.8rem; margin-right:5px;" onclick="downloadTicket()">Download</button>
                <button class="btn-danger" style="padding:0.4rem 0.8rem; font-size:0.8rem;" onclick="initDeleteBooking('${b.pnr}')">Delete</button>
            `;
        } else if(b.status === 'Confirmed') {
            // FUTURE: View & Cancel
            actionBtns = `<button class="btn-secondary" style="padding:0.4rem 0.8rem; font-size:0.8rem; margin-right:5px;" onclick="viewHistoryTicket('${b.pnr}')">View Ticket</button><button class="btn-danger" style="padding:0.4rem 0.8rem; font-size:0.8rem;" onclick="cancelHistoryBooking('${b.pnr}')">Cancel</button>`;
        } else {
            // CANCELLED: Delete
            actionBtns = `<span class="badge-cancelled" style="margin-right:10px;">Cancelled</span><button class="btn-danger" style="padding:0.4rem 0.8rem; font-size:0.8rem; background:#EF4444;" onclick="deleteHistoryItem('${b.pnr}')">Delete</button>`;
        }
        
        const displayMeta = (b.meta && b.meta !== 'undefined') ? b.meta : 'Details unavailable';
        const displayPrice = (b.symbol ? b.symbol : '') + b.price;
        const extras = b.extraDetails ? `<br><small style="color:#6B7280">${b.extraDetails}</small>` : '';
        
        list.innerHTML += `<div class="history-card"><div class="history-details"><h3>${b.title}</h3><p>${displayMeta} • ${b.date}${extras}</p><small>PNR: ${b.pnr}</small></div><div class="history-actions" style="flex-direction:column; align-items:flex-end; gap:0.5rem;"><strong>${displayPrice}</strong><div style="display:flex;">${actionBtns}</div></div></div>`;
    });
}

// DELETE LOGIC (WITH PIN)
function initDeleteBooking(pnr) {
    currentCancellationPNR = pnr; // Reuse variable for ID tracking
    document.getElementById('cancel-modal-title').innerText = "Delete Record";
    document.getElementById('cancel-modal-desc').innerText = "To permanently delete this record, enter your Booking PIN.";
    document.getElementById('btn-confirm-action').innerText = "Delete Forever";
    document.getElementById('btn-confirm-action').onclick = confirmDeletion; // Switch handler
    document.getElementById('cancel-pin-input').value = '';
    document.getElementById('cancel-modal').classList.remove('hidden');
}

function confirmDeletion() {
    const pin = document.getElementById('cancel-pin-input').value;
    const history = loggedInUser.history;
    const b = history.find(x => x.pnr === currentCancellationPNR);
    if (b && pin === b.pin) {
        loggedInUser.history = loggedInUser.history.filter(x => x.pnr !== currentCancellationPNR);
        updateUserInDB();
        showHistory();
        closeCancelModal();
        showToast("Record Deleted.", "success");
    } else { showToast("Incorrect PIN.", "error"); }
}

function viewHistoryTicket(pnr) {
    const booking = loggedInUser.history.find(b => b.pnr === pnr);
    if(!booking) return;
    document.getElementById('booking-modal').classList.remove('hidden');
    document.getElementById('booking-step-1').classList.add('hidden');
    document.getElementById('booking-step-seats').classList.add('hidden'); 
    document.getElementById('booking-step-payment').classList.add('hidden');
    document.getElementById('modal-footer-action').classList.add('hidden');
    document.getElementById('booking-step-3').classList.remove('hidden');
    document.querySelector('.success-banner').classList.add('hidden');
    document.getElementById('reward-earned-msg').classList.add('hidden');
    populateTicketView(booking.passengerName || loggedInUser.name, booking.pnr, { name: booking.title, date: booking.date, checkOut: booking.checkOut, routeInfo: booking.meta, type: booking.type || (booking.meta.includes('->') ? 'flight' : 'hotel'), roomType: booking.roomType });
}

function cancelHistoryBooking(pnr) {
    // Reset modal to Cancel Mode
    document.getElementById('cancel-modal-title').innerText = "Cancel Booking";
    document.getElementById('cancel-modal-desc').innerText = "To confirm cancellation, please enter your Booking PIN set during checkout.";
    document.getElementById('btn-confirm-action').innerText = "Confirm Cancel";
    document.getElementById('btn-confirm-action').onclick = confirmCancellation;

    const history = loggedInUser.history;
    const b = history.find(x => x.pnr === pnr);
    if (!b) return;
    currentCancellationPNR = pnr;
    document.getElementById('cancel-pin-input').value = '';
    document.getElementById('cancel-modal').classList.remove('hidden');
}

function closeCancelModal() { document.getElementById('cancel-modal').classList.add('hidden'); currentCancellationPNR = null; }

function confirmCancellation() {
    const pin = document.getElementById('cancel-pin-input').value;
    const history = loggedInUser.history;
    const b = history.find(x => x.pnr === currentCancellationPNR);
    if (b && pin === b.pin) {
        b.status = 'Cancelled';
        updateUserInDB();
        showHistory();
        closeCancelModal();
        showToast("Booking Cancelled.", "success");
    } else { showToast("Incorrect PIN.", "error"); }
}

function deleteHistoryItem(pnr) {
    if(confirm("Delete this cancelled booking permanently?")) {
        loggedInUser.history = loggedInUser.history.filter(b => b.pnr !== pnr);
        updateUserInDB();
        showHistory();
    }
}

function recoverBookingPin() {
    const history = loggedInUser.history;
    const b = history.find(x => x.pnr === currentCancellationPNR);
    if (b) { alert(`GMAIL SIMULATION:\n\nBooking PIN Recovery for PNR ${b.pnr}\nYour PIN is: ${b.pin}`); }
}
 
function downloadTicket() { window.print(); }
function closeModal() { 
    document.getElementById('booking-modal').classList.add('hidden'); 
    setTimeout(() => { 
        document.querySelector('.success-banner').classList.remove('hidden'); 
        document.getElementById('reward-earned-msg').classList.remove('hidden');
    }, 500);
}
