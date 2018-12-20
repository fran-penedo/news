OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "Užklausa nepavyko, tinklo ryšys neprieinamas!",
    "Request unauthorized. Are you logged in?" : "Užklausa neleidžiama. Ar esate prisijungę?",
    "Request forbidden. Are you an admin?" : "Užklausa draudžiama. Ar esate administratorius?",
    "Token expired or app not enabled! Reload the page!" : "Pasibaigė prieigos raktų galiojimas arba programėlė nėra įjungta! Įkelkite puslapį iš naujo!",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "Vidinė serverio klaida! Išsamesnei informacijai, žiūrėkite \"data/nextcloud.log\" failą!",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "Užklausa nepavyko, Nextcloud šiuo metu yra techninės priežiūros veiksenoje!",
    "Feed contains invalid XML" : "Kanale yra neteisingas XML",
    "Feed not found: Either the website does not provide a feed or blocks access. To rule out blocking, try to download the feed on your server's command line using curl: curl " : "Kanalas nerastas: Arba svetainė nepateikia kanalo, arba ji blokuoja prieigą prie jo. Norėdami apeiti blokavimą, pabandykite atsisiųsti kanalą per savo serverio komandų eilutę, naudodami curl: curl ",
    "Detected feed format is not supported" : "Aptiktas kanalo formatas nėra palaikomas",
    "Website not found" : "Svetainė nerasta",
    "More redirects than allowed, aborting" : "Per daug peradresavimų negu leidžiama, nutraukiama",
    "Bigger than maximum allowed size" : "Straipsnio dydis yra didesni negu leidžiama",
    "Request timed out" : "Pasibaigė užklausai skirtas laikas",
    "Required credentials for feed were either missing or incorrect" : "Kanalui reikalingų prisijungimo duomenų nebuvo arba jie buvo neteisingi",
    "Forbidden to access feed" : "Prieiga prie kanalo uždrausta",
    "Certificate error: A problem occurred somewhere in the SSL/TLS handshake. Could be certificates (file formats, paths, permissions), passwords, and others." : "Liudijimo klaida: Atsirado problemų kažkur SSL/TLS išankstiniame suderinime. Gali būti susiję su liudijimais (failo formatais, keliais, leidimais), slaptažodžiais ir kt.",
    "Certificate error: The remote server's SSL certificate or SSH md5 fingerprint was deemed not OK." : "Liudijimo klaida: Nuotolinio serverio SSL liudijimas arba SSH md5 kontrolinis kodas yra laikomas negeru.",
    "Certificate error: Problem with the local client certificate." : "Liudijimo klaida: Problemos su vietinio kliento liudijimu.",
    "Certificate error: Couldn't use specified cipher." : "Liudijimo klaida: Nepavyko naudoti nurodytą šifrą.",
    "Certificate error: Peer certificate cannot be authenticated with known CA certificates." : "Liudijimo klaida: Nepavyko nustatyti kitos šalies liudijimo tapatybę, naudojant LĮ liudijimus.",
    "Certificate error: Requested FTP SSL level failed." : "Liudijimo klaida: Užklaustas FTP SSL lygis patyrė nesėkmę.",
    "Certificate error: Initiating the SSL engine failed." : "Liudijimo klaida: SSL modulio inicijavimas patyrė nesėkmę.",
    "Certificate error: Problem with reading the SSL CA cert (path? access rights?)" : "Liudijimo klaida: Problemos, skaitant SSL LĮ liudijimą (kelias? prieigos teisės?)",
    "Certificate error: Issuer check failed" : "Liudijimo klaida: Išdavėjo patikrinimas patyrė nesėkmę",
    "Unknown SSL certificate error!" : "Nežinoma SSL liudijimo klaida!",
    "Can not add feed: Exists already" : "Nepavyksta pridėti kanalą: Jau yra",
    "Articles without feed" : "Straipsniai be kanalo",
    "Can not add folder: Exists already" : "Nepavyksta pridėti aplanką: Jau yra",
    "News" : "Naujienos",
    "An RSS/Atom feed reader" : "RSS/Atom kanalų skaitytuvė",
    "Use system cron for updates" : "Atnaujinimams naudoti sistemos planuoklę (cron)",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "Išjunkite tai, jeigu naudojate tinkintą atnaujinimų programą, tokią kaip Python atnaujinimų programą, kuri įtraukta į programėlę.",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "Minimalus ištrintų kanalų ir aplankų saugojimo laikas po pašalinimo iš duomenų bazės; reikšmių, kurios mažesnės už 60 sekundžių, bus nepaisoma.",
    "Maximum read count per feed" : "Didžiausias kanalo straipsnių kiekis",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off" : "Apibrėžia, kiek kanale gali būti perskaityta daugiausiai straipsnių, kurie nebus ištrinti išvalymo užduoties; jeigu seni straipsniai, juos perskaičius, vėl atsiranda, padidinkite šią reikšmę; neigiamos reikšmės, tokios kaip -1, išjungia šią ypatybę",
    "How many redirects the feed fetcher should follow" : "Kiek kartų kanalų gaviklis turėtų sekti paskui peradresavimus",
    "Maximum feed page size" : "Didžiausias kanalo puslapio dydis",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "Didžiausias kanalo dydis, baitais. Jei RSS/Atom straipsnio puslapis yra didesnis nei ši reikšmė, tuomet atnaujinimas bus nutrauktas",
    "Feed fetcher timeout" : "Kanalų gavimui skirtas laikas",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "Kiek daugiausiai sekundžių laukti, kad būtų įkeltas RSS ar Atom kanalas. Jei laikas bus viršytas, kanalo atnaujinimas bus nutrauktas",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "Jei nurodyta, šios paslaugos URL nuorodos bus užklausiama apie rekomenduojamus kanalus. Palikite tuščią, jei norite naudoti įtaisytuosius rekomenduojamus kanalus ",
    "Saved" : "Įrašyta",
    "Download" : "Atsisiųsti",
    "Close" : "Užverti",
    "Language" : "Kalba",
    "Subscribe" : "Prenumeruoti",
    "Got more awesome feeds? Share them with us!" : "Žinote gerus naujienų kanalus? Pasidalinkite jais su mumis!",
    "No unread articles available" : "Nėra neperskaitytų straipsnių",
    "Open website" : "Atverti svetainę",
    "by" : " ",
    "from" : "iš",
    "Play audio" : "Groti",
    "Download video" : "Atsisiųsti vaizdo įrašą",
    "Download audio" : "Atsisiųsti garso įrašą",
    "Description" : "Aprašas",
    "Open article in new tab" : "Atverti straipsnį naujoje kortelėje",
    "Refresh" : "Įkelti iš naujo",
    "Load next feed" : "Įkelti kitą kanalą",
    "Load previous feed" : "Įkelti ankstesnį kanalą",
    "Load next folder" : "Įkelti kitą aplanką",
    "Load previous folder" : "Įkelti ankstesnį aplanką",
    "Mark current article's feed/folder read" : "Žymėti esamo straipsnio kanalą/aplanką kaip skaitytą",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "Aptikta AJAX ar webcron veiksena! Jūsų kanalai nebus atnaujinti!",
    "Web address" : "Saityno adresas",
    "Feed exists already!" : "Kanalas jau yra!",
    "Folder" : "Aplankas",
    "No folder" : "Be aplanko",
    "New folder" : "Naujas aplankas",
    "Folder name" : "Aplanko pavadinimas",
    "Go back" : "Grįžti",
    "Folder exists already!" : "Aplankas jau yra!",
    "Advanced settings" : "Išplėstiniai nustatymai",
    "Username" : "Naudotojo vardas",
    "Password" : "Slaptažodis",
    "New Folder" : "Naujas aplankas",
    "Create" : "Sukurti",
    "Update failed more than 50 times" : "Atnaujinimas daugiau kaip 50 kartų patyrė nesėkmę",
    "Deleted feed" : "Ištrintas kanalas",
    "Undo delete feed" : "Atšaukti kanalo ištrynimą",
    "Rename" : "Pervadinti",
    "Menu" : "Meniu",
    "Unpin from top" : "Atsegti nuo viršaus",
    "Pin to top" : "Prisegti viršuje",
    "Open feed URL" : "Atverti kanalo URL",
    "Delete" : "Ištrinti",
    "Collapse" : "Suskleisti",
    "Deleted folder" : "Ištrintas aplankas",
    "Undo delete folder" : "Atšaukti aplanko ištrynimą",
    "Unread articles" : "Neskaityti straipsniai",
    "All articles" : "Visi straipsniai",
    "Settings" : "Nustatymai",
    "Compact view" : "Rodyti tik antraštes",
    "Expand articles on key navigation" : "Rodyti pilnus straipsnius perjungiant klavišais",
    "Show all articles" : "Rodyti visus straipsnius",
    "Subscriptions (OPML)" : "Prenumeratos (OPML)",
    "Import" : "Importuoti",
    "Export" : "Eksportuoti",
    "Error when importing: OPML is does neither contain feeds nor folders" : "Klaida, importuojant: OPML faile nėra nei kanalų, nei aplankų",
    "Error when importing: file does not contain valid JSON" : "Klaida importuojant: faile nėra teisingo JSON",
    "Help" : "Pagalba",
    "Keyboard shortcuts" : "Klavišų kombinacijos",
    "Documentation" : "Dokumentacija",
    "Report a bug" : "Pranešti apie klaidą"
},
"nplurals=4; plural=(n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);");
