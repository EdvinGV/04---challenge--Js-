console.clear();
//------- 1 Uzduotis
/* Mokinys pradėjo spręsti namų darbus, kai elektroninis laikrodis rodė h1 valandų ir min1 minučių, o baigė, kai buvo h2 valandų ir min2 minučių. Parašykite programą, pagal kurią būtų randama, kiek laiko (valandų ir minučių) mokinys sprendė uždavinius. (Laikykite, kad mokinys uždavinius sprendė mažiau kaip parą). */

function time(h1, min1, h2, min2) {
    t1 = (h1 * 60 + min1);
    t2 = (h2 * 60 + min2);
    if (t2 > t1) { return "Mokinys prasimoke " + Math.floor((t2 - t1) * (1 / 60)) + " h " + ((t2 - t1) % 60) + " min" }

    else { return "Mokinys prasimoke " + Math.floor(((t2 - t1) + (24 * 60)) * (1 / 60)) + " h " + (((t2 - t1) + (24 * 60)) % 60) + " min" }

}

console.log(time(10, 20, 8, 10));


console.log('------------------------------------------------')
//------- 2 Uzduotis 
/* Parašyti programą kuri atspausdintu visus Armstrongo skaičius nuo 100 iki 999. Armstongo skaičiaus pvz ABC = A3+ B3+ C3(visųatskirųskaitmenų pakeltųskaičiaus skaitmenų kiekio laipsniusuma.)  */


function ArmstongoSkaicius() {
    let skaicius = 0;
    let suma = 0;
    let ArmstongoSkaiciai = [];
    for (skaicius = 100; skaicius <= 999; skaicius++) {
        let skaiciusstringas = skaicius.toString();
        let stringumasyvas = skaiciusstringas.split("")
        let skaiciumasyvas = stringumasyvas.map(Number);
        suma = skaiciumasyvas.reduce((digsum, value) => digsum + value ** skaiciusstringas.length, 0);
        if (suma === skaicius) {
            ArmstongoSkaiciai.push(skaicius);
        }

    }
    return ArmstongoSkaiciai;
}

console.log(ArmstongoSkaicius());

console.log('------------------------------------------------')
//------- 3 Uzduotis
/* Parašykite  funkcija  kuri  paskaičiuotų  atstumą  tarp  dviejų  taškų koordinačių sistemoje. Parametrai 4 perduodami skaičiai x1, y1, x2, y2. @param {number} x1 @param {number} y1 @param {number} x2 @param {number} y2 @example: (0,0) (0,1) => 1 (0,0) (1,0) => 1 (-5,0) (10,-10) => 18.027756377319946  */

function atstumas(x1, y1, x2, y2) {
    let d = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
    return d
}
console.log(atstumas(-5, 0, 10, -10));


console.log('------------------------------------------------')
//------- 4 Uzduotis
/* Parašykite programą, kuri suskaičiuotų , kiek duotas skaičius numturi lyginių ir nelyginių skaitmenų .@param {number} num @example: 63258 => ‘3 skaičiai lyginiai, 2 nelyginiai’  */

function odd_or_even(num) {
    let stringas = Math.abs(num).toString().split("");
    let even = 0;
    let odd = 0;
    let digit = 0;
    for (i = 0; i < stringas.length; i++) {
        digit = Number(stringas[i])
        if (digit % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    return num + " => " + even + " skaiciai lyginiai, " + odd + " skaiciai nelyginiai";
}
console.log(odd_or_even(-2342568));

console.log('------------------------------------------------')
//------- 5 Uzduotis
/* Žinomi kambario matmenys ilgis ir plotis. Reikia apskaičiuoti, kokią pinigų sumą reiks mokėti už plyteles, skirtas kambario grindims kloti, jei plytelių vieno kvadrato kaina yra 23 eurai. Plytelių reikia pirkti 5 proc. daugiau galimiems nuostoliams padengti. Plytelės supakuotos po 1.5m2 ir parduotuvės darbuotojai nesutinka ardyti pakuočių. Galima pirkti tik pilnas pakuotes.  */

function kiek_mokesim(ilgis, plotis) {
    let plotas_su_nuostoliais = ilgis * plotis * 1.05;
    const kvadrato_kaina = 23;
    const pakuote = 1.5;
    let niu_tai_mokesim = Math.ceil((plotas_su_nuostoliais / pakuote)) * 23;
    return 'Niu tai mokesim ' + niu_tai_mokesim + ' eur';
}

console.log(kiek_mokesim(10, 12))


console.log('------------------------------------------------')
//------- 6 Uzduotis
/* Sugeneruokit atsitiktinių reikšmių masyvą, masyvo elementų skaičius 30, Masyvo elementų reikšmės nuo 1 iki 10. Tai yra klasės mokinių vidurkiai. Rasti geriausiai besimokantį ir blogiausiai.  */

function min_max() {
    random = [];
    for (i = 0; i < 30; i++) {
        random.push(Math.floor(Math.random() * 10) + 1) + ", ";
    }

    let top = Math.max(...random);
    let bot = Math.min(...random);
    return 'Mokiniu vidurkiai => ' + random + ' \nauksciausias vidurkis lygus => ' + top + '\no zemiausias lygus => ' + bot;
}
console.log(min_max());

console.log('------------------------------------------------')
//------- 7 Uzduotis
/* Pirmos lietuviškos litų monetos išėjo 1925 metais. Tai buvo 5, 2 ir 1 lito vertės sidabrinės monetos. Duotą pinigų sumą n litais pakeiskite nurodytomis monetomis, panaudojant kuo mažiau monetų. Atsakymo galimas pvz: „Norint gauti n sumą litais, mums reikės n1 monetų po 5 lt, n2 monetų po 2 litus ir n3 monetų po 1 litą. Viso monetų N skaičius“. */


function monetos(pinigai) {
    lt = Math.abs(pinigai);
    let petakas = Math.floor(lt / 5);
    let dvajakas = Math.floor((lt - petakas * 5) / 2);
    let litas = Math.ceil(lt - petakas * 5 - dvajakas * 2); // dalint is vieno prasmes nera
    return 'Norint gauti ' + lt + ' suma litais, mums reikes \n' + petakas + ' monetu po 5 litus \n' + dvajakas + ' monetu po 2 litus ir \n' + litas + ' monetos po lita'
}

console.log(monetos(-23.14));
//-------------------------------Funckija padaryta kad priimtu neigiamas ir float reiksmes. T.y. jeigu turiu 10.23LT man reikes 2x5 monetu ir 1 lito kad surinkciau ta suma. Galimas variantas pritaikyti if funkcija kad funkcija sakytu kad sumos nesurinks iki galo nes centu nera ir pan..