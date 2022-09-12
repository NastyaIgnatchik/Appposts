import React from 'react';
import cl from './Mymodule.module.css'
const Mymodal = ({children,visible,setVisible}) => {
    const rootClasses =[cl.myModal]
        if(visible){rootClasses.push(cl.active)}
    return (
        
        <div className={rootClasses.join('')}>
            <div className={cl.myModalContent}> {children}</div>
           
        </div>
    );
};

export default Mymodal;