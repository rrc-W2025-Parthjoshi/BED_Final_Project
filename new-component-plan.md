# New Component Plan — Express Rate Limiter

## Component
express-rate-limit

## Why This One
The Pokemon API is public. Nothing stops someone from hitting the
endpoints thousands of times and slowing everything down. Rate limiting
fixes that. I went with express-rate-limit because it's straightforward,
does one job well, and plugs into Express without touching the rest of
the codebase.

## How It'll Work
Each IP gets 100 requests per 15 minutes. Go over that and the API
returns a 429. The limiter sits in app.ts as middleware before the
routes so it covers all endpoints automatically.

## Integration
npm install express-rate-limit, configure it in app.ts, apply it with
app.use() before the routes. No changes needed anywhere else.

## Steps to Implement
1. Install: npm install express-rate-limit
2. Set up the config in app.ts
3. Mount it before all routes
4. Test by exceeding the limit and confirming the 429 response