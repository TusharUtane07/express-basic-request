const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send("Hello World, This is my first get request I ever created!!")
})// This is our first route and this will return hello world on first page that is / in url.

app.get('/route1', (req, res)=>{
    res.send("This is Route1 and these is amazing!!")
})// This is second routes if we change url to this route we will get info inside it.

// We can also respond user with html code that will be rendered on users screen
app.get('/html', (req, res)=>{
    res.send(`
        <html>
            <body>
                <h1 style="color:green">Hello we are rendering the html directly from the http req.</h1>
            </body>
        </html>
    `)
})

// We are listening to our port here that is 3000 in our case this can be changed. 
app.listen(port, ()=>{
    console.log(`expample app listening on port ${port}`)
})