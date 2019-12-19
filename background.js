var _0x2ea7 = [
    "http://miao.enjoyapps.org/queryMiaoList.php",
    "http://erptest.xinyiglass.com:8000",
    "/quick-buy/fnd/quickbuy/getUpdateData",
    "/quick-buy/fnd/quickbuy/getUserData",
    "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
    "@@extension_id",
    "getMessage",
    "i18n",
    "normal",
    "version",
    "0.0.0",
    "platform",
    "quickBuyApiUrl",
    "ref_auto_buy",
    "N",
    "clickAddToCartPage",
    "clickToCartPage",
    "username",
    "miao",
    "user_password",
    "miao123",
    "orderBuyRight",
    "payBuyRight",
    "miaoBuyRight",
    "cartBuyRight",
    "activeEndDate",
    "",
    "delayTimeOfBookTime",
    "0",
    "timeGap",
    "taobaokeFlag",
    "taobaokeAliTrackid",
    "quickBuyApiUrl:",
    "log",
    "send",
    "manifest.json",
    "form",
    "currentVersion",
    "append",
    "timestamp",
    "stringify",
    "json",
    "update timeGap:",
    "...... ",
    " ....................",
    "https://cart.taobao.com/",
    "ok",
    "data",
    "latestVersion",
    "versionDescription",
    "leakRight",
    "user",
    "enableFlag",
    "Y",
    "rightCode",
    "forEach",
    "userRight",
    "stat",
    "nochange",
    "miaoAds",
    "miaoMore",
    "sponsor",
    "baseUrl",
    "cdnUrl",
    "miaoCheck",
    "isCheck",
    "banners",
    "timers",
    "setBadgeText",
    "browserAction",
    "isDisplayInfo",
    "false",
    "time",
    "miaoData",
    "badge",
    "hide",
    "length",
    "show",
    "miaoTime",
    "true",
    "action",
    "get",
    "key",
    "tabStorage",
    "{}",
    "parse",
    "id",
    "tab",
    "backg-TimeGap:",
    "code execute time:",
    "set",
    "setJson",
    "value",
    " ......!",
    "Json........!",
    "addListener",
    "onMessage",
    "extension",
    "GET",
    "open",
    "withCredentials",
    "onreadystatechange",
    "readyState",
    "responseText",
    "t",
    "getTime",
    "floor",
    "-->backg-TimeGap:",
    " ,networkTime:",
    "status",
    "POST",
    "Content-type",
    "application/json; charset=utf-8",
    "setRequestHeader"
];

var queryUrl = _0x2ea7[0],
    queryData = new FormData(),
    quickBuyApiUrl = _0x2ea7[1],
    quickBuyUpdateDataUrl = quickBuyApiUrl + _0x2ea7[2],
    quickBuyUserDataUrl = quickBuyApiUrl + _0x2ea7[3],
    quickBuyServerTimeUrl = _0x2ea7[4],
    quickBuyParam = {},
    extID = chrome[_0x2ea7[7]][_0x2ea7[6]](_0x2ea7[5]),
    extVersion,
    platform = _0x2ea7[8];
quickBuyParam[_0x2ea7[9]] = _0x2ea7[10],
    localStorage[_0x2ea7[11]] = platform,
    localStorage[_0x2ea7[12]] = quickBuyApiUrl,
    localStorage[_0x2ea7[13]] = _0x2ea7[14],
    localStorage[_0x2ea7[15]] = _0x2ea7[14],
    localStorage[_0x2ea7[16]] = _0x2ea7[14];
