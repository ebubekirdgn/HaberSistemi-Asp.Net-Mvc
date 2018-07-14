namespace HaberSistemi.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Olustur : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Etiket",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        EtiketAdi = c.String(),
                        EklenmeTarihi = c.DateTime(nullable: false),
                        AktifMi = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Haber",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Baslik = c.String(nullable: false, maxLength: 255),
                        KisaAciklama = c.String(),
                        Aciklama = c.String(),
                        Okunma = c.Int(nullable: false),
                        KullaniciID = c.Int(nullable: false),
                        Resim = c.String(maxLength: 255),
                        KategoriID = c.Int(nullable: false),
                        EklenmeTarihi = c.DateTime(nullable: false),
                        AktifMi = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Kategori", t => t.KategoriID, cascadeDelete: true)
                .ForeignKey("dbo.Kullanici", t => t.KullaniciID, cascadeDelete: true)
                .Index(t => t.KullaniciID)
                .Index(t => t.KategoriID);
            
            CreateTable(
                "dbo.Kategori",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        KategoriAdi = c.String(nullable: false, maxLength: 150),
                        ParentID = c.Int(nullable: false),
                        URL = c.String(maxLength: 150),
                        EklenmeTarihi = c.DateTime(nullable: false),
                        AktifMi = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Kullanici",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        AdSoyad = c.String(maxLength: 150),
                        Email = c.String(nullable: false),
                        Sifre = c.String(nullable: false, maxLength: 16),
                        RolID = c.Int(nullable: false),
                        EklenmeTarihi = c.DateTime(nullable: false),
                        AktifMi = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Rol", t => t.RolID, cascadeDelete: true)
                .Index(t => t.RolID);
            
            CreateTable(
                "dbo.Rol",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        RolAdi = c.String(maxLength: 150),
                        EklenmeTarihi = c.DateTime(nullable: false),
                        AktifMi = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.Resim",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        ResimUrl = c.String(),
                        HaberID = c.Int(nullable: false),
                        EklenmeTarihi = c.DateTime(nullable: false),
                        AktifMi = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Haber", t => t.HaberID, cascadeDelete: true)
                .Index(t => t.HaberID);
            
            CreateTable(
                "dbo.Slider",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Baslik = c.String(maxLength: 255),
                        URL = c.String(maxLength: 255),
                        Aciklama = c.String(maxLength: 255),
                        ResimURL = c.String(nullable: false, maxLength: 255),
                        EklenmeTarihi = c.DateTime(nullable: false),
                        AktifMi = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "dbo.HaberEtikets",
                c => new
                    {
                        Haber_ID = c.Int(nullable: false),
                        Etiket_ID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Haber_ID, t.Etiket_ID })
                .ForeignKey("dbo.Haber", t => t.Haber_ID, cascadeDelete: true)
                .ForeignKey("dbo.Etiket", t => t.Etiket_ID, cascadeDelete: true)
                .Index(t => t.Haber_ID)
                .Index(t => t.Etiket_ID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Resim", "HaberID", "dbo.Haber");
            DropForeignKey("dbo.Haber", "KullaniciID", "dbo.Kullanici");
            DropForeignKey("dbo.Kullanici", "RolID", "dbo.Rol");
            DropForeignKey("dbo.Haber", "KategoriID", "dbo.Kategori");
            DropForeignKey("dbo.HaberEtikets", "Etiket_ID", "dbo.Etiket");
            DropForeignKey("dbo.HaberEtikets", "Haber_ID", "dbo.Haber");
            DropIndex("dbo.HaberEtikets", new[] { "Etiket_ID" });
            DropIndex("dbo.HaberEtikets", new[] { "Haber_ID" });
            DropIndex("dbo.Resim", new[] { "HaberID" });
            DropIndex("dbo.Kullanici", new[] { "RolID" });
            DropIndex("dbo.Haber", new[] { "KategoriID" });
            DropIndex("dbo.Haber", new[] { "KullaniciID" });
            DropTable("dbo.HaberEtikets");
            DropTable("dbo.Slider");
            DropTable("dbo.Resim");
            DropTable("dbo.Rol");
            DropTable("dbo.Kullanici");
            DropTable("dbo.Kategori");
            DropTable("dbo.Haber");
            DropTable("dbo.Etiket");
        }
    }
}
