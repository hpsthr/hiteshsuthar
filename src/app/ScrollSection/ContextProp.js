import{createContext, useEffect, useContext} from 'react';







const ContextProp = createContext({
    valueShow:false,
    click: () => {},
    
    
    showB:false,
    number:0,
    
})

export default ContextProp