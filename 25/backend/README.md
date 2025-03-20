1. Backend Workflow

- loader/index.js
- loader/express
- app/routes/v1/api.js
- app/validation/articlesValidation
- app/controller/articlesController
- app/service/articlesService

2. Each Folder purpose

- loaders (init application) (setup restaurant)
- routes (api endpoint) (menu-> each item)
- validation (validation) (check are all the requirement are in the list)
- controller (convert request and response) (convert to kitchen understand language)
- service (business logic) (chef how to cook)
- config (configuration) (menu color...etc)

3. Each File

- loaders/index.js (entry file)
- express.js (engine) (setup kitchen)
- api.js (define routes) (define all menu item)
- articlesValidation.js (validate) (verify that articles are a valid item)
- articlesController.js (convert request and response) (convert to kitchen understand language)
- articlesServices.ks (business logic) (how to cook article)

For JWT
Install jsonwebtoken
Add a env key called JWT_SECRET
controller will call the generateAuthToken with return value
that has token
