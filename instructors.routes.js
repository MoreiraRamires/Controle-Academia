const fs = require('fs')
const data = require('./data.json')

// ===*Show*=== 

exports.show = function(req,res){
  //req.params

  const{id} = req.params

  const foundInstructor = data.instructors.find(function(instructor){

    return instructor.id ==id 
  })
  if( !foundInstructor) return res.send("Instructor not found")
 
  return res.render("./instructors/show", {instructor:foundInstructor})
}

// ===*Create*===
exports.post = function(req,res){

    const keys = Object.keys(req.body)
   
    for (key of keys){
      if (req.body[key] == ""){
        return res.send('Pls, fill all fields')
      }
    }

    let {avatar_url,birth, name , services, gender}= req.body 

    birth = Date.parse(req.body.birth)
    const created_at = Date.now()
    const id= Number(data.instructors.length+1)    

    data.instructors.push({
      id,
      name, 
      avatar_url,
      birth, 
      gender,
      services,
      created_at
    })

    fs.writeFile("data.json", JSON.stringify(data,null, 2 ),function(err){
      if(err) return res.send('Write file error !')
    
      return res.redirect('/instructors')
    })

  //  return res.send(req.body)
   }

// ===*Update*===

// ===*Delete*===

