const hitungLuas = () => {
    let tinggi = document.getElementById("tinggi").value
    let alas = document.getElementById("alas").value
    result = parseInt(tinggi)*parseInt(alas)/2
    return document.getElementById("hasil-luas").innerHTML = "Luas segitiga adalah: " + result;
}

const hitungKeliling = () => {
    let sisi1 = document.getElementById("sisi1").value
    let sisi2 = document.getElementById("sisi2").value
    let sisi3 = document.getElementById("sisi3").value
    result = parseInt(sisi1)+parseInt(sisi2)+parseInt(sisi3)
    return document.getElementById("hasil-keliling").innerHTML = "Keliling segitiga adalah: " + result;
}