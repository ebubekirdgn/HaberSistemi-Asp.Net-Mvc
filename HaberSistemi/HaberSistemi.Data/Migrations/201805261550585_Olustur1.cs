namespace HaberSistemi.Data.Migrations
{
    using System.Data.Entity.Migrations;

    public partial class Olustur1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Haber",
                c => new
                {
                    ID = c.Int(nullable: false, identity: true),
                    Baslik = c.String(nullable: false, maxLength: 255),
                    KisaAciklama = c.String(maxLength: 50),
                    Aciklama = c.String(),
                    IsActive = c.Boolean(nullable: false),
                    OkunmaSayisi = c.Int(nullable: false),
                    Resim = c.String(),
                    EklenmeTarihi = c.DateTime(nullable: false),
                    Kullanici_ID = c.Int(),
                })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Kullanici", t => t.Kullanici_ID)
                .Index(t => t.Kullanici_ID);

            CreateTable(
                "dbo.Resim",
                c => new
                {
                    ID = c.Int(nullable: false, identity: true),
                    ResimUrl = c.String(),
                    Haber_ID = c.Int(),
                })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Haber", t => t.Haber_ID)
                .Index(t => t.Haber_ID);
        }

        public override void Down()
        {
            DropForeignKey("dbo.Resim", "Haber_ID", "dbo.Haber");
            DropForeignKey("dbo.Haber", "Kullanici_ID", "dbo.Kullanici");
            DropIndex("dbo.Resim", new[] { "Haber_ID" });
            DropIndex("dbo.Haber", new[] { "Kullanici_ID" });
            DropTable("dbo.Resim");
            DropTable("dbo.Haber");
        }
    }
}