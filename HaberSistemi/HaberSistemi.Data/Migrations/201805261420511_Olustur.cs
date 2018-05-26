namespace HaberSistemi.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    public partial class Olustur : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Kullanici",
                c => new
                {
                    ID = c.Int(nullable: false, identity: true),
                    AdSoyad = c.String(),
                    Email = c.String(nullable: false),
                    Sifre = c.String(nullable: false, maxLength: 20),
                    KayitTarihi = c.DateTime(nullable: false),
                    IsActive = c.Boolean(nullable: false),
                    Rol_ID = c.Int(),
                })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Rol", t => t.Rol_ID)
                .Index(t => t.Rol_ID);

            CreateTable(
                "dbo.Rol",
                c => new
                {
                    ID = c.Int(nullable: false, identity: true),
                    RolAdi = c.String(maxLength: 20),
                })
                .PrimaryKey(t => t.ID);
        }

        public override void Down()
        {
            DropForeignKey("dbo.Kullanici", "Rol_ID", "dbo.Rol");
            DropIndex("dbo.Kullanici", new[] { "Rol_ID" });
            DropTable("dbo.Rol");
            DropTable("dbo.Kullanici");
        }
    }
}