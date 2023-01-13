const connection = require('../db/dbConnection')

const Crud = () => {

    const retriveCollection = async (obj) => {
        try {
            const query =` SELECT ${obj} FROM collection; `
           const results = await connection(query)

            return results
        } catch (error) {
            console.log('retrieveCollection error: ', error )
            return []
            
        }
        

    }

    const createCollection = async (obj) => {
        const { colImage,colTitle, colDescription} = obj
        try {
            const query =`INSERT INTO collection VALUES (null,'${colImage}','${colTitle}','${colDescription}'); `
            await connection(query)

            return true
        } catch (error) {
            console.log('createCollection error: ', error )
            return false
            
        }
        
    }

    const updateCollection = async(obj) => {

        const {id, colImage,  colTitle, colDescription} = obj
 
        try {
          
            const query =` UPDATE collection SET  colImage=${colImage}, colTitle='${colTitle}', colDescription='${colDescription}' WHERE id = ${id}; `
            await connection(query)

            return true
        } catch (error) {
            console.log('updateCollection error: ', error )
            return false
            
        }
        
    }

    const DeleteCollection = async(obj) => {
        const id = obj

        try {
            const query =` DELETE FROM collection WHERE id = ${id} `
            await connection(query)

            return true
        } catch (error) {
            console.log('deleteCollection error: ', error )
            return false
            
        }
    }

 return {
    retrieve:retriveCollection,
    create:createCollection,
    update:updateCollection,
    Delete:DeleteCollection
 }
}

module.exports = Crud