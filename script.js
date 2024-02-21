// script.js
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Add logic for authentication (not provided for brevity)
  // If successful, navigate to the next page.
  window.location.href = 'giftSelection.html';
}

// script.js
// script.js
function redirectHalaman(kotak) {
  let pesan = '';

  switch (kotak) {
    case 'A':
      pesan = 'Donat Bahagia dan Secret Food';
      break;
    case 'B':
      pesan = 'Sepatu SUPERRRR';
      break;
    case 'C':
      pesan = 'Pakaian yang bagusss cocok buat kamuuu';
      break;
    default:
      pesan = 'Tidak ada pilihan yang valid.';
      break;
  }

  // Redirect ke halaman baru dengan pesan sesuai kotak yang dipilih
  window.location.href = `halamanBaru.html?pesan=${encodeURIComponent(pesan)}`;
}


// script.js
function tampilkanPopup() {
  const popup = document.getElementById('infoPopup');
  popup.style.display = 'block';
}

function tutupPopup() {
  // Gantilah dengan logika redirect sesuai kebutuhan
  window.location.href = 'https://wa.link/w1dhsa';
}