if (!localStorage[_0x2ea7[17]]) {
    localStorage[_0x2ea7[17]] = _0x2ea7[18]
};
if (!localStorage[_0x2ea7[19]]) {
    localStorage[_0x2ea7[19]] = _0x2ea7[20]
};
if (!localStorage[_0x2ea7[21]]) {
    localStorage[_0x2ea7[21]] = _0x2ea7[14]
};
if (!localStorage[_0x2ea7[22]]) {
    localStorage[_0x2ea7[22]] = _0x2ea7[14]
};
if (!localStorage[_0x2ea7[23]]) {
    localStorage[_0x2ea7[23]] = _0x2ea7[14]
};
if (!localStorage[_0x2ea7[24]]) {
    localStorage[_0x2ea7[24]] = _0x2ea7[14]
};
if (!localStorage[_0x2ea7[25]]) {
    localStorage[_0x2ea7[25]] = _0x2ea7[26]
};
if (!localStorage[_0x2ea7[27]]) {
    localStorage[_0x2ea7[27]] = _0x2ea7[28]
};
if (!localStorage[_0x2ea7[29]]) {
    localStorage[_0x2ea7[29]] = _0x2ea7[28]
};
if (!localStorage[_0x2ea7[30]]) {
    localStorage[_0x2ea7[30]] = _0x2ea7[14]
};
if (!localStorage[_0x2ea7[31]]) {
    localStorage[_0x2ea7[31]] = _0x2ea7[26]
};
console[_0x2ea7[33]](_0x2ea7[32] + localStorage[_0x2ea7[12]]),
    AjaxPost(_0x2ea7[35], _0x2ea7[36],
        function (_0x53f4xb) {
            extVersion = _0x53f4xb[_0x2ea7[9]],
                localStorage[_0x2ea7[37]] = extVersion,
                queryData[_0x2ea7[38]](_0x2ea7[9], extVersion),
                quickBuyParam[_0x2ea7[9]] = extVersion
        })[_0x2ea7[34]](),
    queryData[_0x2ea7[38]](_0x2ea7[39], localStorage[_0x2ea7[39]]),
    quickBuyParam[_0x2ea7[39]] = localStorage[_0x2ea7[39]],
    AjaxPost(queryUrl, _0x2ea7[36], ajaxMiaoHandler)[_0x2ea7[34]](queryData),
    AjaxPost(quickBuyUpdateDataUrl, _0x2ea7[41], ajaxQuickBuyHandler)[_0x2ea7[34]](JSON[_0x2ea7[40]](quickBuyParam)),
    AjaxPost(quickBuyUserDataUrl, _0x2ea7[41], ajaxQuickBuyUserHandler)[_0x2ea7[34]](JSON[_0x2ea7[40]]({
        "username": localStorage[_0x2ea7[17]],
        "password": localStorage[_0x2ea7[19]]
    }));
var i = 0,
    gapTimeInterval = setInterval(function () {
        getGapTime(quickBuyServerTimeUrl,
            function (_0x53f4xe, _0x53f4xf) {
                i++;
                if (!isNaN(_0x53f4xe) && _0x53f4xf <= 40) {
                    localStorage[_0x2ea7[29]] = _0x53f4xe;
                    console[_0x2ea7[33]](_0x2ea7[42] + localStorage[_0x2ea7[29]]);
                    clearInterval(gapTimeInterval)
                };
                if (i >= 50) {
                    console[_0x2ea7[33]](_0x2ea7[43] + i + _0x2ea7[44]);
                    clearInterval(gapTimeInterval)
                }
            })
    },
        1000);
setInterval(function () {
    var i = 0;
    gapTimeInterval = setInterval(function () {
        getGapTime(quickBuyServerTimeUrl,
            function (_0x53f4xe, _0x53f4xf) {
                i++;
                if (!isNaN(_0x53f4xe) && _0x53f4xf <= 40) {
                    localStorage[_0x2ea7[29]] = _0x53f4xe;
                    console[_0x2ea7[33]](_0x2ea7[42] + localStorage[_0x2ea7[29]]);
                    clearInterval(gapTimeInterval)
                };
                if (i >= 50) {
                    console[_0x2ea7[33]](_0x2ea7[43] + i + _0x2ea7[44]);
                    clearInterval(gapTimeInterval)
                }
            })
    },
        1000)
},
    180000);
setInterval(function () {
    AjaxGet(_0x2ea7[45], _0x2ea7[36])
},
    90000);
setInterval(function () {
    var _0x53f4x10 = AjaxPost(queryUrl, _0x2ea7[36], ajaxMiaoHandler);
    queryData = new FormData();
    queryData[_0x2ea7[38]](_0x2ea7[39], localStorage[_0x2ea7[39]]);
    _0x53f4x10[_0x2ea7[34]](queryData)
},
    60 * 1000);
setInterval(function () {
    var _0x53f4x11 = AjaxPost(quickBuyUpdateDataUrl, _0x2ea7[41], ajaxQuickBuyHandler);
    quickBuyParam[_0x2ea7[39]] = localStorage[_0x2ea7[39]];
    _0x53f4x11[_0x2ea7[34]](JSON[_0x2ea7[40]](quickBuyParam))
},
    30 * 60 * 1000);
