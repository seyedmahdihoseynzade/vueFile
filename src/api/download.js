export function DownloadApi(data,calback){
  
    const apiUrl = process.env.VUE_APP_HOST+'/file/download';
          const requestOptions = {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
                 },
            body: JSON.stringify(data),
             };
  
             fetch(apiUrl, requestOptions)
    .then(response => {
      console.log("response:--------------",response)
      return response.json()
    }).then(data=>{
      console.log("data:-----------------------",data)
      calback(data.data.PATH)

    })
  
  }