const connection = require('../db/dbConnection')

const  Login = async(obj) => {
    const {userName} =obj
    try {
        const query =` SELECT * FROM user_login WHERE username ='${userName}'; `
       const results = await connection(query)

        return results
    } catch (error) {
        console.log('retrieveCollection error: ', error )
        return []
        
    }
    


}

module.exports =Login