function ajaxQuickBuyHandler(_0x53f4xb) {
    if (!_0x53f4xb[_0x2ea7[46]]) {
        return
    };
    var _0x53f4x13 = _0x53f4xb[_0x2ea7[47]];
    localStorage[_0x2ea7[48]] = _0x53f4x13[_0x2ea7[9]] || _0x2ea7[26];
    localStorage[_0x2ea7[49]] = _0x53f4x13[_0x2ea7[49]] || _0x2ea7[26];
    localStorage[_0x2ea7[27]] = _0x53f4x13[_0x2ea7[27]] || _0x2ea7[28]
}
function ajaxQuickBuyUserHandler(_0x53f4xb) {
    localStorage[_0x2ea7[21]] = _0x2ea7[14];
    localStorage[_0x2ea7[22]] = _0x2ea7[14];
    localStorage[_0x2ea7[23]] = _0x2ea7[14];
    localStorage[_0x2ea7[24]] = _0x2ea7[14];
    localStorage[_0x2ea7[30]] = _0x2ea7[14];
    localStorage[_0x2ea7[31]] = _0x2ea7[26];
    localStorage[_0x2ea7[25]] = _0x2ea7[26];
    localStorage[_0x2ea7[50]] = _0x2ea7[14];
    if (!_0x53f4xb[_0x2ea7[46]]) {
        return
    };
    var _0x53f4x13 = _0x53f4xb[_0x2ea7[47]];
    localStorage[_0x2ea7[25]] = _0x53f4x13[_0x2ea7[51]][_0x2ea7[25]];
    localStorage[_0x2ea7[31]] = _0x53f4x13[_0x2ea7[51]][_0x2ea7[31]] || _0x2ea7[26];
    _0x53f4x13[_0x2ea7[56]][_0x2ea7[55]](function (_0x53f4x15, _0x53f4x16) {
        if (_0x53f4x15[_0x2ea7[52]] == _0x2ea7[53]) {
            if (_0x53f4x15[_0x2ea7[54]] == _0x2ea7[21]) {
                localStorage[_0x2ea7[21]] = _0x2ea7[53]
            };
            if (_0x53f4x15[_0x2ea7[54]] == _0x2ea7[22]) {
                localStorage[_0x2ea7[22]] = _0x2ea7[53]
            };
            if (_0x53f4x15[_0x2ea7[54]] == _0x2ea7[23]) {
                localStorage[_0x2ea7[23]] = _0x2ea7[53]
            };
            if (_0x53f4x15[_0x2ea7[54]] == _0x2ea7[30]) {
                localStorage[_0x2ea7[30]] = _0x2ea7[53]
            };
            if (_0x53f4x15[_0x2ea7[54]] == _0x2ea7[24]) {
                localStorage[_0x2ea7[24]] = _0x2ea7[53]
            };
            if (_0x53f4x15[_0x2ea7[54]] == _0x2ea7[50]) {
                localStorage[_0x2ea7[50]] = _0x2ea7[53]
            }
        }
    })
}
function ajaxMiaoHandler(_0x53f4xb) {
    if (_0x53f4xb[_0x2ea7[57]] == _0x2ea7[58]) {
        return
    };
    localStorage[_0x2ea7[59]] = _0x53f4xb[_0x2ea7[59]] ? JSON[_0x2ea7[40]](_0x53f4xb[_0x2ea7[59]]) : _0x2ea7[26];
    localStorage[_0x2ea7[60]] = _0x53f4xb[_0x2ea7[60]] || miaoMoreLink;
    localStorage[_0x2ea7[61]] = _0x53f4xb[_0x2ea7[61]] || _0x2ea7[26];
    localStorage[_0x2ea7[62]] = _0x53f4xb[_0x2ea7[62]] || _0x2ea7[26];
    localStorage[_0x2ea7[63]] = _0x53f4xb[_0x2ea7[63]] || _0x2ea7[26];
    localStorage[_0x2ea7[64]] = JSON[_0x2ea7[40]](_0x53f4xb[_0x2ea7[65]]) || _0x2ea7[26];
    localStorage[_0x2ea7[66]] = JSON[_0x2ea7[40]](_0x53f4xb[_0x2ea7[66]]) || _0x2ea7[26];
    localStorage[_0x2ea7[67]] = JSON[_0x2ea7[40]](_0x53f4xb[_0x2ea7[67]]) || _0x2ea7[26];
    localStorage[_0x2ea7[39]] = _0x53f4xb[_0x2ea7[39]] || _0x2ea7[26];
    chrome[_0x2ea7[69]][_0x2ea7[68]]({
        text: _0x2ea7[26]
    });
    localStorage[_0x2ea7[70]] = _0x2ea7[71];
    if (_0x53f4xb[_0x2ea7[57]] == _0x2ea7[46]) {
        var _0x53f4x18 = _0x53f4xb[_0x2ea7[72]];
        if (isTimeValidate(_0x53f4x18[0] * 1000)) {
            if (JSON[_0x2ea7[40]](_0x53f4xb[_0x2ea7[47]]) != localStorage[_0x2ea7[73]] || localStorage[_0x2ea7[74]] != _0x2ea7[75]) {
                chrome[_0x2ea7[69]][_0x2ea7[68]]({
                    text: _0x53f4xb[_0x2ea7[47]][_0x2ea7[76]] + _0x2ea7[26]
                });
                localStorage[_0x2ea7[74]] = _0x2ea7[77]
            };
            localStorage[_0x2ea7[78]] = JSON[_0x2ea7[40]](_0x53f4xb[_0x2ea7[72]]);
            localStorage[_0x2ea7[73]] = JSON[_0x2ea7[40]](_0x53f4xb[_0x2ea7[47]]);
            localStorage[_0x2ea7[70]] = _0x2ea7[79]
        } else { }
    } else { }
}
setInterval(function () {
    var _0x53f4x19 = AjaxPost(localStorage[_0x2ea7[12]] + _0x2ea7[3], _0x2ea7[41], ajaxQuickBuyUserHandler);
    _0x53f4x19[_0x2ea7[34]](JSON[_0x2ea7[40]]({
        "username": localStorage[_0x2ea7[17]],
        "password": localStorage[_0x2ea7[19]]
    }))
},
    1000 * 60 * 120);
