
# By-menu server side

An API to connect to a database using a interfaced class for the controllers

## API access example
These two rotes below are configurated as example. Do you need just to implement the correspondent data in your MySQL database.

#### User login

```http
  GET /user/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `no parameter` | `no type` | no parameter required |

#### User register

```http
  GET /user/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `no parameter` | `no type` | no parameter required |

## Run Locally

Clone the project

```bash
  git clone https://github.com/LeonardoRochaInacio/simple_api_template
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


## Creating the repository

To create the repository you need to run the command below:

```bash
  npm run generate
```
After that select the option *"Generate repository interface + empty model + MySQL repository"*.

```bash
What do you want to generate? ...
---> Generate repository interface + empty model + MySQL repository
Generate controller
Generate route
```

You need to pass the data base repository ModelName argument, so you will see that the repository, repository interface and the model will be created on the following folders:

| File  | Inherited from  | Description  |
| :------------: | :------------: | :------------: |
|  ./src/repositories/interfaces/I**ModelName**Repository.ts | ReadWriteRepository  | All the specific methods must be declared here as abstract  |
| ./src/repositories/MySQL/MySQL**ModelName**.ts  | I**ModelName**Repository  | All the specific methods declared in the file above must be implemented here besides the default methods (getAll, get, create, update, delete)  |
| ./src/models/**ModelName**.ts  | none  |  It's the database model, corresponding to the table columns |

## Creating the controller

```bash
  npm run generate
```
After that select the option *"Generate controller"*.

```bash
What do you want to generate? ...
Generate repository interface + empty model + MySQL repository
---> Generate controller
Generate route
```
You need to pass the repository **ModelName** and the **ControllerName** as argument of that CLI command.
The following files will be generated:

| File  | Inherited from  | Description  |
| :------------: | :------------: | :------------: |
|  ./src/controllers/**ModelName**/**ControllerName**Controller.ts | AbstractController< MySQL**ModelName**Repository >  | All the actions related with this controller must be implemented here. You can get the repository just like that: this.Repository  |

## Creating the route

```bash
  npm run generate
```
After that select the option *"Generate route"*.

```bash
What do you want to generate? ...
Generate repository interface + empty model + MySQL repository
 Generate controller
--->Generate route
```
You need to pass the repository **ModelName**, the **ControllerName** and the **RouteName** as argument of that CLI command.
The following files will be generated:

| File  | Inherited from  | Description  |
| :------------: | :------------: | :------------: |
|  ./src/routes/**RouteName**Route.ts | none  | Here you can follow the commented implementation to make you controller action call  |

## Inserting the route at the server.ts
Just open the server.ts at the root folder and insert the following:
```javascript
app.use("/user", require("./routes/RouteNameRoute"));
```

## Example of custom repository method

./src/repositories/interfaces/*IUserRepository.ts*
```javascript
export abstract class IUserRepository<T, Y> extends ReadWriteRepository<T, Y>
{
    public abstract getUserByName(username: string) : any;
    public abstract updateLastLoginTime(id: number, newValue: number) : any;
}
```
./src/repositories/*MySQLUserRepository.ts*

```javascript
    public async getUserByName(username: string) 
    {
        const [row] = await MySQLClient.GetInstance().Query("SELECT id, username, password, email, creation_date, last_login_date, role FROM users WHERE username = ?", [username]);       
        return (row as any)[0] as unknown as Promise<User>;
    }

    public async updateLastLoginTime(id: number, newValue: number)
    {
        const [row] = await MySQLClient.GetInstance().Query("UPDATE users SET last_login_date = ? WHERE id = ?", [id, newValue]);       
        return row as unknown as ResultSetHeader;
    }
```



## Tech Stack

**Server:** NodeJS, Express, Jest

**Implemented BD:** MySQL


## Authors
- [@brunocecconi](https://www.github.com/brunocecconi)

