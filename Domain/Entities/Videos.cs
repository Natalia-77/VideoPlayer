using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    [Table("tblVideos")]
    public class Videos
    {
        public int Id { get; set; }
        public string ?Poster { get; set; }
        public string ?Title { get; set; }
        public string ?Description { get; set; }
        public string ?PrewVideoUrl { get; set; }
        public string ?VideoUrl { get; set; }

    }
}