chrome[_0x2ea7[97]][_0x2ea7[96]][_0x2ea7[95]](function (_0x53f4x1a, _0x53f4x1b, _0x53f4x1c) {
    var _0x53f4x1d;
    if (_0x53f4x1a[_0x2ea7[80]] == _0x2ea7[81]) {
        var _0x53f4x1e = +new Date;
        var _0x53f4x1f = {};
        for (var _0x53f4x20 in _0x53f4x1a[_0x2ea7[47]][_0x2ea7[82]]) {
            if (localStorage[_0x53f4x20]) {
                _0x53f4x1f[_0x53f4x20] = localStorage[_0x53f4x20]
            }
        };
        var _0x53f4x21 = JSON[_0x2ea7[85]](sessionStorage[_0x2ea7[83]] || _0x2ea7[84]);
        if (_0x53f4x21[_0x53f4x1b[_0x2ea7[87]][_0x2ea7[86]]]) {
            for (var _0x53f4x22 in _0x53f4x21[_0x53f4x1b[_0x2ea7[87]][_0x2ea7[86]]]) {
                _0x53f4x1f[_0x53f4x22] = _0x53f4x21[_0x53f4x1b[_0x2ea7[87]][_0x2ea7[86]]][_0x53f4x22]
            }
        };
        _0x53f4x1d = {
            'status': 200,
            'value': _0x53f4x1f
        };
        console[_0x2ea7[33]](_0x2ea7[88] + _0x53f4x1f[_0x2ea7[29]]);
        console[_0x2ea7[33]](_0x2ea7[89] + (+ new Date - parseInt(_0x53f4x1e)));
        _0x53f4x1c(_0x53f4x1d)
    };
    if (_0x53f4x1a[_0x2ea7[80]] == _0x2ea7[90] || _0x53f4x1a[_0x2ea7[80]] == _0x2ea7[91]) {
        if (!sessionStorage[_0x2ea7[83]]) {
            sessionStorage[_0x2ea7[83]] = _0x2ea7[84]
        };
        var _0x53f4x21 = JSON[_0x2ea7[85]](sessionStorage[_0x2ea7[83]]),
            _0x53f4x23 = function (_0x53f4x21, _0x53f4x22, _0x53f4x1f) {
                var _0x53f4x24 = _0x53f4x21[_0x53f4x1b[_0x2ea7[87]][_0x2ea7[86]]] || {};
                _0x53f4x24[_0x53f4x22] = _0x53f4x1f;
                _0x53f4x21[_0x53f4x1b[_0x2ea7[87]][_0x2ea7[86]]] = _0x53f4x24
            };
        if (_0x53f4x1a[_0x2ea7[80]] == _0x2ea7[90]) {
            _0x53f4x23(_0x53f4x21, _0x53f4x1a[_0x2ea7[47]][_0x2ea7[82]], _0x53f4x1a[_0x2ea7[47]][_0x2ea7[92]]);
            sessionStorage[_0x2ea7[83]] = JSON[_0x2ea7[40]](_0x53f4x21);
            _0x53f4x1d = {
                'status': 200,
                'errbuf': _0x53f4x1f + _0x2ea7[93]
            }
        } else {
            for (var _0x53f4x22 in _0x53f4x1a[_0x2ea7[47]]) {
                _0x53f4x23(_0x53f4x21, _0x53f4x22, _0x53f4x1a[_0x2ea7[47]][_0x53f4x22])
            };
            sessionStorage[_0x2ea7[83]] = JSON[_0x2ea7[40]](_0x53f4x21);
            _0x53f4x1d = {
                'status': 200,
                'errbuf': _0x2ea7[94]
            }
        };
        _0x53f4x1c(_0x53f4x1d)
    }
});
function getGapTime(_0x53f4x26, _0x53f4x27) {
    var _0x53f4x28 = new XMLHttpRequest();
    var _0x53f4x29, _0x53f4x2a, _0x53f4xf, _0x53f4x2b, _0x53f4x2c, _0x53f4xb;
    _0x53f4x28[_0x2ea7[99]](_0x2ea7[98], _0x53f4x26, true);
    _0x53f4x28[_0x2ea7[100]] = true;
    _0x53f4x28[_0x2ea7[101]] = function () {
        if (_0x53f4x28[_0x2ea7[102]] === 4) {
            _0x53f4x2a = new Date();
            _0x53f4xb = JSON[_0x2ea7[85]](_0x53f4x28[_0x2ea7[103]]);
            _0x53f4x2b = parseInt(_0x53f4xb[_0x2ea7[47]][_0x2ea7[104]]);
            if (!_0x53f4x2b) {
                return
            };
            _0x53f4xf = Math[_0x2ea7[106]]((_0x53f4x2a[_0x2ea7[105]]() - _0x53f4x29[_0x2ea7[105]]()) / 2);
            _0x53f4x2c = _0x53f4x2b - (_0x53f4x2a[_0x2ea7[105]]() - _0x53f4xf);
            console[_0x2ea7[33]](_0x2ea7[107] + _0x53f4x2c + _0x2ea7[108] + _0x53f4xf);
            _0x53f4x27 && _0x53f4x27(_0x53f4x2c, _0x53f4xf)
        }
    };
    _0x53f4x29 = new Date();
    _0x53f4x28[_0x2ea7[34]]()
}
function AjaxPost(_0x53f4x26, _0x53f4x2e, _0x53f4x2f) {
    var _0x53f4x28 = new XMLHttpRequest();
    _0x53f4x28[_0x2ea7[101]] = function () {
        if (_0x53f4x28[_0x2ea7[102]] == 4) {
            if (_0x53f4x28[_0x2ea7[109]] == 200) {
                rsp = JSON[_0x2ea7[85]](_0x53f4x28[_0x2ea7[103]]);
                _0x53f4x2f(rsp)
            }
        }
    },
        _0x53f4x28[_0x2ea7[99]](_0x2ea7[110], _0x53f4x26, true);
    if (_0x53f4x2e == _0x2ea7[41]) {
        _0x53f4x28[_0x2ea7[113]](_0x2ea7[111], _0x2ea7[112])
    };
    return _0x53f4x28
}
function AjaxGet(_0x53f4x26, _0x53f4x2e, _0x53f4x27) {
    var _0x53f4x28 = new XMLHttpRequest();
    _0x53f4x28[_0x2ea7[99]](_0x2ea7[98], _0x53f4x26, true),
        _0x53f4x28[_0x2ea7[100]] = true,
        _0x53f4x28[_0x2ea7[101]] = function () {
            if (_0x53f4x28[_0x2ea7[102]] == 4) {
                if (_0x53f4x28[_0x2ea7[109]] == 200) {
                    rsp = _0x53f4x28[_0x2ea7[103]],
                        _0x53f4x27 && _0x53f4x27(rsp)
                }
            }
        },
        _0x53f4x2e == _0x2ea7[41] && _0x53f4x28[_0x2ea7[113]](_0x2ea7[111], _0x2ea7[112]),
        _0x53f4x28[_0x2ea7[34]]()
}
