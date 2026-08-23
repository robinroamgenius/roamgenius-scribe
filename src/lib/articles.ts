/**
 * RoamGenius — article catalogue.
 * Content blocks render in the post detail template.
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "list"; items: string[] }
  | {
      type: "cta";
      badge: string;
      title: string;
      text: string;
      button: string;
      href: string;
    };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readingTime: number; // minutes
  author: string;
  content: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "vps-pro-algoritmicky-trading",
    title: "VPS pro algoritmický trading: Proč je virtuální server srdcem každého AOS",
    excerpt:
      "Domácí počítač, výpadek elektřiny a nestabilní Wi-Fi v kavárně — tři důvody, proč váš automatický obchodní systém nepatří na notebook. Ukazujeme, jak vybrat VPS, kam ho umístit a kolik za něj má smysel platit.",
    category: "Algoritmický trading",
    date: "2026-08-18",
    readingTime: 8,
    author: "Redakce RoamGenius",
    content: [
      {
        type: "p",
        text: "Automatický obchodní systém (AOS) je jen tak silný, jak silná je infrastruktura, na které běží. Strategie může mít dokonalý backtest, ale když se uprostřed obchodu restartuje Windows nebo vypadne internet v bangkokském coworkingu, výsledek je vždy stejný — zbytečná ztráta. Právě proto profesionální algo tradeři provozují své systémy na virtuálních privátních serverech (VPS).",
      },
      { type: "h2", text: "Proč notebook v kavárně nestačí" },
      {
        type: "p",
        text: "Digitální nomád mění lokaci každých pár týdnů. Každá změna sítě znamená novou latenci, nové riziko výpadku a v horším případě i geografický blok u brokera. VPS tyto proměnné eliminuje: server běží nepřetržitě 24/7 v profesionálním datacentru, s garantovaným uptime a stabilní IP adresou.",
      },
      {
        type: "list",
        items: [
          "Uptime 99,9 % a vyšší — server běží i když spíte, letíte nebo jste offline",
          "Latence pod 1–5 ms k brokerovým serverům při správném umístění",
          "Stabilní IP adresa, kterou broker neoznačí za podezřelou",
          "Přístup odkudkoli — stačí vzdálená plocha z telefonu",
        ],
      },
      { type: "h2", text: "Umístění serveru rozhoduje" },
      {
        type: "p",
        text: "Základní pravidlo zní: VPS umisťujte co nejblíže serverům vašeho brokera, nikoli co nejblíže sobě. Většina retailových brokerů hostuje v londýnských, newyorských nebo amsterodamských datacentrech. Pro evropské brokery je ideální Londýn (LD4) nebo Amsterdam, pro americké New York (NY4).",
      },
      {
        type: "quote",
        text: "Latence je neviditelný poplatek, který platíte z každého obchodu. Snížit ji z 80 ms na 2 ms se u skalpovací strategie pozná na výkonnosti během pár týdnů.",
      },
      {
        type: "cta",
        badge: "Doporučujeme",
        title: "Specializovaný VPS pro trading",
        text: "Servery optimalizované pro MetaTrader s latencí pod 1 ms k hlavním brokerům. Předinstalované MT4/MT5, uptime 99,99 % a podpora, která rozumí tradingu.",
        button: "Zobrazit nabídku broker VPS",
        href: "#",
      },
      { type: "h2", text: "Kolik výkonu potřebujete" },
      {
        type: "p",
        text: "Pro jednu instanci MetaTraderu s několika experty postačí 2 vCPU a 4 GB RAM. Jakmile přidáte druhý terminál nebo náročnější optimalizace, počítejte s 4 vCPU a 8 GB RAM. Vyhněte se sdíleným hostingům, které slibují „neomezené" prostředky — u tradingu je důležitá garantovaná alokace.",
      },
      { type: "h3", text: "Na co si dát pozor" },
      {
        type: "list",
        items: [
          "Zálohování konfigurace a snapshoty serveru alespoň týdně",
          "Monitoring — služba, která vám pošle upozornění, když EA přestane běžet",
          "Vyhněte se příliš levným VPS z exotických lokací; ušetřené dva dolary vás mohou stát obchod",
        ],
      },
    ],
  },
  {
    slug: "geograficka-arbitraz-pruvodce",
    title: "Geografická arbitráž: Vydělávejte v eurech, utrácejte v bahtech",
    excerpt:
      "Geografická arbitráž je nejjednodušší legální způsob, jak si zvýšit životní úroveň, aniž byste vydělali o korunu víc. Stačí fakturovat do zemí s vysokými příjmy a žít tam, kde je život levnější — a kvalitnější.",
    category: "Geografická arbitráž",
    date: "2026-08-11",
    readingTime: 10,
    author: "Redakce RoamGenius",
    content: [
      {
        type: "p",
        text: "Představte si dva lidi se stejným příjmem 3 000 eur měsíčně. Jeden bydlí v Praze, druhý v Chiang Mai. První platí nájem 25 000 Kč a ušetří stěží desetinu příjmu. Druhý bydlí v moderním bytě s bazénem za třetinu ceny, stravuje se v restauracích a investuje přes polovinu toho, co vydělá. Rozdíl mezi nimi není v práci — je v geografii.",
      },
      { type: "h2", text: "Jak arbitráž funguje" },
      {
        type: "p",
        text: "Princip je přímočarý: příjem generujete v silné měně a vysoce příjmové ekonomice (klienti v Německu, USA nebo Skandinávii), zatímco životní náklady platíte v ekonomice s nižší cenovou hladinou. Rozdíl — spread — je váš čistý zisk navíc.",
      },
      { type: "h2", text: "Nejoblíbenější destinace roku 2026" },
      {
        type: "list",
        items: [
          "Chiang Mai, Thajsko — měsíční náklady od 900 EUR, komunita nomádů, rychlý internet",
          "Bali (Canggu), Indonésie — lifestyle, coworking a daňově zajímavé vízum",
          "Madeira, Portugalsko — EU jurisdikce, digitální nomádská vesnice v Ponta do Sol",
          "Da Nang, Vietnam — pláž, nízké náklady a rostoucí tech scéna",
          "Tbilisi, Gruzie — 1% daňový režim pro malé podnikatele",
        ],
      },
      {
        type: "quote",
        text: "Geografická arbitráž není o tom žít levně. Je o tom žít lépe za méně peněz — a rozdíl investovat.",
      },
      {
        type: "p",
        text: "Kombinace s automatizovaným tradingem je obzvlášť silná: AOS generuje příjem bez ohledu na to, kde právě jste, a arbitráž maximalizuje hodnotu každého vydělaného dolaru. Pasivní příjem + nízké náklady = rychlá cesta k finanční nezávislosti.",
      },
      {
        type: "cta",
        badge: "Nástroj nomádů",
        title: "Multi-měnový účet pro nomády",
        text: "Přijímejte platby v EUR, USD a GBP, plaťte v bahtech či dongech za reálný směnný kurz bez skrytých poplatků. Virtuální i fyzická karta, výběry z ATM po celém světě.",
        button: "Založit účet zdarma",
        href: "#",
      },
      { type: "h3", text: "Na co nezapomenout" },
      {
        type: "p",
        text: "Arbitráž má i své hranice: daňová rezidence, zdravotní pojištění a vízová pravidla. Těm se věnujeme v samostatném článku o daňové rezidenci — čtěte ho dřív, než si zabalíte kufry.",
      },
    ],
  },
  {
    slug: "backtesting-strategii",
    title: "Backtesting: Jak otestovat obchodní strategii dřív, než riskujete jedinou korunu",
    excerpt:
      "Každá strategie vypadá skvěle, dokud ji nepustíte na živý trh. Backtesting je jediný způsob, jak poznat, jestli má váš systém reálnou hranu — nebo jen krásně vykreslenou křivku plnou chyb.",
    category: "Algoritmický trading",
    date: "2026-08-04",
    readingTime: 12,
    author: "Redakce RoamGenius",
    content: [
      {
        type: "p",
        text: "Backtesting je simulace obchodní strategie na historických datech. Místo abyste rok čekali, jestli systém funguje, projdete deset let trhu za pár hodin. Kvalitní backtest vám řekne očekávanou výnosnost, maximální drawdown, win rate i profit factor — čísla, bez kterých nemá smysl riskovat ani korunu.",
      },
      { type: "h2", text: "Tři nejčastější chyby, které zkreslují výsledky" },
      { type: "h3", text: "1. Overfitting (přeučení)" },
      {
        type: "p",
        text: "Když strategii doladíte tak, aby dokonale seděla na minulá data, naučíte ji historii nazpaměť — ne obchodovat. Pravidlo zdravého rozumu: čím méně parametrů, tím lépe. Strategie se třemi pravidly je robustnější než strategie s patnácti.",
      },
      { type: "h3", text: "2. Ignorování nákladů" },
      {
        type: "p",
        text: "Spread, komise a slippage dokážou ziskovou strategii proměnit ve ztrátovou. Skalpovací systém s průměrným ziskem 3 pipy na obchod je při reálném spreadu 2 pipy mrtvý — v backtestu bez nákladů ale vypadá jako zlatý důl.",
      },
      { type: "h3", text: "3. Look-ahead bias" },
      {
        type: "p",
        text: "Klasická past: strategie „vidí" data, která v době obchodu ještě neexistovala — například uzavírací cenu svíčky, která se právě formuje. Vždy testujte pouze s informacemi dostupnými v momentě vstupu.",
      },
      {
        type: "quote",
        text: "Backtest vám neřekne, kolik vyděláte. Řekne vám, kolik můžete tratit, a jestli má smysl to vůbec zkoušet.",
      },
      { type: "h2", text: "Walk-forward analýza: test reality" },
      {
        type: "p",
        text: "Zlatý standard validace. Data rozdělíte na úseky — strategii optimalizujete na prvním úseku a ověříte na následujícím, který v optimalizaci nefiguroval. Pak okno posunete a opakujete. Strategie, která projde walk-forward testem, má daleko vyšší šanci přežít živý trh.",
      },
      {
        type: "cta",
        badge: "Premium nástroj",
        title: "Profesionální backtesting platforma",
        text: "Ticková data s kvalitou 99,9 %, realistický model spreadu a slippage, walk-forward analýza a Monte Carlo simulace v jednom nástroji.",
        button: "Vyzkoušet 14 dní zdarma",
        href: "#",
      },
    ],
  },
  {
    slug: "metatrader-5-expert-advisors",
    title: "MetaTrader 5 a Expert Advisors: Kompletní průvodce automatizací obchodování",
    excerpt:
      "MetaTrader 5 zůstává nejrozšířenější platformou pro automatizované obchodování. Projdeme si, jak Expert Advisors fungují, kde je sehnat, jak je otestovat a jak poznat podvod.",
    category: "Nástroje",
    date: "2026-07-28",
    readingTime: 9,
    author: "Redakce RoamGenius",
    content: [
      {
        type: "p",
        text: "Expert Advisor (EA) je program v jazyce MQL5, který obchoduje za vás — otevírá a zavírá pozice podle předem definovaných pravidel, bez emocí, bez únavy, 24 hodin denně. V kombinaci s VPS a kvalitním brokerem tvoří základ každého seriózního AOS.",
      },
      { type: "h2", text: "Proč právě MetaTrader 5" },
      {
        type: "p",
        text: "MT5 nabízí multi-měnový strategický tester, nativní podporu hloubky trhu (DOM) a rychlejší engine než jeho předchůdce. Obrovská komunita znamená tisíce hotových indikátorů a expertů — a také tisíce podvodníků, takže se hodí obezřetnost.",
      },
      { type: "h2", text: "Kde EA sehnat — a jak poznat podvod" },
      {
        type: "list",
        items: [
          "Oficiální MQL5 Market — ověřené signály, recenze a demo verze",
          "Vývojáři s veřejnou historií a live signálem, ne jen screenshoty",
          "Červená vlajka: garantované výnosy, martingale skrývaný pod názvem 'recovery system'",
          "Nikdy nekupujte EA bez možnosti vlastního backtestu",
        ],
      },
      {
        type: "quote",
        text: "Nejlepší Expert Advisor je ten, kterému rozumíte. Pokud nevíte, proč otevírá obchody, nevíte ani kdy přestal fungovat.",
      },
      {
        type: "p",
        text: "Před nasazením na živý účet vždy projděte cestu: backtest na kvalitních datech → forward test na demo účtu (minimálně 3 měsíce) → malý reálný účet. Teprve pak škálujte kapitál.",
      },
      {
        type: "cta",
        badge: "Ověřený broker",
        title: "Broker pro EA bez omezení",
        text: "ECN účet s nízkými spready, bez zákazu skalpování a hedgingu, server v Londýně pro minimální latenci. Ideální partner pro vaše Expert Advisors.",
        button: "Otevřít ECN účet",
        href: "#",
      },
    ],
  },
  {
    slug: "danova-rezidence-digitalniho-nomada",
    title: "Daňová rezidence digitálního nomáda: Kde (a jak) platit daně v roce 2026",
    excerpt:
      "Nejrizikovější část nomádského života není letadlo ani street food — je to daňová rezidence. Kde skutečně daníte, když nikde nežijete déle než tři měsíce? A jak to udělat legálně a chytře?",
    category: "Daně & Rezidence",
    date: "2026-07-21",
    readingTime: 11,
    author: "Redakce RoamGenius",
    content: [
      {
        type: "p",
        text: "Daňová rezidence určuje, kde odvádíte daně z celosvětových příjmů. Většina zemí používá pravidlo 183 dní, ale pozor — stačí, aby vás domovský stát považoval za rezidenta kvůli „centru životních zájmů", a povinnosti vám vznikají i při kratším pobytu.",
      },
      { type: "h2", text: "Tři legální modely" },
      { type: "h3", text: "1. Rezidence v zemi s teritoriálním zdaněním" },
      {
        type: "p",
        text: "Země jako Gruzie, Panama nebo Paraguay zdaňují jen příjmy vzniklé na jejich území. Příjem ze zahraničních klientů či tradingu může být zcela osvobozen — za předpokladu, že tam získáte skutečnou rezidenci, ne jen papír.",
      },
      { type: "h3", text: "2. Rezidence v zemi s paušální či nízkou sazbou" },
      {
        type: "p",
        text: "Gruzie nabízí režim Small Business se sazbou 1 %, Bulharsko rovných 10 %, Madeira atraktivní podmínky v rámci EU. Pro mnohé je to ideální kompromis mezi legálností, jednoduchostí a optimalizací.",
      },
      { type: "h3", text: "3. Zůstat rezidentem doma" },
      {
        type: "p",
        text: "Pro příjmy do určité výše může být nejjednodušší zůstat českým rezidentem a cestovat s turistickými či nomádskými vízy. Ušetříte si byrokracii — zaplatíte ale plné zdanění včetně sociálního a zdravotního.",
      },
      {
        type: "quote",
        text: "Daňová optimalizace je legální. Daňový únik ne. Hranice mezi nimi je tenká — a jmenuje se kvalitní poradce.",
      },
      {
        type: "cta",
        badge: "Doporučená služba",
        title: "Konzultace s daňovým specialistou pro nomády",
        text: "Individuální posouzení vaší situace: rezidence, struktura podnikání, DTT smlouvy a bezpečný plán přesunu. První konzultace zdarma.",
        button: "Rezervovat konzultaci",
        href: "#",
      },
      {
        type: "p",
        text: "Tento článek není daňovým poradenstvím. Před jakýmkoliv rozhodnutím se poraďte s licencovaným poradcem ve vaší jurisdikci.",
      },
    ],
  },
  {
    slug: "nejlepsi-brokeri-automatizovane-obchodovani",
    title: "5 nejlepších brokerů pro automatizované obchodování v roce 2026",
    excerpt:
      "Broker může vaši strategii podpořit — nebo ji tiše zabít spreadem, rekotacemi a zákazem skalpování. Vybrali jsme pětici, která s Expert Advisors hraje fér.",
    category: "Nástroje",
    date: "2026-07-14",
    readingTime: 7,
    author: "Redakce RoamGenius",
    content: [
      {
        type: "p",
        text: "Pro automatizované obchodování jsou požadavky na brokera specifické: nízké a stabilní spready, rychlá exekuce bez rekotací, povolení skalpování i hedgingu a ideálně servery v hlavních finančních centrech pro minimální latenci.",
      },
      { type: "h2", text: "Podle čeho jsme vybírali" },
      {
        type: "list",
        items: [
          "Regulace minimálně na úrovni CySEC/ASIC/FCA",
          "Průměrný spread na EURUSD pod 0,2 pipu na ECN účtu",
          "Exekuce pod 50 ms a žádné omezení EA",
          "Bezplatný VPS při vyšším objemu obchodů",
        ],
      },
      { type: "h2", text: "Naše výsledná pětice" },
      {
        type: "p",
        text: "Do užšího výběru se dostali brokeři s dlouhou historií, transparentním reportováním a infrastrukturou přátelskou k algoritmům. Detailní srovnání spreadů a komisí průběžně aktualizujeme — podmínky se mění a slepá důvěra v rok staré recenze se nevyplácí.",
      },
      {
        type: "cta",
        badge: "Volba redakce",
        title: "Náš doporučený ECN broker",
        text: "Účet s spreadem od 0,0 pipu, komise 3 USD na lot, exekuce pod 40 ms a VPS zdarma od 10 lotů měsíčně. Ideální startovní bod pro váš AOS.",
        button: "Porovnat podmínky",
        href: "#",
      },
      {
        type: "p",
        text: "Mějte na paměti, že obchodování CFD a forexu je rizikové a většina retailových účtů přichází o peníze. Obchodujte pouze s kapitálem, jehož ztrátu si můžete dovolit.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
