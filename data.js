var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08418259541656781,
          "pitch": -0.037598410530844006,
          "rotation": 0,
          "target": "1-comedor"
        },
        {
          "yaw": -1.4963514352343772,
          "pitch": -0.07061361883340211,
          "rotation": 0,
          "target": "10-bao-pb"
        },
        {
          "yaw": -1.1385186451399107,
          "pitch": -0.3753722368695076,
          "rotation": 0,
          "target": "12-repartidor-pa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.887788101328308,
          "pitch": 0.010189676068087294,
          "title": "Entrada",
          "text": "Me falto la foto de la entrada"
        }
      ]
    },
    {
      "id": "1-comedor",
      "name": "Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7159340354604566,
          "pitch": 0.11679895622437542,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": -1.6259115880101191,
          "pitch": 0.056528518012411766,
          "rotation": 0,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.920298899931641,
          "pitch": 0.17598103482024996,
          "rotation": 0,
          "target": "1-comedor"
        },
        {
          "yaw": 0.313079081219211,
          "pitch": 0.0531987514899015,
          "rotation": 0,
          "target": "3-lavadero"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7791471617981198,
          "pitch": 0.07810236179468077,
          "title": "Entrada",
          "text": "Me falta la primera foto de la entrada"
        }
      ]
    },
    {
      "id": "3-lavadero",
      "name": "Lavadero",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5265037090911733,
          "pitch": 0.2797564830741557,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": -1.9212017881043906,
          "pitch": 0.17049487999486956,
          "rotation": 0,
          "target": "4-quincho"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-quincho",
      "name": "Quincho",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.074710964308938,
          "pitch": -0.0023597007712403695,
          "rotation": 0,
          "target": "3-lavadero"
        },
        {
          "yaw": 1.5131640241620055,
          "pitch": 0.1283374195655309,
          "rotation": 0,
          "target": "7-jardin"
        },
        {
          "yaw": -2.2940091454968954,
          "pitch": 0.0065978124949843675,
          "rotation": 0,
          "target": "5-quincho-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-quincho-2",
      "name": "Quincho 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.558141004579559,
          "pitch": 0.09758824739710192,
          "rotation": 0,
          "target": "6-bao-quincho"
        },
        {
          "yaw": 2.462495525888314,
          "pitch": 0.03334531207723934,
          "rotation": 0,
          "target": "4-quincho"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bao-quincho",
      "name": "Baño Quincho",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4433776051781466,
          "pitch": 0.14330696372124407,
          "rotation": 0,
          "target": "5-quincho-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-jardin",
      "name": "Jardin",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6181574815326663,
          "pitch": -0.011347456813730616,
          "rotation": 0,
          "target": "8-jardin-2"
        },
        {
          "yaw": 2.2828353009782845,
          "pitch": 0.0692634309863962,
          "rotation": 0,
          "target": "4-quincho"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-jardin-2",
      "name": "Jardin 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6099433789309519,
          "pitch": 0.08310839134662729,
          "rotation": 0,
          "target": "7-jardin"
        },
        {
          "yaw": -3.0311299609883307,
          "pitch": 0.06906742320938086,
          "rotation": 0,
          "target": "9-taller"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-taller",
      "name": "Taller",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2487271618222398,
          "pitch": 0.20643151160398787,
          "rotation": 0,
          "target": "8-jardin-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bao-pb",
      "name": "Baño pb",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2230624087521758,
          "pitch": 0.01490870594053817,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": 1.796288821356204,
          "pitch": -0.031463212187947676,
          "rotation": 0,
          "target": "4-quincho"
        },
        {
          "yaw": 1.05596269950534,
          "pitch": 0.08842320586884433,
          "rotation": 0,
          "target": "11-cuarto-pb"
        },
        {
          "yaw": -2.732354555879269,
          "pitch": -0.21388176749865195,
          "rotation": 0,
          "target": "12-repartidor-pa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.6257630728419237,
          "pitch": 0.5233802752957057,
          "title": "Entrada",
          "text": "Falto la foto"
        }
      ]
    },
    {
      "id": "11-cuarto-pb",
      "name": "Cuarto Pb",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.791433083269416,
          "pitch": 0.06141269280934658,
          "rotation": 0,
          "target": "10-bao-pb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-repartidor-pa",
      "name": "Repartidor Pa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0162163724554816,
          "pitch": 0.6205265277093552,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": -0.05911897181140091,
          "pitch": 0.08246311057241051,
          "rotation": 0,
          "target": "13-cuarto-principal"
        },
        {
          "yaw": -0.9018178038649047,
          "pitch": 0.1018889028182528,
          "rotation": 0,
          "target": "14-cuarto-2"
        },
        {
          "yaw": -2.828855685181825,
          "pitch": 0.01563141996444628,
          "rotation": 0,
          "target": "15-cuarto-3"
        },
        {
          "yaw": -1.932027548672469,
          "pitch": 0.1047109849477117,
          "rotation": 0,
          "target": "16-bao-pa"
        },
        {
          "yaw": 1.4376731661318658,
          "pitch": -0.02887708065831518,
          "rotation": 0,
          "target": "17-altillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-cuarto-principal",
      "name": "Cuarto Principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9198744488447232,
          "pitch": -0.001029101715822378,
          "rotation": 0,
          "target": "12-repartidor-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-cuarto-2",
      "name": "Cuarto 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.898427686192039,
          "pitch": 0.1058752010640358,
          "rotation": 0,
          "target": "12-repartidor-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-cuarto-3",
      "name": "Cuarto 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.912386840071319,
          "pitch": 0.1092820183495391,
          "rotation": 0,
          "target": "12-repartidor-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bao-pa",
      "name": "Baño Pa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.891961195746406,
          "pitch": 0.11715870715354448,
          "rotation": 0,
          "target": "12-repartidor-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-altillo",
      "name": "Altillo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.83953144674299,
          "pitch": 0.2406497949262718,
          "rotation": 0,
          "target": "12-repartidor-pa"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Casa Inclinada",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
