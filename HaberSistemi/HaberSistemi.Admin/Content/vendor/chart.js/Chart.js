/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.1
 *
 * Copyright 2017 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
(function (f) {
    if (typeof exp ort s === "o bj ect" && typeo f m odule !== "u n defined") { mo d ule.exports = f() } else if (typeof de fi ne === "fun c tion" && d ef i ne.a m d) { d ef ine([], f) } e lse  {
        var g; if (t ypeof  w indow! == "undefined" ) { g = window } e lse if (typeof global !== "un defined") { g = glo b al } e l se i f(typeof self !== "undefi ne d
    ") { g = se lf } el se { g =  this } g.Chart = f()  }  } ) (function ()  {
      var d e fi ne, mod u le, e x ports; return (f unction e(t, n, r) {
            f unc ti on  s(o, u) {
                if (!n[o]) {
                    if (!t[o]) { var a = typeof require == "function" & & requ ire; if (!u & & a) return a(o, !0); if (i) re t u rn i(o, !0); var f = new Error("Can not find  mo d ule ' " + o + "'"); throw f.c o d e = "M ODULE_NOT_ FO UN D", f } var l = n[o] = { expor t s: {} }; t[o][0].call(l.ex po rts, fun cti on(e)   {
                        v a r n = t[o][1][e]; ret urn s(n? n
                            : e)
                    }, l, l.exports, e, t, n, r)
                } re        tu rn n[o].exports
            } var i = typeo f requir e             == "function" && r            equire; for (var o = 0; o < r.length; o++)s(r[o])                eturn s
        }) ({
            1: [function (req                e, module, expor                 {
            }, { }                2: [function (re                re, module, exports)                            /* MIT lice                 */
            var co                Names = require(6);

            module.exports = {
                getRgba: getRgba,
                getHsla: getHsl                                getRgb: Rgb,
                g                sl: getHsl,
                getHwb: getHwb,
                getAl                    etAlpha, xString: hexString,
                bString: rgbString,
                rgbaString: rgbaString,
                percentString: percentString,
                percenta                     percentaString,
                hslString: hslString,
                hslaString: hslaString,
                hwbSt                    wbString,
                keyword: keyword
            }

                         function getRgba(string
                (!string) {
                    return;
                }
                               var abbr = /^#([a-fA-F0-9]{3})$/i,
            x = /^#([a-fA-F0-9]{6})$/i,
            rgba = /^rgba?                    [+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?                        :,\s*([+-]?[\d\.]+)\s*)?\)$/i,
            per                    gb(\[+-] ? [\d\.] +) \%\s *, \s * ([+-] ? [\d\.] +) \%\                    ([+-] ? [\d\.] +) \%\s * (?:, \s * ([+-] ? [\d\.] + /i,
                    keyword =                    ) /                                 var rgb = [0,                 0                                    a = 1,
        match = string.match(abbr);
        f(match) {
            match = match[1];
            for (var i = 0; i < rgb.gt                i++) {
                rgb[i] = pa(match[i] + match[i], 16);
            }
                                                              else if (match = strin                    h(hex)) {
                                                       =                tch;
                for (var i = 0; i.length; i++) {
                    rgb[i] = parseInt(ma                    ice(i * i                2 + 2),                                                                                    }
                el            se if (match = string.match                ba)) {
                    fo                va = 0; i < rgb.length; i++) {
                        rgb[i] = parseInt(match[i + 1]);
                    }
                    a = parseFloat(match[4])                                                               else if (match = str                    tch(per)) {
                        for (var i                         gb.length; i++) {
                            Math.round(parseFloat(match[i + 1]) * 2.5                                      }
                        a = par                    t(match[4]);
                    }
                else if                 tch = string.ma                    yword)) if (match[1] == "transparent") {
                        return [0, 0, 0, 0];
                    }
                    rgb = colorNames                tch[1]];
                    if (!rgb) {
                        return;
                    }
                }

                for (var i = 0; i < r                         i++) {
                    rgb[i] = scal                        0, 255);
                }
                                     && a != 0) {
                    a = 1;

                else {
                        a = scale(a, 0, 1);
                    }
                    rgb[3] = a;
                    return rgb;
                }

                function getHsla(string)                                if (!string) return;
            }
            var hsl = /^hsl                    *([+-]?\d+)(?:de                \s                s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\                    s*(?:,\s*([+-]?[                .]            +)\            s*)?\)/;
            var match = str.match(hsl);
            if (match) {
                alpha = parseFloat(m            atc            h[4]);
                var h = ale(parseInt(match[1]), 0, 360),
                    s = scale(parseFloat(match), 100),
                    l = scale(parseFloat(match[3]), 0, 10            0),
                    a = sca                isNaN(alpha) ? 1 : alpha, 0                                        return [h, s, l, a];
            }
        }

        function getHwb(string) {
            if (!string) {
                return;
            } var hwb = /^hwb\(\s*([+-]?\d+)(                    ?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?                \.                %\s*(?:,\s*([+-]?[\d\.]+)\ s *)?\)/;
            var match = strin g .match(hwb); if (match) {
                var alpha = parseFloat(match[4]);
                var h = scale(parseInt(match[1]), 360),
                    w = scale                    loat(match[2]), 0, 100 ) ,
                b = scale(parse F loat(match[3                 0, 100),
                    a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
                return [h, w, b, a];
            }
        }

        functi                    Rgb(string) {
            va                gb                 getRgba(string);
            return rgba && rgba.slice(0, 3);
        }

        function ge                l(string) {
            sla = getHsla(string);
            return h & sla.slice(0, 3);
        }

        function getAlpha(string                             var va            ls = getRgba(string);
        if (vals) {
            return vals[3];
        }
        else if (vals = getH            sla(string)) {
            eturn vals[3];
                                                else if (vals = getHwb(string                {
                return vals[3];
            }
                                    // generators
            function hexString(rgb) {
                    return "#" + hexDoub(rgb[0]) + hexDouble(rgb[1])
                        + h            exDouble(rgb[2]);
                }
                          function rgbString(rgba, alpha) {
                    if (alpha <                 || (rgba[3] && rgba[3] < 1)) {
                        return rgbaString(rgba, alpha);
                    }
                    return "rgb(            " + rgba[0] + ", " + rg            ba[1] + ", " + rgba[2] + ")";
                }

            function rgbaStr            ing(r g ba, a lph a)  {
                    if(al pha === un            defined) {
                alpha = (rgba[3] !== undefined ? rgba[3] : 1);
            }
            return "rgba(" + gba[0] + ",                  +                rgba[1] + ", " + rgba[2]
                + ", " + alp                a + ")";
        }

        funct                    n percentString(ba, alpha) {
            if (a                    ha < 1 || (rgba[                     && rgba[3] < 1)) {
                return percentaString(r                ba, alpha)
            }
            var r = Math.round(rgba[0]                     255 * 100), g = Math.ro                    d(rgba[1] / 255 * 100),
                b = Math.round(rgba[2] / 255                     100);

            return "rgb(" + r                        "%, " + g + "%, " + b + "%)";
        }

        function percen                    String(rgba, lpha) {
            var r = Math.round(rgba[0] / 2 * 100),
                g                     Math.round(rgba[1] / 255 * 100),
                    b = Math.roun                        gba[2] / 255 * 100);
            return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alp || rgba[3] || 1) + ")";
        }

        function hslString(hsla, alpha) {
            if (alpha < 1 || (hsla[3] && la[3] < 1)) {
                return hslaString(hsla, alph
                }
            re            turn             "hsl(" + hsla[0] +                 , " + hsla[1] + " %, " +                    sla[2] + " %) ";
        }

        f                    ction hslaString(hsla, alpha) {
            if (alpha === un                    fined) {
                alpha = (hs                a[3 !== undefined ? hs[3] : 1);
            }
            eturn "hsla(" + hsl                    0]+ ", " + hsla[1] + "%, " + hsla[2] +                 %,
                alpha + ")";
        }

        / hw                 is a bit different than                    gb(a) & hsl(a) since the                e i                 no alpha specific synta                                / / (hwb have                alp                a optional & 1 is defaul                    value)
        funct                on                 wbString(hwb, alpha) {
            if (alpha === ndefined) {
                alpha = (hwb[3] !== undefined ? hwb[3]                     1)
            }
            return "hwb(" + wb[0] + ", " + hwb[1] + "                , " + hwb[2] + "%"
                + (alpha !== undef                    ed && alpha !== 1 ? ", " + alpha : "") + "                ";
        }

        unction keyword(rgb) {
            return reverseNames[rgb.slice(0                 3)                ;
        }

        // helpers
        nction scale(num, min, max                    {
            return Math.min(th.max(min, n                m), ax);
        }

                              function hexDouble(num) {
                var str = num.toSt                    ng(16).toUpperCase();
                r                tur(str.length < 2) ? "0"                     str: str;
            }

            / cr                ate a list of reverse                     lor names
                                 var erseNames = {};
        for (r                     me in colorNames) {
            rev                rse                ames[colorNames[name]] = name
        }
    }, { "6": 6 }], 3[f                nction(require, module, exp                    ts) {
        /* MIT license */
        var convert = require(5);
        var string = require(2);

        var Color = function (ob                     {
            if (obj instanceof C                lor                 {
                retur                    obj;
            }
                                f((this instanceof Color))
                    return new Color(o                j);
    }

    this.valid = false;
    this.values = {
        rgb: [0, 0, 0],
        hsl: [0, 0, 0],
        hsv: [0, 0, 0],
        hwb: [0, 0, 0],
        cmyk: [0, 0, 0, 0],
        alpha: 1
    };

    // parse Color() arg                men
    var vals                                    if (typeof obj === 'string') {
        vals = string.getRgba(obj
                    if (vals) {
            this.etV                lues('rgb', vals);
        } else if (vals = string.getHsla(obj)) {
            this.setValues('hsl', ls);
        } else if (vals = string.getHwb(obj)                 {
            thi                    setValues('hwb', vals);
        }
        el                e if (typeof obj === 'obj                    t') {
            vals = obj;
            if                 val.r !== undefined || val                    red !== undefined) {
                this.setValues                'rgb                , vals);
            } else if (vals.l !== und                    ined || vals.lightness !== undefined) {
                this.setValues('                    l', vals);
            } else if (vals.v !== defined || vals.value !== u                    efined) {
                this.setValues('hsv', ls);
                lse if (vals.w !== undefined || vals.whiteness !== undefined) {
                    t                    s.setValues('hwb', vals);
                } else if (val.c! = undefined || vals.cyan !== u                    efined) {
                    this.setValues('                    yk', vals);
                }
            }

            Color                        ototype = {
                isValid: f                    ct                    n() {
                return this                vali;
            },
            rgb: function () {
                return this.setSpace('rgb'                        rguments);
            },
            hsl: function () {
                retur                    this.setSpace('hsl', arguments);
            },
            hsv                    function () {
                return this.setSpace('hsv', arguments);
            }, hwb                 fun                tion() {
                return this.se                Spac('hwb', arguments);
            }, cmyk: function                         {
                return this.s                    Sp                    e('cmyk', arguments);
            },

            rgbArray: function                      {
                retu                     this.values.rgb;
            },
            hsl                    ray: function                () {
                return is.values.hsl;
            },
            hsvAr                    y: function () {
                return this                values.hsv;
            } hwbArray: f                    ction() {
                var values = this.values; if (values.alpha !== 1) {
                    return val                    s.hwb.concat([values.alpha                    ;
                }
                retu                n values.hwb;
            },
            cmykArr: function () {
                return this.values.c                    k;
            },
            rgbaArray                    function () {
                var values = this.val                    s;
                retur                    values.rgb.co                cat(values.alpha]);
            },
            hsl                    rray: function () {
                var values = this.values;
                return values.hsl.concat([values.alpha]);
            },
            alpha: fu                    tion(val) {
                if (val === un                    fined) {
                    return this.values.alpha;
                }
                th                s.setValues('alpha', val);
                return this;
            },

            red: function (va                     {
                return this.setChannel('r                    ', 0, val);
                                   ,
            green: function (v) {
                return this.tChannel('rgb', 1, val);
            }, blue: function (val) {
                return this.setChannel('rgb', 2, val);
            },
            hue: function (val                 {
                if (val) {
                    val % 360;
                    val = val < 0 ? 360 + val : val;
                }
            return this.setChannel('hsl', 0, v);
        },
        saturation: function (val) {
            turn this.se                        annel(', 1, val);
                },
        lightness: function (val) {
            return this.setChannel('hsl', 2, va
                                     },
        saturationv: function (v                l) {
            re                    rn this.setChannel(hsv'                 1, val);
                                  },
        whiteness: function (val) {
            return this.se                    hannel('hwb', 1, val);
        },
        blackness: function (val)                                         return this.setChannel('hwb', 2, val);
    },
    value: function (val) {
        return thi                    setChannel('hsv', 2, val);
    },
    cyan: function val) {
        urn this.setChannel('cmyk', 0, val)
    },
    magenta: function (val) {
        return this.setCha                                'cmyk', 1, val);

        yellow: function (val) {
            return s.setChan                                cmyk', 2, val);
        },
        ac                        fu                    tio(val) {
            return this.setChanne('cmyk', 3, val);
        },

        hexString: function                () {
            return strin.hexString(this.values.rgb);
        },
        rgbString: function () {
            return tring.rgbString(this.v                lues.rgb, this.values.lpha);
        },
        rgb                String: function () {
            return string.rgbaString(this.values                rgb, this.values.alpha);
        }, percentString: function ({
            return string.percen                Str                ng(this.values.rgb, this.v                    ues.alpha);
    },
    hslString: functi                n() {
        return string.hslString(this.values.hsl, th                s.values.alpha);
    },
    h                laString: function () {
        retur                 string.hslaString(t                is.values.hsl, this.value                    alpha);
    },
    hwbString: funct                    n() {
        return string.hwbS                    ing(this.values.hwb, this.va                ues.alpha);
    },
    key                    rd: function () {
        return string.keyword(this                        lues.rgb, this.values.alpha);
    }
    rgbNumber: function () {
        var rg = this.values.rgb;
        return (rgb[0] << 16) | (b[1] << 8) | rgb[2];

        luminosity: functi()
        //                 ttp://www.w3.org/TR/WCAG20/#relativeluminancedef
        var rgb = this.valu                s.rgb;
        var lum = [];
        for (var i = 0; i < rgb.length; i++) {
            var chan = rgb[i] / 255;
            lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.w(((chan + 0.055) / 1.055), 2.4);
        }
        return 0.                126 * lum[0] + 0.7152 * lum[+ 0.0722 * lum[2];
    },

    contrast: function (colo)
    // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
    var um1 = this.luminosity();
    var lum2 = color2.luminosity()
    if (lum1 > lum2) {
        return (lum1 + 0.05) / (lum2 + 0.05);
    }
    return (l            um2 + 0.05) / (lum1 + 0.05);
},

    level: function (color2) {
        var contrastR                    io = this.contr                    t(color2);
        if (contrastRatio >= 7.1) {
            return AAA';
        }

        return (co                trastRatio >= 4.5) ?'AA' : '';
    },

dark: function () {
    //             YIQ             equation from http://24w        ay s .org /2 010/ c alc ul ating-col or-contra st
    var rgb = thi            s.values.rgb;
    var y = (rgb[0] * 299 + gb[1] * 587 + rgb[                 * 114) / 1000;
    return yiq < 28;
},

light: function ()                                                   return !this.dark(
                }
    neg                e: function () {
        var rgb =                 ;
        for (var i = 0;                 < 3; i++) {
            rgb[i] = 255                 this.values.rgb[i]
        }
        this.setValues('rg                , rgb);
                                   eturn this;
    },

    lighten: functio(ratio) {
        var hsl = this.values                sl;
        hs                2] += hsl[2] * ratio;
        this.setValu('hsl', hsl);
        return this;
    },

    d                ken: function (ratio) {
        var sl = this.values.h;
        hsl[2] -= hsl[2]                 ratio;
        this.setValu('hsl', hsl);
        retu                 this;
    },

    sa                rate: function (rati                                                           hsl = thi s .valu                    ;
hsl                     hsl[1] * ratio;
this.setValue                    ', hsl);
urn thi
                }, desatur                e: function (ratio)                                       var hs = this.values.hsl;
hsl[1] -= sl[1] * ratio;
this.s                    lues('hsl', sl);
return this;
                                              },

iten: function (ratio) {
    var hwb = this.values                wb;
    hwb[1] += hwb[1] * ratio;
    this.ues('hwb', h                                                     return this;
                               ,

    blacke                    ction(ratio) {
        ar hwb = this.es.hwb; h wb[2] += hw b[2] * atio;
        t                s.setValues('hwb',                     ;
        eturn this;
    },

    eyscale: function (                                        var rg = this.values.rgb;
    //                    p://en.wiki                dia.org/wiki/Grayscale#Convertin                color_to_grayscale
    var va = rgb[0] * 0.3 +                    ] * 0.59 + r * 0.11;
    this.setVal                    gb',  [ val, val, val]);
    rn this;
},

c                arer: function (ratio) {
    var alpha = t                s.values.alpha;
    this.setVa                    alpha', alpha - (a                     ratio));
    return this;
},

opaqu: function (ratio) {
    var alpha = this.values.a                ha;
    this.setValues('alpha            ', alpha + (alpha * ratio));
    return this;
},

rotate: unction(degrees) {
    var hs                    is.values.hsl;
    v                 hue = (hsl[0] + degrees) % 360;
    hsl[0] = hue < 0                 360 + hue : hue;
    this.setValues('hsl', hsl);
    return this;
},

/**
               * Ported from sass implementation in C
               * https://github.com/sass/libsass/blob/0                b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L                9
 * /
                        mix: function (mixinColo                 weight) {
                 ar color1 =                                                     r color2 = m                    r;
                  va                p = weight                == undefined ?                 5 : weight;

      var w = 2 * p - 1;
                  var a = color1.alpha() - c o lor2.alpha();

                  var w1 = (((w * a === -1) ? w  :  (w + a) / (1 + w * a)) + 1) / 2                ;
                  var w2 = 1 - w1;

                  ret                n this
                                .rgb(
                          w1 * color1.re            d()             + w2 * color2.red(),
                                             color1.green() +                     olor2.green(),
                          w1 *                olor1.blue() +                    * color2.blue()                                         )
                                                     alpha(color1.alpha                 * p                     lor2.alpha() * (1 -                 );
               ,

              toJSON: function () {
                    return this.rgb();
                },

                clone:                    ction () {
                      // NOTE(SB): using nod                    one creates a depende                         Buffer wh                    sing browserify,
                      // making the final build way t                    g to                         in Chart.js                     let's do it manuall
                                          // assuming that values                o clone are 1 di                    n arrays containin                     numbers,
                  //                xc ept 'alpha'                     is a number.
                      result = new Color();
                  var source = th                .va                es;
                  var target =                 sult.values;
                  var value,                ype;

    for (            var             prop in source) {
                      if (source.hasO            wnP            roperty(prop)) {
                          value = source[            pro            p];
                          type = ({}).toString.call(value);
                                                     (type === '[object A                    ) {
                              target                     = value.slice(0);
                          } else                     pe === '[object Number]                                                                     et[prop] = value;
                          } else {
                                                                  onsole.error('unex                    ed color                        :', value);
                                              }
                                                                }
                                       return result;
                                                };

                                  Color.prototype.space                = {
                b: ['red', 'green'                    e'],
                 : ['hue'                'saturation', 'li                tness'],
              hsv: ['hue', 'sat                ation', 'value                ,
              hwb: ['hue', 'whiteness            ',             'blackness'],
              cmyk: ['cyan', 'magenta', '            yel            low', 'black']
           ;

Color.prototype.m            axe            s = {
rgb: [2                , 255, 255],
hsl: [            360            , 100, 100],
hsv: [360, 100, 100]            ,
hwb: [                0, 100, 100],
              cmyk: [100, 100,                     00]
};
           Color.prot                    getValues = f                ction (space) {
              var values                    his.values;
                va                val                = {};

                r (var i = 0                i < space.lengt                 i++) {
                    vals[space                ha                t(i)] = values[space][i];
}

              if                     ues.alpha                     1) {
                    vals.a = values.alpha;
                }

// {r:                    , g: 255, b: 255, a: 0.4}
                return vals;
};

            Color.prototype.setValues = function                    ace, vals) {
var valu                 =                 is.values;
var space            s =             this.spaces;
              var maxes = this.maxes;
                        var alpha = 1;
              var i;

                        this.valid = true;

              if (space === 'alpha'            ) {
    alpha =                 ls;
} else if (vals            .le            ngth) {
                  // [10, 10, 10]
                  values[space                    ls.slice(0, space.l                    ;
                     ha = vals[                ace.length];
} else if                vals[space.charAt(0)] !== undefined) {                                   // {r: 10, g: 10, b                10}
    for (i = 0;             i <             space.length; i++) {
                      values[space][            i]             = vals[space.charAt(i)];
                  }

                            alpha = vals.a;
              } else if (vals[spaces[            spa            ce][0]] !== undefined) {
                  // {red: 10, green: 10,             blu            e: 10}
                  var chans = spaces[sp
                      (i = 0; i < space                    h; i++) {
                      values[space][i] = vals[chan                i]];
    }

    a                ha = vals.alpha;
}

              values.alpha =                 th.max(0, Math.min(1, (alpha === undefined ? values.alpha : alp                    );

                 (space === 'alpha') {
    return false;
                }

              var capped;

// cap values of the space prio                    nverting all values
              for (i = 0; i < spa                .length; i++) {
                  capped = Math.max(0, Math.min(max                [space][i], values[space][i]));
                            values[spac                [i] = Math.round                    d);
              }

              // conv                t to all the                 her color                 aces
              for (var sname in spaces) {
      if (sname !=                space) {
          values[sname] = convert[space][                ame](values[space]);
      }
}

              return tr                ;
};

          Color.proto                pe.setSpace = func            tio            n (space, args) {
              var vals = args[0];

                        if (vals === u                efined) {
                  // c                    gb()
                  return                 is.getValues(s                    );
}

                // color.rgb(10, 10, 10)
                                 (typeof vals === 'number') {
                    vals = Array.prot o type                lic                call(args);
}

this.setValues(space, vals);
return this;
};

          Color.prototype.setChannel = function (space, index, val) {
var svalues = this.values[space];
              if (val ===             und            efined) {
                  // color.red                                                    eturn svalue                    x];
              } else if (val =                 svalues[index]) {
                  // c                    .red(color                ed                )
    return t                s;
            }

// color                ed(100)
svalues            [in            dex] = val;
              this.setValues                    , svalues);
               r                    this;
          };

if (typ                f window !== 'undefine                ) {
wi                ow.Color = Color;
                    }

m                ule.exports = Color;
},             {             "2": 2, "5": 5 }], 4: [fu                tion (require, module, exports)             {
        /* MIT license */

module.exports = {
    rgb2hsl: rgb2hsl, rgb2hsv: rgb2hsv,
    rgb2hwb: rgb2hwb,
    rgb2cmyk: rgb2cmyk,
    rgb2keyword: rgb2                yword,
    rgb2xyz: rgb            2xy            z,
    rgb2lab: rg                lab,
    rgb2lch: rgb2lc            h,

    hsl2rgb: hsl                gb,
    hsl2hsv: hsl2hs            v,
    hsl2hwb: hsl2                b,
    hsl2cmyk: hsl2cm            yk,
    hsl                eyword: hs keywo rd,

    hsv2rgb: h sv2r gb,
    h sv2hsl                hsv2hsl,
    hs                hwb: h 2hwb,
    h 2cmyk: hs v2cmyk                                 h sv2key                rd: hs key wo rd,
    hwb2rg b: h wb2rgb                                  h                2hsl: hwb2hsl,
    hwb sv: h wb2 hsv,
    hwb 2cmy k: hwb                myk,
    hwb2k                word: hwb2keyword,

    c k2rgb : cm yk2rg
                 cmyk2                l: cmyk2hsl,
    cm                2hsv: cmyk2hsv,
    cmy hwb: cmy k2hwb                                  cmy                keyword: cmyk 2k eyword
                  keywor                rgb: keyword2r,
    keyword2hsl: keyw ord2hs
                ke ywor                hsv: keyword2hs v,
    key rd2hw b: k eyword                wb,
    k eyword                myk: keyword2cmyk,
    keyword2lab: keyw ord2                b,
    k eyword                yz: keyw d2xyz,

    xyz2rg b: x yz2rgb                                xyz 2lab: xyz2                b,
    x yz2 lch: x                2lch,

    lab2x: lab2xyz,
    l                2rgb: lab2rgb, lab2lch: lab2lch,

    lch2lab: l ch2lab                               l ch2x yz: lc                xyz,
    lch2                b: lch2r
}
funct ion  rgb2hs                rgb) {
    va                r = rgb[0] / 55,
        g = r[1] / 25 5,
            b = rgb                ]/ 255,
    min = Math.min(r, g, b),
        max                 Math.max(g, b),
            del ta = m - min                                     h, s, ;

    if (max == m in)
        h = 0;
    els e if (r == ax)
        h(g - b) / d el ta;
    e lse  if (g                  max)
    h = 2 + (b - r) / delta; lse i f(b == ma
                     h = + (r - g) / delta;

    h = M h.min(h * 60, 3);

    i f(h <                )
    h += 0;

    l = (mi n + max) /                ;

    if (max                  min)
    s                 0;
    e lse if                l <= 0.5)
        s = delta / max + min );
    els                                     s = delta / (2 - ma x - mi;

    re turn[h, s                 100, l * 100];
}

function rg b2hs v(rgb)
va r r = rgb[                ,
    g = rgb],
    b = r gb[2],
        mi n = Ma.min(r, g, b),
            max = Mat h.ma x(r, g                b),
                elta = max - min,
                h, s, v;

if (max == 0)
    s = 0;
else
                                   = (delt a / ma * 1000) / 10;

i(max == min)
    = 0;
                  else (r == max                                     h = (g  b) /  delt a;
                              else if (g == x)
    h = 2(b - r) / d elta;
e lse  if (b                  max)
h = 4 + r - g ) /  delta
h = th.min(h * 0, 36 0);

i f(h < 0)
h + = 36 0;

v = ((max / 255 * 1000) / 10;
turn[h, s, v]               }

functio n rg b2hwb(b) {
    var r                 rgb[0],
    g = r gb[1],
        b = rg                2],
    h = gb2hsl(rgb)[0],
        w = 1 / 255 * Math in (r Math.mi n(g, )),
    b = - 1 / 255  Mat h.ma x(r, M                h.max(g, b))
    return [h, w * 100, b                 100];
}

function rgb 2cmyk                gb) {
    var                 = rgb[0]/ 2 55,
    g = rgb[1 / 255,
        b = rgb[2]  255,
            m, y, k;

                               = Mat h.mi n(1 - 1 - g, 1 - b);
    c = 1 - r - k) /                  - k) || 0                                 m =   - g  - k)  /(1                 k) || 0;
    y = - b - k) / (1                 k) || 0;
    return [ * 10 0, m * 100                y * 100, k * 100];

    fu                tion r 2keyw ord(rgb) {
        re turn  rever                Keywords[JSON.str ingi(rgb)];
    }

    function rgb2xyz(rgb) {
        var r = rgb[0 / 255,
            g = rgb[1] / 255,
            b = rgb[2] / 255;

        / /             assume sRGB
        r = r > 0.04045 ? Math.po w(((r                0.055) / 1.055), 2.4) : (r / 12.92);
        g = g                 0.04045 ? Math.pow(((g                 0.055) / 1.055), 2.4) : g / 12.92 );
        b = b > 0.04045 ? Math.p(b + 0.055) / 1 .055), 2(b / 12.92);

                                          = (r * 0.4124) + (g * 0.3576) + (b * 0.1805); var y = (r * 0.2126)                    g                 0.7152) + (                * 0.0722);
        var z = (r                    193) + (g * 0.11(b * 0.9505);

        return [x * 100, y * 10                 z * 100];
    }

    nction rgb2lab(rgb) {
        var xyz = rgb2xz                    ),
            z[0],
        y,
            z = xyz[2],
                                    , b;

        x /= 95.047; y /= 100;
        z /= 108.883                                       x = x > 0.008                        Math.pow(x, 1 / 3) : (7.787 * x) + (1                            ;
        y = y > 0.0 ? Math.pow(y /                  : (7.787 * y) + (16 / 116);
        z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7 .787                 ) + (16 / 116);

        l = (116 * y) - 16;
        a = 500 * (x - y);
        b = 200 * (y - z);

        return [l, a, b];

        function                 2lch(args) {
            n lab2lch(rgb2l                    s));
        }

        un                on hsl2rgb(hsl) {
            var h = hsl[0] / 360,
                s = hsl[1] / 100,
                [2]100,
                    t1, t2, t3, r            gb, a            l;

            if (s == 0) {
                val = l * 255;
                retu rn[val, val, val]
            }

            if (l                 .5)
            t2 =                * (1 + s);
                                        else
            t2 = l + s - l               s;
            t1 = 2 * l - t2;

            rgb = [0, 0, 0];
            for (var i = 0; i < 3; i++)                                    t3 = h + 1 * - (i - 1); t3 < 0 && t3 > 1 && t                                        if (6 * t3 < 1)
                val = t1 + 2                 t1) * 6 * t3;
                                else if (2 * t3 < 1)
                val =                ;
            else if (3 * t3 < 2)
                val = t1 + (t2 - t1) * (2 / -             t3) * 6;
            el        se
            val = t1;

            rgb[i] = val * 255;
        }

        ret                rn rgb;
    }

    function hsl2hsv(hsl) {
        var h = hsl[0],
            s = hsl[1 / 100,
                l = hsl[2] / 100,
                sv, v;

        if (l === 0) {
            // no need to                do calc on black
            // also avoids divid                 by 0 error
            return [0, 0, 0];
        }

        l *= 2;
        s *= (l <= 1) ? l : 2 - l;
        v = (l + s) / 2;
        sv(2 * s) / (l + s);
        return [h, sv * 100, v * 100];
    }

    function hsl2hwb                args) {
        retu                n rgb2hwb(hsl2rgb(args));
    }

    function hsl                cmyk(args) {
        return rgb2cmyk(hsl2rgb(args)                ;
    }

    fu                ction hsl2keyword(args) {
        return rgb2keyword(hsl2r                b(args));
    }

    function hsv2rgb(hsv) {
        var h = hsv                0]/ 60,
        s = hsv[1] / 100,
                                     = hsv[2] / 100,
            hi = Math.floor(h) % 6;

        var f = h - Math.floo(h),
            p = 255                  v * (1 - s),
                q = 255 * v * (1 - (s * f),
                    t = 255 * v * (1 - (s * (1 - f))),
                    v = 255 * v;

        switch (hi) {
            case 0:
                return [v, t,];
            case 1:
                retu                n[q, v, p];
            case 2:
                return [p, v, t];
            case 3:
                return [p, q                 v];
            case 4:
                return [t, p, v];
            case 5:
                return [v, p, q];
        }
    }

    function h                v2hsl(hsv) {
        var h = hsv[0],
            s = hsv[1] / 100,
            v = hsv[2] / 100,
            sl, l;

        l = (2 - s) * v;
        sl = s * v;
        sl /= (l <= 1) ? l : 2 - l
        sl = sl || 0;
        l /= 2;
        ret                rn[h, sl * 100, l * 100];
    }

    function h                v2hwb(args) {
        r                turn rgb2hwb(hsv2rgb(args))
    }

    function h                v2cmyk(args) {
        ret                rn rgb2cmyk(hsv2rgb(args));
    }

    function hsv2key                ord(args) {
        return r                b2keyword(hsv2rgb(args));
    }

    // http://dev.w3.                rg/csswg/css-color/#hw                -to-rgb
    function wb2rgb(hwb) {
        var h = hwb[0] / 360,
            wh = hwb                1]/ 100,
        bl = hwb                2]/ 100,
        ratio = wh + bl,
            i, v, f, n;

        /                 wh + bl cant be > 1
        if (ratio > 1) {
            wh /= ratio;
            bl / ratio;
        }

        i = Math.floor(6 * h);
        v = 1 - bl;
        f = 6 * h - i;
        if ((i & 0x01) != 0) {
            f = 1 - f;
        }
        n = wh + f * (v - wh);  // li                ear interpolation

        switch (i) {
            default:
            case 6:
            case 0: r = v; g                  n; b = wh; break;
            case 1: r = n; g = v; b = wh; break;
                ase 2: r = wh; g = v; b = n; break; case 3: r = wh; g = n; b = v; break;
            case 4: r = n; g = wh;                  = v; break;
            case 5: r = v; g = h; b = n; break;
        }

        return r * 255, g * 255, b * 255]
    }

    functi                n hwb2hsl(args) {
        return rgb2hsl(hwb2                gb(args));
    }

    function hwb2hsv(args) {
        return rgb2h                v(hwb2rgb(args));
    }
    function hwb2cm                k(args) {
        retu                n rgb2cmyk(hwb2rgb(args));
    }

    f                nction hwb2keyword(args) {
        return rgb2keywor(hwb2rgb(args));
    }
    function cmyk2rgb(c                yk) {
        var                  = cmyk[0]/ 100,
        m = cmyk[1] / 100,
            y = cmyk[2] / 100,
            k = cmyk[3] / 100,
            r, g, b;

        r = 1 - Math.min(1,                  * (1 - k) + k);
        g = 1 - Math.min(1, m * (1 - k) + k);
        b = 1 - Math.min(1, y * (1 - k + k);
        ret                rn[r * 255, g * 255, b * 255];
    }

    fun ction c myk2hsl(ar            gs)
    re             urn             rgb2hsl(cmyk2rgb(args));
}

funct            ion cmyk2hsv(args) {
    return rgb2hsv(cmyk2rgb(args));
}

function cmyk2hwb(ar            gs) {
    return r            gb2hwb(cmyk2rgb(args));
}

function cmyk2keyword(args) {
    return rgb2keyword(cmyk2rg            b(args));
}

fun            ction xyz2rgb(xyz) {
    var x = xyz[0] / 100,
        y = xyz[1] / 100,
        z = xyz[2] / 100,
        r, g, b;

    r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
    g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
    b = (x * 0.0557) + (y * -0.            2040) + (z * 1.0570);

    /            / assume sRGB
    r = r > 0.            0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.            4)) - 0.055)
        : r = (r * 12.92);

    g = g > 0.            0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.            4)) - 0.055)
        : g = (g * 12.92);

    b = b > 0.0031308 ? ((1.055 * Mat.pow(b, 1.0 / 2.4))                  0.055)
                                   : b = (b * 1            2.92            );

    r = Math.min(M            ath.max(0, r), 1);
    g = Math.min(Math.m            ax(0, g), 1);
    b = Mat.min(Math.max(0, b), 1);

    retu             n[r * 255, g * 255, b * 255];
}

function xyz2la(xyz) {
    var x = x             z[0],
    y = xyz[],
        z = x             z[2],
            l, a, b;

    x /= 95.        04 7;
    y / = 1 00;
    z /= 108. 883;

    x = x > 0. 008 856 ? Ma th.po w(x, 1 / 3)  : (7 .78 7 * x ) +  (16 / 1 16);
    y = y > 0.0 08856 ? Math.pow(y, 1 / 3) : (7. 787 * y) + (1 6 / 116);
    z = z > 0 .0088 56 ? Mat h.p ow(z, 1 / 3)  : (7.787 * z) + (16 / 1 16 );

    l = (116 * y) - 16;
    a = 500 * (x - y);
    b = 2                0 * (y - z);

    return [l, , b];
}

function xyz2lch(args) {
    re turn lab2 lch(xyz2l ab(args));
}

function lab2xyz(la b) {
    var l = lab[0],
        a = lab[1],
        b = lab[2],
        x, y, z, y2;

    if (l <= 8) {
        y = (l * 100) / 903.3;
        y2 = (7.787 * (y / 1 00)) + (16 / 116);
    } else {
        y = 100 * Math.pow((l                  16) / 1        16, 3);
        y2 = M ath.pow(y / 100, 1 / 3);
    }

    x = x / 95.047 <= 0.008 856 ? x = (95.047 * a / 500) + y2 - (16 / 1))) / 7.787 : 95.047 * Math.pow((a                  500            ) +         y2 , 3) ;

    z = z / 1 08.883 < =             0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 1                6))) / 7.787 : 108.883 * M ath.pow(y2 - (b / 20, 3);

    retur[x, y, z];
}

fu            ncti        on  lab 2lc h(lab) {
    var l = la            b[0],
    a = lab[1],
        b = lab[2],
        hr, c;

    hr                     Math.atan2(b, a);
    h = hr * 3        60 / 2 / Math.PI;
    if (h < 0) {
        h += 360;
    } c = Math.sqrt(a * a + b * b)                                    return [l                    c, h];
}

f                nct            ion         la b2rg b(a rgs) {
    re turn xyz 2r            gb(lab2xyz(args));
}

function lch2lab(lch) {
    var l = lch[0],
                                     = lch[1]                                                                      h = lch[2]                                                             a, b, hr;

    hr = h / 360 * 2 * th.PI;
    a * Math.cos(hr);
    b = c * Ma                        sin(hr);
    return [l, a, b                                    } function lch                        z(gs) {
    return lab2xy                    lch                la            b(arg            s));
}

f                nction lc                    rgb(args) {
    retu                n lab2rgb(h2lab(args
            }

function k                    word2                    b(keyword)                                        re                        n cssKeywords[keywo                        ;
            }

function key                        d2hsl(args) {
    return rgb2hsl(keyw                        2rgb(args));
}

function keyword2hsv(a) {
    return rgb2hsv(keyw                        2r(ar                s));
    ction keyword2hwb(args                    {
        re                    rn rgb2hwb(ke                        rd2rgb(args));
}

function keyword2cmyk                            s) {
    return rgb2cmyk(keyword                                args));
}
function keyword2                                rgs) {
    return rgb2lab(keyword2rgb(args));
}

function keyword2xyz(args) {
    r                            n rgb2xyz(keyw                        2rgb                        gs));
}

ar cssKeywords = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 25                     255],
    aquamarine: [127, 25 5, 212],
    azure: [240, 255, 255],
    beige                    [245, 245, 220],
    bisqu                     [255, 228, 196],
    black: [0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0                        55],
    eviolet: [138, 43, 226],
    brown: [165, 42                    42], b urlywood: 2, 184, 135],
    cadetblue: [95, 158                        60],
    chartreuse: [127, 255, 0                                        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        ornf                    werblue: [100, 149, 237],
        cornsilk: 55, 248, 220],
    crimson: 0, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: 4, 134, 11],
    darkgray: [169, 169, 16
                darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 7],
        d                            agenta: [139, 0, 139],
        darkolivegreen: [85, 107, 4                                            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139]                                          darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [10                        105, 5],
            dimgrey: [105, 105, 105],
            dodgerblue: 0, 1, 25
                                                      rebrick: [178, 34, 34],
            floralwhite: [255, , 240],
            forestgreen: [34, 139, 3
                fuchsia: [255, 0                        55],
                gainsboro: [2                         220, 220],
                ghostwhite: 8, 248, 255],
            gold: [255                        15, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 25                        47],
            grey: [128, 128, 128]                                       honeydew: [240, 255, 240],
            hotpink: [2                         105, 180],
            indianred: [205, 92, 92],
            digo: [75, 0, 130],
            ivory: [255, 255,],
            khaki: [240, 230, 140],
            vend[230, 230, 0], lavenderbl ush: 5, 240, 245],
        l                    ngre                    : [1                      252, 0],
        lemonchiffon: [255, 250                        05],
        lightblue: 173, 16,],
    lightcoral: [240, 128, 128], lightcyan: [224, 255, 255],
    ight                     denrodyello[25                     250, 210],
    htgray: [211, 211, 211],
    lightgreen                    [144                    238, 4],
    lightgrey: [211, 211, 211],
    lightpink: [2                      182, 193], lightsalmon: [255, 160, 2],
    lightseagreen: [32, , 170],
    lightsky                        e: [135, 206, 250],
    l                        tslategray: [119, 136, 153],
    lightslategrey: [119, 136, 3],
    lightsteelblue                        176, 196, 222],
    ightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    l                                een: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170]                                             mediumblue: 0, 5], mediumor                    id: 86, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen                     60, 179, 11
                                  mediumslate blue: [123, 104,],
    mediumspringgreen: [0, 250                    154]                                                      me                     mtu                    uoise: [72, 209, 2 04],
    me                        mvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112], mintcream: [245                        55, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    na                        owhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldl: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [2                         16                        0],
    orangered                            55, 69, 0],
    id: [218, 112, 214],
    pale                        den                    d: [8, 2                      170],
    palegreen: [152, 251, 152],
    pal                     rqu                    se: [175, 238, 238],
    palevioletred: [219, 2, 147],
    papayawhip: [25                        239, 213],
    eachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 2,
        purple                        128, 0, 128],
    rebeccapurple: [102, 51, 153]                                       red: [255, 0, 0],
    rosybrown: [188, , 143],
    royalblue: [6                                5, 225],
    saddlebro                                139, 69, 19],
    salmon: [250, 128,
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sie                                    160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 2                                    5]                                                                                          s                        eblue: [106, 90, 205],
    ategray: [112, 128, 144],
    slat                        ey: [112, 128, 144],
    sn                            [255, 250, 2
                                        springgreen, 255, 127],
    s                    elbl                    : [7                     130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128                                                               istle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquois[64, 224, 208],
        violet: [238, 130, 238], wheat: [245, 2                         179],
        wh                        : [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        llowgreen: [154, 205]
            };

var reverseKeywords = {};
for (var key in cssKeywords) {
    revers                        ywords[JS                            tringify(cssKeywo                                ey])] = key;
}
        }, { }], 5: [fu                                n(require, module, exports)                                             var conversions = require
var convert = function ()                                              return new Converter();
for (var n conversions) {
                /                                or                            w                         sio                                        convert[func + "Raw"] = (function (func) {
                                         // accept array or plain args
                    retu                        function (arg) {
        if (typeof arg == "number")
            arg = Array.prototype.sl.call(arguments); return conversions[func](arg);
    }
                }) (func);

pair = /(\w+)2(\w+)/.exec                        nc),
from = pa                        1],
to = pair[2
                                        // expor                            b2hsl and ["                            ]["hsl"]
                                        convert[from] = conver                        rom || {
    c                        ert[from][to] = nvert[func] = (functio                        func) {
    retu                        function (arg) {
        if (typeof arg == "numbe
                                                 arg = Array                        ototype.slice.call(arguments);

        ar val = conversions[fun                            rg);
        if (typeof val == "stri                                | val === undefin                                                                                                  return val; // keywor
                                          for (var i = 0; i                         al.length; i++)
        val[i] = Math.round(v                        i]);
        r                        rn val;
    }
}) (func);
            }

/* Converter does lazy conversion and caching */
var Converter = function () {
    this.convs = {};
};

/* Either get the values for a space                                       set the values for a space, depending on args */
Converter.prototype.routeSpace = function (space, args) {
    var values = args[0];
    if (values === undefined) {
        // color.rgb()
        return this.getValues(space);
    }
    //                    olor                    gb(10, 10, 10)
    if (typeo                        alues == "number") {
        values = Array.prototype                        ice.call(args);

        return this.setValu                        space, values);
    };                                   /* Set the values for a space, invalidating cache */
    Converter.prototype.setValues = function (space, values) {
        this.space = space;
        this.convs = {};
        this.convs[space] = values;
        return this;
    };

    /* Get the values for a space. If there's already
      a conversion for the space, fetch it, other                        e
      compute it */
    Converter.prototype.getValues = function (space) {
        var vals = this.convs[space];
        if                     va                s) {
            var fspace = this.space,
                fro                      this.convs                     pac;
            val s = c                        ert[fspace][space](from);

            this.convs                     ace = vals;
        }
        return vals;
    }

    [" rgb ", "h sl", "hs v", " cmy k", "keyw ord"].for Each(fu nction(sp            ace) {
        Converter.prototype[space] = function (vals) {
            return th            is.routeSpace(space, argum                nts);
        }
    });

    m                        le.exports = convert;
}, { "4": 4 }], 6: [function (require, mod, exports) {
    'use strict'

    module.exports = {
        alic                    lue": [240                        48, 255],
                                     "antiquewh                        ": [250, 235, 2],
        "                    ua": [0, 255, 5],
        uamarine": [127, 255, 212],
                "azure": [240, 255, 255],
        "be                        ": 5, 245, 220],
    sque": [255, 228, 196],
"black": [0, 0, 0],
    "blanchedalmond": [255, 235, 205],
        "blue", 0, 255],
"blueviolet": [138, 43, 226],
    "brown": [165, 4                        42
                                                       "burlywood": [222, 184, 135],
        "cadetblue": [95, 158, 160],
        "ch                     reuse": [127, 5, ,
            "chocolate": [2, 10                     30],
            "coral": [255, 127, 80],
            "                        nflowerblue": [100, 149,],
            "corn                        k": [255, 248, 22
                "crimson": [220, 20, 60],
                "cyan": [0, 255, 255],
                "                    rkbl                     : [0, 0, 139]                                                       "darkcyan":  [0, 139, 139],
                                     "darkgolde                        d": [184, 134, 11],
                "darkgray": [169, 169, 1,
                    "darkgreen": [0, 100, 0],
                    "darkgrey": [169, 169, 169],
                    "darkkhaki": [189, 183, 107],
                    "darkmagenta": [139, 0, 139],
                    "darkolivegreen": [8                        107, 47],
                    "darkorange": [255, 140, 0],
                    "darkorchid": [153, 50, 204],
                    "darkred"                        139, 0, 0],
                "darksalmon": [233, 150, 122],
                "darkseagre                        : [143, 188, 143],
                                     "darkslateblue"                        72, 61, 139],
            "darkslategray": [47, 79, 79]                                        "darks                        egrey": [47, 79,
                "darkturquoise": [0, 206                            9],
                "darkviolet": 8, 0, 211],
            "deep                            ": [255, 20, 147],
            "deepskyblue": [0, 191, 255],
            "dimgray": [105, 105, 1
                "dimgrey": [105, 105, 105                                                                                            dger                        e": [30, 144, 2                    ],
                                                    "fireb                     k": 178, 34, 34],
                "f                        alwhite": [255, 250, 240], "forestgreen": [139, 34],
                "fuchsia": [255, 0, 255],
                "gainsboro": [220, 220, 220],
                "ghostwh                        ": [248, 248, 255],
                "gold": [255, 215, 0],
                "goldenrod": [218, 165, 32],
                "gray": [128, 128, 128],
                "green": [0, 128, 0],
                "gre                        ellow": [173, 255, 47],
                "grey": [128                    128, 28], hon                    dew": [240, 255, 240],
                                      "hotpink": [255, 105, 180
                "indianred": [, 92, 92],
                    "indigo": [75, 0, 130
                "ivory": [255, 255, 240]                                        "khaki": [240, 230, 140], "lavender": [230                    230, 50], "l                    enderblush": [255, 240, 245],
                        "l                        green": [124, 2                         0],
                        monchiffon": [255, 250, 205],
                                     "lightblue": [173, 216, 23
                "lightcoral": [, 128, 128],
                            "lightcyan": [, 255, 255],
                            "lightgol                        rodyellow": [250, 250, 210],
                            "light                        y": [211, 211, 211]                                        "light                        en": [144, 238, ,
                                "lightgrey": [211                            1, 211],
                                "lightpink": [255, , 19
                                        "lightsalmon": [25                            60, 122],
                                    "lights                            een": [32, 178, 170],
                                    "lightsky                            ": [135, 206, 250],
                                    "l                            slategray": [136, 153],
                                    "lightslategrey": [119, 136, 153],
                                    "lightstee                            e": [176, 196, 222],
                                    "lig                                low": [255, 25                                4],
                                    "lime": [0, 255, ,
                                        "limegreen": [5                        205, 50],
                                        nen": [250, 240                            0],
                "magen                             [255, 0, 255],
                                         "m                        on": [128, 0, 0],
                                        "med                    ma                uama            rine        ": [102, 20 5, 17 0],
                                        "med iumblue": [0, 0, 205],
                                        "            mediumorchid": [186, 85, 211],
                                        "mediump            urple": [147, 112, 219],
                                        "mediumseagree                ": [60, 179, 3],
                                        "mediumslateblue": [123, 104, 238],
                                        "mediumspr                    ggreen": [0, 250, 154],
                                        "mediumturquoise": [72, 209, 04],
                                        "m                diumviole                    ed": [199, 21, 33]
                "midni ghtblue": 5, 25, 112],
                                    "mintcream": [245, 255, 250],
                                    "mistyrose": [255                    228, 225],
                                    "m                    casin": [255, 228, 181],
                                    "navajowhi                        : [255, 222, 173],
                "navy": [0, 0, 1
                "oldlace": [253, 245, 230],
                                        "olive": [128, 128, 0],
                                        "olivedrab": 142, 35],
                                    nge": [255, 165, 0],                                                                           "orangered": [                    5, 69, 0],
                                              "orchid": 218, 112,],
                                "pal egoldenrod                            238, 232, 170],
                                        "palegreen": [152, 251, 152],
                                aleturquoise": [175, 238, 238],
                                               palevioletred": [219, 112, 147],
                                              "papayawhip": [255, 213],
                                "                                    uff": [255, 218, 185],
                                u": [205, 133, 63],
                "pink": [255, 192, 203                                                  "plum": [221, 160, 221],
                                    "powderblue": [176, 224, 230],
                                    "purple": [128, 0, 128],
                                    "rebeccapurple": [102, 51, 153],
                                    "red": [255, 0, 0],
                                    "rosybrown": [188, 143, 143],
                                    "royalblue": [65, 105, 2                                                    "saddlebrown": [139, 69, 19],
                                        "salmon": [250, 128, 114],
                                        "sandybr                                    [244, 164
                                                    agreen": [46, 139
                "sea                                         [255, 245, 238                                                     "sienna": [160, 82, 45],
                                                    lver": [192, 192, 192],
                "skyblue                                        , 206, 23                                                                                                       sl                            lue": [106, , 5],
                                        "s lategray": [112, 1                         144],
                                        "slate                        y": [112, 128, 144],
                                        "snow": [, 250, 250],
                                        "springgreen": [0, 255, 127],
                                        "steelblue": [70, 130, 180],
                                        "tan": [210, 180, 140],
                                        "teal": [0, 128, ,
                                            "thistle": [216, 191, 216],
                                            mato": [255, 99,                    1]
                               "turquoise": [64, 224, 208],
                                            "vi                let": [238, 130, 238],
                                            "wheat": [245, 222, 179],
                                            "whi                e": [255, 255, 255],
                                            "whitesmoke": [245, 245, 245],
                                            "yellow": [255, 255, 0],
                                            "yellowgreen": [154, 20, 50]
                              };
                             }, {}], 7: [fun ction                            quire, modu                         ex                        ts) {
                                            /**
                                            *                             espace Chart
                                            */
                                            var Cha                             require(29)();

                                            Chart.helpers = require(45);

                                            // @todo dispa                            these helpers into appropriated he                                /helpers.* file and write unit tests!
                                            quire(27)(Chart);

                                            Chart.defaults = req                                25);
                                            Chart.Element                                 uire(26);
                                            C.elements                                quire(40);
                                            har                            teraction = requir                        8) Chart.platform = require(48);

                                            require(31)(Chart);
                                            re                uire(22)(Chart);
                                            require(23)(Chart);
                                            equire(24)(Chart);
                                            require(30)(Chart);
                                            require(33)(Chart);
                                            require(32)(Chart);
                                            require(35)(Chart);

                                            require(54)(Chart);
                                            require(52)(Chart);
                                            require(53)(Chart);
                                            require(55)(Chart);
                                            require(56)(Ch art);
                                            quire(57)(Chart);

                                            // Controllers must be loaded aft                            lements
                                            // See Chart.core.                                etController.                            El                        ntT
                                            requi(15)                    hart);
                                            require                        ) (Chart);
                                            require(17)(Chart)                                   require(18)(Chart);
                                            require(19)(Chart); require(20)(Chart);
                                            require(21)(Chart);

                                            require(8)(Chart);
                                            require(Chart);
                                            require(10)(Chart);
                                            require(11)(Chart);
                                            require(12)(Chart);
                                            require(13)(Chart);
                                            requir e(14)(Char t);                                   // Loading bui                        it plugins
            var plugins = [];

plugins.push(
    requir                        9)(Chart),
    require(50)(Chart),
    require(51)(Chart)
            );

Cha                        plugins.register(plugins);

hart.platform.initialize();

module.ex                            s = Chart;
if (typeof window !== 'undefined') {
    window.Chart = C;
}

            // DEPRECATION                                       /* *
             * Provided for backward compatibi lit                            se Chart.he lpers.canvas instead.
             * @namesp ace                            rt.canvasHelpers
    * @deprecated since version 2.6.0
        * @todo remove at version 3
            * @private
             * /
Chart.canvasHelpers = Chart.helpers.canvas;
        }, { "10": 10, "11": 11, "12": 12, "13": 13, "14                            4, "15": 15, "16": 16, "17": 17, "18": 18, "19": 19, "20": 20, "21": 21, "22": 22, "23": 23, "24": 24, "25": 25, "26":                             "27": 27, "28": 28, "29": 29, "30": 30, "31": 31, "32": 32, "33": 33, "35": 35, "40": 40, "45": 45, "48": 48, "49": 49, "50": 50, "51": 51, "                             52, "53": 53, "54": 54, "55": 55, "56", "57": 57, "8": 8, "9": 9 }], 8: [function (require, module, exports) {
    'use strict';

    module.exports = function (Chart) {
        Chart.Bar = function (context, config) {
            config.typ e = 'bar';

            return new Chart(context, config);
        };
    };
}, {}], 9: [function (require, module, exports) {
    'use strict';

    mod ule                            orts = funct ion(Chart) {
        Chart.Bubble = function (cont ext                            nfig) {
            config.type = 'bubble';
            return n                            hart(conte xt, config);
        };
    };
    { }]                        0: [function (require, module, exports) {
        se strict';

        module.exports = function (Chart) {
            Chart.Doughnut = function (context, config) {
                config.type = 'doughnut';

                return new Chart(context, config);
            };
        };
    }, {}]                        1: [function (require, module, exports) {
        'use strict';

        module.exports                         unction(Chart) {
            C                        t.Line = function (context, config) {
                config.type = 'line';

                return new Chart(context, config);
            };
        };
    }, {}], 12: [fu nction(require                            dule, exports) {
        'use str                        ';

        module.exports = fu nction(Chart) {
            Chart.P                        rArea = function (cont, config) {
                c                        ig.type = 'polarArea';

                return new Chart(cont, config);
            };
        };
    }                        }], 13: [function (require, module, exports) {
        'use strict';

        module.exports = function (Chart) {
            Chart.Radar = function (context, config) {
                config.type = 'rada

                return new Chart(context, config);
            };
        };
    }, {}], 14: [function (require, module, exports) {
        'use st                        t';

        module.exports = function (Chart) {
            Chart.S                        ter = function (context, config) {
                config.type = 'scatte
                return new Chart(context, config);
            };
        },                            , 15: [function (require, ule, exports) {
            'use strict';

            var de                                s = require(25);
            elements = require(40);
            var helpers = require

            defaul                                et('bar', {
                ho                                {
                    mode                                bel'
                },

                scales: {
                    xAxes: [{
                        typ                            ca                        ory',                                               /                        pecific to Bar Controller
                                             categoryPe                        ntage: 0.8,
                        bar                        centage: 0.9,

                        // offs                            ettings
                        offset: true,

                        id line settings
                        gridLines: {
                        offsetGridLines: true
                    }
                                                              }],

            yAxes: [{
                type: 'linear'
            }]
    }
            });

            default _set                    horizontalBar', {
                                      hover: {
        mo                         'index',
        axis: 'y'
    },

        scales: {
        xAxes: [type: '                            ar',
            position: '                                m'
                    }], yAxes: [{
    ition                        left',
                                                            type: 'category',

    // Specific to Horizontal B                        Controller
    egoryPercentage: 0.8,
    b                        ercentage: .9,
    // offset settings
    o                    set: true,

    grid line set gs
                                             gridLines: {
        offse                        idLines: true
                                             }
}]
                },

elements: {
    rectangle: {
        borderSkipped: 'left'
    }
},

tooltips: {
    callbacks: {
        t                        e: nction(item                    da                a) {
            / / P ick  first xL abel for  now
                                                      var title = '';

            if (item.le            ngth > 0) {
                if (item                0].yLabel) {
                    title = item[].yL                bel;
                } else (data.labels.l                    gth                     0 && item[index < data.lab.length) {
                    title = data.labe                s[item[0].index];
                }
            }

            etu                n title;
        },

        label: function (item, data) {
            var datasetLa                    l = data.dataset s[item.dat                        tIndex].label | ';
            return datasetLabel + ' + item.xLabel;
        }
    }, mode: 'index',
        axis: 'y'
}
            }) module.ex                        ts = function (Chart) {
    Chart.controllers.bar = Chart.DatasetCont                        ler.extend({
        d                            lementType: elements.Rectangl                                                initialize: function () {
            var me = this;
            var meta;

            Chart.DatasetController.pro                                e.initialize.apply(me, arguments);

            m = me.getMeta();
            meta.stack = me.ataset()                            ck;
            eta.bar = e;
        },

        update: function (reset) {
            var me = this                                                     var rects = me.getMeta().data;
            v                                 ilen;

            me._ruler = me.getRu;

            for (i = 0, ilen = rects.length; i < il + i) {
                me.updateElement(rects[i], i, reset);
            }

            updateElement: function (rectangle, index, reset) {
                var me = this;
                ar chart = me.chart;
                var meta = me.getMeta();
                var dataset = me.g                                aset();
                var custom = rectangle.custom || {};
                var rectangleOption                                hart.options.elements.rectangle;

                rectangle._xScale = me.getScaleForId(meta.xAxisID);
                rectangle._yScale = me.getScaleForId(meta.yAxisID);
                rectangle._datasetIndex = me.                                ;
                rectangle._index = index;

                rectangle._model = {
                    datasetLabe                                taset.label,
                    label: chart.data.labels[index],
                    borderSkipped: custom.borderSk ? custom.borderSkipped : rectangleOptions.borderSkipped,
                    backgroundColor: cu                                backgroundColor? custom.backgroundColor : helpers.valueAtIndexOrDefault(dataset.backgroundColor, index, rectangleOptions.backgr                                olor),
                    borderColor: custom.borderColor ? custom.borderColor : helpers.valueAtIndexOrDefault(dataset.borderColor, index, rectangleOptions.borderColor),
                    border                        th: stom.borderWidth                         ustom.borderWidth : helpers.valueAtIndexOrDefault(d                            et.borderWidth, index, rectangleOptions                        rde                        dth)
                };

                me.updateElementGeometry                        cta                        e, index, reset);

    rectangle.pivot();
},

    /**
                                      * @private
*/
    updateElementGeometry: function (rectangle, index, reset) {
        var me = this;
        var model = recta                        e._model;
        var vscale = me.getValueScale();
        var base = vscale.getBasePixel(                                                   var horizontal = vscale.isHorizontal();
        var ruler = me._                        er || me.getRuler();
        var vpixels = me.calculateBarValuePixels.in, index);
        var ipixels = me.calculateB arIndexPixels(me.ex, index, ruler);

        model.horizontal = ho                        ontal;
        mo.base = reset ? base : vpixels.bas                                                mo                            x = horizontal ? reset ? base : vp                        ls.head : ipixels.center;
        model.y = horizontal ? ipixels.center : reset ? base : vpixels.head;
        model.height = horizontal ? els.size : undefined;
        model.width = hori                    ntal                     undefined: ipixels.size;

        /**
         * @private
                              */
        tValueScaleId: function () {
            return this.getMet                            yAxisID;
        },

        /**
* @private
*/
        getIndexScaleId: function () {
            return this.getMeta().xAxisID;
        },

        /**
                                 * @private
                                                   */
        tValueScale: function () {
            return this.ge                        aleForId(this.getValueSca                        d());
        },

        /**
         * @private
         */
        getIn                        Scale: function () {
            urn this.getScaleForId(this.getIndexScaleId()                                            },

        /**
                                                   * Returns the effective number of stacks based on groups and bar visibility.
                              * @private
         */
        getStackCount: f                            ion(last) {
            v                        me                        this;
            var chart = me.chart;
            var sca                             me.getIndexScale();
            r s                        ked = scale.options.stacked;
            var ilen = last === undefined ? chart.a.datasets.length : last + 1;
            var stacks = [];
            var meta;

            for (i = 0; i < ilen + i) {
                me = chart.getDatasetMeta(
                    f(meta.bar && ch                            isData                            isible &&
                        (stacked                             false ||
                        (stacked === true && stacks.indexOf(meta.stack) === -1) ||
                        (stacked === undefined && (meta.stack === undefined || stacks.indexOf(meta.stack) === -1)))) {
                    stacks.push(meta.stack);
                }
            }

            return stacks.length;
            /**
* Returns the stack                            ex for the given dataset based on groups and bar visibility.
* @privat                                               */
            getStackIndex: function (datasetIndex) {
                return th                        get                    ackC                    nt(datasetIndex) - 1;
            },

            /**
             * @priva                                             */
            getRuler: function () {
                me = this;
                var ale = me.getIndexScale();
                var stackCount = me.g                                ckCount();
                var datasetIndex = me.index;
                var pixels = [];
                var isHorizontal = scale.isHorizont                                                            var start = isHorizontal ? scale.left : scale.var en                                        rt + (isHorizontal ? scale.width :                                    .height); var i, ilen;

                (i = 0, ilen = me.getMeta().data.length; i < ilen; ++i                                                                                   pixels.push(scale.getPixelForValue(null, i, datasetI))
            }

            retu                        {
                pixels: pixels, start: start,
                    end: end,
                        stackCount: stackCo,
                            sc                        : scale
            };
        },

        /**
         * Note: pixel val                         are not clamped to the scale area.
                                 * @private
                                     */
        cal                        ate                        ValuePixels: function (datasetIndex, inde
                        var me = this;
        var chart = me.chart;
        var m = me.getMeta();
        var scale                            e.getValueScale();
        var data = chart.data.datase                                                                                      value = scale.getRightValue(datasets[tIndex].data[index]);
        var sta                                     scale.options.stacked;
        var stack = meta.stack                                                                                var start = 0;
        var eta, ivalue, base, head, size;

        tacked || (stacked === undefined && stack !== un                                ed)) {
            for (i = 0; i                            at                        tIn; ++i) {
                imeta = chart                            DatasetMeta(i);

                if                                ta.bar &&
                    imeta.stack === stack &&
                    imeta.controller.getVal                                leId() === scale.id &&
                        chart.isDatasetVisible(i)) {
                    ivalue = scale.getRightValue(datasets[i].data[index]);
                    if ((value < 0 && ivalue < 0) || (value >= 0 && ivalue > 0)) {
                        start += iv                        e;
                    }
                }
            }

            base                         cale.getPixe                        rValue(start);
            head                        scale.getPixelForValue(start + value);
            size = (head                         ase                         2;

            return {
                size: size,
                base: ba
                                                                head: head,
                center: head + size / 2
            };
        },

        /**
         * @private
         */
        calculateBarIndexPixels: function (datasetIndex, index, ruler) {
            var me = this;
            var options = ruler.scale.options;
            var stackIndex = me.getStackIndex(datasetIndex);
            var pixels = ruler.pixels;
            var base = pixels[index];
            var length = pixels.length;
            var start = ruler.start;
            var end = ruler.end;
            var leftSampleSize, rightSampleSize, leftCategorySize, rightCategorySize, fullBarSize, siz

            if (le ngth === 1
            leftSampleSize = base > start ? base - start : e - base;
            rightSampleSize = base < e ? end - base : base - start
        } else {
            if (index > 0) {
                leftSampleSize = (base - pixels[index - 1]) / 2;
                if (index === length) {
                    rightSampleSize = leftSampleSize;
                }
            } if (index < length - 1) {
                rightSampleSize = (pixels[index + 1] - base                         2;
                if (index === 0) {
                    left Sa mpl eSi ze = righ tSampleSi ze;
                }
            }
        }

        leftCategorySize = leftSam                leSize * tions.categoryPercenta;
        rightC                    ego                    Size = rightS                        leSize * option                    cat                    oryPercentage;
        ullBarSiz(leftCategorySize                     r                ghtC                tegorySize) / ruler.stackCount;
        si                e = fullBarSi * options.barPercent                    e;

        size = Math.min(
            helpe rs.valueOr                    fault(options.b                    Thickness, size),
            helper                    valueOrDefault(options.xBarThickness, Infinity));

        base -= eftCategorySize;
        base += fullBarSize * stackIndex;
        base += (fullBarSize - size) / 2;

        return {
            size                                e,
            ase: base,
            head: base + ze,
            cente                     base + si / 2
        };
    },

draw: function () {
    ar me = this;
    var ch                                    me.chart;
    va                                    e = me.getValueScale();
    var rects                                    getMeta().data;
    var dataset = me.getDataset();
    v                                    n = rects.length;
                                                            = 0;

    helpers.canvas.clipArea(chart.ctx, chart.chartArea);

    for (; i < ilen; ++i) {
        if (!isNaN(scale.getRightValue(dataset.data[i]))) {
            rects[i].dra
        }
    }

    helpers.canvas.unclipArea(chart.ctx                                                                                      },

setHoverStyl                                        tion(rectangle) {
    aset = this.chart.data.datasets[rectangle._datasetI                                                                var index = rectangle._in                                                                                                                        ar c                            m                             ctangle.cus                         | {};
    var model = r                        angle._model;

    model.backgroundCo = custom.hoverBackg                        ndColor ? custom.hoverBackgroundColor : helpers.valueAtIndexOrDefault(da                            t.hoverBackgroundColor, index, h                            rs.getHoverColor(model.backgroundColor));
    model.borde                    ol                r = ustom.hoverBorderColor ? custom.hoverBorderColor                  helpers.val                    AtIndexOrDefa(dataset.hoverB order                            r, index, h                        ers                        tHoverColor(mod el.borderColor)                                                   model.borderWidth = custom.hov                        or                    rW                dt            h ? c            ustom.hoverBorderWidth : helpers.val                eAtIndexOrDefault(dataset.hoverBorderWidth, index, model.borderW                    th);
},

removeHoverS                    le: function (re ctangle) {
    var dataset = this                        art.data.datasets[rectangle._data                        Index];
    var index = rectangle.dex;
    var tom = rectangle.custom || {};
    var model = rectangle._model;
    var rectangleElementOptions = this.chart.options.elements.rec                        gle;

    model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.va                        AtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor);
    model.borderColor = custom.borderColor ? custom.border                        or: helpers.valueAtIndexOrDefault(dataset.borderColor, dex, rectangleElementOptions.borderColor)                                               model.bor derWidth = cust                            orderWidth ? custom.borderWidth : hel                        s.va                    eAtI                    exOrDefault(dataset.bor derWidth, index, recta                        eElementOptions                        rderWidth);
}
                });

Chart.controll.horizontalBar = Chart.controllers.b                        extend({
    /**
* @priv
*/
    getValueScaleId: functi() {
        urn this.getMeta().xAxisID;
    },

    /**
     * @private
                          */
    getIndexScaleId: function () {
        return this.getMeta().isID;
    }
                });
                                 };
        }, {
    "25": 25, "                             40, "45": 45 }], 16: [function (require, module, expor
    'us                            ri                        ;

    var defaults = require(25)                                   var elements = require(40);
    var helpers = require(45);

    defaults._set('bubble', {
        h                        r: {
            mode: 'single'
        },

        scales: {
            xAxes: [{
                type: 'linear', // bubble should probably use a linear scale by default
                position: 'b                        om',
                id: 'x-a                            0' // need an ID so datas                            can reference t                            cale
            }],
            xes: [{
                type: 'linea                                                                                  position: 'left',
                        i                                -axis - 0'
                    }]
        },

        tooltips: {
            callbacks: {
                title: function () {
                    // Title doesn't make sense for scatter since we form                            he                        ta as                        point
                    return '';
                },
                label: function (item, a) {
                    var datasetLabel = data.datasets[item.datasetIndex].label || '';
                    var dataPoint = da                        datasets[item.datasetIndex].data[m.index];
                    return d                        setLabel + ': (' + item.xLabel + ', ' + item.yLabel, ' + dataPoint.r + ')';
}
                                                          }
                              })
module.exports = fu nction(Ch) {
    Chart.controll.bubble = Chart.DatasetController.nd({
        /**
                                                                     *                 prot            ecte        d
               * /
            data Element Type: el em            ents.Point,

                    /**
                     * @protected
                     */
        update: f                nction(r                    et) {
            var me = his;
            var meta = me.g                    Me                a(            );
            var points = m                ta.data;

            // Update Points
            helpers.each(points, fu                    tion(point, index) {
                me.updateElem                    t(point, index, reset);
            });

            /**
                                  * @pro                        ted
             */
            updateElement: fun                        on(point, index, reset) {
                var me                        this;
                r meta = me.getMeta();
                var custom = point.custom || {};
                var xScale = me.getScaleForId(meta.xAxisID);
                ar yScale = me.getScaleForId(meta.yAxis                        ;
                var options                            e._resolveE                            ntOptions(point, index);
                var dat                            me.getDataset().dat                            dex];
                var dsInde                                e.index;

                var x = reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? d                                 NaN, index, dsIndex);
                var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex)                                                      point._xScale = xScale;
                point._yScale = yScale;
                point._options = options;
                point._datasetIndex = dsIndex;
                point.x = index;
                point._model = {
                    backgroundColor: options.roundColor,
                    borderColor: options.borderColor,
                    borderWidth: options.bord                                th,
                    hitRadius: options.hitRadius,
                    pointStyle: optio                                intStyle,
                    radius: reset ? 0 : options.radius,
                    skip: custom.skip || isNaN(x) || is                                ),
        x: x,
            y: y,
                        };

point.piv;
                                                              },

/**
 * @protected
                            setHoverStyle: funct                         (point)                                                var model                        point._model;
                    ar options = point._opt ions;

    model.backg                        ndColor = helpers.valueOrDefault(                        ions.hoverBackgroundColor, help                        .getHoverColor(options.backg                        ndColor));
model.borderColor = help                        .valueOrDefault(options.hoverBorderColor, helpers.getHoverColor(options.borderCol                        );
model.borderWidth = helpers.valueOrDefault(options.hoverBorder                        th, options.borderWidth);
model.radius = options.radi                             options.hoverRadius;
}                                            /**
* @protected
*/
removeHoverStyle: function (p                        t)                                                v                            odel = poin                            odel;
var options = t._options;

model.back                            ndColor = ns.backgroundColor;
model.borderColor = options.borderColor;
model.borderWid                                options.borderWidth;
                                                        .radius = opti                                adius;
                    },

/**
 * @private
 */
esolveElementOptions: function (point, index) {
    var me = this;
    var chart = me.c
    var datasets = chart.data.datasets;
    var dataset = datasets[me.index];
    var custom = point.custom ||                                                        var options = chart.options.elements.point;
    var resolve = helpers.options.resolve;
    data = dataset.data[index];
    var values = {};
    var i, ilen, key;

    // Scriptable o                                s
    var context = {
        chart: chart,
        dataIndex: index,
        d                                t: dataset,
        datasetIndex: me.index
    };

    var keys = [
        ackgroundColor',
                            'borderColor',
        'borderWid                    ',
        'hoverBac kgrou                        olor',
        'ho                        BorderColor',
        'hoverBorderWidth',
        'hoverRadius',
        'hitRadius',
        'pointStyle'
    ]; for (i = 0, ilen = keys.length; i < ilen                                ) {
        key = keys[i];
        values[key] = lve([
            custom[key],
            dataset[key],
            options[key]
        ], context, index);
    }

    // Custom radius resolution
    values.radius = resolve([
        custom.radius,
        data ? data.r : undefined,
        dataset.radius,
        optio                        radi
    ], c ontext, in                        );

    return values;
}
                                     });
            };
        }                         "25": 25, "40": 40, "45":                         }], 17: [function (require                        odule, exports) {
    'use strict';

    var defaults = require(25);
    var elements = require(40);
    var helpers = require(45);

    defaults._set('doughnut', {
        animation: {
            // Boolean - Whether we animate the rotation of the Doughnut
            animateRotate: true,
                                          / Boolean - Whether we animate scaling the Doughnut from the centre
                    animateScale: false
    },
        hover: {
            mode: 'sing
        },
        legendCallback: function (chart) {
            var text = [];
            text.push('<ul class="' + chart.id                     '-l                    end">');

            var da = chart.data;
            var datasets = data.dataset                                            var labels = a.labels;

            if (datasets.length) {
                for (var i = 0; i < datasets[0].data.lengt++i) {
                    text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
                    if (labels[i]) {
                        text.push(labels[i]);
                    }
                    text.push('</li>');
                }
            }

            text.push('</ul>');
            return text.join('');
        },
        lege                         {
            labels: {
                generateLabels: function (chart) {
                    var data = chart.data;
                    i        f(data.lab els.l eng th && d ata.da tasets.le ngth) {
                        r            eturn data.labels.map(functio            n(label, i) {
                            var                meta = chart.ge                    atasetMeta                        ;
                            var ds = data.datasets[0];
                            var arc = meta.data[i];
                            r custom = c && arc.custom                         {};
                        v                r va                ueAtIndexOrDefault                  helpers.val                    AtIndexOrDefa;
                        var arcOpts = chart.options.elements.arc;
                        r fill = custom.backgrou                            lor ? custom.backgroundColor : valueAtIndexOrDefault(ba                    gr                un            dColo            r, i, arcOpts.backgroundC olor);
                        var stro                e = custom.borderColor ? custom.borderColor : valueAt            Inde        xO r Defau lt (ds.bo rderColor, i, arcO pts.bor derColor );
    var b            w = custom.borderWidth ? cus            tom.borderWidth: valueAtIn            dexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);
    return {
        xt: label,
        fillSty le: fill,
        strokeStyle: stroke,
        lineWidth: bw,
        hidden: isNaN(ds.data[i]) || m                    a.data[i].hidden,

        // Extra data used for toggling the correct item
        index: i
    };
});
                            }
                            return [];
                                                      }
                                      },

onClic                     function (e, l                    endItem) {
    var index = legendItem.index;
    var chart = this.chart;
    var i, ilen, a;

    for (i = 0, ilen = (chart.data.asets || []).length; i < ilen; ++i) {
        meta = chart.getDatasetMeta(i);
        // toggle visib ility of index if exists
        if (meta.data[index]) meta.data[i                        x].hidden = !                            .data[index].hidden;
    }
}

chart.update();
                                               }
                },

T                        per                        tage of the chart that we cut                        t of the middle.
    cutoutPercentage: 50,

        // The rotation of th                        hart, where the first data arc                             ns.
        rotation: h.                     * -                    5,

            // Th e total ci                        mference of the chart.
            circumference: M ath.PI * 2.0,
                // Need to override t                        e to                         e a nice default
                tooltips: {
    callbacks: {
        title: function () {
            ret                         '';

            label: function (tooltipItem, data) {
                var dataLabel = data.labels[tooltipItem.index]                                                      var value = ': ' + data.datase                            ooltipItem.datasetIndex].data[tooltipItem.index];

                if (helpe                                Array(dataLabel))                                                                                                                                      // sh                     val                     on first line of mul tilin                        abel
                // need t                        lone because we are cha                        ng the value
                dataLabel = dataLabel.slic
                da                        abe                        ] += value;
            } else {
                dataLabel += value;
            }

            retu                        dataLabel;
        }
    });

    defaults._set('pie', hel                        s.clone(defaults.doughnut));
    defaults._set('pie                        {
                                     cutoutPercentage: 0
    );

    module.expo = function (Chart) {
        Chart.controllers.doughnut = Chart.controllers.pie = Ch                            DatasetController.extend({
            dataElementType: elements.Arc,
            linkScales: helpers.noop,

            Get index of the dataset in relation to the visible datasets.This all                            determining the inner and outer radius correctly
                                               getRingIndex: function (datasetIndex) {
                var ringIndex = 0;

                for (var                             0; j < d                                tInde + j
                if (this.chart.isDatasetVisible(j)) {
                    ++ringIndex;
                }
            }

                                         tur                 ringIndex;
        },

            update: functi(reset) {
                ar                me = his; var chart = me.chart;
                var                  artArea = chart.chartArea;
                var opts = chart.option
                        var                 rcO                ts = opts.elements.arc;
                var availableWidth = hartArea.righ t - c                        tArea.left - arcOpt                    bor                    rWidth;
                var availableH                    gh                 = ch            artA        re a .bott om  - cha rtA rea.t op  -  arc Opts.bord erWidth;
                var minS            ize = Math.min(availableWidt            h, availableHeight);
                var offset = { x: 0, y: 0 };
                var meta = me.getMeta(); var cu                outPercentage = opts.cutoutPercentage;
                var circumference = opts.circumferenc                ;

                // If the chart's circumference isn't a full circle, calculate minSize as a ra                io of the width/height of the arc
                if(circumference <Math.PI * 2.) {
                    var startAngle = opts.rotation % (Math.PI * 2.0);
                    startAngle += Math                PI * .0 * (startAngle >= Math.PI ? -1 : startAngle < -Math.PI ? 1 : 0);
                    var endAng = startAngle + circumfe                    nce;
                    var start = { x: Math.cos(startAngle), y: Math.si                    startAngle)
    };
    var end = { x: Math.cos(endAngle), y: Ma.sin(endAngle) };
    var contains0 = (startAngle <= 0 && e                    Angle >= 0) || (startAngle <= Math                    I * 2.0 && Math.PI * 2.0 <= endAngle); var contains90 = artAngle <= Math.PI * 0. && Math.PI * 0. <= endA                 le) || (startAngle <= Math.PI * 2. && Math.PI * 2.5 <= endAngle);
    v                r contains180 = (startAngle <= ath.PI && -Math.PI <= endAngle) | (startAngle <= Math.PI && Math.P <= endAngle);
    var contains270 = (startA                    le <= -Math.PI * 0.5 && -Math.PI                        0.5 <= endAngle) || (startAngle <= Math.PI * 1.5 && Math.PI * 1.5 <= end Angle);
    var cutout = cutoutPercentage / 100.0;
    var min = { x: contains180 ? -1 : Math.min(st                rt.                 * (start.x < 0 ? 1 : cutout), end.x * (en                    x < 0 ? 1 : cutout)), y: contains270 ? -1 : Math.min                sta                t.y * (start.y < 0 ? 1 : cutout), end.y * (end.y < 0 ?                     : c                     ut)) };
    va r max = { x: cont                        s0? 1 : Math.ma                        tart.x * (start.x > 0 ? 1 : cu                        t), end.x * (end.x > 0 ? 1 : cutout)), y: contains90                          : Math.max(start.y * (start.y > 0 ? 1 : tout), end.y * (end.y > 0 ? 1 : cutout                        };
    var si = { width: (max.x - min * 0.5, height: (m                        y - min.y) * 0.5
};
minSize = Math.m                        availableWidth / siz                        idth, availableHeight / size.height);
offset = { x: (                        .x + min.x) * -0.5, y: (max.y                        min.                          - 0.5 };
                        }

chart.borderWidth = me.g                         xBorderWidth(meta.data);
chart.outerRadius = Math.max((mi                         e - chart.borderWidt                          2, 0);
ch                         innerRadius = Math.max(cutou                         centage ? (t.o                        rRadius / 100)                         cutoutPercentage) : 0, 0);
chart.r                        usLength = (chart.outerRadius - chart.innerRadius)                        chart.getVisibleDatasetCount()                                               chart.offsetX = offset.x * chart.outerRadius;
chart.offsetY = o                            t.y * chart.o uterR;

met                            tal = me.calc ulateTotal                                                                                    ut                        adius                        chart.outerRadius - (chart.usLength * me.getRingIndex(me.index));
me.innerRadius = Math.max                            outerRadius - chart.radiusLength, 0);

helpers.each(meta.data, tion(arc, index) {
    me.updateElement(arc, index, reset)
});
                    },

updateElement: function (arc, index, reset) {
    me = th
    ar chart = me                    hart                                                                                                    r chartArea = chart.chart                        a;
    var opts = chart.options;
    var animationOp = opts.animation;
    var centerX = hartArea.left + ch                        Area.right) / 2;
    var centerY = (chartArea.top + chartArea.bottom) / 2;
    startAngle = opts                        tat; // non reset case handled later
    var endAngle = opt                        otation; // non reset case                        ndled later
    var aset = me.getDataset();
    var circumference = res && animatio                    pts.imateRotate ? 0  : ar                        idden ? 0 : me.calculateCirc                        erence(datase                    data                    ndex]) * (opts.circ                        erence / (2.0 * Math.PI));
    var innerRadius = reset && animationOpts.ani                        eScale ? 0 :                     .inn                    Radius;
    var outerRadi = reset && animationOpts.a                        ateScale ? 0 : me.outerR                        us;
    var valueAtIndexOrDefault = helpers.valueAtIndex                        efault;

    helpers.extend(arc, {
        Utility
                            _datasetIndex: me.index,
        _index: index,

        // Desired view properties
        model: {
            x: centerX + chart.offsetX,
            y: centerY + chart.offsetY,
            startAngle: startAngle,
            endAngle: endAngle,
            rcumference: circumference,
            outerRadius: outer                        ius,
            i                        rRadius: innerRadius,
            label: valueAtIndexOrDefault(dataset.label                        ndex, chart.dat                            bels[index])
        });

    model = arc._model;
    / Resets the visual                             es
    removeHoverStyle(arc);

    // Set c                            ct angles if not resetting
    (!set!animationOpts.animateRotate ) {
        if (ex === 0) {
            odel.startAngle = opts.rotation;
        } else {
            mo                            startAngle = me.getMeta().data[index - 1]._model.endAngle;
        }

        model.endAngle = l.startAngle + model.circumference;

        ar                            vot();
    },

    move                    verS                     e: function (arc) {
        Chart.DatasetContr                     er.ototype.removeHoverSt yle.c(this, arc, thi                        hart.options.elements.arc)
    },

    calcul                        Total: function () {
        var set = this.getDataset();
        var meta                                     .getMeta ();
        var total = 0;
        r va
        helpers.each(met a.data, function nt, inde x) {
            value = dataset.data[ind ex]if (!isNaN(valu & !element.hi                                 {
                total += Math.abs                                e);
        }
    }
    /*  if (total                             0) {
                                   al = NaN;
    }*/

    return t;
},

calculateCircumference                            nction(value) {
    r total = this.getMeta().total;
    if (total > 0 && !isNaN(value)) {
        return (Math.PI * 2 * (e / total);
    }
    return 0;
},

ets t                            ax border or hover width t                            operly scale pie charts
getMaxBorderWidth: function (arcs) {
    var max =                                                    var index = this.index;
    var lengt                            arcs.length;
    var borderWidth;
    var hoverWi
    r(va = 0; i < length; i++) {
        borderWidth = arcs[i]._model ? ar cs[i]                        odel.borderWidt                         0;
        hoverWidth = s[i]._chart ? arcs[i]._chart.config.dat a.datasets[index].hoverBor                            idth: 0;

        max = derWidth > max ? borderWidth : max;
        max = hoverWidth > max                                 erWidth: max;
        return max;
    }
});
            };
                                 , { "25": 25, "40": 40,                                : 45 }], 18: [function (require, module, ex                            s) {
    'use strict';

    var defaults = require
    var elements = require(4                                              var helpers = require(45);

    defaults._s                                ine                                                showLines: true,
        spanGaps                                se,

            hover: {
        mode: bel'
    }, scales: {
    xAxe                     [{
        type: 'category ',
        id: 'x-axis-0'
    }],
    yAxes
                        type: 'linear',
    id: -axi                    0'
}]
                }
            });

odule.exports = func                        n(Chart) {
    function lineEnabled(dat                    et, tions) {
        eturn helpers.va                        OrDefault(dataset.showLine, options.showLines                                           }

    Chart.co                                lers.line = Chart.etController.extend                                                                                         datasetEleme                        ype: elements.Line,

        dataElement                            : elemen                        Poi

    update: function (re) {
        v                        me = this;
        var meta = me.getMeta();
        var line = meta.dataset;
        ar points = meta.data || [];
        var options = chart.options;
        var lineElementOptions = o                            ns.elements.line;
        var scale = me.getScaleFor                        meta.yAxi                        );
        var i, ilen, custom;
        var dataset = me.getData();
        var showL ine = lineEnabl                            ataset, options);

        // Update                         e
        if (showLine) {
            custom = l.custom || {};

            //                        mpatibility: If the properties are defined with only the old name,                          those values
            if ((dat                        t.tension !== undefin && (dataset.lineTension === undefined)) {
                dataset.lin                        nsion = dataset.tension;
            }

            // Utilit                                                         li                                cale = scale;
            line                            tas                        ndex = me                            ex;
            // D
            line._children = points;
            Model
            line._model = {
                Ap                    arance
                                                      // The                         ault behavior of lines is to break at null values, a                            ding
                                                                          // to https://github.com/chartjs/Chart.j                        ssue                         35#issuecomment-216718158
                                // This                          on gives lines the ability to span
                                s                         aps: dataset.spanGaps ? data                         spanGaps: ons                        anGaps,
                sion: custom.tension ? custom.tensi : h                    pers                     lueOrDefault(dataset.lineTension, lineElementOptions.tension),
                backgroundColor: custom.backgroundColor ? custom.backgroundColor : (d                     set.backgro                     Col                     || lineElementOptions.b ackgr                        dColor),
                borderWidth: custom.borderWidth ? cust                            orderWid: (aset.borderWidth || lineElementOptions.borderWidth),
                borde                        lor                        ustom.borderColor ? custom.borderColor : (d                    aset                    orde                     lor || lineElementOptions.borderColor),
                borderCapStyle: tom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lin                     ementOption                     ord                    CapStyle),
                borderDa                         custom.borderDash ? custom.borderDas(dataset.bor                            ash || lineE                            ntOptions.bor                        Dash                                                        borderDashOffset: custom.borderDash                            et ? cus.bo                        rDashOffset : (dataset.bord                        ashOffset || lineElementOptions.borderDashOffset), bo                        rJoinStyle: cust                        borderJoinStyle ? custom.borderJoinStyle : (d                            et.borderJoinStyle || lineE                            ntOptions.b                                JoinStyle),
                ll: sto                        ill? custom.fill : (dataset.fil == undefined ? dataset.fi : lineElementOptions.fill),
                step                        Lin                        custom.steppedLine ? custom.steppedLine : hel                        s.valueOrDefault(dataset.steppedLine, l                            lementOptions.stepped),
                    cubicInterpolationMode: custom.cubicInterpolationMode ? custom.cubi                        terp                        tionMode: helpers.valueOrDefault(dataset.cubicInterpolationMode, lineElementOptions.cubicInterpolationMode),
                            };

        line.pivot();
    }

    // Update Points
    for (i = 0, ilen = points.length; i < ilen; ++i)                                                           me.updateElement(p                                    i], i, reset);
}

if                                     ine && line._model.tension !== 0) {
    me.updateBezierControlPoints();
}

// Now pivot the point for animation
for (i = 0, ilen = points.length; i < ile                                i) {
    nts[i                            vot();
}
                    },

get                            tBackgroundC: function (point, index) {
    var kgroundColor = this.chart.option s.elements.point.backg round                        or; var dataset = this.getDatas                        );
    var c                        om = point.custom || {};

    if (custom.ba                        rou                        olor) {
        backgroundColor = custom.backgroundColor;
    } else (da                        et.pointBackgroundColor
    ba ckground                            r = helpers.valueAtIndex                        efault(da                        et.pointBackgrou                            lor, index, backg                        ndC                        r);
} e if (dataset.backgroundColor) backgroundColor = dat                    et.b                    kgro                     Color;
                                                            }

return backgroun                        lor;
                    },

getPointBorderColor: fun                            n(point, index) {
    var borderColor = this.chart.options.elements.poi                            or                        Col
    var dataset                     thi                    getD                     set();
    var custom = point.custom || {};

    if (custom.borderColor) {
        borderColor = c                     om.borderCo;
    } else if (datase                        ointBorderColor) borderColor = helpers.valueAtIndexOrDefault(d                            et.point                        der                        or, index, borderColor);
} else if                        ataset.borderColor) {
    borderColor = d                            et.borderColor;
}

rn                        rde                        lor;
                    },

getPoin                    orde                    idth                     unction(point, index) {
    var borderWidth = this.chart.option                     lements.point.borderWidth;
    var dataset = this.get                     aset();
    var cust om = point.custom || {}                                                                     if (!isNaN(custom.borderWidth)) b                            rWidth = custo                            rderWidth;
} else if (!isNaN(dataset.pointBorderWidth) || helpers.isArray(da                            t.pointB                        erW                        h)) {
    bo                        rWidth = helpers.valueAtIndexOrDefault(dataset.p                    ntBo                    erWi, index, borderWidth);
} else if (!isNaN(dataset.bo                     rWidth)) {
    borderWidth = dataset.borderWidth;
}

return b                        erWidth;
                                         },

updateE                            nt: function (poin                            ndex, reset) {
    var me = this;
    var meta = me.getMeta(                                                                                             var custom                         oint.custom || {};
    var d                    aset                     me.getDataset();
    var tasetIndex = me.index;
    var value = dataset.data[index];
    var yScale = me.getScaleForId(met                    yAxisID);
    r xScale = me.getScaleForId(meta.xAxisID); var pointOp tions                         e.chart.options.elements.point;
    var y;
    // Co mpatib                        ty: If the properties are defined with only t he old name, us e th                    e va                    es
    if ((dat aset.radius !== undef                        d) && (dataset.pointRadius === undefin) {
        data                            pointRadius = dataset.radius;

        if ((dat aset.h                        adius !== undefined) && (dataset.pointHitRa dius === undefi ned) {
            dataset.pointHitR                        us = dataset.hi                        dius;
        }

        x = xScale.get                            lForValue(typeof val === bject' ? value : NaN, index, data                        Index);
                                                y = reset ? yScal                                BasePixel()                                 calculateP(value, index, etIndex);

        // Utility
        poi                                Scale = xScale; p                        t._                        ale = yScale; point._datasetI ndex                         atasetIndex;
        point._index = index;

        /                            sired view properties
        t.de                         {
            x: x,
                y,
                skip: custom.ski | isNaN(x) || isNaN(y),
                    // Appearance
                    adius: custom.radius || helpers.valueAtIndexOrDefault(dataset.pointRadius, index, pointOptio                        radius),
                        pointStyle: custom.pointStyle || helpers.valueAtIndexOrDefault                    atas.pointStyle, index, poin tOpti.pointStyle),
            ckgr                    ndCo: me.getPoi                     ack                    oundColor(point, index),
                borderColor: getPointBorderColor(point, index),
                    borderWidth: me.getPointBorderWidth(nt, index),
                        ten                            : meta.dataset._model ? me                        da                    set.odel.tension : 0,
                            steppedLine: meta.dat                        t._model ? met                        ataset._mode                        teppedLine: false,
                                // Tool
                                hitRadius: custom.hitRadius || h                            rs.valueAtIndexOrDefault(d                        set                        intHitRadius, x, pointOptions.hit                            us)
        },

        calculateP                            Y: function (va, i                        x, datasetIndex) {
            var me = this;
            var chart = me.chart                                               var meta = me.getMeta();
            var yScale = me.g etSca                        orId(meta.yAxis                        ;
            var sum = 0;
            var sumNeg = 0;
            var i, dsMeta;

            if (yScale.opti.stacked                    {
                r(i = 0; i < datase tInde                        i++) {
                    ds = chart.data                        tasets[i];
                    dsMeta = chart.getDatasetMe                        i);
                    if (dsMeta.type === e' && dsMeta.yAxisID === yScale.id && chart.isD                            etVisible(i)) {
                    var stackedRightValue = Number(yScale.getRightValue(ds.data[index]));
                    if (stackedRightValue < 0) {
                        sumNeg += stac kedRi                                lue || 0;
                    } else {
                        sumPos += stac                        Ri                    tVal ||                                                                                              }
                }

                ri                        Value = Number(yScale.RightValue(value));
                if                             htValue < 0) {
                    ret                         ySc                    e.ge                    ixelForValue(sumNeg + righ tValue);
                }
                return yScale.getPixelFor                        ue(sumPos + rightValue)
            }

            ret                            yScale.getPixelForValue                            ue);
        },

        updateBezierControlPoints: function () {
            v                     me = this;
            var me ta = m                        etMeta();
            var area = chart.chartArea;
            var points = (m                            data ||                         ;
            var i, ilen, point, model, controlPo                        s;

            Only consider points that ar                        rawn in case the spanGaps option                         used
            if (meta.dataset._                        el.spanGaps) {
                points = points.filter(function (pt) {
                    turn!pt._model.skip;
                });
            }

            f                        tion capControlPoint(pt, min, max) {
                return Math.max(Math.min(pt, max), min);
            }

            if (meta.dataset._model.cubicInterpolationMode === 'mono                            ') {
                helpers.splineCurveMonotone(points);
            } else {
                f(i = 0, ilen = points.length < ilen; ++i) {
                    p                    nt = ints[i];
                    model = point._model;
                    controlPoints = helpers.splineCurve(
                        helper                        reviousItem(poi, i)._model,
                        model,
                        he                        rs.nextItem(points, i)._model,
                        meta.dataset._model.t                        ion
                    );
                    model.controlPointPreviousX = controlPoints.previous.x;
                    model.controlPoi                        reviousY = controlPoints.previous.y;
                    model.c                        rolPointNextX = controlPoints.next.x;
                    model.controlPoint                        tY = controlPoints.next.y;
                }

                if (me.chart.options.el                                s.line.capBezierPoints) {
                    r(0, ilen = points.length; i < ilen; ++i) {
                        model = points[i]._mode                                                           model.controlPointPreviousX = c                        ont                        Point(model.controlPointPr                        ousX, area.left, area.right);
                        model.controlPointPreviousY = capControlPoin                        ode                        ontrolPointPreviousY, area.top, area.bottom);
                        model.con                        lPointNextX = capControlPoin                        odel.controlPoin                    ex                X, ar                a.le, area.right);
                        model.contr                 PointNextY = capControlPoi(model.controlPointNextY, area.top                 area.bottom);
                    }
                },

                dra w: functi on() {
                    var me = this;
                    var chart = me.chart;
                    var meta = me.getMeta();
                    var po                nts                  meta.data || [];
                    var area = chart.chartArea;
                    var ilen = points.length;
                    var i = 0;

                    helpers.canvas.clipArea(chart.ctx, area);

                    if (lineEn                 led                me.getDataset(), chart.options)) {
                        meta.da                        et.draw();
                    }

                    helpers.canvas.unclipArea(chart.ctx);

                    Draw the points
                    for (; i < ilen;)                                                                   points[i].draw(a);
                }
            },

            setHoverStyle: functi(point) {
                //                            nt
                var dataset = th                            hart.data.datas ets[p                                _datasetIndex];
                var index                                 nt._index;
                ustom = point.custom || {};
                var mo                                    point._model;

                model = custom.hoverRadius || helpers.val                                    de                                fault                                set.pointHov                            di                         ind, th                s.c                art.tions.elements.point.hoverRadius);
                model.backgroundColor = custo                 hoverBackgroundColor || helpers.valueAtIndexOrDefault(dataset.pointHoverBackgroundColo in ex, helpers.getHoverColor(model.backgroundColor)
                        mo                    l.borderColor                        custom.h                    erB                    derColor || helpers.valueAtIndex                    Default(dataset.pointHoverBorderColor, in x, helpers.getHoverC                        r(model.borderColor));
                model.borderWidt                         custom.ver                    rderWidth || helpers.valueAt IndexOrD                        ult(dataset.pointHo                    rBord                    Width, index, model.bor                erW                dth);
            },

            removeHov                rStyle: function (point) {
                var me                     this;
                var data                et = me.chart.data.datasets[point._datasetIndex];
                var index = point._index;
                var custom = poin                     ustom || {};
                var model = point._model;

                // Compatibility: If the properties are defined with only                     e old name, use those values
                if ((dat                    et.radius !== undefi ned) && (dataset.pointRa                        s === undefined                        {
                    dataset.pointRad = dataset.radius
                } model.radius = stom.radius || helpers.valu                    tInd                    OrDefault(dataset.po intRa                        s, index, me.ch.options.elements.point.r                        us);
                mod                        backgroundColor = me.getPoint                            groundColor(point, index);
                model.borderColor = ge                        intBorderColor(point, index); model.borderWidth = me.getPointBorderWidth(point, ex
                                      }
        });
    };
}, { "25": 25                    "40"                    40, "45": 45 }], 19: [ction(require, module, exports) {
    use                     rict';

            var  defaults = uire(25);
    var elements                     requ                    e(40);
    v                        helpers = require(4                    ;

    defaults.t('                    larArea', {
        scale: {
            type: 'radialLinear',
            angleLines: {
                display: fal
            },
            gridLines: {
                circu                             true
                ,
                pointLabels: {
                    dis                        y: false
                    }, ticks: {
                    eginAtZero: true
                }
            }
                // B oolea                         Whether to ani                        e the rotation of the cha                                        animation: {
                                         animateRotate: true                                                                animateScale: true
        },

        startAngle: -0.5 * Math.PI,
        leg                        Cal                        ck: function (chart) {
            var text = [
                text.push('<u l class="'                        chart.id + '-legend">');

            var data = chart.data;
            var tasets = data.datasets;
            var bels = data.labels;

            if (datasets.gth) {
                (var i = 0; i < datasets[0].data.length; ++i) {
    text.push('<li><span style="background-color:' + datasets[backgroundColor[i] + '"></span>');
    if(labels[i]) {
        text.push(la                        s[i]);
    }
                                                       text.push('</li>');
}
                                               }

text.                            ('<                            ');
    retur                            xt.join('');
                                                          },
    legend: {
    labels: {
        generateLabels: function (chart) {
            var data = art.data;
            if (data.label                    length && data.datas ets.length) {
                urn data.labels.map(function (la, i) {
                    meta = chart.getDataset(0);
                    va                        s = data.datasets[0]                                                              var                          =                    eta.ta[i];
                    var cu                        m = arc.custom || {};
                    var v                        eAtIndexOrDe                        lt = helpers.valueAt                            xOrDefault;
                    var ar                            s = chart.options.el                        nt                    arc; var fill = custo                        ackgroundColor ?custom.backgroundColor: valueAtIndexOrDefault.backgroundColor, i, arcOpts                        ckgroundColor);
                var stroke = custom.borderColor ? cust                        borderColor: valueAtIndexOrD                        ult(ds.borderColor, i, arcOpts.borderColor);
                var bw = custom.borderWidth ? custom.borderWidth : valueAtIndexOrDefau                        ds.borderWidth, i, arcOpts.borderWidth);

                return {
                    text                        abel,
                    fillStyle: fill,
                    strokeStyle: stroke,
                    lineWidth:                        ,
                    hidden: isNaN(ds.data) || meta.data[i].hidden,

                    Extra data used for toggling the correct item
                                                             index: i
                                                                               ;
                });
            }
            return [];
        }
    },

    nClick: function (e, legendItem) {
        var index = legendItem.index;
        var chart = this.chart;
        var i, ilen, meta;

        for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
            eta                      hart.getDat                     tMe(i);
            meta.data[inde                        hidden = !meta.data[index                        idden;
        }
        chart.upda                        );
    }
},

    // Need to override these to give a nice defa
    tooltips: {
    callbacks: {
        ti                    e: f                    ctio                     ) {
    return '';
},
    lab                            function (item, data) {
        r                     rn data.lab[it.index] + ': ' + ite m.yLa;
    }
                    }
                }
                                                  ;

mod.ex                    rts = function (Cha rt) {
    Chart.control                    rs.p                    arAr = Chart.Dat                     tCo                    roller.extend({
        dataElementType: eleme                    s.Ar

                                                        li                    Scales: helpers.noop,

        update: function (reset) {
            var me = this;
            var art                     me.c                     t;
            var chartArea = char                        hartArea;
            var meta                     m                .getM                ta();
            var opts = chart.opti            ons;
            var arcOp ts = op ts.eleme nt            s.arc;
            var minSize = Math.min(chartAre.rig - chartAre                 lef, chartArea.bo ttom - chartArea.t);
            chart.outerRadius = Math.max((minSize                  a            rcOp        ts.borde rW idt h / 2) / 2, 0);
    chart.innerRa            dius = Math.max(opts.cut            outPercentage ? (chart.outer            Radius / 100) * (opts.cutoutPercentage) : 1, 0);
    chart.ra                iusLength = (chart.outerRadius - chart.innerRadius) / cha                t.getVisibleDatasetCount();

    me.outerRadius                     chart.outerRadius - (art.radiusLength * me.index);
    me.innerRadius = me.ou                    rRadius - chart.radiusLength;

    meta.count = me.co                    tVisibleElements();

    helpers.eac                    met                    data, function (arc, dex) {
        me.updat                        ement(arc, nde                     reset);
    }
}
                                      update                    ement: function (arc, i                    ex, reset) {
    var me = this;
    var ch = me.chart;
    var d                                t = me.getDatase                                                           var opts = chart.op
    ar animationOpts = opts.animation;
    var scale = c.scale;
    var labels = ch                            data.label
    var ir            cum            ference = me.calculate Circumference(data                et.data[index]);
    var centerX = scale.xCenter;
    var centerY = scale.yCent                r;

    // If there is NaN d                ta b                fore us, we nee d to                     lculate the sta                    ing angle correct
    // We could                      w                     more efficient                     re, but its                unli                ely that the polar a rea chart                    ill have a lot                      data
    var visibleCount =                    ;
    var meta = me.getMeta();
    for (var i = i < index; ++i) {
        if (!i                    aN(taset.data[i] & !meta.data[i].hidden                    {
                                                                       ++visibleCou                    ;
    }
}
                                                       // var  negH                    fPI = -0.                         Math.PI;
                                             var tas                tSta                tAngle = opts.star tAngl
var distance = arc.hidden ? 0 : scale.getDistanceF                om            Cente            rForValue(dataset.data[index]);
var sta        rt A ngle = data se tSt art Angle + (circumfer ence * visibleC ou            nt);
var endAngle = startAngle + (arc.hidden ? 0 : circumference);

var res            etRadius = animationOpts.ani            mateScale ? 0 : scale.get DistanceFro                CenterForValue(dataset.data[inde]);

h elpers.extend(arc, {
    // Utility
    _datasetIndex: me                        dex,
    _index: index,
    _scale: le,

    // Desired view prop                                s
    _model: {
        enterX,
        y: cen,
        nnerRadius: 0,
        outerRadius: reset ? tRadius : distance,
        startAngle: reset && animationOpts.anim                            otate? d                                tStartAngle: startAngle,
        dAng                e: r                set && animationOpts.animateR otate? datasetStartAn                    e: endAngle,
        label: helpers.valueAtIndexOrDefaul                        abels, index, la bels[index])
                                                    }
                        });

// Apply border and                                 style
me.removeHoverS                                    rc);

rc.pivot();

rem                                    erStyle: function (arc) {
    Chart.DatasetController.prototype.r                                    overStyle.call(this, arc, this.ptions.elements.arc);
},

countVisibleElements: function () {
    var dataset = this.getDataset();
    var meta = etMeta();
    var count = 0;

    helpers.each(meta.data, function (element, index) {
        sNaN(data                                        a[index]) && !element.hidden                                                                     count++;
    });

    et                         c                    nt;
},

calculateCircumfe                    nce: function (value) {
    var count = t.getMeta().count;
    (unt > 0 && !isNaN(va                    e)) {
        return (Math.PI) / count;
    }
    return 0;
}
                });
            };
                          }, { "25": 25, "40": 40, "45": }], 20: [function (require, module, expo                    s) {
    'use strict';

    var defaults = require(25);
    var e                        ents = require(40);
    var helpers = require(

        defaults._set('radar', {
            scale: {
                type                    'ra                ialLinear'
            },
            elements: {
                ne: {
                    ten                    on: 0 // no bezier in radar
                                         }
            });

    module.exports = function (Chart
                Chart.controllers.r                        r = Chart.DatasetController.extend(da                        et                    em                ntT                pe: elements.Line,

            dataElementType: elements.Point,

            linkScales: helpers.n                    p,

            update: function set) {
                var                      = his;
                var meta = me.g                        eta();
    var l = meta.dataset;
    var points = meta.a; var ustom = line.custom || {};
    var dataset = me.getDataset()
    var lineEl ementOptions = me.art.options.elements.line;
    var scale = me.cha rt.scale;

    // Compatib                    ity: If the properties are defined with only the old name, use th                se                 alues
    if (dataset.tension !== undefin ed) && (dataset                        neTension === undefin                             {
        at                        t.lineTensio = dataset.tension;
    }

    helpers.extend(meta.dataset, {
        // Util                                                        _                        as                        ndex: me.ind                    ,
        sca                e: scale,
        // Da                                                                                         children : poin
        _l: true,
        // Mo
        mod                l: {
            //  Appea                        ce
            ten sion: tom.tension ? custom.tension : h                    per                .valueOrDefault(dataset.line Tension, lin                    lementOptions.tension),
            backgroundC olor: custom                    ackgroundColor ? custom.background                olo: (dataset.backgroundColor || lineElementOptions.backgroundColor),
            border Width: custom.borderWidth ? stom.borderWidth : (dataset.borderWidth || lineElementOp                    ons.borderWidth),
        border                    lor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
            fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? ataset.fill : lineElementOptions                        ll),
    borderCapStyle: custom.borderCapStyle ? custom.border                    pSt                    e : (data.borderCapStyl | lineElementOptions.borderCapStyle
                                                              borderDash: cus tom.borderDas ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash)
                                                borderDashOffse                     custom.borderDashOffset ? custom.borderD                shO                fset : (dataset.borderDashOffs et || lineElementOptions.borderDashOffset), borderJoinStyle: custom.borderJoinStyle ? custom.borde                    oinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoin                    yle),
                            }
                                          });

meta.dataset.pivot();

// Upda                     Points
helpers.each(points, fun                    ion(point, index) {
    me.updateElement(point, index, reset);
}, me);

// Update bezier control points
me.updateBezierCo                    rolPoints();
                                      },
    updateElement: function (poin                     index, reset) {
        var me = this;
        var custom = point.custom || {};
        var data = me.getDat();
        var scale = me.t.scale;
        var point                        men                        tions = hart.options.elements.point;
        var pointPosition = scale.getPointPo                        io                    orV                lue                index, dataset.data[index]);

        // Compatibility: If the pro perties are                    efined with only the old name, use those values
        if ((dataset.ra                    us !== undefined) && (dataset.pointRadius === undefined)) {
            data                    t.pointRadius = dataset.radius;
        }
        if ((dataset.hitRadius !== undefined) && (dataset.poin                    itRadius === undefined)) {
            dataset                        intHitRad = dataset.hitRadius;
        } helpers.extend(point, {
            // Utility
            _                    tasetIndex: me.index,
            _index: index,
            _scale: scale,

            // Desired view prop                            es
            _model: {
                x: set ? scale.xCenter : pointPosition.x, // value not used in dataset                        ale, but we want a consistent API between sc
                y: reset ? scale.yCenter : poin                            ition.y,

                // Appearance
                tension: custom.tension ? custom.tension : helpers.valueOrDefault(dataset.lineTension, me.chart.opti.el                        nts.line.tension),
                radius: custom.radius ? custom.radius                         elpers.valueAtIndexOrDefault(dataset.pointRadius, i, pointElementOptions.radius),
                backgroundColor: custom.backgroundColor ? custom.backgrou                            lor: helpers.valueAt                        exOrDefau                            ataset.pointBackgroundColor, index, pointElementOptions.background                        or
                                                  borderColor: custom.bo                    erColor? custom.borderColor : helpers.valu                    tIndexOrDefault(dataset.pointBorderCol                         index, pointElementOptions.borderColo
                                borderW                        h: custom.borderWidth ? custom.borderWidth: helpers.val                            IndexOrDef                        t(d                        set.pointBorderWidth, index, pointElementOptions.borderWidth),
            pointStyle: om.pointSt ? tom.pointStyle : helpers.valueAtIndexOrDefault(d                        set.pointStyle, index, pointElementOptions.po                        Style),

            // Tooltip
            hitRadius                            stom.hitRa                        s?                        stom.hitRadius : helpers.valueAtIndexOrD                        ult(dataset.pointHitRadius, index, pointElementOptions.Radius)
        }
                                                            });

point._m                    el.skip = custom.skip ? custom.ski(isNaN(point._model.x) || isNaN(point                        odel.y));
                    }                                                                                         pdateBezierControlPoints: function () {
    var chartArea = this.chart.chartArea;
    meta = this.getMeta();

    elpers.each(meta.data, function (point, index) {
        var model = point._model;
        var co                            lPoints = helpers.splineCurve(
            helpers.previousItem(meta.dat in                        , true)._model,
            model,
            helpers.nextItem(me                            ata, index, true)._model,
            model.tensio);

        // Prevent the bezier going ou                        de                    f                 he                 ounds of the graph
        model.co                    rolPointPrev                        sX = Math.max(Math.min(controlPoints.previous.x, chartArea.right), chartArea.le); model.controlPointPreviousY = Math.max(Math.min(controlPoints.previous.y                 ch                rtArea.bottom), chartArea.top);

        model.contro                        intNextX = Math.max(Math.min(controlPoints.next.x, chartArea.right), chartArea.ft
                            model.controlPointNextY = Math                max                Math.min(controlPoints.next.y, chartArea.bottom), chartArea.top);

        // Now pivot the point fo r animation
        point.pivot();
    });
},

    setHoverSty                    : function (p                        t) {
        // Point
        var dataset                             is.chart.data.data                        s[point._datasetIndex];
        v                        custom = t.custom || {};
        var index = poin                        index;
        var model = point                        odel;

        model.radius = cu                        m.hoverRadius ? cu                    om.hoverR                        us: helpers.valueA                    nde                    rDefault(dataset.pointHoverRadius, index, this                cha                t.options.elements.point.hoverRadius);
        model.backgroundColor = custom.hoverBackgr                undColor ? custom.hoverBackgroundCol or: lpers.valueAtIndexOrDefault(dataset.p                        tHoverBackgroun dColor, index                            lpers.getHov                        olo                    mo                    l.backgroundColor));
        model.borderColor = custom.hoverBor                        Color ? custom.hoverBorderColor : h                        ers.valueAtIndexOrDefault(dataset                        intHoverBorderColor, index, helper                        etHoverC olor(model.bo                            Color));
        model.borderWi = ustom.overBorderWidth ? ustom.hoverBorderWidth : helpers.value AtIndexOrDefaul                    dataset.pointHoverBo                    erWidth, index, model.borderWidth)
    },

    remove                    verStyle: function (point) {
        ar dataset = this.chart.d                    a.datasets[point._datasetIndex];
        var custom = int.custom || {};
        r index = point._ind
        r model = point._model;
        var ointElementOptions = this.chart.options.elements.point;

        model.radius = custom.radius ? custom.radius : helpers.valueAtIndexOr                    fault(dataset.pointRadius, index, pointElementOptions.radius);
        model.backgroundColor = custom.backgroundColor ? custom.b                    kgroundColor: helpers.valueAtIndexOrDefault(dataset.pointBackgroundColor, ndex, pointElementOptions.backgroundColor);
        model.bo                    erColor = custom.borderColor ? custom.borderColor : helpers.valueAtIndexOrDefault                    ataset.pointBorderColor, index, pointElementOptions.borderColor);
        model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.valueAtIndexOrDefault(dataset.pointBorderWidth, ndex, pointElementOptions.borderWidth);
    }
                });
            };
        }, {
    "25": 25, 0": 40, "45": 45 }], 21: [function (require, module, exports) {
            'use strict';

    var defaults = requ                    e(25);

            defaults._set('scatter', {
        hover: {
            mode: 'single'

                                     scale                        {
                xAxes: [{
                    id: 'x-axis-1',    // need an ID so datasets can reference the scale
                    type: 'linear',    // scatter should                     t use a category ax
                    position: 'bo                        m'
                }],
                yAxes: [{
                    id: axis - 1',
                        t                             'linear',
                    position: 'left'
                },

                    showLin                    : f                    se,

                    t                olt                ps: callbacks: {
                    title: unction()                                                             return '';                       // doesn't make sense for scatter since data are formatted as a po                nt
                },
                    label: function (item) {
                        re                urn '(' + item.xLabel + ', ' + item.yLabel + ')';
                    }
                    }
        }
    });

    module.exports = function (Chart) {
        // Scatter                charts use line controllers
        Chart.controllers.scatter = Chart.co                trollers.line;
    };
}, { "25": 25 }], 22: [function (re                    ire, module, exports) {
    /* global window: false */
    'use strict';

    var defaults = require(25);
    var Element = require(26);
    var helpers = require(45);

    defaults._set('global', {
        ani                    tion: {
            duration: 1000,
            easing: 'easeOutQuart',
            onProgress: helpers.noop,
            onCompl                             helpers.noop
        }
            });

module.exports = funct(Chart) {
    Chart.Animation = Element.extend({
        chart: null, //                     e a                    mation associat                d                 hart instance
        currentStep: 0                 // the current animation step
                                       numSteps: 60, // default number of steps
        easing: '',                // the easing to use for this animation
        render: null, // render fun ction used b                    the animation service

        onAnimationProgress: null,                 / u                er specified callback to fire on e ach step of                     e animation
                    onAn                    ationComplete: nul                        // user specified callback t                    fir                    when the animation finishes
                });

Chart.animat                    nService = {
    frameDuration: 17,
    animati                    s: [],
    dropFrames: 0,
    request: null,

    /**
                       * @param {Chart} chart - Th                 ch                rt to animate.
      * @param {C                    rt.Animation} animation - The animat                    n that we will ani                        e.
     * @pa                    m {                    mber} duration - The animation duration in ms.
     * @para                    {Boolean} lazy - if true, the chart is not marked as animating to enable more res                    nsive interactions
     */
    addAnimation: function (chart, animation, durat                    n, lazy) {
        var a                ima                ions = this.animations;
        var i, ilen;

        animation.chart                         hart;

        if (!lazy) {
            char.an                mating = true;
        }

        for (i = 0, ilen = animations.length; i < ilen; ++i) {
            if (animations[i].chart                          chart) imations[i] = animation;
            return;
        }
    }

                                          animations.push(animation);

    // If there are no animations queued, manually kickstart a dig                    t, for lack of a better word
    if(animations.length === 1) this.requestAnimationFrame(
                        }
                                      },

    can                elA                imation: function (ch                rt) {
        var index = helpers.findIndex(this.a                    mations, function (animation) {
            r                turn animation.chart === chart;
        });

        if (dex !== -1) {
            is.animations.splice(index, 1);
            c                    rt.animating = false;
        }
    },

    requestAnimationFra                    : f                    ction() {
        v                     me = this;
        if(me.req                        t === null) {
                            // Skip anima                        n frame requests until the active one is executed.
                            / is can happen when processing mouse events, e.g. 'mousemove'
                                                 // and 'mouse                             events will trigger multiple renders.
                                                    me.request = helpers.requestAnimFrame.call(window, function () {
    me.request = nu                                                               me.startDigest();
});
                        }
                    },

                                                                           * @private
                     * /
tDig: nctio() {
    var me = this;
    var startTime = Date.now();
    var fr                        sT                        op = 0;

    if (me.dro                Fra                es > 1) {
        framesToDrop = Math.floor(m                    dropFrames);
        me.dropFr                        s = me.dropFrames % 1;
    }

    me.a                    an(1 + framesToDrop);

    var en                    im = Date.now();

    me.dropFrames += (e ndTime - startTime / me.frameDuration;

    // Do we have mo re stuff t                        nimate?
    (me.animations.length > 0) {
        me.requestAni                            on                        me;
    }
},

/**
   * @private
   */
a dvance: fu                        ion(count) {
    var animations = this.animations                                                  var animation, c                        t;
    r i                  0;

    whi le(i < animati                    s.length) {
        animation = animations[i];
        chart = animation.chart;

        animation.c                rre            ntSt        ep = (an ima tion.c urren tS tep || 0) + cou nt;
        animation.currentStep = Math.min(anim            atio.currentStep, animation.numSteps);

        helpers.callback(animation.render, [chart, animation], char);
        help             rs.callback(animation.onAnimationProgr             ss, [animation], chart);

        if (ani                    tion.curr                        Step >= mation.mSt                ps) {
            helpers.call            bac            k(an             mation.onAnimationComplete, [animation], chart);
            chart.animating = false; animations.splice(i, 1);
        } else {
            ++i;
        }
    }
}
                };

                                   **
                 * Provided for                        ckward com                    tib                    ity, use Chart.Animation instead * @prop Chart.Animation#animationObjec * @deprecate                        ince version 2.6.0
    * @todo remov                        t                     rs                on             3
        * /
Object.defineProperty(Chart.Animation.rototype, 'animationObject', {
    et: function () {
        return this
    }
});

/**
* Provided for                backward compatibili                y, use Chart.Animation#chart inst ead
* @prop Chart.Animation#chartInstance
* @deprecate                    si                ce ve                sion 2.6.0
             * @todo remove at version 3
*/
Object.defineProperty(Chart.Animation.pro             otype, 'chartInstance', {
    get: functio() {
        return this.chart;
    },
    set: function (value) {
        his.chart = value;
    }
                });
            };
                    }, { "25": 25, "26": 26, "45": 45 }], 23: [fu             cti            on(require, module, exports) {
    'use strict';

    ar defaults = require(25);
    var h                lpers = require(45);
    var Interaction = require(28);
    var platform = require(48);

    module.exports = nction(art                    {
        var plugins = Chart.p                    gins;

        // Create a dictionary of c                    rt types, to allow for extensi                        of existing types
        Chart.types = {};

        // Store a reference to e                         instance - allowing us to globally resize chart instances on window resize.
        // Destroy metho                    on                the c                art will remove the i            nst            ance             of the chart from this reference.
        Chart.insta             ces = {};

        // Controllers available for dataset vi             ual            ization eg. bar, line, slice, etc.
        Chart.controllers = {};

                               /**
                 * Init                alizes the give n config with                    lobal and chart default values.

                function initConfig(config) {
                                      config = config || {};

                    /                 Do             NO            T use configMerge() for the data object                 ecause this method merges arrays
                                   // and so would change references to labels and dataset                , preventing data updates.
                                   var data = config.data = config.data || {};
                                   data.datasets = data.datasets || [];
                    data.labels = data.labels || [];

                    con                ig.options = helpers                configMerge(
                                                         d                faults.global,
                         defaults[config.type],
                                          config.options || {});                                           return config;
                                     }

                /**
                 * U                        tes the config of the chart
                 * @pa                         chart {Chart} chart to update the opt                             for
                 */                                                                                      function updateC            onf            ig(c             art) {
            var ne             Opt            ions = chart.options;

            // Update Scale(s)             with options
            i(newOptions.sca             e) {
                chart.scale.options = newOptions.scale;
            } else if(newOp                ions.scales) {
                ewOptions                    cales.xAxes.conc at(newOptions                        ales.yAxes).forEach(function (scaleOptions) {
                    chart.scales[scaleOptions.id].o ptions = sca                            tions;
                });
            }

                                                  Tooltip
                                                                 cha                        tooltip._options = newOptions                    oolt                    s;
        }

                function po                     ionIsHorizontal(position) {
            return position = 'top' || po                     ion                    == 'bottom';
        }

                helpers.extend(Chart.prototype, /** @lends Chart */ {
            /**
             * @priv
             */
            construct: function (item, config) {
                var me = this                                             config = initConfi                     onfig);

    var context = platform.acquireContext(item, con);
    var canvas = context && text.canvas;
    var height = canvas && canvas.height                                            var width = canvas && canvas.width;

    me.id = helpers.uid();
    me.ctx = conte                    ;
    me.canvas = canvas;
    me.config = config;
    me.width = width;
    me.height = height;
    me.aspectRatio = height ? width / hei : null;
    me.options                      onfig.options;
    me._bufferedRender = f                     e;

    /**
                       * Provided for backward compatibility, Chart and Chart.Controller have                     en merged,
     * the "instance" still need to be defined since it might be called from plugins.
                                         *  @prop Chart#chart
                          * @deprecated since version                        6.0
     * @todo                         ove at version 3
     * @private
                          */
    me.chart = me;
    me.controller = me; // chart.chart.controller #                        eption

    // Add the chart instance to the global namespace
    Char                    inst                    ces[id] = me;

    // Defin                     lias to the config data: `chart.data === chart.config.data`
    Object.defineProper                     me, 'data', get: fun                        on() {
        retu rn m                    conf.dat
    },
    set: function (va) {
        me.config.data = value;
    }
});

                                          if (!context || !canvas) {
    // The given item is not a compatible context2d element, let's return before finalizing
    // the chart  initializati                        but after setting basic chart / controller pro                        ties that
    // ca                    help                    o fi                     e out that the chart is not valid (e.g chart.canvas !==                      l);
    // https://git                     .com/chartjs/Chart.js/issues/2807
    nsole.error("Failed to create chart: can't acquire                      text from the given item");
    eturn;
}

me.initialize();
me.update();
                                                        },

/**
                     * @private
*                                           initialize: functi                        () {
   var me = this;

                        // Before init plugin notification
   plugins.notify(me, 'befor                        it');

   helpers.retinaScale(me, me.options.devicePixelRatio);                                               me.bindE                            s();

    if (m                                ions.responsive) {
                                  // Initi                                size before chart draws (m                                e silent to prese                                    itial animations).
                                     me.resize(true);
                              }                                                                                                     Ma                        sure scales have IDs a                        are built before we build any con                    olle                    .
                     me.ensureScalesHaveIDs();
   me.                     ldScales();
   me                     itToolTip();

   // After init plugin no                     ication
   plugins.notify(me,                      terInit');

   return me;
                 },

clear: function () {
   helpers.canvas.clear(this);
                                       return  this;
                    },

stop: function () {
                                             // Stops any current animat                         loop occurring
    Chart                            mationService.cancelAnimation(this);                                                    r                            n t
},

re                                 function (silent) {
                                                                     var me = this;
   var options = me.options;                                              var canvas = me.canvas;
                        var aspectRatio = (optio                            aintainAspec                        ti                        & me.aspectRat                    ) ||                    ull;                                            // the canvas render width and height will be cas                      to integers so make sure that
                     // the canvas display style uses the same integ                     values to avoid blurring effect.

                     // Set to 0 instead of canvas.size because the siz                     efaults to 300x150 if the element is collased
   var newWidth = Math.max(0, Math.floor(helpers.ge                     xim                    Width(canva s)));
                        var newHeight = Math.max(0, Math.floor(as                        tRatio ? newWidt                         aspectRatio : helpers.getMax                        mHeight(canvas)));

    i                            e.width === newWidth && me.height ==                                Height) {
                                                       return;
   }

                              canvas.wid                             m                        idth                         ewWidth;
   canvas.height = me.height = newHeigh                                                canvas.style.width = ne                        dth + 'px';
   canvas.s                            .height = ne                        ig                        + 'px';

                                                           he lpe rs. retinaSca le(me, op tions.d evicePix el            Ratio);

               if (!silent            ) {
                      // Notify any                plugins about the resize
                      var new                ize = { width: newWidth, height: newHeight };
                      plugins                    otify(me, 'resi                    ', [newSize]);

                                           // Notify of resi                e
                                     if (me.options.onResize                 {
                          me.options.onResize(me, newSize);
       }

                                     me.stop();
                      me.                pdate(me.options.responsiveAnimationDuration);
                                 }
},

                                ensureSc                        sHaveIDs                        unction ()                                                                                       va                 o            ption            s = this.options;
                   var scalesOptions = options.scales || {};
                  var scaleOptions  = options.scale;                                            helper                    each(scalesOp                ions                xAxes, function (xAxis                ptions, index)             {
                      xAxisOp tions.i d = xAxi sO            ptions.id || ('            x-axis-' + index);
               });

                   helpers.each(scalesOptions.yAxes, func                    on (yAxisOptions, index) {
                             yAxisOptions.id = yAxi                    ptio                s.i                 || ('y-axis-' + index);
                     });

                         if (scaleOptions
                                           scaleOpt ions.id =                        aleOptions.id || 'scale';
                        }
                    },

                       /**
* Buil                             map of scale ID to sca                     obj                    t for future lookup.
                      */
bu                 dScales: function () {
    var me = this;
    var options = me.options;
    var scales = me.scales = {};
    var items = [];

    if (options.scales) {
        items = i                 ms.concat(
            (options.scales.xAxes || []).map(function (xAxisOption                  {
                return { options: xAxisOptions, dtype: 'category', dposition: bottom' };
                                }),
                (options.s                 les.yAxes || []).map(function (yAxisOptions) {
                    return {
                        options: yAxisOptions, dtype: 'linear', dposition: 'left                 };
                    })
        );
    }

    if (options.scale) {
        i                 ms.push({
            options: options.scale,
            dtype: 'radialLinear',
            isDefault: true,
            dposition: 'chartArea'
        });
    }

    helpers.each(items, function (item) {
        var scaleOptions = item.optio                s;
        var scaleType = helpers.valueOrDefault(scaleOptions.type, item.dtype);
        var scaleClass = Chart.scaleService.getScaleConstructor(s                aleType);
        if                     scal                     ass) {
        return;
    }

    if (positionIsHori                     tal(scaleOptions.position) !== positionIsH                     zontal(item.dposition)) {
        scal                     tio.position = item.dposition;
        var scale = new scaleClass({
            id: scaleOptions.id,
            options: sca                        ptions,
            ctx: me.ctx,
            chart: me
        });

        scales[scale.id                      scale;
        scale.mergeTicksOptions();

        / / TODO(SB): I think we                        ould be able to remove this custom case (options.scale)
        //                             consider it as a regular scale                        rt                    f th                    "sca                     "" map only! This would
        // make the logic easier and remove some useless? custom code.
        if (item.isDefault) {
            me.scale                      cale;
        }
    });

    Chart.scaleSe                        ce.addScalesToLayout(this);
} build                        pdateContro                        rs: functio                        ) {
    var me = this;
    var types = [];
    var newCont                            er                         [

        helpers.each(me.data.datasets, function (dataset, datasetIndex) {
            var meta = me.get                     asetMeta(datasetIndex);
            var type = dataset.type || me.conf                     type;

            if (meta.type & eta                    ype !== type) {
                me.destroy                            setMeta(ase                        dex);
                meta = me.DatasetMeta(datasetIndex);
            }
            meta.type = ty

            type ush(meta.type);

            if (meta.controller) {
                meta.controller.updateIndex(asetIndex);
            } else {
                var ControllerClass = Chart.cont                        lers[meta.type];
                if (Contro                        rClass === undefined) {
                    throw Error('"' + meta.type + '" is not a chart type.');
                }

                meta.controller = new Contro                        rClass(me, datasetIndex);
                newControl                        s.push(meta.controller);
            }
        }, me);

    re                        n newControllers;
},

/**
                         eset the elements of all                         asets
 * @private
 */
resetElements: function ()                                                var me = this;
helpers.each(me.data.datasets, function (dataset, datase                        dex) {
                                                                        .getDatasetMeta(datasetIndex).controller.reset();
}, me);
                    },

/**
* Resets the chart back to it'                        tate before the initial animation
*/
reset: function () {
    this.resetElements();
    this.tooltip                        itialize();
},

up                        e: function (config) {
    var me = th

    if (!config || typeof config !== bject') {
    // backwards compati                        ity
    config = {
        duration: config,
        lazy: arguments[1]
    };
}

updateConfig(me
                        if (plugins.notify(me, 'beforeUpd                        ') === false) {
    return;
}

// In case the e                        re                         a object changed
me.tooltip._data =                        .data;

// Make sure dataset                        ntrollers are updated and new controllers are reset
var newControllers = me.buildOrUpdateControllers();

// Make sure all dataset controllers have correct meta data counts
helpers.each(me.data.datasets, function (dataset, datasetIndex) {
    e.getDatasetMeta(datasetIndex).controller.build                        pdateElements();
}, me);

me.updateLayout();

// Can only reset the ne                        ontrollers                        ter the scales have been updated
helpers.each(newControllers, function (controller) {
    controller.reset();
});

me.up                        eDatasets(
    // Need to reset tooltip in case it is displayed with elements tha                        re removed                                              // after update.
    me.tooltip.initialize();

// Last active contains items that                         e previously in the tooltip.
// When we                         et the tooltip, we need to clear i                                                                          me.lastActive = [];

// Do this bef                                ender so that any plugins that need final scale updates can use it
ns.notify(me, 'afterUpdate');

f(me._bufferedRender) {
    me._                                redRequest = {
        duration: config.du                                n,
        easing: config                                ng,
        lazy: config.lazy
    };
} els
me.render(config);
                        }
                    },

/**
 * Updates the chart layout unless a                        ugin returns `false` to the `be                        eLayout`
* hoo                        in which case, plugins will not be called on `after Layout`.
    * @private
       */
updateLayout: funct                                ) {
    var me = this;

    if (plugins.y(me, 'beforeLayout') === false) {
        return;
    }
    Chart.layoutService.update(th is, this.width,                             .height);

    /**
* Provided for                                ward compatibility, use `afterLayout` instead.
*                                hod IPlugin#afterScaleUpdate
* @deprecated since version                             0
                    * @todo remove at version 3
* @private
*/
    plugins.notify(me, fterScaleUpdate
                        plugins.notify, 'afterLayout');
},
/**
* Updates all datasets unless a plugin retu                         `false` to the `beforeDa                        etsUpdate`
   * hook, in which case, plugins will not be called on `a fterDataset                                te`.
*                            ivate                                                                                                updateDa                                    : function () {
               var me = this;

if (plugin                                        y(me, 'beforeDatasetsUpdate') === false) {
                     turn;

            for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
me.u                                    ataset(i);
}

plugi                                    ify(me, 'afterDatasetsUpdate');
},

/**
      * U                                     dataset at index unless a plugin returns `false` to the `                                eD                            et                        ate                                            * hook, in which case, plugins will not be called on `aft                        atasetUpdate`.
* @private
*/
updat                            aset: function (index) {
    var me = this;
    r meta = me.getDatasetMeta(index);
    var args = {
        meta: ta,
        index: index
    };

    if (plugins.notify(me, 'beforeDatase                        date', [args]) === false) {
        return;

        meta.con troller.te();

        plugins                        tify('afterDatasetUpdate', [args]);
    },

    render: function (config) {
        var me = this;

        if (!confi                                typeof co !== 'objec
        backwards compatibility
        config = duration: config,
            laz                        arguments[1]
    };
}

var duration = conf                        duration;
var lazy = config.lazy;

if (plugins.notify(me, 'beforeRender') == alse) {
    turn;
}

var animationOpti = me.options.animation;
var onComplete = function (animatio
                            plugi                        notif                        e, 'afterRender');
helpers.callback(animationOptions                         anim                        onOptions.onComplete, [animatio n], me);                                                 };

if (animationOptions && ((type of durat !== 'undefined' && duration !== 0) || peof                         ation === 'undefined' && animationOptions.duration !== 0))) {
    var animation = new Chart.Animation({
        Steps: (duration || animationOptions.duratio / 16.66, // 60 fps
            easing: config.easing || animationOpt                        s.easing,

        render: function (chart, animationObject
                                    var ea                        gFunction = helpers.easing.effects[animationObject.easing];
        var currentStep = animationObject.currentStep;
        var stepDe                        al = currentStep / animationObject.numSteps;

        chart.draw(easingFunction(s                        Decimal), stepDecimal, currentS);
    },

        onAnimationP                        ress: animationOptions.onProgress,
        onAnimationCo                        ete: onComplete
                            });

Chart.animationServic                            dAnimation(me, animation, durati on, lazy                                                      } else {
    me.draw();

    // See https://github.com/chartj                            art.j                            sues/3781
    o                                lete(new Chart.Animati                                    umSteps: 0, chart: me }));
return me;
                                               },

draw: function (easingValue) {
    var me = this;

    clear();

    if (help.is                        lOrUndef(easingValue)) {
        easingValue = 1;
    }

    me.tra                        tion(easingValue);

    if (plugins                                fy(me, 'beforeDraw', [easingValue]) === false) {
        return;
    }

    // Draw all the scales
    elpers.each(me.boxes, function ({
        box.draw(me.char                            a);
}, m                                                        if (me                                e) {
    scale.draw();
}

me.drawDatasets(ea                                alue);
                                                                                            ._drawTooltip(easingValue);

gins.notify(me, 'afterDraw', [easingVa]);
                    },
/**
* @private
*/
transition                        unction(e                        ngValue) {
    var me = this;

    for (v = 0, ilen = (me.data.datasets || []).length; i                             en; ++i) {
        if (me.isD                        setV                        ble(i)) {
            me.getDa tasetMet.controller.transition(easingValu                                                        }
    }

    me.tooltip.transition(easingVal
                    },

/**
                                                                           *  D raws  al l d ata sets unle ss a plug in retu rns `fal se            ` to the `befor            eDatasetsDraw`
             * hook, in which ca            se, plugins will not be call            ed on `afterDatasetsDraw`.                                                             * @private
                  /
               drawDatasets: f                 ction (easingValue) {
                                  var                me = this;

                                        if (plugins.notify(me,                     eforeDatase                     raw                     [easingValue])                    == f                     e) {
        return;
    }

                      // Draw datasets reversed to support proper line stacking
                       or (var i = (me.data.datasets || []).length - 1; i >= 0; --i) {
                                            if                    me.isDatasetVi                    ble(                      {
            me.drawDataset(i, easing                     ue);
        }

     plug                        .notify(me, 'afterDatas                        Draw', [easingValue]);
 },

                        /**
                            * Draws datas                            t                         ex un                        s a plugin return                    `fal                    ` to                     e `beforeDatasetDraw`
 * hook, in                      ch case, plugins will not be called on `afterDataset                     w`.                                         * @private
                      */
drawDataset: function (index, easi                            lue) {
    r me = this;
    var                              =                        .getD                        setMeta(index);
    var args = {
        me                      me,
        index: index, eas                     Value: easingValue
    }                                                               if (plugins.no                     y(m                     'beforeDataset Draw'                        args]) === false) {
        return;
    }

    meta.controller.draw(easing                     ue);

    plugins.n otify, 'afterDatasetDraw', rgs]
},

/**
 * Draws tooltip unle                     a plugin returns `false` to the `beforeTooltipDraw`
 * hook, in                      ch case, plugins will not be called on `afterTooltipDraw`.
                   * @private
 */
_drawTooltip: function (ea                     gValue) {
    var me = this;
    var tooltip =                     .tooltip;
    var args = {
        tooltip: tooltip,
        easingValue: easingValue
    };

    if                        lugins.notify(me, 'beforeTooltipDraw', [arg === false) {
        return;
    }

    tooltip.d                            );

    p                            ns.notify(me, 'afterTooltipD                            , [args]);
                                            },

// Get t                                ngle element that was clicked on
// @return : An object                                aining the dataset index and element index of                                     tching element                                o                             ai                        the                        ctangle that                     s dr
getElementAtEvent: function (e) {
    return Interaction.modes.single(th                      e);
},

g                        lementsAtEvent: function (e) {
    eturn Interaction.modes.label(this                             { intersect: true });
},

getElements                        Axis: function (e) {
    turn Interaction.modes['x-axis'](this, e, { intersect: true });
},

getElementsAtEventF orMode: fun                            n(e, mode, options) {
    var method                                teractio                            des                            e];
    if (typeof method == unction') {
    re                             method(this, e, opti
                        }

urn
                    }                                                                               tasetAtEvent: fu                                n(e) {
    retu                        Interaction.modes.dataset(this, e                         intersect: true });
                                         },

getDatasetMeta: function (tasetIndex) {
    r m = t                 s;
    va                 dataset = me.data.datasets[datasetIndex];
    if (!dataset._meta) {
        dataset._meta = {};
    }
    var m                 a = dataset._meta[me.id];
    if (!meta) {
        meta = dataset._meta[me.id] = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,			// See isDatasetVisible() comment
            xAxisID: null,
            yAxisID: null
                                            ;
        }

        retu                  me                a;
    },

    getVisibleDatasetCount: function () {
        var count =
                        for (var i = 0, ilen = this.data.datasets.length; i                  ilen; ++i) {
            if (this.isData                 tVisible(i)) {
                c                 nt +                ;
            }
        }
        return count;
    },

    isDatasetVisible: function (datasetIndex) {
        var meta = this.getDatasetMeta(datasetIndex);

        // meta.hidden is a per chart datas                  hidden flag override with 3 states: if true or false,
        // t                  da                aset                 idden value is ignored, else if null,                  e dataset hidden state is returned.
        return typeof meta.hi                 en === 'boolean' ? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
    },

    generateLegen                  function () {
        return th.options.legendCallback                 his;
    },

                                     **
                     * @private
                     * /
    destroyDatase                 eta: function (datasetIndex) {
        var id = this.id;
        var dataset = this.data.datasets[datase                 ndex];
        var meta = dat                 et._meta && dataset._meta[id];

        if (meta) {
            meta.con                 oller.destroy();
            del                 e dataset._meta[id];
        }

        destroy: function () {
            var me = this;
            var canvas = me.canvas;
            var i, ilen;

            me.stop();

            //                  taset controllers need to cleanup associated                  ta
            for (i = 0, ilen = e.data.datasets.length; i < ilen; ++i) {
                me.destroyDatasetMeta(i);
            }

            if (canv) {
                me.unbind                 ents();
                helpers.canvas.clear(me);
                platform.releaseContext(me.ctx);
                me.canvas = null;
                me.ctx                  null;
            }

            plugins.notify(me, 'destroy');

            del                 e Chart.instances[me.id];
        },

        toBase64Image: function () {
            return this.canvas.toDataURL.apply(this.canvas, arguments
                    },

        initToolTip                 function () {
            var me = t                 s;
            me.tooltip = n                  Chart.Tooltip({
                _chart: me,
                _chartInstance: me, // deprecated, backward compatibili
                _data: me.data,
                _options: me.options.tooltips
            }, me);
        },

                                                                  **
                     * @pri                 te
            * /
        bindEvents: function () {
            var me = this;
            var listeners = me._listeners = {};
            var listener = function () {
                me.eventHandler.apply(me, argu                 nts                ;
            };

            helpers.each(me.options.events, function (type) {
                platform.addEventListener(me, type, listener);
                li                 eners[type] = listener;
            });

            // Elements us                  to detect size change should not be injected for non responsive charts.
            // See https://github.com/chartjs/C                 rt.js/issues/2210
            if (me.options.r                 pon                ive)
            istener = function () {
                me.resize();
            };

            platform.addEventListener(me, 'resize', istener);
            listeners.resize = istener;
        }
    },

    /**                                     * @private
                    *
                   unbindEvents: function                    {
        var me = this;
        var listeners = m                 _listeners;
        if (!listeners) {
                           return;
        }

                       delete me._listeners;
        helpers.each(listeners, func                 on (listener, type) {
                           platform.removeEventListener(me, type, listener);
                                      });                                    },

                   updateHoverStyle: function (elements, mode, enabled) {
                       var method = enabled ? 'setHoverStyle' : 'removeHoverStyle';
                       var element, i, ilen;

                        or (i = 0, ilen = elements.length; i < ilen; ++i) {
            el                 ent = elements[i];
            i                 (el                ment                 {
                th                   getDatasetMeta(element._datasetIndex).controller[method](element);
                           }
        }
    },

    /**
                    * @private
     */
    eventHandler: function (e) {
        var me = this;
        var tooltip = me.tooltip;

        if (plugins.notify(me, 'beforeEvent', [                 ) === false) {
            return;
        }

        // Buffer any update calls so that                  nders do not occur
        me._bufferedRender = tru
        me._bufferedRequest                    ull;

        var changed = me.handleEvent(e);
        changed |= tooltip && tooltip.handleEvent(e);

        plugins.noti(me, 'afterEvent', [e]);

        var buf                 redRequest = me._bufferedRequest;
        if (bufferedRequest) {
            // If we have an update that was tr                 gered, we need to do a normal render
            me.render(bufferedRequest);
        } else if (changed && !m                 animating) {
            // If e                 eri                g, l                     ng, or changing elements, animate th                 change via pivot
            me.stop();

            // We only need to render at this point. Updating will cause scal                  to be
            // recompu                 d generating flicker & using more memory than                 ecessary.
            me.rende                 me.options.hover.animationDuration, true);
        }

        me._bufferedRender = false;
        me._bufferedRequest = null;

        return
    },

    /                                         * Handle an event
        * @private
                                     * @param { IEvent } event the event to handle
        * @return { Boolean } true if the ch                    needs to re - render
            * /
    handleEvent: function (e) {
        var me = this;
        var options = me.options ||
                        var hoverOptions = opti.ho                er;
        var chan = false;

        me.lastActive = me.lastActive || [];

        // Find Active Elements                 or hover and tooltips
        if (e.type == 'mouseout') {
            e.active = [];
        } else {
            me.active = m                 getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
        }

        // Invoke onHover hook
        // Need to call with native event here                 o not break backwards compatibility
        helpers.callback(options.onHover | opt                ons.ver.onHover, [e.native, m                 active], me);

        if (e.typ === 'mouseup' || e.type === 'click') {
            if (options.onClick) {
                // Use e.native here for                 ackwards compatibility
                opt                 ns.onClick.call(me, e.nati, me.active);
            }
        }

        // Remove sty                 ng for last active (even if it may still be acti                 )
        if (me.lastActive.length) {
            me.updateHoverStyle(me.lastAc                 ve, hoverOptions.mode, false);
        }

        / Built in hover styling
        if (me.active.length && hoverOptions.mode) {
            me.dateHoverStyle(me.active, hoverOptions.mode, true);
        }

        changed!helpers.arrayEquals(me.active, me                 astActive);

        // R                 emb                r Last Actives
        me.l as t Activ e = me.a cti ve;

        re turn ch anged;
    }
});

                            /**
                             * Provided for backw            ard compatibility, use Cha            rt instead.
                                * @class Cha                t.Controller
                                * @de                recated since version                 .6.0
                                   * @todo                     move at version 3
                                   * @private                                    */                                   Chart.Co                    roller = Chart;
                              };
{ "25": 25, "28": 8, "45": 45, "48": 48 }], 24: [func                    on(require, module, exp                    ts) {
    'use strict'; var helpers                     require(45);

                              module.exports = fu                ction(Chart) {
        var arrayEvents = ['                    sh', 'pop', 'shif                    , 'splice', 'uns                    ft'];

                                  /**
                                   * Hooks the                    rray methods that add                      remove val                         ('push'                        op', 'shif                    ,                 spli                e',
                                * 'unsh                    t') and notify the l                    tener AFTER the                     ray has been alte                    d. Listeners ar                                                       * called on t                     'onData*' call                    cks (e.g. onData                    sh, etc.) with same                     guments.
                                   */
                function listenArrayEvents(array, listener) {
                if (ray._chartjs) {
                    array._c                    rtjs.liste                er            s.pus            h(listener);
                    return;
                }
                Object.defineProperty(array, '                    hartjs', {
                    configurable: tru            e,
                    enumerable: false,
                    value: {
                        listeners: [listener                                                                 }
                });

                arrayEve                    s.forEach                        nction(key) {
                    var method = 'onData' + ke                    ch                rA                (0).toUpperCase() + k            ey.slice(1);
                    var base = array[key];

                    ject.defineProperty(array, key, configurable: t,
                        enu                era                le: false,
                        value: function () {
                            var args = Array.prototype.slice                    all(arguments);
                            var res = base.apply(this, ar);

                            helpers.each(array._chartjs.listeners, funct                    n(object) {
                                if(typeof object[method] === 'func                    on') {
                                object[method                        pply(object, args);
                            }
                        })
                    retu                        res;
                }
            });
    });
}

                /**
                                               * Removes the given a                    ay e                     t listener and cleanup extra attached p                     erties (such as
                                   *                       _chartjs stub and overridden methods) if a                     y d                    sn't have any more l isten                        .
                                      */
                                        function unlistenArr                            ents(array, listener) {
        var stub = arr                            chartjs;
        i                        !st                    ) {
        return;
    }

                                                            li                    eners = stub.liste ners; va                    inde = listeners.indexOf(listener);
                    if (index !==                     ) {
    listeners.splice(index, 1);
}

if (listeners.le                    th > 0) {
    eturn;
}

arrayEvents.fo                            h(function (key)                                                                                                      et                        rray[key];
;

delete array.rtj                                                             }

// Base class for all dataset controllers                                e, bar, etc)
Chart.DatasetContr = function (chart, datasetIndex                                                                              this.initialize(chart, datasetIndex                                                 };

pe                            xt(C                    rt.tasetController.protot ype,                                            /**
                     * Element                    ype                    sed to generate  a meta dataset (e.g. Chart.elemen                        ine).
                                          * @type {Chart.core.element}
                                          */
    datasetElementType: null,

    /**                                           *                        ement type used to generate a meta                        ta (e.g. Chart.element.P                        t).
     *                        ype {Chart.core.element}
                                                      /
                                                        ElementTyp                        null,

                         initialize: function (chart, datasetInd                         {
                             var me = this;
                                                     chart = chart;
                             me.ind                        = datasetIndex;
                             me.linkScale                        ;
                             me.addElements();
    },

                         updateIndex: function (datasetIndex) {
        t                        .index = datasetIndex;
    },

    linkScales: fu                        ion () {
        var me = this;
        var meta                         e.getMeta();
        var dataset = me.getDataset();

                             if (meta.xAxisID === nu                         {
                                 meta.xAxisID = dataset.xAxisID || me.chart.options.scales.xAxes[0].id;
                             }
        if (meta.yAxisID === null) {
                                 meta.yAxisID = dataset                        xisID || me.chart.optio                        scales.yAxes[0].id;
                             }
    },

    getDataset: function () {
                             return this.chart.data.datasets[this.index];
                          ,

    getMeta: function () {
                             return this.chart.getDatasetMeta(this.index);
                         },

                         getScaleForId: function (scaleID) {
                             return this.chart.scales[scaleID];
    },

                         reset: function () {
        this.update(true);
                         },

    /**
                               @private
                             */
    des                                 function () {
        i                                    s._data) {
    nlistenArrayEvents(t                            _d, t);
}
                                         },

crea                        etaDataset: function () {
    var me = this; var e = me.dat                        tElementType;
    retur                        ype && new type({
        _c hart:                        .chart,
        _datasetIndex: m                    inde
    });
},

createMetaData: function (index                    {
    va r me                         his;
    var type = me.dataElementType;
    return type && new ({
        _chart: me.char                                                                                datasetIndex: index,
        ndex: index
    });
                    },

addElemen                            function () {
    var me = th
    var meta = me.get                        a();
    var data = me.get                    tas                    ().data || [];
    var metaData = meta.data;
    var i, len; for (i = 0, ilen = data.gth; i < ilen; ++i) {
        metaDat                    i]metaData[i] || me.createMetaData(i)
    }

    meta.dataset = meta.dataset || me.crea                    Meta                    tas();
},

addElementAndReset: function (index) {
    var element = his.createMetaData(index);
    this.getMeta().data.splice(index, 0, e                    ment
                        this.updateE lemen                        lement, index, true);
},

bu                    dOr                    dateElements: function () {
    v                        me = this;
    var dataset = me.getDataset()                                               var data = dataset.data || (dataset.data = []);

    // In order to correct ly ha                        e data addition/deletion animation (an thus simulate
    //                    eal-time charts), we need to monitor  these                        ta modifications and synchronize
    // the inte                    al                     ta data accordingly.
    if (me._d !== data) {
        if (me._data) {
            // This case h                        ens when the user replaced the data array instance.
            unlistenArrayEven                        me._data, me);
            lis                        ArrayEvents(data, me);
            me._data = data;
        }

        // Re-sync meta data in case the user replaced the data array or if we missed
        / any updates and so make sure that w                            ndle number of datapoints chang
        me.resyncElements();
                                             ,

        update: helpers.noop,

            tr                            tion: function (easingValue) {
                var meta = this.getMeta(                                                   var elements = meta.data || [];
                var ilen = elements.length;
                                                         = 0;

                for (; len; ++i) {
                    ents[i].transition(easingValue);
                    (meta.dataset) {
                        meta.dataset.tr                                ion(easingValue);
                    }
                },

                draw: fu                    tio() {
                    var met a = t.getMeta();
                    var elements = meta.data || []; var ilen = el                        nts.length;
                    var i = 0;

                    if                         ta.dataset) {
                        meta.dataset.draw                                                                                                                                                 for (; i < ilen; ++i) {
                            ements[i].draw();
                        }
                    },

                    removeHoverStyle: ction(element, elementOpts)                                                var dataset = t.chart.data.datasets[element._datasetIndex]                                               var index = element._index;
                    var custom = ent.custom || {};
                    var valueOrDefault = helpers.valueAtIndex                            fault;
                    var model = element._model;

                    model.backgroun                        lor = cus                            backgroundColor ? custom.backgroundColor : valueOrDefault(dataset.backgr                        dCo, index, e                        entOpts.backgroundCo                            ;
                    model.borderColor = custom.borderColor ? custom                        rderColor                            alueOrDefault(dataset.borderColor, index, elementOpts.der                        or);
                    model.border                        th = custom.borderWidth ? custom.borderWi : valueOrDefault(dataset.borderWidth, index, elementOpts.bor                            idth);
                },

                setHoverStyle: function ment) {
                    var dataset = this.chart.data.datase                            lement._datasetIndex                                                      var index                            lement._i
                    var c                            m                         lem                        .custom || {};
                    var valueOrDefault = h                        ers.valueAtIndexOrDefault;
                    var getHoverColor = helpers.getHoverColor;
                    var model = eleme                            model;

                    model.backgroundColor = custom.hover                            groundColor ? custom.hoverBackgroundC : valueOrDefault(dataset.hoverBackgroundColo                            ndex, getHoverColor(                                .backgroundColor));
                    model.border = custom.hoverBorderColor ? custom.hoverB                                Color: valueOrDefault(dataset.hoverBorderColor, index, verColor(model.borderColor));
                    model.borderWidth = custom.hoverBord                                th ? custom.hoverBorderWidth : valu                                fault(dataset.hoverBorderWidth, index, model.border                                    ;
                },

                                                                           * @private
                resyn                                ents: function () {
                    var me = this;
                    var                                 = me.getMeta();
                    var data = me.getDataset().data;
                    var numMe                                meta.data.length;
                    var numData = data.length;

                    if (numData < numMeta) {
                        meta.data.splice(numData, numMeta - numD
                        } else if (numData > numMeta) {
                        me.insertElements(nu                                     numData - numMeta);
                    }
                },

                /**
                 * @private
                 */
                insertElements: function (start, count) {
                    for (var i = 0; i < count; ++i) {
                        this.addElementAndReset(start + i);
                    }
                },
                /**
*                                 at                                                                          */
                onDataPush: function () {
                    this.insertElements(this.getDataset().data.length - 1, arguments.leng                                                    },
                /**
                                             @private
*/
                o                                    op: function () {
                    this.ge                                    ).data.pop();
                },

                /**
* @private
*/
                onDataShift: function () {
                    this.getMeta().data.shift(                                                                                         },

                /**
                 * @private
                                */
                onDataSplice: function (st, count) {
                    this.ge tMeta                        data.splice(sta                         count);
                    this.insertElements(start, arguments.length - 2);
                },

                /**
                                            private
                 */
                onDataUnshift: tion() {
                    this.insertElements(0, arguments.len);
                }
            });

        Chart.DatasetController                    xten = helpers.inherits
    };
}, {
    5": 45 }], 25: [function (require, module, exports) {
    'use strict'
    var helpers = requ(45);

    module.exports                     {
        /**
* @private
*/
        _set: function (scope, values) {
            return helpers.mer ge(this[scope | (this[scope] = {}), values);
        }
    };
}, {                             : 45 }], 26: un                        on(require, module, exports) {
    'use strict';

    var color = require(3);
    var helpers = require(45);

    function inte                            ate(start, v, el, ease) {
        var keys = Object.keys(mod                        ;
        r i, ilen, key, actual, ori                                target, type, c0, c1;

        for (i = 0, ilen = keys.length; i < il + i                                                key = keys[i];

        target = model[key];

        // if a value is added to th                        odel after pivot(                    has                     en c                     ed, the view
        // doesn't contain it, so let's initialize the vi                     to the target v                     e.
        (!ew.hasOwnProperty(key)) {
            view[key] = target;
        }

        actual = view[key];

        if (actual === target || key[0] === '_') {
            contin
        }

        if                    !start.hasOwnProperty(key)) {
            start[key] = actual;
        }

        origin = star                     ey];

        type = typeof target;

        if (type === ty                     f o                    gin) {
            if                    type = 'string') {
                c0 = color(o in);
                if (c0.valid) {
                    c1 = color(target);
                    if (c1.valid) {
                        view[                             = c1.mix(c0, ease).rgbString();
                        continue;
                    }
                }
            } else if (type === 'number' && isFin                            origin) && isF(target)) {
                view[key] = origin + (target - origin)                             se;
                continue;
            }
        }

        view[key] = target;
    }

    var Element = function (configuration) {
        helpers.extend(this, configuration);
        this.initia                     e.apply(this, arguments);
    };

    helpers.exte                     Ele                    nt.prototype, {
        initiali                         function () {
            this.hid = false;
        },

        pivot: function ()                                               var me = this;
        if(!me                            ew) {
            me._view = helpers.c(me._model);
        }
                                             e._start = {};
        return me;
    }, transition: function (ease) {
        var me = this;
        var model = me._model;
        var start = me._ start                                           var view = me._view;

        // No animation -> N o Tra                        tion
        if (!model                         ease === 1) {
            me._view = m;
            m                                tart = null;
            ret                    n me
        }

        if (!view) {
            view =                     ._v                    w = {};
        } if (!start) {
            start = me._start                        { };
        }

        interpolate(start, view, mod                         ease);

        return me;
    },

    tooltipPosition: function () {
        return {
            x: this._model.x,
            this._model.y
        };
    },

    hasValue: ction() {
        return helpers.isNu(this._model.x) && helpers.isNumber(th                        _mo.y);
    });

    Element.extend = helpers.inherits;

    module.exports = Element;
}, { "3": 3, "45": 45 }], 27: [func(require, module, exports) {
    /* global window: false */
    /* global document: false */
    'use strict';

    ar                             r = require(3);
    var defaults = requi                            5);
    var helpers = require(45);

    module.exports = function (Chart) {                                            // -- Basic js utility methods
        helpers                            fi                        rge                        function (/* objects ... */) {
            retur                            lpers.merge(helpers.clone(arguments[0]), [].slice.call(arguments, 1), {
                merger: function (key, target, source, options) {
                    var tval = target[key] ||
                            var sval = s[key];

                    if (key === 'scales') {
                        //                            le config merging i                        om                        x. Add our own                     ncti                     here for that
                        target[key] = helpers.scaleMerge(tval, sval);
                    } els                    if (key === 's cale') {
                        // used in polar are                         radar charts since ther                             only on                        cal                                                                            target[key] = helpers.merge(tval                        Chart.scaleService.getScaleDefaults(sva                        ype), sval]);
                    } else {
                        helpers._merge                        ey, target, source, options);
        }
    }
});
                                     };

helpers.scaleMerge = function (/* objects ... */) {
    return helpers.merge(helpers.clone(arguments[0]), [].slice.call(arguments, 1), {
        merger: function (key, target, sour                         options) {
            if (key === 'xAxes' || key === 'yAxes') {
                var slen = source[key].length;
                var i, type, scale;

                if (!get[key]) {
                    target[key] = [];
                }

                for (i = 0; i < slen; ++i)                                                            scale = source[key][i];
                type = helpers.valueOrDefault(scale.type, k === 'xAxes' ? 'category                         'linear');

                                    if (i >= target[key].len) {
                    target[key].push({});
                }

                if (!ta                        t[key][i].type || (scale.type && scale.type !== target[key][i].type)) {
        // new/u                            ed scale or type changed: let's apply the                             defaults
        // t                            mer                            ource scale to correctly                            rwrite the defaults.
        helpers.merge(target[key][i], [Chart.scaleService.getScaleDefaults(type), scale])
    } {
        // scales type are the same
        helpers.merge(ta                                key][i], scale);
                                    }
                                                                                   }
                            } else {
    helpers._merger(key, target, source, options);
}
                        }
                    });
                };

helpers.where = function (collection, filterCallback) {
    if (helpers.isArray                            lec                            ) && Array.prototype.er) {
        return collection.filter(f                            rCallback);
    }
    var f                            red = [];

    helpers.e                            collection, function m) {
        if (filte                                back(item)) {
            iltered.pu                                    m);
        }
        ;

        return filtered;
    };
    helpers.ndex = Ar                                    ototype                                    ndex ?
        function (array, callb                                    cope) {
            return array                                    ndex(callback, scope);
            function (array, callback, scope) {
                scope = sc == undefined ? array : scope                                                        for (var                                 ,                                 = array.length; i < ilen; ++i) {
                    if (callback.call(scope, array[i], i, array)) {
                        return i;
                    }
                }
                return -1;
            } helpers                                NextWhere = function (a                            ToSearch, erCallback, startIndex) {
                / Default to start                                 e array
                helpers.isNullOrUndef(startIndex)) {
                    startIndex =                                                                                  }
                for (var i = Index + 1; i < arrayToSearch.leng++)                                                      var currentItem = arrayToSearch[i];
                if (filterCallback(currentItem)) {
                    return currentItem
                }
            }
        }                                                                        helpers.findPreviousWhere = function (ar                                Search, filterCallback, startIndex) {
            // De                                 to end of the arr                                                                                (helpers.isNullOrUnde                                rtIndex)) {
            startIndex = arrayToSearc                            ngt                                                                                                                           for (var startIndex                                 i >= 0; i
                                                                               ar curre                                m = arra                                arch[i];
            if (rCallback(currentIte
                                                       return currentItem;
        }
};

//                                 th methods
helpers.isN = function (n) {
    return !isNaN(pa                            loat) && inite(n);
};
helpers.almostEquals = function (x, epsilon) {
    ret urn Math.abs(x < epsilon;

    ers.almostWhole = function (x, epsilon)                                                  var rounded = Math.round(                                                   return (ded - epsilon) < x) && ((rounded + epsilon) >                                                    };
helpers.max = function ay) retu                                ray.reduce(function (max, v                                    {
    if (!isNaN(value)) {
        return Math.max(max, value)
    }
                                                      return max;
                    }, Number.NEGA                                    NFINITY);
                };
h                                s.m                                function (array) {
    ret                            arr                            educe(function (min, value)                                                      if (!isNaN(value)) {
        return                                .min(min, value);
    }
    return min;
    umber.POSITIVE_INFINITY);
};
helpers.s                                 Math.sign ?
    function (x) {
        ret                                ath.sign(x);
    } :
    function (x) {
        x; // convert to a number
        if (x === 0 || x)) {
            return x;
        }
        return x > 0 ? 1 : -1;
    };
helpers = Math.log10 ?
    function (x)                                                            return Ma                                    10                                                                                  } :
fu                                n
urn M.log(x) / Math.LN10;
                                            };
helpers.toRadia                             function (degree
                                             eturn degrees * (Math.PI / 180);
                };
helpers.toD                                s = function (radians) {
    return radians * (180 / Math.PI)
};
// Gets the                                     from vertical upright to the point about a centre.
helpers.getAngleFromPoint = function (centrePo                             anglePoi
                    var distanceFromXCent                                anglePoint.x - centre                                    x;
var distanceFromYCenter = an                                    nt.y - centrePoint.y;
var radialD                                ceFromCenter = Math.sqrt(distanceFromXCenter * dist                                romXCenter + distanceFromYCenter * distanceFromYCent

                                            v                            ngle = Math.atan2(distanceFromYCenter, distan                            omXCenter);

if (angle < (-0.5 * Math.PI
                        angle +=                             * Math.PI; // make sure the returned angle is in the range of (-PI/2                            I/2]
                    }

return {
    angle: e,
    istance: radialDistanceFromC                            r
};
helpers.distanceBetweenPoints = function (pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - y, 2));
};
lpers.aliasPixel                             nction(pixelWidth) { return (pixelWidth % 2 === 0) ? 0 : 0.5 };
helpers.splineCurve = function (firstPoint, middleP                                 afterPoint, t) {
    //                             s to Rob                                 er at scaled innovation for his post on splining between poi                                                                                  ttp://scaledinnova                            .co                            alytics/splines/about                            nes.html

    // This function must                              respect "skipped"                        in

    var p rev ious = f irstP oi nt.ski p ?middl ePoint: firstPo int;
    var current = middlePoint;
    var next = afterPoint.skip ? middl ePoint: af                erPoint;

    var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
    var d12 = Math.sqrt(Math.pow(next.x - curr                    t.x, 2) + Math.pow                    ext.y - current.y, 2));

    var s01 = d01 / (d01 + d12);
    var s = d12 / (d01 + d);

    /                    If all points                     e the same, s01 & s02 will  be inf
    s01 = isNaN(s01                         0 : s01;
    s12 = isNaN(s1 ? 0 : s12;

    var fa = t * s01; //                    cal                    g factor for triangle Ta
    var fb = t * s12;

    return {
        previous:
            x: current.fa * (next.x - previous.x),
        y: current.y - fa * (next.y - previous.y)
    },
        next: {
        x: current.x + fb * (ne.x                     previous.x),
        y: curre                        y + fb * (next.previous.y)
    }
};
                };
helpers.EPSIL = mbe                    EPSILON || 1e-14;
hel                        s.splineCurveMonotone = function (points) {
    // T                         function calculates Bézier control  points in                            imilar way than |splineCurve|,
    // but                             erves monotonicity of the provided data and                            ures no local extremums are added
    // between the dataset discr                            points due to the interpolation.
    / S            ee :         h t tps:/ / en.wiki pe dia.or g / wiki / Mo notone_cu bic_int erpolati on

    var pointsWithTangent            s = points || []).map(function (point) {
        return {
            mode: po                 t._model,
            deltaK: 0,
            mK: 0
        };
    });

    // Calculate slopes (deltaK) and initia                     e tangents (mK)
    var poi                     Len                     poi                     WithTangents.length;
    i, pointBefore, pointCurrent, pointAfter;
    fo                     i =                    ; i                      ointsLen; ++i) {
        pointCurrent = pointsWithTangents[i];
        (pointCurre                     mod.ski                     {
            continue;
        }

        pointBefore = i > 0 ? point                     thTangents[i - 1] : null;
        pointAfter                     i < pointsLe                      1                     poin                     ithTangents[i + 1] : null;
        if (pointAfter && !pointAfter.model.skip) {
            var slopeDeltaX = (pointAfter.model.x - po                     Current.model.x
            // In the case of two points tha                     ppear at the same x pixel, slopeDeltaX i
            pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - point                     rent.model.y) / slopeDeltaX : 0;
        }

        if (!pointBefore                      poi                    Before.model.ski p) {
            ntCurrent.mK = p                        tCurrent.deltaK;
        } else if (!pointAfter || pointAfter.model                        ip) {
            pointCurrent.mK = pointBefore.deltaK;
        } else if (this.sign(pointBefo                        deltaK) !== this.n(pointCurren                        eltaK)) {
            pointCurrent.mK = 0;
        } else {
            po                            urrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
        }
    }

    // Adjust tangents to ens                         m                        tonic properties
    var alphaK, betaK, tauK, uaredMagnitude;
    for (i = 0; i < pointsLen                        1; ++i) {
        pointCurrent = pointsWithTangents[i];
        pointAfter = pointsWithTangents[i + 1];
        if (poi                            rrent.model.skip || pointAfter.model.skip) {
            continue;
        }

        if (helpers.almostEquals(pointCurrent                                aK, 0, this.EPSILON)) {
            pointCurrent.mK = p                            Af.mK                        0;
            continue;
        }

        alpha                         pointCurrent.mK / pointCurrent.deltaK;
        betaK = pointA.mK / pointCurrent.deltaK;
        squaredMagnitude = Math.pow(alphaK) + th.pow(betaK, 2);
        if (squaredMagnitude <= 9) {
            continue;
        }

        tauK = Math.sqrt(squaredMagnitude);
        pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
        pointAfter.mK                     bet * t * pointCurrent.deltaK;
    }

    // Compute control                      nts
    var deltaX;
    for (i = 0; i < pointsLen; ++i) {
        pointCurrent = pointsWithTangents[i]; if (pointCurrent.model.ski                     {
            continue;
        }

        pointBefore = i > 0 ? pointsWithTang                        s[i - 1] : null;
        pointAfter = i < pointsLen - 1 ? pointsWithT                        ents[i + 1] : null;
        if (pointBefore && !pointBefore.model.ski                        {
            deltaX = (pointCurrent.model.x - pointBefore.model.x);
            pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
            pointCurrent.model.controlPointPreviousY = pointCurr.model.y - deltaX * pointCurrent.mK;
        }
        if (point                        er && !pointAfter.mod                            kip) {
            deltaX = (pointAfter                            el.x - pointCurrent.model.x) / 3;
            pointCu                            t.model.controlPointN = pointCurrent.model.x + deltaX;
            pointCurrent.model.controlPointNextY = tCurrent.model.y + deltaX * pointCurrent.mK;
        }
    };
    helpers.nextItem                                nction(collectio                                dex, lo                            {
        if(loop) {
            return index >= collection.length - 1 ? collection[0] : collection[index                        1];
        }
                    return index >= c                        ection.length - 1 ? col                        tion[collectio                    le                gth                  1]                  collection[index + 1];
    };
    he                 ers.previousItem = function (collect                 n, ndex, loop) {
        if (loop) {
            return index <= 0 ? colle                     on[collection.length - 1] : collecti                     index - 1];
        }
        return index <= 0 ? collec                        n[0] : collection[index - 1];
    };
    Implementation of the nice number al                     ithm used in determining where axis labe                     will go
    helpers.niceNum = function (ra, round) {
        var exponent = Math.floor(helpers.log10(range));
        var fraction = range / Math.pow(10, exponent);
        var niceFraction;

        if (round) {
            if (fraction < 1.5) {
                niceFraction = 1;
            } else if (fraction < 3) {
                niceFraction;
            } else if (fraction < 7) {
                niceFrac                        n = 5;
            } else {
                niceFr                                n = 10;
            }
        } else if (f                            io = 1                         {
            niceFraction = 1;
        } else (fraction <= 2) {
            niceFraction = 2;
        } else if (fraction <= 5) {
            niceFraction = 5;
            lse {
                niceFraction =                        ;
            }

            return niceFraction * th.                        (10, exponent);
        };
        // Request animation poly                        l - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
        helpers.reque                            imFrame = (f                        tion() {
            if (typeof window === 'undefined') {
                return functi                            callback) {
                    llback();
                };
            }
            return wi            ndow.requestAnimationFrame |            |
                w            indow.webkitRequestAnimation            Frame ||
                    window                    ozRequestAnimat                    nFrame ||
                        indow.oRequestAnimati                    Frame ||
                            window.msRequestAnimat                    nFrame ||
                                function allback) {
                return wi                    ow.setTimeout(callba, 1000 / 60);
            };
        } ());                                   // -- DOM                     thods
        helpers.getRelativ                    osition = function (evt, art) {
            var mouse                     mouseY;
            var                     = evt.origina                    vent || evt;
            var canvas = e.currentTarget || evt                    rcElement;
            ar boundingRect                     canvas.getBou                        ngClientRect();

            var touches = e.touches;
            if (touches && touches.th > 0) {
                mouseX = touche.clientX;
                mouseY = touches[0].clientY;
            } else {
                mouseX = e.clientX;
                mouseY = ntY;

                // Scale mouse coordinates into ca                                    oordinates
                b                            llo                             the pattern l                         ou                        y 'jerryj' in the comments                                             // http://www.                        l5canvastutorials.com/advan                        /html5-canvas-mouse-coordinates/
                var paddin                        ft = parseFloat(helpers.getStyle(canv                            'padding-left'));
                var paddingTop = parseFloat(ers.getStyle(s, 'padding-top
                                            var paddingRig                             parseFloat(he                        rs.Style(canvas, 'paddi ng-right'));
                var paddingBottom = parseFloat(helpers.getStyle(canva                            padding - bottom'));
                    var width = ndingRect.right - boundingRect.l - padding - paddingRight;
                var height = boundingRect.bottom - bou                            gRe                        top                        paddingTop - paddingBott om;

                // We divide by the                         ren                        evice pixel ratio, because                          canvas is scaled up by that amoun                        n each direction. However
                // the backend mo                         is in unscaled coordinates.                        nce we are going to de                        with our model coordinates                    we                go             back             here
                mouseX = M                th.r                   d((mouseX - boundingRect.left - paddingLeft) / (wi) * canvas.width / chart.currentDevicePixelRatio); mouseY = Math.round((useY - boundingRect.top - paddingTop) / (height) * canvas.eig                t / chart.currentDevicePixelRatio);

                return {
                    x: mouseX,
                    y: mous
                };
            };

            // Priv                            helper function to convert max-width/max-h                        ht values                            t may be percentage                        nt                    a n                    ber
            function parseMaxStyle(styleValue, node, parent                roperty) {
                var valueInPixels;
                if (typeof styleV                lue === 'string') {
                    valueInPixels = parseInt(yleValue, 10);

                    if (styleValue.indexOf('%') !== -1) {
                        // percent                    e * size in dimension
                        valueInPixels = valueIn                    xels / 10                         node.parentNode[parentProperty];
                    }
                } else {
                    valueInPixels = styleValue
                }

                ret                         valueInPixels;
            }

            /*
* Returns if the given value contain                 an effective constraint.
* @priva
*/
            func                    on isConstrainedValue(value) {
                return value !== undefined && value == null & alue !== 'none'
            }

            / Private helper to get a constr                        t dimension
            @param domNode: the node to                         ck the c                        traint on
            // @param maxSty                        : the style that defines the maximum for the direction we are using (maxWidth / maxHeight)
            // @param percentageProperty : property of parent to use when calculating width as                         ercentage
            // @see h                        ://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser
            func                        n getConstraintDimension(domNode, maxSt, percent                        Property) {
                var view = d                        ment.defaultView;
                var parentNode = domNode.parentNode;
                va                        onstrainedNode = view.getComputedStyle(domNode)[maxStyle];
                var constrained                        tainer = view.getComputedStyle(parentNode)[maxStyle];
                var hasCNode = i                        nstrainedValue(constrainedNode);
                var hasCContainer = isConst                        nedValue(constrainedContainer);
                r infinity                        Number.POSITIVE_INFINITY;

                (hasCNode || hasCContainer) {
                    return Math.min(
                        sCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
                        hasCContainer ? parseMaxStyle(constrainedContainer, parentNode, percentageProperty                         infinity);
                }

                return 'none';

                // returns Number or undefined                         no constraint                                      helpers.getConstrain                        dth = function (domNode) {
                return getConstraintDimension(domNode, 'ma                        idth', 'clie                        idth');
            };
            // returns N                        er or undefined if no constraint
            helpers.getConstraintHeight = func                        n(domNode) {
                ret                    n g                tCo                stra                 tDimension(domNode, 'max-heigh                 , '                lientHeight');
                };
            helpers.getMaximumWidth = unction(domNode) {
                var containe = domNode.parent                    de;
                if (!conta                    er) {
                    return domNode.clientWidth;
                }

                var paddingLeft = parseInt(helpers.getStyle(container, 'padding-left'), 10);
                var paddingRight = parseInt(helpers.getStyle(container, 'padding-r                    ht'), 10);
                var w = co                    ainer.clientWidth - paddingLeft - paddingRi                    t;
                var cw = helpers.g                    ConstraintWidth(domNode);
                return isNaN(cw) ? w : Math.min(w, cw);
            };
            helpers.getMaximumHeigh = function (domNode) {
                var container = domNode.parentNode;
                if (!container) {
                    return domNode.clientHeight;
                }

                var paddingTop = parseInt(h                    pers.getStyle(container, 'padding-top'), 10);
                var paddingBottom = parseInt(helpers                    etStyle(container, 'padding-bottom'), 10);
                var h = c                    tainer.clientHeight - paddingTop - paddingBottom;
                var ch = helpers.getConstraintHeight(domNode);
                return isNaN(ch) ? h : Math.n(h, ch);
            };
            helpers.getStyle = func tion(el, operty) {
                return el.currentStyle ?
                    el.currentStyle[property] :
                    document.defaultView.getComputedStyle(e                     null).getPropertyValue(property);
            };
            helpers.retinaScale = function (chart, forceRatio) {
                var pix                    Ratio = chart.currentDevicePixelRatio = forceRatio || window.devicePixe                    atio || 1;
                if (pixelRatio === 1) {
                    return;
                }

                var canvas = chart.canvas;
                var height = chart.height;
                var width = chart.width;

                canvas.height = height * pixelRatio;
                canvas.width                     width * pixelRatio                                                          chart.ctx.scale(pixelRatio, pixelRatio);

                // If no style has been set on t                     canvas, the render size is used as display                    ize,
                // making the chart vi                    ally bigg                         so let's enfo                         it to the "cor                    ct"                val                es.
                // See https://github.com/chartjs/Chart.                 /is                ues/3575
                canvas.style.hei                    t = height + 'px';
                canvas.style.width                     width + 'px';
            };
            // -- Canvas metho
            helpers                    ontString = function (pixelSi                         fontStyle, font                    mily) {
                return fontStyle + ' ' + elSize + 'px ' + fo                    Fam                    y;
            };
            helpers.longestText = nction(ctx, font, arrayOfThings, cache) {
                cache = cache || {};
                var data = cache.data = cache.data || {};
                var gc = cache.garbageCollect = c                    he.garbageCollect || [];

                if (c                    he.font !== font) {
                    data = c                    he.data = {};
                    gc = cache.ageCollect = [];
                    cache                            t = font;
                }

                ctx                            t = font;
                lo                        st = 0;
                helpers.each(arrayOfThings, function (thi                         {
                    //                         efined strings and arrays should not                      me                    ured
                    if (thing !== undefin && hing !== null && he                        rs.isArray(thing) !== true) {
                        longes                         helpers.measureTe                        ctx, data, gc, longest, thing);
            } else if (pers.isArray(thing))                                                                               // if it is an arr                        le                     measure each element
                / to do maybe simplify this function a bit so we can do this                         e recursively?
            ers.each(thing, functi(n                    ted                    ing) {
                                                  / ndefined strings and arrays should not be me                        red
                                if (nes                    dTh                ng == u                 efined && nestedThing !== null && !helpers.isArray(nestedThing)) {
                longest = helpers.measureT                 t(c                x, data, gc, longest, nestedThing);
            }
        });
    }
});

var gc                    n = gc.length / 2;
if (gcLen > arrayOfThings.leng) {
    for                    var i = 0; i < gcLen; i++) {
        delete data[gc[i]];
    } gc.ice(0, gcLen);
}
return longest;
                                                    };
he                        rs.measureText = func                    on(ctx, data, gc, longest, string
                    var textWidth                     data[stri                        ;
if                    !te                    Width) {
    textWidth = data[strin                             ctx.measureText(stri.width;
    g                            sh(string);
}
if (te                        idth > longest) {
    longest = textWi;
} retu                        longe;
                                              };
help                    s.numberOfLabelLines = fu                        ion(arrayOfThings) {
    v                        numberOfLines = 1;
    helpers.e                    h(arrayOfThings, function (thing)
                                               f(helpers.isAr(thing)) {
            if(thing.length > nu                        rOfLines) {
        numberOfLines = th.length;
    }
}
                    });
retur                        umberOfLines;
                                     };

helpers.col = !color ?
    funct(value) {
    console                        ror('Color.js                     t fo                    d!');
    ret                    n value;
                                            :
    function (value) {
        /* glo                         CanvasGradient */
        if (value instanceof CanvasGradie) {
            value = efaults.global.de faultColor;
        }

        return color(value);
    };
    helpers.getHoverColor = function (col                            lue) {
        /* glob                                nvasPattern                                                                                                     turn (colorValue instanceof CanvasPattern) ?
colorValue :
         helpers.color(colorValue).saturate(0.5).darken(0.1).rgb                            ng();
};
};
}, { "25": 25, "3": 3, "45": 45 }                            8: [function (require, mod                        , exp                        s) {
'                    e st                    ct';

var helpers = r                    uire(45);

/**
* Helper function to get relative position for an event
* @param {Event|IEvent} event - The event to get the position for
          * @param {Chart} chart - The chart
* @retur                     {Point} the event position
*/
        fun                        on getRelativeP                        tion(e, chart) {
            if (e.n                        ve) {
                return {
                    x: e.y: e.y
                }
            }

            return helpers.getRelativePos                        on(e, chart);
        }

        /**
         * He                        r function to traverse all of the vis                        e elements in the chart
         * @par                        chart {chart}                     e ch                    t
         *  @param hand                         {Function} the                        llback to execute for eac                        isible item
         */
        function parseVisibleItems(chart, handler) {
            var datasets = chart.data.datasets;
            var meta, i, j, ilen, jlen;

            for (i = 0, ilen = datasets.length; i < ilen; ++i) {
                if (!chart.is                        asetVisible(i)) {
                    continue;
                }

                meta = chart.getDa                        etMeta(i);
                for (j = 0, jlen = m.data.length; j < jlen; ++j) {
                    var element = meta.data[j];
                    if (!element._vi                            kip) {
                        handler(element);
                    }
                }
            }

            /**                                   * Helper                             tion to get the items that i                            sect the event position
                                    @param items {ChartElem                            ]} elements to filter
                * @param position                         int}                        e point to be                        arest to
                   return {ChartElement                            the nearest items
                */
            functi                            etIntersectItems(chart, position) {
                var elements = [];

                parseVisi                            tems(chart, function (e                            nt) {
                    if (element.inRange(pos.x, position.y)) {
                        elemen                            ush                            ment);
            }
        });

        return eleme
    }

    /**
* Helper function to g et the                                     nearest to the event positio                                side                             al                            sible items in teh chart
* @param chart {Chart} the chart to look                             lements from
     * @param position {Point} the point to be  nearest                                               * @param intersect {Bool                                if t                             on                            onsider items that intersect t                            osition
* @param dista nceMetric {Funct                                function to provide the distance between points
* @return {ChartE                                t[]} the nearest items
*/
    function getNearestItems(chart, pos                            n, int                            ct, distanceMetric) {
        var minDistance = Number.POSITIVE_INF                            Y;
        var nearestItems = [];

        rseVisibleItems(chart, function (element) {
            if (intersect && !element.inRange(positi, position.y)) {
                return;
            }

            var center = element.getCenterPoint();
            var distance = distanceMetr                            osition, center);

        i                            istance < minDistance) {
            nearestItems = [element];
            Distance = distance;
        } else if (distance === minDistance) {
            // Can have multiple items at                             same distance in which case we sort by size
            nearestItems.p                            element);
        }
    });

    urn neare                            ems;
}
/**
* Get a dist                        e metric function for two points                         ed on the
* axis                        de setting
* @pa                         {String} axis the axis mode. x|y
*/
functio                        etDistanceMetricForAxis(axis) {
    va                        seX = axis.indexOf('x') !== -1;
    var useY = axis.indexOf() !== -1;

    return function (pt1, pt2)                                               var deltaX                        use                         Math.abs(p.x                     pt2.x) : 0;
    var deltaY                        useY ?Math.abs(pt1.y - pt2                         : 0;
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
};
            }

function i                        xMode(chart, e, options) {
    var p                        tion = getRelativePosition(e, chart);
    / Default axis for index m ode is 'x' to match old beh                        our
    options.s = options.axis || 'x';
    var distanceMetric = getDist                        eMetricForAxis(options.a);
    var i                        s = options.intersect ? ge                        tersectItems(chart, positi                         : getNearestItems(chart                        osition, false, distanceMet);
    var elem = [];

    if                            tems.length) {
        retur
    }

                                                                           .data.datasets.forEac                                ction(dataset, datas                            dex) {
        if (c                                isDatasetVisible(data                                dex)) {
            var                                 = chart.getDatasetMet                            ta                        Index);
            var el = meta.data[items[0]._index];

            // don't                                  items that are skipp                            null data)
            (element && !element._view.skip) {
                elements(element);
            }
        });

        return elements;
    }

    /**
                                * @inte                                 IInteractionOptions
                                *                                                                                  * If t                                only consider items t                                ntersect                                 oint
     * @nam                                terfaceOptions                                ean
                                * @type                            le                                                           */

    /**
     * Contains in ter                    tio                    related functions
      * @namespace                         rt.Interaction
                          */
    mod                            exports = {
        // H                            r function for different mo                                            modes: {
        single: function (chart, e) {
            var position = getRelativePosition(e, char                                                    var elements = [];

            parseVisibleItems(ch                             function (e                            nt) {
                if (element.in(position.x, position.y)) {
                    elements.push(element);
                    return elements;
                }
            });

            return elements.                                (0                            ;
        },

        /**
                             * @function Chart.Interac                        n.modes.label
                               @deprecated since ver                        n 2.4.0
        *                         do remove at version 3
                             * @private
        */
        label: indexMod
                                         /**
                                          * Returns items at the sam e index.                             he options.intersect parameter is true, we only                            urn items if we intersect something
                                                               * If the o                        ons.intersect mode is false, we find the nearest item and                        turn the items at the same index as that item
                                          * @function Chart.Int                        ction.modes.index
                     * @since v2.4.0
                                          * @para                        hart {chart} the chart we a re returning ite                            rom
                     * @param e {Event} the event we are f                            things at
                                             * @param options {IInteractionOptions} options t                            e during interaction
                      * @r                                 {Chart.Element[]} Array of elements                                 are under the point.                                     e are found, an empty array is returned
                     */
                                                  index: indexMode,

        /**
                                         Returns items in the same dataset. If the options.inte                                    parameter                                     e, we only return i                                    f we intersect something
         * If the options.intersect                                    lse, we find the nearest item and return the items in tha                                    set
                                       * @function Chart.Interaction.modes.dataset
         * @par                                    rt {chart} the chart we are returning items from
                                             am e {Event} the event we a                                nd                                 s at
                                 * @pa                            options {IInteractionOptions} options to use d                        ng in                        action
         * @ret                         {Chart.Element[]}                         ay of elements that                          under the point. If none are found, an empt                        rray is returned
         */
        dataset: functi on(chart, e, options) {
            var ition = getRelativePo                            on(e, chart);
            options.axis = options.axis                             xy';
            r distanceMetric = getDistanceMetricForAxis(options.axis);
            var items = options.intersect ? getIntersectItems(chart, position) : getNe                            tItems(chart, position, false, distanc                                ic);

            if                                ms.length > 0) {
                i = c                        t.tDa                    setMeta(items[0]._datase tIndex).data;
                return items;
            }                                            /**
                     * @function                         rt.Interaction.modes.x-axis
                                          * @depreca                         since version 2.4.0. Us                        ndex mode and                         ersect == true                                           * @todo remo                        at version 3
                                            @private
                     *                                                                 x-axis': function (chart, e
                                                   urn indexMode(chart, e, { interse                         f                        e });
                    },

                                         /**
                     * Point mode returns a                        elements that hit test based on the event positio                                               * of the event                                                                * @function Chart.Interaction.                        es.intersect
                     * @param chart {chart} the chart we are ret                        ing items from
                                             * @param e {Event} the event                         a                        find things at
                                             return {Chart.Element[]} Array of elements that are under the                        int. If none are found, an empty array is return                                                */
            point: function (chart, e
                        var position = get                        ativePosition(e, c                        t);
            return getInte                            tItems(chart, it                    n);
            /**
                                  * near                         mode returns the elemen                            osest to                        e p                        t
                                       @function Chart.                            raction.modes.inte                        ct
                                                          * @par                            hart {ch                        } th                        hart we are returning items from
             * @param                        {Event} the event we are find things at
                                     param options {IInteractionOptions} optio                        to use
             * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty                        ray is returned
             */
            nearest: func(chart, e, options) {
                var positi                             getRelativePosition(e, chart);
                o                            ns.axis = options.axis                            'xy';
                var distanceMetric = ge                            tanceMet                            orAxis(options.axis);
                var ne                            tItems = getNearestItems(chart, positio                        op                    ons.ters, distanceMetric);                                                              // We have multiple items at the same                     stance from the event. Now sort by smallest
                if (neares tItems                        ngth > 1) {
                    neare                        tems.sort(function (a, {
                        var s                        A = a.getArea();
                    var sizeB = b.getAre
                    var ret = sizeA - sizeB;

                    if (ret === 0) {
                        if equal sort by dataset index
                        ret = a._datasetIndex - b._datasetIndex;
                    }
                    return ret;
                });
                eturn on                                item
                return neares                            ms.slice(0, 1);

                    /**
                                             * x mode returns the elements that hit-test at the current x co                        ina                                                                              * @fu                ctio                 Chart.Interaction.modes.x
                                                   * @param chart {chart} the c                    rt w                     re returning items from
                     * @param e {Event} the event we are                     nd things at
                     * @param opt                     s {IInteractionOptions} options to use
                     * @return {Chart.El                     nt[]} Array of elements that are und                     the                    oint. If none are  found, an em                         array is returned
                                             */                                                                                       function (c                        t, e, optio                         {
                    var position = getRelativePosition(e, chart                                                                               items = [];
                    var intersectsItem = false; parseVis                                tems(char                            un                        on                         ement) {
                    if                            ement.inXRange(position.x                        {
                        items.push(element);
                    }

                                              if (element.inRange(position.x, sition.y)) {
                            intersectsIt = true;
                        }
                });

                // If we want to trigger on an                      ers                    t and we don't ha ve any items
                // that intersect t                        position, return nothing
                if (options.intersect & intersectsItem) {
                    items = [];
                } r                            n items;

                /**
                                            * y mode returns the elements that hit-test at the curre                                coordinate
                                               * @function Ch                                    teraction.modes.y
                                                                                         *                        aram chart {chart} the                            rt we are returning items from
                                         * @pa                            e {Event}                          ev                         we are f                            things                                                                                                                   *         @p a ram o pti ons { IIn terac ti onO pti ons} opti ons to us e
                               * @return             {Chart.Element[]} Array of             elements that are under the             point. If none are found, a            n empty array is returned
                                                  *                                           y: function (chart, e, optio                         {
                                         var position                     g                tR            elati            vePosition(e, chart);
                                   var items =  [];
                                      var in                    rsectsItem                        false;

                    parseVisibleItems(chart, function (element) {
                                                                                          if (element.inYR ange(position.y)) {                                                                     ite                        push(element);
                        }

                         if (e leme                        inR nge(position.x, position.y)) {
                                                 intersectsItem = true;
                                             }                                              });

                                         // If we wan                        o trigger on an intersect and we                            't have any items
                                                              // that intersect th                            sition, return nothing
                                                              if (options.in                            ect && !intersectsItem)                                                                         items = [];
                                         }
                    return items;
                }
                                 }
        };
    }, { "45": 45 }], 29: [function (require, m                        le, exports) {
        'use strict';                                                  var de                ault                 = require(25);

                             faults._set('global',
            responsive: true,
                                sponsiveAnimationDuration: 0,
            maintainAs                    ctRatio:                         e,
            events: ['mousemove', 'mo                        out', 'click', 'touchstart', 'touchmove'],
                                                            hover: {
                                   onHover: nu                    ,
                mode: 'nearest',
                intersect: true,
                animationDuration: 400
                                          },
            onCli ck: n                    l,
            de                    ultColor: 'rgba(0,0,0,0.1)',
            defaultFontColor: '#666',
                              defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-                    rif",
                                 defaultFontSize: 12,
            defaul                        ntStyle: 'normal',
            showLines: true,
                                                             // Eleme nt de                    ults defined in element ext                    sions
                               lements: {},

                              // Layout options s                    h as padding
                              layout: {
                paddin                     {
                    top: 0,
                                      right: 0,
                                      bottom: 0,
                                      left: 0
                                  }
            }
                          });

                          module.exports =                     nction () {
                                 // Occupy t                     g                ob            al va        ri a ble o f C hart,  an d cre at e a  si mple base  class
              v ar             Chart = functi            on (item, config) {
                            this.construct(            item, config);
                            return this;
            };

            Chart.Cha                t = Chart;

                                                   return Char                                    };
    }, { "25": 25 }], 30: [                        ction (require,                         ule, exports) {
        'use strict';
                              var helpers =                         uire(45);

                             module.exports = fu                        ion (Chart) {
                                 function filterByPosit                        (array, position) {
                return helpers.where(array, funct                    n                 v)             {
                                return v.pos                tion === posit ion;
                                                    });
                              }

            functi                     sortByWeight(array, reverse                    {
                array.forEach(function (v, i                    {
                    v._tmpIndex_ = i;
                                      return v;
                                  });
                array.sort                    unction (a, b) {
                    var v0 = r                    erse ? b : a;
                                         var v1 = reverse ? a :                    ;
                                                        return v0.weight                     = v1.weight ?
                        v0._tmpIndex_ - v1._tmpIndex_ :
                                          v0.weight - v1.we                    ht;
                                       ;
                array.forEach(function (v) {
                                      d                    ete v._tmpIndex_;
                });
            }

            /**
                               * @interface ILayoutItem
             * @prop {String} position -                     e position of the item in the chart layout. Possible values are
                               * 'left', 'top', 'right', 'bottom', and 'chartArea'
                               * @prop                    Number} weight -                     e weight used to sort                     e item. Higher weights are further away from the c                        t area
             *                        rop {Boolean} fullWidth - if true, and the item                         horizontal, then push vertic                        boxes down
             * @prop {Function} isHorizontal -                         urns true if the la                             item is horizontal (ie                                 or bottom)
             * @prop {                                ion} update - Takes two                             me                        s: width                             height. Returns size of item
             * @prop {Function} getPad                             -  Returns an object w                                adding on the edges
             * @prop {Number} width - Width of item. M                                     valid after update()
             * @prop {Number} heigh                                    ight of item. Must be valid after upda                                                                               * @prop {Number} lef                                    ft edge of the item. Set by layout system and cannot be use                                up                                                 * @prop                            mb                         t                     -                     p edge of the                     em. Set by layo                t             syste        m  a nd ca nno t be  use d in  up dat e
               *  @prop { Number}  ri            ght - Right edg            e of the item. Set by layout             system and cannot be used             in update
             *             @prop {Number} bottom - Bottom edge of the item.             Set by layout system and c                nnot be used                    n update
                                                       */

                //                        e layout service is very self e                        anatory.  It's responsible                          the layout with                        a chart.
                /                        cales, Legends a                        Plugins all rely on                     e                 ay            out s            ervice and can easily regi                ter to be placed anyw                ere they need
                // It is this service's responsibility of carrying out that             lay            out.
                Chart                layoutService = {
                    defaults: {},

                    /**
                     * Register a b            ox             to a chart.
                     *                A box is simply a  reference to an ob                    ct that requires layo                    . eg. Scales, Legend, Title.
                     * @param {Chart} chart - the chart to use
                     * @param                {ILa                outItem} item - the it                m to add to be lay                d out
                                    */
                    ddBox: function (char                     item) {
                        f(char.boxes) {
                            chart.boxes = [];
                        }

                        //                    nitialize item with d                    ault valu                                                                                          item.fullWidth = item.fullWidth || f                    se;                                                        item.posi                    on = item.position ||                    top';
                        item.weight = item.weigh || 0;

                        c                    rt.boxes.push(item);
                                                         ,

                        /**
                         * Remove a layoutItem from a chart
       * @param {Chart} chart - th                    chart to remove                     e box from
                                                                  @param {Object} layoutItem - the item to remove f                    m the layout
       */
                        removeBox: function (chart, layoutItem) {
                            var index = chart.boxes ? chart.xes.indexOf(layoutItem) - 1;
                            if (i                    ex !== -1) {
                                chart.boxes.splice(index, 1);
                            }
                        },

                        /**
                         * Sets (or upda                        ) options on the g                        n `item`.
                         *                            ram {Chart} chart - the chart in which the item live                        or will be added to)
                         * @param {                            ct} item - the item to configure with the given optio                                             * @param {Object}                            ions - the new item options.
                         *                                           configure: function (chart, item,                             ons) {
                            var props = ['fullWidth                        'p                        tion', 'weight'];
                                                 var ilen = props.length;
                            var i = 0;
                                                 var prop;

                            for (; i < ile                     ++                     {
                                prop = props[i];
                                                                       if (o pti ons.h as Own Pro perty(pro p)) {
                                                   ite            m[prop] = options[prop];
                                            }
                                        }
                                                         },

                                             /**
                         * Fits box                        of the given chart into the given size by h                        ng each box measure itsel                                                                             *             then             running a fitting algorithm                                     * @param {Chart}             cha            rt -             the chart
                         * @param {Number} width - the width to fit int
                         * @param {Number} height               the height to fit into
                                     */
                        update: functi                n(chart, width, hei                ht) {
                            if (!chart) {
                                return;
                            }

                            var layout                    tions = chart.options.layout | {};
                            va                 padding                     helpers.options.to                    dding(layoutOptions.padding);
                            var leftPa                    ing = padding.left;
                            var rightPad                    ng = padding.right;
                            var to                    adding = dding.top;
                            var bottomPadding = padding.bo                tom;

                            var leftBoxes = fi                    erByPosition(chart.bo                    s, 'left');
                            var rightBoxes = filter                    Position(chart.boxes, 'right');
                            var pBoxes                         ilterByPosition(chart.boxes, op');
                            r bottomBoxe                         filterByPosition(rt.boxes, '                        tom');
                            chartAreaBoxes = filterByPosition(chart.boxes                    'chartAre                        ;

                                             // Sort bo                         by weight. A                         her weight is further away f                         the chart area
                                             sortByWeight(leftBoxes, t);
                            sortByWeight(rightBoxes, false)                                                              sortByWeight(topBoxes, true);
                            sortByWeight(bottomBoxes, false);

                            / Essentially we no                        ave any number of boxes on each of the 4 sides.
                            // Our canvas looks like the following.
                            The areas L1 and L2 are the left axes.R1 is the right axis, is the top axis and
                                // B1 is the bottom axis
                                // There a                        also 4 quadrant-like locations (left to right instead of clockwise) reserved                          chart overlays
                                // These locations are single-box locatio                        only, when trying to register a chartArea location that is already taken,
                                // an error will be thrown.
                                //
                                // |--------------                        ----------------------------------                                                                           // |                                          (                        l Width)                   |
                                // |-------------                            -------------------                            ------------|
                                // |    |                                        T2                                         |
                                // |                      |----|----------------------                    -------------|----|
                                // |    |    | C1                                                                                   | C2 |    |
                                / |    |    | -|                                                | ---                                                                    // |    |    |                                                       |    |
                        // |                    1 | L2 |           ChartArea (C0)            | R1 |
                                          // |                         |    |                                                                         |    |
                                             // |    |    |----|                                                               |----|    |
                                          // |    |                        C3 |                           | C4                        |
                                                |    | ----| ----------- -----------------------| ----|
                                / |    |    |                                      B1                                                                  |    |
                                // |-----                    -----------------------                ----                ----------------|
                                // |                                    B2 (Full Width)                                        |
                                // |----------------------------------------------------|
                                //
                                / What we do to fi                d th                 best sizing, we do th e following
                            1. Determine the                        nimum size of                     e c                    rt area.
                                          // 2. Split the remain                    g width equally betwee                        ach vertical axis
                        // 3. Split the r                    aining he                        t equally between each horizontal axis
                                          / 4. Give each lay                ut t                e maximum size it  can be.The                    ayout will return it's minimum si
                                // 5. Adjust the sizes of each                 xis                 ased on it's minim um reported                    ize.
                                // 6                    Refit each axis
                                // 7. Position e                ch a                is in the final location
                                //                      Tell the                     art the final location o                        he chart a
                                / 9. Tell a                        axes that overlay the char                        rea the po                    tio                     of the  chart area

                            // St                     1
                            var chartWidth = width - leftPadding - r                ghtP                dding;
                            ar chartHeight = heig - topPad                        g - botto                        dding;
                            v ar ch ar tAr eaW idth = ch artWidth / 2; //  min 50%
                            var chartArea            Height = chartHeight / 2; // min 5            0%

                            // Step             2
                            var verti            calBoxWidth = (width - chartAreaWidth) / (l e ftBox es.lengt h +  righ tBo xes.l en gth );

                            // Step  3
                            var horizontalBoxHe            ight = (height - chartAreaHeight) / (to             Box            es.length + bottomBoxes.length);
                            // Step 4
                            var maxC                 rtAreaWidth = chartWidth;
                            var maxChartArea                 igh = chartHeight;
                            var minBoxSizes = [];

                            func                 on getMinimumBoxSize(box) {
                                var minSize;
                                var isHorizontal = box.isHorizontal();

                                if (isHorizontal) {
                                    mi                 ize = box.update(box.fullWidth ? chartWidth : maxChartAreaWidth, horizontalBoxHeight)                                                 maxChartAreaHeight -= minSize.height;
                                } else {
                                    minSize = box.update(verticalBoxWidth, chartAreaHe                 ht);
                                    maxChartAreaWidth -= minSize.width;
                                }

                                minBoxSizes.push({
                                    horizontal: is Horizontal,
                                    minSize: Size,
                                                        : box,
                                });
                            }

                            helpers.ea                        leftBoxes.concat(rightBoxes, topBoxes, bottomBoxes), ge                        nimumBoxSize);

                            If a horizontal box has padding, we move the left boxes over to avoid ugl                        harts(see issue #2478)
                            var maxHorizontalLeftPadding = 0;
                            var maxHoriz                        alRightPadding = 0;
                            var ma                        rticalTopPadding = 0;
                            var maxVertica lBottomPadding = 0;

                            helpers.each(topBoxes.concat(bottomBoxes)                    function (horizontalBox) {
                                if (horizontalB                        getPadding) {
                                var boxPadding = horizontalBox.getPaddi;
                                maxHorizontalLeftPadding = Math.max(maxHorizontalLeftPaddi                            boxPaddi                        le);
                                maxHor                        ntalRigh                    add                    g = Math.max(maxH                        izontalRightPadding, boxPad                        ng.right)
                            }
                        });

                        helpers.each                            ftBoxes                        oncat(rightBoxes)                            unction(vertical) {
                            if (vert                            lBox.getPadding) {
                                var boxPadding = verticalBox.getPadding(maxVerticalTopPa                            ng = Math.max(maxVerticalTopPadding                            oxPadding.top);
                                maxVertic                            ottomPadding = Math.max(maxVerti                            BottomPadding, bo                            dding.bottom);
                            }
                        });

                        // At this poin                            maxChar                        reaHeight and maxCha                            reaWidth are the size the chart ar                            could
                        // be if the axes ar                            rawn at their minimum sizes.
                        //                             ps 5 & 6
                        var totalLeftBoxesWidth = leftPaddi
                        var tot                            ightBox                        Width = rightPad                            g;
                        var t                            lTopBoxesHeight = pPadding;
                        var totalBottomBoxe                            ight = bottomPadding;

                        // Fun                            on to fit a box
                        fu                        tion fitBox(bo                            {
                            var minBoxSize = pers.findNextWhere(minBoxSi, function (minBox) {
                                ret                             minBox.box === b
                            });

                            if(minBoxSize) {
                                if (box.isHorizontal()) var aleMargin = {
                                    left: Math.max(totalLeftB                            sWidth, maxHorizontalLeftPadding),
                                    right: M.max(totalRightBo                            Width, maxHorizontalRightPa                            ng),
                                    top: 0,
                                    bottom: 0
                                };

                                / Don't use min size here because of l                            l rotation. When the labels are rotate                            their rotation highly depends
                                // on the mar                            . Sometimes they                             d to in                        ease in size                             ghtly
                                box.u                            te(box.fullWidth ? chartWid : maxChartAreaWid                             chartH                        ght / 2, scal                            rgin);
                                                                                    else {
                                box.ate(min                    xSi.minSize.width                 max                hartAreaHeight);
                            }
                        }
                        }

                        // Update, and                    alculate the                left                and right margins fo r the ho                    zontal boxes
                                                       helpers.each(leftBoxes.concat(ri                    tBoxes), fitBox);

                    helpers.each(leftBoxes, function (box) {
                        totalLeftB                            Width += box.width;
                    })                                                   helpers.eac                        ig                        oxes, function(box) {
                        totalRightBoxesWidth + ox.width;
                                              );

                        // Set                        e Left and Right margins for the horizontal boxes
                        helpers.each(topBoxes.concat(bottomBoxes), fitBox);

                        // Figure out how much margin is on the top and bottom                         the vertical boxes
                        helpers.each(topBoxes                        unction(b                         {
                            tota            lTop             oxesHeight += box.height;
                        });

                        elpers.each(bottomBoxes, function (box) {
                            totalBottomBoxesHeight += b             x.height;
                        });

                        function finalFitVerticalBox(box) {
                            var minBox             ize = helpers.findNextWhere(minBoxSizes, functio(minSize) {
                                return minSize.box === box;
                            });

                            var scaleM                rgin = {
                                left:                 ,
                                rig ht: 0,
                                top: totalT            opBo             esHeight,
                                botto: to                 lBottomBoxesHeight
                            };

                            f(minBoxSize)  {
                                box.update(minBoxSize.minSize.width, maxChartAreaH                 ght, scaleMargin);
                            }

                            // Let the                     ft                 ayout k                ow t                  final margin
                            helpers.each(leftBoxes.concat(rightBoxe, finalFitVerticalBox);

                            // Recalculate                 ecause the size                 f e                ch layout might have ch anged slig                    ly due to the margins (label rotation for instance)
                            totalLeftBoxesWidth = leftPadding;
                            totalRightBoxesWidth = rightPaddi;
                            totalTopB                 esH                ight = topPadding;
                            totalB ottomBoxes                    ight = bottomPadding;

                            helpers.each(leftBox                s, f                ncti(box) {
                                totalLeftBoxesWidth += box.width;
                            });

                            helpers.each(right                 xes, function (x)
                                                otalRightBoxesWidth += box.width;
                        });

                        help                rs.e                 h(topBoxes, function (box) {
                            to                 lTopBoxesHeight += box.height;
                        });
                        helpers.each(bottomBoxes, function (box) {
                            totalBottomBoxesHeigh t += box.height;
                        });

                        // We may be add                ng s                me p                 ding to account for rotated x axis labels
                        var leftPaddingAdditi = Math.max(maxHorizontalLeftPadding - totalLeftBoxesWidth, 0);
                        totalLeftBoxesWidth += leftPaddingAddition;
                        totalRightBoxesWidth += Math.max(maxHorizontalRightPadding - to                 lRightBoxesWidt                  0)

                        var t opPaddingAddition = Math.max(ma                    erticalTopPadding - totalTopBoxesHeight, 0);
                        totalTopBoxesHeight += opPa                ding                 dition;
                        totalBottomBoxesHeight += Math.max(maxVerticalBottomP                 ding - totalBottomBoxesHeight, 0);

                        // Figure out if our cha                  area changed. This would occur if the dataset                  yout label rotation
                        // changed due to the application of the ma                 ins in step 6. Since we can only get bigger, this is safe to do
                        // without                 all                ng `fit` again
                        v                     newMaxChartAreaHeight = height - totalTopB                        sHeight - totalBottomBoxesHeight                                                                                         var newMaxChartAreaWidth = width - totalLeftBoxesWidth - totalRightBoxesWi                 h;

                        if (newMaxChartAreaWidth !== maxChartAreaWidth || newMa                 hartAreaHeight !== maxChartAreaHeight) {
                            helpers.ch(leftBoxes, function (box) {
                                box.heig = newMaxChartAreaHeight;
                            });

                            helpers.each(rightBoxes, function (box) {
                                box.height = newMaxChartAreaHeight;
                            }                ;

                            helpers.each(topBo                    s, function (box)                                                     i!box.fullWidth) {
                                box.width = newMaxChartA                                dth;
                            });

                            helpers.each(bottomBoxe                            un                        on                    box) {
                                if                        box.fullWidth) {
                                    x.width = newMaxChartAreaWid
                                }
                            }); maxChartAreaHeight = newMaxChartAreaHeight;
                            maxChartAreaWidth = newMaxChart                 eaWidth;
                        }

                        // Step 7 - Position the box
                        v                r left = leftPadding + leftPaddi                    Addition;
                        var top = topPadding + topPaddingAd                        ion;

                        function placeBox(box) {
                            (box.isHorizo                        l()) {
                                box.left = fullWidth ? leftPadding : totalLeftB                                idth;
                                box.right                            ox.fullWidth ? width - rightPadding : totalLeftBoxesWidth + maxChartAreaWidth; box.top = op;
                                box.bottom = top + box.height;

                                // Move to next point
                                to = b                x.bottom;
                            } else {
                                box.left = left;
                                box.rig = left + box.widt.top = totalTopBoxesHeig
                                                     box.bo = totalTopBoxesHeight + maxChartAreaHeight;

                                                                                            / Move to next po                nt
                                                              left = box.right;
                }
            }

            helpers.each(leftBoxes.concat(topBoxes                  placeBox);                                                         // Account for chart width and                    eight
            left += maxChartAreaW                    th;
            top += maxChartAreaHeight;

            helpers.each(ri                    tBoxes, p                        eBox);
            help                    s.ach(otto                 oxes, placeBox);

            // Step 8
            chart.c                 rtA                ea = {
                left: to                    lLeftBoxesWidth,
                top: t                    alTopBoxesHeight,
                right: tot                        eftBoxesWidth + maxChartAreaW                    th,
                bottom: to                        TopBoxesHeight + maxChartAreaHeight
            };

            // Step 9
            helpers.each(ch                 tAreaBoxes, function (box) {
                box.left = chart.chartAre                 left;
                box.top = chart.chartArea.top;
                box.right = chart.chartArea.right;
                box.ttom = chart.chartArea.bottom;

                box.update(maxChartAreaWidth, maxChartAreaHeight);
            }
                    }
    };
};
         }, { "45": 45 }], 31: [fu                    tion(require, module, exports) {
    'use strict'; var defaults = quire(25);
    var Ele                    nt = require(26);
    var                        lpers = require                    5); defaults._set                    global', {
                plugins: {}
});

    module.orts = function (Char                        {
        /**
                                 * The pl                        n s                        ice singleton
                              * @namespace Chart.plugins
         * @si                            2.1.0
         */
        ar                    plu                    ns = {
            /**
* Globally registered plugins.
* @private
*/
            _plugins: [],

            /**
                            * This identifier is used to invalidate the descriptors cache attached                 o each chart
             * when a global plugin is registered or u                 egistered. In this case, the cache ID is
                                           *  incremented and des                    iptors are regenerated during followin g API calls.
                                              @pr                 ate
             */
            _cacheId: 0,

            /**
* Registers the given plugin(s) if not already registere
* @param {Array|Object} plugins plugin instance(s).
             */
            register: function (plugins) {
                r p = this._plugins;
                (                ]).concat(plugin s).forEach(nction(plugin) {
                    if(p.indexOf                    lug) === -1) {
    p.push(plugin)
}
                                                            });
this._cacheId++;
                    },

                                   /**                                      * Unregister                    the given plugi                    s) only if registered.
                     * @param {Array|Object} plugins plugin instance(s).

                    unregister: f                    ctio                    (plugins) {
                                              var p = this._plugins;
                                                            ([]).concat(plugins).forEa                    (function (plugin) {
                                              var idx = p.indexOf(plugin);
                                                                      (idx !== -1) {
                                p.sp                    ce(                    x, 1);
                            }
                                          }                ;

                                    this._            cacheId++;
                                            },

                    /**
                     * Remove all regi             tered plugins.
                     * @             ince 2.1.5
                     */                                 clear: f             nction() {
    this._plugins = [];
    this._cacheId++;
},

/**
* Returns the number of registered plugins?
 * @returns {Number}
 * @since 2.1.5                                  */
count: function () {
    return t                is._plugins.length;
},

/            **
    * Returns all registered plugin instances.
                                 * @returns { Array } array of plugin objects.                                  * @since 2.1.
                     * /
getAll: function () {
    return thi._plugins;
},

/**
 * Calls              nabled plugins for `chart` on the specified hook an              with the given args.
             * This method immedi             tely return              as             soon as a plugin explicitly returns false. The
          * re tur ned value  can be u sed, fo r instan ce            , to interrupt             the current action.
                         * @param {Object} chart - The chart instance for which plu             ins should be called.
             * @param {String} hook - The name of the p             ugi            n method to call                (e.g. 'beforeUpd ate').                                                                      * @param {Array}  [args                    - Extra argume                ts t                 apply to the hook ca ll.
                   * @r                turn                 {Boolean} false if any  of th                    plugins return false,                         e returns true.
                                     */
not                fy: unction(chart, hook, args)
var descriptors = thi s.desc                    ptors(chart);
var ilen = descriptors.l ength; r i, descriptor, plugin, ar                    s, method;

f                r(i = 0; i < ilen; ++i) {
    d                scri                tor = descriptors[i];
    plugin = descriptor                plug                n;
    ethod = plugin[hook];
    if                     yp                    f method === 'function') {
        params = [chart]                    oncat(args || []);
        par ams.pu(descriptor.options);
        if (method.apply(plugi                     params) === false) {
            et                    n false;
        }
    }
}

r                turn true;
                                       },

/**
                               * Returns desc riptor                    of enabled plugins for the given chart.
                               * @retur ns {Ar                    y} [{ plugin, options }]
 * @p                ivat
  */
descriptors: function (chart) {
    var cac he = c                    rt._plugins || art._plugi                     =
});
(che.id === this._cache                         {
    return ca                    e.scriptors;
}

var plug ins =                     ;
v                     d                    criptors = [];
va                 config = (chart && c hart.c                    fig) || {};
var opti                ns = (config.options && confi                    options.plugins) || {}                                                this._plugins.conc(c                    fig.plugins || []).forEach(function (plugin) {
    va r idx                     plugins.indexOf(p                    gin);
    if (idx = -1) {
        retu;

        var id = lugin.id; var opts = optio[i                    ;
        if (opts === false) {
            ret                rn;
        }

        f(opts === rue) {
            opts = hel                        s.clone(de                    ul.global.pl                        ns[id]);
        } plugins.push(plugin);
        descriptors.push({
            plugin: plugin,
            option s: opt                    || {}
        });
                                                                );

cache.descri                        rs = descr                    to;
c                    he.id = this.cheId;
r                        rn descriptors;
                    }
                                                    };

                                     /**
                 * Plugin extension hooks.
                 * @interface I                    ug
                 * @since 2.1.0
                 */
                /**
                                  @m                thod IPlugin#beforeI nit
                                   * @d                    c Called before initializing `char                `.
                                * @par am {Ch                    t.Controller} cha                     - The chart instance.
                 * @param                {Obj                ct} options - The plugi n opti                    s.
                                   */
                /*                                        * @method IPlugin#afterInit
                                                     * @desc Called after `chart` has been initialized and before the f                rst                 pdate.
                  * @p                    am {Chart.Controller} chart - The chart i                stan                e.
                 * @ param                     bject} options - The p                        in options.
                                                     */
                /**                                       * @method IPlugin#beforeUpdate
                                                     * @desc Called                         ore updating `chart`. If any plugin returns `false`                    th                    update
                 * is cancelled (and thus subse                uent                render(s)) until another  `updat                     is triggered.
                                      * @param {Chart.Controller}                     ar                    - The chart instance.
                 * @param {Obje                t}             opt            ions - The plugin o                tions.
                                         * @returns {Bo            olea             } `false` to cancel the chart update.
                 */
                /**
                             * @method IPlugin#afterUpda             e
                 * @desc Called              fter `chart` has been update              and before             ren            dering. Note that this
                           *  ho ok  wil l not be  called if  the ch art upda te             has been previ            ously cancelled.
                                         * @param {Chart.Controller} ch             rt - The char              in            stance.
                                                 @param {Object} options - The plugin options.
                 */
                               /**
                 * @method IPlugin#beforeDatasetsUpdate
                   * @desc Cal                 d before updating the `chart` datasets. If any plugin returns `false`,
                                * the datasets update is cancelled until another `update` is triggered.
                                  @param {Chart.Controller} chart - The chart instance.
                                * @param {Obje                 } o                tions - The plugin opt ions.
                                   * @returns {Boolean} false to cancel the datasets update.
                                   * @since version 2.1.5

                /*                                                       * @method                     lugin#afterDatasetsUpd                        e
                                          * @desc C                        led after                              `chart` datas                             have b                        n updated                            ote tha                    thi                    hook
                                * wi                l no                 be called if the datasets update has been previously cancelled.
                                  @param {Chart.Controller} chart - The chart instance.
                 * @param {Ob                 ct} options - The plugin options.
                 * @since version 2.1.5
                                */
                /**
                 * @method IPlugin#beforeDatas                 Update
                                                 * @desc Called  before up                    ting the `chart`                     taset at the given `args.index`                        f any plugin
                                      * returns `false`                        he datasets update is ca                        lled until another `up                    te` is tr                        ered.
                 * @par                     {C                    rt} chart                        The char                        nstance.
                                                             @param {                        ect} args - The                        ll arguments.                                                                                 * @param {Number} args.index - The dataset index.
                 * @param {Obj                 t} args.meta - The dataset metadata.
                 * @param {Object} options                  The plugin options.
                 * @returns {Boolean} `false` to cancel the chart da                 sets drawing.
                 */
                /**
                 * @method IP                 gin#afterDatasetUpdate
                   * @desc Called after the `chart` datasets                   the given `args.index` has been up                 ted. Note
                                               * that this  hook will not be called if                    he datasets update ha                    been previously cancelled.
                 * @para                        Chart} chart - The                         rt instance.
                                           @param {O                        ct                        rgs - The call arguments.
                 * @param {Number}                            s.index - The dataset in                        .
                                      * @param {Object} args.meta - The datas                            etadata.
                                      *                        aram {Object} options - The                            gin options.
                                                                                           */
                     /**
                   *  @method  I            Plugin#beforeLa            yout
                 * @desc             Called before laying out `chart`. If             any plugin returns `false`,
                             * the layout update is cancelle        d  u ntil  ano ther  `up date`  is  trig ge red .
                   *  @param  {Chart.C on            trol             er} chart - The chart instance.
                             * @param {Object} options - The plugin options.
                 * @return              {Bo            olean} `false` to c                ncel the chart layout.
                                    */
                /**                                       * @method IPlugin#afterLayout
                 * @desc Cal                         after the `chart` h                     be                     layed out. Note that this hook will not
                                                     *  be  called i f the lay out upd ate has  be            en p             eviously cancelled.
                 * @param {Chart.Control             er}             chart - The cha            rt instance.
                             * @param {Object} options -             The plugin options.
                             */
                /**
                 * @metho            d IPlugin#beforeRender
                 * @desc Called befor            e rendering `chart`. If any plugin returns `false`,
                 * the             ren             ering is cancelled until another `render` i              triggered.
                 * @param {Chart.Controll             r} chart - The chart instance.
                 * @param {O             jec            t} options - The plu                in options.
                                * @returns {Boolean}                 false` to cancel the                 hart rendering.
                                */
                /**                                 * @method                IPlugin#afterRender
                                * @desc Call                d after the `chart` has             bee            n fu             ly rendered (and animation completed). Note
                 * that this hook will not be             called if the rendering has been previously cancelled.
                 * @param {Chart.C             ntroller} chart - The chart instance.
                 * @param {Object} options - The p             ugin options.
                 */
                /**
                 * @method IPlug             n#beforeDraw
                 * @desc Called before drawing             `chart` at every animation frame specified by the given
                             * easing value. If any plugin returns `false`, the fram              dr            awing is cancelled until
                 *                another `render` is triggered.
                 *                @param {Chart.Controller} chart - The chart instance.
                                * @param {Number} easingValue - The             cur            rent             animation value, between 0.0 and 1.0.
                 * @param {Object} options - The plu             in options.
                 * @returns {Boolean} `false` to cancel the chart drawing.
                             */
                /**
                 * @method IPlugin#afterDraw
                                         * @desc Called after the `char                ` has been drawn for the sp                cific easing value. Note
                 * that this hook will not be called if                the drawing has been previously cancelled.
                 * @param {Chart.Contr                ller} chart - The chart instance.
                                * @param {Number} easingValue - The current anima                ion value, between 0.0 and 1.0.
                 * @param {Object} options                  The plugin options.

                /**
                                      * @meth                        IPlugin#b                            eDatasetsDraw
                                           * @desc Called be                             drawing the `chart                        at                    et                . If                any plugin returns `false`,
                 * the datasets drawing is can                elled until another `render` is triggered.
                 * @param {C                art.Controller} chart - The chart instance.
                                * @param {Number} easingValue - Th                 current animation value, between 0.0 and 1.0.
                                   * @param {Object} options - The plugin                    ptions.
                 * @return                        Boolean} `false` to cancel th                    ch                rt                 atasets drawing.
                 */
                                   **
                 * @method IPlu                        #afterDatasetsDraw
    * @desc Called after the`chart` datasets ha                        been drawn.Note that this hook
        * will not be called if the da                        ets drawing has been previously cancelled.
                 * @param { Chart.Con                        ller } chart - The chart instance.
                 * @param {
    Numbe                     easingVa - The current animation value, between 0.0 and 1.0.                                       * @param { Object } o                            ns - The plugin options.
                                                                       * /                                            / *            *
                             * @method IPlugin#beforeDatasetDraw
        * @desc Called before drawing the`chart` dataset at the given`args.index`(datasets
            * are dr             wn in the r             ver            se order).If any plugin returns`false`, th e dat                sets drawing
    is cancelled until another`render` is triggered.
                                      *  @par                            Chart
} chart - Th                        ha                     ins                    nce.
                 * @param { Object } args                  The call argu                    nts.
                 * @param { um                er } args.index - The dat            aset index.
                 * @param { Object } args.meta - The dataset metadata.
                             * @param { Number } args.easingValue - The c            urrent animation value, between 0.0 and 1.0.
                  * @param { Object } opti            ons - The plugin options.
                 * @retu                ns { Boolean } `false` to cancel the chart datasets drawing.
                                         * /
/**
 *                @method IPlugin#afterDatasetDraw
   * @desc Call            ed             after the `chart` datasets at the given `args.index` ha                e been dr                    n
                   * (datase                     are drawn in the reverse ord                    ). Note that this hook will not                    e called
 * if                 he             dat            asets drawing has been previously cancell                d.
 * @param {Chart} chart - The c                art instance.
 * @param {Object} args                - The call arguments.
 * @param {Numbe            r}             args.index - The dataset index.
                * @para                 {Object} args.m                ta - The datase t met                    ata.
 * @param {Number} args.e                    ingValue - The current anima                    on value, betwee                        .0 and 1.0.
                      * @param {Object} options - The plug in op                            s.
                          /
/**
                                                                                   * @method IPlugin#beforeTooltipDraw
 * @desc Called befo            re drawing the `tooltip`. If any p                ugin returns `false`,
 * the                 ooltip drawing is cancelled until anoth                r `render` is triggered
                   * @param {Chart} ch                    t - The char                    instance.
                                       @param {Objec                     args - The call argu                    nts.
 * @                    ram {Object} args.toolt                     - The tooltip.
                * @param {Numbe                } args.easingValue - The                 urrent animation val                    , between 0.0 and 1.0.
 * @param {Object} o                    ons - The plugin                     ons.
 *                    turns {Boolean} `false` to ca                     the chart tooltip drawing.
                                      /
                 /**
                                       * @method IPlugin#afterTooltipDraw
     * @                    c Called after dr                    g the `tooltip`. Note t                    this hook will n                                                         e called if t                    ooltip drawi                    has been pr                    iously canc                lled.
   * @param {C                art} chart - The chart instance.
                  * @param {O bject                    args - The call arguments.
                     * @param {Obj                    t} args.tooltip - The tooltip                                     * @param {N                mbe                } args.easingValue - Th e cur                    nt animation value                    between 0.0                and                 .0.
   * @param {Object} options - The plugin options
   */
/**
 * @method                 Plugin#beforeEve            nt
               * @desc Called before processi            ng the specified `event`. If any plugin r                turns `false`,
 * the event will be discarded
 * @param {Chart.Controll er} ch                    t - The chart instance.
 * @para                        IEvent} eve                     -                The                 vent object.
 * @param {Objec t} option                    - The plugin options.
                */
/**
* @method IPlugin#afterEvent
 * @desc Called after the `event` has been consumed. Note that this hook
 * will not be called if the `event` has been previously discarded.
 * @param {Chart.Controller} chart - The chart instance.
 * @param {IEvent} event - The event objec                .
* @param {Object} op                ions - The plugin options.
          */
/**
                * @method IPlugin#resize
                * @desc Called after the c                art as been r                    ized.
 * @param {Chart.Contro ller} cha                        - The chart instance.
 *                    param                    Number} size - The new canva                 di                play size (eq. canvas.style width & height)            .
             * @param {Object} options - The plug                n options.
 */
/**
                * @method IPlugin#destroy
 * @desc Called after the chart as bee                 destroyed.
 * @param {Chart.Controller} chart -  The                     art instance.
                      * @param {Object} options - The plugin opt                    ns
                */

/**
 * Provided for backward com                atibility, use Chart.plugins instead
 * @namespace Chart.pluginSe                vice
 * @depr ecate                    since version 2.1.5
                      * @todo remove at vers                         3
 * @private
 */
Chart.pluginService = Chart.plugins;

/**
* Provided for backward compatibility, inheriting fr                        Chart.PlugingBase                     s                 o
* effect, instead simply c                eate/register plugins via plain JavaScr                pt objects.
* @                nterface Chart.PluginBas
* @depr                cated since version 2.5.0
* @todo remove at version 3
* @private
*/
Chart.PluginBase = Element                extend({});
            };
        }, { "25": 25, "26": 26, "45"                 45 }], 32: [function (r                    uire, module, exports) {
    'use strict';

    var defaults = require(25);
    var Element = require(26);
    var helpers = require                45)
    var Ticks = require(34);

    d            efaults._set('scale                , {
                               display: true,
        position: 'left',
        offse                  false,

        // grid line settings
        gridLi                 s: {
            display: true,
            color: 'rgba(0, 0, 0, 0.1)',
            lineWi dth:
            drawBorder: true,
            drawOnChart                        a: true,
            rawTicks: true,
            tickMarkLengt                        10,
            zeroLineWidth: 1,
            zeroLineC                        r: 'rgba(0,0,0,0.25)',
            zeroLineBorderDash:
                zeroLineBord                        shOffset: 0.0,
            offsetGridLines: false,
            borderDash: [],
            rder                    shO                fset                 0.0
        },

        scale label
                sca                        abel: {
            // display                    roperty
            isplay: false,

            // actual label
            abe                    tring: '',

            // line height
            lineHeight: 1.2,

                                          / top / bottom padding                                                         padding: {
            top: 4,
            bottom: 4
        }
                },

    // label settings
    ticks: {
    beginAtZero: false,
    minRotatio                     0,
    maxRotation: 50,
    mirror: false,
    padding: 0,
    reverse: false,
    dis                    ay: true,
    autoSkip: true,
    autoSkipPadding: 0                                        labelOffset: 0,
    // We pass through arrays                      be rendered as multiline labels, we convert Others                    o strings here.
    callback: Ticks                    ormatters.values,
    minor: {},
    major: {}
});

    unction labelsFr                    Tic(ticks) {
    var labels = [];
    var i, ilen;

    for(i = 0, ilen = ticks.le                        h; i <i                    n; i) {
        labels.push(ticks[                    .label);
    }

                 r                        rn labels;
}

                                 function getLineValue(scale, ex, offsetGridLines) {
    var eValue = scale.getPixelForTick(ind                        ;
    if (offsetGridLines) {
        if (in                         === 0) {
            neValue -= (scale.getPixelForTick(1) - lineValue) / 2;
        } else {
            lineValue -= (lineValue - scale.getPixelForTick(index - 1)) / 2;
        }
    }
    return lineValue;
}

                              module.exports = function (Chart) {
    function comput                    extSize(context, tick, font) {
        return he                pers                isArray(tick) ?
            helpers.long                    tText(context, font, tick)                                             c                        ext.measureText(tick).width;
    }

    function parseFontOptions(options) {
        va                    valueOrDefault = helpers.valueOrDefault;
        var glob                    Defaults = defaults.global;
        var size                     valueOrDefault(options.fontSize, globalDefaults.defau ltFontSize                                            var style = valueOrDe                    ult(tions.fontStyle, globalDefaults.default                ontS                yle);
        var family = valueOrDefault(o                    ions.fontFamily, globalDefa                    ts.defaultFontFamily);

        return {
            size: size, style: style,
            family: family,
            f                    t: helpers.fontString(size, style, fa                    ly)
        };
    } unction                     rse                    neHeight(options) {
        re                ur            n he            lpers.options.toL            ineH             ight(
            helpers.valueOrDefault(options.lineHeight, 1.2),
            helpers.valueOrDefault(options.fontSize, defaults.global.defaul             FontSize));
    }

    Chart.Scale = Element.extend({
        /**
         * Get the padding needed for the              cale
*              method getP             ddi            ng
* @private
                     * @returns {Padding} the necessary padding
*/
        getPadding: function () {
            var me = this;
            return {
                left: me.paddingLeft || 0,
                top: me.paddingTop | 0,
                r             ght: me.paddingRight || 0,
                bottom: me.paddingBottom || 0
            };
        },

        /**
* Returns the scale tick             objects ({label, major})
* @since 2.7
*/
        getTicks: function () {
            return this._ticks;
        },

                    // These methods are orde             ed by lifecyle.             Uti            lities then follow.
                                                   / Any function fin                d here is inherited  by a ll s                ale                  pes.
            // Any function can be extended by the scale type

            mergeTicksOptions: function () {
                var ticks = is.options.ticks;
                if (ticks.minor === false) {
                    ticks.minor = {
                        display: false
                    };
                }
                if (ticks.major === false) {
                    ticks.major = {
                        display: false
                    };
                }
                for (v                  key in ticks) {
                    if (key !== 'majo                  &&                key !== 'minor') {
                    if (typeof ticks.minor[key] === 'undefined'                 {
                        ticks.minor[key] = ticks                 ey];
                                }
if (typeof ticks.major[key] === 'undefined') {
    ticks.major[key] = ticks[key];
}
                                                          }
                    },
beforeUpdate: function () {
    helpers.callback(this.options.beforeUpdate, [thi                 );
},
update: functio(maxWidth, maxHeight, margins) {
    var me = this;
    var i, ilen, labels, labe l, t ick            s, tick;

    // Update Lifec             cle - Probably don't want to ever extend or overwrite this func             ion ;)
    me.beforeUpdate();

    // Absorb the master measurements
    me.maxWidth = maxWidth;
    me             maxHeight = maxHeight;
    me.margins = helpers.e             tend({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }, margins);
    me.longestTextCache = me.lon             estTextCache || {};

    // Dimensions
    me.bef             reSetDimensions();
    me.setDimensions();
    me.afterSe             Dimensions();

    // Data min/max
    me.beforeDataLimit();
    me.de ter mineDataL imits();
    me.afterDataLimits();

    // Ticks - `this             ticks` is now DEPRECATED!
    // Internal ticks are now st             red as objects in the PRIVATE `this._ticks` member
    //              nd m            ust not be acce            ssed directly from outside t            his class. `this.ticks` bein            g
    //             around for long time and                 ot marked a                    private, w                        an't change its                     ru                tu            re
    //  withou                 unexpected brea                    ng changes. If yo u need to a                        ss the scale ticks,
    // use sca                        getTicks() instead.

    me.beforeBuildTicks();

    //                          implementations should return an array of objects but f                        BACKWARD COMPAT,
    // we still support no retur n (`this.tick                            nternally set by calling this method).
    ticks = me.buildT icks() || [
        me.afte                        ildTicks();

        m                        eforeTickToLabelConversion();

        //  New imple                            ations sh                                return the formatted tick lab                                ut for BACKWARD
        //                    OM                AT,                 e still support no return (`th                s.ticks` internally changed by calling
        // this                     thod and supposed to co                    ain only stri                     values).
        labels = me.convertTicksToL                    els                    icks) || me.ticks;

        me.afterTick                    Lab                    Conversion();

        me                    ick = labels;   // BACKWARD COMPATI                    LITY

        // IMPORTANT: from this poi                         we consider that `this.ticks` will NEVER                             ge!

        //                        CKWARD COMPAT: synchronize `_ticks` with labels (so poten                            ly `this.ticks                                                                                       fo                    (i = 0, ilen = l                        els.length; i < i                        n; ++i) {
        label = la                            s[i];
        tick = ticks[i]                                                                          if (!tick) {
            icks.push(tic = {
                label: labe
                                                                  major                    false
            });
        } el                     {
        tick.label                     label;
    }

    me._ticks = ticks;

    // Tick Rotation                                           me.beforeCalculateTickRotation();
    me.c                    culateTickRotation();
    me.afterCalcu                    teTickRotation();
    // Fit
    me.beforeFit();
    me.fit();
    me.afterFit();
    //
    me.afterUpdate();

    return me.minSize;
},
a                        rUpdate: function () {
    helpers.callback(this.ions.afterUpdate, [this]);
},

//

beforeSetDimensions: function () {
    helpers.c                        bac                        his.options.beforeSetDimensions, [this]);
},
setDimen                            s: functi                                 {
    var                                 this;
    et                          u                    ons                    ained dimensi                n b                fore label rotation
    if (me.i                    orizontal()) {
        // Reset pos                    ion before calculating                     tation
        e.width = me.xWi                    h;
        me.left = 0;
        me.right = idth;
    } else {
        e.height = me.Hei;

        // Reset                        sit                         before calculating                         ation
        me.top                  0; me.b                    tom = me.height;
    }

    // Re                         padding
    me.padding                        t = 0;
    me.paddingTop = 0;
    me.paddingRight                     0;
    me                pad                ingBottom = 0;
},
after                    tDimensions: function                         {
    helpers.callback(this.optio.afterSetDimensions, [this]);
},

// Data limits
beforeDataLimits: unc                    on() {
    elpers.callback(this.options.beforeDataLimits, [this]
                    },
determineDataLimits: helpers.noop                                           afterDataLimits: function () {
    helpers.callback(this.options.afterDataLimits, [this]
                    },

//
before                    ildTicks: functio() {
    h                    pers.callback(this.options.beforeBuil                    icks, [this]);
},
buildTicks: help.noop,
    afterBuildTicks: func                        n() {
    lpers.callback(this.o                        ons.afterBuildTicks, [s]);
},

beforeTickToLabelConver                        n: function () {
    hel                                callback(this.options.beforeTickToLabelConv                                n, [this]);
},
nvertTick                                bels: func                                    ) {
    ar me = th                                                                                     //                            ve                        ti                    s t                    strings
    var tickOpts                     me.options.ticks                                                               e.ticks = me                tic                s.map(tic                    pts.userCallbac || tickOpts.callback, this);

    afterTickToLabelConversion: nction() {
        lpers.callback(thi                        ptions.afterTickToLabelCon                        sion, [this]);
    },

    //

    before                            ulateTickRotatio                            unction() {
        helpers.callback(options.bef                                    culateTickRotation, [this]);
    },
    ca                                    eTickRotation: ion()                                                                                                      var me = this;
    var nte = me.ctx;
    var tickOpts = me.opt.ticks;
    r l                            s = labelsFromTicks(me._ticks);

    // Get the width of each grid by calculati                            he difference
    be                    een                     offsets between 0 and 1.
    var tickFont = parseFontOpt                        s(tickOpts);
    context.font = tic                        nt.font;

    var labe                        tation = tickOpts.minRotation ||
        i                        labels.length && me.options.display && me.isHorizontal()) {
        var originalLabelWidth                            elpers.longestText(context, tickFont.font, labe                            me.longestTextCache);
        va                            belWidth = originalLabelWidth;
        v ar co sRo tatio n, si nRo tation;

        // Allow 3 pi            xels x2 padding either side             for label readability
        var t            ickWidth = me.getPixelForT                ck(1) - me                    etPixelForTick(- 6;

        /                    Max label rotati                     can be set or                     fault to 90 - also act as a loo                    counter
        ile(labelWidth > tickWidth && labelR                        tion < tickOpts.maxRo                        ion) {
            r angleRadians = helpers.toRadians(labelRot                        on);
            cosRotation = Math.cos(angleRadians);
            sinRotation = Mat in (angleRadia);

            f(sinRotation                        originalLabel                        th > me.maxHeight) {
                // go back one st                                                                                 labelRotation--;
                break;
            }

            lab                        otation++;
            labe                        dth = cosRotation * ginalLabelWidt
        }

                                                  .labelRotation = labelRotation;
    },
    afterC                                ateTickRo: function () {
        helpers.callback(this.options.afterCalculateTickRotation, [this]);
    },

    //

    befor                                    function () {
        elpers.callback(this.options.b                                    it, [this]);
    },
    fit: function () {
        var me = this;
        // Reset
        var minSize = me.minSize = {
            width: 0,
            height: 0
        };

        var labels = labelsF romTicks(m                    _ticks);

        var opts = me.options;
        var tickOpts = opts.ticks;
        var scaleLabelOpts = opts.scaleLabel;
        var gridLineOpts = opts.gridLines;
        var display = opts                            play;
        var isHoriz                        al                        me.isHorizontal();

        va                    tickFont = parseFontOp                io            ns(ti            ckOpts);
        var tickMarkLength = opts.gridLines.ti                kMarkLength;

        // Width
        if (isHorizontal) {
            // subtract the margins to line up with the chart                 ea if we are a full width scale
            minSize.width = me.isFullWidth() ? m                 max                idth - me.margins.left - me.margins.right :                     .maxWidth;
                                               else {
                minSize.wid                h = display && gridLineOpts.drawTicks                     tickMarkLength: 0;
            }

            // height
            if (isHorizontal) {
                mi                        ze.height = display && gridLineOpts.drawTicks ? tickMarkLen : 0;
            } e                    e {
                minSize.height = me.maxHeight; //                     ll all the height
            }

            // Are we showing a title for the scale?
            if (s                    leLabelOpts.disp lay && display) {
                var sc                        LabelLineHeight = parseLineHeight(scaleLabelOpts);
                var scal                        belPadding = helpers                        tions.toPadding(scaleLabelOpts.pad                        g);
                var deltaHeight = sca                        abelLineHeight + scaleL                        lPadding.heigh
                if (isHorizontal) {
                    minSize.h                        ht += deltaHeight;
                                                                        else {
                        minSize.width                         deltaHeig
                    }
                }

                // Don't b                    her                     tting the ticks if we are n                     showing them
                if (tick                        s.display && display) {
                    var l                        estTextWidth = helpers.lo                            tText(me.ctx, tickFont.font, labels, me.longes                            tCache);
                    var estLabelHeightInLines                        helpers.n                            rOfLabelLines(labels);
                    var lineSpace = tickFont.s * 0.5;
                    var kPa                        ng = me.options.t                        s.padding;

                    if                        sHorizontal) {
                        A horizontal axis                         more constrain                            y the heig                                                                                                                     me.longestLabelWid = l                    gestTextWidth;

                        var a                        eRadians = help.toRadians(me.labelRotation);
                        var cosRotation = Math.cos(angleRadians);
                        var sinRotation = Ma in (angleRadians);

                        ODO - improve this calculation
                        var labelHeight = (sinRota * largestTextWidth)
                            + (ti                    Fon                    size * tallestLabelHeight                    Line
                        lineSpace * (ta                        stLabelHeightInLines -
                            + lineSpace; // padding
                        minSize.height = Math.min(me.Height, minSize.height + labelHeight + tickPa                        ng);

                        me.ctx.font = tickFont.font;
                        var firstLabelWidth = computeTextSize(me.ctx, labels[0], tickFont.font)                                                       var lastLabelWidth = computeTextSize(me.ctx, labels[label                        ength - 1], tickFont.font);

                        // Ensure                        at our ticks are al                        s inside the canvas. When rotated, ticks                        e right aligned
                        // which means that                          right padding is do                            ted by the font height
                        if (me.labelRotation !== 0) {
                            me.paddingLeft = op                            osition === 'bottom' ? (cosRotation * firstLabelWidth)                        3 : osRotation * lineSpace) 3; // add 3 px                             ove away from canvas ed                                                                                                                           ddingRight = opts.position === 'bottom' ? (cosRotation * lineSpace) + 3 : (cosRotation * lastLabelWidth) + 3;                                                            } else {
                            me.paddingLeft = firstLabelWidth / 2 + 3; // add                                 to move away from canvas                                s
                            me.paddingRight = lastLabelWidt h / 2 + 3;
                        }
                        {
                            // A vertical axis is more constrained by the                                      Labels are the
                            // dominant factor here, so get t                                        gth first and account for padding
                            if (tickOpts.mirror) {
                                largestTextWidth = 0;
                            } else {
                                // use l                                        e for co                                        cy with horizo                                        is
                                // tickPadding is not implemented for horizontal
                                largestTextWidth += Padding + Space;
                            }

                            minSiz                                th = Math.min(me.maxWidth, minSize.w + largestTextWidth);

                            me                                ingTop = tickFont.size / 2;
                            me.paddingBottom = ti ckFont.size / 2;
                        }
                    }
                    me.handleMargins();

                    me.width = minSize.wi                                                           me.height                                     ize.height;
                },

                                                                              * Handle margins and padding in ons
                    * @private
                     * /
                handleMarg                                        nction() {
                    ar me = this;
                    if (me.margins) {
                        e.paddingLeft = Math.max(me.paddi - me.margins.left, 0);
                        me.paddingTop = Math.max(me.padd - me.margins.to                                                                                                                                         paddingRight = Mat                                        e.paddingRight - gin                                ht, 0                                                          me.pa                                Bottom = Math.max(me.paddingBottom - argins.bottom, 0);
                    },

                    afterFit: fu                    tio() {
                        helpers.llback(this.options.af terFi[this]);
                    },

                    // Shared Methods
                    isHorizontal: function () {
                        r eturn                        is.options.posi                        n === 'top' || this.opt                        s.position === 'bottom';
                    },
                    i                        llWidth: function () {
                        urn(this.options.fullWidth)
                    },

                    // Get the co                            t value. NaN bad i                            s, If the value type is object get the x or y                            ed on whether we are horizontal or not
                    getRightValue: function (r                            lue) {
                        // Null and undefined values first
                        if (helpers.isNullOrUndef(rawValue)) {
                            return NaN;
                        }
                        // isNaN(object) returns true, so make sure                             is checking for a number; Discard Infinite values
                        if (typeof r                            lue === 'number'!isFinite(rawValue)) {
                            return;
                        }
                        // If it is in fact an object,                            e in one more level
                        if (rawValu
                                                    if (this.isHorizontal()) {
                                if (rawValue.x !== undefine
                                                            return this.get RightValue(rawValue.x                                                              }
                    } if (rawValue.y !== undefine                                                                                           return this.getRightValue(rawValue.y);
                }
            }

            // Value is good, return it
            return rawValue;
        },

        /**
                                    * Used to get the value to display in the tooltip for the data at the given in                                                    * @param index
         * @param datasetIndex
                                    */
        getLabelForIndex: helpers.noop,

            /**
* Returns the location of the given data point. Value can either be a                                ex or a numerical value                                                    * The coordinate (0, 0)                                     the upper-left corner of the canvas
* @param value
                                        * @param index
* @param d                                    Index
*/
            getPixelFor                                     helpers.noop,

                /**
                                                 Used to get the data value from a given                                    . This is the inverse of getPixelF                                    e
                 * T                                    rdinate (0, 0) is at the up                                    ft corner of the canvas
                                               * @param pixel
                 */
                getValueForPixel: rs.noop,
                    /**
                    * Returns the locat                                        the tick at the given index
                    *                                    oordinate (0, 0) is at the upper-left co                                of                                 anvas
                                      */
                    getPixelForTick: function (inde                                                        var me =
                        var offset = me.ns.offset;
        (me.isHorizontal()) {
            innerWidth = me.width - ddingLeft + me.paddingRight);
            v                                    kWidth = innerWidth                                    h.max((me._ticks.length - (o ? 0 : 1)), 1);
            pixel = (tick * ex).paddingLeft;
            if (offset) {
                pixel + Width / 2;
            }

            var finalVal = me + Math.r                                pix
            nalVal += me.isFullWidth() ? me.s.left : 0;
            retur                                alV
        }
        var rHeight = me.height - (me.paddingTop + me.paddingBottom                                                      return me.top + (index * (innerHei(me._ticks.length - 1)));
    },

    /**                                                 *                                 ty for getting the p                                    ocation of a percentage of scale                                                       * The coordin                                         0) is at the u                                        ft corner of the canvas
*/
    getP                                    rD                                l: function (decimal) {
        var me = this;
        if (me.isHorizontal()) {
            var innerWidth = me.width.paddingLeft + ddi                                ht);
            v                                lueOffset = (innerWidt                                ecimal) + me.paddingLe                                                                                         r finalVal = me.left + Math.round(valueO);
            finalVal += me.isFullWidth() ? me.ma.left : 0                                                                                            n f                            Val;
        }
        r                     rn me.top + (decimal * me.height);
    },

    /**
                                         * Returns the pixel  for t                        minimum chart v                        e
                             he coordinate (0, 0) is at the upper-left corner of                          canvas
                          */
    g                            sePixel: function ()                                                                                                   return this.getPixelForValu                            is.getBaseValue());

    Bas                        lue: function () {
        var me = is;
        va in = me.min;
        var max = me.max;

        return me.beginAtZero ? 0 :
            min < 0 && max < 0 ?                             :
                min & max > 0 ? min :
                    0;
    },

    /**
     * Returns a s                                    of ticks to be plotted                                     id overlapping labels.
                                      * @private
                                                             _autoSkip: function (ticks) {
                                         var                                         io;
                                      var me = this;
                                         var isHorizontal = me.isHorizont                                                               var optionTicks = me.options.                                        inor;
                                                                             ck                                 =                            ks                        ngt                                                                                 va                 labelRotationRadians = helpers.toRadians(me.labelRotat                    n);
        var                         Rotation = Math.                        (labelRotationRadians                                                                                    var longestRotatedLabel = me.longestLabelWi                    h * cosRotation;
                          var result = [                ;
                                         var                      tick, shouldSkip;

                              // figure out the maximum num                         of gridlines to s                                                    var maxTicks;
                                                                 if (optionTicks.ma xTicksLimi                        {
            maxTicks                         ptionTicks.maxTicksLimit;
                                                                                if (isHorizontal) {
                                                                    atio = false;

            if                                ngestRotatedLabel + optionTic                            utoSkipPa                                ) * tickCount > (me.width - (me.paddingLeft +                            pa                        ngRight))) {
                                        skipRatio = 1                            ath.floor(((longestRo                        ed                    bel                     optionTicks.autoSkip Padding) * ti                        ount) / (me.width - (me.pad                        gLeft + me.pad                            Right)));
                                                                              }

                     //  if they d efined a  max num ber of o pt            ionTicks,
                        // in            crease skipRatio until that             number is met
                        if (maxTick                 && tickC                    nt > maxTicks) {                                                                     skipRat                     = Math.max(skipR                    io, Math.floo                    tickCount / maxTi                    s));
                              }
        }

                        or             (i =             0; i < tickCount; i++) {
                           tick = ticks[i];
                                           // Since we always show the la                     tick,we need may ne ed to hide                          last shown one                        fore
                                 shouldSkip = (skipRatio > 1 && i % skipRatio > 0) || (i %                        ipRatio === 0 && i + ski                    atio                    = tickCount);
            if (shouldSkip && i !== t                    kCount - 1) {
                                   // leave tick in place bu                        ake sure it's no                        isplayed (#4635)
                delete tick.label;
                                 }
                                 result.push(tick);
                             }
                             return r                        lt;

                         // Actually draw the                         le on the canvas
                         // @param {                        tangle} ch                        Area : the area of the c                        t to draw full gri                        ines on
                         draw:                         ction (chartArea
                             var                         =                         s;
                             var options = m                    opt                    ns;
                                            if (!options.display) {
                               retur                                                                     }

        var context = me.ctx;
                             var gl                            Defaults = defaults.global;
                                var optionTicks = opti                            ticks.minor;
                                v                        optionMaj                            cks = options.ticks.major |                            tionTicks;
        var gridLin                             options.gri                            es;
                             v                        scaleLabel = opti                        .scaleLabel;

                             var                         otated = me.labelRota                        n !== 0;
                             var isHori                        tal = me.isHori                            al();

                                                                        ar                     cks = optionTicks.autoSkip                     me._                    toSkip(me.getTicks()) : m                    getTicks();
                          var tickFo                    Colo                    = helpers.valueOr                    fault(optionT icks.                        tColor, globalD                        ults.defaultFontColor);
                             var tickFont = parseFon                        tions(optionTicks);
                             var majorTickFontColor = helpers.valueOrDefault(optionMajorTicks.f                        Color, globalDefaults.defa                        FontColor);
        var majorTickFont = parseFontOp                        ns(optionMajorTicks);

        var tl = gridLines.drawTick                         gridLines.tickMarkLength : 0;

        var scaleLabelFontCol                        = helpers.valueOrDefault(                            eLabel.fontColor, globalDefaults.defaultFontColor);                                                 var sc                        LabelFont                            arseFontOptions(scaleLabel                                                   var scaleLabelPadding = helpers                        tio                        toPadding(scaleLabel.paddi                        ;
        var                    abe                    otationRadians =                     lpers.toRadians(me                    abelRotation);

                              var itemsToDraw = [];

                             var xTickStart = opti                    s.po                    tion === 'right' ? me.left : me.right - tl;
                                                    xTickEnd = opt                        s.position === 'ri                        ' ? me.left + tl : me.right;
                             var yTickStart = o                        ons.position === 'bottom' ? me.top : me                        ttom - tl;
                                var yTickEnd = options.position === 'bottom' ? me.top + tl : me.bot

        helpers.each(ticks, function (tick, index) {
                                    // autoskipper skipped this tick (#4635)
            i                            elpers.isNullOrUndef(tick.label)) {
                r                            n;
            }

            var label =                             .label;
            var line                            h, lineColor, bord                            sh, borderDashOffs                                                                                if (index === me.zer                            eIndex && options.offs                            == gridLines.offsetGridLines) {                                                         // Draw the first index specially
                lineWidth = gr                            nes.zeroLineWidth;
                                                                lineColor = gridLin                                roLineColor;
                borderDash = gridL                                zeroLineBorderDash;
                                           b                            rDashOffs                                gridLines.zeroLineBorderDashOffset;
            } el                                                                lineW                                = helpers.valueAtIndexOrD                                t(gridLines.lineWidth, index);
                                           eCo                            = helpers.va                            tIndexOrDefault(gridLines.color                            dex);
                                        borderDash = h                            rs.valueOrDefault(gridLines.bo                            Dash, globalDefaults.b                            rDash);
                                           borde                                Offset = helpers.valueOrDefault(gridLine                                    erDashOffset, globalDefaults.borderDash                                    );
                                                               }

                                       // Common proper
                                                                           va                 tx1,                ty1, tx2, ty2, x1, y1, x2, y2, labelX, labelY;
                              var textAlign =                        iddle';
                                 var                        xtBaseline =                     iddle
            var tickPaddin                    = optionTicks.padding;

                              if (i                Hor                zontal) {                                                                     var l abelYOffse                         tl + tickPadding;

                                     if (op                            s.position === 'bottom') {
                                                                             // bottom
                                          textBaseline = !isRotate                         'top' : 'middle';
                                         t                            lign = !isRotated ? 'center' : 'right';
                                                                          elY = me.top + labelYOffset;
                                           } else {
                                                                       // top
                    te                            se                        e = !isRotated ? 'bottom'                            middle';
                    textA                             = !isRotated ? 'center'                         le                    ';                                                                                 lab elY = me. bottom -  labelYO ffset;
                                         }

                                var xLineValue = getLineVal                e(me, index, gridLines                    ffsetGridLines && t                cks.                ength > 1);
                                  if                    xLineValue < me.left) {
                    lineColor = 'rgba(0,0,0,0)';
                                  }
                                                                       LineValue += helper s.ali                        ixel(lineWidth);

                                     labelX = me.getPixelForTick(index) + optionTicks.labelOffset; // x values for o                    ionT                    ks (need to consider offsetLa bel o                        on)

                                     tx1 = tx2                         1 = x2 = xLineVal
                                         = yTickStart;
                                     ty2 = yTickEnd                                                                                     = chartArea.top;
                                             chartArea.bottom;
            } else {
                                                          var isLeft = options.                            tion === 'left';
                                        var labelXOffset;

                                        if (optionTicks.mirror) {
                                                              textAlign = isLeft ?                         ft' : 'right';
                                                        labelXO ffset                        tickPadding;
                                     }                         e {
                    textAlign = isLeft ? 'right'                         left';
                    labelXOffset = tl + tickPadding;
                }

                                                    labelX = isLef t ? me.right - labelXOff                         : me.left + la                        XOffset;

                                     var yLineValue = getLineVa                        (me, index, gridLines.offsetGridLines                            ticks.length > 1);
                if (yLineValue                         e.                        ) {
                                      line                    lor = 'rgba(0,0,0,0)';
                }
                                   LineValue += helpers.alias Pixel(lineWidth);                                                                            labelY = me.getPixe                        rTick(index) + optionTicks.labelOffset;

                                     tx1 = xTickStart;
                tx2 = xTickEnd;
                                     x1 = chartArea.left;
                x2                        chartArea.right;
                ty1 =                          = y1 = y2 = yLineV                        e;
            }

                                    itemsToDraw.push({
                                                          tx1: tx1,
                ty1: ty1,
                                        tx2: tx2,
                                        ty2: ty2,
                                        x1: x1,
                                        y1: y1,
                                                          x2: x                                                           y2: y2,
                                        labelX: labelX,
                                                                       lY: labelY,
                                                                glWidth: lineWidth,
                                                          glColor: lineColor,
                                     glBorderDash: borderDash,
                                     glBorder                            Offset: borderDashOffset,
                                                          rotation: -1 * labelRotation                    dia                    ,
                 l                        l: label,
                major: tick.major,
                                                    textBaseline: text Baseline,
                                                          textAlign: textAlign
                                                      });
        });

                                Draw all of the tick labels, t                         marks, and grid lines at the correct places
                             helpers.each(itemsToDraw, function                        temToDraw) {
                                    if (grid                        es.                        play) {
                                                             conte                            ave();
                conte                        lin                        dth = itemToDraw.glWidth;
                                                     cont                        .strokeStyle = itemT                    ra                .glCo                or;
                if (context.setLineDash) {
                                           con text.setL ineDash (itemToD ra            w.glBorderDash)            ;
                                context.lineDashO            ffset = itemToDraw.glBorde            rDashOffset;
                                }

                                                     ontext.be                        Path();

                                                 if                (gridLines.drawTicks) {
                                      context.moveTo(itemTo Draw.                        , itemToDraw.ty
                                         context.lin                        (itemToDraw.tx2, itemTo                        w.ty2);
                                     }

                                     if (gridLines.drawOn                        rtArea) {
                                         contex                            veTo(itemToDraw.x1, itemToDraw.y1);
                                           nte                        lineTo(itemToDraw.x2, itemToD                        .y2);
                                                          }

                                     context.stroke();
                                        context.resto re();
                                       }

                                                                        (o                                Ticks.display) {
                                              Make sure we draw text in the correct color and font
                                              context.save                                                                                                                     con                        t.t                        slate(itemToDraw.labelX, itemToDr                            abelY);
                                        context.rotate(itemTo Draw.rotation);
                                           context.font = itemToDraw.majo                                ajorTickFont                                    : tickFont.                                                                    context.fillStyle = itemToDraw.major ? majorTickFontColor :                                     ntColor;
                context.textBaseline = itemToDraw.textB                                    e;
                                                                      context.textAlign = itemToDraw.textAlign;                                                                                                     label = itemToDraw.                                                                                                                                  f (                                rs.isArray(label)) {
                                               for (var i = 0, y = 0; i < la                                ength; ++i) {
                        // W                                t make sure the multiline element is a string here..
                                                      context.fil lText('' + label[i],
                                                                y same lineSpacing as calculated @ L#320
                                                                                                                              y += (tickFont.size * 1.5);
                                                     }
                } else {
                                                     co                                            llText(label, 0, 0);
                                                 }
                                                    context.resto                                                                                                       }

                                                                                         if                            aleLabel.display) {
             // Draw                                scale label
            var scaleLabelX;
                                       var scaleLabelY;
                                       var rotation = 0;
                                       var halfLineHeight = parseLineHeight(scaleLabel)
            if (isHorizontal) {
                                                             sc                            abelX = me.left + ((me.right -  me.left) / 2); // midpoint                                he width
                scaleL                                 = options.position === 'bottom'
                                                  ? me.bottom - halfLineHeight - scal eLabelPadding.bottom                                                                      : me.top +                                         eHeight + scaleLabelPadding.top;
                                                }                                                                                                          v                                            t = options.posi                                        = 'left';
                                                    scaleLabelX                                        ft
                                                                                           me.left + halfLi                                        t + scaleLabelPadding.top
                                                                                                                             ight                                lf                            Heig                        - s                        eLabelPadding.top;
                scaleLabelY = me.                         + ((me.bottom - me.top) / 2);
                rotati                        = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
            }

                                 context.save                    ;
                               co                        xt.translate(s                        eLabelX, scaleL                        lY);
            c                        ext.rotate(rotation);
                                    context.textAlign = 'center';
            context.textBaseline =                        iddle';
                                    context.fillStyle = scaleLabelFontColor; // render in correc                            lour
            context.font = scaleLabelFont.font;
                                      ntext.fillText(scaleLabel.labelString, 0, 0);
            context.restore();
        }                                                                                         (g                    dLines.drawBorder) {
                              // Draw the line at the edge of  the a
                                       text.lineWidth = helpers.valueAtIndexOrDefault(gridLines.lineWidth, 0);
                                    context.stroke                        le                     he                    ers.valueAtIndexOrDefault( gridLines.color, 0);
                                 var x1 = me.left;
            var x2 = me.                    ght                                                                  var y1 =  me.top;
                                 var y2 = me.bottom;

                                 var aliasPixel = helpers.aliasPixel(context.lineWidth);                                                                       if (isHorizonta                        {
                y1 = y2 =                        tions.posit                         === 'top' ? me.bottom : me.t
                                        y1 += aliasPixel;
                y2 += a                            Pixel;
                                                      } else {
                x1 = x2 = options.posit                         === 'left' ? me.right : m                    lef
                 x1                         aliasPixel;
                                     x2 += aliasP                        l;
            }

                                 context.beginPath();
            context.moveTo(x1, y1);
                                 context.lineTo(x2, y2);
                                                context.stroke( );
                             }
    }
});
                                            };
}, { "25": 25, "26": 26, "34": 34, "45": 45 }], 33: [function (r            equi        re ,  modu le,  expo rts ) {
'use s trict';

var  d            efaults = requi            re(25);
var hel            pers = require(45);

        module.exports = f unction (Ch                rt) {
Char                .scaleService = {
    // Scal                    registration object. Ex tensions c                        register new scale types (such as                             or DB scales)                          t
    // use the new chart options to grab the                     rrec                    scale
    constr uctor                        {},
                         // Use a registra                        n function so that we can mo                        to an ES6 map when we no longer need to support
    // old browsers
                          // Scale config defaults
    defaults: {},
                         registerScaleType: function (type, sc                        Constructor, scaleDefaults)                                                   this.construct                            type] = scaleConstructor;
                                this.defaults[type] = hel                                clone(scaleDefaults);
                                                                              getScaleConstructor:                                 ion (type) {
                                   return th                            on                        uct                        .hasOwnProperty(type) ? this.constructors[type] : undefined;

    getScaleDefaults: function (type) {
                                Return the scale defaults merged w                            the global settings so                         t we always use the latest ones
                                return this.defaults.                                nProperty(type) ? helpers.merge(                            [defaults                                e, this.defaults[type]]) : {};
                                                                                             updateScaleDefaults: func                             (type, additions) {
                             var me = this;
                                if (me.defaults.has                                operty(type)) {
                                    m                                aults[type] = helpers.extend(me.defaults[type], ad                            on
                             }
                            },
    addScale                            ayout: function (chart) {
                                // Adds each scale to the chart.boxe                            ray to be sized accordingly
                                 elpers.each(chart.scales                                ction (scale)                                                                                           Set ILay                                    m parameters for back                                 c                            ti                        ity                                                                             le.fullWidt                            scale.options.fullWidth;
                                                                                    sc                    e.p                    ition = scale.option                    position;
                              scale.weight = sc ale.o                        ons.weight;
                                 C                        t.layoutService.addBox(chart                        cale);
        });
    }
};
                 };
}, { "25": 25, "45": 45 }], 34: [function (require, module, exports) {
                 'use strict';

var helpers = require(45);

/**
                  * Namespace to hold static tick generation functions
                  * @namespace Chart.Ticks                                   */
    module.ex                        ts = {
        /**
                                 * Namespace                             old generators for                             erent types of tick                                           * @namespace Chart.Ticks.generators
         */
        generators: {
                    /**
                     * Interface for t                        options provided to the numeric                         k generator
                     * @interface INumericTickGenerationOptions
                     */
                                         /**
                                          * The maximum                        mber of ticks to display
                                          * @name INu                            cTickGenerationOpt                            #maxTicks
                                             * @type N                        er
                                             */
                                            /**
                                                                              * The distance between  each                         k.
                                          * @name INumericTickGenerationOp                        ns#stepSize
                     * @type                         ber
                     * @optional
                                                      */
                                            / **
                        * Forced  minimum  fo            r the ticks.If             not specified, the minimum             of the data range is used             to calculate the tick mi nimum
            * @name                    NumericTickGenerati                    Options#min
                * @type Number
                    * pt                onal * /
                        *
                     * The  maxim                        value of the ti.If not specified, the                        ximum of the data range is                         d to calculate the tic                        aximum
        * @name INumericTickGenerati                        ptions#max
            * @type Numbe * @optional
                                          * /

    /**
* Generate a set of linear ticks
                       * @method Chart                        cks.generators.                        ear
  * @param generat                        Options {INumericTickGeneratio                        tions} the options used to gene                             the ticks
* @param dataRange {IRang                                e range of the da                                                                                                               returns {Array<Number>} array of tick values
        */
    linear: function (generati                                    ons, dataRange) {
        var ticks
        // To get a "nice" value fo                            e tick spacing, we will us                            e appropriately named
        // "nice nu                                 algorithm. See http://stackoverflow.com/questi                                506881/nice-                                    algorithm-f                                    rts-with-minimum-ticks
        // for details.

        var g;
        if (generationOptions.stepSize && generationOptions.s                                    e > 0) {
            spacing = generationOptions.stepSize;
            e {
                var niceR                                        helpers.niceNum(dataRange.dat.min, false);
                spacing = hel                                        ceNum(niceRange / (generationOptio                                        icks - 1), true);
                var niceMin = Math.floor(da                                            min / sp * s
                        var niceMax                                         ceil(dataRange.max / spacin                                            cing;

                // If                                              and stepSize is set and they make an evenly spaced scale use it.
                i                                            ationOptions.min && gene                                        pt                                    ax & er                            nOpti                            stepSize) {
                    // If very clos                                our whole number, use it.
                    if (helpers.almostWhole((generati                                ions.max - generationOptions.min) / generationOptions.stepSize                                cing / 1000)) {
                        niceMin = gene                            onOpt                        s.min;
                        niceM ax = generationOptions.max
                    }

                    var numSpaces = (niceMax - niceMin) / ng;
                    // If v ery close to our rou                                        lue, use it.
                    if (                                        .almostEquals(numSpaces, Math.round(numSpaces), / 1000)                                                                                                  numSpace                                            .round(numSpaces                                                            } else {
                                                                                                    Spa                                        ath.ceil(numSpaces);
                }
                // Put the                                             nto the ticks ar                                                                                              ticks.push(generationOptions.min !== undefined ? generationOp                                            n : niceMin);
                for                                 j                              j < mSp                        s; ++j) {
                    ticks.pus                        iceMin + (j * spacing));
                    t.push(generationOptions.max !== undefin                                generationOptions.max : niceMax);

                    ret                                icks;
                },

                /**
                                                                         erate a set                                 garithmic tic                                                                                                         * @method Char t.Tic                        generators.loga                        hmic
                                      * @param generationOptions {                        mericTickGenerationOptions                            e options used to g                            ate the ticks
                                                           * @param dataRange {IRange} the range of the data
                                        @returns {Array<Number>}                             y of tick values
                 */
                logarithmic: function (gene                            onOptions, dataRa) {
                    var ticks = [];
                    var valueOrDefault = helpers.valueOrDef                        t;

                    // Figure out what the max                        mber of ticks we can support i                        s based on the size of
                    the axis area.For                              we say that the                         imum tick                            cing in pixels must                            50
                    We also limit the maximum num ber o                        icks to 11 which gives a nice 10 square                        n
                    // the graph
                    var tickVal = valueOrDefault(gen                    ationOptions.min, Math.pow(10, Math.floor(helpers.                        10(dataRange.min))));

                    var endExp = Math.floor(helpers.l                    10(taRange.max));
                    var endSignificand = Math.ceil(dataRange.max / Math.p(10                    endExp));
                    va                        xp, significand                                                                      f(tickVal === 0) {
                        exp = Math.floor(pers.log10(dataRange.minNot                        o));
                        si                        ficand = Math.floor(dataR.minNotZero / Math.pow(10, exp));

                        ticks.push(tick                            ;
                        tickVal = si                            icand * M                                ow(10, exp);
                    } else {
                        exp = Math.floor(helpers.log10(tickVal));
                        nificand = Math.floor(tickVal / Math.pow(10, exp));
                    }

                    do {
                        s.push(tickVal);

                        ++significand;
                        if                                    ificand === 10) {
                            significand = ++exp;
                        }

                        tickVal = significand * Math.pow(10, exp);
                    } while (exp < endExp || (exp === p                             ignificand < endSignificand));

                    var lastTick = valueOrDefault(generationOptions.max, tickVal                                                      tic                                    h(lastTick);

                    return ticks;
                }
            },

                                            **
                                               * Namespace to hold formatters for different types of ticks
                * @namespace Chart.Ticks.formatters
                    /
                    formatters: {
                /**
* Format                            for value                                ls
* @method Chart.Ticks.formatte                                lues
*                                 m value the value to display
* @return {String|Array} the label to display                                                                                        */
                values: function  (value) {
                    return helpers.isArray(value) ? value : '' + value;
                },

                /**
                    * Formatter for linear num                             ticks
* @method Chart.Ticks.formatters.linear
                 * @param tickValue {Numb                            the value to be formatted
                    * @param index {Number} the position of the tickValue parameter                         th                        icks array
                                            * @param ticks {Array<Number>} the list of ticks being converted
                  * @re tur n {St ri ng}  st ring repr esentatio n of th e tickVa lu            e parameter
        */
                linear: functi            on(tickValue, index, tick            s) {
                    // If w                 have lots of ticks, don't use the ones                                                          var delta = tick                    length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];

                    //                    f we have a number like                     5 as the delta                        igure out how m                         decimal places we need
                    if                     ath.abs(delta                         1) {
                        if (tick                    lue !== M.floor(tickValue)) {
                            // not an integer
                            delta = tickValue - Ma                        floor(tickValue);
                        }
                    }

                    var logDelta                         elpers.log10(Math.abs(ta));
                    var tickString = '';

                    if (tickValue !== {
                        var                    umDe                    mal = -1 * Math                        oor(logDelta);
                                                 numDecimal = Mat                        ax(Math.min(numDecimal, 20), 0); // toFixed                          a max of 20 de                        al places
                    tickS                        ng = tickValue.toF ixed(numDe                            l);
                                                                                               else {
                        tickString = '0'; // nev                     show decimal places for 0
                    }

                    return tickString;
                },

                loga                    thmic: function (tickValue, index, ticks) {
                    var remain = tickValue / (Math.pow(10, Math.floor(helpers.log10(tickValue))));

                    if (tickValue === 0) {
                        return '0';
                    } else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
                        return tickValue.toExponential();
                    }
                    return;
                }
            };
        }, { "45": 45 }], 35: [functi(require, module, exports) {
            strict';

            var defaults = require(
            var Element = require(26);
            var helpers = req                        e(4                    ;

                faults._set('global', {
                    tooltips                    {
                        enabled: true,
                        custom                    null,
                        mode: 'neare                        ,
                                            position: 'avera
                    i                        rse                    : true,
                        backgroundCol                         'rgba(0,                            0.8)',
                        titleFont                        le: bol,
                        ti                        Spacing: 2,
                        ti                 eMarginBottom: 6,
                        titleFontColor: '#fff',
                        titleAlign: 'left',
                        bodySpacing: 2,
                        bodyFontColor: '#fff',
                        bodyAlign: 'left',
                        footerFontStyle: 'bold',
                        fo                     rSpacing: 2,
                        footerMarginTop: 6,
                        foo                     Fo                     olor: '#fff'                                                          footerAlign: 'left',
                        yPadding: 6,
                        xPadding: 6,
                        caretPa                     ng,
                        caretSize: 5,
                        co                     rRadius: 6,
                        multiKeyBackground: '#fff',
                        disp                     Colors: true,
                        borderColor: 'rgba(0,0,0,0)                                                           borderWidth: 0,
                    callbacks: {
                            // Args ar                     (tooltipItems, data)
                            beforeTitle: helpers.noop,
                            title: function (tooltipItems, ta) {
                                // Pick first xLabel for now
                                var t                     e                      ';
                                var labels = data.labels;
                                var labe                     unt = labels ? labels.length : 0;

                                if (tooltipItems.length > 0) {
                                    ar i                    m = tooltipItems[0];

                                    if (item.xLabel) {
                                        title = item.xLabel;
                                    } else if (labelCount > 0 && item.index < labelCount) {
                                        title = labels[item.i                    ex];
    }
}

urn title;
                                                                  },
afterTitle: helpers.noo

// Args                    re: (tooltipItems, data)
beforeBody: h                    pers.noop,

    //                     gs are: (tooltipItem, data)
    beforeLabel: helpers.noop,
        l                        l: function (tooltipItem, data) {
            var label = data.da                        ets[tooltipItem.datasetIndex].label ||

                            if (label) {
                label += ': ';
            }
            label += t                        tipItem.yLabel;
            return label;
        },
labelColor: function (tooltipItem, chart) {
    var meta = chart.atasetMeta(tooltipItem.datasetInde                                                        var a                        veE                        ent = meta.data[tooltipItem.index];
    var view = iveElement._view;
    return {
        borderColor: view.borderColor,
        backgro                        Col                         view.backgroundColor
    };
                                                 ,
    labelTe                        ol: f                    ction() {
        return this._options.bodyFontColor;
    },
    afterLabel: helpers.noop,

        // Arg                    are: (tooltipItems, data)
        afterBody: helpers.noop
    // Args are: (tooltipItems, da                    )
    beforeFo                ter                 helpers.noop,
        oter: helpers.noop,
            afterFooter: elpers.noop
}
            });
module.exports = function (Chart) {
    /**
            Helper method to me                         the opacity into a color
          */
    function m                            Opacity(colorString, opacity) {
        var or                     helpers.or(colorString);
        return lo.al                ha(opacity * color.alpha()).rgbaString();
    }

    // Helper to push or concat based                         if the 2nd parameter is an array                    r not
    function pushOrCon(base, toPush) {
        if (toPush) {
            if (helpers.isArr(toPush)) {
                // ba                     = base.concat(toPush);
                Array.prototy.push.apply(base, toPush);
            } else {
                base.push(toPush);
            }
        }

        return base;
    }

    // Pr                    ate helper to create                     tooltip item model
    // @param e                    ment : the chart element (p                    nt, arc, bar) to create the tooltip item for
    // @return : new tooltip
    function createTooltipItem(element) {
        var xSca                             element._xScale;
        var le = element._yScale || element._scale; // han                            radar || polar                             charts
        var index = element._index;
        var datasetIndex = eleme                            datasetIndex;

        return {
            xLab                            xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
            yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
            index: index,
            datasetIndex: datasetInde                                                   x: element._model.x, y: element._model.y
        };
    }

    /**
* Helper to get the reset model for the tooltip
*                             am tooltipOpts {Object} the tooltip options
*/
    f                    ct                on                 etBaseModel(tooltipOpts) {
        var globalDefau                    s = defaults.global;
        var valueOrDefault = helpers.valueOrDefault;

        return {
            // Positioning
            xPadding: ooltipOpts.xPadding,
            yPadding: tooltipOpts.yPadding,
            xAl: tooltipOpts.xAlign,
            yAlign: tooltipOp                        yAlign,

                                             / Body
        bodyFontColor: tooltipOpts.b                        FontColor,
            _body                        tFamily: valueOrDefault(tipOpts.yFo                        amily, globalDefa                        s.defaultFontFamily),
                _bodyFont                        le: valueOrDefault(tooltipOpts.bodyFontStyle, g                        alDefaults.defaultFontStyle),
                    _bodyAlign: tooltipOpts.bodyAlign,
                        bodyFontSize: valueOrDefault(to                        ipO.bodyFontSize, gl                        lDefaults.defa                    tF                ntS                ze),
                            bo                    Spacing: tooltipOpts.bodySpacing,

                                // Title
                                titleFontCol                    : tooltipOpts.titleFont Color                                                                    _titleFontFamily: ueOrDefault(tooltipOpts.tit                        ontFamily, globalDefaults.defaultFontFamily),
                                    _titleFontStyl                        valueOrDefault(tooltipOpts                        tleFontStyle, globalDefaults.defaultFon                        yle),
                                        titleFontSi                         valueOrDefault(tooltipOpts.titleFontSize, globalD                        ults.defaultFontSize),
                                            _titleAlign: tooltipOpts.titleAlign,
                                                titleSpacing: tooltipOpts.titleSpacing,
                                                    titleMarginBottom: tooltipOpts.titleM                    gin                    ttom,

                                                        //                         ter
                                                        footerFontCo                        : tooltipOpts.footerFontColor,
                                                            _footerFontFamily: va                        OrDefault(tooltipOpts.footerFontFamily, gl obalDefaults.defaultFontFa),
                                                                _footerFontStyle: eOrDefault(tooltipOpts.footerFontStyle, globalDe                                s.defaultFontStyle),
                                                                    footerFont                                    valueOrDefault(tooltipOpts.footerFontSize                                    alDefaults.defaultFontSize),
                                                                        footerAl                                    ool                                    s.footerAlign,
                                                                            footerSpacing: tooltipO                                oote                            ci
        footerMarginTop: tooltipOpts.footerMar                        Top,

            // Appearance
            caretSize: tooltipOpts.caretSize,
                cornerRadius: oltipOpts.cornerRadius,
                    background Color                        ooltipOpts.backgroundColor,
                        opacity: 0,
                            legendColorBackground: tooltipOpts.multiKeyB                        ground,
                                displayColors: tooltipOpts.displayColors,
                                    borderColor: tooltipOpts.rde                    olor,
                                        borde                        dth: tooltipOpts                        rderWidth
    };
}

/**
 * Get the size of the tooltip
*/
function ge                    ool                    pSize(tooltip, model) {
    var ct                         tooltip._chart.ctx;

    var height = model.yPadding * 2; // To                    tip                    adding
    var width = 0;

    Count of all lines in the                        dy
    v                        bo = del.y;
    var combinedBodyLength = body.reduce(functi(count, bod                     em)
                         return count + bodyItem.before.length + bodyItem.lines.l                        th + bodyItem.a                        r.length;
}, 0);
combinedBodyLeng += model.beforeBody.length + model.afterBody.length;

var titleLineCount = mod                        title.length;
var footerLineCount = model.footer.leng
var titleFontSize = model.titleFontSize;
var bodyFontSize = m                        l.bodyFontSize;
var footerFontSize = el.footerFontSize;

height += titleLine                        nt * titleFontSize; // Title Lines
ght += titleLineCount ? (titleLineCount - 1) * model.titleSpac : 0; // Title Line Spacing                                             height += titleLineCount ? model.titleMarginBottom : 0; // Title's bo                             Margin
height += combinedBodyLength * bodyFontSize; // Body Lines
height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body                    ine                    pacing
height += footerLineCount ? model.footerMarginTop : 0; //                         ter Margin
height += footerLineCount * (footerFontSize); Footer Lines
height += f                        erLineCount ? (footerLineCount - 1) * model                        oterSpacing: 0; // Footer Line Spacing

/                        itle width
var widthPadding = 0;
var maxLineWidth = function (line) {
    dth = Math.max(width, c tx.measure                        t(line).width + widthPadding);
};

ctx.font = helpers.fontString(titleFontSize, model._titleF                            tyle, model._titleFontFamily);
helpers.each(model.title, maxLineWidth);

// Body width
ctx.font = helpers.fontString(yFontSize, model._bodyFontStyle, model._bodyFontFami);
helpers.each(model.be foreBody.c                        at(model.afterBo, maxLineWidth);

// Body lines may inclu                        som                        xtra width due to the color box
widthPadding = m                        l.displayColors ? (bodyFontSize + 2) : 0;
helpers.each(body, function (Item) {
    helpers.e(b                        Item.before, maxLineWidth);
    helpers.each(bodyItem.lines, maxLineWidth);
    he                        rs.each(bodyItem.after, maxLineWidth);
                                          );

// Reset back to 0
widthPadding = 0;

// Footer width
ctx.font = helpers                        ntS                    ing                    ooterFontSize, model._footerFontSt yle, model._foote                        ntFamily);
helpers.each(model.footer, maxLineWidth);

// Add padding
width +                         * model.xPadding; urn {
    width: w,
        height: height
};
                }

/**
Helper to get                          alignment of a tooltip                        ven the size
*/
function determi                        lignment(tooltip, size) {
    model = tooltip._mo
    ar chart = tooltip._chart;
    var chartAr                             tooltip._chart.chartArea;
    var xAlign = 'center';
    var yAlign = 'center';

    if (model.y < size.height) {
        yAlign = 'top';
    } else if (model.y > (chart.height - size.height)) {
        yAlign = 'bottom';
    }

    var rf; // functions to determine  left, right align                                                    var olf, orf; // functions t                                ermine if left/right alignment causes                                    ip to go outside chart
    var yf; // function to get the y align                                    f the tooltip goes outside of the left o                                    t edges
    var midX = (cha                                        left + chartArea.right) / 2;
    var mid                                    har                                    top + chartArea.bottom) if (yAlign === 'center') {
        lf = function (x) {
            retur                                        midX;
        };
        r                                        ction(x) {
            return x > midX;
        };
    } else {
        lf = function (x) {
            return ze.width / 2);
        };
        rf = function (x) {
            ret(chart.width - (size.width / 2));
        };
    }

    f = on                                                                ret                                         size.width > chart.width;
};
                                                         = function (x) {
    x - size.width
    yf = function (y) {
        return y <= midY ? '                             :                        ot                    m'
                                   };

    if (lf(model.x)) {
        xAlign = '        le f t';

        // Is too ltip too  wide an d goes o ve            r the right side of the cha            rt.?
        if (olf(mod            el.x)) {
            xAlign = 'center';
            yAlign = yf(model.y);
        }
    } else if (rf(model.x)) {
        xAlign = 'right';

        // Is tooltip too wide and goes outside left edg            e of canvas?
        if (orf(model)) {
            xAlign = 'center';
            yAlign                     yf(model.y)
        }
    }

    va                    opts = tooltip._options;
    return {
        xAlign: opts.xAlign ? o                ts.xAli                     : xAlign,
        yAlign: opts.yAl                gn                  opts.yA                    gn: yAlign
    };
}

                                                                  *
                                   * @Helper to                    et the location a                too                tip needs t                    be placed at gi                    n the initial p                    ition(via the vm) a                d t                e size a                     alignment
    * /
function getBackgroundPoint(vm, size, alignment) {
    // Background Position
    va                 x = vm.x;
    var                  = vm.y;

    var caretSize = vm.c                    etSize;
    var caretP                        ing = vm.caretPaddi
    var cornerRadius = vm.c             rnerRadius;
    var xAlign = alignment.xAlign;
    var yAlig = alignment.yAlign;
    var paddingAndSize = caretSize + caretPadding;
    var radiusAndPadding = cornerRadius + caretPadding;

    if (xAlign === 'right') {
        x -= size.width;
    } else if (xAlign === 'center') {
        x -= (size.width / 2);
    }
    if (yAlign === 'top') {
        y += paddingAndSize;
    } else if (yAlign === 'bottom') {
        y -= size.height + paddingAndSize;
    } else {
        y -= (siz.height / 2);
    }

    if (yAlign === 'center') {
        if (xAlign === 'left') {
            x += paddingAndSize;
        } else if (xAlign === 'right') {
            x -= paddi             gAndSize;
        }
    } else if (xAlign === 'le            ft') {
        x -= radiusAndPadding;
    } else if (xAlign === 'right') {
                                                                  =  radiusAndPadding;
    }

    return
    x: x,
        y: y
};
                }

Chart.Tooltip                     Element.extend({
    initialize: func                    on()
                                       this._model = getBaseModel(this._options);
    is._lastActive = [];

    // Get the title
    // Args are: (tooltipItem, data)
    getTitle: function () {
        var me = this;
        va                 opts = me._op            tio            ns;
        var callbacks = opts.callbacks;

        va            r beforeTitle = callbacks.beforeTitle                apply(me, ar                uments);
        var title = c                llbacks.title.apply(me, argume                    s);
var afterTitle = callback                    afterTitle.apply(m                     arguments) var lines = [];
lines = pushOrC onc(lines, beforeTitle);
l                    es = pushOrConcat(lines, title                                                                  l                        s = push OrConcat(lines, a                    er                itl);

return lines;
                                    },

// Args are: (tooltipItem, data)
getBeforeBody: function () {
    var lines = this._options.callbacks.beforeBody.apply(this, arguments);
    return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
},

// Args are              (t            ooltipItem, data)
getBody: f                nction(tooltipItems, data) {
    var me = this;
    var callbacks = me._o                tions.callbacks;
    var bodyItems = [];

    helpers.each(tooltipItems, function (tooltipItem) {
        ar bodyItem = {
            before: [],
            lines: [],
            aft                r: []
                                                    }
        pushOrConcat(bodyItem.before, callbacks.before             abel.call(me, tooltipItem, data));
        pushOrConcat(bodyItem                lines, callbacks.label.call(m, tooltipItem, data));
        pushOrConcat(bodyItem.after, callb                    ks.afterLabel.call(me, too                tipItem, data));

        bodyItems.push(bo                    Item);
    });
    return bo                    Items;
                                                   ,

    Args are: (to                lti                Item, data)
    getAfterBody: function () {
        var lines = this._options.callbacks.afterBody.apply(this, arguments);
        return helpers.isArray(l                    es) ? lines : lines != un                efined ? [line            s] : [];
    },

    // Get the footer                     d beforeFoote                 an                 afterFooter lines
    // Args are: (tooltipItem, data)
    get                ooter: function () {
        var me = this;
        var callbacks = m._options.callbacks;

        var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
        var footer = callbacks.footer.apply(me, arguments);
        var afte             Foo            ter = callbacks.afterFooter.apply(me, arguments);

        var ines = [];
        lines = pushOrConcat(lines, befo                eFooter);
        lines = pushOrCon                at(lines, foot);
        lines = pushOrConcat(lines, after                oot                r);

        return lines;
    },

    update: function (changed) {
        var m = his
        var opts = me._options;

        // Need to regenerate the mode              be            cause its faster than using extend and it is necessary due to the                 ptimization in Chart.Elem                nt.transition
        // that does _view = _model if ease === 1.                     is causes the 2nd tooltip update                    o set properties in both the view and model at the same time
        / which breaks any animations.
        var existingModel = me._model;
        va                 mo                el = me._model = getBase            Mod            el(o             ts);
        var active = me._active;
        var data = me._data;

        // In the case where active.length === 0 we need to keep thes                 at existing values for g                od animations
        var alignment = {
            xAlig                     existingModel.xAlign,
            yAlign: existing                        el.yAlign
        };
        var backgroun            dPo            int = {
                                            : existingModel.x,
            y: existingModel.y
    };
    var tooltipSize                     { width: existingModel.width,
        height: e             istingModel.height
    };
    var tooltipPosit             on = {
        x: existingModel.caretX,
        y: existingModel.caretY
    };

    var i, len;

    if (active.length) {
        model.opacity = 1;

        var labelColors = [];
        var labelTextColo                s = [];
        tooltipPosition = Chart.Tooltip.positioners[o                ts.position].call(me, active, me._eventPosition);

        var tooltipItems = [];
        for (i = 0, len = ac                ive.length; i < len; ++i) {
            tooltip                tems.push(c                eateTooltipItem(a                    ive[i]));
        }

        // If the user provided a filter function, use it                to modify the t                    ltip items
        if (opts.filter) {
            tooltipItems = tool                ipItems.filter(function (a) {
                return opts.filter(a, data);
            });
        }                                                                              // If the user provi                ed a sorting function, use it to modify the tooltip items
        if (opts.itemSort) {
            tooltipIte = tooltipItems.sort(function (a, b) {
                return ts.itemSort(a, b, data);
            });
        }

        // Determine colors for boxes
        helpers.each(tooltipItems, function (toolt                    Item) {
            labe                Colors.push(op            ts.call             acks.labelColor.call(me, tooltipItem, me._chart));
            labelTextColors.push(opts.callbacks.labelTextColor             cal            l(me, tooltipItem, me._chart));
        });

        // Build the Text                Lines
        mode                    title = me.getTitle(toolt                        tems, data);
        mo.beforeBody = me.g                        eforeBody                            ltipItems, data);
        odel.body = me.getBody(tooltipItems, data                                                                                        model.afte                        dy = me.getAfterBody(tooltipItems                        ata);
        model.footer = me.getFoo(tooltipIt                             data);

        // Ini                             positioning and colors
        od                l.x = Math.r ound(tooltipPosition.x);
        model.y = Math.round(toolti                Position.y);
        mode.caretPadding = opts.caretPadding;
        model.lab                    Colors = labelColors;
        model.labelTextColors = belTextColors                                                                         //                    ata                 oin                s
        model.dataPo ints = tool                ipItems;

        // We n                    d to                     termine alignment of the tooltip
        tooltipSize = getTooltipSize(this, model);
        alignment = determineAlignment(this, tooltipSize);
        // Final Size and Position
        b                    kgroundPoint = getBackgro                    dPoi                     model, tooltipSize, alignment);
    } els
    model.opacity = 0;
    model.xAlign = alignment.xAlign;
    model.yAlign = alignment.yAlign;
    model.x = b                     gro                    dPoint.x;
    model.y = backgroundPoint.y;
    model.width = tooltipSize.width;
    model.height = tooltipSize.height;

    // Point where the caret on the tooltip points to
    model.caretX = tooltipPosition.x;
    model.c                        tY = tooltipPosition.y;

    me._model = model;

    if (changed && opts.custom) {
        opts.custom.call(me, model);
    }

    return me;
},
wCaret: function (tooltip                        nt, size) {
    var ctx = this._chart.ctx;
    var vm = this._view;
    var c                        tPosition = this.g                            retPosition(tooltipPoint, size, vm);

    ctx.lineTo(caretPosition.x1, etPosition.y1);
    ctx.lineTo(ca                            osition.x2, caretPositi                            2);
    ctx.lineTo(caretPositi                            3, caretPosition.y3);
},
g                            retPosition: function ool                    pPo                    t, size, {
    r x1, x2, x3, y1, y2, y3;
    var caretSize = vm.caretSize;
    var corne                         ius = vm.cornerRadius;
    var xAlign = vm.xAlign;
    var yAlign = vm.yAlign;
    var ptX = tooltipP.x;
    var ptY = tooltipPoint.y; v                        width = size.widt                                                                        var                         gh = ize.eight;

    if(y                    ign === 'center') {
    y2 = ptY + (height / 2);

    if (xAlign === 'left') {
        x1 = ptX;
                                                        =                         - caretSize;
        x3 = x1;

        y1 = y2 + ca retSi
        y3 = y2 - ca                        Size;
    } else {
        x1 = ptX + width;
        x2 = x1 + caretSize;
        x3 = x1;

        y1 = y2 - caretSize;
        y3                      2 + caretSize;
    }
} else {
    if (xAlign === 'left') {
        x2 = X                         ornerRadius + (caretSize);
        x1 = x - ca                    tSize;
        x3 = x2 + car                        ize;
    } else if (xAlign === 'r                        t') {
        x2 = ptX + th - cornerRadius - c                        tSize;
                                                                             = x2 - caretSize;
        x3 = x2 + caretSize;
    } else {
        ptX + (width / 2);
                                                                             = x2 - caretSize;
        x3 = x2 + caretSize;
    }
    if (yAlign == p') {
    ptY;
    y2 = y1 - caretS                                                                y;
} else {
    y1                                          height;
    y2 = y1 + caretSize;
    y3 = y1;                                                                                                                        // invert drawing order
    var tmp = x3;
    x3 = x1;
    x1 = tmp;
}
                        }                                                 return { x1: x1, x2: x                            3: x3, y1: y1, y2: y2, y3: y3 };                                             },
drawTitl                        fun                        on(pt, vm, ctx, opacity)                                                   var title = vm.title;

if (title.length) {
    ctx.textAlign = vm._titleAlign;
    ctx.textBaseline = '                        ';

    var tit                        ontSize = vm.titleFontSize;
    var t                        eSpacing = vm.titleSpacing;

    ctx                        llStyle = mergeOpacity(vm.titleFontColor, opacity);
    ctx.font = helpers.fontString(titleFontSize, vm._titleFontStyle, vm                        itleFontFamily);

    var i, len;
    for (i = 0, len = title.length; i                        len; ++i) {
        ctx.fillText(tit                            ], pt.x, pt.y);
        pt.                    += titleFontSize + t itleS                        ing; // Line He                        t and spacing

        if (i + 1 === title.l                        th) {
            pt.y += vm.leMarginBottom - tleSpacing; // If Last, a                        margin, remove spacing
        }
    }
}
                                                },
wBody: ction(pt, vm                            tx, opaci                                {
    var bodyFontSize = vm.bodyFontSize;
    var bodySpacing = vm.bodySpacing;
    var body = vm                            y;

    ctx.textAlign                        vm.dyAlign;
    ctx.textBas                        ne = 'top';
    ct                        ont = helpers.fontString(bodyFontSize, _bodyFontStyle, vm._bodyFontFamily);

    // Before Body
    xLinePadding = 0;
    var fillLineOfText = function (l                                {
        x.f                        Text(line, pt.xLinePadding, y);
    pt.y += bodyFontSize + bodySpacing;
};

// Before body lines
ctx.fillStyle = mergeOpacity(vm.bodyFontColor, opacity);
pers.each(vm.beforeBody, fillLineOfText);

v                        drawColorBoxes = vm.displayColors;
xLinePadding = drawColorB oxes ? (bodyFontSize + 2                         0;

// Draw body li                         now
hel                        s.each(body, function (bodyItem, i) {
    var textColor = rgeOpacity(vm.labelTextColors[i], opacity);
    ctx.fillStyle = Color;
    el                        s.each(bodyItem.before, fillLi                            Text);

    helpers.each(bodyItem.lines, fu                        ion                        ine) {
        // Draw Legend-like boxes if needed                                                                                       if (drawColorBoxe s) {
        / Fill a white                         t so that colours merge ni                        y if the opacity is < 1
        ctx.fillStyle                        mergeOpacity(vm.legendColorBackground                        pacity);
        ctx.fillRect(pt.x, pt.y, bo                        ontSize, bodyFontSize);

        / Border
        ctx.lineWidth = 1;
        ctx.strokeStyle = mergeOpacit                        m.labelColors[i].borderColor, opacity);
ctx.strokeRect(pt.pt.y, bodyFontSize, bodyFontSize);

// Inner square
ctx.fillStyle = mergeO                        ity(vm.labelColors[i].backgroundColor, opacity);
ctx.fillRect(pt.x + 1,                        .y + 1, bodyFontS - 2, bodyFont                        e - 2);
ctx.fi                            yle = textColor;
                                }

fillLineOfTe(lin                    ;
                                                                                  });

lpers.each(body                        m.after, fillLineOfText);

// Reset back to 0 fo                        fter body
xLinePadding = 0;

// After body lines
helpers.each(vm.afterBody, fill                    neOf                    xt);
pt.y -= bodySpacing; // Remo                        last body spaci                                                                  ,
drawFooter: function (pt, vm, ctx, ity) {
    var footer = vm.footer                                                                     if                             ter.length) {
        pt.y += vm.fo                            MarginTop;

        x.te                    Align = vm._footerAlign;
        ctx.textBaseli = 'top';

        ctx.fi                            yle = mergeOpacity(vm.footerFontColor, opacit                                                                                            ctx.font = h elpers.fon                        ring(vm.footerF                        Size, vm._footerFontStyle, vm._footerFontFamily);
        helpers.each(footer, ction(line) {
            ctx.fillText(line, pt.x, pt.y);
            y += vm.footerFontSize + vm.footerSpacing;
        });
    }
},
drawBa                     round: func                     n(                    , vm, ctx, tooltipSize, opacity)                                                                     ctx.fillStyle = mergeOpacity(backgroundColor, opacity);
ctx                        rokeStyle = mergeOpacity(vm.borderColor, opacity);
ctx.lineWidth = v                        orderWidth;
r xAlign = vm.xAlign;
var yAlign = vm.yAlign;
var                        = pt.x;
var y = pt.y;
r wi                    h = ltipSize.wi;
var h eight = tooltipS.height;
var radius = vm.cornerRadius;

ctx.beginPath();
                                                .moveTo(x + radius, y);
if (yAlign === 'top') {
    this.drawCaret(pt, tooltipSize);
}
ctx.lineTo(x + width - dius, y);
ctx.quadraticC                    ve                o(x + width, y, x + width, y + radius);
if (yAlign === 'ce        nt e r' & & xAlig n = == 'r ig ht
')  {
this.drawCaret(pt, tooltipSize);
                        }
ctx.lineTo(x + width, y + height - radius);
ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
if (yAlign === 'bottom') {
    this.drawCaret(pt, tooltipSize);
}
ctx.lineTo(x + radius, y + height);
ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
if (yAlign === 'center' && xAlign === 'left') {
    this.drawCaret(pt, tooltipSize);
}
ctx.lineTo(x, y + radius);
ctx.quadraticCurveTo(x, y, x + radius, y);
ctx.closePath();

ctx.fill();

if (vm.borderWidth > 0) {
    ctx.stroke();
}
                    },
draw: function () {
    var ctx = this._chart.ctx;
    var vm = this._view;

    if (vm.opacity === 0) {
        return;
    }

    var tooltipSize = {
        width: vm.width,
        height: vm.height
    };
    var pt = {
        x: vm.x,
        y: vm.y
    };

    // IE11/Edge does not like very small opacities, so snap to 0
    var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;

    // Truthy/falsey value for empty tooltip
    var hasTooltipContent = vm.title.length || vm.beforeBody.length || vm.body.length || vm.afterBody.length || vm.footer.length;

    if (this._options.enabled && hasTooltipContent) {
        // Draw Background
        this.drawBackground(pt, vm, ctx, tooltipSize, opacity);

        // Draw Title, Body, and Footer
        pt.x += vm.xPadding;
        pt.y += vm.yPadding;

        // Titles
        this.drawTitle(pt, vm, ctx, opacity);

        // Body
        this.drawBody(pt, vm, ctx, opacity);

        // Footer
        this.drawFooter(pt, vm, ctx, opacity);
    }
},

/**
 * Handle an event
 * @private
 * @param {IEvent} event - The event to handle
 * @returns {Boolean} true if the tooltip changed
 */
handleEvent: function (e) {
    var me = this;
    var options = me._options;
    var changed = false;

    me._lastActive = me._lastActive || [];

    // Find Active Elements for tooltips
    if (e.type === 'mouseout') {
        me._active = [];
    } else {
        me._active = me._chart.getElementsAtEventForMode(e, options.mode, options);
    }

    // Remember Last Actives
    changed = !helpers.arrayEquals(me._active, me._lastActive);

    // If tooltip didn't change, do not handle the target event
    if (!changed) {
        return false;
    }

    me._lastActive = me._active;

    if (options.enabled || options.custom) {
        me._eventPosition = {
            x: e.x,
            y: e.y
        };

        var model = me._model;
        me.update(true);
        me.pivot();

        // See if our tooltip position changed
        changed |= (model.x !== me._model.x) || (model.y !== me._model.y);
    }

    return changed;
}
                });

/**
 * @namespace Chart.Tooltip.positioners
 */
Chart.Tooltip.positioners = {
    /**
     * Average mode places the tooltip at the average position of the elements shown
     * @function Chart.Tooltip.positioners.average
     * @param elements {ChartElement[]} the elements being displayed in the tooltip
     * @returns {Point} tooltip position
     */
    average: function (elements) {
        if (!elements.length) {
            return false;
        }

        var i, len;
        var x = 0;
        var y = 0;
        var count = 0;

        for (i = 0, len = elements.length; i < len; ++i) {
            var el = elements[i];
            if (el && el.hasValue()) {
                var pos = el.tooltipPosition();
                x += pos.x;
                y += pos.y;
                ++count;
            }
        }

        return {
            x: Math.round(x / count),
            y: Math.round(y / count)
        };
    },

    /**
     * Gets the tooltip position nearest of the item nearest to the event position
     * @function Chart.Tooltip.positioners.nearest
     * @param elements {Chart.Element[]} the tooltip elements
     * @param eventPosition {Point} the position of the event in canvas coordinates
     * @returns {Point} the tooltip position
     */
    nearest: function (elements, eventPosition) {
        var x = eventPosition.x;
        var y = eventPosition.y;
        var minDistance = Number.POSITIVE_INFINITY;
        var i, len, nearestElement;

        for (i = 0, len = elements.length; i < len; ++i) {
            var el = elements[i];
            if (el && el.hasValue()) {
                var center = el.getCenterPoint();
                var d = helpers.distanceBetweenPoints(eventPosition, center);

                if (d < minDistance) {
                    minDistance = d;
                    nearestElement = el;
                }
            }
        }

        if (nearestElement) {
            var tp = nearestElement.tooltipPosition();
            x = tp.x;
            y = tp.y;
        }

        return {
            x: x,
            y: y
        };
    }
};
            };
        }, { "25": 25, "26": 26, "45": 45 }], 36: [function (require, module, exports) {
    'use strict';

    var defaults = require(25);
    var Element = require(26);
    var helpers = require(45);

    defaults._set('global', {
        elements: {
            arc: {
                backgroundColor: defaults.global.defaultColor,
                borderColor: '#fff',
                borderWidth: 2
            }
        }
    });

    module.exports = Element.extend({
        inLabelRange: function (mouseX) {
            var vm = this._view;

            if (vm) {
                return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
            }
            return false;
        },

        inRange: function (chartX, chartY) {
            var vm = this._view;

            if (vm) {
                var pointRelativePosition = helpers.getAngleFromPoint(vm, { x: chartX, y: chartY });
                var angle = pointRelativePosition.angle;
                var distance = pointRelativePosition.distance;

                // Sanitise angle range
                var startAngle = vm.startAngle;
                var endAngle = vm.endAngle;
                while (endAngle < startAngle) {
                    endAngle += 2.0 * Math.PI;
                }
                while (angle > endAngle) {
                    angle -= 2.0 * Math.PI;
                }
                while (angle < startAngle) {
                    angle += 2.0 * Math.PI;
                }

                // Check if within the range of the open/close angle
                var betweenAngles = (angle >= startAngle && angle <= endAngle);
                var withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);

                return (betweenAngles && withinRadius);
            }
            return false;
        },

        getCenterPoint: function () {
            var vm = this._view;
            var halfAngle = (vm.startAngle + vm.endAngle) / 2;
            var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
            return {
                x: vm.x + Math.cos(halfAngle) * halfRadius,
                y: vm.y + Math.sin(halfAngle) * halfRadius
            };
        },

        getArea: function () {
            var vm = this._view;
            return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
        },

        tooltipPosition: function () {
            var vm = this._view;
            var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2);
            var rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;

            return {
                x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
                y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
            };
        },

        draw: function () {
            var ctx = this._chart.ctx;
            var vm = this._view;
            var sA = vm.startAngle;
            var eA = vm.endAngle;

            ctx.beginPath();

            ctx.arc(vm.x, vm.y, vm.outerRadius, sA, eA);
            ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);

            ctx.closePath();
            ctx.strokeStyle = vm.borderColor;
            ctx.lineWidth = vm.borderWidth;

            ctx.fillStyle = vm.backgroundColor;

            ctx.fill();
            ctx.lineJoin = 'bevel';

            if (vm.borderWidth) {
                ctx.stroke();
            }
        }
    });
}, { "25": 25, "26": 26, "45": 45 }], 37: [function (require, module, exports) {
    'use strict';

    var defaults = require(25);
    var Element = require(26);
    var helpers = require(45);

    var globalDefaults = defaults.global;

    defaults._set('global', {
        elements: {
            line: {
                tension: 0.4,
                backgroundColor: globalDefaults.defaultColor,
                borderWidth: 3,
                borderColor: globalDefaults.defaultColor,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                capBezierPoints: true,
                fill: true, // do we fill in the area between the line and its base axis
            }
        }
    });

    module.exports = Element.extend({
        draw: function () {
            var me = this;
            var vm = me._view;
            var ctx = me._chart.ctx;
            var spanGaps = vm.spanGaps;
            var points = me._children.slice(); // clone array
            var globalOptionLineElements = globalDefaults.elements.line;
            var lastDrawnIndex = -1;
            var index, current, previous, currentVM;

            // If we are looping, adding the first point again
            if (me._loop && points.length) {
                points.push(points[0]);
            }

            ctx.save();

            // Stroke Line Options
            ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;

            // IE 9 and 10 do not support line dash
            if (ctx.setLineDash) {
                ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
            }

            ctx.lineDashOffset = vm.borderDashOffset || globalOptionLineElements.borderDashOffset;
            ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
            ctx.lineWidth = vm.borderWidth || globalOptionLineElements.borderWidth;
            ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;

            // Stroke Line
            ctx.beginPath();
            lastDrawnIndex = -1;

            for (index = 0; index < points.length; ++index) {
                current = points[index];
                previous = helpers.previousItem(points, index);
                currentVM = current._view;

                // First point moves to it's starting position no matter what
                if (index === 0) {
                    if (!currentVM.skip) {
                        ctx.moveTo(currentVM.x, currentVM.y);
                        lastDrawnIndex = index;
                    }
                } else {
                    previous = lastDrawnIndex === -1 ? previous : points[lastDrawnIndex];

                    if (!currentVM.skip) {
                        if ((lastDrawnIndex !== (index - 1) && !spanGaps) || lastDrawnIndex === -1) {
                            // There was a gap and this is the first point after the gap
                            ctx.moveTo(currentVM.x, currentVM.y);
                        } else {
                            // Line to next point
                            helpers.canvas.lineTo(ctx, previous._view, current._view);
                        }
                        lastDrawnIndex = index;
                    }
                }
            }

            ctx.stroke();
            ctx.restore();
        }
    });
}, { "25": 25, "26": 26, "45": 45 }], 38: [function (require, module, exports) {
    'use strict';

    var defaults = require(25);
    var Element = require(26);
    var helpers = require(45);

    var defaultColor = defaults.global.defaultColor;

    defaults._set('global', {
        elements: {
            point: {
                radius: 3,
                pointStyle: 'circle',
                backgroundColor: defaultColor,
                borderColor: defaultColor,
                borderWidth: 1,
                // Hover
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }
        }
    });

    function xRange(mouseX) {
        var vm = this._view;
        return vm ? (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
    }

    function yRange(mouseY) {
        var vm = this._view;
        return vm ? (Math.pow(mouseY - vm.y, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
    }

    module.exports = Element.extend({
        inRange: function (mouseX, mouseY) {
            var vm = this._view;
            return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
        },

        inLabelRange: xRange,
        inXRange: xRange,
        inYRange: yRange,

        getCenterPoint: function () {
            var vm = this._view;
            return {
                x: vm.x,
                y: vm.y
            };
        },

        getArea: function () {
            return Math.PI * Math.pow(this._view.radius, 2);
        },

        tooltipPosition: function () {
            var vm = this._view;
            return {
                x: vm.x,
                y: vm.y,
                padding: vm.radius + vm.borderWidth
            };
        },

        draw: function (chartArea) {
            var vm = this._view;
            var model = this._model;
            var ctx = this._chart.ctx;
            var pointStyle = vm.pointStyle;
            var radius = vm.radius;
            var x = vm.x;
            var y = vm.y;
            var color = helpers.color;
            var errMargin = 1.01; // 1.01 is margin for Accumulated error. (Especially Edge, IE.)
            var ratio = 0;

            if (vm.skip) {
                return;
            }

            ctx.strokeStyle = vm.borderColor || defaultColor;
            ctx.lineWidth = helpers.valueOrDefault(vm.borderWidth, defaults.global.elements.point.borderWidth);
            ctx.fillStyle = vm.backgroundColor || defaultColor;

            // Cliping for Points.
            // going out from inner charArea?
            if ((chartArea !== undefined) && ((model.x < chartArea.left) || (chartArea.right * errMargin < model.x) || (model.y < chartArea.top) || (chartArea.bottom * errMargin < model.y))) {
                // Point fade out
                if (model.x < chartArea.left) {
                    ratio = (x - model.x) / (chartArea.left - model.x);
                } else if (chartArea.right * errMargin < model.x) {
                    ratio = (model.x - x) / (model.x - chartArea.right);
                } else if (model.y < chartArea.top) {
                    ratio = (y - model.y) / (chartArea.top - model.y);
                } else if (chartArea.bottom * errMargin < model.y) {
                    ratio = (model.y - y) / (model.y - chartArea.bottom);
                }
                ratio = Math.round(ratio * 100) / 100;
                ctx.strokeStyle = color(ctx.strokeStyle).alpha(ratio).rgbString();
                ctx.fillStyle = color(ctx.fillStyle).alpha(ratio).rgbString();
            }

            helpers.canvas.drawPoint(ctx, pointStyle, radius, x, y);
        }
    });
}, { "25": 25, "26": 26, "45": 45 }], 39: [function (require, module, exports) {
    'use strict';

    var defaults = require(25);
    var Element = require(26);

    defaults._set('global', {
        elements: {
            rectangle: {
                backgroundColor: defaults.global.defaultColor,
                borderColor: defaults.global.defaultColor,
                borderSkipped: 'bottom',
                borderWidth: 0
            }
        }
    });

    function isVertical(bar) {
        return bar._view.width !== undefined;
    }

    /**
     * Helper function to get the bounds of the bar regardless of the orientation
     * @param bar {Chart.Element.Rectangle} the bar
     * @return {Bounds} bounds of the bar
     * @private
     */
    function getBarBounds(bar) {
        var vm = bar._view;
        var x1, x2, y1, y2;

        if (isVertical(bar)) {
            // vertical
            var halfWidth = vm.width / 2;
            x1 = vm.x - halfWidth;
            x2 = vm.x + halfWidth;
            y1 = Math.min(vm.y, vm.base);
            y2 = Math.max(vm.y, vm.base);
        } else {
            // horizontal bar
            var halfHeight = vm.height / 2;
            x1 = Math.min(vm.x, vm.base);
            x2 = Math.max(vm.x, vm.base);
            y1 = vm.y - halfHeight;
            y2 = vm.y + halfHeight;
        }

        return {
            left: x1,
            top: y1,
            right: x2,
            bottom: y2
        };
    }

    module.exports = Element.extend({
        draw: function () {
            var ctx = this._chart.ctx;
            var vm = this._view;
            var left, right, top, bottom, signX, signY, borderSkipped;
            var borderWidth = vm.borderWidth;

            if (!vm.horizontal) {
                // bar
                left = vm.x - vm.width / 2;
                right = vm.x + vm.width / 2;
                top = vm.y;
                bottom = vm.base;
                signX = 1;
                signY = bottom > top ? 1 : -1;
                borderSkipped = vm.borderSkipped || 'bottom';
            } else {
                // horizontal bar
                left = vm.base;
                right = vm.x;
                top = vm.y - vm.height / 2;
                bottom = vm.y + vm.height / 2;
                signX = right > left ? 1 : -1;
                signY = 1;
                borderSkipped = vm.borderSkipped || 'left';
            }

            // Canvas doesn't allow us to stroke inside the width so we can
            // adjust the sizes to fit if we're setting a stroke on the line
            if (borderWidth) {
                // borderWidth shold be less than bar width and bar height.
                var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
                borderWidth = borderWidth > barSize ? barSize : borderWidth;
                var halfStroke = borderWidth / 2;
                // Adjust borderWidth when bar top position is near vm.base(zero).
                var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
                var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
                var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
                var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
                // not become a vertical line?
                if (borderLeft !== borderRight) {
                    top = borderTop;
                    bottom = borderBottom;
                }
                // not become a horizontal line?
                if (borderTop !== borderBottom) {
                    left = borderLeft;
                    right = borderRight;
                }
            }

            ctx.beginPath();
            ctx.fillStyle = vm.backgroundColor;
            ctx.strokeStyle = vm.borderColor;
            ctx.lineWidth = borderWidth;

            // Corner points, from bottom-left to bottom-right clockwise
            // | 1 2 |
            // | 0 3 |
            var corners = [
                [left, bottom],
                [left, top],
                [right, top],
                [right, bottom]
            ];

            // Find first (starting) corner with fallback to 'bottom'
            var borders = ['bottom', 'left', 'top', 'right'];
            var startCorner = borders.indexOf(borderSkipped, 0);
            if (startCorner === -1) {
                startCorner = 0;
            }

            function cornerAt(index) {
                return corners[(startCorner + index) % 4];
            }

            // Draw rectangle from 'startCorner'
            var corner = cornerAt(0);
            ctx.moveTo(corner[0], corner[1]);

            for (var i = 1; i < 4; i++) {
                corner = cornerAt(i);
                ctx.lineTo(corner[0], corner[1]);
            }

            ctx.fill();
            if (borderWidth) {
                ctx.stroke();
            }
        },

        height: function () {
            var vm = this._view;
            return vm.base - vm.y;
        },

        inRange: function (mouseX, mouseY) {
            var inRange = false;

            if (this._view) {
                var bounds = getBarBounds(this);
                inRange = mouseX >= bounds.left && mouseX <= bounds.right && mouseY >= bounds.top && mouseY <= bounds.bottom;
            }

            return inRange;
        },

        inLabelRange: function (mouseX, mouseY) {
            var me = this;
            if (!me._view) {
                return false;
            }

            var inRange = false;
            var bounds = getBarBounds(me);

            if (isVertical(me)) {
                inRange = mouseX >= bounds.left && mouseX <= bounds.right;
            } else {
                inRange = mouseY >= bounds.top && mouseY <= bounds.bottom;
            }

            return inRange;
        },

        inXRange: function (mouseX) {
            var bounds = getBarBounds(this);
            return mouseX >= bounds.left && mouseX <= bounds.right;
        },

        inYRange: function (mouseY) {
            var bounds = getBarBounds(this);
            return mouseY >= bounds.top && mouseY <= bounds.bottom;
        },

        getCenterPoint: function () {
            var vm = this._view;
            var x, y;
            if (isVertical(this)) {
                x = vm.x;
                y = (vm.y + vm.base) / 2;
            } else {
                x = (vm.x + vm.base) / 2;
                y = vm.y;
            }

            return { x: x, y: y };
        },

        getArea: function () {
            var vm = this._view;
            return vm.width * Math.abs(vm.y - vm.base);
        },

        tooltipPosition: function () {
            var vm = this._view;
            return {
                x: vm.x,
                y: vm.y
            };
        }
    });
}, { "25": 25, "26": 26 }], 40: [function (require, module, exports) {
    'use strict';

    module.exports = {};
    module.exports.Arc = require(36);
    module.exports.Line = require(37);
    module.exports.Point = require(38);
    module.exports.Rectangle = require(39);
}, { "36": 36, "37": 37, "38": 38, "39": 39 }], 41: [function (require, module, exports) {
    'use strict';

    var helpers = require(42);

    /**
     * @namespace Chart.helpers.canvas
     */
    var exports = module.exports = {
        /**
         * Clears the entire canvas associated to the given `chart`.
         * @param {Chart} chart - The chart for which to clear the canvas.
         */
        clear: function (chart) {
            chart.ctx.clearRect(0, 0, chart.width, chart.height);
        },

        /**
         * Creates a "path" for a rectangle with rounded corners at position (x, y) with a
         * given size (width, height) and the same `radius` for all corners.
         * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
         * @param {Number} x - The x axis of the coordinate for the rectangle starting point.
         * @param {Number} y - The y axis of the coordinate for the rectangle starting point.
         * @param {Number} width - The rectangle's width.
         * @param {Number} height - The rectangle's height.
         * @param {Number} radius - The rounded amount (in pixels) for the four corners.
         * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
         */
        roundedRect: function (ctx, x, y, width, height, radius) {
            if (radius) {
                var rx = Math.min(radius, width / 2);
                var ry = Math.min(radius, height / 2);

                ctx.moveTo(x + rx, y);
                ctx.lineTo(x + width - rx, y);
                ctx.quadraticCurveTo(x + width, y, x + width, y + ry);
                ctx.lineTo(x + width, y + height - ry);
                ctx.quadraticCurveTo(x + width, y + height, x + width - rx, y + height);
                ctx.lineTo(x + rx, y + height);
                ctx.quadraticCurveTo(x, y + height, x, y + height - ry);
                ctx.lineTo(x, y + ry);
                ctx.quadraticCurveTo(x, y, x + rx, y);
            } else {
                ctx.rect(x, y, width, height);
            }
        },

        drawPoint: function (ctx, style, radius, x, y) {
            var type, edgeLength, xOffset, yOffset, height, size;

            if (style && typeof style === 'object') {
                type = style.toString();
                if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
                    ctx.drawImage(style, x - style.width / 2, y - style.height / 2, style.width, style.height);
                    return;
                }
            }

            if (isNaN(radius) || radius <= 0) {
                return;
            }

            switch (style) {
                // Default includes circle
                default:
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    ctx.closePath();
                    ctx.fill();
                    break;
                case 'triangle':
                    ctx.beginPath();
                    edgeLength = 3 * radius / Math.sqrt(3);
                    height = edgeLength * Math.sqrt(3) / 2;
                    ctx.moveTo(x - edgeLength / 2, y + height / 3);
                    ctx.lineTo(x + edgeLength / 2, y + height / 3);
                    ctx.lineTo(x, y - 2 * height / 3);
                    ctx.closePath();
                    ctx.fill();
                    break;
                case 'rect':
                    size = 1 / Math.SQRT2 * radius;
                    ctx.beginPath();
                    ctx.fillRect(x - size, y - size, 2 * size, 2 * size);
                    ctx.strokeRect(x - size, y - size, 2 * size, 2 * size);
                    break;
                case 'rectRounded':
                    var offset = radius / Math.SQRT2;
                    var leftX = x - offset;
                    var topY = y - offset;
                    var sideSize = Math.SQRT2 * radius;
                    ctx.beginPath();
                    this.roundedRect(ctx, leftX, topY, sideSize, sideSize, radius / 2);
                    ctx.closePath();
                    ctx.fill();
                    break;
                case 'rectRot':
                    size = 1 / Math.SQRT2 * radius;
                    ctx.beginPath();
                    ctx.moveTo(x - size, y);
                    ctx.lineTo(x, y + size);
                    ctx.lineTo(x + size, y);
                    ctx.lineTo(x, y - size);
                    ctx.closePath();
                    ctx.fill();
                    break;
                case 'cross':
                    ctx.beginPath();
                    ctx.moveTo(x, y + radius);
                    ctx.lineTo(x, y - radius);
                    ctx.moveTo(x - radius, y);
                    ctx.lineTo(x + radius, y);
                    ctx.closePath();
                    break;
                case 'crossRot':
                    ctx.beginPath();
                    xOffset = Math.cos(Math.PI / 4) * radius;
                    yOffset = Math.sin(Math.PI / 4) * radius;
                    ctx.moveTo(x - xOffset, y - yOffset);
                    ctx.lineTo(x + xOffset, y + yOffset);
                    ctx.moveTo(x - xOffset, y + yOffset);
                    ctx.lineTo(x + xOffset, y - yOffset);
                    ctx.closePath();
                    break;
                case 'star':
                    ctx.beginPath();
                    ctx.moveTo(x, y + radius);
                    ctx.lineTo(x, y - radius);
                    ctx.moveTo(x - radius, y);
                    ctx.lineTo(x + radius, y);
                    xOffset = Math.cos(Math.PI / 4) * radius;
                    yOffset = Math.sin(Math.PI / 4) * radius;
                    ctx.moveTo(x - xOffset, y - yOffset);
                    ctx.lineTo(x + xOffset, y + yOffset);
                    ctx.moveTo(x - xOffset, y + yOffset);
                    ctx.lineTo(x + xOffset, y - yOffset);
                    ctx.closePath();
                    break;
                case 'line':
                    ctx.beginPath();
                    ctx.moveTo(x - radius, y);
                    ctx.lineTo(x + radius, y);
                    ctx.closePath();
                    break;
                case 'dash':
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + radius, y);
                    ctx.closePath();
                    break;
            }

            ctx.stroke();
        },

        clipArea: function (ctx, area) {
            ctx.save();
            ctx.beginPath();
            ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
            ctx.clip();
        },

        unclipArea: function (ctx) {
            ctx.restore();
        },

        lineTo: function (ctx, previous, target, flip) {
            if (target.steppedLine) {
                if ((target.steppedLine === 'after' && !flip) || (target.steppedLine !== 'after' && flip)) {
                    ctx.lineTo(previous.x, target.y);
                } else {
                    ctx.lineTo(target.x, previous.y);
                }
                ctx.lineTo(target.x, target.y);
                return;
            }

            if (!target.tension) {
                ctx.lineTo(target.x, target.y);
                return;
            }

            ctx.bezierCurveTo(
                flip ? previous.controlPointPreviousX : previous.controlPointNextX,
                flip ? previous.controlPointPreviousY : previous.controlPointNextY,
                flip ? target.controlPointNextX : target.controlPointPreviousX,
                flip ? target.controlPointNextY : target.controlPointPreviousY,
                target.x,
                target.y);
        }
    };

    // DEPRECATIONS

    /**
     * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.
     * @namespace Chart.helpers.clear
     * @deprecated since version 2.7.0
     * @todo remove at version 3
     * @private
     */
    helpers.clear = exports.clear;

    /**
     * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.
     * @namespace Chart.helpers.drawRoundedRectangle
     * @deprecated since version 2.7.0
     * @todo remove at version 3
     * @private
     */
    helpers.drawRoundedRectangle = function (ctx) {
        ctx.beginPath();
        exports.roundedRect.apply(exports, arguments);
        ctx.closePath();
    };
}, { "42": 42 }], 42: [function (require, module, exports) {
    'use strict';

    /**
     * @namespace Chart.helpers
     */
    var helpers = {
        /**
         * An empty function that can be used, for example, for optional callback.
         */
        noop: function () { },

        /**
         * Returns a unique id, sequentially generated from a global variable.
         * @returns {Number}
         * @function
         */
        uid: (function () {
            var id = 0;
            return function () {
                return id++;
            };
        }()),

        /**
         * Returns true if `value` is neither null nor undefined, else returns false.
         * @param {*} value - The value to test.
         * @returns {Boolean}
         * @since 2.7.0
         */
        isNullOrUndef: function (value) {
            return value === null || typeof value === 'undefined';
        },

        /**
         * Returns true if `value` is an array, else returns false.
         * @param {*} value - The value to test.
         * @returns {Boolean}
         * @function
         */
        isArray: Array.isArray ? Array.isArray : function (value) {
            return Object.prototype.toString.call(value) === '[object Array]';
        },

        /**
         * Returns true if `value` is an object (excluding null), else returns false.
         * @param {*} value - The value to test.
         * @returns {Boolean}
         * @since 2.7.0
         */
        isObject: function (value) {
            return value !== null && Object.prototype.toString.call(value) === '[object Object]';
        },

        /**
         * Returns `value` if defined, else returns `defaultValue`.
         * @param {*} value - The value to return if defined.
         * @param {*} defaultValue - The value to return if `value` is undefined.
         * @returns {*}
         */
        valueOrDefault: function (value, defaultValue) {
            return typeof value === 'undefined' ? defaultValue : value;
        },

        /**
         * Returns value at the given `index` in array if defined, else returns `defaultValue`.
         * @param {Array} value - The array to lookup for value at `index`.
         * @param {Number} index - The index in `value` to lookup for value.
         * @param {*} defaultValue - The value to return if `value[index]` is undefined.
         * @returns {*}
         */
        valueAtIndexOrDefault: function (value, index, defaultValue) {
            return helpers.valueOrDefault(helpers.isArray(value) ? value[index] : value, defaultValue);
        },

        /**
         * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
         * value returned by `fn`. If `fn` is not a function, this method returns undefined.
         * @param {Function} fn - The function to call.
         * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
         * @param {Object} [thisArg] - The value of `this` provided for the call to `fn`.
         * @returns {*}
         */
        callback: function (fn, args, thisArg) {
            if (fn && typeof fn.call === 'function') {
                return fn.apply(thisArg, args);
            }
        },

        /**
         * Note(SB) for performance sake, this method should only be used when loopable type
         * is unknown or in none intensive code (not called often and small loopable). Else
         * it's preferable to use a regular for() loop and save extra function calls.
         * @param {Object|Array} loopable - The object or array to be iterated.
         * @param {Function} fn - The function to call for each item.
         * @param {Object} [thisArg] - The value of `this` provided for the call to `fn`.
         * @param {Boolean} [reverse] - If true, iterates backward on the loopable.
         */
        each: function (loopable, fn, thisArg, reverse) {
            var i, len, keys;
            if (helpers.isArray(loopable)) {
                len = loopable.length;
                if (reverse) {
                    for (i = len - 1; i >= 0; i--) {
                        fn.call(thisArg, loopable[i], i);
                    }
                } else {
                    for (i = 0; i < len; i++) {
                        fn.call(thisArg, loopable[i], i);
                    }
                }
            } else if (helpers.isObject(loopable)) {
                keys = Object.keys(loopable);
                len = keys.length;
                for (i = 0; i < len; i++) {
                    fn.call(thisArg, loopable[keys[i]], keys[i]);
                }
            }
        },

        /**
         * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
         * @see http://stackoverflow.com/a/14853974
         * @param {Array} a0 - The array to compare
         * @param {Array} a1 - The array to compare
         * @returns {Boolean}
         */
        arrayEquals: function (a0, a1) {
            var i, ilen, v0, v1;

            if (!a0 || !a1 || a0.length !== a1.length) {
                return false;
            }

            for (i = 0, ilen = a0.length; i < ilen; ++i) {
                v0 = a0[i];
                v1 = a1[i];

                if (v0 instanceof Array && v1 instanceof Array) {
                    if (!helpers.arrayEquals(v0, v1)) {
                        return false;
                    }
                } else if (v0 !== v1) {
                    // NOTE: two different object instances will never be equal: {x:20} != {x:20}
                    return false;
                }
            }

            return true;
        },

        /**
         * Returns a deep copy of `source` without keeping references on objects and arrays.
         * @param {*} source - The value to clone.
         * @returns {*}
         */
        clone: function (source) {
            if (helpers.isArray(source)) {
                return source.map(helpers.clone);
            }

            if (helpers.isObject(source)) {
                var target = {};
                var keys = Object.keys(source);
                var klen = keys.length;
                var k = 0;

                for (; k < klen; ++k) {
                    target[keys[k]] = helpers.clone(source[keys[k]]);
                }

                return target;
            }

            return source;
        },

        /**
         * The default merger when Chart.helpers.merge is called without merger option.
         * Note(SB): this method is also used by configMerge and scaleMerge as fallback.
         * @private
         */
        _merger: function (key, target, source, options) {
            var tval = target[key];
            var sval = source[key];

            if (helpers.isObject(tval) && helpers.isObject(sval)) {
                helpers.merge(tval, sval, options);
            } else {
                target[key] = helpers.clone(sval);
            }
        },

        /**
         * Merges source[key] in target[key] only if target[key] is undefined.
         * @private
         */
        _mergerIf: function (key, target, source) {
            var tval = target[key];
            var sval = source[key];

            if (helpers.isObject(tval) && helpers.isObject(sval)) {
                helpers.mergeIf(tval, sval);
            } else if (!target.hasOwnProperty(key)) {
                target[key] = helpers.clone(sval);
            }
        },

        /**
         * Recursively deep copies `source` properties into `target` with the given `options`.
         * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
         * @param {Object} target - The target object in which all sources are merged into.
         * @param {Object|Array(Object)} source - Object(s) to merge into `target`.
         * @param {Object} [options] - Merging options:
         * @param {Function} [options.merger] - The merge method (key, target, source, options)
         * @returns {Object} The `target` object.
         */
        merge: function (target, source, options) {
            var sources = helpers.isArray(source) ? source : [source];
            var ilen = sources.length;
            var merge, i, keys, klen, k;

            if (!helpers.isObject(target)) {
                return target;
            }

            options = options || {};
            merge = options.merger || helpers._merger;

            for (i = 0; i < ilen; ++i) {
                source = sources[i];
                if (!helpers.isObject(source)) {
                    continue;
                }

                keys = Object.keys(source);
                for (k = 0, klen = keys.length; k < klen; ++k) {
                    merge(keys[k], target, source, options);
                }
            }

            return target;
        },

        /**
         * Recursively deep copies `source` properties into `target` *only* if not defined in target.
         * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
         * @param {Object} target - The target object in which all sources are merged into.
         * @param {Object|Array(Object)} source - Object(s) to merge into `target`.
         * @returns {Object} The `target` object.
         */
        mergeIf: function (target, source) {
            return helpers.merge(target, source, { merger: helpers._mergerIf });
        },

        /**
         * Applies the contents of two or more objects together into the first object.
         * @param {Object} target - The target object in which all objects are merged into.
         * @param {Object} arg1 - Object containing additional properties to merge in target.
         * @param {Object} argN - Additional objects containing properties to merge in target.
         * @returns {Object} The `target` object.
         */
        extend: function (target) {
            var setFn = function (value, key) {
                target[key] = value;
            };
            for (var i = 1, ilen = arguments.length; i < ilen; ++i) {
                helpers.each(arguments[i], setFn);
            }
            return target;
        },

        /**
         * Basic javascript inheritance based on the model created in Backbone.js
         */
        inherits: function (extensions) {
            var me = this;
            var ChartElement = (extensions && extensions.hasOwnProperty('constructor')) ? extensions.constructor : function () {
                return me.apply(this, arguments);
            };

            var Surrogate = function () {
                this.constructor = ChartElement;
            };

            Surrogate.prototype = me.prototype;
            ChartElement.prototype = new Surrogate();
            ChartElement.extend = helpers.inherits;

            if (extensions) {
                helpers.extend(ChartElement.prototype, extensions);
            }

            ChartElement.__super__ = me.prototype;
            return ChartElement;
        }
    };

    module.exports = helpers;

    // DEPRECATIONS

    /**
     * Provided for backward compatibility, use Chart.helpers.callback instead.
     * @function Chart.helpers.callCallback
     * @deprecated since version 2.6.0
     * @todo remove at version 3
     * @private
     */
    helpers.callCallback = helpers.callback;

    /**
     * Provided for backward compatibility, use Array.prototype.indexOf instead.
     * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
     * @function Chart.helpers.indexOf
     * @deprecated since version 2.7.0
     * @todo remove at version 3
     * @private
     */
    helpers.indexOf = function (array, item, fromIndex) {
        return Array.prototype.indexOf.call(array, item, fromIndex);
    };

    /**
     * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
     * @function Chart.helpers.getValueOrDefault
     * @deprecated since version 2.7.0
     * @todo remove at version 3
     * @private
     */
    helpers.getValueOrDefault = helpers.valueOrDefault;

    /**
     * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
     * @function Chart.helpers.getValueAtIndexOrDefault
     * @deprecated since version 2.7.0
     * @todo remove at version 3
     * @private
     */
    helpers.getValueAtIndexOrDefault = helpers.valueAtIndexOrDefault;
}, {}], 43: [function (require, module, exports) {
    'use strict';

    var helpers = require(42);

    /**
     * Easing functions adapted from Robert Penner's easing equations.
     * @namespace Chart.helpers.easingEffects
     * @see http://www.robertpenner.com/easing/
     */
    var effects = {
        linear: function (t) {
            return t;
        },

        easeInQuad: function (t) {
            return t * t;
        },

        easeOutQuad: function (t) {
            return -t * (t - 2);
        },

        easeInOutQuad: function (t) {
            if ((t /= 0.5) < 1) {
                return 0.5 * t * t;
            }
            return -0.5 * ((--t) * (t - 2) - 1);
        },

        easeInCubic: function (t) {
            return t * t * t;
        },

        easeOutCubic: function (t) {
            return (t = t - 1) * t * t + 1;
        },

        easeInOutCubic: function (t) {
            if ((t /= 0.5) < 1) {
                return 0.5 * t * t * t;
            }
            return 0.5 * ((t -= 2) * t * t + 2);
        },

        easeInQuart: function (t) {
            return t * t * t * t;
        },

        easeOutQuart: function (t) {
            return -((t = t - 1) * t * t * t - 1);
        },

        easeInOutQuart: function (t) {
            if ((t /= 0.5) < 1) {
                return 0.5 * t * t * t * t;
            }
            return -0.5 * ((t -= 2) * t * t * t - 2);
        },

        easeInQuint: function (t) {
            return t * t * t * t * t;
        },

        easeOutQuint: function (t) {
            return (t = t - 1) * t * t * t * t + 1;
        },

        easeInOutQuint: function (t) {
            if ((t /= 0.5) < 1) {
                return 0.5 * t * t * t * t * t;
            }
            return 0.5 * ((t -= 2) * t * t * t * t + 2);
        },

        easeInSine: function (t) {
            return -Math.cos(t * (Math.PI / 2)) + 1;
        },

        easeOutSine: function (t) {
            return Math.sin(t * (Math.PI / 2));
        },

        easeInOutSine: function (t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
        },

        easeInExpo: function (t) {
            return (t === 0) ? 0 : Math.pow(2, 10 * (t - 1));
        },

        easeOutExpo: function (t) {
            return (t === 1) ? 1 : -Math.pow(2, -10 * t) + 1;
        },

        easeInOutExpo: function (t) {
            if (t === 0) {
                return 0;
            }
            if (t === 1) {
                return 1;
            }
            if ((t /= 0.5) < 1) {
                return 0.5 * Math.pow(2, 10 * (t - 1));
            }
            return 0.5 * (-Math.pow(2, -10 * --t) + 2);
        },

        easeInCirc: function (t) {
            if (t >= 1) {
                return t;
            }
            return -(Math.sqrt(1 - t * t) - 1);
        },

        easeOutCirc: function (t) {
            return Math.sqrt(1 - (t = t - 1) * t);
        },

        easeInOutCirc: function (t) {
            if ((t /= 0.5) < 1) {
                return -0.5 * (Math.sqrt(1 - t * t) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },

        easeInElastic: function (t) {
            var s = 1.70158;
            var p = 0;
            var a = 1;
            if (t === 0) {
                return 0;
            }
            if (t === 1) {
                return 1;
            }
            if (!p) {
                p = 0.3;
            }
            if (a < 1) {
                a = 1;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(1 / a);
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
        },

        easeOutElastic: function (t) {
            var s = 1.70158;
            var p = 0;
            var a = 1;
            if (t === 0) {
                return 0;
            }
            if (t === 1) {
                return 1;
            }
            if (!p) {
                p = 0.3;
            }
            if (a < 1) {
                a = 1;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(1 / a);
            }
            return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
        },

        easeInOutElastic: function (t) {
            var s = 1.70158;
            var p = 0;
            var a = 1;
            if (t === 0) {
                return 0;
            }
            if ((t /= 0.5) === 2) {
                return 1;
            }
            if (!p) {
                p = 0.45;
            }
            if (a < 1) {
                a = 1;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(1 / a);
            }
            if (t < 1) {
                return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
            }
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
        },
        easeInBack: function (t) {
            var s = 1.70158;
            return t * t * ((s + 1) * t - s);
        },

        easeOutBack: function (t) {
            var s = 1.70158;
            return (t = t - 1) * t * ((s + 1) * t + s) + 1;
        },

        easeInOutBack: function (t) {
            var s = 1.70158;
            if ((t /= 0.5) < 1) {
                return 0.5 * (t * t * (((s *= (1.525)) + 1) * t - s));
            }
            return 0.5 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
        },

        easeInBounce: function (t) {
            return 1 - effects.easeOutBounce(1 - t);
        },

        easeOutBounce: function (t) {
            if (t < (1 / 2.75)) {
                return 7.5625 * t * t;
            }
            if (t < (2 / 2.75)) {
                return 7.5625 * (t -= (1.5 / 2.75)) * t + 0.75;
            }
            if (t < (2.5 / 2.75)) {
                return 7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375;
            }
            return 7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375;
        },

        easeInOutBounce: function (t) {
            if (t < 0.5) {
                return effects.easeInBounce(t * 2) * 0.5;
            }
            return effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
        }
    };

    module.exports = {
        effects: effects
    };

    // DEPRECATIONS

    /**
     * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
     * @function Chart.helpers.easingEffects
     * @deprecated since version 2.7.0
     * @todo remove at version 3
     * @private
     */
    helpers.easingEffects = effects;
}, { "42": 42 }], 44: [function (require, module, exports) {
    'use strict';

    var helpers = require(42);

    /**
     * @alias Chart.helpers.options
     * @namespace
     */
    module.exports = {
        /**
         * Converts the given line height `value` in pixels for a specific font `size`.
         * @param {Number|String} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
         * @param {Number} size - The font size (in pixels) used to resolve relative `value`.
         * @returns {Number} The effective line height in pixels (size * 1.2 if value is invalid).
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
         * @since 2.7.0
         */
        toLineHeight: function (value, size) {
            var matches = ('' + value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
            if (!matches || matches[1] === 'normal') {
                return size * 1.2;
            }

            value = +matches[2];

            switch (matches[3]) {
                case 'px':
                    return value;
                case '%':
                    value /= 100;
                    break;
                default:
                    break;
            }

            return size * value;
        },

        /**
         * Converts the given value into a padding object with pre-computed width/height.
         * @param {Number|Object} value - If a number, set the value to all TRBL component,
         *  else, if and object, use defined properties and sets undefined ones to 0.
         * @returns {Object} The padding values (top, right, bottom, left, width, height)
         * @since 2.7.0
         */
        toPadding: function (value) {
            var t, r, b, l;

            if (helpers.isObject(value)) {
                t = +value.top || 0;
                r = +value.right || 0;
                b = +value.bottom || 0;
                l = +value.left || 0;
            } else {
                t = r = b = l = +value || 0;
            }

            return {
                top: t,
                right: r,
                bottom: b,
                left: l,
                height: t + b,
                width: l + r
            };
        },

        /**
         * Evaluates the given `inputs` sequentially and returns the first defined value.
         * @param {Array[]} inputs - An array of values, falling back to the last value.
         * @param {Object} [context] - If defined and the current value is a function, the value
         * is called with `context` as first argument and the result becomes the new input.
         * @param {Number} [index] - If defined and the current value is an array, the value
         * at `index` become the new input.
         * @since 2.7.0
         */
        resolve: function (inputs, context, index) {
            var i, ilen, value;

            for (i = 0, ilen = inputs.length; i < ilen; ++i) {
                value = inputs[i];
                if (value === undefined) {
                    continue;
                }
                if (context !== undefined && typeof value === 'function') {
                    value = value(context);
                }
                if (index !== undefined && helpers.isArray(value)) {
                    value = value[index];
                }
                if (value !== undefined) {
                    return value;
                }
            }
        }
    };
}, { "42": 42 }], 45: [function (require, module, exports) {
    'use strict';

    module.exports = require(42);
    module.exports.easing = require(43);
    module.exports.canvas = require(41);
    module.exports.options = require(44);
}, { "41": 41, "42": 42, "43": 43, "44": 44 }], 46: [function (require, module, exports) {
    /**
     * Platform fallback implementation (minimal).
     * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
     */

    module.exports = {
        acquireContext: function (item) {
            if (item && item.canvas) {
                // Support for any object associated to a canvas (including a context2d)
                item = item.canvas;
            }

            return item && item.getContext('2d') || null;
        }
    };
}, {}], 47: [function (require, module, exports) {
    /**
     * Chart.Platform implementation for targeting a web browser
     */

    'use strict';

    var helpers = require(45);

    var EXPANDO_KEY = '$chartjs';
    var CSS_PREFIX = 'chartjs-';
    var CSS_RENDER_MONITOR = CSS_PREFIX + 'render-monitor';
    var CSS_RENDER_ANIMATION = CSS_PREFIX + 'render-animation';
    var ANIMATION_START_EVENTS = ['animationstart', 'webkitAnimationStart'];

    /**
     * DOM event types -> Chart.js event types.
     * Note: only events with different types are mapped.
     * @see https://developer.mozilla.org/en-US/docs/Web/Events
     */
    var EVENT_TYPES = {
        touchstart: 'mousedown',
        touchmove: 'mousemove',
        touchend: 'mouseup',
        pointerenter: 'mouseenter',
        pointerdown: 'mousedown',
        pointermove: 'mousemove',
        pointerup: 'mouseup',
        pointerleave: 'mouseout',
        pointerout: 'mouseout'
    };

    /**
     * The "used" size is the final value of a dimension property after all calculations have
     * been performed. This method uses the computed style of `element` but returns undefined
     * if the computed style is not expressed in pixels. That can happen in some cases where
     * `element` has a size relative to its parent and this last one is not yet displayed,
     * for example because of `display: none` on a parent node.
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
     * @returns {Number} Size in pixels or undefined if unknown.
     */
    function readUsedSize(element, property) {
        var value = helpers.getStyle(element, property);
        var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
        return matches ? Number(matches[1]) : undefined;
    }

    /**
     * Initializes the canvas style and render size without modifying the canvas display size,
     * since responsiveness is handled by the controller.resize() method. The config is used
     * to determine the aspect ratio to apply in case no explicit height has been specified.
     */
    function initCanvas(canvas, config) {
        var style = canvas.style;

        // NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
        // returns null or '' if no explicit value has been set to the canvas attribute.
        var renderHeight = canvas.getAttribute('height');
        var renderWidth = canvas.getAttribute('width');

        // Chart.js modifies some canvas values that we want to restore on destroy
        canvas[EXPANDO_KEY] = {
            initial: {
                height: renderHeight,
                width: renderWidth,
                style: {
                    display: style.display,
                    height: style.height,
                    width: style.width
                }
            }
        };

        // Force canvas to display as block to avoid extra space caused by inline
        // elements, which would interfere with the responsive resize process.
        // https://github.com/chartjs/Chart.js/issues/2538
        style.display = style.display || 'block';

        if (renderWidth === null || renderWidth === '') {
            var displayWidth = readUsedSize(canvas, 'width');
            if (displayWidth !== undefined) {
                canvas.width = displayWidth;
            }
        }

        if (renderHeight === null || renderHeight === '') {
            if (canvas.style.height === '') {
                // If no explicit render height and style height, let's apply the aspect ratio,
                // which one can be specified by the user but also by charts as default option
                // (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
                canvas.height = canvas.width / (config.options.aspectRatio || 2);
            } else {
                var displayHeight = readUsedSize(canvas, 'height');
                if (displayWidth !== undefined) {
                    canvas.height = displayHeight;
                }
            }
        }

        return canvas;
    }

    /**
     * Detects support for options object argument in addEventListener.
     * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
     * @private
     */
    var supportsEventListenerOptions = (function () {
        var supports = false;
        try {
            var options = Object.defineProperty({}, 'passive', {
                get: function () {
                    supports = true;
                }
            });
            window.addEventListener('e', null, options);
        } catch (e) {
            // continue regardless of error
        }
        return supports;
    }());

    // Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
    // https://github.com/chartjs/Chart.js/issues/4287
    var eventListenerOptions = supportsEventListenerOptions ? { passive: true } : false;

    function addEventListener(node, type, listener) {
        node.addEventListener(type, listener, eventListenerOptions);
    }

    function removeEventListener(node, type, listener) {
        node.removeEventListener(type, listener, eventListenerOptions);
    }

    function createEvent(type, chart, x, y, nativeEvent) {
        return {
            type: type,
            chart: chart,
            native: nativeEvent || null,
            x: x !== undefined ? x : null,
            y: y !== undefined ? y : null,
        };
    }

    function fromNativeEvent(event, chart) {
        var type = EVENT_TYPES[event.type] || event.type;
        var pos = helpers.getRelativePosition(event, chart);
        return createEvent(type, chart, pos.x, pos.y, event);
    }

    function throttled(fn, thisArg) {
        var ticking = false;
        var args = [];

        return function () {
            args = Array.prototype.slice.call(arguments);
            thisArg = thisArg || this;

            if (!ticking) {
                ticking = true;
                helpers.requestAnimFrame.call(window, function () {
                    ticking = false;
                    fn.apply(thisArg, args);
                });
            }
        };
    }

    // Implementation based on https://github.com/marcj/css-element-queries
    function createResizer(handler) {
        var resizer = document.createElement('div');
        var cls = CSS_PREFIX + 'size-monitor';
        var maxSize = 1000000;
        var style =
            'position:absolute;' +
            'left:0;' +
            'top:0;' +
            'right:0;' +
            'bottom:0;' +
            'overflow:hidden;' +
            'pointer-events:none;' +
            'visibility:hidden;' +
            'z-index:-1;';

        resizer.style.cssText = style;
        resizer.className = cls;
        resizer.innerHTML =
            '<div class="' + cls + '-expand" style="' + style + '">' +
            '<div style="' +
            'position:absolute;' +
            'width:' + maxSize + 'px;' +
            'height:' + maxSize + 'px;' +
            'left:0;' +
            'top:0">' +
            '</div>' +
            '</div>' +
            '<div class="' + cls + '-shrink" style="' + style + '">' +
            '<div style="' +
            'position:absolute;' +
            'width:200%;' +
            'height:200%;' +
            'left:0; ' +
            'top:0">' +
            '</div>' +
            '</div>';

        var expand = resizer.childNodes[0];
        var shrink = resizer.childNodes[1];

        resizer._reset = function () {
            expand.scrollLeft = maxSize;
            expand.scrollTop = maxSize;
            shrink.scrollLeft = maxSize;
            shrink.scrollTop = maxSize;
        };
        var onScroll = function () {
            resizer._reset();
            handler();
        };

        addEventListener(expand, 'scroll', onScroll.bind(expand, 'expand'));
        addEventListener(shrink, 'scroll', onScroll.bind(shrink, 'shrink'));

        return resizer;
    }

    // https://davidwalsh.name/detect-node-insertion
    function watchForRender(node, handler) {
        var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});
        var proxy = expando.renderProxy = function (e) {
            if (e.animationName === CSS_RENDER_ANIMATION) {
                handler();
            }
        };

        helpers.each(ANIMATION_START_EVENTS, function (type) {
            addEventListener(node, type, proxy);
        });

        // #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
        // is removed then added back immediately (same animation frame?). Accessing the
        // `offsetParent` property will force a reflow and re-evaluate the CSS animation.
        // https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
        // https://github.com/chartjs/Chart.js/issues/4737
        expando.reflow = !!node.offsetParent;

        node.classList.add(CSS_RENDER_MONITOR);
    }

    function unwatchForRender(node) {
        var expando = node[EXPANDO_KEY] || {};
        var proxy = expando.renderProxy;

        if (proxy) {
            helpers.each(ANIMATION_START_EVENTS, function (type) {
                removeEventListener(node, type, proxy);
            });

            delete expando.renderProxy;
        }

        node.classList.remove(CSS_RENDER_MONITOR);
    }

    function addResizeListener(node, listener, chart) {
        var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});

        // Let's keep track of this added resizer and thus avoid DOM query when removing it.
        var resizer = expando.resizer = createResizer(throttled(function () {
            if (expando.resizer) {
                return listener(createEvent('resize', chart));
            }
        }));

        // The resizer needs to be attached to the node parent, so we first need to be
        // sure that `node` is attached to the DOM before injecting the resizer element.
        watchForRender(node, function () {
            if (expando.resizer) {
                var container = node.parentNode;
                if (container && container !== resizer.parentNode) {
                    container.insertBefore(resizer, container.firstChild);
                }

                // The container size might have changed, let's reset the resizer state.
                resizer._reset();
            }
        });
    }

    function removeResizeListener(node) {
        var expando = node[EXPANDO_KEY] || {};
        var resizer = expando.resizer;

        delete expando.resizer;
        unwatchForRender(node);

        if (resizer && resizer.parentNode) {
            resizer.parentNode.removeChild(resizer);
        }
    }

    function injectCSS(platform, css) {
        // http://stackoverflow.com/q/3922139
        var style = platform._style || document.createElement('style');
        if (!platform._style) {
            platform._style = style;
            css = '/* Chart.js */\n' + css;
            style.setAttribute('type', 'text/css');
            document.getElementsByTagName('head')[0].appendChild(style);
        }

        style.appendChild(document.createTextNode(css));
    }

    module.exports = {
        /**
         * This property holds whether this platform is enabled for the current environment.
         * Currently used by platform.js to select the proper implementation.
         * @private
         */
        _enabled: typeof window !== 'undefined' && typeof document !== 'undefined',

        initialize: function () {
            var keyframes = 'from{opacity:0.99}to{opacity:1}';

            injectCSS(this,
                // DOM rendering detection
                // https://davidwalsh.name/detect-node-insertion
                '@-webkit-keyframes ' + CSS_RENDER_ANIMATION + '{' + keyframes + '}' +
                '@keyframes ' + CSS_RENDER_ANIMATION + '{' + keyframes + '}' +
                '.' + CSS_RENDER_MONITOR + '{' +
                '-webkit-animation:' + CSS_RENDER_ANIMATION + ' 0.001s;' +
                'animation:' + CSS_RENDER_ANIMATION + ' 0.001s;' +
                '}'
            );
        },

        acquireContext: function (item, config) {
            if (typeof item === 'string') {
                item = document.getElementById(item);
            } else if (item.length) {
                // Support for array based queries (such as jQuery)
                item = item[0];
            }

            if (item && item.canvas) {
                // Support for any object associated to a canvas (including a context2d)
                item = item.canvas;
            }

            // To prevent canvas fingerprinting, some add-ons undefine the getContext
            // method, for example: https://github.com/kkapsner/CanvasBlocker
            // https://github.com/chartjs/Chart.js/issues/2807
            var context = item && item.getContext && item.getContext('2d');

            // `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
            // inside an iframe or when running in a protected environment. We could guess the
            // types from their toString() value but let's keep things flexible and assume it's
            // a sufficient condition if the item has a context2D which has item as `canvas`.
            // https://github.com/chartjs/Chart.js/issues/3887
            // https://github.com/chartjs/Chart.js/issues/4102
            // https://github.com/chartjs/Chart.js/issues/4152
            if (context && context.canvas === item) {
                initCanvas(item, config);
                return context;
            }

            return null;
        },

        releaseContext: function (context) {
            var canvas = context.canvas;
            if (!canvas[EXPANDO_KEY]) {
                return;
            }

            var initial = canvas[EXPANDO_KEY].initial;
            ['height', 'width'].forEach(function (prop) {
                var value = initial[prop];
                if (helpers.isNullOrUndef(value)) {
                    canvas.removeAttribute(prop);
                } else {
                    canvas.setAttribute(prop, value);
                }
            });

            helpers.each(initial.style || {}, function (value, key) {
                canvas.style[key] = value;
            });

            // The canvas render size might have been changed (and thus the state stack discarded),
            // we can't use save() and restore() to restore the initial state. So make sure that at
            // least the canvas context is reset to the default state by setting the canvas width.
            // https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
            canvas.width = canvas.width;

            delete canvas[EXPANDO_KEY];
        },

        addEventListener: function (chart, type, listener) {
            var canvas = chart.canvas;
            if (type === 'resize') {
                // Note: the resize event is not supported on all browsers.
                addResizeListener(canvas, listener, chart);
                return;
            }

            var expando = listener[EXPANDO_KEY] || (listener[EXPANDO_KEY] = {});
            var proxies = expando.proxies || (expando.proxies = {});
            var proxy = proxies[chart.id + '_' + type] = function (event) {
                listener(fromNativeEvent(event, chart));
            };

            addEventListener(canvas, type, proxy);
        },

        removeEventListener: function (chart, type, listener) {
            var canvas = chart.canvas;
            if (type === 'resize') {
                // Note: the resize event is not supported on all browsers.
                removeResizeListener(canvas, listener);
                return;
            }

            var expando = listener[EXPANDO_KEY] || {};
            var proxies = expando.proxies || {};
            var proxy = proxies[chart.id + '_' + type];
            if (!proxy) {
                return;
            }

            removeEventListener(canvas, type, proxy);
        }
    };

    // DEPRECATIONS

    /**
     * Provided for backward compatibility, use EventTarget.addEventListener instead.
     * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
     * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
     * @function Chart.helpers.addEvent
     * @deprecated since version 2.7.0
     * @todo remove at version 3
     * @private
     */
    helpers.addEvent = addEventListener;

    /**
     * Provided for backward compatibility, use EventTarget.removeEventListener instead.
     * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
     * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
     * @function Chart.helpers.removeEvent
     * @deprecated since version 2.7.0
     * @todo remove at version 3
     * @private
     */
    helpers.removeEvent = removeEventListener;
}, { "45": 45 }], 48: [function (require, module, exports) {
    'use strict';

    var helpers = require(45);
    var basic = require(46);
    var dom = require(47);

    // @TODO Make possible to select another platform at build time.
    var implementation = dom._enabled ? dom : basic;

    /**
     * @namespace Chart.platform
     * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
     * @since 2.4.0
     */
    module.exports = helpers.extend({
        /**
         * @since 2.7.0
         */
        initialize: function () { },

        /**
         * Called at chart construction time, returns a context2d instance implementing
         * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
         * @param {*} item - The native item from which to acquire context (platform specific)
         * @param {Object} options - The chart options
         * @returns {CanvasRenderingContext2D} context2d instance
         */
        acquireContext: function () { },

        /**
         * Called at chart destruction time, releases any resources associated to the context
         * previously returned by the acquireContext() method.
         * @param {CanvasRenderingContext2D} context - The context2d instance
         * @returns {Boolean} true if the method succeeded, else false
         */
        releaseContext: function () { },

        /**
         * Registers the specified listener on the given chart.
         * @param {Chart} chart - Chart from which to listen for event
         * @param {String} type - The ({@link IEvent}) type to listen for
         * @param {Function} listener - Receives a notification (an object that implements
         * the {@link IEvent} interface) when an event of the specified type occurs.
         */
        addEventListener: function () { },

        /**
         * Removes the specified listener previously registered with addEventListener.
         * @param {Chart} chart -Chart from which to remove the listener
         * @param {String} type - The ({@link IEvent}) type to remove
         * @param {Function} listener - The listener function to remove from the event target.
         */
        removeEventListener: function () { }
    }, implementation);

    /**
     * @interface IPlatform
     * Allows abstracting platform dependencies away from the chart
     * @borrows Chart.platform.acquireContext as acquireContext
     * @borrows Chart.platform.releaseContext as releaseContext
     * @borrows Chart.platform.addEventListener as addEventListener
     * @borrows Chart.platform.removeEventListener as removeEventListener
     */

    /**
     * @interface IEvent
     * @prop {String} type - The event type name, possible values are:
     * 'contextmenu', 'mouseenter', 'mousedown', 'mousemove', 'mouseup', 'mouseout',
     * 'click', 'dblclick', 'keydown', 'keypress', 'keyup' and 'resize'
     * @prop {*} native - The original native event (null for emulated events, e.g. 'resize')
     * @prop {Number} x - The mouse x position, relative to the canvas (null for incompatible events)
     * @prop {Number} y - The mouse y position, relative to the canvas (null for incompatible events)
     */
}, { "45": 45, "46": 46, "47": 47 }], 49: [function (require, module, exports) {
    /**
     * Plugin based on discussion from the following Chart.js issues:
     * @see https://github.com/chartjs/Chart.js/issues/2380#issuecomment-279961569
     * @see https://github.com/chartjs/Chart.js/issues/2440#issuecomment-256461897
     */

    'use strict';

    var defaults = require(25);
    var elements = require(40);
    var helpers = require(45);

    defaults._set('global', {
        plugins: {
            filler: {
                propagate: true
            }
        }
    });

    module.exports = function () {
        var mappers = {
            dataset: function (source) {
                var index = source.fill;
                var chart = source.chart;
                var meta = chart.getDatasetMeta(index);
                var visible = meta && chart.isDatasetVisible(index);
                var points = (visible && meta.dataset._children) || [];
                var length = points.length || 0;

                return !length ? null : function (point, i) {
                    return (i < length && points[i]._view) || null;
                };
            },

            boundary: function (source) {
                var boundary = source.boundary;
                var x = boundary ? boundary.x : null;
                var y = boundary ? boundary.y : null;

                return function (point) {
                    return {
                        x: x === null ? point.x : x,
                        y: y === null ? point.y : y,
                    };
                };
            }
        };

        // @todo if (fill[0] === '#')
        function decodeFill(el, index, count) {
            var model = el._model || {};
            var fill = model.fill;
            var target;

            if (fill === undefined) {
                fill = !!model.backgroundColor;
            }

            if (fill === false || fill === null) {
                return false;
            }

            if (fill === true) {
                return 'origin';
            }

            target = parseFloat(fill, 10);
            if (isFinite(target) && Math.floor(target) === target) {
                if (fill[0] === '-' || fill[0] === '+') {
                    target = index + target;
                }

                if (target === index || target < 0 || target >= count) {
                    return false;
                }

                return target;
            }

            switch (fill) {
                // compatibility
                case 'bottom':
                    return 'start';
                case 'top':
                    return 'end';
                case 'zero':
                    return 'origin';
                // supported boundaries
                case 'origin':
                case 'start':
                case 'end':
                    return fill;
                // invalid fill values
                default:
                    return false;
            }
        }

        function computeBoundary(source) {
            var model = source.el._model || {};
            var scale = source.el._scale || {};
            var fill = source.fill;
            var target = null;
            var horizontal;

            if (isFinite(fill)) {
                return null;
            }

            // Backward compatibility: until v3, we still need to support boundary values set on
            // the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
            // controllers might still use it (e.g. the Smith chart).

            if (fill === 'start') {
                target = model.scaleBottom === undefined ? scale.bottom : model.scaleBottom;
            } else if (fill === 'end') {
                target = model.scaleTop === undefined ? scale.top : model.scaleTop;
            } else if (model.scaleZero !== undefined) {
                target = model.scaleZero;
            } else if (scale.getBasePosition) {
                target = scale.getBasePosition();
            } else if (scale.getBasePixel) {
                target = scale.getBasePixel();
            }

            if (target !== undefined && target !== null) {
                if (target.x !== undefined && target.y !== undefined) {
                    return target;
                }

                if (typeof target === 'number' && isFinite(target)) {
                    horizontal = scale.isHorizontal();
                    return {
                        x: horizontal ? target : null,
                        y: horizontal ? null : target
                    };
                }
            }

            return null;
        }

        function resolveTarget(sources, index, propagate) {
            var source = sources[index];
            var fill = source.fill;
            var visited = [index];
            var target;

            if (!propagate) {
                return fill;
            }

            while (fill !== false && visited.indexOf(fill) === -1) {
                if (!isFinite(fill)) {
                    return fill;
                }

                target = sources[fill];
                if (!target) {
                    return false;
                }

                if (target.visible) {
                    return fill;
                }

                visited.push(fill);
                fill = target.fill;
            }

            return false;
        }

        function createMapper(source) {
            var fill = source.fill;
            var type = 'dataset';

            if (fill === false) {
                return null;
            }

            if (!isFinite(fill)) {
                type = 'boundary';
            }

            return mappers[type](source);
        }

        function isDrawable(point) {
            return point && !point.skip;
        }

        function drawArea(ctx, curve0, curve1, len0, len1) {
            var i;

            if (!len0 || !len1) {
                return;
            }

            // building first area curve (normal)
            ctx.moveTo(curve0[0].x, curve0[0].y);
            for (i = 1; i < len0; ++i) {
                helpers.canvas.lineTo(ctx, curve0[i - 1], curve0[i]);
            }

            // joining the two area curves
            ctx.lineTo(curve1[len1 - 1].x, curve1[len1 - 1].y);

            // building opposite area curve (reverse)
            for (i = len1 - 1; i > 0; --i) {
                helpers.canvas.lineTo(ctx, curve1[i], curve1[i - 1], true);
            }
        }

        function doFill(ctx, points, mapper, view, color, loop) {
            var count = points.length;
            var span = view.spanGaps;
            var curve0 = [];
            var curve1 = [];
            var len0 = 0;
            var len1 = 0;
            var i, ilen, index, p0, p1, d0, d1;

            ctx.beginPath();

            for (i = 0, ilen = (count + !!loop); i < ilen; ++i) {
                index = i % count;
                p0 = points[index]._view;
                p1 = mapper(p0, index, view);
                d0 = isDrawable(p0);
                d1 = isDrawable(p1);

                if (d0 && d1) {
                    len0 = curve0.push(p0);
                    len1 = curve1.push(p1);
                } else if (len0 && len1) {
                    if (!span) {
                        drawArea(ctx, curve0, curve1, len0, len1);
                        len0 = len1 = 0;
                        curve0 = [];
                        curve1 = [];
                    } else {
                        if (d0) {
                            curve0.push(p0);
                        }
                        if (d1) {
                            curve1.push(p1);
                        }
                    }
                }
            }

            drawArea(ctx, curve0, curve1, len0, len1);

            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        }

        return {
            id: 'filler',

            afterDatasetsUpdate: function (chart, options) {
                var count = (chart.data.datasets || []).length;
                var propagate = options.propagate;
                var sources = [];
                var meta, i, el, source;

                for (i = 0; i < count; ++i) {
                    meta = chart.getDatasetMeta(i);
                    el = meta.dataset;
                    source = null;

                    if (el && el._model && el instanceof elements.Line) {
                        source = {
                            visible: chart.isDatasetVisible(i),
                            fill: decodeFill(el, i, count),
                            chart: chart,
                            el: el
                        };
                    }

                    meta.$filler = source;
                    sources.push(source);
                }

                for (i = 0; i < count; ++i) {
                    source = sources[i];
                    if (!source) {
                        continue;
                    }

                    source.fill = resolveTarget(sources, i, propagate);
                    source.boundary = computeBoundary(source);
                    source.mapper = createMapper(source);
                }
            },

            beforeDatasetDraw: function (chart, args) {
                var meta = args.meta.$filler;
                if (!meta) {
                    return;
                }

                var ctx = chart.ctx;
                var el = meta.el;
                var view = el._view;
                var points = el._children || [];
                var mapper = meta.mapper;
                var color = view.backgroundColor || defaults.global.defaultColor;

                if (mapper && color && points.length) {
                    helpers.canvas.clipArea(ctx, chart.chartArea);
                    doFill(ctx, points, mapper, view, color, el._loop);
                    helpers.canvas.unclipArea(ctx);
                }
            }
        };
    };
}, { "25": 25, "40": 40, "45": 45 }], 50: [function (require, module, exports) {
    'use strict';

    var defaults = require(25);
    var Element = require(26);
    var helpers = require(45);

    defaults._set('global', {
        legend: {
            display: true,
            position: 'top',
            fullWidth: true,
            reverse: false,
            weight: 1000,

            // a callback that will handle
            onClick: function (e, legendItem) {
                var index = legendItem.datasetIndex;
                var ci = this.chart;
                var meta = ci.getDatasetMeta(index);

                // See controller.isDatasetVisible comment
                meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;

                // We hid a dataset ... rerender the chart
                ci.update();
            },

            onHover: null,

            labels: {
                boxWidth: 40,
                padding: 10,
                // Generates labels shown in the legend
                // Valid properties to return:
                // text : text to display
                // fillStyle : fill of coloured box
                // strokeStyle: stroke of coloured box
                // hidden : if this legend item refers to a hidden item
                // lineCap : cap style for line
                // lineDash
                // lineDashOffset :
                // lineJoin :
                // lineWidth :
                generateLabels: function (chart) {
                    var data = chart.data;
                    return helpers.isArray(data.datasets) ? data.datasets.map(function (dataset, i) {
                        return {
                            text: dataset.label,
                            fillStyle: (!helpers.isArray(dataset.backgroundColor) ? dataset.backgroundColor : dataset.backgroundColor[0]),
                            hidden: !chart.isDatasetVisible(i),
                            lineCap: dataset.borderCapStyle,
                            lineDash: dataset.borderDash,
                            lineDashOffset: dataset.borderDashOffset,
                            lineJoin: dataset.borderJoinStyle,
                            lineWidth: dataset.borderWidth,
                            strokeStyle: dataset.borderColor,
                            pointStyle: dataset.pointStyle,

                            // Below is extra data used for toggling the datasets
                            datasetIndex: i
                        };
                    }, this) : [];
                }
            }
        },

        legendCallback: function (chart) {
            var text = [];
            text.push('<ul class="' + chart.id + '-legend">');
            for (var i = 0; i < chart.data.datasets.length; i++) {
                text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
                if (chart.data.datasets[i].label) {
                    text.push(chart.data.datasets[i].label);
                }
                text.push('</li>');
            }
            text.push('</ul>');
            return text.join('');
        }
    });

    module.exports = function (Chart) {
        var layout = Chart.layoutService;
        var noop = helpers.noop;

        /**
         * Helper function to get the box width based on the usePointStyle option
         * @param labelopts {Object} the label options on the legend
         * @param fontSize {Number} the label font size
         * @return {Number} width of the color box area
         */
        function getBoxWidth(labelOpts, fontSize) {
            return labelOpts.usePointStyle ?
                fontSize * Math.SQRT2 :
                labelOpts.boxWidth;
        }

        Chart.Legend = Element.extend({
            initialize: function (config) {
                helpers.extend(this, config);

                // Contains hit boxes for each dataset (in dataset order)
                this.legendHitBoxes = [];

                // Are we in doughnut mode which has a different data type
                this.doughnutMode = false;
            },

            // These methods are ordered by lifecycle. Utilities then follow.
            // Any function defined here is inherited by all legend types.
            // Any function can be extended by the legend type

            beforeUpdate: noop,
            update: function (maxWidth, maxHeight, margins) {
                var me = this;

                // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
                me.beforeUpdate();

                // Absorb the master measurements
                me.maxWidth = maxWidth;
                me.maxHeight = maxHeight;
                me.margins = margins;

                // Dimensions
                me.beforeSetDimensions();
                me.setDimensions();
                me.afterSetDimensions();
                // Labels
                me.beforeBuildLabels();
                me.buildLabels();
                me.afterBuildLabels();

                // Fit
                me.beforeFit();
                me.fit();
                me.afterFit();
                //
                me.afterUpdate();

                return me.minSize;
            },
            afterUpdate: noop,

            //

            beforeSetDimensions: noop,
            setDimensions: function () {
                var me = this;
                // Set the unconstrained dimension before label rotation
                if (me.isHorizontal()) {
                    // Reset position before calculating rotation
                    me.width = me.maxWidth;
                    me.left = 0;
                    me.right = me.width;
                } else {
                    me.height = me.maxHeight;

                    // Reset position before calculating rotation
                    me.top = 0;
                    me.bottom = me.height;
                }

                // Reset padding
                me.paddingLeft = 0;
                me.paddingTop = 0;
                me.paddingRight = 0;
                me.paddingBottom = 0;

                // Reset minSize
                me.minSize = {
                    width: 0,
                    height: 0
                };
            },
            afterSetDimensions: noop,

            //

            beforeBuildLabels: noop,
            buildLabels: function () {
                var me = this;
                var labelOpts = me.options.labels || {};
                var legendItems = helpers.callback(labelOpts.generateLabels, [me.chart], me) || [];

                if (labelOpts.filter) {
                    legendItems = legendItems.filter(function (item) {
                        return labelOpts.filter(item, me.chart.data);
                    });
                }

                if (me.options.reverse) {
                    legendItems.reverse();
                }

                me.legendItems = legendItems;
            },
            afterBuildLabels: noop,

            //

            beforeFit: noop,
            fit: function () {
                var me = this;
                var opts = me.options;
                var labelOpts = opts.labels;
                var display = opts.display;

                var ctx = me.ctx;

                var globalDefault = defaults.global;
                var valueOrDefault = helpers.valueOrDefault;
                var fontSize = valueOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize);
                var fontStyle = valueOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle);
                var fontFamily = valueOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily);
                var labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

                // Reset hit boxes
                var hitboxes = me.legendHitBoxes = [];

                var minSize = me.minSize;
                var isHorizontal = me.isHorizontal();

                if (isHorizontal) {
                    minSize.width = me.maxWidth; // fill all the width
                    minSize.height = display ? 10 : 0;
                } else {
                    minSize.width = display ? 10 : 0;
                    minSize.height = me.maxHeight; // fill all the height
                }

                // Increase sizes here
                if (display) {
                    ctx.font = labelFont;

                    if (isHorizontal) {
                        // Labels

                        // Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
                        var lineWidths = me.lineWidths = [0];
                        var totalHeight = me.legendItems.length ? fontSize + (labelOpts.padding) : 0;

                        ctx.textAlign = 'left';
                        ctx.textBaseline = 'top';

                        helpers.each(me.legendItems, function (legendItem, i) {
                            var boxWidth = getBoxWidth(labelOpts, fontSize);
                            var width = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

                            if (lineWidths[lineWidths.length - 1] + width + labelOpts.padding >= me.width) {
                                totalHeight += fontSize + (labelOpts.padding);
                                lineWidths[lineWidths.length] = me.left;
                            }

                            // Store the hitbox width and height here. Final position will be updated in `draw`
                            hitboxes[i] = {
                                left: 0,
                                top: 0,
                                width: width,
                                height: fontSize
                            };

                            lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
                        });

                        minSize.height += totalHeight;
                    } else {
                        var vPadding = labelOpts.padding;
                        var columnWidths = me.columnWidths = [];
                        var totalWidth = labelOpts.padding;
                        var currentColWidth = 0;
                        var currentColHeight = 0;
                        var itemHeight = fontSize + vPadding;

                        helpers.each(me.legendItems, function (legendItem, i) {
                            var boxWidth = getBoxWidth(labelOpts, fontSize);
                            var itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

                            // If too tall, go to new column
                            if (currentColHeight + itemHeight > minSize.height) {
                                totalWidth += currentColWidth + labelOpts.padding;
                                columnWidths.push(currentColWidth); // previous column width

                                currentColWidth = 0;
                                currentColHeight = 0;
                            }

                            // Get max width
                            currentColWidth = Math.max(currentColWidth, itemWidth);
                            currentColHeight += itemHeight;

                            // Store the hitbox width and height here. Final position will be updated in `draw`
                            hitboxes[i] = {
                                left: 0,
                                top: 0,
                                width: itemWidth,
                                height: fontSize
                            };
                        });

                        totalWidth += currentColWidth;
                        columnWidths.push(currentColWidth);
                        minSize.width += totalWidth;
                    }
                }

                me.width = minSize.width;
                me.height = minSize.height;
            },
            afterFit: noop,

            // Shared Methods
            isHorizontal: function () {
                return this.options.position === 'top' || this.options.position === 'bottom';
            },

            // Actually draw the legend on the canvas
            draw: function () {
                var me = this;
                var opts = me.options;
                var labelOpts = opts.labels;
                var globalDefault = defaults.global;
                var lineDefault = globalDefault.elements.line;
                var legendWidth = me.width;
                var lineWidths = me.lineWidths;

                if (opts.display) {
                    var ctx = me.ctx;
                    var valueOrDefault = helpers.valueOrDefault;
                    var fontColor = valueOrDefault(labelOpts.fontColor, globalDefault.defaultFontColor);
                    var fontSize = valueOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize);
                    var fontStyle = valueOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle);
                    var fontFamily = valueOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily);
                    var labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);
                    var cursor;

                    // Canvas setup
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'middle';
                    ctx.lineWidth = 0.5;
                    ctx.strokeStyle = fontColor; // for strikethrough effect
                    ctx.fillStyle = fontColor; // render in correct colour
                    ctx.font = labelFont;

                    var boxWidth = getBoxWidth(labelOpts, fontSize);
                    var hitboxes = me.legendHitBoxes;

                    // current position
                    var drawLegendBox = function (x, y, legendItem) {
                        if (isNaN(boxWidth) || boxWidth <= 0) {
                            return;
                        }

                        // Set the ctx for the box
                        ctx.save();

                        ctx.fillStyle = valueOrDefault(legendItem.fillStyle, globalDefault.defaultColor);
                        ctx.lineCap = valueOrDefault(legendItem.lineCap, lineDefault.borderCapStyle);
                        ctx.lineDashOffset = valueOrDefault(legendItem.lineDashOffset, lineDefault.borderDashOffset);
                        ctx.lineJoin = valueOrDefault(legendItem.lineJoin, lineDefault.borderJoinStyle);
                        ctx.lineWidth = valueOrDefault(legendItem.lineWidth, lineDefault.borderWidth);
                        ctx.strokeStyle = valueOrDefault(legendItem.strokeStyle, globalDefault.defaultColor);
                        var isLineWidthZero = (valueOrDefault(legendItem.lineWidth, lineDefault.borderWidth) === 0);

                        if (ctx.setLineDash) {
                            // IE 9 and 10 do not support line dash
                            ctx.setLineDash(valueOrDefault(legendItem.lineDash, lineDefault.borderDash));
                        }

                        if (opts.labels && opts.labels.usePointStyle) {
                            // Recalculate x and y for drawPoint() because its expecting
                            // x and y to be center of figure (instead of top left)
                            var radius = fontSize * Math.SQRT2 / 2;
                            var offSet = radius / Math.SQRT2;
                            var centerX = x + offSet;
                            var centerY = y + offSet;

                            // Draw pointStyle as legend symbol
                            helpers.canvas.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY);
                        } else {
                            // Draw box as legend symbol
                            if (!isLineWidthZero) {
                                ctx.strokeRect(x, y, boxWidth, fontSize);
                            }
                            ctx.fillRect(x, y, boxWidth, fontSize);
                        }

                        ctx.restore();
                    };
                    var fillText = function (x, y, legendItem, textWidth) {
                        var halfFontSize = fontSize / 2;
                        var xLeft = boxWidth + halfFontSize + x;
                        var yMiddle = y + halfFontSize;

                        ctx.fillText(legendItem.text, xLeft, yMiddle);

                        if (legendItem.hidden) {
                            // Strikethrough the text if hidden
                            ctx.beginPath();
                            ctx.lineWidth = 2;
                            ctx.moveTo(xLeft, yMiddle);
                            ctx.lineTo(xLeft + textWidth, yMiddle);
                            ctx.stroke();
                        }
                    };

                    // Horizontal
                    var isHorizontal = me.isHorizontal();
                    if (isHorizontal) {
                        cursor = {
                            x: me.left + ((legendWidth - lineWidths[0]) / 2),
                            y: me.top + labelOpts.padding,
                            line: 0
                        };
                    } else {
                        cursor = {
                            x: me.left + labelOpts.padding,
                            y: me.top + labelOpts.padding,
                            line: 0
                        };
                    }

                    var itemHeight = fontSize + labelOpts.padding;
                    helpers.each(me.legendItems, function (legendItem, i) {
                        var textWidth = ctx.measureText(legendItem.text).width;
                        var width = boxWidth + (fontSize / 2) + textWidth;
                        var x = cursor.x;
                        var y = cursor.y;

                        if (isHorizontal) {
                            if (x + width >= legendWidth) {
                                y = cursor.y += itemHeight;
                                cursor.line++;
                                x = cursor.x = me.left + ((legendWidth - lineWidths[cursor.line]) / 2);
                            }
                        } else if (y + itemHeight > me.bottom) {
                            x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
                            y = cursor.y = me.top + labelOpts.padding;
                            cursor.line++;
                        }

                        drawLegendBox(x, y, legendItem);

                        hitboxes[i].left = x;
                        hitboxes[i].top = y;

                        // Fill the actual label
                        fillText(x, y, legendItem, textWidth);

                        if (isHorizontal) {
                            cursor.x += width + (labelOpts.padding);
                        } else {
                            cursor.y += itemHeight;
                        }
                    });
                }
            },

            /**
             * Handle an event
             * @private
             * @param {IEvent} event - The event to handle
             * @return {Boolean} true if a change occured
             */
            handleEvent: function (e) {
                var me = this;
                var opts = me.options;
                var type = e.type === 'mouseup' ? 'click' : e.type;
                var changed = false;

                if (type === 'mousemove') {
                    if (!opts.onHover) {
                        return;
                    }
                } else if (type === 'click') {
                    if (!opts.onClick) {
                        return;
                    }
                } else {
                    return;
                }

                // Chart event already has relative position in it
                var x = e.x;
                var y = e.y;

                if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
                    // See if we are touching one of the dataset boxes
                    var lh = me.legendHitBoxes;
                    for (var i = 0; i < lh.length; ++i) {
                        var hitBox = lh[i];

                        if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
                            // Touching an element
                            if (type === 'click') {
                                // use e.native for backwards compatibility
                                opts.onClick.call(me, e.native, me.legendItems[i]);
                                changed = true;
                                break;
                            } else if (type === 'mousemove') {
                                // use e.native for backwards compatibility
                                opts.onHover.call(me, e.native, me.legendItems[i]);
                                changed = true;
                                break;
                            }
                        }
                    }
                }

                return changed;
            }
        });

        function createNewLegendAndAttach(chart, legendOpts) {
            var legend = new Chart.Legend({
                ctx: chart.ctx,
                options: legendOpts,
                chart: chart
            });

            layout.configure(chart, legend, legendOpts);
            layout.addBox(chart, legend);
            chart.legend = legend;
        }

        return {
            id: 'legend',

            beforeInit: function (chart) {
                var legendOpts = chart.options.legend;

                if (legendOpts) {
                    createNewLegendAndAttach(chart, legendOpts);
                }
            },

            beforeUpdate: function (chart) {
                var legendOpts = chart.options.legend;
                var legend = chart.legend;

                if (legendOpts) {
                    helpers.mergeIf(legendOpts, defaults.global.legend);

                    if (legend) {
                        layout.configure(chart, legend, legendOpts);
                        legend.options = legendOpts;
                    } else {
                        createNewLegendAndAttach(chart, legendOpts);
                    }
                } else if (legend) {
                    layout.removeBox(chart, legend);
                    delete chart.legend;
                }
            },

            afterEvent: function (chart, e) {
                var legend = chart.legend;
                if (legend) {
                    legend.handleEvent(e);
                }
            }
        };
    };
}, { "25": 25, "26": 26, "45": 45 }], 51: [function (require, module, exports) {
    'use strict';

    var defaults = require(25);
    var Element = require(26);
    var helpers = require(45);

    defaults._set('global', {
        title: {
            display: false,
            fontStyle: 'bold',
            fullWidth: true,
            lineHeight: 1.2,
            padding: 10,
            position: 'top',
            text: '',
            weight: 2000         // by default greater than legend (1000) to be above
        }
    });

    module.exports = function (Chart) {
        var layout = Chart.layoutService;
        var noop = helpers.noop;

        Chart.Title = Element.extend({
            initialize: function (config) {
                var me = this;
                helpers.extend(me, config);

                // Contains hit boxes for each dataset (in dataset order)
                me.legendHitBoxes = [];
            },

            // These methods are ordered by lifecycle. Utilities then follow.

            beforeUpdate: noop,
            update: function (maxWidth, maxHeight, margins) {
                var me = this;

                // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
                me.beforeUpdate();

                // Absorb the master measurements
                me.maxWidth = maxWidth;
                me.maxHeight = maxHeight;
                me.margins = margins;

                // Dimensions
                me.beforeSetDimensions();
                me.setDimensions();
                me.afterSetDimensions();
                // Labels
                me.beforeBuildLabels();
                me.buildLabels();
                me.afterBuildLabels();

                // Fit
                me.beforeFit();
                me.fit();
                me.afterFit();
                //
                me.afterUpdate();

                return me.minSize;
            },
            afterUpdate: noop,

            //

            beforeSetDimensions: noop,
            setDimensions: function () {
                var me = this;
                // Set the unconstrained dimension before label rotation
                if (me.isHorizontal()) {
                    // Reset position before calculating rotation
                    me.width = me.maxWidth;
                    me.left = 0;
                    me.right = me.width;
                } else {
                    me.height = me.maxHeight;

                    // Reset position before calculating rotation
                    me.top = 0;
                    me.bottom = me.height;
                }

                // Reset padding
                me.paddingLeft = 0;
                me.paddingTop = 0;
                me.paddingRight = 0;
                me.paddingBottom = 0;

                // Reset minSize
                me.minSize = {
                    width: 0,
                    height: 0
                };
            },
            afterSetDimensions: noop,

            //

            beforeBuildLabels: noop,
            buildLabels: noop,
            afterBuildLabels: noop,

            //

            beforeFit: noop,
            fit: function () {
                var me = this;
                var valueOrDefault = helpers.valueOrDefault;
                var opts = me.options;
                var display = opts.display;
                var fontSize = valueOrDefault(opts.fontSize, defaults.global.defaultFontSize);
                var minSize = me.minSize;
                var lineCount = helpers.isArray(opts.text) ? opts.text.length : 1;
                var lineHeight = helpers.options.toLineHeight(opts.lineHeight, fontSize);
                var textSize = display ? (lineCount * lineHeight) + (opts.padding * 2) : 0;

                if (me.isHorizontal()) {
                    minSize.width = me.maxWidth; // fill all the width
                    minSize.height = textSize;
                } else {
                    minSize.width = textSize;
                    minSize.height = me.maxHeight; // fill all the height
                }

                me.width = minSize.width;
                me.height = minSize.height;
            },
            afterFit: noop,

            // Shared Methods
            isHorizontal: function () {
                var pos = this.options.position;
                return pos === 'top' || pos === 'bottom';
            },

            // Actually draw the title block on the canvas
            draw: function () {
                var me = this;
                var ctx = me.ctx;
                var valueOrDefault = helpers.valueOrDefault;
                var opts = me.options;
                var globalDefaults = defaults.global;

                if (opts.display) {
                    var fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize);
                    var fontStyle = valueOrDefault(opts.fontStyle, globalDefaults.defaultFontStyle);
                    var fontFamily = valueOrDefault(opts.fontFamily, globalDefaults.defaultFontFamily);
                    var titleFont = helpers.fontString(fontSize, fontStyle, fontFamily);
                    var lineHeight = helpers.options.toLineHeight(opts.lineHeight, fontSize);
                    var offset = lineHeight / 2 + opts.padding;
                    var rotation = 0;
                    var top = me.top;
                    var left = me.left;
                    var bottom = me.bottom;
                    var right = me.right;
                    var maxWidth, titleX, titleY;

                    ctx.fillStyle = valueOrDefault(opts.fontColor, globalDefaults.defaultFontColor); // render in correct colour
                    ctx.font = titleFont;

                    // Horizontal
                    if (me.isHorizontal()) {
                        titleX = left + ((right - left) / 2); // midpoint of the width
                        titleY = top + offset;
                        maxWidth = right - left;
                    } else {
                        titleX = opts.position === 'left' ? left + offset : right - offset;
                        titleY = top + ((bottom - top) / 2);
                        maxWidth = bottom - top;
                        rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
                    }

                    ctx.save();
                    ctx.translate(titleX, titleY);
                    ctx.rotate(rotation);
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    var text = opts.text;
                    if (helpers.isArray(text)) {
                        var y = 0;
                        for (var i = 0; i < text.length; ++i) {
                            ctx.fillText(text[i], 0, y, maxWidth);
                            y += lineHeight;
                        }
                    } else {
                        ctx.fillText(text, 0, 0, maxWidth);
                    }

                    ctx.restore();
                }
            }
        });

        function createNewTitleBlockAndAttach(chart, titleOpts) {
            var title = new Chart.Title({
                ctx: chart.ctx,
                options: titleOpts,
                chart: chart
            });

            layout.configure(chart, title, titleOpts);
            layout.addBox(chart, title);
            chart.titleBlock = title;
        }

        return {
            id: 'title',

            beforeInit: function (chart) {
                var titleOpts = chart.options.title;

                if (titleOpts) {
                    createNewTitleBlockAndAttach(chart, titleOpts);
                }
            },

            beforeUpdate: function (chart) {
                var titleOpts = chart.options.title;
                var titleBlock = chart.titleBlock;

                if (titleOpts) {
                    helpers.mergeIf(titleOpts, defaults.global.title);

                    if (titleBlock) {
                        layout.configure(chart, titleBlock, titleOpts);
                        titleBlock.options = titleOpts;
                    } else {
                        createNewTitleBlockAndAttach(chart, titleOpts);
                    }
                } else if (titleBlock) {
                    Chart.layoutService.removeBox(chart, titleBlock);
                    delete chart.titleBlock;
                }
            }
        };
    };
}, { "25": 25, "26": 26, "45": 45 }], 52: [function (require, module, exports) {
    'use strict';

    module.exports = function (Chart) {
        // Default config for a category scale
        var defaultConfig = {
            position: 'bottom'
        };

        var DatasetScale = Chart.Scale.extend({
            /**
            * Internal function to get the correct labels. If data.xLabels or data.yLabels are defined, use those
            * else fall back to data.labels
            * @private
            */
            getLabels: function () {
                var data = this.chart.data;
                return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels;
            },

            determineDataLimits: function () {
                var me = this;
                var labels = me.getLabels();
                me.minIndex = 0;
                me.maxIndex = labels.length - 1;
                var findIndex;

                if (me.options.ticks.min !== undefined) {
                    // user specified min value
                    findIndex = labels.indexOf(me.options.ticks.min);
                    me.minIndex = findIndex !== -1 ? findIndex : me.minIndex;
                }

                if (me.options.ticks.max !== undefined) {
                    // user specified max value
                    findIndex = labels.indexOf(me.options.ticks.max);
                    me.maxIndex = findIndex !== -1 ? findIndex : me.maxIndex;
                }

                me.min = labels[me.minIndex];
                me.max = labels[me.maxIndex];
            },

            buildTicks: function () {
                var me = this;
                var labels = me.getLabels();
                // If we are viewing some subset of labels, slice the original array
                me.ticks = (me.minIndex === 0 && me.maxIndex === labels.length - 1) ? labels : labels.slice(me.minIndex, me.maxIndex + 1);
            },

            getLabelForIndex: function (index, datasetIndex) {
                var me = this;
                var data = me.chart.data;
                var isHorizontal = me.isHorizontal();

                if (data.yLabels && !isHorizontal) {
                    return me.getRightValue(data.datasets[datasetIndex].data[index]);
                }
                return me.ticks[index - me.minIndex];
            },

            // Used to get data value locations.  Value can either be an index or a numerical value
            getPixelForValue: function (value, index) {
                var me = this;
                var offset = me.options.offset;
                // 1 is added because we need the length but we have the indexes
                var offsetAmt = Math.max((me.maxIndex + 1 - me.minIndex - (offset ? 0 : 1)), 1);

                // If value is a data object, then index is the index in the data array,
                // not the index of the scale. We need to change that.
                var valueCategory;
                if (value !== undefined && value !== null) {
                    valueCategory = me.isHorizontal() ? value.x : value.y;
                }
                if (valueCategory !== undefined || (value !== undefined && isNaN(index))) {
                    var labels = me.getLabels();
                    value = valueCategory || value;
                    var idx = labels.indexOf(value);
                    index = idx !== -1 ? idx : index;
                }

                if (me.isHorizontal()) {
                    var valueWidth = me.width / offsetAmt;
                    var widthOffset = (valueWidth * (index - me.minIndex));

                    if (offset) {
                        widthOffset += (valueWidth / 2);
                    }

                    return me.left + Math.round(widthOffset);
                }
                var valueHeight = me.height / offsetAmt;
                var heightOffset = (valueHeight * (index - me.minIndex));

                if (offset) {
                    heightOffset += (valueHeight / 2);
                }

                return me.top + Math.round(heightOffset);
            },
            getPixelForTick: function (index) {
                return this.getPixelForValue(this.ticks[index], index + this.minIndex, null);
            },
            getValueForPixel: function (pixel) {
                var me = this;
                var offset = me.options.offset;
                var value;
                var offsetAmt = Math.max((me._ticks.length - (offset ? 0 : 1)), 1);
                var horz = me.isHorizontal();
                var valueDimension = (horz ? me.width : me.height) / offsetAmt;

                pixel -= horz ? me.left : me.top;

                if (offset) {
                    pixel -= (valueDimension / 2);
                }

                if (pixel <= 0) {
                    value = 0;
                } else {
                    value = Math.round(pixel / valueDimension);
                }

                return value + me.minIndex;
            },
            getBasePixel: function () {
                return this.bottom;
            }
        });

        Chart.scaleService.registerScaleType('category', DatasetScale, defaultConfig);
    };
}, {}], 53: [function (require, module, exports) {
    'use strict';

    var defaults = require(25);
    var helpers = require(45);
    var Ticks = require(34);

    module.exports = function (Chart) {
        var defaultConfig = {
            position: 'left',
            ticks: {
                callback: Ticks.formatters.linear
            }
        };

        var LinearScale = Chart.LinearScaleBase.extend({
            determineDataLimits: function () {
                var me = this;
                var opts = me.options;
                var chart = me.chart;
                var data = chart.data;
                var datasets = data.datasets;
                var isHorizontal = me.isHorizontal();
                var DEFAULT_MIN = 0;
                var DEFAULT_MAX = 1;

                function IDMatches(meta) {
                    return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
                }

                // First Calculate the range
                me.min = null;
                me.max = null;

                var hasStacks = opts.stacked;
                if (hasStacks === undefined) {
                    helpers.each(datasets, function (dataset, datasetIndex) {
                        if (hasStacks) {
                            return;
                        }

                        var meta = chart.getDatasetMeta(datasetIndex);
                        if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
                            meta.stack !== undefined) {
                            hasStacks = true;
                        }
                    });
                }

                if (opts.stacked || hasStacks) {
                    var valuesPerStack = {};

                    helpers.each(datasets, function (dataset, datasetIndex) {
                        var meta = chart.getDatasetMeta(datasetIndex);
                        var key = [
                            meta.type,
                            // we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
                            ((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
                            meta.stack
                        ].join('.');

                        if (valuesPerStack[key] === undefined) {
                            valuesPerStack[key] = {
                                positiveValues: [],
                                negativeValues: []
                            };
                        }

                        // Store these per type
                        var positiveValues = valuesPerStack[key].positiveValues;
                        var negativeValues = valuesPerStack[key].negativeValues;

                        if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
                            helpers.each(dataset.data, function (rawValue, index) {
                                var value = +me.getRightValue(rawValue);
                                if (isNaN(value) || meta.data[index].hidden) {
                                    return;
                                }

                                positiveValues[index] = positiveValues[index] || 0;
                                negativeValues[index] = negativeValues[index] || 0;

                                if (opts.relativePoints) {
                                    positiveValues[index] = 100;
                                } else if (value < 0) {
                                    negativeValues[index] += value;
                                } else {
                                    positiveValues[index] += value;
                                }
                            });
                        }
                    });

                    helpers.each(valuesPerStack, function (valuesForType) {
                        var values = valuesForType.positiveValues.concat(valuesForType.negativeValues);
                        var minVal = helpers.min(values);
                        var maxVal = helpers.max(values);
                        me.min = me.min === null ? minVal : Math.min(me.min, minVal);
                        me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
                    });
                } else {
                    helpers.each(datasets, function (dataset, datasetIndex) {
                        var meta = chart.getDatasetMeta(datasetIndex);
                        if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
                            helpers.each(dataset.data, function (rawValue, index) {
                                var value = +me.getRightValue(rawValue);
                                if (isNaN(value) || meta.data[index].hidden) {
                                    return;
                                }

                                if (me.min === null) {
                                    me.min = value;
                                } else if (value < me.min) {
                                    me.min = value;
                                }

                                if (me.max === null) {
                                    me.max = value;
                                } else if (value > me.max) {
                                    me.max = value;
                                }
                            });
                        }
                    });
                }

                me.min = isFinite(me.min) && !isNaN(me.min) ? me.min : DEFAULT_MIN;
                me.max = isFinite(me.max) && !isNaN(me.max) ? me.max : DEFAULT_MAX;

                // Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
                this.handleTickRangeOptions();
            },
            getTickLimit: function () {
                var maxTicks;
                var me = this;
                var tickOpts = me.options.ticks;

                if (me.isHorizontal()) {
                    maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.width / 50));
                } else {
                    // The factor of 2 used to scale the font size has been experimentally determined.
                    var tickFontSize = helpers.valueOrDefault(tickOpts.fontSize, defaults.global.defaultFontSize);
                    maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.height / (2 * tickFontSize)));
                }

                return maxTicks;
            },
            // Called after the ticks are built. We need
            handleDirectionalChanges: function () {
                if (!this.isHorizontal()) {
                    // We are in a vertical orientation. The top value is the highest. So reverse the array
                    this.ticks.reverse();
                }
            },
            getLabelForIndex: function (index, datasetIndex) {
                return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
            },
            // Utils
            getPixelForValue: function (value) {
                // This must be called after fit has been run so that
                // this.left, this.top, this.right, and this.bottom have been defined
                var me = this;
                var start = me.start;

                var rightValue = +me.getRightValue(value);
                var pixel;
                var range = me.end - start;

                if (me.isHorizontal()) {
                    pixel = me.left + (me.width / range * (rightValue - start));
                    return Math.round(pixel);
                }

                pixel = me.bottom - (me.height / range * (rightValue - start));
                return Math.round(pixel);
            },
            getValueForPixel: function (pixel) {
                var me = this;
                var isHorizontal = me.isHorizontal();
                var innerDimension = isHorizontal ? me.width : me.height;
                var offset = (isHorizontal ? pixel - me.left : me.bottom - pixel) / innerDimension;
                return me.start + ((me.end - me.start) * offset);
            },
            getPixelForTick: function (index) {
                return this.getPixelForValue(this.ticksAsNumbers[index]);
            }
        });
        Chart.scaleService.registerScaleType('linear', LinearScale, defaultConfig);
    };
}, { "25": 25, "34": 34, "45": 45 }], 54: [function (require, module, exports) {
    'use strict';

    var helpers = require(45);
    var Ticks = require(34);

    module.exports = function (Chart) {
        var noop = helpers.noop;

        Chart.LinearScaleBase = Chart.Scale.extend({
            getRightValue: function (value) {
                if (typeof value === 'string') {
                    return +value;
                }
                return Chart.Scale.prototype.getRightValue.call(this, value);
            },

            handleTickRangeOptions: function () {
                var me = this;
                var opts = me.options;
                var tickOpts = opts.ticks;

                // If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
                // do nothing since that would make the chart weird. If the user really wants a weird chart
                // axis, they can manually override it
                if (tickOpts.beginAtZero) {
                    var minSign = helpers.sign(me.min);
                    var maxSign = helpers.sign(me.max);

                    if (minSign < 0 && maxSign < 0) {
                        // move the top up to 0
                        me.max = 0;
                    } else if (minSign > 0 && maxSign > 0) {
                        // move the bottom down to 0
                        me.min = 0;
                    }
                }

                var setMin = tickOpts.min !== undefined || tickOpts.suggestedMin !== undefined;
                var setMax = tickOpts.max !== undefined || tickOpts.suggestedMax !== undefined;

                if (tickOpts.min !== undefined) {
                    me.min = tickOpts.min;
                } else if (tickOpts.suggestedMin !== undefined) {
                    if (me.min === null) {
                        me.min = tickOpts.suggestedMin;
                    } else {
                        me.min = Math.min(me.min, tickOpts.suggestedMin);
                    }
                }

                if (tickOpts.max !== undefined) {
                    me.max = tickOpts.max;
                } else if (tickOpts.suggestedMax !== undefined) {
                    if (me.max === null) {
                        me.max = tickOpts.suggestedMax;
                    } else {
                        me.max = Math.max(me.max, tickOpts.suggestedMax);
                    }
                }

                if (setMin !== setMax) {
                    // We set the min or the max but not both.
                    // So ensure that our range is good
                    // Inverted or 0 length range can happen when
                    // ticks.min is set, and no datasets are visible
                    if (me.min >= me.max) {
                        if (setMin) {
                            me.max = me.min + 1;
                        } else {
                            me.min = me.max - 1;
                        }
                    }
                }

                if (me.min === me.max) {
                    me.max++;

                    if (!tickOpts.beginAtZero) {
                        me.min--;
                    }
                }
            },
            getTickLimit: noop,
            handleDirectionalChanges: noop,

            buildTicks: function () {
                var me = this;
                var opts = me.options;
                var tickOpts = opts.ticks;

                // Figure out what the max number of ticks we can support it is based on the size of
                // the axis area. For now, we say that the minimum tick spacing in pixels must be 50
                // We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
                // the graph. Make sure we always have at least 2 ticks
                var maxTicks = me.getTickLimit();
                maxTicks = Math.max(2, maxTicks);

                var numericGeneratorOptions = {
                    maxTicks: maxTicks,
                    min: tickOpts.min,
                    max: tickOpts.max,
                    stepSize: helpers.valueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
                };
                var ticks = me.ticks = Ticks.generators.linear(numericGeneratorOptions, me);

                me.handleDirectionalChanges();

                // At this point, we need to update our max and min given the tick values since we have expanded the
                // range of the scale
                me.max = helpers.max(ticks);
                me.min = helpers.min(ticks);

                if (tickOpts.reverse) {
                    ticks.reverse();

                    me.start = me.max;
                    me.end = me.min;
                } else {
                    me.start = me.min;
                    me.end = me.max;
                }
            },
            convertTicksToLabels: function () {
                var me = this;
                me.ticksAsNumbers = me.ticks.slice();
                me.zeroLineIndex = me.ticks.indexOf(0);

                Chart.Scale.prototype.convertTicksToLabels.call(me);
            }
        });
    };
}, { "34": 34, "45": 45 }], 55: [function (require, module, exports) {
    'use strict';

    var helpers = require(45);
    var Ticks = require(34);

    module.exports = function (Chart) {
        var defaultConfig = {
            position: 'left',

            // label settings
            ticks: {
                callback: Ticks.formatters.logarithmic
            }
        };

        var LogarithmicScale = Chart.Scale.extend({
            determineDataLimits: function () {
                var me = this;
                var opts = me.options;
                var tickOpts = opts.ticks;
                var chart = me.chart;
                var data = chart.data;
                var datasets = data.datasets;
                var valueOrDefault = helpers.valueOrDefault;
                var isHorizontal = me.isHorizontal();
                function IDMatches(meta) {
                    return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
                }

                // Calculate Range
                me.min = null;
                me.max = null;
                me.minNotZero = null;

                var hasStacks = opts.stacked;
                if (hasStacks === undefined) {
                    helpers.each(datasets, function (dataset, datasetIndex) {
                        if (hasStacks) {
                            return;
                        }

                        var meta = chart.getDatasetMeta(datasetIndex);
                        if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
                            meta.stack !== undefined) {
                            hasStacks = true;
                        }
                    });
                }

                if (opts.stacked || hasStacks) {
                    var valuesPerStack = {};

                    helpers.each(datasets, function (dataset, datasetIndex) {
                        var meta = chart.getDatasetMeta(datasetIndex);
                        var key = [
                            meta.type,
                            // we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
                            ((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
                            meta.stack
                        ].join('.');

                        if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
                            if (valuesPerStack[key] === undefined) {
                                valuesPerStack[key] = [];
                            }

                            helpers.each(dataset.data, function (rawValue, index) {
                                var values = valuesPerStack[key];
                                var value = +me.getRightValue(rawValue);
                                if (isNaN(value) || meta.data[index].hidden) {
                                    return;
                                }

                                values[index] = values[index] || 0;

                                if (opts.relativePoints) {
                                    values[index] = 100;
                                } else {
                                    // Don't need to split positive and negative since the log scale can't handle a 0 crossing
                                    values[index] += value;
                                }
                            });
                        }
                    });

                    helpers.each(valuesPerStack, function (valuesForType) {
                        var minVal = helpers.min(valuesForType);
                        var maxVal = helpers.max(valuesForType);
                        me.min = me.min === null ? minVal : Math.min(me.min, minVal);
                        me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
                    });
                } else {
                    helpers.each(datasets, function (dataset, datasetIndex) {
                        var meta = chart.getDatasetMeta(datasetIndex);
                        if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
                            helpers.each(dataset.data, function (rawValue, index) {
                                var value = +me.getRightValue(rawValue);
                                if (isNaN(value) || meta.data[index].hidden) {
                                    return;
                                }

                                if (me.min === null) {
                                    me.min = value;
                                } else if (value < me.min) {
                                    me.min = value;
                                }

                                if (me.max === null) {
                                    me.max = value;
                                } else if (value > me.max) {
                                    me.max = value;
                                }

                                if (value !== 0 && (me.minNotZero === null || value < me.minNotZero)) {
                                    me.minNotZero = value;
                                }
                            });
                        }
                    });
                }

                me.min = valueOrDefault(tickOpts.min, me.min);
                me.max = valueOrDefault(tickOpts.max, me.max);

                if (me.min === me.max) {
                    if (me.min !== 0 && me.min !== null) {
                        me.min = Math.pow(10, Math.floor(helpers.log10(me.min)) - 1);
                        me.max = Math.pow(10, Math.floor(helpers.log10(me.max)) + 1);
                    } else {
                        me.min = 1;
                        me.max = 10;
                    }
                }
            },
            buildTicks: function () {
                var me = this;
                var opts = me.options;
                var tickOpts = opts.ticks;

                var generationOptions = {
                    min: tickOpts.min,
                    max: tickOpts.max
                };
                var ticks = me.ticks = Ticks.generators.logarithmic(generationOptions, me);

                if (!me.isHorizontal()) {
                    // We are in a vertical orientation. The top value is the highest. So reverse the array
                    ticks.reverse();
                }

                // At this point, we need to update our max and min given the tick values since we have expanded the
                // range of the scale
                me.max = helpers.max(ticks);
                me.min = helpers.min(ticks);

                if (tickOpts.reverse) {
                    ticks.reverse();

                    me.start = me.max;
                    me.end = me.min;
                } else {
                    me.start = me.min;
                    me.end = me.max;
                }
            },
            convertTicksToLabels: function () {
                this.tickValues = this.ticks.slice();

                Chart.Scale.prototype.convertTicksToLabels.call(this);
            },
            // Get the correct tooltip label
            getLabelForIndex: function (index, datasetIndex) {
                return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
            },
            getPixelForTick: function (index) {
                return this.getPixelForValue(this.tickValues[index]);
            },
            getPixelForValue: function (value) {
                var me = this;
                var start = me.start;
                var newVal = +me.getRightValue(value);
                var opts = me.options;
                var tickOpts = opts.ticks;
                var innerDimension, pixel, range;

                if (me.isHorizontal()) {
                    range = helpers.log10(me.end) - helpers.log10(start); // todo: if start === 0
                    if (newVal === 0) {
                        pixel = me.left;
                    } else {
                        innerDimension = me.width;
                        pixel = me.left + (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
                    }
                } else {
                    // Bottom - top since pixels increase downward on a screen
                    innerDimension = me.height;
                    if (start === 0 && !tickOpts.reverse) {
                        range = helpers.log10(me.end) - helpers.log10(me.minNotZero);
                        if (newVal === start) {
                            pixel = me.bottom;
                        } else if (newVal === me.minNotZero) {
                            pixel = me.bottom - innerDimension * 0.02;
                        } else {
                            pixel = me.bottom - innerDimension * 0.02 - (innerDimension * 0.98 / range * (helpers.log10(newVal) - helpers.log10(me.minNotZero)));
                        }
                    } else if (me.end === 0 && tickOpts.reverse) {
                        range = helpers.log10(me.start) - helpers.log10(me.minNotZero);
                        if (newVal === me.end) {
                            pixel = me.top;
                        } else if (newVal === me.minNotZero) {
                            pixel = me.top + innerDimension * 0.02;
                        } else {
                            pixel = me.top + innerDimension * 0.02 + (innerDimension * 0.98 / range * (helpers.log10(newVal) - helpers.log10(me.minNotZero)));
                        }
                    } else if (newVal === 0) {
                        pixel = tickOpts.reverse ? me.top : me.bottom;
                    } else {
                        range = helpers.log10(me.end) - helpers.log10(start);
                        innerDimension = me.height;
                        pixel = me.bottom - (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
                    }
                }
                return pixel;
            },
            getValueForPixel: function (pixel) {
                var me = this;
                var range = helpers.log10(me.end) - helpers.log10(me.start);
                var value, innerDimension;

                if (me.isHorizontal()) {
                    innerDimension = me.width;
                    value = me.start * Math.pow(10, (pixel - me.left) * range / innerDimension);
                } else { // todo: if start === 0
                    innerDimension = me.height;
                    value = Math.pow(10, (me.bottom - pixel) * range / innerDimension) / me.start;
                }
                return value;
            }
        });
        Chart.scaleService.registerScaleType('logarithmic', LogarithmicScale, defaultConfig);
    };
}, { "34": 34, "45": 45 }], 56: [function (require, module, exports) {
    'use strict';

    var defaults = require(25);
    var helpers = require(45);
    var Ticks = require(34);

    module.exports = function (Chart) {
        var globalDefaults = defaults.global;

        var defaultConfig = {
            display: true,

            // Boolean - Whether to animate scaling the chart from the centre
            animate: true,
            position: 'chartArea',

            angleLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)',
                lineWidth: 1
            },

            gridLines: {
                circular: false
            },

            // label settings
            ticks: {
                // Boolean - Show a backdrop to the scale label
                showLabelBackdrop: true,

                // String - The colour of the label backdrop
                backdropColor: 'rgba(255,255,255,0.75)',

                // Number - The backdrop padding above & below the label in pixels
                backdropPaddingY: 2,

                // Number - The backdrop padding to the side of the label in pixels
                backdropPaddingX: 2,

                callback: Ticks.formatters.linear
            },

            pointLabels: {
                // Boolean - if true, show point labels
                display: true,

                // Number - Point label font size in pixels
                fontSize: 10,

                // Function - Used to convert point labels
                callback: function (label) {
                    return label;
                }
            }
        };

        function getValueCount(scale) {
            var opts = scale.options;
            return opts.angleLines.display || opts.pointLabels.display ? scale.chart.data.labels.length : 0;
        }

        function getPointLabelFontOptions(scale) {
            var pointLabelOptions = scale.options.pointLabels;
            var fontSize = helpers.valueOrDefault(pointLabelOptions.fontSize, globalDefaults.defaultFontSize);
            var fontStyle = helpers.valueOrDefault(pointLabelOptions.fontStyle, globalDefaults.defaultFontStyle);
            var fontFamily = helpers.valueOrDefault(pointLabelOptions.fontFamily, globalDefaults.defaultFontFamily);
            var font = helpers.fontString(fontSize, fontStyle, fontFamily);

            return {
                size: fontSize,
                style: fontStyle,
                family: fontFamily,
                font: font
            };
        }

        function measureLabelSize(ctx, fontSize, label) {
            if (helpers.isArray(label)) {
                return {
                    w: helpers.longestText(ctx, ctx.font, label),
                    h: (label.length * fontSize) + ((label.length - 1) * 1.5 * fontSize)
                };
            }

            return {
                w: ctx.measureText(label).width,
                h: fontSize
            };
        }

        function determineLimits(angle, pos, size, min, max) {
            if (angle === min || angle === max) {
                return {
                    start: pos - (size / 2),
                    end: pos + (size / 2)
                };
            } else if (angle < min || angle > max) {
                return {
                    start: pos - size - 5,
                    end: pos
                };
            }

            return {
                start: pos,
                end: pos + size + 5
            };
        }

        /**
         * Helper function to fit a radial linear scale with point labels
         */
        function fitWithPointLabels(scale) {
            /*
             * Right, this is really confusing and there is a lot of maths going on here
             * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
             *
             * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
             *
             * Solution:
             *
             * We assume the radius of the polygon is half the size of the canvas at first
             * at each index we check if the text overlaps.
             *
             * Where it does, we store that angle and that index.
             *
             * After finding the largest index and angle we calculate how much we need to remove
             * from the shape radius to move the point inwards by that x.
             *
             * We average the left and right distances to get the maximum shape radius that can fit in the box
             * along with labels.
             *
             * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
             * on each side, removing that from the size, halving it and adding the left x protrusion width.
             *
             * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
             * and position it in the most space efficient manner
             *
             * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
             */

            var plFont = getPointLabelFontOptions(scale);

            // Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
            // Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
            var largestPossibleRadius = Math.min(scale.height / 2, scale.width / 2);
            var furthestLimits = {
                r: scale.width,
                l: 0,
                t: scale.height,
                b: 0
            };
            var furthestAngles = {};
            var i, textSize, pointPosition;

            scale.ctx.font = plFont.font;
            scale._pointLabelSizes = [];

            var valueCount = getValueCount(scale);
            for (i = 0; i < valueCount; i++) {
                pointPosition = scale.getPointPosition(i, largestPossibleRadius);
                textSize = measureLabelSize(scale.ctx, plFont.size, scale.pointLabels[i] || '');
                scale._pointLabelSizes[i] = textSize;

                // Add quarter circle to make degree 0 mean top of circle
                var angleRadians = scale.getIndexAngle(i);
                var angle = helpers.toDegrees(angleRadians) % 360;
                var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
                var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);

                if (hLimits.start < furthestLimits.l) {
                    furthestLimits.l = hLimits.start;
                    furthestAngles.l = angleRadians;
                }

                if (hLimits.end > furthestLimits.r) {
                    furthestLimits.r = hLimits.end;
                    furthestAngles.r = angleRadians;
                }

                if (vLimits.start < furthestLimits.t) {
                    furthestLimits.t = vLimits.start;
                    furthestAngles.t = angleRadians;
                }

                if (vLimits.end > furthestLimits.b) {
                    furthestLimits.b = vLimits.end;
                    furthestAngles.b = angleRadians;
                }
            }

            scale.setReductions(largestPossibleRadius, furthestLimits, furthestAngles);
        }

        /**
         * Helper function to fit a radial linear scale with no point labels
         */
        function fit(scale) {
            var largestPossibleRadius = Math.min(scale.height / 2, scale.width / 2);
            scale.drawingArea = Math.round(largestPossibleRadius);
            scale.setCenterPoint(0, 0, 0, 0);
        }

        function getTextAlignForAngle(angle) {
            if (angle === 0 || angle === 180) {
                return 'center';
            } else if (angle < 180) {
                return 'left';
            }

            return 'right';
        }

        function fillText(ctx, text, position, fontSize) {
            if (helpers.isArray(text)) {
                var y = position.y;
                var spacing = 1.5 * fontSize;

                for (var i = 0; i < text.length; ++i) {
                    ctx.fillText(text[i], position.x, y);
                    y += spacing;
                }
            } else {
                ctx.fillText(text, position.x, position.y);
            }
        }

        function adjustPointPositionForLabelHeight(angle, textSize, position) {
            if (angle === 90 || angle === 270) {
                position.y -= (textSize.h / 2);
            } else if (angle > 270 || angle < 90) {
                position.y -= textSize.h;
            }
        }

        function drawPointLabels(scale) {
            var ctx = scale.ctx;
            var valueOrDefault = helpers.valueOrDefault;
            var opts = scale.options;
            var angleLineOpts = opts.angleLines;
            var pointLabelOpts = opts.pointLabels;

            ctx.lineWidth = angleLineOpts.lineWidth;
            ctx.strokeStyle = angleLineOpts.color;

            var outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);

            // Point Label Font
            var plFont = getPointLabelFontOptions(scale);

            ctx.textBaseline = 'top';

            for (var i = getValueCount(scale) - 1; i >= 0; i--) {
                if (angleLineOpts.display) {
                    var outerPosition = scale.getPointPosition(i, outerDistance);
                    ctx.beginPath();
                    ctx.moveTo(scale.xCenter, scale.yCenter);
                    ctx.lineTo(outerPosition.x, outerPosition.y);
                    ctx.stroke();
                    ctx.closePath();
                }

                if (pointLabelOpts.display) {
                    // Extra 3px out for some label spacing
                    var pointLabelPosition = scale.getPointPosition(i, outerDistance + 5);

                    // Keep this in loop since we may support array properties here
                    var pointLabelFontColor = valueOrDefault(pointLabelOpts.fontColor, globalDefaults.defaultFontColor);
                    ctx.font = plFont.font;
                    ctx.fillStyle = pointLabelFontColor;

                    var angleRadians = scale.getIndexAngle(i);
                    var angle = helpers.toDegrees(angleRadians);
                    ctx.textAlign = getTextAlignForAngle(angle);
                    adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
                    fillText(ctx, scale.pointLabels[i] || '', pointLabelPosition, plFont.size);
                }
            }
        }

        function drawRadiusLine(scale, gridLineOpts, radius, index) {
            var ctx = scale.ctx;
            ctx.strokeStyle = helpers.valueAtIndexOrDefault(gridLineOpts.color, index - 1);
            ctx.lineWidth = helpers.valueAtIndexOrDefault(gridLineOpts.lineWidth, index - 1);

            if (scale.options.gridLines.circular) {
                // Draw circular arcs between the points
                ctx.beginPath();
                ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.stroke();
            } else {
                // Draw straight lines connecting each index
                var valueCount = getValueCount(scale);

                if (valueCount === 0) {
                    return;
                }

                ctx.beginPath();
                var pointPosition = scale.getPointPosition(0, radius);
                ctx.moveTo(pointPosition.x, pointPosition.y);

                for (var i = 1; i < valueCount; i++) {
                    pointPosition = scale.getPointPosition(i, radius);
                    ctx.lineTo(pointPosition.x, pointPosition.y);
                }

                ctx.closePath();
                ctx.stroke();
            }
        }

        function numberOrZero(param) {
            return helpers.isNumber(param) ? param : 0;
        }

        var LinearRadialScale = Chart.LinearScaleBase.extend({
            setDimensions: function () {
                var me = this;
                var opts = me.options;
                var tickOpts = opts.ticks;
                // Set the unconstrained dimension before label rotation
                me.width = me.maxWidth;
                me.height = me.maxHeight;
                me.xCenter = Math.round(me.width / 2);
                me.yCenter = Math.round(me.height / 2);

                var minSize = helpers.min([me.height, me.width]);
                var tickFontSize = helpers.valueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
                me.drawingArea = opts.display ? (minSize / 2) - (tickFontSize / 2 + tickOpts.backdropPaddingY) : (minSize / 2);
            },
            determineDataLimits: function () {
                var me = this;
                var chart = me.chart;
                var min = Number.POSITIVE_INFINITY;
                var max = Number.NEGATIVE_INFINITY;

                helpers.each(chart.data.datasets, function (dataset, datasetIndex) {
                    if (chart.isDatasetVisible(datasetIndex)) {
                        var meta = chart.getDatasetMeta(datasetIndex);

                        helpers.each(dataset.data, function (rawValue, index) {
                            var value = +me.getRightValue(rawValue);
                            if (isNaN(value) || meta.data[index].hidden) {
                                return;
                            }

                            min = Math.min(value, min);
                            max = Math.max(value, max);
                        });
                    }
                });

                me.min = (min === Number.POSITIVE_INFINITY ? 0 : min);
                me.max = (max === Number.NEGATIVE_INFINITY ? 0 : max);

                // Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
                me.handleTickRangeOptions();
            },
            getTickLimit: function () {
                var tickOpts = this.options.ticks;
                var tickFontSize = helpers.valueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
                return Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * tickFontSize)));
            },
            convertTicksToLabels: function () {
                var me = this;

                Chart.LinearScaleBase.prototype.convertTicksToLabels.call(me);

                // Point labels
                me.pointLabels = me.chart.data.labels.map(me.options.pointLabels.callback, me);
            },
            getLabelForIndex: function (index, datasetIndex) {
                return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
            },
            fit: function () {
                if (this.options.pointLabels.display) {
                    fitWithPointLabels(this);
                } else {
                    fit(this);
                }
            },
            /**
             * Set radius reductions and determine new radius and center point
             * @private
             */
            setReductions: function (largestPossibleRadius, furthestLimits, furthestAngles) {
                var me = this;
                var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
                var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
                var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
                var radiusReductionBottom = -Math.max(furthestLimits.b - me.height, 0) / Math.cos(furthestAngles.b);

                radiusReductionLeft = numberOrZero(radiusReductionLeft);
                radiusReductionRight = numberOrZero(radiusReductionRight);
                radiusReductionTop = numberOrZero(radiusReductionTop);
                radiusReductionBottom = numberOrZero(radiusReductionBottom);

                me.drawingArea = Math.min(
                    Math.round(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2),
                    Math.round(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
                me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
            },
            setCenterPoint: function (leftMovement, rightMovement, topMovement, bottomMovement) {
                var me = this;
                var maxRight = me.width - rightMovement - me.drawingArea;
                var maxLeft = leftMovement + me.drawingArea;
                var maxTop = topMovement + me.drawingArea;
                var maxBottom = me.height - bottomMovement - me.drawingArea;

                me.xCenter = Math.round(((maxLeft + maxRight) / 2) + me.left);
                me.yCenter = Math.round(((maxTop + maxBottom) / 2) + me.top);
            },

            getIndexAngle: function (index) {
                var angleMultiplier = (Math.PI * 2) / getValueCount(this);
                var startAngle = this.chart.options && this.chart.options.startAngle ?
                    this.chart.options.startAngle :
                    0;

                var startAngleRadians = startAngle * Math.PI * 2 / 360;

                // Start from the top instead of right, so remove a quarter of the circle
                return index * angleMultiplier + startAngleRadians;
            },
            getDistanceFromCenterForValue: function (value) {
                var me = this;

                if (value === null) {
                    return 0; // null always in center
                }

                // Take into account half font size + the yPadding of the top value
                var scalingFactor = me.drawingArea / (me.max - me.min);
                if (me.options.ticks.reverse) {
                    return (me.max - value) * scalingFactor;
                }
                return (value - me.min) * scalingFactor;
            },
            getPointPosition: function (index, distanceFromCenter) {
                var me = this;
                var thisAngle = me.getIndexAngle(index) - (Math.PI / 2);
                return {
                    x: Math.round(Math.cos(thisAngle) * distanceFromCenter) + me.xCenter,
                    y: Math.round(Math.sin(thisAngle) * distanceFromCenter) + me.yCenter
                };
            },
            getPointPositionForValue: function (index, value) {
                return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
            },

            getBasePosition: function () {
                var me = this;
                var min = me.min;
                var max = me.max;

                return me.getPointPositionForValue(0,
                    me.beginAtZero ? 0 :
                        min < 0 && max < 0 ? max :
                            min > 0 && max > 0 ? min :
                                0);
            },

            draw: function () {
                var me = this;
                var opts = me.options;
                var gridLineOpts = opts.gridLines;
                var tickOpts = opts.ticks;
                var valueOrDefault = helpers.valueOrDefault;

                if (opts.display) {
                    var ctx = me.ctx;
                    var startAngle = this.getIndexAngle(0);

                    // Tick Font
                    var tickFontSize = valueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
                    var tickFontStyle = valueOrDefault(tickOpts.fontStyle, globalDefaults.defaultFontStyle);
                    var tickFontFamily = valueOrDefault(tickOpts.fontFamily, globalDefaults.defaultFontFamily);
                    var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);

                    helpers.each(me.ticks, function (label, index) {
                        // Don't draw a centre value (if it is minimum)
                        if (index > 0 || tickOpts.reverse) {
                            var yCenterOffset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);

                            // Draw circular lines around the scale
                            if (gridLineOpts.display && index !== 0) {
                                drawRadiusLine(me, gridLineOpts, yCenterOffset, index);
                            }

                            if (tickOpts.display) {
                                var tickFontColor = valueOrDefault(tickOpts.fontColor, globalDefaults.defaultFontColor);
                                ctx.font = tickLabelFont;

                                ctx.save();
                                ctx.translate(me.xCenter, me.yCenter);
                                ctx.rotate(startAngle);

                                if (tickOpts.showLabelBackdrop) {
                                    var labelWidth = ctx.measureText(label).width;
                                    ctx.fillStyle = tickOpts.backdropColor;
                                    ctx.fillRect(
                                        -labelWidth / 2 - tickOpts.backdropPaddingX,
                                        -yCenterOffset - tickFontSize / 2 - tickOpts.backdropPaddingY,
                                        labelWidth + tickOpts.backdropPaddingX * 2,
                                        tickFontSize + tickOpts.backdropPaddingY * 2
                                    );
                                }

                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillStyle = tickFontColor;
                                ctx.fillText(label, 0, -yCenterOffset);
                                ctx.restore();
                            }
                        }
                    });

                    if (opts.angleLines.display || opts.pointLabels.display) {
                        drawPointLabels(me);
                    }
                }
            }
        });
        Chart.scaleService.registerScaleType('radialLinear', LinearRadialScale, defaultConfig);
    };
}, { "25": 25, "34": 34, "45": 45 }], 57: [function (require, module, exports) {
    /* global window: false */
    'use strict';

    var moment = require(1);
    moment = typeof moment === 'function' ? moment : window.moment;

    var defaults = require(25);
    var helpers = require(45);

    // Integer constants are from the ES6 spec.
    var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
    var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

    var INTERVALS = {
        millisecond: {
            common: true,
            size: 1,
            steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
        },
        second: {
            common: true,
            size: 1000,
            steps: [1, 2, 5, 10, 30]
        },
        minute: {
            common: true,
            size: 60000,
            steps: [1, 2, 5, 10, 30]
        },
        hour: {
            common: true,
            size: 3600000,
            steps: [1, 2, 3, 6, 12]
        },
        day: {
            common: true,
            size: 86400000,
            steps: [1, 2, 5]
        },
        week: {
            common: false,
            size: 604800000,
            steps: [1, 2, 3, 4]
        },
        month: {
            common: true,
            size: 2.628e9,
            steps: [1, 2, 3]
        },
        quarter: {
            common: false,
            size: 7.884e9,
            steps: [1, 2, 3, 4]
        },
        year: {
            common: true,
            size: 3.154e10
        }
    };

    var UNITS = Object.keys(INTERVALS);

    function sorter(a, b) {
        return a - b;
    }

    function arrayUnique(items) {
        var hash = {};
        var out = [];
        var i, ilen, item;

        for (i = 0, ilen = items.length; i < ilen; ++i) {
            item = items[i];
            if (!hash[item]) {
                hash[item] = true;
                out.push(item);
            }
        }

        return out;
    }

    /**
     * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
     * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
     * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
     * extremity (left + width or top + height). Note that it would be more optimized to directly
     * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
     * to create the lookup table. The table ALWAYS contains at least two items: min and max.
     *
     * @param {Number[]} timestamps - timestamps sorted from lowest to highest.
     * @param {String} distribution - If 'linear', timestamps will be spread linearly along the min
     * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
     * If 'series', timestamps will be positioned at the same distance from each other. In this
     * case, only timestamps that break the time linearity are registered, meaning that in the
     * best case, all timestamps are linear, the table contains only min and max.
     */
    function buildLookupTable(timestamps, min, max, distribution) {
        if (distribution === 'linear' || !timestamps.length) {
            return [
                { time: min, pos: 0 },
                { time: max, pos: 1 }
            ];
        }

        var table = [];
        var items = [min];
        var i, ilen, prev, curr, next;

        for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
            curr = timestamps[i];
            if (curr > min && curr < max) {
                items.push(curr);
            }
        }

        items.push(max);

        for (i = 0, ilen = items.length; i < ilen; ++i) {
            next = items[i + 1];
            prev = items[i - 1];
            curr = items[i];

            // only add points that breaks the scale linearity
            if (prev === undefined || next === undefined || Math.round((next + prev) / 2) !== curr) {
                table.push({ time: curr, pos: i / (ilen - 1) });
            }
        }

        return table;
    }

    // @see adapted from http://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/
    function lookup(table, key, value) {
        var lo = 0;
        var hi = table.length - 1;
        var mid, i0, i1;

        while (lo >= 0 && lo <= hi) {
            mid = (lo + hi) >> 1;
            i0 = table[mid - 1] || null;
            i1 = table[mid];

            if (!i0) {
                // given value is outside table (before first item)
                return { lo: null, hi: i1 };
            } else if (i1[key] < value) {
                lo = mid + 1;
            } else if (i0[key] > value) {
                hi = mid - 1;
            } else {
                return { lo: i0, hi: i1 };
            }
        }

        // given value is outside table (after last item)
        return { lo: i1, hi: null };
    }

    /**
     * Linearly interpolates the given source `value` using the table items `skey` values and
     * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
     * returns the position for a timestamp equal to 42. If value is out of bounds, values at
     * index [0, 1] or [n - 1, n] are used for the interpolation.
     */
    function interpolate(table, skey, sval, tkey) {
        var range = lookup(table, skey, sval);

        // Note: the lookup table ALWAYS contains at least 2 items (min and max)
        var prev = !range.lo ? table[0] : !range.hi ? table[table.length - 2] : range.lo;
        var next = !range.lo ? table[1] : !range.hi ? table[table.length - 1] : range.hi;

        var span = next[skey] - prev[skey];
        var ratio = span ? (sval - prev[skey]) / span : 0;
        var offset = (next[tkey] - prev[tkey]) * ratio;

        return prev[tkey] + offset;
    }

    /**
     * Convert the given value to a moment object using the given time options.
     * @see http://momentjs.com/docs/#/parsing/
     */
    function momentify(value, options) {
        var parser = options.parser;
        var format = options.parser || options.format;

        if (typeof parser === 'function') {
            return parser(value);
        }

        if (typeof value === 'string' && typeof format === 'string') {
            return moment(value, format);
        }

        if (!(value instanceof moment)) {
            value = moment(value);
        }

        if (value.isValid()) {
            return value;
        }

        // Labels are in an incompatible moment format and no `parser` has been provided.
        // The user might still use the deprecated `format` option to convert his inputs.
        if (typeof format === 'function') {
            return format(value);
        }

        return value;
    }

    function parse(input, scale) {
        if (helpers.isNullOrUndef(input)) {
            return null;
        }

        var options = scale.options.time;
        var value = momentify(scale.getRightValue(input), options);
        if (!value.isValid()) {
            return null;
        }

        if (options.round) {
            value.startOf(options.round);
        }

        return value.valueOf();
    }

    /**
     * Returns the number of unit to skip to be able to display up to `capacity` number of ticks
     * in `unit` for the given `min` / `max` range and respecting the interval steps constraints.
     */
    function determineStepSize(min, max, unit, capacity) {
        var range = max - min;
        var interval = INTERVALS[unit];
        var milliseconds = interval.size;
        var steps = interval.steps;
        var i, ilen, factor;

        if (!steps) {
            return Math.ceil(range / ((capacity || 1) * milliseconds));
        }

        for (i = 0, ilen = steps.length; i < ilen; ++i) {
            factor = steps[i];
            if (Math.ceil(range / (milliseconds * factor)) <= capacity) {
                break;
            }
        }

        return factor;
    }

    /**
     * Figures out what unit results in an appropriate number of auto-generated ticks
     */
    function determineUnitForAutoTicks(minUnit, min, max, capacity) {
        var ilen = UNITS.length;
        var i, interval, factor;

        for (i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
            interval = INTERVALS[UNITS[i]];
            factor = interval.steps ? interval.steps[interval.steps.length - 1] : MAX_INTEGER;

            if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
                return UNITS[i];
            }
        }

        return UNITS[ilen - 1];
    }

    /**
     * Figures out what unit to format a set of ticks with
     */
    function determineUnitForFormatting(ticks, minUnit, min, max) {
        var duration = moment.duration(moment(max).diff(moment(min)));
        var ilen = UNITS.length;
        var i, unit;

        for (i = ilen - 1; i >= UNITS.indexOf(minUnit); i--) {
            unit = UNITS[i];
            if (INTERVALS[unit].common && duration.as(unit) >= ticks.length) {
                return unit;
            }
        }

        return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
    }

    function determineMajorUnit(unit) {
        for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
            if (INTERVALS[UNITS[i]].common) {
                return UNITS[i];
            }
        }
    }

    /**
     * Generates a maximum of `capacity` timestamps between min and max, rounded to the
     * `minor` unit, aligned on the `major` unit and using the given scale time `options`.
     * Important: this method can return ticks outside the min and max range, it's the
     * responsibility of the calling code to clamp values if needed.
     */
    function generate(min, max, capacity, options) {
        var timeOpts = options.time;
        var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, capacity);
        var major = determineMajorUnit(minor);
        var stepSize = helpers.valueOrDefault(timeOpts.stepSize, timeOpts.unitStepSize);
        var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
        var majorTicksEnabled = options.ticks.major.enabled;
        var interval = INTERVALS[minor];
        var first = moment(min);
        var last = moment(max);
        var ticks = [];
        var time;

        if (!stepSize) {
            stepSize = determineStepSize(min, max, minor, capacity);
        }

        // For 'week' unit, handle the first day of week option
        if (weekday) {
            first = first.isoWeekday(weekday);
            last = last.isoWeekday(weekday);
        }

        // Align first/last ticks on unit
        first = first.startOf(weekday ? 'day' : minor);
        last = last.startOf(weekday ? 'day' : minor);

        // Make sure that the last tick include max
        if (last < max) {
            last.add(1, minor);
        }

        time = moment(first);

        if (majorTicksEnabled && major && !weekday && !timeOpts.round) {
            // Align the first tick on the previous `minor` unit aligned on the `major` unit:
            // we first aligned time on the previous `major` unit then add the number of full
            // stepSize there is between first and the previous major time.
            time.startOf(major);
            time.add(~~((first - time) / (interval.size * stepSize)) * stepSize, minor);
        }

        for (; time < last; time.add(stepSize, minor)) {
            ticks.push(+time);
        }

        ticks.push(+time);

        return ticks;
    }

    /**
     * Returns the right and left offsets from edges in the form of {left, right}.
     * Offsets are added when the `offset` option is true.
     */
    function computeOffsets(table, ticks, min, max, options) {
        var left = 0;
        var right = 0;
        var upper, lower;

        if (options.offset && ticks.length) {
            if (!options.time.min) {
                upper = ticks.length > 1 ? ticks[1] : max;
                lower = ticks[0];
                left = (
                    interpolate(table, 'time', upper, 'pos') -
                    interpolate(table, 'time', lower, 'pos')
                ) / 2;
            }
            if (!options.time.max) {
                upper = ticks[ticks.length - 1];
                lower = ticks.length > 1 ? ticks[ticks.length - 2] : min;
                right = (
                    interpolate(table, 'time', upper, 'pos') -
                    interpolate(table, 'time', lower, 'pos')
                ) / 2;
            }
        }

        return { left: left, right: right };
    }

    function ticksFromTimestamps(values, majorUnit) {
        var ticks = [];
        var i, ilen, value, major;

        for (i = 0, ilen = values.length; i < ilen; ++i) {
            value = values[i];
            major = majorUnit ? value === +moment(value).startOf(majorUnit) : false;

            ticks.push({
                value: value,
                major: major
            });
        }

        return ticks;
    }

    module.exports = function (Chart) {
        var defaultConfig = {
            position: 'bottom',

            /**
             * Data distribution along the scale:
             * - 'linear': data are spread according to their time (distances can vary),
             * - 'series': data are spread at the same distance from each other.
             * @see https://github.com/chartjs/Chart.js/pull/4507
             * @since 2.7.0
             */
            distribution: 'linear',

            /**
             * Scale boundary strategy (bypassed by min/max time options)
             * - `data`: make sure data are fully visible, ticks outside are removed
             * - `ticks`: make sure ticks are fully visible, data outside are truncated
             * @see https://github.com/chartjs/Chart.js/pull/4556
             * @since 2.7.0
             */
            bounds: 'data',

            time: {
                parser: false, // false == a pattern string from http://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
                format: false, // DEPRECATED false == date objects, moment object, callback or a pattern string from http://momentjs.com/docs/#/parsing/string-format/
                unit: false, // false == automatic or override with week, month, year, etc.
                round: false, // none, or override with week, month, year, etc.
                displayFormat: false, // DEPRECATED
                isoWeekday: false, // override week start day - see http://momentjs.com/docs/#/get-set/iso-weekday/
                minUnit: 'millisecond',

                // defaults to unit's corresponding unitFormat below or override using pattern string from http://momentjs.com/docs/#/displaying/format/
                displayFormats: {
                    millisecond: 'h:mm:ss.SSS a', // 11:20:01.123 AM,
                    second: 'h:mm:ss a', // 11:20:01 AM
                    minute: 'h:mm a', // 11:20 AM
                    hour: 'hA', // 5PM
                    day: 'MMM D', // Sep 4
                    week: 'll', // Week 46, or maybe "[W]WW - YYYY" ?
                    month: 'MMM YYYY', // Sept 2015
                    quarter: '[Q]Q - YYYY', // Q3
                    year: 'YYYY' // 2015
                },
            },
            ticks: {
                autoSkip: false,

                /**
                 * Ticks generation input values:
                 * - 'auto': generates "optimal" ticks based on scale size and time options.
                 * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
                 * - 'labels': generates ticks from user given `data.labels` values ONLY.
                 * @see https://github.com/chartjs/Chart.js/pull/4507
                 * @since 2.7.0
                 */
                source: 'auto',

                major: {
                    enabled: false
                }
            }
        };

        var TimeScale = Chart.Scale.extend({
            initialize: function () {
                if (!moment) {
                    throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com');
                }

                this.mergeTicksOptions();

                Chart.Scale.prototype.initialize.call(this);
            },

            update: function () {
                var me = this;
                var options = me.options;

                // DEPRECATIONS: output a message only one time per update
                if (options.time && options.time.format) {
                    console.warn('options.time.format is deprecated and replaced by options.time.parser.');
                }

                return Chart.Scale.prototype.update.apply(me, arguments);
            },

            /**
             * Allows data to be referenced via 't' attribute
             */
            getRightValue: function (rawValue) {
                if (rawValue && rawValue.t !== undefined) {
                    rawValue = rawValue.t;
                }
                return Chart.Scale.prototype.getRightValue.call(this, rawValue);
            },

            determineDataLimits: function () {
                var me = this;
                var chart = me.chart;
                var timeOpts = me.options.time;
                var min = MAX_INTEGER;
                var max = MIN_INTEGER;
                var timestamps = [];
                var datasets = [];
                var labels = [];
                var i, j, ilen, jlen, data, timestamp;

                // Convert labels to timestamps
                for (i = 0, ilen = chart.data.labels.length; i < ilen; ++i) {
                    labels.push(parse(chart.data.labels[i], me));
                }

                // Convert data to timestamps
                for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
                    if (chart.isDatasetVisible(i)) {
                        data = chart.data.datasets[i].data;

                        // Let's consider that all data have the same format.
                        if (helpers.isObject(data[0])) {
                            datasets[i] = [];

                            for (j = 0, jlen = data.length; j < jlen; ++j) {
                                timestamp = parse(data[j], me);
                                timestamps.push(timestamp);
                                datasets[i][j] = timestamp;
                            }
                        } else {
                            timestamps.push.apply(timestamps, labels);
                            datasets[i] = labels.slice(0);
                        }
                    } else {
                        datasets[i] = [];
                    }
                }

                if (labels.length) {
                    // Sort labels **after** data have been converted
                    labels = arrayUnique(labels).sort(sorter);
                    min = Math.min(min, labels[0]);
                    max = Math.max(max, labels[labels.length - 1]);
                }

                if (timestamps.length) {
                    timestamps = arrayUnique(timestamps).sort(sorter);
                    min = Math.min(min, timestamps[0]);
                    max = Math.max(max, timestamps[timestamps.length - 1]);
                }

                min = parse(timeOpts.min, me) || min;
                max = parse(timeOpts.max, me) || max;

                // In case there is no valid min/max, let's use today limits
                min = min === MAX_INTEGER ? +moment().startOf('day') : min;
                max = max === MIN_INTEGER ? +moment().endOf('day') + 1 : max;

                // Make sure that max is strictly higher than min (required by the lookup table)
                me.min = Math.min(min, max);
                me.max = Math.max(min + 1, max);

                // PRIVATE
                me._horizontal = me.isHorizontal();
                me._table = [];
                me._timestamps = {
                    data: timestamps,
                    datasets: datasets,
                    labels: labels
                };
            },

            buildTicks: function () {
                var me = this;
                var min = me.min;
                var max = me.max;
                var options = me.options;
                var timeOpts = options.time;
                var timestamps = [];
                var ticks = [];
                var i, ilen, timestamp;

                switch (options.ticks.source) {
                    case 'data':
                        timestamps = me._timestamps.data;
                        break;
                    case 'labels':
                        timestamps = me._timestamps.labels;
                        break;
                    case 'auto':
                    default:
                        timestamps = generate(min, max, me.getLabelCapacity(min), options);
                }

                if (options.bounds === 'ticks' && timestamps.length) {
                    min = timestamps[0];
                    max = timestamps[timestamps.length - 1];
                }

                // Enforce limits with user min/max options
                min = parse(timeOpts.min, me) || min;
                max = parse(timeOpts.max, me) || max;

                // Remove ticks outside the min/max range
                for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
                    timestamp = timestamps[i];
                    if (timestamp >= min && timestamp <= max) {
                        ticks.push(timestamp);
                    }
                }

                me.min = min;
                me.max = max;

                // PRIVATE
                me._unit = timeOpts.unit || determineUnitForFormatting(ticks, timeOpts.minUnit, me.min, me.max);
                me._majorUnit = determineMajorUnit(me._unit);
                me._table = buildLookupTable(me._timestamps.data, min, max, options.distribution);
                me._offsets = computeOffsets(me._table, ticks, min, max, options);

                return ticksFromTimestamps(ticks, me._majorUnit);
            },

            getLabelForIndex: function (index, datasetIndex) {
                var me = this;
                var data = me.chart.data;
                var timeOpts = me.options.time;
                var label = data.labels && index < data.labels.length ? data.labels[index] : '';
                var value = data.datasets[datasetIndex].data[index];

                if (helpers.isObject(value)) {
                    label = me.getRightValue(value);
                }
                if (timeOpts.tooltipFormat) {
                    label = momentify(label, timeOpts).format(timeOpts.tooltipFormat);
                }

                return label;
            },

            /**
             * Function to format an individual tick mark
             * @private
             */
            tickFormatFunction: function (tick, index, ticks, formatOverride) {
                var me = this;
                var options = me.options;
                var time = tick.valueOf();
                var formats = options.time.displayFormats;
                var minorFormat = formats[me._unit];
                var majorUnit = me._majorUnit;
                var majorFormat = formats[majorUnit];
                var majorTime = tick.clone().startOf(majorUnit).valueOf();
                var majorTickOpts = options.ticks.major;
                var major = majorTickOpts.enabled && majorUnit && majorFormat && time === majorTime;
                var label = tick.format(formatOverride ? formatOverride : major ? majorFormat : minorFormat);
                var tickOpts = major ? majorTickOpts : options.ticks.minor;
                var formatter = helpers.valueOrDefault(tickOpts.callback, tickOpts.userCallback);

                return formatter ? formatter(label, index, ticks) : label;
            },

            convertTicksToLabels: function (ticks) {
                var labels = [];
                var i, ilen;

                for (i = 0, ilen = ticks.length; i < ilen; ++i) {
                    labels.push(this.tickFormatFunction(moment(ticks[i].value), i, ticks));
                }

                return labels;
            },

            /**
             * @private
             */
            getPixelForOffset: function (time) {
                var me = this;
                var size = me._horizontal ? me.width : me.height;
                var start = me._horizontal ? me.left : me.top;
                var pos = interpolate(me._table, 'time', time, 'pos');

                return start + size * (me._offsets.left + pos) / (me._offsets.left + 1 + me._offsets.right);
            },

            getPixelForValue: function (value, index, datasetIndex) {
                var me = this;
                var time = null;

                if (index !== undefined && datasetIndex !== undefined) {
                    time = me._timestamps.datasets[datasetIndex][index];
                }

                if (time === null) {
                    time = parse(value, me);
                }

                if (time !== null) {
                    return me.getPixelForOffset(time);
                }
            },

            getPixelForTick: function (index) {
                var ticks = this.getTicks();
                return index >= 0 && index < ticks.length ?
                    this.getPixelForOffset(ticks[index].value) :
                    null;
            },

            getValueForPixel: function (pixel) {
                var me = this;
                var size = me._horizontal ? me.width : me.height;
                var start = me._horizontal ? me.left : me.top;
                var pos = (size ? (pixel - start) / size : 0) * (me._offsets.left + 1 + me._offsets.left) - me._offsets.right;
                var time = interpolate(me._table, 'pos', pos, 'time');

                return moment(time);
            },

            /**
             * Crude approximation of what the label width might be
             * @private
             */
            getLabelWidth: function (label) {
                var me = this;
                var ticksOpts = me.options.ticks;
                var tickLabelWidth = me.ctx.measureText(label).width;
                var angle = helpers.toRadians(ticksOpts.maxRotation);
                var cosRotation = Math.cos(angle);
                var sinRotation = Math.sin(angle);
                var tickFontSize = helpers.valueOrDefault(ticksOpts.fontSize, defaults.global.defaultFontSize);

                return (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation);
            },

            /**
             * @private
             */
            getLabelCapacity: function (exampleTime) {
                var me = this;

                var formatOverride = me.options.time.displayFormats.millisecond;	// Pick the longest format for guestimation

                var exampleLabel = me.tickFormatFunction(moment(exampleTime), 0, [], formatOverride);
                var tickLabelWidth = me.getLabelWidth(exampleLabel);
                var innerWidth = me.isHorizontal() ? me.width : me.height;

                return Math.floor(innerWidth / tickLabelWidth);
            }
        });

        Chart.scaleService.registerScaleType('time', TimeScale, defaultConfig);
    };
}, { "1": 1, "25": 25, "45": 45 }]
    }, { }, [7]) (7)
});