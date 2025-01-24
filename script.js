

 
        // Telegram Web App API Kontrolü
        if (!window.Telegram || !window.Telegram.WebApp) {
            console.error("Telegram WebApp API is not available. Please open this Mini App in Telegram.");
        } else {
            console.log("Telegram WebApp API initialized successfully!");
        }

        // Telegram Web App Nesnesi
        const telegram = window.Telegram.WebApp;

        // Butona Tıklama Olayı
        document.getElementById("greetButton").addEventListener("click", function () {
            // Kullanıcının Girdiği İsmi Al
            const name = document.getElementById("nameInput").value.trim();

            if (name) {
                // Mesajı Göster
                document.getElementById("greetingMessage").textContent = `Hello, ${name}! Welcome to Telegram Mini App!`;

                // Telegram Botuna Veri Gönder
                telegram.sendData(JSON.stringify({ name: name }));

                // (Opsiyonel) Telegram Mini App'i Kapat
                setTimeout(() => {
                    telegram.close();
                }, 2000);
            } else {
                // Eğer İsim Girilmemişse Uyarı Göster
                document.getElementById("greetingMessage").textContent = "Please enter your name!";
            }
        });
 
