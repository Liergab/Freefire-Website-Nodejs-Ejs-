console.log('hello')
window.addEventListener('DOMContentLoaded', () => {
    const createCollection = document.querySelector('#createCollection');
    // const updateAccount = document.querySelector('#updateAccount');
    // const deleteAccount = document.querySelector('#deleteAccount');

    

    createCollection.addEventListener('click', async()=> {
        const cTitle = document.querySelector('#colTitle')
        const cImage = document.querySelector('#colImage')
        const cDescription = document.querySelector('#colDescription')
        
            const {data:createResults} = await axios({
            method: 'POST',
            url: '/home/create',
            data:{
                colTitle:cTitle.value,
                colImage:cImage.value,
                colDescription:cDescription.value
            }
         });

         if(createResults.data) {
            cTitle.value = "";
            cImage.value = "";
            cDescription.value = "";
            alert(createResults.message);
         }

        
     
    })

    // updateAccount.addEventListener('click', async()=> {
    //     const uName = document.querySelector('#uname')
    //     const uid = document.querySelector('#uid')
    //     const uPassword = document.querySelector('#upassword')
       
    //     const {data:updateResults} = await axios({
    //         method:'PUT',
    //         url:'/account',
    //         data: {
    //             id: uid.value,
    //             username: uName.value,
    //             password: uPassword.value
    //         }
    //     })

    //     if(updateResults.data) {
    //         uid.value ="";
    //         uName.value = "";
    //         uPassword.value = "";
    //         alert(updateResults.message);
    //      }
    
    // })

    // deleteAccount.addEventListener('click', async()=> {
    //     const Did = document.querySelector('#Did')

    //    const {data:deleteResults} = await axios({
    //     method:'DELETE',
    //     url:'/account',
    //     data: {
    //         id: Did.value
    //     }
    //    })
    //    if(deleteResults.data) {
    //     Did.value ="";
    //     alert(deleteResults.message);
    //  }
    // })



})