# Gestion de Produits - Application Web

Ce projet est une application web complète permettant la gestion des produits.
Elle comprend un backend et un frontend, avec des fonctionnalités CRUD (Create, Read, Update, Delete) pour les produits.

Ce repository répresente le backend.

## Stack Technique
- **Langage** : TypeScript
- **Framework** : NestJS
- **Base de données** : PostgreSQL
- **ORM** : Prisma
- **Gestion des erreurs et logs** : Logger pour les logs, et validation des données avec Zod.

## Installation
1. **Clonez le dépôt :**
   git clone https://github.com/test-mpel-back.git
   cd test-mpel-back
2. **Installez les dépendances :**
    npm install ou avec votre gestionnaire de packet
3. **Configurez les variables d'environnement de la base de donnée:**
    Créer le fichier .env à la racine du projet en définissant : **DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME** et surtout **DATABASE_URL**.
   par exemple : copié tout dans l'exemple et collé dans le fichier .env en remplacer les valeurs des variables **DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME** 
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=12345
   DB_NAME=test
   DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public"
5. **Exécutez les migrations de la base de données :**
    npx prisma migrate dev
### Démarrage
  npm run start:dev
  **Attention au numéro de port d'écoute, par défaut: 3001 et vous pouvez la changez dans le fichier main.ts s'il est occupé.**

### Endpoints disponibles

  POST /product/new : Créer un produit         

  GET /product/list : Lister les produits

  PATCH /products/:id : Mettre à jour un produit

  DELETE /products/:id : Supprimer un produit 
