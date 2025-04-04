# PETER-POWER-MD
FEATURE WHATSapp bot

# PETER-POWER-MD WhatsApp Bot

PETER-POWER-MD ni bot ya WhatsApp inayojumuisha vipengele vingi vya kisasa kwa ajili ya uendeshaji na usimamizi wa makundi. Bot hii inajumuisha vipengele vya **Auto-Moderation**, **Anti-Link**, **Captcha System**, **Mute/Unmute System**, **Warn/Kick System**, **Auto-Reply**, **Always Online Status**, **Anti-Delete**, na mengi zaidi.

## Vipengele

- **Anti-Link System**: Inazuia watumiaji kutuma viungo vya nje katika makundi.
- **Anti-Delete**: Inachukua screenshot ya meseji zilizofutwa na kutuma kwenye kundi.
- **Mute/Unmute System**: Inaruhusu kuzuia sauti ya kundi au kuirudisha.
- **Warn/Kick System**: Inatoa onyo kwa watumiaji wanaotukana na kuwakimbiza baada ya kufikia idadi ya onyo.
- **Auto-Reply**: Inajibu maswali ya kawaida kwa majibu ya haraka.
- **Captcha System**: Inahakikisha usalama kwa kutuma CAPTCHA kabla ya mtu kujiunga na kundi.
- **Auto-Delete**: Inafuta meseji zisizofaa kwenye kundi.
- **Always Online**: Inadumisha hali ya "online" kila wakati.
- **Video Downloading**: Inaruhusu watumiaji kupakua video kutoka kwa Facebook, YouTube, Twitter, Instagram, nk.

## Mahitaji

- Node.js (version 14 na kuendelea)
- WhatsApp API key kutoka @whiskeysockets/baileys
- Database ya kuhifadhi user statistics (MySQL/PostgreSQL)

## Muundo wa Project

```
PETER-POWER-MD/
├── .gitignore
├── README.md
├── package.json
├── config/
│   ├── config.js
│   ├── private.json
├── bot/
│   ├── bot.js
│   ├── commands/
│   │   ├── antilink.js
│   │   ├── antidelete.js
│   │   ├── mute_unmute.js
│   │   ├── warn_kick.js
│   │   ├── auto_reply.js
│   │   ├── captcha.js
│   │   ├── auto_delete.js
│   │   ├── video_downloader.js
│   │   ├── auto_moderation.js
│   │   ├── commands_helper.js
├── utils/
│   ├── logger.js
├── index.js
└── keepalive.js
```

## Maelekezo ya Usanidi

### 1. Clone repository hii kwenye PC yako

```bash
git clone https://github.com/Mrskymax/PETER-POWER-MD.git
cd PETER-POWER-MD
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run bot

```bash
node index.js
```

## Deployment kwa Glitch

1. Pakia files zako kwenye **GitHub**
2. Fungua **Glitch**, chagua "Import from GitHub"
3. Ingiza link ya repository yako
4. Baada ya import, endesha command:
   ```bash
   npm install && npm start
   ```
5. Bot yako itaanza kufanya kazi moja kwa moja!

## Mchango
Ikiwa una mawazo mapya au unataka kuboresha bot hii, jisikie huru kuchangia kupitia **Pull Requests** kwenye GitHub!
