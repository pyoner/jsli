/*!
 * pt addon for LanguageIdentifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 13.01.11, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */
(function() {
var ngrams = {
"os_":106562,
"_de":94943,
"de_":78029,
"ão_":73364,
"_co":70082,
"as_":67724,
"ent":63763,
"_qu":59914,
"que":56968,
"_a_":55050,
"do_":50486,
"_se":49212,
"ue_":48768,
"nte":47706,
"te_":43622,
"es_":41035,
"men":38593,
"da_":37937,
"to_":37913,
"_pr":37585,
"_re":37101,
"est":35702,
"com":34832,
"con":33816,
"em_":33441,
"_do":32672,
"_es":32519,
"_e_":32507,
"_po":32472,
"ção":32297,
"_pa":31603,
"_o_":31584,
"_da":31273,
"ia_":28540,
"ar_":28269,
"res":28202,
"ra_":27948,
"sta":25994,
"dos":25956,
"par":25402,
"_um":25401,
"_no":25025,
"ado":24915,
"nto":23364,
"or_":22082,
"er_":21774,
"ma_":21744,
"açã":21040,
"ame":20887,
"se_":20757,
"pre":20137,
"_em":19954,
"_in":19858,
"pro":19578,
"ida":19522,
"is_":18817,
"ara":18446,
"ta_":18437,
"ica":18404,
"_pe":18337,
"sen":18221,
"_di":17530,
"por":17260,
"_ma":17070,
"mos":16899,
"ter":16877,
"_as":16774,
"_me":16634,
"dad":16600,
"cia":16511,
"uma":16455,
"ess":16398,
"tra":16270,
"ade":16261,
"des":15992,
"ria":15577,
"al_":15111,
"no_":15108,
"_te":14909,
"ões":14808,
"um_":14573,
"nta":14430,
"das":14350,
"são":14212,
"_os":14194,
"io_":14192,
"ais":14167,
"ant":14084,
"iss":13625,
"não":13461,
"rop":13397,
"_nã":13395,
"_é_":13171,
"ont":13118,
"_na":13074,
"nos":13062,
"tiv":12897,
"ito":12896,
"ada":12829,
"tad":12776,
"ons":12392,
"ela":12316,
"nci":12089,
"ste":11923,
"rio":11757,
"enh":11729,
"so_":11496,
"tar":11461,
"tos":11247,
"uro":11192,
"hor":11032,
"pos":11024,
"na_":11017,
"_eu":10972,
"mo_":10866,
"nho":10866,
"sso":10690,
"omi":10640,
"çõe":10399,
"ist":10262,
"mis":10234,
"era":10204,
"ro_":10200,
"am_":10193,
"eur":10130,
"rec":10096,
"om_":10046,
"_so":9861,
"_ao":9830,
"ser":9818,
"_tr":9786,
"ca_":9780,
"tam":9767,
"per":9754,
"_ap":9673,
"_al":9658,
"ect":9564,
"ver":9488,
"for":9481,
"ntr":9414,
"_ac":9353,
"_ca":9305,
"_ex":9293,
"tem":9248,
"eit":9235,
"_en":9219,
"qua":9034,
"ime":8935,
"esp":8865,
"ran":8858,
"sid":8855,
"_fa":8763,
"_fo":8732,
"mas":8639,
"ora":8629,
"_ne":8572,
"tic":8563,
"ope":8466,
"ide":8439,
"tes":8388,
"_su":8376,
"ssã":8355,
"re_":8323,
"ese":8299,
"oss":8245,
"ido":8211,
"uni":8210,
"int":8208,
"_à_":8189,
"iva":8175,
"ssa":8166,
"ári":8155,
"ndo":8121,
"_ta":8067,
"emo":8061,
"_to":7968,
"ece":7913,
"sse":7912,
"ura":7784,
"rel":7763,
"ass":7728,
"mai":7648,
"ram":7548,
"ita":7497,
"ost":7487,
"den":7473,
"omo":7470,
"ou_":7463,
"sa_":7368,
"der":7355,
"ali":7352,
"eri":7351,
"lo_":7317,
"ten":7311,
"spe":7290,
"ir_":7147,
"egu":7129,
"ros":7115,
"pel":7067,
"eu_":7040,
"gra":6993,
"lat":6985,
"ere":6934,
"ao_":6878,
"fic":6878,
"orm":6832,
"eir":6796,
"cio":6770,
"ort":6754,
"str":6660,
"tan":6635,
"ati":6620,
"eve":6602,
"rma":6598,
"sti":6573,
"_mu":6512,
"amb":6510,
"ém_":6467,
"ina":6454,
"pri":6443,
"nde":6440,
"_ou":6344,
"açõ":6287,
"_si":6277,
"eci":6249,
"reg":6226,
"_ve":6210,
"dir":6158,
"cto":6140,
"ênc":6128,
"obr":6108,
"art":6093,
"pei":6087,
"lho":6046,
"end":6024,
"raç":5997,
"and":5978,
"ico":5954,
"ona":5904,
"vel":5857,
"co_":5802,
"el_":5771,
"tas":5765,
"va_":5763,
"iza":5727,
"seg":5718,
"lam":5713,
"ion":5694,
"emp":5692,
"_im":5671,
"ual":5667,
"ire":5664,
"_an":5649,
"tur":5635,
"dev":5609,
"ho_":5572,
"imp":5569,
"ode":5568,
"tro":5561,
"lar":5555,
"esi":5545,
"_vi":5512,
"bre":5444,
"cor":5371,
"eia":5360,
"amo":5358,
"dep":5357,
"_fi":5339,
"ili":5321,
"_mo":5306,
"ces":5289,
"ios":5276,
"cas":5275,
"tor":5273,
"ias":5222,
"ião":5200,
"nti":5178,
"cti":5166,
"pen":5166,
"tod":5161,
"act":5155,
"uta":5153,
"pod":5129,
"_un":5090,
"lid":5078,
"rta":5033,
"fer":5032,
"ele":5025,
"nda":5019,
"sob":5018,
"nse":5009,
"ici":4964,
"rem":4950,
"nst":4946,
"ore":4919,
"ome":4891,
"ind":4883,
"itu":4841,
"min":4839,
"mpo":4831,
"rei":4827,
"mpr":4795,
"efe":4776,
"ref":4772,
"pol":4761,
"ses":4755,
"íti":4736,
"uit":4734,
"car":4717,
"odo":4717,
"bém":4713,
"mbé":4713,
"dem":4679,
"rat":4667,
"und":4666,
"ema":4658,
"ssi":4650,
"rad":4634,
"tão":4628,
"cer":4612,
"man":4585,
"ivo":4584,
"dis":4581,
"ens":4561,
"sto":4547,
"ord":4540,
"lic":4534,
"rá_":4530,
"eco":4528,
"qui":4525,
"nha":4521,
"_gr":4500,
"nal":4500,
"spo":4493,
"niã":4449,
"vo_":4449,
"ira":4439,
"ano":4426,
"emb":4419,
"are":4417,
"cad":4410,
"edi":4377,
"elh":4361,
"elo":4357,
"mui":4351,
"_li":4340,
"tal":4329,
"pon":4322,
"ari":4290,
"nas":4289,
"inc":4271,
"sem":4269,
"_cr":4229,
"ori":4229,
"ial":4227,
"_or":4208,
"opo":4188,
"vid":4158,
"la_":4129,
"olí":4126,
"ras":4118,
"aci":4110,
"_at":4109,
"lme":4106,
"go_":4097,
"put":4093,
"_ob":4079,
"me_":4076,
"col":4070,
"epu":4048,
"liz":4048,
"óri":4048,
"lít":4036,
"rla":4024,
"_fu":4005,
"ate":3992,
"ern":3983,
"nes":3975,
"rar":3975,
"erc":3961,
"uer":3926,
"omp":3919,
"erm":3911,
"tór":3905,
"ula":3903,
"_mi":3896,
"cid":3889,
"_sa":3857,
"nça":3850,
"egi":3847,
"arl":3827,
"ata":3817,
"rte":3813,
"_go":3808,
"íve":3780,
"apr":3769,
"ça_":3758,
"nic":3743,
"ini":3739,
"_is":3733,
"iro":3702,
"alm":3672,
"anç":3671,
"_ci":3662,
"_le":3650,
"mun":3641,
"oci":3640,
"tri":3619,
"onc":3592,
"stã":3582,
"_el":3580,
"tua":3575,
"sua":3550,
"ifi":3546,
"ien":3536,
"enc":3532,
"omu":3514,
"rti":3507,
"sas":3494,
"_ag":3493,
"vol":3493,
"taç":3492,
"sár":3491,
"mer":3480,
"ua_":3466,
"pec":3465,
"ssá":3451,
"ndi":3437,
"fun":3410,
"alt":3409,
"fin":3402,
"tid":3383,
"cul":3370,
"ues":3348,
"sos":3346,
"bil":3339,
"aís":3330,
"cri":3328,
"gar":3326,
"paí":3314,
"poi":3308,
"dec":3290,
"mes":3286,
"uan":3283,
"gos":3282,
"gun":3280,
"ató":3270,
"bal":3265,
"leg":3264,
"tre":3263,
"mem":3262,
"içã":3251,
"_ad":3249,
"ins":3248,
"equ":3232,
"roc":3227,
"dam":3223,
"zer":3223,
"erá":3216,
"ret":3210,
"ren":3200,
"rda":3199,
"esc":3190,
"aba":3180,
"unt":3179,
"out":3168,
"esa":3167,
"_vo":3165,
"mbr":3156,
"sol":3149,
"laç":3132,
"tit":3128,
"erv":3120,
"utr":3120,
"ega":3113,
"_ju":3110,
"_am":3103,
"did":3098,
"mpl":3090,
"mei":3086,
"aqu":3082,
"aco":3073,
"nce":3072,
"bro":3067,
"_ba":3065,
"lem":3064,
"ral":3061,
"ven":3058,
"nco":3055,
"nsi":3054,
"ena":3053,
"rim":3049,
"dor":3045,
"sej":3045,
"cos":3034,
"peu":3033,
"eja":3032,
"uçã":3029,
"ond":3021,
"cei":3020,
"seu":3017,
"ha_":3007,
"aos":3002,
"smo":2996,
"ve_":2988,
"cis":2986,
"rea":2986,
"nec":2951,
"po_":2939,
"vis":2935,
"sit":2932,
"uto":2924,
"ult":2922,
"env":2919,
"ero":2897,
"_sã":2889,
"rmo":2885,
"tin":2885,
"enç":2883,
"mit":2881,
"ior":2880,
"olv":2880,
"dia":2860,
"soc":2859,
"eme":2857,
"_au":2843,
"sel":2825,
"vam":2817,
"ala":2814,
"até":2801,
"ois":2775,
"nov":2773,
"pes":2768,
"ber":2765,
"jec":2763,
"zaç":2763,
"ova":2752,
"alh":2748,
"vos":2731,
"evi":2730,
"inh":2730,
"ust":2722,
"_ho":2709,
"_ab":2708,
"fac":2704,
"rab":2700,
"cre":2697,
"err":2687,
"ert":2678,
"ama":2673,
"áve":2664,
"mar":2662,
"nvo":2658,
"anc":2657,
"_cu":2651,
"im_":2647,
"exi":2643,
"ete":2641,
"rna":2634,
"faz":2626,
"olu":2612,
"alg":2608,
"ape":2608,
"ota":2601,
"orç":2590,
"rev":2582,
"sim":2575,
"mbi":2569,
"_ce":2568,
"éri":2561,
"cla":2555,
"tir":2554,
"abe":2541,
"caç":2536,
"ani":2529,
"orr":2514,
"já_":2512,
"_já":2509,
"nad":2508,
"tim":2479,
"_be":2469,
"oce":2462,
"esm":2455,
"rov":2454,
"rig":2451,
"ove":2449,
"rod":2446,
"imo":2443,
"dar":2441,
"aze":2426,
"_lo":2419,
"nid":2419,
"_fe":2414,
"osi":2409,
"eno":2398,
"ima":2394,
"dic":2384,
"_va":2375,
"rmi":2375,
"ans":2370,
"lte":2364,
"erg":2362,
"_ch":2360,
"tud":2358,
"erd":2356,
"cen":2352,
"vas":2337,
"íse":2336,
"iti":2334,
"_ec":2327,
"lgu":2325,
"oi_":2325,
"stá":2324,
"foi":2316,
"_aq":2315,
"ja_":2315,
"vez":2314,
"pa_":2312,
"imi":2311,
"ez_":2302,
"squ":2299,
"_lu":2289,
"med":2288,
"igo":2286,
"ace":2285,
"gur":2283,
"_ge":2281,
"rre":2275,
"rep":2271,
"nsa":2265,
"ric":2264,
"ce_":2259,
"sis":2258,
"ns_":2256,
"ui_":2251,
"_op":2243,
"gui":2243,
"nom":2240,
"_ef":2238,
"pli":2232,
"às_":2226,
"ble":2224,
"eis":2223,
"rca":2222,
"tec":2222,
"içõ":2220,
"oca":2218,
"_às":2216,
"nve":2192,
"olo":2191,
"_ra":2188,
"_nu":2186,
"tá_":2186,
"_la":2180,
"dif":2178,
"ext":2171,
"iar":2165,
"lhe":2163,
"inf":2149,
"rog":2141,
"lvi":2134,
"gua":2133,
"us_":2133,
"rid":2129,
"abi":2127,
"opa":2126,
"nçã":2124,
"ego":2119,
"_há":2116,
"iam":2115,
"tru":2114,
"ço_":2112,
"iga":2100,
"odu":2097,
"rin":2090,
"ume":2090,
"_fr":2089,
"oda":2088,
"oje":2088,
"há_":2087,
"vem":2087,
"ogr":2084,
"nac":2076,
"los":2072,
"bat":2066,
"diz":2061,
"ovo":2059,
"lta":2052,
"isa":2050,
"rno":2050,
"pas":2046,
"bor":2045,
"isc":2033,
"nan":2031,
"gor":2027,
"onf":2026,
"cam":2020,
"ato":2019,
"fei":2017,
"ive":2014,
"ocu":2014,
"lha":2007,
"lim":2003,
"vei":2003,
"exe":1998,
"uir":1998,
"ain":1996,
"apo":1996,
"bri":1996,
"mpe":1995,
"efi":1994,
"uas":1994,
"rib":1990,
"agr":1988,
"ola":1984,
"sab":1984,
"bem":1983,
"cim":1981,
"tár":1976,
"eus":1975,
"cçã":1970,
"ibu":1967,
"clu":1963,
"dei":1960,
"tui":1946,
"aso":1944,
"rit":1941,
"bas":1938,
"rên":1937,
"quo":1932,
"rdo":1932,
"sar":1932,
"exp":1928,
"can":1927,
"cie":1926,
"pró":1924,
"_ai":1922,
"ple":1910,
"eal":1898,
"age":1891,
"itá":1883,
"siç":1871,
"udo":1868,
"_cl":1867,
"mat":1862,
"bje":1855,
"iad":1847,
"obj":1841,
"rça":1840,
"gen":1838,
"lan":1838,
"uo_":1835,
"vim":1834,
"nor":1832,
"_ti":1828,
"ana":1825,
"abo":1823,
"ole":1817,
"utu":1810,
"rga":1804,
"sam":1804,
"ava":1802,
"isp":1802,
"upo":1801,
"atr":1797,
"ced":1789,
"num":1785,
"rde":1782,
"ize":1778,
"ris":1777,
"mod":1768,
"nai":1759,
"mic":1757,
"gem":1744,
"def":1741,
"lis":1740,
"iaç":1739,
"ssu":1732,
"rão":1726,
"via":1723,
"cur":1718,
"rup":1718,
"til":1712,
"rob":1707,
"lei":1706,
"tér":1702,
"luç":1698,
"ers":1696,
"eio":1694,
"raz":1693,
"xis":1693,
"ham":1692,
"uti":1687,
"ase":1678,
"bli":1677,
"rav":1669,
"tai":1667,
"deb":1663,
"obl":1657,
"red":1656,
"_ha":1651,
"uaç":1650,
"lec":1647,
"_ar":1646,
"ite":1644,
"lev":1641,
"rqu":1640,
"ivi":1639,
"nhe":1639,
"_ir":1632,
"onh":1630,
"uiç":1627,
"gru":1625,
"rom":1624,
"uga":1622,
"eba":1621,
"ctu":1619,
"eva":1619,
"gia":1615,
"ote":1610,
"sív":1603,
"atu":1598,
"ibi":1597,
"vot":1597,
"arm":1594,
"_af":1591,
"ave":1590,
"maç":1590,
"ncl":1584,
"nar":1581,
"aio":1580,
"mel":1578,
"_tu":1574,
"hum":1572,
"sub":1569,
"ger":1566,
"val":1561,
"íci":1554,
"_ev":1553,
"ves":1552,
"egr":1551,
"dão":1545,
"_du":1541,
"anh":1538,
"nis":1529,
"ecu":1525,
"uin":1524,
"las":1522,
"ede":1521,
"onv":1517,
"icu":1513,
"uda":1513,
"ós_":1513,
"ife":1511,
"ian":1510,
"nív":1509,
"arg":1507,
"eta":1505,
"sõe":1502,
"efo":1496,
"plo":1480,
"nóm":1478,
"uns":1478,
"tom":1475,
"les":1474,
"soa":1474,
"çam":1474,
"rvi":1473,
"vad":1473,
"rot":1470,
"eda":1468,
"lug":1459,
"ene":1456,
"zad":1450,
"gum":1448,
"mil":1444,
"tou":1443,
"eli":1438,
"aut":1432,
"jud":1430,
"ei_":1428,
"sco":1426,
"_ga":1423,
"mul":1423,
"gov":1419,
"duz":1417,
"rie":1414,
"uai":1414,
"uad":1413,
"rce":1412,
"eti":1411,
"ga_":1408,
"orn":1408,
"_pl":1407,
"ómi":1407,
"nit":1406,
"nfo":1402,
"har":1399,
"afi":1397,
"nso":1396,
"_ní":1393,
"sum":1393,
"eso":1392,
"fal":1392,
"rgu":1392,
"ssí":1392,
"apl":1390,
"onó":1390,
"_bo":1388,
"unc":1388,
"lad":1387,
"rme":1387,
"gul":1386,
"áti":1386,
"hec":1385,
"lti":1385,
"ilh":1379,
"gis":1377,
"cta":1374,
"rol":1370,
"_só":1364,
"tab":1363,
"acç":1357,
"rtu":1356,
"mon":1348,
"sec":1347,
"_hu":1345,
"ino":1343,
"cip":1340,
"nam":1340,
"tig":1335,
"sul":1332,
"lia":1331,
"ism":1326,
"loc":1326,
"ços":1324,
"inu":1323,
"lib":1322,
"iai":1321,
"ânc":1317,
"oso":1315,
"rto":1315,
"fra":1311,
"oma":1311,
"isã":1302,
"nsu":1301,
"ãos":1298,
"irm":1290,
"_lh":1284,
"meu":1281,
"il_":1277,
"ong":1274,
"só_":1274,
"cit":1273,
"igu":1272,
"mad":1268,
"té_":1267,
"che":1263,
"ulo":1258,
"nua":1257,
"ner":1254,
"ago":1251,
"gas":1249,
"sad":1249,
"nat":1246,
"gad":1245,
"mid":1244,
"lor":1243,
"rac":1243,
"pio":1242,
"fec":1240,
"ast":1236,
"bra":1236,
"púb":1236,
"úbl":1235,
"nsp":1231,
"paç":1231,
"nif":1230,
"róp":1230,
"dim":1229,
"ltu":1229,
"fir":1226,
"ópr":1224,
"bit":1223,
"gue":1223,
"ign":1222,
"pla":1222,
"ipa":1219,
"adã":1217,
"ane":1216,
"ecç":1211,
"tân":1211,
"adi":1207,
"ibe":1207,
"je_":1207,
"bie":1200,
"za_":1198,
"az_":1195,
"apa":1194,
"len":1194
};
LanguageIdentifier.addProfile('pt', ngrams, 5993011);
}());
