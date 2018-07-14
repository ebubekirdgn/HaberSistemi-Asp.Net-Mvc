
function KategoriEkle() {
    Kategori = new Object();
    Kategori.KategoriAdi = $("#kategoriAdi").val();
    Kategori.Url = $("#kategoriUrl").val();
    Kategori.AktifMi = $("#kategoriAktif").is(":checked");
    Kategori.ParentID = $("#ParentID").val();

  
    $.ajax({
        url: "/Kategori/Ekle",
        data: Kategori,
        type: "POST",
        dataType: 'json',
        success: function (response) {
            if(response.Success)
            {
                bootbox.alert(response.Message, function () {
                    location.reload();
                });
             
            }
            else {
                bootbox.alert(response.Message, function () {
                    // geridöndüğünde bir şey yapılması isteniyorsa buraya yazılır
                });
            }
        }
    })
    
}

$(document).on("click", "#KategoriDelete", function () {
    var gelenID = $(this).attr("data-id");
    var silTR = $(this).closest("tr");
    $.ajax({
        url: '/Kategori/Sil/' + gelenID,
        type: "POST",
        dataType: 'json',
        success: function (response) {
            if (response.Success) {
                $.notify(response.Message, "success");
                silTR.fadeOut(300, function () {
                    silTR.remove();
                })
            }
            else {
                $.notify(response.Message, "error");
            }
          
       
        }
   
    })
})

$(document).on("click", "#KullaniciSil", function () {
    gelenKullanici = new Object();
    gelenKullanici.ID = $(this).attr("data-id");

    var silTR = $(this).closest("tr");

    swal({
        title: "Kullanıcı Silinecek !",
        text: "Eklemiş Olduğu Haberlerde Silinecektir. Emin Misin ?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Evet, Sil",
        closeOnConfirm: true
    },
        function (isConfirm) {
            if (isConfirm) {
                $.ajax({
                    url: '/Account/Sil',
                    type: "POST",
                    data: gelenKullanici,
                    dataType: 'json',
                    success: function (response) {
                        if (response.Success) {
                            $.notify(response.Message, "success");
                            silTR.fadeOut(300, function () {
                                silTR.remove();
                            })
                        }
                        else {
                            $.notify(response.Message, "error");
                        }


                    }

                })
            }
        }
        )


});

function KategoriDuzenle() {
  
    Kategori = new Object();
    Kategori.KategoriAdi = $("#kategoriAdi").val();
    Kategori.Url = $("#kategoriUrl").val();
    Kategori.AktifMi = $("#kategoriAktif").is(":checked");
    Kategori.ParentID = $("#ParentID").val();
    Kategori.ID = $("#ID").val();

    $.ajax({
        url: "/Kategori/Duzenle",
        data: Kategori,
        type: "POST",
        dataType: 'json',
        success: function (response) {
            if (response.Success) {
                bootbox.alert(response.Message, function () {
                    location.reload();
                });

            }
            else {
                bootbox.alert(response.Message, function () {
                    // geridöndüğünde bir şey yapılması isteniyorsa buraya yazılır
                });
            }
        }
    })
}



