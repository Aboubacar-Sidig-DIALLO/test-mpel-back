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
    Dans le fichier .env à la racine du projet : DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME
4. **Exécutez les migrations de la base de données :**
    npx prisma migrate dev
### Démarrage
  npm run start:dev

### Endpoints disponibles

  POST /product/new : Créer un produit         

  GET /product/list : Lister les produits

  PATCH /products/:id : Mettre à jour un produit

  DELETE /products/:id : Supprimer un produit 