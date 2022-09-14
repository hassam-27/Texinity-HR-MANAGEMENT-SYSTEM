import { useState,useCallback, useEffect } from "react";

import { addUser, displayEmp } from "./request";

const useUser = () => {
    const [emp, setEmp] = useState([])

    const submitUser = useCallback( async (values) => {
        addUser(values)
    })

    const displayEmployees =  useCallback( async () => {
        const res = await displayEmp();
        console.log(res)
        for(let index = 0; index < res.found.length; index++)
        {
            res.found[index].key=index
        }
        setEmp(res.found)
        

    })

    useEffect(() => {
        displayEmployees()
    }, [])
   

    return { submitUser, emp}
}

export default useUser;