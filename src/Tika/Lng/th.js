/*!
 * th addon for LanguageIdentifier v0.2
 * http://tika.apache.org/
 * https://github.com/mazko/jsli
 *
 * Copyright 13.01.11, Oleg Mazko
 * http://www.opensource.org/licenses/bsd-license.html
 */
(function() {
var ngrams = {
"การ":38686,
"_อง":13941,
"_าง":12827,
"ประ":12609,
"_าน":11182,
"ของ":11179,
"วาม":10809,
"เป_":9899,
"ได_":9380,
"_กา":9046,
"ควา":9007,
"ให_":8846,
"และ":8769,
"_น_":8413,
"นท_":7353,
"_ม_":7302,
"นกา":7139,
"ารเ":6906,
"_ร_":6515,
"เร_":6479,
"งกา":6385,
"_อน":6258,
"อย_":6124,
"งาน":6114,
"_กษ":6073,
"_ต_":5948,
"จาก":5853,
"_ท_":5787,
"หน_":5761,
"ไม_":5626,
"_นท":5562,
"_อย":5562,
"ใช_":5524,
"_ส_":5399,
"_นเ":5255,
"ระเ":5006,
"บร_":4949,
"_าเ":4868,
"งท_":4844,
"ทาง":4801,
"กษา":4778,
"หร_":4774,
"_วย":4768,
"_นก":4563,
"_าร":4511,
"าร_":4500,
"เพ_":4448,
"_ว_":4432,
"_อก":4352,
"เก_":4288,
"_งเ":4199,
"เง_":4183,
"องก":4172,
"_ก_":4170,
"าน_":4066,
"_จ_":3832,
"_าห":3809,
"เด_":3759,
"รรม":3730,
"_ยน":3709,
"_ด_":3706,
"ามา":3630,
"_าย":3625,
"เล_":3586,
"_อม":3585,
"คร_":3584,
"_วน":3573,
"กล_":3556,
"นต_":3495,
"ารท":3449,
"ระช":3447,
"_คว":3431,
"หล_":3431,
"ะเท":3430,
"มาก":3427,
"เทศ":3357,
"าท_":3332,
"_อ_":3282,
"_บ_":3237,
"เม_":3180,
"_าม":3172,
"_บร":3138,
"_าใ":3087,
"_ใน":3053,
"_ค_":3041,
"_าว":3010,
"_ปร":2961,
"งน_":2958,
"_ยง":2951,
"ปร_":2937,
"ในก":2925,
"กต_":2920,
"_ป_":2899,
"_นอ":2897,
"กว_":2894,
"มาร":2893,
"ากา":2890,
"าต_":2890,
"_งก":2869,
"ารส":2868,
"_ย_":2862,
"อร_":2845,
"_ยว":2832,
"_าก":2829,
"ภาพ":2810,
"เข_":2799,
"เน_":2789,
"ามเ":2758,
"าม_":2755,
"_นต":2750,
"รท_":2723,
"เช_":2712,
"_อเ":2696,
"ตร_":2678,
"นส_":2671,
"ารถ":2650,
"ะชา":2649,
"ารป":2631,
"บกา":2625,
"งส_":2616,
"กระ":2614,
"ระบ":2613,
"ะด_":2609,
"สร_":2591,
"องเ":2586,
"ไทย":2580,
"_พ_":2564,
"_ตร":2558,
"รก_":2549,
"าก_":2549,
"_จะ":2539,
"ราย":2537,
"_ได":2500,
"งก_":2498,
"งปร":2467,
"ารใ":2466,
"_งค":2453,
"_ง_":2450,
"างก":2447,
"ระก":2444,
"รศ_":2433,
"งต_":2413,
"_เป":2403,
"นร_":2398,
"นก_":2393,
"_แล":2377,
"_กร":2373,
"ยละ":2337,
"านว":2328,
"กรร":2307,
"เส_":2305,
"งม_":2285,
"นใน":2281,
"หม_":2279,
"_ฒน":2253,
"อน_":2253,
"_ละ":2247,
"ารศ":2241,
"าให":2236,
"งค_":2220,
"สาม":2186,
"_าค":2183,
"_นส":2178,
"ตาม":2170,
"_า_":2160,
"_งส":2149,
"ะกา":2146,
"_บก":2138,
"_มา":2130,
"ะท_":2128,
"มต_":2123,
"ลาย":2111,
"กร_":2094,
"นน_":2089,
"รณ_":2085,
"มร_":2080,
"คล_":2076,
"_งน":2069,
"หาร":2062,
"_ล_":2052,
"_เก":2049,
"สาร":2047,
"โดย":2010,
"_ดก":2009,
"_ดเ":2009,
"_นค":2006,
"_นา":2000,
"มท_":1998,
"ชาช":1994,
"องท":1993,
"ละเ":1980,
"าชน":1977,
"_นไ":1976,
"นด_":1972,
"ฒนา":1970,
"แก_":1965,
"_งแ":1963,
"_นใ":1954,
"ามส":1942,
"_งห":1936,
"_าท":1932,
"นพ_":1925,
"ออก":1923,
"อยล":1921,
"ระด":1909,
"_นแ":1891,
"าค_":1889,
"_ระ":1884,
"เคร":1880,
"_ช_":1876,
"_นร":1875,
"งร_":1866,
"อม_":1866,
"าว_":1855,
"หมา":1854,
"าล_":1850,
"นช_":1846,
"นขอ":1843,
"ชน_":1842,
"าส_":1833,
"องค":1829,
"อกา":1824,
"หว_":1809,
"นว_":1806,
"มาย":1803,
"นปร":1795,
"มพ_":1795,
"นอ_":1793,
"ะบบ":1780,
"ารณ":1780,
"สถา":1778,
"งงา":1774,
"นมา":1768,
"ละก":1767,
"ากก":1767,
"แต_":1762,
"นวน":1757,
"ารแ":1755,
"_ให":1753,
"ดกา":1749,
"รปร":1747,
"_งท":1736,
"ารพ":1726,
"_งม":1723,
"_ผ_":1720,
"าบ_":1703,
"ารก":1701,
"บปร":1694,
"าหน":1691,
"เท_":1687,
"นระ":1675,
"าคา":1668,
"ากร":1664,
"_ทย":1662,
"ารร":1650,
"องร":1644,
"ชาต":1642,
"านก":1641,
"_าแ":1630,
"าหร":1629,
"นป_":1628,
"แบบ":1617,
"ญหา":1615,
"มาณ":1615,
"ามร":1614,
"ารจ":1612,
"รส_":1611,
"ารว":1607,
"_นด":1604,
"ละ_":1599,
"ปล_":1593,
"ทยา":1591,
"_นม":1584,
"ครง":1583,
"_วม":1582,
"แล_":1582,
"_าไ":1578,
"ารต":1574,
"กท_":1573,
"างเ":1567,
"งด_":1565,
"หญ_":1558,
"_ญห":1553,
"_าล":1549,
"นแล":1548,
"อง_":1547,
"รเง":1546,
"_าจ":1539,
"ราะ":1537,
"_สา":1535,
"ะม_":1534,
"รจ_":1532,
"_งข":1529,
"ตรา":1529,
"วก_":1529,
"_อส":1519,
"ารอ":1518,
"ยาก":1514,
"_ขอ":1503,
"กน_":1502,
"ารค":1482,
"_อา":1481,
"องป":1480,
"ะส_":1479,
"_นน":1477,
"_าส":1474,
"าย_":1469,
"ในเ":1469,
"_วเ":1465,
"งใน":1464,
"นาค":1461,
"ศาส":1460,
"จะเ":1444,
"งข_":1439,
"องส":1438,
"_ข_":1436,
"งจา":1431,
"_ศ_":1429,
"ระม":1429,
"ายไ":1429,
"มส_":1428,
"_บเ":1423,
"_อไ":1415,
"_ไม":1414,
"งขอ":1408,
"าเป":1406,
"_บป":1405,
"สตร":1400,
"_เพ":1396,
"าระ":1396,
"_นว":1392,
"ยได":1390,
"_นจ":1389,
"ภาค":1389,
"_จา":1384,
"รใช":1384,
"ยใน":1380,
"_กเ":1377,
"หลา":1377,
"_รก":1374,
"ยท_":1374,
"างา":1373,
"าช_":1372,
"นให":1371,
"_ใช":1369,
"ายใ":1367,
"_นล":1364,
"กกา":1364,
"_บส":1362,
"_ทธ":1355,
"าสต":1352,
"รด_":1346,
"_นข":1344,
"_งใ":1339,
"านา":1339,
"มกา":1336,
"งเป":1335,
"ธรร":1335,
"ะก_":1334,
"_งจ":1329,
"_นป":1325,
"นม_":1323,
"_งไ":1318,
"_งต":1315,
"รงก":1307,
"รพ_":1307,
"ะต_":1305,
"ะมา":1305,
"รวจ":1303,
"_นห":1297,
"าด_":1296,
"ถาบ":1295,
"_รา":1289,
"_เร":1283,
"_ภา":1280,
"ละส":1274,
"ยวก":1270,
"ารด":1268,
"_ดส":1267,
"ใหญ":1267,
"ผล_":1264,
"กลา":1260,
"งว_":1259,
"โคร":1259,
"_บค":1258,
"อกเ":1258,
"อนไ":1257,
"ารข":1256,
"รวม":1254,
"_วง":1252,
"สน_":1246,
"_งอ":1242,
"ะน_":1236,
"ทร_":1233,
"างๆ":1231,
"บาล":1227,
"_าป":1219,
"ารา":1217,
"มน_":1216,
"ในป":1215,
"_ยม":1211,
"รร_":1205,
"นค_":1203,
"รรค":1202,
"รม_":1201,
"โลก":1201,
"_อใ":1198,
"บท_":1194,
"ายเ":1194,
"ระท":1193,
"ารล":1192,
"นเป":1186,
"นได":1186,
"นข_":1183,
"ในร":1183,
"_ยบ":1182,
"ากน":1182,
"ะช_":1180,
"เห_":1180,
"าจะ":1178,
"ารบ":1178,
"แห_":1177,
"_นธ":1176,
"ละค":1174,
"คาร":1171,
"นละ":1171,
"พาะ":1169,
"_หา":1161,
"ดท_":1161,
"รษฐ":1157,
"ศรษ":1157,
"าง_":1157,
"รเล":1156,
"_นช":1154,
"อกต":1151,
"านเ":1149,
"_ธ_":1148,
"งเท":1148,
"_คร":1145,
"งกล":1143,
"เบ_":1142,
"ยกา":1140,
"ระห":1137,
"บาท":1131,
"_งป":1130,
"รอง":1130,
"_บท":1124,
"รต_":1124,
"นผ_":1123,
"มก_":1122,
"บว_":1116,
"ปฏ_":1116,
"_เห":1114,
"_ญญ":1113,
"ทธ_":1112,
"องจ":1109,
"งมา":1105,
"_วา":1101,
"ดส_":1101,
"เหล":1100,
"านท":1099,
"ายก":1099,
"นล_":1098,
"องม":1098,
"_มพ":1097,
"นทา":1096,
"วลา":1094,
"_ดม":1093,
"_งร":1090,
"าเน":1090,
"ษฐก":1084,
"นย_":1083,
"_ดต":1080,
"ระส":1080,
"_ตา":1072,
"นเร":1071,
"ฐก_":1070,
"ใหม":1070,
"_กล":1067,
"ลย_":1067,
"_ดข":1065,
"างไ":1064,
"_ถ_":1061,
"ดต_":1059,
"ถาน":1054,
"รกา":1052,
"ยงา":1051,
"_ออ":1048,
"งคว":1048,
"หต_":1048,
"นาร":1045,
"ยาย":1044,
"กอบ":1041,
"ะหว":1040,
"งแล":1039,
"_นพ":1035,
"นธ_":1033,
"มข_":1032,
"ฐาน":1028,
"ะเป":1027,
"เศร":1026,
"นอย":1025,
"เวล":1023,
"าปร":1022,
"างป":1020,
"งระ":1018,
"อาจ":1016,
"จร_":1011,
"ฉพา":1011,
"บด_":1011,
"พล_":1009,
"_กท":1007,
"นไป":1007,
"าใน":1007,
"ลอด":1002,
"ะกอ":1002,
"บค_":999,
"ยร_":999,
"สนอ":998,
"นาย":995,
"_าต":992,
"ญญา":992,
"_งา":991,
"นอก":990,
"โรง":990,
"_ผล":986,
"เหต":986,
"เปล":985,
"_นย":982,
"องอ":981,
"งผ_":980,
"_เค":978,
"บต_":974,
"รค_":974,
"รทา":973,
"องใ":971,
"นโล":965,
"อท_":962,
"านค":960,
"_มข":958,
"ะว_":958,
"พรา":957,
"_จจ":955,
"ควร":955,
"าแล":954,
"สม_":953,
"าหา":951,
"_อค":950,
"ลาง":950,
"านอ":950,
"_นผ":949,
"_แก":948,
"เฉพ":948,
"_ยก":945,
"องต":944,
"ทย_":943,
"พยา":941,
"ารน":939,
"างส":938,
"_อร":937,
"กรณ":936,
"นจ_":935,
"จจ_":934,
"นาด":934,
"งช_":931,
"ยต_":929,
"งให":928,
"แนว":926,
"แผน":926,
"กข_":923,
"ตอร":922,
"าตร":922,
"งเร":920,
"นบา":917,
"อให":916,
"_ดท":915,
"าธ_":915,
"เสร":914,
"มศ_":911,
"เตอ":911,
"_ชา":910,
"กส_":909,
"เอ_":909,
"เอก":906,
"าเร":901,
"_พย":898,
"รให":896,
"งเส":894,
"องแ":894,
"_บอ":892,
"ระจ":892,
"งป_":891,
"ากเ":890,
"งอ_":884,
"กจา":883,
"_อท":882,
"านบ":882,
"ามต":882,
"ลาด":881,
"รน_":880,
"_สม":878,
"เคล":878,
"_เอ":872,
"บสน":872,
"พรร":872,
"ไว_":870,
"_ษ_":869,
"ครา":869,
"นเม":869,
"าขอ":866,
"จาร":865,
"สดง":863,
"ยน_":861,
"ยว_":860,
"นกล":859,
"_งพ":858,
"_าด":858,
"งจ_":858,
"หนด":856,
"มม_":855,
"อก_":855,
"แรง":855,
"งคม":854,
"งถ_":854,
"กาศ":852,
"เอง":851,
"างท":850,
"ยม_":849,
"_กค":848,
"นกร":847,
"สหร":847,
"_มเ":844,
"ลงท":842,
"บาย":840,
"รว_":840,
"นหน":839,
"_อข":838,
"ะจ_":837,
"ตรว":836,
"อกจ":836,
"_อว":835,
"งเก":834,
"องผ":831,
"ในส":831,
"บคว":828,
"งไม":827,
"อส_":825,
"งพ_":824,
"สภา":823,
"งชา":821,
"องน":820,
"รมก":819,
"จะม":816,
"นคว":815,
"คโน":814,
"ละป":813,
"ารห":810,
"_นโ":809,
"มหา":808,
"อนเ":808,
"_กส":807,
"_าอ":807,
"โนโ":806,
"ทคโ":805,
"ารไ":803,
"_อป":801,
"โลย":801,
"นเด":799,
"เทค":798,
"ละร":794,
"นรา":792,
"ครอ":787,
"ฐบา":787,
"รงง":787,
"_ฐบ":785,
"หกร":784,
"ราค":782,
"_งง":781,
"_งช":776,
"ากท":775,
"ราก":774,
"รเป":772,
"รเร":771,
"_คน":769,
"าจา":766,
"ดล_":765,
"าณ_":765,
"แทน":765,
"_วอ":764,
"_กก":762,
"รอบ":762,
"_หล":761,
"งหน":760,
"สาห":759,
"โรค":759,
"รบร":758,
"ยก_":755,
"อว_":754,
"ดข_":753,
"ดมศ":753,
"เจ_":752,
"_เด":751,
"ะปร":747,
"_อห":745,
"นเง":744,
"รกร":744,
"_ดค":742,
"_เข":742,
"าแห":742,
"ขนา":741,
"ดยเ":741,
"างค":741,
"าพ_":741,
"_าข":740,
"างแ":740,
"นอง":739,
"นเอ":738,
"ยส_":737,
"วน_":737,
"ะยะ":737,
"ามค":736,
"ละอ":733,
"ระย":732,
"านส":732,
"_ดย":729,
"พระ":729,
"_ตส":727,
"_กต":726,
"านข":724,
"_เว":722,
"จะไ":720,
"กษ_":719,
"วนก":719,
"งย_":718,
"สอบ":718,
"_จก":717,
"_บผ":717,
"ผลก":717,
"งได":716,
"ารผ":716,
"_หน":714,
"คณะ":713,
"พร_":713,
"_อต":712,
"_เล":712,
"าคว":712,
"ภาย":711,
"มด_":710,
"ารม":709,
"ายท":708,
"แสด":708,
"องพ":706,
"งละ":705,
"ชาก":705,
"นภา":705,
"ลกา":705,
"_เม":703,
"นาก":703,
"_นบ":700,
"องไ":700,
"นไห":699,
"บาง":699,
"งหม":698,
"องข":697,
"งอย":696,
"มาต":695,
"ะห_":695,
"รขอ":693,
"ากข":693,
"ตอบ":691,
"อาห":688,
"หมด":686,
"_เน":685,
"นอน":685,
"าหก":685,
"ธาน":682,
"าใช":682,
"_ห_":679,
"าะห":679,
"ไหว":679,
"_ชน":678,
"ษา_":678,
"กอง":677,
"ธนา":677,
"ายต":676,
"เสน":676,
"งแต":675,
"ราช":675,
"าไป":675,
"างร":674,
"วย_":672,
"กรม":671,
"ทศไ":671,
"นเพ":670,
"นตร":669,
"เทพ":668,
"านม":664,
"ละม":663,
"เหม":662,
"งไร":660,
"_บา":658,
"งจะ":658,
"_มต":657,
"เต_":656,
"ยนร":654,
"าเส":654,
"ภาษ":653,
"ลาก":653,
"นคร":651,
"ระธ":650,
"รแก":649,
"างด":648,
"มค_":646,
"องห":646,
"าจ_":646,
"_กว":645,
"ดว_":645,
"กงา":644,
"นคน":643,
"นทร":642,
"_บต":641,
"ตสา":641,
"ะกร":641,
"กด_":639,
"ณะท":639,
"ยแล":639,
"นจะ":637,
"วร_":635,
"ในช":635,
"_มอ":633,
"กษต":632,
"รแล":632,
"ษตร":632,
"เกษ":631,
"แรก":630,
"_ยา":629,
"บผ_":629,
"ตลา":628,
"อาก":627,
"กษณ":626,
"งเด":626,
"ยบา":626,
"_อบ":625,
"างม":625,
"เว_":625,
"_ดห":624,
"นเท":624,
"_ดแ":623,
"มเค":622,
"ในอ":622,
"_งล":621,
"นจา":621,
"_ยร":620,
"ะธา":619,
"เรา":619,
"กก_":617,
"ศไท":616,
"กใน":615,
"วมท":615,
"วยก":615,
"หาก":615,
"ณฑ_":614,
"ราง":614,
"ายน":614,
"าได":614,
"ะได":613,
"รณา":612,
"วนใ":612,
"_กง":608,
"_อแ":607,
"ยาล":606,
"วดล":606,
"_บด":605,
"นาม":605,
"ายา":605,
"ายแ":605,
"จะต":604,
"ดขอ":604,
"บน_":604,
"หาว":604,
"_ดร":603,
"ะเภ":603,
"_าพ":602,
"ะแน":602,
"_าบ":601,
"แวด":601,
"ะบ_":598,
"ะร_":597,
"_ยด":596,
"มปร":596,
"เภท":596,
"ยให":595,
"_ซ_":593,
"_มก":592,
"_แน":592,
"านใ":592,
"าศา":592,
"_ดอ":591,
"ยชน":590,
"อนข":590,
"ายอ":590,
"แม_":590,
"_กอ":588,
"มอง":585,
"กกว":583,
"บอ_":582,
"_อจ":581,
"นหล":581,
"บส_":580,
"พย_":580,
"ยขอ":580,
"วมก":580,
"ปท_":579,
"โยบ":579,
"_มท":578,
"าอ_":578,
"มเส":577,
"ยาศ":577,
"รเม":577,
"าะส":577,
"กสา":576,
"ระโ":576,
"บรร":575,
"นบ_":574,
"อต_":574,
"ากจ":574,
"ปลง":572,
"วอย":572,
"มเป":571,
"มสา":570,
"ะสา":570,
"ายง":570,
"นสา":569,
"อกส":569,
"องโ":568,
"าคม":568,
"งผล":567,
"_บน":566,
"างต":566,
"_มช":565,
"_าา":565,
"ดน_":565,
"งคร":563,
"างช":563,
"คน_":562,
"อแก":562,
"แกน":562,
"_หร":561,
"นเช":561,
"รช_":561,
"ารโ":561,
"วม_":560,
"อนา":560,
"ดให":559,
"มว_":559,
"ยาม":558,
"วยเ":558,
"ะโย":558,
"มคว":557,
"ามพ":557,
"งสถ":556,
"ลท_":556,
"นาน":555,
"มขอ":555,
"วาง":555,
"อคว":555,
"ะคว":555,
"แปล":555,
"กมา":553,
"ฝาก":553,
"_นๆ":552,
"นใจ":551,
"อไป":551,
"างอ":551,
"_อด":550,
"_เช":550,
"งหว":548,
"_งผ":546,
"_ดใ":546,
"อนท":546,
"ะไม":545,
"แหน":544,
"นห_":543,
"ยเฉ":543,
"ละน":543,
"ษณะ":543,
"นไม":542,
"รบ_":541,
"รอน":541,
"าวะ":541,
"รลง":540,
"ยด_":539,
"าป_":538,
"แข_":538,
"_งว":537,
"นอา":537,
"าศ_":537,
"บก_":536,
"ะพ_":536,
"_มค":535
};
LanguageIdentifier.addProfile('th', ngrams, 1557558);
}());
