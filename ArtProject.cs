using System;
using System.Collections.Generic;

namespace CoreAPI21
{
    public partial class ArtProject
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Title { get; set; }
        public string FileLocation { get; set; }
        public string Description { get; set; }
        public string Notes { get; set; }
        public string Category { get; set; }
        public string Medium { get; set; }
        public decimal Value { get; set; }
        public int Height { get; set; }
        public int Width { get; set; }
        public string OriginalImageLocation { get; set; }
        public string LastImageLocation { get; set; }
        public string PaletteArray { get; set; }
        public string Palette { get; set; }
        public int PaletteLength { get; set; }
        public string ThumbFileLocation { get; set; }
    }
}
