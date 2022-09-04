### Getting started: Express typescript
1. Install typescript compiler
```ts
    npx tsc --init
``` 

2. Install package json
```ts
    npm init -y
```

3. Make src directory and create app.ts file
```
    $ mkdir src

    $ echo> src/app.ts
```

4. Install typescript and ts-node
```
    $ npm install typescript ts-node-dev -D

```

5. Add ts scripts to package.json
```
   "scripts":{
    "dev": "ts-node-dev src/app.ts"
    }
```

6. Installing express
```
    $ npm install express

```

3. Installing types/express
```
    $ npm install @types/node @types/express -D

```
4. Bootstraping express application
```ts
import express from 'express';


const app = express();

// convert body  to json
app.use(express.json())

// app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    return res.send("Hello World")
})

```

5. Hello world
```ts
app.listen(4000, () => {
    console.log( 'Server Listening at  :', 'http://localhost:4000')
})

```
___


