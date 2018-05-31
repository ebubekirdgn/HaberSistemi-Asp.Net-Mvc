function KategoriEkle() {
    Kategori = new Object();
    Kategori.KategoriAdi = $("#KategoriAdi").val(); // Kategori Adı textindeki değer alınıyor.
    Kategori.URL = $("#KategoriUrl").val(); // Kategori Url textindeki değer alınıyor.
    Kategori.IsActive = $("#KategoriAktif").is(":checked");
    Kategori.ParentID = $("#ParentID").val();
    alert(Kategori.ParentID);
    $.ajax({
        url: "/Kategori/Ekle",
        data: Kategori,
        type: "POST",
        datatype: 'json',
        success: function (response) {
            if (response.Success) {
                bootbox.alert(response.Message, function () {
                    location.reload();
                });
            }
            else {
                bootbox.alert(response.Message, function () {
                    //TO DO :geri döndüğünde birşey yapılması isteniyorsa
                });
            }
        }
    });
}