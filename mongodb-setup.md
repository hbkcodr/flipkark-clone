### Getting started: Express typescript
1. Sign up

2. Create a cluster

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


