const express= require('express')
const routes = express.Router()
const instructors = require('./controllers/instructors.routes')
const members = require('./controllers/members.routes')


routes.get('/',function(req,res){
  return res.redirect('/instructors')
  
})

routes.get('/instructors',instructors.index)
routes.put('/instructors/', instructors.put)
routes.post('/instructors',instructors.post)
routes.delete('/instructors',instructors.delete)
routes.get('/instructors/create',instructors.create)
routes.get('/instructors/:id', instructors.show)
routes.get('/instructors/:id/edit', instructors.edit)


routes.get('/members',members.index)
routes.put('/members/', members.put)
routes.post('/members',members.post)
routes.delete('/members',members.delete)
routes.get('/members/create',members.create)
routes.get('/members/:id', members.show)
routes.get('/members/:id/edit', members.edit)




module.exports = routes