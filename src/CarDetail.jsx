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
                    images: ["https://www.netcarshow.com/Toyota-Corolla_Hatchback-2019-1280-01f25479186f659a1100a653d0c2c36098.jpg","https://www.netcarshow.com/Toyota-Corolla_Hatchback-2019-1280-01f25479186f659a1100a653d0c2c36098.jpg", "https://www.netcarshow.com/Toyota-Corolla_Hatchback-2019-1280-0eecdf9b3910c3f432a3488de36edb878e.jpg?token=593b91b0141fa2459eb568e0dc20b280c4c2db5927677213f0e774b", "https://www.netcarshow.com/Toyota-Corolla_Hatchback-2019-th-8.jpg"], 
                    description: "Toyota Corolla este alegerea ideală pentru deplasările urbane.", cost: 45, specs: { transmission: "Automată", fuel: "Hibrid", year: "2022", engine: "1.8L", power: "122 CP" }, 
                    features: { audio: ["CarPlay", "Bluetooth"], comfort: ["AC", "Scaune încălzite"], safety: ["ABS", "Camera Spate"] } 
                },
                { 
                    id: "vw-golf-8", name: "Volkswagen Golf 8", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/5b/5bd5091f-7cfe-4a40-9c83-bae9efde3546?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/b5/b54cfe54-7645-442a-9fa1-3d87f6b38736?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/83/83805fdb-adce-48e3-a463-b5496008c02c?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/f2/f29bd19b-67be-4320-972d-b8e08c4950f5?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/d3/d3425730-2794-4d0a-8c8c-f4cc0d5ed099?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/d7/d78852e9-0689-430f-9de3-bcc479b63588?rule=mo-1600"], 
                    description: "VW Golf 8 modern.", cost: 65, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "1.5 TSI", power: "150 CP" }, 
                    features: { audio: ["Navi", "Digital Cockpit"], comfort: ["Keyless", "Volan Piele"], safety: ["Lane Assist", "Front Assist"] } 
                },
                { 
                    id: "ford-focus", name: "Ford Focus", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/8c/8c1019e6-d094-4046-8974-06f0d166040b?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/0f/0f64c12d-9ffb-47f4-a3ce-d2eedea8d9f0?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/e2/e2c45fa6-2e01-4c69-b2d2-1f8d5efe7065?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/3b/3b53bd11-575f-468f-814c-ea4817a7a83f?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/57/57f5723a-0ba6-4f99-8693-f435c2154015?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/cb/cb69d223-5c01-4a32-8e88-145289d35858?rule=mo-1600"], 
                    description: "Ford Focus manevrabil.", cost: 58, specs: { transmission: "Manuală", fuel: "Diesel", year: "2021", engine: "1.5 EcoBlue", power: "120 CP" }, 
                    features: { audio: ["SYNC 3", "6 Boxe"], comfort: ["AC", "Oglinzi electrice"], safety: ["ESP", "Asistenta panta"] } 
                },
                // --- NOI ---
                { 
                    id: "ford-fiesta", name: "Ford Fiesta", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/91/9166fe18-8ccc-4ec0-9a5c-19c57ad10243?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/84/843b5bcb-6cc4-493d-a6b8-83215f34c536?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/34/3486a821-f6f3-4df5-9982-889b6897d074?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/90/90b6e0e9-aebf-40ab-a1d0-ac1004811540?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/5c/5c274fe0-8dd1-4fb3-b9af-34000795f4b7?rule=mo-1600"], 
                    description: "Compactă și agilă.", cost: 35, specs: { transmission: "Manuală", fuel: "Benzină", year: "2019", engine: "1.0 EcoBoost", power: "100 CP" }, 
                    features: { audio: ["Bluetooth", "Radio"], comfort: ["AC Manual", "Geamuri electrice"], safety: ["ABS", "Airbag-uri"] } 
                },
                { 
                    id: "dacia-logan", name: "Dacia Logan", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/f7/f71f485d-f026-4a73-86b4-7ead3bdeb28a?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/76/76b35740-6125-4c02-90c5-8dde4a9957f0?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/67/6728307c-ab12-44ce-b2ec-c90b9d47d26e?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/55/55623896-9039-412f-8653-a8b346eabf13?rule=mo-1600"], 
                    description: "Spațioasă și economică.", cost: 30, specs: { transmission: "Manuală", fuel: "Benzină + GPL", year: "2023", engine: "1.0 TCe", power: "100 CP" }, 
                    features: { audio: ["Media Nav", "Bluetooth"], comfort: ["Geamuri electrice", "Cotiera"], safety: ["ESP", "LED Lights"] } 
                },
                { 
                    id: "audi-a4", name: "Audi A4", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/e4/e4542d20-8352-433e-82c3-268cf68988a6?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/32/32b264e5-1ac6-48ad-9519-e6ccabccc82c?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/2c/2c0fee08-2890-4b42-ad5b-67bdc75e2d70?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/1a/1a26b487-ebbf-4842-b504-5665a7ac0ba5?rule=mo-1600"], 
                    description: "Eleganță business.", cost: 85, specs: { transmission: "Automată", fuel: "Diesel", year: "2021", engine: "2.0 TDI", power: "190 CP" }, 
                    features: { audio: ["MMI Plus", "Audi Sound"], comfort: ["Climatronic 3 zone", "Scaune Sport"], safety: ["Pre Sense", "Side Assist"] } 
                },
                { 
                    id: "hyundai-i30", name: "Hyundai i30", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/0e/0e0d58c6-308a-4b19-93df-c9544fd69713?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/91/91e6a538-301b-45ba-b3a0-76fc6bf99a9a?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/7e/7e240f05-a6a5-465e-a263-887aa45549d5?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/a8/a8a5f839-fbc6-40e9-af94-c9f4d43fa40e?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/8d/8dbb899a-9a89-40c3-9858-a01f6943405f?rule=mo-1600"], 
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
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/72/7274d6b8-607f-44e9-a9eb-9d94035f99ba?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/05/055c4a74-d0ef-4f5c-bcb1-90ef16d11f44?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/c5/c594648c-23c8-4be6-b3ce-43cac491ca36?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/b8/b81b7990-b9f4-473a-98b8-64058ecbbd06?rule=mo-1600"], 
                    description: "Lux suprem.", cost: 230, specs: { transmission: "Automată", fuel: "Diesel", year: "2023", engine: "3.0L", power: "286 CP" }, 
                    features: { audio: ["Burmester 4D", "MBUX"], comfort: ["Masaj", "Piele Nappa"], safety: ["Distronic", "Night Vision"] } 
                },
                { 
                    id: "bmw-7-series", name: "BMW Seria 7", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/3b/3b67692b-2786-40a3-b9e7-03730943dcef?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/a9/a9d28f7f-b1cd-4fff-81ba-9811c845c6c4?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/98/98e4cbc2-4c8f-4cde-ab49-f8369e955ace?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/8d/8dc90cfc-d720-4e23-ab6a-c62985b6564b?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/f2/f21487a3-47b4-42a4-8900-0adb39d22491?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/aa/aad81d14-bf86-4992-9705-04e6ebf549f8?rule=mo-1600"], 
                    description: "Sport și confort.", cost: 190, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "3.0L", power: "340 CP" }, 
                    features: { audio: ["Harman Kardon", "Gesture Control"], comfort: ["Soft Close", "Perdelute electrice"], safety: ["Laserlight", "Driving Assistant"] } 
                },
                // --- NOI ---
                { 
                    id: "rolls-royce-phantom", name: "Rolls-Royce Phantom", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/54/54421a3a-7429-4648-bb6b-ff60676f043c?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/a5/a5204762-5bbc-4d0d-95aa-dc4bd676a73a?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/c1/c10501e5-313a-4f26-bec0-cef069c943ec?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/ff/ffd71cc5-23e2-49e5-86ee-fa51be730343?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/f8/f8455e6b-6ec9-4da5-b45b-c0fbfc3f7eb8?rule=mo-1600"], 
                    description: "Opulență absolută.", cost: 1200, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "6.75L V12", power: "563 CP" }, 
                    features: { audio: ["Bespoke Audio", "TV"], comfort: ["Plafon înstelat", "Sampanie"], safety: ["Night Vision", "Bodyguard"] } 
                },
                { 
                    id: "audi-s8", name: "Audi S8", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/36/36dbb2b5-e708-46db-8c5b-989ec552b66c?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/77/775a6267-5756-4c4b-8071-15c9071e1d6b?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/46/460208f1-4634-4910-9eac-d8f1c99fbaa5?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/dd/ddaded02-b3fb-47ef-b04c-b733d13b82b2?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/31/31121cb8-54dc-4078-a510-447f523a8508?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/ea/ea5db0ad-5f18-40ad-a5ab-8458c9ce3c9c?rule=mo-1600"], 
                    description: "Limuzina sportivă.", cost: 250, specs: { transmission: "Automată", fuel: "Benzină", year: "2022", engine: "4.0 TFSI", power: "571 CP" }, 
                    features: { audio: ["Bang & Olufsen", "Subwoofer"], comfort: ["Suspensie Activă", "Masaj"], safety: ["Matrix LED", "Ceramic Brakes"] } 
                },
                { 
                    id: "vw-phaeton", name: "VW Phaeton", 
                    images: ["https://www.netcarshow.com/Volkswagen-Phaeton_D2_Concept-2016-1280-4feed6ce12c23073c5818e3a00ed4834c3.jpg", "https://www.netcarshow.com/Volkswagen-Phaeton_D2_Concept-2016-1280-0433c6327c7fae07611d2120101567af93.jpg", "https://www.netcarshow.com/Volkswagen-Phaeton_D2_Concept-2016-1280-2b8dd56c3a4fdde44df5afd7b0e17d2b5a.jpg?token=632b01081414b8449c058fe0fc25b967d8b6b19633562417d56287b"], 
                    description: "Clasic și confortabil.", cost: 100, specs: { transmission: "Automată", fuel: "Diesel", year: "2016", engine: "3.0 TDI", power: "245 CP" }, 
                    features: { audio: ["Dynaudio", "CD Changer"], comfort: ["Scaune ventilate", "Suspensie pneumatica"], safety: ["ACC", "Side Assist"] } 
                },
                { 
                    id: "bentley-flying-spur", name: "Bentley Flying Spur", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/30/30774bda-eabd-4ad6-a224-4f01f973c12a?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/36/36c4d037-d53b-46d7-8a76-72d79af745de?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/db/db9e5c05-875c-45ce-877c-84c6e7bd3ce3?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/27/275b1741-501b-4276-a378-9ebf1c73fd00?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/a8/a870ca6a-98c9-4343-a7a6-a38fe48ad2f5?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/b8/b877e766-3792-4490-a986-d66f5b05b9a2?rule=mo-1600"], 
                    description: "Clasic și confortabil.", cost: 100, specs: { transmission: "Automată", fuel: "Diesel", year: "2016", engine: "3.0 TDI", power: "245 CP" }, 
                    features: { audio: ["Dynaudio", "CD Changer"], comfort: ["Scaune ventilate", "Suspensie pneumatica"], safety: ["ACC", "Side Assist"] } 
                },
                { 
                    id: "lexus-ls", name: "Lexus LS", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/85/8554fa3f-ce28-47aa-818f-a40839780fea?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/af/af56158b-12ee-4005-a61b-d35adfbfa4f3?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/21/218c3a07-1543-4aa8-a55d-4cec60fbfc69?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/e9/e97f54b6-dc89-455d-b5f4-67b11e833f2e?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/f6/f6227a92-a1a4-4f17-9a0d-e72ae3d3da9d?rule=mo-1600"], 
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
                    images: ["https://www.netcarshow.com/Chevrolet-Corvette_ZR1-2025-1280-b2f818c5240c9474eb7cdd3f808c2ec1c3.jpg", "https://www.netcarshow.com/Chevrolet-Corvette_ZR1-2025-1280-8f3ed9cf3eb37defc6957b8740686f69d9.jpg", "https://www.netcarshow.com/Chevrolet-Corvette_ZR1-2025-1280-9ec522765afd0be0d114d82070a85f7134.jpg", "https://www.netcarshow.com/Chevrolet-Corvette_ZR1-2025-1280-06bfd6ec645a3d0756c34caa10f4443f2b.jpg?token=77f3e1541414b8449b058fe0fc2f44e4ea62d241d9d5328f854a853"], 
                    description: "Putere americană brută.", cost: 400, specs: { transmission: "Automată", fuel: "Benzină", year: "2020", engine: "6.2L V8", power: "755 CP" }, 
                    features: { audio: ["Bose Performance", "Apple CarPlay"], comfort: ["Scaune Sport", "Targa Roof"], safety: ["Track Mode", "Ceramic Brakes"] } 
                },
                { 
                    id: "ferrari-f8", name: "Ferrari F8 Tributo", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/37/371cc7f3-9577-485e-83e5-a6af2efe90c3?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/c4/c4c6dde9-2331-4a54-96f8-03abd4f66077?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/1f/1f1d9752-e0a2-4582-9f36-f399661ce7d2?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/2b/2b2c76f3-2161-415c-b4ef-44e1beb6d3f1?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/69/695b3086-3c67-46f8-9d34-3164fc691d86?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/71/71d213cf-3414-4ab2-9306-d495004480b1?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/ef/ef6d3469-a602-4c9f-990a-db3992e70d7d?rule=mo-1600"], 
                    description: "Capodopera italiană.", cost: 900, specs: { transmission: "F1", fuel: "Benzină", year: "2022", engine: "3.9L V8 Turbo", power: "720 CP" }, 
                    features: { audio: ["JBL Pro", "Telemetry"], comfort: ["Piele Alcantara", "Clima 2 zone"], safety: ["Carbon Ceramic", "F1 Trac"] } 
                },
                { 
                    id: "lamborghini-revuelto", name: "Lamborghini Revuelto", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/b2/b25d3559-b5f8-42df-9669-b939f1f80860?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/10/10fef21e-eb43-4381-b33d-00c04b130ddb?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/13/13c2ebca-0d5d-4ddc-8a60-0f0893b787ec?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/ac/acf3d0f7-bec5-41b9-b104-c8e06e515bce?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/d2/d269925e-8a41-456a-8afe-418a8d2b9e4a?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/05/0518ddb9-fe56-4587-945a-66f611da252f?rule=mo-1600"], 
                    description: "V12 Hibrid.", cost: 1500, specs: { transmission: "Automată", fuel: "Hibrid V12", year: "2024", engine: "6.5L V12", power: "1015 CP" }, 
                    features: { audio: ["Sensonum", "Amazon Alexa"], comfort: ["Telemetry", "Lift System"], safety: ["AWD", "Carbon Monocoque"] } 
                },
                { 
                    id: "porsche-gt3rs", name: "Porsche 911 GT3 RS", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/f4/f4337b10-e423-4819-ace4-3e866eef9faa?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/07/07bb9655-ae6a-408e-9ee7-aabbc77918e4?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/91/91413ace-7e53-4ab1-8ca6-67eac276fcea?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/29/29122c60-2b4a-400f-99ee-b9eebccf86ee?rule=mo-1600"], 
                    description: "Născută pe circuit.", cost: 800, specs: { transmission: "PDK", fuel: "Benzină", year: "2023", engine: "4.0L Boxer", power: "525 CP" }, 
                    features: { audio: ["Sound Package", "Track App"], comfort: ["Roll Cage", "Carbon Seats"], safety: ["DRS", "Fire Extinguisher"] } 
                },
                { 
                    id: "mclaren-720s", name: "McLaren 720S", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/5f/5f92ec69-7350-41de-a260-7ffc47e96550?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/ec/eccce617-f601-4d82-8aa6-477edda51c75?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/3b/3b93e60f-ae41-45bf-8657-b9060d75f1cf?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/81/8138d7ec-634c-482a-b450-a5fc19a6fd20?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/8e/8e10a48c-c5fb-46ad-9cd0-8e77b961ca1a?rule=mo-1600"], 
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
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/3c/3c1cb9b1-bc78-4406-bb10-a2cc9281539d?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/c3/c3dd003a-db43-41e9-999f-6cc0be89e44d?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/f0/f0e4345b-68b6-4962-a0d5-5259c38da4fc?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/bd/bd2b504b-fb92-451c-8e38-80169fd5d500?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/e4/e4e0b694-fc7b-49f1-a1ac-70b631164a1d?rule=mo-1600"], 
                    description: "SUV puternic.", cost: 150, specs: { transmission: "Automată", fuel: "Diesel", year: "2022", engine: "3.0L", power: "300 CP" }, 
                    features: { audio: ["Meridian", "Pivi Pro"], comfort: ["Suspensie aer", "Scaune ventilate"], safety: ["Blind Spot", "Wade Sensing"] } 
                },
                { 
                    id: "volvo-xc90", name: "Volvo XC90", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/8a/8a1211c3-0f71-46d8-b9db-7ad61a8caef1?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/da/da424426-1f0d-44f7-989a-b57dc6310b70?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/22/227057c8-36f6-492c-81c2-9c35231eca69?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/4d/4dee672c-8dc5-43a4-a84a-dc611b2fad4c?rule=mo-1600"], 
                    description: "Siguranță de top.", cost: 130, specs: { transmission: "Automată", fuel: "Hibrid", year: "2023", engine: "2.0L", power: "455 CP" }, 
                    features: { audio: ["Bowers & Wilkins", "Google Auto"], comfort: ["7 Locuri", "Purificator aer"], safety: ["City Safety", "Pilot Assist"] } 
                },
                // --- NOI ---
                { 
                    id: "maybach-gls", name: "Mercedes-Maybach GLS", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/cc/cc0f65af-7256-45d8-a4ef-dc1e2edc9bce?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/68/68df55ee-8eb1-484c-a821-1a3ca81c7b90?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/af/af17fe0c-ad1b-48ef-bbd3-fe89421ff1e8?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/6d/6d58c9fe-4333-477f-83dd-56461a7c69c8?rule=mo-1600"], 
                    description: "Luxul la înălțime.", cost: 600, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "4.0 V8", power: "558 CP" }, 
                    features: { audio: ["Burmester High-End", "Tablete Spate"], comfort: ["Frigider", "Scaune First Class"], safety: ["E-Active Body", "Pre-Safe"] } 
                },
                { 
                    id: "hyundai-tucson", name: "Hyundai Tucson", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/33/33386a6a-e2bd-455c-b13e-5e54f827d6ff?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/e2/e2d46f9d-571d-4adb-adf1-1772c28dd555?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/3b/3b2e5447-3d6f-4967-b24a-d6e1fc045a28?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/33/33eac711-c0e4-4b97-883a-c2f565ced068?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/a1/a170150d-3942-457d-8c24-4d0a2643a967?rule=mo-1600"], 
                    description: "Design futurist.", cost: 70, specs: { transmission: "Manuală", fuel: "Hibrid", year: "2023", engine: "1.6 T-GDi", power: "230 CP" }, 
                    features: { audio: ["Krell", "BlueLink"], comfort: ["Scaune ventilate", "Remote Park"], safety: ["BVM", "HDA"] } 
                },
                { 
                    id: "vw-touareg", name: "VW Touareg", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/38/38d75618-282c-4802-9daf-7ea63c54129b?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/bc/bc5fe510-42d2-4a7c-87dc-0f35781eaf59?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/bc/bc5fe510-42d2-4a7c-87dc-0f35781eaf59?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/e8/e8ba0146-c187-4c32-aef0-d8e4f4d2ad4f?rule=mo-1600"], 
                    description: "Robust și tehnologizat.", cost: 140, specs: { transmission: "Automată", fuel: "Diesel", year: "2022", engine: "3.0 V6 TDI", power: "286 CP" }, 
                    features: { audio: ["Dynaudio", "App Connect"], comfort: ["Cockpit Innovision", "Masaj"], safety: ["Night Vision", "IQ.Light"] } 
                },
                { 
                    id: "bmw-x5", name: "BMW X5", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/37/37fc9dea-e64c-4f7d-ad64-f543eef14b72?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/73/738c7c0a-ea4b-4bdf-bdf7-e8dfb78209d7?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/5e/5e0c65f6-0465-457a-939f-60c278541e46?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/c7/c76b1651-bc5e-47ae-9978-dc9b8a316143?rule=mo-1600"], 
                    description: "Robust și tehnologizat.", cost: 140, specs: { transmission: "Automată", fuel: "Diesel", year: "2022", engine: "3.0 V6 TDI", power: "286 CP" }, 
                    features: { audio: ["Dynaudio", "App Connect"], comfort: ["Cockpit Innovision", "Masaj"], safety: ["Night Vision", "IQ.Light"] } 
                },
                { 
                    id: "audi-q7", name: "Audi Q7", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/a6/a6b404e7-15b8-40d0-9da7-be4bc8e74a9d?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/b3/b386f814-4808-4965-8f63-6e75bdc0dfad?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/b3/b386f814-4808-4965-8f63-6e75bdc0dfad?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/b3/b386f814-4808-4965-8f63-6e75bdc0dfad?rule=mo-1600"], 
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
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/13/13d10ac3-9edd-484d-8f09-cd50440ee98c?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/d4/d4528a25-c929-4784-a53b-ee1a21976f09?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/d4/d4528a25-c929-4784-a53b-ee1a21976f09?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/a0/a030aac0-a8a6-4415-ae7f-bdf517e88613?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/0d/0d5983a5-7f09-456a-b530-101c6fe1c8ba?rule=mo-1600"], 
                    description: "Electric 100%.", cost: 110, specs: { transmission: "Automată", fuel: "Electric", year: "2022", engine: "Dual Motor", power: "490 CP" }, 
                    features: { audio: ["Premium Sound", "Netflix"], comfort: ["Glass Roof", "Heat Pump"], safety: ["Autopilot", "Sentry Mode"] } 
                },
                // --- NOI ---
                { 
                    id: "tesla-model-x", name: "Tesla Model X", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/91/91c95ac2-5271-45fa-80b1-f934d27a4315?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/5d/5d0cb250-9a09-4dca-9c31-119a78ecd53d?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/ed/ed9a1e93-777d-48d0-9d86-7f97b0120bac?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/b5/b5898cf3-13e0-4090-ae2f-e752f7bf00b6?rule=mo-1600"], 
                    description: "SUV-ul electric suprem.", cost: 200, specs: { transmission: "Automată", fuel: "Electric", year: "2022", engine: "Plaid", power: "1020 CP" }, 
                    features: { audio: ["Immersive Sound", "Gaming"], comfort: ["Falcon Doors", "Parbriz Panoramic"], safety: ["FSD", "HEPA Filter"] } 
                },
                { 
                    id: "bmw-330e", name: "BMW 330e", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/99/99ca29a5-a9e2-4a41-89db-62b760ef7e03?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/6d/6d6993cc-05f2-42e6-82e3-ac2e6e7d1211?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/6d/6d6993cc-05f2-42e6-82e3-ac2e6e7d1211?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/38/3858734a-a720-4933-9c6d-4a1b2c41a90d?rule=mo-1600"], 
                    description: "Hibrid sportiv.", cost: 90, specs: { transmission: "Automată", fuel: "Plug-in Hybrid", year: "2023", engine: "2.0L", power: "292 CP" }, 
                    features: { audio: ["HiFi", "CarPlay"], comfort: ["Precondiționare", "Scaune Sport"], safety: ["DTC", "Parking Assist"] } 
                },
                { 
                    id: "porsche-taycan", name: "Porsche Taycan", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/c3/c3c0ea40-5ee0-4bb1-b259-ef3a43d92021?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/61/6147ffb7-5460-4a18-b5d0-f0f5119a1d9f?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/43/4339333a-16da-44b7-a490-5b1619676b1c?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/1d/1de3fadb-0dcd-4a43-81ce-0329ee8501d2?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/95/9557c8bc-1b25-4e00-8459-d6e026f6777a?rule=mo-1600"], 
                    description: "Hibrid sportiv.", cost: 90, specs: { transmission: "Automată", fuel: "Plug-in Hybrid", year: "2023", engine: "2.0L", power: "292 CP" }, 
                    features: { audio: ["HiFi", "CarPlay"], comfort: ["Precondiționare", "Scaune Sport"], safety: ["DTC", "Parking Assist"] } 
                },
                { 
                    id: "audi-etron-gt", name: "Audi RS e-tron GT", 
                    images: ["https://img.classistatic.de/api/v1/mo-prod/images/8d/8d1617fa-e086-40a1-8042-420a675664f6?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/fa/fab7dad2-9675-4812-9987-748fc1e5443a?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/6f/6f9dbf40-987c-48be-bb1e-c3d0ff0f0505?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/27/275f6f70-7203-4412-9493-77eb82622dc9?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/ab/ab04cc1f-3f7b-4978-9700-ca50f4e4c5ae?rule=mo-1600", "https://img.classistatic.de/api/v1/mo-prod/images/2b/2b7025c5-2548-4812-9150-370dcea82d45?rule=mo-1600"], 
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