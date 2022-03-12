using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Domain.ModelBuilderConfig
{
    public class ConfigurationVideos : IEntityTypeConfiguration<Videos>
    {
        public void Configure(EntityTypeBuilder<Videos> builder)
        {
            builder.ToTable("tblVideos");
            builder.HasKey(k => k.Id);
            builder.Property(p =>p.Poster).HasMaxLength(255).IsRequired();
            builder.Property(t => t.Title).HasMaxLength(255).IsRequired();
            builder.Property(desc => desc.Description).HasMaxLength(255).IsRequired();
            builder.Property(prev => prev.PrewVideoUrl).HasMaxLength(500).IsRequired();
            builder.Property(v => v.VideoUrl).HasMaxLength(500).IsRequired();
        }
    }
}
