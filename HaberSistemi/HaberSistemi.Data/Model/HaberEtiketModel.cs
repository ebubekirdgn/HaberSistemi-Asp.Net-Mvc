﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HaberSistemi.Data.Model
{
    public class HaberEtiketModel
    {
        public Haber Haber { get; set; }

        public string[] GelenEtikler { get; set; }

        public IEnumerable<Etiket> Etiketler { get; set; }

        public string EtiketAd { get; set; }
    }
}
