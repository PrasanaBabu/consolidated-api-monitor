export const rtoCollection = {
    "info": {
        "_postman_id": "9720e6b8-214b-49da-a834-7085887020e5",
        "name": "RTO collection",
        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    "item": [
        {
            "name": "Mach-E Copy",
            "item": [
                {
                    "name": "RTO / Skinny Lowest among default",
                    "request": {
                        "method": "POST",
                        "header": [],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n    \"geoInfo\": {\r\n        \"country\": \"US\",\r\n        \"stateProvinceCode\": \"MI\",\r\n        \"zipPostalCode\": \"48120\"\r\n    },\r\n    \"vehicle\": {\r\n        \"vehicleId\": \"VS-KX,DR--B_EN-C1_HTHAE_TR-WA\",\r\n        \"catalog\": {\r\n            \"make\": \"Ford\",\r\n            \"model\": \"Mustang Mach-E\",\r\n            \"year\": \"2022\",\r\n            \"seriesWers\": \"VS-KX\",\r\n            \"seriesDescription\": \"Select\",\r\n            \"powerTrainWers\": \"DR--B_EN-C1_HTHAE_TR-WA\",\r\n            \"powerTrainDescription\": \"Standard Range Battery - RWD\",\r\n            \"catalogId\": \"WANAB-CGW-2023-CX727\",\r\n            \"fuelWers\": \"GBVAR\",\r\n            \"fuelDescription\": null,\r\n            \"vehicleLine\": null,\r\n            \"bodyStyleWers\": \"BS-SA\",\r\n            \"engineWers\": \"EN-C1\",\r\n            \"transmissionWers\": \"TR-WA\",\r\n            \"driveWers\": \"DR--B\",\r\n            \"electricVehicleBatteryWers\": \"HTHAE\",\r\n            \"tpoWers\": \"YZBAB\"\r\n\r\n        },\r\n        \"price\": {\r\n            \"sellingPrice\": 44995.0,\r\n            \"msrp\": 44995.0,\r\n            \"dealerDeposit\": null,\r\n            \"orderDeposit\": null,\r\n            \"reservationDeposit\": null,\r\n            \"planType\": \"MSRP\"\r\n        },\r\n        \"options\": \"YZVSU\"\r\n    },\r\n    \"customer\": null,\r\n    \"financial\": {\r\n        \"deposit\": 4499.5,\r\n        \"incentives\": [\r\n            {\r\n                \"apr\": \"5.490\",\r\n                \"amount\": null,\r\n                \"planCode\": 1,\r\n                \"term\": 72\r\n            },\r\n            {\r\n                \"apr\": \"2.490\",\r\n                \"amount\": 1500.0,\r\n                \"planCode\": 5,\r\n                \"term\": 36\r\n            },\r\n            {\r\n                \"apr\": \"0\",\r\n                \"amount\": 0.0,\r\n                \"planCode\": 2,\r\n                \"term\": 36\r\n            },\r\n            {\r\n                \"apr\": \"3.490\",\r\n                \"amount\": 0.0,\r\n                \"planCode\":6,\r\n                \"term\": 75\r\n            }\r\n        ]\r\n    }\r\n}\r\n",
                            "options": {
                                "raw": {
                                    "language": "json"
                                }
                            }
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v2/default-finance-quote",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v2",
                                "default-finance-quote"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "RTO Non Defaut Finance",
                    "request": {
                        "method": "POST",
                        "header": [
                            {
                                "key": "Content-Type",
                                "name": "Content-Type",
                                "value": "application/json",
                                "type": "text"
                            },
                            {
                                "key": "Authorization",
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3QJkh0j2moDtf2__SaZB4P0Vv3rSNXLSPTehlesABnmEEDNRbRju9LSSNZzbdKEEXA81kEjDbEq12C-ZJUkXrlv87EFwQ0gUE80anHrsDutQ1TmakDOG9ooxPD4UH0Csj",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"geoInfo\": {\n        \"country\": \"US\",\n        \"stateProvinceCode\": \"MI\",\n        \"zipPostalCode\": \"48185\"\n    },\n    \"vehicle\": {\n        \"vehicleId\": \"VS-KX,DR--B_EN-C1_HTHAE_TR-WA\",\n        \"catalog\": {\n            \"make\": \"Ford\",\n            \"model\": \"Mustang Mach-E\",\n            \"year\": \"2022\",\n            \"seriesWers\": \"VS-KX\",\n            \"seriesDescription\": \"Select\",\n            \"powerTrainWers\": \"DR--B_EN-C1_HTHAE_TR-WA\",\n            \"powerTrainDescription\": \"Standard Range Battery - RWD\",\n            \"catalogId\": \"WANAB-CGW-2023-CX727\",\n            \"fuelWers\": \"GBVAR\",\n            \"fuelDescription\": null,\n            \"vehicleLine\": null,\n            \"bodyStyleWers\": \"BS-SA\",\n            \"engineWers\": \"EN-C1\",\n            \"transmissionWers\": \"TR-WA\",\n            \"driveWers\": \"DR--B\",\n            \"electricVehicleBatteryWers\": \"HTHAE\",\n            \"tpoWers\": \"YZBAB\"\n        },\n\n        \n        \"price\": {\n            \"sellingPrice\": 65100,\n            \"msrp\": 54100,\n            \"dealerDeposit\": 200,\n            \"orderDeposit\":200,\n            \"reservationDeposit\":100,\n            \"planType\": \"MSRP\",\n            \"listPrice\": null,\n            \"sellingWithoutVat\": null,\n            \"listWithoutVat\": null,\n            \"finalPrice\": null,\n            \"optionPrice\": 0.0,\n            \"itemizedFees\": null\n\n        }\n    },\n    \"financial\": {\n        \"financePlan\": 1,\n        \"term\": 48,\n        \"milesOrKmPerAnnum\": 15000,\n        \"usersRate\": null,\n        \"customerSaving\": 0.0,\n        \"govtDiscount\": 0.0,\n        \"deposit\": 48000,\n        \"incentives\": [\n            {\n                \"apr\":4,\n                \"amount\": 100\n            }\n        ]\n    }\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v2/finance-quote",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v2",
                                "finance-quote"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "RTO Non Defaut Lease",
                    "request": {
                        "method": "POST",
                        "header": [
                            {
                                "key": "Content-Type",
                                "name": "Content-Type",
                                "value": "application/json",
                                "type": "text"
                            },
                            {
                                "key": "Authorization",
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3QJkh0j2moDtf2__SaZB4P0Vv3rSNXLSPTehlesABnmEEDNRbRju9LSSNZzbdKEEXA81kEjDbEq12C-ZJUkXrlv87EFwQ0gUE80anHrsDutQ1TmakDOG9ooxPD4UH0Csj",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"geoInfo\": {\n        \"country\": \"US\",\n        \"stateProvinceCode\": \"MI\",\n        \"zipPostalCode\": \"48185\"\n    },\n    \"vehicle\": {\n        \"vehicleId\": \"VS-KX,DR--B_EN-C1_HTHAE_TR-WA\",\n        \"options\":\"000SJ,3ES00,3ESSJ,A1PBN,A2WBD,A6ZAB,A7FAL,AACVB,AAZDZ,AB5AA,ABFAA,ABJAA,AC--G,ACMRA,ACYAC,AD8AA,ADQAB,AIJAB,B2GAE,B3MAC,BAYAB,BBHAB,BMLAN,BS-SA,BSHEU,BSLAC,BY1AL,BY2AL,BYPAK,BYQAE,CBSAE,CHAAA,CJDAA,CJTAA,CLVAB,CN7AH,CPCAV,CPNAB,D2UL9,D3HEZ,DEEAD,DGACA,DR--F,DWAAF,DWBAA,DWMAA,EGAZZ,EN-C2,FBBAQ,FS--B,GBVAR,GCEAB,GTAEF,GTBAB,GTCAA,GTDAW,HCAAV,HKCAB,HKLAG,HNDAF,HNKAB,HNSAC,HT2AD,HTHAE,HTSAD,ICDAV,ICEHE,ICFAH,ICHAA,IDBAD,IEPAN,IEVAQ,IEXAB,J3KAB,J3QAD,J5XAB,JBBAE,JBCAL,JCBAA,JDAAQ,JZCAD,MD--N,PN4JA,TR-WA,VS-KX,WANAB,YZBAB,YZKAA,YZPAC,YZVYY\",\n        \"catalog\": {\n            \"make\": \"Ford\",\n            \"model\": \"Mustang Mach-E\",\n            \"year\": \"2022\",\n            \"seriesWers\": \"VS-KX\",\n            \"seriesDescription\": \"Select\",\n            \"powerTrainWers\": \"DR--B_EN-C1_HTHAE_TR-WA\",\n            \"powerTrainDescription\": \"Standard Range Battery - RWD\",\n            \"catalogId\": \"WANAB-CGW-2023-CX727\",\n            \"fuelWers\": \"GBVAR\",\n            \"fuelDescription\": null,\n            \"vehicleLine\": null,\n            \"bodyStyleWers\": \"BS-SA\",\n            \"engineWers\": \"EN-C1\",\n            \"transmissionWers\": \"TR-WA\",\n            \"driveWers\": \"DR--B\",\n            \"electricVehicleBatteryWers\": \"HTHAE\",\n            \"tpoWers\": \"YZBAB\"\n        },\n        \n        \"price\": {\n            \"sellingPrice\": 51400,\n            \"msrp\": 51400,\n            \"dealerDeposit\": null,\n            \"orderDeposit\":0,\n            \"reservationDeposit\":0,\n            \"planType\": \"MSRP\",\n            \"listPrice\": null,\n            \"sellingWithoutVat\": null,\n            \"listWithoutVat\": null,\n            \"finalPrice\": null,\n            \"optionPrice\": 0.0,\n            \"itemizedFees\": null\n\n        }\n    },\n    \"financial\": {\n        \"financePlan\": 2,\n        \"term\": 36,\n        \"milesOrKmPerAnnum\": 7500,\n        \"deposit\": 5030,\n        \"customerSaving\": 0.0,\n        \"govtDiscount\": 0.0,\n        \"incentives\": [\n            {\n                \"apr\": 3.9,\n                \"amount\": 1000\n            }\n        ]\n    }\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v2/finance-quote",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v2",
                                "finance-quote"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "RTO Non Defaut Options",
                    "request": {
                        "method": "POST",
                        "header": [
                            {
                                "key": "Content-Type",
                                "name": "Content-Type",
                                "value": "application/json",
                                "type": "text"
                            },
                            {
                                "key": "Authorization",
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3QJkh0j2moDtf2__SaZB4P0Vv3rSNXLSPTehlesABnmEEDNRbRju9LSSNZzbdKEEXA81kEjDbEq12C-ZJUkXrlv87EFwQ0gUE80anHrsDutQ1TmakDOG9ooxPD4UH0Csj",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"geoInfo\": {\n        \"country\": \"US\",\n        \"stateProvinceCode\": \"MI\",\n        \"zipPostalCode\": \"48120\"\n    },\n    \"vehicle\": {\n        \"vehicleId\": \"VS-KX,DR--B_EN-C1_HTHAE_TR-WA\",\n        \"catalog\": {\n            \"make\": \"Ford\",\n            \"model\": \"Mustang Mach-E\",\n            \"year\": \"2022\",\n            \"seriesWers\": \"VS-KX\",\n            \"seriesDescription\": \"Select\",\n            \"powerTrainWers\": \"DR--B_EN-C1_HTHAE_TR-WA\",\n            \"powerTrainDescription\": \"Standard Range Battery - RWD\",\n            \"catalogId\": \"WANAB-CGW-2023-CX727\",\n            \"fuelWers\": \"GBVAR\",\n            \"fuelDescription\": null,\n            \"vehicleLine\": null,\n            \"bodyStyleWers\": \"BS-SA\",\n            \"engineWers\": \"EN-C1\",\n            \"transmissionWers\": \"TR-WA\",\n            \"driveWers\": \"DR--B\",\n            \"electricVehicleBatteryWers\": \"HTHAE\",\n            \"tpoWers\": \"YZBAB\"\n        },\n        \"price\": {\n            \"sellingPrice\": 48195.0,\n            \"msrp\": 48195.0,\n            \"dealerDeposit\": null,\n            \"orderDeposit\": null,\n            \"reservationDeposit\": null,\n            \"planType\": \"MSRP\",\n            \"deposit\": 4690.0,\n            \"listPrice\": null,\n            \"sellingWithoutVat\": null,\n            \"listWithoutVat\": null,\n            \"finalPrice\": null,\n            \"optionPrice\": 0.0,\n            \"itemizedFees\": null\n        },\n        \"options\": \"HTSAD,HCAAV,JDAAQ,JADAC,IEVAQ,DEEAD,IEXAB,AIJAA,CLVAA,IEPAN,YELAA,ZJ2AA,YESAA,YE5AA,YDVAA,YA2AA,YRFAA,YBVAA,YEYAA,YRHAA,YBZAA,YBYAA,YRLAA,YQNAA,ZJMAA,YDIAA,HCAAV,JDAAQ,JADAC,IEVAQ,JCMAB,D2UL9,FBFAC,DEEAD,J3QAD,HTHAE,IEXAB,IEPAN\",\n        \"vehicleType\": \"pv\"\n    },\n    \"customer\": null,\n    \"financial\": {\n        \"financePlan\": \"5\",\n        \"term\": 36,\n        \"deposit\": 4690.0,\n        \"customerSaving\": 0.0,\n        \"govtDiscount\": 0.0,\n        \"milesOrKmPerAnnum\": 10500,\n        \"incentives\": [\n            {\n                \"apr\": null,\n                \"amount\": null,\n                \"type\": null,\n                \"planCode\": null,\n                \"term\": null\n            }\n        ]\n    },\n    \"tradeInVehicle\": {\n        \"tradeAllowance\": 0.0\n    }\n}\n"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v2/finance-quote",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v2",
                                "finance-quote"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "RTO Non Defaut Cash",
                    "request": {
                        "method": "POST",
                        "header": [
                            {
                                "key": "Content-Type",
                                "name": "Content-Type",
                                "value": "application/json",
                                "type": "text"
                            },
                            {
                                "key": "Authorization",
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3QJkh0j2moDtf2__SaZB4P0Vv3rSNXLSPTehlesABnmEEDNRbRju9LSSNZzbdKEEXA81kEjDbEq12C-ZJUkXrlv87EFwQ0gUE80anHrsDutQ1TmakDOG9ooxPD4UH0Csj",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"geoInfo\": {\n        \"country\": \"US\",\n        \"stateProvinceCode\": \"MI\",\n        \"zipPostalCode\": \"48185\"\n    },\n    \"vehicle\": {\n        \"vehicleId\": \"ACMRJ_VS-LE,DR--F_EN-C2_HTHAE_TR-WA\",\n        \"options\":\"\",\n        \"catalog\": {\n            \"make\": \"Ford\",\n            \"model\": \"Mustang Mach-E\",\n            \"year\": \"2022\",\n            \"seriesWers\": \"ACMRJ_VS-LE\",\n            \"seriesDescription\": \"Premium\",\n            \"powerTrainWers\": \"DR--F_EN-C2_HTHAE_TR-WA\",\n            \"powerTrainDescription\": \"Standard Range Battery - eAWD\",\n            \"catalogId\": \"WANAB-CGW-2023-CX727\",\n            \"fuelWers\": \"GBVAR\",\n            \"fuelDescription\": null,\n            \"vehicleLine\": null,\n            \"bodyStyleWers\": \"BS-SA\",\n            \"engineWers\": \"EN-C1\",\n            \"transmissionWers\": \"TR-WA\",\n            \"driveWers\": \"DR--B\",\n            \"electricVehicleBatteryWers\": \"HTHAE\",\n            \"tpoWers\": \"YZBAB\"\n            \n        },\n         \"price\": {\n            \"sellingPrice\": 65100,\n            \"msrp\": 54100,\n            \"dealerDeposit\": 200,\n            \"orderDeposit\":200,\n            \"reservationDeposit\":100,\n            \"planType\": \"MSRP\",\n            \"listPrice\": null,\n            \"sellingWithoutVat\": null,\n            \"listWithoutVat\": null,\n            \"finalPrice\": null,\n            \"optionPrice\": 0.0,\n            \"itemizedFees\": null\n\n        }\n    },\n    \"financial\": {\n        \"financePlan\": 9,\n        \"customerSaving\": 0.0,\n        \"govtDiscount\": 0.0,\n        \"incentives\": [\n            {\n                \"amount\": 0\n            }\n        ]\n    }\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v2/finance-quote",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v2",
                                "finance-quote"
                            ]
                        }
                    },
                    "response": []
                }
            ]
        }
    ]
}
