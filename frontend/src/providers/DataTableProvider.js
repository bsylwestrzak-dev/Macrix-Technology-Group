class DataTableProvider {

    static getUsers = async () => {
        const response =  await fetch(`${process.env.REACT_APP_API_URL}/users`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
             },
        }) 

        if(response.status == 200){
            return response.json();
        }
        return false;
    }

    static submitUsers = async (data) => {
        const response =  await fetch(`${process.env.REACT_APP_API_URL}/submitUsers`,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
             },
        })
        return response;
    }
}

export default DataTableProvider;