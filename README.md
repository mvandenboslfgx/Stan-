# Vermeulen Bouwservice

Next.js website voor S. Vermeulen Bouwservice.

## Hosting

Cloudflare Workers + OpenNext.

## Worker

`vermeulen-bouwservice`

## Production

- `https://vermeulenbouwservice.nl`
- `https://www.vermeulenbouwservice.nl`

## Development → production workflow

```text
code wijzigen
→ npm run typecheck
→ npm run build
→ npm run cf:build
→ npm run cf:preview   (optioneel, lokale workerd-preview)
→ npm run cf:deploy
→ production smoke-test
```

## Build

```bash
npm install
npm run typecheck
npm run build
npm run cf:build
```

## Deploy

```bash
npm run cf:deploy
```

Of alleen deploy na een eerdere OpenNext-build:

```bash
npx opennextjs-cloudflare deploy
```

## Authentication

Wrangler moet zijn ingelogd op het **klantaccount** (`info@vermeulenbouwservice.nl`):

```bash
npx wrangler login
npx wrangler whoami
```

Geen tokens of credentials in de repository of documentatie plaatsen.

## DNS

DNS wordt beheerd via Cloudflare.

## Mail

E-mail wordt gehost via STRATO. Cloudflare DNS bevat de daarvoor vereiste mailrecords.

**MX, SPF, DKIM, DMARC, autoconfig en autodiscover-records niet wijzigen tijdens normale website deployments.**

## Vercel

Vercel is niet meer onderdeel van de productiearchitectuur.
