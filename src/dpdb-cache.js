// Original: https://github.com/immersive-web/webvr-polyfill-dpdb/blob/main/dpdb-formatted.json
// Changes:
// - Converted JSON to ESM
// - Removed all double quotes for properties
// - Add JSDoc typing
/**
 * @typedef {object} DpdbRule
 * @property {string} [mdmh]
 * @property {string} [ua]
 * @property {[number, number]} [res] - Only for IOS.
 */
/**
 * @typedef {object} Device
 * @property {string} type
 * @property {DpdbRule[]} rules
 * @property {number | [number, number]} dpi
 * @property {number} bw
 * @property {number} ac
 */
/** @type {Device[]} */
const devices = [
  {
    type: "android",
    rules: [
      {
        mdmh: "asus/*/Nexus 7/*"
      },
      {
        ua: "Nexus 7"
      }
    ],
    dpi: [
      320.8,
      323
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "asus/*/ASUS_X00PD/*"
      },
      {
        ua: "ASUS_X00PD"
      }
    ],
    dpi: 245,
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "asus/*/ASUS_X008D/*"
      },
      {
        ua: "ASUS_X008D"
      }
    ],
    dpi: 282,
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "asus/*/ASUS_Z00AD/*"
      },
      {
        ua: "ASUS_Z00AD"
      }
    ],
    dpi: [
      403,
      404.6
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Google/*/Pixel 2 XL/*"
      },
      {
        ua: "Pixel 2 XL"
      }
    ],
    dpi: 537.9,
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Google/*/Pixel 3 XL/*"
      },
      {
        ua: "Pixel 3 XL"
      }
    ],
    dpi: [
      558.5,
      553.8
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Google/*/Pixel XL/*"
      },
      {
        ua: "Pixel XL"
      }
    ],
    dpi: [
      537.9,
      533
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Google/*/Pixel 3/*"
      },
      {
        ua: "Pixel 3"
      }
    ],
    dpi: 442.4,
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Google/*/Pixel 2/*"
      },
      {
        ua: "Pixel 2"
      }
    ],
    dpi: 441,
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Google/*/Pixel/*"
      },
      {
        ua: "Pixel"
      }
    ],
    dpi: [
      432.6,
      436.7
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "HTC/*/HTC6435LVW/*"
      },
      {
        ua: "HTC6435LVW"
      }
    ],
    dpi: [
      449.7,
      443.3
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "HTC/*/HTC One XL/*"
      },
      {
        ua: "HTC One XL"
      }
    ],
    dpi: [
      315.3,
      314.6
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "htc/*/Nexus 9/*"
      },
      {
        ua: "Nexus 9"
      }
    ],
    dpi: 289,
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "HTC/*/HTC One M9/*"
      },
      {
        ua: "HTC One M9"
      }
    ],
    dpi: [
      442.5,
      443.3
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "HTC/*/HTC One_M8/*"
      },
      {
        ua: "HTC One_M8"
      }
    ],
    dpi: [
      449.7,
      447.4
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "HTC/*/HTC One/*"
      },
      {
        ua: "HTC One"
      }
    ],
    dpi: 472.8,
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Huawei/*/Nexus 6P/*"
      },
      {
        ua: "Nexus 6P"
      }
    ],
    dpi: [
      515.1,
      518
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Huawei/*/BLN-L24/*"
      },
      {
        ua: "HONORBLN-L24"
      }
    ],
    dpi: 480,
    bw: 4,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Huawei/*/BKL-L09/*"
      },
      {
        ua: "BKL-L09"
      }
    ],
    dpi: 403,
    bw: 3.47,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "LENOVO/*/Lenovo PB2-690Y/*"
      },
      {
        ua: "Lenovo PB2-690Y"
      }
    ],
    dpi: [
      457.2,
      454.713
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "LGE/*/Nexus 5X/*"
      },
      {
        ua: "Nexus 5X"
      }
    ],
    dpi: [
      422,
      419.9
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "LGE/*/LGMS345/*"
      },
      {
        ua: "LGMS345"
      }
    ],
    dpi: [
      221.7,
      219.1
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "LGE/*/LG-D800/*"
      },
      {
        ua: "LG-D800"
      }
    ],
    dpi: [
      422,
      424.1
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "LGE/*/LG-D850/*"
      },
      {
        ua: "LG-D850"
      }
    ],
    dpi: [
      537.9,
      541.9
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "LGE/*/VS985 4G/*"
      },
      {
        ua: "VS985 4G"
      }
    ],
    dpi: [
      537.9,
      535.6
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "LGE/*/Nexus 5/*"
      },
      {
        ua: "Nexus 5 B"
      }
    ],
    dpi: [
      442.4,
      444.8
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "LGE/*/Nexus 4/*"
      },
      {
        ua: "Nexus 4"
      }
    ],
    dpi: [
      319.8,
      318.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "LGE/*/LG-P769/*"
      },
      {
        ua: "LG-P769"
      }
    ],
    dpi: [
      240.6,
      247.5
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "LGE/*/LGMS323/*"
      },
      {
        ua: "LGMS323"
      }
    ],
    dpi: [
      206.6,
      204.6
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "LGE/*/LGLS996/*"
      },
      {
        ua: "LGLS996"
      }
    ],
    dpi: [
      403.4,
      401.5
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Micromax/*/4560MMX/*"
      },
      {
        ua: "4560MMX"
      }
    ],
    dpi: [
      240,
      219.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Micromax/*/A250/*"
      },
      {
        ua: "Micromax A250"
      }
    ],
    dpi: [
      480,
      446.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Micromax/*/Micromax AQ4501/*"
      },
      {
        ua: "Micromax AQ4501"
      }
    ],
    dpi: 240,
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "motorola/*/G5/*"
      },
      {
        ua: "Moto G (5) Plus"
      }
    ],
    dpi: [
      403.4,
      403
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "motorola/*/DROID RAZR/*"
      },
      {
        ua: "DROID RAZR"
      }
    ],
    dpi: [
      368.1,
      256.7
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "motorola/*/XT830C/*"
      },
      {
        ua: "XT830C"
      }
    ],
    dpi: [
      254,
      255.9
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "motorola/*/XT1021/*"
      },
      {
        ua: "XT1021"
      }
    ],
    dpi: [
      254,
      256.7
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "motorola/*/XT1023/*"
      },
      {
        ua: "XT1023"
      }
    ],
    dpi: [
      254,
      256.7
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "motorola/*/XT1028/*"
      },
      {
        ua: "XT1028"
      }
    ],
    dpi: [
      326.6,
      327.6
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "motorola/*/XT1034/*"
      },
      {
        ua: "XT1034"
      }
    ],
    dpi: [
      326.6,
      328.4
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "motorola/*/XT1053/*"
      },
      {
        ua: "XT1053"
      }
    ],
    dpi: [
      315.3,
      316.1
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "motorola/*/XT1562/*"
      },
      {
        ua: "XT1562"
      }
    ],
    dpi: [
      403.4,
      402.7
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "motorola/*/Nexus 6/*"
      },
      {
        ua: "Nexus 6 B"
      }
    ],
    dpi: [
      494.3,
      489.7
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "motorola/*/XT1063/*"
      },
      {
        ua: "XT1063"
      }
    ],
    dpi: [
      295,
      296.6
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "motorola/*/XT1064/*"
      },
      {
        ua: "XT1064"
      }
    ],
    dpi: [
      295,
      295.6
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "motorola/*/XT1092/*"
      },
      {
        ua: "XT1092"
      }
    ],
    dpi: [
      422,
      424.1
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "motorola/*/XT1095/*"
      },
      {
        ua: "XT1095"
      }
    ],
    dpi: [
      422,
      423.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "motorola/*/G4/*"
      },
      {
        ua: "Moto G (4)"
      }
    ],
    dpi: 401,
    bw: 4,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OnePlus/*/A0001/*"
      },
      {
        ua: "A0001"
      }
    ],
    dpi: [
      403.4,
      401
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OnePlus/*/ONE E1001/*"
      },
      {
        ua: "ONE E1001"
      }
    ],
    dpi: [
      442.4,
      441.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OnePlus/*/ONE E1003/*"
      },
      {
        ua: "ONE E1003"
      }
    ],
    dpi: [
      442.4,
      441.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OnePlus/*/ONE E1005/*"
      },
      {
        ua: "ONE E1005"
      }
    ],
    dpi: [
      442.4,
      441.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OnePlus/*/ONE A2001/*"
      },
      {
        ua: "ONE A2001"
      }
    ],
    dpi: [
      391.9,
      405.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OnePlus/*/ONE A2003/*"
      },
      {
        ua: "ONE A2003"
      }
    ],
    dpi: [
      391.9,
      405.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OnePlus/*/ONE A2005/*"
      },
      {
        ua: "ONE A2005"
      }
    ],
    dpi: [
      391.9,
      405.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OnePlus/*/ONEPLUS A3000/*"
      },
      {
        ua: "ONEPLUS A3000"
      }
    ],
    dpi: 401,
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OnePlus/*/ONEPLUS A3003/*"
      },
      {
        ua: "ONEPLUS A3003"
      }
    ],
    dpi: 401,
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OnePlus/*/ONEPLUS A3010/*"
      },
      {
        ua: "ONEPLUS A3010"
      }
    ],
    dpi: 401,
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OnePlus/*/ONEPLUS A5000/*"
      },
      {
        ua: "ONEPLUS A5000 "
      }
    ],
    dpi: [
      403.411,
      399.737
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OnePlus/*/ONE A5010/*"
      },
      {
        ua: "ONEPLUS A5010"
      }
    ],
    dpi: [
      403,
      400
    ],
    bw: 2,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OnePlus/*/ONEPLUS A6000/*"
      },
      {
        ua: "ONEPLUS A6000"
      }
    ],
    dpi: 401,
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OnePlus/*/ONEPLUS A6003/*"
      },
      {
        ua: "ONEPLUS A6003"
      }
    ],
    dpi: 401,
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OnePlus/*/ONEPLUS A6010/*"
      },
      {
        ua: "ONEPLUS A6010"
      }
    ],
    dpi: 401,
    bw: 2,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OnePlus/*/ONEPLUS A6013/*"
      },
      {
        ua: "ONEPLUS A6013"
      }
    ],
    dpi: 401,
    bw: 2,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "OPPO/*/X909/*"
      },
      {
        ua: "X909"
      }
    ],
    dpi: [
      442.4,
      444.1
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/GT-I9082/*"
      },
      {
        ua: "GT-I9082"
      }
    ],
    dpi: [
      184.7,
      185.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G360P/*"
      },
      {
        ua: "SM-G360P"
      }
    ],
    dpi: [
      196.7,
      205.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/Nexus S/*"
      },
      {
        ua: "Nexus S"
      }
    ],
    dpi: [
      234.5,
      229.8
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/GT-I9300/*"
      },
      {
        ua: "GT-I9300"
      }
    ],
    dpi: [
      304.8,
      303.9
    ],
    bw: 5,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-T230NU/*"
      },
      {
        ua: "SM-T230NU"
      }
    ],
    dpi: 216,
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SGH-T399/*"
      },
      {
        ua: "SGH-T399"
      }
    ],
    dpi: [
      217.7,
      231.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SGH-M919/*"
      },
      {
        ua: "SGH-M919"
      }
    ],
    dpi: [
      440.8,
      437.7
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-N9005/*"
      },
      {
        ua: "SM-N9005"
      }
    ],
    dpi: [
      386.4,
      387
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SAMSUNG-SM-N900A/*"
      },
      {
        ua: "SAMSUNG-SM-N900A"
      }
    ],
    dpi: [
      386.4,
      387.7
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/GT-I9500/*"
      },
      {
        ua: "GT-I9500"
      }
    ],
    dpi: [
      442.5,
      443.3
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/GT-I9505/*"
      },
      {
        ua: "GT-I9505"
      }
    ],
    dpi: 439.4,
    bw: 4,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G900F/*"
      },
      {
        ua: "SM-G900F"
      }
    ],
    dpi: [
      415.6,
      431.6
    ],
    bw: 5,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G900M/*"
      },
      {
        ua: "SM-G900M"
      }
    ],
    dpi: [
      415.6,
      431.6
    ],
    bw: 5,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G800F/*"
      },
      {
        ua: "SM-G800F"
      }
    ],
    dpi: 326.8,
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G906S/*"
      },
      {
        ua: "SM-G906S"
      }
    ],
    dpi: [
      562.7,
      572.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/GT-I9300/*"
      },
      {
        ua: "GT-I9300"
      }
    ],
    dpi: [
      306.7,
      304.8
    ],
    bw: 5,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-T535/*"
      },
      {
        ua: "SM-T535"
      }
    ],
    dpi: [
      142.6,
      136.4
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-N920C/*"
      },
      {
        ua: "SM-N920C"
      }
    ],
    dpi: [
      515.1,
      518.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-N920P/*"
      },
      {
        ua: "SM-N920P"
      }
    ],
    dpi: [
      386.3655,
      390.144
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-N920W8/*"
      },
      {
        ua: "SM-N920W8"
      }
    ],
    dpi: [
      515.1,
      518.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/GT-I9300I/*"
      },
      {
        ua: "GT-I9300I"
      }
    ],
    dpi: [
      304.8,
      305.8
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/GT-I9195/*"
      },
      {
        ua: "GT-I9195"
      }
    ],
    dpi: [
      249.4,
      256.7
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SPH-L520/*"
      },
      {
        ua: "SPH-L520"
      }
    ],
    dpi: [
      249.4,
      255.9
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SAMSUNG-SGH-I717/*"
      },
      {
        ua: "SAMSUNG-SGH-I717"
      }
    ],
    dpi: 285.8,
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SPH-D710/*"
      },
      {
        ua: "SPH-D710"
      }
    ],
    dpi: [
      217.7,
      204.2
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/GT-N7100/*"
      },
      {
        ua: "GT-N7100"
      }
    ],
    dpi: 265.1,
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SCH-I605/*"
      },
      {
        ua: "SCH-I605"
      }
    ],
    dpi: 265.1,
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/Galaxy Nexus/*"
      },
      {
        ua: "Galaxy Nexus"
      }
    ],
    dpi: [
      315.3,
      314.2
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-N910H/*"
      },
      {
        ua: "SM-N910H"
      }
    ],
    dpi: [
      515.1,
      518
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-N910C/*"
      },
      {
        ua: "SM-N910C"
      }
    ],
    dpi: [
      515.2,
      520.2
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G130M/*"
      },
      {
        ua: "SM-G130M"
      }
    ],
    dpi: [
      165.9,
      164.8
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G928I/*"
      },
      {
        ua: "SM-G928I"
      }
    ],
    dpi: [
      515.1,
      518.4
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G920F/*"
      },
      {
        ua: "SM-G920F"
      }
    ],
    dpi: 580.6,
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G920P/*"
      },
      {
        ua: "SM-G920P"
      }
    ],
    dpi: [
      522.5,
      577
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G925F/*"
      },
      {
        ua: "SM-G925F"
      }
    ],
    dpi: 580.6,
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G925V/*"
      },
      {
        ua: "SM-G925V"
      }
    ],
    dpi: [
      522.5,
      576.6
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G930F/*"
      },
      {
        ua: "SM-G930F"
      }
    ],
    dpi: 576.6,
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G935F/*"
      },
      {
        ua: "SM-G935F"
      }
    ],
    dpi: 533,
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G950F/*"
      },
      {
        ua: "SM-G950F"
      }
    ],
    dpi: [
      562.707,
      565.293
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G955U/*"
      },
      {
        ua: "SM-G955U"
      }
    ],
    dpi: [
      522.514,
      525.762
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G955F/*"
      },
      {
        ua: "SM-G955F"
      }
    ],
    dpi: [
      522.514,
      525.762
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G960F/*"
      },
      {
        ua: "SM-G960F"
      }
    ],
    dpi: [
      569.575,
      571.5
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G9600/*"
      },
      {
        ua: "SM-G9600"
      }
    ],
    dpi: [
      569.575,
      571.5
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G960T/*"
      },
      {
        ua: "SM-G960T"
      }
    ],
    dpi: [
      569.575,
      571.5
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G960N/*"
      },
      {
        ua: "SM-G960N"
      }
    ],
    dpi: [
      569.575,
      571.5
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G960U/*"
      },
      {
        ua: "SM-G960U"
      }
    ],
    dpi: [
      569.575,
      571.5
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G9608/*"
      },
      {
        ua: "SM-G9608"
      }
    ],
    dpi: [
      569.575,
      571.5
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G960FD/*"
      },
      {
        ua: "SM-G960FD"
      }
    ],
    dpi: [
      569.575,
      571.5
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G960W/*"
      },
      {
        ua: "SM-G960W"
      }
    ],
    dpi: [
      569.575,
      571.5
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G965F/*"
      },
      {
        ua: "SM-G965F"
      }
    ],
    dpi: 529,
    bw: 2,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Sony/*/C6903/*"
      },
      {
        ua: "C6903"
      }
    ],
    dpi: [
      442.5,
      443.3
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Sony/*/D6653/*"
      },
      {
        ua: "D6653"
      }
    ],
    dpi: [
      428.6,
      427.6
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Sony/*/E6653/*"
      },
      {
        ua: "E6653"
      }
    ],
    dpi: [
      428.6,
      425.7
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Sony/*/E6853/*"
      },
      {
        ua: "E6853"
      }
    ],
    dpi: [
      403.4,
      401.9
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Sony/*/SGP321/*"
      },
      {
        ua: "SGP321"
      }
    ],
    dpi: [
      224.7,
      224.1
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "TCT/*/ALCATEL ONE TOUCH Fierce/*"
      },
      {
        ua: "ALCATEL ONE TOUCH Fierce"
      }
    ],
    dpi: [
      240,
      247.5
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "THL/*/thl 5000/*"
      },
      {
        ua: "thl 5000"
      }
    ],
    dpi: [
      480,
      443.3
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Fly/*/IQ4412/*"
      },
      {
        ua: "IQ4412"
      }
    ],
    dpi: 307.9,
    bw: 3,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "ZTE/*/ZTE Blade L2/*"
      },
      {
        ua: "ZTE Blade L2"
      }
    ],
    dpi: 240,
    bw: 3,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "BENEVE/*/VR518/*"
      },
      {
        ua: "VR518"
      }
    ],
    dpi: 480,
    bw: 3,
    ac: 500
  },
  {
    type: "ios",
    rules: [
      {
        res: [
          640,
          960
        ]
      }
    ],
    dpi: [
      325.1,
      328.4
    ],
    bw: 4,
    ac: 1000
  },
  {
    type: "ios",
    rules: [
      {
        res: [
          640,
          1136
        ]
      }
    ],
    dpi: [
      317.1,
      320.2
    ],
    bw: 3,
    ac: 1000
  },
  {
    type: "ios",
    rules: [
      {
        res: [
          750,
          1334
        ]
      }
    ],
    dpi: 326.4,
    bw: 4,
    ac: 1000
  },
  {
    type: "ios",
    rules: [
      {
        res: [
          1242,
          2208
        ]
      }
    ],
    dpi: [
      453.6,
      458.4
    ],
    bw: 4,
    ac: 1000
  },
  {
    type: "ios",
    rules: [
      {
        res: [
          1125,
          2001
        ]
      }
    ],
    dpi: [
      410.9,
      415.4
    ],
    bw: 4,
    ac: 1000
  },
  {
    type: "ios",
    rules: [
      {
        res: [
          1125,
          2436
        ]
      }
    ],
    dpi: 458,
    bw: 4,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Huawei/*/EML-L29/*"
      },
      {
        ua: "EML-L29"
      }
    ],
    dpi: 428,
    bw: 3.45,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "Nokia/*/Nokia 7.1/*"
      },
      {
        ua: "Nokia 7.1"
      }
    ],
    dpi: [
      432,
      431.9
    ],
    bw: 3,
    ac: 500
  },
  {
    type: "ios",
    rules: [
      {
        res: [
          1242,
          2688
        ]
      }
    ],
    dpi: 458,
    bw: 4,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G570M/*"
      },
      {
        ua: "SM-G570M"
      }
    ],
    dpi: 320,
    bw: 3.684,
    ac: 1000
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G970F/*"
      },
      {
        ua: "SM-G970F"
      }
    ],
    dpi: 438,
    bw: 2.281,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G973F/*"
      },
      {
        ua: "SM-G973F"
      }
    ],
    dpi: 550,
    bw: 2.002,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G975F/*"
      },
      {
        ua: "SM-G975F"
      }
    ],
    dpi: 522,
    bw: 2.054,
    ac: 500
  },
  {
    type: "android",
    rules: [
      {
        mdmh: "samsung/*/SM-G977F/*"
      },
      {
        ua: "SM-G977F"
      }
    ],
    dpi: 505,
    bw: 2.334,
    ac: 500
  },
  {
    type: "ios",
    rules: [
      {
        res: [
          828,
          1792
        ]
      }
    ],
    dpi: 326,
    bw: 5,
    ac: 500
  }
];
const DPDB_CACHE = {
  format: 1,
  last_updated: "2019-11-09T17:36:14Z",
  devices
};
export {DPDB_CACHE};
