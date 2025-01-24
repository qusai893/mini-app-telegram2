// Telegram Web App API Kontrolü
if (!window.Telegram || !window.Telegram.WebApp) {
    console.error("Telegram WebApp API is not available. Please open this Mini App in Telegram.");
} else {
    console.log("Telegram WebApp API initialized successfully!");
}

// Telegram Web App Nesnesi
const telegram = window.Telegram.WebApp;
let greetButton = document.getElementById("greetButton");
let greetingMessage = document.getElementById("greetMessage");

// Butona Tıklama Olayı
greetButton.addEventListener("click", function () {
    // Kullanıcının Girdiği İsmi Al
    let name = document.getElementById("nameInput").value.trim();

    if (name) {
        // Mesajı Göster
        greetingMessage.textContent = `Hello, ${name}! Welcome to Telegram Mini App!`;

        // Telegram Botuna Veri Gönder
        try {
            telegram.sendData(JSON.stringify({ name: name })); // JSON formatında veri gönder
        } catch (error) {
            console.error("Error sending data to Telegram:", error);
        }

        // (Opsiyonel) Telegram Mini App'i Kapat
        // setTimeout(() => {
        //     telegram.close();
        // }, 2000);
    } else {
        // Eğer İsim Girilmemişse Uyarı Göster
        greetingMessage.textContent = "Please enter your name!";
    }
});
