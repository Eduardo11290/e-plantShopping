import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ProductList.css';
import { addItem } from './CartSlice';

function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const carsData = [
        {
            category: "Economic & Compact",
            cars: [
                { 
                    id: "toyota-corolla", name: "Toyota Corolla", 
                    images: ["https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inhibmlqb3QxbjRoZDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.-EubbcT2lp38Z3bopoHetuAukJ8B499Pc8yfUiVuwmM/image;s=1920x0;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImVlM2FrZjF5amt6aTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.4yhboJUHxEUCzVC73UyAr5R08HanVGdWQrwW7hhZUO4/image;s=1920x0;q=100", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ijl0cWY3dXRydXNqbzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.uBtwUE-mxIc8vUUfxdPetTeHtdccQ384fwa_es0ZDsI/image;s=1920x0;q=100"], 
                    description: "Toyota Corolla este alegerea ideală pentru deplasările urbane.", cost: 45, specs: { transmission: "Automată", fuel: "Hibrid", year: "2022", engine: "1.8L", power: "122 CP" }, features: { audio: ["CarPlay"], comfort: ["AC"], safety: ["ABS"] } 
                },
                { 
                    id: "vw-golf-8", name: "Volkswagen Golf 8", 
                    images: ["https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImU2eDduYmZobnFmZDMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.9S0LmainUTjtJTNtSP5NQ-N18a8QGf9sAVHVCDHjhCo/image;s=1920x0;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IndzNGFxM3IzaGdiMjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.tyizFrE18-SanyvtxVoPVfGrUVTxjX6rSt2VCHpWHsk/image;s=1920x0;q=100", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InZlOHVjeDR3dTRwaTItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.J3QK8djX-XZa1TzlLMPYcgRB2lDJKK86p3iXrcpOmxY/image;s=1920x0;q=100"], 
                    description: "VW Golf 8 modern.", cost: 65, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "1.5 TSI", power: "150 CP" }, features: { audio: ["Navi"], comfort: ["Keyless"], safety: ["Lane Assist"] } 
                },
                { 
                    id: "ford-focus", name: "Ford Focus", 
                    images: ["https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjFlZzB3NmhldmxsbjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.jV_Eucwu2qumfHcCgXjqwSqQt9hyVgmUSj5XKmQIohQ/image;s=1920x0;q=100", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjJkaTQ2YXM3eHV0bzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.gbOgPAeCmGU0WhiN-MG4b34iXi3zifHrl19F9wkPDfk/image;s=1920x0;q=100", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6Ijl0cWY3dXRydXNqbzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.uBtwUE-mxIc8vUUfxdPetTeHtdccQ384fwa_es0ZDsI/image;s=1920x0;q=100"], 
                    description: "Ford Focus manevrabil.", cost: 58, specs: { transmission: "Manuală", fuel: "Diesel", year: "2021", engine: "1.5 EcoBlue", power: "120 CP" }, features: { audio: ["SYNC 3"], comfort: ["AC"], safety: ["ESP"] } 
                },
                { id: "ford-fiesta", name: "Ford Fiesta", images: ["https://images.unsplash.com/photo-1599933583689-d481615d0231?auto=format&fit=crop&w=1920&q=80", "https://images.unsplash.com/photo-1626354674066-6f81c9a6a863?auto=format&fit=crop&w=1920&q=80"], description: "Compactă și agilă.", cost: 40, specs: { transmission: "Manuală", fuel: "Benzină", year: "2020", engine: "1.0 EcoBoost", power: "100 CP" }, features: { audio: ["Bluetooth"], comfort: ["AC Manual"], safety: ["ABS"] } },
                { id: "dacia-logan", name: "Dacia Logan", images: ["https://images.unsplash.com/photo-1624608311100-2e00858b5608?auto=format&fit=crop&w=1920&q=80", "https://images.unsplash.com/photo-1620803450379-30756770e28f?auto=format&fit=crop&w=1920&q=80"], description: "Spațioasă și economică.", cost: 35, specs: { transmission: "Manuală", fuel: "Benzină + GPL", year: "2023", engine: "1.0 TCe", power: "100 CP" }, features: { audio: ["Radio"], comfort: ["Geamuri electrice"], safety: ["ESP"] } },
                { id: "audi-a4", name: "Audi A4", images: ["https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=1920&q=80", "https://images.unsplash.com/photo-1603577006653-5d75323a6d71?auto=format&fit=crop&w=1920&q=80"], description: "Eleganță business.", cost: 85, specs: { transmission: "Automată", fuel: "Diesel", year: "2021", engine: "2.0 TDI", power: "190 CP" }, features: { audio: ["MMI Plus"], comfort: ["Climatronic 3 zone"], safety: ["Pre Sense"] } },
                { id: "hyundai-i30", name: "Hyundai i30", images: ["https://images.unsplash.com/photo-1629896748439-d4c382f1b4a3?auto=format&fit=crop&w=1920&q=80", "https://images.unsplash.com/photo-1582264661845-e67c8702434e?auto=format&fit=crop&w=1920&q=80"], description: "Design modern.", cost: 50, specs: { transmission: "Automată", fuel: "Benzină", year: "2022", engine: "1.5 T-GDi", power: "160 CP" }, features: { audio: ["Touchscreen"], comfort: ["Scaune încălzite"], safety: ["Lane Keep"] } }
            ]
        },
        {
            category: "Luxury & Executive",
            cars: [
                { 
                    id: "mercedes-s-class", name: "Mercedes-Benz S-Class", 
                    images: ["https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imhmc29oNmlzMW56ZzMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.h7sqG3kwvFEBoWwDa9w9H5fAimXP5Z2v8QAsjyRnfAg/image;s=1920x0;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImRrYXJ3YWs5MTZndy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.UT0nkdJP2yv4obOiWiTNeJGeBZrIXcWeAPlDOOdh4SQ/image;s=1920x0;q=100", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InV1aXN2aWowamJ5aC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.N12qRR0b8449Q8WqWqWXC_gqWnvR9xLGA_8ALfNCeuc/image;s=1920x0;q=100"], 
                    description: "Lux suprem.", cost: 230, specs: { transmission: "Automată", fuel: "Diesel", year: "2023", engine: "3.0L", power: "286 CP" }, features: { audio: ["Burmester"], comfort: ["Masaj"], safety: ["Distronic"] } 
                },
                { 
                    id: "bmw-7-series", name: "BMW Seria 7", 
                    images: ["https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Imx1Y2R1amd3aGp1di1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.eNYiyVzuOm-UGOwyPHpgcwsPSS5yvSmhPJk4_hxUTXQ/image;s=1920x0;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InRwYWo4OThqYjBtODEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.OENHEUN1eXOdGnzEnomiMwzHpf7PAHcVzFMkIgZj9To/image;s=1920x0;q=100", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImZ5dWE3MzdqNWxocTEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.O2kamhgt47lfAP967VujU6HdPZpEBqixJ1ulAksuu9E/image;s=1920x0;q=100"], 
                    description: "Sport și confort.", cost: 190, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "3.0L", power: "340 CP" }, features: { audio: ["Harman"], comfort: ["Soft Close"], safety: ["Laserlight"] } 
                },
                { id: "rolls-royce-phantom", name: "Rolls-Royce Phantom", images: ["https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1920&q=80", "https://images.unsplash.com/photo-1564855146033-68d716298d9e?auto=format&fit=crop&w=1920&q=80"], description: "Opulență absolută.", cost: 1200, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "6.75L V12", power: "563 CP" }, features: { audio: ["Bespoke"], comfort: ["Plafon înstelat"], safety: ["Night Vision"] } },
                { id: "audi-s8", name: "Audi S8", images: ["https://images.unsplash.com/photo-1603577006505-1a221f576356?auto=format&fit=crop&w=1920&q=80", "https://images.unsplash.com/photo-1614207908585-802341902891?auto=format&fit=crop&w=1920&q=80"], description: "Limuzina sportivă.", cost: 250, specs: { transmission: "Automată", fuel: "Benzină", year: "2022", engine: "4.0 TFSI", power: "571 CP" }, features: { audio: ["Bang & Olufsen"], comfort: ["Suspensie Activă"], safety: ["Matrix LED"] } },
                { id: "vw-phaeton", name: "VW Phaeton", images: ["https://images.unsplash.com/photo-1627454820574-d021d5a7d656?auto=format&fit=crop&w=1920&q=80"], description: "Clasic și confortabil.", cost: 100, specs: { transmission: "Automată", fuel: "Diesel", year: "2016", engine: "3.0 TDI", power: "245 CP" }, features: { audio: ["Dynaudio"], comfort: ["Scaune ventilate"], safety: ["ACC"] } },
                { id: "bentley-flying-spur", name: "Bentley Flying Spur", images: ["https://images.unsplash.com/photo-1563720222927-84382834df8b?auto=format&fit=crop&w=1920&q=80"], description: "Lux britanic.", cost: 500, specs: { transmission: "Automată", fuel: "Benzină", year: "2022", engine: "6.0 W12", power: "635 CP" }, features: { audio: ["Naim"], comfort: ["Masaj pietre calde"], safety: ["HUD"] } },
                { id: "lexus-ls", name: "Lexus LS", images: ["https://images.unsplash.com/photo-1619553765108-a5677e8a937a?auto=format&fit=crop&w=1920&q=80"], description: "Ospitalitate japoneză.", cost: 180, specs: { transmission: "Automată", fuel: "Hibrid", year: "2022", engine: "3.5L V6", power: "359 CP" }, features: { audio: ["Mark Levinson"], comfort: ["Scaune Ottoman"], safety: ["Lexus Safety +"] } }
            ]
        },
        {
            category: "Supercars & Sport",
            cars: [
                { id: "chevrolet-corvette-zr1", name: "Chevrolet Corvette ZR1", images: ["https://images.unsplash.com/photo-1599925232938-144c45c1af13?auto=format&fit=crop&w=1920&q=80", "https://images.unsplash.com/photo-1582264661845-e67c8702434e?auto=format&fit=crop&w=1920&q=80"], description: "Putere americană brută.", cost: 400, specs: { transmission: "Automată", fuel: "Benzină", year: "2020", engine: "6.2L V8", power: "755 CP" }, features: { audio: ["Bose"], comfort: ["Scaune Sport"], safety: ["Track Mode"] } },
                { id: "ferrari-f8", name: "Ferrari F8 Tributo", images: ["https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1920&q=80", "https://images.unsplash.com/photo-1583121274602-3e2820c698d9?auto=format&fit=crop&w=1920&q=80"], description: "Capodopera italiană.", cost: 900, specs: { transmission: "F1", fuel: "Benzină", year: "2022", engine: "3.9L V8 Turbo", power: "720 CP" }, features: { audio: ["JBL"], comfort: ["Piele Alcantara"], safety: ["Carbon Ceramic"] } },
                { id: "lamborghini-revuelto", name: "Lamborghini Revuelto", images: ["https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1920&q=80", "https://images.unsplash.com/photo-1511407397940-d57f68e81259?auto=format&fit=crop&w=1920&q=80"], description: "V12 Hibrid.", cost: 1500, specs: { transmission: "Automată", fuel: "Hibrid V12", year: "2024", engine: "6.5L V12", power: "1015 CP" }, features: { audio: ["Sensonum"], comfort: ["Telemetry"], safety: ["AWD"] } },
                { id: "porsche-gt3rs", name: "Porsche 911 GT3 RS", images: ["https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&w=1920&q=80", "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1920&q=80"], description: "Născută pe circuit.", cost: 800, specs: { transmission: "PDK", fuel: "Benzină", year: "2023", engine: "4.0L Boxer", power: "525 CP" }, features: { audio: ["Sound Package"], comfort: ["Roll Cage"], safety: ["DRS"] } },
                { id: "mclaren-720s", name: "McLaren 720S", images: ["https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1920&q=80"], description: "Aerodinamică perfectă.", cost: 850, specs: { transmission: "Automată", fuel: "Benzină", year: "2022", engine: "4.0L V8", power: "720 CP" }, features: { audio: ["Bowers & Wilkins"], comfort: ["Uși fluture"], safety: ["Variable Drift"] } }
            ]
        },
        {
            category: "SUV & Family",
            cars: [
                { 
                    id: "range-rover-sport", name: "Range Rover Sport", 
                    images: ["https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjhkYXozb2ZmbzFiNzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.-FoQQhuK94hgCwjhjRcki-MPAyRHd0YIx9ZcPw-iksY/image;s=1920x0;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImY1aTlscGQ2MDJxcjItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.3jkbvs8xkiRuFVOnMbPKtRc3FRlBH20VQMOigP01I98/image;s=1920x0;q=100", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InJpeDg3ZHJiNjVxai1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.ea3hVVVOohGDwLYJ1sbkXYACnVIEF2_3LmPvuWUqucY/image;s=1920x0;q=100"], 
                    description: "SUV puternic.", cost: 150, specs: { transmission: "Automată", fuel: "Diesel", year: "2022", engine: "3.0L", power: "300 CP" }, features: { audio: ["Meridian"], comfort: ["Suspensie aer"], safety: ["Blind Spot"] } 
                },
                { 
                    id: "volvo-xc90", name: "Volvo XC90", 
                    images: ["https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Inp3ODZmN2J4bm01NDEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.bb2pNNcZhSBDczMH4f2EQpTN-nhx9d-dPyv-qCpWMDU/image;s=1920x0;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6IjF5NzUwa3p5dWNzMjMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.SWYohpRGmQY-QK0Y8xoMO08PkNE7OLumWGsB82LMEn8/image;s=1920x0;q=100", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6Ino5dmI4ZDZ0MG5qdjEtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ.WHK9P1RKZcacDXfTDDU6pNGGKBCJL4_5kwg1sld_JNo/image;s=1920x0;q=100"], 
                    description: "Siguranță de top.", cost: 130, specs: { transmission: "Automată", fuel: "Hibrid", year: "2023", engine: "2.0L", power: "455 CP" }, features: { audio: ["B&W"], comfort: ["7 Locuri"], safety: ["City Safety"] } 
                },
                { id: "maybach-gls", name: "Mercedes-Maybach GLS", images: ["https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=1920&q=80", "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1920&q=80"], description: "Luxul la înălțime.", cost: 600, specs: { transmission: "Automată", fuel: "Benzină", year: "2023", engine: "4.0 V8", power: "558 CP" }, features: { audio: ["Burmester High-End"], comfort: ["Frigider"], safety: ["E-Active Body"] } },
                { id: "hyundai-tucson", name: "Hyundai Tucson", images: ["https://images.unsplash.com/photo-1622340268506-6467a80b73c4?auto=format&fit=crop&w=1920&q=80"], description: "Design futurist.", cost: 70, specs: { transmission: "Automată", fuel: "Hibrid", year: "2023", engine: "1.6 T-GDi", power: "230 CP" }, features: { audio: ["Krell"], comfort: ["Scaune ventilate"], safety: ["BVM"] } },
                { id: "vw-touareg", name: "VW Touareg", images: ["https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1920&q=80"], description: "Robust și tehnologizat.", cost: 140, specs: { transmission: "Automată", fuel: "Diesel", year: "2022", engine: "3.0 V6 TDI", power: "286 CP" }, features: { audio: ["Dynaudio"], comfort: ["Cockpit Innovision"], safety: ["Night Vision"] } },
                { id: "bmw-x5", name: "BMW X5", images: ["https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?auto=format&fit=crop&w=1920&q=80"], description: "Liderul clasei.", cost: 160, specs: { transmission: "Automată", fuel: "Diesel", year: "2023", engine: "3.0d", power: "286 CP" }, features: { audio: ["Harman"], comfort: ["Piele Vernasca"], safety: ["Driving Assist"] } },
                { id: "audi-q7", name: "Audi Q7", images: ["https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1920&q=80"], description: "Spațioasă pentru 7 persoane.", cost: 155, specs: { transmission: "Automată", fuel: "Diesel", year: "2022", engine: "3.0 TDI", power: "286 CP" }, features: { audio: ["Bose"], comfort: ["Virtual Cockpit"], safety: ["Side Assist"] } }
            ]
        },
        {
            category: "Electric & Hybrid",
            cars: [
                { 
                    id: "tesla-model-3", name: "Tesla Model 3", 
                    images: ["https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6InQ2dzBlenJqYmVidy1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.LvzTXPOBcyP6CejicYk4McSZI5yzKOw-Ri7ot6ZKNXc/image;s=1920x0;q=80", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImpmczJwaDc1OTdpbi1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJhIjoiMCIsInAiOiIxMCwtMTAifV19.GnuwLqZ83LL29t7f4IxGiMrnv782terlAs04Emk4Ux8/image;s=1920x0;q=100", "https://ireland.apollo.olxcdn.com/v1/files/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbiI6ImMxZDc2NDYwdmF2MzItQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwiYSI6IjAiLCJwIjoiMTAsLTEwIn1dfQ._XjcgiArIK5Ue-D-FiaWYrcHkhyUB6T0k-PvXij-VqQ/image;s=1920x0;q=100"], 
                    description: "Electric 100%.", cost: 110, specs: { transmission: "Automată", fuel: "Electric", year: "2022", engine: "Dual Motor", power: "490 CP" }, features: { audio: ["Premium"], comfort: ["Glass Roof"], safety: ["Autopilot"] } 
                },
                { id: "tesla-model-x", name: "Tesla Model X", images: ["https://images.unsplash.com/photo-1564518384646-b7350302484c?auto=format&fit=crop&w=1920&q=80", "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1920&q=80"], description: "SUV-ul electric suprem.", cost: 200, specs: { transmission: "Automată", fuel: "Electric", year: "2022", engine: "Plaid", power: "1020 CP" }, features: { audio: ["Immersive Sound"], comfort: ["Falcon Doors"], safety: ["FSD"] } },
                { id: "bmw-330e", name: "BMW 330e", images: ["https://images.unsplash.com/photo-1555215696-99ac45e43d3e?auto=format&fit=crop&w=1920&q=80"], description: "Hibrid sportiv.", cost: 90, specs: { transmission: "Automată", fuel: "Plug-in Hybrid", year: "2023", engine: "2.0L", power: "292 CP" }, features: { audio: ["HiFi"], comfort: ["Precondiționare"], safety: ["DTC"] } },
                { id: "porsche-taycan", name: "Porsche Taycan", images: ["https://images.unsplash.com/photo-1611821064430-0d410298a087?auto=format&fit=crop&w=1920&q=80"], description: "Suflet electrizat.", cost: 250, specs: { transmission: "Automată 2 trepte", fuel: "Electric", year: "2023", engine: "Turbo S", power: "761 CP" }, features: { audio: ["Burmester"], comfort: ["Ecran Pasager"], safety: ["Porsche InnoDrive"] } },
                { id: "audi-etron-gt", name: "Audi RS e-tron GT", images: ["https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1920&q=80"], description: "Viitorul este aici.", cost: 240, specs: { transmission: "Automată", fuel: "Electric", year: "2023", engine: "RS", power: "646 CP" }, features: { audio: ["Bang & Olufsen"], comfort: ["Scaune Sport Pro"], safety: ["Pre Sense"] } }
            ]
        }
    ];

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    // AICI ESTE FUNCȚIA CARE LIPSEA!
    const isAddedToCart = (carId) => {
        return cartItems.some(item => item.id === carId);
    };

    const navbarStyle = {
        backgroundColor: '#000',
        color: '#fff',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        borderBottom: '1px solid #333',
        boxSizing: 'border-box'
    };

    return (
        <div className="main-container">
            <div style={navbarStyle}>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <h3 style={{margin:0, textTransform: 'uppercase', letterSpacing: '1px'}}>AutoRent <span style={{color: '#ff4d4d'}}>Premium</span></h3>
                </Link>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <Link to="/cart" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '15px', fontWeight: 'bold', color: '#ccc' }}>Vezi Coșul</span>
                        <div style={{ fontSize: '24px', position: 'relative' }}>
                            🛒 
                            {cartItems.length > 0 && (
                                <span style={{fontSize: '14px', background: '#ff4d4d', borderRadius: '50%', padding: '2px 6px', verticalAlign: 'top', position: 'absolute', top: '-5px', right: '-10px', color: 'white'}}>
                                    {cartItems.length}
                                </span>
                            )}
                        </div>
                    </Link>
                </div>
            </div>

            <div className="product-grid" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '80px auto 0 auto', background: '#050505' }}>
                {carsData.map((category, index) => (
                    <div key={index} style={{ marginBottom: '50px' }}>
                        <h2 style={{ borderBottom: '1px solid #333', paddingBottom: '15px', color: '#fff', marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.5rem' }}>
                            {category.category}
                        </h2>
                        
                        <div className="product-list">
                            {category.cars.map((car) => (
                                <div className="product-card" key={car.id} style={{ 
                                    border: '1px solid #222', 
                                    borderRadius: '15px', 
                                    overflow: 'hidden', 
                                    background: '#121212', 
                                    display: 'flex', 
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease'
                                }}>
                                    
                                    <Link to={`/cars/${car.id}`} style={{ height: '240px', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}>
                                        {/* FOLOSIM PRIMA IMAGINE DIN ARRAY */}
                                        <img src={car.images[0]} alt={car.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        <div style={{position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'}}></div>
                                    </Link>
                                    
                                    <div style={{ padding: '25px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ margin: '0 0 10px 0', color: 'white', fontSize: '1.4rem' }}>{car.name}</h3>
                                        <p style={{ color: '#aaa', fontSize: '14px', flexGrow: 1, lineHeight: '1.6' }}>{car.description.substring(0, 100)}...</p>
                                        
                                        <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#ff4d4d', margin: '20px 0' }}>
                                            €{car.cost} <span style={{fontSize: '14px', color: '#888', fontWeight: 'normal'}}>/ zi</span>
                                        </div>

                                        <Link to={`/cars/${car.id}`} style={{ 
                                            display: 'block', textAlign: 'center', textDecoration: 'none', color: 'white', 
                                            background: '#333', padding: '12px', borderRadius: '8px', marginBottom: '10px', fontWeight: '600', transition: '0.3s'
                                        }} className="details-btn">
                                            Vezi Detalii & Dotări
                                        </Link>

                                        <button 
                                            onClick={() => handleAddToCart(car)}
                                            disabled={isAddedToCart(car.id)}
                                            style={{
                                                width: '100%', 
                                                padding: '12px', 
                                                backgroundColor: isAddedToCart(car.id) ? '#444' : '#ff4d4d', 
                                                color: isAddedToCart(car.id) ? '#aaa' : 'white',
                                                border: 'none', 
                                                borderRadius: '6px', 
                                                cursor: isAddedToCart(car.id) ? 'default' : 'pointer', 
                                                fontWeight: 'bold',
                                                textTransform: 'uppercase'
                                            }}
                                        >
                                            {isAddedToCart(car.id) ? 'În Coș' : 'Rezervă Acum'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;