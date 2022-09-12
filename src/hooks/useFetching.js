import { useState } from "react";

export const useFetching = (callback) => {
    const [isLoading, setisLoading] = useState(false);
    const [error,seterror] = useState('')
    
    
    
     const fetching = async (...args) =>{
        try{setisLoading(true)
            await callback(...args)}
        catch (e) {seterror(e.massage)}
        finally{setisLoading(false)}
    
    
    }
    return [fetching, isLoading, error]
}



