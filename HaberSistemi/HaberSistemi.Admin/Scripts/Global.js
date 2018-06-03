function KategoriEkle() {
    Kategori = new Object();
    Kategori.KategoriAdi = $("#KategoriAdi").val(); // Kategori Adı textindeki değer alınıyor.
    Kategori.URL = $("#KategoriUrl").val(); // Kategori Url textindeki değer alınıyor.
    Kategori.IsActive = $("#KategoriAktif").is(":checked");
    Kategori.ParentID = $("#ParentID").val();
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

function KategoriSil() {
    var gelenID = $("#KategoriDelete").attr("data-id");

    $.ajax({
        url: '/Kategori/Sil/' + gelenID,
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

function KategoriDuzenle() {
    Kategori = new Object();
    Kategori.KategoriAdi = $("#KategoriAdi").val(); // Kategori Adı textindeki değer alınıyor.
    Kategori.URL = $("#KategoriUrl").val(); // Kategori Url textindeki değer alınıyor.
    Kategori.IsActive = $("#KategoriAktif").is(":checked");
    Kategori.ParentID = $("#ParentID").val();
    Kategori.ID = $("#ID").val();
    $.ajax({
        url: "/Kategori/Duzenle",
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