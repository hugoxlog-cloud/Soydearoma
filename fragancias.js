/* =====================================================================
   SOY DE AROMA · BASE DE DATOS DE FRAGANCIAS
   ---------------------------------------------------------------------
   Edita ESTE archivo para AGREGAR, QUITAR o ACTUALIZAR fragancias.
   Después vuelve a subir "fragancias.js" a tu hosting (Netlify / Cloudflare).

   CAMPOS:
     n      -> Nombre                          (texto)
     b      -> Marca                           (texto)
     cat    -> "best" (Más vendidos) o "clasico" (Clásicos)
     g      -> "Masculino" o "Unisex"
     seas   -> "Invierno" o "Primavera"
     occ    -> "Noche" o "Día"
     dur    -> Duración: "6 hrs", "8–10 hrs", "+12 hrs"
               (color del badge automático: 4–6h amarillo · 6.5–10h rojo · +10h morado)
     notes  -> Notas / pirámide olfativa        (texto)
     img    -> Ruta de la FOTO. Ej: "imagenes/dior-sauvage-edp.jpg"
               Deja "" (vacío) para usar el frasco dibujado.
               Pon el archivo de imagen dentro de la carpeta "imagenes".
     p5     -> Precio 5 ml   (número, sin "$").  0 = "Precio por confirmar"
     p10    -> Precio 10 ml  (número, sin "$").
     stock  -> true = En existencia · false = Agotado
     c1,c2  -> Colores del frasco dibujado (si no hay foto)
     cap    -> Color de la tapa     lbl -> Color del texto
     r      -> Estrellas (1 a 5)

   👉 AGREGAR: copia una línea, pégala antes del "];" y cambia los datos.
   👉 QUITAR:  borra su línea.   👉 AGOTAR: stock:true -> stock:false
   ===================================================================== */

