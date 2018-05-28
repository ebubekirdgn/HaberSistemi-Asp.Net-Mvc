function KategoriEkle() {
    Kategori = new Object();
    Kategori.Adi = $("#KategoriAdi").val(); // Kategori Adı textindeki değer alınıyor.
    Kategori.Url = $("#KategoriUrl").val(); // Kategori Url textindeki değer alınıyor.
    Kategori.IsActive = $("#KategoriAktif").is(":checked");

    $.ajax({
        url: "Kategori/Ekle",
        data: Kategori,
        type: "POST",
        success: function (response) {
            if (response.success) {
                alert(1);
            }
            else {
                alert(2);
            }
        }
    });

    alert(Kategori.Adi + Kategori.Url + Kategori.Url + Kategori.IsActive);
}