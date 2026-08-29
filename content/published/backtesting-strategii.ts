import type { Article } from "../../src/lib/article-types";

const article = {
  "slug": "backtesting-strategii",
  "title": "Backtesting: Jak otestovat obchodní strategii dřív, než riskujete jedinou korunu",
  "excerpt": "Každá strategie vypadá skvěle, dokud ji nepustíte na živý trh. Backtesting je jediný způsob, jak poznat, jestli má váš systém reálnou hranu — nebo jen krásně vykreslenou křivku plnou chyb.",
  "category": "Algoritmický trading",
  "date": "2026-08-04",
  "readingTime": 12,
  "author": "Redakce RoamGenius",
  "content": [
    {
      "type": "p",
      "text": "Backtesting je simulace obchodní strategie na historických datech. Místo abyste rok čekali, jestli systém funguje, projdete deset let trhu za pár hodin. Kvalitní backtest vám řekne očekávanou výnosnost, maximální drawdown, win rate i profit factor — čísla, bez kterých nemá smysl riskovat ani korunu."
    },
    {
      "type": "h2",
      "text": "Tři nejčastější chyby, které zkreslují výsledky"
    },
    {
      "type": "h3",
      "text": "1. Overfitting (přeučení)"
    },
    {
      "type": "p",
      "text": "Když strategii doladíte tak, aby dokonale seděla na minulá data, naučíte ji historii nazpaměť — ne obchodovat. Pravidlo zdravého rozumu: čím méně parametrů, tím lépe. Strategie se třemi pravidly je robustnější než strategie s patnácti."
    },
    {
      "type": "h3",
      "text": "2. Ignorování nákladů"
    },
    {
      "type": "p",
      "text": "Spread, komise a slippage dokážou ziskovou strategii proměnit ve ztrátovou. Skalpovací systém s průměrným ziskem 3 pipy na obchod je při reálném spreadu 2 pipy mrtvý — v backtestu bez nákladů ale vypadá jako zlatý důl."
    },
    {
      "type": "h3",
      "text": "3. Look-ahead bias"
    },
    {
      "type": "p",
      "text": "Klasická past: strategie „vidí“ data, která v době obchodu ještě neexistovala — například uzavírací cenu svíčky, která se právě formuje. Vždy testujte pouze s informacemi dostupnými v momentě vstupu."
    },
    {
      "type": "quote",
      "text": "Backtest vám neřekne, kolik vyděláte. Řekne vám, kolik můžete tratit, a jestli má smysl to vůbec zkoušet."
    },
    {
      "type": "h2",
      "text": "Walk-forward analýza: test reality"
    },
    {
      "type": "p",
      "text": "Zlatý standard validace. Data rozdělíte na úseky — strategii optimalizujete na prvním úseku a ověříte na následujícím, který v optimalizaci nefiguroval. Pak okno posunete a opakujete. Strategie, která projde walk-forward testem, má daleko vyšší šanci přežít živý trh."
    },
    {
      "type": "cta",
      "badge": "Premium nástroj",
      "title": "Profesionální backtesting platforma",
      "text": "Ticková data s kvalitou 99,9 %, realistický model spreadu a slippage, walk-forward analýza a Monte Carlo simulace v jednom nástroji.",
      "button": "Vyzkoušet 14 dní zdarma",
      "href": "#"
    }
  ]
} satisfies Article;

export default article;
