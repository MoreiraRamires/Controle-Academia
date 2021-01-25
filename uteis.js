module.exports={
  age : function (timestamp){
    let today = new Date()
    const birthDate = new Date ( timestamp)
  
    let age = today.getUTCFullYear()- birthDate.getUTCFullYear()
    const month = today.getUTCMonth() - birthDate.getUTCMonth()
  
    if ( month < 0 || month == 0 && today.getUTCDate() < birthDate.getUTCDate() ){
      age = age -1
    }
  
    return age
  },
  date: function(timestamp){
    const date = new Date(timestamp);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() +1 ;
    const day = date.getUTCDate();

    return `${year}/ ${month}/${day} 📅 `
  }
}