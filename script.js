"use strict";

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("biodataForm");

    if (form) {
        jalankanForm(form);
    }

    const hasilNama = document.getElementById("hasilNama");

    if (hasilNama) {
        tampilkanHasil();
    }

});


function jalankanForm(form) {

    const inputNohp = document.getElementById("nohp");

    inputNohp.addEventListener("input", function () {

        this.value = this.value.replace(/\D/g, "");

        if (this.value.length > 13) {
            this.value = this.value.slice(0, 13);
        }

    });


    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const nama =
            document.getElementById("nama").value.trim();

        const alamat =
            document.getElementById("alamat").value.trim();

        const jurusan =
            document.getElementById("jurusan").value;

        const tinggi =
            document.getElementById("tinggi").value;

        const berat =
            document.getElementById("berat").value;

        const hobi =
            document.getElementById("hobi").value.trim();

        const nohp =
            document.getElementById("nohp").value;

        const genderElement =
            document.querySelector(
                'input[name="gender"]:checked'
            );

        if (!genderElement) {
            alert("Silakan pilih jenis kelamin.");
            return;
        }

        const gender = genderElement.value;


        if (
            nama === "" ||
            alamat === "" ||
            tinggi === "" ||
            berat === "" ||
            hobi === "" ||
            nohp === ""
        ) {
            alert("Semua data harus diisi.");
            return;
        }


        if (!/^\d{1,13}$/.test(nohp)) {
            alert(
                "Nomor HP hanya boleh berisi angka dan maksimal 13 digit."
            );
            return;
        }


        localStorage.setItem("biodata_nama", nama);
        localStorage.setItem("biodata_alamat", alamat);
        localStorage.setItem("biodata_jurusan", jurusan);
        localStorage.setItem("biodata_gender", gender);
        localStorage.setItem("biodata_tinggi", tinggi);
        localStorage.setItem("biodata_berat", berat);
        localStorage.setItem("biodata_hobi", hobi);
        localStorage.setItem("biodata_nohp", nohp);


        window.location.href = "hasil-biodata.html";

    });

}


function tampilkanHasil() {

    const nama =
        localStorage.getItem("biodata_nama") || "";

    const alamat =
        localStorage.getItem("biodata_alamat") || "";

    const jurusan =
        localStorage.getItem("biodata_jurusan") || "";

    const gender =
        localStorage.getItem("biodata_gender") || "";

    const tinggi =
        localStorage.getItem("biodata_tinggi") || "";

    const berat =
        localStorage.getItem("biodata_berat") || "";

    const hobi =
        localStorage.getItem("biodata_hobi") || "";

    const nohp =
        localStorage.getItem("biodata_nohp") || "";


    document.getElementById("hasilNama").textContent =
        nama;

    document.getElementById("hasilAlamat").textContent =
        alamat;

    document.getElementById("hasilJurusan").textContent =
        jurusan;

    document.getElementById("hasilGender").textContent =
        gender;

    document.getElementById("hasilTinggi").textContent =
        tinggi;

    document.getElementById("hasilBerat").textContent =
        berat;

    document.getElementById("hasilHobi").textContent =
        hobi;

    document.getElementById("hasilNohp").textContent =
        nohp;

}

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (toggleBtn) toggleBtn.textContent = '☀️ Light';
    } else {
        if (toggleBtn) toggleBtn.textContent = '🌙 Dark';
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');

            if (body.classList.contains('light-mode')) {
                toggleBtn.textContent = '☀️ Light';
                localStorage.setItem('theme', 'light');
            } else {
                toggleBtn.textContent = '🌙 Dark';
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});