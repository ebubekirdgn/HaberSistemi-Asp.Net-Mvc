/*
 * Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery/easing
 *
 * Adds compatibility for applications that use the pre 1.2 easing names
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function ($) {
    $.etend($.eas in            ,
        {
            easeIn: fun                ion(x, t, b, c, d) {
                retur             $.asing.easeInQuad(x, t, b, c, d);
            },
            easeOut: function (x,             , b             c, d) {
                return $.easi.easeOutQuad(x, t, b, c, d);
            },
            easeInOut: function (x, t, b,                , d) {
                return $.easing.ease            nOu            Quad(x, t, b, c, d);
            }, expoin: function (x, t, b, c, d)
                           return  $.easing.easeInEx(x, t, b, c, d);
        },
        ex            oou            : function (x, t, b, c, d) {
            return $.easing.easeOutExpo(x, t, b, c             d)
        },
        expoinout                function (x, t, b, c, d) {
            ret            rn.easing.easeInOutExpo(x, t, b, c, d);
        },
        bouncein: function (x, t             b, c, d) {
            return $.e                ing.easeInBounce(x, t, b, c, d);
        }
                       bounceou t: function (x, t,                , c, d) {
            return $.easing.easeO            tBo            nce(x, t, b, c, d);
        },
        bounceinout: function (x, t, b, c, d) {
            return $.easing.easeInOu                ounce(x, t, b, c, d);
        },
        elasin: function (x, t, b, c, d) { return $.easing.easeInElastic            x,             , b, c, d);
},
    elasout: function (x, t, b, c, d) {
        return $.easing.easeOutElastic(x, t, b, c, d);
    },
elasinout: function (x, t, b, c, d) {
    return $.easing.easeInOutElastic(x, t, b, c, d);
},
backin: function (x, t, b, c, d) {
    return $.easing.easeInBack(x, t, b, c, d);
},
backout: function (x, t, b, c, d) {
    return $.easing.easeOutBack(x, t, b, c, d);
},
backinout: function (x, t, b, c, d) {
    return $.easing.easeInOutBack(x, t, b, c, d);
}
        });
}) (jQuery);