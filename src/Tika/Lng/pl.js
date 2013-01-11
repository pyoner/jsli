/*!
 * pl addon for LanguageIdentifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 13.01.11, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */
(function() {
var ngrams = {
"ie_":11047,
"nie":10353,
"_pr":9159,
"_po":8142,
"ch_":7969,
"_na":6678,
"ani":6213,
"_w_":5759,
"ia_":5718,
"ych":5534,
"prz":5323,
"rze":5307,
"owa":5228,
"nia":5174,
"_za":5071,
"na_":5016,
"_do":4773,
"_i_":4470,
"wan":4352,
"_je":4264,
"ej_":4177,
"dzi":4116,
"_wy":4045,
"eni":4018,
"ów_":3946,
"go_":3882,
"sta":3785,
"ego":3747,
"ne_":3539,
"rzy":3417,
"pro":3256,
"_ni":3219,
"est":3193,
"wie":3160,
"acj":3088,
"_ko":3060,
"_z_":2938,
"ści":2922,
"nyc":2846,
"ji_":2811,
"em_":2639,
"cze":2614,
"czn":2608,
"_in":2538,
"_ro":2529,
"_st":2504,
"cji":2486,
"owe":2455,
"st_":2447,
"yst":2416,
"ym_":2412,
"ny_":2389,
"do_":2371,
"_si":2319,
"_mo":2304,
"jes":2270,
"ci_":2190,
"owi":2186,
"row":2146,
"owy":2109,
"_te":2077,
"kie":2046,
"ost":2030,
"wa_":1992,
"się":1990,
"zie":1988,
"ki_":1968,
"ośc":1966,
"czy":1938,
"zy_":1938,
"_wi":1924,
"zen":1921,
"_sp":1886,
"ien":1866,
"ię_":1859,
"kon":1857,
"_cz":1850,
"ane":1840,
"cie":1835,
"pra":1834,
"any":1832,
"je_":1828,
"_od":1803,
"jąc":1801,
"str":1790,
"ier":1787,
"_mi":1786,
"nik":1786,
"pow":1759,
"mie":1741,
"_ma":1711,
"ku_":1699,
"ach":1667,
"ać_":1666,
"nic":1649,
"ka_":1639,
"pod":1626,
"mi_":1617,
"_pa":1614,
"dni":1614,
"war":1600,
"rac":1582,
"ste":1545,
"tow":1535,
"kow":1533,
"icz":1523,
"ywa":1516,
"zys":1509,
"_ja":1507,
"iej":1486,
"ter":1483,
"ent":1478,
"_to":1472,
"ale":1455,
"tyc":1431,
"gra":1424,
"trz":1408,
"ami":1401,
"zna":1393,
"_o_":1389,
"to_":1388,
"_a_":1384,
"_ob":1382,
"roz":1366,
"tem":1362,
"now":1344,
"szy":1336,
"edn":1332,
"moż":1322,
"ist":1319,
"nej":1315,
"cza":1314,
"ycz":1297,
"_ty":1296,
"za_":1291,
"ram":1276,
"sze":1265,
"ski":1262,
"ska":1259,
"arz":1256,
"_op":1251,
"spo":1250,
"ora":1248,
"iał":1237,
"ra_":1237,
"la_":1231,
"neg":1230,
"_ws":1229,
"wyc":1228,
"ze_":1228,
"_re":1223,
"noś":1222,
"cja":1218,
"zan":1218,
"wni":1216,
"któ":1214,
"_ta":1209,
"ali":1209,
"dow":1200,
"rog":1198,
"zac":1194,
"że_":1194,
"dan":1193,
"aln":1189,
"orz":1183,
"era":1182,
"for":1175,
"ogr":1166,
"_wa":1165,
"nym":1163,
"jak":1159,
"ają":1156,
"nal":1154,
"awi":1147,
"ika":1146,
"zyc":1140,
"wer":1128,
"orm":1126,
"_sk":1125,
"ja_":1123,
"_sy":1119,
"tan":1116,
"_kt":1114,
"_us":1114,
"ść_":1114,
"sto":1112,
"stw":1107,
"zia":1106,
"pie":1105,
"ich":1103,
"tór":1096,
"raz":1094,
"iem":1092,
"ony":1091,
"ez_":1087,
"ce_":1085,
"zas":1073,
"wia":1071,
"iu_":1057,
"tra":1056,
"_dz":1053,
"ied":1050,
"lik":1050,
"rod":1048,
"li_":1047,
"raw":1044,
"ący":1043,
"_se":1042,
"twa":1042,
"od_":1039,
"ty_":1037,
"tor":1036,
"ran":1034,
"wy_":1033,
"_tr":1032,
"zne":1029,
"_or":1028,
"ast":1024,
"zez":1022,
"iec":1021,
"kom":1021,
"cho":1017,
"iel":1016,
"akt":1014,
"_pl":1013,
"poz":1010,
"jed":1008,
"ał_":1005,
"cy_":991,
"_da":989,
"mu_":987,
"we_":985,
"ków":983,
"ak_":982,
"by_":979,
"_ba":971,
"ją_":967,
"ry_":963,
"az_":961,
"stę":961,
"le_":960,
"my_":959,
"ada":954,
"rów":953,
"zes":953,
"ona":952,
"tu_":952,
"yjn":951,
"_sz":947,
"ecz":946,
"taw":945,
"ość":944,
"usz":944,
"dy_":937,
"ędz":937,
"sty":933,
"ko_":932,
"rma":932,
"art":931,
"ek_":929,
"_dl":927,
"ta_":926,
"_ka":923,
"ują":922,
"wsz":916,
"ekt":914,
"zcz":912,
"szc":910,
"_lu":903,
"tęp":903,
"sys":902,
"sie":899,
"two":897,
"liz":896,
"niu":894,
"cyj":889,
"ion":887,
"tni":884,
"sow":881,
"odz":880,
"_by":879,
"one":875,
"er_":874,
"ini":874,
"uje":872,
"bra":865,
"kac":865,
"_no":864,
"wym":864,
"acz":857,
"nac":857,
"por":855,
"yci":848,
"pol":840,
"_ok":839,
"dla":837,
"zon":837,
"aty":834,
"ące":830,
"ust":828,
"ana":818,
"pli":818,
"_co":813,
"sza":813,
"erw":811,
"uży":809,
"tak":806,
"men":803,
"ucz":801,
"acy":800,
"bie":800,
"erz":800,
"lic":800,
"_ak":798,
"ni_":796,
"zed":796,
"_fu":794,
"pos":794,
"mia":791,
"wią":790,
"tał":788,
"yć_":788,
"_li":782,
"lub":781,
"leż":779,
"mat":777,
"wyk":774,
"tal":761,
"fun":757,
"ocz":752,
"eń_":749,
"inf":747,
"zap":740,
"_pi":737,
"on_":736,
"adz":733,
"nio":732,
"min":731,
"cia":727,
"ozw":725,
"tów":725,
"wej":724,
"_ra":722,
"ero":721,
"oni":721,
"tro":721,
"dno":720,
"ną_":719,
"_ch":718,
"ub_":718,
"unk":718,
"oda":716,
"opr":712,
"ład":709,
"mow":705,
"ży_":703,
"isk":702,
"zwi":702,
"oso":700,
"ies":699,
"zaw":699,
"own":698,
"ktu":697,
"omi":696,
"_an":694,
"zny":694,
"_kr":692,
"kcj":692,
"mac":691,
"iza":688,
"wać":688,
"ech":686,
"int":686,
"cen":685,
"_zn":684,
"ała":684,
"ła_":682,
"edz":681,
"_uż":680,
"iąz":679,
"nte":679,
"świ":677,
"_os":676,
"_kl":675,
"arc":673,
"lne":671,
"pis":671,
"ję_":667,
"ele":665,
"ymi":664,
"tko":662,
"awa":661,
"oże":655,
"tyw":655,
"bez":652,
"zni":650,
"_be":649,
"kre":649,
"teg":646,
"ako":644,
"tar":644,
"_uc":643,
"esz":643,
"ić_":643,
"ano":637,
"_sa":636,
"aki":636,
"kła":636,
"rzą":636,
"_bi":635,
"nas":633,
"ian":632,
"ser":632,
"dos":631,
"uch":628,
"odu":627,
"odn":626,
"_fi":625,
"omo":624,
"ącz":622,
"res":621,
"ówn":620,
"eci":619,
"oku":616,
"ięc":615,
"weg":615,
"stn":613,
"łąc":613,
"wię":612,
"nar":610,
"pom":609,
"_dr":606,
"liw":606,
"zec":604,
"zeg":602,
"_że":596,
"wor":596,
"ieg":594,
"naj":592,
"kty":591,
"yko":591,
"eży":590,
"ejs":588,
"dza":587,
"_ab":586,
"amo":586,
"ząd":586,
"tek":585,
"_go":584,
"ros":584,
"ato":583,
"stk":582,
"tki":582,
"ows":581,
"osz":580,
"słu":580,
"nta":579,
"_me":578,
"aby":577,
"ca_":577,
"owo":576,
"_są":574,
"wo_":574,
"ńst":569,
"kor":568,
"_we":565,
"_ró":564,
"_ce":563,
"ma_":563,
"tym":563,
"zos":563,
"roc":562,
"_al":561,
"nfo":561,
"_zo":560,
"cje":558,
"ers":557,
"lny":555,
"no_":555,
"bli":554,
"ort":554,
"ole":553,
"_ze":551,
"rto":551,
"zym":550,
"_wł":549,
"inn":549,
"są_":548,
"_zw":547,
"dze":547,
"oce":547,
"cyc":546,
"ły_":545,
"jny":544,
"ate":543,
"zeń":542,
"dar":541,
"ron":540,
"po_":539,
"czo":538,
"und":537,
"iad":536,
"_dy":534,
"_zm":534,
"omp":534,
"rzę":534,
"emu":533,
"ont":533,
"_r_":530,
"eśl":530,
"chn":526,
"am_":525,
"kto":525,
"spr":524,
"_de":522,
"tru":522,
"kan":521,
"rak":520,
"_gr":519,
"rok":517,
"_fo":516,
"wys":516,
"moc":514,
"rz_":513,
"wsk":512,
"iow":511,
"ono":507,
"ard":506,
"re_":504,
"ala":503,
"wyb":503,
"lac":502,
"_zb":500,
"asz":500,
"oko":500,
"zęd":499,
"ii_":498,
"met":498,
"toś":498,
"api":496,
"sz_":496,
"zar":496,
"wad":494,
"mis":493,
"zak":493,
"ańs":491,
"nst":489,
"ikó":488,
"tac":488,
"żli":488,
"tur":487,
"cję":486,
"nan":486,
"spó":486,
"dus":484,
"iet":484,
"iek":483,
"szu":482,
"ożl":481,
"bud":480,
"odo":480,
"ual":480,
"om_":479,
"óry":479,
"ndu":478,
"zmi":478,
"sam":474,
"ara":473,
"as_":471,
"or_":471,
"par":471,
"ło_":471,
"będ":469,
"hod":469,
"ik_":469,
"pon":469,
"en_":467,
"ins":467,
"ado":465,
"te_":465,
"ysk":464,
"_ki":463,
"ryw":463,
"wis":463,
"ąc_":463,
"_zd":462,
"at_":462,
"im_":462,
"lem":462,
"odp":462,
"_bu":461,
"edy":461,
"ług":460,
"cis":458,
"bio":457,
"obi":457,
"_pe":455,
"ięk":455,
"pla":455,
"ruc":455,
"dro":454,
"_ul":453,
"god":453,
"mni":453,
"sob":452,
"tos":451,
"łow":451,
"czą":449,
"ań_":448,
"kic":448,
"kol":448,
"yma":448,
"_śr":447,
"tec":447,
"wła":447,
"osi":446,
"óre":446,
"dom":445,
"ąza":444,
"ans":443,
"ata":443,
"czę":443,
"tua":443,
"and":441,
"kli":441,
"zyn":441,
"być":440,
"yta":440,
"ępn":440,
"ior":438,
"esi":437,
"pły":437,
"_wp":435,
"gan":435,
"_um":434,
"nos":434,
"wal":434,
"lko":433,
"zu_":433,
"enc":431,
"obr":431,
"_ją":429,
"oje":429,
"oli":429,
"tyk":428,
"tyl":426,
"an_":425,
"koś":425,
"dys":424,
"ież":424,
"żyt":424,
"ewn":423,
"ęci":423,
"mod":421,
"red":421,
"zer":421,
"jne":419,
"ząc":419,
"aga":418,
"wsp":418,
"dat":417,
"rdz":417,
"okr":414,
"łów":414,
"pot":413,
"da_":412,
"eks":412,
"ezp":412,
"uni":412,
"nis":410,
"eli":409,
"_ry":408,
"eto":408,
"low":408,
"mów":408,
"_ap":405,
"ars":405,
"pop":405,
"zow":405,
"ern":403,
"lec":402,
"ces":401,
"co_":400,
"_św":399,
"dok":399,
"_ur":398,
"su_":398,
"rob":395,
"wod":395,
"zej":395,
"pół":394,
"ura":394,
"wid":394,
"zyk":394,
"_bę":393,
"nny":393,
"nt_":393,
"sku":393,
"oty":392,
"ądz":390,
"ały":389,
"log":389,
"ols":389,
"sko":389,
"śni":389,
"cha":388,
"hni":388,
"_wo":387,
"_au":386,
"lu_":385,
"ntr":385,
"lsk":384,
"mon":383,
"win":383,
"poc":382,
"zwa":382,
"_gł":381,
"lon":381,
"opi":381,
"zal":380,
"dzo":379,
"ten":379,
"pad":378,
"ogi":377,
"pań":377,
"akc":376,
"_tw":375,
"ict":374,
"lan":374,
"ctw":373,
"lni":373,
"per":373,
"_pł":372,
"otr":372,
"yni":372,
"śli":371,
"śro":371,
"_ci":370,
"_gd":370,
"rad":370,
"zew":370,
"był":369,
"ute":369,
"_e_":368,
"lat":368,
"net":367,
"du_":366,
"ed_":366,
"gi_":366,
"ałe":365,
"es_":365,
"ina":362,
"kat":362,
"ytk":362,
"zbi":362,
"rat":361,
"szt":360,
"cel":358,
"cią":357,
"dst":357,
"ksz":357,
"róż":357,
"óln":357,
"et_":356,
"żna":356,
"_s_":355,
"aci":355,
"zaj":355,
"_ar":354,
"in_":354,
"umi":353,
"_wz":352,
"oma":351,
"ożn":351,
"bar":350,
"zek":349,
"zi_":349,
"duk":348,
"eko":347,
"obo":347,
"rus":347,
"ga_":346,
"ybr":345,
"ywn":344,
"ory":343,
"try":343,
"_mu":342,
"_pu":342,
"eż_":342,
"ią_":342,
"kra":342,
"ad_":341,
"ało":341,
"ncj":340,
"_oc":339,
"kar":339,
"nad":339,
"mar":338,
"nwe":338,
"żen":337,
"_ud":336,
"óżn":336,
"_ca":335,
"lno":335,
"rea":335,
"ope":334,
"adk":333,
"ame":333,
"dpo":333,
"elo":333,
"onf":333,
"och":332,
"wno":332,
"ema":330,
"woś":330,
"naz":329,
"nu_":329,
"ods":329,
"zad":329,
"łem":329,
"_rz":328,
"wał":327,
"olo":326,
"_is":325,
"ełn":325,
"kry":325,
"odk":325,
"peł":325,
"szk":325,
"ąć_":325,
"_m_":324,
"alo":323,
"ru_":323,
"ul_":323,
"dku":322,
"rsz":322,
"rci":321,
"cow":320,
"der":320,
"nat":320,
"ysz":320,
"poł":319,
"_sł":318,
"rwe":318,
"wne":317,
"iki":316,
"len":316,
"stu":316,
"_ha":315,
"nię":315,
"_n_":314,
"oto":314,
"_on":313,
"_sw":313,
"_le":312,
"nty":312,
"yza":312,
"zyp":311,
"_br":310,
"ruk":310,
"_dn":309,
"man":309,
"mię":309,
"obl":309,
"tat":309,
"wą_":309,
"ner":308,
"run":308,
"_el":307,
"kaz":307,
"ryc":307,
"wyd":307,
"mag":306,
"pcj":305,
"udz":305,
"_ad":304,
"emy":304,
"bib":303,
"ing":303,
"nak":303,
"ylk":303,
"ypa":302,
"zda":302,
"zeb":302,
"dob":300,
"baz":299,
"cz_":299,
"tom":299,
"wny":299,
"zło":299,
"_ot":298,
"pyt":298,
"rol":298,
"wyn":298,
"ycj":298,
"azw":297,
"pan":297,
"rza":297,
"sk_":297,
"ume":297,
"dcz":296,
"pre":296,
"woj":295,
"duj":294,
"lis":294,
"nku":294,
"ukt":294,
"_of":293,
"wir":293,
"żyw":293,
"pni":292,
"spe":292,
"zam":292,
"śre":292,
"_og":290,
"tio":290,
"łan":290,
"azy":289,
"ozy":289,
"atu":288,
"eme":288,
"tel":288,
"ury":288,
"uwa":288,
"mog":287,
"reś":287,
"amy":286,
"nag":286,
"sa_":286,
"zyw":286,
"etr":285,
"irm":285,
"łu_":285,
"_zł":284,
"ere":284,
"fir":284,
"las":283,
"wow":283,
"_dw":282,
"_mn":281,
"aro":281,
"gól":281,
"twi":281,
"ywi":281,
"awn":280,
"daj":280,
"dot":280,
"każ":280,
"oka":280,
"zem":280,
"anu":279,
"ela":279,
"oln":279,
"awo":278,
"jeś":278,
"rej":278,
"uro":278,
"iwo":277,
"put":277,
"amu":276,
"eru":276,
"ode":276,
"zpi":276,
"_zg":275,
"mpu":275,
"rtu":275,
"ył_":275,
"cą_":274,
"emi":274,
"nkc":274,
"rst":274,
"wat":274,
"_la":273,
"gen":273,
"rys":273,
"umo":273,
"ępu":273,
"cej":272,
"uto":272,
"ark":271,
"ozn":271,
"_ed":270,
"bow":270,
"eta":270,
"iat":270,
"iru":270,
"opc":270,
"pew":270,
"wol":270,
"dod":269,
"ntó":269,
"wes":269,
"wi_":269,
"aut":268,
"ord":268,
"atk":267,
"dne":267,
"rne":267,
"iew":266,
"nni":266
};
LanguageIdentifier.addProfile('pl', ngrams, 854272);
}());
