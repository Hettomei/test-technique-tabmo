# Description

Test technique Tabmo

TODO :

- consulter la liste des Pokémons en vente, l’api ne fourni pas de prix pour les Pokémons, vous pouvez mettre des prix aléatoires
- consulter la page de détail d’un Pokémon pour y trouver plus d’informations
- ajouter/retirer un Pokémon à mon panier
- consulter le détail de mon panier
- visualiser le montant de mon panier et le nombre de Pokémons tout au long de ma visite

# How to start

```bash
# Install node 8+ https://nodejs.org/en/
npm install
npm start
```

Open http://localhost:3000 to view it in the browser.

# Choices

## Axios :
Because in case of 404, it throw an error. Fetch doesn't, we have to check status.

## reactstrap :
bootstrap is known since lot of year
Enough to display

## jest :
Because was already configured

## pokemon saved in a hash in store :
Previous check : every names are unique
so we can use it as key without loosing data

# About pokeapi

I choose to cache every data like if the server never add new data.
To respect the doc :

- fixed limit of 100 API requests per IP address per minute
- we recommend caching data on your service.

# Build

```
npm run build
```

# TO DO

- use i18next
- save cart in localstorage
- split code in folder
- Use React.PropType or use Typescript
- better code structure : end with Component / Service....


# Credits

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
