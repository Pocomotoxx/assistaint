# AI Tudásasszisztens Készítő

Ez a projekt egy egyszerű prototípust tartalmaz egy AI-alapú chatbot létrehozásához. A frontend React/Vite/Tailwind alapokra épül, míg a backend egy Node.js (Express) szerver MongoDB-vel.

## Backend indítása

1. Lépj be a `server` könyvtárba és telepítsd a függőségeket:
   ```bash
   cd server
   npm install
   ```
2. Hozz létre egy `.env` fájlt az `.env.example` alapján, majd indítsd a szervert:
   ```bash
   npm start
   ```

Az alapértelmezett port: `3001`.

## Frontend fejlesztői mód

A frontendet a gyökérkönyvtárból indíthatod:
```bash
npm install
npm run dev
```

A projekt buildeléséhez futtasd a következőt:

```bash
npm run build
```

## Tesztkörnyezet

Egyszerű unit tesztek a Node beépített `test` futtatójával készültek. A tesztek futtatásához:

```bash
npm test
```

Ez ellenőrzi például, hogy a válaszstílus sablonok megfelelően betöltődnek, illetve az Express alkalmazás létrejön.

## Funkcionalitás

- Regisztráció és bejelentkezés JWT tokennel
- Kredit alapú API-hívások (minden `POST /api/chat` hívás 1 kreditet von le)
- A chat végpont jelenleg csak visszaismétli a felhasználó üzenetét, a tényleges Gemini API integráció `TODO` megjelöléssel szerepel

### Tudásbázis kinyerés

Az `/api/extract` végponttal különböző forrásokból nyerhető ki szöveg:

- `url`: tetszőleges weboldal tartalma
- `pdf`: PDF fájlok a szerveren
- `doc`/`docx`: Word dokumentumok
- `database`: SQLite adatbázis `knowledge` táblája
- `GET /api/fetch?url=`: egyszerű proxy, amely visszaadja egy URL szöveges tartalmát

Mindegyik hívás hitelesítést igényel, és a válasz a kinyert nyers szöveget tartalmazza.

Ez csak egy minimális kezdeti verzió, a specifikációban szereplő további funkciók még fejlesztésre várnak.

### Válaszstílus profilok

Az alkalmazás 12 beépített stílust kínál, amelyek meghatározzák a chatbot hangvételét:

- Jogi szaknyelv
- Oktatói magyarázó
- Tudományos
- Startup pitch
- Ügyfélszolgálati
- Motivációs tréner
- Politikai elemző
- HR szakértő
- Marketing szövegíró
- Egészségügyi tanács
- IT technikai support
- Sporttanácsadó
