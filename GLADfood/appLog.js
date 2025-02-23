var app = angular.module('FoodApp', []);

app.controller('LoginController', function($scope) {
    var phrases = [
        "🍕 Kitne aadmi the? Bhookhe? Login karo aur pata karo!",
        "😈 Mogambo khush hua! Jab aap order karenge! Login karo!",
        "🥳 Yeh dil maange more! Khaane ke liye! Login karo!",
        "🚀 Tension kyun lena jab [App Name] hai na! Login karo aur order karo!",
        "🔥 Aata Majhi Satakli! Jab pet khali ho! Login karo!",
        "⚡ Aaj kuch toofani karte hain! Order karo, login now!",
        "🕰️ Kal kare so aaj kar, aaj kare so ab! Order abhi karo, login now!",
        "🎥 Picture abhi baaki hai mere dost! Khaana abhi baaki hai! Login karo!",
        "🍛 Khaane mein kya hai? Login karke dekho!",
        "🍼 Dil toh baccha hai ji... Par pet bhi! Login karo!",
        "🎶 Yeh silsila chalta rahe... Khaane ka! Login karo!",
        "🍽️ Aapke aane se ronak aa gayi... Table pe! Login karo!",
        "🍔 Hero nahi, par bhookh mitane wala hoon! Login karo!",
        "🎉 Aaja nachle... Aur order karle!",
        "💖 Dil toh pagal hai... Khaane ke liye!",
        "🕊️ Khaabon ke parindey... Login karke ud jaao, khaane ki duniya mein!",
        "🇬🇧 London Thumakda... Jab pet bhara hoga! Login karo aur shuru karo!",
        "🔥 Radha kaise na jale... Jab itna tasty khaana samne hai! Login karo aur order karo!",
        "🍽️ Khaana toh banta hai! Login karo aur order karo, kya khana hai!",
        "😆 Pet mein gudgudi ho rahi hai? Login karo aur shuru ho jao, khaane ke safar pe!",
        "🍛 Biryani bula rahi hai... Login karo aur aa jao, biryani ki duniya mein!",
        "🕰️ Kal ho naa ho... Lekin yeh deal abhi hai! Login karo aur loot lo!",
        "❤️ Aashiqui 2... Deals se! Login karo aur dekho!",
        "🎸 Rockstar... Offers ka! Login karo aur rock karo!",
        "🛫 Udaan... Deals ki ore! Login karo aur order karo!",
        "🦸‍♂️ Main hoon hero tera... Par yeh offer limited hai! Login karo, jaldi karo!",
        "👤 Tumhara favourite khaana bula raha hai... Bas login karo!",
        "👋 Welcome back! Kya khaane ka scene hai aaj? Login karo aur dekho!",
        "🤔 Aaj kya mood hai? Login karo aur decide karo, khaane ka!",
        "🎥 Picture abhi baaki hai mere dost... Khaana abhi baaki hai! Login karo aur order karo!",
        "🍽️ Bhookh lagi hai? Login karo!",
        "⏰ Order time! Login karo!",
        "🍽️ Khaana ready hai? Login karo!",
        "Dosti ka ek usool hai, NO LOGIN NO FOOD! 🍔🔥",
        "Pyaar dosti hai… Magar khaana login ke bina nahi milta! 💔🍕",
        "Bhai ye dukh khatam kyu nahi hota? 🥲\nMat soch, bas login kar aur order maar!",
        "Bhai ne bola karne ka, toh login karne ka! 🍔🔥",
        "Login karne ke liye sirf dil hona chahiye… Pet toh waise bhi bhooka hai! 🍟💥",
        "Aaj mere paas pizza hai, burger hai, fries hai… Tumhare paas kya hai? 🤨",
        "Sirf bhookh… Kyunki login nahi kiya! 🥲🍕" ,
        "Kis color ki juice hai? 🧐 Pata karna hai? Toh login karo! 🍹😂",
        "Daya, kuch toh gadbad hai! 😨 Haan sir, kisi ne login nahi kiya! 🍗",
        "Ayein? 🤨 Login nahi kiya? Toh khaana kaise milega bhai? 🍔",
        "Sapne dekhna acchi baat hai… Par khaane ke sapne dekhna aur login na karna, yeh toh sahi nahi hai! 🤡🍕",
        "Gyan hai aap? 😏 Toh login karke order kyun nahi karte? 🍟",
        "Pookieee! 💕 Tum login nahi karoge? 🥺🍕",
        "404 Bhookh Not Found! 🤡 Pehle login kar bhai! 🍕",
        "while (bhookh == true) { login(); } 🍔🔥",
        "System.out.println(‘Bhai login kar, warna khaana nahi milega! 🍟’);",
        "Your bhookh request has been denied! ❌ Reason: Login Required! 😏🍔",
        "if (hunger == true) { login(); eat(); } 🍗",
        "if (login == false) { food = null; }"
    ];

    // Selects a random phrase on each load
    $scope.phrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    // User login model
    $scope.user = {};
    $scope.emailError = false;
    $scope.passwordError = false;

    $scope.validateEmail = function() {
        if (typeof $scope.user.email !== 'undefined' && $scope.user.email.includes('@')) {
            $scope.emailError = false;
        } else {
            $scope.emailError = true;
        }
    };

    $scope.validatePassword = function() {
        $scope.passwordError = !$scope.user.password || $scope.user.password.length < 8;
    };

    
});
