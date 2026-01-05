import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './CarDetail.css'; 

const CarDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    // --- DATELE COMPLETE ALE MAȘINILOR ---
    const carsData = [
        {
            category: "Economic & Compact",
            cars: [
                // --- VECHI (Autovit Links) ---
                { 
                    id: "toyota-corolla", name: "Toyota Corolla", 
                    images: ["https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inhibmlqb3QxbjRoZDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.-EubbcT2lp38Z3bopoHetuAukJ8B499Pc8yfUiVuwmM/image;s=1920x0;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6ImVlM2FrZjF5amt6aTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.4yhboJUHxEUCzVC73UyAr5R08HanVGdWQrwW7hhZUO4/image;s=1920x0;q=100", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6Ijl0cWY3dXRydXNqbzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.uBtwUE-mxIc8vUUfxdPetTeHtdccQ384fwa_es0ZDsI/image;s=1920x0;q=100"], 
                    description: "Toyota Corolla este alegerea ideală pentru deplasările urbane.", cost: 45, specs: { transmission: "Automată", fuel: "Hibrid", year: "2022", engine: "1.8L", power: "122 CP" }, 
                    features: { audio: ["CarPlay", "Bluetooth"], comfort: ["AC", "Scaune încălzite"], safety: ["ABS", "Camera Spate"] } 
                },
                { 
                    id: "vw-golf-8", name: "Volkswagen Golf 8", 
                    images: ["https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6ImU2eDduYmZobnFmZDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.9S0LmainUTjtJTNtSP5NQ-N18a8QGf9sAVHVCDHjhCo/image;s=1920x0;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IndzNGFxM3IzaGdiMjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.tyizFrE18-SanyvtxVoPVfGrUVTxjX6rSt2VCHpWHsk/image;s=1920x0;q=100"], 
                    description: "VW Golf 8 modern.", cost: 65, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "1.5 TSI", power: "150 CP" }, 
                    features: { audio: ["Navi", "Digital Cockpit"], comfort: ["Keyless", "Volan Piele"], safety: ["Lane Assist", "Front Assist"] } 
                },
                { 
                    id: "ford-focus", name: "Ford Focus", 
                    images: ["https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IjFlZzB3NmhldmxsbjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.jV_Eucwu2qumfHcCgXjqwSqQt9hyVgmUSj5XKmQIohQ/image;s=1920x0;q=100", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IjJkaTQ2YXM3eHV0bzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.gbOgPAeCmGU0WhiN-MG4b34iXi3zifHrl19F9wkPDfk/image;s=1920x0;q=100"], 
                    description: "Ford Focus manevrabil.", cost: 58, specs: { transmission: "Manuală", fuel: "Diesel", year: "2021", engine: "1.5 EcoBlue", power: "120 CP" }, 
                    features: { audio: ["SYNC 3", "6 Boxe"], comfort: ["AC", "Oglinzi electrice"], safety: ["ESP", "Asistenta panta"] } 
                },
                // --- NOI ---
                { 
                    id: "ford-fiesta", name: "Ford Fiesta", 
                    images: ["https://upload.wikimedia.org/wikipedia/commons/7/7d/2017_Ford_Fiesta_Zetec_Turbo_1.0_Front.jpg", "https://upload.wikimedia.org/wikipedia/commons/5/52/2017_Ford_Fiesta_Zetec_Turbo_1.0_Rear.jpg"], 
                    description: "Compactă și agilă.", cost: 35, specs: { transmission: "Manuală", fuel: "Benzină", year: "2019", engine: "1.0 EcoBoost", power: "100 CP" }, 
                    features: { audio: ["Bluetooth", "Radio"], comfort: ["AC Manual", "Geamuri electrice"], safety: ["ABS", "Airbag-uri"] } 
                },
                { 
                    id: "dacia-logan", name: "Dacia Logan", 
                    images: ["https://upload.wikimedia.org/wikipedia/commons/2/2b/2021_Dacia_Logan_Comfort_front.jpg", "https://upload.wikimedia.org/wikipedia/commons/1/1a/2021_Dacia_Logan_Comfort_rear.jpg"], 
                    description: "Spațioasă și economică.", cost: 30, specs: { transmission: "Manuală", fuel: "Benzină + GPL", year: "2023", engine: "1.0 TCe", power: "100 CP" }, 
                    features: { audio: ["Media Nav", "Bluetooth"], comfort: ["Geamuri electrice", "Cotiera"], safety: ["ESP", "LED Lights"] } 
                },
                { 
                    id: "audi-a4", name: "Audi A4", 
                    images: ["https://upload.wikimedia.org/wikipedia/commons/3/30/Audi_A4_B9_fl_Avant_scuba_blue_front.jpg", "https://upload.wikimedia.org/wikipedia/commons/6/64/Audi_A4_B9_Avant_2.0_TDI_quattro_S_line_%E2%80%93_Heckansicht%2C_22._Mai_2016%2C_D%C3%BCsseldorf.jpg"], 
                    description: "Eleganță business.", cost: 85, specs: { transmission: "Automată", fuel: "Diesel", year: "2021", engine: "2.0 TDI", power: "190 CP" }, 
                    features: { audio: ["MMI Plus", "Audi Sound"], comfort: ["Climatronic 3 zone", "Scaune Sport"], safety: ["Pre Sense", "Side Assist"] } 
                },
                { 
                    id: "hyundai-i30", name: "Hyundai i30", 
                    images: ["https://upload.wikimedia.org/wikipedia/commons/2/23/2017_Hyundai_i30_Premium_SE_CRDi_1.6_Front.jpg", "https://upload.wikimedia.org/wikipedia/commons/5/53/2017_Hyundai_i30_Premium_SE_CRDi_1.6_Rear.jpg"], 
                    description: "Design modern.", cost: 50, specs: { transmission: "Automată", fuel: "Benzină", year: "2022", engine: "1.5 T-GDi", power: "160 CP" }, 
                    features: { audio: ["Touchscreen", "Android Auto"], comfort: ["Scaune încălzite", "Volan incalzit"], safety: ["Lane Keep", "Camera spate"] } 
                }
            ]
        },
        {
            category: "Luxury & Executive",
            cars: [
                // --- VECHI ---
                { 
                    id: "mercedes-s-class", name: "Mercedes-Benz S-Class", 
                    images: ["https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6Imhmc29oNmlzMW56ZzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.h7sqG3kwvFEBoWwDa9w9H5fAimXP5Z2v8QAsjyRnfAg/image;s=1920x0;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6ImRrYXJ3YWs5MTZndy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.UT0nkdJP2yv4obOiWiTNeJGeBZrIXcWeAPlDOOdh4SQ/image;s=1920x0;q=100"], 
                    description: "Lux suprem.", cost: 230, specs: { transmission: "Automată", fuel: "Diesel", year: "2023", engine: "3.0L", power: "286 CP" }, 
                    features: { audio: ["Burmester 4D", "MBUX"], comfort: ["Masaj", "Piele Nappa"], safety: ["Distronic", "Night Vision"] } 
                },
                { 
                    id: "bmw-7-series", name: "BMW Seria 7", 
                    images: ["https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6Imx1Y2R1amd3aGp1di1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.eNYiyVzuOm-UGOwyPHpgcwsPSS5yvSmhPJk4_hxUTXQ/image;s=1920x0;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6InRwYWo4OThqYjBtODEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.OENHEUN1eXOdGnzEnomiMwzHpf7PAHcVzFMkIgZj9To/image;s=1920x0;q=100"], 
                    description: "Sport și confort.", cost: 190, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "3.0L", power: "340 CP" }, 
                    features: { audio: ["Harman Kardon", "Gesture Control"], comfort: ["Soft Close", "Perdelute electrice"], safety: ["Laserlight", "Driving Assistant"] } 
                },
                // --- NOI ---
                { 
                    id: "rolls-royce-phantom", name: "Rolls-Royce Phantom", 
                    images: ["https://upload.wikimedia.org/wikipedia/commons/a/af/Rolls-Royce_Phantom_VIII_IMG_4649.jpg", "https://upload.wikimedia.org/wikipedia/commons/e/ee/Rolls-Royce_Phantom_VIII_IMG_4650.jpg"], 
                    description: "Opulență absolută.", cost: 1200, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "6.75L V12", power: "563 CP" }, 
                    features: { audio: ["Bespoke Audio", "TV"], comfort: ["Plafon înstelat", "Sampanie"], safety: ["Night Vision", "Bodyguard"] } 
                },
                { 
                    id: "audi-s8", name: "Audi S8", 
                    images: ["https://upload.wikimedia.org/wikipedia/commons/0/0e/Audi_S8_D5_TFSI_quattro_IMG_3250.jpg", "https://upload.wikimedia.org/wikipedia/commons/7/75/Audi_S8_D5_TFSI_quattro_IMG_3251.jpg"], 
                    description: "Limuzina sportivă.", cost: 250, specs: { transmission: "Automată", fuel: "Benzină", year: "2022", engine: "4.0 TFSI", power: "571 CP" }, 
                    features: { audio: ["Bang & Olufsen", "Subwoofer"], comfort: ["Suspensie Activă", "Masaj"], safety: ["Matrix LED", "Ceramic Brakes"] } 
                },
                { 
                    id: "vw-phaeton", name: "VW Phaeton", 
                    images: ["https://upload.wikimedia.org/wikipedia/commons/6/6f/VW_Phaeton_GP3_front-1.JPG", "https://upload.wikimedia.org/wikipedia/commons/c/c8/VW_Phaeton_GP3_rear-1.JPG"], 
                    description: "Clasic și confortabil.", cost: 100, specs: { transmission: "Automată", fuel: "Diesel", year: "2016", engine: "3.0 TDI", power: "245 CP" }, 
                    features: { audio: ["Dynaudio", "CD Changer"], comfort: ["Scaune ventilate", "Suspensie pneumatica"], safety: ["ACC", "Side Assist"] } 
                }
            ]
        },
        {
            category: "Supercars & Sport",
            cars: [
                { 
                    id: "chevrolet-corvette-zr1", name: "Chevrolet Corvette ZR1", 
                    images: ["https://upload.wikimedia.org/wikipedia/commons/5/52/2019_Chevrolet_Corvette_ZR1_Coupe_Front.jpg", "https://upload.wikimedia.org/wikipedia/commons/0/0c/2019_Chevrolet_Corvette_ZR1_Coupe_Rear.jpg"], 
                    description: "Putere americană brută.", cost: 400, specs: { transmission: "Automată", fuel: "Benzină", year: "2020", engine: "6.2L V8", power: "755 CP" }, 
                    features: { audio: ["Bose Performance", "Apple CarPlay"], comfort: ["Scaune Sport", "Targa Roof"], safety: ["Track Mode", "Ceramic Brakes"] } 
                },
                { 
                    id: "ferrari-f8", name: "Ferrari F8 Tributo", 
                    images: ["https://upload.wikimedia.org/wikipedia/commons/1/13/Ferrari_F8_Tributo_Genf_2019_1Y7A5665.jpg", "https://upload.wikimedia.org/wikipedia/commons/b/bb/Ferrari_F8_Tributo_Genf_2019_1Y7A5666.jpg"], 
                    description: "Capodopera italiană.", cost: 900, specs: { transmission: "F1", fuel: "Benzină", year: "2022", engine: "3.9L V8 Turbo", power: "720 CP" }, 
                    features: { audio: ["JBL Pro", "Telemetry"], comfort: ["Piele Alcantara", "Clima 2 zone"], safety: ["Carbon Ceramic", "F1 Trac"] } 
                },
                { 
                    id: "lamborghini-revuelto", name: "Lamborghini Revuelto", 
                    images: ["https://upload.wikimedia.org/wikipedia/commons/5/53/Lamborghini_Revuelto_Goodwood_Festival_of_Speed_2023_%281%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lamborghini_Revuelto_Goodwood_Festival_of_Speed_2023_%283%29.jpg"], 
                    description: "V12 Hibrid.", cost: 1500, specs: { transmission: "Automată", fuel: "Hibrid V12", year: "2024", engine: "6.5L V12", power: "1015 CP" }, 
                    features: { audio: ["Sensonum", "Amazon Alexa"], comfort: ["Telemetry", "Lift System"], safety: ["AWD", "Carbon Monocoque"] } 
                },
                { 
                    id: "porsche-gt3rs", name: "Porsche 911 GT3 RS", 
                    images: ["https://upload.wikimedia.org/wikipedia/commons/7/73/Porsche_992_GT3_RS_IAA_2023_1.jpg", "https://upload.wikimedia.org/wikipedia/commons/3/3d/Porsche_992_GT3_RS_IAA_2023_2.jpg"], 
                    description: "Născută pe circuit.", cost: 800, specs: { transmission: "PDK", fuel: "Benzină", year: "2023", engine: "4.0L Boxer", power: "525 CP" }, 
                    features: { audio: ["Sound Package", "Track App"], comfort: ["Roll Cage", "Carbon Seats"], safety: ["DRS", "Fire Extinguisher"] } 
                }
            ]
        },
        {
            category: "SUV & Family",
            cars: [
                // --- VECHI ---
                { 
                    id: "range-rover-sport", name: "Range Rover Sport", 
                    images: ["https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IjhkYXozb2ZmbzFiNzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.-FoQQhuK94hgCwjhjRcki-MPAyRHd0YIx9ZcPw-iksY/image;s=1920x0;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6ImY1aTlscGQ2MDJxcjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.3jkbvs8xkiRuFVOnMbPKtRc3FRlBH20VQMOigP01I98/image;s=1920x0;q=100"], 
                    description: "SUV puternic.", cost: 150, specs: { transmission: "Automată", fuel: "Diesel", year: "2022", engine: "3.0L", power: "300 CP" }, 
                    features: { audio: ["Meridian", "Pivi Pro"], comfort: ["Suspensie aer", "Scaune ventilate"], safety: ["Blind Spot", "Wade Sensing"] } 
                },
                { 
                    id: "volvo-xc90", name: "Volvo XC90", 
                    images: ["https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6Inp3ODZmN2J4bm01NDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.bb2pNNcZhSBDczMH4f2EQpTN-nhx9d-dPyv-qCpWMDU/image;s=1920x0;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IjF5NzUwa3p5dWNzMjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.SWYohpRGmQY-QK0Y8xoMO08PkNE7OLumWGsB82LMEn8/image;s=1920x0;q=100"], 
                    description: "Siguranță de top.", cost: 130, specs: { transmission: "Automată", fuel: "Hibrid", year: "2023", engine: "2.0L", power: "455 CP" }, 
                    features: { audio: ["Bowers & Wilkins", "Google Auto"], comfort: ["7 Locuri", "Purificator aer"], safety: ["City Safety", "Pilot Assist"] } 
                },
                // --- NOI ---
                { 
                    id: "maybach-gls", name: "Mercedes-Maybach GLS", 
                    images: ["https://upload.wikimedia.org/wikipedia/commons/1/12/Mercedes-Maybach_GLS_600_4MATIC_%28X_167%29_IMG_3853.jpg", "https://upload.wikimedia.org/wikipedia/commons/f/f9/Mercedes-Maybach_GLS_600_4MATIC_%28X_167%29_IMG_3854.jpg"], 
                    description: "Luxul la înălțime.", cost: 600, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "4.0 V8", power: "558 CP" }, 
                    features: { audio: ["Burmester High-End", "Tablete Spate"], comfort: ["Frigider", "Scaune First Class"], safety: ["E-Active Body", "Pre-Safe"] } 
                },
                { 
                    id: "hyundai-tucson", name: "Hyundai Tucson", 
                    images: ["https://upload.wikimedia.org/wikipedia/commons/0/06/2021_Hyundai_Tucson_Ultimate_HEV_Auto_Front.jpg", "https://upload.wikimedia.org/wikipedia/commons/1/1a/2021_Hyundai_Tucson_Ultimate_HEV_Auto_Rear.jpg"], 
                    description: "Design futurist.", cost: 70, specs: { transmission: "Automată", fuel: "Hibrid", year: "2023", engine: "1.6 T-GDi", power: "230 CP" }, 
                    features: { audio: ["Krell", "BlueLink"], comfort: ["Scaune ventilate", "Remote Park"], safety: ["BVM", "HDA"] } 
                },
                { 
                    id: "vw-touareg", name: "VW Touareg", 
                    images: ["https://upload.wikimedia.org/wikipedia/commons/5/52/VW_Touareg_III_Atmosphere_front.jpg", "https://upload.wikimedia.org/wikipedia/commons/2/29/VW_Touareg_III_Atmosphere_rear.jpg"], 
                    description: "Robust și tehnologizat.", cost: 140, specs: { transmission: "Automată", fuel: "Diesel", year: "2022", engine: "3.0 V6 TDI", power: "286 CP" }, 
                    features: { audio: ["Dynaudio", "App Connect"], comfort: ["Cockpit Innovision", "Masaj"], safety: ["Night Vision", "IQ.Light"] } 
                }
            ]
        },
        {
            category: "Electric & Hybrid",
            cars: [
                // --- VECHI ---
                { 
                    id: "tesla-model-3", name: "Tesla Model 3", 
                    images: ["https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InQ2dzBlenJqYmVidy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.LvzTXPOBcyP6CejicYk4McSZI5yzKOw-Ri7ot6ZKNXc/image;s=1920x0;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6ImpmczJwaDc1OTdpbi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.GnuwLqZ83LL29t7f4IxGiMrnv782terlAs04Emk4Ux8/image;s=1920x0;q=100"], 
                    description: "Electric 100%.", cost: 110, specs: { transmission: "Automată", fuel: "Electric", year: "2022", engine: "Dual Motor", power: "490 CP" }, 
                    features: { audio: ["Premium Sound", "Netflix"], comfort: ["Glass Roof", "Heat Pump"], safety: ["Autopilot", "Sentry Mode"] } 
                },
                // --- NOI ---
                { 
                    id: "tesla-model-x", name: "Tesla Model X", 
                    images: ["https://upload.wikimedia.org/wikipedia/commons/9/92/2017_Tesla_Model_X_100D_Front.jpg", "https://upload.wikimedia.org/wikipedia/commons/1/14/2018_Tesla_Model_X_100D_Rear.jpg"], 
                    description: "SUV-ul electric suprem.", cost: 200, specs: { transmission: "Automată", fuel: "Electric", year: "2022", engine: "Plaid", power: "1020 CP" }, 
                    features: { audio: ["Immersive Sound", "Gaming"], comfort: ["Falcon Doors", "Parbriz Panoramic"], safety: ["FSD", "HEPA Filter"] } 
                },
                { 
                    id: "bmw-330e", name: "BMW 330e", 
                    images: ["https://upload.wikimedia.org/wikipedia/commons/2/23/BMW_330e_M_Sport_%28G20%29_IMG_4193.jpg", "https://upload.wikimedia.org/wikipedia/commons/5/52/BMW_330e_M_Sport_%28G20%29_IMG_4194.jpg"], 
                    description: "Hibrid sportiv.", cost: 90, specs: { transmission: "Automată", fuel: "Plug-in Hybrid", year: "2023", engine: "2.0L", power: "292 CP" }, 
                    features: { audio: ["HiFi", "CarPlay"], comfort: ["Precondiționare", "Scaune Sport"], safety: ["DTC", "Parking Assist"] } 
                }
            ]
        }
    ];

    const car = carsData
        .flatMap(category => category.cars)
        .find(c => c.id === id);

    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [days, setDays] = useState(0);

    if (!car) {
        return <div style={{padding:'50px',color:'white',background:'black',minHeight:'100vh',textAlign:'center'}}>Mașina nu există.<Link to="/cars" style={{display:'block',marginTop:'20px',color:'red'}}>Înapoi</Link></div>;
    }

    const isAdded = cartItems.some(item => item.id === car.id);

    const nextImage = () => {
        setCurrentImgIndex((prev) => (prev === car.images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImgIndex((prev) => (prev === 0 ? car.images.length - 1 : prev - 1));
    };

    const handleCalculate = () => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = end - start;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

            if (diffDays > 0) {
                setDays(diffDays);
                setTotalPrice(diffDays * car.cost);
            } else {
                alert("Data de returnare incorectă!");
            }
        } else {
            alert("Te rog selectează ambele date!");
        }
    };

    const handleAddToCart = () => {
        if (!isAdded) {
            dispatch(addItem(car));
        }
    };

    return (
        <div className="car-detail-page">
            <div style={{background: '#000', padding: '15px 30px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, boxSizing: 'border-box'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Link to="/cars" style={{color: '#aaa', textDecoration: 'none', fontWeight: 'bold', fontSize: '16px', display: 'flex', alignItems: 'center'}}>
                        <span style={{marginRight: '5px'}}>‹</span> Înapoi
                    </Link>
                    <span style={{marginLeft: '20px', color: '#ff4d4d', fontWeight: 'bold'}}> | {car.name}</span>
                </div>
                <Link to="/cart" style={{textDecoration: 'none', color: 'white'}}>
                    <div style={{ fontSize: '24px', position: 'relative', cursor: 'pointer' }}>
                        🛒 
                        {cartItems.length > 0 && (
                            <span style={{
                                position: 'absolute', top: '-5px', right: '-10px', 
                                background: '#ff4d4d', color: 'white', borderRadius: '50%', 
                                fontSize: '12px', padding: '2px 6px'
                            }}>
                                {cartItems.length}
                            </span>
                        )}
                    </div>
                </Link>
            </div>

            <div className="detail-container" style={{paddingTop: '100px'}}>
                <div className="left-content">
                    <h1 className="car-title">{car.name}</h1>
                    <div className="image-gallery-box">
                        <img src={car.images[currentImgIndex]} alt={car.name} className="main-image" />
                        <button className="slider-btn left-btn" onClick={prevImage}>❮</button>
                        <button className="slider-btn right-btn" onClick={nextImage}>❯</button>
                        
                        {/* Counter pentru poze */}
                        <div className="slide-counter">
                            {currentImgIndex + 1} / {car.images.length}
                        </div>
                    </div>
                    
                    <div className="section-card">
                        <h3>Specificații</h3>
                        <p>{car.description}</p>
                         <div className="specs-grid">
                            <div className="spec-item"><span className="spec-label">Transmisie</span><span className="spec-value">{car.specs?.transmission}</span></div>
                            <div className="spec-item"><span className="spec-label">Combustibil</span><span className="spec-value">{car.specs?.fuel}</span></div>
                            <div className="spec-item"><span className="spec-label">An</span><span className="spec-value">{car.specs?.year}</span></div>
                            <div className="spec-item"><span className="spec-label">Motor</span><span className="spec-value">{car.specs?.engine || 'N/A'}</span></div>
                            <div className="spec-item"><span className="spec-label">Putere</span><span className="spec-value">{car.specs?.power || 'N/A'}</span></div>
                        </div>
                    </div>

                    {/* --- AICI ESTE SECȚIUNEA DOTĂRI CARE LIPSEA --- */}
                    <div className="features-container">
                        <h3 className="section-title" style={{marginTop: '40px', marginBottom: '20px'}}>Dotări și Echipamente</h3>
                        {car.features && (
                            <>
                                <details className="feature-accordion" open>
                                    <summary>Audio și Tehnologie</summary>
                                    <ul className="feature-list">
                                        {car.features.audio.map((item, i) => (
                                            <li key={i}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </details>

                                <details className="feature-accordion">
                                    <summary>Confort și Echipamente</summary>
                                    <ul className="feature-list">
                                        {car.features.comfort.map((item, i) => (
                                            <li key={i}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </details>

                                <details className="feature-accordion">
                                    <summary>Siguranță și Asistență</summary>
                                    <ul className="feature-list">
                                        {car.features.safety.map((item, i) => (
                                            <li key={i}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </details>
                            </>
                        )}
                    </div>
                </div>

                <div className="right-sidebar">
                    <div className="calculator-card">
                        <div className="price-tag">€{car.cost} <span>/ zi</span></div>
                        <div className="calc-inputs">
                            <label>Preluare</label><input type="date" onChange={(e) => setStartDate(e.target.value)} />
                            <label>Returnare</label><input type="date" onChange={(e) => setEndDate(e.target.value)} />
                            <button onClick={handleCalculate} className="calc-btn">Calculează</button>
                        </div>
                        {totalPrice > 0 && (
                            <div className="result-box">
                                <div className="result-row"><span>Durată:</span><strong>{days} Zile</strong></div>
                                <div className="result-total"><span>Total:</span><strong>€{totalPrice}</strong></div>
                                
                                <button 
                                    className="finalize-btn"
                                    onClick={handleAddToCart}
                                    disabled={isAdded}
                                    style={{
                                        backgroundColor: isAdded ? '#444' : '#ff4d4d',
                                        color: isAdded ? '#aaa' : 'white',
                                        cursor: isAdded ? 'default' : 'pointer',
                                        marginTop: '15px',
                                        width: '100%',
                                        padding: '14px',
                                        border: 'none',
                                        borderRadius: '6px',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase'
                                    }}
                                >
                                    {isAdded ? 'Mașină Adăugată ✓' : 'Adaugă în Coș'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;