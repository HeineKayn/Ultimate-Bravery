! function(e) {
    function t(t) {
        for (var a, r, c = t[0], s = t[1], l = t[2], u = 0, d = []; u < c.length; u++) r = c[u], Object.prototype.hasOwnProperty.call(o, r) && o[r] && d.push(o[r][0]), o[r] = 0;
        for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
        for (m && m(t); d.length;) d.shift()();
        return i.push.apply(i, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], a = !0, r = 1; r < n.length; r++) {
                var s = n[r];
                0 !== o[s] && (a = !1)
            }
            a && (i.splice(t--, 1), e = c(c.s = n[0]))
        }
        return e
    }
    var a = {},
        r = {
            40: 0
        },
        o = {
            40: 0
        },
        i = [];

    function c(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports
    }
    c.e = function(e) {
        var t = [];
        r[e] ? t.push(r[e]) : 0 !== r[e] && {
            42: 1
        } [e] && t.push(r[e] = new Promise((function(t, n) {
            for (var a = "static/css/" + ({
                    0: "vendors~components-Leaderboards-LeaderboardsPage~components-Overwolf-OWLeaderboards-LeaderboardsPage~294337cd",
                    1: "components-Champions~components-OWChampions~components-Overwolf-OWSummonerProfiles-views-ProfilesMai~a3a0274b",
                    2: "components-Champions~components-OWChampions~components-OWStatsTables~components-StatsTables",
                    3: "vendors~components-Champions~components-OWChampions~components-Overwolf-OWSummonerProfiles-views-Pro~cd19533f",
                    4: "components-OWChampions~components-StatsTables",
                    5: "components-Overwolf-OWSummonerProfiles-views-ProfilesMain-SummonerProfile~components-SummonerProfile~38a54d94",
                    6: "vendors~components-Accounts-Settings-Settings~components-Premium-views-PremiumCheckout",
                    7: "components-Accounts-PasswordReset-PasswordReset",
                    8: "components-Accounts-RecoverAccount-RecoverAccount",
                    9: "components-Accounts-Settings-Settings",
                    10: "components-Careers",
                    11: "components-Champions",
                    12: "components-Champions-Overview",
                    13: "components-Champions-ProBuilds-views-ProBuild",
                    14: "components-Champions-RunesGuide-RunesGuideContainer",
                    15: "components-DesktopAppSplashPage-DesktopAppSplashPage",
                    16: "components-Leaderboards-LeaderboardsPage",
                    17: "components-OWChampions",
                    18: "components-OWStatsTables",
                    19: "components-Overwolf-OWChampions-Overview",
                    20: "components-Overwolf-OWLeaderboards-LeaderboardsPage",
                    21: "components-Overwolf-OWStatsTables-TierList",
                    22: "components-Overwolf-OWSummonerProfiles-views-ProfilesMain-SummonerProfile",
                    23: "components-OverwolfContent",
                    24: "components-Pages-About-About",
                    25: "components-Pages-FAQ",
                    26: "components-Pages-LandingPage-LandingPageContainer",
                    27: "components-Pages-SupportUs-SupportUsPage",
                    28: "components-Premium-views-PremiumCheckout",
                    29: "components-PrivacyPolicy",
                    30: "components-PrivacyShield",
                    31: "components-StatsTables",
                    32: "components-StatsTables-Combat",
                    33: "components-StatsTables-DuoTierList",
                    34: "components-StatsTables-Objectives",
                    35: "components-StatsTables-TierList",
                    36: "components-SummonerProfiles-SummonerProfileMatchRedirect",
                    37: "components-SummonerProfiles-views-LiveGame-LiveGameSplash",
                    38: "components-SummonerProfiles-views-ProfilesMain-SummonerProfile",
                    39: "components-TermsOfService",
                    41: "vendors~components-Champions",
                    42: "vendors~components-Pages-About-About"
                } [e] || e) + "." + {
                    0: "31d6cfe0d16ae931b73c",
                    1: "31d6cfe0d16ae931b73c",
                    2: "31d6cfe0d16ae931b73c",
                    3: "31d6cfe0d16ae931b73c",
                    4: "31d6cfe0d16ae931b73c",
                    5: "31d6cfe0d16ae931b73c",
                    6: "31d6cfe0d16ae931b73c",
                    7: "31d6cfe0d16ae931b73c",
                    8: "31d6cfe0d16ae931b73c",
                    9: "31d6cfe0d16ae931b73c",
                    10: "31d6cfe0d16ae931b73c",
                    11: "31d6cfe0d16ae931b73c",
                    12: "31d6cfe0d16ae931b73c",
                    13: "31d6cfe0d16ae931b73c",
                    14: "31d6cfe0d16ae931b73c",
                    15: "31d6cfe0d16ae931b73c",
                    16: "31d6cfe0d16ae931b73c",
                    17: "31d6cfe0d16ae931b73c",
                    18: "31d6cfe0d16ae931b73c",
                    19: "31d6cfe0d16ae931b73c",
                    20: "31d6cfe0d16ae931b73c",
                    21: "31d6cfe0d16ae931b73c",
                    22: "31d6cfe0d16ae931b73c",
                    23: "31d6cfe0d16ae931b73c",
                    24: "31d6cfe0d16ae931b73c",
                    25: "31d6cfe0d16ae931b73c",
                    26: "31d6cfe0d16ae931b73c",
                    27: "31d6cfe0d16ae931b73c",
                    28: "31d6cfe0d16ae931b73c",
                    29: "31d6cfe0d16ae931b73c",
                    30: "31d6cfe0d16ae931b73c",
                    31: "31d6cfe0d16ae931b73c",
                    32: "31d6cfe0d16ae931b73c",
                    33: "31d6cfe0d16ae931b73c",
                    34: "31d6cfe0d16ae931b73c",
                    35: "31d6cfe0d16ae931b73c",
                    36: "31d6cfe0d16ae931b73c",
                    37: "31d6cfe0d16ae931b73c",
                    38: "31d6cfe0d16ae931b73c",
                    39: "31d6cfe0d16ae931b73c",
                    41: "31d6cfe0d16ae931b73c",
                    42: "c84267a7d3b7edd22693",
                    44: "31d6cfe0d16ae931b73c",
                    45: "31d6cfe0d16ae931b73c",
                    46: "31d6cfe0d16ae931b73c",
                    47: "31d6cfe0d16ae931b73c",
                    48: "31d6cfe0d16ae931b73c",
                    49: "31d6cfe0d16ae931b73c",
                    50: "31d6cfe0d16ae931b73c",
                    51: "31d6cfe0d16ae931b73c",
                    52: "31d6cfe0d16ae931b73c",
                    53: "31d6cfe0d16ae931b73c",
                    54: "31d6cfe0d16ae931b73c",
                    55: "31d6cfe0d16ae931b73c",
                    56: "31d6cfe0d16ae931b73c",
                    57: "31d6cfe0d16ae931b73c",
                    58: "31d6cfe0d16ae931b73c",
                    59: "31d6cfe0d16ae931b73c",
                    60: "31d6cfe0d16ae931b73c",
                    61: "31d6cfe0d16ae931b73c",
                    62: "31d6cfe0d16ae931b73c",
                    63: "31d6cfe0d16ae931b73c",
                    64: "31d6cfe0d16ae931b73c",
                    65: "31d6cfe0d16ae931b73c",
                    66: "31d6cfe0d16ae931b73c",
                    67: "31d6cfe0d16ae931b73c",
                    68: "31d6cfe0d16ae931b73c",
                    69: "31d6cfe0d16ae931b73c",
                    70: "31d6cfe0d16ae931b73c",
                    71: "31d6cfe0d16ae931b73c",
                    72: "31d6cfe0d16ae931b73c",
                    73: "31d6cfe0d16ae931b73c",
                    74: "31d6cfe0d16ae931b73c",
                    75: "31d6cfe0d16ae931b73c",
                    76: "31d6cfe0d16ae931b73c",
                    77: "31d6cfe0d16ae931b73c",
                    78: "31d6cfe0d16ae931b73c",
                    79: "31d6cfe0d16ae931b73c",
                    80: "31d6cfe0d16ae931b73c",
                    81: "31d6cfe0d16ae931b73c",
                    82: "31d6cfe0d16ae931b73c",
                    83: "31d6cfe0d16ae931b73c",
                    84: "31d6cfe0d16ae931b73c",
                    85: "31d6cfe0d16ae931b73c",
                    86: "31d6cfe0d16ae931b73c",
                    87: "31d6cfe0d16ae931b73c",
                    88: "31d6cfe0d16ae931b73c",
                    89: "31d6cfe0d16ae931b73c",
                    90: "31d6cfe0d16ae931b73c",
                    91: "31d6cfe0d16ae931b73c",
                    92: "31d6cfe0d16ae931b73c",
                    93: "31d6cfe0d16ae931b73c",
                    94: "31d6cfe0d16ae931b73c",
                    95: "31d6cfe0d16ae931b73c",
                    96: "31d6cfe0d16ae931b73c",
                    97: "31d6cfe0d16ae931b73c",
                    98: "31d6cfe0d16ae931b73c",
                    99: "31d6cfe0d16ae931b73c",
                    100: "31d6cfe0d16ae931b73c",
                    101: "31d6cfe0d16ae931b73c",
                    102: "31d6cfe0d16ae931b73c",
                    103: "31d6cfe0d16ae931b73c",
                    104: "31d6cfe0d16ae931b73c",
                    105: "31d6cfe0d16ae931b73c",
                    106: "31d6cfe0d16ae931b73c",
                    107: "31d6cfe0d16ae931b73c",
                    108: "31d6cfe0d16ae931b73c",
                    109: "31d6cfe0d16ae931b73c",
                    110: "31d6cfe0d16ae931b73c",
                    111: "31d6cfe0d16ae931b73c",
                    112: "31d6cfe0d16ae931b73c",
                    113: "31d6cfe0d16ae931b73c",
                    114: "31d6cfe0d16ae931b73c",
                    115: "31d6cfe0d16ae931b73c",
                    116: "31d6cfe0d16ae931b73c",
                    117: "31d6cfe0d16ae931b73c",
                    118: "31d6cfe0d16ae931b73c",
                    119: "31d6cfe0d16ae931b73c",
                    120: "31d6cfe0d16ae931b73c",
                    121: "31d6cfe0d16ae931b73c"
                } [e] + ".css", o = c.p + a, i = document.getElementsByTagName("link"), s = 0; s < i.length; s++) {
                var l = (m = i[s]).getAttribute("data-href") || m.getAttribute("href");
                if ("stylesheet" === m.rel && (l === a || l === o)) return t()
            }
            var u = document.getElementsByTagName("style");
            for (s = 0; s < u.length; s++) {
                var m;
                if ((l = (m = u[s]).getAttribute("data-href")) === a || l === o) return t()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet", d.type = "text/css", d.onload = t, d.onerror = function(t) {
                var a = t && t.target && t.target.src || o,
                    i = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED", i.request = a, delete r[e], d.parentNode.removeChild(d), n(i)
            }, d.href = o, document.getElementsByTagName("head")[0].appendChild(d)
        })).then((function() {
            r[e] = 0
        })));
        var n = o[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var a = new Promise((function(t, a) {
                    n = o[e] = [t, a]
                }));
                t.push(n[2] = a);
                var i, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, c.nc && s.setAttribute("nonce", c.nc), s.src = function(e) {
                    return c.p + "static/js/" + ({
                        0: "vendors~components-Leaderboards-LeaderboardsPage~components-Overwolf-OWLeaderboards-LeaderboardsPage~294337cd",
                        1: "components-Champions~components-OWChampions~components-Overwolf-OWSummonerProfiles-views-ProfilesMai~a3a0274b",
                        2: "components-Champions~components-OWChampions~components-OWStatsTables~components-StatsTables",
                        3: "vendors~components-Champions~components-OWChampions~components-Overwolf-OWSummonerProfiles-views-Pro~cd19533f",
                        4: "components-OWChampions~components-StatsTables",
                        5: "components-Overwolf-OWSummonerProfiles-views-ProfilesMain-SummonerProfile~components-SummonerProfile~38a54d94",
                        6: "vendors~components-Accounts-Settings-Settings~components-Premium-views-PremiumCheckout",
                        7: "components-Accounts-PasswordReset-PasswordReset",
                        8: "components-Accounts-RecoverAccount-RecoverAccount",
                        9: "components-Accounts-Settings-Settings",
                        10: "components-Careers",
                        11: "components-Champions",
                        12: "components-Champions-Overview",
                        13: "components-Champions-ProBuilds-views-ProBuild",
                        14: "components-Champions-RunesGuide-RunesGuideContainer",
                        15: "components-DesktopAppSplashPage-DesktopAppSplashPage",
                        16: "components-Leaderboards-LeaderboardsPage",
                        17: "components-OWChampions",
                        18: "components-OWStatsTables",
                        19: "components-Overwolf-OWChampions-Overview",
                        20: "components-Overwolf-OWLeaderboards-LeaderboardsPage",
                        21: "components-Overwolf-OWStatsTables-TierList",
                        22: "components-Overwolf-OWSummonerProfiles-views-ProfilesMain-SummonerProfile",
                        23: "components-OverwolfContent",
                        24: "components-Pages-About-About",
                        25: "components-Pages-FAQ",
                        26: "components-Pages-LandingPage-LandingPageContainer",
                        27: "components-Pages-SupportUs-SupportUsPage",
                        28: "components-Premium-views-PremiumCheckout",
                        29: "components-PrivacyPolicy",
                        30: "components-PrivacyShield",
                        31: "components-StatsTables",
                        32: "components-StatsTables-Combat",
                        33: "components-StatsTables-DuoTierList",
                        34: "components-StatsTables-Objectives",
                        35: "components-StatsTables-TierList",
                        36: "components-SummonerProfiles-SummonerProfileMatchRedirect",
                        37: "components-SummonerProfiles-views-LiveGame-LiveGameSplash",
                        38: "components-SummonerProfiles-views-ProfilesMain-SummonerProfile",
                        39: "components-TermsOfService",
                        41: "vendors~components-Champions",
                        42: "vendors~components-Pages-About-About"
                    } [e] || e) + "." + {
                        0: "5cc47e950fb4dc12dd86",
                        1: "8134b6a022e3353f0305",
                        2: "ad80403a054ee2c86eda",
                        3: "0e8dd06921f3fa8776df",
                        4: "5922afee7a46837c64fa",
                        5: "7b31de9f2054087e0497",
                        6: "0e259085eee27f6928c2",
                        7: "d9d0334462ae2ddb3479",
                        8: "1052dd96c1d5dee650bf",
                        9: "6cc30d66a4b84256ec94",
                        10: "1f62abacb95e5cebd4f3",
                        11: "32560616e2bb73a9cc8d",
                        12: "9b084c02e7ab23977b49",
                        13: "494324e4b5ca35011be3",
                        14: "406cb1e5b998a5e1e2a6",
                        15: "ff712411f315bdce006e",
                        16: "07001596f83ad86867c9",
                        17: "abfe6d9e8c9ede1a34f1",
                        18: "d6ef826c71db96c2a95e",
                        19: "0375e5b513085e03ba10",
                        20: "ab90f42c94227f0b7e8d",
                        21: "f01cec97370ec3e423c6",
                        22: "79ea214d9241da75da33",
                        23: "5071670f2e4d32f87b82",
                        24: "55e340130f1a47f9289e",
                        25: "2dc0f17e07017429ae07",
                        26: "d59002a5cb348d687831",
                        27: "2705ff4da0210dec3687",
                        28: "e58dd6edd1f2fcf245b9",
                        29: "a25411fe7254b1305054",
                        30: "3339ffc6dc9937b37f60",
                        31: "8d8a4afa3c27e6e75d31",
                        32: "72708f59358b29d2d242",
                        33: "37b693cedbf9b4eb6503",
                        34: "5411ce52f28a2bc41041",
                        35: "cdfccb2bb4763f81d5b8",
                        36: "629aef14df932811d816",
                        37: "e2c6d5438f63894727fd",
                        38: "12cbf382da2113efc671",
                        39: "e180de54d0ea4aea4679",
                        41: "06bd4b0b267fe0384a3a",
                        42: "76444160d953c3400352",
                        44: "f754eda57830c79bd0db",
                        45: "bfd95abc0efbd6a1aa03",
                        46: "78a09cc83a52aa7fb918",
                        47: "823d52c3c238882fe072",
                        48: "ad710a8220cd0ccdf7fd",
                        49: "9c947a59b633852c6df9",
                        50: "d5d85ea84ee6513fbc41",
                        51: "a2a000a24f38974ef746",
                        52: "5e5a905e025752e55f99",
                        53: "beb1ea2680ed3a32c228",
                        54: "88ee09f3fd65a461d3f1",
                        55: "ac91993d79dc592c8c52",
                        56: "96f29559832646943731",
                        57: "6a411de94a9704b0f513",
                        58: "2cc0539acff1d166045e",
                        59: "384832cd61576bf9386f",
                        60: "95c801bad9c9f8b948ac",
                        61: "fdbf547db326ca350fd0",
                        62: "067ad82b9041a230f711",
                        63: "ec1f436235885f94e302",
                        64: "3d608dd54c6f917ad359",
                        65: "f5eb0238a8f156887246",
                        66: "ed5116ede5beb080f535",
                        67: "98ffc7ae954d853bf554",
                        68: "8ef5715368b5b5c1ca11",
                        69: "7c806f474e2e7960a5c0",
                        70: "c6e42822e363f905a6fe",
                        71: "647e0f994d58cd0344c0",
                        72: "ca3dd08eb6a3265c684a",
                        73: "5a22f9a8d362bbb3afd4",
                        74: "78deb975c4c289f21801",
                        75: "f2c434c2ae7a8a0152a4",
                        76: "d988b211c5380e08208f",
                        77: "1c5dd70c192421665d86",
                        78: "78970860b87999d4d9f6",
                        79: "d7c4cf8ffbf5921fd6de",
                        80: "7d17fae8008f1cf60822",
                        81: "8cbaf515e06969545dcb",
                        82: "e48869e0f2de01aae62f",
                        83: "5de972ffa5fefedc07ae",
                        84: "fb1f10beda27d4198efe",
                        85: "6ea840767eb87f5a917f",
                        86: "d6b20f1bc402042d5c26",
                        87: "ed2b8acd9176661aecc3",
                        88: "744f0a93556c4f9e3004",
                        89: "4e8540c9d8858bc7b153",
                        90: "5921e27a0a5d392c127f",
                        91: "7de3bbe549cc97adb30a",
                        92: "06a6154cca968b93b8e6",
                        93: "341f443f7794af12e886",
                        94: "6c6a3757696bd1d1c182",
                        95: "45350de7cc3ec308f80a",
                        96: "6e6d93ce4632f66b1c65",
                        97: "bf8da0bbe7ad130e4d04",
                        98: "e7edf2be594e660cd213",
                        99: "e8e5f52b824b190d11da",
                        100: "3894350990f8fa36de96",
                        101: "0c456df7bc9f2fa015a1",
                        102: "c5e0b96ef15bb169c807",
                        103: "5b11682504bfe880ec47",
                        104: "18274fd96951bab78044",
                        105: "7daf2b682d72c21e3854",
                        106: "bdce37ab8d99a62a1a60",
                        107: "1e392bb899bcba1c7ddb",
                        108: "bb0927428fa6ac911511",
                        109: "263d67858308a9085b27",
                        110: "47933f08878f752060c4",
                        111: "083c057c7c807e9f05b9",
                        112: "41df40133d2d5108ff57",
                        113: "a883c2eefec7f78cd424",
                        114: "bf66c067ea8f53099e75",
                        115: "4528e433c1268e28090f",
                        116: "8e41e505a2eb12f8786b",
                        117: "3caa089ffd0ae6959fd0",
                        118: "98bd74a460d14bf711cf",
                        119: "01a993b4df5101323178",
                        120: "452202781a7558105b20",
                        121: "01973a97f68f4019c03e"
                    } [e] + ".js"
                }(e);
                var l = new Error;
                i = function(t) {
                    s.onerror = s.onload = null, clearTimeout(u);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var a = t && ("load" === t.type ? "missing" : t.type),
                                r = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + a + ": " + r + ")", l.name = "ChunkLoadError", l.type = a, l.request = r, n[1](l)
                        }
                        o[e] = void 0
                    }
                };
                var u = setTimeout((function() {
                    i({
                        type: "timeout",
                        target: s
                    })
                }), 12e4);
                s.onerror = s.onload = i, document.head.appendChild(s)
            } return Promise.all(t)
    }, c.m = e, c.c = a, c.d = function(e, t, n) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, c.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.t = function(e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (c.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) c.d(n, a, function(t) {
                return e[t]
            }.bind(null, a));
        return n
    }, c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "https://static.u.gg/lol/", c.oe = function(e) {
        throw console.error(e), e
    };
    var s = window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || [],
        l = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var u = 0; u < s.length; u++) t(s[u]);
    var m = l;
    i.push([1152, 43]), n()
}({
    103: function(e, t, n) {
        "use strict";
        n.d(t, "n", (function() {
            return I
        })), n.d(t, "c", (function() {
            return P
        })), n.d(t, "i", (function() {
            return A
        })), n.d(t, "j", (function() {
            return L
        })), n.d(t, "o", (function() {
            return C
        })), n.d(t, "k", (function() {
            return R
        })), n.d(t, "g", (function() {
            return x
        })), n.d(t, "d", (function() {
            return M
        })), n.d(t, "h", (function() {
            return D
        })), n.d(t, "l", (function() {
            return G
        })), n.d(t, "f", (function() {
            return B
        })), n.d(t, "m", (function() {
            return q
        })), n.d(t, "b", (function() {
            return U
        })), n.d(t, "a", (function() {
            return F
        })), n.d(t, "e", (function() {
            return $
        }));
        var a, r = n(1),
            o = n.n(r),
            i = n(31),
            c = n.n(i),
            s = n(11),
            l = n.n(s),
            u = n(87),
            m = n(0),
            d = n(145),
            p = n(188),
            f = n(280),
            g = n(15),
            h = n(19),
            v = n.n(h),
            b = n(20),
            y = n(226),
            O = Object(b.a)(a || (a = v()(["\n  query matchPage(\n    $matchIdString: String!,\n    $matchIdInt: Int!,\n    $regionId: String!,\n    $summonerName: String!,\n    $version: String!\n  ) {\n    fetchPostgameTags(\n      matchId: $matchIdInt,\n      regionId: $regionId,\n      version: $version\n    ) {\n      summonerName\n      tagList {\n        category\n        meta\n        tag\n        type\n      }\n    }\n    match(\n      matchId: $matchIdString,\n      regionId: $regionId,\n      summonerName: $summonerName,\n      version: $version\n    ) {\n      allPlayerRanks {\n        rankScores {\n          lastUpdatedAt\n          losses\n          lp\n          queueType\n          rank\n          role\n          seasonId\n          tier\n          wins\n        }\n        exodiaUuid\n        summonerName\n      }\n      historicalData {\n        xpDifferenceFrames {\n          oppValue\n          timestamp\n          youValue\n        }\n        teamOneOverview {\n          bans\n          baronKills\n          dragonKills\n          gold\n          inhibitorKills\n          kills\n          riftHeraldKills\n          towerKills\n        }\n        teamTwoOverview {\n          bans\n          baronKills\n          dragonKills\n          gold\n          inhibitorKills\n          kills\n          riftHeraldKills\n          towerKills\n        }\n        runes\n        skillPath\n        statShards\n        accountIdV3\n        csDifferenceFrames {\n          oppValue\n          timestamp\n          youValue\n        }\n        finishedItems{\n          itemId\n          timestamp\n          type\n        }\n        goldDifferenceFrames {\n          oppValue\n          timestamp\n          youValue\n        }\n        kaDifferenceFrames {\n          oppValue\n          timestamp\n          youValue\n        }\n        itemPath {\n          itemId\n          timestamp\n          type\n        }\n        matchId\n        postGameData {\n          assists\n          carryPercentage\n          championId\n          cs\n          damage\n          deaths\n          gold\n          items\n          jungleCs\n          keystone\n          kills\n          level\n          role\n          subStyle\n          summonerName\n          summonerSpells\n          teamId\n          wardsPlaced\n          level\n        }\n        primaryStyle\n        queueType\n        regionId\n        subStyle\n        summonerName\n      }\n      matchSummary {\n        ", "\n      }\n      playerInfo {\n        accountIdV3\n        accountIdV4\n        exodiaUuid\n        iconId\n        puuidV4\n        regionId\n        summonerIdV3\n        summonerIdV4\n        summonerLevel\n        summonerName\n      }\n      playerRank {\n        exodiaUuid\n        rankScores {\n          lastUpdatedAt\n          losses\n          lp\n          queueType\n          rank\n          role\n          seasonId\n          tier\n          wins\n        }\n      }\n      performanceScore {\n        hardCarry\n        teamplay\n        summonerName\n      }\n      winningTeam\n    }\n    fetchPerformanceScore(\n      matchId: $matchIdString,\n      regionId: $regionId,\n      summonerName: $summonerName,\n      version: $version\n    ) {\n      damageShare\n      damageShareAgg\n      damageShareTotal\n      finalLvlDiff\n      finalLvlDiffAgg\n      finalLvlDiffTotal\n      goldShare\n      goldShareAgg\n      goldShareTotal\n      hardCarry\n      killParticipation\n      killParticipationAgg\n      killParticipationTotal\n      kpOverGs\n      kpOverGsAgg\n      kpOverGsTotal\n      summonerName\n      teamplay\n      visionScore\n      visionScoreAgg\n      visionScoreTotal\n    }\n  }\n"])), y.b),
            E = n(18),
            w = n(61),
            j = n(68),
            N = n(24),
            S = n(2);

        function k(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function _(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? k(Object(n), !0).forEach((function(t) {
                    l()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function T(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = Object(S.n)(),
                r = a.getChampionIdByName,
                o = Object.assign({}, j.g, n),
                i = {
                    regionId: e || "",
                    summonerName: t ? Object(E.L)(t.toLowerCase()) : "",
                    queueType: String(Object(u.c)(o.queueType)),
                    role: String(Object(u.d)(Object(E.l)(o.role))),
                    seasonId: String(o.season || w.a),
                    seasonIdInt: parseInt(o.season || w.a),
                    championId: o.champion && r(o.champion) || "-1"
                };
            return "normal_aram" !== o.queueType && "nexus_blitz" !== o.queueType || (i.role = "6"), {
                apiParams: i,
                params: o
            }
        }

        function I(e, t, n, a) {
            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                o = T(e, t, n, a),
                i = o.apiParams;
            return Object(d.a)(g.s, _({
                variables: i
            }, r))
        }
        var P = function(e, t, n, a, r) {
            var o = function(e, t, n, a) {
                    var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                    return Object(d.a)(g.i, _(_({}, r), {}, {
                        variables: {
                            summonerNames: e,
                            regionId: t,
                            championIds: n,
                            queueTypes: e.map((function(e) {
                                return a || ""
                            }))
                        }
                    }))
                }(e, t, n, a, r),
                i = o.data,
                s = o.loading,
                u = o.error;
            return {
                tag_data: i && Object.assign.apply(Object, [{}].concat(c()(i.fetchMultipleSummonerTags.map((function(e) {
                    return l()({}, e.summonerName, e.tagList)
                }))))),
                tag_loading: s,
                tag_error: u
            }
        };

        function A(e, t, n) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return Object(d.a)(g.g, _(_({}, a), {}, {
                variables: {
                    summonerName: e,
                    regionId: t,
                    queueType: n
                }
            }))
        }

        function L(e, t, n) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return Object(d.a)(g.m, _(_({}, a), {}, {
                variables: {
                    summonerName: e,
                    regionId: t,
                    queueType: n
                }
            }))
        }

        function C(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return Object(d.a)(g.t, _(_({}, n), {}, {
                variables: {
                    regionId: e,
                    summonerName: t,
                    queueType: [420, 440]
                }
            }))
        }

        function R(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = n.seasonId,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return Object(d.a)(g.n, _(_({}, r), {}, {
                variables: {
                    summonerName: e,
                    regionId: t,
                    seasonId: a || w.a
                }
            }))
        }

        function x(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = (n.queueType, n.patchVersion),
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return Object(d.a)(g.l, _(_({}, r), {}, {
                variables: {
                    summonerName: e,
                    regionId: t,
                    patchVersion: a || "11_1"
                }
            }))
        }

        function M(e, t, n, a) {
            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                i = Object(p.a)(),
                c = Object(m.useState)({
                    loading: !1,
                    data: null,
                    error: null
                }),
                s = o()(c, 2),
                l = s[0],
                u = s[1],
                d = T(e, t, n, a),
                f = d.apiParams,
                h = function() {
                    u({
                        loading: !0,
                        data: null,
                        error: null
                    }), i.query(_({
                        query: g.s,
                        variables: f
                    }, r)).then((function(e) {
                        u({
                            loading: !1,
                            data: e.data,
                            error: null
                        })
                    })).catch((function(e) {
                        u({
                            loading: !1,
                            data: null,
                            error: e
                        })
                    }))
                };
            return [h, l]
        }

        function D(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = n.queueType,
                r = n.seasonId,
                o = n.role,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return Object(d.a)(g.o, _(_({}, i), {}, {
                variables: {
                    summonerName: e,
                    regionId: t,
                    role: o || 7,
                    seasonId: r || w.a,
                    queueType: a || []
                }
            }))
        }

        function G(e, t, n, a, r) {
            var o = {
                regionId: e || "",
                summonerName: Object(E.L)(t) || "",
                matchId: a || "",
                version: n || ""
            };
            return Object(d.a)(g.q, _({
                variables: o
            }, r))
        }

        function B(e, t, n, a, r, o) {
            var i = {
                regionId: e || "",
                summonerName: Object(E.L)(t) || "",
                matchId: a || "",
                version: n || ""
            };
            return Object(d.a)(g.k, _({
                variables: i
            }, o))
        }

        function q(e) {
            return Object(d.a)(g.r, {
                variables: e
            })
        }

        function U(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = Object(N.h)(),
                a = I(n.regionId, n.summonerName, {}, null),
                r = a.loading,
                i = a.data,
                c = (a.error, a.variables),
                s = i && i.profileInit || {},
                l = s.playerInfo,
                u = s.customizationData,
                m = Object(f.a)(g.B, _(_({}, t), {}, {
                    awaitRefetchQueries: !0,
                    refetchQueries: [{
                        query: g.s,
                        variables: c,
                        fetchPolicy: "network-only"
                    }]
                })),
                d = o()(m, 2),
                p = d[0],
                h = d[1];
            return [function() {
                var t = _(_({
                    summonerName: l.summonerName,
                    regionId: l.regionId
                }, u), e || {});
                r || p({
                    variables: t
                })
            }, h]
        }

        function F(e, t, n) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                r = {
                    pinnedMatchId: n && n.matchId.toString() || "",
                    pinnedMatchData: n
                };
            return U(r, a)
        }

        function $(e, t, n, a) {
            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
            return Object(d.a)(O, _(_({}, r), {}, {
                variables: {
                    summonerName: e,
                    regionId: t,
                    version: n,
                    matchIdString: String(a),
                    matchIdInt: parseInt(a)
                }
            }))
        }
    },
    109: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n.n(a),
            o = n(0),
            i = n.n(o),
            c = n(17),
            s = n(43),
            l = function(e) {
                return i.a.createElement("div", {
                    className: "content-section disabled-feature"
                }, i.a.createElement("strong", null, "Sorry!"), i.a.createElement("div", {
                    className: "message"
                }, "Currently, this feature is only supported on desktop."), i.a.createElement("img", {
                    src: "https://static.u.gg/assets/lol/art/chibis/LeeSin.png"
                }))
            };
        t.a = function(e) {
            var t = Object(o.useState)(!1),
                n = r()(t, 2),
                a = n[0],
                u = n[1];
            return Object(o.useEffect)((function() {
                u(!0)
            }), []), a ? i.a.createElement(i.a.Fragment, null, i.a.createElement(s.a, {
                min: "MOBILE_SMALL",
                max: "MOBILE_LARGE",
                renderNullOnFail: !0
            }, i.a.createElement(l, null)), i.a.createElement(s.a, {
                min: "TABLET",
                max: "DESKTOP_LARGE",
                renderNullOnFail: !0
            }, i.a.createElement(c.b, e))) : null
        }
    },
    1151: function(e, t, n) {},
    1152: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(11),
            r = n.n(a),
            o = n(88),
            i = n.n(o),
            c = n(62),
            s = n.n(c),
            l = n(4),
            u = n.n(l),
            m = n(0),
            d = n.n(m),
            p = n(65),
            f = n(1242),
            g = n(55),
            h = n(168),
            v = n(12),
            b = n(1),
            y = n.n(b),
            O = n(10),
            E = n(2),
            w = n(147),
            j = n(165),
            N = function(e) {
                return [Object(w.a)({
                    staging: !1,
                    ssr: !0
                }), Object(j.a)({
                    staging: !1,
                    ssr: !0
                })].every((function(e) {
                    return e.data && !e.loading && !e.error
                })) ? e.children : null
            },
            S = n(17),
            k = n(14),
            _ = n.n(k),
            T = n(43),
            I = n(44),
            P = n.n(I),
            A = n(284),
            L = n(271),
            C = n(277),
            R = n(28),
            x = n(24),
            M = n(145),
            D = n(15),
            G = n(79),
            B = function(e) {
                var t = Object(E.n)().getProfileIconImg,
                    n = Object(M.a)(D.v),
                    a = n.loading,
                    r = n.data,
                    o = n.error,
                    i = (((r || {}).getState || {}).lolSettings || {}).summoners,
                    c = i && i[0] || {},
                    s = c || {},
                    l = s.summonerName,
                    u = void 0 === l ? "" : l,
                    p = s.regionId,
                    f = void 0 === p ? "" : p,
                    g = s.iconId,
                    h = void 0 === g ? "" : g,
                    b = Object(x.g)().isPremium;
                if (Object(m.useEffect)((function() {
                        return window && (b ? (localStorage.setItem("dontLoadGoogleCMP", !0), window.isBoost = !0) : (localStorage.setItem("dontLoadGoogleCMP", !1), window.isBoost = !1)),
                            function() {
                                window.isBoost = !1, localStorage.setItem("dontLoadGoogleCMP", !1)
                            }
                    }), [r]), a || o || !c) return null;
                var y = d.a.createElement(m.Fragment, null, d.a.createElement(G.f, {
                    tooltipInfo: "BOOST user account"
                }, d.a.createElement("img", {
                    height: 16,
                    style: {
                        marginTop: 2,
                        marginLeft: 8,
                        marginRight: 8
                    },
                    src: "https://static.u.gg/assets/ugg/icons/nav/boost-header.svg",
                    alt: "Boost user account"
                })));
                return d.a.createElement("div", {
                    className: "masthead_user-profile"
                }, d.a.createElement(v.b, {
                    className: "user-profile-link",
                    to: "/lol/profile/".concat(f.toLowerCase(), "/").concat(u.toLowerCase(), "/overview")
                }, d.a.createElement("img", {
                    className: "profile-icon",
                    alt: "Profile Avatar",
                    src: h ? t(h) : "https://static.u.gg/assets/ugg/icons/profile-icon.svg"
                }), d.a.createElement("span", null, u), b && y))
            },
            q = n(87),
            U = n(48),
            F = n.n(U),
            $ = n(49),
            z = n.n($),
            W = n(59),
            V = n.n(W),
            H = n(60),
            K = n.n(H),
            J = n(29),
            Y = n.n(J);

        function Q(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = Y()(e);
                if (t) {
                    var r = Y()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return K()(this, n)
            }
        }
        var Z = function(e) {
                V()(n, e);
                var t = Q(n);

                function n(e) {
                    return F()(this, n), t.call(this, e)
                }
                return z()(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.notificationData,
                            n = e.newNotifications,
                            a = [];
                        return t && (a = t.announcements), d.a.createElement("div", {
                            className: "notification-dropdown-container"
                        }, a.map((function(e, t) {
                            var a = n && -1 !== n.indexOf(t) ? "text-container-new" : "text-container";
                            n && n.indexOf(t);
                            return d.a.createElement("div", {
                                key: t,
                                className: "notification-entry-container"
                            }, d.a.createElement("div", {
                                className: a
                            }, d.a.createElement("div", {
                                className: "header-text"
                            }, e.title), d.a.createElement("div", {
                                className: "body-text"
                            }, e.description), d.a.createElement("div", {
                                className: "date-text"
                            }, e.dateMade)))
                        })))
                    }
                }]), n
            }(m.Component),
            X = n(377),
            ee = function(e) {
                var t = Object(m.useRef)(),
                    n = e.notificationSeen,
                    a = e.newNotifications,
                    r = e.toggleNotificationDropdown;
                return Object(m.useEffect)((function() {
                    if (l.window) {
                        var e = function(e) {
                            var n = e.path || e.composedPath && e.composedPath();
                            !t.current || null === e.target || t.current.contains(e.target) || n.includes(t.current) || r(!1)
                        };
                        return l.window.addEventListener("click", e),
                            function() {
                                return l.window.removeEventListener("click", e)
                            }
                    }
                }), [r]), d.a.createElement("div", {
                    ref: t,
                    className: "notification-icon",
                    onClick: function() {
                        return r()
                    }
                }, !n && a.length > 0 && d.a.createElement("div", {
                    className: "new-announcement-count"
                }, a.length), d.a.createElement(X.ReactComponent, {
                    width: "14px"
                }))
            },
            te = n(52),
            ne = "bugg";
        ne = "prod";
        var ae = function(e) {
                var t = Object(m.useState)(null),
                    n = y()(t, 2),
                    a = n[0],
                    r = n[1],
                    o = Object(m.useState)(!0),
                    i = y()(o, 2),
                    c = i[0],
                    s = i[1],
                    l = Object(m.useState)([]),
                    u = y()(l, 2),
                    p = u[0],
                    f = u[1],
                    g = Object(m.useState)(!1),
                    h = y()(g, 2),
                    v = h[0],
                    b = h[1];
                Object(m.useEffect)((function() {
                    Object(q.a)("https://static.u.gg/assets/lol/notifications/".concat(ne, "/Notification.json")).then((function(e) {
                        return e.json()
                    })).then((function(e) {
                        var t = localStorage.getItem("lastNotificationSeenTime"),
                            n = e.announcements,
                            a = [],
                            o = !0,
                            i = t;
                        n.forEach((function(e, n) {
                            e.dateMade = te(new Date(e.timeStamp)).fromNow(), (null === t || e.timeStamp > t) && (o = !1, a.push(n), e.timeStamp > i && (i = e.timeStamp))
                        })), r(e), s(o), f(a)
                    })).catch((function(e) {}))
                }), []);
                return d.a.createElement("div", {
                    className: "Notification"
                }, v && d.a.createElement(Z, {
                    notificationData: a,
                    newNotifications: p
                }), d.a.createElement(ee, {
                    toggleNotificationDropdown: function(e) {
                        var t = void 0 === e ? !v : e;
                        b(t), !t && v && (s(!0), localStorage.setItem("lastNotificationSeenTime", Date.now()))
                    },
                    notificationSeen: c,
                    newNotifications: p
                }))
            },
            re = n(389),
            oe = n(82),
            ie = n(272),
            ce = function(e) {
                var t = e.toggleDropdown;
                return Object(x.d)() ? d.a.createElement("div", {
                    className: "menu-item-container"
                }, d.a.createElement(v.b, {
                    className: "menu-item",
                    to: "/settings",
                    onClick: t.bind(null, !1)
                }, d.a.createElement("div", {
                    className: "menu-item_label"
                }, "Settings"), d.a.createElement("div", {
                    className: "menu-item_icon"
                }, d.a.createElement(ie.ReactComponent, {
                    className: "cog-icon"
                })))) : null
            },
            se = function(e) {
                var t = e.toggleDropdown,
                    n = Object(m.useState)(!1),
                    a = y()(n, 2),
                    r = a[0],
                    o = a[1],
                    i = Object(re.a)(),
                    c = y()(i, 2),
                    s = c[0],
                    l = c[1],
                    u = function(e) {
                        l(e.target.value), t(!1)
                    };
                return d.a.createElement("div", {
                    className: "menu-item-container"
                }, d.a.createElement("div", {
                    className: "menu-item",
                    onClick: function() {
                        o(!r)
                    }
                }, d.a.createElement("div", {
                    className: "menu-item_label"
                }, "Language"), d.a.createElement("div", {
                    className: "menu-item_icon"
                }, d.a.createElement(P.a, {
                    wrapperClassName: "react-svg",
                    path: r ? "https://static.u.gg/assets/ugg/icons/arrow-up.svg" : "https://static.u.gg/assets/ugg/icons/arrow-down.svg"
                }))), r && d.a.createElement("div", {
                    className: "language-dropdown"
                }, oe.b.map((function(e) {
                    return d.a.createElement("label", {
                        key: e.value
                    }, d.a.createElement("input", {
                        type: "radio",
                        value: e.value,
                        checked: s === e.value,
                        onChange: u
                    }), d.a.createElement("span", {
                        className: "radio-button"
                    }), d.a.createElement("span", null, e.label))
                }))))
            },
            le = function(e) {
                var t = e.toggleDropdown,
                    n = Object(x.e)();
                return Object(x.d)() ? d.a.createElement("div", {
                    className: "menu-item-container"
                }, d.a.createElement("div", {
                    className: "menu-item",
                    onClick: function() {
                        t(!1), n()
                    }
                }, d.a.createElement("div", {
                    className: "menu-item_label"
                }, "Log Out"), d.a.createElement("div", {
                    className: "menu-item_icon"
                }, d.a.createElement(P.a, {
                    wrapperClassName: "react-svg",
                    path: "https://static.u.gg/assets/ugg/icons/logout.svg"
                })))) : null
            },
            ue = function(e) {
                var t = Object(m.useRef)(),
                    n = Object(m.useState)(!1),
                    a = y()(n, 2),
                    r = a[0],
                    o = a[1];
                Object(x.d)();
                Object(m.useEffect)((function() {
                    if (l.window) {
                        var e = function(e) {
                            var n = e.path || e.composedPath && e.composedPath();
                            t && t.current && null !== e.target && !t.current.contains(e.target) && !n.includes(t.current) && o(!1)
                        };
                        return document.addEventListener("click", e),
                            function() {
                                return document.addEventListener("click", e)
                            }
                    }
                }), []);
                var i = function(e) {
                        o(void 0 !== e ? e : !r)
                    },
                    c = _()(["masthead-settings-container", r ? "masthead-settings-dropdown_open" : ""]);
                return d.a.createElement("div", {
                    ref: t,
                    className: c
                }, d.a.createElement("div", {
                    className: "masthead-settings-icon",
                    onClick: function() {
                        return i()
                    }
                }, d.a.createElement(ie.ReactComponent, {
                    className: "cog-icon"
                })), r && d.a.createElement("div", {
                    className: "settings-menu"
                }, d.a.createElement(ce, {
                    toggleDropdown: i
                }), d.a.createElement(se, {
                    toggleDropdown: i
                }), d.a.createElement(le, {
                    toggleDropdown: i
                })))
            },
            me = n(273),
            de = n(264),
            pe = n(286),
            fe = n(61),
            ge = n(18),
            he = function(e) {
                var t = Object(S.h)(),
                    n = (Object(R.e)(), Object(O.useGlobal)("loggingIn")),
                    a = y()(n, 1)[0],
                    r = Object(O.useGlobal)("authToken"),
                    o = y()(r, 1)[0],
                    i = Object(O.useGlobal)("responsive"),
                    c = y()(i, 1)[0],
                    s = Object(O.useGlobal)("manualSideNav"),
                    u = y()(s, 2),
                    m = u[0],
                    p = u[1],
                    f = Object(O.useGlobal)("verificationBar"),
                    g = y()(f, 1)[0],
                    h = Object(R.g)(),
                    b = y()(h, 2),
                    E = b[0],
                    w = b[1],
                    j = "DESKTOP_LARGE" === c || m,
                    N = Object(ge.D)(c, fe.f.MOBILE),
                    k = Object(R.f)(void 0, {
                        disable: !N,
                        preventBounce: !0,
                        throttleTime: 300
                    }),
                    _ = Object(O.useGlobal)(fe.c),
                    I = y()(_, 2),
                    G = (I[0], I[1]),
                    q = Object(x.g)().isPremium,
                    U = Object(M.a)(D.v).data,
                    F = U ? U.getState : null,
                    $ = F && F.lolSettings && F.lolSettings.summoners && F.lolSettings.summoners.length > 0 ? F.lolSettings.summoners[0] : null,
                    z = $ ? $.regionId : "",
                    W = $ ? $.summonerName : "",
                    V = N ? (null == k ? void 0 : k.y) < 60 ? "mobile-slide-in" : null != k && k.max && (null == k ? void 0 : k.y) > (null == k ? void 0 : k.max) - 20 || (null == k ? void 0 : k.direction) == R.a ? "mobile-slide-out" : "mobile-slide-in" : "";
                Object(O.useEffect)((function() {
                    G(V)
                }), [V]);
                var H = g ? "verification-bar-active" : "";
                return l.window ? d.a.createElement("div", {
                    id: "masthead",
                    className: "".concat(H)
                }, d.a.createElement("div", {
                    className: "masthead-container ".concat(V)
                }, d.a.createElement("div", {
                    className: "logo-nav"
                }, d.a.createElement("div", {
                    id: "side-nav_toggle",
                    onClick: function() {
                        !m && p(!0), (j || !E) && w(!E, {
                            saveToggle: !0
                        })
                    }
                }, d.a.createElement(P.a, {
                    wrapperClassName: "react-svg icon",
                    path: j && E ? "https://static.u.gg/assets/ugg/logo/MenuToClose.svg" : "https://static.u.gg/assets/ugg/logo/MenuToOpen.svg"
                })), d.a.createElement(v.b, {
                    to: "/",
                    style: {
                        display: "flex",
                        alignItems: "center"
                    }
                }, d.a.createElement(T.a, {
                    min: "TABLET",
                    max: "DESKTOP_LARGE"
                }, d.a.createElement("img", {
                    width: 81,
                    className: "ugg-logo",
                    src: "https://static.u.gg/assets/ugg/logo/ugg-logo.svg",
                    alt: "U.GG"
                })))), d.a.createElement(T.a, {
                    min: "DESKTOP_MEDIUM",
                    max: "DESKTOP_LARGE"
                }, "/app" !== t.pathname && d.a.createElement(v.b, {
                    className: "masthead_app-download-btn",
                    to: "/app?utm_source=uggtop"
                }, d.a.createElement(pe.ReactComponent, {
                    className: "windows-icon"
                }), d.a.createElement("span", null, "Download App"))), d.a.createElement("div", {
                    className: "masthead-search-bar-container"
                }, "/" !== t.pathname && !t.pathname.includes("lg-splash") && d.a.createElement(A.a, {
                    materialDesign: !0,
                    placeholder: ["MOBILE_SMALL", "MOBILE_MEDIUM", "MOBILE_LARGE"].includes(c) ? "Search a Champion" : "",
                    isMasthead: !0,
                    autoFocus: !t.pathname.includes("tier-list") || "/" === t.pathname || t.state && t.state.redirectFromLanding
                })), d.a.createElement(T.a, {
                    min: "MOBILE_MEDIUM",
                    max: "DESKTOP_LARGE"
                }, d.a.createElement("div", {
                    className: "masthead-right"
                }, !a && !q && d.a.createElement(v.b, {
                    className: "btn-blue btn-blue_hover masthead_support-us-btn",
                    to: "/support-us"
                }, d.a.createElement(de.ReactComponent, null), " Support Us"), d.a.createElement("div", {
                    className: "masthead_account"
                }, !l.window || a ? null : o ? d.a.createElement(B, null) : d.a.createElement("div", {
                    className: "masthead_account-buttons"
                }, d.a.createElement(L.a, null, d.a.createElement("div", {
                    className: "btn-blue btn-blue_hover",
                    style: {
                        minHeight: "30px"
                    }
                }, "Create Account")), d.a.createElement(C.a, null, d.a.createElement("div", {
                    className: "btn-transparent",
                    style: {
                        minHeight: "30px"
                    }
                }, "Login")))), d.a.createElement("div", {
                    className: "live-game-shortcut"
                }, W && d.a.createElement("div", {
                    className: "masthead_livegame",
                    style: {
                        marginTop: "2px"
                    }
                }, d.a.createElement(v.b, {
                    to: "/lol/profile/".concat(z, "/").concat(W, "/live-game")
                }, d.a.createElement(me.ReactComponent, {
                    width: "16px"
                }))), !W && d.a.createElement("div", {
                    className: "masthead_livegame",
                    style: {
                        marginTop: "2px"
                    }
                }, d.a.createElement(v.b, {
                    to: "/lg-splash"
                }, d.a.createElement(me.ReactComponent, {
                    width: "16px"
                })))), d.a.createElement(ae, null), d.a.createElement(ue, null))), d.a.createElement(T.a, {
                    min: "MOBILE_SMALL",
                    max: "MOBILE_SMALL"
                }, d.a.createElement("div", {
                    className: "masthead-right",
                    style: {
                        marginLeft: "-16px"
                    }
                }, d.a.createElement(ue, null))))) : d.a.createElement("div", {
                    id: "masthead"
                }, d.a.createElement("div", {
                    className: "masthead-container"
                }))
            },
            ve = n(578),
            be = function(e) {
                var t = Object(R.b)();
                return d.a.createElement("div", {
                    id: "side-nav_footer"
                }, d.a.createElement(T.a, {
                    min: "MOBILE_LARGE",
                    max: "DESKTOP_LARGE"
                }, d.a.createElement("div", {
                    className: "footer-sitemap"
                }, d.a.createElement("a", {
                    href: "https://u.gg",
                    target: "_blank",
                    rel: "noreferrer"
                }, "U.GG"), d.a.createElement("span", null, " â€¢ "), d.a.createElement("a", {
                    href: "https://probuildstats.com",
                    target: "_blank",
                    rel: "noreferrer"
                }, "ProbuildStats.com"), d.a.createElement("span", null, " â€¢ "), d.a.createElement(v.b, {
                    to: "/about"
                }, "About"), d.a.createElement("span", null, " â€¢ "), d.a.createElement(v.b, {
                    to: "/faq"
                }, "FAQ"), d.a.createElement("span", null, " â€¢ "), d.a.createElement(v.b, {
                    to: "/privacy-policy"
                }, "Privacy Policy"), d.a.createElement(v.b, {
                    to: "/privacy-shield"
                }, "Privacy Shield"), d.a.createElement("span", null, " â€¢ "), d.a.createElement(v.b, {
                    to: "/careers"
                }, "Careers"), d.a.createElement("span", null, " â€¢ "), d.a.createElement(v.b, {
                    to: "/terms-of-service"
                }, "Terms of Service"), d.a.createElement("span", null, " â€¢ "), d.a.createElement("a", {
                    href: "mailto:info@u.gg"
                }, "Contact Us"))), d.a.createElement(T.a, {
                    min: "MOBILE_SMALL",
                    max: "MOBILE_SMALL"
                }, d.a.createElement("div", {
                    className: "footer-sitemap footer_sitemap_grid"
                }, d.a.createElement("div", {
                    className: "sitemap-column"
                }, d.a.createElement("a", {
                    href: "https://u.gg",
                    target: "_blank",
                    rel: "noreferrer"
                }, "U.GG"), d.a.createElement("a", {
                    href: "https://probuildstats.com",
                    target: "_blank",
                    rel: "noreferrer"
                }, "ProbuildStats.com"), d.a.createElement(v.b, {
                    onClick: t,
                    to: "/about"
                }, "About"), d.a.createElement(v.b, {
                    onClick: t,
                    to: "/faq"
                }, "FAQ")), d.a.createElement("div", {
                    className: "sitemap-column"
                }, d.a.createElement(v.b, {
                    onClick: t,
                    to: "/privacy-policy"
                }, "Privacy Policy"), d.a.createElement(v.b, {
                    onClick: t,
                    to: "/privacy-shield"
                }, "Privacy Shield"), d.a.createElement(v.b, {
                    onClick: t,
                    to: "/careers"
                }, "Careers"), d.a.createElement(v.b, {
                    onClick: t,
                    to: "/terms-of-service"
                }, "Terms of Service"), d.a.createElement("a", {
                    href: "mailto:info@u.gg",
                    rel: "noreferrer"
                }, "Contact Us")))), d.a.createElement("div", {
                    className: "connect-with-us"
                }, d.a.createElement("div", {
                    className: "social-media"
                }, d.a.createElement("div", {
                    className: "social-media-links"
                }, [{
                    link: "https://www.facebook.com/UdotGG",
                    img: "https://static.u.gg/assets/ugg/social/facebook.svg",
                    alt: "Facebook"
                }, {
                    link: "https://www.twitter.com/UdotGG",
                    img: "https://static.u.gg/assets/ugg/social/twitter.svg",
                    alt: "Twitter"
                }, {
                    link: "https://www.instagram.com/UdotGG",
                    img: "https://static.u.gg/assets/ugg/social/instagram.svg",
                    alt: "Instagram"
                }, {
                    link: "https://www.reddit.com/r/UGITGUD",
                    img: "https://static.u.gg/assets/ugg/social/reddit.svg",
                    alt: "Reddit"
                }, {
                    link: "https://discord.gg/hR7vrQ6",
                    img: "https://static.u.gg/assets/ugg/social/discord.svg",
                    alt: "Discord"
                }].map((function(e) {
                    return d.a.createElement("a", {
                        key: e.link,
                        href: e.link
                    }, d.a.createElement(P.a, {
                        wrapperClassName: "react-svg social-media-icon",
                        path: e.img,
                        alt: e.alt
                    }))
                }))))), d.a.createElement("div", {
                    className: "disclaimer"
                }, d.a.createElement("div", {
                    className: "disclaimer-title"
                }, "Outplayed, Inc. Â© 2021"), d.a.createElement("span", null, "U.GG isnâ€™t endorsed by Riot Games and doesnâ€™t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends Â© Riot Games, Inc.")))
            },
            ye = function(e) {
                var t = Object(R.g)(),
                    a = y()(t, 1)[0],
                    r = Object(R.b)(),
                    o = Object(m.useState)(!0),
                    c = y()(o, 2),
                    l = c[0],
                    u = c[1],
                    p = e.className,
                    f = e.search,
                    g = e.pathname,
                    h = e.description,
                    b = e.iconPath,
                    O = e.featureName,
                    E = e.linkActiveName,
                    w = e.newTag,
                    j = e.color,
                    N = e.href,
                    S = e.iconPath2,
                    k = Object(m.useRef)(null);
                Object(m.useEffect)((function() {
                    (function() {
                        var e = i()(s.a.mark((function e() {
                            return s.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!S) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.prev = 1, e.next = 4, n(690)("./".concat(S, ".svg"));
                                    case 4:
                                        k.current = e.sent.ReactComponent, e.next = 10;
                                        break;
                                    case 7:
                                        throw e.prev = 7, e.t0 = e.catch(1), e.t0;
                                    case 10:
                                        return e.prev = 10, u(!1), e.finish(10);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 7, 10, 13]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), []);
                var T = e.descriptionStyle ? e.descriptionStyle : "",
                    I = g;
                f && (I = {
                    pathname: g,
                    search: f
                });
                var A = O === E,
                    L = function(e, t) {
                        return A
                    },
                    C = _()(["side-link", "side-nav-title", p]),
                    x = function(e) {
                        var t = e.children;
                        return N ? d.a.createElement("a", {
                            className: C,
                            href: N,
                            target: "_blank",
                            rel: "noreferrer"
                        }, t) : d.a.createElement(v.c, {
                            className: C,
                            activeClassName: "active",
                            to: I,
                            onClick: r,
                            isActive: L
                        }, t)
                    };
                return d.a.createElement(x, null, d.a.createElement(G.f, {
                    tooltipInfo: h,
                    forceOrientation: "right",
                    disableTooltip: a,
                    isFixed: !0
                }, d.a.createElement("div", {
                    style: {
                        minWidth: "36px",
                        height: "100%"
                    }
                }, S ? function(e) {
                    if (!l && k.current) {
                        var t = k.current;
                        return d.a.createElement(t, {
                            className: e
                        })
                    }
                    return d.a.createElement("div", null)
                }(j ? "icon ".concat(j) : "icon") : d.a.createElement(P.a, {
                    wrapperClassName: j ? "icon ".concat(j) : "icon",
                    path: "".concat(b)
                }))), d.a.createElement("span", {
                    className: T
                }, h), w && d.a.createElement("div", {
                    className: "side-link_new-tag"
                }, d.a.createElement("div", {
                    className: "side-link_new-tag-text"
                }, a ? "NEW" : "N")))
            },
            Oe = n(85),
            Ee = n.n(Oe),
            we = n(31),
            je = n.n(we),
            Ne = n(80),
            Se = n.n(Ne);

        function ke(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = Y()(e);
                if (t) {
                    var r = Y()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return K()(this, n)
            }
        }
        var _e = function(e) {
                V()(n, e);
                var t = ke(n);

                function n(e) {
                    var a;
                    return F()(this, n), (a = t.call(this, e)).state = {
                        height: 0,
                        overflow: !1
                    }, a.slideSub = d.a.createRef(), a.update = a.update.bind(Se()(a)), a.updateOverflow = a.updateOverflow.bind(Se()(a)), a.timeout = null, a.observer = null, a
                }
                return z()(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.mutationObserver(), l.window.addEventListener("resize", this.update), this.update(), this.props.open ? this.updateOverflow(!0) : this.updateOverflow(!1)
                    }
                }, {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function(e) {
                        this.props.open !== e.open && (this.update(), e.open ? this.updateOverflow(!0) : this.updateOverflow(!1))
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e, t) {
                        !this.state.overflow && this.props.open && this.updateOverflow(!0)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.timeout && clearTimeout(this.timeout), this.observer && this.observer.disconnect(), l.window.removeEventListener("resize", this.update)
                    }
                }, {
                    key: "mutationObserver",
                    value: function() {
                        var e = this,
                            t = this.slideSub.current,
                            n = this;
                        this.observer = new MutationObserver((function(t) {
                            e.slideSub.current.getBoundingClientRect().height !== e.state.height && (n.updateOverflow(!1), setTimeout(n.update, 100))
                        }));
                        this.observer.observe(t, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        })
                    }
                }, {
                    key: "update",
                    value: function() {
                        this.slideSub && this.slideSub.current && this.setState({
                            height: this.slideSub.current.getBoundingClientRect().height
                        })
                    }
                }, {
                    key: "updateOverflow",
                    value: function(e) {
                        var t = this;
                        !1 === e ? (this.timeout && clearTimeout(this.timeout), this.setState({
                            overflow: !1
                        })) : (this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout((function() {
                            t.setState({
                                overflow: !0
                            })
                        }), this.props.duration || 500))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = {
                                margin: this.props.open ? this.props.customStyle && this.props.customStyle.margin : "0px",
                                overflow: this.state.overflow ? "visible" : "hidden"
                            },
                            n = this.props.slideRight ? {
                                maxWidth: this.props.open ? "100%" : "0%",
                                transition: "max-width ".concat((this.props.duration || 500) / 1e3, "s, margin ").concat((this.props.duration || 500) / 1e3, "s")
                            } : {
                                height: this.props.open ? "".concat(this.state.height, "px") : "0px",
                                transition: "height ".concat((this.props.duration || 500) / 1e3, "s, margin ").concat((this.props.duration || 500) / 1e3, "s")
                            },
                            a = Object.assign({}, this.props.customStyle || {}, t, n);
                        return 0 === this.props.duration && delete a.transition, d.a.createElement("div", {
                            style: a,
                            ref: function(t) {
                                return e.slide = t
                            }
                        }, d.a.createElement("div", {
                            ref: this.slideSub
                        }, this.props.children))
                    }
                }]), n
            }(m.Component),
            Te = n(143),
            Ie = n(126),
            Pe = n(118),
            Ae = n(93),
            Le = function(e) {
                var t = Object(R.g)(),
                    n = y()(t, 1)[0],
                    a = Object(m.useState)(!1),
                    r = y()(a, 2),
                    o = r[0],
                    i = r[1],
                    c = Object(m.useState)(l.window && JSON.parse(localStorage.getItem("favoriteChampionsOpen"))),
                    s = y()(c, 2),
                    u = s[0],
                    p = s[1],
                    f = Object(M.a)(D.v, {
                        fetchPolicy: "network-only"
                    }),
                    g = (f.loading, f.data),
                    h = (f.error, Object(O.useGlobal)("clientChampionFavorites")),
                    b = y()(h, 2),
                    E = b[0],
                    w = b[1],
                    j = Object(x.a)(),
                    N = y()(j, 2),
                    S = N[0],
                    k = (N[1].data, Object(x.b)());
                Object(m.useEffect)((function() {
                    i(!0)
                }), []), Object(m.useEffect)((function() {
                    if (g) {
                        var e = (((g || {}).getState || {}).lolSettings || {}).favoriteChampions;
                        w(k(e))
                    }
                }), [g]);
                var T = e.className,
                    I = e.linkActiveName,
                    A = e.isLoggedIn,
                    L = e.filterDefaults;
                if (!A || !o) return null;
                if (A) {
                    var C, B;
                    if (E && E.length > 0) {
                        var q = Object(Ie.b)(L),
                            U = E.map((function(e, t) {
                                var a = "favorite-champion-entry";
                                return I == e.normalizedChampionName && (a = "favorite-champion-entry active"), d.a.createElement(Te.b, {
                                    key: e.normalizedChampionName,
                                    draggableId: e.normalizedChampionName,
                                    index: t
                                }, (function(r, o) {
                                    return d.a.createElement("div", Ee()({
                                        ref: r.innerRef
                                    }, r.draggableProps, r.dragHandleProps, {
                                        className: _()([a, o.isDragging ? "_is-dragging" : "", o.isDropAnimating ? "_is-dropping" : ""])
                                    }), d.a.createElement(v.b, {
                                        key: "favorite-champion-".concat(e.normalizedChampionName, "-line-item"),
                                        to: "/lol/champions/".concat(e.normalizedChampionName, "/build").concat(q)
                                    }, d.a.createElement(G.f, {
                                        tooltipInfo: e.championName,
                                        forceOrientation: "right",
                                        disableTooltip: n,
                                        isFixed: !0
                                    }, d.a.createElement("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            minWidth: 36,
                                            height: "100%"
                                        }
                                    }, d.a.createElement("img", {
                                        className: "champion-image",
                                        src: e.championImage,
                                        alt: "Champion Image"
                                    }), d.a.createElement("span", null, e.championName), d.a.createElement("div", {
                                        className: "remove-favorite",
                                        onClick: function(e) {
                                            return function(e, t) {
                                                e.preventDefault(), e.stopPropagation();
                                                var n = [].concat(je()(E.slice(0, t)), je()(E.slice(t + 1)));
                                                S("champions", n)
                                            }(e, t)
                                        }
                                    }, d.a.createElement(P.a, {
                                        wrapperClassName: "react-svg",
                                        path: "https://static.u.gg/assets/ugg/icons/x.svg"
                                    }))))))
                                }))
                            }));
                        C = d.a.createElement(Te.a, {
                            onDragEnd: function(e) {
                                if (e.destination)
                                    for (var t = function(e, t, n) {
                                            var a = Array.from(e),
                                                r = a.splice(t, 1),
                                                o = y()(r, 1)[0];
                                            return a.splice(n, 0, o), a
                                        }(E, e.source.index, e.destination.index), n = 0; n < E.length; n++)
                                        if (E[n].championId !== t[n].championId) return S("champions", t)
                            }
                        }, d.a.createElement(Te.c, {
                            droppableId: "droppable"
                        }, (function(e, t) {
                            return d.a.createElement("div", Ee()({}, e.droppableProps, {
                                ref: e.innerRef,
                                className: "favorites-content"
                            }), U, e.placeholder)
                        })))
                    } else C = o && n ? d.a.createElement("div", {
                        className: "favorites-content-filler"
                    }, d.a.createElement("span", null, " ", "You haven't favorited any champions yet.", " ")) : null;
                    B = d.a.createElement("div", {
                        className: "favorites-title side-nav-title",
                        onClick: function() {
                            l.window && (u ? localStorage.removeItem("favoriteChampionsOpen") : localStorage.setItem("favoriteChampionsOpen", !0)), p(!u)
                        }
                    }, d.a.createElement(G.f, {
                        tooltipInfo: "Favorite Champions",
                        forceOrientation: "right",
                        disableTooltip: n,
                        isFixed: !0
                    }, d.a.createElement("div", {
                        style: {
                            minWidth: 36,
                            height: "100%"
                        }
                    }, d.a.createElement(P.a, {
                        wrapperClassName: "icon",
                        path: "https://static.u.gg/assets/ugg/icons/nav/FavChamps-Unselected.svg"
                    }))), d.a.createElement("span", null, "Favorite Champions"), d.a.createElement("div", {
                        className: "dropdown-icon"
                    }, u ? d.a.createElement(Pe.ReactComponent, null) : d.a.createElement(Ae.ReactComponent, null)));
                    var F = _()("favorites", u ? "favorites_open" : "", T);
                    return d.a.createElement("div", {
                        className: F
                    }, B, d.a.createElement(_e, {
                        open: u
                    }, C))
                }
            },
            Ce = function(e) {
                var t = Object(E.n)().getProfileIconImg,
                    n = Object(R.g)(),
                    a = y()(n, 1)[0],
                    r = Object(m.useState)(!1),
                    o = y()(r, 2),
                    i = o[0],
                    c = o[1],
                    s = Object(m.useState)(l.window && JSON.parse(localStorage.getItem("followedSummonersOpen"))),
                    u = y()(s, 2),
                    p = u[0],
                    f = u[1],
                    g = Object(M.a)(D.v, {
                        fetchPolicy: "network-only"
                    }),
                    h = (g.loading, g.data),
                    b = (g.error, Object(O.useGlobal)("clientSummonerFavorites")),
                    w = y()(b, 2),
                    j = w[0],
                    N = w[1],
                    S = Object(x.a)(),
                    k = y()(S, 2),
                    T = k[0];
                k[1].data;
                Object(m.useEffect)((function() {
                    c(!0)
                }), []), Object(m.useEffect)((function() {
                    if (h) {
                        var e = (((h || {}).getState || {}).lolSettings || {}).favoriteSummoners;
                        N(e)
                    }
                }), [h]);
                var I = e.className,
                    A = e.linkActiveName,
                    L = e.isLoggedIn;
                if (!L || !i) return null;
                if (L) {
                    var C;
                    if (j && j.length > 0) {
                        var B = j.map((function(e, n) {
                            var r = "favorite-champion-entry";
                            A == e.summonerName.toLowerCase() && (r = "favorite-champion-entry active");
                            var o = e.iconUrl && e.iconUrl.split("/"),
                                i = String(e.iconId || o && o[o.length - 1]);
                            return d.a.createElement(Te.b, {
                                key: e.summonerName.toLowerCase(),
                                draggableId: e.summonerName.toLowerCase(),
                                index: n
                            }, (function(o, c) {
                                return d.a.createElement("div", Ee()({
                                    ref: o.innerRef
                                }, o.draggableProps, o.dragHandleProps, {
                                    className: _()([r, c.isDragging ? "_is-dragging" : "", c.isDropAnimating ? "_is-dropping" : ""])
                                }), d.a.createElement(v.b, {
                                    key: "followed-summoner-".concat(e.summonerName, "-line-item"),
                                    to: "/lol/profile/".concat(e.regionId, "/").concat(e.summonerName.toLowerCase(), "/overview")
                                }, d.a.createElement(G.f, {
                                    tooltipInfo: e.summonerName,
                                    forceOrientation: "right",
                                    disableTooltip: a,
                                    isFixed: !0
                                }, d.a.createElement("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        minWidth: 36,
                                        height: "100%"
                                    }
                                }, d.a.createElement("img", {
                                    className: "champion-image",
                                    src: t(i.split(".")[0]),
                                    alt: e.summonerName
                                }), d.a.createElement("span", null, e.summonerName), d.a.createElement("div", {
                                    className: "remove-favorite",
                                    onClick: function(e) {
                                        return function(e, t) {
                                            e.preventDefault();
                                            var n = [].concat(je()(j.slice(0, t)), je()(j.slice(t + 1)));
                                            T("summoners", n)
                                        }(e, n)
                                    }
                                }, d.a.createElement(P.a, {
                                    wrapperClassName: "react-svg",
                                    path: "https://static.u.gg/assets/ugg/icons/x.svg"
                                }))))))
                            }))
                        }));
                        C = d.a.createElement(Te.a, {
                            onDragEnd: function(e) {
                                if (e.destination)
                                    for (var t = function(e, t, n) {
                                            var a = Array.from(e),
                                                r = a.splice(t, 1),
                                                o = y()(r, 1)[0];
                                            return a.splice(n, 0, o), a
                                        }(j, e.source.index, e.destination.index), n = 0; n < j.length; n++)
                                        if (j[n].summonerName !== t[n].summonerName) return T("summoners", t)
                            }
                        }, d.a.createElement(Te.c, {
                            droppableId: "droppable"
                        }, (function(e, t) {
                            return d.a.createElement("div", Ee()({}, e.droppableProps, {
                                ref: e.innerRef,
                                className: "favorites-content"
                            }), B, e.placeholder)
                        })))
                    } else C = i && a ? d.a.createElement("div", {
                        className: "favorites-content-filler"
                    }, d.a.createElement("span", null, " ", "You haven't followed any summoners yet.", " ")) : null;
                    var q = _()("favorites", p ? "favorites_open" : "", I);
                    return d.a.createElement("div", {
                        className: q
                    }, d.a.createElement("div", {
                        className: "favorites-title side-nav-title",
                        onClick: function() {
                            l.window && (p ? localStorage.removeItem("followedSummonersOpen") : localStorage.setItem("followedSummonersOpen", !0)), f(!p)
                        }
                    }, d.a.createElement(G.f, {
                        tooltipInfo: "Followed Summoners",
                        forceOrientation: "right",
                        disableTooltip: a,
                        isFixed: !0
                    }, d.a.createElement("div", {
                        style: {
                            minWidth: 36,
                            height: "100%"
                        }
                    }, d.a.createElement(P.a, {
                        wrapperClassName: "icon",
                        path: "https://static.u.gg/assets/ugg/icons/nav/FavSummoners-Unselected.svg"
                    }))), d.a.createElement("span", null, "Followed Summoners"), d.a.createElement("div", {
                        className: "dropdown-icon"
                    }, p ? d.a.createElement(Pe.ReactComponent, null) : d.a.createElement(Ae.ReactComponent, null))), d.a.createElement(_e, {
                        open: p
                    }, C))
                }
            },
            Re = n(103),
            xe = function(e) {
                var t = e.className,
                    n = e.linkActiveName,
                    a = (e.isLoggedIn, Object(M.a)(D.v, {
                        fetchPolicy: "network-only"
                    })),
                    r = (a.loading, a.data),
                    o = (a.error, (r || {}).getState || {}),
                    i = o.lolSettings,
                    c = ((o.premium || {}).isPremium, (i || {}).summoners),
                    s = c && c[0] || {},
                    l = s.summonerName,
                    u = s.regionId,
                    m = Object(Re.n)(u, l, {}, "", {
                        skip: !r
                    }),
                    p = (m.loading, m.data),
                    f = m.error;
                return r ? d.a.createElement("div", {
                    className: t,
                    style: {
                        marginBottom: "15px"
                    }
                }, d.a.createElement(ye, {
                    pathname: !p || f ? "/not-found-user-summoner-profile" : "/lol/profile/".concat(u, "/").concat(l.toLowerCase(), "/overview"),
                    description: "My Profile",
                    iconPath2: "my-profile-icon",
                    linkActiveName: n,
                    featureName: "MyProfile"
                }), d.a.createElement(ye, {
                    pathname: "/lol/profile/".concat(u, "/").concat(l.toLowerCase(), "/live-game"),
                    description: "Live Game",
                    linkActiveName: n,
                    featureName: "LiveGame",
                    className: "multisearch-side-nav",
                    iconPath2: "live-game-icon"
                })) : d.a.createElement(ye, {
                    pathname: "/lg-splash",
                    description: "Live Game",
                    iconPath2: "live-game-icon",
                    linkActiveName: n,
                    featureName: "LiveGame",
                    className: "multisearch-side-nav"
                })
            },
            Me = function(e) {
                var t = Object(O.useGlobal)("loggingIn"),
                    n = y()(t, 1)[0],
                    a = Object(O.useGlobal)("expandedSideNav"),
                    r = (y()(a, 1)[0], Object(x.d)()),
                    o = Object(M.a)(D.v).data,
                    i = o && o.getState || {},
                    c = i.filterDefaults,
                    s = i.premium,
                    u = e.linkActiveName,
                    m = e.tierListPathname;
                return l.window ? d.a.createElement(d.a.Fragment, null, d.a.createElement(T.a, {
                    min: "TABLET",
                    max: "DESKTOP_LARGE",
                    renderNullOnFail: !0,
                    isClient: !0
                }, d.a.createElement("div", {
                    className: "site-navigator"
                }, d.a.createElement(ye, {
                    pathname: {
                        pathname: "/app",
                        search: "utm_source=uggapp"
                    },
                    description: "Desktop App",
                    iconPath2: "desktop-icon",
                    linkActiveName: u,
                    featureName: "DesktopApp",
                    color: "red",
                    descriptionStyle: "emphasised-side-nav"
                }), !n && (!s || s && !s.isPremium) && d.a.createElement(ye, {
                    pathname: {
                        pathname: "/support-us"
                    },
                    description: "Support Us",
                    iconPath2: "double-hearts-outline",
                    linkActiveName: u,
                    featureName: "SupportUs",
                    color: "gold",
                    descriptionStyle: "emphasised-side-nav"
                }))), d.a.createElement("div", {
                    className: "site-navigator"
                }, d.a.createElement(T.a, {
                    min: "TABLET",
                    max: "DESKTOP_LARGE",
                    renderNullOnFail: !0
                }, d.a.createElement(xe, e)), d.a.createElement(ye, {
                    pathname: "/multisearch",
                    description: "MultiSearch",
                    iconPath2: "multisearch-icon",
                    linkActiveName: u,
                    featureName: "MultiSearch"
                }), d.a.createElement(ye, {
                    pathname: m,
                    description: "Tier List",
                    iconPath2: "tier-list-icon",
                    linkActiveName: u,
                    featureName: "TierList"
                }), d.a.createElement(ye, {
                    pathname: "/leaderboards",
                    description: "Leaderboards",
                    iconPath2: "leaderboard-icon",
                    linkActiveName: u,
                    featureName: "Leaderboards"
                }), d.a.createElement(ye, {
                    pathname: "/lol/champions",
                    description: "Champions",
                    iconPath2: "champions-icon",
                    linkActiveName: u,
                    featureName: "Champions"
                }), d.a.createElement(T.a, {
                    min: "TABLET",
                    max: "DESKTOP_LARGE"
                }, d.a.createElement(ye, {
                    href: "https://probuildstats.com/world",
                    description: "Pro Builds",
                    iconPath: "https://static.u.gg/assets/ugg/icons/nav/Menu-Probuildstats.svg",
                    linkActiveName: u,
                    featureName: "ProBuild"
                }))), d.a.createElement(T.a, {
                    min: "TABLET",
                    max: "DESKTOP_LARGE"
                }, d.a.createElement(Le, {
                    linkActiveName: u,
                    isLoggedIn: r,
                    filterDefaults: c
                })), d.a.createElement(T.a, {
                    min: "TABLET",
                    max: "DESKTOP_LARGE"
                }, d.a.createElement(Ce, {
                    linkActiveName: u,
                    isLoggedIn: r
                }))) : null
            };

        function De(e, t) {
            var n = e.pathname.match(/\/lol\/champions\/(.*?)\//);
            if (!t) return null;
            if (n) {
                var a = n[1],
                    r = !1;
                if (t.map((function(e) {
                        e.normalizedChampionName === a && (r = !0)
                    })), r) return a
            }
        }

        function Ge(e, t) {
            var n = e.pathname.match(/\/lol\/profile\/.*?\/(.*?)\//);
            if (!t) return null;
            if (n) {
                var a = n[1].toLowerCase(),
                    r = !1;
                if (t.map((function(e) {
                        e.summonerName.toLowerCase() === a && (r = !0)
                    })), r) return a
            }
        }
        var Be = function(e) {
            var t = Object(m.useRef)(),
                n = Object(O.useGlobal)("responsive"),
                a = y()(n, 1)[0],
                r = Object(O.useGlobal)("manualSideNav"),
                o = y()(r, 2),
                i = o[0],
                c = o[1],
                s = Object(R.g)(),
                u = y()(s, 2),
                p = u[0],
                f = u[1],
                g = Object(M.a)(D.v).data,
                h = (g && g.getState || {}).filterDefaults,
                v = Object(O.useGlobal)("verificationBar"),
                b = y()(v, 1)[0],
                E = "DESKTOP_LARGE" === a || i,
                w = Object(m.useState)(!1),
                j = y()(w, 2),
                N = j[0],
                k = j[1],
                _ = function() {
                    !i && c(!0), (E || !p) && f(!p, {
                        saveToggle: !0
                    })
                },
                T = function() {
                    var e = Object(ge.M)();
                    e !== p && f(e)
                };
            Object(m.useEffect)((function() {
                if (l.window) return k(!0), "DESKTOP_LARGE" !== a && f(!1), localStorage.getItem("TOGGLE_AND_SAVE_SIDE_NAV_KEY") || l.window.addEventListener("resize", T),
                    function() {
                        return l.window.removeEventListener("resize", T)
                    }
            }), []), Object(m.useEffect)((function() {
                if (l.window && "DESKTOP_LARGE" !== a) {
                    var e = function(e) {
                        var n = document.getElementById("side-nav_toggle"),
                            a = e.path || e.composedPath && e.composedPath();
                        t.current && null !== e.target && !t.current.contains(e.target) && !a.includes(n) && E && p && _()
                    };
                    return l.window.addEventListener("click", e),
                        function() {
                            return l.window.removeEventListener("click", e)
                        }
                }
            }), [a, E, p]);
            var I = E && p ? "expanded" : "collapsed",
                P = function() {
                    var e = Object(S.h)(),
                        t = Object(O.useGlobal)("clientChampionFavorites"),
                        n = y()(t, 1)[0],
                        a = Object(O.useGlobal)("clientSummonerFavorites"),
                        r = y()(a, 1)[0],
                        o = Object(M.a)(D.v),
                        i = (o.loading, o.data);
                    if (o.error, function(e, t) {
                            return !(!e.pathname.match(/\/lol\/pro-builds/) && !e.pathname.match(/\/lol\/champions\/[A-Za-z0-9\s]+\/pro-build/g))
                        }(e)) {
                        var c = De(e, n);
                        return c || "ProBuild"
                    }
                    if (function(e) {
                            return !!(e.pathname.match(/\/lol\/champions/) || e.pathname.match(/\/lol\/champions\/[A-Za-z0-9\s]+\/build/g) || e.pathname.match(/\/lol\/champions\/[A-Za-z0-9\s]+\/counters/g) || e.pathname.match(/\/lol\/champions\/[A-Za-z0-9\s]+\/items/g) || e.pathname.match(/\/lol\/champions\/[A-Za-z0-9\s]+\/runes/g) || e.pathname.match(/\/lol\/champions\/[A-Za-z0-9\s]+\/spells-abilities/g))
                        }(e)) {
                        var s = De(e, n);
                        return s || "Champions"
                    }
                    return function(e) {
                        return !!e.pathname.match(/\/year-in-review/g)
                    }(e) ? "YearInReview" : function(e) {
                        return !!(e.pathname.match(/\/lol\/tier-list/g) || e.pathname.match(/\/lol\/duo-tier-list/g) || e.pathname.match(/\/lol\/combat/g) || e.pathname.match(/\/lol\/objectives/g))
                    }(e) ? "TierList" : function(e) {
                        return e.pathname.match(/^(\/leaderboards)/g)
                    }(e) ? "Leaderboards" : function(e) {
                        return e.pathname.match(/^(\/multisearch)/g)
                    }(e) ? "MultiSearch" : function(e) {
                        return e.pathname.includes("live-game")
                    }(e) ? "LiveGame" : function(e) {
                        return !!e.pathname.match(/\/lol\/profile\//g)
                    }(e) ? Ge(e, r) : function(e, t) {
                        if (t && t.lolSettings.summoners) {
                            var n = t.lolSettings.summoners[0],
                                a = n.summonerName,
                                r = n.regionId;
                            if (a && r) {
                                var o = "/lol/profile/".concat(r, "/").concat(a.toLowerCase());
                                if (e.pathname.match(o)) return !0
                            }
                        }
                        return !1
                    }(e, i && i.getState) ? "MyProfile" : function(e) {
                        return "" === e.pathname || "/" === e.pathname
                    }(e) ? "Homepage" : function(e) {
                        return "/worlds" === e.pathname
                    }(e) ? "WorldsTracker" : function(e) {
                        return !!e.pathname.match(/\/discover-boost/g)
                    }(e) ? "Premium" : function(e) {
                        return !!e.pathname.match(/\/support-us/g)
                    }(e) ? "SupportUs" : function(e) {
                        return !!e.pathname.match(/\/app/g)
                    }(e) ? "DesktopApp" : Ge(e, r)
                }(),
                A = b ? "verification-bar-active" : "",
                L = Object(Ie.c)(h),
                C = Object(Ie.a)(Object(ge.I)(L.substring(1))),
                x = "".concat(C.pathname, "?").concat(C.search),
                G = d.a.createElement(Me, {
                    linkActiveName: P,
                    tierListPathname: x
                });
            return l.window && N ? d.a.createElement("div", {
                ref: t,
                id: "side-nav-container",
                className: "".concat(I)
            }, d.a.createElement("div", {
                id: "side-nav",
                className: "".concat(I, " ").concat(A)
            }, d.a.createElement("div", {
                className: "side-nav-links"
            }, G), d.a.createElement("div", {
                onClick: _,
                className: "filler"
            }), d.a.createElement(be, null))) : d.a.createElement("div", {
                ref: t,
                id: "side-nav-container",
                className: "collapsed"
            }, d.a.createElement("div", {
                id: "side-nav",
                className: "collapsed ".concat(A)
            }))
        };
        n(92);

        function qe(e) {
            l.window && l.window.dataLayer && l.window.dataLayer.push({
                event: "pageview",
                category: "manual",
                page: e
            })
        }
        var Ue, Fe, $e, ze = n(188),
            We = function(e) {
                var t = Object(ze.a)();
                return function() {
                    t.query({
                        query: D.I,
                        variables: e
                    }).then((function(e) {
                        e.data;
                        var t = e.errors;
                        t && console.log(t)
                    }))
                }
            },
            Ve = n(217),
            He = function(e) {
                var t = e.history,
                    n = e.location,
                    a = We({
                        url: n.pathname + n.search,
                        anonId: Object(Ve.a)()
                    });
                return Object(m.useEffect)((function() {
                    var e = !1;
                    if ("REPLACE" === t.action && t.location.pathname.endsWith("/build") && "" === t.location.search && (e = !0), t.location.pathname.endsWith("/combo") && (e = !0), !e && l.window && l.window.lngtd) {
                        try {
                            l.window.lngtd.resetAndRunAuction()
                        } catch (e) {
                            console.error(e)
                        }
                        l.window.dataLayer && l.window.dataLayer.push({
                            event: "refresh-longitude-ads",
                            category: "refresh-longitude-ads",
                            value: "0.45"
                        })
                    }
                }), [n.pathname.toLowerCase()]), Object(m.useEffect)((function() {
                    "REPLACE" === t.action && "/app" !== n.pathname || n.state && !0 === n.state.validation || (console.log("send page"), function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        Je();
                        var a = e + t;
                        qe(a), Ke(), l.window && l.window.rgea && l.window.rgea("send");
                        try {
                            n()
                        } catch (e) {
                            console.log(e)
                        }
                    }(n.pathname, n.search, a))
                }), [n.pathname.toLowerCase(), n.search.substring(1).toLowerCase()]), null
            };

        function Ke() {
            clearTimeout(Ue), clearTimeout(Fe), clearTimeout($e);
            Ue = setTimeout((function() {
                l.window && l.window.dataLayer && l.window.dataLayer.push({
                    event: "1-sec-view"
                })
            }), 1e3), Fe = setTimeout((function() {
                l.window && l.window.dataLayer && l.window.dataLayer.push({
                    event: "10-sec-view"
                })
            }), 1e4), $e = setTimeout((function() {
                l.window && l.window.dataLayer && l.window.dataLayer.push({
                    event: "20-sec-view"
                })
            }), 2e4)
        }

        function Je() {
            if (l.window) {
                var e = localStorage.getItem(e);
                e || (l.window.dataLayer && l.window.dataLayer.push({
                    event: "entrance",
                    category: "entrance",
                    value: ""
                }), localStorage.setItem("ugg_entrance", 1));
                localStorage.getItem("ugg_entrance_timestamp") || localStorage.setItem("ugg_entrance_timestamp", Date.now())
            }
        }
        var Ye = n(216),
            Qe = (n(224), n(379)),
            Ze = n.p + "static/images/overwolf_app/champ-select.png",
            Xe = n.p + "static/images/overwolf_app/head-to-head.png",
            et = n.p + "static/images/overwolf_app/in-game.png",
            tt = n.p + "static/images/overwolf_app/runes.png",
            nt = n.p + "static/images/overwolf_app/build.png",
            at = {
                0: {
                    header: "THE APP IS HERE",
                    sub_header: "The best Champ Select scouting.",
                    teaser_image: d.a.createElement("img", {
                        src: Ze,
                        alt: "champ-select"
                    }),
                    utm: "utm_source=uggchampselectb"
                },
                1: {
                    header: "THE APP IS HERE",
                    sub_header: "Head-to-Head Live Game.",
                    teaser_image: d.a.createElement("img", {
                        src: Xe,
                        alt: "head-to-head"
                    }),
                    utm: "utm_source=uggh2hb"
                },
                2: {
                    header: "THE APP IS HERE",
                    sub_header: "In-game performance tracker.",
                    teaser_image: d.a.createElement("img", {
                        src: et,
                        alt: "in-game"
                    }),
                    utm: "utm_source=uggtrackerb"
                },
                3: {
                    header: "THE APP IS HERE",
                    sub_header: "Auto-import builds and runes.",
                    teaser_image: d.a.createElement(d.a.Fragment, null, d.a.createElement("img", {
                        src: tt,
                        alt: "runes",
                        className: "double-img"
                    }), d.a.createElement("img", {
                        src: nt,
                        alt: "build",
                        className: "double-img"
                    })),
                    utm: "utm_source=uggimportb"
                }
            },
            rt = function(e) {
                var t = Object(O.useGlobal)("loggingIn"),
                    n = y()(t, 1)[0],
                    a = Object(x.g)().isPremium,
                    r = Object(m.useState)(!1),
                    o = y()(r, 2),
                    i = o[0],
                    c = o[1],
                    s = Object(m.useState)(Math.floor(4 * Math.random())),
                    u = y()(s, 2),
                    p = u[0],
                    f = u[1],
                    g = Object(S.h)(),
                    h = Object(S.f)(g.pathname, {
                        path: ["/support-us", "/about", "/", "/app"],
                        exact: !0,
                        strict: !1
                    });
                Object(m.useEffect)((function() {
                    c("hide" !== (l.window && sessionStorage.getItem("ad-free-banner")))
                }), []), Object(m.useEffect)((function() {
                    f(Math.floor(4 * Math.random()))
                }), [g.pathname]);
                var b = !1;
                return l.window && l.window.location.pathname.includes("/about") && (b = !0), !l.window || !i || n || a || b || h ? null : d.a.createElement("div", {
                    className: "app-banner"
                }, d.a.createElement("div", {
                    className: "app-preview"
                }, at[p].teaser_image), d.a.createElement("div", {
                    className: "text-box"
                }, d.a.createElement("div", {
                    className: "header"
                }, at[p].header), d.a.createElement("div", {
                    className: "sub-header"
                }, at[p].sub_header)), d.a.createElement("div", {
                    className: "button-container"
                }, d.a.createElement(v.b, {
                    className: "btn-blue btn-blue_hover masthead_app-btn",
                    to: "/app?" + (at[p].utm || "")
                }, d.a.createElement(Qe.ReactComponent, {
                    className: "win-icon"
                }), " Download App")))
            };

        function ot(e) {
            return !(!e || !e.pathname) && ["/signup", "/login", "/recover-account", "/reset-password", "/verification", "/about"].includes(e.pathname)
        }

        function it(e) {
            return !(!e || !e.pathname) && e.pathname.match(/^\/overwolf\//)
        }
        var ct = function(e) {
                var t = Object(O.useGlobal)("verificationBar"),
                    n = (y()(t, 1)[0], Object(S.h)()),
                    a = Object(S.g)();
                Object(m.useEffect)((function() {
                    n.pathname !== n.pathname.toLowerCase() && l.window && a.replace(n.pathname.toLowerCase() + n.search)
                }), [n.pathname]);
                var r = _()({
                    "desktop-container": !0,
                    "router-container": !0,
                    "no-masthead": ot(n),
                    "no-padding": n.pathname.match(/(^\/$)/) || n.pathname.match(/(^\/about$)/) || n.pathname.match(/\/year-in-review/g) || n.pathname.match(/\/yir-landing-page/g) || n.pathname.match(/\/not-found-user-summoner-profile/g) || n.pathname.match(/^\/boost/g) || n.pathname.match(/^\/discover-boost/g) || n.pathname.match(/^\/support-us/g) || n.pathname.match(/^\/lg-splash/g)
                });
                return d.a.createElement("div", {
                    className: r
                }, ot(n) || it(n) ? null : d.a.createElement(he, null), d.a.createElement("div", {
                    id: it(n) ? "ow-page-content" : "page-content"
                }, ot(n) || function(e) {
                    return !(!e || !e.pathname) && e.pathname.match(/^\/boost\//)
                }(n) || it(n) ? null : d.a.createElement(Be, null), d.a.createElement("div", {
                    style: {
                        width: "100%"
                    }
                }, d.a.createElement(T.a, {
                    min: "TABLET",
                    max: "DESKTOP_LARGE"
                }, d.a.createElement("div", null, it(n) ? null : d.a.createElement(rt, null))), d.a.createElement(ve.a, null))), d.a.createElement(S.b, {
                    path: "/",
                    component: He
                }), d.a.createElement(Ye.NotificationContainer, null))
            },
            st = function(e) {
                var t = Object(O.useGlobal)("responsive"),
                    n = y()(t, 2),
                    a = n[0],
                    r = n[1],
                    o = Object(m.useCallback)((function() {
                        var e = Object(ge.B)(l.window.innerWidth);
                        e !== a && r(e)
                    }), [a]);
                return Object(m.useEffect)((function() {
                    if (l.window) return l.window.addEventListener("resize", o),
                        function() {
                            return l.window.removeEventListener("resize", o)
                        }
                }), [o]), null
            };

        function lt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function ut(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? lt(Object(n), !0).forEach((function(t) {
                    r()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var mt = function(e) {
            var t = Object(S.g)(),
                n = Object(S.h)();
            return Object(m.useEffect)((function() {
                if (u.a && u.a.top) {
                    var e = {
                        iframeLocation: ut(ut({}, n), {}, {
                            action: t.action
                        })
                    };
                    u.a.top.postMessage(JSON.stringify(e), "*")
                }
            }), [n.pathname, n.search]), null
        };

        function dt(e, t) {
            e && (e.style.zoom = t)
        }
        var pt = function(e) {
                var t = Object(m.useRef)(!0),
                    n = Object(R.e)().zoom;
                return Object(m.useEffect)((function() {
                    ! function() {
                        if (u.a) {
                            var e = document.getElementById("root"),
                                t = document.getElementById("tooltip-portal"),
                                a = document.getElementById("react-portal");
                            dt(e, n), dt(t, n), dt(a, n)
                        }
                    }(), t.current = !1
                }), [n]), t.current ? null : e.children
            },
            ft = n(1241),
            gt = n(215),
            ht = n.n(gt),
            vt = n(601),
            bt = n(595),
            yt = n(1244),
            Ot = n(1243),
            Et = n(400);

        function wt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function jt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? wt(Object(n), !0).forEach((function(t) {
                    r()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Nt(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                a = Object(bt.a)({
                    uri: Object(Et.a)(),
                    fetch: ht.a
                }),
                r = Object(vt.a)((function(t, a) {
                    var r = a.headers,
                        o = {
                            "x-is-ssr": n
                        };
                    return {
                        headers: jt(jt(jt({}, r), o), {}, {
                            authorization: e ? "Bearer ".concat(e) : ""
                        })
                    }
                })),
                o = new yt.a;
            t && Object.keys(t).length > 0 && (o = (new yt.a).restore(t));
            var i = new Ot.a({
                ssrMode: n,
                link: r.concat(a),
                cache: o
            });
            return i
        }
        var St, kt = n(592),
            _t = n.n(kt);
        l.window && (St = n(417));
        var Tt = function() {
                var e = Object(O.useGlobal)("adblock"),
                    t = y()(e, 2),
                    n = (t[0], t[1]),
                    a = Object(O.useGlobal)("isDetectingAdblock"),
                    r = y()(a, 2),
                    o = (r[0], r[1]);
                return Object(m.useEffect)((function() {
                    l.window && _t()((function(e) {
                        o(!1), n(e)
                    }))
                }), []), null
            },
            It = function(e) {
                var t = Object(O.useGlobal)("authToken"),
                    n = y()(t, 1)[0],
                    a = Object(O.useGlobal)("loggingIn"),
                    r = y()(a, 2),
                    o = (r[0], r[1]),
                    i = Object(M.a)(D.v, {
                        skip: !n
                    }),
                    c = i.loading,
                    s = (i.data, i.error);
                return Object(m.useEffect)((function() {
                    s && l.window && n && (Object(ge.J)("authToken"), l.window.location.reload()), c || o(!1)
                }), [c]), null
            },
            Pt = function() {
                var e = Object(O.useGlobal)("isWebP"),
                    t = y()(e, 2),
                    n = t[0],
                    a = t[1];
                return Object(m.useEffect)((function() {
                    i()(s.a.mark((function e() {
                        var t, r;
                        return s.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, l.window) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", !0);
                                case 3:
                                    if (null == n) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 5:
                                    if (self.createImageBitmap) {
                                        e.next = 8;
                                        break
                                    }
                                    return a(!1), e.abrupt("return", !1);
                                case 8:
                                    return "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=", e.next = 11, fetch("data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=").then((function(e) {
                                        return e.blob()
                                    }));
                                case 11:
                                    return t = e.sent, r = createImageBitmap(t).then((function() {
                                        return !0
                                    }), (function() {
                                        return !1
                                    })), e.next = 15, r;
                                case 15:
                                    if (!e.sent) {
                                        e.next = 19;
                                        break
                                    }
                                    a(!0), e.next = 20;
                                    break;
                                case 19:
                                    a(!1);
                                case 20:
                                    e.next = 24;
                                    break;
                                case 22:
                                    e.prev = 22, e.t0 = e.catch(0);
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 22]
                        ])
                    })))()
                }), []), null
            },
            At = function(e) {
                var t = e.client,
                    n = Object(m.useState)(!1),
                    a = y()(n, 2),
                    r = a[0],
                    o = a[1],
                    i = Object(m.useState)(t),
                    c = y()(i, 2),
                    s = c[0],
                    u = c[1],
                    p = Object(O.useGlobal)("authToken"),
                    f = y()(p, 1)[0],
                    g = Object(R.e)().zoom;
                return Object(m.useEffect)((function() {
                    l.window && St && St.getInstance().init("7eca130169173b8b71bb5a04195be117"), o(!0)
                }), []), Object(m.useEffect)((function() {
                    if (r) {
                        var e = t.extract();
                        u(Nt(f, e))
                    }
                }), [f, t]), d.a.createElement(ft.a, {
                    client: s
                }, l.window && d.a.createElement(Tt, null), l.window && d.a.createElement(Pt, null), l.window && d.a.createElement(It, null), l.window && d.a.createElement(st, null), l.window && l.window.self !== l.window.top && d.a.createElement(mt, null), d.a.createElement(E.a, {
                    staging: !1,
                    ssr: !0
                }, d.a.createElement(N, null, d.a.createElement(pt, null, d.a.createElement(G.g, {
                    zoom: g
                }, d.a.createElement(ct, null))))))
            },
            Lt = n(386),
            Ct = n.n(Lt);

        function Rt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function xt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Rt(Object(n), !0).forEach((function(t) {
                    r()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var Mt = function(e) {
                [Dt].forEach((function(t) {
                    e ? e.addReducer(t.type, t.actionFn) : Object(O.addReducer)(t.type, t.actionFn)
                }))
            },
            Dt = {
                type: "UPDATE_STATIC_JSON",
                actionFn: function(e, t, n, a) {
                    return r()({}, n, a)
                }
            },
            Gt = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.req,
                    n = e.initState,
                    a = void 0 === n ? {} : n,
                    r = Object(O.createProvider)(xt({
                        adblock: !1,
                        isDetectingAdblock: !1,
                        manualSideNav: !1,
                        expandedSideNav: !1,
                        clientChampionFavorites: void 0,
                        clientSummonerFavorites: void 0,
                        language: Object(oe.c)({
                            req: t
                        }) || oe.a,
                        settingsNotification: !1,
                        verificationBar: !1
                    }, a));
                return Mt(r), r
            }(),
            Bt = n(602),
            qt = n(166),
            Ut = n(593),
            Ft = n.n(Ut);

        function $t(e, t) {
            return new Promise((function(n, a) {
                e.use(Ft.a).use(qt.e).init({
                    react: {
                        wait: !0,
                        useSuspense: !1
                    },
                    lng: t || oe.a,
                    fallbackLng: oe.a,
                    backend: {
                        loadPath: "https://static.u.gg/assets/ugg/translations/{{lng}}.json"
                    },
                    keySeparator: "|",
                    interpolation: {
                        escapeValue: !1
                    }
                }, (function(t, r) {
                    t ? a(t) : n(e)
                }))
            }))
        }

        function zt(e) {
            return Wt.apply(this, arguments)
        }

        function Wt() {
            return (Wt = i()(s.a.mark((function e(t) {
                var n, a;
                return s.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = Object(oe.c)({
                                language: t
                            }), a = Bt.a.createInstance(), e.prev = 2, e.next = 5, $t(a, n);
                        case 5:
                            e.next = 10;
                            break;
                        case 7:
                            e.prev = 7, e.t0 = e.catch(2), console.error(e.t0);
                        case 10:
                            return e.abrupt("return", Promise.resolve(a));
                        case 11:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [2, 7]
                ])
            })))).apply(this, arguments)
        }
        var Vt = n(397),
            Ht = n(527),
            Kt = n(25),
            Jt = (n(528), n(52)),
            Yt = n.n(Jt);
        Yt.a.relativeTimeThreshold("m", 59), Yt.a.defineLocale("match", {
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            calendar: {
                lastDay: "MMM D",
                sameDay: "h:mm A",
                nextDay: "MMM D",
                lastWeek: "MMM D",
                nextWeek: "MMM D",
                sameElse: "MMM D"
            }
        }), Yt.a.defineLocale("multi-search-match", {
            relativeTime: {
                future: "in %s",
                past: "%s",
                s: "1m",
                ss: "1m",
                m: "1min",
                mm: "%dmin",
                h: "1h",
                hh: "%dh",
                d: "1d",
                dd: "%dd",
                M: "1mo",
                MM: "%dmo",
                y: "1yr",
                yy: "%dyr"
            }
        });
        var Qt = n(223),
            Zt = n.n(Qt),
            Xt = n(565);
        n(1148), n(1149), n(1150), n(1151);
        Zt.a.theme = Xt.a, Zt.a.setOptions(Zt.a.theme), Object(Ve.a)(), Yt.a.locale("en");
        var en = {
            gtmId: "GTM-NS7856L"
        };
        if (l.window)
            if ("set" === localStorage.getItem("UGG_HAS_SET_CONSENT_STORAGE_STORAGE_KEY_V5")) {
                var tn = JSON.parse(localStorage.getItem("UGG_PERMISSIONS_STORAGE_KEY_V5"));
                (tn[5] || 0 === Object.keys(tn).length) && (l.window.dataLayer || Ct.a.initialize(en))
            } else Ct.a.initialize(en);
        Object.assign(Vt.a, {
            NoDataComponent: Ht.a
        });
        var nn = Object.assign({}, l.window.__REACTN_PRELOADED_STATE__, l.window.__SSR_DATA__),
            an = Gt;
        an.setGlobal(nn),
            function(e) {
                var t = l.window && (localStorage.getItem("authToken") || sessionStorage.getItem("authToken"));
                l.window && t && (Object(ge.n)("authToken") || Object(ge.a)("authToken", t), localStorage.removeItem("authToken"), sessionStorage.removeItem("authToken"));
                var n = l.window && Object(ge.n)("authToken"),
                    a = localStorage.getItem("UGG_PERMISSIONS_STORAGE_KEY_V5") ? JSON.parse(localStorage.getItem("UGG_PERMISSIONS_STORAGE_KEY_V5")) : {
                        1: !0,
                        2: !0,
                        3: !0,
                        4: !0,
                        5: !0
                    },
                    r = Object(ge.B)(l.window && l.window.innerWidth);
                e.setGlobal({
                    isDetectingAdblock: !0,
                    manualSideNav: "DESKTOP_LARGE" === r && Object(ge.M)(),
                    expandedSideNav: "DESKTOP_LARGE" === r && Object(ge.M)(),
                    permissions: a,
                    authToken: n,
                    loggingIn: !!n,
                    clientRegion: localStorage.getItem("summonerRegion") || "na1",
                    language: Object(oe.c)() || oe.a,
                    responsive: r
                })
            }(an), delete l.window.__REACTN_PRELOADED_STATE__, delete l.window.__SSR_DATA__, Object(Kt.a)(an);
        var rn = Nt(an.getGlobal().authToken, l.window.__APOLLO_STATE__);
        if (l.document) {
            var on = l.document.getElementsByTagName("head")[0],
                cn = l.document.createElement("meta");
            cn.setAttribute("charset", "UTF-8"), on.insertBefore(cn, on.firstChild)
        }
        var sn = function() {
            var e = i()(s.a.mark((function e() {
                var t, n;
                return s.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return t = an.getGlobal().language, e.next = 3, zt(t);
                        case 3:
                            n = e.sent, Object(g.b)((function() {
                                Object(p.hydrate)(d.a.createElement(h.b, null, d.a.createElement(f.a, {
                                    i18n: n
                                }, d.a.createElement(an, null, d.a.createElement(v.a, null, d.a.createElement(At, {
                                    client: rn
                                }))))), l.document.getElementById("root"))
                            }));
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function() {
                return e.apply(this, arguments)
            }
        }();
        l.window && (l.window.onload = function() {
            setTimeout((function() {
                if (l.document)
                    for (var e = ["https://www.paypalobjects.com/api/checkout.js", "https://js.stripe.com/v3/"], t = 0; t < e.length; t++) {
                        var n = l.document.createElement("script");
                        n.src = e[t], n.async = !0, l.document.getElementsByTagName("body")[0].appendChild(n)
                    }
            }), 1)
        }), l.window && sessionStorage.setItem("initial_page", l.window.location.pathname), sn()
    },
    118: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 128",
                transform: "rotate(180)"
            }, e), a || (a = r.createElement("g", {
                "data-name": "Layer 2"
            }, r.createElement("path", {
                fill: "#626696",
                d: "M0 0l128 128L256 0z",
                "data-name": "Layer 1"
            }))))
        }
        t.default = n.p + "static/svg/triangle-arrow-up.svg"
    },
    126: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return s
        })), n.d(t, "c", (function() {
            return l
        })), n.d(t, "a", (function() {
            return u
        }));
        var a = n(11),
            r = n.n(a),
            o = n(18),
            i = n(9);

        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function s(e) {
            var t = {};
            return e && e.filterBuildsAndRunes && (e.filterBuildsAndRunes.mmr && e.filterBuildsAndRunes.mmr !== i.r.rank && (t = Object.assign(t, {
                rank: e.filterBuildsAndRunes.mmr
            })), e.filterBuildsAndRunes.regionId && e.filterBuildsAndRunes.regionId !== i.r.region && (t = Object.assign(t, {
                region: e.filterBuildsAndRunes.regionId
            })), e.filterBuildsAndRunes.queueType && e.filterBuildsAndRunes.queueType !== i.r.queueType && (t = Object.assign(t, {
                queueType: e.filterBuildsAndRunes.queueType
            }))), "?".concat(Object(o.e)(t))
        }

        function l(e) {
            var t = {};
            return e && e.filterTierList ? (e.filterTierList.regionId && e.filterTierList.regionId !== i.A.region && (t = Object.assign(t, {
                region: e.filterTierList.regionId
            })), e.filterTierList.showAllChampions && (t = Object.assign(t, {
                allChampions: "true"
            })), e.filterTierList.mmr && e.filterTierList.mmr !== i.A.rank && (t = Object.assign(t, {
                rank: e.filterTierList.mmr
            })), e.filterTierList.role && e.filterTierList.role !== i.A.role && (t = Object.assign(t, {
                role: e.filterTierList.role
            })), e.filterTierList.queueType && e.filterTierList.queueType !== i.A.queueType && (t = Object.assign(t, {
                queueType: e.filterTierList.queueType
            })), "?".concat(Object(o.e)(t))) : ""
        }

        function u(e) {
            var t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        r()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }({}, e);
            return delete t.role, {
                pathname: function() {
                    switch (e.role) {
                        case "top":
                            return "/lol/top-lane-tier-list";
                        case "jungle":
                            return "/lol/jungle-tier-list";
                        case "middle":
                            return "/lol/mid-lane-tier-list";
                        case "adc":
                            return "/lol/adc-tier-list";
                        case "support":
                            return "/lol/support-tier-list";
                        default:
                            return "/lol/tier-list"
                    }
                }(),
                search: Object(o.e)(t)
            }
        }
    },
    127: function(e, t, n) {
        "use strict";
        var a = n(85),
            r = n.n(a),
            o = n(1),
            i = n.n(o),
            c = (n(4), n(0)),
            s = n.n(c),
            l = n(10),
            u = n(14),
            m = n.n(u),
            d = n(388),
            p = n(167),
            f = n(93);

        function g(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return h(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var a = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, i = !0,
                c = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return i = e.done, e
                },
                e: function(e) {
                    c = !0, o = e
                },
                f: function() {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (c) throw o
                    }
                }
            }
        }

        function h(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
            return a
        }
        var v = function(e) {
            var t = e.region,
                n = e.regionToApply,
                a = e.currentSetRegion,
                r = e.disabled,
                o = e.isMasthead,
                i = e.size,
                c = e.forceMastheadRegion;
            if (!t) return null;
            var l = n ? t === n : t === a,
                u = "".concat(Object(p.b)(t, o || c));
            return s.a.createElement("div", {
                className: m()("region-selector-item", {
                    "region-selector-item_disabled": r
                })
            }, s.a.createElement("img", {
                className: m()({
                    selected: l
                }),
                src: u,
                style: "large" === i ? {
                    height: "40px",
                    width: "40px"
                } : {
                    height: "30px",
                    width: "30px"
                },
                alt: "Region Image"
            }))
        };
        t.a = function(e) {
            var t = e.onApply,
                n = e.currentRegion,
                a = e.isMasthead,
                o = e.forceMastheadRegion,
                u = e.disableTooltip,
                p = Object(c.useRef)(),
                h = Object(c.useRef)(),
                b = Object(c.useState)(""),
                y = i()(b, 2),
                O = y[0],
                E = y[1],
                w = Object(l.useGlobal)("clientRegion"),
                j = i()(w, 2),
                N = j[0],
                S = j[1],
                k = Object(c.useState)(!1),
                _ = i()(k, 2),
                T = _[0],
                I = _[1],
                P = Object(c.useState)(n || N),
                A = i()(P, 2),
                L = A[0],
                C = A[1],
                R = Object(c.useState)(!1),
                x = i()(R, 2),
                M = x[0],
                D = x[1],
                G = [{
                    value: "na1",
                    label: "North America",
                    shorthandLabel: "NA"
                }, {
                    value: "euw1",
                    label: "Europe West",
                    shorthandLabel: "EUW"
                }, {
                    value: "eun1",
                    label: "Europe Nordic & East",
                    shorthandLabel: "EUN"
                }, {
                    value: "kr",
                    label: "Korea",
                    shorthandLabel: "KR"
                }, {
                    value: "br1",
                    label: "Brazil",
                    shorthandLabel: "BR"
                }, {
                    value: "jp1",
                    label: "Japan",
                    shorthandLabel: "JP"
                }, {
                    value: "ru",
                    label: "Russia",
                    shorthandLabel: "RU"
                }, {
                    value: "oc1",
                    label: "Oceania",
                    shorthandLabel: "OCE"
                }, {
                    value: "tr1",
                    label: "Turkey",
                    shorthandLabel: "TR"
                }, {
                    value: "la1",
                    label: "Latin America North",
                    shorthandLabel: "LAN"
                }, {
                    value: "la2",
                    label: "Latin America South",
                    shorthandLabel: "LAS"
                }],
                B = function(e) {
                    t && e && e !== n ? t(e) : e && e !== N && (localStorage.setItem("summonerRegion", e), S(e)), E(""), C(e), q(!1)
                },
                q = function(e) {
                    D(void 0 === e ? !M : e)
                };
            Object(c.useEffect)((function() {
                I(!0)
            }), []), Object(c.useEffect)((function() {
                h.current && M && h.current.focus()
            }), [M]), Object(c.useEffect)((function() {
                if (p.current && clearTimeout(p.current), p.current = setTimeout((function() {
                        E("")
                    }), 1e3), "" !== O.trim()) {
                    var e, t = g(G);
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var n = e.value;
                            if (0 === n.shorthandLabel.toLowerCase().indexOf(O.trim().toLowerCase()) || 0 === n.label.toLowerCase().indexOf(O.trim().toLowerCase())) return C(n.value)
                        }
                    } catch (e) {
                        t.e(e)
                    } finally {
                        t.f()
                    }
                }
            }), [O]);
            var U = Object(c.useCallback)((function(e) {
                13 === e.which && B(L)
            }), [L]);
            if (Object(c.useEffect)((function() {
                    if (L && h.current) return h.current.addEventListener("keypress", U),
                        function() {
                            return h.current.removeEventListener("keypress", U)
                        }
                }), [L, U]), !T) return null;
            var F = s.a.createElement("div", {
                className: "flex-center"
            }, s.a.createElement(v, {
                region: n || N,
                isMasthead: a,
                size: "large",
                forceMastheadRegion: o
            }), s.a.createElement("div", {
                className: "arrow-icon"
            }, s.a.createElement(f.ReactComponent, null)), s.a.createElement("input", {
                className: "region-selector-input",
                ref: h,
                type: "text",
                value: O,
                onChange: function(e) {
                    E(e.target.value)
                }
            }));
            return s.a.createElement(d.a, r()({}, e, {
                dataTip: !u && "Summoner Region",
                button: F,
                subtext: "This will only affect summoner searches",
                modalClassNames: "region-selector-modal",
                buttonClassName: "region-selector-button",
                onCancel: function() {
                    C(null)
                },
                bDisableFooter: !0,
                toggleOpen: q,
                bModalOpen: M
            }), s.a.createElement("div", {
                className: "region-selector-list"
            }, G.map((function(e, t) {
                return s.a.createElement("div", {
                    key: e.value,
                    className: m()("region-entry", {
                        region_selected: L === e.value
                    }),
                    onClick: function() {
                        return B(e.value)
                    },
                    onMouseEnter: function() {
                        return C(e.value)
                    }
                }, s.a.createElement(v, {
                    region: e.value,
                    regionToApply: L,
                    currentSetRegion: L
                }), s.a.createElement("div", {
                    className: L === e.value ? "region-text-selected" : "region-text"
                }, e.label))
            }))))
        }
    },
    141: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return i
        })), n.d(t, "c", (function() {
            return c
        })), n.d(t, "b", (function() {
            return s
        })), n.d(t, "a", (function() {
            return l
        }));
        var a = n(87),
            r = n(221),
            o = (n(147), n(165));

        function i(e) {
            var t = Object(o.a)({
                    apiKey: "champion_ranking",
                    patch: e.patch
                }).data,
                n = Object(r.t)();
            n && (e.queueType = n), "normal_aram" !== e.queueType && "urf" !== e.queueType && "nexus_blitz" !== e.queueType && "normal_blind_5x5" !== e.queueType && "normal_draft_5x5" !== e.queueType && "one_for_all" !== e.queueType || (e.rank = "overall");
            var i = Object(a.b)(e.patch);
            return ["".concat(i, "/champion_ranking"), e.region, e.patch, e.queueType, e.rank, "".concat(t, ".json")].join("/")
        }

        function c(e) {
            var t = Object(o.a)({
                    apiKey: "duos",
                    patch: e.patch
                }).data,
                n = Object(a.b)(e.patch);
            return ["".concat(n, "/duos"), e.region, e.patch, e.queueType, e.rank, "".concat(t, ".json")].join("/")
        }

        function s(e) {
            var t = Object(o.a)({
                apiKey: "combat",
                patch: e.patch
            }).data;
            "normal_aram" !== e.queueType && "urf" !== e.queueType && "nexus_blitz" !== e.queueType && "normal_blind_5x5" !== e.queueType && "normal_draft_5x5" !== e.queueType && "one_for_all" !== e.queueType || (e.rank = "overall");
            var n = Object(a.b)(e.patch);
            return ["".concat(n, "/table/combat"), e.region, e.patch, e.queueType, e.rank, "".concat(t, ".json")].join("/")
        }

        function l(e) {
            var t = Object(o.a)({
                apiKey: "objectives",
                patch: e.patch
            }).data;
            "normal_aram" !== e.queueType && "urf" !== e.queueType && "nexus_blitz" !== e.queueType && "normal_blind_5x5" !== e.queueType && "normal_draft_5x5" !== e.queueType && "one_for_all" !== e.queueType || (e.rank = "overall");
            var n = Object(a.b)(e.patch);
            return ["".concat(n, "/table/objective"), e.region, e.patch, e.queueType, e.rank, "".concat(t, ".json")].join("/")
        }
    },
    146: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return m
        })), n.d(t, "b", (function() {
            return d
        }));
        var a = n(11),
            r = n.n(a),
            o = n(189),
            i = n(399),
            c = (n(9), n(147)),
            s = n(2);

        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach((function(t) {
                    r()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function m(e) {
            var t = o.b[e] || {},
                n = {};
            return Object.keys(t).forEach((function(e) {
                "exemptions" === e ? t.exemptions.forEach((function(e) {
                    n[e] = !0
                })) : "default" !== e && (n[e] = !0)
            })), n
        }

        function d() {
            var e = (0, Object(s.n)().useChampionMini)().data,
                t = Object(c.a)();
            return function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = n.queryParams,
                    r = n.page,
                    c = n.queryParamType,
                    s = n.keepDefaultParams,
                    l = void 0 !== s && s,
                    m = o.b;
                "profile" === c && (m = i.a);
                var d = m[r] || {},
                    p = d.default || {},
                    f = Object.assign({}, p, a),
                    g = u({}, l ? f : a),
                    h = Object.keys(g);
                h.forEach((function(t) {
                    var n = g[t];
                    if (l || p[t] !== n)
                        if (void 0 === d[t]) {
                            var a = o.a.includes(t),
                                r = !!d.exemptions && d.exemptions.includes(t);
                            if ("opp" === t || "champion" === t) Object.values(e || {}).find((function(e) {
                                return e.id.toLowerCase() === n.toLowerCase() || e.name.toLowerCase() === n.toLowerCase()
                            })) || delete g[t];
                            !1 === a && !1 === r && delete g[t]
                        } else {
                            var i = !0;
                            Array.isArray(d[t]) && (i = d[t].find((function(e) {
                                return e.value === n
                            }))), i || delete g[t]
                        }
                    else delete g[t]
                }));
                var v = t.data,
                    b = p || {},
                    y = b.patch,
                    O = d.patch || {},
                    E = O.options,
                    w = O.max,
                    j = v.slice(0, w);
                return !l && ("latest" === y && j[0] === g.patch || "latest" !== y && y === g.patch) && delete g.patch, g.patch && ("latest" === E && !j.includes(g.patch) || Array.isArray(E) && !E.includes(g.patch)) && delete g.patch, l && "latest" === y && !g.patch && (g.patch = j[0]), g
            }
        }
    },
    147: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }));
        n(11);
        var a = n(2),
            r = n(25);

        function o() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.ssr,
                n = e.skip,
                o = "prod";
            return Object(r.b)("".concat(a.b, "/riot_patch_update/").concat(o, "/ugg/patches.json"), {
                ssr: t,
                skip: n
            })
        }
    },
    15: function(e, t, n) {
        "use strict";
        n.d(t, "I", (function() {
            return X
        })), n.d(t, "f", (function() {
            return ee
        })), n.d(t, "C", (function() {
            return te
        })), n.d(t, "E", (function() {
            return ne
        })), n.d(t, "a", (function() {
            return ae
        })), n.d(t, "c", (function() {
            return re
        })), n.d(t, "d", (function() {
            return oe
        })), n.d(t, "J", (function() {
            return ie
        })), n.d(t, "A", (function() {
            return ce
        })), n.d(t, "G", (function() {
            return se
        })), n.d(t, "H", (function() {
            return le
        })), n.d(t, "z", (function() {
            return ue
        })), n.d(t, "D", (function() {
            return me
        })), n.d(t, "x", (function() {
            return de
        })), n.d(t, "y", (function() {
            return pe
        })), n.d(t, "v", (function() {
            return fe
        })), n.d(t, "u", (function() {
            return ge
        })), n.d(t, "e", (function() {
            return he
        })), n.d(t, "p", (function() {
            return ve
        })), n.d(t, "k", (function() {
            return be
        })), n.d(t, "q", (function() {
            return ye
        })), n.d(t, "t", (function() {
            return Oe
        })), n.d(t, "n", (function() {
            return Ee
        })), n.d(t, "g", (function() {
            return we
        })), n.d(t, "m", (function() {
            return je
        })), n.d(t, "l", (function() {
            return Ne
        })), n.d(t, "s", (function() {
            return Se
        })), n.d(t, "o", (function() {
            return ke
        })), n.d(t, "B", (function() {
            return _e
        })), n.d(t, "r", (function() {
            return Te
        })), n.d(t, "F", (function() {
            return Ie
        })), n.d(t, "w", (function() {
            return Ae
        })), n.d(t, "h", (function() {
            return Le
        })), n.d(t, "b", (function() {
            return Ce
        })), n.d(t, "j", (function() {
            return Re
        })), n.d(t, "i", (function() {
            return xe
        }));
        var a, r, o, i, c, s, l, u, m, d, p, f, g, h, v, b, y, O, E, w, j, N, S, k, _, T, I, P, A, L, C, R, x, M, D, G, B, q, U, F, $, z, W, V, H, K = n(19),
            J = n.n(K),
            Y = n(20),
            Q = n(226),
            Z = "\n  lastUpdatedAt\n  losses\n  lp\n  promoProgress\n  queueType\n  rank\n  role\n  seasonId\n  tier\n  wins\n",
            X = Object(Y.a)(a || (a = J()(["\n  query Url(\n    $url: String!,\n    $anonId: String\n  ) {\n    url(\n      url: $url,\n      anonId: $anonId\n    ) {\n      success\n    }\n  }\n"]))),
            ee = Object(Y.a)(r || (r = J()(["\n  query {\n    getBraintreeClientToken {\n      clientToken\n      success,\n    }\n  }\n"]))),
            te = Object(Y.a)(o || (o = J()(["\n  mutation StartBraintreeSubscription(\n    $planDurationMonths: Int!,\n    $paymentMethodNonce: String\n  ) {\n    premiumSignupPayments(planDurationMonths: $planDurationMonths, payment_method_nonce: $paymentMethodNonce) {\n      balance,\n      billingDayOfMonth\n      billingPeriodEndDate\n      billingPeriodStartDate\n      failureCount\n      id\n      nextBillingDate\n      price\n      status\n      updatedAt\n    }\n  }\n"]))),
            ne = Object(Y.a)(i || (i = J()(["\n  mutation UpdateBraintreeSubscriptionPayment(\n    $paymentMethodNonce: String\n  ) {\n    updateSubscriptionPayment(payment_method_nonce: $paymentMethodNonce) {\n      balance,\n      billingDayOfMonth\n      billingPeriodEndDate\n      billingPeriodStartDate\n      failureCount\n      id\n      nextBillingDate\n      price\n      status\n      updatedAt\n    }\n  }\n"]))),
            ae = Object(Y.a)(c || (c = J()(["\n  mutation Register(\n    $email: String!,\n    $password: String!,\n    $marketingOptOut: Boolean!,\n    $summonerName: String!,\n    $summonerRegion: String!,\n    $recaptchaToken: String,\n    $recaptchaTokenV3: String\n  ) {\n    register(\n      agreementSigned: true,\n      email: $email,\n      password: $password,\n      marketingOptOut: $marketingOptOut,\n      primarySummoner: {\n        isDefault: true,\n        summonerName: $summonerName,\n        regionId: $summonerRegion\n      },\n      recaptchaToken: $recaptchaToken,\n      recaptchaTokenV3: $recaptchaTokenV3\n    ) {\n      token\n    }\n  }\n"]))),
            re = Object(Y.a)(s || (s = J()(["\n  mutation DeleteUser(\n    $email: String!,\n    $password: String!,\n    $recaptchaToken: String!\n  ) {\n    deleteUser(\n      email: $email,\n      password: $password,\n      recaptchaToken: $recaptchaToken\n    ) {\n      success\n    }\n  }\n"]))),
            oe = (Object(Y.a)(l || (l = J()(["\n  query CheckEmail(\n    $email: String!,\n    $recaptchaToken: String,\n    $recaptchaTokenV3: String\n  ) {\n    checkEmail(\n      email: $email,\n      recaptchaToken: $recaptchaToken,\n      recaptchaTokenV3: $recaptchaTokenV3\n    ) {\n      success\n    }\n  }\n"]))), Object(Y.a)(u || (u = J()(["\n  query ForgotPassword(\n    $email: String!,\n    $recaptchaToken: String!,\n    $debug: String\n  ) {\n    forgotPassword(\n      email: $email,\n      recaptchaToken: $recaptchaToken,\n      debug: $debug\n    ) {\n      success\n    }\n  }\n"])))),
            ie = Object(Y.a)(m || (m = J()(["\n  mutation VerifyUser($verificationCode: String!) {\n    verify(verificationCode: $verificationCode) {\n      success\n    }\n  }\n"]))),
            ce = Object(Y.a)(d || (d = J()(["\n  query Reverify($debug: String) {\n    reverifyEmail(debug: $debug) {\n      success\n    }\n  }\n"]))),
            se = Object(Y.a)(p || (p = J()(["\n  mutation UpdatePassword(\n    $newPassword: String!,\n    $password: String,\n    $passwordResetHash: String\n  ) {\n    updatePassword(\n      newPassword: $newPassword,\n      password: $password,\n      passwordResetHash: $passwordResetHash\n    ) {\n      success\n    }\n  }\n"]))),
            le = Object(Y.a)(f || (f = J()(["\n  mutation UpdateSettings(\n    $day: Int,\n    $month: Int,\n    $year: Int,\n    $favoriteSummoners: [InputSummoner],\n    $favoriteChampions: [InputChampion],\n    $filterTierList: InputFilterTierList,\n    $filterBuildsAndRunes: InputFilterBuildsAndRunes,\n    $firstName: String,\n    $lastName: String,\n    $marketingOptOut: Boolean,\n    $startDay: Int,\n    $startMonth: Int,\n    $startYear: Int,\n    $primarySummoner: InputSummoner\n  ) {\n    updateSettings(\n      birthdayDay: $day,\n      birthdayMonth: $month,\n      birthdayYear: $year,\n      favoriteSummoners: $favoriteSummoners,\n      favoriteChampions: $favoriteChampions,\n      filterTierList: $filterTierList,\n      filterBuildsAndRunes: $filterBuildsAndRunes,\n      firstName: $firstName,\n      lastName: $lastName,\n      marketingOptOut: $marketingOptOut,\n      startDay: $startDay,\n      startMonth: $startMonth,\n      startYear: $startYear,\n      primarySummoner: $primarySummoner\n    ) {\n      birthdayDay\n      birthdayMonth\n      birthdayYear\n      email\n      firstName\n      lastName\n      marketingOptOut\n      startDay\n      startMonth\n      startYear\n      billingSettings {\n        creditCards {\n          addressCity\n          addressCountry\n          addressLineOne\n          addressLineTwo\n          addressState\n          addressZip\n          brand\n          expMonth\n          expYear\n          isDefault\n          last4\n          name\n        }\n      }\n      lolSettings {\n        summoners {\n          summonerName\n          regionId\n          iconUrl\n          iconId\n          verified\n        }\n        favoriteChampions {\n          championId\n        }\n        favoriteSummoners {\n          summonerName\n          regionId\n          iconUrl\n          iconId\n        }\n      }\n      filterDefaults {\n        filterTierList {\n          mmr\n          queueType\n          regionId\n          role\n          showAllChampions\n        }\n        filterBuildsAndRunes {\n          mmr\n          queueType\n          regionId\n        }\n      }\n    }\n  }\n"]))),
            ue = (Object(Y.a)(g || (g = J()(["\n  mutation UpdateStripe(\n    $stripeToken: String,\n  ) {\n    updateStripe(\n      stripeToken: $stripeToken\n    ) {\n      success\n    }\n  }\n"]))), Object(Y.a)(h || (h = J()(["\n  mutation PremiumSignup(\n    $stripeToken: String!,\n    $name: String!,\n    $addressLineOne: String,\n    $addressLineTwo: String,\n    $addressCity: String,\n    $addressState: String,\n    $addressZip: String!,\n    $addressCountry: String,\n    $last4: String!,\n    $expMonth: Int!,\n    $expYear: Int!,\n    $brand: String!\n    $planDurationMonths: Int!\n  ) {\n    premiumSignup(\n      stripeToken: $stripeToken,\n      name: $name,\n      addressLineOne: $addressLineOne,\n      addressLineTwo: $addressLineTwo,\n      addressCity: $addressCity,\n      addressState: $addressState,\n      addressZip: $addressZip,\n      addressCountry: $addressCountry,\n      last4: $last4,\n      expMonth: $expMonth,\n      expYear: $expYear,\n      brand: $brand,\n      planDurationMonths: $planDurationMonths\n    ) {\n      success\n    }\n  }\n"]))), Object(Y.a)(v || (v = J()(["\n  mutation updatePremiumPlan(\n    $planDurationMonths: Int!,\n    $currency: String,\n  ) {\n    updatePremiumPlan(\n      planDurationMonths: $planDurationMonths,\n      currency: $currency,\n    ) {\n      success\n    }\n  }\n"]))), Object(Y.a)(b || (b = J()(["\n  query previewPremiumPlanChange(\n    $planDurationMonths: Int!,\n    $currency: String,\n  ) {\n    previewPremiumPlanChange(\n      planDurationMonths: $planDurationMonths,\n      currency: $currency,\n    ) {\n      chargeLines {\n        amount\n        currency\n      }\n      chargeAmount\n    }\n  }\n"]))), Object(Y.a)(y || (y = J()(["\n  mutation ConfirmPayment(\n    $paymentIntentId: String,\n    $paymentType: String,\n  ) {\n    confirmPayment(\n      paymentIntentId: $paymentIntentId,\n      paymentType: $paymentType,\n    ) {\n      success\n    }\n  }\n"]))), Object(Y.a)(O || (O = J()(["\n  mutation {\n    resubscribeUser {\n      success\n    }\n  }\n"])))),
            me = Object(Y.a)(E || (E = J()(["\n  mutation {\n    unsubscribeUser {\n      success\n    }\n  }\n"]))),
            de = Object(Y.a)(w || (w = J()(["\n  query Login(\n    $email: String!,\n    $password: String!,\n    $recaptchaToken: String,\n    $recaptchaTokenV3: String\n  ) {\n    login(\n      email: $email,\n      password: $password,\n      recaptchaToken: $recaptchaToken,\n      recaptchaTokenV3: $recaptchaTokenV3\n    ) {\n      firstName\n      lastName\n      isVerified\n      googleAnalyticsId\n      loginState {\n        token\n      }\n      lolSettings {\n        summoners {\n          isDefault\n          regionId\n          summonerName\n          verified\n          iconUrl\n          iconId\n        }\n        favoriteChampions {\n          championId\n        }\n        favoriteSummoners {\n          regionId\n          summonerName\n          iconUrl\n          iconId\n        }\n      }\n      filterDefaults {\n        filterTierList {\n          mmr\n          queueType\n          regionId\n          role\n          showAllChampions\n        }\n        filterBuildsAndRunes {\n          mmr\n          queueType\n          regionId\n        }\n      }\n      premium {\n        isPremium\n        premiumVersion\n        hasFailedPayment\n        paymentFailureDate\n      }\n    }\n  }\n"]))),
            pe = Object(Y.a)(j || (j = J()(["\n  query {\n    logout {\n      success\n    }\n  }\n"]))),
            fe = Object(Y.a)(N || (N = J()(["\n  query {\n    getState {\n      firstName\n      lastName\n      isVerified\n      googleAnalyticsId\n      loginState {\n        token\n      }\n      lolSettings {\n        summoners {\n          isDefault\n          regionId\n          summonerName\n          verified\n          iconUrl\n          iconId\n        }\n        favoriteChampions {\n          championId\n        }\n        favoriteSummoners {\n          regionId\n          summonerName\n          iconUrl\n          iconId\n        }\n      }\n      filterDefaults {\n        filterTierList {\n          mmr\n          queueType\n          regionId\n          role\n          showAllChampions\n        }\n        filterBuildsAndRunes {\n          mmr\n          queueType\n          regionId\n        }\n      }\n      premium {\n        isPremium\n        premiumVersion\n        freeTrialAvailable\n        isOnFreeTrial\n        hasFailedPayment\n        paymentFailureDate\n      }\n    }\n  }\n"]))),
            ge = Object(Y.a)(S || (S = J()(["\n  query {\n    getSettings {\n    \tbirthdayDay\n      birthdayMonth\n      birthdayYear\n      email\n      firstName\n      lastName\n      marketingOptOut\n      startDay\n      startMonth\n      startYear\n      lolSettings {\n        summoners {\n          summonerName\n          iconUrl\n          iconId\n          regionId\n          verified\n        }\n      }\n      filterDefaults {\n        filterTierList {\n          mmr\n          queueType\n          regionId\n          role\n          showAllChampions\n        }\n        filterBuildsAndRunes {\n          mmr\n          queueType\n          regionId\n        }\n      }\n      billingSettings {\n        creditCards {\n          last4\n          brand\n          expMonth\n          expYear\n          isDefault\n          name\n          addressLineOne\n          addressLineTwo\n          addressCity\n          addressState\n          addressZip\n          addressCountry\n        }\n        paypal {\n          email\n        }\n      }\n    }\n  }\n"]))),
            he = Object(Y.a)(k || (k = J()(["\n  query {\n    getBillingData {\n      invoices {\n        currency\n        paid\n        brand\n        last4\n        periodStart\n        periodEnd\n        totalPaid\n      }\n      subscription {\n        cancelAtPeriodEnd\n        currentPeriodEnd\n        status\n        isBraintree\n      }\n      upcomingInvoice {\n        chargeAmount\n        subtotal\n        error\n        nextPaymentAttempt\n      }\n    }\n  }\n"]))),
            ve = Object(Y.a)(_ || (_ = J()(["\n  query {\n    getPlanPrices{\n      amount\n      currency\n      planDuration\n    }\n  }\n"]))),
            be = (Object(Y.a)(T || (T = J()(["\n  mutation UpdateBilling(\n    $stripeToken: String!,\n    $name: String!,\n    $addressLineOne: String,\n    $addressLineTwo: String,\n    $addressCity: String,\n    $addressState: String,\n    $addressZip: String!,\n    $addressCountry: String,\n    $last4: String!,\n    $expMonth: Int!,\n    $expYear: Int!,\n    $brand: String!\n  ) {\n    updateBilling(\n      stripeToken: $stripeToken,\n      name: $name,\n      addressLineOne: $addressLineOne,\n      addressLineTwo: $addressLineTwo,\n      addressCity: $addressCity,\n      addressState: $addressState,\n      addressZip: $addressZip,\n      addressCountry: $addressCountry,\n      last4: $last4,\n      expMonth: $expMonth,\n      expYear: $expYear,\n      brand: $brand\n    ) {\n      success\n    }\n  }\n"]))), Object(Y.a)(I || (I = J()(["\n  query fetchPerformanceScore(\n    $matchId: String!,\n    $regionId: String!,\n    $summonerName: String!,\n    $version: String!\n  ){\n    fetchPerformanceScore(\n      matchId: $matchId,\n      regionId: $regionId,\n      summonerName: $summonerName,\n      version: $version\n    ){\n      damageShare\n      damageShareAgg\n      damageShareTotal\n      finalLvlDiff\n      finalLvlDiffAgg\n      finalLvlDiffTotal\n      goldShare\n      goldShareAgg\n      goldShareTotal\n      hardCarry\n      killParticipation\n      killParticipationAgg\n      killParticipationTotal\n      kpOverGs\n      kpOverGsAgg\n      kpOverGsTotal\n      summonerName\n      teamplay\n      visionScore\n      visionScoreAgg\n      visionScoreTotal\n    }\n  }\n"])))),
            ye = Object(Y.a)(P || (P = J()(["\n  query match(\n    $matchId: String!,\n    $regionId: String!,\n    $summonerName: String!,\n    $version: String!\n  ){\n      match(\n        matchId: $matchId,\n        regionId: $regionId,\n        summonerName: $summonerName,\n        version: $version\n      ) {\n        allPlayerRanks {\n          rankScores {\n          lastUpdatedAt\n          losses\n          lp\n          queueType\n          rank\n          role\n          seasonId\n          tier\n          wins\n        }\n        exodiaUuid\n        summonerName\n      }\n      historicalData {\n        xpDifferenceFrames {\n          oppValue\n          timestamp\n          youValue\n        }\n        teamOneOverview {\n          bans\n          baronKills\n          dragonKills\n          gold\n          inhibitorKills\n          kills\n          riftHeraldKills\n          towerKills\n        }\n        teamTwoOverview {\n          bans\n          baronKills\n          dragonKills\n          gold\n          inhibitorKills\n          kills\n          riftHeraldKills\n          towerKills\n        }\n        runes\n        skillPath\n        statShards\n        accountIdV3\n        csDifferenceFrames {\n          oppValue\n          timestamp\n          youValue\n        }\n        finishedItems{\n          itemId\n          timestamp\n          type\n        }\n        goldDifferenceFrames {\n          oppValue\n          timestamp\n          youValue\n        }\n        itemPath {\n          itemId\n          timestamp\n          type\n        }\n        matchId\n        postGameData {\n          assists\n          carryPercentage\n          championId\n          cs\n          damage\n          deaths\n          gold\n          items\n          jungleCs\n          keystone\n          kills\n          level\n          role\n          subStyle\n          summonerName\n          summonerSpells\n          teamId\n          wardsPlaced\n          level\n        }\n        primaryStyle\n        queueType\n        regionId\n        subStyle\n        summonerName\n      }\n      matchSummary {\n        ", "\n      }\n      playerInfo {\n        accountIdV3\n        accountIdV4\n        exodiaUuid\n        iconId\n        puuidV4\n        regionId\n        summonerIdV3\n        summonerIdV4\n        summonerLevel\n        summonerName\n      }\n      playerRank {\n        exodiaUuid\n        rankScores {\n          lastUpdatedAt\n          losses\n          lp\n          queueType\n          rank\n          role\n          seasonId\n          tier\n          wins\n        }\n      }\n      playerStatistics {\n        basicChampionPerformances {\n          assists\n          championId\n          cs\n          damage\n          damageTaken\n          deaths\n          doubleKills\n          gold\n          kills\n          maxDeaths\n          maxKills\n          pentaKills\n          quadraKills\n          totalMatches\n          tripleKills\n          wins\n        }\n        exodiaUuid\n        puuid\n        queueType\n        regionId\n        role\n        seasonId\n      }\n      performanceScore {\n        hardCarry\n        teamplay\n        summonerName\n      }\n      winningTeam\n    }\n  }\n"])), Q.b),
            Oe = Object(Y.a)(A || (A = J()(["\n  query getSummonerRankSnapshots(\n    $queueType: [Int],\n    $regionId: String!,\n    $summonerName: String!\n  ){\n    getSummonerRankSnapshots(\n      queueType: $queueType,\n      regionId: $regionId,\n      summonerName: $summonerName\n    ){\n      insertedAt\n      losses\n      lp\n      promoProgress\n      queueId\n      rank\n      tier\n      wins\n    }\n  }\n"]))),
            Ee = Object(Y.a)(L || (L = J()(["\n  query getPlayerRanks(\n    $summonerName: String!\n    $regionId: String!\n    $seasonId: Int!\n  ) {\n    fetchProfileRanks(\n      summonerName: $summonerName,\n      regionId: $regionId,\n      seasonId: $seasonId\n    ) {\n      rankScores {\n        lastUpdatedAt\n        losses\n        lp\n        promoProgress\n        queueType\n        rank\n        role\n        seasonId\n        tier\n        wins\n      }\n    }\n  }\n"]))),
            we = Object(Y.a)(C || (C = J()(["\n  query historicRanks(\n    $queueType: Int!\n    $summonerName: String!\n    $regionId: String!\n  ) {\n    getHistoricRanks(\n      queueType: $queueType,\n      summonerName: $summonerName,\n      regionId: $regionId\n    ) {\n      lp\n      queueId\n      rank\n      regionId\n      season\n      tier\n    }\n  }\n"]))),
            je = Object(Y.a)(R || (R = J()(["\n  query getPlayerOverallRanking(\n    $queueType: Int\n    $summonerName: String\n    $regionId: String\n  ) {\n    overallRanking(\n      queueType: $queueType,\n      summonerName: $summonerName,\n      regionId: $regionId\n    ) {\n      overallRanking\n      totalPlayerCount\n    }\n  }\n"]))),
            Ne = Object(Y.a)(x || (x = J()(["\n  query getPlayerLP(\n    $summonerName: String!\n    $regionId: String!\n    $patchVersion: String!\n  ) {\n    fetchPlayerLpTimeline(\n      summonerName: $summonerName,\n      regionId: $regionId\n      patchVersion: $patchVersion,\n    ) {\n      lpTrack {\n        championId\n        matchId\n        lp\n        rank\n        score\n        tier\n      }\n      roleLp {\n        adc\n        all\n        jungle\n        mid\n        none\n        supp\n        top\n      }\n    }\n  }\n"]))),
            Se = Object(Y.a)(M || (M = J()(["\n  query getSummonerProfile(\n    $championId: String!\n    $queueType: String!\n    $regionId: String!\n    $role: String!\n    $seasonId: String!\n    $seasonIdInt: Int!\n    $summonerName: String!\n  ) {\n    fetchProfileRanks(\n      summonerName: $summonerName,\n      regionId: $regionId,\n      seasonId: $seasonIdInt\n    ) {\n      rankScores {\n        lastUpdatedAt\n        losses\n        lp\n        promoProgress\n        queueType\n        rank\n        role\n        seasonId\n        tier\n        wins\n      }\n    }\n    profileInit(\n      championId: $championId,\n      queueType: $queueType,\n      regionId: $regionId,\n      role: $role,\n      seasonId: $seasonId,\n      summonerName: $summonerName\n    ) {\n      finishedMatchHistory\n      lastModified\n      matchHistory {\n        assists\n        championId\n        cs\n        deaths\n        gold\n        items\n        jungleCs\n        kills\n        level\n        matchCreationTime\n        matchDuration\n        matchId\n        maximumKillStreak\n        primaryStyle\n        queueType\n        regionId\n        runes\n        role\n        subStyle\n        summonerName\n        summonerSpells\n        version\n        win\n        teamA {\n          championId\n          summonerName\n        }\n        teamB {\n          championId\n          summonerName\n        }\n        visionScore\n        killParticipation\n      }\n      playerInfo {\n        accountIdV3\n        accountIdV4\n        exodiaUuid\n        iconId\n        puuidV4\n        regionId\n        summonerIdV3\n        summonerIdV4\n        summonerLevel\n        summonerName\n      }\n      playerOverviewKpis {\n        gameStreak\n        maxKills\n        totalAssists\n        totalCs\n        totalDeaths\n        totalGames\n        totalKills\n        totalSeconds\n        totalWins\n      }\n      playerRank {\n        exodiaUuid\n        rankScores {\n          losses\n          lp\n          promoProgress\n          queueType\n          role\n          seasonId\n          tier\n          wins\n          rank\n          lastUpdatedAt\n        }\n      }\n      playerStatistics {\n        basicChampionPerformances {\n          assists\n          championId\n          cs\n          damage\n          damageTaken\n          deaths\n          doubleKills\n          gold\n          kills\n          maxDeaths\n          maxKills\n          pentaKills\n          quadraKills\n          totalMatches\n          tripleKills\n          wins\n        }\n        exodiaUuid\n        puuid\n        queueType\n        regionId\n        role\n        seasonId\n      }\n      sessionUuid\n      totalNumMatches\n      memberStatus\n      customizationData {\n        headerBg\n        pinnedMatchId\n        twitchLink\n        twitchName\n        twitterLink\n        twitterName\n        youtubeLink\n        youtubeName\n        pinnedMatchData {\n          assists\n          championId\n          cs\n          deaths\n          gold\n          items\n          jungleCs\n          kills\n          level\n          matchCreationTime\n          matchDuration\n          matchId\n          maximumKillStreak\n          primaryStyle\n          queueType\n          regionId\n          runes\n          role\n          subStyle\n          summonerName\n          summonerSpells\n          version\n          win\n          lpInfo {\n            lp\n            placement\n            promoProgress\n            promoTarget\n            promotedTo {\n              tier\n              rank\n            }\n          }\n          teamA {\n            championId\n            summonerName\n          }\n          teamB {\n            championId\n            summonerName\n          }\n          visionScore\n          killParticipation\n        }\n      }\n    }\n  }\n"]))),
            ke = Object(Y.a)(D || (D = J()(["\n  query getPlayerStats(\n    $queueType: [Int!]\n    $regionId: String!\n    $role: Int!\n    $seasonId: Int!\n    $summonerName: String!\n  ) {\n    fetchPlayerStatistics(\n      queueType: $queueType,\n      summonerName: $summonerName,\n      regionId: $regionId,\n      role: $role,\n      seasonId: $seasonId\n    ) {\n      basicChampionPerformances {\n        assists\n        championId\n        cs\n        damage\n        damageTaken\n        deaths\n        doubleKills\n        gold\n        kills\n        maxDeaths\n        maxKills\n        pentaKills\n        quadraKills\n        totalMatches\n        tripleKills\n        wins\n        lpAvg\n      }\n      exodiaUuid\n      puuid\n      queueType\n      regionId\n      role\n      seasonId\n    }\n  }\n"]))),
            _e = (Object(Y.a)(G || (G = J()(["\n    query getProfileChampion(\n      $championId: String!\n      $queueType: String!\n      $regionId: String!\n      $role: String!\n      $seasonId: String!\n      $summonerName: String!){\n        profileChampion(\n          championId: $championId,\n          queueType: $queueType,\n          regionId: $regionId,\n          role: $role,\n          seasonId: $seasonId,\n          summonerName: $summonerName\n        ) {\n        championStatistic {\n          ccTimeDealt\n          wardsPlaced\n          damageMitigated\n          xpAdv15\n          wardsKilled\n          exodiaUuid\n          regionId\n          pentaKills\n          secondDuoCarryPercentage15\n          cs\n          damageTaken\n          secondDuoCsAdv15\n          seasonId\n          duoGoldAdv15\n          heals\n          totalMatches\n          ccTime\n          role\n          goldAdv15\n          duoKillAdv15\n          csAdv15\n          tripleKills\n          assists\n          jungleCsAdv15\n          duoCsAdv15\n          secondDuoChampionId\n          turrets\n          carryPercentage15\n          queueType\n          enemyJungleCs\n          secondDuoKillAdv15\n          teamGoldDifference15\n          totalMatchDuration\n          jungleCs\n          deaths\n          maxKills\n          duoCarryPercentage15\n          doubleKills\n          killAdv15\n          quadraKills\n          secondDuoXpAdv15\n          duoXpAdv15\n          gold\n          damageToTurrets\n          damage\n          secondDuoGoldAdv15\n          wins\n          visionScore\n          championId\n          maxDeaths\n          kills\n          opponentMatchupStatistics {\n            championId\n            totalMatches\n            wins\n          }\n          duoMatchupStatistics {\n            championId\n            totalMatches\n            wins\n          }\n        }\n        playerInfo {\n          exodiaUuid\n          iconId\n          regionId\n          summonerLevel\n          summonerName\n        }\n        playerRank {\n          exodiaUuid\n          rankScores {\n            losses\n            lp\n            promoProgress\n            queueType\n            rank\n            role\n            seasonId\n            tier\n            wins\n            lastUpdatedAt\n          }\n        }\n      }\n    }\n"]))), Object(Y.a)(B || (B = J()(["\n    query getAdditionalMatches(\n      $page: String!\n      $sessionUuid: String!\n    )\n      {\n        profilePage(\n          page: $page,\n          sessionUuid: $sessionUuid\n        ) {\n          finishedMatchHistory\n          matchHistory {\n            assists\n            championId\n            cs\n            deaths\n            gold\n            items\n            jungleCs\n            kills\n            level\n            matchCreationTime\n            matchDuration\n            matchId\n            maximumKillStreak\n            primaryStyle\n            queueType\n            regionId\n            role\n            runes\n            subStyle\n            summonerName\n            summonerSpells\n            version\n            killParticipation\n            win\n            teamA {\n              championId\n              summonerName\n            }\n            teamB {\n              championId\n              summonerName\n            }\n      }\n    }\n  }\n"]))), Object(Y.a)(q || (q = J()(["\n  mutation SetProfileCustomizations(\n    $regionId: String!\n    $summonerName: String!\n    $headerBg: String!,\n    $youtubeLink: String!,\n    $youtubeName: String!,\n    $twitchLink:  String!,\n    $twitchName:  String!,\n    $twitterLink: String!,\n    $twitterName: String!,\n    $pinnedMatchId: String! ) {\n      setProfileCustomizations(\n        regionId: $regionId,\n        summonerName: $summonerName,\n        headerBg: $headerBg,\n        youtubeLink: $youtubeLink,\n        youtubeName: $youtubeName,\n        twitchLink: $twitchLink,\n        twitchName: $twitchName,\n        twitterLink: $twitterLink,\n        twitterName: $twitterName,\n        pinnedMatchId: $pinnedMatchId\n      ){\n        headerBg\n        pinnedMatchId\n      }\n    }\n"])))),
            Te = Object(Y.a)(U || (U = J()(["\nquery fetchSummonerNameFromMatchCard(\n  $matchId: Int!\n  $regionId: String!\n  $summonerName: String! ) {\n    fetchSummonerNameFromMatchCard(\n      matchId: $matchId\n      regionId: $regionId\n      summonerName: $summonerName\n    ) {\n      summonerName\n    }\n  }\n"]))),
            Ie = Object(Y.a)(F || (F = J()(["\n  mutation UpdateEmail(\n    $newEmail: String!\n    $oldEmail: String!\n    $password: String! ) {\n      updateEmail(\n        newEmail: $newEmail,\n        oldEmail: $oldEmail,\n        password: $password\n      ){\n        token\n      }\n    }\n"]))),
            Pe = "\n  banId\n  championId\n  championLosses\n  championWins\n  championStats {\n    kills\n    deaths\n    assists\n  }\n  currentRole\n  onRole\n  partyNumber\n  previousSeasonRankScore {\n    ".concat(Z, "\n  }\n  currentSeasonRankScore {\n    ").concat(Z, "\n  }\n  roleDatas {\n    games\n    roleName\n    wins\n  }\n  summonerIconId\n  summonerName\n  summonerRuneA\n  summonerRuneB\n  summonerRuneData\n  summonerSpellA\n  summonerSpellB\n  threatLevel\n"),
            Ae = Object(Y.a)($ || ($ = J()(["\n  query GetLiveGame(\n      $regionId: String!,\n      $summonerName: String!\n    ) {\n      getLiveGame(\n        regionId: $regionId,\n        summonerName: $summonerName\n      ) {\n        gameLengthSeconds\n        gameType\n        teamA {\n          ", "\n        }\n        teamB {\n          ", "\n        }\n      }\n    }\n"])), Pe, Pe),
            Le = Object(Y.a)(z || (z = J()(["\n  query LiveGameExists(\n    $regionId: String!,\n    $summonerName: String!\n  ) {\n    liveGameExists(regionId: $regionId, summonerName: $summonerName)\n  }\n"]))),
            Ce = Object(Y.a)(W || (W = J()(["\n  query getCrossRegionProfile(\n    $summonerName: String!\n  )\n   {\n    crossRegionProfileSearch(\n      summonerName: $summonerName\n    ) {\n      playerInfo {\n        summonerLevel\n        summonerName\n        regionId\n        iconId\n      }\n\n      soloQueueRank {\n        rank\n        tier\n      }\n    }\n   }\n"]))),
            Re = Object(Y.a)(V || (V = J()(["\n    query GetMultisearch(\n      $regionId: [String]\n      $summonerName: [String]\n    )\n      {\n        getMultisearch(\n          regionId: $regionId,\n          summonerName: $summonerName\n        ) {\n          roleStats {\n            games\n            roleName\n            wins\n          }\n          winsLastFifteen\n          totalGamesLastFifteen\n          winperc\n          winstreak\n          summonerName\n          rankData {\n            lastUpdatedAt\n            losses\n            lp\n            promoProgress\n            queueType\n            rank\n            role\n            seasonId\n            tier\n            wins\n          }\n          worstChamps {\n            champId\n            games\n            wins\n            kills\n            deaths\n            assists\n          }\n          bestChamps {\n            champId\n            games\n            wins\n            kills\n            deaths\n            assists\n          }\n      }\n    }\n"]))),
            xe = Object(Y.a)(H || (H = J()(["\n  query FetchMultipleSummonerTags(\n    $summonerNames: [String!], \n    $regionId: String!, \n    $championIds:[Int!],\n    $queueTypes: [String!]\n  ) {\n    fetchMultipleSummonerTags(\n      summonerNames: $summonerNames, \n      regionId: $regionId, \n      championIds: $championIds,\n      queueTypes: $queueTypes\n    ) {\n      summonerName\n      tagList {\n        tag\n        type\n        category\n        meta\n      }\n    }\n  }\n"])))
    },
    165: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return l
        }));
        var a = n(11),
            r = n.n(a),
            o = n(2),
            i = n(25);

        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(n), !0).forEach((function(t) {
                    r()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function l() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.ssr,
                n = e.skip,
                a = e.apiKey,
                r = e.patch,
                c = "prod",
                l = "".concat(o.b, "/riot_patch_update/").concat(c, "/ugg/ugg-api-versions.json"),
                u = Object(i.b)(l, {
                    ssr: t,
                    skip: n
                });
            if (u.data && a) {
                var m = null;
                return r || (m = Object.keys(u.data).sort((function(e, t) {
                    for (var n = e.split("_"), a = t.split("_"), r = 0; r < Math.min(n.length, a.length); r++) {
                        var o = parseInt(n[r]) || 0,
                            i = parseInt(a[r]) || 0;
                        if (o !== i) return o > i ? -1 : 1
                    }
                    return 0
                }))[0]), s(s({}, u), {}, {
                    data: u.data[r || m][a]
                })
            }
            return u
        }
    },
    167: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return c
        })), n.d(t, "b", (function() {
            return i
        })), n.d(t, "a", (function() {
            return s
        })), n.d(t, "c", (function() {
            return o
        }));
        var a = n(2);

        function r(e) {
            switch (e) {
                case 1:
                    return "na1";
                case 2:
                    return "euw1";
                case 3:
                    return "kr";
                case 4:
                    return "eun1";
                case 5:
                    return "br1";
                case 6:
                    return "la1";
                case 7:
                    return "la2";
                case 8:
                    return "oc1";
                case 9:
                    return "ru";
                case 10:
                    return "tr1";
                case 11:
                    return "jp1";
                case 12:
                    return "world";
                default:
                    return -1
            }
        }

        function o() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = [], n = e ? 12 : 11, a = 1; a <= n; a++) t.push(r(a));
            return t
        }

        function i(e, t) {
            switch (e) {
                case "world":
                    return Object(a.d)("World", t);
                case "na1":
                    return Object(a.d)("NA", t);
                case "euw1":
                    return Object(a.d)("EUW", t);
                case "kr":
                    return Object(a.d)("KR", t);
                case "br1":
                    return Object(a.d)("BR", t);
                case "eun1":
                    return Object(a.d)("EUN", t);
                case "jp1":
                    return Object(a.d)("JP", t);
                case "la1":
                    return Object(a.d)("LAN", t);
                case "la2":
                    return Object(a.d)("LAS", t);
                case "oc1":
                    return Object(a.d)("OCE", t);
                case "ru":
                    return Object(a.d)("RU", t);
                case "tr1":
                    return Object(a.d)("TR", t);
                default:
                    return ""
            }
        }

        function c(e) {
            switch (e) {
                case "world":
                    return "World";
                case "na1":
                    return "NA";
                case "euw1":
                    return "EUW";
                case "kr":
                    return "KR";
                case "br1":
                    return "BR";
                case "eun1":
                    return "EUN";
                case "jp1":
                    return "JP";
                case "la1":
                    return "LAN";
                case "la2":
                    return "LAS";
                case "oc1":
                    return "OCE";
                case "ru":
                    return "RU";
                case "tr1":
                    return "TR";
                default:
                    return ""
            }
        }

        function s(e) {
            switch (e) {
                case "world":
                    return "world";
                case "na1":
                    return "na";
                case "euw1":
                case "eun1":
                    return "eu";
                case "kr":
                    return "KR";
                case "br1":
                    return "BR";
                case "jp1":
                    return "JP";
                case "la1":
                    return "LAN";
                case "la2":
                    return "LAS";
                case "oc1":
                    return "OCE";
                case "ru":
                    return "RU";
                case "tr1":
                    return "TR";
                default:
                    return ""
            }
        }
    },
    170: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        })), n.d(t, "c", (function() {
            return i
        })), n.d(t, "a", (function() {
            return c
        }));
        n(11), n(131);
        var a = n(4),
            r = (n(52), n(92));

        function o(e) {
            return null !== e.match(/.+@(\b(?!-)[a-zA-z0-9-]+(?!-)\b)?\.([a-z]{2,})/g)
        }

        function i(e) {
            return e.length >= 8 && e.match(/[a-zA-Z]+/g) && e.match(/[\d]+/g)
        }

        function c() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = arguments.length > 2 ? arguments[2] : void 0;
            if (a.window) try {
                a.window.grecaptcha.execute(r.recaptchaSiteKeyV3, {
                    action: e
                }).then((function(e) {
                    t && t(e)
                }))
            } catch (e) {
                n && n()
            }
        }
    },
    18: function(e, t, n) {
        "use strict";
        n.d(t, "M", (function() {
            return y
        })), n.d(t, "B", (function() {
            return O
        })), n.d(t, "D", (function() {
            return E
        })), n.d(t, "L", (function() {
            return w
        })), n.d(t, "n", (function() {
            return j
        })), n.d(t, "a", (function() {
            return N
        })), n.d(t, "J", (function() {
            return S
        })), n.d(t, "s", (function() {
            return k
        })), n.d(t, "h", (function() {
            return _
        })), n.d(t, "b", (function() {
            return T
        })), n.d(t, "I", (function() {
            return I
        })), n.d(t, "e", (function() {
            return P
        })), n.d(t, "i", (function() {
            return A
        })), n.d(t, "Q", (function() {
            return L
        })), n.d(t, "P", (function() {
            return C
        })), n.d(t, "K", (function() {
            return R
        })), n.d(t, "g", (function() {
            return x
        })), n.d(t, "H", (function() {
            return M
        })), n.d(t, "O", (function() {
            return D
        })), n.d(t, "r", (function() {
            return G
        })), n.d(t, "z", (function() {
            return B
        })), n.d(t, "A", (function() {
            return q
        })), n.d(t, "f", (function() {
            return U
        })), n.d(t, "o", (function() {
            return F
        })), n.d(t, "q", (function() {
            return $
        })), n.d(t, "p", (function() {
            return z
        })), n.d(t, "w", (function() {
            return W
        })), n.d(t, "E", (function() {
            return V
        })), n.d(t, "j", (function() {
            return H
        })), n.d(t, "l", (function() {
            return K
        })), n.d(t, "x", (function() {
            return J
        })), n.d(t, "N", (function() {
            return Y
        })), n.d(t, "G", (function() {
            return Q
        })), n.d(t, "F", (function() {
            return Z
        })), n.d(t, "C", (function() {
            return X
        })), n.d(t, "t", (function() {
            return ee
        })), n.d(t, "y", (function() {
            return te
        })), n.d(t, "c", (function() {
            return ne
        })), n.d(t, "d", (function() {
            return ae
        })), n.d(t, "v", (function() {
            return re
        })), n.d(t, "k", (function() {
            return oe
        })), n.d(t, "u", (function() {
            return ie
        })), n.d(t, "m", (function() {
            return ce
        }));
        var a, r = n(11),
            o = n.n(r),
            i = n(31),
            c = n.n(i),
            s = n(1),
            l = n.n(s),
            u = n(4),
            m = n(2),
            d = n(574),
            p = n.n(d),
            f = n(61);

        function g(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? g(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function v(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return b(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var a = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, i = !0,
                c = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return i = e.done, e
                },
                e: function(e) {
                    c = !0, o = e
                },
                f: function() {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (c) throw o
                    }
                }
            }
        }

        function b(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
            return a
        }

        function y() {
            var e = u.window && localStorage.getItem("TOGGLE_AND_SAVE_SIDE_NAV_KEY");
            return "true" === e || "false" !== e && (!(!u.window || null != e) && u.window.innerWidth > 1470)
        }

        function O(e) {
            if (!e) return f.b;
            for (var t = 0, n = Object.entries(f.g); t < n.length; t++) {
                var a = l()(n[t], 2),
                    r = a[0],
                    o = a[1];
                if (e >= o[0] && e <= o[1]) return r
            }
            return f.b
        }

        function E(e, t) {
            return 0 !== t.length && t.some((function(t) {
                return e === t
            }))
        }

        function w(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
            return e ? e.replace("+", t) : e
        }

        function j(e) {
            for (var t = e + "=", n = decodeURIComponent(document.cookie).split(";"), a = 0; a < n.length; a++) {
                for (var r = n[a];
                    " " == r.charAt(0);) r = r.substring(1);
                if (0 == r.indexOf(t)) return r.substring(t.length, r.length)
            }
            return ""
        }

        function N(e, t, n) {
            u.window && (document.cookie = n ? "".concat(e, "=").concat(t, "; path=/") : "".concat(e, "=").concat(t, "; expires=Thu, 01-Jan-2100 00:00:01 GMT; path=/"))
        }

        function S(e) {
            u.window && (document.cookie = "".concat(e, "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/"))
        }

        function k(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            if (isNaN(e) || isNaN(t) || 0 === t) return null;
            var a = e / t * 100;
            return n > 0 ? Math.round(a * (10 * n)) / (10 * n) : Math.round(a)
        }

        function _(e, t) {
            var n = Object.keys(e),
                a = Object.keys(t);
            if (n.length !== a.length) return !1;
            for (var r = 0, o = n; r < o.length; r++) {
                var i = o[r];
                if (n[i] !== a[i]) return !1
            }
            return !0
        }

        function T(e) {
            return e.replace(/[^A-Za-z0-9]/g, "")
        }

        function I() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = e;
            "?" === e.charAt(0) && (t = e.substring(1));
            var n, a = decodeURI(t),
                r = a.split("&"),
                o = {},
                i = v(r);
            try {
                for (i.s(); !(n = i.n()).done;) {
                    var c = n.value,
                        s = c.split("=");
                    s[0] && void 0 !== s[1] && (o[s[0]] = s[1])
                }
            } catch (e) {
                i.e(e)
            } finally {
                i.f()
            }
            return o
        }

        function P(e) {
            return e ? Object.keys(e).map((function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
            })).join("&") : ""
        }

        function A(e, t) {
            return (!e || "" === e || 1 === e.length && "?" === e ? "" : e) === (!t || "" === t || 1 === t.length && "?" === t ? "" : t)
        }

        function L(e, t, n) {
            if (u.window && u.window.location) {
                var a = I(t.search.substring(1));
                p()(a, n) || C(e, t.pathname, n)
            }
        }

        function C(e, t, n) {
            e.replace({
                pathname: t,
                search: "?".concat(P(n))
            })
        }

        function R(e, t) {
            var n, a = Object.assign({}, e),
                r = v(t);
            try {
                for (r.s(); !(n = r.n()).done;) {
                    delete a[n.value]
                }
            } catch (e) {
                r.e(e)
            } finally {
                r.f()
            }
            return a
        }

        function x(e) {
            return e ? "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1).toLowerCase()) : ""
        }

        function M(e) {
            return 0 === e ? 0 : e ? e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""
        }

        function D(e) {
            return e > 1e3 ? "".concat((e / 1e3).toFixed(1), "k") : e
        }

        function G(e) {
            switch (e) {
                case 5:
                    return {
                        color: "#FF9B00", label: "Penta Kill", svg: Object(m.s)("lol/icons/pentakill.svg"), svgAlt: Object(m.s)("lol/icons/pentakill-light.svg")
                    };
                case 4:
                    return {
                        color: "#08A6FF", label: "Quadra Kill", svg: Object(m.s)("lol/icons/quadrakill.svg"), svgAlt: Object(m.s)("lol/icons/quadrakill-light.svg")
                    };
                case 3:
                    return {
                        color: "#7AD0D7", label: "Triple Kill", svg: Object(m.s)("lol/icons/triplekill.svg"), svgAlt: Object(m.s)("lol/icons/triplekill-light.svg")
                    };
                case 2:
                    return {
                        color: "#4F4F60", label: "Double Kill", svg: Object(m.s)("lol/icons/doublekill.svg"), svgAlt: Object(m.s)("lol/icons/doublekill-light.svg")
                    };
                default:
                    return null
            }
        }

        function B(e) {
            return e >= 70 ? "volxd-tier" : e >= 60 ? "great-tier" : "gray-okay-tier"
        }

        function q(e) {
            return e >= 70 ? "#FF9B00" : e >= 60 ? "#3273FA" : e >= 40 ? "#FFFFFF" : "#FF4E50"
        }

        function U(e, t, n) {
            return 0 === parseFloat(t) ? parseFloat(e) > 0 || parseFloat(n) > 0 ? "Perfect" : "0.00" : "".concat((Math.round((parseFloat(e) + parseFloat(n)) / parseFloat(t) * 100) / 100).toFixed(2))
        }

        function F(e) {
            return "Perfect" === e ? "#FF9B00" : "0.00" === e ? "#FF4E50" : e >= 5 ? "#FF9B00" : e >= 3 ? "#3273FA" : e >= 1 ? "#FFFFFF" : void 0
        }

        function $(e) {
            return "Perfect" === e ? "volxd-tier" : "0.00" === e ? "shinggo-tier" : e >= 5 ? "volxd-tier" : e >= 3 ? "great-tier" : e >= 1 ? "okay-tier" : "shinggo-tier"
        }

        function z(e) {
            return "Perfect" === e ? "volxd-tier" : "0.00" === e ? "gray-okay-tier" : e >= 5 ? "volxd-tier" : e >= 3 ? "great-tier" : e >= 1 ? "gray-okay-tier" : void 0
        }

        function W(e) {
            switch (e) {
                case 420:
                case "ranked_solo_5x5":
                    return "Ranked Solo";
                case 440:
                case "ranked_flex_sr":
                    return "Ranked Flex";
                case 430:
                case "normal_blind_5x5":
                    return "Normal Blind";
                case 400:
                case "normal_draft_5x5":
                    return "Normal Draft";
                case 450:
                case "normal_aram":
                    return "ARAM";
                case 1200:
                case 1300:
                case "nexus_blitz":
                    return "Nexus Blitz";
                case 700:
                case "clash_5x5":
                    return "Clash";
                case "urf":
                    return "URF";
                case 900:
                    return "ARURF";
                case 1020:
                case "one_for_all":
                    return "One for All";
                case 1400:
                    return "Ultimate Spellbook";
                case "ranked_flex_tt":
                    return "Twisted Treeline";
                case "ranked_tft":
                    return "Teamfight Tactics";
                default:
                    return ""
            }
        }

        function V(e) {
            switch (e) {
                case "top":
                    return 1;
                case "jungle":
                    return 2;
                case "mid":
                    return 3;
                case "adc":
                    return 4;
                case "supp":
                    return 5;
                default:
                    return 6
            }
        }

        function H(e) {
            if (!e) return "";
            switch (e.toUpperCase()) {
                case "I":
                    return 1;
                case "II":
                    return 2;
                case "III":
                    return 3;
                case "IV":
                    return 4;
                case "V":
                    return 5;
                default:
                    return ""
            }
        }

        function K(e) {
            var t = null;
            switch (e) {
                case "top":
                    t = "top";
                    break;
                case "jungle":
                    t = "jungle";
                    break;
                case "mid":
                case "middle":
                    t = "mid";
                    break;
                case "adc":
                    t = "adc";
                    break;
                case "supp":
                case "support":
                    t = "supp";
                    break;
                default:
                    t = "all"
            }
            return t
        }

        function J(e) {
            var t = null;
            switch (e) {
                case "top":
                    t = "top";
                    break;
                case "jungle":
                    t = "jungle";
                    break;
                case "mid":
                case "middle":
                    t = "middle";
                    break;
                case "bot":
                case "adc":
                    t = "adc";
                    break;
                case "supp":
                case "support":
                    t = "support";
                    break;
                default:
                    t = "all"
            }
            return t
        }

        function Y(e) {
            switch (e.toUpperCase()) {
                case "Q":
                    return 0;
                case "W":
                    return 1;
                case "E":
                    return 2;
                case "R":
                    return 3;
                default:
                    return -1
            }
        }

        function Q(e) {
            switch (Number(e)) {
                case 1:
                    return "jungle";
                case 2:
                    return "support";
                case 3:
                    return "adc";
                case 4:
                    return "top";
                case 5:
                    return "middle";
                default:
                    return ""
            }
        }

        function Z(e) {
            var t = e.split(".");
            return t.length >= 2 ? "".concat(t[0], "_").concat(t[1]) : e
        }

        function X(e) {
            return ["ranked_solo_5x5", "normal_blind_5x5", "normal_draft_5x5", "ranked_flex_sr", "clash_5x5"].includes(e)
        }

        function ee(e, t) {
            return Math.round((e + t) / 2)
        }

        function te(e, t, n) {
            return [].concat(c()(t), c()(n)).find((function(t) {
                return t.summonerName === e
            }))
        }

        function ne(e, t) {
            sessionStorage.getItem("lastAmplitudeLogged") !== e && a && (a.logEvent(e, t), sessionStorage.setItem("lastAmplitudeLogged", !0))
        }

        function ae(e, t) {
            a && a.logEvent(e, t)
        }

        function re() {
            return {
                creditCardMap: {
                    "American Express": 22,
                    "Diners Club": 10,
                    Discover: 14,
                    JCB: 16,
                    MasterCard: 2,
                    Visa: 1
                },
                planMap: {
                    "basic_premium-12-month": "12 Months",
                    "basic_premium-6-month": "6 Months",
                    "basic_premium-1-month": "1 Month",
                    basic_premium: "1 Month",
                    "": "0"
                },
                durationPlanMap: {
                    "basic_premium-12-month": "12",
                    "basic_premium-6-month": "6",
                    "basic_premium-1-month": "1",
                    basic_premium: "1"
                },
                premiumVersionMapNum: {
                    12: "basic_premium-12-month",
                    6: "basic_premium-6-month",
                    1: "basic_premium-1-month"
                },
                pricePerMap: {
                    "basic_premium-12-month": "year",
                    "basic_premium-1-month": "month"
                },
                planMapNum: {
                    12: "12 Months",
                    6: "6 Months",
                    1: "1 Month",
                    "": "0"
                },
                termMap: {
                    "basic_premium-12-month": "yearly",
                    "basic_premium-1-month": "monthly"
                }
            }
        }

        function oe(e) {
            var t = e && e.amount,
                n = e && e.currency;
            return "".concat(n).concat(t)
        }

        function ie(e) {
            switch (e) {
                case 1:
                    return "month";
                case 12:
                    return "year";
                default:
                    return ""
            }
        }

        function ce() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"],
                n = Object.fromEntries(Object.entries(e || {}).filter((function(e) {
                    var n = l()(e, 2),
                        a = n[0];
                    n[1];
                    return t.includes(a)
                }))),
                a = "https://download.overwolf.com/install/Download?Name=U.GG&ExtensionId=edoaelkdajnifpnkdfillhjpaimimibflhkhjngh&Channel=web_dl_btn&PartnerId=4204",
                r = new URL(a),
                o = r.origin,
                i = r.pathname,
                c = r.search,
                s = h(h({}, I(c)), n);
            return o + i + "?".concat(P(s))
        }
        u.window && (a = n(417))
    },
    185: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return p
        })), n.d(t, "b", (function() {
            return g
        }));
        var a = n(31),
            r = n.n(a),
            o = n(1),
            i = n.n(o),
            c = n(0),
            s = n(10),
            l = n(2),
            u = n(25),
            m = [{
                title: "Build",
                suffix: "",
                path: "build"
            }, {
                title: "Pro Builds",
                suffix: " Pro Builds",
                path: "pro-build"
            }, {
                title: "Counters",
                suffix: " Counters",
                path: "counters"
            }];

        function d(e, t, n, a, r) {
            var o = e.toLowerCase() !== a && e.toLowerCase() !== t.toLowerCase();
            return "pro-build" === r ? {
                key: e,
                displayName: t,
                url: "https://probuildstats.com/champion/".concat(a),
                champId: n,
                section: r,
                isNickname: o,
                targetHref: !0
            } : {
                key: e,
                displayName: t,
                url: "/lol/champions/".concat(a, "/").concat(r),
                champId: n,
                section: r,
                isNickname: o
            }
        }

        function p() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.language,
                n = e.ssr,
                a = e.skip,
                o = Object(s.useGlobal)("search-bar-pages"),
                p = i()(o, 2),
                f = p[0],
                g = p[1],
                h = Object(l.n)(),
                v = h.useChampionMini,
                b = h.getNormalizedChampionName,
                y = v({
                    language: t,
                    ssr: n,
                    skip: a
                }),
                O = "prod",
                E = "".concat(l.b, "/riot_patch_update/").concat(O, "/champion-nicknames.json"),
                w = Object(u.b)(E, {
                    ssr: n,
                    skip: a
                }),
                j = Object(c.useMemo)((function() {
                    return f || (y.data && w.data ? m.map((function(e) {
                        var t = Object.values(y.data).reduce((function(t, n) {
                            var a = n.name,
                                o = n.key,
                                i = n.id,
                                c = b(o),
                                s = w.data[i] || [],
                                l = new Set([i, a].concat(r()(s || []))),
                                u = r()(l).map((function(t) {
                                    return d("".concat(t).concat(e.suffix), "".concat(a).concat(e.suffix), o, c, e.path)
                                }));
                            return t.concat(u)
                        }), []);
                        return {
                            title: e.title,
                            pages: t
                        }
                    })) : null)
                }), [f, y.data, w.data]);
            return Object(c.useEffect)((function() {
                !f && j && g(j)
            }), [f, j]), y.loading || w.loading ? {
                data: null,
                error: null,
                loading: !y.loading || !w.loading
            } : y.error || w.error ? {
                data: null,
                loading: !1,
                error: !y.error || !w.error
            } : {
                data: j,
                loading: !1,
                error: null
            }
        }

        function f(e, t, n, a) {
            var r = e.toLowerCase() !== t && e.toLowerCase() !== n.toLowerCase();
            return [{
                key: "".concat(e),
                displayName: "".concat(n),
                id: a,
                url: "/lol/champions/".concat(t, "/build"),
                isNickname: r,
                isDefaultPage: !0
            }, {
                key: "".concat(e, " Items"),
                displayName: "".concat(n, " Items"),
                id: a,
                url: "/lol/champions/".concat(t, "/items"),
                isNickname: r
            }, {
                key: "".concat(e, " Spells"),
                displayName: "".concat(n, " Spells"),
                id: a,
                url: "/lol/champions/".concat(t, "/spells-abilities"),
                isNickname: r
            }, {
                key: "".concat(e, " Abilities"),
                displayName: "".concat(n, " Abilities"),
                id: a,
                url: "/lol/champions/".concat(t, "/spells-abilities"),
                isNickname: r
            }, {
                key: "".concat(e, " Runes"),
                displayName: "".concat(n, " Runes"),
                id: a,
                url: "/lol/champions/".concat(t, "/runes"),
                isNickname: r
            }, {
                key: "".concat(e, " Rune Sets"),
                displayName: "".concat(n, " Rune Sets"),
                id: a,
                url: "/lol/champions/".concat(t, "/runes-sets"),
                isNickname: r
            }, {
                key: "".concat(e, " Counters"),
                displayName: "".concat(n, " Counters"),
                id: a,
                url: "/lol/champions/".concat(t, "/counters"),
                isNickname: r
            }, {
                key: "".concat(e, " Matchups"),
                displayName: "".concat(n, " Matchups"),
                id: a,
                url: "/lol/champions/".concat(t, "/matchups"),
                isNickname: r
            }, {
                key: "".concat(e, " Duos"),
                displayName: "".concat(n, " Duos"),
                id: a,
                url: "/lol/champions/".concat(t, "/duos"),
                isNickname: r
            }, {
                key: "".concat(e, " Pro Builds"),
                displayName: "".concat(n, " Pro Builds"),
                id: a,
                url: "https://probuildstats.com/champion/".concat(t),
                isNickname: r,
                targetHref: !0
            }]
        }

        function g() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.language,
                n = e.ssr,
                a = e.skip,
                o = Object(s.useGlobal)("search-pages"),
                m = i()(o, 2),
                d = m[0],
                p = m[1],
                g = Object(l.n)(),
                h = g.useChampionMini,
                v = g.getNormalizedChampionName,
                b = h({
                    language: t,
                    ssr: n,
                    skip: a
                }),
                y = "prod",
                O = "".concat(l.b, "/riot_patch_update/").concat(y, "/champion-nicknames.json"),
                E = Object(u.b)(O, {
                    ssr: n,
                    skip: a
                }),
                w = Object(c.useMemo)((function() {
                    return d || (b.data && E.data ? Object.values(b.data).reduce((function(e, t) {
                        var n = t.name,
                            a = t.key,
                            o = t.id,
                            i = v(a),
                            c = E.data[o] || [],
                            s = new Set([o, n].concat(r()(c || []))),
                            l = r()(s).reduce((function(e, t) {
                                var r = f(t, i, n, a);
                                return e.concat(r)
                            }), []);
                        return e.concat(l)
                    }), []) : null)
                }), [d, b.data, E.data]);
            return Object(c.useEffect)((function() {
                !d && w && p(w)
            }), [d, w]), b.loading || E.loading ? {
                data: null,
                error: null,
                loading: !b.loading || !E.loading
            } : b.error || E.error ? {
                data: null,
                loading: !1,
                error: !b.error || !E.error
            } : {
                data: w,
                loading: !1,
                error: null
            }
        }
    },
    186: function(e, t, n) {
        "use strict";
        var a, r = n(19),
            o = n.n(r),
            i = n(20),
            c = Object(i.a)(a || (a = o()(["\n    query SummonerReviewStatus (\n        $summonerName: String!,\n        $regionId: String!,\n        $season: Int\n    ) {\n        ", "\n    }\n"])), "summonerReviewStatus (regionId: $regionId, summonerName: $summonerName, season: $season) {\n    status\n  }");
        t.a = c
    },
    189: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return r
        })), n.d(t, "a", (function() {
            return o
        }));
        var a = n(9),
            r = {
                "tier-list": {
                    region: a.B.region,
                    queueType: a.B.queueType,
                    patch: a.B.patch,
                    rank: a.B.rank,
                    role: a.B.role,
                    allChampions: a.B.allChampions,
                    default: a.A
                },
                "duo-tier-list": {
                    region: a.k.region,
                    queueType: a.k.queueType,
                    patch: a.k.patch,
                    rank: a.k.rank,
                    duo: a.k.duo,
                    default: a.j
                },
                combat: {
                    region: a.e.region,
                    queueType: a.e.queueType,
                    patch: a.e.patch,
                    rank: a.e.rank,
                    role: a.e.role,
                    allChampions: a.e.allChampions,
                    default: a.d
                },
                objectives: {
                    region: a.q.region,
                    queueType: a.q.queueType,
                    patch: a.q.patch,
                    rank: a.q.rank,
                    role: a.q.role,
                    allChampions: a.q.allChampions,
                    default: a.p
                },
                build: {
                    region: a.s.region,
                    queueType: a.s.queueType,
                    rank: a.s.rank,
                    role: a.s.role,
                    exemptions: ["opp"],
                    patch: a.s.patch,
                    default: a.r
                },
                runes: {
                    region: a.s.region,
                    queueType: a.s.queueType,
                    rank: a.s.rank,
                    role: a.s.role,
                    exemptions: ["opp"],
                    patch: a.s.patch,
                    default: a.r
                },
                overview_aram: {
                    region: a.s.region,
                    patch: a.s.patch,
                    default: a.r
                },
                overview_arurf: {
                    region: a.s.region,
                    patch: a.s.patch,
                    default: a.r
                },
                overview_urf: {
                    region: a.s.region,
                    patch: a.s.patch,
                    default: a.r
                },
                overview_one_for_all: {
                    region: a.s.region,
                    patch: a.s.patch,
                    role: a.s.role,
                    default: a.r
                },
                overview_nexus_blitz: {
                    region: a.s.region,
                    patch: a.s.patch,
                    default: a.r
                },
                "item-paths": {
                    region: a.b.region,
                    queueType: a.b.queueType,
                    patch: a.b.patch,
                    rank: a.b.rank,
                    role: a.b.role,
                    default: a.a
                },
                items: {
                    region: a.m.region,
                    queueType: a.m.queueType,
                    patch: a.m.patch,
                    rank: a.m.rank,
                    role: a.m.role,
                    default: a.l
                },
                "spells-abilities": {
                    region: a.b.region,
                    queueType: a.b.queueType,
                    patch: a.b.patch,
                    rank: a.b.rank,
                    role: a.b.role,
                    default: a.a
                },
                "rune-sets": {
                    region: a.b.region,
                    queueType: a.b.queueType,
                    patch: a.b.patch,
                    rank: a.b.rank,
                    role: a.b.role,
                    default: a.a
                },
                "runes-table": {
                    region: a.y.region,
                    queueType: a.y.queueType,
                    patch: a.y.patch,
                    rank: a.y.rank,
                    role: a.y.role,
                    default: a.x
                },
                matchups: {
                    region: a.o.region,
                    queueType: a.o.queueType,
                    patch: a.o.patch,
                    rank: a.o.rank,
                    role: a.o.role,
                    allChampions: a.o.allChampions,
                    default: a.n
                },
                counters: {
                    region: a.g.region,
                    queueType: a.g.queueType,
                    patch: a.g.patch,
                    rank: a.g.rank,
                    role: a.g.role,
                    default: a.f
                },
                duos: {
                    region: a.i.region,
                    queueType: a.i.queueType,
                    patch: a.i.patch,
                    rank: a.i.rank,
                    role: a.i.role,
                    allChampions: a.i.allChampions,
                    default: a.h
                },
                "pro-build": {
                    role: a.v.role,
                    region: a.v.region,
                    playerType: a.v.playerType,
                    default: a.u,
                    isVictoryOnly: a.D,
                    exemptions: ["patch"]
                },
                worlds: {
                    role: a.F.role,
                    league: a.F.league,
                    league2: a.F.league,
                    default: a.E
                }
            },
            o = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "url", "gclid", "gtm", "google_preview", "gdfp_req", "lineItemId", "creativeId", "googfc", "iframe"]
    },
    190: function(e, t, n) {
        "use strict";
        n(4);
        var a = n(0),
            r = n.n(a);
        t.a = function(e) {
            var t = e.slotId;
            return r.a.createElement("div", {
                id: t
            })
        }
    },
    191: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n.n(a),
            o = n(0),
            i = n.n(o),
            c = n(10),
            s = (n(3), function(e) {
                var t = Object(c.useGlobal)("adblock"),
                    n = r()(t, 1)[0],
                    a = Object(c.useGlobal)("isDetectingAdblock"),
                    o = r()(a, 1)[0],
                    s = e.className,
                    l = e.children,
                    u = e.styles,
                    m = e.minAdWidth,
                    d = e.minAdHeight;
                if (n || o) return null;
                var p = {
                    position: "relative",
                    minWidth: m,
                    width: "auto",
                    minHeight: d,
                    height: "auto"
                };
                return i.a.createElement("div", {
                    className: "ad-box-wrapper ".concat(s),
                    style: u
                }, i.a.createElement("span", {
                    className: "ad-box-label"
                }, "Advertisement"), i.a.createElement("div", {
                    style: p
                }, l))
            });
        t.a = s, s.defaultProps = {
            styles: {},
            minAdWidth: 0,
            minAdHeight: 0
        }
    },
    195: function(e, t, n) {
        "use strict";

        function a(e) {
            return e >= 70 ? "#ff9b00" : e >= 60 ? "#3273fa" : e >= 55 ? "#7ea4f4" : e >= 45 ? "#ffffff" : e >= 40 ? "#fcb1b2" : "#ff4e50"
        }
        n.d(t, "a", (function() {
            return a
        }))
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return r
        })), n.d(t, "r", (function() {
            return E
        })), n.d(t, "k", (function() {
            return k
        })), n.d(t, "o", (function() {
            return _
        })), n.d(t, "f", (function() {
            return T
        })), n.d(t, "l", (function() {
            return w
        })), n.d(t, "c", (function() {
            return j
        })), n.d(t, "q", (function() {
            return N
        })), n.d(t, "p", (function() {
            return S
        })), n.d(t, "m", (function() {
            return I
        })), n.d(t, "d", (function() {
            return L
        })), n.d(t, "h", (function() {
            return C
        })), n.d(t, "g", (function() {
            return x
        })), n.d(t, "s", (function() {
            return M
        })), n.d(t, "j", (function() {
            return D
        })), n.d(t, "a", (function() {
            return ft
        })), n.d(t, "n", (function() {
            return pt
        }));
        var a = "https://static.u.gg/assets",
            r = "https://static.u.gg/assets/lol";

        function o(e, t, n) {
            var a = t || "en_US";
            return "".concat(r, "/riot_static/").concat(e, "/data/").concat(a, "/").concat(n)
        }

        function i(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en_US";
            return o(e, t, "runesReforged.json")
        }

        function c(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en_US";
            return o(e, t, "champion.json")
        }

        function s(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en_US";
            return o(e, t, "championFull.json")
        }

        function l(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "en_US",
                a = "champion/".concat(t, ".json");
            return o(e, n, a)
        }

        function u(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en_US";
            return o(e, t, "item.json")
        }

        function m(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en_US";
            return o(e, t, "summoner.json")
        }

        function d(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = n.webp,
                o = "".concat(r, "/riot_static/").concat(e, "/img/").concat(t);
            return a ? o.replace(/\.(png|jpg|jpeg)$/g, ".webp") : o
        }

        function p(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = n.webp;
            return d(e, "profileicon/".concat(t, ".png"), {
                webp: a
            })
        }

        function f(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = n.webp;
            return d(e, "champion/".concat(t), {
                webp: a
            })
        }

        function g(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = n.webp;
            return "MasterYi_33.jpg" === t ? M(a ? "lol/backup_splash/MasterYi_33.webp" : "lol/backup_splash/MasterYi_33.jpg") : d(e, "splash/".concat(t), {
                webp: a
            })
        }

        function h(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = n.webp;
            return d(e, t.replace("perk-images", "small-perk-images").replace(".dds", ".png"), {
                webp: a
            })
        }

        function v(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = n.webp;
            return d(e, "item/".concat(t), {
                webp: a
            })
        }

        function b(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = n.webp;
            return d(e, "sprite/".concat(t), {
                webp: a
            })
        }

        function y(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = n.webp;
            return d(e, "spell/".concat(t), {
                webp: a
            })
        }

        function O(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = n.webp;
            return d(e, "passive/".concat(t), {
                webp: a
            })
        }

        function E(e) {
            return "".concat(r, "/players/").concat(e, ".png")
        }

        function w(e) {
            return "allranks" === e ? "".concat(r, "/ranks/small/").concat(e, ".svg") : "".concat(r, "/ranks/small/").concat(e, ".png")
        }

        function j(e) {
            return "".concat(r, "/ranks/2d/").concat(e && e.toLowerCase(), ".svg")
        }

        function N(e) {
            return "".concat(r, "/ranks/s9_ranks/small/").concat(e, ".png")
        }

        function S(e, t) {
            if (!e || "string" != typeof e || "unranked" === e) return "".concat(r, "/ranks/s9_ranks/large/unranked.png");
            var n = t;
            return isNaN(t) && (n = function(e) {
                switch (e.toUpperCase()) {
                    case "I":
                        return 1;
                    case "II":
                        return 2;
                    case "III":
                        return 3;
                    case "IV":
                        return 4;
                    case "V":
                        return 5;
                    default:
                        return ""
                }
            }(t)), "".concat(r, "/ranks/s9_ranks/large/").concat(e.toLowerCase(), "-").concat(n, ".png")
        }

        function k(e) {
            return "".concat(r, "/player_types/").concat(e, ".svg")
        }

        function _(e) {
            return "".concat(r, "/roles/").concat(e, ".svg")
        }

        function T(e, t) {
            return "blue" === t || "red" === t ? "".concat(r, "/roles/colored/").concat(e, "-").concat(t, ".svg") : "".concat(r, "/roles/").concat(e, ".svg")
        }

        function I(e) {
            return "".concat(r, "/regions/").concat(e, ".svg")
        }
        var P = {
                BR: "".concat(a, "/ugg/icons/regions/selector/br-selector.svg"),
                EUN: "".concat(a, "/ugg/icons/regions/selector/eun-selector.svg"),
                EUW: "".concat(a, "/ugg/icons/regions/selector/euw-selector.svg"),
                JP: "".concat(a, "/ugg/icons/regions/selector/jp-selector.svg"),
                KR: "".concat(a, "/ugg/icons/regions/selector/kr-selector.svg"),
                LAN: "".concat(a, "/ugg/icons/regions/selector/lan-selector.svg"),
                LAS: "".concat(a, "/ugg/icons/regions/selector/las-selector.svg"),
                NA: "".concat(a, "/ugg/icons/regions/selector/na-selector.svg"),
                OCE: "".concat(a, "/ugg/icons/regions/selector/oce-selector.svg"),
                RU: "".concat(a, "/ugg/icons/regions/selector/ru-selector.svg"),
                TR: "".concat(a, "/ugg/icons/regions/selector/tr-selector.svg"),
                World: "".concat(a, "/ugg/icons/regions/selector/global-selector.svg")
            },
            A = {
                BR: "".concat(a, "/ugg/icons/regions/searchbar/br-searchbar.svg"),
                EUN: "".concat(a, "/ugg/icons/regions/searchbar/eun-searchbar.svg"),
                EUW: "".concat(a, "/ugg/icons/regions/searchbar/euw-searchbar.svg"),
                JP: "".concat(a, "/ugg/icons/regions/searchbar/jp-searchbar.svg"),
                KR: "".concat(a, "/ugg/icons/regions/searchbar/kr-searchbar.svg"),
                LAN: "".concat(a, "/ugg/icons/regions/searchbar/lan-searchbar.svg"),
                LAS: "".concat(a, "/ugg/icons/regions/searchbar/las-searchbar.svg"),
                NA: "".concat(a, "/ugg/icons/regions/searchbar/na-searchbar.svg"),
                OCE: "".concat(a, "/ugg/icons/regions/searchbar/oce-searchbar.svg"),
                RU: "".concat(a, "/ugg/icons/regions/searchbar/ru-searchbar.svg"),
                TR: "".concat(a, "/ugg/icons/regions/searchbar/tr-searchbar.svg"),
                World: "".concat(a, "/ugg/icons/regions/searchbar/World.svg")
            };
        "".concat(a, "/ugg/icons/regions/region-pbs/BR.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/CN.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/EU.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/JP.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/KR.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/LAN.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/LAS.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/LAT.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/NA.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/OCE.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/PCS.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/RU.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/TR.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/World.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/BR.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/EU.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/JP.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/KR.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/LAN.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/LAS.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/NA.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/OCE.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/RU.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/TR.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/CN.svg"), "".concat(a, "/ugg/icons/regions/region-pbs/World.svg");

        function L(e, t) {
            return t ? A[e] : P[e]
        }

        function C(e) {
            return "".concat(r, "/league_series/").concat(e, ".png")
        }
        var R = {
            5008: "StatModsAdaptiveForceIcon.png",
            5002: "StatModsArmorIcon.png",
            5005: "StatModsAttackSpeedIcon.png",
            5007: "StatModsCDRScalingIcon.png",
            5001: "StatModsHealthScalingIcon.png",
            5003: "StatModsMagicResIcon.png"
        };

        function x(e) {
            return "".concat(a, "/").concat(e)
        }

        function M(e) {
            return "".concat(a, "/").concat(e)
        }

        function D() {
            return "".concat(a, "/lol/art/rengar.png")
        }

        function G(e) {
            return "".concat(r, "/runes/").concat(e, ".png")
        }
        var B = n(1),
            q = n.n(B),
            U = n(0),
            F = n.n(U),
            $ = n(25),
            z = n(11),
            W = n.n(z);

        function V(e, t) {
            if (!e) return null;
            var n = e.split(/_|\./g);
            if (n.length < 2) return null;
            var a = "".concat(n[0], ".").concat(n[1]);
            return t.find((function(e) {
                var t = e.split(/_|\./g);
                return "".concat(t[0], ".").concat(t[1]) === a
            }))
        }

        function H(e, t, n) {
            var a = V(e, n),
                r = V(t, n);
            if (!a && !r) return 0;
            if (!a) return 1;
            if (!r) return -1;
            var o = a.split(".")[0],
                i = r.split(".")[0],
                c = a.split(".")[1],
                s = r.split(".")[1];
            return o === i ? c === s ? 0 : c < s ? -1 : 1 : o < i ? -1 : 1
        }

        function K(e) {
            var t = e && e[0];
            return function(n) {
                return V(n, e) || t
            }
        }

        function J(e, t) {
            return function(n, a) {
                var r = e[n];
                if (!V(a, t)) return K(t)(a);
                var o = r && r.patch;
                return H(o, a, t) >= 0 ? a : o
            }
        }

        function Y(e, t) {
            return function(n, a) {
                var r = e[n];
                if (!V(a, t)) return K(t)(a);
                var o = r && r.patch;
                return H(o, a, t) >= 0 ? a : o
            }
        }
        var Q = n(4),
            Z = "https://ddragon.leagueoflegends.com";

        function X(e, t, n, a, r) {
            if (r) return F.a.createElement("div", {
                style: {
                    height: "".concat(a, "px"),
                    width: "".concat(a, "px")
                }
            }, F.a.createElement("img", {
                width: a,
                src: r
            }));
            var o = "-".concat(t, "px -").concat(n, "px"),
                i = a / 48 || 1;
            return F.a.createElement("div", {
                style: {
                    height: "".concat(a, "px"),
                    width: "".concat(a, "px")
                }
            }, F.a.createElement("div", {
                style: {
                    height: "48px",
                    width: "48px",
                    backgroundImage: "url(".concat(e, ")"),
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: o,
                    zoom: i,
                    MozTransform: "scale(".concat(i, ")"),
                    MozTransformOrigin: "0 0"
                }
            }))
        }
        var ee = {};

        function te(e) {
            if (Q.window && Q.window.XMLHttpRequest) {
                if (ee[e]) return ee[e];
                var t = new XMLHttpRequest;
                if (t.open("GET", e, !1), t.send(null), 200 === t.status) {
                    var n = JSON.parse(t.response);
                    return ee[e] = n, n
                }
            } else;
        }

        function ne(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return ae(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ae(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var a = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, i = !0,
                c = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return i = e.done, e
                },
                e: function(e) {
                    c = !0, o = e
                },
                f: function() {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (c) throw o
                    }
                }
            }
        }

        function ae(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
            return a
        }

        function re(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function oe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? re(Object(n), !0).forEach((function(t) {
                    W()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : re(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function ie(e) {
            return function() {
                return e
            }
        }

        function ce(e, t) {
            return function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = n.patch,
                    r = n.language,
                    o = n.skip,
                    i = n.ssr,
                    s = K(t)(a),
                    l = c(s, r),
                    u = function(t, n) {
                        for (var a = n.data, r = {}, o = 0, i = Object.values(a); o < i.length; o++) {
                            var c = i[o];
                            r[c.key] = c
                        }
                        for (var s = 0, l = Object.entries(e); s < l.length; s++) {
                            var u = q()(l[s], 2),
                                m = u[0],
                                d = u[1];
                            r[m] || (r[m] = oe({
                                isBackup: !0
                            }, d))
                        }
                        return r
                    };
                return Object($.b)(l, {
                    skip: o,
                    ssr: i,
                    onCompleted: u
                })
            }
        }

        function se(e, t) {
            return function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = n.patch,
                    r = n.language,
                    o = n.skip,
                    i = n.ssr,
                    c = K(t)(a),
                    l = s(c, r),
                    u = function(t, n) {
                        for (var a = n.data, r = {}, o = 0, i = Object.values(a); o < i.length; o++) {
                            var c = i[o];
                            r[c.key] = c
                        }
                        for (var s = 0, l = Object.entries(e); s < l.length; s++) {
                            var u = q()(l[s], 2),
                                m = u[0],
                                d = u[1];
                            r[m] || (r[m] = oe({
                                isBackup: !0
                            }, d))
                        }
                        return r
                    };
                return Object($.b)(l, {
                    skip: o,
                    ssr: i,
                    onCompleted: u
                })
            }
        }

        function le(e, t, n) {
            return function(a) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = r.patch,
                    i = r.language,
                    c = r.skip,
                    s = r.ssr,
                    u = K(n)(o),
                    m = e[a] && e[a].id,
                    d = l(u, m, i),
                    p = function(e, t) {
                        var n = Object.keys(t.data)[0];
                        return t.data[n]
                    },
                    f = function(e, n) {
                        return t[a] || null
                    };
                return Object($.b)(d, {
                    skip: c,
                    ssr: s,
                    onCompleted: p,
                    onError: f
                })
            }
        }
        var ue = {};

        function me(e, t) {
            return function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = n.patch,
                    r = n.language,
                    o = K(t)(a),
                    i = "".concat(o, "_").concat(r);
                if (!(i in ue)) {
                    var s = c(o, r),
                        l = te(s);
                    if (!l) return null;
                    var u = {};
                    if (l) {
                        for (var m = 0, d = Object.entries(l.data); m < d.length; m++) {
                            var p = q()(d[m], 2),
                                f = (p[0], p[1]);
                            u[f.key] = f
                        }
                        for (var g = 0, h = Object.entries(e); g < h.length; g++) {
                            var v = q()(h[g], 2),
                                b = v[0],
                                y = v[1];
                            u[b] || (u[b] = oe({
                                isBackup: !0
                            }, y))
                        }
                    }
                    ue[i] = u
                }
                return ue[i]
            }
        }
        var de = {};

        function pe(e, t, n) {
            return function(a) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = r.patch,
                    i = r.language;
                if (!e[a]) return t[a];
                var c = K(n)(o),
                    s = "".concat(a, "_").concat(c, "_").concat(i);
                if (!(s in de)) {
                    var u = e[a].id,
                        m = l(c, u, i),
                        d = te(m);
                    if (!d) return null;
                    var p = d.data,
                        f = Object.values(p)[0];
                    de[s] = oe({}, f)
                }
                return de[s]
            }
        }

        function fe(e, t) {
            return function(n) {
                if (!n) return null;
                for (var a = 0, r = [Object.values(e), Object.values(t)]; a < r.length; a++) {
                    var o, i = ne(r[a]);
                    try {
                        for (i.s(); !(o = i.n()).done;) {
                            var c = o.value;
                            if (n.toLowerCase() === c.id.toLowerCase() || n.toLowerCase() === c.name.toLowerCase()) return c.key
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                }
                return null
            }
        }

        function ge(e, t) {
            return function(n) {
                if (!n) return null;
                for (var a = 0, r = [e, t]; a < r.length; a++) {
                    var o = r[a];
                    for (var i in o)
                        if (n.toLowerCase() === e[i].id.toLowerCase() || n.toLowerCase() === e[i].name.toLowerCase()) return o[i]
                }
                return null
            }
        }

        function he(e, t) {
            return function(n) {
                return e[n] ? e[n].name : t[n] ? t[n].name : null
            }
        }

        function ve(e, t) {
            return function(n) {
                var a = "";
                return e[n] ? a = e[n].id : t[n] && (a = t[n].id), "MonkeyKing" === a && (a = "Wukong"), a.toLowerCase()
            }
        }

        function be(e, t) {
            return function(n) {
                var a = "";
                return e[n] ? a = e[n].id : t[n] && (a = t[n].id), a
            }
        }

        function ye(e, t, n) {
            return function(a) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = r.webp;
                if (e[a] && !e[a].isBackup) {
                    var i = e[a].image.full;
                    return f(K(n)(), i, {
                        webp: o
                    })
                }
                return t[a] ? t[a].image : ""
            }
        }

        function Oe(e, t, n) {
            return function(a) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = r.size,
                    i = r.webp,
                    c = e[a];
                if (e[a] && !e[a].isBackup) {
                    var s = c.image.sprite,
                        l = c.image.x,
                        u = c.image.y,
                        m = K(n)(),
                        d = b(m, s, {
                            webp: i
                        });
                    return X(d, l, u, o)
                }
                if (t[a]) {
                    var p = t[a].image;
                    return X(null, null, null, o, p)
                }
                return null
            }
        }

        function Ee(e, t) {
            return function(n) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (!n || !e[n] && !t[n]) return "";
                var r = e[n] && e[n].id || t[n] && t[n].id;
                return "".concat(Z, "/cdn/img/champion/loading/").concat(r, "_").concat(a, ".jpg")
            }
        }

        function we(e, t) {
            return function(n) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = a.splashId,
                    o = void 0 === r ? 0 : r,
                    i = a.webp;
                if (!n || !e[n]) return "";
                var c = e[n].id;
                "Fiddlesticks" === c && (c = "FiddleSticks");
                var s = K(t)();
                return g(s, "".concat(c, "_").concat(o, ".jpg"), {
                    webp: i
                })
            }
        }
        var je = n(31),
            Ne = n.n(je);

        function Se(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function ke(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Se(Object(n), !0).forEach((function(t) {
                    W()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function _e(e, t, n) {
            return function(a, r) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = o.patch,
                    c = o.language,
                    s = o.optionalData,
                    l = K(n)(i),
                    u = pe(e, t, n),
                    m = s || u(a, {
                        patch: i,
                        language: c
                    });
                if (!m) return null;
                var d = m.spells,
                    p = m.skills;
                if (d) {
                    var f = m.spells[r];
                    return ke(ke({}, f), {}, {
                        img: y(l, f.image, {
                            webp: s
                        }),
                        champId: m.id
                    })
                }
                if (p) {
                    var g = m.skills[r];
                    return ke(ke({}, g), {}, {
                        img: y(l, g.image, {
                            webp: s
                        }),
                        champId: m.id
                    })
                }
                return null
            }
        }

        function Te(e) {
            return function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.patch,
                    a = t.language,
                    r = t.webp,
                    o = K(e)(n),
                    i = te(s(o, a)),
                    c = null == i ? [] : Object.keys(i.data).map((function(e) {
                        var t = i.data[e],
                            n = t.skills,
                            a = t.spells,
                            c = t.passive;
                        if (a) {
                            var s = a.map((function(t, n) {
                                var a = t.image.full;
                                return ke(ke({}, t), {}, {
                                    champId: e,
                                    slot: n,
                                    img: y(o, a, {
                                        webp: r
                                    })
                                })
                            }));
                            return [].concat(Ne()(s), [ke(ke({}, c), {}, {
                                champId: e,
                                id: "".concat(e, "Passive"),
                                slot: s.length,
                                img: O(o, c.image.full, {
                                    webp: r
                                })
                            })])
                        }
                        if (n) {
                            var l = n.map((function(t, n) {
                                return ke(ke({}, t), {}, {
                                    champId: e,
                                    slot: n,
                                    img: y(o, image, {
                                        webp: r
                                    })
                                })
                            }));
                            return [].concat(Ne()(l), [ke(ke({}, c), {}, {
                                champId: e,
                                id: "".concat(e, "Passive"),
                                slot: l.length,
                                img: O(o, c.image.full, {
                                    webp: r
                                })
                            })])
                        }
                        return []
                    })).flat();
                return c
            }
        }

        function Ie(e) {
            return function(t) {
                var n = K(e)(t),
                    a = "https://static.u.gg/assets/lol/tooltips/".concat(n, "/champion_tooltips.json");
                return Object($.b)(a)
            }
        }

        function Pe(e, t, n) {
            return function(a) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = r.patch,
                    i = r.language,
                    c = r.optionalData,
                    s = pe(e, t, n),
                    l = c || s(a, {
                        patch: o,
                        language: i
                    });
                return l ? l.passive : null
            }
        }

        function Ae(e, t, n) {
            return function(a) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = r.patch,
                    i = r.optionalData,
                    c = r.webp,
                    s = pe(e, t, n),
                    l = i || s(a, {
                        patch: o
                    });
                if (!l) return "";
                if (l.passive.image.full) {
                    if ("Sett" == l.id) return "https://static.u.gg/assets/lol/riot_static/fix/Sett_P.png";
                    var u = K(n)(o);
                    return O(u, l.passive.image.full, {
                        webp: c
                    })
                }
                return l.passive.image
            }
        }

        function Le(e, t, n) {
            return function(a) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = r.patch,
                    i = r.optionalData,
                    c = r.webp,
                    s = pe(e, t, n),
                    l = i || s(a, {
                        patch: o
                    });
                if (!l) return [];
                var u = l.spells,
                    m = l.skills;
                return u ? u.map((function(e) {
                    return y(K(n)(o), e.image.full, {
                        webp: c
                    })
                })) : m ? m.map((function(e) {
                    return e.image
                })) : []
            }
        }

        function Ce(e, t, n) {
            return function(a) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = r.patch,
                    i = r.language,
                    c = r.optionalData,
                    s = pe(e, t, n),
                    l = c || s(a, {
                        patch: o,
                        language: i
                    });
                if (!l) return [];
                var u = l.spells,
                    m = l.skills;
                return (u || m || []).map((function(e) {
                    return e.name
                }))
            }
        }

        function Re(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function xe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Re(Object(n), !0).forEach((function(t) {
                    W()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Re(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Me(e, t) {
            return function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = n.patch,
                    r = n.language,
                    o = n.skip,
                    i = n.ssr,
                    c = K(e)(a),
                    s = u(c, r),
                    l = function(e, n) {
                        return $e(t)(n.data)
                    };
                return Object($.b)(s, {
                    skip: o,
                    ssr: i,
                    onCompleted: l
                })
            }
        }

        function De(e, t) {
            return function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = n.patch,
                    r = n.skip,
                    o = n.ssr,
                    i = Me(e, t)({
                        patch: a,
                        skip: r,
                        ssr: o
                    }),
                    c = i.data,
                    s = i.loading,
                    l = i.error,
                    u = c && Object.entries(c).reduce((function(e, t) {
                        return ze(t[1]) && e.push(parseInt(t[0])), e
                    }), []);
                return {
                    data: u,
                    loading: s,
                    error: l
                }
            }
        }

        function Ge(e, t) {
            return function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = n.patch,
                    r = n.skip,
                    o = n.ssr,
                    i = Me(e, t)({
                        patch: a,
                        skip: r,
                        ssr: o
                    }),
                    c = i.data,
                    s = i.loading,
                    l = i.error,
                    u = c && Object.entries(c).reduce((function(e, t) {
                        return We(t[1]) && e.push(parseInt(t[0])), e
                    }), []);
                return {
                    data: u,
                    loading: s,
                    error: l
                }
            }
        }
        var Be = {};

        function qe(e, t) {
            return function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = n.patch,
                    r = n.language,
                    o = K(e)(a),
                    i = "".concat(o, "_").concat(r);
                if (!(i in Be)) {
                    var c = u(o, r),
                        s = te(c);
                    if (!s) return null;
                    Be[i] = $e(t)(s.data)
                }
                return Be[i]
            }
        }

        function Ue(e) {
            return function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = n.size,
                    r = n.patch,
                    o = n.optionalData,
                    i = n.webp,
                    c = o || qe(e)({
                        patch: r
                    });
                if (c && c[t]) {
                    var s = c[t],
                        l = s.image.sprite,
                        u = s.image.x,
                        m = s.image.y,
                        d = K(e)(r),
                        p = b(d, l, {
                            webp: i
                        });
                    return X(p, u, m, a)
                }
                return null
            }
        }

        function Fe(e) {
            return function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = n.patch,
                    r = n.optionalData,
                    o = n.webp,
                    i = r || qe(e)({
                        patch: a
                    });
                if (i && i[t]) {
                    var c = i[t],
                        s = c.image.full,
                        l = K(e)(a);
                    return v(l, s, {
                        webp: o
                    })
                }
                return ""
            }
        }

        function $e(e) {
            return function(t) {
                var n = Object.entries(e || {}).filter((function(e) {
                    var n = q()(e, 2),
                        a = n[0];
                    return n[1].name && !t[a]
                })).map((function(e) {
                    var t = q()(e, 2),
                        n = t[0];
                    return [n, xe(xe({}, t[1]), {}, {
                        image: {
                            full: n,
                            s3Img: !0
                        }
                    })]
                }));
                return xe(xe({}, Object.fromEntries(n)), t)
            }
        }

        function ze(e) {
            return !(!e || !e.description) && !(!e.description.includes("<rarityMythic>") && !e.description.includes("Item_Mythic_Passive"))
        }

        function We(e) {
            return !!e && (!!e.specialRecipe || (!e.gold || 0 !== e.gold.base) && (!(!e.into && !e.from) && (!(e.into && e.into.length > 0) && !(e.consumed || e.tags && e.tags.includes("Consumable")))))
        }

        function Ve(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return He(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return He(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var a = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, i = !0,
                c = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return i = e.done, e
                },
                e: function(e) {
                    c = !0, o = e
                },
                f: function() {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (c) throw o
                    }
                }
            }
        }

        function He(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
            return a
        }

        function Ke(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function Je(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ke(Object(n), !0).forEach((function(t) {
                    W()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ke(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Ye(e) {
            return function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.patch,
                    a = t.language,
                    r = t.skip,
                    o = t.ssr,
                    c = t.onCompleted,
                    s = K(e)(n),
                    l = i(s, a);
                return Object($.b)(l, {
                    skip: r,
                    ssr: o,
                    onCompleted: c
                })
            }
        }
        var Qe = {};

        function Ze(e) {
            return function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.patch,
                    a = t.language,
                    r = K(e)(n),
                    o = "".concat(r, "_").concat(a);
                if (!(o in Qe)) {
                    var c = i(r, a),
                        s = te(c);
                    if (!s) return null;
                    Qe[o] = s
                }
                return Qe[o]
            }
        }

        function Xe(e) {
            return function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = n.patch,
                    r = n.language,
                    o = n.optionalData,
                    i = K(e)(a),
                    c = o || Ze(e)({
                        patch: i,
                        language: r
                    });
                if (!c) return null;
                for (var s = 0; s < c.length; s++) {
                    if (c[s].id === Number(t)) return Je(Je({}, c[s]), {}, {
                        type: "tree"
                    });
                    for (var l = c[s].slots, u = 0; u < l.length; u++)
                        for (var m = l[u].runes, d = 0; d < m.length; d++)
                            if (m[d].id === Number(t)) return Je(Je({}, m[d]), {}, {
                                type: 0 === u ? "keystone" : "rune"
                            })
                }
                return null
            }
        }

        function et(e) {
            return function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.patch,
                    a = t.optionalData,
                    r = K(e)(n),
                    o = a || Ze(e)({
                        patch: r
                    });
                if (!o) return null;
                var i = {};
                return o.forEach((function(e) {
                    var t = e.slots.map((function(e) {
                            return e.runes.map((function(e) {
                                return e.id
                            }))
                        })),
                        n = q()(t, 4),
                        a = n[0],
                        r = n[1],
                        o = n[2],
                        c = n[3];
                    i[e.id] = {
                        name: e.name,
                        keystones: a,
                        runes_1: r,
                        runes_2: o,
                        runes_3: c
                    }
                })), i
            }
        }
        var tt = {};

        function nt(e) {
            return function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = n.patch,
                    r = n.optionalData,
                    o = n.webp,
                    i = K(e)(a),
                    c = "".concat(t, "_").concat(i),
                    s = r || Ze(e)({
                        patch: i
                    });
                if (!s) return "";
                if (!r && tt[c]) return tt[c];
                var l, u = Ve(s);
                try {
                    for (u.s(); !(l = u.n()).done;) {
                        var m = l.value;
                        if (m.id === Number(t)) {
                            var d = G(Number(t));
                            return r || (tt[c] = d), d
                        }
                        var p, f = m.slots,
                            g = Ve(f);
                        try {
                            for (g.s(); !(p = g.n()).done;) {
                                var v, b = p.value,
                                    y = Ve(b.runes);
                                try {
                                    for (y.s(); !(v = y.n()).done;) {
                                        var O = v.value;
                                        if (O.id === Number(t)) {
                                            var E = h(i, O.icon, {
                                                webp: o
                                            });
                                            return r || (tt[c] = E), E
                                        }
                                    }
                                } catch (e) {
                                    y.e(e)
                                } finally {
                                    y.f()
                                }
                            }
                        } catch (e) {
                            g.e(e)
                        } finally {
                            g.f()
                        }
                    }
                } catch (e) {
                    u.e(e)
                } finally {
                    u.f()
                }
                return ""
            }
        }

        function at(e) {
            return function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = n.patch,
                    r = n.optionalData,
                    o = K(e)(a),
                    i = r || Ze(e)({
                        patch: o
                    });
                if (!i) return null;
                var c = [];
                i.forEach((function(e) {
                    return c.push.apply(c, Ne()(e.slots[0].runes))
                }));
                var s = c.find((function(e) {
                    return t.includes(parseInt(e.id))
                }));
                return s ? s.id : null
            }
        }

        function rt(e) {
            return function(t, n) {
                if (void 0 === t) {
                    var a, r = Ve(e);
                    try {
                        for (r.s(); !(a = r.n()).done;) {
                            var o, i = Ve(a.value.shards);
                            try {
                                for (i.s(); !(o = i.n()).done;) {
                                    var c = o.value;
                                    if (c.id === Number(n)) return c
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                    return null
                }
                return e[t].shards.find((function(e) {
                    return e.id === Number(n)
                }))
            }
        }

        function ot(e) {
            return function(t) {
                return n = t, a = e[0], "".concat(r, "/riot_static/").concat(a, "/img/perk-images/StatMods/").concat(R[n]);
                var n, a
            }
        }

        function it(e) {
            return function(t, n) {
                return t.filter((function(t) {
                    for (var a = 0; a < e.length; a++)
                        for (var r = e[a].shards, o = 0; o < r.length; o++) {
                            if (r[o].id === t) return n
                        }
                    return !n
                }))
            }
        }

        function ct(e) {
            return function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = n.webp,
                    r = K(e)();
                return p(r, t, {
                    webp: a
                })
            }
        }

        function st(e) {
            return function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.patch,
                    a = t.language,
                    r = t.skip,
                    o = t.ssr,
                    i = K(e)(n),
                    c = m(i, a),
                    s = function(e, t) {
                        for (var n = {}, a = 0, r = Object.values(t.data); a < r.length; a++) {
                            var o = r[a];
                            n[o.key] = o
                        }
                        return n
                    };
                return Object($.b)(c, {
                    skip: r,
                    ssr: o,
                    onCompleted: s
                })
            }
        }
        var lt = {};

        function ut(e) {
            return function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.patch,
                    a = t.language,
                    r = K(e)(n),
                    o = "".concat(r, "_").concat(a);
                if (!(o in lt)) {
                    var i = m(r, a),
                        c = te(i);
                    if (!c) return null;
                    for (var s = {}, l = 0, u = Object.entries(c.data); l < u.length; l++) {
                        var d = q()(u[l], 2),
                            p = (d[0], d[1]);
                        s[p.key] = p
                    }
                    lt[o] = s
                }
                return lt[o]
            }
        }

        function mt(e) {
            return function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = n.patch,
                    r = n.optionalData,
                    o = n.webp,
                    i = r || ut(e)(a);
                if (i && i[t]) {
                    var c = i[t].image.full,
                        s = K(e)(a);
                    return y(s, c, {
                        webp: o
                    })
                }
                return ""
            }
        }
        var dt = F.a.createContext({});

        function pt() {
            return Object(U.useContext)(dt)
        }
        var ft = function(e) {
            var t = e.fallback,
                n = e.staging,
                a = e.ssr,
                r = void 0 !== a && a,
                o = "".concat("https://static.u.gg/assets/lol/riot_patch_update", "/").concat(function(e) {
                    return e ? "staging" : "prod"
                }(n)),
                i = Object($.b)("".concat(o, "/versions.json"), {
                    ssr: r
                }),
                c = Object($.b)("".concat(o, "/backup-champions.json"), {
                    ssr: r
                }),
                s = Object($.b)("".concat(o, "/legacy-items.json"), {
                    ssr: r
                }),
                l = Object($.b)("".concat(o, "/legacy-runes.json"), {
                    ssr: r
                }),
                u = Object($.b)("".concat(o, "/ornn-items.json"), {
                    ssr: r
                }),
                m = Object($.b)("".concat(o, "/stat-shards.json"), {
                    ssr: r
                }),
                d = (i.data && i.data[0], ce(c.data, i.data)({
                    ssr: r,
                    skip: c.loading || c.error || i.loading || i.error
                })),
                p = Object.entries({
                    championMini: d,
                    backupChampions: c,
                    legacyItems: s,
                    legacyRunes: l,
                    ornnItems: u,
                    statShards: m,
                    versions: i
                });
            if (!p.every((function(e) {
                    var t = q()(e, 2),
                        n = (t[0], t[1]);
                    return n.data && !n.loading && !n.error
                }))) return t || null;
            var f = {};
            p.forEach((function(e) {
                var t = q()(e, 2),
                    n = t[0],
                    a = t[1];
                return f[n] = a.data
            }));
            var g = function(e) {
                var t, n = e.championMini,
                    a = e.backupChampions,
                    r = e.legacyItems,
                    o = e.legacyRunes,
                    i = e.ornnItems,
                    c = e.statShards,
                    s = e.versions;
                return {
                    getWorkingPatch: K(s),
                    getLegacyItemPatch: J(r, s),
                    getLegacyRunePatch: Y(o, s),
                    useBackupChampions: ie(a),
                    useChampionMini: ce(a, s),
                    useChampionFull: se(a, s),
                    useChampionIndiv: le(n, a, s),
                    getChampions: me(a, s),
                    getIndividualChampion: pe(n, a, s),
                    getChampionIdByName: fe(n, a),
                    getChampionJSONByName: ge(n, a),
                    getChampionName: he(n, a),
                    getNormalizedChampionName: ve(n, a),
                    getChampionNameId: be(n, a),
                    getChampionImg: ye(n, a, s),
                    getChampionImgFromSprite: Oe(n, a, s),
                    getChampionLoadingImg: Ee(n, a),
                    getChampionSplashImg: we(n, s),
                    getChampionTooltipJSON: Ie(s),
                    getChampionSkillJSON: _e(n, a, s),
                    getChampionPassiveJSON: Pe(n, a, s),
                    getPassiveAbilityImg: Ae(n, a, s),
                    getChampionSkillImgs: Le(n, a, s),
                    getChampionSkillNames: Ce(n, a, s),
                    listChampionSkills: Te(s),
                    useRiotItems: Me(s, i),
                    useRiotMythicItems: De(s, i),
                    useRiotCompletedItems: Ge(s, i),
                    getItems: qe(s, i),
                    getItemImgFromSprite: Ue(s),
                    getItemImg: Fe(s),
                    mergeWithOrnnJson: $e(i),
                    isMythicItem: ze,
                    isCompletedItem: We,
                    useRiotRunes: Ye(s),
                    getRunes: Ze(s),
                    getRuneJSON: Xe(s),
                    getRunesList: et(s),
                    getRuneImg: nt(s),
                    getRuneKeystoneId: at(s),
                    getStatShards: (t = c, function() {
                        return t
                    }),
                    getStatShardJSON: rt(c),
                    getStatShardImg: ot(s),
                    filterRunesAndShards: it(c),
                    useRiotSummoners: st(s),
                    getSummonerSpells: ut(s),
                    getSummonerSpellImg: mt(s),
                    getProfileIconImg: ct(s)
                }
            }(f);
            return F.a.createElement(dt.Provider, {
                value: g
            }, e.children)
        }
    },
    217: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }));
        var a = n(591),
            r = n(4);

        function o() {
            if (r.window && r.window.localStorage) {
                var e = r.window.localStorage.getItem("anonId");
                return null === e && (e = "ugg-".concat(Object(a.v4)()), r.window.localStorage.setItem("anonId", e)), e
            }
            return ""
        }
    },
    221: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return u
        })), n.d(t, "o", (function() {
            return m
        })), n.d(t, "q", (function() {
            return d
        })), n.d(t, "p", (function() {
            return p
        })), n.d(t, "e", (function() {
            return f
        })), n.d(t, "f", (function() {
            return g
        })), n.d(t, "x", (function() {
            return h
        })), n.d(t, "v", (function() {
            return v
        })), n.d(t, "j", (function() {
            return b
        })), n.d(t, "w", (function() {
            return y
        })), n.d(t, "n", (function() {
            return O
        })), n.d(t, "r", (function() {
            return E
        })), n.d(t, "i", (function() {
            return w
        })), n.d(t, "k", (function() {
            return j
        })), n.d(t, "l", (function() {
            return N
        })), n.d(t, "h", (function() {
            return S
        })), n.d(t, "m", (function() {
            return k
        })), n.d(t, "c", (function() {
            return _
        })), n.d(t, "u", (function() {
            return T
        })), n.d(t, "t", (function() {
            return P
        })), n.d(t, "d", (function() {
            return A
        })), n.d(t, "g", (function() {
            return L
        })), n.d(t, "s", (function() {
            return C
        })), n.d(t, "b", (function() {
            return R
        })), n.d(t, "z", (function() {
            return x
        })), n.d(t, "y", (function() {
            return M
        })), n.d(t, "B", (function() {
            return D
        })), n.d(t, "A", (function() {
            return G
        }));
        var a = n(11),
            r = n.n(a),
            o = n(1),
            i = n.n(o),
            c = n(17);

        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function(t) {
                    r()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var u = {
            ARURF: {
                active: !1,
                newTag: !0,
                urlName: "arurf",
                queueType: "arurf",
                buildPageName: "overview_arurf",
                queueTypeName: "ARURF",
                seo: {
                    h1Suffix: "ARURF Build & Runes",
                    blurbType: "ARURF",
                    build: "champion_overview_arurf"
                },
                uggApi: {
                    hasRank: !1,
                    hasRole: !1
                },
                tierListSettings: {
                    title: {
                        main: "ARURF Tier List"
                    },
                    showAgainst: !1,
                    showBan: !1,
                    showRole: !1,
                    showTier: !0,
                    filterProps: {
                        disable: ["role", "rank", "queueType"]
                    }
                }
            },
            URF: {
                active: !0,
                newTag: !0,
                urlName: "urf",
                queueType: "urf",
                buildPageName: "overview_urf",
                queueTypeName: "URF",
                seo: {
                    h1Suffix: "URF Build & Runes",
                    blurbType: "URF",
                    build: "champion_overview_urf"
                },
                uggApi: {
                    hasRank: !1,
                    hasRole: !1
                },
                tierListSettings: {
                    title: {
                        main: "URF Tier List"
                    },
                    showAgainst: !1,
                    showBan: !1,
                    showRole: !1,
                    showTier: !0,
                    filterProps: {
                        disable: ["role", "rank", "queueType"]
                    }
                }
            },
            NEXUS_BLITZ: {
                active: !1,
                newTag: !0,
                urlName: "nexus-blitz",
                queueType: "nexus_blitz",
                buildPageName: "overview_nexus_blitz",
                queueTypeName: "Nexus Blitz",
                seo: {
                    h1Suffix: "Nexus Blitz Build & Runes",
                    blurbType: "Nexus Blitz",
                    build: "champion_overview_nexus_blitz"
                },
                uggApi: {
                    hasRank: !1,
                    hasRole: !1
                },
                tierListSettings: {
                    title: {
                        main: "Nexus Blitz Tier List"
                    },
                    showAgainst: !1,
                    showBan: !1,
                    showRole: !1,
                    showTier: !1,
                    filterProps: {
                        disable: ["rank", "role", "queueType"]
                    }
                }
            },
            ONE_FOR_ALL: {
                active: !1,
                newTag: !0,
                urlName: "one-for-all",
                queueType: "one_for_all",
                buildPageName: "overview_one_for_all",
                queueTypeName: "One for All",
                seo: {
                    h1Suffix: "One for All Build & Runes for",
                    blurbType: "One for All",
                    build: "champion_overview_one_for_all"
                },
                uggApi: {
                    hasRank: !1,
                    hasRole: !0
                },
                tierListSettings: {
                    title: {
                        main: "One for All Tier List"
                    },
                    showAgainst: !0,
                    showBan: !0,
                    showRole: !1,
                    showTier: !0,
                    filterProps: {
                        disable: ["rank", "role", "queueType"]
                    }
                }
            },
            ARAM: {
                active: !0,
                newTag: !1,
                urlName: "aram",
                queueType: "normal_aram",
                buildPageName: "overview_aram",
                queueTypeName: "ARAM",
                seo: {
                    h1Suffix: "ARAM Build & Runes",
                    blurbType: "ARAM",
                    build: "champion_overview_aram"
                },
                uggApi: {
                    hasRank: !1,
                    hasRole: !1
                },
                tierListSettings: {
                    title: {
                        main: "ARAM Tier List"
                    },
                    showAgainst: !1,
                    showBan: !1,
                    showRole: !1,
                    showTier: !0,
                    filterProps: {
                        disable: ["rank", "role"]
                    }
                }
            }
        };

        function m(e) {
            for (var t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2),
                    r = (a[0], a[1]);
                if (e === r.queueType) return r.tierListSettings
            }
        }

        function d(e) {
            for (var t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2),
                    r = (a[0], a[1]);
                if (e === r.queueType) return r.uggApi
            }
        }

        function p() {
            for (var e = {}, t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2),
                    r = (a[0], a[1]);
                e["".concat(r.urlName, "-tier-list")] = r.tierListSettings.title
            }
            return e
        }

        function f(e) {
            for (var t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2),
                    r = (a[0], a[1]);
                if (e === "".concat(r.urlName, "-tier-list")) return "tier-list"
            }
            return null
        }

        function g(e) {
            for (var t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2),
                    r = (a[0], a[1]);
                if (e === r.buildPageName) return r.seo.blurbType
            }
            return null
        }

        function h() {
            for (var e = [], t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2),
                    r = (a[0], a[1]);
                e.push(r.urlName)
            }
            return e
        }

        function v(e) {
            for (var t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2);
                a[0];
                if (e === a[1].buildPageName) return !0
            }
            return null
        }

        function b(e) {
            for (var t = [], n = 0, a = Object.entries(u); n < a.length; n++) {
                var r = i()(a[n], 2),
                    o = (r[0], r[1]);
                o.active && t.push({
                    path: "/lol/champions/".concat(o.urlName, "/").concat(e, "-").concat(o.urlName),
                    label: o.queueTypeName,
                    new: o.newTag,
                    activePaths: ["/lol/champions/".concat(o.urlName, "/").concat(e, "-").concat(o.urlName)]
                })
            }
            return t
        }

        function y() {
            for (var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t = [], n = 0, a = Object.entries(u); n < a.length; n++) {
                var r = i()(a[n], 2),
                    o = (r[0], r[1]);
                e ? t.push("/lol/".concat(o.urlName, "-tier-list")) : t.push("".concat(o.urlName, "-tier-list"))
            }
            return t
        }

        function O() {
            for (var e = [], t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2),
                    r = (a[0], a[1]);
                r.active && e.push({
                    path: "/lol/".concat(r.urlName, "-tier-list"),
                    label: "".concat(r.queueTypeName, " Tier List"),
                    new: r.newTag,
                    activePaths: ["/lol/".concat(r.urlName, "-tier-list")]
                })
            }
            return e
        }

        function E(e) {
            for (var t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2),
                    r = (a[0], a[1]);
                if (e === r.buildPageName) return r.seo.h1Suffix
            }
            return null
        }

        function w(e) {
            for (var t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2),
                    r = (a[0], a[1]);
                if (e.includes("champions/".concat(r.urlName))) return r.buildPageName
            }
            return !1
        }

        function j(e) {
            for (var t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2),
                    r = (a[0], a[1]);
                if (e.includes("champions/".concat(r.urlName))) return r.seo.build
            }
            return !1
        }

        function N(e) {
            for (var t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2),
                    r = (a[0], a[1]);
                if (e === r.buildPageName) return r.seo.build
            }
        }

        function S(e) {
            for (var t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2),
                    r = (a[0], a[1]);
                if (e === r.buildPageName) return {
                    collapsable: !1,
                    overrideDefaultFilters: {
                        queueType: r.queueType
                    }
                }
            }
        }

        function k(e) {
            for (var t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2),
                    r = (a[0], a[1]);
                if (e === "".concat(r.urlName, "-tier-list")) return {
                    overrideDefaultFilters: {
                        queueType: r.queueType
                    },
                    page: "tier-list",
                    enable: [],
                    disable: r.tierListSettings.filterProps.disable,
                    allRoles: !1,
                    collapsable: !1
                }
            }
        }

        function _(e, t) {
            for (var n = 0, a = Object.entries(u); n < a.length; n++) {
                var r = i()(a[n], 2),
                    o = (r[0], r[1]);
                if (e.includes("/".concat(o.urlName))) return l(l({}, t), {}, {
                    queueType: o.queueType
                })
            }
        }

        function T(e, t) {
            for (var n = 0, a = Object.entries(u); n < a.length; n++) {
                var r = i()(a[n], 2),
                    o = (r[0], r[1]);
                if (e === o.buildPageName || t.pathname.includes("".concat(o.urlName, "-tier-list"))) return o.queueType
            }
        }

        function I(e) {
            if (!e || !e.pathname) return null;
            for (var t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2),
                    r = (a[0], a[1]);
                if (e.pathname.includes("".concat(r.urlName, "-tier-list"))) return r
            }
            return null
        }

        function P() {
            var e = I(Object(c.h)());
            if (e) return e.queueType
        }

        function A(e) {
            var t = I(e);
            if (t) return t.queueTypeName
        }

        function L(e, t) {
            var n = I(e);
            if (n) return "/lol/champions/".concat(n.urlName, "/").concat(t, "-").concat(n.urlName)
        }

        function C(e, t) {
            for (var n = 0, a = Object.entries(u); n < a.length; n++) {
                var r = i()(a[n], 2),
                    o = (r[0], r[1]);
                if (e && t && e.pathname !== t.pathname && t.pathname.includes("".concat(o.urlName, "-tier-list")) && !e.pathname.includes("tier-list")) return {
                    queueType: o.queueType
                }
            }
            return null
        }

        function R(e) {
            if (!e || !e.pathname) return null;
            for (var t = e.pathname, n = 0, a = Object.entries(u); n < a.length; n++) {
                var r = i()(a[n], 2),
                    o = (r[0], r[1]);
                if (t.includes("/".concat(o.urlName)) || t.includes("".concat(o.urlName, "-tier-list"))) return {
                    queueType: o.queueType
                }
            }
        }

        function x(e) {
            for (var t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2);
                a[0];
                if (e === a[1].queueType) return !0
            }
            return !1
        }

        function M(e) {
            for (var t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2);
                a[0];
                if (e === a[1].buildPageName) return !0
            }
            return !1
        }

        function D(e) {
            if (!e) return !0;
            for (var t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2),
                    r = (a[0], a[1]);
                if (e.pathname.includes("champions/".concat(r.urlName))) return r.tierListSettings.showAgainst
            }
            return !0
        }

        function G(e) {
            if (!e) return !0;
            for (var t = 0, n = Object.entries(u); t < n.length; t++) {
                var a = i()(n[t], 2),
                    r = (a[0], a[1]);
                if (e.pathname.includes("champions/".concat(r.urlName))) return !1
            }
            return !0
        }
    },
    222: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return s
        })), n.d(t, "a", (function() {
            return l
        })), n.d(t, "b", (function() {
            return u
        }));
        var a = n(0),
            r = n.n(a),
            o = n(168),
            i = n(147),
            c = n(2),
            s = function() {
                var e = Object(i.a)().data[0].replace("_", "."),
                    t = "S".concat(e.split(".")[0]),
                    n = "".concat(t, " Patch ").concat(e);
                return {
                    index: {
                        title: "U GG: The Best League of Legends Builds LoL Build Champion Probuilds LoL Runes Tier List Counters Guides",
                        description: "Best Builds from the Best Data. Riot-partnered U.GG provides the best League of Legends builds, LoL runes, Probuilds, Tier List, Counters, and more.",
                        keywords: "League of legends builds, gg, lol build, league builds, lol runes",
                        url: "https://u.gg"
                    },
                    open_search: {
                        title: "U.GG Open Search",
                        description: "Search U.GG for League of Legends Statistics. Find Meta Champion Tier Lists, Item and Rune combinations, Pro Builds, Champion " + "Guides, and Champion Counters by Role. Patch ".concat(e, "."),
                        url: "https://u.gg/opensearch"
                    },
                    about: {
                        title: "U.GG About",
                        description: "About U.GG. Learn more about how we provide you with the best source for League of Legends Statistics. Find Meta Champion Tier Lists, Item and Rune combinations, Pro Builds, Champion Guides, " + "and Champion Counters by Role. Patch ".concat(e, "."),
                        url: "https://u.gg/about"
                    },
                    terms_of_service: {
                        title: "U.GG Terms of Service & Cookies Policy",
                        description: "Terms of Service. U.GG is, at its heart, a platform to help gamers. Although it is certainly possible to use our platform without creating an account, we do believe that any visitor to our site must abide by " + "the following Terms of Service. Patch ".concat(e, "."),
                        url: "https://u.gg/terms-of-service"
                    },
                    privacy_policy: {
                        title: "Privacy Policy",
                        description: "Privacy Policy. U.GG is, at its heart, a platform to help gamers. All Users and their data are protected by our Privacy Policy outlined here.",
                        url: "https://u.gg/privacy-policy"
                    },
                    privacy_shield: {
                        title: "Privacy Shield",
                        description: "U.GG abides by the principles outlined in the EU-U.S. Privacy Shield framework and the Swiss Privacy Shield with regards to data collection and transmission.",
                        url: "https://u.gg/privacy-shield"
                    },
                    careers: {
                        title: "Careers",
                        description: "U.GG Careers ",
                        url: "https://u.gg/careers"
                    },
                    faq: {
                        title: "U.GG Frequently Asked Questions",
                        description: "Frequently Asked Questions. Why U.GG? What is Unique about U.GG? How does U.GG monetize? How do I navigate U.GG? How does the Search Bar work? What is the U.GG Recommended Build? What filtering options does U.GG offer? Why are your tier lists sorted " + "by win rate, despite being called a tier list? Patch ".concat(e, "."),
                        url: "https://u.gg/faq"
                    },
                    "tier-list": {
                        title: "U.GG LoL Tier List - Patch {patch} Best Champions for All Roles in League of Legends",
                        description: "The only LoL Tier list you need for the newest patch. Always up-to-date, U.GG takes a data science approach to the best champions for Patch {patch} on every role.",
                        keywords: "Lol tier list, league of legends tier list",
                        url: "https://u.gg/lol/tier-list"
                    },
                    "adc-tier-list": {
                        title: "U.GG ADC Tier List - Patch {patch} Best ADC Champions in League of Legends",
                        description: "The only ADC Tier list you need for the newest patch. Always up-to-date, U.GG takes a data science approach to the best ADC champions for Patch {patch}.",
                        keywords: "adc tier list, adc lol",
                        url: "https://u.gg/lol/adc-tier-list"
                    },
                    "support-tier-list": {
                        title: "U.GG Support Tier List - Patch {patch} Best Supp Champions in League of Legends",
                        description: "The only Support Tier list you need for the newest patch. Always up-to-date, U.GG takes a data science approach to the best supp champions for Patch {patch}.",
                        keywords: "support tier list, lol support tier list",
                        url: "https://u.gg/lol/support-tier-list"
                    },
                    "top-lane-tier-list": {
                        title: "U.GG Top Lane Tier List - Patch {patch} Best Top Champions in League of Legends",
                        description: "The only Top Lane Tier list you need for the newest patch. Always up-to-date, U.GG takes a data science approach to the best top champions for Patch {patch}.",
                        keywords: "top lane tier list, top tier list",
                        url: "https://u.gg/lol/top-lane-tier-list"
                    },
                    "mid-lane-tier-list": {
                        title: "U.GG Mid Lane Tier List - Patch {patch} Best Mid Champions in League of Legends",
                        description: "The only Mid Lane Tier list you need for the newest patch. Always up-to-date, U.GG takes a data science approach to the best mid champions for Patch {patch}.",
                        keywords: "mid lane tier list, mid tier list",
                        url: "https://u.gg/lol/mid-lane-tier-list"
                    },
                    "jungle-tier-list": {
                        title: "U.GG Jungle Tier List - Patch {patch} Best Jungle Champions in League of Legends",
                        description: "The only Jungle Tier list you need for the newest patch. Always up-to-date, U.GG takes a data science approach to the best jungle champions for Patch {patch}.",
                        keywords: "jungle tier list, Lol jungle tier list",
                        url: "https://u.gg/lol/jungle-tier-list"
                    },
                    "arurf-tier-list": {
                        title: "ARURF TIER LIST - LEAGUE OF LEGENDS PATCH {patch}",
                        description: "LoL ARURF Tier List with Riot-partnered stats of U.GG. Best ARURF champions based on millions of League of Legends matches. Sort by win rate, tier, role, rank, and region. Patch {patch}",
                        keywords: "ARURF tier list, Lol ARURF tier list",
                        url: "https://u.gg/lol/arurf-tier-list"
                    },
                    "urf-tier-list": {
                        title: "URF TIER LIST - LEAGUE OF LEGENDS PATCH {patch}",
                        description: "LoL URF Tier List with Riot-partnered stats of U.GG. Best URF champions based on millions of League of Legends matches. Sort by win rate, tier, role, rank, and region. Patch {patch}",
                        keywords: "URF tier list, Lol URF tier list",
                        url: "https://u.gg/lol/urf-tier-list"
                    },
                    "aram-tier-list": {
                        title: "U.GG ARAM Tier List - Patch {patch} Best ARAM Champions in League of Legends",
                        description: "The only ARAM Tier list you need for the newest patch. Always up-to-date, U.GG takes a data science approach to the best ARAM champions for Patch {patch}.",
                        keywords: "ARAM tier list, Lol ARAM tier list",
                        url: "https://u.gg/lol/aram-tier-list"
                    },
                    "one-for-all-tier-list": {
                        title: "ONE FOR ALL TIER LIST - LEAGUE OF LEGENDS PATCH {patch}",
                        description: "LoL One for All Tier List with Riot-partnered stats of U.GG. Best One for All champions based on millions of League of Legends matches. Sort by win rate, tier, role, rank, and region. Patch {patch}",
                        keywords: "One for All tier list, Lol One for All tier list",
                        url: "https://u.gg/lol/one-for-all-tier-list"
                    },
                    "nexus-blitz-tier-list": {
                        title: "NEXUS BLITZ TIER LIST - LEAGUE OF LEGENDS PATCH {patch}",
                        description: "LoL Nexus Blitz Tier List with Riot-partnered stats of U.GG. Best Nexus Blitz champions based on millions of League of Legends matches. Sort by win rate, tier, role, rank, and region. Patch {patch}",
                        keywords: "Nexus Blitz tier list, Lol Nexus Blitz tier list",
                        url: "https://u.gg/lol/nexus-blitz-tier-list"
                    },
                    "duo-tier-list": {
                        title: "U.GG Duo Tier List - Patch {patch} Best Champion Duos in League of Legends",
                        description: "The only Duo Tier list you need for the newest patch. Always up-to-date, U.GG takes a data science approach to the best champion duos in bot and mid jungle for Patch {patch}.",
                        url: "https://u.gg/lol/duo-tier-list"
                    },
                    combat: {
                        title: "U.GG Combat Tier List - Patch {patch} Best Combat Champions in League of Legends",
                        description: "The only Combat Tier list you need for the newest patch. Always up-to-date, U.GG takes a data science approach to the best champions by combat metrics for Patch {patch}.",
                        url: "https://u.gg/lol/combat"
                    },
                    objectives: {
                        title: "U.GG Objectives Tier List - Patch {patch} Best Objectives Champions in League of Legends",
                        description: "The only Objectives Tier list you need for the newest patch. Always up-to-date, U.GG takes a data science approach to the best champions by objective control for Patch {patch}.",
                        url: "https://u.gg/lol/objectives"
                    },
                    champions: {
                        title: "".concat(t, " - LoL Champion Builds, Runes, Pro Builds, Counters Guides"),
                        description: "Find the best lol league of legends champs champions statistics, win rates, builds, runes, pro builds probuilds, counters, matchups, items,spells and abilities, and duos guides as roles top, jungle, mid, bot, support on ranked solo/duo/flex, aram, and normal blind/draft. " + "".concat(n),
                        url: "https://u.gg/lol/champions"
                    },
                    probuilds: {
                        title: "Probuilds - U.GG LoL Pro Builds by Region, Role Probuild",
                        description: "Best Probuilds From the Best Data. Riot-partnered U.GG analyzes pro builds across all regions and leagues. Search champion or sort by role, region. Patch {patch}",
                        keywords: "Probuilds, probuild, lol pro builds",
                        url: "https://u.gg/lol/probuilds"
                    },
                    champion_overview: {
                        title: "{champion} Build with Highest Winrate - LoL Runes, Items, and Skill Order",
                        description: "{champion} build with the highest winrate runes and items in every role. U.GG analyzes millions of LoL matches to give you the best LoL champion build. Patch {patch}",
                        keywords: "{champion} build, {champion} runes",
                        url: "https://u.gg/lol/champions/LOWER_CHAMPION_ID/build"
                    },
                    champion_overview_region: {
                        tr_tr: {
                            title: "{champion} Build - U.GG LoL {champion} RÃ¼n",
                            description: "U.GG {champion} build, en iyi {champion} rÃ¼nler kazanma oranÄ± ve seÃ§ilme oranÄ±'na gÃ¶re gÃ¶sterir. Yetenek sÄ±rasÄ±, Ã§ekirdek eÅŸyalarÄ± ve oyun sonu eÅŸyalarÄ±yla, bu {champion} build, League S10 {patch} iÃ§in eksiksiz bir LoL {champion} {role} rÃ¼n verir.",
                            keywords: "{champion} build, {champion} RÃ¼n",
                            url: "https://u.gg/lol/champions/LOWER_CHAMPION_ID/build"
                        }
                    },
                    champion_overview_aram: {
                        title: "{champion} ARAM Build - U.GG {champion} Runes + Item Guide for ARAM",
                        description: "{champion} ARAM Build - Find the best {champion} Runes and Items for ARAM. U.GG analyzes millions of ARAM matches to give you the best {champion} ARAM guide. Patch {patch}",
                        keywords: "{champion} ARAM build, {champion} runes",
                        url: "https://u.gg/lol/champions/aram/CHAMP_ID-aram"
                    },
                    champion_overview_arurf: {
                        title: "{champion} ARURF Build - U.GG {champion} Runes + Item Guide for ARURF",
                        description: "{champion} ARURF Build - Find the best {champion} Runes and Items for ARURF. U.GG analyzes millions of ARURF matches to give you the best {champion} ARURF guide. Patch {patch}",
                        keywords: "{champion} ARURF build, {champion} runes",
                        url: "https://u.gg/lol/champions/arurf/CHAMP_ID-arurf"
                    },
                    champion_overview_urf: {
                        title: "{champion} URF Build - U.GG {champion} Runes + Item Guide for URF",
                        description: "{champion} URF Build - Find the best {champion} Runes and Items for URF. U.GG analyzes millions of URF matches to give you the best {champion} URF guide. Patch {patch}",
                        keywords: "{champion} URF build, {champion} runes",
                        url: "https://u.gg/lol/champions/urf/CHAMP_ID-urf"
                    },
                    champion_overview_one_for_all: {
                        title: "{champion} One for All Build - U.GG {champion} Runes + Item Guide for One for All",
                        description: "{champion} One for All Build - Find the best {champion} Runes and Items for One for All. U.GG analyzes millions of One for All matches to give you the best {champion} One for All guide. Patch {patch}",
                        keywords: "{champion} One for All build, {champion} runes",
                        url: "https://u.gg/lol/champions/one-for-all/CHAMP_ID-one-for-all"
                    },
                    champion_runes: {
                        title: "{champion} Rune with Highest Winrate for Every Matchup",
                        description: "{champion} runes with the highest winrate for each unique matchup. U.GG analyzes millions of LoL matches to give you the best LoL champion rune build. Patch {patch}",
                        keywords: "{champion} build, {champion} runes",
                        url: "https://u.gg/lol/champions/LOWER_CHAMPION_ID/runes"
                    },
                    champion_items: {
                        title: "".concat(t, " - Best {champion} Items Builds Guides :: U.GG"),
                        description: "Find the best League of Legends {champion} items guide. Top, jungle, mid, bot, support roles on ranked solo/duo/flex, aram, and normal blind/draft." + " ".concat(n, "."),
                        url: "https://u.gg/lol/champions/LOWER_CHAMPION_ID/items"
                    },
                    champion_item_paths: {
                        title: "".concat(t, " - Best {champion} Items Paths Builds Guides :: U.GG"),
                        description: "Find the best League of Legends champion {champion} items paths guide. Top, jungle, mid, bot, support roles on ranked solo/duo/flex, aram, and normal blind/draft." + " ".concat(n, "."),
                        url: "https://u.gg/lol/champions/LOWER_CHAMPION_ID/item-paths"
                    },
                    champion_spells: {
                        title: "".concat(t, " - Best {champion} Spells & Abilities Builds Guides :: U.GG"),
                        description: "Find the best League of Legends champion {champion} spells and abilities guide. Top, jungle, mid, bot, support roles on ranked solo/duo/flex, aram, and normal blind/draft." + " ".concat(n, "."),
                        url: "https://u.gg/lol/champions/LOWER_CHAMPION_ID/spells-abilities"
                    },
                    champion_runes_table: {
                        title: "".concat(t, " - Best {champion} Runes Builds Guides :: U.GG"),
                        description: "Find the best League of Legends champion {champion} runes guide. Top, jungle, mid, bot, support roles on ranked solo/duo/flex, aram, and normal blind/draft." + " ".concat(n, "."),
                        url: "https://u.gg/lol/champions/LOWER_CHAMPION_ID/runes"
                    },
                    champion_rune_sets: {
                        title: "".concat(t, " - Best {champion} Rune Sets Builds Guides :: U.GG"),
                        description: "Find the best League of Legends champion {champion} rune sets guide. Top, jungle, mid, bot, support roles on ranked solo/duo/flex, aram, and normal blind/draft." + " ".concat(n, "."),
                        url: "https://u.gg/lol/champions/LOWER_CHAMPION_ID/rune-sets"
                    },
                    champion_counters: {
                        title: "{champion} Counter - Best Counters from Best Data LoL Patch {patch} - U.GG",
                        description: "{champion} Counter. Best Counter Picks from the Best Data. Riot-partnered U.GG analyzes millions of LoL matches. Sort by role, rank, region. Patch {patch}",
                        keywords: "{champion} counter",
                        url: "https://u.gg/lol/champions/LOWER_CHAMPION_ID/counter"
                    },
                    champion_matchups: {
                        title: "".concat(t, " - Best {champion} Matchups Builds Guides :: U.GG"),
                        description: "Find the best League of Legends {champion} matchups guide. Top, jungle, mid, bot, support roles on ranked solo/duo/flex, aram, ranked flex, and normal blind/draft." + " ".concat(n, "."),
                        url: "https://u.gg/lol/champions/LOWER_CHAMPION_ID/matchups"
                    },
                    champion_duos: {
                        title: "".concat(t, " - Best {champion} Duos Builds Guides :: U.GG"),
                        description: "Find the best League of Legends {champion} duos guide. Top, jungle, mid, bot, support roles on ranked solo/duo/flex, aram, normal blind/draft." + " ".concat(n, "."),
                        url: "https://u.gg/lol/champions/LOWER_CHAMPION_ID/duos"
                    },
                    champion_pro_builds: {
                        title: "{champion} Pro Builds - Probuilds for Runes, Items, Matches from All Regions - U.GG",
                        description: "{champion} Pro Builds - Best Probuilds Matches and Summary. See Most Picked Runes and Items across all pro {champion} players and regions with U.GG Probuilds. Patch ".concat(e),
                        keywords: "{champion} pro builds, {champion} probuilds, {champion} aram",
                        url: "https://u.gg/lol/champions/LOWER_CHAMPION_ID/probuilds"
                    }
                }
            };

        function l() {
            var e = u(),
                t = s();
            return function(n) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = a.champion,
                    o = a.patch,
                    i = a.region,
                    c = n;
                return "matchups" === n ? c = "champion_matchups" : "champion_counters" === n ? c = "champion_counters" : "pro-build" === n ? c = "champion_pro_builds" : "duos" === n ? c = "champion_duos" : "build" === n ? c = "champion_overview" : "items" === n ? c = "champion_items" : "runes" === n ? c = "champion_runes" : "runes-table" === n ? c = "champion_runes_table" : "rune-sets" === n ? c = "champion_rune_sets" : "item-paths" === n ? c = "champion_item_paths" : "spells-abilities" === n ? c = "champion_spells" : "champion_overview" !== n && "champion_overview_aram" !== n || (c = i && t.champion_overview_region[i] ? "champion_overview_region" : n), c ? e(c, {
                    champion: r,
                    patch: o,
                    region: i
                }) : null
            }
        }

        function u() {
            var e = Object(c.n)(),
                t = e.getChampionImg,
                n = e.getNormalizedChampionName,
                a = s();
            return function(e) {
                var i, c, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = s.champion,
                    u = s.patch,
                    m = s.region,
                    d = a[e];
                if (!d) return null;
                d[m] && (d = d[m]);
                var p = d.title,
                    f = d.description,
                    g = d.keywords,
                    h = d.url,
                    v = r.a.createElement("meta", {
                        property: "og:image",
                        content: "https://u.gg/images/ugg/favicon/android-chrome-144x144.png"
                    });
                if (l) {
                    i = l.name, c = n(l.key);
                    var b = t(l.key);
                    v = r.a.createElement("meta", {
                        property: "og:image",
                        content: b
                    }), p = p.replace(new RegExp("{champion}", "g"), i), f = f.replace(new RegExp("{champion}", "g"), i), g = g && g.replace(new RegExp("{champion}", "g"), i), h = h.replace(new RegExp("LOWER_CHAMPION_ID", "g"), c)
                }
                if (u) {
                    var y = u.split(/_|\./g),
                        O = "".concat(y[0], ".").concat(y[1]);
                    p = p.replace(new RegExp("{patch}", "g"), O), f = f.replace(new RegExp("{patch}", "g"), O)
                }
                return r.a.createElement(o.a, null, r.a.createElement("title", null, p), r.a.createElement("link", {
                    rel: "canonical",
                    href: h
                }), r.a.createElement("meta", {
                    name: "description",
                    content: f
                }), g && r.a.createElement("meta", {
                    name: "keywords",
                    content: g
                }), r.a.createElement("meta", {
                    property: "og:title",
                    content: p
                }), r.a.createElement("meta", {
                    property: "og:url",
                    content: h
                }), r.a.createElement("meta", {
                    property: "og:description",
                    content: f
                }), v)
            }
        }
    },
    224: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 63.64 63.64"
            }, e), a || (a = r.createElement("g", {
                "data-name": "Layer 2"
            }, r.createElement("path", {
                d: "M7.07 0L0 7.07l24.75 24.75L0 56.57l7.07 7.07 24.75-24.75 24.75 24.75 7.07-7.07-24.75-24.75L63.64 7.07 56.57 0 31.82 24.75z",
                "data-name": "Layer 1"
            }))))
        }
        t.default = n.p + "static/svg/x.svg"
    },
    226: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return s
        })), n.d(t, "a", (function() {
            return l
        }));
        var a, r = n(19),
            o = n.n(r),
            i = n(20),
            c = ("\n  exodiaUuid\n  rankScores {\n    ".concat("\n  lastUpdatedAt\n  losses\n  lp\n  promoProgress\n  queueType\n  rank\n  role\n  seasonId\n  tier\n  wins\n", "\n  }\n"), "\n  championId\n  summonerName\n  teamId\n  role\n  hardCarry\n  teamplay\n"),
            s = "\n  assists\n  championId\n  cs\n  damage\n  deaths\n  gold\n  items\n  jungleCs\n  killParticipation\n  kills\n  level\n  matchCreationTime\n  matchDuration\n  matchId\n  maximumKillStreak\n  primaryStyle\n  queueType\n  regionId\n  role\n  runes\n  subStyle\n  summonerName\n  summonerSpells\n  psHardCarry\n  psTeamPlay\n  lpInfo {\n    lp\n    placement\n    promoProgress\n    promoTarget\n    promotedTo {\n      tier\n      rank\n    }\n  }\n  teamA {\n    ".concat(c, "\n  }\n  teamB {\n    ").concat(c, "\n  }\n  version\n  visionScore\n  win\n"),
            l = Object(i.a)(a || (a = o()(["\n  query FetchMatchSummaries(\n    $championId: [Int],\n    $page: Int,\n    $queueType: [Int],\n    $regionId: String!,\n    $role:  [Int],\n    $seasonId: Int!,\n    $summonerName: String!\n  ) {\n    fetchPlayerMatchSummaries(\n      championId: $championId,\n      page: $page,\n      queueType: $queueType,\n      regionId: $regionId,\n      role: $role,\n      seasonId: $seasonId,\n      summonerName: $summonerName\n    ) {\n      finishedMatchSummaries\n      totalNumMatches\n      matchSummaries {\n        ", "\n      }\n    }\n  }\n"])), s)
    },
    227: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return h
        })), n.d(t, "a", (function() {
            return v
        }));
        var a = n(11),
            r = n.n(a),
            o = n(31),
            i = n.n(o),
            c = n(0),
            s = n(70);

        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach((function(t) {
                    r()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function m(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return d(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === n && e.constructor && (n = e.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(e);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                    }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var a = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return a >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[a++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, i = !0,
                c = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return i = e.done, e
                },
                e: function(e) {
                    c = !0, o = e
                },
                f: function() {
                    try {
                        i || null == n.return || n.return()
                    } finally {
                        if (c) throw o
                    }
                }
            }
        }

        function d(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
            return a
        }

        function p(e, t) {
            return e && t ? Math.abs((e.wins || 0) + (e.losses || 0) - ((t.wins || 0) + (t.losses || 0))) : null
        }

        function f(e, t, n) {
            var a = ["master", "grandmaster", "challenger"],
                r = {
                    lp: void 0,
                    promoTarget: void 0,
                    promoProgress: void 0,
                    promotedTo: void 0,
                    placement: void 0
                };
            if ((t.wins || 0) + (t.losses || 0) <= 10) r.placement = (t.wins || 0) + (t.losses || 0);
            else if (n.promoProgress) {
                var o, i = void 0,
                    c = m(s.a);
                try {
                    for (c.s(); !(o = c.n()).done;) {
                        var l = o.value;
                        if (Object(s.d)(l) - Object(s.d)(n.tier) == 1) {
                            i = l;
                            break
                        }
                    }
                } catch (e) {
                    c.e(e)
                } finally {
                    c.f()
                }
                r.promoTarget = i, t.promoProgress && t.promoProgress.match(/N/g).length < 5 ? r.promoProgress = t.promoProgress : t.promoProgress || (e.win && (r.promotedTo = t), r.promoProgress = n.promoProgress.replace("N", e.win ? "W" : "L"))
            } else if (a.includes(n.tier.toLowerCase())) {
                if (a.includes(t.tier.toLowerCase()))
                    if (e.win && t.lp <= n.lp) {
                        for (var u = n.lp; u > t.lp;) u = (u -= 250) < 0 ? 0 : u;
                        r.lp = t.lp - u
                    } else r.lp = (t.lp - n.lp) % 250
            } else r.lp = t.lp - n.lp, t.tier === n.tier && t.rank === n.rank || (r.lp += t.lp < n.lp ? 100 : -100, e.win && (["diamond"].includes(n.tier.toLowerCase()) && "I" === t.rank && "IV" === n.rank ? r.lp = t.lp - 75 : t.tier === n.tier && Object(s.c)(t.rank) < Object(s.c)(n.rank) && (r.promotedTo = t)));
            return r
        }
        var g = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = t.filter((function(e, n) {
                        var a = t[n - 1];
                        if (0 === n) return !0;
                        var r = p(e, a);
                        return r && 0 !== r
                    })).sort((function(e, t) {
                        return t.insertedAt - e.insertedAt
                    })),
                    a = {},
                    r = new Set,
                    o = i()(e).sort((function(e, t) {
                        return e.matchCreationTime - t.matchCreationTime
                    }));
                return o.forEach((function(e, t) {
                    for (var o = e.matchCreationTime / 1e3 + e.matchDuration, i = e.matchDuration < 300, c = 0; c < n.length - 1; c++) {
                        var s = n[c],
                            l = n[c + 1];
                        if (!(p(s, l) > 1 || i)) {
                            var u = (s.wins || 0) - (l.wins || 0) == 1,
                                m = (s.losses || 0) - (l.losses || 0) == 1;
                            !r.has(c) && e.win === u && !e.win == m && s.insertedAt > o && l.insertedAt < o && l.tier && l.rank && (r.add(c), a[e.matchId] = f(e, s, l))
                        }
                    }
                })), a
            },
            h = function(e, t) {
                return Object(c.useMemo)((function() {
                    var n = {};
                    if (t && t.length > 0) {
                        var a = e.filter((function(e) {
                                return "ranked_solo_5x5" === e.queueType
                            })),
                            r = e.filter((function(e) {
                                return "ranked_flex_sr" === e.queueType
                            })),
                            o = t.filter((function(e) {
                                return 420 === e.queueId
                            })),
                            i = t.filter((function(e) {
                                return 440 === e.queueId
                            }));
                        n = u(u(u({}, n), g(a, o)), g(r, i))
                    }
                    return n
                }), [e, t])
            },
            v = function(e, t) {
                return t = u(u({}, t), {}, {
                    placement: t && null != t.placement && t.placement <= 10 ? t.placement : null
                }), u(u({}, e || {}), {}, {
                    placement: t && t.placement,
                    promotedTo: t && t.promotedTo && "" != t.promotedTo.rank ? u(u({}, t.promotedTo), {}, {
                        tier: Object(s.i)(t.promotedTo.tier)
                    }) : e && e.promotedTo && "" != e.promotedTo.rank ? e.promotedTo : null,
                    promoTarget: t && "" != t.promoTarget ? Object(s.i)(Object(s.e)(t.promoTarget)) : e && "" != e.promoTarget ? e.promoTarget : null,
                    promoProgress: t && "" != t.promoProgress ? t.promoProgress : e && "" != e.promoProgress ? e.promoProgress : null,
                    lp: t && t.lp > -1e3 && 0 != t.lp ? t.lp : e ? e.lp : NaN
                })
            }
    },
    230: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return y
        }));
        var a = n(48),
            r = n.n(a),
            o = n(49),
            i = n.n(o),
            c = n(59),
            s = n.n(c),
            l = n(60),
            u = n.n(l),
            m = n(29),
            d = n.n(m),
            p = n(0),
            f = n.n(p),
            g = (n(3), n(577)),
            h = n.n(g),
            v = n(92);

        function b(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = d()(e);
                if (t) {
                    var r = d()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return u()(this, n)
            }
        }
        var y = function(e) {
            s()(n, e);
            var t = b(n);

            function n() {
                return r()(this, n), t.apply(this, arguments)
            }
            return i()(n, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.error,
                        n = (e.sitekey, e.onVerify),
                        a = e.onExpire,
                        r = e.setRef;
                    return f.a.createElement("div", {
                        className: "recaptcha-container"
                    }, t && f.a.createElement("div", {
                        className: "recaptcha-error"
                    }, t), f.a.createElement(h.a, {
                        ref: r,
                        sitekey: v.recaptchaSiteKeyV2,
                        onVerify: n,
                        onExpire: a,
                        onError: function() {
                            return console.log("error recaptcha")
                        }
                    }))
                }
            }]), n
        }(p.Component);
        y.defaultProps = {
            onVerify: function() {},
            onExpire: function() {},
            setRef: function() {}
        }
    },
    231: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        })), n.d(t, "b", (function() {
            return l
        }));
        var a = n(1),
            r = n.n(a),
            o = n(51),
            i = n.n(o),
            c = n(18);

        function s(e) {
            for (var t = {}, n = e[0], a = e[1], o = e[2], c = function() {
                    var e = r()(l[s], 2),
                        n = e[0],
                        a = e[1],
                        c = [];
                    a.forEach((function(e) {
                        var t = e[2],
                            a = {
                                role: n,
                                champion_id: e[0],
                                champion_link: {
                                    champion_id: e[0],
                                    role: n
                                },
                                wins: e[1],
                                matches: t,
                                win_rate: i()(e[1] / t * 100, 2),
                                pick_rate: i()(t / o * 100, 2),
                                avg_kda: i()((e[3] + e[4]) / e[5], 2),
                                kills: i()(e[3] / t, 2),
                                assists: i()(e[4] / t, 2),
                                deaths: i()(e[5] / t, 2),
                                damage: i()(e[6] / t, 0),
                                damage_taken: i()(e[7] / t, 0),
                                damage_mitigated: i()(e[8] / t, 0),
                                heals: i()(e[9] / t, 0),
                                cc_time_dealt: i()(e[10] / t / 60, 2),
                                cc_time: i()(e[11] / t / 60, 2)
                            };
                        c.push(a)
                    }));
                    var u = c.sort((function(e, t) {
                        return t.win_rate - e.win_rate
                    }));
                    t[n] = u
                }, s = 0, l = Object.entries(n); s < l.length; s++) c();
            for (var u = [], m = 0, d = Object.entries(t); m < d.length; m++) {
                var p = r()(d[m], 2),
                    f = (p[0], p[1]);
                u = u.concat(f)
            }
            var g = u.sort((function(e, t) {
                return t.win_rate - e.win_rate
            }));
            return t.all = g, {
                combat: t,
                last_updated: a,
                total_matches: o
            }
        }

        function l(e, t) {
            var n, a, r;
            if (!e) return {
                combat: n,
                last_updated: a,
                total_matches: r
            };
            var o = t.queueType,
                i = t.role;
            return i = "normal_aram" === o || "nexus_blitz" == o ? "none" : Object(c.l)(i), e && (n = e.combat[i], a = e.last_updated, r = e.total_matches), {
                combat: n,
                last_updated: a,
                total_matches: r
            }
        }
    },
    232: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        })), n.d(t, "b", (function() {
            return l
        }));
        var a = n(1),
            r = n.n(a),
            o = n(51),
            i = n.n(o),
            c = n(18);

        function s(e) {
            for (var t = {}, n = e[0], a = e[1], o = e[2], c = function() {
                    var e = r()(l[s], 2),
                        n = e[0],
                        a = e[1],
                        c = [];
                    a.forEach((function(e) {
                        var t = e[2],
                            a = {
                                role: n,
                                champion_id: e[0],
                                champion_link: {
                                    champion_id: e[0],
                                    role: n
                                },
                                wins: e[1],
                                matches: t,
                                win_rate: i()(e[1] / t * 100, 2),
                                pick_rate: i()(t / o * 100, 2),
                                gold: i()(e[3] / t, 0),
                                cs: i()(e[4] / t, 1),
                                jungle_cs: i()(e[5] / t, 1),
                                enemy_jungle_cs: i()(e[6] / t, 1),
                                turrets: i()(e[7] / t, 1),
                                damage_to_turrets: i()(e[8] / t, 0),
                                wards_killed: i()(e[9] / t, 1),
                                match_duration: i()(e[10] / t / 60, 2)
                            };
                        c.push(a)
                    }));
                    var u = c.sort((function(e, t) {
                        return t.win_rate - e.win_rate
                    }));
                    t[n] = u
                }, s = 0, l = Object.entries(n); s < l.length; s++) c();
            for (var u = [], m = 0, d = Object.entries(t); m < d.length; m++) {
                var p = r()(d[m], 2),
                    f = (p[0], p[1]);
                u = u.concat(f)
            }
            var g = u.sort((function(e, t) {
                return t.win_rate - e.win_rate
            }));
            return t.all = g, {
                objectives: t,
                last_updated: a,
                total_matches: o
            }
        }

        function l(e, t) {
            var n, a, r;
            if (!e) return {
                objectives: n,
                last_updated: a,
                total_matches: r
            };
            var o = t.queueType,
                i = t.role;
            return i = "normal_aram" === o || "nexus_blitz" == o ? "none" : Object(c.l)(i), e && (n = e.objectives[i], a = e.last_updated, r = e.total_matches), {
                objectives: n,
                last_updated: a,
                total_matches: r
            }
        }
    },
    24: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return f
        })), n.d(t, "g", (function() {
            return g
        })), n.d(t, "h", (function() {
            return h
        })), n.d(t, "c", (function() {
            return v
        })), n.d(t, "e", (function() {
            return b
        })), n.d(t, "i", (function() {
            return y
        })), n.d(t, "f", (function() {
            return O
        })), n.d(t, "b", (function() {
            return E
        })), n.d(t, "a", (function() {
            return j
        }));
        var a = n(131),
            r = n.n(a),
            o = (n(11), n(1)),
            i = n.n(o),
            c = (n(0), n(10)),
            s = n(145),
            l = n(188),
            u = n(280),
            m = n(15),
            d = (n(268), n(2)),
            p = n(18);
        var f = function() {
                var e = Object(c.useGlobal)("authToken"),
                    t = i()(e, 1)[0],
                    n = Object(c.useGlobal)("loggingIn");
                return !(i()(n, 1)[0] || !t)
            },
            g = function() {
                var e = Object(s.a)(m.v),
                    t = e.loading,
                    n = e.data,
                    a = e.error;
                return t || a ? {} : n.getState.premium
            },
            h = function() {
                var e = Object(s.a)(m.v).data,
                    t = e && e.getState || {},
                    n = t.lolSettings,
                    a = (t.premium, (n || {}).summoners),
                    r = a && a[0] || {};
                return {
                    summonerName: r.summonerName,
                    regionId: r.regionId,
                    verified: r.verified
                }
            },
            v = function(e, t, n) {
                var a = Object(l.a)(),
                    r = Object(c.useGlobal)("authToken"),
                    o = i()(r, 2),
                    s = (o[0], o[1]),
                    u = Object(c.useGlobal)("loggingIn"),
                    d = i()(u, 2),
                    f = (d[0], d[1]);
                return function() {
                    f(!0), a.query({
                        query: m.x,
                        variables: e,
                        errorPolicy: "all"
                    }).then((function(a) {
                        var r, o = a.data,
                            i = a.errors;
                        if (i) f(!1), s(null), n && n(i[0].message);
                        else {
                            var c = o.login,
                                l = c.loginState.token;
                            c.premium && c.premium.isPremium && localStorage.setItem("dontLoadGoogleCMP", !0), r = c, window && window.dataLayer && (r.googleAnalyticsId ? (window.dataLayer.push({
                                userId: r.googleAnalyticsId
                            }), r.premium && r.premium.isPremium ? window.dataLayer.push({
                                accountType: "boost"
                            }) : window.dataLayer.push({
                                accountType: "free"
                            })) : window.dataLayer.push({
                                userId: null
                            })), window && (e.persistLogin ? Object(p.a)("authToken", l) : Object(p.a)("authToken", l, !0), t && t(o))
                        }
                        f(!1)
                    })).catch((function(e) {
                        f(!1), s(null), n && n(e)
                    }))
                }
            },
            b = function(e) {
                var t = Object(l.a)();
                return function() {
                    t.query({
                        query: m.y
                    }).then((function(t) {
                        var n = t.data;
                        t.errors || (n.logout.success && window && window.analytics && window.analytics.reset(), window && (Object(p.J)("authToken"), localStorage.removeItem("dontLoadGoogleCMP"), window.location.reload()), e && e())
                    }))
                }
            },
            y = function(e) {
                var t = Object(c.useGlobal)("verificationBar"),
                    n = i()(t, 2),
                    a = (n[0], n[1]);
                return Object(u.a)(m.J, {
                    variables: {
                        verificationCode: e
                    },
                    refetchQueries: [{
                        query: m.v
                    }],
                    onCompleted: function(e) {
                        console.log(e), e.verify.success && a("valid")
                    },
                    onError: function(e) {
                        console.error(e), a("invalid")
                    }
                })
            },
            O = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.variables,
                    n = e.onCompleted,
                    a = e.onError,
                    o = Object(l.a)();
                return function() {
                    o.query({
                        query: m.A,
                        variables: "object" !== r()(t) ? {} : t
                    }).then((function(e) {
                        var t = e.data;
                        e.errors ? a && a() : t.reverifyEmail.success && n && n()
                    })).catch((function(e) {
                        a && a()
                    }))
                }
            },
            E = function() {
                var e = Object(d.n)(),
                    t = e.getChampionImg,
                    n = e.getChampionName,
                    a = e.getNormalizedChampionName;
                return function(e) {
                    return (e || []).map((function(e) {
                        var r = String(e.championId);
                        return {
                            championId: e.championId,
                            championImage: t(r),
                            championName: n(r),
                            normalizedChampionName: a(r)
                        }
                    }))
                }
            },
            w = null,
            j = function() {
                var e = Object(c.useGlobal)("clientChampionFavorites"),
                    t = i()(e, 2),
                    n = t[0],
                    a = t[1],
                    r = Object(c.useGlobal)("clientSummonerFavorites"),
                    o = i()(r, 2),
                    s = o[0],
                    l = o[1],
                    d = Object(u.a)(m.H, {
                        refetchQueries: [{
                            query: m.v
                        }]
                    }),
                    p = i()(d, 2),
                    f = p[0],
                    g = p[1],
                    h = E();
                return [function(e, t) {
                    if (!e) throw new Error("Require 'favoriteType'");
                    "champions" === e && a(h(t)), "summoners" === e && l(t), w && clearTimeout(w), w = setTimeout((function() {
                        var a = "champions" === e ? t : n || [],
                            r = "summoners" === e ? t : s || [];
                        a = a.map((function(e) {
                            return {
                                championId: e.championId
                            }
                        })), r = r.map((function(e) {
                            return {
                                summonerName: e.summonerName,
                                iconUrl: e.iconUrl,
                                regionId: e.regionId
                            }
                        })), f({
                            variables: {
                                favoriteChampions: a,
                                favoriteSummoners: r
                            }
                        })
                    }), 2e3)
                }, g]
            }
    },
    25: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        })), n.d(t, "b", (function() {
            return b
        }));
        var a = n(11),
            r = n.n(a),
            o = n(10),
            i = {
                type: "UPDATE_STATIC_JSON",
                actionFn: function(e, t, n, a) {
                    return r()({}, n, a)
                }
            },
            c = function(e) {
                [i].forEach((function(t) {
                    e ? e.addReducer(t.type, t.actionFn) : Object(o.addReducer)(t.type, t.actionFn)
                }))
            },
            s = n(1),
            l = n.n(s),
            u = n(4),
            m = n(0),
            d = (n(88), n(62), n(282), Object(m.createContext)({})),
            p = (d.Provider, n(381)),
            f = n.n(p);

        function g(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? g(Object(n), !0).forEach((function(t) {
                    r()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var v = {},
            b = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.skip,
                    a = void 0 !== n && n,
                    i = t.ssr,
                    c = void 0 !== i && i,
                    s = t.onCompleted,
                    p = void 0 === s ? void 0 : s,
                    g = t.onError,
                    b = void 0 === g ? void 0 : g,
                    y = Object(o.useDispatch)("UPDATE_STATIC_JSON"),
                    O = function(t) {
                        return y(e, t)
                    },
                    E = Object(m.useContext)(d),
                    w = Object(o.useGlobal)(e),
                    j = l()(w, 1),
                    N = j[0],
                    S = void 0 === N ? {
                        data: void 0,
                        loading: !1,
                        error: void 0,
                        idle: !1
                    } : N,
                    k = S.data,
                    _ = S.loading,
                    T = S.error;
                if (c && !u.window && !a) {
                    var I = function() {
                        var t = function() {
                            return f()(e).then((function(e) {
                                return e.json()
                            })).then((function(t) {
                                return E.loading[e] = !1, {
                                    data: p ? p(e, t) : t,
                                    loading: !1,
                                    error: null,
                                    idle: !1
                                }
                            })).catch((function(t) {
                                return console.log(t), E.loading[e] = !1, {
                                    data: b ? b(e, t) : null,
                                    loading: !1,
                                    error: t,
                                    idle: !1
                                }
                            }))
                        };
                        E.cache && E.cache[e] ? E.data ? E.data[e] = E.cache[e] : E.data = r()({}, e, E.cache[e]) : E.data && E.data[e] || E.loading && E.loading[e] || (E.requests ? E.requests && !E.requests[e] && (E.loading[e] = !0, E.requests[e] = t()) : (E.loading = r()({}, e, !0), E.requests = r()({}, e, t())))
                    };
                    I()
                }
                return Object(m.useEffect)((function() {
                    if ((c || u.window) && !a && !_ && void 0 === k && void 0 === T) {
                        if (v[e]) return;
                        O({
                            data: void 0,
                            loading: !0,
                            error: void 0,
                            idle: !1
                        }), v[e] = !0, f()(e).then((function(e) {
                            return e.json()
                        })).then((function(t) {
                            v[e] = !1, O({
                                data: p ? p(e, t) : t,
                                loading: !1,
                                error: null,
                                idle: !1
                            })
                        })).catch((function(t) {
                            console.error(t), v[e] = !1, O({
                                data: b ? b(e, t) : null,
                                loading: !1,
                                error: t,
                                idle: !1
                            })
                        }))
                    }
                }), [e, S]), a ? {
                    data: void 0,
                    loading: !1,
                    error: void 0,
                    idle: !0
                } : E.data && E.data[e] ? E.data[e] : void 0 === k && void 0 === T ? h(h({}, S), {}, {
                    idle: !1,
                    loading: !0
                }) : S
            }
    },
    263: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n.n(a),
            o = n(0),
            i = n.n(o),
            c = n(10),
            s = n(3),
            l = n.n(s),
            u = n(14),
            m = n.n(u),
            d = n(94),
            p = n(127),
            f = function(e) {
                var t = Object(c.useGlobal)("clientRegion"),
                    n = r()(t, 1)[0],
                    a = e.color,
                    s = e.regionSelectorPosition,
                    l = e.placeholder,
                    u = e.summonerName,
                    f = e.summonerRegion,
                    g = e.onSummonerChange,
                    h = e.onRegionChange,
                    v = e.tabIndex,
                    b = e.inputRef,
                    y = e.autoFocus,
                    O = e.error,
                    E = e.dontDefaultUniversalRegion;
                Object(o.useEffect)((function() {
                    E || f || h(n)
                }), []);
                var w = m()({
                        "summoner-finder": !0,
                        "summoner-finder_white": "white" === a
                    }),
                    j = m()({
                        "summoner-finder_region-selector": !0,
                        "summoner-finder_region-selector__right": "right" === s
                    });
                return i.a.createElement("div", {
                    className: w
                }, i.a.createElement("div", {
                    className: j
                }, i.a.createElement(p.a, {
                    currentRegion: f,
                    onApply: h,
                    disableTooltip: !0,
                    isMasthead: !0
                })), i.a.createElement(d.a, {
                    onCreateRef: b,
                    value: u,
                    onChange: g,
                    placeholder: l,
                    type: "text",
                    tabIndex: v,
                    autoFocus: y,
                    error: O,
                    hideErrorMessage: !0
                }))
            };
        t.a = f, f.propTypes = {
            summonerName: l.a.string.isRequired,
            summonerRegion: l.a.string.isRequired,
            onSummonerChange: l.a.func.isRequired,
            onRegionChange: l.a.func.isRequired
        }, f.defaultProps = {
            placeholder: "Summoner Name"
        }
    },
    264: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 29 24"
            }, e), a || (a = r.createElement("path", {
                fill: "#fff",
                d: "M11.083 4.523l1.67 1.496 1.668-1.497a4.998 4.998 0 018.114 5.182c-.669.209-1.3.576-1.831 1.102l-.454.45-.454-.45a4.52 4.52 0 00-6.355 0 4.437 4.437 0 000 6.308l1.258 1.25-1.949 1.952-8.775-8.787a4.998 4.998 0 01.24-6.813 5 5 0 016.868-.193zm6.952 8.063l.454.45 1.759 1.743 2.215-2.19a2.018 2.018 0 012.835-.003c.77.763.77 1.994 0 2.758L20.25 20.35l-5.047-5.007a1.935 1.935 0 010-2.758 2.017 2.017 0 012.832 0zm5.019-9.64C20.225.112 15.688.025 12.75 2.661a7.5 7.5 0 00-10.6 10.58l10.6 10.615 3.722-3.731 3.777 3.75 6.809-6.76a4.438 4.438 0 000-6.309 4.473 4.473 0 00-1.943-1.135 7.502 7.502 0 00-2.062-6.725z"
            })))
        }
        t.default = n.p + "static/svg/double-hearts-outline.svg"
    },
    268: function(e, t, n) {
        "use strict";
        var a, r = n(19),
            o = n.n(r),
            i = n(20),
            c = Object(i.a)(a || (a = o()(["\n    query VerifyRiotCode {\n        ", "\n    }\n"])), "verifyRiotCode {\n    success\n  }");
        t.a = c
    },
    271: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return S
        }));
        var a = n(11),
            r = n.n(a),
            o = n(1),
            i = n.n(o),
            c = n(4),
            s = n(0),
            l = n.n(s),
            u = n(12),
            m = n(17),
            d = n(10),
            p = n(280),
            f = n(94),
            g = (n(285), n(419)),
            h = n(263),
            v = n(230),
            b = n(69),
            y = n(18),
            O = n(170),
            E = n(92),
            w = n(15);

        function j(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function N(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? j(Object(n), !0).forEach((function(t) {
                    r()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var S = function(e) {
            return l.a.createElement(u.b, {
                className: "signup-btn",
                to: "/signup"
            }, e.children)
        };
        t.b = function(e) {
            var t = Object(s.useRef)(),
                n = Object(m.g)(),
                a = Object(m.h)().search.substring(1),
                o = Object(y.I)(a),
                j = Object(d.useGlobal)("clientRegion"),
                S = i()(j, 1)[0],
                k = Object(s.useState)(!1),
                _ = i()(k, 2),
                T = _[0],
                I = _[1],
                P = Object(s.useState)("v3"),
                A = i()(P, 2),
                L = A[0],
                C = A[1],
                R = Object(s.useState)(""),
                x = i()(R, 2),
                M = x[0],
                D = x[1],
                G = Object(s.useState)({
                    recaptchaToken: {
                        value: "",
                        error: ""
                    },
                    email: {
                        value: "",
                        error: ""
                    },
                    password: {
                        value: "",
                        error: ""
                    },
                    summonerName: {
                        value: "",
                        error: ""
                    },
                    summonerRegion: {
                        value: S || "",
                        error: ""
                    },
                    marketingOptOut: !1
                }),
                B = i()(G, 2),
                q = B[0],
                U = B[1],
                F = q.email,
                $ = q.password,
                z = q.recaptchaToken,
                W = q.summonerName,
                V = q.summonerRegion,
                H = q.marketingOptOut,
                K = Object(p.a)(w.a, {
                    onCompleted: function(e) {
                        var t = e.register.token;
                        if (c.window) {
                            Object(y.a)("authToken", t);
                            var n = (o.continue ? o.continue : "").split("/");
                            o.redirect_url ? c.window.location.href = "".concat(o.redirect_url) : 1 === n.length ? c.window.location.href = "/?onboarding=true" : c.window.location.href = "/boost/payment?planType=".concat(n.pop())
                        }
                    },
                    onError: function(e) {
                        var n = JSON.parse(JSON.stringify(e)).graphQLErrors;
                        t.current && t.current.reset(), "bad_recaptcha" === n[0].message ? (C("v2"), D("Please check the reCAPTCHA checkbox to signup.")) : "duplicate_user" === n[0].message ? D("An account with this E-mail already exists.") : (console.error(n), D("An unexpected error occurred. Please try again."))
                    },
                    variables: N({
                        email: F.value,
                        marketingOptOut: H,
                        password: $.value,
                        summonerName: W.value,
                        summonerRegion: V.value
                    }, "v2" === L ? {
                        recaptchaToken: z.value
                    } : {
                        recaptchaTokenV3: z.value
                    })
                }),
                J = i()(K, 2),
                Y = J[0],
                Q = J[1],
                Z = Q.loading;
            Q.data, Q.error;
            Object(s.useEffect)((function() {
                ee()
            }), []);
            var X = function(e, t) {
                    U(N(N({}, q), {}, r()({}, e, N(N({}, q[e]), t))))
                },
                ee = function() {
                    Object(O.a)("signup", (function(e) {
                        X("recaptchaToken", {
                            value: e,
                            error: ""
                        })
                    }))
                };
            return l.a.createElement("div", {
                className: "signup"
            }, l.a.createElement("form", {
                onSubmit: function(e) {
                    return e.preventDefault()
                },
                className: "signup_form"
            }, l.a.createElement("div", {
                className: "logo-container"
            }, l.a.createElement("img", {
                className: "logo",
                src: "https://static.u.gg/assets/ugg/logo/ugg-logo.svg",
                onClick: function() {
                    return n.push("/")
                }
            })), l.a.createElement("div", {
                className: "sign"
            }, "Create an account"), l.a.createElement("div", {
                className: "already-have-account"
            }, "Already have an account? ", l.a.createElement(u.b, {
                to: {
                    pathname: "/login",
                    search: a
                }
            }, l.a.createElement("span", null, "Log In."))), M && l.a.createElement("div", {
                className: "signup-error"
            }, M), l.a.createElement(l.a.Fragment, null, l.a.createElement(f.a, {
                value: F.value,
                error: F.error,
                onChange: function(e) {
                    return X("email", {
                        value: e.target.value
                    })
                },
                placeholder: "Email",
                type: "email",
                tabIndex: 1e3,
                autoFocus: !0,
                style: {
                    marginBottom: 24
                },
                label: "Email"
            }), l.a.createElement(f.a, {
                value: $.value,
                error: $.error,
                onChange: function(e) {
                    return X("password", {
                        value: e.target.value
                    })
                },
                onFocus: function() {
                    I(!0)
                },
                onBlur: function() {
                    setTimeout((function() {
                        I(!1)
                    }), 100)
                },
                placeholder: "Password",
                tabIndex: 1001,
                type: "password",
                label: "Password",
                maxLength: 128
            }), T && l.a.createElement(g.a, {
                password: $.value
            }), l.a.createElement("div", {
                style: {
                    width: "100%",
                    marginTop: 24
                }
            }, W.error && l.a.createElement("div", {
                className: "summoner-name-error"
            }, W.error), l.a.createElement(h.a, {
                placeholder: "Summoner Name",
                summonerName: W.value,
                summonerRegion: V.value,
                onSummonerChange: function(e) {
                    return X("summonerName", {
                        value: e.target.value
                    })
                },
                onRegionChange: function(e) {
                    return X("summonerRegion", {
                        value: e || ""
                    })
                },
                tabIndex: 1002,
                error: W.error
            })), l.a.createElement("div", {
                className: "terms"
            }, "By clicking on Create Account, you agree to our", " ", l.a.createElement(u.b, {
                className: "forgot",
                to: "/terms-of-service"
            }, "Terms of Service"), ".", l.a.createElement("br", null), l.a.createElement("br", null), "To learn more about how U.GG collects, uses, shares and protects your personal data please read our", " ", l.a.createElement(u.b, {
                className: "forgot",
                to: "/privacy-policy"
            }, "Privacy Policy"), "."), "v2" === L && l.a.createElement("div", {
                style: {
                    marginTop: "20px"
                }
            }, l.a.createElement(v.a, {
                setRef: t,
                error: z.error,
                onVerify: function(e) {
                    return X("recaptchaToken", {
                        value: E.recaptchaBypass || e
                    })
                },
                onExpire: function(e) {
                    return X("recaptchaToken", {
                        value: ""
                    })
                }
            })), l.a.createElement(b.a, {
                className: "signup-submit btn-light-blue",
                label: "Create Account",
                isLoading: Z,
                onClick: function(e) {
                    e.persist();
                    var t = function() {
                        var e = {},
                            t = !1;

                        function n(n, a) {
                            return a && (t = !0), Object.assign(e, n)
                        }
                        return e = 0 === F.value.trim().length ? n({
                            email: N(N({}, F), {}, {
                                error: "Email address is required"
                            })
                        }, !0) : Object(O.b)(F.value.trim()) ? n({
                            email: N(N({}, F), {}, {
                                error: ""
                            })
                        }) : n({
                            email: N(N({}, F), {}, {
                                error: "Invalid email address"
                            })
                        }, !0), e = Object(O.c)($.value) ? n({
                            password: N(N({}, $), {}, {
                                error: ""
                            })
                        }) : n({
                            password: N(N({}, $), {}, {
                                error: "Password must be at least 8 characters, with at least one letter and one number"
                            })
                        }, !0), "v2" === L && (e = z.value ? n({
                            recaptchaToken: N(N({}, z), {}, {
                                error: ""
                            })
                        }) : n({
                            recaptchaToken: N(N({}, z), {}, {
                                error: "Recaptcha verification required"
                            })
                        }, !0)), e = 0 === W.value.trim().length ? n({
                            summonerName: N(N({}, W), {}, {
                                error: "Summoner name is required"
                            })
                        }, !0) : n({
                            summonerName: N(N({}, W), {}, {
                                error: ""
                            })
                        }), {
                            form: N(N({}, q), e),
                            error: t
                        }
                    }();
                    U(N(N({}, q), t.form)), t.error || (D(""), Y())
                },
                bForceSubmitOnEnter: !0
            }))))
        }
    },
    272: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 18 18"
            }, e), a || (a = r.createElement("path", {
                fill: "#bec3e1",
                d: "M8.995 11.003a1.933 1.933 0 01-1.418-.59 1.933 1.933 0 01-.59-1.418c0-.551.197-1.024.59-1.417.394-.394.87-.591 1.428-.591.558 0 1.03.197 1.417.59.388.394.581.867.581 1.418 0 .551-.197 1.024-.59 1.418-.394.393-.867.59-1.418.59zm0 1.421c.946 0 1.754-.335 2.424-1.005a3.304 3.304 0 001.005-2.424c0-.946-.335-1.754-1.005-2.424a3.304 3.304 0 00-2.424-1.005c-.946 0-1.754.335-2.424 1.005a3.304 3.304 0 00-1.005 2.424c0 .946.335 1.754 1.005 2.424a3.304 3.304 0 002.424 1.005zM9 16.58c-.25 0-.526-.02-.829-.06l-.217-.69-.217-.612-.612-.197a6.719 6.719 0 01-1.046-.434l-.572-.297-.593.297-.65.315a4.934 4.934 0 01-.613-.552 4.935 4.935 0 01-.552-.612l.612-1.224-.297-.572a6.308 6.308 0 01-.434-1.046l-.197-.632L1.48 9.83a5.855 5.855 0 010-1.658l1.303-.434.197-.612c.106-.355.25-.704.434-1.046l.297-.592-.297-.573-.315-.65c.342-.435.73-.823 1.164-1.165l1.224.612.592-.297a4.873 4.873 0 011.046-.434l.612-.197.197-.612.237-.71c.303-.027.579-.04.829-.04.263 0 .54.013.829.04l.434 1.322.612.178c.368.118.724.263 1.066.434l.572.316 1.224-.632c.434.355.829.75 1.184 1.184l-.632 1.224.297.572a6.6 6.6 0 01.453 1.046l.178.632.612.197.71.237c.04.29.053.56.04.81V9c0 .25-.013.526-.04.829l-.71.217-.612.217-.197.632a5.776 5.776 0 01-.415 1.026l-.316.572.632 1.244a8.563 8.563 0 01-.553.612v.02a5.177 5.177 0 01-.631.532l-1.224-.612-.572.297a7.535 7.535 0 01-1.066.434l-.612.197-.197.612-.237.69a5.78 5.78 0 01-.829.06zM9 18c.434 0 .908-.04 1.421-.118l.474-.08.493-1.44a9.32 9.32 0 001.125-.474l1.362.691.395-.296a7.82 7.82 0 001.085-.928 7.82 7.82 0 00.928-1.085l.276-.395-.67-1.362c.183-.368.341-.75.473-1.145l1.44-.473.08-.474C17.96 9.908 18 9.434 18 9c0-.434-.04-.908-.118-1.421l-.08-.474-1.44-.493a8.728 8.728 0 00-.474-1.145l.671-1.362-.276-.375a8.945 8.945 0 00-2.013-2.033l-.395-.276-1.362.69a8.727 8.727 0 00-1.145-.473l-.473-1.44-.474-.08A9.393 9.393 0 009 0c-.434 0-.908.04-1.421.118l-.474.08-.493 1.44a7.84 7.84 0 00-1.125.474L4.125 1.42l-.395.296A9.13 9.13 0 001.717 3.73l-.276.395.67 1.362a9.274 9.274 0 00-.473 1.125l-1.44.493-.08.474A9.393 9.393 0 000 9c0 .434.04.908.118 1.421l.08.474 1.44.493c.132.395.29.77.474 1.125l-.671 1.362.276.395c.29.394.599.756.928 1.085.302.303.664.612 1.085.928l.395.276 1.362-.67c.368.183.743.341 1.125.473l.493 1.44.474.08C8.092 17.96 8.566 18 9 18z"
            })))
        }
        t.default = n.p + "static/svg/cog-icon.svg"
    },
    273: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 12"
            }, e), a || (a = r.createElement("path", {
                fill: "#fff",
                d: "M13.994 8.112l-2.665-1.87v-.479l2.665-1.87zm-9.06-4.225a.267.267 0 00-.267.267v3.699a.267.267 0 00.411.227l2.91-1.852a.267.267 0 000-.45l-2.91-1.85a.267.267 0 00-.143-.042zm5.073 6.118H2.002V2.002h8.005zM1.337.67a.667.667 0 00-.667.667v9.333c0 .368.298.667.667.667h9.333a.667.667 0 00.667-.667v-2.8l3.475 2.433a.333.333 0 00.525-.273V1.977a.333.333 0 00-.525-.274l-3.475 2.434v-2.8A.667.667 0 0010.67.67z"
            })))
        }
        t.default = n.p + "static/svg/live-game-icon.svg"
    },
    274: function(e, t, n) {
        "use strict";

        function a(e) {
            var t, n, a, r = 0,
                o = [];
            for (t = 0; t < e.length; t += 1) r += e[t];
            for (a = r / e.length, n = 0; n < e.length; n += 1) o.push(Math.pow(e[n] - a, 2));
            return {
                mean: a,
                stdev: Math.sqrt(o.reduce((function(e, t) {
                    return e + t
                }), 0) / e.length)
            }
        }
        n.d(t, "a", (function() {
            return a
        }))
    },
    275: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n.n(a),
            o = n(64),
            i = n(145),
            c = n(2),
            s = n(15),
            l = n(186);
        t.a = function(e) {
            var t = Object(o.a)("performanceAnalysis"),
                n = Object(i.a)(s.v, {
                    fetchPolicy: "network-only"
                }).data,
                a = Object(i.a)(l.a, {
                    variables: {
                        regionId: n ? n.getState.lolSettings.summoners[0].regionId : "na1",
                        summonerName: n ? n.getState.lolSettings.summoners[0].summonerName : "",
                        season: 14
                    },
                    fetchPolicy: "network-only",
                    skip: !n
                }).data;
            return a && "ready" === a.summonerReviewStatus.status && t(), r.a.createElement("div", null, r.a.createElement("div", {
                className: "performance-container loading-page"
            }, r.a.createElement("div", {
                className: "large-header"
            }, "GENERATING YOUR YEAR IN REVIEW ..."), r.a.createElement("div", {
                className: "normal-text"
            }, "Estimated wait time:"), r.a.createElement("div", {
                className: "time-remaining"
            }, r.a.createElement("div", {
                className: "small-header"
            }, "< 24", " hours")), r.a.createElement("div", {
                className: "normal-text"
            }, "Check back later!"), r.a.createElement("img", {
                className: "loading-image",
                src: Object(c.s)("lol/performance_analysis/images/YiR-loading.png")
            })))
        }
    },
    277: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return M
        }));
        var a = n(11),
            r = n.n(a),
            o = n(1),
            i = n.n(o),
            c = n(0),
            s = n.n(c),
            l = n(10),
            u = n(12),
            m = n(17),
            d = n(48),
            p = n.n(d),
            f = n(49),
            g = n.n(f),
            h = n(59),
            v = n.n(h),
            b = n(60),
            y = n.n(b),
            O = n(29),
            E = n.n(O),
            w = n(3),
            j = n.n(w),
            N = n(94);

        function S(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = E()(e);
                if (t) {
                    var r = E()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return y()(this, n)
            }
        }
        var k = function(e) {
            v()(n, e);
            var t = S(n);

            function n() {
                return p()(this, n), t.call(this)
            }
            return g()(n, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.className,
                        n = e.value,
                        a = e.error,
                        r = e.placeholder,
                        o = e.onChange,
                        i = e.tabIndex,
                        c = e.autoFocus;
                    return s.a.createElement("div", {
                        className: "password-input_with-forgot-pw"
                    }, s.a.createElement(N.a, {
                        className: t,
                        type: "password",
                        value: n,
                        error: a,
                        onChange: o,
                        placeholder: r,
                        tabIndex: i,
                        autoFocus: c
                    }))
                }
            }]), n
        }(c.Component);
        k.propTypes = {
            value: j.a.string.isRequired,
            onChange: j.a.func.isRequired
        }, k.defaultProps = {
            className: "",
            placeholder: "",
            tabIndex: -1
        };
        var _ = n(285),
            T = n(230),
            I = n(69),
            P = n(24),
            A = n(18),
            L = n(170),
            C = n(92);

        function R(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function x(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? R(Object(n), !0).forEach((function(t) {
                    r()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var M = function(e) {
            var t = e.children,
                n = e.style;
            return s.a.createElement(u.b, {
                style: n,
                className: "login-btn",
                to: "/login"
            }, t)
        };
        t.b = function(e) {
            var t = Object(c.useRef)(),
                n = Object(m.g)(),
                a = Object(m.h)().search.substring(1),
                o = Object(A.I)(a),
                d = Object(c.useState)("v3"),
                p = i()(d, 2),
                f = p[0],
                g = p[1],
                h = Object(c.useState)(""),
                v = i()(h, 2),
                b = v[0],
                y = v[1],
                O = Object(l.useGlobal)("loggingIn"),
                E = i()(O, 1)[0],
                w = Object(c.useState)({
                    recaptchaToken: {
                        value: "",
                        error: ""
                    },
                    email: {
                        value: "",
                        error: ""
                    },
                    password: {
                        value: "",
                        error: ""
                    },
                    persistLogin: {
                        value: !0
                    }
                }),
                j = i()(w, 2),
                S = j[0],
                k = j[1],
                R = S.email,
                M = S.password,
                D = S.recaptchaToken,
                G = S.persistLogin,
                B = x({
                    persistLogin: G.value,
                    email: R.value,
                    password: M.value
                }, "v2" === f ? {
                    recaptchaToken: D.value
                } : {
                    recaptchaTokenV3: D.value
                }),
                q = Object(P.c)(B, (function() {
                    var e = "/";
                    if (o.continue) {
                        var t = o.continue.split("/");
                        e = "/boost/payment?planType=".concat(t.pop())
                    }
                    o.redirect_url && (e = o.redirect_url), window.location.href = e
                }), (function(e) {
                    t.current && t.current.reset(), "bad_recaptcha" === e ? (g("v2"), y("Please check the reCAPTCHA checkbox to login.")) : y("unauthorized" === e ? "Incorrect email/password" : "An unexpected error occurred. Please try again.")
                }));
            Object(c.useEffect)((function() {
                $()
            }), []);
            var U, F = function(e, t) {
                    k(x(x({}, S), {}, r()({}, e, x(x({}, S[e]), t))))
                },
                $ = function() {
                    Object(L.a)("login", (function(e) {
                        F("recaptchaToken", {
                            value: e,
                            error: ""
                        })
                    }))
                };
            return s.a.createElement("div", {
                className: "login"
            }, s.a.createElement("div", {
                className: "logo-container",
                style: {
                    marginBottom: "48px"
                }
            }, s.a.createElement("img", {
                className: "logo",
                src: "https://static.u.gg/assets/ugg/logo/ugg-logo.svg",
                onClick: function() {
                    return n.push("/")
                }
            })), s.a.createElement("div", {
                className: "white-bold",
                style: {
                    marginBottom: "12px"
                }
            }, "Welcome back to U.GG"), s.a.createElement("div", {
                className: "basic-text"
            }, " New here? ", s.a.createElement(u.b, {
                to: (U = [], o.continue && U.push("continue=".concat(o.continue)), o.redirect_url && U.push("redirect_url=".concat(o.redirect_url)), {
                    pathname: "/signup",
                    search: a
                })
            }, s.a.createElement("span", null, "Create an account"))), s.a.createElement("form", {
                onSubmit: function(e) {
                    return e.preventDefault()
                },
                className: "login_form"
            }, s.a.createElement(N.a, {
                value: R.value,
                error: R.error,
                onChange: function(e) {
                    return F("email", {
                        value: e.target.value
                    })
                },
                placeholder: "Email",
                type: "email",
                tabIndex: 1e3,
                autoFocus: !0,
                style: {
                    marginBottom: 30
                },
                label: "Email"
            }), s.a.createElement(N.a, {
                value: M.value,
                error: M.error,
                onChange: function(e) {
                    return F("password", {
                        value: e.target.value
                    })
                },
                placeholder: "Password",
                type: "password",
                tabIndex: 1e3,
                style: {
                    marginBottom: 0
                },
                label: "Password",
                rightLabel: "Forgot Password?",
                rightLabelLink: "recover-account"
            }), s.a.createElement("div", {
                style: {
                    marginTop: 28,
                    marginBottom: 28
                }
            }, s.a.createElement(_.a, {
                className: "keep-me-logged-in",
                checkboxId: "keep-me-logged-in",
                isChecked: G.value,
                onChange: function(e) {
                    return F("persistLogin", {
                        value: e.target.checked
                    })
                },
                label: "Keep me logged in"
            })), b && s.a.createElement("div", {
                className: "login-error"
            }, b), "v2" === f && s.a.createElement("div", {
                style: {
                    marginTop: "20px"
                }
            }, s.a.createElement(T.a, {
                setRef: t,
                error: D.error,
                onVerify: function(e) {
                    return F("recaptchaToken", {
                        value: C.recaptchaBypass || e
                    })
                },
                onExpire: function(e) {
                    return F("recaptchaToken", {
                        value: ""
                    })
                }
            })), s.a.createElement(I.a, {
                className: "login-submit btn-light-blue",
                label: "Login",
                isLoading: E,
                onClick: function(e) {
                    var t = function() {
                        var e = {},
                            t = !1;

                        function n(n, a) {
                            return !0 === a && (t = !0), Object.assign(e, n)
                        }
                        return void 0 !== R.value && (e = 0 === R.value.trim().length ? n({
                            email: x(x({}, R), {}, {
                                error: "Missing email"
                            })
                        }, !0) : n({
                            email: x(x({}, R), {}, {
                                error: ""
                            })
                        })), e = 0 === M.value.trim().length ? n({
                            password: x(x({}, M), {}, {
                                error: "Missing password"
                            })
                        }, !0) : n({
                            password: x(x({}, M), {}, {
                                error: ""
                            })
                        }), "v2" === f && (e = D.value ? n({
                            recaptchaToken: x(x({}, D), {}, {
                                error: ""
                            })
                        }) : n({
                            recaptchaToken: x(x({}, D), {}, {
                                error: "Recaptcha verification required"
                            })
                        }, !0)), {
                            form: e,
                            error: t
                        }
                    }();
                    k(x(x({}, S), t.form)), t.error || (y(""), q())
                },
                bForceSubmitOnEnter: !0
            })))
        }
    },
    278: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        }));
        var a = n(573),
            r = n(185);

        function o(e, t) {
            var n = t || "default";
            window && window.dataLayer && window.dataLayer.push({
                event: "search",
                category: "search-bar",
                searchQuery: e,
                searchBarType: n
            })
        }
        var i = {
            shouldSort: !0,
            includeScore: !0,
            keys: ["key"]
        };

        function c() {
            var e = Object(r.b)().data;
            return function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                if (o(t, n), e) {
                    var r = new a.a(e, i),
                        c = r.search(t && t.trim() || "");
                    return c
                }
                return []
            }
        }
    },
    28: function(e, t, n) {
        "use strict";
        n.d(t, "e", (function() {
            return m
        })), n.d(t, "d", (function() {
            return d
        })), n.d(t, "g", (function() {
            return p
        })), n.d(t, "b", (function() {
            return f
        })), n.d(t, "c", (function() {
            return g
        })), n.d(t, "a", (function() {
            return h
        })), n.d(t, "f", (function() {
            return v
        }));
        var a = n(1),
            r = n.n(a),
            o = n(4),
            i = n(0),
            c = n(575),
            s = n(10),
            l = n(18),
            u = n(17);

        function m() {
            var e = Object(u.h)().search.substring(1);
            return Object(l.I)(e)
        }

        function d(e) {
            var t = Object(i.useRef)();
            return Object(i.useEffect)((function() {
                t.current = e
            })), t.current
        }
        var p = function() {
            var e = Object(s.useGlobal)("expandedSideNav"),
                t = r()(e, 2),
                n = t[0],
                a = t[1];
            return [n, function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.saveToggle;
                !0 === n && (e ? localStorage.setItem("TOGGLE_AND_SAVE_SIDE_NAV_KEY", "true") : localStorage.setItem("TOGGLE_AND_SAVE_SIDE_NAV_KEY", "false")), a(e)
            }]
        };

        function f() {
            var e = Object(s.useGlobal)("responsive"),
                t = r()(e, 1)[0],
                n = p(),
                a = r()(n, 2),
                o = a[0],
                c = a[1],
                l = ["MOBILE_SMALL", "MOBILE_MEDIUM", "MOBILE_LARGE"];
            return Object(i.useCallback)((function() {
                l.includes(t) && c(!o)
            }), [t, o])
        }
        var g = function() {
                var e = Object(s.useGlobal)("permissions"),
                    t = r()(e, 2),
                    n = t[0],
                    a = t[1];
                return [n, function(e) {
                    o.window && (localStorage.setItem("UGG_PERMISSIONS_STORAGE_KEY_V5", JSON.stringify(e)), localStorage.setItem("UGG_HAS_SET_CONSENT_STORAGE_STORAGE_KEY_V5", "set")), a(e)
                }]
            },
            h = "down",
            v = function(e, t) {
                var n = t.disable,
                    a = void 0 !== n && n,
                    l = t.preventBounce,
                    u = void 0 !== l && l,
                    m = t.throttleTime,
                    d = void 0 === m ? 500 : m,
                    p = Object(s.useState)({
                        x: 0,
                        y: 0,
                        direction: "up",
                        max: 0
                    }),
                    f = r()(p, 2),
                    g = f[0],
                    v = f[1],
                    b = (null == e ? void 0 : e.current) || o.window,
                    y = function(e) {
                        return e.currentTarget === o.window ? e.currentTarget.document.scrollingElement : e.currentTarget
                    },
                    O = Object(i.useCallback)(Object(c.throttle)((function(e) {
                        if (e.target) {
                            var t = y(e),
                                n = t.scrollTop;
                            v((function(e) {
                                return {
                                    x: t.scrollLeft,
                                    y: n,
                                    direction: e.y < n ? h : "up",
                                    max: t.scrollTopMax
                                }
                            }))
                        }
                    }), d), []),
                    E = function(e) {
                        var t = y(e),
                            n = t.scrollTop,
                            a = t.scrollHeight,
                            r = t.clientHeight;
                        n <= 0 ? b.scrollTo(0, 1) : Math.ceil(a - n) <= r && b.scrollTo(0, a - r)
                    };
                return Object(i.useEffect)((function() {
                    if (b) {
                        var e = [];
                        return a || (b.addEventListener("scroll", O), e.push({
                                event: "scroll",
                                action: O
                            })), u && (b.addEventListener("touchstart", E), e.push({
                                event: "touchstart",
                                preventBounceHandler: E
                            })),
                            function() {
                                e.forEach((function(e) {
                                    var t = e.event,
                                        n = e.action;
                                    b.removeEventListener(t, n)
                                }))
                            }
                    }
                }), [e, a, u]), g
            }
    },
    283: function(e, t, n) {
        "use strict";
        n.d(t, "f", (function() {
            return v
        })), n.d(t, "c", (function() {
            return b
        })), n.d(t, "b", (function() {
            return y
        })), n.d(t, "a", (function() {
            return O
        })), n.d(t, "e", (function() {
            return E
        })), n.d(t, "d", (function() {
            return w
        }));
        n(0);
        var a = n(28),
            r = n(25),
            o = n(87),
            i = n(146),
            c = n(141),
            s = n(393),
            l = n(11),
            u = n.n(l),
            m = n(1),
            d = n.n(m),
            p = n(274);

        function f(e) {
            var t, n, a = d()(e, 3),
                r = a[0],
                o = (a[1], a[2]),
                i = Object.keys(r);
            return i.forEach((function(e) {
                r[e] = r[e].map((function(e) {
                    var a;
                    1 === e[1] && 5 === e[5] || 1 === e[1] && 4 === e[5] ? (t = 2, n = 1) : (t = 1, n = 2);
                    var r = (a = {}, u()(a, "duo_".concat(t), e[0]), u()(a, "duo_".concat(t, "_role"), e[1]), u()(a, "duo_".concat(t, "_wins"), e[2]), u()(a, "duo_".concat(t, "_matches"), e[3]), u()(a, "duo_".concat(n), e[4]), u()(a, "duo_".concat(n, "_role"), e[5]), u()(a, "duo_".concat(n, "_wins"), e[6]), u()(a, "duo_".concat(n, "_matches"), e[7]), u()(a, "duo_combined_wins", e[8]), u()(a, "duo_combined_matches", e[9]), u()(a, "duo_bans", e[10]), a),
                        i = r.duo_1,
                        c = r.duo_1_role,
                        s = r.duo_1_wins,
                        l = r.duo_1_matches,
                        m = r.duo_2,
                        d = r.duo_2_role,
                        p = r.duo_2_wins,
                        f = r.duo_2_matches,
                        g = r.duo_combined_wins,
                        h = r.duo_combined_matches,
                        v = r.duo_bans;
                    r.duo_1_link = {
                        championId: i,
                        role: c
                    }, r.duo_2_link = {
                        championId: m,
                        role: d
                    }, r.duo_1_winrate = s / l * 100, r.duo_2_winrate = p / f * 100, r.duo_combined_winrate = g / h * 100, r.duo_combined_banrate = v / o * 100, r.duo_combined_pickrate = h / o * 100, r.plus_minus_winrate = r.duo_combined_winrate - Math.sqrt(r.duo_1_winrate * r.duo_2_winrate);
                    var b = r.duo_combined_banrate / 100 * ((r.duo_combined_winrate * (1 + r.plus_minus_winrate) / 100 + .55) / 2) + r.duo_combined_pickrate / 100 * (r.duo_combined_winrate * (1 + r.plus_minus_winrate) / 100) + .5 * (1 - r.duo_combined_banrate / 100 - r.duo_combined_pickrate / 100);
                    return r.effective_winrate = 100 * b, r
                }))
            })), i.forEach((function(e) {
                var t = r[e].map((function(e) {
                        return e.effective_winrate
                    })),
                    n = Object(p.a)(t);
                r[e].forEach((function(e) {
                    e.stdevs = (e.effective_winrate - n.mean) / n.stdev
                })), r[e].sort((function(e, t) {
                    return t.duo_combined_winrate - e.duo_combined_winrate
                }))
            })), e
        }
        var g = n(231),
            h = n(232);

        function v() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.customParams,
                n = e.ssr,
                o = e.skip,
                l = Object(a.e)(),
                u = Object(i.b)(),
                m = u({
                    queryParams: t || l,
                    page: "tier-list",
                    keepDefaultParams: !0
                }),
                d = Object(c.d)(m);
            return Object(r.b)(d, {
                skip: o,
                ssr: n,
                onCompleted: function(e, t) {
                    return Object(s.a)(t)
                }
            })
        }

        function b() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.ssr,
                n = e.skip,
                o = Object(a.e)(),
                s = Object(i.b)(),
                l = s({
                    queryParams: o,
                    page: "duo-tier-list",
                    keepDefaultParams: !0
                }),
                u = Object(c.c)(l);
            return Object(r.b)(u, {
                skip: n,
                ssr: t,
                onCompleted: function(e, t) {
                    return f(t)
                }
            })
        }

        function y() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.ssr,
                n = e.skip,
                o = Object(a.e)(),
                s = Object(i.b)(),
                l = s({
                    queryParams: o,
                    page: "combat",
                    keepDefaultParams: !0
                }),
                u = Object(c.b)(l);
            return Object(r.b)(u, {
                skip: n,
                ssr: t,
                onCompleted: function(e, t) {
                    return Object(g.a)(t)
                }
            })
        }

        function O(e) {
            var t = Object(i.b)()({
                    queryParams: e,
                    page: "combat",
                    keepDefaultParams: !0
                }),
                n = Object(c.b)(t);
            return function() {
                return Object(o.a)(n)
            }
        }

        function E() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.ssr,
                n = e.skip,
                o = Object(a.e)(),
                s = Object(i.b)(),
                l = s({
                    queryParams: o,
                    page: "objectives",
                    keepDefaultParams: !0
                }),
                u = Object(c.a)(l);
            return Object(r.b)(u, {
                skip: n,
                ssr: t,
                onCompleted: function(e, t) {
                    return Object(h.a)(t)
                }
            })
        }

        function w(e) {
            var t = Object(i.b)()({
                    queryParams: e,
                    page: "objectives",
                    keepDefaultParams: !0
                }),
                n = Object(c.a)(t);
            return function() {
                return Object(o.a)(n)
            }
        }
    },
    284: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n.n(a),
            o = n(4),
            i = n(0),
            c = n.n(i),
            s = n(10),
            l = n(17),
            u = n(145),
            m = n(43),
            d = n(570),
            p = n.n(d),
            f = n(571),
            g = n.n(f),
            h = n(127),
            v = n(44),
            b = n.n(v),
            y = n(278),
            O = n(2),
            E = n(416),
            w = n.n(E),
            j = n(167),
            N = n(185),
            S = (n(356), n(126)),
            k = n(103),
            _ = (n(605), n(15));

        function T(e) {
            return e.displayName
        }

        function I(e) {
            return c.a.createElement("strong", null, e.title)
        }

        function P(e) {
            return e.pages
        }

        function A() {
            if (o.window) {
                var e = localStorage.getItem("recentlySearched");
                if (null !== e) return [{
                    title: "Recently Searched",
                    pages: JSON.parse(e)
                }]
            }
            return []
        }
        t.a = function(e) {
            var t, n, a, d, f, v = Object(l.g)(),
                E = Object(l.h)(),
                L = Object(i.useRef)(),
                C = e.onSearchAmplitudeLogging,
                R = e.goToLiveGame,
                x = Object(i.useRef)(!1),
                M = Object(i.useState)(!1),
                D = r()(M, 2),
                G = D[0],
                B = D[1],
                q = Object(i.useState)(!1),
                U = r()(q, 2),
                F = U[0],
                $ = U[1],
                z = Object(i.useState)(""),
                W = r()(z, 2),
                V = W[0],
                H = W[1],
                K = Object(i.useState)(A()),
                J = r()(K, 2),
                Y = J[0],
                Q = J[1],
                Z = Object(i.useState)(null),
                X = r()(Z, 2),
                ee = X[0],
                te = X[1],
                ne = Object(i.useState)(void 0),
                ae = r()(ne, 2),
                re = ae[0],
                oe = ae[1],
                ie = Object(i.useState)(void 0),
                ce = r()(ie, 2),
                se = ce[0],
                le = ce[1],
                ue = Object(i.useState)(void 0),
                me = r()(ue, 2),
                de = me[0],
                pe = me[1],
                fe = Object(i.useState)(!1),
                ge = r()(fe, 2),
                he = ge[0],
                ve = ge[1],
                be = Object(i.useState)(!1),
                ye = r()(be, 2),
                Oe = ye[0],
                Ee = ye[1],
                we = Object(i.useState)(!1),
                je = r()(we, 2),
                Ne = je[0],
                Se = je[1],
                ke = Object(s.useGlobal)("clientRegion"),
                _e = r()(ke, 1)[0],
                Te = Object(u.a)(_.v).data,
                Ie = (Te && Te.getState || {}).filterDefaults,
                Pe = Object(i.useMemo)((function() {
                    return Object(S.b)(Ie)
                }), [Ie]),
                Ae = Object(k.d)(_e, V, null, null, null),
                Le = r()(Ae, 2),
                Ce = Le[0],
                Re = Le[1],
                xe = Re.loading,
                Me = Re.data,
                De = Re.error,
                Ge = e.autoFocus,
                Be = e.isLanding,
                qe = e.animate,
                Ue = e.placeholder,
                Fe = e.materialDesign,
                $e = e.isMasthead,
                ze = e.forceMastheadRegion,
                We = e.noDropdown,
                Ve = e.defaultValue,
                He = e.multisearchOnly,
                Ke = e.regionMinSize ? e.regionMinSize : "TABLET",
                Je = Object(y.a)(),
                Ye = (t = Object(N.a)(), n = t.data, a = t.loading, d = t.error, function(e, t) {
                    if (!n || a || d) return [];
                    var r = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                    if ("" === r) return [];
                    var o = new RegExp("^" + r, "i"),
                        i = n.map((function(e) {
                            return {
                                title: e.title,
                                pages: w()(e.pages.filter((function(e) {
                                    return o.test(e.key)
                                })), (function(e) {
                                    return e.displayName
                                }))
                            }
                        })).filter((function(e) {
                            return e.pages.length > 0
                        })),
                        c = [{
                            title: "Summoner Profile",
                            pages: [{
                                key: "summonerProfile",
                                displayName: e,
                                url: "/lol/profile/".concat(t, "/").concat(e, "/overview"),
                                regionId: t,
                                section: "summoner"
                            }]
                        }];
                    return i.length > 0 && (c.unshift(i.shift()), c = c.concat(i)), c
                }),
                Qe = (f = Object(O.n)().getChampionImgFromSprite, function(e) {
                    var t, n;
                    return t = "summoner" === e.section ? c.a.createElement("img", {
                        src: Object(j.b)(e.regionId, !0)
                    }) : f(e.champId, {
                        size: 24
                    }), "pro-build" === e.section ? n = c.a.createElement("img", {
                        className: "page-type",
                        src: "https://static.u.gg/assets/ugg/icons/search_probuilds.svg",
                        alt: "Pro Build"
                    }) : "counters" === e.section && (n = c.a.createElement("img", {
                        className: "page-type",
                        src: "https://static.u.gg/assets/ugg/icons/search_counters.svg",
                        alt: "Counters"
                    })), c.a.createElement("div", {
                        className: "render-suggestion"
                    }, c.a.createElement("div", null, n, t), c.a.createElement("div", {
                        className: "suggest-text"
                    }, e.displayName))
                }),
                Ze = function(e) {
                    var t = e.split(",").map((function(e) {
                        return e.trim()
                    })).filter((function(e) {
                        return "" !== e
                    }));
                    if (t.length > 1 || He) Se(!0), Ee(!0);
                    else {
                        if (Se(!1), "" === e.trim()) return;
                        var n = t[0],
                            a = Je(n),
                            r = a.filter((function(e) {
                                return !e.item.isNickname
                            })),
                            i = a.length > 0 && Math.round(1e6 * a[0].score) / 1e6 == 0,
                            c = r.length > 0 && r[0],
                            s = i && a[0];
                        if (c) {
                            var l = c.item.key.toLowerCase(),
                                u = n.toLowerCase();
                            0 === l.indexOf(u) && !0 === c.item.isDefaultPage && (s = c)
                        }
                        if (C && C(), s) {
                            if (function(e, t) {
                                    e.targetHref ? o.window && o.window.open(e.url) : e.url && (le(t), oe(e.url), E.pathname !== e.url && (o.window && o.window.scrollTo(0, 0), v.push({
                                        pathname: e.url,
                                        search: Pe || ""
                                    })))
                                }(s.item, n), o.window) {
                                var m = localStorage.getItem("recentlySearched"),
                                    d = s.item;
                                if (d.champId = d.id, null === m) localStorage.setItem("recentlySearched", JSON.stringify([d]));
                                else {
                                    var p = JSON.parse(m).filter((function(e) {
                                        return e.displayName !== s.item.displayName
                                    }));
                                    p.unshift(d), localStorage.setItem("recentlySearched", JSON.stringify(p.slice(0, 6)))
                                }
                            }
                        } else Ce(), pe(a), le(n), ve(!0)
                    }
                },
                Xe = Object(i.useCallback)((function(e) {
                    var t = L && L.current;
                    if (13 === e.which) {
                        var n = t && t.value;
                        if (!n && !Ne) return;
                        if (ee && ee.url) return ee.targetHref ? o.window && o.window.open(ee.url) : v.push({
                            pathname: ee.url,
                            search: Pe.searchParams || ""
                        });
                        Ze(n), t.blur()
                    }
                }), [Ze, ee]);
            Object(i.useEffect)((function() {
                B(!0), Ve && H(Ve)
            }), []), Object(i.useEffect)((function() {
                if (G && L && L.current) return L.current.addEventListener("keypress", Xe),
                    function() {
                        L && L.current && L.current.removeEventListener("keypress", Xe)
                    }
            }), [G, Xe]), Object(i.useEffect)((function() {
                if (F) {
                    var e = Ye(V, _e);
                    0 === V.trim().length && (e = A()), Q(e)
                }
            }), [F]), Object(i.useEffect)((function() {
                re && E.pathname !== re && V === se && (H(""), oe(void 0))
            }), [E.pathname, se, V]), Object(i.useEffect)((function() {
                if (Oe) {
                    Ee(!1);
                    var e = V.split(",").map((function(e) {
                            return e.trim()
                        })).filter((function(e) {
                            return "" !== e
                        })),
                        t = "summoners=".concat(e.join(","), "&region=").concat(_e);
                    if (o.window) return v.push({
                        pathname: "/multisearch",
                        search: t
                    })
                }
            }), [Oe]), Object(i.useEffect)((function() {
                if (!xe && he) {
                    ve(!1);
                    var e = "/lol/profile/".concat(_e, "/").concat(se.toLowerCase().trim(), "/overview");
                    if (R && (e = "/lol/profile/".concat(_e, "/").concat(se.toLowerCase().trim(), "/live-game")), De) return v.push({
                        pathname: e,
                        state: {
                            search: 404,
                            searchResults: de
                        }
                    });
                    if (!De) {
                        if (o.window) {
                            var t = localStorage.getItem("recentlySearched"),
                                n = Me.profileInit.playerInfo,
                                a = n.regionId,
                                r = n.summonerName,
                                i = {
                                    key: r.toLowerCase(),
                                    uniqId: "".concat(a, "_").concat(r).toLowerCase(),
                                    displayName: r,
                                    regionId: a,
                                    section: "summoner",
                                    url: R ? "/lol/profile/".concat(a, "/").concat(r.toLowerCase(), "/live-game") : "/lol/profile/".concat(a, "/").concat(r.toLowerCase(), "/overview")
                                };
                            if (null === t) localStorage.setItem("recentlySearched", JSON.stringify([i]));
                            else {
                                var c = JSON.parse(t).filter((function(e) {
                                    return e.uniqId !== "".concat(a, "_").concat(r).toLowerCase()
                                }));
                                c.unshift(i), localStorage.setItem("recentlySearched", JSON.stringify(c.slice(0, 6)))
                            }
                        }
                        return oe(e), v.push({
                            pathname: e
                        })
                    }
                }
            }), [xe]);
            var et = function(e) {
                Ze(V)
            };
            if (!G) return c.a.createElement("div", {
                className: "masthead-ugg-search-bar"
            }, c.a.createElement("div", {
                className: "react-autosuggest__container react-autosuggest__container_placeholder"
            }), c.a.createElement("div", {
                className: "autosuggest-button"
            }, c.a.createElement(b.a, {
                wrapperClassName: "react-svg",
                path: "https://static.u.gg/assets/ugg/icons/_ionicons_svg_ios-search.svg"
            })));
            var tt = {
                ref: L,
                placeholder: Ne ? "Name1, Name2, ..." : Ue || "Search Your Summoner",
                name: "query",
                value: V,
                onChange: function(e, t) {
                    var n = t.newValue;
                    "type" === t.method && (!F && $(!0), x.current = !0), H(n), se && le(void 0)
                },
                spellCheck: !1,
                id: "super-search-bar",
                onBlur: function(e, t) {
                    t.highlightedSuggestion;
                    x.current && !F && $(!0)
                },
                onClick: function(e) {
                    !F && $(!0), x.current = !0
                },
                autoFocus: Ge || !1
            };
            Be && 0 === V.length && (qe && g.a);
            var nt = We || Ne || He ? [] : Y,
                at = c.a.createElement(p.a, {
                    multiSection: !0,
                    suggestions: nt,
                    onSuggestionsFetchRequested: function(e) {
                        var t = e.value,
                            n = (e.reason, Ye(t, _e));
                        0 === t.trim().length && (n = A()), Q(n)
                    },
                    onSuggestionsClearRequested: function() {
                        Q([])
                    },
                    getSuggestionValue: T,
                    renderSuggestion: Qe,
                    renderSectionTitle: I,
                    getSectionSuggestions: P,
                    onSuggestionHighlighted: function(e) {
                        var t = e.suggestion;
                        te(t)
                    },
                    onSuggestionSelected: function(e, t) {
                        var n = t.suggestion,
                            a = t.suggestionValue,
                            r = t.method;
                        if (a && ("enter" === r || "click" === r)) {
                            if (n.targetHref) return o.window && o.window.open(n.url);
                            n.url ? v.push({
                                pathname: n.url,
                                search: Pe || ""
                            }) : Ze(a), L && L.current.blur()
                        }
                    },
                    shouldRenderSuggestions: function() {
                        return F
                    },
                    focusInputOnSuggestionClick: !1,
                    inputProps: tt
                });
            return $e ? c.a.createElement("div", {
                className: "masthead-ugg-search-bar"
            }, c.a.createElement(m.a, {
                min: "MOBILE_SMALL",
                max: "DESKTOP_LARGE"
            }, (function(e) {
                return c.a.createElement("div", {
                    className: e
                }, c.a.createElement(h.a, {
                    isMasthead: !0
                }))
            })), at, c.a.createElement("div", {
                className: "autosuggest-button",
                onClick: et
            }, c.a.createElement(b.a, {
                wrapperClassName: "react-svg",
                path: "https://static.u.gg/assets/ugg/icons/_ionicons_svg_ios-search.svg"
            })), (xe || he) && c.a.createElement("div", {
                className: "spinthatshit-loader"
            }, c.a.createElement("div", {
                className: "spinner"
            }))) : c.a.createElement("div", {
                className: "autosuggest-container ".concat(Fe ? "autosuggest-material" : "")
            }, c.a.createElement(m.a, {
                min: Ke,
                max: "DESKTOP_LARGE"
            }, (function(e) {
                return c.a.createElement("div", {
                    className: e
                }, c.a.createElement(h.a, {
                    forceMastheadRegion: ze
                }))
            })), at, c.a.createElement("div", {
                className: "autosuggest-button",
                onClick: et
            }, c.a.createElement(b.a, {
                wrapperClassName: "react-svg",
                path: "https://static.u.gg/assets/ugg/icons/_ionicons_svg_ios-search.svg"
            })))
        }
    },
    285: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return b
        }));
        var a = n(48),
            r = n.n(a),
            o = n(49),
            i = n.n(o),
            c = n(59),
            s = n.n(c),
            l = n(60),
            u = n.n(l),
            m = n(29),
            d = n.n(m),
            p = n(0),
            f = n.n(p),
            g = n(3),
            h = n.n(g);

        function v(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = d()(e);
                if (t) {
                    var r = d()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return u()(this, n)
            }
        }
        var b = function(e) {
            s()(n, e);
            var t = v(n);

            function n() {
                return r()(this, n), t.apply(this, arguments)
            }
            return i()(n, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.className,
                        n = e.checkboxId,
                        a = e.isChecked,
                        r = e.onChange,
                        o = e.label;
                    return f.a.createElement("div", {
                        className: "custom-checkbox ".concat(t)
                    }, f.a.createElement("div", {
                        className: "custom-checkbox_checkbox"
                    }, f.a.createElement("input", {
                        id: n,
                        type: "checkbox",
                        checked: a,
                        onChange: r
                    }), f.a.createElement("label", {
                        htmlFor: n
                    })), o && f.a.createElement("label", {
                        htmlFor: n,
                        className: "custom-checkbox_label"
                    }, o))
                }
            }]), n
        }(p.Component);
        b.propTypes = {
            checkboxId: h.a.string.isRequired,
            onChange: h.a.func.isRequired
        }, b.defaultProps = {
            className: ""
        }
    },
    286: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), a || (a = r.createElement("path", {
                fill: "#fff",
                d: "M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"
            })))
        }
        t.default = n.p + "static/svg/windows.svg"
    },
    356: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n.n(a),
            o = n(0),
            i = n.n(o),
            c = n(10),
            s = n(145),
            l = n(17),
            u = n(222),
            m = n(185),
            d = n(278),
            p = n(126),
            f = n(28),
            g = n(103),
            h = n(15);
        t.a = function(e) {
            var t = Object(l.g)(),
                n = Object(u.b)(),
                a = Object(d.a)(),
                v = Object(c.useGlobal)("clientRegion"),
                b = r()(v, 1)[0],
                y = Object(c.useGlobal)("loggingIn"),
                O = r()(y, 1)[0],
                E = Object(s.a)(h.v).data,
                w = (E && E.getState || {}).filterDefaults,
                j = Object(p.b)(w),
                N = Object(m.b)(),
                S = N.data,
                k = N.loading,
                _ = (N.error, Object(f.e)().query),
                T = decodeURIComponent(_).replace(new RegExp("\\+", "g"), " "),
                I = Object(g.d)(b, T, {}),
                P = r()(I, 2),
                A = P[0],
                L = P[1],
                C = L.data,
                R = L.loading,
                x = L.error;
            Object(o.useEffect)((function() {
                !0
            }), []), Object(o.useEffect)((function() {
                O || k || (S ? M(T) : t.replace({
                    pathname: "/"
                }))
            }), [O, S]), Object(o.useEffect)((function() {
                C ? t.replace({
                    pathname: "/lol/profile/".concat(b, "/").concat(T.toLowerCase().trim(), "/overview")
                }) : x && t.replace({
                    pathname: "/lol/profile/".concat(b, "/").concat(T.toLowerCase().trim(), "/overview"),
                    state: {
                        search: 404
                    }
                })
            }), [R]);
            var M = function(e) {
                if ("" === e.trim()) return t.replace({
                    pathname: "/"
                });
                var n = a(e),
                    r = n.filter((function(e) {
                        return !e.item.isNickname
                    })),
                    o = n.length > 0 && Math.round(1e6 * n[0].score) / 1e6 == 0,
                    i = r.length > 0 && r[0],
                    c = o && n[0];
                if (i) {
                    var s = i.item.key.toLowerCase(),
                        l = e.toLowerCase();
                    0 === s.indexOf(l) && !0 === i.item.isDefaultPage && (c = i)
                }
                c ? c.item.targetHref ? (window && window.open(c.item.url), t.replace({
                    pathname: "/"
                })) : t.replace({
                    pathname: c.item.url,
                    search: j || ""
                }) : A()
            };
            return i.a.createElement("div", {
                className: "open-search-redirect"
            }, n("open_search"), i.a.createElement("div", {
                className: "profile-loader-container"
            }, i.a.createElement("div", {
                className: "spinthatshit-loader"
            })))
        }
    },
    357: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.createElement("path", {
                fill: "#565691",
                d: "M10.133 5.867H5.867v4.266h4.266z"
            }), r.createElement("path", {
                fill: "#565691",
                d: "M0 0v14.75l2.828-2.829V2.828h9.094L14.75 0z"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M16 16V1.25L13.172 4.08v9.093H4.078L1.25 16z"
            }))))
        }
        t.default = n.p + "static/svg/roles/bot.svg"
    },
    358: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.createElement("path", {
                fill: "#7878B5",
                d: "M10.133 5.867H5.867v4.266h4.266z"
            }), r.createElement("path", {
                fill: "#7878B5",
                d: "M0 0v14.75l2.828-2.829V2.828h9.094L14.75 0z"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M16 16V1.25L13.172 4.08v9.093H4.078L1.25 16z"
            }))))
        }
        t.default = n.p + "static/svg/roles/bot-active.svg"
    },
    359: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.createElement("path", {
                fill: "#383864",
                d: "M10.133 5.867H5.867v4.266h4.266z"
            }), r.createElement("path", {
                fill: "#383864",
                d: "M0 0v14.75l2.828-2.829V2.828h9.094L14.75 0z"
            }), r.createElement("path", {
                fill: "#565691",
                d: "M16 16V1.25L13.172 4.08v9.093H4.078L1.25 16z"
            }))))
        }
        t.default = n.p + "static/svg/roles/bot-inactive.svg"
    },
    360: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("path", {
                d: "M8.43 5.67l1.703 8.616L8 16l-2.133-1.714L7.57 5.67 8 6.249l.43-.578zM16 3.404c-.304 2.498-4.119 2.261-4.119 2.261l1.75 2.315-2.81 1.13L9.6 5.234l1.857-1.83zm-11.457 0L6.4 5.233 5.18 9.11 2.368 7.98l1.75-2.316S.305 5.901 0 3.403h4.543zM9.998 0l.669 1.185L8 4.456 5.333 1.185 6.003 0h3.995z",
                fill: "#FFF",
                fillRule: "evenodd"
            })))
        }
        t.default = n.p + "static/svg/roles/support.svg"
    },
    361: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("path", {
                d: "M8.43 5.67l1.703 8.616L8 16l-2.133-1.714L7.57 5.67 8 6.249l.43-.578zM16 3.404c-.304 2.498-4.119 2.261-4.119 2.261l1.75 2.315-2.81 1.13L9.6 5.234l1.857-1.83zm-11.457 0L6.4 5.233 5.18 9.11 2.368 7.98l1.75-2.316S.305 5.901 0 3.403h4.543zM9.998 0l.669 1.185L8 4.456 5.333 1.185 6.003 0h3.995z",
                fill: "#FFF",
                fillRule: "evenodd"
            })))
        }
        t.default = n.p + "static/svg/roles/support-active.svg"
    },
    362: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("path", {
                d: "M8.43 5.67l1.703 8.616L8 16l-2.133-1.714L7.57 5.67 8 6.249l.43-.578zM16 3.404c-.304 2.498-4.119 2.261-4.119 2.261l1.75 2.315-2.81 1.13L9.6 5.234l1.857-1.83zm-11.457 0L6.4 5.233 5.18 9.11 2.368 7.98l1.75-2.316S.305 5.901 0 3.403h4.543zM9.998 0l.669 1.185L8 4.456 5.333 1.185 6.003 0h3.995z",
                fill: "#565691",
                fillRule: "evenodd"
            })))
        }
        t.default = n.p + "static/svg/roles/support-inactive.svg"
    },
    363: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.createElement("path", {
                fill: "#565691",
                d: "M5.867 10.133h4.266V5.867H5.867z"
            }), r.createElement("path", {
                fill: "#565691",
                d: "M16 16V1.25L13.172 4.08v9.093H4.078L1.25 16z"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M0 0v14.75l2.828-2.829V2.828h9.094L14.75 0z"
            }))))
        }
        t.default = n.p + "static/svg/roles/top.svg"
    },
    364: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.createElement("path", {
                fill: "#7878B5",
                d: "M5.867 10.133h4.266V5.867H5.867z"
            }), r.createElement("path", {
                fill: "#7878B5",
                d: "M16 16V1.25L13.172 4.08v9.093H4.078L1.25 16z"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M0 0v14.75l2.828-2.829V2.828h9.094L14.75 0z"
            }))))
        }
        t.default = n.p + "static/svg/roles/top-active.svg"
    },
    365: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.createElement("path", {
                fill: "#383864",
                d: "M5.867 10.133h4.266V5.867H5.867z"
            }), r.createElement("path", {
                fill: "#383864",
                d: "M16 16V1.25L13.172 4.08v9.093H4.078L1.25 16z"
            }), r.createElement("path", {
                fill: "#565691",
                d: "M0 0v14.75l2.828-2.829V2.828h9.094L14.75 0z"
            }))))
        }
        t.default = n.p + "static/svg/roles/top-inactive.svg"
    },
    366: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("path", {
                d: "M3.078 0s8.57 8.931 5.13 16c0 0-2.414-3.123-5.31-4.548 0 0 .482-4.22-2.898-7.014 0 0 4.587 1.973 5.553 5.041 0 0 1.086-4.383-2.475-9.479zM16 4s-3.44 3.068-2.837 6.85c0 0-2.414 1.424-2.836 2.3 0 0 .241-6.63 5.673-9.15zm-3.393-4s-2.656 4.603-2.414 8c0 0-.543.767-.725 1.425 0 0-.663-2.52-1.207-3.124l.016-.03c.202-.386 2.32-4.395 4.33-6.271z",
                fill: "#FFF",
                fillRule: "evenodd"
            })))
        }
        t.default = n.p + "static/svg/roles/jungle.svg"
    },
    367: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("path", {
                d: "M3.078 0s8.57 8.931 5.13 16c0 0-2.414-3.123-5.31-4.548 0 0 .482-4.22-2.898-7.014 0 0 4.587 1.973 5.553 5.041 0 0 1.086-4.383-2.475-9.479zM16 4s-3.44 3.068-2.837 6.85c0 0-2.414 1.424-2.836 2.3 0 0 .241-6.63 5.673-9.15zm-3.393-4s-2.656 4.603-2.414 8c0 0-.543.767-.725 1.425 0 0-.663-2.52-1.207-3.124l.016-.03c.202-.386 2.32-4.395 4.33-6.271z",
                fill: "#FFF",
                fillRule: "evenodd"
            })))
        }
        t.default = n.p + "static/svg/roles/jungle-active.svg"
    },
    368: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("path", {
                d: "M3.078 0s8.57 8.931 5.13 16c0 0-2.414-3.123-5.31-4.548 0 0 .482-4.22-2.898-7.014 0 0 4.587 1.973 5.553 5.041 0 0 1.086-4.383-2.475-9.479zM16 4s-3.44 3.068-2.837 6.85c0 0-2.414 1.424-2.836 2.3 0 0 .241-6.63 5.673-9.15zm-3.393-4s-2.656 4.603-2.414 8c0 0-.543.767-.725 1.425 0 0-.663-2.52-1.207-3.124l.016-.03c.202-.386 2.32-4.395 4.33-6.271z",
                fill: "#565691",
                fillRule: "evenodd"
            })))
        }
        t.default = n.p + "static/svg/roles/jungle-inactive.svg"
    },
    369: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.createElement("path", {
                fill: "#565691",
                d: "M8.305 2.828L11.133 0H0v11.133l2.828-2.828V2.828zM7.695 13.172L4.867 16H16V4.867l-2.828 2.828v5.477z"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M13.371 0L0 13.371v2.63h2.629L16 2.628V0z"
            }))))
        }
        t.default = n.p + "static/svg/roles/mid.svg"
    },
    370: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.createElement("path", {
                fill: "#7878B5",
                d: "M8.305 2.828L11.133 0H0v11.133l2.828-2.828V2.828zM7.695 13.172L4.867 16H16V4.867l-2.828 2.828v5.477z"
            }), r.createElement("path", {
                fill: "#FFF",
                d: "M13.371 0L0 13.371v2.63h2.629L16 2.628V0z"
            }))))
        }
        t.default = n.p + "static/svg/roles/mid-active.svg"
    },
    371: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.createElement("path", {
                fill: "#383864",
                d: "M8.305 2.828L11.133 0H0v11.133l2.828-2.828V2.828zM7.695 13.172L4.867 16H16V4.867l-2.828 2.828v5.477z"
            }), r.createElement("path", {
                fill: "#565691",
                d: "M13.371 0L0 13.371v2.63h2.629L16 2.628V0z"
            }))))
        }
        t.default = n.p + "static/svg/roles/mid-inactive.svg"
    },
    372: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("path", {
                d: "M16 1.25V16H1.25l2.828-2.828h9.094V4.079L16 1.25zM14.75 0l-2.828 2.828H2.828v9.093L0 14.75V0h14.75zm-4.617 5.867v4.266H5.867V5.867h4.266z",
                fill: "#FFF",
                fillRule: "evenodd"
            })))
        }
        t.default = n.p + "static/svg/roles/all.svg"
    },
    373: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("path", {
                d: "M16 1.25V16H1.25l2.828-2.828h9.094V4.079L16 1.25zM14.75 0l-2.828 2.828H2.828v9.093L0 14.75V0h14.75zm-4.617 5.867v4.266H5.867V5.867h4.266z",
                fill: "#565691",
                fillRule: "evenodd"
            })))
        }
        t.default = n.p + "static/svg/roles/all-inactive.svg"
    },
    374: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), a || (a = r.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.createElement("path", {
                fill: "#FFF",
                d: "M16.714 0L0 16.714V20h3.286L20 3.286V0z"
            }), r.createElement("path", {
                d: "M12.965 1.25L1.25 12.965v-2.5l9.214-9.215h2.501zM18.75 7.036v2.5L9.536 18.75h-2.5L18.75 7.035z",
                fill: "#7878B5"
            }))))
        }
        t.default = n.p + "static/svg/roles/aram.svg"
    },
    375: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                viewBox: "0 0 20 20",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), a || (a = r.createElement("g", {
                fill: "none",
                fillRule: "evenodd"
            }, r.createElement("path", {
                fill: "#565691",
                d: "M16.714 0L0 16.714V20h3.286L20 3.286V0z"
            }), r.createElement("path", {
                d: "M12.965 1.25L1.25 12.965v-2.5l9.214-9.215h2.501zM18.75 7.036v2.5L9.536 18.75h-2.5L18.75 7.035z",
                fill: "#383864"
            }))))
        }
        t.default = n.p + "static/svg/roles/aram-inactive.svg"
    },
    377: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 14 15"
            }, e), a || (a = r.createElement("path", {
                fill: "#fff",
                d: "M5.334 13.006c0 .91.744 1.647 1.663 1.647.918 0 1.663-.737 1.663-1.647zM2.332 6.355c0-2.59 2.088-4.69 4.665-4.69 2.576 0 4.665 2.1 4.665 4.69v4.65h-9.33zm11.331 4.64h-.666V6.35c0-3.325-2.687-6.02-6-6.02-3.314 0-6 2.695-6 6.02v4.645H.33v1.333h13.333z"
            })))
        }
        t.default = n.p + "static/svg/icon-bell.svg"
    },
    379: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), a || (a = r.createElement("path", {
                d: "M.5 2.566l6.147-.847v5.94H.5V2.565zm0 10.868l6.147.848V8.415H.5v5.02zm6.823.938L15.5 15.5V8.415H7.323v5.957zm0-12.744v6.03H15.5V.5L7.323 1.628z",
                fill: "#fff"
            })))
        }
        t.default = n.p + "static/svg/windows-icon.svg"
    },
    387: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return _
        }));
        var a = n(398),
            r = n.n(a),
            o = n(48),
            i = n.n(o),
            c = n(49),
            s = n.n(c),
            l = n(80),
            u = n.n(l),
            m = n(59),
            d = n.n(m),
            p = n(60),
            f = n.n(p),
            g = n(29),
            h = n.n(g),
            v = n(11),
            b = n.n(v),
            y = n(0),
            O = n.n(y),
            E = (n(3), n(395)),
            w = n(391),
            j = n(93);

        function N(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function S(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? N(Object(n), !0).forEach((function(t) {
                    b()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function k(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = h()(e);
                if (t) {
                    var r = h()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return f()(this, n)
            }
        }
        var _ = function(e) {
            d()(n, e);
            var t = k(n);

            function n(e) {
                var a;
                return i()(this, n), a = t.call(this, e), b()(u()(a), "onOptionChange", (function(e) {
                    a.setState({
                        optionToApply: e
                    })
                })), b()(u()(a), "onApplyChange", (function(e) {
                    var t = a.props.onChange;
                    a.setState({
                        optionToApply: null,
                        selectedOption: e,
                        isModalOpen: !1
                    }), t(e)
                })), b()(u()(a), "handleChange", (function(e) {
                    a.onApplyChange(e)
                })), b()(u()(a), "findElement", (function(e, t) {
                    var n = null;
                    return t && t.map((function(t) {
                        t.value == e && (n = t)
                    })), n
                })), b()(u()(a), "closeDropdown", (function(e) {
                    a.closeMenuRef && a.closeMenuRef.select.blur()
                })), b()(u()(a), "closeModal", (function(e) {
                    a.setState({
                        optionToApply: null
                    })
                })), a.state = {
                    optionToApply: null,
                    selectedOption: null,
                    isModalOpen: !1
                }, a.findElement = a.findElement.bind(u()(a)), a.closeMenuRef = O.a.createRef(), a
            }
            return s()(n, [{
                key: "render",
                value: function() {
                    var e = this,
                        t = this.state,
                        n = t.optionToApply,
                        a = (t.isModalOpen, this.props),
                        o = a.title,
                        i = a.group,
                        c = a.className,
                        s = a.options,
                        l = a.placeholder,
                        u = (a.onChange, a.value),
                        m = a.tabIndex,
                        d = a.isSearchable,
                        p = a.maxHeight,
                        f = a.width,
                        g = a.formatOptionLabel,
                        h = a.onMenuClose,
                        v = a.isMobile,
                        b = a.isDisabled,
                        N = a.error,
                        k = a.customButton,
                        _ = a.fontSize,
                        T = this.findElement(u, s),
                        I = {
                            clearIndicator: function() {},
                            container: function() {},
                            control: function() {},
                            dropdownIndicator: function() {},
                            group: function() {},
                            groupHeading: function() {},
                            indicatorsContainer: function() {},
                            indicatorSeparator: function() {},
                            input: function() {
                                return {
                                    fontSize: _
                                }
                            },
                            loadingIndicator: function() {},
                            loadingMessage: function() {},
                            menuPortal: function() {},
                            multiValue: function() {},
                            multiValueLabel: function() {},
                            multiValueRemove: function() {},
                            noOptionsMessage: function() {},
                            option: function() {
                                return {
                                    fontSize: _
                                }
                            },
                            placeholder: function() {
                                return {
                                    fontSize: _
                                }
                            },
                            singleValue: function() {
                                return {
                                    fontSize: _
                                }
                            },
                            valueContainer: function() {
                                return {
                                    fontSize: _
                                }
                            },
                            menu: function(e) {
                                return {
                                    maxHeight: p || 500,
                                    zIndex: 10,
                                    width: "auto",
                                    borderRadius: "4px",
                                    backgroundColor: "#25254b",
                                    overflow: "hidden",
                                    position: "absolute",
                                    top: "100%",
                                    marginBottom: "8px",
                                    marginTop: "8px",
                                    cursor: "pointer"
                                }
                            },
                            menuList: function(e) {
                                return {
                                    width: f,
                                    minWidth: f,
                                    zIndex: 10,
                                    fontFamily: "Helvetica, sans-serif",
                                    maxHeight: p || 500,
                                    overflowY: "auto",
                                    paddingTop: "0px",
                                    paddingBottom: "0px"
                                }
                            }
                        };
                    N && (Object.assign(I, {
                        control: function(e, t) {
                            return S(S({}, e), {}, {
                                borderColor: "red !important"
                            })
                        }
                    }), r()("customStyles"));
                    var P = O.a.createElement(y.Fragment, null, v && O.a.createElement("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            zIndex: 1
                        }
                    }), O.a.createElement(E.a, {
                        placeholder: l || "Select",
                        formatOptionLabel: g,
                        components: {
                            DropdownIndicator: function() {
                                return O.a.createElement(j.ReactComponent, {
                                    className: "custom-indicator"
                                })
                            }
                        },
                        styles: I,
                        className: "default-select ".concat(c),
                        classNamePrefix: "default-select",
                        options: s,
                        onChange: this.handleChange,
                        value: T,
                        isSearchable: !!d,
                        defaultValue: null,
                        isClearable: !1,
                        onMenuClose: h,
                        isDisabled: v || b,
                        tabIndex: m,
                        ref: function(t) {
                            return e.closeMenuRef = t
                        }
                    }));
                    return O.a.createElement("div", {
                        style: {
                            position: "relative"
                        }
                    }, v ? O.a.createElement(w.a, {
                        button: k || P,
                        title: o,
                        group: i,
                        options: s,
                        curValue: n || T,
                        onChange: this.onOptionChange,
                        onApply: this.onApplyChange,
                        onCancel: this.closeModal
                    }) : P)
                }
            }]), n
        }(y.Component)
    },
    388: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n.n(a),
            o = n(4),
            i = n(0),
            c = n.n(i),
            s = n(14),
            l = n.n(s),
            u = n(79),
            m = c.a.forwardRef((function(e, t) {
                var n = Object(i.useRef)(),
                    a = e.style,
                    r = e.classNames,
                    s = e.toggleModalOpen,
                    l = e.onCancel,
                    u = e.onApply,
                    m = e.bDisableFooter;
                Object(i.useEffect)((function() {
                    var e = function(e) {
                        n && n.current && null !== e.target && !n.current.contains(e.target) && p()
                    };
                    if (o.window) return document.addEventListener("click", e, !0),
                        function() {
                            return document.removeEventListener("click", e, !0)
                        }
                }), []);
                var d = function(e) {
                        l && l(), s(!1)
                    },
                    p = function() {
                        u && u(), s(!1)
                    };
                Object(i.useImperativeHandle)(t, (function() {
                    return {
                        onCancel: d,
                        onApply: p
                    }
                }));
                var f = "select_modal__modal-window";
                return r && (f += " ".concat(r)), c.a.createElement("div", {
                    className: f,
                    ref: n,
                    style: a
                }, c.a.createElement("div", null, e.children), !m && c.a.createElement("div", {
                    className: "selection-footer"
                }, c.a.createElement("div", {
                    className: "clear",
                    onClick: d,
                    style: {
                        fontWeight: "normal"
                    }
                }, "Cancel"), c.a.createElement("div", {
                    className: "apply",
                    onClick: p
                }, "APPLY")))
            })),
            d = c.a.forwardRef((function(e, t) {
                var n = Object(i.useRef)(),
                    a = Object(i.useState)(!1),
                    o = r()(a, 2),
                    s = o[0],
                    d = o[1],
                    p = e.dataTip,
                    f = e.disableTooltip,
                    g = e.buttonClassName,
                    h = e.buttonStyle,
                    v = e.button,
                    b = (e.subtext, e.modalClassNames),
                    y = e.modalStyle,
                    O = e.onApply,
                    E = e.onCancel,
                    w = e.bDisableFooter,
                    j = e.toggleOpen,
                    N = e.bModalOpen,
                    S = (e.isFixed, function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !s;
                        e && n.current.forceClose(), j ? j() : d(e)
                    }),
                    k = void 0 !== N && !1 !== N || s,
                    _ = l()({
                        "modal-filter": !0,
                        "modal-filter__open": k
                    });
                return c.a.createElement("div", {
                    className: _
                }, c.a.createElement("div", {
                    className: "select_modal"
                }, v && c.a.createElement(u.f, {
                    ref: n,
                    tooltipInfo: p,
                    disableTooltip: f
                }, c.a.createElement("div", {
                    className: "select_modal__toggle ".concat(g),
                    onClick: function() {
                        return S()
                    },
                    style: h
                }, v)), k && c.a.createElement(m, {
                    ref: t,
                    toggleModalOpen: S,
                    classNames: b,
                    style: y,
                    onApply: O,
                    onCancel: E,
                    bDisableFooter: w
                }, e.children)))
            }));
        t.a = d
    },
    389: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return m
        }));
        var a = n(1),
            r = n.n(a),
            o = n(4),
            i = n.n(o),
            c = (n(0), n(10)),
            s = n(1155),
            l = n(82),
            u = n(18),
            m = function() {
                var e = Object(s.a)().i18n,
                    t = Object(c.useGlobal)("language"),
                    n = r()(t, 2),
                    a = n[0],
                    o = n[1];
                return [a, function(t) {
                    var n = Object(l.c)({
                        language: t
                    }) || l.a;
                    i.a && Object(u.a)("ugg_lang", n), e && e.changeLanguage(n), o(n)
                }]
            }
    },
    390: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n.n(a),
            o = n(0),
            i = n.n(o),
            c = n(10),
            s = n(14),
            l = n.n(s),
            u = (n(3), n(17)),
            m = n(191),
            d = n(190),
            p = n(24),
            f = n(61);

        function g(e) {
            return i.a.createElement("div", {
                id: "side-ads_sticky-group",
                className: "side-ads_sticky-group"
            }, e.children)
        }
        var h = function(e) {
            var t = Object(o.useState)(!1),
                n = r()(t, 2),
                a = n[0],
                s = n[1],
                h = (Object(u.h)(), Object(c.useGlobal)("responsive")),
                v = r()(h, 1)[0],
                b = Object(c.useGlobal)("loggingIn"),
                y = r()(b, 1)[0],
                O = Object(p.g)().isPremium,
                E = Object(c.useGlobal)("adblock"),
                w = r()(E, 1)[0],
                j = Object(c.useGlobal)("isDetectingAdblock"),
                N = r()(j, 1)[0],
                S = e.className,
                k = e.style,
                _ = Object(c.useGlobal)(f.c),
                T = r()(_, 1)[0];
            if (Object(o.useEffect)((function() {
                    s(!0)
                }), []), !a || y || N || w || O || "TABLET" == v || "MOBILE_LARGE" == v || "MOBILE_MEDIUM" == v || "MOBILE_SMALL" == v) return null;
            var I = l()("side-ads-container", S);
            return i.a.createElement("div", {
                className: "".concat(I, " ").concat(T),
                style: k
            }, i.a.createElement(g, null, i.a.createElement(m.a, {
                styles: {
                    paddingLeft: 12,
                    paddingRight: 12,
                    display: "flex",
                    width: "auto"
                },
                minAdWidth: 324,
                minAdHeight: 265
            }, i.a.createElement(d.a, {
                slotId: "ugg_D_2",
                shouldChangeForRoute: function(e, t) {
                    return e.pathname !== t.pathname
                }
            })), i.a.createElement(m.a, {
                styles: {
                    paddingLeft: 12,
                    paddingRight: 12,
                    display: "flex",
                    height: "auto"
                },
                minAdWidth: 324,
                minAdHeight: 265
            }, i.a.createElement(d.a, {
                slotId: "ugg_D_3",
                shouldChangeForRoute: function(e, t) {
                    return e.pathname !== t.pathname
                }
            }))))
        };
        h.defaultProps = {
            style: {},
            isSticky: !0,
            topOffset: 0,
            bottomOffset: 0
        }, t.a = h
    },
    391: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n.n(a),
            o = n(0),
            i = n.n(o),
            c = n(396),
            s = n(224),
            l = function(e) {
                var t = e.group,
                    n = e.option,
                    a = e.isChecked,
                    r = e.onChange;
                return i.a.createElement("div", {
                    className: "filter-modal_radio-buttons"
                }, i.a.createElement("label", null, n.label, i.a.createElement("input", {
                    type: "radio",
                    value: n.value,
                    checked: a,
                    name: t,
                    onChange: r.bind(void 0, n)
                }), i.a.createElement("span", {
                    className: "radio-button"
                })))
            };
        t.a = function(e) {
            var t = e.button,
                n = e.title,
                a = e.group,
                u = e.contentClassNames,
                m = e.curValue,
                d = e.options,
                p = e.onApply,
                f = e.onCancel,
                g = Object(o.useState)(!1),
                h = r()(g, 2),
                v = h[0],
                b = h[1],
                y = Object(o.useState)(!1),
                O = r()(y, 2),
                E = O[0],
                w = (O[1], Object(o.useState)(m)),
                j = r()(w, 2),
                N = j[0],
                S = j[1],
                k = Object(o.useRef)();
            Object(o.useEffect)((function() {
                N || S(m)
            }), [m]);
            var _ = function() {
                    b(!1)
                },
                T = function() {
                    f && f(), _()
                };
            return i.a.createElement(i.a.Fragment, null, t && i.a.createElement("div", {
                className: "select_modal"
            }, i.a.createElement("div", {
                className: "select_modal__toggle",
                onClick: function(e) {
                    b(!v)
                }
            }, t)), v && i.a.createElement(c.a, null, i.a.createElement("div", {
                className: "filter-modal"
            }, i.a.createElement("div", {
                className: "filter-modal_header"
            }, i.a.createElement("div", null, n), i.a.createElement("div", {
                className: "filter-modal_close",
                onClick: T
            }, i.a.createElement(s.ReactComponent, null))), i.a.createElement("div", {
                ref: k,
                className: "filter-modal_content ".concat(u)
            }, d ? function(e, t) {
                return i.a.createElement("div", {
                    className: "filter-modal_options"
                }, e.map((function(e) {
                    var n = t && e.value === N.value;
                    return i.a.createElement(l, {
                        key: e.value,
                        group: a,
                        option: e,
                        isChecked: n,
                        onChange: S
                    })
                })))
            }(d, m) : e.children), i.a.createElement("div", {
                className: "filter-modal_buttons ".concat(E ? "fade-content" : "")
            }, i.a.createElement("div", {
                onClick: T,
                className: "btn-transparent filter-modal_cancel"
            }, "Cancel"), i.a.createElement("div", {
                onClick: function() {
                    p && (d ? p(N) : p()), _()
                },
                className: "btn-blue filter-modal_apply"
            }, "Apply")))))
        }
    },
    392: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n.n(a),
            o = n(17),
            i = n(12),
            c = n(2),
            s = n(44),
            l = n.n(s);
        t.a = function(e) {
            var t, a = Object(c.n)().getChampionImg,
                s = Object(o.g)(),
                u = Object(o.h)(),
                m = (t = u && u.state && u.state.searchResults, Array.isArray(t) && t.length > 0 ? t[0] : null);
            return r.a.createElement("div", {
                className: "error-404 content-side-padding"
            }, m && r.a.createElement("div", {
                className: "did-you-mean"
            }, r.a.createElement("img", {
                className: "alert-icon",
                style: {
                    width: 40,
                    marginRight: 15
                },
                src: Object(c.g)("lol/icons/YUUWIECAREFULWATCHOUTALERTALERTGETDOOOOWN.svg")
            }), r.a.createElement("div", {
                style: {
                    display: "flex",
                    alignItems: "center"
                }
            }, r.a.createElement("span", null, "Did you mean to search for  "), r.a.createElement(i.b, {
                to: m.item.url
            }, r.a.createElement("div", {
                className: "champion-face"
            }, r.a.createElement("img", {
                src: a(m.item.id)
            })), m.item.key), r.a.createElement("span", null, "?"))), r.a.createElement("div", {
                className: "page-not-found"
            }, r.a.createElement("div", null, r.a.createElement("div", null, r.a.createElement("div", null, r.a.createElement("h1", null, "THIS PAGE"), r.a.createElement("h1", null, "DOESN'T EXIST")), r.a.createElement("div", {
                className: "grey-text",
                style: {
                    marginTop: 30
                }
            }, r.a.createElement("span", null, "Just like your team's map awareness."))), r.a.createElement("hr", null), r.a.createElement("div", null, r.a.createElement("div", null, r.a.createElement("span", null, "The page you're looking for isn't available.")), r.a.createElement("div", null, r.a.createElement("span", null, "Try to search again or use the back button.")), r.a.createElement("div", {
                className: "back-btn",
                onClick: function() {
                    return s.goBack()
                }
            }, r.a.createElement(l.a, {
                wrapperClassName: "react-svg",
                path: "https://static.u.gg/assets/ugg/icons/chevron-back.svg"
            }), r.a.createElement("span", {
                style: {
                    marginLeft: 20
                }
            }, r.a.createElement("strong", null, "BACK"))))), r.a.createElement("img", {
                className: "img-404",
                src: n(675).default,
                alt: "404"
            })))
        }
    },
    393: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        })), n.d(t, "b", (function() {
            return s
        }));
        var a = n(1),
            r = n.n(a),
            o = n(18),
            i = n(274);

        function c(e) {
            for (var t = {}, n = e[0], a = e[1], o = e[2], c = Math.round(e[3]), s = function() {
                    var e = r()(u[l], 2),
                        n = e[0],
                        o = e[1],
                        i = [];
                    o.forEach((function(e) {
                        var t = e[1],
                            r = [];
                        t.forEach((function(e) {
                            var t = {
                                champion_id: e[0],
                                wins: e[1],
                                matches: e[2],
                                win_rate: 100 * (1 - e[1] / e[2]),
                                opp_win_rate: e[1] / e[2] * 100
                            };
                            r.push(t)
                        }));
                        var o = e[0],
                            s = {
                                champion_id: o,
                                worst_against: {
                                    bad_against: r,
                                    champion_id: o,
                                    role: n
                                },
                                wins: e[2],
                                matches: e[3],
                                damage: e[4],
                                gold: e[5],
                                kills: e[6],
                                assists: e[7],
                                deaths: e[8],
                                cs: e[9]
                            },
                            l = {
                                win_rate: s.wins / s.matches * 100,
                                pick_rate: s.matches / c * 100,
                                ban_rate: a[o] ? a[o] / a.total_matches * 100 : 0,
                                avg_damage: s.damage / s.matches / 1e3,
                                avg_kda: (s.kills + s.assists) / s.deaths,
                                avg_cs: s.cs / s.matches,
                                avg_gold: s.gold / s.matches
                            },
                            u = Object.assign({}, l, {
                                champion_id: o,
                                role: n,
                                champion_link: {
                                    champion_id: o,
                                    role: n
                                },
                                worst_against: s.worst_against,
                                matches: s.matches
                            });
                        i.push(u)
                    }));
                    var s = i.sort((function(e, t) {
                        return t.win_rate - e.win_rate
                    }));
                    t[n] = s
                }, l = 0, u = Object.entries(n); l < u.length; l++) s();
            for (var m = {}, d = 0, p = Object.entries(t); d < p.length; d++) {
                var f = r()(p[d], 2);
                f[0];
                f[1].forEach((function(e) {
                    m[e.champion_id] ? m[e.champion_id] += e.pick_rate : m[e.champion_id] = e.pick_rate
                }))
            }
            for (var g = 0, h = Object.entries(t); g < h.length; g++) {
                var v = r()(h[g], 2),
                    b = (v[0], v[1]);
                b.forEach((function(e) {
                    var t = e.champion_id,
                        n = e.ban_rate,
                        a = e.pick_rate,
                        r = e.win_rate,
                        o = a / m[t] * n,
                        i = r >= 50 ? o / 100 * ((r / 100 + .53) / 2) + a / 100 * (r / 100) + .5 * (1 - o / 100 - a / 100) : o / 100 * ((r / 100 + .505) / 2) + a / 100 * (r / 100) + .5 * (1 - o / 100 - a / 100);
                    i *= 100, e.effective_win_rate = i
                }));
                for (var y = b.map((function(e) {
                        return e.effective_win_rate
                    })), O = Object(i.a)(y), E = 0; E < b.length; E++) b[E].tier = {
                    pick_rate: b[E].pick_rate,
                    stdevs: (b[E].effective_win_rate - O.mean) / O.stdev
                }
            }
            for (var w = [], j = 0, N = Object.entries(t); j < N.length; j++) {
                var S = r()(N[j], 2),
                    k = (S[0], S[1]);
                w = w.concat(k)
            }
            var _ = w.sort((function(e, t) {
                return t.win_rate - e.win_rate
            }));
            return t.all = _, {
                win_rates: t,
                last_updated_at: o,
                total_matches: e[3],
                queue_type_total_matches: c
            }
        }

        function s(e, t) {
            var n, a, r;
            if (!e) return {
                role_win_rates: n,
                last_updated: a,
                total_matches_count: r
            };
            var i = t.queueType,
                c = t.role;
            return c = "normal_aram" === i || "nexus_blitz" === i ? "none" : Object(o.l)(c), {
                role_win_rates: n = e.win_rates[c],
                last_updated: a = e.last_updated_at,
                total_matches_count: r = e.queue_type_total_matches
            }
        }
    },
    394: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n.n(a),
            o = n(79),
            i = n(70),
            c = n(18),
            s = n(103);
        t.a = function(e) {
            var t = e.summonerName,
                n = e.regionId,
                l = e.queueType,
                u = Object(s.i)(t, n, l),
                m = u.data,
                d = (u.loading, u.error, (m || {}).getHistoricRanks),
                p = Object(a.useMemo)((function() {
                    return (Array.isArray(d) && d || []).filter((function(e) {
                        return !!e.season && !!e.tier
                    })).sort((function(e, t) {
                        return t.season - e.season
                    }))
                }), [d]);
            return 0 === p.length ? null : r.a.createElement("div", {
                className: "historic-ranks-row"
            }, p.map((function(e) {
                return r.a.createElement(o.f, {
                    key: e.season,
                    tooltipInfo: "".concat(Object(c.g)(e.tier), " ").concat(Object(c.j)(e.rank), " ").concat(isNaN(parseInt(e.lp)) ? "" : "".concat(e.lp, "LP")),
                    disableTooltip: !e.rank
                }, r.a.createElement("div", {
                    className: "historic-rank"
                }, r.a.createElement("span", null, r.a.createElement("strong", null, "S", (t = e.season) > 9 ? t - 4 : t), " ", r.a.createElement("span", {
                    style: {
                        color: Object(i.h)(e.tier)
                    }
                }, Object(c.g)(e.tier)))));
                var t
            })))
        }
    },
    396: function(e, t, n) {
        "use strict";
        var a = n(4),
            r = n(0),
            o = n(65);
        t.a = function(e) {
            var t = Object(r.useRef)(a.document && a.document.createElement("div")),
                n = e.children,
                i = e.dest,
                c = void 0 === i ? "react-portal" : i;
            return Object(r.useEffect)((function() {
                return a.document && a.document.getElementById(c).appendChild(t.current),
                    function() {
                        a.document && a.document.getElementById(c).removeChild(t.current)
                    }
            }), []), a.window ? Object(o.createPortal)(n, t.current) : null
        }
    },
    399: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }));
        var a = n(68),
            r = {
                overview: {
                    queueType: a.h.queueType,
                    role: a.h.role,
                    season: a.h.season,
                    default: a.g,
                    exemptions: ["champion"]
                },
                "match-history": {
                    queueType: a.f.queueType,
                    role: a.f.role,
                    season: a.f.season,
                    default: a.e,
                    exemptions: ["champion"]
                },
                "champion-stats": {
                    queueType: a.b.queueType,
                    role: a.b.role,
                    season: a.b.season,
                    default: a.a
                },
                "indiv-champion-stats": {
                    queueType: a.d.queueType,
                    role: a.d.role,
                    season: a.d.season,
                    default: a.c
                },
                match: {
                    default: a.e
                }
            }
    },
    400: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return i
        })), n.d(t, "a", (function() {
            return c
        }));
        var a = n(4),
            r = n(92),
            o = ["na.u.gg", "eu.u.gg", "kr.u.gg", "sa.u.gg", "oce.u.gg"];

        function i() {
            var e = "wss://u.gg";
            return a.window && a.window.location && o.includes(a.window.location.hostname) && (e = "wss://".concat(a.window.location.hostname)), e
        }

        function c() {
            var e = r.graphqlURI;
            return a.window && a.window.location && o.includes(a.window.location.hostname) && (e = "https://".concat(a.window.location.hostname, "/api")), e
        }
    },
    415: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n.n(a),
            o = n(2);
        t.a = function(e) {
            var t = Object(o.n)(),
                n = t.useChampionIndiv,
                i = t.getIndividualChampion,
                c = t.getChampionTooltipJSON,
                s = e.patch,
                l = e.language,
                u = e.championId,
                m = e.skillSlot,
                d = Object(a.useRef)(!1),
                p = n(u, {
                    patch: s,
                    language: l,
                    skip: !0
                }),
                f = p.data,
                g = (p.loading, p.error, c(s)),
                h = g.data,
                v = (g.loading, g.error, function(e) {
                    switch (e) {
                        case "spelldamage":
                        case "@dynamic.abilitypower":
                            return "% AP";
                        case "attackdamage":
                            return "% AD";
                        case "bonusattackdamage":
                            return "% bonus AD";
                        case "armor":
                        case "health":
                        case "bonushealth":
                            return "%";
                        case "@text":
                        default:
                            return ""
                    }
                }),
                b = function(e, t, n) {
                    var a = t.replace(/{/g, "").replace(/}/g, ""),
                        r = t.substring(3, t.length - 3),
                        o = r.charAt(0),
                        i = r.substr(1),
                        c = e.vars.find((function(e) {
                            return e.key === r
                        })),
                        s = "?";
                    switch (o) {
                        case "e":
                            s = e.effectBurn[i];
                            break;
                        case "a":
                            s = void 0 === c ? "?" : "".concat(Math.round(100 * c.coeff)).concat(v(c.link));
                            break;
                        case "f":
                            s = void 0 === c ? "?" : "".concat(Math.round(100 * c.coeff)).concat(v(c.link)), "254" === n && c && "@special.viw" === c.link && (s = "1% per ".concat(c.coeff, " bonus AD")), "75" === n && c && "@stacks" === c.link && (s = "total stacks");
                            break;
                        default:
                            s = void 0 === c ? "?" : c.coeff
                    }
                    if (c && Array.isArray(c.coeff) && (s = c.coeff.join("/")), void 0 === s && (s = "?"), "?" === s && h) {
                        var l = y.id;
                        if (h[l]) {
                            var u = h[l][m],
                                d = a.trim();
                            d in u && null !== u[d] && (s = u[d])
                        }
                    }
                    return s
                },
                y = f || i(u, {
                    patch: s,
                    language: l
                });
            if (!y && !y.skills && !y.spells) return null;
            var O = y.skills,
                E = (y.spells || O)[m],
                w = function(e) {
                    d.current = !1;
                    var t = e.tooltip;
                    if (!t) return "";
                    var n = t.match(/{([^}]+)}/g) || [];
                    n = n.map((function(e) {
                        return e.concat("}")
                    }));
                    for (var a = [], r = 0; r < n.length; r++) {
                        var o = b(e, n[r], u);
                        a.push(o)
                    }
                    a.includes("?") && (d.current = !0);
                    for (var i = 0; i < n.length; i++) t = t.replace(n[i], a[i]);
                    return t
                }(E);
            return r.a.createElement("div", {
                className: "tooltip-champion-skill"
            }, r.a.createElement("div", {
                className: "name"
            }, E.name), E.cooldown && r.a.createElement("div", {
                className: "cooldown"
            }, "Cooldown: ".concat(E.cooldownBurn)), r.a.createElement("br", null), r.a.createElement("div", {
                dangerouslySetInnerHTML: {
                    __html: w
                }
            }), d.current && r.a.createElement("div", {
                className: "no-data-message"
            }, r.a.createElement("br", null), '"?" indicates missing or incorrect data from Riot API'))
        }
    },
    419: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return E
        }));
        var a = n(11),
            r = n.n(a),
            o = n(48),
            i = n.n(o),
            c = n(49),
            s = n.n(c),
            l = n(59),
            u = n.n(l),
            m = n(60),
            d = n.n(m),
            p = n(29),
            f = n.n(p),
            g = n(0),
            h = n.n(g);

        function v(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? v(Object(n), !0).forEach((function(t) {
                    r()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function y(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = f()(e);
                if (t) {
                    var r = f()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return d()(this, n)
            }
        }
        var O = function(e) {
                var t = e.isChecked,
                    n = e.label;
                return h.a.createElement("div", {
                    className: "checklist-item ".concat(t ? "checklist-item_checked" : "checklist-item_unchecked", " ")
                }, t ? h.a.createElement("img", {
                    className: "checklist-item_icon",
                    src: "https://static.u.gg/assets/ugg/icons/checkmark-green.svg",
                    alt: "Checkmark"
                }) : h.a.createElement("img", {
                    className: "checklist-item_icon",
                    src: "https://static.u.gg/assets/ugg/icons/close-red.svg",
                    alt: "X"
                }), h.a.createElement("div", {
                    className: "checklist-item_label"
                }, n))
            },
            E = function(e) {
                u()(n, e);
                var t = y(n);

                function n(e) {
                    var a;
                    return i()(this, n), (a = t.call(this, e)).state = a.validatePassword(e.password), a
                }
                return s()(n, [{
                    key: "componentDidUpdate",
                    value: function(e, t) {
                        if (e.password !== this.props.password) {
                            var n = this.validatePassword(this.props.password);
                            this.setState(b({}, n))
                        }
                    }
                }, {
                    key: "validatePassword",
                    value: function(e) {
                        var t = b({}, this.state);
                        return e ? (t.minCharacters = e.length >= 8, t.hasLetter = e.match(/[a-zA-Z]+/g), t.hasNumber = e.match(/[\d]+/g), t) : {
                            hasLetter: !1,
                            hasNumber: !1,
                            minCharacters: !1
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state,
                            t = e.hasLetter,
                            n = e.hasNumber,
                            a = e.minCharacters;
                        return h.a.createElement("div", {
                            className: "password-checker"
                        }, h.a.createElement(O, {
                            isChecked: t,
                            label: "At least one letter"
                        }), h.a.createElement(O, {
                            isChecked: n,
                            label: "At least one number"
                        }), h.a.createElement(O, {
                            isChecked: a,
                            label: "Minimum 8 characters"
                        }))
                    }
                }]), n
            }(g.Component)
    },
    43: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n.n(a),
            o = n(4),
            i = n(0),
            c = n.n(i),
            s = n(14),
            l = n.n(s),
            u = n(61);
        t.a = function(e) {
            var t = e.at,
                n = e.min,
                a = e.max,
                s = e.renderNullOnFail,
                m = e.isClient,
                d = e.children,
                p = Object(i.useState)(!1),
                f = r()(p, 2),
                g = f[0],
                h = f[1],
                v = Object(i.useState)(!1),
                b = r()(v, 2),
                y = b[0],
                O = b[1];
            if (Object(i.useEffect)((function() {
                    m && h(!0)
                }), []), Object(i.useEffect)((function() {
                    if (o.window && s) {
                        var e = function() {
                            var e = function(e) {
                                var t = e.min,
                                    n = e.max,
                                    a = e.at,
                                    r = !1;
                                if (o.window) {
                                    var i = o.window.innerWidth;
                                    (t && n || a) && (r = "DESKTOP_LARGE" === n ? i >= u.g[t || a][0] : "MOBILE_SMALL" === t ? i <= u.g[n || a][1] : i >= u.g[t || a][0] && i < u.g[n || a][1])
                                }
                                return r
                            }({
                                min: n,
                                max: a,
                                at: t
                            });
                            O(e)
                        };
                        return e(), o.window.addEventListener("resize", e),
                            function() {
                                return o.window.removeEventListener("resize", e)
                            }
                    }
                }), []), s && !y) return null;
            if (m && !g) return null;
            if (t && (n || a)) throw new Error("Choose a single breakpoint or a range of breakpoints");
            var E = l()("media-query", function() {
                var e = "";
                if (t) e = t;
                else if (n === a) e = n;
                else {
                    var r = [n, a];
                    e = "".concat(r[0], "__").concat(r[1])
                }
                return "".concat("media-query", "_").concat(e)
            }());
            return "function" == typeof d ? d(E) : d ? c.a.Children.map(d, (function(e) {
                return e && c.a.cloneElement(e, {
                    className: l()(e.props.className, E)
                })
            })) : null
        }
    },
    527: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return v
        }));
        var a = n(48),
            r = n.n(a),
            o = n(49),
            i = n.n(o),
            c = n(59),
            s = n.n(c),
            l = n(60),
            u = n.n(l),
            m = n(29),
            d = n.n(m),
            p = n(0),
            f = n.n(p),
            g = n(2);

        function h(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = d()(e);
                if (t) {
                    var r = d()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return u()(this, n)
            }
        }
        var v = function(e) {
            s()(n, e);
            var t = h(n);

            function n() {
                return r()(this, n), t.apply(this, arguments)
            }
            return i()(n, [{
                key: "render",
                value: function() {
                    return f.a.createElement("div", {
                        className: "no-table-data"
                    }, f.a.createElement("img", {
                        src: Object(g.j)(),
                        alt: "No Rows Rengar"
                    }), f.a.createElement("div", {
                        className: "text"
                    }, "Sorry, no data available."))
                }
            }]), n
        }(p.Component)
    },
    565: function(e, t, n) {
        "use strict";
        t.a = {
            colors: ["#08a6ff", "#d35847", "#f7a35c", "#7cb5ec", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
            chart: {
                backgroundColor: "transparent",
                className: "dark-container"
            },
            title: {
                style: {
                    fontSize: "1rem",
                    color: "#C0C0C0"
                }
            },
            subtitle: {
                style: {
                    color: "rgba(160, 160, 160, 1)",
                    fontSize: "0.8rem"
                }
            },
            xAxis: {
                gridLineColor: "rgba(255, 255, 255, 0.1)",
                gridLineWidth: 1,
                labels: {
                    style: {
                        color: "#A0A0A0"
                    }
                },
                lineColor: "#A0A0A0",
                tickColor: "#A0A0A0",
                title: {
                    style: {
                        color: "#A0A0A0",
                        fontSize: "0.8rem",
                        fontWeight: "normal"
                    }
                }
            },
            yAxis: {
                gridLineColor: "rgba(255, 255, 255, 0.1)",
                labels: {
                    style: {
                        color: "#A0A0A0",
                        fontSize: "0.8rem",
                        fontWeight: "normal"
                    }
                },
                lineColor: "#A0A0A0",
                minorTickInterval: null,
                tickColor: "#A0A0A0",
                tickWidth: 1,
                title: {
                    style: {
                        color: "#A0A0A0",
                        fontSize: "0.8rem",
                        fontWeight: "normal"
                    }
                }
            },
            toolbar: {
                itemStyle: {
                    color: "silver"
                }
            },
            plotOptions: {
                series: {
                    animation: !1
                },
                line: {
                    dataLabels: {
                        color: "#CCC"
                    },
                    marker: {
                        lineColor: "#333"
                    }
                },
                bar: {
                    borderWidth: 0
                },
                column: {
                    maxPointWidth: 20
                },
                spline: {
                    marker: {
                        lineColor: "#333"
                    }
                },
                scatter: {
                    marker: {
                        lineColor: "#333"
                    }
                },
                candlestick: {
                    lineColor: "white"
                }
            },
            legend: {
                itemStyle: {
                    color: "#A0A0A0",
                    fontSize: "0.8rem",
                    fontWeight: "normal"
                },
                itemHoverStyle: {
                    color: "#FFF"
                },
                itemHiddenStyle: {
                    color: "#444"
                }
            },
            credits: !1,
            labels: {
                style: {
                    color: "#A0A0A0",
                    fontSize: "0.8rem",
                    fontWeight: "normal"
                }
            },
            navigation: {
                buttonOptions: {
                    symbolStroke: "#DDDDDD",
                    hoverSymbolStroke: "#FFFFFF",
                    theme: {
                        fill: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [.4, "#606060"],
                                [.6, "#333333"]
                            ]
                        },
                        stroke: "#000000"
                    }
                }
            },
            rangeSelector: {
                buttonTheme: {
                    fill: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [.4, "#888"],
                            [.6, "#555"]
                        ]
                    },
                    stroke: "#000000",
                    style: {
                        color: "#CCC",
                        fontWeight: "bold"
                    },
                    states: {
                        hover: {
                            fill: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [.4, "#BBB"],
                                    [.6, "#888"]
                                ]
                            },
                            stroke: "#000000",
                            style: {
                                color: "white"
                            }
                        },
                        select: {
                            fill: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [.1, "#000"],
                                    [.3, "#333"]
                                ]
                            },
                            stroke: "#000000",
                            style: {
                                color: "yellow"
                            }
                        }
                    }
                },
                inputStyle: {
                    backgroundColor: "#333",
                    color: "silver"
                },
                labelStyle: {
                    color: "silver"
                }
            },
            navigator: {
                handles: {
                    backgroundColor: "#666",
                    borderColor: "#AAA"
                },
                outlineColor: "#CCC",
                maskFill: "rgba(16, 16, 16, 0.5)",
                series: {
                    color: "#7798BF",
                    lineColor: "#A6C7ED"
                }
            },
            scrollbar: {
                barBackgroundColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [.4, "#888"],
                        [.6, "#555"]
                    ]
                },
                buttonArrowColor: "#CCC",
                buttonBackgroundColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [.4, "#888"],
                        [.6, "#555"]
                    ]
                },
                buttonBorderColor: "#CCC",
                rifleColor: "#FFF",
                trackBackgroundColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, "#000"],
                        [1, "#333"]
                    ]
                },
                trackBorderColor: "#666"
            },
            legendBackgroundColor: "rgba(0, 0, 0, 0.5)",
            background2: "rgb(35, 35, 70)",
            dataLabelsColor: "#444",
            textColor: "#C0C0C0",
            maskColor: "rgba(255,255,255,0.3)"
        }
    },
    578: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n.n(a),
            o = n(0),
            i = n.n(o),
            c = n(10),
            s = n.n(c),
            l = n(17),
            u = n(55),
            m = n(14),
            d = n.n(m),
            p = n(109),
            f = n(43),
            g = n(579),
            h = n(580),
            v = n(356),
            b = n(392),
            y = n(581),
            O = n(582),
            E = n(277),
            w = n(271),
            j = n(594),
            N = n(275),
            S = n(597),
            k = n(598),
            _ = n(600),
            T = n(585),
            I = n(586),
            P = n(596),
            A = n(221),
            L = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-Pages-LandingPage-LandingPageContainer"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return Promise.all([n.e(1), n.e(26)]).then(n.bind(null, 621))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 621
                }
            }),
            C = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-DesktopAppSplashPage-DesktopAppSplashPage"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return n.e(15).then(n.bind(null, 606))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 606
                }
            }),
            R = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-Pages-SupportUs-SupportUsPage"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return n.e(27).then(n.bind(null, 607))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 607
                }
            }),
            x = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-Leaderboards-LeaderboardsPage"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return Promise.all([n.e(0), n.e(16)]).then(n.bind(null, 619))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 619
                }
            }),
            M = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-StatsTables"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return Promise.all([n.e(2), n.e(4), n.e(31)]).then(n.bind(null, 608))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 608
                }
            }),
            D = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-Champions"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return Promise.all([n.e(3), n.e(41), n.e(1), n.e(2), n.e(11)]).then(n.bind(null, 623))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 623
                }
            }),
            G = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-SummonerProfiles-views-ProfilesMain-SummonerProfile"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return Promise.all([n.e(0), n.e(3), n.e(1), n.e(5), n.e(38)]).then(n.bind(null, 617))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 617
                }
            }),
            B = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-SummonerProfiles-SummonerProfileMatchRedirect"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return n.e(36).then(n.bind(null, 609))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 609
                }
            }),
            q = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-Accounts-Settings-Settings"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return Promise.all([n.e(6), n.e(9)]).then(n.bind(null, 618))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 618
                }
            }),
            U = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-Accounts-RecoverAccount-RecoverAccount"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return n.e(8).then(n.bind(null, 622))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 622
                }
            }),
            F = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-Accounts-PasswordReset-PasswordReset"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return n.e(7).then(n.bind(null, 624))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 624
                }
            }),
            $ = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-Pages-About-About"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return Promise.all([n.e(42), n.e(24)]).then(n.bind(null, 625))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 625
                }
            }),
            z = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-Pages-FAQ"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return n.e(25).then(n.bind(null, 610))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 610
                }
            }),
            W = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-PrivacyPolicy"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return n.e(29).then(n.bind(null, 611))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 611
                }
            }),
            V = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-PrivacyShield"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return n.e(30).then(n.bind(null, 612))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 612
                }
            }),
            H = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-TermsOfService"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return n.e(39).then(n.bind(null, 613))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 613
                }
            }),
            K = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-Careers"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return n.e(10).then(n.bind(null, 614))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 614
                }
            }),
            J = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-Premium-views-PremiumCheckout"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return Promise.all([n.e(6), n.e(28)]).then(n.bind(null, 620))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 620
                }
            }),
            Y = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-SummonerProfiles-views-LiveGame-LiveGameSplash"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return n.e(37).then(n.bind(null, 615))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 615
                }
            }),
            Q = Object(u.a)({
                resolved: {},
                chunkName: function() {
                    return "components-OverwolfContent"
                },
                isReady: function(e) {
                    var t = this.resolve(e);
                    return !0 === this.resolved[t] && !!n.m[t]
                },
                importAsync: function() {
                    return n.e(23).then(n.bind(null, 616))
                },
                requireAsync: function(e) {
                    var t = this,
                        n = this.resolve(e);
                    return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                        return t.resolved[n] = !0, e
                    }))
                },
                requireSync: function e(t) {
                    var a = this.resolve(t);
                    return n(a)
                },
                resolve: function e() {
                    return 616
                }
            }),
            Z = function(e) {
                var t = Object(c.useGlobal)("expandedSideNav"),
                    n = r()(t, 1)[0],
                    a = Object(c.useGlobal)("verificationBar"),
                    o = r()(a, 1)[0],
                    s = d()({
                        "verification-bar-active": o,
                        collapsed: !n,
                        expanded: n
                    }),
                    u = ["/lol/tier-list", "/lol/top-lane-tier-list", "/lol/jungle-tier-list", "/lol/mid-lane-tier-list", "/lol/adc-tier-list", "/lol/support-tier-list", "/lol/duo-tier-list", "/lol/combat", "/lol/objectives"].concat(Object(A.w)());
                return i.a.createElement("div", {
                    id: "main-content",
                    className: s,
                    ref: e.forwardedRef
                }, i.a.createElement("div", {
                    id: "content-wrapper"
                }, i.a.createElement("div", {
                    id: "content"
                }, i.a.createElement(l.d, null, i.a.createElement(l.b, {
                    exact: !0,
                    path: "/",
                    component: L
                }), i.a.createElement(l.b, {
                    exact: !0,
                    path: "/app",
                    component: C
                }), i.a.createElement(l.b, {
                    exact: !0,
                    path: "/support-us",
                    component: R
                }), i.a.createElement(l.a, {
                    from: "/discover-boost",
                    to: "/support-us"
                }), i.a.createElement(l.b, {
                    exact: !0,
                    path: "/lg-splash",
                    component: Y
                }), i.a.createElement(l.b, {
                    path: "/verify",
                    component: L
                }), i.a.createElement(p.a, {
                    path: "/not-found-user-summoner-profile",
                    component: T.a
                }), i.a.createElement(l.b, {
                    path: "/lol/profile/:region/:summonerName",
                    component: G
                }), i.a.createElement(l.b, {
                    path: "/lol/from-match/:regionId/:summonerName/:matchId",
                    component: B
                }), i.a.createElement(l.b, {
                    path: u,
                    render: function(e) {
                        return i.a.createElement(M, e)
                    }
                }), i.a.createElement(p.a, {
                    path: "/lol/combo-database",
                    render: function(e) {
                        return i.a.createElement(_.a, e)
                    }
                }), i.a.createElement(p.a, {
                    path: "/lol/customize-profiles",
                    render: function(e) {
                        return i.a.createElement(I.a, e)
                    }
                }), i.a.createElement(l.b, {
                    path: ["/lol/champions", "/lol/pro-builds", "/lol/probuilds", "/lol/tr_tr/champions"],
                    render: function() {
                        return i.a.createElement(D, null)
                    }
                }), i.a.createElement(l.b, {
                    path: "/leaderboards",
                    component: x
                }), i.a.createElement(l.b, {
                    path: "/overwolf",
                    component: Q
                }), i.a.createElement(l.b, {
                    path: "/terms-of-service",
                    render: function(e) {
                        return i.a.createElement(H, e)
                    }
                }), i.a.createElement(l.b, {
                    path: "/ad-whitelist",
                    render: function(e) {
                        return i.a.createElement(O.a, e)
                    }
                }), i.a.createElement(l.b, {
                    path: "/privacy-policy",
                    render: function(e) {
                        return i.a.createElement(W, e)
                    }
                }), i.a.createElement(l.b, {
                    path: "/privacy-shield",
                    render: function(e) {
                        return i.a.createElement(V, e)
                    }
                }), i.a.createElement(l.b, {
                    path: "/careers",
                    render: function(e) {
                        return i.a.createElement(K, e)
                    }
                }), i.a.createElement(l.b, {
                    path: "/opensearch",
                    render: function(e) {
                        return i.a.createElement(v.a, e)
                    }
                }), i.a.createElement(l.b, {
                    path: "/multisearch",
                    render: function(e) {
                        return i.a.createElement(P.a, e)
                    }
                }), i.a.createElement(p.a, {
                    path: "/settings",
                    component: q
                }), i.a.createElement(l.b, {
                    path: "/recover-account",
                    component: U
                }), i.a.createElement(l.b, {
                    path: "/reset-password",
                    component: F
                }), i.a.createElement(l.b, {
                    path: "/about",
                    render: function(e) {
                        return i.a.createElement($, e)
                    }
                }), i.a.createElement(l.b, {
                    path: "/faq",
                    render: function(e) {
                        return i.a.createElement(z, e)
                    }
                }), i.a.createElement(l.b, {
                    path: "/no-consent",
                    render: function(e) {
                        return i.a.createElement(h.a, e)
                    }
                }), i.a.createElement(l.b, {
                    path: "/login",
                    render: function(e) {
                        return i.a.createElement(E.b, e)
                    }
                }), i.a.createElement(l.b, {
                    path: "/signup",
                    render: function(e) {
                        return i.a.createElement(w.b, e)
                    }
                }), i.a.createElement(p.a, {
                    path: "/boost/payment",
                    component: J
                }), i.a.createElement(l.a, {
                    from: "/boost(/*)?",
                    to: "/boost/payment"
                }), i.a.createElement(p.a, {
                    path: "/boost-faq",
                    render: function(e) {
                        return i.a.createElement(g.a, e)
                    }
                }), i.a.createElement(p.a, {
                    path: "/reports/:season/year-in-review",
                    render: function(e) {
                        return i.a.createElement(j.a, null)
                    }
                }), i.a.createElement(p.a, {
                    path: "/year-in-review/loading",
                    render: function(e) {
                        return i.a.createElement(N.a, null)
                    }
                }), i.a.createElement(p.a, {
                    path: "/year-in-review",
                    render: function(e) {
                        return i.a.createElement(S.a, null)
                    }
                }), i.a.createElement(l.b, {
                    path: "/verification",
                    render: function(e) {
                        return i.a.createElement(k.a, null)
                    }
                }), i.a.createElement(p.a, {
                    path: "/c19-read-more",
                    render: function(e) {
                        return i.a.createElement(y.a, e)
                    }
                }), i.a.createElement(l.b, {
                    path: "/*",
                    component: b.a
                })))))
            };
        t.a = Z
    },
    579: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n.n(a),
            o = n(222);
        t.a = function(e) {
            var t = Object(o.b)();
            return r.a.createElement("div", {
                className: "text-page-container content-side-padding"
            }, t("faq"), r.a.createElement("div", {
                className: "text-content-container"
            }, r.a.createElement("div", {
                className: "text-content"
            }, r.a.createElement("h1", null, "BOOST FAQs"), r.a.createElement("h2", null, "What regions or currencies are supported?"), r.a.createElement("p", null, "We use Stripe to process all payments. Stripe is available in 34 countries", " ", r.a.createElement("a", {
                href: "https://stripe.com/global"
            }, "Stripe.com"), ". We are working to implement PayPal as a payment option! Please email us at", " ", r.a.createElement("a", {
                className: "link-underline",
                href: "mailto:info@u.gg"
            }, "info@u.gg"), " ", "if youâ€™d like to recommend any other payment providers."), r.a.createElement("h2", null, "What made my payment fail?"), r.a.createElement("p", null, "Insufficient funds is the most common reason for failed payments. The other common reasons are incorrectly typed card details and financial institutions simply denying the transaction. If you have the transaction amount available and know you typed the information correctly, please contact your bank to discuss your specific transaction and account details."), r.a.createElement("h2", null, "Will I be able to change my account type or billing after I create an account?"), r.a.createElement("p", null, "Yes. Go to Settings > BOOST to change both."), r.a.createElement("h2", null, "Can I change my payment method after I sign up for BOOST?"), r.a.createElement("p", null, "Yes. Go to Settings > BOOST > Change Card."), r.a.createElement("h2", null, "The fourth feature says â€œOur Love and Gratitudeâ€, but just how much?"), r.a.createElement("p", null, "If you will have us, we, U.GG, take you, LeBronzeJames, to be our lawfully wedded BOOST userâ€”to have and to hold, from this day forward, for better, for worse, for richer, for poorer, in sickness and in health, until your BOOST cancellation do us apart. But really, weâ€™re extremely grateful for the support from each and every one of you. Weâ€™re serious when we say more features are coming, from a comprehensive combo database to unique profile analysis to better cosmetics to custom match metrics, and much more. Itâ€™s going to be a busy few months, and we appreciate you being on the ride with us!"))))
        }
    },
    580: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n.n(a),
            o = n(0),
            i = n.n(o),
            c = n(17),
            s = n(28);
        t.a = function(e) {
            var t = Object(c.h)(),
                n = Object(c.g)(),
                a = Object(o.useState)(t.state.prevLocation),
                l = r()(a, 1)[0],
                u = Object(s.c)(),
                m = r()(u, 2),
                d = (m[0], m[1]);
            return Object(o.useEffect)((function() {
                d({
                    1: !1,
                    2: !1,
                    3: !1,
                    4: !1,
                    5: !1
                }), n.replace({
                    pathname: l.pathname,
                    search: l.search
                }), window.location.reload()
            }), []), i.a.createElement("div", {
                id: "quantcast-cmp"
            })
        }
    },
    581: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n.n(a),
            o = n(390);
        t.a = function(e) {
            return r.a.createElement("div", {
                className: "covid-readmore-page"
            }, r.a.createElement("div", {
                className: "covid-readmore-container content-side-padding"
            }, r.a.createElement("div", {
                className: "response-header"
            }, "COVID-19 RESPONSE"), r.a.createElement("div", {
                className: "free-boost-text"
            }, "FREE BOOST FOR ALL USERS"), r.a.createElement("div", {
                className: "main-content"
            }, r.a.createElement("div", null, "Shinggo here - one of the site's co-founders. On behalf of the U.GG team, Alan and I hope you are staying safe during the pandemic. Weâ€™re sure plenty of news has already come your way and that we arenâ€™t the first company to reach out. Still, we want to do what we can to help make your time at home more enjoyable."), r.a.createElement("div", null, "Itâ€™s not much, but weâ€™ve made BOOST, our subscription service, free to all for the next 60 days. No payment information is required - simply create or login to your free account to get access to BOOST content, such as Combo Database, Customized Profiles, S9 Year in Review, and more. Existing and new BOOST users will not be billed for the next 60 days. We are looking into other ways we can support the community and will extend the duration as necessary."), r.a.createElement("div", null, "Like a lot of you, Alan and I fall into an age group which puts us at lower risk. Some of us may have COVID-19 and show zero symptoms. Still, we hope you will take extra steps to flatten the curve - remember to do it, if not for yourself, but for your parents, the at-risk and older people around you, and the medical staff and healthcare employees working hard to contain this risk. Neither Alan nor I are experts by any means - weâ€™ve attached a few resources we found helpful."), r.a.createElement("div", {
                className: "ital"
            }, "Stay safe everyone,", r.a.createElement("br", null), "Shinggo Lu", r.a.createElement("br", null), "Co-Founder and CEO")), r.a.createElement("div", {
                className: "resources"
            }, "Resources"), r.a.createElement("div", {
                className: "resources-list"
            }, r.a.createElement("ul", null, r.a.createElement("li", null, r.a.createElement("a", {
                href: "https://www.youtube.com/watch?v=BtN-goy9VOY"
            }, "VIDEO: The Coronavirus Explained & What You Should DO (Kurzgesagt)")), r.a.createElement("li", null, r.a.createElement("a", {
                href: "https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html"
            }, "STEPS: Preventative Measures (CDC, Centers for Desease Control and Prevention)")), r.a.createElement("li", null, r.a.createElement("a", {
                href: "https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/index.html"
            }, "STEPS: If you Think You Are Sick (CDC)")), r.a.createElement("li", null, r.a.createElement("a", {
                href: "https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications.html"
            }, "STEPS: Are You At Higher Risk for Severe Illness? (CDC)")), r.a.createElement("li", null, r.a.createElement("a", {
                href: "https://ourworldindata.org/coronavirus#flattening-the-curve"
            }, "DATA: Statistics and Research - Flattening the Curve (Our World In Data)")), r.a.createElement("li", null, r.a.createElement("a", {
                href: "https://covid19responsefund.org/"
            }, "DONATE: WHO COVID-19 Response Fund (WHO, World Health Organization)")))), r.a.createElement("div", {
                className: "effect-header"
            }, "For All User Types:", r.a.createElement("br", null), "How These Changes Affect Your Billing Cycle"), r.a.createElement("div", {
                className: "plans-container"
            }, r.a.createElement("div", null, r.a.createElement("span", {
                className: "number"
            }, "1."), r.a.createElement("span", {
                className: "bold-plan-text"
            }, "Monthly Plan BOOST Users: "), "As of 3/30, BOOST Users on monthly billing will have a 100% discount coupon automatically applied to their next two billing cycles."), r.a.createElement("div", null, r.a.createElement("span", {
                className: "number"
            }, "2."), r.a.createElement("span", {
                className: "bold-plan-text"
            }, "Biannual Plan BOOST Users: "), "BOOST Users on biannual billing will have 60 days added to their next bill date. Ex: Users currently with a 6/14/20 bill date will receive an update extending to their renewal date to 8/13/20."), r.a.createElement("div", null, r.a.createElement("span", {
                className: "number"
            }, "3."), r.a.createElement("span", {
                className: "bold-plan-text"
            }, "Annual Plan BOOST Users: "), "BOOST Users on annual billing will have 60 days added to their next bill date. Ex: users currently with a 1/14/21 bill date will receive an update extending to their renewal date to 3/15/21."))), r.a.createElement(o.a, null))
        }
    },
    582: function(e, t, n) {
        "use strict";
        var a = n(0),
            r = n.n(a),
            o = {
                adblock: [0, 520],
                "adblock-p": [0, 930],
                disconnect: [0, 1310],
                ublock: [0, 1730]
            },
            i = [r.a.createElement("p", {
                key: 1
            }, "Click on the Adblock application icon in the top right corner of your browser or just to the left of the site's URL."), r.a.createElement("p", {
                key: 2
            }, "Within the dropdown menu, click on ", r.a.createElement("b", null, '"Donâ€™t run on pages on this site"'), ' or "Don\'t run on pages on this domain."'), r.a.createElement("p", {
                key: 3
            }, "When the pop-up appears, click ", r.a.createElement("b", null, '"Exclude."')), r.a.createElement("p", {
                key: 4
            }, "The page will reload, and youâ€™re good to go!")],
            c = [r.a.createElement("p", {
                key: 1
            }, "Click on the Adblock Plus application icon in the top right corner of your browser or just to the left of the site's URL."), r.a.createElement("p", {
                key: 2
            }, "When the pop-up appears, click on ", r.a.createElement("b", null, '"Enabled on this site."')), r.a.createElement("p", {
                key: 3
            }, "It will switch to say ", r.a.createElement("b", null, '"Disabled on this site."')), r.a.createElement("p", {
                key: 4
            }, "Reload the page and youâ€™re good to go!")],
            s = [r.a.createElement("p", {
                key: 1
            }, "Click on the Disconnect application icon in the top right corner of your browser or just to the left of the site's URL."), r.a.createElement("p", {
                key: 2
            }, "Within the dropdown menu, about halfway down the pop-up after the ", r.a.createElement("b", null, '"Content"'), " list item, you will see ", r.a.createElement("b", null, '"Whitelist site."')), r.a.createElement("p", {
                key: 3
            }, "Click on those words â€“ ", r.a.createElement("b", null, '"Whitelist site."')), r.a.createElement("p", {
                key: 4
            }, "Reload the page and youâ€™re good to go!")],
            l = [r.a.createElement("p", {
                key: 1
            }, "Click on the uBlock/uBlock Origin application icon in the top right corner of your browser or just to the left of the site's URL."), r.a.createElement("p", {
                key: 2
            }, "When the pop-up appears, click on the ", r.a.createElement("b", null, "large blue power icon"), " at the top of the pop-up."), r.a.createElement("p", {
                key: 3
            }, "When it turns gray, click the ", r.a.createElement("b", null, "refresh icon"), " that has appeared."), r.a.createElement("p", {
                key: 4
            }, "It will reload the page and youâ€™re good to go!")],
            u = function(e) {
                return e.list ? r.a.createElement("div", {
                    className: "list"
                }, e.list.map((function(e, t) {
                    return r.a.createElement("div", {
                        className: "item",
                        key: t
                    }, r.a.createElement("div", {
                        className: "num"
                    }, t + 1, "."), r.a.createElement("div", {
                        className: "inst"
                    }, e))
                }))) : null
            };
        t.a = function(e) {
            var t = function(e, t) {
                window.scrollTo(o[t][0], o[t][1])
            };
            return r.a.createElement("div", {
                className: "ad-whitelist-container"
            }, r.a.createElement("div", {
                className: "intro"
            }, r.a.createElement("div", {
                className: "title"
            }, "How to Whitelist U.GG"), r.a.createElement("div", {
                className: "desc"
            }, "Select your adblocker from the list below and follow the instructions to whitelist U.GG. Don't see the application or extension you're using? Please refer to your adblocker's website for more information on how to whitelist us."), r.a.createElement("div", {
                className: "ad-blocker-list"
            }, r.a.createElement("div", {
                className: "blocker",
                onClick: function(e) {
                    t(0, "adblock")
                }
            }, "Adblock"), r.a.createElement("div", {
                className: "blocker",
                onClick: function(e) {
                    t(0, "adblock-p")
                }
            }, "Adblock Plus"), r.a.createElement("div", {
                className: "blocker",
                onClick: function(e) {
                    t(0, "disconnect")
                }
            }, "Disconnect"), r.a.createElement("div", {
                className: "blocker",
                onClick: function(e) {
                    t(0, "ublock")
                }
            }, "uBlock Origin/uBlock"))), r.a.createElement("div", {
                className: "divider"
            }), r.a.createElement("div", {
                className: "adblock"
            }, r.a.createElement("div", {
                className: "title"
            }, "Adblock"), r.a.createElement(u, {
                list: i
            })), r.a.createElement("div", {
                className: "adblock"
            }, r.a.createElement("div", {
                className: "title"
            }, "Adblock Plus"), r.a.createElement(u, {
                list: c
            })), r.a.createElement("div", {
                className: "adblock"
            }, r.a.createElement("div", {
                className: "title"
            }, "Disconnect"), r.a.createElement(u, {
                list: s
            })), r.a.createElement("div", {
                className: "adblock"
            }, r.a.createElement("div", {
                className: "title"
            }, "uBlock Origin/uBlock"), r.a.createElement(u, {
                list: l
            })))
        }
    },
    585: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n.n(a),
            o = n(0),
            i = n.n(o),
            c = n(10),
            s = n(17),
            l = n(263),
            u = n(69),
            m = n(145),
            d = n(280),
            p = n(103),
            f = n(15),
            g = n(24);
        t.a = function(e) {
            var t = Object(o.useRef)(),
                n = Object(s.g)(),
                a = Object(c.useGlobal)("clientRegion"),
                h = r()(a, 1)[0],
                v = Object(c.useGlobal)("loggingIn"),
                b = r()(v, 1)[0],
                y = Object(g.d)(),
                O = Object(m.a)(f.v, {
                    fetchPolicy: "network-only"
                }),
                E = O.loading,
                w = O.data,
                j = (O.error, (((w || {}).getState || {}).lolSettings || {}).summoners),
                N = j && j[0] || {},
                S = N.summonerName,
                k = N.regionId,
                _ = Object(o.useState)(S || ""),
                T = r()(_, 2),
                I = T[0],
                P = T[1],
                A = Object(o.useState)(h),
                L = r()(A, 2),
                C = L[0],
                R = L[1],
                x = Object(d.a)(f.H, {
                    refetchQueries: [{
                        query: f.v
                    }, {
                        query: f.u
                    }],
                    variables: {
                        primarySummoner: {
                            summonerName: I,
                            regionId: C
                        }
                    }
                }),
                M = r()(x, 2),
                D = M[0],
                G = M[1],
                B = G.loading,
                q = G.data,
                U = (G.error, Object(p.n)(k, S, {}, "", {
                    skip: !w
                })),
                F = U.loading,
                $ = U.data,
                z = (U.error, Object(p.d)(C, I, {}, "")),
                W = r()(z, 2),
                V = W[0],
                H = W[1],
                K = H.loading,
                J = H.data,
                Y = H.error,
                Q = function(e) {
                    13 === e.which && V()
                };
            return Object(o.useEffect)((function() {
                R(k)
            }), [k]), Object(o.useEffect)((function() {
                if (t.current) return t.current.addEventListener("keypress", Q),
                    function() {
                        return t && t.current && t.current.removeEventListener("keypress", Q)
                    }
            }), [b, E, F, q, I, C]), Object(o.useEffect)((function() {
                J && D()
            }), [J]), Object(o.useEffect)((function() {
                !b && !y || q ? n.replace("/") : $ && n.replace("/lol/profile/".concat(k, "/").concat(S.toLowerCase(), "/overview"))
            }), [b, y, q, $]), (b || E || F) && !q ? i.a.createElement("div", {
                className: "not-found-user-summoner-profile not-found_loading"
            }, i.a.createElement("div", {
                className: "spinthatshit-loader"
            }, i.a.createElement("div", {
                className: "spinner"
            }))) : i.a.createElement("div", {
                className: "not-found-user-summoner-profile"
            }, i.a.createElement("div", {
                className: "not-found_content"
            }, i.a.createElement("img", {
                className: "rengar-img",
                src: "https://static.u.gg/assets/lol/art/rengar.png"
            }), i.a.createElement("div", {
                className: "header"
            }, "We canâ€™t find your summoner profile :("), i.a.createElement("div", {
                className: "sub-text"
            }, "Did you make a typo or select the wrong region?"), i.a.createElement("div", null, !K && Y && i.a.createElement("div", {
                className: "error-dialogue-box"
            }, "We were unable to find your profile, please contact ", i.a.createElement("a", {
                className: "link-underline",
                href: "mailto:info@u.gg"
            }, "info@u.gg"), " for additional support."), i.a.createElement("div", {
                className: "summoner-name-input-container"
            }, i.a.createElement(l.a, {
                inputRef: t,
                autoFocus: !0,
                placeholder: "Summoner Name",
                summonerName: I,
                summonerRegion: C,
                onSummonerChange: function(e) {
                    return P(e.target.value)
                },
                onRegionChange: function(e) {
                    return R(e)
                },
                dontDefaultUniversalRegion: !0,
                color: "white"
            }), i.a.createElement(u.a, {
                className: "save-settings-btn btn-blue",
                label: "Save Name",
                disable: "" === I.trim(),
                isLoading: B || E || F || K,
                onClick: V
            })))))
        }
    },
    586: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n.n(a),
            o = n(0),
            i = n.n(o),
            c = n(10),
            s = n(69),
            l = n(2),
            u = n(64),
            m = n(17),
            d = n(145),
            p = n(24),
            f = n(15);
        t.a = function(e) {
            var t = Object(m.g)(),
                n = Object(c.useGlobal)("authToken"),
                a = r()(n, 1)[0],
                o = Object(c.useGlobal)("loggingIn"),
                g = r()(o, 1)[0],
                h = Object(p.d)(),
                v = (Object(u.a)("signup"), Object(u.a)("verification")),
                b = Object(d.a)(f.v, {
                    skip: !a
                }),
                y = (b.loading, b.data),
                O = (b.error, y && y.getState || {}),
                E = O.lolSettings,
                w = O.premium,
                j = (E || {}).summoners,
                N = j && j[0] || {},
                S = N.summonerName,
                k = N.regionId,
                _ = N.verified,
                T = (w || {}).isPremium,
                I = "";
            I = g || h ? T ? _ ? "verified" : "unverified" : "free-user" : "logged-out";
            var P = {
                "logged-out": function() {
                    return t.push({
                        pathname: "/signup",
                        search: "continue=/purchase/1-months&type=premium_boost"
                    })
                },
                unverified: v,
                verified: function() {
                    return t.push({
                        pathname: "/lol/profile/".concat(k, "/").concat(S.toLowerCase(), "/overview")
                    })
                },
                "free-user": function() {
                    return t.push({
                        pathname: "/boost/payment",
                        search: "planType=1-months"
                    })
                }
            };
            return i.a.createElement("div", {
                className: "profile200kSplash"
            }, i.a.createElement("div", {
                className: "top-section"
            }, i.a.createElement("div", {
                className: "header"
            }, "PROFILES WITH ", i.a.createElement("span", {
                className: "yellow-text"
            }, "MORE YOU")), i.a.createElement("div", {
                className: "description"
            }, "Our profiles are more personal than ever.", " ", "free-user" === I || "logged-out" === I ? "Sign up for BOOST to customize yours today." : "Create an account to customize yours today."), i.a.createElement(s.a, {
                className: "login-submit btn-light-blue create-account-button",
                label: {
                    "logged-out": "Try Today",
                    unverified: "Verify Account",
                    verified: "My Profile",
                    "free-user": "Try Today"
                } [I],
                onClick: P[I]
            })), i.a.createElement("div", {
                className: "text-section"
            }, i.a.createElement("div", {
                className: "section-box"
            }, i.a.createElement("div", {
                className: "section-header"
            }, "Autoload Your Profile"), i.a.createElement("div", {
                className: "section-description"
            }, "Save time. Set your profile as your home page. Never search yourself again.")), i.a.createElement("div", {
                className: "section-box"
            }, i.a.createElement("div", {
                className: "section-header"
            }, "Socials"), i.a.createElement("div", {
                className: "section-description"
            }, "Promote your Twitch, Youtube, and Twitter for everyone to see.")), i.a.createElement("div", {
                className: "section-box"
            }, i.a.createElement("div", {
                className: "section-header"
            }, "Custom Background"), i.a.createElement("div", {
                className: "section-description"
            }, "Your favorite is there - we've got every skin for every champion.")), i.a.createElement("div", {
                className: "section-box"
            }, i.a.createElement("div", {
                className: "section-header"
            }, "Pinned Match"), i.a.createElement("div", {
                className: "section-description"
            }, "Show off your most memorable match by pinning it to the top of your profile."))), i.a.createElement("div", {
                style: {
                    position: "absolute"
                }
            }, i.a.createElement("div", {
                className: "bottom-section " + I
            }, i.a.createElement("img", {
                className: "bottom-img",
                src: Object(l.s)("lol/art/200kSplashImg2.png")
            }))))
        }
    },
    594: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n.n(a),
            o = n(4),
            i = n(0),
            c = n.n(i),
            s = n(17),
            l = n(2),
            u = n(145),
            m = n(64),
            d = n(18),
            p = n(11),
            f = n.n(p);

        function g(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? g(Object(n), !0).forEach((function(t) {
                    f()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var v = function(e) {
                var t = Object(i.useRef)(),
                    n = Object(i.useRef)(),
                    a = e.tabsData,
                    o = (e.sticky, e.defaultIndex),
                    s = Object(i.useState)(o || 0),
                    l = r()(s, 2),
                    u = l[0],
                    m = l[1],
                    d = Object(i.useState)({}),
                    p = r()(d, 2),
                    f = p[0],
                    g = (p[1], Object(i.useState)({})),
                    v = r()(g, 2),
                    b = v[0],
                    y = (v[1], h(h({}, b), {}, {
                        gridTemplateColumns: "repeat(".concat(a.length, ", minmax(0px, 1fr))")
                    }));
                return c.a.createElement("div", {
                    ref: t,
                    className: "tabs-container",
                    style: f
                }, c.a.createElement("div", {
                    ref: n,
                    className: "tabs",
                    style: y
                }, a.map((function(e, t) {
                    var n = t === u ? "chosen" : "";
                    return c.a.createElement("div", {
                        key: t,
                        className: "tab ".concat(n),
                        onClick: function() {
                            e.callback(e.label), m(t)
                        }
                    }, c.a.createElement("div", {
                        className: "tabs-text"
                    }, e.label))
                }))))
            },
            b = n(70),
            y = function(e) {
                var t, n = Object(l.n)(),
                    a = n.getProfileIconImg,
                    r = n.getChampionSplashImg,
                    o = e.playerInfo,
                    i = e.soloRankScore,
                    s = e.flexRankScore,
                    u = e.mostPlayedChamps,
                    m = e.summonerName,
                    d = e.howlingAbyssTopThree;
                if (s && i) {
                    var p = {
                            tier: i.tier,
                            rank: i.rank,
                            wins: i.wins,
                            losses: i.losses
                        },
                        f = {
                            tier: s.tier,
                            rank: s.rank,
                            wins: s.wins,
                            losses: s.losses
                        };
                    t = Object(b.b)(p, f)
                } else t = s || i ? s || i : {
                    tier: "unranked"
                };
                var g = [{
                        label: "STATS",
                        callback: function() {
                            h(document.querySelector(".your-stats"))
                        }
                    }, {
                        label: "CHAMPIONS",
                        callback: function() {
                            h(document.querySelector(".champion-breakdown"))
                        }
                    }, {
                        label: "POSITIONS",
                        callback: function() {
                            h(document.querySelector(".position-breakdown"))
                        }
                    }, {
                        label: "FRIENDS",
                        callback: function() {
                            h(document.querySelector(".team-players"))
                        }
                    }],
                    h = function(e) {
                        if (e) {
                            var t = e.getBoundingClientRect(),
                                n = document.querySelector("#masthead").getBoundingClientRect();
                            window.scrollBy({
                                top: t.top - n.bottom - 80,
                                behavior: "smooth"
                            })
                        }
                    },
                    y = {
                        backgroundImage: "\n      linear-gradient(180deg, rgba(7, 7, 32, 0.44) 0%, #070720 100%),\n      url(".concat(r(u.length > 0 ? u[0].topChamps[0].gamesPlayed > u[1].topChamps[0].gamesPlayed ? u[0].topChamps[0].championId : u[1].topChamps[0].championId : d.length > 1 ? d.sort((function(e, t) {
                            return t.gamesPlayed - e.gamesPlayed
                        }))[0].championId : 1), ")\n    "),
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    };
                return c.a.createElement("div", {
                    className: "performance-analysis_header-section",
                    style: y
                }, c.a.createElement("div", {
                    className: "profile-icon-container"
                }, c.a.createElement("img", {
                    className: "profile-icon",
                    src: a(o.iconId)
                }), c.a.createElement("img", {
                    className: "rank-border",
                    src: "https://static.u.gg/assets/lol/rank_borders/round-without-level/border-".concat(t.tier.toLowerCase(), ".svg")
                })), c.a.createElement("div", {
                    className: "summoner-name"
                }, m.toUpperCase()), c.a.createElement("img", {
                    className: "year-in-review-image",
                    width: 455,
                    src: "https://static.u.gg/assets/lol/performance_analysis/images/L20-YIR.svg"
                }), c.a.createElement("img", {
                    width: 142,
                    src: "https://static.u.gg/assets/ugg/logo/ugg-logo.svg"
                }), c.a.createElement(v, {
                    tabsData: g,
                    sticky: !0,
                    defaultIndex: -1
                }), c.a.createElement("img", {
                    className: "long-down-arrow",
                    src: "https://static.u.gg/assets/lol/performance_analysis/icons/long_down_arrow.svg",
                    onClick: function() {
                        return h(document.querySelector(".your-stats"))
                    }
                }))
            },
            O = (n(603), n(52)),
            E = n.n(O),
            w = function(e) {
                var t = Object(i.useState)("normal"),
                    n = r()(t, 2),
                    a = n[0],
                    o = n[1],
                    s = function(e) {
                        o("HOWLING ABYSS" === e ? "howling" : "normal")
                    },
                    u = e.summonerRiftStats,
                    m = e.howlingAbyssStats,
                    d = null,
                    p = null;
                if (u) {
                    var f = E.a.duration(u.fastestTower).format("h:mm:ss");
                    d = [{
                        icon: "sword_icon.png",
                        label: "KDA",
                        stat: u.kda.toFixed(1)
                    }, {
                        icon: "two_sword_icon.png",
                        label: "AVG DEATHS",
                        stat: u.avgDeaths.toFixed(1)
                    }, {
                        icon: "cs_icon.png",
                        label: "AVG CS / MIN",
                        stat: u.avgCsPerMin.toFixed(1)
                    }, {
                        icon: "tower_icon.png",
                        label: "AVG TOWERS",
                        stat: u.avgTowers.toFixed(1)
                    }, {
                        icon: "ward_icon.png",
                        label: "AVG WARDS / GAME",
                        stat: u.avgWardsPerGame.toFixed(1)
                    }, {
                        icon: "tower_icon.png",
                        label: "FASTEST TOWER",
                        stat: f
                    }, {
                        icon: "sword_icon.png",
                        label: "AVG KILLS",
                        stat: u.avgKills.toFixed(1)
                    }, {
                        icon: "shield_icon.png",
                        label: "AVG ASSISTS",
                        stat: u.avgAssists.toFixed(1)
                    }, {
                        icon: "gold_icon.png",
                        label: "GOLD PER MIN",
                        stat: u.avgGoldPerMin.toFixed(0)
                    }, {
                        icon: "monster_icon.png",
                        label: "AVG DRAGONS",
                        stat: u.avgDragons.toFixed(1)
                    }, {
                        icon: "monster_icon.png",
                        label: "MOST DRAGONS",
                        stat: u.mostDragons.toFixed(0)
                    }]
                }
                m && (p = [{
                    icon: "sword_icon.png",
                    label: "KDA",
                    stat: m.kda.toFixed(1)
                }, {
                    icon: "two_sword_icon.png",
                    label: "AVG DEATHS",
                    stat: m.avgDeaths.toFixed(1)
                }, {
                    icon: "helmet.png",
                    label: "CHAMPIONS WON WITH",
                    stat: m.uniqueChampionWins
                }, {
                    icon: "sword_icon.png",
                    label: "AVG KILLS",
                    stat: m.avgKills.toFixed(1)
                }, {
                    icon: "shield_icon.png",
                    label: "AVG ASSISTS",
                    stat: m.avgAssists.toFixed(1)
                }, {
                    icon: "gold_icon.png",
                    label: "GOLD PER MIN",
                    stat: m.avgGoldPerMin.toFixed(0)
                }]);
                var g = [];
                if (u && g.push({
                        label: "SUMMONER'S RIFT",
                        callback: s
                    }), m && g.push({
                        label: "HOWLING ABYSS",
                        callback: s
                    }), !u && "howling" !== a) return o("howling"), c.a.createElement("div", null);
                var h = "howling" === a ? p : d;
                return 0 === g.length ? c.a.createElement("div", null) : c.a.createElement("div", {
                    className: "your-stats"
                }, c.a.createElement("div", {
                    className: "text-container"
                }, c.a.createElement("div", {
                    className: "small-header"
                }, "OVERVIEW"), c.a.createElement("div", {
                    className: "large-header"
                }, "YOUR STATS"), c.a.createElement("div", {
                    className: "basic-text"
                }, "Dive in to your overall stats in each game mode. See how you stack up against the boosted animals you call friends.")), c.a.createElement(v, {
                    tabsData: g
                }), c.a.createElement("div", {
                    className: "stats-container ".concat(a)
                }, h.map((function(e, t) {
                    return c.a.createElement("div", {
                        key: t,
                        className: "your-stats-entry"
                    }, c.a.createElement("div", {
                        className: "icon-and-label"
                    }, c.a.createElement("div", {
                        className: "icon-container"
                    }, c.a.createElement("img", {
                        className: "icon",
                        src: Object(l.s)("lol/performance_analysis/icons/".concat(e.icon))
                    })), c.a.createElement("div", {
                        className: "label"
                    }, e.label)), c.a.createElement("div", {
                        className: "stat"
                    }, e.stat))
                }))))
            },
            j = function(e) {
                var t = e.data;
                return c.a.createElement("div", {
                    className: "multikill-circle-and-label ".concat(t.type)
                }, c.a.createElement("div", {
                    className: "multikill-circle"
                }, c.a.createElement("div", {
                    className: "circle-text"
                }, t.amount)), c.a.createElement("div", {
                    className: "multikill-text"
                }, c.a.createElement("div", {
                    className: "colored-text"
                }, t.type.toUpperCase()), c.a.createElement("div", null, "KILLS")))
            },
            N = function(e) {
                var t = e.multiKills;
                if (!t) return c.a.createElement("div", null);
                var n = [{
                    type: "double",
                    amount: t.doubleKills
                }, {
                    type: "triple",
                    amount: t.tripleKills
                }, {
                    type: "quadra",
                    amount: t.quadraKills
                }, {
                    type: "penta",
                    amount: t.pentaKills
                }];
                return c.a.createElement("div", {
                    className: "multikills-section"
                }, c.a.createElement("div", {
                    className: "multikill-header"
                }, c.a.createElement("div", {
                    className: "small-header"
                }, "MULTI KILLS"), c.a.createElement("div", {
                    className: "basic-text"
                }, "You are a last hitting God. Here are all the times your penta was stolen.")), c.a.createElement("div", {
                    className: "multikills"
                }, n.map((function(e, t) {
                    return c.a.createElement("div", {
                        key: t
                    }, c.a.createElement(j, {
                        data: e
                    }))
                }))))
            },
            S = function(e) {
                var t = Object(l.n)().getProfileIconImg,
                    n = e.data,
                    a = n.iconID,
                    r = n.statText,
                    o = n.label,
                    i = n.summonerName,
                    s = e.isLarge ? "large" : "",
                    u = t(a);
                return c.a.createElement("div", {
                    className: "champion-circle-container ".concat(s)
                }, c.a.createElement("div", {
                    className: "champion-circle"
                }, c.a.createElement("img", {
                    className: "champion-circle-img",
                    src: u
                })), c.a.createElement("div", {
                    className: "summoner-text-container"
                }, c.a.createElement("div", {
                    className: "small-header"
                }, i), c.a.createElement("div", {
                    className: "large-header"
                }, r), c.a.createElement("div", {
                    className: "basic-text"
                }, o)))
            },
            k = function(e) {
                var t = Object(l.n)().getChampionImg,
                    n = e.data,
                    a = n.champID,
                    r = n.statText,
                    o = n.label,
                    i = n.secondaryText,
                    s = e.isLarge ? "large" : "",
                    u = t(a);
                return c.a.createElement("div", {
                    className: "champion-circle-container ".concat(s)
                }, c.a.createElement("div", {
                    className: "champion-circle"
                }, c.a.createElement("img", {
                    className: "champion-circle-img",
                    src: u
                })), c.a.createElement("div", {
                    className: "champ-text-container"
                }, c.a.createElement("div", {
                    className: "small-header"
                }, r), c.a.createElement("div", {
                    className: "basic-text"
                }, o), i && c.a.createElement("div", {
                    className: "small-line-break"
                }), i && c.a.createElement("div", {
                    className: "basic-text"
                }, i)))
            },
            _ = function(e) {
                var t = e.allTheDamage;
                if (!t) return c.a.createElement("div", null);
                var n = t.bestCsPerMin,
                    a = t.bestDamagePerDeath,
                    r = t.bestKda,
                    o = t.bestWinRate,
                    i = [{
                        champID: n.championId,
                        statText: n.csPerMin.toFixed(1),
                        label: "AVG CS / MIN"
                    }, {
                        champID: a.championId,
                        statText: a.damagePerDeath.toFixed(0),
                        label: "DAMAGE PER DEATH"
                    }, {
                        champID: r.championId,
                        statText: r.kda.toFixed(1),
                        label: "KDA"
                    }, {
                        champID: o.championId,
                        statText: "".concat((100 * o.winRate).toFixed(0), "%"),
                        label: "WIN RATE"
                    }];
                return c.a.createElement("div", {
                    className: "all-the-damage"
                }, c.a.createElement("div", {
                    className: "text-header"
                }, c.a.createElement("div", {
                    className: "small-header"
                }, "TONS OF DAMAGE"), c.a.createElement("div", {
                    className: "basic-text"
                }, "Look at the KDA, LOOK AT THE MOVES! Here are your best champs per category this season.")), c.a.createElement("div", {
                    className: "champ-container"
                }, i.map((function(e, t) {
                    return c.a.createElement(k, {
                        key: t,
                        data: e
                    })
                }))))
            },
            T = n(583);
        n(584).a && n(680);
        var I = function(e) {
                var t = Object(l.n)().getChampionSplashImg,
                    n = e.bestAndWorstData;
                if (!n) return c.a.createElement("div", null);
                var a = n.diedToMost,
                    o = n.killedMost,
                    s = n.lostAgainstMost,
                    u = n.wonAgainstMost,
                    m = [{
                        icon: "white_two_sword_icon.png",
                        championId: a.championId,
                        label: "DIED TO MOST",
                        value: a.deaths
                    }, {
                        icon: "white_sword_icon.png",
                        championId: o.championId,
                        label: "KILLED MOST",
                        value: o.kills
                    }, {
                        icon: "white_two_sword_icon.png",
                        championId: s.championId,
                        label: "LOST TO MOST",
                        value: s.loses
                    }, {
                        icon: "white_sword_icon.png",
                        championId: u.championId,
                        label: "WON AGAINST MOST",
                        value: u.wins
                    }];
                m = m.filter((function(e) {
                    return e.championId > 0
                }));
                var d = Object(i.useState)(0),
                    p = r()(d, 2),
                    f = p[0],
                    g = p[1],
                    h = function(e) {
                        var t = f + e;
                        t < 0 && (t = m.length - 1), t > m.length && (t = 0), g(t)
                    };
                return c.a.createElement("div", {
                    className: "best-and-worst-widget"
                }, c.a.createElement("div", {
                    className: "text-container"
                }, c.a.createElement("div", {
                    className: "small-header"
                }, "BEST & WORST"), c.a.createElement("div", {
                    className: "basic-text"
                }, "We all have bad days. Yours are when you play these champs."), c.a.createElement("div", {
                    className: "basic-text"
                }, "We put your best ones here too, for science.")), c.a.createElement("div", {
                    className: "carousel-container"
                }, c.a.createElement("img", {
                    className: "carousel-arrow",
                    src: Object(l.s)("lol/performance_analysis/icons/left_carousel_arrow.svg"),
                    onClick: function() {
                        return h(-1)
                    }
                }), c.a.createElement("div", {
                    className: "carousel"
                }, c.a.createElement(T.Carousel, {
                    showThumbs: !1,
                    width: "750px",
                    showIndicators: !1,
                    showArrows: !1,
                    showStatus: !1,
                    selectedItem: f
                }, m.map((function(e, n) {
                    var a = t(e.championId);
                    return c.a.createElement("div", {
                        key: n
                    }, c.a.createElement("div", {
                        className: "carousel-element",
                        style: {
                            backgroundImage: 'url("'.concat(a, '")')
                        }
                    }, c.a.createElement("div", {
                        className: "background-darken"
                    }), c.a.createElement("div", null), c.a.createElement("div", {
                        className: "carousel-bottom"
                    }, c.a.createElement("div", {
                        className: "left-section"
                    }, c.a.createElement("img", {
                        src: Object(l.s)("lol/performance_analysis/icons/".concat(e.icon))
                    }), c.a.createElement("div", {
                        className: "label-text"
                    }, e.label)), c.a.createElement("div", {
                        className: "right-section"
                    }, c.a.createElement("div", {
                        className: "bold-text"
                    }, e.value, "Â "), c.a.createElement("div", {
                        className: "normal-text"
                    }, "TIMES")))))
                })))), c.a.createElement("img", {
                    className: "carousel-arrow",
                    src: Object(l.s)("lol/performance_analysis/icons/right_carousel_arrow.svg"),
                    onClick: function() {
                        return h(1)
                    }
                })))
            },
            P = n(31),
            A = n.n(P),
            L = n(14),
            C = n.n(L),
            R = function(e) {
                var t = Object(l.n)().getChampionImg,
                    n = e.tabsData,
                    a = Object(i.useState)(0),
                    o = r()(a, 2),
                    s = o[0],
                    u = o[1],
                    m = Object(i.useState)(0),
                    d = r()(m, 2),
                    p = d[0],
                    f = d[1];
                return c.a.createElement("div", {
                    className: "tabs-container"
                }, c.a.createElement("div", {
                    className: "tabs"
                }, n.map((function(e, n) {
                    var a = n === s ? "chosen" : "";
                    return c.a.createElement("div", {
                        key: n,
                        className: "tab ".concat(a),
                        onClick: function(t) {
                            return function(e, t, n) {
                                e.stopPropagation(), n(t, 0), u(t), f(0)
                            }(t, n, e.callback)
                        }
                    }, c.a.createElement("div", {
                        className: "tabs-text"
                    }, e.label), c.a.createElement("div", {
                        className: "tabs_champions"
                    }, e.champions.map((function(a, r) {
                        var o = C()({
                            champion: !0,
                            chosen: n === s && r === p,
                            inactive: n !== s
                        });
                        return c.a.createElement("div", {
                            key: a,
                            className: o
                        }, c.a.createElement("div", {
                            className: "champion-image",
                            onClick: function(t) {
                                return function(e, t, n, a) {
                                    e.stopPropagation(), a(t, n), u(t), f(n)
                                }(t, n, r, e.callback)
                            }
                        }, c.a.createElement("img", {
                            src: t(a)
                        })))
                    }))))
                }))))
            },
            x = function(e) {
                var t = Object(l.n)(),
                    n = t.getChampionImg,
                    a = t.getChampionLoadingImg,
                    o = Object(i.useState)(0),
                    s = r()(o, 2),
                    u = s[0],
                    m = s[1],
                    d = Object(i.useState)(0),
                    p = r()(d, 2),
                    f = p[0],
                    g = p[1],
                    h = e.summonersRiftTopThree,
                    v = e.howlingAbyssTopThree;
                h = h || [], v = v || [];
                var b = [].concat(A()(h), A()(v)),
                    y = function(e, t) {
                        m(e), g(t)
                    },
                    O = [];
                if (h.length > 0 && O.push({
                        label: "SUMMONER'S RIFT",
                        champions: h.map((function(e) {
                            return e.championId
                        })),
                        callback: y
                    }), v.length > 0 && O.push({
                        label: "HOWLING ABYSS",
                        champions: v.map((function(e) {
                            return e.championId
                        })),
                        callback: y
                    }), 0 === O.length) return c.a.createElement("div", null);
                var E = [];
                b.forEach((function(e) {
                    E.push([{
                        statValue: e.gamesPlayed,
                        statLabel: "GAMES PLAYED",
                        statIcon: "https://static.u.gg/assets/lol/performance_analysis/icons/all_roles_icon.svg"
                    }, {
                        statValue: "".concat((100 * e.winRate).toFixed(1), "%"),
                        statLabel: "WIN RATE",
                        statIcon: "https://static.u.gg/assets/lol/performance_analysis/icons/victory_icon.svg"
                    }, {
                        statValue: e.kda.toFixed(1),
                        statLabel: "KDA",
                        statIcon: "https://static.u.gg/assets/lol/performance_analysis/icons/two_sword_icon.svg"
                    }, {
                        statValue: "".concat((100 * e.percentTeamGold).toFixed(1), "%"),
                        statLabel: "% OF TEAM GOLD",
                        statIcon: "https://static.u.gg/assets/lol/performance_analysis/icons/gold_icon.svg"
                    }, {
                        statValue: "".concat((100 * e.percentTeamDamage).toFixed(1), "%"),
                        statLabel: "% OF TEAM DAMAGE",
                        statIcon: "https://static.u.gg/assets/lol/performance_analysis/icons/sword_icon.svg"
                    }, {
                        statValue: e.diedToMost.deaths,
                        statLabel: "DIED TO MOST",
                        statIcon: n(e.diedToMost.championId),
                        iconType: "champion"
                    }, {
                        statValue: e.killedMost.kills,
                        statLabel: "KILLED MOST",
                        statIcon: n(e.killedMost.championId),
                        iconType: "champion"
                    }, {
                        statValue: e.lostAgainstMost.loses,
                        statLabel: "LOST AGAINST MOST",
                        statIcon: n(e.lostAgainstMost.championId),
                        iconType: "champion"
                    }, {
                        statValue: e.wonAgainstMost.wins,
                        statLabel: "WON AGAINST MOST",
                        statIcon: n(e.wonAgainstMost.championId),
                        iconType: "champion"
                    }])
                }));
                var w = u * h.length + f;
                return c.a.createElement("div", {
                    className: "champion-breakdown"
                }, c.a.createElement("div", {
                    className: "text-container"
                }, c.a.createElement("div", {
                    className: "small-header"
                }, "YOUR TOP 3"), c.a.createElement("div", {
                    className: "large-header"
                }, "CHAMPION BREAKDOWN"), c.a.createElement("div", {
                    className: "basic-text"
                }, "Hereâ€™s a breakdown of how you played your top three champions. Unless itâ€™s your teammateâ€™s fault, weâ€™ve yet to record you missing a skillshot.")), c.a.createElement(R, {
                    tabsData: O
                }), c.a.createElement("div", {
                    className: "champion-breakdown_table"
                }, c.a.createElement("div", {
                    className: "champion-loading-image"
                }, c.a.createElement("img", {
                    src: a(O[u].champions[f])
                })), c.a.createElement("div", {
                    className: "table-stats"
                }, E[w].map((function(e, t) {
                    return c.a.createElement("div", {
                        key: t,
                        className: "champion-data"
                    }, c.a.createElement("div", {
                        className: "data-container"
                    }, c.a.createElement("div", {
                        className: "data_value"
                    }, e.statValue), c.a.createElement("div", {
                        className: "data_label"
                    }, e.statLabel)), c.a.createElement("div", {
                        className: "data_icon"
                    }, c.a.createElement("img", {
                        className: "champion" === e.iconType ? "champion-icon" : "",
                        src: e.statIcon
                    })))
                })))))
            },
            M = function(e) {
                var t = e.mostPlayedChamps,
                    n = Object(i.useState)(0),
                    a = r()(n, 2),
                    o = a[0],
                    s = a[1],
                    l = function(e) {
                        var t = {
                            adc: "BOT",
                            supp: "SUPPORT",
                            mid: "MID",
                            top: "TOP",
                            jungle: "JUNGLE"
                        };
                        return t[e] ? t[e] : e
                    };
                if (!t) return null;
                var u = t.map((function(e, t) {
                        return {
                            label: l(e.roleName),
                            callback: function() {
                                return function(e) {
                                    s(e)
                                }(t)
                            }
                        }
                    })),
                    m = t.map((function(e) {
                        return e.topChamps.map((function(e) {
                            return {
                                champID: e.championId,
                                statText: "".concat((100 * e.winRate).toFixed(1), "%"),
                                label: "Winrate",
                                secondaryText: "".concat(e.gamesPlayed, " GAMES")
                            }
                        }))
                    }));
                return c.a.createElement("div", {
                    className: "most-played-champs"
                }, c.a.createElement("div", {
                    className: "small-header"
                }, "YOUR MOST PLAYED CHAMPS"), c.a.createElement("div", {
                    className: "most-played-champs_tabs"
                }, c.a.createElement(v, {
                    tabsData: u
                })), c.a.createElement("div", {
                    className: "circles-list"
                }, m[o].map((function(e, t) {
                    return c.a.createElement(k, {
                        key: t,
                        isLarge: !0,
                        data: e
                    })
                }))))
            },
            D = function(e) {
                var t = e.maxWidth,
                    n = e.perc,
                    a = e.color,
                    r = e.swapIcon,
                    o = e.value,
                    i = t * n;
                return c.a.createElement("div", {
                    className: "stat-bar-container"
                }, c.a.createElement("div", {
                    className: "stat-bar",
                    style: {
                        width: i,
                        backgroundColor: a
                    }
                }), r && c.a.createElement("img", {
                    className: "swap-icon",
                    src: r
                }), c.a.createElement("div", {
                    className: "stat-val"
                }, o))
            },
            G = function(e) {
                e.chosenTier;
                return e.stats.map((function(e, t) {
                    var n = parseFloat(e.first) >= parseFloat(e.second) ? 1 : parseFloat(e.first) / parseFloat(e.second),
                        a = parseFloat(e.second) >= parseFloat(e.first) ? 1 : parseFloat(e.second) / parseFloat(e.first);
                    return c.a.createElement("div", {
                        key: t
                    }, c.a.createElement("div", {
                        className: "bar-comparison-element"
                    }, c.a.createElement("div", {
                        className: "stat-container"
                    }, c.a.createElement("div", {
                        className: "KDA-text"
                    }, e.label), c.a.createElement(D, {
                        maxWidth: 380,
                        perc: n,
                        color: "#dba54b",
                        thousands: e.thousands,
                        value: e.first
                    }), c.a.createElement(D, {
                        maxWidth: 380,
                        perc: a,
                        color: "#08a6ff",
                        thousands: e.thousands,
                        value: e.second,
                        swapIcon: Object(l.s)("lol/performance_analysis/icons/".concat("swap_arrows.svg"))
                    })), c.a.createElement("img", {
                        className: "icon",
                        src: Object(l.s)("lol/performance_analysis/icons/".concat(e.iconImg))
                    })))
                }))
            },
            B = n(387),
            q = n(6),
            U = (n(141), n(231)),
            F = n(232);

        function $(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? $(Object(n), !0).forEach((function(t) {
                    f()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function W(e, t) {
            var n = function(e) {
                var t = {},
                    n = Object(F.a)(e),
                    a = n && n.objectives || {};
                return a ? (Object.keys(a).forEach((function(e) {
                    var n, r;
                    t[e] = (n = a[e], r = {
                        cs: 0,
                        gold: 0,
                        wardsKilled: 0,
                        minutes: 0,
                        matches: 0
                    }, n.forEach((function(e) {
                        r = {
                            cs: r.cs + (e.jungle_cs + e.enemy_jungle_cs + e.cs) * e.matches,
                            gold: r.gold + e.gold * e.matches,
                            wardsKilled: r.wardsKilled + e.wards_killed * e.matches,
                            minutes: r.minutes + e.match_duration * e.matches,
                            matches: r.matches + e.matches
                        }
                    })), {
                        averageCsPerMinute: r.cs / r.minutes,
                        averageGoldPerMinute: r.gold / r.minutes,
                        averageWardsKilledPerGame: r.wardsKilled / r.matches,
                        averageMinutesPerGame: r.minutes / r.matches
                    })
                })), t) : t
            }(t);
            return function(e, t) {
                if (!e || !t) return;
                for (var n = {}, a = 0, o = Object.entries(e); a < o.length; a++) {
                    var i = r()(o[a], 1)[0];
                    n[i] = e[i]
                }
                for (var c = 0, s = Object.entries(t); c < s.length; c++) {
                    var l = r()(s[c], 1)[0];
                    n[l] ? n[l] = z(z({}, n[l]), t[l]) : n[l] = t[l]
                }
                return n
            }(n, function(e, t) {
                var n = {},
                    a = Object(U.a)(e),
                    r = a && a.combat || {};
                return (r && Object.keys(r)).forEach((function(e) {
                    var a, o, i;
                    n[e] = (a = r[e], o = t[e] || 0, i = {
                        damageMitigated: 0,
                        damageHealed: 0,
                        damageDealt: 0,
                        kills: 0,
                        deaths: 0,
                        assists: 0,
                        matches: 0
                    }, a.forEach((function(e) {
                        i = {
                            damageMitigated: i.damageMitigated + e.damage_mitigated * e.matches,
                            damageHealed: i.damageHealed + e.heals * e.matches,
                            damageDealt: i.damageDealt + e.damage * e.matches,
                            kills: i.kills + e.kills * e.matches,
                            deaths: i.deaths + e.deaths * e.matches,
                            assists: i.assists + e.assists * e.matches,
                            matches: i.matches + e.matches
                        }
                    })), {
                        averageDmgHealedPerGame: i.damageHealed / i.matches,
                        averageDmgMitigatedPerGame: i.damageMitigated / i.matches,
                        averageDmgDealtPerMinute: i.damageDealt / (i.matches * o),
                        averageKda: (i.kills + i.assists) / i.deaths
                    })
                })), n
            }(e, function(e) {
                for (var t = {}, n = 0, a = Object.entries(e); n < a.length; n++) {
                    var o = r()(a[n], 1)[0];
                    t[o] = e[o].averageMinutesPerGame
                }
                return t
            }(n)))
        }
        var V = n(283);

        function H(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function K(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? H(Object(n), !0).forEach((function(t) {
                    f()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var J, Y = function(e) {
                var t = e.positionBreakdown,
                    n = function(e) {
                        var t = {
                            adc: "BOT",
                            supp: "SUPPORT",
                            mid: "MID",
                            top: "TOP",
                            jungle: "JUNGLE"
                        };
                        return t[e] ? t[e] : e
                    };
                if (!t) return null;
                var a, o, s, u, m, d = t.map((function(e, t) {
                        return {
                            label: n(e.roleName),
                            callback: function() {
                                return function(e) {
                                    j(e)
                                }(t)
                            }
                        }
                    })),
                    p = [{
                        value: "bronze",
                        label: "Bronze Players"
                    }, {
                        value: "silver",
                        label: "Silver Players"
                    }, {
                        value: "gold",
                        label: "Gold Players"
                    }, {
                        value: "platinum",
                        label: "Platinum Players"
                    }, {
                        value: "diamond",
                        label: "Diamond Players"
                    }],
                    g = Object(i.useState)(p[0]),
                    h = r()(g, 2),
                    b = h[0],
                    y = h[1],
                    O = Object(i.useState)(0),
                    E = r()(O, 2),
                    w = E[0],
                    j = E[1],
                    N = Object(i.useState)({
                        loading: !0
                    }),
                    S = r()(N, 2),
                    k = S[0],
                    _ = S[1];
                a = k, o = _, s = b.value, u = Object(V.a)({
                    rank: s,
                    patch: "9_24"
                }), m = Object(V.d)({
                    rank: s,
                    patch: "9_24"
                }), Object(i.useEffect)((function() {
                    o(K(K({}, a), {}, {
                        loading: !0
                    })), Promise.all([u().then((function(e) {
                        return e.json()
                    })), m().then((function(e) {
                        return e.json()
                    }))]).then((function(e) {
                        var t, n = r()(e, 2),
                            i = W(n[0], n[1]);
                        o(K(K({}, a), {}, (t = {}, f()(t, s, i), f()(t, "loading", !1), t)))
                    })).catch((function(e) {
                        o(K(K({}, a), {}, {
                            error: e
                        })), console.error("Error with promise:", e)
                    }))
                }), [s]);
                var T = t.map((function(e) {
                    var n = !k.loading && k && k[b.value] ? k[b.value][t[w].roleName] : null;
                    return {
                        playRate: (100 * e.percentPlayed).toFixed(1),
                        stats: n && !k.loading && k && k[b.value] ? [{
                            label: "KDA",
                            first: e.kda.toFixed(1),
                            second: n.averageKda.toFixed(1),
                            iconImg: "white_sword_icon.png",
                            thousands: !1
                        }, {
                            label: "AVG CS / MIN",
                            first: e.avgCsPerMin.toFixed(1),
                            second: n.averageCsPerMinute.toFixed(1),
                            iconImg: "white_cs_icon.png",
                            thousands: !1
                        }, {
                            label: "GOLD PER MIN",
                            first: e.avgGoldPerMin.toFixed(0),
                            second: n.averageGoldPerMinute.toFixed(0),
                            iconImg: "white_gold_icon.png",
                            thousands: !1
                        }, {
                            label: "AVG DMG MITIGATED",
                            first: e.avgDmgMitigated.toFixed(0),
                            second: n.averageDmgMitigatedPerGame.toFixed(0),
                            iconImg: "white_ward_icon.png",
                            thousands: !0
                        }, {
                            label: "AVG HEALING",
                            first: e.avgDmgHealed.toFixed(0),
                            second: n.averageDmgHealedPerGame.toFixed(0),
                            iconImg: "white_ward_icon.png",
                            thousands: !0
                        }, {
                            label: "DMG PER MIN",
                            first: e.avgDmgPerMin.toFixed(0),
                            second: n.averageDmgDealtPerMinute.toFixed(0),
                            iconImg: "white_sword_icon.png",
                            thousands: !0
                        }] : []
                    }
                }))[w];
                return c.a.createElement("div", {
                    className: "position-breakdown"
                }, c.a.createElement("div", {
                    className: "header-text "
                }, c.a.createElement("div", {
                    className: "small-header"
                }, "YOUR TOP 2 POSITIONS"), c.a.createElement("div", {
                    className: "large-header"
                }, "POSITION BREAKDOWN"), c.a.createElement("div", {
                    className: "basic-text"
                }, "See a breakdown of your top two most played positions and compare yourself with other players.")), c.a.createElement("div", {
                    className: "role-tabs"
                }, c.a.createElement(v, {
                    tabsData: d,
                    loading: k.loading
                })), c.a.createElement("div", {
                    className: "positional-divider"
                }, c.a.createElement("img", {
                    src: Object(l.s)("lol/performance_analysis/images/positional_divider_left.svg")
                }), c.a.createElement("img", {
                    className: "roleIcon",
                    src: Object(q.d)(n(t[w].roleName).toLowerCase())
                }), c.a.createElement("img", {
                    src: Object(l.s)("lol/performance_analysis/images/positional_divider_right.svg")
                })), c.a.createElement("div", {
                    className: "sub-header-text"
                }, c.a.createElement("div", {
                    className: "large-header"
                }, T.playRate, "%"), c.a.createElement("div", {
                    className: "small-header"
                }, n(t[w].roleName)), c.a.createElement("div", {
                    className: "basic-text"
                }, "PLAYRATE")), c.a.createElement("div", {
                    className: "breakdown-filter"
                }, c.a.createElement(B.a, {
                    isDisabled: k.loading,
                    width: "175px",
                    onChange: function(e) {
                        y(e)
                    },
                    options: p,
                    value: b.value
                })), c.a.createElement("div", {
                    className: "breakdown-legend"
                }, c.a.createElement("div", {
                    className: "legend-holder"
                }, c.a.createElement("div", {
                    className: "legend-container"
                }, c.a.createElement("div", {
                    className: "breakdown-circle"
                }), c.a.createElement("div", {
                    className: "legend-text"
                }, "Your Average")), c.a.createElement("div", {
                    className: "legend-container"
                }, c.a.createElement("div", {
                    className: "breakdown-circle blue"
                }), c.a.createElement("div", {
                    className: "legend-text"
                }, "Tier Average"))), c.a.createElement("div", {
                    className: "bar-explanation"
                }, "(Higher results are better)")), k.loading ? c.a.createElement("div", {
                    className: "position-breakdown-loader spinthatshit-loader"
                }) : c.a.createElement("div", {
                    className: "breakdown-loaded-content"
                }, c.a.createElement(G, {
                    chosenTier: b,
                    stats: T.stats
                })))
            },
            Q = function(e) {
                var t = e.teamPlayers;
                if (!t) return null;
                var n = [];
                return "-1" !== t.bestWinRate.accountId && n.push({
                    iconID: t.bestWinRate.profileIcon,
                    statText: "".concat((100 * t.bestWinRate.winRate).toFixed(0), "%"),
                    label: "BEST WINRATE",
                    summonerName: t.bestWinRate.summonerName
                }), "-1" !== t.mostAssists.accountId && n.push({
                    iconID: t.mostAssists.profileIcon,
                    statText: t.mostAssists.assists,
                    label: "MOST ASSISTS",
                    summonerName: t.mostAssists.summonerName
                }), "-1" !== t.bestKda.accountId && n.push({
                    iconID: t.bestKda.profileIcon,
                    statText: t.bestKda.kda.toFixed(1),
                    label: "BEST KDA",
                    summonerName: t.bestKda.summonerName
                }), 0 === n.length ? null : c.a.createElement("div", {
                    className: "team-players"
                }, c.a.createElement("div", {
                    className: "header-text"
                }, c.a.createElement("div", {
                    className: "small-header"
                }, "GET CARRIED"), c.a.createElement("div", {
                    className: "large-header"
                }, "TEAM PLAYERS"), c.a.createElement("div", {
                    className: "basic-text"
                }, "Your team is always holding you back, these people a little less.")), c.a.createElement("div", {
                    className: "profile-icon-list"
                }, n.map((function(e, t) {
                    return c.a.createElement(S, {
                        key: t,
                        isLarge: !0,
                        data: e
                    })
                }))))
            },
            Z = n(19),
            X = n.n(Z),
            ee = n(20),
            te = "endOfYearReview(regionId: $regionId, summonerName: $summonerName, season: $season) {\n    ".concat("\n        summonersRiftStats {\n        avgAssists\n        avgCsPerMin\n        avgDeaths\n        avgDragons\n        avgGoldPerMin\n        avgKills\n        avgTowers\n        avgWardsPerGame\n        fastestTower\n        kda\n        mostDragons\n    }\n    howlingAbyssStats {\n        avgAssists\n        avgDeaths\n        avgGoldPerMin\n        avgKills\n        kda\n        uniqueChampionWins\n    }\n    multiKills {\n        doubleKills\n        pentaKills\n        quadraKills\n        tripleKills\n    }\n    allTheDamage {\n        bestCsPerMin {\n          championId\n          csPerMin\n        }\n        bestDamagePerDeath {\n          championId\n          damagePerDeath\n        }\n        bestKda {\n          championId\n          kda\n        }\n        bestWinRate {\n          championId\n          winRate\n        }\n      }\n      BestAndWorst {\n        diedToMost {\n          championId\n          deaths\n        }\n        killedMost {\n          championId\n          kills\n        }\n        lostAgainstMost {\n          championId\n          loses\n        }\n        wonAgainstMost {\n          championId\n          wins\n        }\n      }\n      mostPlayedChamps {\n        roleName\n        topChamps {\n          championId\n          gamesPlayed\n          percentPlayed\n          winRate\n        }\n      }\n      positionBreakdown {\n        avgCsPerMin\n        avgDmgHealed\n        avgDmgMitigated\n        avgDmgPerMin\n        avgGoldPerMin\n        avgWardsPerGame\n        kda\n        percentPlayed\n        roleName\n      }\n      howlingAbyssTopThree {\n        championId\n        gamesPlayed\n        kda\n        percentTeamDamage\n        percentTeamGold\n        winRate\n        diedToMost {\n          championId\n          deaths\n        }\n        lostAgainstMost {\n          championId\n          loses\n        }\n        wonAgainstMost {\n          championId\n          wins\n        }\n        killedMost {\n          championId\n          kills\n        }\n      }\n      summonersRiftTopThree {\n        championId\n        gamesPlayed\n        kda\n        percentTeamDamage\n        percentTeamGold\n        winRate\n        diedToMost {\n          championId\n          deaths\n        }\n        killedMost {\n          championId\n          kills\n        }\n        lostAgainstMost {\n          championId\n          loses\n        }\n        wonAgainstMost {\n          championId\n          wins\n        }\n      }\n      teamPlayers{\n        bestKda {\n          accountId\n          kda\n          profileIcon\n          summonerName\n        }\n        bestWinRate{\n          accountId\n          winRate\n          profileIcon\n        summonerName\n        }\n        mostAssists {\n          accountId\n          assists\n          profileIcon\n          summonerName\n        }\n        mostGames {\n          accountId\n          totalGames\n          profileIcon\n          summonerName\n        }\n      }\n      playerInfo {\n        iconId\n      }\n      soloRankScore {\n        rank\n        tier\n        wins\n        losses\n      }\n      flexRankScore{\n        rank\n        tier\n        wins\n        losses\n      }\n", "\n  }"),
            ne = Object(ee.a)(J || (J = X()(["\n    query YearInReview(\n        $regionId: String!,\n        $summonerName: String!,\n        $season: Int\n    ) {\n        ", "\n    }\n"])), te),
            ae = n(216),
            re = n(15),
            oe = (n(684), function(e) {
                Object(s.g)();
                var t = Object(s.h)(),
                    n = Object(u.a)(re.u, {}),
                    a = (n.loading, n.error, n.data),
                    r = function() {
                        if (navigator && navigator.clipboard) {
                            var e = window.location,
                                t = e.port,
                                n = e.protocol,
                                r = e.hostname,
                                o = e.pathname,
                                i = a.getSettings.lolSettings.summoners[0],
                                c = i.regionId,
                                s = i.summonerName,
                                l = "".concat(n, "//").concat(r).concat(t ? ":".concat(t) : "").concat(o, "?region=").concat(c, "&summonerName=").concat(s, "&sharing=true");
                            navigator.clipboard.writeText(l).then((function() {
                                ae.NotificationManager.success("Link copied to clipboard")
                            }), (function(e) {
                                ae.NotificationManager.error("Could not copy to clipboard")
                            }))
                        }
                    };
                return c.a.createElement("div", {
                    className: "performance-analysis_footer"
                }, c.a.createElement("img", {
                    className: "review-icon",
                    src: "https://static.u.gg/assets/lol/performance_analysis/images/L20_gold.svg"
                }), "true" !== Object(d.I)(t.search.substring(1)).sharing ? c.a.createElement(c.a.Fragment, null, c.a.createElement("button", {
                    className: "footer-cta",
                    onClick: r
                }, c.a.createElement("img", {
                    src: "https://s3.amazonaws.com/static.u.gg/assets/lol/performance_analysis/icons/clipboard.svg"
                }), c.a.createElement("span", null, "SHARE")), c.a.createElement("div", {
                    className: "large-text"
                }, "SHARE YOUR YEAR IN REVIEW"), c.a.createElement("div", {
                    className: "small-text"
                }, "Same time and place next year sound good? (See you in 2021.)")) : c.a.createElement(c.a.Fragment, null))
            }),
            ie = n(12),
            ce = function(e) {
                Object(s.g)();
                return c.a.createElement("div", {
                    className: "performance-analysis_not-found"
                }, c.a.createElement("div", {
                    className: "not-found_header"
                }, c.a.createElement("div", null, "THIS 2020 YEAR IN"), c.a.createElement("div", null, "REVIEW DOESN'T EXIST")), c.a.createElement("img", {
                    className: "not-found_divider",
                    src: "https://static.u.gg/assets/lol/performance_analysis/images/performance_analysis_divider.png"
                }), c.a.createElement("div", {
                    className: "not-found_message"
                }, c.a.createElement("div", null, "Either this review does not exist or the user who generated it ", c.a.createElement("br", null), " no longer has U.GG BOOST.")), c.a.createElement("div", {
                    className: "premium-cta"
                }, c.a.createElement("div", {
                    className: "cta-header"
                }, "GET BOOST"), c.a.createElement("div", {
                    className: "cta-text"
                }, "GET YOUR OWN 2020 YEAR IN REVIEW, PLUS ", c.a.createElement("br", null), " OTHER PERKS"), c.a.createElement(ie.b, {
                    className: "btn-light-blue",
                    to: {
                        pathname: "/",
                        state: {
                            scrollToPlans: !0
                        }
                    }
                }, "Check Out BOOST")))
            };
        n(44);
        var se = n(186),
            le = n(275),
            ue = ["processing", "enqueued"];
        t.a = function(e) {
            var t = Object(i.useState)(!1),
                n = r()(t, 2),
                a = n[0],
                p = n[1],
                f = Object(s.g)(),
                g = Object(m.a)("yirLanding"),
                h = Object(d.I)(f.location.search.substring(1)),
                v = h.region,
                b = h.summonerName,
                O = (h.year, h.sharing),
                E = Object(u.a)(re.u, {
                    skip: O,
                    fetchPolicy: "network-only"
                }),
                j = E.data,
                S = E.loading,
                k = null;
            O ? k = {
                regionId: v,
                summonerName: b,
                season: 14
            } : j && (k = {
                regionId: j.getSettings.lolSettings.summoners[0].regionId,
                summonerName: j.getSettings.lolSettings.summoners[0].summonerName,
                season: 14
            });
            var T = Object(u.a)(se.a, {
                    variables: k,
                    fetchPolicy: "network-only",
                    skip: !j && !O
                }),
                P = T.data,
                A = T.loading,
                L = P && "ready" === P.summonerReviewStatus.status,
                C = P && ue.includes(P.summonerReviewStatus.status);
            Object(i.useEffect)((function() {
                o.window && p(!0)
            }));
            var R = Object(u.a)(ne, {
                variables: k,
                skip: !L
            }).data;
            if (!A && !S)
                if (L || C) {
                    if (C) return c.a.createElement("div", {
                        className: "performance-container"
                    }, c.a.createElement(le.a, null))
                } else {
                    if (O) return c.a.createElement("div", {
                        className: "performance-container"
                    }, c.a.createElement(ce, null));
                    g()
                } if (!a || !R || !P) return c.a.createElement("div", null);
            var D = R.endOfYearReview,
                G = D.summonersRiftStats,
                B = D.howlingAbyssStats,
                q = D.multiKills,
                U = D.allTheDamage,
                F = D.BestAndWorst,
                $ = D.teamPlayers,
                z = D.playerInfo,
                W = D.soloRankScore,
                V = D.flexRankScore,
                H = D.mostPlayedChamps,
                K = D.positionBreakdown,
                J = D.summonersRiftTopThree,
                Z = D.howlingAbyssTopThree,
                X = [];
            return "-1" !== $.bestWinRate.accountId && X.push({
                iconID: $.bestWinRate.profileIcon,
                statText: "".concat((100 * $.bestWinRate.winRate).toFixed(0), "%"),
                label: "BEST WINRATE",
                summonerName: $.bestWinRate.summonerName
            }), "-1" !== $.mostAssists.accountId && X.push({
                iconID: $.mostAssists.profileIcon,
                statText: $.mostAssists.assists,
                label: "MOST ASSISTS",
                summonerName: $.mostAssists.summonerName
            }), "-1" !== $.bestKda.accountId && X.push({
                iconID: $.bestKda.profileIcon,
                statText: $.bestKda.kda.toFixed(1),
                label: "BEST KDA",
                summonerName: $.bestKda.summonerName
            }), G || B ? c.a.createElement("div", {
                className: "performance-container"
            }, c.a.createElement(y, {
                summonerName: k ? k.summonerName : "SUMMONER NAME",
                playerInfo: z,
                soloRankScore: W,
                flexRankScore: V,
                mostPlayedChamps: H,
                howlingAbyssTopThree: Z
            }), c.a.createElement(w, {
                summonerRiftStats: G,
                howlingAbyssStats: B
            }), (G || B) && c.a.createElement("img", {
                className: "img-divider mini",
                src: Object(l.s)("lol/performance_analysis/images/performance_analysis_mini_divider.png")
            }), c.a.createElement(N, {
                multiKills: q
            }), q && c.a.createElement("img", {
                className: "img-divider",
                src: Object(l.s)("lol/performance_analysis/images/performance_analysis_divider.png")
            }), c.a.createElement(x, {
                summonersRiftTopThree: J,
                howlingAbyssTopThree: Z
            }), (J || Z) && c.a.createElement("img", {
                className: "img-divider mini",
                src: Object(l.s)("lol/performance_analysis/images/performance_analysis_mini_divider.png")
            }), c.a.createElement(_, {
                allTheDamage: U
            }), U && c.a.createElement("img", {
                className: "img-divider mini",
                src: Object(l.s)("lol/performance_analysis/images/performance_analysis_mini_divider.png")
            }), c.a.createElement(I, {
                bestAndWorstData: F
            }), F && c.a.createElement("img", {
                className: "img-divider",
                src: Object(l.s)("lol/performance_analysis/images/performance_analysis_divider.png")
            }), K && K.length > 0 && c.a.createElement(Y, {
                positionBreakdown: K
            }), K && K.length > 0 && c.a.createElement("img", {
                className: "img-divider mini",
                src: Object(l.s)("lol/performance_analysis/images/performance_analysis_mini_divider.png")
            }), H && H.length > 0 && c.a.createElement(M, {
                mostPlayedChamps: H
            }), H && H.length > 0 && c.a.createElement("img", {
                className: "img-divider",
                src: Object(l.s)("lol/performance_analysis/images/performance_analysis_divider.png")
            }), 3 === X.length && c.a.createElement(Q, {
                teamPlayers: $
            }), 3 === X.length && c.a.createElement("img", {
                className: "img-divider",
                src: Object(l.s)("lol/performance_analysis/images/performance_analysis_divider.png")
            }), c.a.createElement("div", {
                className: "performance-analysis_footer-container"
            }, c.a.createElement(oe, null))) : c.a.createElement("div", {
                className: "performance-container"
            }, c.a.createElement("div", {
                className: "large-header"
            }, "No games played in 2020!"))
        }
    },
    596: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n.n(a),
            o = n(0),
            i = n.n(o),
            c = n(17),
            s = n(28),
            l = n(168),
            u = n(43),
            m = n(10),
            d = n(69),
            p = (n(284), n(127)),
            f = n(31),
            g = n.n(f),
            h = {
                re_en_US: /(joined the lobby)(.*)|(joined the room.)(.*)/,
                re_pt_BR: /(entrou no saguÃ£o)(.*)/,
                re_cs_CZ: /(vstoupil do lobby)(.*)/,
                re_hu_HU: /(csatlakozott az elÅ‘szobÃ¡hoz)(.*)/,
                re_pl_PL: /(doÅ‚Ä…cza do pokoju)(.*)/,
                re_ro_RO: /(s-a alÄƒturat lobby-ului)(.*)/,
                re_el_GR: /(Î¼Ï€Î®ÎºÎµ ÏƒÏ„Î¿ Î»ÏŒÎ¼Ï€Î¹)(.*)/,
                re_de_DE: /(ist der Lobby beigetreten)(.*)/,
                re_es_ES: /(se ha unido a la sala.)(.*)/,
                re_fr_FR: /(a rejoint le salon)(.*)/,
                re_it_IT: /(si Ã¨ unito alla lobby)(.*)/,
                re_ja_JP: /(ãŒãƒ­ãƒ“ãƒ¼ã«å‚åŠ ã—ã¾ã—ãŸ)(.*)/,
                re_es_MX: /(se uniÃ³ a la sala)(.*)/,
                re_ko_KR: /(ë‹˜ì´ ë¡œë¹„ì— ì°¸ê°€í•˜ì…¨ìŠµë‹ˆë‹¤.)(.*)/,
                re_ru_RU: /(Ð¿Ñ€Ð¸ÑÐ¾ÐµÐ´Ð¸Ð½Ð¸Ð»ÑÑ Ðº Ð»Ð¾Ð±Ð±Ð¸)(.*)/,
                re_tr_TR: /(lobiye katÄ±ldÄ±)(.*)/,
                re_zh_CN: /(åŠ å…¥äº†é˜Ÿä¼èŠå¤©)(.*)/,
                re_zh_TW: /(é€²å…¥çµ„éšŠæˆ¿é–“)(.*)/,
                re_vn_VN: /(Ä‘Ã£ tham gia sáº£nh chá».)(.*)/,
                re_th_TH: /(à¹€à¸‚à¹‰à¸²à¸£à¹ˆà¸§à¸¡à¸¥à¹‡à¸­à¸šà¸šà¸µà¹‰)(.*)/
            },
            v = {
                re_cs_CZ: /(HrÃ¡Ä)/,
                re_el_GR: /(ÎŸ Ï€Î±Î¯ÎºÏ„Î·Ï‚)/
            };
        var b = function(e) {
                var t = Object(c.g)(),
                    n = (Object(c.h)(), Object(m.useGlobal)("clientRegion")),
                    a = r()(n, 1)[0],
                    s = e.multiSearchVariables,
                    l = s.summonerName,
                    u = s.regionId,
                    f = Object(o.useState)(u || a),
                    b = r()(f, 2),
                    y = b[0],
                    O = b[1],
                    E = Object(o.useState)(l.join(", ")),
                    w = r()(E, 2),
                    j = w[0],
                    N = w[1];
                return i.a.createElement("div", {
                    className: "multisearch-search-container"
                }, i.a.createElement("div", {
                    className: "search-header"
                }, i.a.createElement("div", {
                    className: "region-selector"
                }, i.a.createElement(p.a, {
                    currentRegion: y,
                    onApply: function(e) {
                        return O(e)
                    },
                    isMasthead: !0,
                    disableTooltip: !0
                })), i.a.createElement("div", {
                    className: "header-text"
                }, "Search multiple Summoner names or paste your game lobby.")), i.a.createElement("div", {
                    className: "textarea-container"
                }, i.a.createElement("textarea", {
                    onChange: function(e) {
                        return N(e.target.value)
                    },
                    value: j,
                    autoFocus: !0
                }), "" === j && i.a.createElement("div", {
                    className: "textarea-placeholder"
                }, "Tyler1 joined the lobby ", i.a.createElement("br", null), "Bjergsen joined the lobby ", i.a.createElement("br", null), "Doublelift joined the lobby ", i.a.createElement("br", null), "CoreJJ joined the lobby ", i.a.createElement("br", null), "Alphari joined the lobby")), i.a.createElement("div", {
                    className: "search-btn-row"
                }, i.a.createElement(d.a, {
                    className: "btn-blue search-btn",
                    label: "Search",
                    onClick: function() {
                        var e = function(e) {
                            var t = new RegExp(Object.values(h).map((function(e) {
                                    return e.source
                                })).join("|"), "g"),
                                n = new RegExp(Object.values(v).map((function(e) {
                                    return e.source
                                })).join("|")),
                                a = e.split(/[,\n\r]/g).map((function(e) {
                                    return (e = (e = e.replace(t, "")).replace(n, "")).trim()
                                })).filter((function(e) {
                                    return e.length > 0
                                }));
                            return g()(new Set(a))
                        }(j);
                        t.push({
                            search: "summoners=".concat(e.join(","), "&region=").concat(y)
                        })
                    }
                })))
            },
            y = n(19),
            O = n.n(y),
            E = n(14),
            w = n.n(E),
            j = n(12),
            N = n(20),
            S = n(145),
            k = n(394),
            _ = function(e) {
                var t = e.promoProgress;
                return i.a.createElement("div", {
                    className: "promos"
                }, i.a.createElement("div", {
                    className: "promo-progress"
                }, t.split("").map((function(e, t) {
                    var n = w()("promo_game", {
                        promo_game__win: "W" === e,
                        promo_game__loss: "L" === e
                    });
                    return i.a.createElement("div", {
                        key: t,
                        className: n
                    })
                }))))
            },
            T = n(11),
            I = n.n(T),
            P = n(2),
            A = n(18),
            L = n(195);

        function C(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function R(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? C(Object(n), !0).forEach((function(t) {
                    I()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var x, M = function(e) {
                var t = Object(P.n)().getChampionImg,
                    n = e.title,
                    a = e.list,
                    r = e.size,
                    c = void 0 === r ? 5 : r,
                    s = Object(o.useMemo)((function() {
                        return a.map((function(e) {
                            return R(R({}, e), {}, {
                                kda: Object(A.f)(e.kills, e.deaths, e.assists),
                                winRate: Math.round((e.wins || 0) / e.games * 100)
                            })
                        })).concat(Array(c - a.length).fill(null))
                    }), [a]);
                return i.a.createElement("div", {
                    className: "player_champion-performance"
                }, i.a.createElement("div", {
                    className: "performance_title"
                }, n), i.a.createElement("div", {
                    className: "performance_list"
                }, s.map((function(e, n) {
                    return e && e.champId ? i.a.createElement("div", {
                        key: n,
                        className: "champion"
                    }, i.a.createElement("div", null, i.a.createElement("div", {
                        className: "champion-image-container"
                    }, i.a.createElement("img", {
                        src: t(e.champId)
                    })), i.a.createElement("strong", {
                        style: {
                            color: Object(L.a)(e.winRate)
                        }
                    }, e.winRate, "%")), i.a.createElement("div", {
                        className: "off-white"
                    }, e.kda, " KDA"), i.a.createElement("div", {
                        className: "off-white"
                    }, e.games, " games")) : i.a.createElement("div", {
                        key: n,
                        className: "champion"
                    })
                }))))
            },
            D = n(52),
            G = n.n(D),
            B = n(70),
            q = n(227),
            U = n(118),
            F = n(93),
            $ = function(e) {
                var t = e.lp;
                return e.promotedTo || isNaN(t) ? null : i.a.createElement("div", {
                    className: "lp-gain_loss"
                }, t > 0 ? i.a.createElement(U.ReactComponent, {
                    className: "lp-arrow gain"
                }) : t < 0 ? i.a.createElement(F.ReactComponent, {
                    className: "lp-arrow loss"
                }) : i.a.createElement("span", {
                    className: "no-diff"
                }, "â€“"), i.a.createElement("span", {
                    className: "lp-value"
                }, "".concat(Math.abs(t), " LP")))
            },
            z = function(e) {
                var t = e.promotedTo,
                    n = e.lp,
                    a = e.promoProgress;
                return !t || isNaN(n) && !a ? null : i.a.createElement("div", {
                    className: "rank-up"
                }, i.a.createElement(U.ReactComponent, {
                    className: "lp-arrow"
                }), i.a.createElement("img", {
                    className: "promoted-tier-img",
                    src: Object(P.c)(t.tier)
                }), i.a.createElement("div", {
                    className: "promoted-rank"
                }, Object(B.g)([t.tier, t.rank])))
            },
            W = function(e) {
                var t = e.matchLP,
                    n = e.serverLP,
                    a = Object(q.a)(t, n) || {},
                    r = a.lp,
                    o = (a.placement, a.promoProgress),
                    c = (a.promoTarget, a.promotedTo);
                return t ? i.a.createElement("div", {
                    className: "match-lp-display"
                }, i.a.createElement($, {
                    lp: r,
                    promotedTo: c
                }), o && i.a.createElement(_, {
                    promoProgress: o
                }), i.a.createElement(z, {
                    lp: r,
                    promoProgress: o,
                    promotedTo: c
                })) : i.a.createElement("span", null, "- ? LP")
            },
            V = n(6),
            H = function(e) {
                var t = Object(P.n)().getChampionImg,
                    n = e.matches,
                    a = e.rankSnapshots,
                    c = e.size,
                    s = void 0 === c ? 10 : c,
                    l = Object(o.useMemo)((function() {
                        var e = {
                            1: 0,
                            2: 0,
                            3: 0,
                            4: 0,
                            5: 0
                        };
                        return n.slice(0, s).forEach((function(t) {
                            e[t.role] += 1
                        })), Object.entries(e).map((function(e) {
                            return [Object(V.h)(e[0]), Math.round(e[1] / s * 100)]
                        })).sort((function(e, t) {
                            return t[1] - e[1]
                        })).slice(0, 2).filter((function(e) {
                            return e[1] > 0
                        }))
                    }), [n]),
                    u = Object(o.useMemo)((function() {
                        return n.filter((function(e) {
                            return e.matchDuration > 300
                        })).concat(Array(s).fill(null)).slice(0, s)
                    }), [n]),
                    m = Object(q.b)(n, a);
                return i.a.createElement("div", {
                    className: "player_recent-matches"
                }, i.a.createElement("div", {
                    className: "recent-matches_header"
                }, i.a.createElement("div", {
                    className: "recent-matches_title"
                }, "Recent Matches"), i.a.createElement("div", {
                    className: "recent-matches_roles"
                }, l.map((function(e) {
                    var t = r()(e, 2),
                        n = t[0],
                        a = t[1];
                    return i.a.createElement("div", {
                        key: n,
                        className: "role"
                    }, Object(V.f)(n), i.a.createElement("span", {
                        className: "off-white"
                    }, a, "%"))
                })))), i.a.createElement("div", {
                    className: "recent-matches_list"
                }, u.map((function(e, n) {
                    if (!e) return i.a.createElement("div", {
                        key: n,
                        className: "recent-matches_match"
                    });
                    var a = e.matchCreationTime + 1e3 * e.matchDuration,
                        r = G()(a).locale("multi-search-match").fromNow();
                    return i.a.createElement("div", {
                        key: n,
                        className: w()("recent-matches_match", {
                            "recent-matches_match__win": e.win,
                            "recent-matches_match__loss": !e.win
                        })
                    }, i.a.createElement("div", {
                        className: "outcome-bar"
                    }), i.a.createElement("div", {
                        className: "champion-image-container"
                    }, i.a.createElement("img", {
                        src: t(e.championId)
                    })), i.a.createElement("div", {
                        className: "match-lp"
                    }, i.a.createElement(W, {
                        matchLP: m[e.matchId],
                        serverLP: e.lpInfo
                    })), i.a.createElement("div", {
                        className: "kda"
                    }, i.a.createElement("span", {
                        className: "off-white"
                    }, e.kills || 0), i.a.createElement("span", {
                        className: "backslash"
                    }, " / "), i.a.createElement("span", {
                        className: "off-white"
                    }, e.deaths || 0), i.a.createElement("span", {
                        className: "backslash"
                    }, " / "), i.a.createElement("span", {
                        className: "off-white"
                    }, e.assists || 0)), i.a.createElement("div", {
                        className: "off-white match-time"
                    }, r))
                }))))
            },
            K = n(61),
            J = Object(N.a)(x || (x = O()(["\n  query MoreMultiSearchData(\n    $summonerName: String!\n    $regionId: String!\n  ) {\n    getHistoricRanks(\n      queueType: 420,\n      summonerName: $summonerName,\n      regionId: $regionId\n    ) {\n      lp\n      queueId\n      rank\n      season\n      tier\n    }\n    getSummonerRankSnapshots(\n      queueType: [420],\n      regionId: $regionId,\n      summonerName: $summonerName\n    ){\n      insertedAt\n      losses\n      lp\n      promoProgress\n      queueId\n      rank\n      tier\n      wins\n    }\n    fetchPlayerMatchSummaries(\n      championId: [],\n      page: 1,\n      queueType: [420],\n      regionId: $regionId,\n      role: [],\n      seasonId: ", ",\n      summonerName: $summonerName\n    ) {\n      matchSummaries {\n        assists\n        championId\n        deaths\n        kills\n        queueType\n        regionId\n        role\n        summonerName\n        win\n        matchId\n        matchCreationTime\n        matchDuration\n        lpInfo {\n          lp\n          placement\n          promoProgress\n          promoTarget\n          promotedTo {\n            tier\n            rank\n          }\n        }\n      }\n    }\n  }\n"])), K.a),
            Y = function(e) {
                var t = e.data,
                    n = e.regionId,
                    a = t || {},
                    r = a.bestChamps,
                    o = a.rankData,
                    c = a.roleStats,
                    s = a.summonerName,
                    l = (a.totalGamesLastFifteen, a.winperc, a.winsLastFifteen, a.winstreak),
                    u = a.worstChamps,
                    m = Object(S.a)(J, {
                        variables: {
                            summonerName: s,
                            regionId: n
                        }
                    }),
                    d = m.data,
                    p = (m.loading, m.error, d || {}),
                    f = p.getHistoricRanks,
                    g = p.getSummonerRankSnapshots,
                    h = (p.fetchPlayerMatchSummaries || {}).matchSummaries,
                    v = o || {},
                    b = v.tier,
                    y = v.rank,
                    O = v.lp,
                    E = v.promoProgress,
                    N = v.wins,
                    T = (N || 0) + (v.losses || 0),
                    I = Math.round((N || 0) / T * 100);
                return i.a.createElement("div", {
                    className: "multisearch-player"
                }, i.a.createElement("div", {
                    className: "player_historic-ranks"
                }, f && i.a.createElement(k.a, {
                    data: f
                })), i.a.createElement("div", {
                    className: "player_info"
                }, i.a.createElement("div", {
                    className: "rank-image-container"
                }, i.a.createElement("img", {
                    src: Object(P.c)(o && o.tier || "unranked")
                })), i.a.createElement(j.b, {
                    className: "summoner-name",
                    to: "/lol/profile/".concat(n, "/").concat(s.toLowerCase())
                }, s), i.a.createElement("div", {
                    className: "current-rank"
                }, b ? i.a.createElement("div", {
                    className: "flex-center"
                }, i.a.createElement("strong", {
                    style: {
                        color: Object(B.h)(b)
                    }
                }, Object(B.f)([b, y])), i.a.createElement("span", {
                    className: "backslash"
                }, "Â /Â "), E ? i.a.createElement(_, {
                    promoProgress: E
                }) : i.a.createElement("span", {
                    className: "off-white"
                }, O, " LP")) : i.a.createElement("strong", {
                    className: "current-rank_unranked"
                }, "Unranked")), i.a.createElement("div", {
                    className: "current-games"
                }, isNaN(I) ? i.a.createElement("span", null, "â€”") : i.a.createElement("span", null, i.a.createElement("strong", null, I, "%"), i.a.createElement("span", {
                    className: "backslash"
                }, " / "), i.a.createElement("span", {
                    className: "off-white"
                }, Object(A.H)(T), " games")))), i.a.createElement("div", {
                    className: "player_role-distribution"
                }, c.map((function(e) {
                    if (0 === e.games) return null;
                    var t = Math.round((e.wins || 0) / e.games * 100);
                    return i.a.createElement("div", {
                        key: e.roleName,
                        className: "role-container"
                    }, i.a.createElement("div", {
                        className: "role-img"
                    }, Object(V.f)(e.roleName)), i.a.createElement("strong", {
                        style: {
                            color: Object(L.a)(t)
                        }
                    }, t, "% WR"), i.a.createElement("span", {
                        className: "off-white"
                    }, Object(A.H)(e.games), " games"))
                }))), i.a.createElement("div", {
                    className: "player_streak"
                }, 0 !== l && i.a.createElement("div", {
                    className: w()("game-streak", {
                        "game-streak_loss": l < 0,
                        "game-streak_win": l > 0,
                        "game-streak_gold-win": l >= 5
                    })
                }, i.a.createElement("span", null, i.a.createElement("strong", null, Math.abs(l), " game"), " ", l > 0 ? "win" : "loss", " streak"))), i.a.createElement(M, {
                    title: "Best Champions",
                    list: r
                }), i.a.createElement(M, {
                    title: "Worst Champions",
                    list: u
                }), i.a.createElement(H, {
                    matches: h || [],
                    rankSnapshots: g || []
                }))
            },
            Q = function() {
                return i.a.createElement("div", {
                    className: "content-section error-container"
                }, i.a.createElement("img", {
                    src: Object(P.j)(),
                    alt: "No data found"
                }), "Sorry, we could not find any matches. Please check for typos.")
            },
            Z = function(e) {
                var t = e.regionId,
                    n = e.loading,
                    a = e.data,
                    r = e.error,
                    o = (a || {}).getMultisearch;
                return n ? i.a.createElement("div", {
                    className: "loader-container"
                }, i.a.createElement("div", {
                    className: "spinthatshit-loader"
                }, i.a.createElement("div", {
                    className: "spinner"
                }))) : r || o.every((function(e) {
                    return !e.summonerName
                })) ? i.a.createElement(Q, null) : i.a.createElement("div", {
                    className: "multisearch-results"
                }, o.map((function(e, n) {
                    return e.summonerName ? i.a.createElement(Y, {
                        key: n,
                        data: e,
                        regionId: t
                    }) : null
                })))
            },
            X = n(15);
        t.a = function(e) {
            Object(c.h)();
            var t = Object(s.e)(),
                n = t.summoners,
                a = t.region,
                m = Object(o.useState)({
                    summonerName: (n || "").split(","),
                    regionId: a
                }),
                d = r()(m, 2),
                p = d[0],
                f = d[1],
                g = Object(o.useState)([]),
                h = r()(g, 2);
            h[0], h[1];
            Object(o.useEffect)((function() {
                f({
                    summonerName: (n || "").split(","),
                    regionId: a
                })
            }), [JSON.stringify(n), a]);
            var v = Object(S.a)(X.j, {
                    variables: {
                        summonerName: p.summonerName,
                        regionId: p.summonerName.map((function(e) {
                            return p.regionId
                        }))
                    },
                    fetchPolicy: "network-only",
                    notifyOnNetworkStatusChange: !0,
                    ssr: !1
                }),
                y = v.loading,
                O = v.data,
                E = v.error,
                w = (v.networkStatus, v.refetch, (O || {}).getMultisearch, n ? i.a.createElement(Z, {
                    regionId: p.regionId,
                    loading: y,
                    data: O,
                    error: E
                }) : i.a.createElement(i.a.Fragment, null, i.a.createElement(u.a, {
                    min: "TABLET",
                    max: "DESKTOP_LARGE"
                }, i.a.createElement("img", {
                    className: "multisearch-image",
                    src: Object(P.s)("lol/art/MultisearchCTA.jpg")
                })), i.a.createElement(u.a, {
                    min: "MOBILE_SMALL",
                    max: "MOBILE_LARGE"
                }, i.a.createElement("img", {
                    className: "multisearch-image small",
                    src: Object(P.s)("lol/art/MultisearchCTAsmall.jpg")
                }))));
            return i.a.createElement("div", {
                className: "content-side-padding multisearch-main"
            }, i.a.createElement(l.a, null, i.a.createElement("title", null, "U GG: Multisearch LoL Profile Stats for Clash, Ranked All Regions"), i.a.createElement("meta", {
                name: "description",
                content: "Only U.GG Profiles have LP per game. Prep for Ranked or Clash by viewing multiple profiles at once. Includes main champions, role, and tags."
            })), i.a.createElement(b, {
                multiSearchVariables: p
            }), w)
        }
    },
    597: function(e, t, n) {
        "use strict";
        var a, r = n(0),
            o = n.n(r),
            i = n(145),
            c = n(15),
            s = n(1),
            l = n.n(s),
            u = n(2),
            m = n(64),
            d = n(69),
            p = n(24),
            f = n(280),
            g = n(17),
            h = n(12),
            v = n(19),
            b = n.n(v),
            y = n(20),
            O = Object(y.a)(a || (a = b()(["\n    mutation requestRiotVerificationCode (\n        $summonerName: String!,\n        $regionId: String!,\n        $season: String!\n    ) {\n        ", "\n    }\n"])), "enqueueSummonerReview (regionId: $regionId, summonerName: $summonerName, season: $season) {\n    reason\n    success\n    summonerName\n    regionId\n  }"),
            E = function(e) {
                var t = Object(r.useState)(),
                    n = l()(t, 2),
                    a = n[0],
                    i = n[1],
                    c = Object(r.useState)(null),
                    s = l()(c, 2),
                    v = s[0],
                    b = s[1],
                    y = Object(p.d)(),
                    E = Object(g.g)(),
                    w = e.summonerName,
                    j = e.isVerified,
                    N = e.isPremium,
                    S = e.regionId,
                    k = Object(m.a)("home"),
                    _ = Object(m.a)("login"),
                    T = Object(m.a)("verification", {
                        searchParams: [
                            ["continue", "yir"]
                        ]
                    }),
                    I = (Object(m.a)("boost"), Object(m.a)("loadingYIR", {
                        searchParams: [
                            ["duration", "60"]
                        ]
                    })),
                    P = Object(f.a)(O),
                    A = l()(P, 1)[0];
                return j && N ? o.a.createElement("div", {
                    className: "verification-header"
                }, o.a.createElement("img", {
                    className: "ugg-logo",
                    src: Object(u.s)("ugg/logo/ugg-logo.svg"),
                    onClick: k
                }), o.a.createElement("div", null, o.a.createElement("img", {
                    className: "yir-logo",
                    src: Object(u.s)("lol/performance_analysis/images/L20_gold.svg")
                })), o.a.createElement("div", {
                    className: "bold-text"
                }, w), o.a.createElement("div", {
                    className: "basic-text"
                }, "Your account is verified and ready to go"), o.a.createElement(d.a, {
                    className: "login-submit btn-light-blue generate-button",
                    label: "Generate 2020 Review",
                    onClick: function(e, t) {
                        A({
                            variables: {
                                summonerName: w,
                                regionId: S,
                                season: 14
                            },
                            update: function(e, t) {
                                var n = t.data.enqueueSummonerReview;
                                n.success ? I() : b({
                                    summonerName: n.summonerName,
                                    regionId: n.regionId
                                })
                            },
                            onError: function() {
                                i(!0)
                            }
                        })
                    },
                    bForceSubmitOnEnter: !0
                }), v && o.a.createElement("div", {
                    className: "duplicate-report"
                }, "A report has already been generated by this U.GG account.Â ", o.a.createElement(h.b, {
                    className: "duplicate-report-link",
                    to: "reports/14/year-in-review?region=".concat(v.regionId, "&summonerName=").concat(v.summonerName)
                }, "Click Here")), a && o.a.createElement("div", {
                    className: "error-generating-report"
                }, "Error generating report", o.a.createElement("a", {
                    href: "mailto:info@u.gg"
                }, "Please Contact Us")), o.a.createElement("div", {
                    className: "basic-text"
                }, "Want to get your Year in Review for a different LoL account?"), o.a.createElement(d.a, {
                    className: "login-submit btn-light-blue verify-button",
                    label: "Verify New Account",
                    onClick: T,
                    bForceSubmitOnEnter: !0
                }), o.a.createElement("div", {
                    className: "see-more_sticky"
                }, o.a.createElement("div", {
                    className: "bold-text large see-more"
                }, "SEE MORE"), o.a.createElement("img", {
                    src: Object(u.s)("lol/performance_analysis/icons/long_down_arrow.svg")
                }))) : N && !j ? o.a.createElement("div", {
                    className: "verification-header"
                }, o.a.createElement("img", {
                    className: "ugg-logo",
                    src: Object(u.s)("ugg/logo/ugg-logo.svg"),
                    onClick: k
                }), o.a.createElement("div", null, o.a.createElement("img", {
                    className: "yir-logo",
                    src: Object(u.s)("lol/performance_analysis/images/L20_gold.svg")
                })), o.a.createElement("div", {
                    className: "barlow-header"
                }, "VERIFY YOUR LEAGUE OF LEGENDS ACCOUNT TO GET YOUR YEAR END REVIEW"), o.a.createElement(d.a, {
                    className: "login-submit btn-light-blue generate-button",
                    label: "Verify Now",
                    onClick: T,
                    bForceSubmitOnEnter: !0
                }), o.a.createElement("div", {
                    className: "see-more_sticky"
                }, o.a.createElement("div", {
                    className: "bold-text large see-more see-more-extra-margin"
                }, "SEE MORE"), o.a.createElement("img", {
                    src: Object(u.s)("lol/performance_analysis/icons/long_down_arrow.svg")
                }))) : o.a.createElement("div", {
                    className: "verification-header"
                }, o.a.createElement("img", {
                    className: "ugg-logo",
                    src: Object(u.s)("ugg/logo/ugg-logo.svg"),
                    onClick: k
                }), o.a.createElement("div", null, o.a.createElement("img", {
                    className: "yir-logo",
                    src: Object(u.s)("lol/performance_analysis/images/L20_gold.svg")
                })), o.a.createElement("div", {
                    className: "barlow-header"
                }, "SIGN UP FOR U.GG BOOST TO ACCESS YOUR 2020 YEAR IN REVIEW."), o.a.createElement(d.a, {
                    className: "login-submit btn-light-blue generate-button",
                    label: "Start Today for $1",
                    onClick: function() {
                        var e;
                        E.push((e = "1-months", y && N ? "/settings/boost/change-plan?plan-chosen=".concat(e) : y && !N ? "/boost/payment?planType=".concat(e) : "/signup?continue=/purchase/".concat(e, "&type=premium_boost")))
                    },
                    bForceSubmitOnEnter: !0
                }), o.a.createElement("div", {
                    className: "basic-text"
                }, "Have BOOST? ", o.a.createElement("span", {
                    className: "login-link",
                    onClick: _
                }, "Login")), o.a.createElement("div", {
                    className: "see-more_sticky"
                }, o.a.createElement("div", {
                    className: "bold-text large see-more see-more-extra-margin"
                }, "SEE MORE"), o.a.createElement("img", {
                    src: Object(u.s)("lol/performance_analysis/icons/long_down_arrow.svg")
                })))
            },
            w = n(85),
            j = n.n(w),
            N = n(14),
            S = n.n(N),
            k = function(e) {
                var t = e.headerText,
                    n = e.basicText,
                    a = e.image,
                    r = e.reverse,
                    i = S()({
                        "verification-landing_preview-feature": !0,
                        "is-reverse": r
                    });
                return o.a.createElement("div", {
                    className: i
                }, o.a.createElement("div", {
                    className: "preview-desc"
                }, o.a.createElement("div", {
                    className: "preview-header"
                }, t), o.a.createElement("div", {
                    className: "preview-text"
                }, n)), o.a.createElement("img", {
                    src: a
                }))
            },
            _ = function(e) {
                return o.a.createElement("div", {
                    className: "verification-landing_preview"
                }, [{
                    headerText: "CHAMPION BREAKDOWN",
                    basicText: "We broke down how you played your top three champions across both Summonerâ€™s Rift and Howling Abyss.",
                    image: "https://static.u.gg/assets/lol/performance_analysis/images/yir_preview_stats.png"
                }, {
                    headerText: "OVERALL STATS",
                    basicText: "A birdâ€™s eye view of all the champions you played this past year â€” including your highest highs and lowest lows.",
                    image: "https://static.u.gg/assets/lol/performance_analysis/images/yir_preview_champion_breakdown.png",
                    reverse: !0
                }, {
                    headerText: "POSITION ANALYSIS",
                    basicText: "See your top two most played positions and compare yourself with other players.",
                    image: "https://static.u.gg/assets/lol/performance_analysis/images/yir_preview_position.png"
                }].map((function(e, t) {
                    return o.a.createElement(k, j()({
                        key: t
                    }, e))
                })))
            },
            T = function(e) {
                return o.a.createElement("div", {
                    className: "verification-landing_faqs"
                }, o.a.createElement("div", {
                    className: "faqs-header"
                }, "FAQs"), o.a.createElement("div", {
                    className: "faqs-grid"
                }, o.a.createElement("div", {
                    className: "faq"
                }, o.a.createElement("div", {
                    className: "question"
                }, "How do I get my 2020 U.GG Year in Review?"), o.a.createElement("div", {
                    className: "answer"
                }, "You need to have BOOST status on your U.GG account during the time that the Year in Review is available. You can sign up for BOOST by going to our ", o.a.createElement(h.b, {
                    className: "link-underline",
                    to: {
                        pathname: "/",
                        state: {
                            scrollToPlans: !0
                        }
                    }
                }, "BOOST"), " page.")), o.a.createElement("div", {
                    className: "faq"
                }, o.a.createElement("div", {
                    className: "question"
                }, "How many 2020 Year in Reviews can I generate?"), o.a.createElement("div", {
                    className: "answer"
                }, "For the 2020 Year in Review, we are only able to offer one review per U.GG BOOST account.")), o.a.createElement("div", {
                    className: "faq"
                }, o.a.createElement("div", {
                    className: "question"
                }, "Help! Iâ€™m having trouble accessing my 2020 Year in Review."), o.a.createElement("div", {
                    className: "answer"
                }, "If youâ€™re experiencing any issues, contact our team at ", o.a.createElement("a", {
                    className: "link-underline",
                    href: "mailto:info@u.gg"
                }, "info@u.gg")))))
            },
            I = n(186),
            P = ["processing", "enqueued"];
        t.a = function(e) {
            var t = Object(i.a)(c.v, {
                    fetchPolicy: "network-only"
                }),
                n = t.loading,
                a = (t.error, t.data),
                r = Object(m.a)("performanceAnalysis"),
                s = Object(i.a)(I.a, {
                    variables: {
                        regionId: a ? a.getState.lolSettings.summoners[0].regionId : "na1",
                        summonerName: a ? a.getState.lolSettings.summoners[0].summonerName : "",
                        season: 14
                    },
                    fetchPolicy: "network-only",
                    skip: !a || n
                }),
                l = s.data,
                u = s.loading,
                d = l && P.includes(l.summonerReviewStatus.status);
            if (n || u) return o.a.createElement("div", {
                className: "performance-analysis_landing-page performance-analysis_landing-page_loading"
            }, o.a.createElement("div", {
                className: "spinthatshit-loader"
            }));
            if (d && r(), a && !n) {
                var p = a.getState.lolSettings.summoners[0],
                    f = p.summonerName,
                    g = p.regionId,
                    h = p.verified,
                    v = a.getState.premium.isPremium;
                return o.a.createElement("div", {
                    className: "performance-analysis_landing-page"
                }, o.a.createElement(E, {
                    summonerName: f,
                    regionId: g,
                    isVerified: h,
                    isPremium: v
                }), o.a.createElement(_, null), o.a.createElement(T, null))
            }
            return n ? o.a.createElement("div", null) : o.a.createElement("div", {
                className: "performance-analysis_landing-page"
            }, o.a.createElement(E, {
                isVerified: !1,
                isPremium: !1
            }), o.a.createElement(_, null), o.a.createElement(T, null))
        }
    },
    598: function(e, t, n) {
        "use strict";
        var a, r, o = n(1),
            i = n.n(o),
            c = n(0),
            s = n.n(c),
            l = n(10),
            u = n(17),
            m = n(145),
            d = n(15),
            p = n(127),
            f = n(94),
            g = n(69),
            h = n(19),
            v = n.n(h),
            b = n(20),
            y = Object(b.a)(a || (a = v()(["\n    query UpdatePrimarySummoner(\n        $regionId: String!,\n        $summonerName: String!\n    ) {\n        updatePrimarySummoner(regionId: $regionId, summonerName: $summonerName) {\n            success\n        }\n}"]))),
            O = Object(b.a)(r || (r = v()(["\n    query requestRiotVerificationCode {\n        ", "\n    }\n"])), "requestRiotVerificationCode {\n    iconId\n  }"),
            E = function(e) {
                var t = e.incStep,
                    n = e.regionId,
                    a = e.summonerName,
                    r = Object(c.useState)(a),
                    o = i()(r, 2),
                    l = o[0],
                    u = o[1],
                    d = Object(c.useState)(n),
                    h = i()(d, 2),
                    v = h[0],
                    b = h[1],
                    E = Object(c.useState)(""),
                    w = i()(E, 2),
                    j = w[0],
                    N = (w[1], Object(c.useState)(0)),
                    S = i()(N, 2),
                    k = S[0],
                    _ = S[1],
                    T = Object(m.a)(y, {
                        variables: {
                            regionId: v,
                            summonerName: l
                        },
                        skip: 1 !== k
                    }).data,
                    I = Object(m.a)(O, {
                        skip: !T,
                        fetchPolicy: "network-only"
                    }),
                    P = (I.loading, I.error, I.data);
                return P && (_(3), t(P.requestRiotVerificationCode.iconId)), s.a.createElement("div", {
                    className: "summoner-name"
                }, s.a.createElement("div", {
                    className: "small-header"
                }, "Verify Your Account"), s.a.createElement("div", {
                    className: "step-text"
                }, "Step 1 of 2"), s.a.createElement("div", {
                    className: "basic-text"
                }, "Confirm your summoner name"), s.a.createElement("div", {
                    className: "summoner-input"
                }, s.a.createElement("div", {
                    className: "summoner-input_region-selector"
                }, s.a.createElement(p.a, {
                    disableTooltip: !0,
                    currentRegion: v,
                    onApply: b,
                    isMasthead: !0
                })), s.a.createElement(f.a, {
                    value: l,
                    error: j,
                    onChange: function(e) {
                        return u(e.target.value)
                    },
                    type: "text",
                    tabIndex: 1e3,
                    placeholder: "Summoner Name",
                    autoFocus: !0,
                    style: {
                        marginBottom: 30,
                        paddingLeft: 70
                    }
                })), s.a.createElement(g.a, {
                    className: "login-submit btn-light-blue",
                    label: "Verify",
                    isLoading: 0 !== k,
                    onClick: function() {
                        "" !== l && _(1)
                    },
                    bForceSubmitOnEnter: !0
                }))
            },
            w = n(2),
            j = n(64),
            N = n(18),
            S = n(268),
            k = function(e) {
                var t = Object(w.n)().getProfileIconImg,
                    n = Object(c.useState)(!1),
                    a = i()(n, 2),
                    r = a[0],
                    o = a[1],
                    l = Object(c.useState)(!1),
                    p = i()(l, 2),
                    f = p[0],
                    h = p[1],
                    v = Object(u.h)(),
                    b = Object(N.I)(v.search.substring(1)).continue,
                    y = Object(j.a)("home"),
                    O = Object(j.a)("performanceAnalysis"),
                    E = Object(j.a)("accountSettings"),
                    k = Object(m.a)(S.a, {
                        skip: !r,
                        fetchPolicy: "network-only"
                    }),
                    _ = k.loading,
                    T = k.error,
                    I = k.data,
                    P = Object(m.a)(d.v, {
                        fetchPolicy: "network-only",
                        onCompleted: function() {
                            !_ && I && (b ? "yir" === b ? O() : "settings" === b && E() : y())
                        },
                        skip: !I || !I.verifyRiotCode.success
                    });
                P.loadingUserState, P.error, P.data;
                I && !I.verifyRiotCode.success && (o(!1), h(!0));
                return s.a.createElement("div", {
                    className: "code-copy-page"
                }, s.a.createElement("div", {
                    className: "small-header",
                    style: {
                        marginBottom: "12px"
                    }
                }, "Verify Your Account"), s.a.createElement("div", {
                    className: "step-text",
                    style: {
                        marginBottom: "12px"
                    }
                }, "Step 2 of 2"), s.a.createElement("div", {
                    className: "basic-text"
                }, s.a.createElement("span", null, "1.Â "), " Open your League client and login"), s.a.createElement("div", {
                    className: "basic-text"
                }, s.a.createElement("span", null, "2.Â "), " Click on your profile icon in the top right."), s.a.createElement("img", {
                    className: "img1",
                    src: Object(w.s)("lol/performance_analysis/images/profile_verification_icon.jpg")
                }), s.a.createElement("div", {
                    className: "basic-text"
                }, s.a.createElement("span", null, "3.Â "), " Save the below icon as your profile icon."), s.a.createElement("img", {
                    className: "img2",
                    src: t(e.iconID)
                }), s.a.createElement("div", {
                    className: "basic-text"
                }, s.a.createElement("span", null, "4.Â "), " Once youâ€™ve saved your profile icon, come back to this page and click the button below."), s.a.createElement(g.a, {
                    className: "login-submit btn-light-blue",
                    label: "Verify",
                    isLoading: r,
                    onClick: function() {
                        o(!0)
                    },
                    style: {
                        height: 42,
                        marginTop: 14
                    }
                }), (T || f) && s.a.createElement("div", {
                    className: "riot-code-verification-error"
                }, "There was an error attempting to complete verification. Try restarting your League of Legends client and verify again."))
            },
            _ = n(24);
        t.a = function(e) {
            var t = Object(c.useState)(1),
                n = i()(t, 2),
                a = n[0],
                r = n[1],
                o = Object(c.useState)(null),
                p = i()(o, 2),
                f = p[0],
                g = p[1],
                h = Object(u.g)(),
                v = Object(l.useGlobal)("loggingIn"),
                b = i()(v, 1)[0],
                y = Object(_.d)();
            b || y || Object(j.a)("home")();
            var O = Object(m.a)(d.u, {
                    fetchPolicy: "network-only"
                }),
                w = O.loading,
                N = O.error,
                S = O.data;
            if (w) return s.a.createElement("div", {
                className: "verification-container"
            }, s.a.createElement("div", {
                className: "spinthatshit-loader"
            }));
            if (N || !S) return null;
            var T = S.getSettings.lolSettings.summoners[0],
                I = T.regionId,
                P = T.summonerName;
            return s.a.createElement("div", {
                className: "verification-container"
            }, s.a.createElement("div", {
                className: "logo-container"
            }, s.a.createElement("img", {
                className: "logo",
                src: "https://static.u.gg/assets/ugg/logo/ugg-logo.svg",
                onClick: function() {
                    return h.push("/")
                }
            })), s.a.createElement("div", {
                className: "divider"
            }), 1 === a && s.a.createElement(E, {
                summonerName: P,
                regionId: I,
                incStep: function(e) {
                    r(a + 1), g(e)
                }
            }), 2 === a && s.a.createElement(k, {
                iconID: f
            }))
        }
    },
    6: function(e, t, n) {
        "use strict";
        n.d(t, "h", (function() {
            return k
        })), n.d(t, "a", (function() {
            return S
        })), n.d(t, "d", (function() {
            return T
        })), n.d(t, "f", (function() {
            return I
        })), n.d(t, "b", (function() {
            return P
        })), n.d(t, "g", (function() {
            return _
        })), n.d(t, "e", (function() {
            return A
        })), n.d(t, "c", (function() {
            return L
        })), n.d(t, "i", (function() {
            return C
        }));
        var a = n(0),
            r = n.n(a),
            o = n(2),
            i = n(357),
            c = n(358),
            s = n(359),
            l = n(360),
            u = n(361),
            m = n(362),
            d = n(363),
            p = n(364),
            f = n(365),
            g = n(366),
            h = n(367),
            v = n(368),
            b = n(369),
            y = n(370),
            O = n(371),
            E = n(372),
            w = n(373),
            j = n(374),
            N = n(375),
            S = {
                ALL: "all",
                TOP: "top",
                JUNGLE: "jungle",
                MIDDLE: "middle",
                BOTTOM: "adc",
                SUPPORT: "support",
                NONE: "none",
                ARAM: "aram",
                URF: "urf"
            };

        function k(e) {
            switch (Number(e)) {
                case 1:
                    return S.JUNGLE;
                case 2:
                    return S.SUPPORT;
                case 3:
                    return S.BOTTOM;
                case 4:
                    return S.TOP;
                case 5:
                    return S.MIDDLE;
                case 7:
                    return S.ALL;
                default:
                    return ""
            }
        }

        function _(e) {
            switch (e) {
                case "top":
                    return S.TOP;
                case "middle":
                case "mid":
                    return S.MIDDLE;
                case "jungle":
                case "jung":
                    return S.JUNGLE;
                case "bottom":
                case "adc":
                case "bot":
                    return S.BOTTOM;
                case "support":
                case "supp":
                case "sup":
                    return S.SUPPORT;
                case "all":
                    return S.ALL;
                default:
                    return e
            }
        }

        function T(e, t, n) {
            switch (_(e)) {
                case S.ALL:
                    return Object(o.o)("all", t, n);
                case S.TOP:
                    return Object(o.o)("top", t, n);
                case S.JUNGLE:
                    return Object(o.o)("jung", t, n);
                case S.MIDDLE:
                    return Object(o.o)("mid", t, n);
                case S.BOTTOM:
                    return Object(o.o)("bot", t, n);
                case S.SUPPORT:
                    return Object(o.o)("supp", t, n);
                default:
                    return
            }
        }

        function I(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.active,
                a = t.inactive;
            switch (_(e)) {
                case S.ALL:
                    return a ? r.a.createElement(w.ReactComponent, null) : r.a.createElement(E.ReactComponent, null);
                case S.TOP:
                    return n ? r.a.createElement(p.ReactComponent, null) : a ? r.a.createElement(f.ReactComponent, null) : r.a.createElement(d.ReactComponent, null);
                case S.JUNGLE:
                    return n ? r.a.createElement(h.ReactComponent, null) : a ? r.a.createElement(v.ReactComponent, null) : r.a.createElement(g.ReactComponent, null);
                case S.MIDDLE:
                    return n ? r.a.createElement(y.ReactComponent, null) : a ? r.a.createElement(O.ReactComponent, null) : r.a.createElement(b.ReactComponent, null);
                case S.BOTTOM:
                    return n ? r.a.createElement(c.ReactComponent, null) : a ? r.a.createElement(s.ReactComponent, null) : r.a.createElement(i.ReactComponent, null);
                case S.SUPPORT:
                    return n ? r.a.createElement(u.ReactComponent, null) : a ? r.a.createElement(m.ReactComponent, null) : r.a.createElement(l.ReactComponent, null);
                case S.ARAM:
                    return a ? r.a.createElement(N.ReactComponent, null) : r.a.createElement(j.ReactComponent, null);
                default:
                    return null
            }
        }

        function P(e, t) {
            switch (_(e)) {
                case S.ALL:
                    return Object(o.f)("all", t);
                case S.TOP:
                    return Object(o.f)("top", t);
                case S.JUNGLE:
                    return Object(o.f)("jung", t);
                case S.MIDDLE:
                    return Object(o.f)("mid", t);
                case S.BOTTOM:
                    return Object(o.f)("bot", t);
                case S.SUPPORT:
                    return Object(o.f)("supp", t);
                default:
                    return
            }
        }

        function A(e) {
            switch (_(e)) {
                case 1:
                case "jungle":
                    return "Jungle";
                case 2:
                case "support":
                case "supp":
                    return "Support";
                case 3:
                case "adc":
                    return "ADC";
                case 4:
                case "top":
                    return "Top";
                case 5:
                case "mid":
                case "middle":
                    return "Mid";
                case 6:
                    return "";
                case 7:
                case "all":
                    return "All Roles";
                case "aram":
                    return "ARAM";
                case "urf":
                    return "URF";
                default:
                    return ""
            }
        }

        function L(e) {
            switch (_(e)) {
                case S.ALL:
                    return 7;
                case S.TOP:
                    return 4;
                case S.JUNGLE:
                    return 1;
                case S.MIDDLE:
                    return 5;
                case S.BOTTOM:
                    return 3;
                case S.SUPPORT:
                    return 2;
                default:
                    return
            }
        }
        var C = function(e) {
            var t = [L(S.TOP), L(S.JUNGLE), L(S.MIDDLE), L(S.BOTTOM), L(S.SUPPORT)];
            return e.slice().sort((function(e, n) {
                return e.role && n.role ? t.indexOf(e.role) - t.indexOf(n.role) : 0
            }))
        }
    },
    600: function(e, t, n) {
        "use strict";
        var a = n(1),
            r = n.n(a),
            o = n(0),
            i = n.n(o),
            c = n(10),
            s = n(12),
            l = n(17),
            u = n(142),
            m = (n(685), n(265)),
            d = n.n(m),
            p = n(44),
            f = n.n(p),
            g = n(2),
            h = n(24),
            v = n(25),
            b = n(48),
            y = n.n(b),
            O = n(49),
            E = n.n(O),
            w = n(59),
            j = n.n(w),
            N = n(60),
            S = n.n(N),
            k = n(29),
            _ = n.n(k);

        function T(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = _()(e);
                if (t) {
                    var r = _()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return S()(this, n)
            }
        }
        var I = {
                Hard: "#ff9b00",
                Medium: "#08a6ff",
                Easy: "#7ed321",
                Smurf: "#ff4e50"
            },
            P = function(e) {
                return i.a.createElement("img", {
                    className: "combo-placeholder",
                    src: Object(g.s)("lol/combos/imgs/combo-placeholder.svg")
                })
            },
            A = function(e) {
                var t = Object(o.useState)(!1),
                    n = r()(t, 2),
                    a = n[0],
                    c = n[1],
                    s = e.data,
                    u = e.champ,
                    m = Object(l.g)(),
                    p = "https://i.vimeocdn.com/video/".concat(s.vimeo_pic_id, "_169x95.jpg");
                return i.a.createElement("div", null, i.a.createElement(d.a, {
                    height: 196,
                    placeholder: i.a.createElement(P, null)
                }, i.a.createElement("div", {
                    className: "combo-container",
                    onClick: function(e) {
                        if (m && s.id && u) {
                            var t = u;
                            "monkeyking" == u && (t = "wukong"), m.push("/lol/champions/".concat(t, "/combo/").concat(s.id))
                        }
                    }
                }, i.a.createElement("img", {
                    className: "combo-thumb",
                    src: p,
                    alt: "thumb",
                    onLoad: function() {
                        c(!0)
                    }
                }), a && i.a.createElement("div", null, i.a.createElement("div", {
                    className: "title"
                }, s.name), i.a.createElement("div", {
                    className: "rating",
                    style: {
                        color: "".concat(I[s.difficulty])
                    }
                }, s.difficulty.toUpperCase(), 0 !== e.index && i.a.createElement("img", {
                    style: {
                        width: "12px",
                        height: "12px",
                        margin: "0px 0px 5px 10px"
                    },
                    src: Object(g.s)("lol/combos/imgs/lock-icon.png")
                }))))), !a && i.a.createElement(P, null))
            },
            L = function(e) {
                j()(n, e);
                var t = T(n);

                function n() {
                    return y()(this, n), t.apply(this, arguments)
                }
                return E()(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props.data;
                        return i.a.createElement("div", null, i.a.createElement("div", {
                            style: {
                                position: "relative",
                                top: 60
                            }
                        }, i.a.createElement(u.a, null, this.props.currentSlide >= this.props.totalSlides % this.props.visibleSlides ? i.a.createElement("img", {
                            className: "btn-img",
                            src: "https://static.u.gg/assets/lol/combos/imgs/arrow-left-white.svg",
                            alt: "back-btn"
                        }) : i.a.createElement("img", {
                            className: "btn-img",
                            src: "https://static.u.gg/assets/lol/combos/imgs/arrow-left-grey.svg",
                            alt: "back-btn"
                        }))), i.a.createElement("div", {
                            style: {
                                marginLeft: 60,
                                width: 895,
                                height: 197
                            }
                        }, i.a.createElement(u.e, null, e.combos.map((function(t, n) {
                            return i.a.createElement(u.d, {
                                index: n,
                                key: n
                            }, i.a.createElement(A, {
                                data: t,
                                champ: e.id,
                                key: n,
                                index: n
                            }))
                        })))), i.a.createElement("div", {
                            style: {
                                position: "relative",
                                top: -164,
                                left: 973,
                                width: 40
                            }
                        }, i.a.createElement(u.b, null, this.props.currentSlide < this.props.totalSlides % this.props.visibleSlides ? i.a.createElement("img", {
                            className: "btn-img",
                            src: "https://static.u.gg/assets/lol/combos/imgs/arrow-right-white.svg",
                            alt: "back-btn"
                        }) : i.a.createElement("img", {
                            className: "btn-img",
                            src: "https://static.u.gg/assets/lol/combos/imgs/arrow-right-grey.svg",
                            alt: "back-btn"
                        }))))
                    }
                }]), n
            }(o.Component),
            C = Object(u.f)(L, (function(e) {
                return {
                    currentSlide: e.currentSlide,
                    disableAnimation: e.disableAnimation,
                    hasMasterSpinner: e.hasMasterSpinner,
                    imageErrorCount: e.imageErrorCount,
                    imageSuccessCount: e.imageSuccessCount,
                    lockOnWindowScroll: e.lockOnWindowScroll,
                    masterSpinnerThreshold: e.masterSpinnerThreshold,
                    naturalSlideHeight: e.naturalSlideHeight,
                    naturalSlideWidth: e.naturalSlideWidth,
                    orientation: e.orientation,
                    slideSize: e.slideSize,
                    slideTraySize: e.slideTraySize,
                    step: e.step,
                    dragStep: e.dragStep,
                    totalSlides: e.totalSlides,
                    touchEnabled: e.touchEnabled,
                    dragEnabled: e.dragEnabled,
                    visibleSlides: e.visibleSlides
                }
            })),
            R = n(191),
            x = n(190),
            M = function(e) {
                var t = Object(g.n)().getChampionImg,
                    n = e.data,
                    a = t(n.key);
                return i.a.createElement("div", {
                    className: "champion-combo-container"
                }, i.a.createElement("div", {
                    className: "title-container"
                }, i.a.createElement("div", {
                    className: "cont"
                }, i.a.createElement("img", {
                    className: "champ-img",
                    src: a,
                    alt: "champ-img"
                })), i.a.createElement("div", {
                    className: "title"
                }, i.a.createElement("div", {
                    style: {
                        marginRight: 5
                    }
                }, n.name), i.a.createElement("div", {
                    style: {
                        marginRight: 5,
                        color: "#28283e"
                    }
                }, "/"), i.a.createElement("div", {
                    style: {
                        color: "#cddcfe",
                        fontWeight: 400
                    }
                }, n.combos.length, " Combos"))), i.a.createElement("div", {
                    className: "list-container"
                }, i.a.createElement(u.c, {
                    naturalSlideWidth: 169,
                    naturalSlideHeight: 155,
                    visibleSlides: 5,
                    totalSlides: n.combos.length
                }, i.a.createElement(C, {
                    data: n
                }))), i.a.createElement("div", {
                    className: "divider"
                }))
            },
            D = function(e) {
                return i.a.createElement("div", {
                    className: "content-side-padding bfg-top-container"
                }, i.a.createElement("div", {
                    className: "bfg-header-text"
                }, i.a.createElement("div", {
                    className: "bfg-sub-title"
                }, "WIN WITH STYLE"), i.a.createElement("div", {
                    className: "bfg-title"
                }, i.a.createElement("div", {
                    className: "align-items-center"
                }, i.a.createElement("img", {
                    className: "boost-logo",
                    src: "https://static.u.gg/assets/ugg/pages/landing/boost-logo-white.svg"
                }), i.a.createElement("span", null, "COMBO")), i.a.createElement("div", null, "DATABASE"))), i.a.createElement("img", {
                    className: "bfg-img",
                    src: "https://static.u.gg/assets/lol/combos/imgs/sett-combo-preview.png",
                    alt: "combo-pic"
                }))
            },
            G = function(e) {
                return i.a.createElement("div", {
                    className: "content-side-padding free-top-container"
                }, i.a.createElement("div", {
                    className: "free-header-text"
                }, i.a.createElement("div", {
                    className: "free-title"
                }, "TIME TO STYLE."), i.a.createElement("div", {
                    className: "free-desc"
                }, "From Easy to Expert, U.GG now offers detailed combos for your favorite champions. First video free. Upgrade to BOOST to unlock them all."), i.a.createElement(s.b, {
                    to: {
                        pathname: "/discover-boost",
                        state: {
                            scrollToPlans: !0
                        }
                    },
                    className: "btn-light-blue"
                }, "Try BOOST Now")), i.a.createElement("video", {
                    loop: !0,
                    muted: !0,
                    autoPlay: !0,
                    className: "combo-video"
                }, i.a.createElement("source", {
                    src: "https://static.u.gg/assets/lol/combos/videos/combo-compilation-1.mp4",
                    type: "video/mp4"
                })))
            };
        t.a = function(e) {
            var t = Object(v.b)("https://static.u.gg/assets/lol/combos/".concat("combos", ".json")),
                n = t.data,
                a = t.loading,
                s = Object(o.useState)([]),
                u = r()(s, 2),
                m = u[0],
                p = u[1],
                g = Object(o.useState)([]),
                b = r()(g, 2),
                y = b[0],
                O = b[1],
                E = Object(h.g)().isPremium,
                w = Object(c.useGlobal)("loggingIn"),
                j = r()(w, 1)[0];
            Object(l.g)();
            Object(o.useEffect)((function() {
                var e = [];
                n && !a && (Object.keys(n).sort().forEach((function(t, a) {
                    e.push(n[t])
                })), O(e), p(e))
            }), [n]);
            return j || a || !n ? i.a.createElement("div", {
                className: "spinthatshit-loader"
            }) : i.a.createElement("div", {
                className: "combo-database-container"
            }, E ? i.a.createElement(D, null) : i.a.createElement(G, null), !E && i.a.createElement("div", {
                style: {
                    marginBottom: "-41px"
                }
            }, i.a.createElement(R.a, {
                styles: {
                    marginTop: 12,
                    paddingLeft: 21,
                    paddingRight: 21,
                    display: "flex",
                    height: "auto"
                },
                minAdWidth: 970,
                minAdHeight: 90
            }, i.a.createElement(x.a, {
                slotId: "ugg_D_1"
            }))), i.a.createElement("div", {
                className: "content-side-padding inner-combo-database-container"
            }, i.a.createElement("div", {
                className: "combo-filters-container"
            }, i.a.createElement("div", {
                className: "combo-search"
            }, i.a.createElement("input", {
                className: "combo-search-bar",
                type: "text",
                onChange: function(e) {
                    var t = y.filter((function(t) {
                        var n = t.id.toLowerCase();
                        "monkeyking" == t.id.toLowerCase() && (n = "wukong");
                        var a = e.target.value.toLowerCase();
                        return 0 === n.indexOf(a.replace(/ /g, ""))
                    }));
                    p(t)
                },
                placeholder: "Search Champions"
            }), i.a.createElement(f.a, {
                wrapperClassName: "react-svg search-icon",
                path: "https://static.u.gg/assets/ugg/icons/_ionicons_svg_ios-search.svg"
            }))), m.length > 0 ? m.map((function(e, t) {
                return i.a.createElement(M, {
                    data: e,
                    key: t
                })
            })) : i.a.createElement("div", {
                className: "not-found-container"
            }, i.a.createElement("div", {
                className: "title"
            }, "That champion is in the works or does not exist. Try something else."), i.a.createElement(d.a, {
                height: 440
            }, i.a.createElement("img", {
                className: "draven",
                src: "https://static.u.gg/assets/lol/combos/imgs/Draven.png",
                alt: "draven-404"
            })))))
        }
    },
    605: function(e, t, n) {
        "use strict";
        n(1), n(0)
    },
    61: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "e", (function() {
            return r
        })), n.d(t, "d", (function() {
            return o
        })), n.d(t, "b", (function() {
            return i
        })), n.d(t, "g", (function() {
            return c
        })), n.d(t, "f", (function() {
            return s
        })), n.d(t, "c", (function() {
            return l
        }));
        var a = 16,
            r = 11,
            o = 5,
            i = "DESKTOP_LARGE",
            c = {
                MOBILE_SMALL: [0, 399],
                MOBILE_MEDIUM: [400, 599],
                MOBILE_LARGE: [600, 899],
                TABLET: [900, 1139],
                DESKTOP_SMALL: [1140, 1359],
                DESKTOP_MEDIUM: [1360, 1469],
                DESKTOP_LARGE: [1470, 9999999999]
            },
            s = {
                MOBILE: ["MOBILE_SMALL", "MOBILE_MEDIUM", "MOBILE_LARGE"],
                TABLET: "TABLET",
                DESKTOP: ["DESKTOP_SMALL", "DESKTOP_MEDIUM", "DESKTOP_LARGE"]
            },
            l = "mobalSlideClass"
    },
    64: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return c
        })), n.d(t, "a", (function() {
            return s
        })), n.d(t, "b", (function() {
            return l
        }));
        var a = n(1),
            r = n.n(a),
            o = n(17),
            i = n(18),
            c = {
                home: "/",
                boost: "/discover-boost",
                login: "/login",
                signup: "/signup",
                verification: "/verification",
                performanceAnalysis: "/reports/14/year-in-review",
                loadingYIR: "/year-in-review/loading",
                yirLanding: "/year-in-review",
                premiumPayment: "/boost/payment",
                premiumPlansCheckout: "/boost/plans",
                premiumBillingCheckout: "/boost/billing",
                accountSettings: "/settings/my-account",
                premiumSettings: "/settings/boost",
                renewPlan: "/settings/boost/renew",
                cancelPlan: "/settings/boost/cancel-plan",
                combos: "/lol/combo-database",
                liveGame: "/lol/profile/:region/:summonerName/live-game",
                liveGameSplash: "/lg-splash"
            },
            s = function(e, t) {
                var n = t || {},
                    a = n.urlParams,
                    i = n.searchParams,
                    s = n.state,
                    l = Object(o.g)();
                if (c[e]) {
                    var u = c[e],
                        m = "";
                    if (i && (m = "?", i.forEach((function(e) {
                            var t = r()(e, 2),
                                n = t[0],
                                a = t[1];
                            m = "".concat(m).concat(n, "=").concat(a, "&")
                        })), m = m.substring(0, m.length - 1)), a) {
                        var d = u.split("/"),
                            p = 0;
                        u = d.map((function(e) {
                            return ":" === e.charAt(0) ? (p = Math.min(p + 1, a.length), a[p - 1]) : e
                        })).join("/")
                    }
                    return function() {
                        return l.push({
                            pathname: u,
                            search: m,
                            state: s
                        })
                    }
                }
                console.error("Could not find '".concat(e, "' in pages map. Check inside lib/redirect-helpers to set up your redirect"))
            },
            l = function(e, t, n, a) {
                var r = s(e, t);
                return function() {
                    Object(i.c)(n, a), r()
                }
            }
    },
    674: function(e, t, n) {
        var a = {
            "./en-au": 420,
            "./en-au.js": 420,
            "./en-ca": 421,
            "./en-ca.js": 421,
            "./en-gb": 422,
            "./en-gb.js": 422,
            "./en-ie": 423,
            "./en-ie.js": 423,
            "./en-il": 424,
            "./en-il.js": 424,
            "./en-in": 425,
            "./en-in.js": 425,
            "./en-nz": 426,
            "./en-nz.js": 426,
            "./en-sg": 427,
            "./en-sg.js": 427
        };

        function r(e) {
            var t = o(e);
            return n(t)
        }

        function o(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return a[e]
        }
        r.keys = function() {
            return Object.keys(a)
        }, r.resolve = o, e.exports = r, r.id = 674
    },
    675: function(e, t, n) {
        "use strict";
        n.r(t), t.default = n.p + "static/images/404-dark.png"
    },
    68: function(e, t, n) {
        "use strict";
        n.d(t, "j", (function() {
            return c
        })), n.d(t, "i", (function() {
            return s
        })), n.d(t, "h", (function() {
            return d
        })), n.d(t, "g", (function() {
            return p
        })), n.d(t, "f", (function() {
            return f
        })), n.d(t, "e", (function() {
            return g
        })), n.d(t, "b", (function() {
            return h
        })), n.d(t, "a", (function() {
            return v
        })), n.d(t, "d", (function() {
            return b
        })), n.d(t, "c", (function() {
            return y
        }));
        var a = n(6),
            r = n(2),
            o = (a.a.TOP, Object(a.f)(a.a.TOP), Object(a.f)(a.a.TOP, {
                active: !0
            }), a.a.JUNGLE, Object(a.f)(a.a.JUNGLE), Object(a.f)(a.a.JUNGLE, {
                active: !0
            }), a.a.MIDDLE, Object(a.f)(a.a.MIDDLE), Object(a.f)(a.a.MIDDLE, {
                active: !0
            }), a.a.BOTTOM, Object(a.f)(a.a.BOTTOM), Object(a.f)(a.a.BOTTOM, {
                active: !0
            }), a.a.SUPPORT, Object(a.f)(a.a.SUPPORT), Object(a.f)(a.a.SUPPORT, {
                active: !0
            }), [{
                value: a.a.ALL,
                label: "All Roles",
                img: Object(a.f)(a.a.ALL)
            }, {
                value: a.a.TOP,
                label: "Top",
                img: Object(a.f)(a.a.TOP),
                imgActive: Object(a.f)(a.a.TOP, {
                    active: !0
                })
            }, {
                value: a.a.JUNGLE,
                label: "Jungle",
                img: Object(a.f)(a.a.JUNGLE),
                imgActive: Object(a.f)(a.a.JUNGLE, {
                    active: !0
                })
            }, {
                value: a.a.MIDDLE,
                label: "Middle",
                img: Object(a.f)(a.a.MIDDLE),
                imgActive: Object(a.f)(a.a.MIDDLE, {
                    active: !0
                })
            }, {
                value: a.a.BOTTOM,
                label: "Bot",
                img: Object(a.f)(a.a.BOTTOM),
                imgActive: Object(a.f)(a.a.BOTTOM, {
                    active: !0
                })
            }, {
                value: a.a.SUPPORT,
                label: "Support",
                img: Object(a.f)(a.a.SUPPORT),
                imgActive: Object(a.f)(a.a.SUPPORT, {
                    active: !0
                })
            }]),
            i = [{
                label: "All Ranked",
                value: "all_ranked"
            }, {
                label: "Ranked Solo",
                value: "ranked_solo_5x5"
            }, {
                label: "Ranked Flex",
                value: "ranked_flex_sr"
            }, {
                label: "ARAM",
                value: "normal_aram"
            }, {
                label: "Normal Blind",
                value: "normal_blind_5x5"
            }, {
                label: "Normal Draft",
                value: "normal_draft_5x5"
            }],
            c = ["all_ranked", "ranked_solo_5x5", "ranked_flex_sr"],
            s = {
                all_ranked: [420, 440],
                ranked_solo_5x5: [420],
                ranked_flex_sr: [440],
                normal_aram: [450],
                normal_blind_5x5: [430],
                normal_draft_5x5: [400],
                clash_5x5: [700]
            },
            l = [{
                value: "ranked_solo_5x5",
                label: "Ranked Solo"
            }, {
                value: "normal_aram",
                label: "ARAM"
            }, {
                value: "ranked_flex_sr",
                label: "Ranked Flex"
            }, {
                value: "normal_blind_5x5",
                label: "Normal Blind"
            }, {
                value: "normal_draft_5x5",
                label: "Normal Draft"
            }, {
                value: "nexus_blitz",
                label: "Nexus Blitz"
            }],
            u = [{
                value: "all",
                label: "All Queue Types"
            }, {
                value: "ranked_solo_5x5",
                label: "Ranked Solo"
            }, {
                value: "normal_aram",
                label: "ARAM"
            }, {
                value: "ranked_flex_sr",
                label: "Ranked Flex"
            }, {
                value: "normal_blind_5x5",
                label: "Normal Blind"
            }, {
                value: "normal_draft_5x5",
                label: "Normal Draft"
            }, {
                value: "clash_5x5",
                label: "Clash"
            }, {
                value: "nexus_blitz",
                label: "Nexus Blitz"
            }],
            m = (Object(r.m)("world"), Object(r.m)("NA"), Object(r.m)("EUW"), Object(r.m)("flags/kr"), Object(r.m)("flags/br"), Object(r.m)("EUN"), Object(r.m)("flags/jp"), Object(r.m)("LAN"), Object(r.m)("LAS"), Object(r.m)("OCE"), Object(r.m)("flags/ru"), Object(r.m)("flags/tr"), [{
                value: "16",
                label: "Season 11"
            }, {
                value: "15",
                label: "Preseason 11"
            }]),
            d = {
                queueType: u,
                role: o,
                season: m
            },
            p = {
                queueType: u[0].value,
                role: o[0].value,
                season: m[0].value
            },
            f = {
                queueType: u,
                role: o,
                season: m,
                exemptions: ["champion"]
            },
            g = {
                queueType: u[0].value,
                role: o[0].value,
                season: m[0].value,
                champion: "all"
            },
            h = {
                queueType: i,
                role: o,
                season: m
            },
            v = {
                queueType: i[0].value,
                role: o[0].value,
                season: m[0].value
            },
            b = {
                queueType: l,
                role: o,
                season: m
            },
            y = {
                queueType: l[0].value,
                role: o[0].value,
                season: m[0].value
            }
    },
    69: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return S
        }));
        var a = n(85),
            r = n.n(a),
            o = n(192),
            i = n.n(o),
            c = n(48),
            s = n.n(c),
            l = n(49),
            u = n.n(l),
            m = n(80),
            d = n.n(m),
            p = n(59),
            f = n.n(p),
            g = n(60),
            h = n.n(g),
            v = n(29),
            b = n.n(v),
            y = n(0),
            O = n.n(y),
            E = n(14),
            w = n.n(E),
            j = (n(3), ["className", "label", "disable", "isLoading", "success", "bForceSubmitOnEnter"]);

        function N(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = b()(e);
                if (t) {
                    var r = b()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return h()(this, n)
            }
        }
        var S = function(e) {
            f()(n, e);
            var t = N(n);

            function n(e) {
                var a;
                return s()(this, n), (a = t.call(this, e)).state = {
                    init: !1
                }, a.successButton = O.a.createRef(), a.handleKeyPress = a.handleKeyPress.bind(d()(a)), a.onClickHandler = a.onClickHandler.bind(d()(a)), a
            }
            return u()(n, [{
                key: "componentDidMount",
                value: function() {
                    this.setState({
                        init: !0
                    }), this.props.bForceSubmitOnEnter && document.addEventListener("keydown", this.handleKeyPress, !1)
                }
            }, {
                key: "componentWillUnMount",
                value: function() {
                    this.props.bForceSubmitOnEnter && document.removeEventListener("keydown", this.handleKeyPress, !1)
                }
            }, {
                key: "handleKeyPress",
                value: function(e) {
                    "Enter" === e.key && this.successButton && this.successButton.current && this.successButton.current.click()
                }
            }, {
                key: "onClickHandler",
                value: function(e) {
                    var t = this.props,
                        n = t.disable,
                        a = t.onClick;
                    !n && a && a(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state.init,
                        t = this.props,
                        n = t.className,
                        a = t.label,
                        o = t.disable,
                        c = t.isLoading,
                        s = t.success,
                        l = (t.bForceSubmitOnEnter, i()(t, j)),
                        u = w()(n, "btn-success", {
                            "btn-success_disable": o,
                            "btn-success_loading": e && c,
                            "btn-success_toggle": e && s
                        });
                    return O.a.createElement("div", r()({
                        className: u
                    }, l, {
                        ref: this.successButton,
                        onClick: this.onClickHandler
                    }), O.a.createElement("img", {
                        className: "btn-checkmark",
                        src: "https://static.u.gg/assets/ugg/icons/checkmark-white.svg",
                        alt: "Checkmark"
                    }), c ? O.a.createElement("img", {
                        className: "btn-loader",
                        src: "https://static.u.gg/assets/ugg/icons/spinny-boy.svg",
                        alt: "Loader"
                    }) : O.a.createElement("div", {
                        className: "btn-label"
                    }, a))
                }
            }]), n
        }(y.Component);
        S.defaultProps = {
            className: "",
            label: "",
            disable: !1,
            isLoading: !1,
            success: !1,
            bForceSubmitOnEnter: !1
        }
    },
    690: function(e, t, n) {
        var a = {
            "./arrow-right.svg": [1159, 44],
            "./beta-tag.svg": [1158, 45],
            "./blue-teamplay.svg": [1176, 46],
            "./boost-icon.svg": [1169, 47],
            "./carry-king.svg": [1225, 48],
            "./champions-icon.svg": [1226, 49],
            "./check-line.svg": [1199, 50],
            "./checkbox.svg": [1209, 51],
            "./chevron-down-with-ring.svg": [1182, 52],
            "./circle-cross.svg": [1210, 53],
            "./circle-question.svg": [1170, 54],
            "./cog-icon.svg": [272],
            "./desktop-icon.svg": [1227, 55],
            "./double-hearts-filled.svg": [1160, 56],
            "./double-hearts-outline.svg": [264],
            "./edit-icon.svg": [1201, 57],
            "./exclamation.svg": [1198, 58],
            "./filters-icon.svg": [1156, 59],
            "./heart.svg": [1200, 60],
            "./icon-bell.svg": [377],
            "./leaderboard-icon.svg": [1228, 61],
            "./live-game-icon.svg": [273],
            "./live-game/crown.svg": [1217, 62],
            "./live-game/empty-half-star.svg": [1218, 63],
            "./live-game/empty-star.svg": [1219, 64],
            "./live-game/filled-half-star.svg": [1220, 65],
            "./live-game/filled-star.svg": [1221, 66],
            "./live-game/loader-logo.svg": [1194, 67],
            "./live-game/right-indicator.svg": [1222, 68],
            "./live-game/scale.svg": [1223, 69],
            "./live-game/tag-error.svg": [1195, 70],
            "./live-game/tag-loader.svg": [1196, 71],
            "./logos/ugg-logo-blue.svg": [1171, 72],
            "./logos/ugg-logo-icon.svg": [1197, 73],
            "./logos/ugg-logo-white.svg": [1216, 74],
            "./lp-graph/bronze-promotion-marker.svg": [1185, 75],
            "./lp-graph/challenger-promotion-marker.svg": [1192, 76],
            "./lp-graph/diamond-promotion-marker.svg": [1189, 77],
            "./lp-graph/gold-promotion-marker.svg": [1187, 78],
            "./lp-graph/grandmaster-promotion-marker.svg": [1191, 79],
            "./lp-graph/iron-promotion-marker.svg": [1184, 80],
            "./lp-graph/master-promotion-marker.svg": [1190, 81],
            "./lp-graph/platinum-promotion-marker.svg": [1188, 82],
            "./lp-graph/silver-promotion-marker.svg": [1186, 83],
            "./medal-icon.svg": [1162, 84],
            "./multikills/double.svg": [1167, 85],
            "./multikills/penta.svg": [1164, 86],
            "./multikills/quadra.svg": [1165, 87],
            "./multikills/triple.svg": [1166, 88],
            "./multisearch-icon.svg": [1229, 89],
            "./my-profile-icon.svg": [1230, 90],
            "./new-tag.svg": [1157, 91],
            "./perf-score-icon.svg": [1202, 92],
            "./pin-icon-filled.svg": [1180, 93],
            "./pin-icon-outline.svg": [1181, 94],
            "./post-match/objective-baron.svg": [1172, 95],
            "./post-match/objective-dragon.svg": [1173, 96],
            "./post-match/objective-towers.svg": [1174, 97],
            "./profile-champion-stats/cs-icon.svg": [1205, 98],
            "./profile-champion-stats/damage-icon.svg": [1203, 99],
            "./profile-champion-stats/death-icon.svg": [1204, 100],
            "./profile-champion-stats/gold-icon.svg": [1206, 101],
            "./profile-champion-stats/hard-carry-icon.svg": [1207, 102],
            "./profile-champion-stats/teamplay-icon.svg": [1208, 103],
            "./profile-icon.svg": [1193, 104],
            "./roles/all-active.svg": [1231, 105],
            "./roles/all-inactive.svg": [373],
            "./roles/all.svg": [372],
            "./roles/aram-inactive.svg": [375],
            "./roles/aram.svg": [374],
            "./roles/bot-active.svg": [358],
            "./roles/bot-inactive.svg": [359],
            "./roles/bot.svg": [357],
            "./roles/jungle-active.svg": [367],
            "./roles/jungle-inactive.svg": [368],
            "./roles/jungle.svg": [366],
            "./roles/mid-active.svg": [370],
            "./roles/mid-inactive.svg": [371],
            "./roles/mid.svg": [369],
            "./roles/support-active.svg": [361],
            "./roles/support-inactive.svg": [362],
            "./roles/support.svg": [360],
            "./roles/top-active.svg": [364],
            "./roles/top-inactive.svg": [365],
            "./roles/top.svg": [363],
            "./round-x.svg": [1175, 106],
            "./scoring-down-arrow.svg": [1179, 107],
            "./search-icon.svg": [1161, 108],
            "./social/discord.svg": [1211, 109],
            "./social/facebook.svg": [1212, 110],
            "./social/instagram.svg": [1213, 111],
            "./social/reddit.svg": [1215, 112],
            "./social/twitter.svg": [1214, 113],
            "./social/youtube.svg": [1232, 114],
            "./sound-module-icon.svg": [1224, 115],
            "./star.svg": [1168, 116],
            "./tier-list-icon.svg": [1233, 117],
            "./triangle-arrow-down.svg": [93],
            "./triangle-arrow-up.svg": [118],
            "./vision-icon.svg": [1183, 118],
            "./windows-icon.svg": [379],
            "./windows.svg": [286],
            "./wrench-icon.svg": [1163, 119],
            "./x.svg": [224],
            "./yellow-hard-carry.svg": [1177, 120],
            "./yellow_carry_king.svg": [1178, 121]
        };

        function r(e) {
            if (!n.o(a, e)) return Promise.resolve().then((function() {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }));
            var t = a[e],
                r = t[0];
            return Promise.all(t.slice(1).map(n.e)).then((function() {
                return n(r)
            }))
        }
        r.keys = function() {
            return Object.keys(a)
        }, r.id = 690, e.exports = r
    },
    70: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "h", (function() {
            return r
        })), n.d(t, "k", (function() {
            return o
        })), n.d(t, "f", (function() {
            return d
        })), n.d(t, "g", (function() {
            return m
        })), n.d(t, "c", (function() {
            return s
        })), n.d(t, "d", (function() {
            return l
        })), n.d(t, "b", (function() {
            return p
        })), n.d(t, "j", (function() {
            return f
        })), n.d(t, "i", (function() {
            return i
        })), n.d(t, "e", (function() {
            return c
        }));
        var a = ["challenger", "grandmaster", "master", "diamond", "platinum", "gold", "silver", "bronze", "iron"];

        function r(e) {
            switch (e && e.toLowerCase()) {
                case "iron":
                    return "#574D4F";
                case "bronze":
                    return "#8C523A";
                case "silver":
                    return "#80989D";
                case "gold":
                    return "#CD8837";
                case "platinum":
                    return "#4E9996";
                case "diamond":
                    return "#576BCE";
                case "master":
                    return "#9D48E0";
                case "grandmaster":
                    return "#CD4545";
                case "challenger":
                    return "#F4C874";
                default:
                    return ""
            }
        }

        function o(e) {
            switch (e && e.toLowerCase()) {
                case "iron":
                    return "I";
                case "bronze":
                    return "B";
                case "silver":
                    return "S";
                case "gold":
                    return "G";
                case "platinum":
                    return "P";
                case "diamond":
                    return "D";
                case "master":
                    return "M";
                case "grandmaster":
                    return "GM";
                case "challenger":
                    return "C";
                default:
                    return "U"
            }
        }

        function i(e) {
            switch (e) {
                case "I":
                    return "iron";
                case "B":
                    return "bronze";
                case "S":
                    return "silver";
                case "G":
                    return "gold";
                case "P":
                    return "platinum";
                case "D":
                    return "diamond";
                case "M":
                    return "master";
                case "GM":
                    return "grandmaster";
                case "C":
                    return "challenger";
                default:
                    return "unranked"
            }
        }

        function c(e) {
            switch (e) {
                case "I":
                    return "B";
                case "B":
                    return "S";
                case "S":
                    return "G";
                case "G":
                    return "P";
                case "P":
                    return "D";
                case "D":
                    return "M";
                case "M":
                    return "GM";
                case "GM":
                case "C":
                    return "C";
                default:
                    return "unranked"
            }
        }

        function s(e) {
            if (!e) return 0;
            switch (e.toUpperCase()) {
                case "I":
                    return 1;
                case "II":
                    return 2;
                case "III":
                    return 3;
                case "IV":
                    return 4;
                case "V":
                    return 5;
                default:
                    return 0
            }
        }

        function l(e) {
            if (!e) return 0;
            switch (e.toLowerCase()) {
                case "challenger":
                    return 9;
                case "grandmaster":
                    return 8;
                case "master":
                    return 7;
                case "diamond":
                    return 6;
                case "platinum":
                    return 5;
                case "gold":
                    return 4;
                case "silver":
                    return 3;
                case "bronze":
                    return 2;
                case "iron":
                    return 1;
                default:
                    return 0
            }
        }

        function u(e) {
            var t = e.tier.charAt(0).toUpperCase() + e.tier.slice(1).toLowerCase();
            return "Challenger" === t || "Master" === t || "Grandmaster" === t ? t : "Unranked" === t ? "Unranked" : "".concat(t, " ").concat(s(e.rank))
        }

        function m(e) {
            return function(e) {
                var t = e;
                e.indexOf("Unranked") > -1 ? t = "â€”" : e.indexOf("Iron ") > -1 ? t = t.replace("Iron ", "I") : e.indexOf("Bronze ") > -1 ? t = t.replace("Bronze ", "B") : e.indexOf("Silver ") > -1 ? t = t.replace("Silver ", "S") : e.indexOf("Gold ") > -1 ? t = t.replace("Gold ", "G") : e.indexOf("Platinum ") > -1 ? t = t.replace("Platinum ", "P") : e.indexOf("Diamond ") > -1 ? t = t.replace("Diamond ", "D") : e.indexOf("Master") > -1 ? t = t.replace("Master", "M") : e.indexOf("Challenger") > -1 ? t = t.replace("Challenger", "C") : e.indexOf("Grandmaster") > -1 && (t = t.replace("Grandmaster", "GM"));
                return t
            }(u({
                tier: e[0],
                rank: e[1].toUpperCase()
            }))
        }

        function d(e) {
            return u({
                tier: e[0],
                rank: e[1].toUpperCase()
            })
        }

        function p(e, t) {
            if (e && !t) return e;
            if (!e && t) return t;
            var n = l(e.tier) - l(t.tier);
            if (n > 0) return e;
            if (n < 0) return t;
            var a = s(e.rank) - s(t.rank);
            return a > 0 ? e : a < 0 ? t : (e.wins || 0) + (e.losses || 0) >= (t.wins || 0) + (t.losses || 0) ? e : t
        }

        function f(e, t, n) {
            if (!n) return null;
            var a = void 0;
            return (a = "all" === e ? n.filter((function(e) {
                return e.seasonId === Number(t)
            })).filter((function(e) {
                return "ranked_solo_5x5" === e.queueType || "ranked_flex_sr" === e.queueType
            })).filter((function(e) {
                return !e.role
            })).sort(p) : "ranked_solo_5x5" === e || "ranked_flex_sr" === e ? n.filter((function(e) {
                return e.seasonId === Number(t)
            })).filter((function(t) {
                return t.queueType === e
            })).filter((function(e) {
                return !e.role
            })) : n.filter((function(e) {
                return e.seasonId === Number(t)
            })).filter((function(e) {
                return "ranked_solo_5x5" === e.queueType
            })).filter((function(e) {
                return !e.role
            })).sort(p)) && a[0]
        }
    },
    743: function(e, t) {},
    745: function(e, t) {},
    756: function(e, t) {},
    758: function(e, t) {},
    783: function(e, t) {},
    784: function(e, t) {},
    789: function(e, t) {},
    79: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return I
        })), n.d(t, "b", (function() {
            return C
        })), n.d(t, "c", (function() {
            return x
        })), n.d(t, "d", (function() {
            return G
        })), n.d(t, "e", (function() {
            return U
        })), n.d(t, "g", (function() {
            return g
        })), n.d(t, "f", (function() {
            return F
        }));
        var a = n(11),
            r = n.n(a),
            o = n(1),
            i = n.n(o),
            c = n(4),
            s = n(0),
            l = n.n(s),
            u = n(65),
            m = function(e) {
                var t = Object(s.useRef)(c.document && c.document.createElement("div")),
                    n = e.children,
                    a = e.dest,
                    r = void 0 === a ? "react-portal" : a;
                return Object(s.useEffect)((function() {
                    return c.document && c.document.getElementById(r).appendChild(t.current),
                        function() {
                            c.document && c.document.getElementById(r).removeChild(t.current)
                        }
                }), []), c.window ? Object(u.createPortal)(n, t.current) : null
            },
            d = n(14),
            p = n.n(d),
            f = l.a.createContext(),
            g = function(e) {
                var t = isNaN(e.zoom) || e.zoom <= 0 ? 1 : e.zoom;
                return l.a.createElement(f.Provider, {
                    value: t
                }, e.children)
            };

        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                    r()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var b = function(e) {
                var t = 1 / Object(s.useContext)(f),
                    n = Object(s.useRef)(),
                    a = e.children,
                    r = e.element,
                    o = e.setShowTooltip,
                    u = e.hoverableTimeout,
                    m = e.tooltipHoverable,
                    d = e.forceOrientation,
                    g = e.isFixed,
                    h = e.customStyle,
                    b = e.customArrowStyle,
                    y = Object(s.useState)({
                        disableUpdate: !1,
                        xOverflowType: void 0
                    }),
                    O = i()(y, 2),
                    E = O[0],
                    w = O[1],
                    j = E.disableUpdate;
                Object(s.useEffect)((function() {
                    if (c.window && r && n && n.current && !j) {
                        var e = E.arrowLeft,
                            a = E.arrowRight,
                            o = E.orientation,
                            i = E.xOverflowType,
                            s = E.disableUpdate,
                            l = n.current.getBoundingClientRect(),
                            u = l.width,
                            m = l.height,
                            p = l.left,
                            f = l.right,
                            h = r ? r.getBoundingClientRect() : {},
                            b = "".concat(h.y + h.height + c.window.scrollY * t + 15 - 0, "px"),
                            y = "".concat(h.y - m + c.window.scrollY * t - 0 - 15, "px"),
                            O = "".concat(h.x + h.width + c.window.scrollX * t + 15, "px"),
                            N = void 0,
                            S = m + 20 > h.top,
                            k = h.bottom + m + 10 > c.window.innerHeight;
                        o = k && S ? "top" : S ? "bottom" : "top", "top" === d ? o = "top" : "bottom" === d ? o = "bottom" : "left" === d ? o = "left" : "right" === d && (o = "right");
                        var _ = h.x - u / 2 + h.width / 2 <= 10,
                            T = h.x + u / 2 + h.width / 2 + c.window.scrollX * t >= document.documentElement.clientWidth * t;
                        "left" === o || "right" === o ? (N = "auto", y = "auto", b = "".concat(h.y + h.height / 2 - m / 2 + (g ? 0 : c.window.scrollY), "px")) : _ || T || i ? _ && !T || "left" === i ? (O = "".concat(10 + c.window.scrollX * t, "px"), N = "auto", e = "".concat(h.x + h.width / 2 - 10, "px"), a = "auto", i = "left") : !_ && T || "right" === i ? (O = "auto", N = "".concat(10, "px"), e = "".concat(h.left - n.current.getBoundingClientRect().left + h.width / 2 - 1, "px"), a = "auto", i = "right") : (_ && T || "both" === i) && (O = "".concat(10, "px"), N = "".concat(10, "px"), e = "".concat(h.x + h.width / 2, "px"), a = "auto", i = "both") : (O = "".concat(h.x - u / 2 + h.width / 2 + c.window.scrollX * t, "px"), N = "auto", e = "50%", a = "auto"), (_ || T) && ("auto" === O && p <= 10 && (O = "".concat(10, "px")), "auto" === N && f >= c.window.innerWidth - 10 && (N = "".concat(10, "px"))), E.left !== O || E.right !== N || E.top !== b || E.bottom !== y || E.arrowLeft !== e || E.arrowRight !== a || E.disableUpdate !== s || E.orientation !== o ? w((function(t) {
                            return v(v({}, E), {}, {
                                left: O,
                                right: N,
                                top: b,
                                bottom: y,
                                arrowLeft: e,
                                arrowRight: a,
                                orientation: o,
                                disableUpdate: s,
                                xOverflowType: i
                            })
                        })) : w(v(v({}, E), {}, {
                            disableUpdate: !0
                        }))
                    }
                }), [e, E]);
                var N = Object(s.useCallback)((function() {
                        m && u && u.current && clearTimeout(u.current)
                    }), [m, u]),
                    S = Object(s.useCallback)((function() {
                        m && o(!1)
                    }), [m]),
                    k = v(v({}, h || {}), {}, {
                        position: g ? "fixed" : void 0,
                        display: "block",
                        visibility: j ? "visible" : "hidden",
                        zIndex: j ? 9999999 : -9999999,
                        left: E.left || 0,
                        right: E.right,
                        top: "top" !== E.orientation ? E.top : E.bottom,
                        transform: "translateZ(0px)"
                    }),
                    _ = p()("arrow", {
                        "arrow-up": "bottom" === E.orientation,
                        "arrow-down": "top" === E.orientation,
                        "arrow-left": "right" === E.orientation,
                        "arrow-right": "left" === E.orientation
                    }),
                    T = v(v({}, b || {}), {}, {
                        left: E.arrowLeft,
                        right: E.arrowRight
                    });
                return l.a.createElement("div", {
                    ref: n,
                    style: k,
                    className: "ugg-tooltip",
                    onMouseEnter: N,
                    onMouseLeave: S
                }, l.a.createElement("div", {
                    style: {
                        postion: "relative"
                    }
                }, a, l.a.createElement("div", {
                    style: T,
                    className: _
                })))
            },
            y = n(572),
            O = n.n(y);

        function E(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }

        function w(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? E(Object(n), !0).forEach((function(t) {
                    r()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var j = function(e, t) {
                var n = Object(s.useRef)(),
                    a = Object(s.useRef)(),
                    r = Object(s.useState)(!1),
                    o = i()(r, 2),
                    u = o[0],
                    d = o[1],
                    f = (e.debug, e.tooltipInfo),
                    g = e.children,
                    h = e.forceOrientation,
                    v = e.isFixed,
                    y = e.tooltipHoverable,
                    E = e.customStyle,
                    j = e.customArrowStyle,
                    N = e.customClassName,
                    S = e.disableTooltip,
                    k = O()(),
                    _ = Object(s.useCallback)((function(e) {
                        n.current.contains(e.target) || (d(!1), e.outplayed_tooltip_clicked = !1)
                    }), [n]);
                Object(s.useEffect)((function() {
                    if (c.window && k) return c.window.addEventListener("click", _),
                        function() {
                            c.window.removeEventListener("click", _), y && a.current && clearTimeout(a.current)
                        }
                }), []), Object(s.useEffect)((function() {
                    u || y && a.current && clearTimeout(a.current)
                }), [u]);
                var T = Object(s.useCallback)((function(e) {
                        S || k || (y && a.current && clearTimeout(a.current), d(!0))
                    }), [S]),
                    I = Object(s.useCallback)((function(e) {
                        S || k || (y ? a.current = setTimeout((function() {
                            d(!1)
                        }), 100) : d(!1))
                    }), [S]),
                    P = Object(s.useCallback)((function(e) {
                        !S && k && (e.outplayed_tooltip_clicked = !0, d(!u))
                    }), [S, u]),
                    A = l.a.Children.only(g),
                    L = {
                        onMouseEnter: T,
                        onMouseLeave: I,
                        onClick: function(e) {
                            A.props.onClick && A.props.onClick(e), P(e)
                        },
                        className: p()(A.props.className, N)
                    };
                return Object(s.useImperativeHandle)(t, (function() {
                    return {
                        forceClose: function() {
                            return d(!1)
                        }
                    }
                })), l.a.createElement(l.a.Fragment, null, !S && u && l.a.createElement(m, {
                    dest: "tooltip-portal"
                }, l.a.createElement(b, {
                    element: n.current,
                    setShowTooltip: d,
                    hoverableTimeout: a,
                    tooltipHoverable: y,
                    forceOrientation: h,
                    isFixed: v,
                    customStyle: E,
                    customArrowStyle: j
                }, f)), l.a.cloneElement(A, w(w({}, L), {}, {
                    ref: function(e) {
                        n.current = e, A.ref && A.ref(e)
                    }
                })))
            },
            N = l.a.forwardRef(j),
            S = n(2),
            k = n(415),
            _ = function(e) {
                var t = Object(S.n)(),
                    n = t.useChampionIndiv,
                    a = t.getIndividualChampion,
                    r = e.championId,
                    o = e.language,
                    i = n(r, {
                        language: o,
                        skip: !0
                    }),
                    c = i.data,
                    s = (i.loading, i.error, c || a(r, {
                        language: o
                    }));
                if (!s) return null;
                var u = s.passive,
                    m = u.name,
                    d = u.description;
                return l.a.createElement("div", {
                    className: "tooltip-champion-skill"
                }, l.a.createElement("div", {
                    className: "name"
                }, m), l.a.createElement("br", null), l.a.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: d
                    }
                }))
            },
            T = ["Q", "W", "E", "R"];
        var I = function(e) {
                var t = Object(S.n)(),
                    n = t.getChampionSkillJSON,
                    a = t.getChampionPassiveJSON,
                    r = t.getPassiveAbilityImg,
                    o = t.getChampionSkillImgs,
                    i = t.getIndividualChampion,
                    c = t.useChampionIndiv,
                    s = e.children,
                    u = e.className,
                    m = e.championId,
                    d = e.skillSlot,
                    p = e.isPassive,
                    f = e.patch,
                    g = e.language,
                    h = e.forceOrientation,
                    v = e.disableTooltip,
                    b = e.ssr,
                    y = e.skip,
                    O = e.webp,
                    E = c(m, {
                        patch: f,
                        ssr: b,
                        skip: y,
                        language: g
                    }),
                    w = E.data,
                    j = (E.loading, E.error, w || i(m, {
                        patch: f,
                        language: g
                    }));
                if (!j) return null;
                var I = function(e) {
                        switch (e) {
                            case "Q":
                            case "0":
                            case 0:
                                return 0;
                            case "W":
                            case "1":
                            case 1:
                                return 1;
                            case "E":
                            case "2":
                            case 2:
                                return 2;
                            case "R":
                            case "3":
                            case 3:
                                return 3;
                            default:
                                return -1
                        }
                    }(d),
                    P = "",
                    A = "",
                    L = null;
                p ? (P = r(m, {
                    patch: f,
                    optionalData: j,
                    webp: O
                }), A = a(m, {
                    patch: f,
                    language: g,
                    optionalData: j
                }).name, L = l.a.createElement(_, {
                    championId: m,
                    language: g
                })) : (P = o(m, {
                    patch: f,
                    optionalData: j
                })[I], A = n(m, I, {
                    patch: f,
                    language: g,
                    optionalData: j
                }).name, L = l.a.createElement(k.a, {
                    championId: m,
                    skillSlot: I,
                    patch: f,
                    language: g
                }));
                var C = "".concat(j.name, "'s ").concat(p ? "Passive" : T[I], ": ").concat(A);
                return "function" == typeof s ? l.a.createElement(N, {
                    tooltipInfo: L,
                    forceOrientation: h,
                    disableTooltip: v
                }, s({
                    imgSrc: P,
                    skillName: A,
                    tooltip: L
                })) : l.a.createElement(N, {
                    tooltipInfo: L,
                    forceOrientation: h,
                    disableTooltip: v
                }, l.a.createElement("img", {
                    className: u,
                    src: P,
                    alt: C
                }))
            },
            P = function(e) {
                var t = Object(S.n)(),
                    n = t.getItems,
                    a = t.useRiotItems,
                    r = e.itemId,
                    o = e.patch,
                    i = e.language,
                    c = a({
                        patch: o,
                        language: i,
                        skip: !0
                    }),
                    s = c.data,
                    u = (c.loading, c.error, s || n({
                        patch: o,
                        language: i
                    })),
                    m = u && u[r];
                return m ? l.a.createElement("div", {
                    className: "tooltip-item"
                }, l.a.createElement("div", {
                    className: "name"
                }, m.name), l.a.createElement("br", null), l.a.createElement("div", {
                    className: "item-description-short"
                }, m.plaintext), l.a.createElement("br", null), l.a.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: m.description
                    }
                }), l.a.createElement("br", null), m.gold && l.a.createElement("div", {
                    className: "cost"
                }, "Cost: ".concat(m.gold.total, " "), l.a.createElement("span", {
                    className: "base-price"
                }, "(".concat(m.gold.base, ")")))) : null
            };

        function A(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, a)
            }
            return n
        }
        var L = function(e) {
                var t = Object(S.n)(),
                    n = t.getLegacyItemPatch,
                    a = t.getItems,
                    o = t.useRiotItems,
                    i = t.getItemImg,
                    c = t.getItemImgFromSprite,
                    s = e.itemId,
                    u = e.patch,
                    m = e.language,
                    d = e.spriteSize,
                    p = e.isSprite,
                    f = e.className,
                    g = e.style,
                    h = e.disableTooltip,
                    v = e.ssr,
                    b = e.skip,
                    y = e.webp,
                    O = n(s, u),
                    E = o({
                        patch: O,
                        language: m,
                        ssr: v,
                        skip: b
                    }),
                    w = E.data,
                    j = (E.loading, E.error, w || a({
                        patch: O,
                        language: m
                    })),
                    k = j && j[s],
                    _ = null;
                if (k && k.image && k.image.s3Img) {
                    var T = Object(S.g)("ugg/icons/orrn-items/".concat(s, ".png")),
                        I = k && k.name || "",
                        L = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? A(Object(n), !0).forEach((function(t) {
                                    r()(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, g);
                    if (p) {
                        var C = (d || 24) / 64 || 1;
                        _ = l.a.createElement("div", {
                            style: {
                                height: "".concat(d || 24, "px"),
                                width: "".concat(d || 24, "px"),
                                overflow: "hidden"
                            }
                        }, l.a.createElement("div", {
                            style: {
                                height: "64px",
                                width: "64px",
                                backgroundImage: "url(".concat(T, ")"),
                                backgroundRepeat: "no-repeat",
                                zoom: C,
                                MozTransform: "scale(".concat(C, ")"),
                                MozTransformOrigin: "0 0"
                            }
                        }))
                    } else _ = l.a.createElement("img", {
                        className: f,
                        style: L,
                        src: T,
                        alt: I
                    })
                } else if (p) {
                    var R = c(s, {
                        size: d || 24,
                        patch: O,
                        optionalData: j,
                        webp: y
                    });
                    _ = l.a.createElement("div", {
                        className: f,
                        style: g
                    }, R)
                } else {
                    var x = i(s, {
                            patch: O,
                            optionalData: j,
                            webp: y
                        }),
                        M = k && k.name || "";
                    _ = l.a.createElement("img", {
                        className: f,
                        style: g,
                        src: x,
                        alt: M
                    })
                }
                var D = l.a.createElement(P, {
                    itemId: s,
                    patch: u,
                    language: m
                });
                return l.a.createElement(N, {
                    tooltipInfo: D,
                    disableTooltip: h
                }, _)
            },
            C = l.a.memo(L),
            R = function(e) {
                var t = Object(S.n)(),
                    n = t.getWorkingPatch,
                    a = t.getRuneJSON,
                    r = t.useRiotRunes,
                    o = e.runeId,
                    i = e.patch,
                    c = e.language,
                    s = r({
                        patch: i,
                        language: c,
                        skip: !0
                    }),
                    u = s.data,
                    m = (s.loading, s.error, a(o, {
                        patch: i,
                        language: c,
                        optionalData: u
                    }));
                if (!m) return null;
                var d = function(e) {
                    n(e);
                    if (e) {
                        var t = e.split(".")[0],
                            a = e.split(".")[1];
                        if (8 == t && a <= 7 && a >= 1) return !0
                    }
                    return !1
                }(i) ? m.shortDesc : m.longDesc;
                return l.a.createElement("div", {
                    className: "tooltip-rune"
                }, l.a.createElement("div", {
                    className: "name"
                }, m.name), m.longDesc && l.a.createElement(l.a.Fragment, null, l.a.createElement("br", null), l.a.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: d
                    }
                })))
            },
            x = function(e) {
                var t = Object(S.n)(),
                    n = t.getRuneImg,
                    a = t.getRuneJSON,
                    r = t.useRiotRunes,
                    o = t.getLegacyRunePatch,
                    i = e.children,
                    c = e.runeId,
                    s = e.patch,
                    u = e.language,
                    m = e.className,
                    d = e.style,
                    p = e.disableTooltip,
                    f = e.ssr,
                    g = e.skip,
                    h = e.webp,
                    v = o(c, s),
                    b = r({
                        patch: v,
                        ssr: f,
                        language: u,
                        skip: g
                    }),
                    y = b.data,
                    O = (b.loading, b.error, a(c, {
                        patch: v,
                        language: u,
                        optionalData: y
                    })),
                    E = n(c, {
                        patch: v,
                        optionalData: y,
                        webp: h
                    }),
                    w = O && O.name || "",
                    j = w;
                O && "tree" === O.type ? j = "The Rune Tree ".concat(w) : O && "keystone" === O.type ? j = "The Keystone ".concat(w) : O && "rune" === O.type && (j = "The Rune ".concat(w));
                var k = l.a.createElement(R, {
                    runeId: c,
                    patch: s,
                    language: u
                });
                return "function" == typeof i ? l.a.createElement(N, {
                    tooltipInfo: k,
                    disableTooltip: p
                }, i({
                    imgSrc: E,
                    runeName: w,
                    tooltipInfo: k
                })) : l.a.createElement(N, {
                    tooltipInfo: k,
                    disableTooltip: p
                }, l.a.createElement("img", {
                    className: m,
                    style: d,
                    src: E,
                    alt: j
                }))
            },
            M = n(1155),
            D = function(e) {
                var t = Object(M.a)().t,
                    n = Object(S.n)(),
                    a = n.getStatShards,
                    r = n.getStatShardJSON,
                    o = e.shardRow,
                    i = e.shardId,
                    c = a()[o],
                    s = r(o, i);
                return s ? l.a.createElement("div", {
                    className: "tooltip-champion-skill"
                }, c && l.a.createElement(l.a.Fragment, null, l.a.createElement("div", {
                    className: "name"
                }, t ? t(c.key) : c.key), l.a.createElement("br", null)), l.a.createElement("div", null, t ? t(s.tooltip_desc) : s.tooltip_desc)) : null
            },
            G = function(e) {
                var t = Object(S.n)(),
                    n = t.getStatShardJSON,
                    a = t.getStatShardImg,
                    r = e.children,
                    o = e.className,
                    i = e.style,
                    c = (e.row, e.shardRow),
                    s = e.shardId,
                    u = e.language,
                    m = e.disableTooltip,
                    d = n(c, s),
                    p = d && d.name || "",
                    f = a(s),
                    g = l.a.createElement(D, {
                        shardRow: c,
                        shardId: s,
                        language: u
                    });
                return "function" == typeof r ? l.a.createElement(N, {
                    tooltipInfo: g,
                    disableTooltip: m
                }, r({
                    imgSrc: f,
                    shardName: p,
                    tooltipInfo: g
                })) : l.a.createElement(N, {
                    tooltipInfo: g,
                    disableTooltip: m
                }, l.a.createElement("img", {
                    className: o,
                    style: i,
                    src: f,
                    alt: "The ".concat(p, " Shard")
                }))
            },
            B = function(e) {
                var t = Object(S.n)(),
                    n = t.getSummonerSpells,
                    a = t.useRiotSummoners,
                    r = e.spellId,
                    o = e.patch,
                    i = e.language,
                    c = a({
                        patch: o,
                        language: i,
                        skip: !0
                    }),
                    s = c.data,
                    u = (c.loading, c.error, s || n({
                        language: i,
                        patch: o
                    })),
                    m = u && u[r];
                return m ? l.a.createElement("div", {
                    className: "tooltip-summoner-spell"
                }, l.a.createElement("div", {
                    className: "name"
                }, m.name), l.a.createElement("br", null), l.a.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: m.description
                    }
                })) : null
            },
            q = function(e) {
                var t = Object(S.n)(),
                    n = t.getSummonerSpells,
                    a = t.getSummonerSpellImg,
                    r = t.useRiotSummoners,
                    o = e.spellId,
                    i = e.patch,
                    c = e.language,
                    s = e.className,
                    u = e.style,
                    m = e.disableTooltip,
                    d = e.ssr,
                    p = e.skip,
                    f = e.webp,
                    g = r({
                        patch: i,
                        ssr: d,
                        language: c,
                        skip: p
                    }),
                    h = g.data,
                    v = (g.loading, g.error, h || n({
                        language: c,
                        patch: i
                    })),
                    b = a(o, {
                        optionalData: v,
                        webp: f
                    }),
                    y = v && v[o],
                    O = y && y.name || "",
                    E = l.a.createElement(B, {
                        spellId: o,
                        patch: i,
                        language: c
                    });
                return l.a.createElement(N, {
                    tooltipInfo: E,
                    disableTooltip: m
                }, l.a.createElement("img", {
                    className: s,
                    style: u,
                    src: b,
                    alt: "Summoner Spell ".concat(O)
                }))
            },
            U = l.a.memo(q),
            F = N
    },
    791: function(e, t) {},
    798: function(e, t) {},
    817: function(e, t) {},
    82: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return c
        })), n.d(t, "b", (function() {
            return l
        })), n.d(t, "c", (function() {
            return d
        }));
        var a = n(31),
            r = n.n(a),
            o = n(4),
            i = n(18),
            c = "en_US",
            s = ["en_US", "cs_CZ", "de_DE", "el_GR", "es_ES", "fr_FR", "hu_HU", "it_IT", "ja_JP", "ko_KR", "pl_PL", "pt_BR", "ro_RO", "ru_RU", "th_TH", "tr_TR", "vn_VN", "zh_CN", "zh_TW"],
            l = [{
                label: "English",
                value: "en_US"
            }, {
                label: "Deutsch",
                value: "de_DE"
            }, {
                label: "EspaÃ±ol",
                value: "es_ES"
            }, {
                label: "FranÃ§ais",
                value: "fr_FR"
            }, {
                label: "Italiano",
                value: "it_IT"
            }, {
                label: "Polski",
                value: "pl_PL"
            }, {
                label: "Î•Î»Î»Î·Î½Î¹ÎºÎ¬",
                value: "el_GR"
            }, {
                label: "RomÃ¢nÄƒ",
                value: "ro_RO"
            }, {
                label: "Magyar",
                value: "hu_HU"
            }, {
                label: "ÄŒeÅ¡tina",
                value: "cs_CZ"
            }, {
                label: "PortuguÃªs",
                value: "pt_BR"
            }, {
                label: "Ð ÑƒÑÑÐºÐ¸Ð¹",
                value: "ru_RU"
            }, {
                label: "TÃ¼rkÃ§e",
                value: "tr_TR"
            }, {
                label: "Tiáº¿ng Viá»‡t",
                value: "vn_VN"
            }, {
                label: "à¹„à¸—à¸¢",
                value: "th_TH"
            }, {
                label: "æ—¥æœ¬èªž",
                value: "ja_JP"
            }, {
                label: "í•œêµ­ì–´",
                value: "ko_KR"
            }, {
                label: "ç®€ä½“ä¸­æ–‡",
                value: "zh_CN"
            }, {
                label: "ç¹é«”ä¸­æ–‡",
                value: "zh_TW"
            }],
            u = {
                vi: "vn_VN"
            };

        function m(e) {
            var t = (u[e] || e).replace("-", "_").toLowerCase();
            return s.find((function(e) {
                return 0 === e.toLowerCase().indexOf(t)
            }))
        }

        function d() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.req,
                n = e.language,
                a = c;
            if (n) {
                var s = m(n);
                s && (a = s)
            } else {
                var l = "",
                    u = [];
                o.window ? (l = Object(i.n)("ugg_lang"), u = o.window.navigator.languages) : t && (l = t.cookies.ugg_lang, u = t.acceptsLanguages());
                var d = l ? [l].concat(r()(u)) : u,
                    p = m(d[0] || "");
                l && p && (a = p)
            }
            return a
        }
    },
    856: function(e, t) {},
    87: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return c
        })), n.d(t, "a", (function() {
            return s
        })), n.d(t, "d", (function() {
            return l
        })), n.d(t, "c", (function() {
            return u
        }));
        n(4);
        var a = n(215),
            r = n.n(a),
            o = (n(18), n(167), "https://stats.u.gg/lol/".concat("1.1")),
            i = "https://stats2.u.gg/lol/".concat("1.1");

        function c(e) {
            if (!e) return i;
            var t = e.split("_"),
                n = t[0],
                a = t[1];
            return n < 8 || 8 == n && a <= 23 ? o : i
        }

        function s(e) {
            return r()(e, {
                method: "GET"
            })
        }

        function l(e) {
            switch (e) {
                case "jungle":
                    return 1;
                case "support":
                case "supp":
                    return 2;
                case "adc":
                    return 3;
                case "top":
                    return 4;
                case "middle":
                case "mid":
                    return 5;
                case "none":
                    return 6;
                case "all":
                    return 7;
                default:
                    return -1
            }
        }

        function u(e) {
            switch (e) {
                case "normal_draft_5x5":
                    return 400;
                case "ranked_solo_5x5":
                    return 420;
                case "normal_blind_5x5":
                    return 430;
                case "ranked_flex_sr":
                    return 440;
                case "normal_aram":
                    return 450;
                case "clash_5x5":
                    return 700;
                case "nexus_blitz":
                    return 1300;
                default:
                    return -1
            }
        }
    },
    9: function(e, t, n) {
        "use strict";
        n.d(t, "w", (function() {
            return o
        })), n.d(t, "c", (function() {
            return i
        })), n.d(t, "z", (function() {
            return s
        })), n.d(t, "D", (function() {
            return p
        })), n.d(t, "C", (function() {
            return f
        })), n.d(t, "t", (function() {
            return g
        })), n.d(t, "B", (function() {
            return h
        })), n.d(t, "A", (function() {
            return v
        })), n.d(t, "k", (function() {
            return b
        })), n.d(t, "j", (function() {
            return y
        })), n.d(t, "e", (function() {
            return O
        })), n.d(t, "d", (function() {
            return E
        })), n.d(t, "q", (function() {
            return w
        })), n.d(t, "p", (function() {
            return j
        })), n.d(t, "s", (function() {
            return N
        })), n.d(t, "r", (function() {
            return S
        })), n.d(t, "b", (function() {
            return k
        })), n.d(t, "a", (function() {
            return _
        })), n.d(t, "m", (function() {
            return T
        })), n.d(t, "l", (function() {
            return I
        })), n.d(t, "y", (function() {
            return P
        })), n.d(t, "x", (function() {
            return A
        })), n.d(t, "o", (function() {
            return L
        })), n.d(t, "n", (function() {
            return C
        })), n.d(t, "g", (function() {
            return R
        })), n.d(t, "f", (function() {
            return x
        })), n.d(t, "i", (function() {
            return M
        })), n.d(t, "h", (function() {
            return D
        })), n.d(t, "v", (function() {
            return B
        })), n.d(t, "u", (function() {
            return q
        })), n.d(t, "F", (function() {
            return U
        })), n.d(t, "E", (function() {
            return F
        }));
        var a = n(6),
            r = n(2),
            o = [{
                value: a.a.TOP,
                label: "Top",
                img: Object(a.f)(a.a.TOP),
                imgActive: Object(a.f)(a.a.TOP, {
                    active: !0
                })
            }, {
                value: a.a.JUNGLE,
                label: "Jungle",
                img: Object(a.f)(a.a.JUNGLE),
                imgActive: Object(a.f)(a.a.JUNGLE, {
                    active: !0
                })
            }, {
                value: a.a.MIDDLE,
                label: "Middle",
                img: Object(a.f)(a.a.MIDDLE),
                imgActive: Object(a.f)(a.a.MIDDLE, {
                    active: !0
                })
            }, {
                value: a.a.BOTTOM,
                label: "Bot",
                img: Object(a.f)(a.a.BOTTOM),
                imgActive: Object(a.f)(a.a.BOTTOM, {
                    active: !0
                })
            }, {
                value: a.a.SUPPORT,
                label: "Support",
                img: Object(a.f)(a.a.SUPPORT),
                imgActive: Object(a.f)(a.a.SUPPORT, {
                    active: !0
                })
            }],
            i = [{
                value: a.a.ALL,
                label: "All Roles",
                img: Object(a.f)(a.a.ALL)
            }, {
                value: a.a.TOP,
                label: "Top",
                img: Object(a.f)(a.a.TOP),
                imgActive: Object(a.f)(a.a.TOP, {
                    active: !0
                })
            }, {
                value: a.a.JUNGLE,
                label: "Jungle",
                img: Object(a.f)(a.a.JUNGLE),
                imgActive: Object(a.f)(a.a.JUNGLE, {
                    active: !0
                })
            }, {
                value: a.a.MIDDLE,
                label: "Middle",
                img: Object(a.f)(a.a.MIDDLE),
                imgActive: Object(a.f)(a.a.MIDDLE, {
                    active: !0
                })
            }, {
                value: a.a.BOTTOM,
                label: "Bot",
                img: Object(a.f)(a.a.BOTTOM),
                imgActive: Object(a.f)(a.a.BOTTOM, {
                    active: !0
                })
            }, {
                value: a.a.SUPPORT,
                label: "Support",
                img: Object(a.f)(a.a.SUPPORT),
                imgActive: Object(a.f)(a.a.SUPPORT, {
                    active: !0
                })
            }],
            c = [{
                value: "ranked_solo_5x5",
                label: "Ranked Solo"
            }, {
                value: "normal_aram",
                label: "ARAM"
            }, {
                value: "ranked_flex_sr",
                label: "Ranked Flex"
            }, {
                value: "normal_blind_5x5",
                label: "Normal Blind"
            }, {
                value: "normal_draft_5x5",
                label: "Normal Draft"
            }],
            s = (Object(r.l)("platinum_plus"), Object(r.l)("diamond_plus"), Object(r.l)("allranks"), Object(r.l)("challenger_1"), Object(r.l)("master_1"), Object(r.l)("diamond_5"), Object(r.l)("platinum_5"), Object(r.l)("gold_5"), Object(r.l)("silver_5"), Object(r.l)("bronze_5"), [{
                value: "platinum_plus",
                label: "Platinum +",
                img: Object(r.q)("platinum_plus")
            }, {
                value: "diamond_plus",
                label: "Diamond +",
                img: Object(r.q)("diamond_plus")
            }, {
                value: "master_plus",
                label: "Master +",
                img: Object(r.q)("master_plus")
            }, {
                value: "overall",
                label: "All Ranks",
                img: Object(r.l)("allranks")
            }, {
                value: "challenger",
                label: "Challenger",
                img: Object(r.q)("challenger")
            }, {
                value: "grandmaster",
                label: "Grandmaster",
                img: Object(r.q)("grandmaster")
            }, {
                value: "master",
                label: "Master",
                img: Object(r.q)("master")
            }, {
                value: "diamond",
                label: "Diamond",
                img: Object(r.q)("diamond")
            }, {
                value: "platinum",
                label: "Platinum",
                img: Object(r.q)("platinum")
            }, {
                value: "gold",
                label: "Gold",
                img: Object(r.q)("gold")
            }, {
                value: "silver",
                label: "Silver",
                img: Object(r.q)("silver")
            }, {
                value: "bronze",
                label: "Bronze",
                img: Object(r.q)("bronze")
            }, {
                value: "iron",
                label: "Iron",
                img: Object(r.q)("iron")
            }]),
            l = (Object(r.c)("platinum_plus"), Object(r.c)("diamond_plus"), Object(r.c)("master_plus"), Object(r.c)("allranks"), Object(r.c)("challenger"), Object(r.c)("grandmaster"), Object(r.c)("master"), Object(r.c)("diamond"), Object(r.c)("platinum"), Object(r.c)("gold"), Object(r.c)("silver"), Object(r.c)("bronze"), Object(r.c)("iron"), [{
                value: "platinum_plus",
                label: "Platinum +",
                img: Object(r.c)("platinum_plus")
            }, {
                value: "diamond_plus",
                label: "Diamond +",
                img: Object(r.c)("diamond_plus")
            }, {
                value: "diamond_2_plus",
                label: "Diamond 2 +",
                img: Object(r.c)("diamond_2_plus")
            }, {
                value: "master_plus",
                label: "Master +",
                img: Object(r.c)("master_plus")
            }, {
                value: "overall",
                label: "All Ranks",
                img: Object(r.c)("allranks")
            }, {
                value: "challenger",
                label: "Challenger",
                img: Object(r.c)("challenger")
            }, {
                value: "grandmaster",
                label: "Grandmaster",
                img: Object(r.c)("grandmaster")
            }, {
                value: "master",
                label: "Master",
                img: Object(r.c)("master")
            }, {
                value: "diamond",
                label: "Diamond",
                img: Object(r.c)("diamond")
            }, {
                value: "platinum",
                label: "Platinum",
                img: Object(r.c)("platinum")
            }, {
                value: "gold",
                label: "Gold",
                img: Object(r.c)("gold")
            }, {
                value: "silver",
                label: "Silver",
                img: Object(r.c)("silver")
            }, {
                value: "bronze",
                label: "Bronze",
                img: Object(r.c)("bronze")
            }, {
                value: "iron",
                label: "Iron",
                img: Object(r.c)("iron")
            }]),
            u = [{
                value: "world",
                label: "World",
                img: Object(r.m)("world")
            }, {
                value: "na1",
                label: "NA",
                img: Object(r.m)("NA")
            }, {
                value: "euw1",
                label: "EUW",
                img: Object(r.m)("EUW")
            }, {
                value: "kr",
                label: "KR",
                img: Object(r.m)("flags/kr"),
                flag: !0
            }, {
                value: "br1",
                label: "BR",
                img: Object(r.m)("flags/br"),
                flag: !0
            }, {
                value: "eun1",
                label: "EUN",
                img: Object(r.m)("EUN")
            }, {
                value: "jp1",
                label: "JP",
                img: Object(r.m)("flags/jp"),
                flag: !0
            }, {
                value: "la1",
                label: "LAN",
                img: Object(r.m)("LAN")
            }, {
                value: "la2",
                label: "LAS",
                img: Object(r.m)("LAS")
            }, {
                value: "oc1",
                label: "OCE",
                img: Object(r.m)("OCE")
            }, {
                value: "ru",
                label: "RU",
                img: Object(r.m)("flags/ru"),
                flag: !0
            }, {
                value: "tr1",
                label: "TR",
                img: Object(r.m)("flags/tr"),
                flag: !0
            }],
            m = [{
                value: "world",
                label: "World",
                img: Object(r.h)("world-white")
            }, {
                value: "lck",
                label: "KR",
                img: Object(r.h)("LCK-white")
            }, {
                value: "lpl",
                label: "CN",
                img: Object(r.h)("LPL")
            }, {
                value: "lec",
                label: "EU",
                img: Object(r.h)("LEC-white")
            }, {
                value: "lcs",
                label: "NA",
                img: Object(r.h)("LCS-white")
            }, {
                value: "lms",
                label: "TW",
                img: Object(r.h)("LMS")
            }, {
                value: "cblol",
                label: "BR",
                img: Object(r.h)("CBLOL")
            }, {
                value: "lcl",
                label: "CIS",
                img: Object(r.h)("LCL")
            }, {
                value: "lla",
                label: "LAT",
                img: Object(r.h)("LLA")
            }, {
                value: "lst",
                label: "SEA",
                img: Object(r.h)("LST-white")
            }, {
                value: "opl",
                label: "OCE",
                img: Object(r.h)("OPL")
            }, {
                value: "tcl",
                label: "TR",
                img: Object(r.h)("TCL")
            }, {
                value: "vcs",
                label: "VN",
                img: Object(r.h)("VCS")
            }, {
                value: "ljl",
                label: "JP",
                img: Object(r.h)("LJL")
            }],
            d = [{
                value: "true",
                label: "true"
            }, {
                value: "false",
                label: "false"
            }],
            p = [{
                value: "true",
                label: "true"
            }, {
                value: "false",
                label: "false"
            }],
            f = [{
                value: "tier-list",
                label: "All Roles",
                img: Object(a.f)(a.a.ALL),
                path: "/lol/tier-list"
            }, {
                value: "top-lane-tier-list",
                label: "Top",
                img: Object(a.f)(a.a.TOP),
                imgActive: Object(a.f)(a.a.TOP, {
                    active: !0
                }),
                path: "/lol/top-lane-tier-list"
            }, {
                value: "jungle-tier-list",
                label: "Jungle",
                img: Object(a.f)(a.a.JUNGLE),
                imgActive: Object(a.f)(a.a.JUNGLE, {
                    active: !0
                }),
                path: "/lol/jungle-tier-list"
            }, {
                value: "mid-lane-tier-list",
                label: "Middle",
                img: Object(a.f)(a.a.MIDDLE),
                imgActive: Object(a.f)(a.a.MIDDLE, {
                    active: !0
                }),
                path: "/lol/mid-lane-tier-list"
            }, {
                value: "adc-tier-list",
                label: "Bot",
                img: Object(a.f)(a.a.BOTTOM),
                imgActive: Object(a.f)(a.a.BOTTOM, {
                    active: !0
                }),
                path: "/lol/adc-tier-list"
            }, {
                value: "support-tier-list",
                label: "Support",
                img: Object(a.f)(a.a.SUPPORT),
                imgActive: Object(a.f)(a.a.SUPPORT, {
                    active: !0
                }),
                path: "/lol/support-tier-list"
            }],
            g = [{
                value: "tier-list",
                label: "All Roles",
                img: Object(a.f)(a.a.ALL),
                path: "/overwolf/tier-list"
            }, {
                value: "top-lane-tier-list",
                label: "Top",
                img: Object(a.f)(a.a.TOP),
                imgActive: Object(a.f)(a.a.TOP, {
                    active: !0
                }),
                path: "/overwolf/top-lane-tier-list"
            }, {
                value: "jungle-tier-list",
                label: "Jungle",
                img: Object(a.f)(a.a.JUNGLE),
                imgActive: Object(a.f)(a.a.JUNGLE, {
                    active: !0
                }),
                path: "/overwolf/jungle-tier-list"
            }, {
                value: "mid-lane-tier-list",
                label: "Middle",
                img: Object(a.f)(a.a.MIDDLE),
                imgActive: Object(a.f)(a.a.MIDDLE, {
                    active: !0
                }),
                path: "/overwolf/mid-lane-tier-list"
            }, {
                value: "adc-tier-list",
                label: "Bot",
                img: Object(a.f)(a.a.BOTTOM),
                imgActive: Object(a.f)(a.a.BOTTOM, {
                    active: !0
                }),
                path: "/overwolf/adc-tier-list"
            }, {
                value: "support-tier-list",
                label: "Support",
                img: Object(a.f)(a.a.SUPPORT),
                imgActive: Object(a.f)(a.a.SUPPORT, {
                    active: !0
                }),
                path: "/overwolf/support-tier-list"
            }],
            h = {
                queueType: [{
                    value: "ranked_solo_5x5",
                    label: "Ranked Solo"
                }, {
                    value: "normal_aram",
                    label: "ARAM"
                }, {
                    value: "ranked_flex_sr",
                    label: "Ranked Flex"
                }, {
                    value: "normal_blind_5x5",
                    label: "Normal Blind"
                }, {
                    value: "normal_draft_5x5",
                    label: "Normal Draft"
                }],
                region: u,
                rank: l,
                allChampions: d,
                patch: {
                    options: "latest",
                    max: 5
                }
            },
            v = {
                queueType: h.queueType[0].value,
                region: h.region[0].value,
                rank: h.rank[0].value,
                patch: h.patch.options,
                allChampions: "false"
            },
            b = {
                queueType: [{
                    value: "ranked_solo_5x5",
                    label: "Ranked Solo"
                }, {
                    value: "ranked_flex_sr",
                    label: "Ranked Flex"
                }],
                duo: [{
                    value: "adc_support",
                    label: "Bot/Support"
                }, {
                    value: "middle_jungle",
                    label: "Middle/Jungle"
                }, {
                    value: "top_jungle",
                    label: "Top/Jungle"
                }],
                region: u,
                rank: l,
                patch: {
                    options: "latest",
                    max: 5
                }
            },
            y = {
                queueType: b.queueType[0].value,
                duo: b.duo[0].value,
                rank: b.rank[0].value,
                region: b.region[0].value,
                patch: b.patch.options
            },
            O = {
                queueType: c,
                role: i,
                region: u,
                rank: l,
                allChampions: d,
                patch: {
                    options: "latest",
                    max: 5
                }
            },
            E = {
                queueType: O.queueType[0].value,
                role: O.role[0].value,
                region: O.region[0].value,
                rank: O.rank[0].value,
                patch: O.patch.options,
                allChampions: "false"
            },
            w = {
                queueType: c,
                role: i,
                region: u,
                rank: l,
                allChampions: d,
                patch: {
                    options: "latest",
                    max: 5
                }
            },
            j = {
                queueType: w.queueType[0].value,
                role: w.role[0].value,
                region: w.region[0].value,
                rank: w.rank[0].value,
                patch: w.patch.options,
                allChampions: "false"
            },
            N = {
                queueType: c,
                role: o,
                region: u,
                rank: l,
                patch: {
                    options: "latest",
                    max: 5
                }
            },
            S = {
                queueType: c[0].value,
                region: u[0].value,
                rank: l[0].value,
                patch: N.patch.options,
                opp: "allChampions"
            },
            k = {
                queueType: c,
                role: o,
                region: u,
                rank: l,
                patch: {
                    options: "latest",
                    max: 5
                }
            },
            _ = {
                queueType: k.queueType[0].value,
                region: k.region[0].value,
                rank: k.rank[0].value,
                patch: k.patch.options
            },
            T = {
                queueType: c,
                role: o,
                region: u,
                rank: l,
                patch: {
                    options: "latest",
                    max: 5
                }
            },
            I = {
                queueType: T.queueType[0].value,
                region: T.region[0].value,
                rank: T.rank[0].value,
                patch: T.patch.options
            },
            P = {
                queueType: c,
                role: o,
                region: u,
                rank: l,
                patch: {
                    options: "latest",
                    max: 5
                }
            },
            A = {
                queueType: P.queueType[0].value,
                region: P.region[0].value,
                rank: P.rank[0].value,
                patch: P.patch.options
            },
            L = {
                queueType: [{
                    value: "ranked_solo_5x5",
                    label: "Ranked Solo"
                }, {
                    value: "ranked_flex_sr",
                    label: "Ranked Flex"
                }],
                role: o,
                region: u,
                rank: l,
                allChampions: d,
                patch: {
                    options: "latest",
                    max: 5
                }
            },
            C = {
                queueType: L.queueType[0].value,
                region: L.region[0].value,
                rank: L.rank[0].value,
                patch: L.patch.options,
                allChampions: "false"
            },
            R = {
                queueType: [{
                    value: "ranked_solo_5x5",
                    label: "Ranked Solo"
                }, {
                    value: "ranked_flex_sr",
                    label: "Ranked Flex"
                }],
                role: o,
                region: u,
                rank: l,
                patch: {
                    options: "latest",
                    max: 5
                }
            },
            x = {
                queueType: R.queueType[0].value,
                region: R.region[0].value,
                rank: R.rank[0].value,
                patch: R.patch.options
            },
            M = {
                queueType: [{
                    value: "ranked_solo_5x5",
                    label: "Ranked Solo"
                }, {
                    value: "ranked_flex_sr",
                    label: "Ranked Flex"
                }],
                role: o,
                region: u,
                rank: l,
                allChampions: d,
                patch: {
                    options: "latest",
                    max: 5
                }
            },
            D = {
                queueType: M.queueType[0].value,
                region: M.region[0].value,
                rank: M.rank[0].value,
                patch: M.patch.options,
                allChampions: "false"
            },
            G = [{
                value: "pro",
                label: "Pros",
                img: Object(r.k)("pro")
            }, {
                value: "otp",
                label: "One Tricks",
                img: Object(r.k)("one_trick")
            }],
            B = {
                role: i,
                region: u,
                playerType: G
            },
            q = {
                role: i[0].value,
                region: u[0].value,
                patch: "all",
                playerType: G[0].value,
                isVictoryOnly: "false"
            },
            U = {
                role: i,
                league: m
            },
            F = {
                role: i[0].value,
                league: m[0].value,
                league2: null
            }
    },
    92: function(e, t, n) {
        (function(t) {
            e.exports = {
                graphqlURI: "https://u.gg/api",
                recaptchaBypass: t.env.RECAPTCHA_BYPASS,
                recaptchaSiteKeyV2: "6Lezp6EUAAAAAPCsNdSd7Yxmq24hlsu1fqVt29ke",
                recaptchaSiteKeyV3: "6LcG55QUAAAAAKFtQFMv722bD4jCZETOTdsPXkH_",
                buggEmailCode: t.env.BUGG_EMAIL_CODE,
                stripeAPIKey: "pk_live_qNNLsiR9NqL6HOlB7XhxiW9f00JB8eO4Ni"
            }
        }).call(this, n(26))
    },
    93: function(e, t, n) {
        "use strict";
        n.r(t), n.d(t, "ReactComponent", (function() {
            return i
        }));
        var a, r = n(0);

        function o() {
            return (o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function i(e) {
            return r.createElement("svg", o({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 256 128"
            }, e), a || (a = r.createElement("g", {
                "data-name": "Layer 2"
            }, r.createElement("path", {
                fill: "#626696",
                d: "M0 0l128 128L256 0z",
                "data-name": "Layer 1"
            }))))
        }
        t.default = n.p + "static/svg/triangle-arrow-down.svg"
    },
    94: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return w
        }));
        var a = n(85),
            r = n.n(a),
            o = n(192),
            i = n.n(o),
            c = n(48),
            s = n.n(c),
            l = n(49),
            u = n.n(l),
            m = n(59),
            d = n.n(m),
            p = n(60),
            f = n.n(p),
            g = n(29),
            h = n.n(g),
            v = n(0),
            b = n.n(v),
            y = n(12),
            O = ["error", "hideErrorMessage", "onCreateRef", "children", "label", "rightLabel", "rightLabelLink"];

        function E(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = h()(e);
                if (t) {
                    var r = h()(this).constructor;
                    n = Reflect.construct(a, arguments, r)
                } else n = a.apply(this, arguments);
                return f()(this, n)
            }
        }
        var w = function(e) {
            d()(n, e);
            var t = E(n);

            function n() {
                return s()(this, n), t.apply(this, arguments)
            }
            return u()(n, [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.error,
                        n = e.hideErrorMessage,
                        a = e.onCreateRef,
                        o = e.children,
                        c = e.label,
                        s = e.rightLabel,
                        l = e.rightLabelLink,
                        u = i()(e, O),
                        m = function() {
                            return s ? l ? b.a.createElement(y.b, {
                                to: "/".concat(l)
                            }, b.a.createElement("div", {
                                className: "right-label"
                            }, s)) : b.a.createElement("div", {
                                className: "right-label"
                            }, s) : null
                        };
                    return b.a.createElement("div", {
                        className: "custom-input-container"
                    }, b.a.createElement("div", {
                        className: "input-label-container"
                    }, c && b.a.createElement("div", {
                        className: "input-label"
                    }, c), b.a.createElement(m, null)), t && b.a.createElement("div", {
                        className: "input-error-msg ".concat(n ? "input-error-msg_hide" : "")
                    }, t), b.a.createElement("div", {
                        style: {
                            position: "relative"
                        }
                    }, b.a.createElement("input", r()({
                        ref: a
                    }, u)), o))
                }
            }]), n
        }(v.Component)
    }
});