const P = [
  {n:"Oud For Greatness", b:"Initio", cat:"best", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"+12 hrs", notes:"Azafrán, Madera de Oud y Pachulí", img:"imagenes/initio-oud-for-greatness.jpg", p5:625, p10:1251, stock:true, c1:"#1c1812", c2:"#0a0806", cap:"#c9a24b", lbl:"#e7c777", r:4.9},
  {n:"Sauvage Elixir", b:"Dior", cat:"best", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"+12 hrs", notes:"Nuez Moscada, Lavanda, Ámbar y Pachulí", img:"imagenes/dior-sauvage-elixir.jpg", p5:567, p10:1134, stock:true, c1:"#16233f", c2:"#080d18", cap:"#0b1422", lbl:"#9fc0ee", r:5},
  {n:"Dior Homme Intense", b:"Dior", cat:"best", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"8–10 hrs", notes:"Iris, Almizcle y Cedro", img:"imagenes/dior-homme-intense.jpg", p5:255, p10:520, stock:true, c1:"#3a2008", c2:"#160a02", cap:"#0a0807", lbl:"#e2a85f", r:4.8},
  {n:"Scandal Le Parfum", b:"Jean Paul Gaultier", cat:"best", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"+12 hrs", notes:"Geranio, Haba Tonka y Sándalo", img:"imagenes/jpg-scandal-le-parfum.jpg", p5:245, p10:490, stock:true, c1:"#14171c", c2:"#070809", cap:"#c9a24b", lbl:"#dcdce0", r:4.7},
  {n:"Le Male Elixir", b:"Jean Paul Gaultier", cat:"best", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"8–10 hrs", notes:"Lavanda, Vainilla, Miel y Haba Tonka", img:"imagenes/jpg-le-male-elixir.jpg", p5:305, p10:610, stock:true, c1:"#7a4a1c", c2:"#3a2208", cap:"#caa05a", lbl:"#1a1206", r:4.9},
  {n:"Bleu de Chanel EDT", b:"Chanel", cat:"best", g:"Masculino", seas:"Primavera", occ:"Día", dur:"4–6 hrs", notes:"Toronja, Menta, Jengibre, Incienso y Pachulí", img:"imagenes/chanel-bleu-edt.jpg", p5:230, p10:460, stock:true, c1:"#101824", c2:"#06090e", cap:"#0a0d12", lbl:"#aebfd4", r:4.8},
  {n:"Light Blue Eau Intense", b:"Dolce & Gabbana", cat:"best", g:"Masculino", seas:"Primavera", occ:"Día", dur:"8–10 hrs", notes:"Toronja, Mandarina, Agua de Mar y Amberwood", img:"imagenes/dg-light-blue-eau-intense.jpg", p5:230, p10:460, stock:true, c1:"#2a78b8", c2:"#0f3a5e", cap:"#cfe2f0", lbl:"#eaf4fb", r:4.6},
  {n:"The One Parfum", b:"Dolce & Gabbana", cat:"best", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"5–7 hrs", notes:"Toronja, Cardamomo, Ámbar y Tabaco", img:"imagenes/dg-the-one-parfum.jpg", p5:340, p10:676, stock:true, c1:"#7a4410", c2:"#3a2006", cap:"#cfcfcf", lbl:"#f0d9b0", r:4.7},
  {n:"MYSLF EDP", b:"Yves Saint Laurent", cat:"best", g:"Masculino", seas:"Primavera", occ:"Día", dur:"8–10 hrs", notes:"Bergamota, Ambrofix y Pachulí", img:"imagenes/ysl-myslf-edp.jpg", p5:310, p10:620, stock:true, c1:"#16140f", c2:"#080706", cap:"#0a0807", lbl:"#d8d2c4", r:4.7},
  {n:"Stronger With You Absolutely", b:"Emporio Armani", cat:"best", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"+12 hrs", notes:"Ron, Bergamota, Lavanda, Vainilla, Castaña y Pachulí", img:"imagenes/armani-stronger-with-you-absolutely.jpg", p5:275, p10:545, stock:true, c1:"#7a2810", c2:"#3a1206", cap:"#1a0c06", lbl:"#f0b89a", r:4.8},
  {n:"Khamrah", b:"Lattafa", cat:"best", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"+12 hrs", notes:"Canela, Bergamota, Dátiles, Vainilla, Haba Tonka y Amberwood", img:"imagenes/lattafa-khamrah.jpg", p5:135, p10:270, stock:true, c1:"#8a5418", c2:"#43280a", cap:"#caa05a", lbl:"#f3dcae", r:4.9},
  {n:"Red Tobacco", b:"Mancera", cat:"best", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"+12 hrs", notes:"Canela, Madera de Oud, Azafrán, Pachulí, Tabaco y Ámbar", img:"imagenes/mancera-red-tobacco.jpg", p5:190, p10:370, stock:true, c1:"#8a1410", c2:"#400806", cap:"#0a0807", lbl:"#f0a89a", r:4.8},
  {n:"Man in Black EDP", b:"Bvlgari", cat:"best", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"+10 hrs", notes:"Ron, Tabaco, Cuero, Iris y Haba Tonka", img:"imagenes/bvlgari-man-in-black.jpg", p5:290, p10:580, stock:true, c1:"#141210", c2:"#070605", cap:"#1c1814", lbl:"#cbb89a", r:4.7},
  {n:"9 PM", b:"Afnan", cat:"best", g:"Unisex", seas:"Invierno", occ:"Noche", dur:"+10 hrs", notes:"Manzana, Bergamota, Flor de Azahar, Vainilla y Haba Tonka", img:"imagenes/afnan-9pm.jpg", p5:120, p10:240, stock:true, c1:"#141414", c2:"#060606", cap:"#cfcfcf", lbl:"#e6e6e6", r:4.8},
  {n:"9 AM Dive", b:"Afnan", cat:"best", g:"Unisex", seas:"Primavera", occ:"Día", dur:"+10 hrs", notes:"Limón, Grosella Negra, Cedro, Incienso, Sándalo y Pachulí", img:"imagenes/afnan-9am-dive.jpg", p5:120, p10:230, stock:true, c1:"#1e4c86", c2:"#0c1f3a", cap:"#cfcfcf", lbl:"#bcd4ee", r:4.6},
  {n:"Hawas For Him", b:"Rasasi", cat:"best", g:"Masculino", seas:"Primavera", occ:"Día", dur:"+10 hrs", notes:"Manzana, Bergamota, Cardamomo, Ámbar y Pachulí", img:"imagenes/rasasi-hawas.jpg", p5:125, p10:250, stock:true, c1:"#6c74a8", c2:"#2e3458", cap:"#cfcfcf", lbl:"#d6dcf0", r:4.7},
  {n:"Luna Rossa Black", b:"Prada", cat:"clasico", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"8–10 hrs", notes:"Bergamota, Pachulí, Ámbar y Almizcle", img:"imagenes/prada-luna-rossa-black.jpg", p5:220, p10:440, stock:true, c1:"#141414", c2:"#060606", cap:"#9a9a9a", lbl:"#cfcfcf", r:4.6},
  {n:"Eros EDT", b:"Versace", cat:"clasico", g:"Masculino", seas:"Invierno", occ:"Día", dur:"6 hrs", notes:"Manzana Verde, Haba Tonka, Ambroxan, Vainilla y Musgo", img:"imagenes/versace-eros-edt.jpg", p5:180, p10:360, stock:true, c1:"#0f6a64", c2:"#063a36", cap:"#caa05a", lbl:"#9fe0da", r:4.7},
  {n:"Spicebomb", b:"Viktor & Rolf", cat:"clasico", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"+10 hrs", notes:"Pimienta Rosa, Bergamota, Canela, Azafrán, Cuero y Tabaco", img:"imagenes/vr-spicebomb.jpg", p5:220, p10:430, stock:true, c1:"#1a1814", c2:"#0a0806", cap:"#3a3632", lbl:"#d4c8b0", r:4.6},
  {n:"Gentleman Society", b:"Givenchy", cat:"clasico", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"8 hrs", notes:"Cardamomo, Vetiver, Narciso Francés, Palo Santo y Vainilla", img:"imagenes/givenchy-gentleman-society.jpg", p5:200, p10:400, stock:true, c1:"#16140f", c2:"#080706", cap:"#cfcfcf", lbl:"#d8d2c4", r:4.7},
  {n:"Wanted by Night", b:"Azzaro", cat:"clasico", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"8 hrs", notes:"Canela, Comino, Cedro, Tabaco, Cuero y Pachulí", img:"imagenes/azzaro-wanted-by-night.jpg", p5:280, p10:570, stock:true, c1:"#7a5210", c2:"#3a2606", cap:"#3a3632", lbl:"#f0d4a0", r:4.7},
  {n:"Boss Infinite", b:"Hugo Boss", cat:"clasico", g:"Masculino", seas:"Primavera", occ:"Día", dur:"8 hrs", notes:"Manzana, Salvia, Lavanda, Romero y Pachulí", img:"imagenes/boss-infinite.jpg", p5:200, p10:400, stock:true, c1:"#1e3a78", c2:"#0c1838", cap:"#1c2c52", lbl:"#bcd0f0", r:4.5},
  {n:"Bottled Parfum", b:"Hugo Boss", cat:"clasico", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"+8 hrs", notes:"Incienso, Lirio, Cuero y Cedro", img:"imagenes/boss-bottled-parfum.jpg", p5:250, p10:520, stock:true, c1:"#241c16", c2:"#0e0a07", cap:"#2a2420", lbl:"#d4c4ac", r:4.6},
  {n:"Bottled Absolu", b:"Hugo Boss", cat:"clasico", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"+10 hrs", notes:"Incienso, Cuero, Pachulí, Cedro y Davana", img:"imagenes/boss-bottled-absolu.jpg", p5:250, p10:520, stock:true, c1:"#2a2018", c2:"#100b07", cap:"#caa05a", lbl:"#e0caa6", r:4.7},
  {n:"Bottled Elixir", b:"Hugo Boss", cat:"clasico", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"+12 hrs", notes:"Incienso, Cardamomo, Pachulí, Vetiver y Cedro", img:"imagenes/boss-bottled-elixir.jpg", p5:270, p10:540, stock:true, c1:"#6a4a14", c2:"#33240a", cap:"#caa05a", lbl:"#f0d8a8", r:4.8},
  {n:"The Scent Elixir", b:"Hugo Boss", cat:"clasico", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"+12 hrs", notes:"Chile Rojo, Lavanda y Sándalo", img:"imagenes/boss-the-scent-elixir.jpg", p5:270, p10:540, stock:true, c1:"#7a1812", c2:"#3a0a06", cap:"#caa05a", lbl:"#f0a89a", r:4.7},
  {n:"Sauvage EDP", b:"Dior", cat:"clasico", g:"Masculino", seas:"Invierno", occ:"Día", dur:"+8 hrs", notes:"Bergamota, Lavanda, Anís, Ambroxan y Vainilla", img:"imagenes/dior-sauvage-edp.jpg", p5:230, p10:460, stock:true, c1:"#16233f", c2:"#080d18", cap:"#0b1422", lbl:"#9fc0ee", r:4.9},
  {n:"Explorer Platinum", b:"Montblanc", cat:"clasico", g:"Masculino", seas:"Primavera", occ:"Día", dur:"6–7 hrs", notes:"Hojas de Violeta, Esclarea y Cedro", img:"imagenes/montblanc-explorer-platinum.jpg", p5:180, p10:360, stock:true, c1:"#9aa0a6", c2:"#54595e", cap:"#cfd2d6", lbl:"#1a1c1e", r:4.5},
  {n:"CH Men Sport EDT", b:"Carolina Herrera", cat:"clasico", g:"Masculino", seas:"Primavera", occ:"Día", dur:"6–7 hrs", notes:"Toronja, Bergamota, Notas Marinas, Vetiver y Sándalo", img:"", p5:140, p10:280, stock:true, c1:"#b53a2e", c2:"#6a1810", cap:"#cfcfcf", lbl:"#f4e8e6", r:4.5},
  {n:"CH Men EDT", b:"Carolina Herrera", cat:"clasico", g:"Masculino", seas:"Invierno", occ:"Día", dur:"6–7 hrs", notes:"Bergamota, Azafrán, Cuero, Ámbar y Sándalo", img:"imagenes/ch-men-edt.jpg", p5:140, p10:280, stock:true, c1:"#1a1614", c2:"#0a0706", cap:"#caa05a", lbl:"#d4c4ac", r:4.6},
  {n:"212 VIP Black Smiley", b:"Carolina Herrera", cat:"clasico", g:"Masculino", seas:"Invierno", occ:"Día", dur:"7–8 hrs", notes:"Naranja, Jengibre, Pimienta, Lavanda y Vainilla", img:"imagenes/ch-212-vip-black-smiley.jpg", p5:230, p10:430, stock:true, c1:"#141414", c2:"#060606", cap:"#1c1c1c", lbl:"#f4d23a", r:4.6},
  {n:"Nuit d'Issey", b:"Issey Miyake", cat:"clasico", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"6–7 hrs", notes:"Toronja, Bergamota, Cuero, Ébano y Haba Tonka", img:"imagenes/issey-nuit-dissey.jpg", p5:140, p10:280, stock:true, c1:"#14182a", c2:"#070912", cap:"#0a0c14", lbl:"#aeb6cc", r:4.6},
  {n:"Fusion d'Issey Extrême", b:"Issey Miyake", cat:"clasico", g:"Masculino", seas:"Primavera", occ:"Día", dur:"6–7 hrs", notes:"Cardamomo, Bergamota, Lavanda, Sándalo y Pachulí", img:"imagenes/issey-fusion-dissey-extreme.jpg", p5:160, p10:320, stock:true, c1:"#1e6cc4", c2:"#0c2e5e", cap:"#cfcfcf", lbl:"#bcd8f4", r:4.6},
  {n:"One Million Parfum", b:"Paco Rabanne", cat:"clasico", g:"Masculino", seas:"Invierno", occ:"Día", dur:"+12 hrs", notes:"Nardo, Cuero, Ámbar y Azafrán", img:"imagenes/paco-one-million-parfum.jpg", p5:150, p10:300, stock:true, c1:"#c79a2e", c2:"#7a5a14", cap:"#e7c777", lbl:"#3a2a08", r:4.7},
  {n:"Aoud Exclusif", b:"Mancera", cat:"clasico", g:"Masculino", seas:"Invierno", occ:"Noche", dur:"+12 hrs", notes:"Azafrán, Comino, Pimienta, Pachulí y Madera de Oud", img:"imagenes/mancera-aoud-exclusif.jpg", p5:270, p10:540, stock:true, c1:"#7a3a10", c2:"#3a1c06", cap:"#caa05a", lbl:"#f0c89a", r:4.7},
  {n:"Club de Nuit Milestone", b:"Armaf", cat:"clasico", g:"Unisex", seas:"Primavera", occ:"Noche", dur:"+8 hrs", notes:"Frutos Rojos, Bergamota, Sándalo, Almizcle y Ambroxan", img:"imagenes/armaf-club-de-nuit-milestone.jpg", p5:100, p10:195, stock:true, c1:"#e0b89a", c2:"#a07a5a", cap:"#caa05a", lbl:"#4a3420", r:4.6},
  {n:"Legend", b:"Montblanc", cat:"clasico", g:"Masculino", seas:"Primavera", occ:"Día", dur:"6 hrs", notes:"Violeta, Bergamota, Notas Amaderadas, Musgo y Roble", img:"imagenes/montblanc-legend.jpg", p5:0, p10:0, stock:false, c1:"#1c2a2e", c2:"#0a1416", cap:"#9aa0a6", lbl:"#cfe0e2", r:4.6},
  {n:"Stallion 53", b:"Emper", cat:"clasico", g:"Unisex", seas:"Invierno", occ:"Noche", dur:"6 hrs", notes:"Cardamomo, Violeta, Ámbar, Iris, Sándalo, Cuero y Cedro", img:"imagenes/emper-stallion-53.jpg", p5:0, p10:0, stock:false, c1:"#3a2418", c2:"#160c06", cap:"#caa05a", lbl:"#e0caa6", r:4.6},
  {n:"Roadster Sport", b:"Cartier", cat:"clasico", g:"Masculino", seas:"Primavera", occ:"Día", dur:"6 hrs", notes:"Bergamota, Mandarina, Romero, Salvia, Pachulí y Pimienta", img:"imagenes/cartier-roadster-sport.jpg", p5:0, p10:0, stock:false, c1:"#14233a", c2:"#070d18", cap:"#cfcfcf", lbl:"#bcd0ee", r:4.5},
  {n:"Declaration Essence", b:"Cartier", cat:"clasico", g:"Unisex", seas:"Primavera", occ:"Día", dur:"6 hrs", notes:"Cítricos, Cardamomo y Cedro", img:"imagenes/cartier-declaration-essence.jpg", p5:0, p10:0, stock:false, c1:"#2a2620", c2:"#10110d", cap:"#caa05a", lbl:"#d4c4ac", r:4.5}
];
