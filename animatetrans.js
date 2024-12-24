function enterSite() {
    // Menambahkan kelas 'fade-out' untuk memulai animasi
    const button = document.querySelector('.enter-button button');
    button.classList.add('fade-out');

    // Setelah animasi selesai, beralih ke halaman baru
    setTimeout(function() {
        window.location.href = "/Content/ContUndangan.html"; // Ganti dengan URL halaman yang diinginkan
    }, 500); // Durasi animasi fade-out adalah 0.5 detik, sesuaikan waktunya
};
// buat ngga bisa di inspect element
// document.onkeydown = function(e) {
//     if (e.keyCode == 123) { // F12
//         return false;
//     }
// };
// document.addEventListener('contextmenu', function(event) {
//     event.preventDefault();
// });