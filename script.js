// Fitur Dark Mode Konsisten
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.setAttribute('data-theme', 'dark');
    if(darkModeToggle) darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    });
}

// Handler Form Kirim ke WhatsApp (Hanya jalan di halaman kontak.html)
const bookingForm = document.getElementById('booking-form');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nama = document.getElementById('nama').value;
        const tipeHp = document.getElementById('tipe-hp').value;
        const keluhan = document.getElementById('keluhan').value;

        // SILAHKAN UBAH NOMOR DIBAWAH INI DENGAN NOMOR WA TOKO KAMU
        const nomorWA = "6289517764463"; 

        const teksPesan = `Halo Danz Service, saya mau konsultasi perbaikan HP.%0A%0A` +
                          `*Nama Pelanggan:* ${nama}%0A` +
                          `*Merk & Tipe HP:* ${tipeHp}%0A` +
                          `*Keluhan Kerusakan:* ${keluhan}`;

        const urlWhatsApp = `https://wa.me/${nomorWA}?text=${teksPesan}`;
        window.open(urlWhatsApp, '_blank');
    });
}