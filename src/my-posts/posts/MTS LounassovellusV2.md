---
path: "MTSSovellusV2"
date: "2022-11-25"
title: "MTS Lounassovellus versio 2.0!!"
tags: ["Blazor", "NetlifyFunctions", "FaunaDB"]
excert: "Mitäs tänään syötäisiin? Sama kysymys vaivaa meitä edelleen päivästä toiseen! Herokun ilmainen dyno loppuu, joten jotain piti tehdä!"
repo: "ohanhimaki/mita-tanaan-syotaisiin-web"
---

## MTS Lounassovellus versio 2.0!!

[MTS Lounassovellus](https://mts.ollihanhimaki.fi/)

Sovelluksen postgres kannat korvattiin faunadb:llä, bäkkäri netlify funkkareilla ja frontti blazorilla. Hostataan nyt Netlify:hyn!

Tässä github copilotilla generoitu blogipostaus, kaikki ei välttämättä ole faktaa, mutta nämähän on välillä aika huvittavia! 

## MTS Lounassovellus versio 2.0!!

### FaunaDB

Sovellukseen valikoitui FaunaDB, koska se on helppo käyttää ja se on myös ilmainen. FaunaDB on myös hyvin suunniteltu, sillä se on suunniteltu myös serverless arkkitehtuurille. 

FaunaDB:n dokumentaatio on hyvä ja se on helppo käyttää. Se on myös helppo integroida Blazorilla, koska Blazorilla on oma [FaunaDB](https://www.nuget.org/packages/FaunaDB.Client/) kirjasto.

### Netlify Functions

Netlify funkkareilla pystyy helposti hostaamaan serverless funkkareita. 

Netlify funkkareilla on myös hyvä dokumentaatio ja ne on helppo integroida Blazorilla, koska Blazorilla on oma [NetlifyFunctions](https://www.nuget.org/packages/NetlifyFunctions/) kirjasto.

### Blazor

Blazor on hyvä valinta, koska se on helppo integroida netlify funkkareihin. Blazorilla on myös hyvä dokumentaatio ja se on helppo integroida FaunaDB:hen.

### MTS Lounassovellus

MTS Lounassovellus on nyt siis hostattuna Netlifyyn, käyttää FaunaDB:tä ja netlify funkkareita. 

Sovellus on edelleen avoimen lähdekoodin ja löytyy [githubista](https://github.com/ohanhimaki/mita-tanaan-syotaisiin-web)


