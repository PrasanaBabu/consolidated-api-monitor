export const cartCollection = {
    "info": {
        "_postman_id": "dde27ed7-f8ef-4583-aafa-3b75c6dc201a",
        "name": "Cart Collection",
        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    "item": [
        {
            "name": "Mache Copy",
            "item": [
                {
                    "name": "Cart Finance True",
                    "request": {
                        "method": "POST",
                        "header": [],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n    \"geoInfo\": {\r\n        \"country\": \"us\",\r\n        \"stateProvinceCode\": \"MA\",\r\n        \"zipPostalCode\": \"01108\",\r\n        \"marketArea\": \"Great Lakes Market Area\",\r\n        \"regionCode\": \"48\",\r\n        \"r1DealerId\": \"QE9HU\",\r\n        \"dealerPaCode\": \"03003\"\r\n    },\r\n    \"vehicle\": {\r\n        \"vehicleId\": \"A9CBK_AA5H5_AAAFC_CA#BC_DR--E_SE#JV_YZBAD\",\r\n        \"options\": \"\",\r\n        \"catalog\": {\r\n            \"make\": \"ford\",\r\n            \"model\": \"Mustang Mach-E\",\r\n            \"year\": \"2021\",\r\n            \"seriesWers\": \"ACMRA_VS-KX\",\r\n            \"seriesDescription\": \"SELECT\",\r\n            \"powerTrainWers\": \"DR--F_EN-C2_HTHAE_TR-WA\",\r\n            \"powerTrainDescription\": \"Standard Range Battery - eAWD\",\r\n            \"fuelType\": null\r\n        },\r\n        \"vin\": \"3FMTK1SS9MMA41043\",\r\n        \"tradeInVehicle\": {\r\n            \"tradeAllowance\": 0.0,\r\n            \"tradePayoff\": 0.0,\r\n            \"vehicleType\": \"PV\"\r\n        },\r\n        \"price\": {\r\n            \"sellingPrice\": 50785.0,\r\n            \"msrp\": 49535.0,\r\n            \"dealerDeposit\": 0.0,\r\n            \"orderDeposit\": 0.0,\r\n            \"reservationDeposit\": 0.0,\r\n            \"planType\": \"MSRP\",\r\n            \"category\": 0\r\n        },\r\n        \"dealerAddOns\": [],\r\n        \"charging\": [],\r\n        \"aftermarket\": {\r\n            \"warranties\": [],\r\n            \"insurancePackages\": [],\r\n            \"theftProtection\": [],\r\n            \"protectionPackages\": []\r\n        },\r\n        \"countryCode\": null,\r\n        \"entityCode\": null,\r\n        \"languageCode\": null,\r\n        \"activeIndicator\": null,\r\n        \"vehModelDesc\": null,\r\n        \"newUsedIndicator\": null,\r\n        \"planCd\": null,\r\n        \"vehMakeName\": null,\r\n        \"vehUsgType\": null,\r\n        \"sliceName\": null\r\n    },\r\n    \"customer\": null,\r\n    \"financial\": {\r\n        \"financePlan\":1,\r\n        \"term\": 36,\r\n        \"milesOrKmPerAnnum\": 10500,\r\n        \"usersRate\": null,\r\n        \"deposit\": 5078.5,\r\n        \"acquisitionFee\": 0.0,\r\n        \"rate\": {\r\n            \"total\": 0.0,\r\n            \"apr\": 0.0,\r\n            \"markUp\": 0.0,\r\n            \"type\": null\r\n        },\r\n        \"incentives\": [\r\n            {\r\n                \"type\": \"SUBVENED\",\r\n                \"amount\": 3000.0,\r\n                \"apr\": 2.25\r\n            },\r\n            {\r\n                \"type\": \"STANDARD\",\r\n                \"amount\": 3000.0\r\n            }\r\n        ],\r\n        \"includeMultiplePayments\": true,\r\n        \"defaultResidualPc\": -1.0,\r\n        \"tier\": 0\r\n    },\r\n    \"add-ons\": null\r\n}",
                            "options": {
                                "raw": {
                                    "language": "json"
                                }
                            }
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v3/finance-quotes",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v3",
                                "finance-quotes"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Cart Finance False",
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
                            "raw": "{\n    \"geoInfo\": {\n        \"country\": \"US\",\n        \"stateProvinceCode\": \"OH\",\n        \"zipPostalCode\": \"45245-2118\",\n        \"marketArea\": \"West Market Area\",\n        \"regionCode\": \"74\",\n        \"r1DealerId\": \"AS5ZN\",\n        \"dealerPaCode\": \"08621\"\n    },\n    \"vehicle\": {\n        \"vehicleId\": \"ACMRA_BS-SA_EN-C1_TR-WA_VS-KZ\",\n        \"catalog\": {\n            \"make\": \"Ford\",\n            \"model\": \"Mustang Mach-E\",\n            \"year\": \"2020\",\n            \"seriesWers\": \"ACMRA_VS-KX\",\n            \"seriesDescription\": \"Select\",\n            \"powerTrainWers\": \"DR--B_EN-C1_HTHAE_TR-WA\",\n            \"powerTrainDescription\": \"Standard Range Battery - RWD\"\n        },\n        \"vin\": \"3FMTK3SU6MMA01922\",\n        \"tradeInVehicle\": {\n            \"tradeAllowance\": 4000,\n            \"tradePayoff\": 3500,\n            \"vehicleType\": \"PV\"\n        },\n        \"price\": {\n            \"sellingPrice\": 50000,\n            \"msrp\": 50000,\n            \"dealerDeposit\": 500,\n            \"orderDeposit\":500,\n            \"reservationDeposit\":100,\n            \"planType\": \"MSRP\",\n            \"category\": null\n        },\n        \"dealerAddOns\": [\n            {\n                \"salePrice\": 0.0,\n                \"msrp\": 0.0,\n                \"name\": \"Cargo Area Protector - 4-Door\",\n                \"partNumber\": \"BE8Z-6111600-AA\",\n                \"residualCode\": null\n            },\n            {\n                \"salePrice\":0.0,\n                \"msrp\": 0.0,\n                \"name\": \"Moon Roof\",\n                \"partNumber\": null,\n                \"residualCode\": \"MR\"\n            }\n        ],\n        \"charging\": [\n            {\n                \"salePrice\": 0,\n                \"name\": \"Ford Connected Charge Station\"\n            }\n        ],\n        \"aftermarket\": {\n            \"warranties\": [\n                {\n                    \"salePrice\": 0,\n                    \"name\": \"Prepaid Maintenance\"\n                }\n            ],\n            \"insurancePackages\": [\n                {\n                    \"salePrice\": 0,\n                    \"name\": \"Ford GAP\"\n                }\n            ],\n            \"theftProtection\": [\n                {\n                    \"salePrice\": 0,\n                    \"name\": \"Etch\"\n                }\n            ],\n            \"protectionPackages\": [\n                {\n                    \"salePrice\": 0,\n                    \"name\": \"Dent and Ding\"\n                }\n            ]\n        }\n    },\n    \"financial\": {\n        \"financePlan\": 1,\n        \"term\": 72,\n        \"milesOrKmPerAnnum\": null,\n        \"includeMultiplePayments\": false,\n        \"rate\": {\n            \"total\": 6.22,\n            \"apr\": 5.22,\n            \"markUp\": 1.00,\n            \"type\": \"STANDARD\"\n        },\n        \"deposit\":5000,\n        \"incentives\": [\n            {\n                \"amount\": null\n            }\n        ]\n    }\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v3/finance-quotes",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v3",
                                "finance-quotes"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Cart Lease True",
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
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3w6jJmiN7m0C218Wbiq16tqZsHq8ho6LR5KcIpr2G0L3xbAX5h1P2XLYMNgJp5ejBpNM_TM-kNxspag60EG9XWkLrJgffGjZN8Te6dXTCTncFzvIetnRx2bB4KMgiqFq0",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n    \"geoInfo\": {\r\n        \"country\": \"us\",\r\n        \"stateProvinceCode\": \"MA\",\r\n        \"zipPostalCode\": \"01108\",\r\n        \"marketArea\": \"Great Lakes Market Area\",\r\n        \"regionCode\": \"48\",\r\n        \"r1DealerId\": \"QE9HU\",\r\n        \"dealerPaCode\": \"03003\"\r\n    },\r\n    \"vehicle\": {\r\n        \"vehicleId\": \"A9CBK_AA5H5_AAAFC_CA#BC_DR--E_SE#JV_YZBAD\",\r\n        \"options\": \"000SJ,3ES00,3ESSJ,A1PBN,A2WBD,A6ZAB,A7FAL,AACVB,AAZDZ,AB5AA,ABFAA,ABJAA,AC--G,ACMRA,ACYAC,AD8AA,ADQAB,AIJAB,B2GAE,B3MAC,BAYAB,BBHAB,BMLAN,BS-SA,BSHEU,BSLAC,BY1AL,BY2AL,BYPAK,BYQAE,CBSAE,CHAAA,CJDAA,CJTAA,CLVAB,CN7AH,CPCAV,CPNAB,D2UL9,D3HEZ,DEEAD,DGACA,DR--F,DWAAF,DWBAA,DWMAA,EGAZZ,EN-C2,FBBAQ,FS--B,GBVAR,GCEAB,GTAEF,GTBAB,GTCAA,GTDAW,HCAAV,HKCAB,HKLAG,HNDAF,HNKAB,HNSAC,HT2AD,HTHAE,HTSAD,ICDAV,ICEHE,ICFAH,ICHAA,IDBAD,IEPAN,IEVAQ,IEXAB,J3KAB,J3QAD,J5XAB,JBBAE,JBCAL,JCBAA,JDAAQ,JZCAD,MD--N,PN4JA,TR-WA,VS-KX,WANAB,YZBAB,YZKAA,YZPAC,YZVYY\",\r\n        \"catalog\": {\r\n            \"make\": \"ford\",\r\n            \"model\": \"Mustang Mach-E\",\r\n            \"year\": \"2021\",\r\n            \"seriesWers\": \"ACMRA_VS-KX\",\r\n            \"seriesDescription\": \"SELECT\",\r\n            \"powerTrainWers\": \"DR--F_EN-C2_HTHAE_TR-WA\",\r\n            \"powerTrainDescription\": \"Standard Range Battery - eAWD\",\r\n            \"fuelType\": null\r\n        },\r\n        \"vin\": \"3FMTK1SS9MMA41043\",\r\n        \"tradeInVehicle\": {\r\n            \"tradeAllowance\": 0.0,\r\n            \"tradePayoff\": 0.0,\r\n            \"vehicleType\": \"PV\"\r\n        },\r\n        \"price\": {\r\n            \"sellingPrice\": 50785.0,\r\n            \"msrp\": 49535.0,\r\n            \"dealerDeposit\": 0.0,\r\n            \"orderDeposit\": 0.0,\r\n            \"reservationDeposit\": 0.0,\r\n            \"planType\": \"AZ\",\r\n            \"category\": 1\r\n        },\r\n        \"dealerAddOns\": [],\r\n        \"charging\": [],\r\n        \"aftermarket\": {\r\n            \"warranties\": [],\r\n            \"insurancePackages\": [],\r\n            \"theftProtection\": [],\r\n            \"protectionPackages\": []\r\n        },\r\n        \"countryCode\": null,\r\n        \"entityCode\": null,\r\n        \"languageCode\": null,\r\n        \"activeIndicator\": null,\r\n        \"vehModelDesc\": null,\r\n        \"newUsedIndicator\": null,\r\n        \"planCd\": null,\r\n        \"vehMakeName\": null,\r\n        \"vehUsgType\": null,\r\n        \"sliceName\": null\r\n    },\r\n    \"customer\": null,\r\n    \"financial\": {\r\n        \"financePlan\":2,\r\n        \"term\": 36,\r\n        \"milesOrKmPerAnnum\": 10500,\r\n        \"usersRate\": null,\r\n        \"deposit\": 5078.5,\r\n        \"acquisitionFee\": 0.0,\r\n        \"rate\": {\r\n            \"total\": 0.0,\r\n            \"apr\": 0.0,\r\n            \"markUp\": 0.0,\r\n            \"type\": null\r\n        },\r\n        \"incentives\": [\r\n            {\r\n                \"type\": \"SUBVENED\",\r\n                \"amount\": 3000.0,\r\n                \"apr\": 2.25\r\n            },\r\n            {\r\n                \"type\": \"STANDARD\",\r\n                \"amount\": 3000.0\r\n            }\r\n        ],\r\n        \"includeMultiplePayments\": true,\r\n        \"defaultResidualPc\": -1.0,\r\n        \"tier\": 0\r\n    },\r\n    \"add-ons\": null\r\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v3/finance-quotes",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v3",
                                "finance-quotes"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Cart Lease False",
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
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3w6jJmiN7m0C218Wbiq16tqZsHq8ho6LR5KcIpr2G0L3xbAX5h1P2XLYMNgJp5ejBpNM_TM-kNxspag60EG9XWkLrJgffGjZN8Te6dXTCTncFzvIetnRx2bB4KMgiqFq0",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n    \"geoInfo\": {\r\n        \"country\": \"us\",\r\n        \"stateProvinceCode\": \"MA\",\r\n        \"zipPostalCode\": \"01108\",\r\n        \"marketArea\": \"Great Lakes Market Area\",\r\n        \"regionCode\": \"48\",\r\n        \"r1DealerId\": \"QE9HU\",\r\n        \"dealerPaCode\": \"03003\"\r\n    },\r\n    \"vehicle\": {\r\n        \"vehicleId\": \"A9CBK_AA5H5_AAAFC_CA#BC_DR--E_SE#JV_YZBAD\",\r\n        \"options\": \"000SJ,3ES00,3ESSJ,A1PBN,A2WBD,A6ZAB,A7FAL,AACVB,AAZDZ,AB5AA,ABFAA,ABJAA,AC--G,ACMRA,ACYAC,AD8AA,ADQAB,AIJAB,B2GAE,B3MAC,BAYAB,BBHAB,BMLAN,BS-SA,BSHEU,BSLAC,BY1AL,BY2AL,BYPAK,BYQAE,CBSAE,CHAAA,CJDAA,CJTAA,CLVAB,CN7AH,CPCAV,CPNAB,D2UL9,D3HEZ,DEEAD,DGACA,DR--F,DWAAF,DWBAA,DWMAA,EGAZZ,EN-C2,FBBAQ,FS--B,GBVAR,GCEAB,GTAEF,GTBAB,GTCAA,GTDAW,HCAAV,HKCAB,HKLAG,HNDAF,HNKAB,HNSAC,HT2AD,HTHAE,HTSAD,ICDAV,ICEHE,ICFAH,ICHAA,IDBAD,IEPAN,IEVAQ,IEXAB,J3KAB,J3QAD,J5XAB,JBBAE,JBCAL,JCBAA,JDAAQ,JZCAD,MD--N,PN4JA,TR-WA,VS-KX,WANAB,YZBAB,YZKAA,YZPAC,YZVYY\",\r\n        \"catalog\": {\r\n            \"make\": \"ford\",\r\n            \"model\": \"Mustang Mach-E\",\r\n            \"year\": \"2021\",\r\n            \"seriesWers\": \"ACMRA_VS-KX\",\r\n            \"seriesDescription\": \"SELECT\",\r\n            \"powerTrainWers\": \"DR--F_EN-C2_HTHAE_TR-WA\",\r\n            \"powerTrainDescription\": \"Standard Range Battery - eAWD\",\r\n            \"fuelType\": null\r\n        },\r\n        \"vin\": \"3FMTK1SS9MMA41043\",\r\n        \"tradeInVehicle\": {\r\n            \"tradeAllowance\": 0.0,\r\n            \"tradePayoff\": 0.0,\r\n            \"vehicleType\": \"PV\"\r\n        },\r\n        \"price\": {\r\n            \"sellingPrice\": 50785.0,\r\n            \"msrp\": 49535.0,\r\n            \"dealerDeposit\": 0.0,\r\n            \"orderDeposit\": 0.0,\r\n            \"reservationDeposit\": 0.0,\r\n            \"planType\": \"AZ\",\r\n            \"category\": 1\r\n        },\r\n        \"dealerAddOns\": [],\r\n        \"charging\": [],\r\n        \"aftermarket\": {\r\n            \"warranties\": [],\r\n            \"insurancePackages\": [],\r\n            \"theftProtection\": [],\r\n            \"protectionPackages\": []\r\n        },\r\n        \"countryCode\": null,\r\n        \"entityCode\": null,\r\n        \"languageCode\": null,\r\n        \"activeIndicator\": null,\r\n        \"vehModelDesc\": null,\r\n        \"newUsedIndicator\": null,\r\n        \"planCd\": null,\r\n        \"vehMakeName\": null,\r\n        \"vehUsgType\": null,\r\n        \"sliceName\": null\r\n    },\r\n    \"customer\": null,\r\n    \"financial\": {\r\n        \"financePlan\":2,\r\n        \"term\": 36,\r\n        \"milesOrKmPerAnnum\": 10500,\r\n        \"usersRate\": null,\r\n        \"deposit\": 5078.5,\r\n        \"acquisitionFee\": 0.0,\r\n        \"rate\": {\r\n            \"total\": 2.25,\r\n            \"apr\": 2.25,\r\n            \"markUp\": 0,\r\n            \"type\": \"SUBVENED\"\r\n        },\r\n        \"incentives\": [\r\n            {\r\n                \"type\": \"SUBVENED\",\r\n                \"amount\": 3000.0,\r\n                \"apr\": 2.25\r\n            },\r\n            {\r\n                \"type\": \"STANDARD\",\r\n                \"amount\": 3000.0,\r\n                \"apr\": null\r\n            }\r\n        ],\r\n        \"includeMultiplePayments\": false,\r\n        \"defaultResidualPc\": -1.0,\r\n        \"tier\": 0\r\n    },\r\n    \"add-ons\": null\r\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v3/finance-quotes",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v3",
                                "finance-quotes"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Cart Options False",
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
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3w6jJmiN7m0C218Wbiq16tqZsHq8ho6LR5KcIpr2G0L3xbAX5h1P2XLYMNgJp5ejBpNM_TM-kNxspag60EG9XWkLrJgffGjZN8Te6dXTCTncFzvIetnRx2bB4KMgiqFq0",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n    \"geoInfo\": {\r\n        \"country\": \"US\",\r\n        \"stateProvinceCode\": \"IA\",\r\n        \"zipPostalCode\": \"50263\",\r\n        \"marketArea\": \"Central Market Area\",\r\n        \"regionCode\": \"53\",\r\n        \"r1DealerId\": \"GO9IR\",\r\n        \"dealerPaCode\": \"03334\"\r\n    },\r\n    \"vehicle\": {\r\n        \"vehicleId\": \"ACMRA_DR--B_MD--N_VS-KX\",\r\n        \"options\":\"\",\r\n        \"catalog\": {\r\n            \"make\": \"Ford\",\r\n            \"model\": \"Mustang Mach-E\",\r\n            \"year\": \"2021\",\r\n            \"seriesWers\": \"ACMRA_VS-KX\",\r\n            \"seriesDescription\": \"SELECT\",\r\n            \"powerTrainWers\": \"DR--B_EN-C1_HTHAE_TR-WA\",\r\n            \"powerTrainDescription\": \"Standard Range Battery - RWD\"\r\n        },\r\n        \"vin\": \"3FMTK1RM1MMA02924\",\r\n        \"tradeInVehicle\": {\r\n            \"tradeAllowance\": null,\r\n            \"tradePayoff\": null,\r\n            \"vehicleType\": \"PV\"\r\n        },\r\n        \"price\": {\r\n            \"sellingPrice\": 43995,\r\n            \"msrp\": 43995,\r\n            \"dealerDeposit\": 300,\r\n            \"orderDeposit\":300,\r\n            \"reservationDeposit\":100,\r\n            \"planType\": \"MSRP\",\r\n            \"category\": null\r\n        },\r\n        \"dealerAddOns\": [\r\n            {\r\n                \"salePrice\": 200.34,\r\n                \"msrp\": 189,\r\n                \"name\": \"Dashcam\",\r\n                \"partNumber\": \"VHL3Z-19G490-C\",\r\n                \"residualCode\": null\r\n            }\r\n        ],\r\n        \"charging\": [],\r\n        \"aftermarket\": {\r\n            \"warranties\": [],\r\n            \"insurancePackages\": [],\r\n            \"theftProtection\": [],\r\n            \"protectionPackages\": []\r\n        }\r\n    },\r\n    \"financial\": {\r\n        \"financePlan\": \"5\",\r\n        \"term\": 36,\r\n        \"milesOrKmPerAnnum\": 10500,\r\n        \"includeMultiplePayments\": false,\r\n        \"deposit\": 4399.5,\r\n        \"rate\": {\r\n            \"total\": 2.25,\r\n            \"apr\": 2.25,\r\n            \"markUp\": 0,\r\n            \"type\": \"SUBVENED\"\r\n        },\r\n        \"incentives\": [\r\n            {\r\n                \"amount\": 1000\r\n            }\r\n        ]\r\n    }\r\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v3/finance-quotes",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v3",
                                "finance-quotes"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Cart Options True",
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
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3w6jJmiN7m0C218Wbiq16tqZsHq8ho6LR5KcIpr2G0L3xbAX5h1P2XLYMNgJp5ejBpNM_TM-kNxspag60EG9XWkLrJgffGjZN8Te6dXTCTncFzvIetnRx2bB4KMgiqFq0",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n    \"geoInfo\": {\r\n        \"country\": \"US\",\r\n        \"stateProvinceCode\": \"IA\",\r\n        \"zipPostalCode\": \"50263\",\r\n        \"marketArea\": \"Central Market Area\",\r\n        \"regionCode\": \"53\",\r\n        \"r1DealerId\": \"GO9IR\",\r\n        \"dealerPaCode\": \"03334\"\r\n    },\r\n    \"vehicle\": {\r\n        \"vehicleId\": \"ACMRA_DR--B_MD--N_VS-KX\",\r\n        \"options\":\"\",\r\n        \"catalog\": {\r\n            \"make\": \"Ford\",\r\n            \"model\": \"Mustang Mach-E\",\r\n            \"year\": \"2021\",\r\n            \"seriesWers\": \"ACMRA_VS-KX\",\r\n            \"seriesDescription\": \"SELECT\",\r\n            \"powerTrainWers\": \"DR--B_EN-C1_HTHAE_TR-WA\",\r\n            \"powerTrainDescription\": \"Standard Range Battery - RWD\"\r\n        },\r\n        \"vin\": \"3FMTK1RM1MMA02924\",\r\n        \"tradeInVehicle\": {\r\n            \"tradeAllowance\": null,\r\n            \"tradePayoff\": null,\r\n            \"vehicleType\": \"PV\"\r\n        },\r\n        \"price\": {\r\n            \"sellingPrice\": 43995,\r\n            \"msrp\": 43995,\r\n            \"dealerDeposit\": 300,\r\n            \"orderDeposit\":300,\r\n            \"reservationDeposit\":100,\r\n            \"planType\": \"MSRP\",\r\n            \"category\": null\r\n        },\r\n        \"dealerAddOns\": [\r\n            {\r\n                \"salePrice\": 200.34,\r\n                \"msrp\": 189,\r\n                \"name\": \"Dashcam\",\r\n                \"partNumber\": \"VHL3Z-19G490-C\",\r\n                \"residualCode\": null\r\n            }\r\n        ],\r\n        \"charging\": [],\r\n        \"aftermarket\": {\r\n            \"warranties\": [],\r\n            \"insurancePackages\": [],\r\n            \"theftProtection\": [],\r\n            \"protectionPackages\": []\r\n        }\r\n    },\r\n    \"financial\": {\r\n        \"financePlan\": \"5\",\r\n        \"term\": 36,\r\n        \"milesOrKmPerAnnum\": 10500,\r\n        \"includeMultiplePayments\": true,\r\n        \"deposit\": 4399.5,\r\n        \"rate\": {\r\n            \"total\": 2.25,\r\n            \"apr\": 2.25,\r\n            \"markUp\": 0,\r\n            \"type\": \"SUBVENED\"\r\n        },\r\n        \"incentives\": [\r\n            {\r\n                \"type\": \"SUBVENED\",\r\n                \"amount\": 3000.0,\r\n                \"apr\": 6.25\r\n            },\r\n            {\r\n                \"type\": \"STANDARD\",\r\n                \"amount\": 3000.0\r\n            }\r\n        ]\r\n    }\r\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v3/finance-quotes",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v3",
                                "finance-quotes"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Cart PreArranged True",
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
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3w6jJmiN7m0C218Wbiq16tqZsHq8ho6LR5KcIpr2G0L3xbAX5h1P2XLYMNgJp5ejBpNM_TM-kNxspag60EG9XWkLrJgffGjZN8Te6dXTCTncFzvIetnRx2bB4KMgiqFq0",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n    \"geoInfo\": {\r\n        \"country\": \"us\",\r\n        \"stateProvinceCode\": \"VA\",\r\n        \"zipPostalCode\": \"22031\",\r\n        \"marketArea\": \"East Market Area\",\r\n        \"regionCode\": \"27\",\r\n        \"r1DealerId\": \"OR4AU\",\r\n        \"dealerPaCode\": \"00031\"\r\n    },\r\n    \"vehicle\": {\r\n        \"vehicleId\": \"ACMRJ_DR--B_MD--N_VS-LE\",\r\n        \"options\":\"\",\r\n        \"catalog\": {\r\n            \"make\": \"ford\",\r\n            \"model\": \"Mustang Mach-E\",\r\n            \"year\": \"2021\",\r\n            \"seriesWers\": \"ACMRJ_VS-LE\",\r\n            \"seriesDescription\": \"PREMIUM\",\r\n            \"powerTrainWers\": \"DR--B_EN-EH_HTHAD_TR-WA\",\r\n            \"powerTrainDescription\": \"Extended Range Battery - RWD\",\r\n            \"fuelType\": null\r\n        },\r\n        \"vin\": \"3FMTK3R78MMA04742\",\r\n        \"tradeInVehicle\": {\r\n            \"tradeAllowance\": 0,\r\n            \"tradePayoff\": 0,\r\n            \"vehicleType\": \"PV\"\r\n        },\r\n        \"price\": {\r\n            \"sellingPrice\": 53350,\r\n            \"msrp\": 53100,\r\n            \"dealerDeposit\": 100,\r\n            \"orderDeposit\":100,\r\n            \"reservationDeposit\":100,\r\n            \"planType\": \"MSRP\",\r\n            \"category\": null\r\n        },\r\n        \"dealerAddOns\": [\r\n            {\r\n                \"salePrice\": 0,\r\n                \"msrp\": 375,\r\n                \"name\": \"Cargo Area Protector - 4-Door\",\r\n                \"partNumber\": \"BE8Z-6111600-AA\",\r\n                \"residualCode\": null\r\n            },\r\n            {\r\n                \"salePrice\": 0,\r\n                \"msrp\": 375,\r\n                \"name\": \"Moon Roof\",\r\n                \"partNumber\": null,\r\n                \"residualCode\": \"MR\"\r\n            }\r\n        ],\r\n        \"charging\": [\r\n            {\r\n                \"salePrice\": 0,\r\n                \"name\": \"Ford Connected Charge Station\"\r\n            }\r\n        ],\r\n        \"aftermarket\": {\r\n            \"warranties\": [\r\n                {\r\n                    \"salePrice\": 0,\r\n                    \"name\": \"Prepaid Maintenance\"\r\n                }\r\n            ],\r\n            \"insurancePackages\": [\r\n                {\r\n                    \"salePrice\": 0,\r\n                    \"name\": \"Ford GAP\"\r\n                }\r\n            ],\r\n            \"theftProtection\": [\r\n                {\r\n                    \"salePrice\": 0,\r\n                    \"name\": \"Etch\"\r\n                }\r\n            ],\r\n            \"protectionPackages\": [\r\n                {\r\n                    \"salePrice\": 0,\r\n                    \"name\": \"Dent and Ding\"\r\n                }\r\n            ]\r\n        }\r\n    },\r\n    \"financial\": {\r\n        \"financePlan\": 10,\r\n        \"term\": 75,\r\n        \"milesOrKmPerAnnum\": null,\r\n        \"includeMultiplePayments\": true,\r\n        \"deposit\": 10000,\r\n        \"usersRate\": 8.5,\r\n        \"incentives\": [\r\n            {\r\n                \"type\": \"SUBVENED\",\r\n                \"amount\": 3000.0,\r\n                \"apr\": 2.25\r\n            },\r\n            {\r\n                \"type\": \"STANDARD\",\r\n                \"amount\": 3000.0\r\n            }\r\n        ]\r\n    }\r\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v3/finance-quotes",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v3",
                                "finance-quotes"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Cart PreArranged False",
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
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3w6jJmiN7m0C218Wbiq16tqZsHq8ho6LR5KcIpr2G0L3xbAX5h1P2XLYMNgJp5ejBpNM_TM-kNxspag60EG9XWkLrJgffGjZN8Te6dXTCTncFzvIetnRx2bB4KMgiqFq0",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\r\n    \"geoInfo\": {\r\n        \"country\": \"US\",\r\n        \"stateProvinceCode\": \"OH\",\r\n        \"zipPostalCode\": \"45245-2118\",\r\n        \"marketArea\": \"East\",\r\n        \"regionCode\": \"11\",\r\n        \"r1DealerId\": \"QE9HU\",\r\n        \"dealerPaCode\": \"02058\"\r\n    },\r\n    \"vehicle\": {\r\n        \"vehicleId\": \"ACMRA_BS-SA_EN-C1_TR-WA_VS-KZ\",\r\n        \"options\":\"\",\r\n        \"catalog\": {\r\n            \"make\": \"Ford\",\r\n            \"model\": \"Mustang Mach-E\",\r\n            \"year\": \"2020\",\r\n            \"seriesWers\": \"ACMRA_VS-KX\",\r\n            \"seriesDescription\": \"Select\",\r\n            \"powerTrainWers\": \"DR--B_EN-C1_HTHAE_TR-WA\",\r\n            \"powerTrainDescription\": \"Standard Range Battery - RWD\"\r\n        },\r\n        \"vin\": \"1FM5K8GC2LGC12341\",\r\n        \"tradeInVehicle\": {           \r\n            \"tradeAllowance\": 0,\r\n            \"tradePayoff\": 0,\r\n            \"vehicleType\": \"PV\"\r\n        },\r\n        \"price\": {\r\n            \"sellingPrice\": 53350,\r\n            \"msrp\": 53350,\r\n            \"dealerDeposit\": 100,\r\n            \"orderDeposit\":100,\r\n            \"reservationDeposit\":100,\r\n            \"planType\": \"A Plan\",\r\n            \"category\": 1            \r\n        },\r\n        \"dealerAddOns\": [            \r\n            {\r\n                \"salePrice\": 350.0,\r\n                \"msrp\": 375.0,\r\n                \"name\": \"Cargo Area Protector - 4-Door\",\r\n                \"partNumber\": \"BE8Z-6111600-AA\",\r\n                \"residualCode\": null\r\n            },\r\n            {\r\n                \"salePrice\": 1000.0,\r\n                \"msrp\": 375.0,\r\n                \"name\": \"Moon Roof\",\r\n                \"partNumber\": null,\r\n                \"residualCode\": \"MR\"\r\n            }\r\n        ],\r\n        \"charging\": [             \r\n            {\r\n                \"salePrice\": 700,\r\n                \"name\": \"Ford Connected Charge Station\"\r\n            }\r\n        ], \r\n        \"aftermarket\": {         \r\n            \"warranties\": [\r\n                {\r\n                    \"salePrice\": 564,\r\n                    \"name\": \"Prepaid Maintenance\"\r\n                }\r\n            ],\r\n            \"insurancePackages\": [\r\n                {\r\n                    \"salePrice\": 693,\r\n                    \"name\": \"Ford GAP\"\r\n                }\r\n            ],\r\n            \"theftProtection\": [\r\n                {\r\n                    \"salePrice\": 142,\r\n                    \"name\": \"Etch\"\r\n                }\r\n            ],\r\n            \"protectionPackages\": [\r\n                {\r\n                    \"salePrice\": 600,\r\n                    \"name\": \"Dent and Ding\"\r\n                }\r\n            ]\r\n        }\r\n    },\r\n    \"financial\": {\r\n        \"financePlan\": 10,\r\n        \"term\": 36,                         \r\n        \"milesOrKmPerAnnum\": null,           \r\n        \"includeMultiplePayments\": false,\r\n        \"rate\": {\r\n            \"total\": 5.00,\r\n            \"apr\": 5.00,\r\n            \"markUp\": 0.0,\r\n            \"type\": \"STANDARD\"\r\n        },\r\n        \"deposit\": 15000,\r\n        \"incentives\": [\r\n            {\r\n                \"amount\": 100\r\n            }\r\n        ]\r\n    }\r\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v3/finance-quotes",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v3",
                                "finance-quotes"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Cart Flexbuy True",
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
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3SPXHcN-iozOkS76aHSPvc9bhNcieLUNTL1VBlnpC21Q7YzFtJaVAeZX4kf4fpnYmQTBtFxL8OrFqOoCiJNT0_h3lVeOaHfYbLi0qqB5YTZlqw5qd6-oGu1dlnSTj-Brb",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"geoInfo\": {\n        \"country\": \"US\",\n        \"stateProvinceCode\": \"IA\",\n        \"zipPostalCode\": \"50263\",\n        \"marketArea\": \"Central Market Area\",\n        \"regionCode\": \"53\",\n        \"r1DealerId\": \"GO9IR\",\n        \"dealerPaCode\": \"03334\"\n    },\n    \"vehicle\": {\n        \"vehicleId\": \"ACMRA_DR--B_MD--N_VS-KX\",\n        \"options\": \"\",\n        \"catalog\": {\n            \"make\": \"Ford\",\n            \"model\": \"Mustang Mach-E\",\n            \"year\": \"2021\",\n            \"seriesWers\": \"ACMRA_VS-KX\",\n            \"seriesDescription\": \"SELECT\",\n            \"powerTrainWers\": \"DR--B_EN-C1_HTHAE_TR-WA\",\n            \"powerTrainDescription\": \"Standard Range Battery - RWD\"       },\n        \"vin\": \"3FMTK1RM1MMA02924\",\n        \"tradeInVehicle\": {\n            \"tradeAllowance\": null,\n            \"tradePayoff\": null,\n            \"vehicleType\": \"PV\"\n        },\n        \"price\": {\n            \"sellingPrice\": 43995,\n            \"msrp\": 43995,\n            \"dealerDeposit\": 300,\n            \"orderDeposit\": 300,\n            \"reservationDeposit\": 100,\n            \"planType\": \"MSRP\",\n            \"category\": null\n        },\n        \"dealerAddOns\": [\n            {\n                \"salePrice\": 200.34,\n                \"msrp\": 189,\n                \"name\": \"Dashcam\",\n                \"partNumber\": \"VHL3Z-19G490-C\",\n                \"residualCode\": null\n            }\n        ],\n        \"charging\": [],\n        \"aftermarket\": {\n            \"warranties\": [],\n            \"insurancePackages\": [],\n            \"theftProtection\": [],\n            \"protectionPackages\": []\n        }\n    },\n    \"financial\": {\n        \"financePlan\": \"6\",\n        \"term\": 66,\n        \"milesOrKmPerAnnum\": 10500,\n        \"includeMultiplePayments\": true,\n        \"deposit\": 4399.5,\n        \"incentives\": [\n            {\n                \"type\": \"SUBVENED\",\n                \"amount\": 3000.0,\n                \"apr\": 6.25\n            },\n            {\n                \"type\": \"STANDARD\",\n                \"amount\": 3000.0\n            }\n        ]\n    }\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v3/finance-quotes",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v3",
                                "finance-quotes"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Cart Flexbuy Fasle",
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
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3SPXHcN-iozOkS76aHSPvc9bhNcieLUNTL1VBlnpC21Q7YzFtJaVAeZX4kf4fpnYmQTBtFxL8OrFqOoCiJNT0_h3lVeOaHfYbLi0qqB5YTZlqw5qd6-oGu1dlnSTj-Brb",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"geoInfo\": {\n        \"country\": \"US\",\n        \"stateProvinceCode\": \"IA\",\n        \"zipPostalCode\": \"50263\",\n        \"marketArea\": \"Central Market Area\",\n        \"regionCode\": \"53\",\n        \"r1DealerId\": \"GO9IR\",\n        \"dealerPaCode\": \"03334\"\n    },\n    \"vehicle\": {\n        \"vehicleId\": \"ACMRA_DR--B_MD--N_VS-KX\",\n        \"options\": \"\",\n        \"catalog\": {\n            \"make\": \"Ford\",\n            \"model\": \"Mustang Mach-E\",\n            \"year\": \"2021\",\n            \"seriesWers\": \"ACMRA_VS-KX\",\n            \"seriesDescription\": \"SELECT\",\n            \"powerTrainWers\": \"DR--B_EN-C1_HTHAE_TR-WA\",\n            \"powerTrainDescription\": \"Standard Range Battery - RWD\"\n        },\n        \"vin\": \"3FMTK1RM1MMA02924\",\n        \"tradeInVehicle\": {\n            \"tradeAllowance\": null,\n            \"tradePayoff\": null,\n            \"vehicleType\": \"PV\"\n        },\n        \"price\": {\n            \"sellingPrice\": 43995,\n            \"msrp\": 43995,\n            \"dealerDeposit\": 300,\n            \"orderDeposit\": 300,\n            \"reservationDeposit\": 100,\n            \"planType\": \"MSRP\",\n            \"category\": null\n        },\n        \"dealerAddOns\": [\n            {\n                \"salePrice\": 200.34,\n                \"msrp\": 189,\n                \"name\": \"Dashcam\",\n                \"partNumber\": \"VHL3Z-19G490-C\",\n                \"residualCode\": null\n            }\n        ],\n        \"charging\": [],\n        \"aftermarket\": {\n            \"warranties\": [],\n            \"insurancePackages\": [],\n            \"theftProtection\": [],\n            \"protectionPackages\": []\n        }\n    },\n    \"financial\": {\n        \"financePlan\": \"6\",\n        \"term\": 66,\n        \"milesOrKmPerAnnum\": 10500,\n        \"includeMultiplePayments\": false,\n        \"deposit\": 4399.5,\n        \"rate\": {\n            \"total\": 2.25,\n            \"apr\": 2.25,\n            \"markUp\": 0,\n            \"type\": \"SUBVENED\"\n        },\n        \"incentives\": [\n            {\n                \"type\": \"SUBVENED\",\n                \"amount\": 3000.0,\n                \"apr\": 6.25\n            },\n            {\n                \"type\": \"STANDARD\",\n                \"amount\": 3000.0,\n                \"apr\": null\n            }\n        ]\n    }\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v3/finance-quotes",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v3",
                                "finance-quotes"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Cart Finance Monthly AddOns",
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
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3SPXHcN-iozOkS76aHSPvc9bhNcieLUNTL1VBlnpC21Q7YzFtJaVAeZX4kf4fpnYmQTBtFxL8OrFqOoCiJNT0_h3lVeOaHfYbLi0qqB5YTZlqw5qd6-oGu1dlnSTj-Brb",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"geoInfo\": {\n        \"country\": \"US\"\n    },\n    \"vehicle\": {\n        \"vehicleId\": \"ACMRA_BS-SA_EN-C1_TR-WA_VS-KZ\",\n        \"options\": \"\",\n        \"catalog\": {\n            \"make\": \"Ford\",\n            \"model\": \"Mustang Mach-E\",\n            \"year\": \"2021\",\n            \"seriesWers\": \"ACMRA_VS-KX\",\n            \"seriesDescription\": \"Select\",\n            \"powerTrainWers\": \"DR--B_EN-C1_HTHAE_TR-WA\",\n            \"powerTrainDescription\": \"Standard Range Battery - RWD\"\n        },\n        \"vin\": \"3FMTK3RM3MMA00815\",\n        \"price\": {\n            \"sellingPrice\": 20000,\n            \"msrp\": 0,\n            \"dealerDeposit\": 100,\n            \"orderDeposit\": 100,\n            \"reservationDeposit\": 100,\n            \"planType\": \"MSRP\"\n        }\n    },\n    \"add-ons\": [\n        {\n            \"code\": \"ZJ2AB\",\n            \"name\": \"Dashcam\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 100,\n            \"msrp\": 89\n        },\n        {\n            \"code\": \"ZJ2AC\",\n            \"name\": \"Dashcam - With Rear Facing Camera Bundle\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 385.45,\n            \"msrp\": 329\n        },\n        {\n            \"code\": \"ZJ2AD\",\n            \"name\": \"Dashcam - Infrared Rear View Camera Bundle \",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 100,\n            \"msrp\": 349\n        },\n        {\n            \"code\": \"YRHAD\",\n            \"name\": \"Ash Cup Coin Holder - With Lighter Element\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 69,\n            \"msrp\": 65\n        },\n        {\n            \"code\": \"YDVAB\",\n            \"name\": \"Cargo Organizer - Soft-Sided Cooler Bag W/Adjustable Carrying Strap, Ford Logo \",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 28.25,\n            \"msrp\": 25\n        },\n        {\n            \"code\": \"YA2AC\",\n            \"name\": \"Cargo Organizer - Soft-Sided Large, Folding, Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 86,\n            \"msrp\": 80\n        },\n        {\n            \"code\": \"YA2AD\",\n            \"name\": \"Cargo Organizer - Soft-Sided Standard, Folding, Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 76.97,\n            \"msrp\": 71.4\n        },\n        {\n            \"code\": \"YRLAB\",\n            \"name\": \"Charge Cord Bag by THULE\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 2,\n            \"msrp\": 800\n        },\n        {\n            \"code\": \"YRFAB\",\n            \"name\": \"Paint Protection Package\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 25,\n            \"msrp\": 800\n        },\n        {\n            \"code\": \"YEZAB\",\n            \"name\": \"First Aid Kit - With Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 42.95,\n            \"msrp\": 39\n        },\n        {\n            \"code\": \"YEYAB\",\n            \"name\": \"Roadside Assistance Kit - With Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 63.95,\n            \"msrp\": 59\n        },\n        {\n            \"code\": \"YEYAC\",\n            \"name\": \"Roadside Assistance Kit - Commercial Use\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 210.95,\n            \"msrp\": 199\n        },\n        {\n            \"code\": \"YEHAB\",\n            \"name\": \"Wheel Lock Kit - Chrome Plated for Exposed Lugs\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 59.75,\n            \"msrp\": 55\n        },\n        {\n            \"code\": \"APOWN\",\n            \"name\": \"Ford Charging Station\",\n            \"type\": \"Charging\",\n            \"salePrice\": 1575\n        },\n        {\n            \"code\": \"PT96\",\n            \"name\": \"96 MO | 100K MI\",\n            \"type\": \"Protection Plan\",\n            \"salePrice\": 500\n        },\n        {\n            \"code\": \"PT60\",\n            \"name\": \"60 MO | 60K MI\",\n            \"type\": \"Protection Plan\",\n            \"salePrice\": 300\n        }\n    ],\n    \"financial\": {\n        \"financePlan\": 1,\n        \"term\": 72,\n        \"milesOrKmPerAnnum\": null,\n        \"includeMultiplePayments\": false,\n        \"rate\": {\n            \"total\": 6.22,\n            \"apr\": 5.22,\n            \"markUp\": 1.00,\n            \"type\": \"STANDARD\"\n        },\n        \"deposit\": 5000,\n        \"incentives\": [\n            {\n                \"amount\": null\n            }\n        ]\n    }\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v3/monthly-addons",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v3",
                                "monthly-addons"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Cart Lease MonthlyAddOns",
                    "request": {
                        "method": "POST",
                        "header": [
                            {
                                "key": "Content-Type",
                                "name": "Content-Type",
                                "type": "text",
                                "value": "application/json"
                            },
                            {
                                "key": "Authorization",
                                "type": "text",
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3SPXHcN-iozOkS76aHSPvc9bhNcieLUNTL1VBlnpC21Q7YzFtJaVAeZX4kf4fpnYmQTBtFxL8OrFqOoCiJNT0_h3lVeOaHfYbLi0qqB5YTZlqw5qd6-oGu1dlnSTj-Brb"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"geoInfo\": {\n        \"country\": \"US\"\n    },\n    \"vehicle\": {\n        \"vehicleId\": \"ACMRE_DR--B_MD--N_VS-KY\",\n        \"options\":\"EN EH\",\n        \"catalog\": {\n             \"make\": \"ford\",\n            \"model\": \"Mustang Mach-E\",\n            \"year\": \"2021\",\n            \"seriesWers\": \"ACMRE_VS-KY\",\n            \"seriesDescription\": \"CALIFORNIA ROUTE 1\",\n            \"powerTrainWers\": \"DR--B_EN-EH_HTHAD_TR-WA\",\n            \"powerTrainDescription\": \"Extended Range Battery - RWD\"\n        },\n        \"vin\": \"3FMTK2R73MMA02181\",\n        \"price\": {\n            \"sellingPrice\": 20000,\n            \"msrp\": 0,\n            \"dealerDeposit\": null,\n            \"orderDeposit\":null,\n            \"reservationDeposit\":100,\n            \"planType\": \"MSRP\"\n        }\n    },\n    \"financial\": {\n        \"financePlan\": 2,\n        \"milesOrKmPerAnnum\": 7500,\n        \"term\": 36,\n        \"rate\": {\n            \"total\": 5.76,\n            \"markUp\": 0,\n            \"type\": \"SUBVENED\"\n        }\n    },\n    \"add-ons\": [\n        {\n            \"code\": \"ZJ2AB\",\n            \"name\": \"Dashcam\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 100,\n            \"msrp\": 89\n        },\n        {\n            \"code\": \"ZJ2AC\",\n            \"name\": \"Dashcam - With Rear Facing Camera Bundle\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 385.45,\n            \"msrp\": 329\n        },\n        {\n            \"code\": \"ZJ2AD\",\n            \"name\": \"Dashcam - Infrared Rear View Camera Bundle \",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 100,\n            \"msrp\": 349\n        },\n        {\n            \"code\": \"YRHAD\",\n            \"name\": \"Ash Cup Coin Holder - With Lighter Element\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 69,\n            \"msrp\": 0\n        },\n        {\n            \"code\": \"YDVAB\",\n            \"name\": \"Cargo Organizer - Soft-Sided Cooler Bag W/Adjustable Carrying Strap, Ford Logo \",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 28.25,\n            \"msrp\": 25\n        },\n        {\n            \"code\": \"YA2AC\",\n            \"name\": \"Cargo Organizer - Soft-Sided Large, Folding, Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 86,\n            \"msrp\": 80\n        },\n        {\n            \"code\": \"YA2AD\",\n            \"name\": \"Cargo Organizer - Soft-Sided Standard, Folding, Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 76.97,\n            \"msrp\": 71.4\n        },\n        {\n            \"code\": \"YRLAB\",\n            \"name\": \"Charge Cord Bag by THULE\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": -2,\n            \"msrp\": 800\n        },\n        {\n            \"code\": \"YRFAB\",\n            \"name\": \"Paint Protection Package\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 25,\n            \"msrp\": 800\n        },\n        {\n            \"code\": \"YEZAB\",\n            \"name\": \"First Aid Kit - With Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 42.95,\n            \"msrp\": 39\n        },\n        {\n            \"code\": \"YEYAB\",\n            \"name\": \"Roadside Assistance Kit - With Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 63.95,\n            \"msrp\": 59\n        },\n        {\n            \"code\": \"YEYAC\",\n            \"name\": \"Roadside Assistance Kit - Commercial Use\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 210.95,\n            \"msrp\": 199\n        },\n        {\n            \"code\": \"YEHAB\",\n            \"name\": \"Wheel Lock Kit - Chrome Plated for Exposed Lugs\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 59.75,\n            \"msrp\": 55\n        },\n        {\n            \"code\": \"APOWN\",\n            \"name\": \"Ford Charging Station\",\n            \"type\": \"Charging\",\n            \"salePrice\": 1575\n        },\n        {\n            \"code\": \"PT96\",\n            \"name\": \"96 MO | 100K MI\",\n            \"type\": \"Protection Plan\",\n            \"salePrice\": 500\n        },\n        {\n            \"code\": \"PT60\",\n            \"name\": \"60 MO | 60K MI\",\n            \"type\": \"Protection Plan\",\n            \"salePrice\": 300\n        }\n    ]\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v3/monthly-addons",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v3",
                                "monthly-addons"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Cart Options Monthly AddOns",
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
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3SPXHcN-iozOkS76aHSPvc9bhNcieLUNTL1VBlnpC21Q7YzFtJaVAeZX4kf4fpnYmQTBtFxL8OrFqOoCiJNT0_h3lVeOaHfYbLi0qqB5YTZlqw5qd6-oGu1dlnSTj-Brb",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"geoInfo\": {\n        \"country\": \"US\"\n    },\n    \"vehicle\": {\n        \"vehicleId\": \"ACMRA_BS-SA_EN-C1_TR-WA_VS-KZ\",\n        \"options\":\"\",\n        \"catalog\": {\n            \"make\": \"Ford\",\n            \"model\": \"Mustang Mach-E\",\n            \"year\": \"2021\",\n            \"seriesWers\": \"ACMRA_VS-KX\",\n            \"seriesDescription\": \"Select\",\n            \"powerTrainWers\": \"DR--B_EN-C1_HTHAE_TR-WA\",\n            \"powerTrainDescription\": \"Standard Range Battery - RWD\"\n        },\n        \"vin\": \"3FMTK3RM3MMA00815\",\n        \"price\": {\n            \"sellingPrice\": 20000,\n            \"msrp\": 0,\n            \"dealerDeposit\": 100,\n            \"orderDeposit\":100,\n            \"reservationDeposit\":100,\n            \"planType\": \"MSRP\"\n        }\n    },\n    \"financial\": {\n        \"financePlan\": 5,\n        \"milesOrKmPerAnnum\": 7500,\n        \"term\": 36,\n        \"rate\": {\n            \"total\": 5.76,\n            \"markUp\": 0,\n            \"type\": \"SUBVENED\"\n        }\n    },\n    \"add-ons\": [\n        {\n            \"code\": \"ZJ2AB\",\n            \"name\": \"Dashcam\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 100,\n            \"msrp\": 89\n        },\n        {\n            \"code\": \"ZJ2AC\",\n            \"name\": \"Dashcam - With Rear Facing Camera Bundle\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 385.45,\n            \"msrp\": 329\n        },\n        {\n            \"code\": \"ZJ2AD\",\n            \"name\": \"Dashcam - Infrared Rear View Camera Bundle \",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 100,\n            \"msrp\": 349\n        },\n        {\n            \"code\": \"YRHAD\",\n            \"name\": \"Ash Cup Coin Holder - With Lighter Element\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 69,\n            \"msrp\": 65\n        },\n        {\n            \"code\": \"YDVAB\",\n            \"name\": \"Cargo Organizer - Soft-Sided Cooler Bag W/Adjustable Carrying Strap, Ford Logo \",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 28.25,\n            \"msrp\": 25\n        },\n        {\n            \"code\": \"YA2AC\",\n            \"name\": \"Cargo Organizer - Soft-Sided Large, Folding, Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 86,\n            \"msrp\": 80\n        },\n        {\n            \"code\": \"YA2AD\",\n            \"name\": \"Cargo Organizer - Soft-Sided Standard, Folding, Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 76.97,\n            \"msrp\": 71.4\n        },\n        {\n            \"code\": \"YRLAB\",\n            \"name\": \"Charge Cord Bag by THULE\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 2,\n            \"msrp\": 800\n        },\n        {\n            \"code\": \"YRFAB\",\n            \"name\": \"Paint Protection Package\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 25,\n            \"msrp\": 800\n        },\n        {\n            \"code\": \"YEZAB\",\n            \"name\": \"First Aid Kit - With Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 42.95,\n            \"msrp\": 39\n        },\n        {\n            \"code\": \"YEYAB\",\n            \"name\": \"Roadside Assistance Kit - With Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 63.95,\n            \"msrp\": 59\n        },\n        {\n            \"code\": \"YEYAC\",\n            \"name\": \"Roadside Assistance Kit - Commercial Use\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 210.95,\n            \"msrp\": 199\n        },\n        {\n            \"code\": \"YEHAB\",\n            \"name\": \"Wheel Lock Kit - Chrome Plated for Exposed Lugs\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 59.75,\n            \"msrp\": 55\n        },\n        {\n            \"code\": \"APOWN\",\n            \"name\": \"Ford Charging Station\",\n            \"type\": \"Charging\",\n            \"salePrice\": 1575\n        },\n        {\n            \"code\": \"PT96\",\n            \"name\": \"96 MO | 100K MI\",\n            \"type\": \"Protection Plan\",\n            \"salePrice\": 500\n        },\n        {\n            \"code\": \"PT60\",\n            \"name\": \"60 MO | 60K MI\",\n            \"type\": \"Protection Plan\",\n            \"salePrice\": 300\n        }\n    ]\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v3/monthly-addons",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v3",
                                "monthly-addons"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Cart FlexBuy MonthlyAddOns",
                    "request": {
                        "method": "POST",
                        "header": [
                            {
                                "key": "Content-Type",
                                "name": "Content-Type",
                                "type": "text",
                                "value": "application/json"
                            },
                            {
                                "key": "Authorization",
                                "type": "text",
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3SPXHcN-iozOkS76aHSPvc9bhNcieLUNTL1VBlnpC21Q7YzFtJaVAeZX4kf4fpnYmQTBtFxL8OrFqOoCiJNT0_h3lVeOaHfYbLi0qqB5YTZlqw5qd6-oGu1dlnSTj-Brb"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"geoInfo\": {\n        \"country\": \"US\"\n    },\n    \"vehicle\": {\n        \"vehicleId\": \"ACMRE_DR--B_MD--N_VS-KY\",\n        \"options\":\"EN EH\",\n        \"catalog\": {\n             \"make\": \"ford\",\n            \"model\": \"Mustang Mach-E\",\n            \"year\": \"2021\",\n            \"seriesWers\": \"ACMRE_VS-KY\",\n            \"seriesDescription\": \"CALIFORNIA ROUTE 1\",\n            \"powerTrainWers\": \"DR--B_EN-EH_HTHAD_TR-WA\",\n            \"powerTrainDescription\": \"Extended Range Battery - RWD\"\n        },\n        \"vin\": \"3FMTK2R73MMA02181\",\n        \"price\": {\n            \"sellingPrice\": 20000,\n            \"msrp\": 0,\n            \"dealerDeposit\": null,\n            \"orderDeposit\":null,\n            \"reservationDeposit\":100,\n            \"planType\": \"MSRP\"\n        }\n    },\n    \"add-ons\": [\n        {\n            \"code\": \"ZJ2AB\",\n            \"name\": \"Dashcam\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 100,\n            \"msrp\": 89\n        },\n        {\n            \"code\": \"ZJ2AC\",\n            \"name\": \"Dashcam - With Rear Facing Camera Bundle\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 385.45,\n            \"msrp\": 329\n        },\n        {\n            \"code\": \"ZJ2AD\",\n            \"name\": \"Dashcam - Infrared Rear View Camera Bundle \",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 100,\n            \"msrp\": 349\n        },\n        {\n            \"code\": \"YRHAD\",\n            \"name\": \"Ash Cup Coin Holder - With Lighter Element\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 69,\n            \"msrp\": 0\n        },\n        {\n            \"code\": \"YDVAB\",\n            \"name\": \"Cargo Organizer - Soft-Sided Cooler Bag W/Adjustable Carrying Strap, Ford Logo \",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 28.25,\n            \"msrp\": 25\n        },\n        {\n            \"code\": \"YA2AC\",\n            \"name\": \"Cargo Organizer - Soft-Sided Large, Folding, Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 86,\n            \"msrp\": 80\n        },\n        {\n            \"code\": \"YA2AD\",\n            \"name\": \"Cargo Organizer - Soft-Sided Standard, Folding, Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 76.97,\n            \"msrp\": 71.4\n        },\n        {\n            \"code\": \"YRLAB\",\n            \"name\": \"Charge Cord Bag by THULE\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": -2,\n            \"msrp\": 800\n        },\n        {\n            \"code\": \"YRFAB\",\n            \"name\": \"Paint Protection Package\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 25,\n            \"msrp\": 800\n        },\n        {\n            \"code\": \"YEZAB\",\n            \"name\": \"First Aid Kit - With Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 42.95,\n            \"msrp\": 39\n        },\n        {\n            \"code\": \"YEYAB\",\n            \"name\": \"Roadside Assistance Kit - With Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 63.95,\n            \"msrp\": 59\n        },\n        {\n            \"code\": \"YEYAC\",\n            \"name\": \"Roadside Assistance Kit - Commercial Use\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 210.95,\n            \"msrp\": 199\n        },\n        {\n            \"code\": \"YEHAB\",\n            \"name\": \"Wheel Lock Kit - Chrome Plated for Exposed Lugs\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 59.75,\n            \"msrp\": 55\n        },\n        {\n            \"code\": \"APOWN\",\n            \"name\": \"Ford Charging Station\",\n            \"type\": \"Charging\",\n            \"salePrice\": 1575\n        },\n        {\n            \"code\": \"PT96\",\n            \"name\": \"96 MO | 100K MI\",\n            \"type\": \"Protection Plan\",\n            \"salePrice\": 500\n        },\n        {\n            \"code\": \"PT60\",\n            \"name\": \"60 MO | 60K MI\",\n            \"type\": \"Protection Plan\",\n            \"salePrice\": 300\n        }\n    ],\n    \"financial\": {\n        \"financePlan\": \"6\",\n        \"term\": 66,\n        \"milesOrKmPerAnnum\": 10500,\n        \"includeMultiplePayments\": true,\n        \"deposit\": 4399.5,\n        \"rate\": {\n            \"total\": 2.25,\n            \"apr\": 2.25,\n            \"markUp\": 0,\n            \"type\": \"SUBVENED\"\n        },\n        \"incentives\": [\n            {\n                \"type\": \"SUBVENED\",\n                \"amount\": 3000.0,\n                \"apr\": 6.25\n            },\n            {\n                \"type\": \"STANDARD\",\n                \"amount\": 3000.0,\n                \"apr\": null\n            }\n        ]\n    }\n\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v3/monthly-addons",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v3",
                                "monthly-addons"
                            ]
                        }
                    },
                    "response": []
                },
                {
                    "name": "Cart PreArranged MonthlyAddOns",
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
                                "value": "Bearer AAIkYTJlOGY4MmUtNWIxYy00M2U1LWI1ZGUtZDJiMTNmMWYxMGE3SPXHcN-iozOkS76aHSPvc9bhNcieLUNTL1VBlnpC21Q7YzFtJaVAeZX4kf4fpnYmQTBtFxL8OrFqOoCiJNT0_h3lVeOaHfYbLi0qqB5YTZlqw5qd6-oGu1dlnSTj-Brb",
                                "type": "text"
                            }
                        ],
                        "body": {
                            "mode": "raw",
                            "raw": "{\n    \"geoInfo\": {\n        \"country\": \"us\"\n    },\n    \"vehicle\": {\n        \"vehicleId\": \"ACMRJ_DR--B_MD--N_VS-LE\",\n        \"options\":\"\",\n        \"catalog\": {\n            \"make\": \"ford\",\n            \"model\": \"Mustang Mach-E\",\n            \"year\": \"2021\",\n            \"seriesWers\": \"ACMRJ_VS-LE\",\n            \"seriesDescription\": \"PREMIUM\",\n            \"powerTrainWers\": \"DR--B_EN-C1_HTHAE_TR-WA\",\n            \"powerTrainDescription\": \"Standard Range Battery - RWD\"\n        },\n        \"vin\": \"3FMTK3RM3MMA00815\",\n        \"price\": {\n            \"sellingPrice\": 48750,\n            \"msrp\": 48500,\n            \"dealerDeposit\": 200,\n            \"orderDeposit\":200,\n            \"planType\": \"MSRP\"\n        }\n    },\n    \"add-ons\": [\n        {\n            \"code\": \"YEZAB\",\n            \"name\": \"First Aid Kit - With Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 40.95,\n            \"msrp\": 39\n        },\n        {\n            \"code\": \"YEHAB\",\n            \"name\": \"Wheel Lock Kit - Chrome Plated for Exposed Lugs\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 57.75,\n            \"msrp\": 55\n        },\n        {\n            \"code\": \"ZJ2AC\",\n            \"name\": \"Dashcam - With Rear Facing Camera Bundle\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 345.45,\n            \"msrp\": 329\n        },\n        {\n            \"code\": \"YEYAC\",\n            \"name\": \"Roadside Assistance Kit - Commercial Use\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 208.95,\n            \"msrp\": 199\n        },\n        {\n            \"code\": \"YEYAB\",\n            \"name\": \"Roadside Assistance Kit - With Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 61.95,\n            \"msrp\": 59\n        },\n        {\n            \"code\": \"ZJ2AB\",\n            \"name\": \"Dashcam\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 198.45,\n            \"msrp\": 189\n        },\n        {\n            \"code\": \"ZJ2AD\",\n            \"name\": \"Dashcam - Infrared Rear View Camera Bundle\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 366.45,\n            \"msrp\": 349\n        },\n        {\n            \"code\": \"YRHAD\",\n            \"name\": \"Ash Cup Coin Holder - With Lighter Element\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 63,\n            \"msrp\": 60\n        },\n        {\n            \"code\": \"YDVAB\",\n            \"name\": \"Cargo Organizer - Soft-Sided Cooler Bag W/Adjustable Carrying Strap, Ford Logo \",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 26.25,\n            \"msrp\": 25\n        },\n        {\n            \"code\": \"YA2AC\",\n            \"name\": \"Cargo Organizer - Soft-Sided Large, Folding, Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 84,\n            \"msrp\": 80\n        },\n        {\n            \"code\": \"YA2AD\",\n            \"name\": \"Cargo Organizer - Soft-Sided Standard, Folding, Ford Logo\",\n            \"type\": \"ACCESSORY\",\n            \"salePrice\": 74.97,\n            \"msrp\": 71.4\n        },\n         {\n            \"code\": \"APOWN\",\n            \"name\": \"Ford Charging Station\",\n            \"type\": \"Charging\",\n            \"salePrice\": 1575\n        },\n        {\n            \"code\": \"APOWN\",\n            \"name\": \"FordProtect PremiumCARE\",\n            \"type\": \"Protection Plans\",\n            \"salePrice\": 730\n        }\n    ],\n    \"financial\": {\n        \"financePlan\": \"10\",\n        \"term\": 48,\n        \"milesOrKmPerAnnum\": null,\n        \"rate\": {\n            \"total\": 2.5,\n            \"type\": \"SUBVENED\"\n        }\n    }\n}"
                        },
                        "url": {
                            "raw": "{{hostname}}/na/iq/v3/monthly-addons",
                            "host": [
                                "{{hostname}}"
                            ],
                            "path": [
                                "na",
                                "iq",
                                "v3",
                                "monthly-addons"
                            ]
                        }
                    },
                    "response": []
                }
            ]
        }
    ]
}
