# Pokemon Search & Team Builder API — Project Proposal

## 1. Project Concept

A REST API for browsing Pokemon and building personal teams. Admins manage the Pokemon database, trainers search through it and save a team of up to 6.

Three resources: Pokemon, Types, and Teams. A trainer logs in, picks their Pokemon, saves their team. An admin handles the database side — adding, updating, removing entries.

---

## 2. Scope and Functionality

### Resources

| Resource | What it stores |
|----------|----------------|
| Pokemon | Name, type, abilities, base stats |
| Types | Fire, Water, Grass, etc. |
| Teams | A trainer's saved team, max 6 Pokemon |

### Endpoints

**Pokemon**

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/pokemon` | Anyone | Get all Pokemon, filter by type |
| GET | `/api/pokemon/:id` | Anyone | Get one Pokemon |
| POST | `/api/pokemon` | Admin | Add a Pokemon |
| PUT | `/api/pokemon/:id` | Admin | Update a Pokemon |
| DELETE | `/api/pokemon/:id` | Admin | Remove a Pokemon |

**Types**

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/types` | Anyone | Get all types |
| GET | `/api/types/:id` | Anyone | Get one type |
| POST | `/api/types` | Admin | Add a type |
| PUT | `/api/types/:id` | Admin | Update a type |
| DELETE | `/api/types/:id` | Admin | Delete a type |

**Teams**

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/api/teams` | Trainer | Get their own team |
| POST | `/api/teams` | Trainer | Create a team |
| PUT | `/api/teams/:id` | Trainer | Update their team |
| DELETE | `/api/teams/:id` | Trainer | Delete their team |

### Data and Validation

Trainers send Pokemon data — name, type IDs, abilities, stats — when creating or updating entries. Team requests are a list of Pokemon IDs. The API returns JSON with the relevant data. Incoming requests are validated with Joi.

### Roles

| Role | Permissions |
|------|-------------|
| admin | Full CRUD on Pokemon and Types; can read all teams |
| trainer | Read Pokemon and Types; CRUD on their own team only |

---

## 3. Course Content Alignment

| Course Topic | How it's used |
|---|---|
| Node.js, Express, TypeScript (Module 1) | Base setup for the entire API |
| Layered Architecture — Routes, Controllers, Services, Repository (Module 2) | All three resources follow the full layered structure |
| CRUD Operations (Module 2) | Pokemon, Types, Teams |
| Firebase Firestore (Module 3) | Database for all three resources |
| Firebase Authentication (Module 4) | Trainers log in; JWT tokens protect routes |
| Role-Based Access Control (Module 4) | admin vs trainer enforced via custom claims middleware |
| Joi Validation (Module 3) | POST and PUT request bodies validated |
| Swagger / OpenAPI (Module 5) | Docs for all endpoints |
| Git Workflow | main, dev, and feature branches; GitHub issues per milestone |

---

## 4. GitHub Project Setup

**Branches**
- `main` — clean, working code only
- `development` — ongoing work
- `feature/*` — one per issue, merged into development via PR