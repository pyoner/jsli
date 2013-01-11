/*!
 * be addon for LanguageIdentifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 13.01.11, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */
(function() {
var ngrams = {
"_па":3116,
"_і_":2556,
"_на":2147,
"_пр":2138,
"на_":2079,
"ай_":1954,
"ста":1826,
"_ка":1654,
"пра":1646,
"аў_":1634,
"_ў_":1489,
"_з_":1484,
"ава":1461,
"_ст":1451,
"ць_":1391,
"га_":1369,
"кі_":1308,
"ага":1303,
"_у_":1298,
"ны_":1297,
"_ад":1277,
"_за":1271,
"_як":1261,
"ска":1234,
"_вы":1167,
"_да":1149,
"ам_":1123,
"ii_":1108,
"ых_":1094,
"пер":1074,
"ара":1055,
"дзе":1022,
"_ра":997,
"_ма":950,
"ым_":946,
"ая_":934,
"най":933,
"ана":932,
"ыя_":920,
"ца_":919,
"не_":899,
"льн":883,
"ла_":846,
"пад":842,
"ван":836,
"ера":832,
"алі":831,
"пры":819,
"ае_":818,
"цца":811,
"год":792,
"_пе":783,
"мі_":779,
"аль":776,
"ня_":773,
"лі_":772,
"_th":765,
"анн":760,
"_i_":748,
"да_":744,
"ад_":741,
"ала":737,
"ада":736,
"_ii":733,
"ва_":729,
"асц":724,
"скі":714,
"рад":710,
"_не":701,
"_бы":688,
"рац":681,
"аст":679,
"кам":668,
"ся_":668,
"ных":651,
"_са":650,
"іст":648,
"ары":640,
"ыі_":636,
"оль":635,
"тар":633,
"the":625,
"ння":625,
"кай":618,
"ля_":610,
"_аб":607,
"ка_":607,
"ама":604,
"іка":604,
"кар":599,
"_of":594,
"of_":587,
"he_":586,
"ki_":584,
"on_":580,
"дзі":580,
"аны":579,
"ным":579,
"рам":578,
"рас":577,
"рав":569,
"але":568,
"_та":561,
"er_":561,
"ры_":555,
"які":555,
"ці_":553,
"дзя":552,
"вал":548,
"тра":548,
"кан":545,
"нас":544,
"наг":542,
"_го":540,
"таг":540,
"аго":539,
"тва":539,
"адз":536,
"нік":535,
"амі":534,
"ні_":533,
"ран":527,
"ку_":526,
"нне":517,
"ата":513,
"іі_":508,
"сці":507,
"ski":505,
"ія_":505,
"_ча":503,
"раз":501,
"ацы":499,
"es_":498,
"зе_":493,
"нск":492,
"_ва":486,
"зна":485,
"_лі":484,
"та_":481,
"_св":480,
"ую_":476,
"_co":472,
"аць":471,
"лас":468,
"тры":466,
"ддз":460,
"час":460,
"лад":459,
"го_":457,
"ств":450,
"іх_":450,
"стр":449,
"ion":445,
"сам":442,
"_га":441,
"ная":441,
"чна":441,
"_сі":437,
"так":437,
"_дз":436,
"ім_":436,
"тал":435,
"ныя":434,
"us_":428,
"ецц":428,
"_de":426,
"_ал":424,
"одд":424,
"ра_":424,
"ыў_":424,
"iii":418,
"аро":416,
"лік":415,
"_су":414,
"кла":413,
"лен":410,
"таў":408,
"рым":406,
"вае":404,
"тан":402,
"еры":400,
"каг":400,
"_рэ":398,
"энн":398,
"оўн":395,
"одз":394,
"_ін":393,
"вы_":392,
"_wi":387,
"был":386,
"па_":386,
"там":384,
"пас":382,
"раў":381,
"ова":380,
"дна":379,
"рыс":379,
"енн":373,
"нав":372,
"and":371,
"ычн":371,
"_re":370,
"апа":369,
"ма_":369,
"_по":368,
"йск":368,
"ход":368,
"_ме":366,
"_гр":364,
"ах_":364,
"адн":363,
"_in":357,
"is_":356,
"ані":355,
"кім":355,
"рыя":355,
"аве":353,
"для":353,
"_an":352,
"_вя":351,
"tio":351,
"аві":349,
"гра":348,
"овы":348,
"анс":345,
"_дл":343,
"_сп":343,
"ача":343,
"ыка":343,
"ыст":343,
"аўн":342,
"al_":341,
"_бе":339,
"_li":338,
"кал":338,
"_ас":337,
"ows":336,
"_ma":335,
"_шт":335,
"_ве":333,
"_кр":333,
"вар":333,
"ьна":331,
"ман":330,
"стэ":330,
"_ба":328,
"спа":328,
"оў_":327,
"ўна":327,
"_ар":326,
"яго":325,
"кія":323,
"_vi":322,
"аля":319,
"пар":319,
"цыя":318,
"кая":317,
"_po":316,
"_яг":316,
"мен":316,
"пал":316,
"нач":315,
"рат":312,
"анд":311,
"аса":309,
"ой_":308,
"то_":308,
"ар_":307,
"ле_":307,
"пам":307,
"_тэ":306,
"ati":306,
"nd_":306,
"ter":306,
"_ім":303,
"род":303,
"an_":302,
"вай":302,
"тэм":302,
"цыі":301,
"_а_":300,
"ваў":299,
"вер":299,
"мы_":299,
"нал":299,
"_мо":298,
"быў":298,
"асн":296,
"en_":295,
"ліс":295,
"ак_":291,
"аўс":290,
"што":290,
"сва":288,
"вык":287,
"рус":287,
"аме":286,
"ака":284,
"нам":284,
"чны":284,
"_ко":283,
"рал":283,
"яў_":282,
"ены":281,
"чан":281,
"_ат":280,
"авы":280,
"сту":279,
"ася":276,
"ахо":276,
"ора":276,
"сіс":276,
"сто":275,
"_xi":274,
"аец":274,
"як_":274,
"ялі":274,
"гэт":273,
"кра":273,
"_be":272,
"_ar":271,
"нні":271,
"одн":271,
"ты_":271,
"му_":270,
"паў":269,
"яка":269,
"_мі":268,
"іна":268,
"ду_":267,
"аб_":266,
"ына":266,
"ўся":266,
"de_":265,
"_гэ":264,
"кіх":264,
"аюц":263,
"уль":262,
"_pr":261,
"ed_":261,
"_ск":260,
"ia_":260,
"чын":260,
"ыма":260,
"_pa":259,
"ўва":259,
"ало":257,
"мар":257,
"_ро":255,
"ды_":255,
"ела":255,
"сць":255,
"асп":254,
"кас":254,
"льк":254,
"оры":254,
"чы_":254,
"эта":254,
"азв":252,
"даў":252,
"іта":252,
"_во":251,
"_зн":249,
"бел":249,
"_то":248,
"_гу":247,
"iv_":247,
"цый":247,
"зен":246,
"ыла":246,
"асл":245,
"мал":245,
"wsk":244,
"атр":244,
"зя_":244,
"йна":244,
"ing":242,
"уск":242,
"кса":241,
"мас":241,
"чэн":241,
"ады":240,
"вац":240,
"ода":240,
"_st":239,
"ch_":239,
"арт":239,
"_ап":237,
"_xv":236,
"_ся":236,
"_тр":236,
"in_":236,
"вял":236,
"за_":236,
"тэр":236,
"цы_":236,
"ена":235,
"пав":235,
"_to":234,
"ng_":234,
"акс":234,
"_бо":233,
"_ві":233,
"кав":233,
"іра":232,
"re_":231,
"аба":231,
"le_":230,
"сты":230,
"ант":229,
"ную":229,
"яй_":229,
"раб":228,
"чал":228,
"іў_":228,
"sta":227,
"тор":227,
"амп":226,
"піс":226,
"ix_":225,
"нта":224,
"ent":223,
"to_":223,
"_no":222,
"_ан":221,
"дав":221,
"каў":221,
"тур":221,
"раг":220,
"_ге":219,
"ist":219,
"ыва":219,
"ьны":219,
"or_":218,
"зва":218,
"_so":217,
"ару":217,
"нар":216,
"ьні":216,
"ерш":215,
"рын":215,
"rus":214,
"at_":213,
"ве_":213,
"пач":213,
"іла":213,
"_ca":212,
"ем_":212,
"мер":212,
"ст_":212,
"_bo":211,
"або":211,
"ніц":210,
"ымі":210,
"ўны":210,
"_iv":209,
"іва":209,
"ўля":209,
"vii":208,
"маг":208,
"_ру":207,
"вых":207,
"дар":207,
"_a_":206,
"_ты":206,
"xvi":206,
"нов":206,
"юць":206,
"_un":205,
"_се":205,
"nte":205,
"аза":205,
"анц":205,
"ель":205,
"_la":204,
"ылі":204,
"_ўс":203,
"ыйн":203,
"бра":202,
"льш":202,
"літ":202,
"нае":202,
"тым":202,
"ўні":202,
"_se":201,
"ndo":201,
"оўв":201,
"пан":201,
"яе_":201,
"win":200,
"іцы":200,
"_ды":199,
"_кі":199,
"наў":199,
"рыі":199,
"шча":199,
"аты":198,
"мат":198,
"пол":198,
"сна":198,
"_mi":197,
"_аў":197,
"ate":197,
"агр":197,
"ога":197,
"са_":197,
"спр":197,
"dow":196,
"буд":195,
"лав":195,
"ль_":195,
"рак":195,
"гад":194,
"рма":194,
"мов":193,
"сла":193,
"ькі":193,
"адк":192,
"дал":192,
"рык":192,
"іць":192,
"ind":191,
"гру":191,
"ічн":191,
"_na":190,
"et_":190,
"na_":190,
"амо":190,
"_fo":189,
"тна":189,
"_sa":188,
"асі":188,
"ган":188,
"ўск":188,
"int":187,
"рыт":187,
"дам":186,
"лан":186,
"мпе":186,
"туп":186,
"імп":186,
"_др":185,
"_ры":185,
"лар":185,
"тоў":185,
"_бу":184,
"la_":184,
"інш":183,
"ver":182,
"тав":182,
"ікі":182,
"_le":181,
"гор":181,
"іза":181,
"_al":180,
"дра":180,
"яўл":180,
"vi_":179,
"ляе":179,
"ту_":179,
"ta_":177,
"te_":177,
"вой":177,
"вор":177,
"lar":175,
"аду":175,
"жна":175,
"ков":175,
"кры":174,
"нцы":174,
"яко":174,
"абі":173,
"гал":173,
"рна":173,
"ік_":173,
"_му":172,
"ан_":172,
"ачы":172,
"ваю":172,
"нен":172,
"che":171,
"for":171,
"ліц":171,
"ce_":170,
"lin":170,
"адс":170,
"наз":170,
"_ro":169,
"ws_":169,
"зі_":169,
"од_":168,
"ers":167,
"st_":167,
"ас_":167,
"зіц":167,
"тка":167,
"ён_":167,
"_ку":166,
"tor":166,
"йны":166,
"ne_":165,
"апі":165,
"акі":164,
"бар":164,
"кір":164,
"ліч":164,
"рск":164,
"тыч":164,
"ыю_":164,
"_ус":163,
"_do":162,
"аво":162,
"аўт":162,
"вед":162,
"дан":162,
"дны":162,
"_am":161,
"ns_":161,
"вым":161,
"ніі":161,
"рап":161,
"_ца":160,
"os_":160,
"акт":160,
"жан":160,
"нак":160,
"шы_":160,
"ілі":160,
"_чы":159,
"арм":159,
"бол":159,
"ей_":159,
"каз":159,
"тол":159,
"ума":159,
"адо":158,
"ейс":158,
"ыкл":158,
"ыць":158,
"_но":157,
"гар":157,
"_ле":156,
"пы_":156,
"рон":156,
"ін_":156,
"няў":155,
"скл":155,
"це_":155,
"_di":154,
"вет":154,
"ека":154,
"роў":154,
"сав":154,
"_fr":153,
"_зв":153,
"ste":153,
"апр":153,
"ica":152,
"гер":152,
"заб":152,
"зін":152,
"паз":152,
"_mo":151,
"el_":151,
"ie_":151,
"тай":151,
"ызн":151,
"эмы":151,
"ra_":150,
"um_":150,
"гул":150,
"пла":150,
"руп":150,
"ыні":150,
"_ch":149,
"_пл":149,
"арэ":149,
"вод":149,
"рта":149,
"цар":149,
"am_":148,
"аму":148,
"est":147,
"адр":147,
"лів":147,
"сан":147,
"as_":146,
"апе":146,
"аск":146,
"дад":146,
"ект":146,
"зас":146,
"цэн":146,
"іль":146,
"_ак":145,
"con":145,
"азн":145,
"кую":145,
"нда":145,
"нем":145,
"рга":145,
"ску":145,
"тво":145,
"цтв":145,
"_c_":144,
"_яў":144,
"ot_":144,
"лін":144,
"нап":144,
"яна":144,
"яшч":144,
"кол":143,
"льс":143,
"ну_":143,
"ршы":143,
"_ne":142,
"_te":142,
"his":142,
"блі":142,
"вяр":142,
"кта":142,
"_me":141,
"ms_":141,
"nt_":141,
"азі":141,
"анг":141,
"віл":141,
"аін":140,
"зам":140,
"суп":140,
"_sp":139,
"_фа":139,
"ari":139,
"вып":139,
"ент":139,
"коў":139,
"мін":139,
"рэн":139,
"тро":139,
"ill":138,
"ran":138,
"sto":138,
"амы":138,
"кае":138,
"роз":138,
"чым":138,
"іча":138,
"bel":137,
"кат":137,
"ноў":137,
"ост":137,
"пак":137,
"уда":137,
"юцц":137,
"_xx":136,
"_ўз":136,
"ry_":136,
"амн":136,
"аўл":136,
"ерс":136,
"зел":136,
"лам":136,
"мны":136,
"ншы":136,
"рыз":136,
"рэд":136,
"ючы":136,
"all":135,
"ic_":135,
"пап":135,
"_ba":134,
"_фр":134,
"_ён":134,
"афі":134,
"зав":134,
"нія":134,
"све":134,
"яме":134,
"_іс":133,
"lan":133,
"se_":133,
"айн":133,
"арс":133,
"ацэ":133,
"раі":133,
"уча":133,
"іся":133,
"_gr":132,
"ela":132,
"men":132,
"uni":132,
"зац":132,
"ней":132,
"оду":132,
"энт":132,
"_гі":131,
"зах":131,
"мац":131,
"нст":131,
"она":131,
"спе":131,
"ула":131,
"_ge":130,
"_v_":130,
"xii":130,
"вен":130,
"вік":130,
"ру_":130,
"ьск":130,
"_зм":129,
"edi":129,
"per":129,
"ане":129,
"мад":129,
"маў":129,
"фар":129,
"arm":128,
"bot":128,
"аз_":128,
"нтр":128,
"ско":128,
"цэс":128,
"ыяд":128,
"іку":128,
"ўта":128,
"ета":127,
"між":127,
"іса":127,
"_ho":126,
"_ха":126,
"com":126,
"ome":126,
"бал":126,
"ярж":126,
"_si":125,
"_кл":125,
"era":125,
"атк":125,
"мес":125,
"ржа":125,
"_su":124,
"_зб":124,
"ar_":124,
"nal":124,
"rea":124,
"він":124,
"зап":124,
"кул":124,
"лаў":124,
"ніз":124,
"сля":124,
"ўле":124,
"_кн":123,
"ani":123,
"aru":123,
"ich":123,
"ona":123,
"адп":123,
"бер":123,
"ваг":123,
"зяр":123,
"мпа":123,
"цка":123,
"імі":123,
"_ам":122,
"_ну":122,
"mar":122,
"ńsk":122,
"асо":122,
"гу_":122,
"зан":122,
"нан":122,
"нах":122,
"lit":121,
"nce":121,
"sch":121,
"ату":121,
"уст":121,
"чат":121,
"ўст":121,
"_at":120,
"ian":120,
"pol":120,
"ris":120,
"агу":120,
"дст":119,
"дын":119,
"ерн":119,
"зал":119,
"сар":119,
"тны":119,
"удз":119,
"_ni":118,
"_ла":118,
"бо_":118,
"ніч":118,
"усі":118,
"ive":117,
"rat":117,
"абр":117,
"дск":117,
"кцы":117,
"мет":117,
"нна":117,
"тат":117,
"ію_":117,
"_бр":116,
"der":116,
"no_":116,
"саб":116,
"яды":116,
"_г_":115,
"ens":115,
"ons":115,
"rs_":115,
"ано":115,
"ато":115,
"эра":115,
"_is":114,
"ali":114,
"les":114,
"lis":114,
"man":114,
"tan":114,
"два":114,
"дыч":114,
"кты":114,
"над":114,
"ярэ":114,
"_da":113,
"ten":113,
"зей":113,
"ло_":113,
"льт":113,
"нны":113,
"нум":113,
"яец":113,
"_дв":112,
"_лю":112,
"_сл":112,
"tra":112,
"адм":112,
"дае":112,
"нек":112,
"озн":112,
"упы":112,
"іны":112,
"_жа":111,
"_яе":111,
"ll_":111,
"арк":111,
"ліз":111,
"стк":111,
"цоў":111,
"_ha":110,
"_pe":110,
"_ян":110,
"ka_":110,
"дка":110,
"ойс":110,
"рай":110,
"pro":109,
"ros":109,
"абл":109,
"авя":109,
"аха":109,
"ву_":109,
"выя":109,
"еда":109,
"раф":109,
"фра":109,
"цыю":109,
"_ja":108,
"th_":108,
"арг":108,
"пат":108,
"ыло":108,
"эты":108,
"ях_":108,
"іцц":108,
"_on":107,
"ard":107,
"ell":107,
"lle":107,
"om_":107,
"str":107,
"пус":107,
"_he":106,
"_дэ":106,
"art":106,
"coa":106,
"por":106,
"адт":106,
"аца":106,
"бав":106,
"эры":106,
"_tr":105,
"oli":105,
"выс":105,
"нты":105};
LanguageIdentifier.addProfile('be', ngrams, 294317);
}());
