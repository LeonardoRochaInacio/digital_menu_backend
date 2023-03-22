
# By-menu server side

An API to connect to a database using a interfaced class for the controllers
## API Reference

#### Get all menu items

```http
  GET /menuitem
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `no parameter` | `no type` | no parameter required |

#### Get menu item by id

```http
  GET /menuitem/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | id of required menu item |

#### Get all menu items of a restaurant

```http
  GET /menuitem/restaurant/:restaurant_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `restaurant_id` | `number` | restaurant id |

## Run Locally

Clone the project

```bash
  git clone https://github.com/LeonardoRochaInacio/digital_menu_backend
```

Go to the project directory

```bash
  cd digital_menu_backend
```

Install dependencies

```bash
  npm install
```

Start the dev-server that will uses nodemon

```bash
  npm run dev
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Tech Stack

**Server:** NodeJS, Express, Jest

**Implemented BD:** MySQL


## Authors
- [@brunocecconi](https://www.github.com/brunocecconi)
- [@leonardorochainacio](https://www.github.com/leonardorochainacio)

