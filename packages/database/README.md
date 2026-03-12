# Prisma Database Migration Workflow

This project uses **Prisma** for managing the database schema.  
Follow this workflow when making changes to the database locally.

---

## 1. Start the Database

Start the local PostgreSQL container:

```
docker-compose up db -d
```

## 2. Create the Migration

Create the Prisma migration, from root

```
pnpm --filter @mtg/database prisma:migrate:dev --name {name}
```

## 3. Stop the Database

Stop the local PostgreSQL container:

```
docker-compose down
```

