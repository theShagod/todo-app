# TODO App API
This app was made in order to practice fetch and built a basic backend for a todo app.
### Installation
Use the following command to install.
`npm install`
And then use:
`node server.js`
to run the server.

### Features
You can use this API to:
 - GET
 - PUT
 - DELETE
 - POST
Currently these features are rather limited client side.

#### GET
You can easily use get by going to this url: `http://localhost:5050/api/` after you install and run the server.

The other features requires some fetch knowledge or you can use a REST API Client like [Insomnia](https://insomnia.rest/).
#### PUT and DELETE
`http://localhost:5050/api/:id`
where `:id` is task you want to change or delete, respectively. 
#### POST
Make a post request to add a new task.

### JSON structure
The JSON object returned from get is an array of JSON objects. Each JSON object currently follows this structure:
```
{
    'id': '1',
    'name': 'do HW',
    'logged_time':'15.00'
}
```

### License

Copyright 2020 Jon

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.