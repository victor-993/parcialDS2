import React, {useEffect} from 'react'

export const Mensaje = () => {

   useEffect(() => {
       //console.log('Componente montado')
        const mouseMove = (e) =>{
            console.log(e.x, e.y)
        }        
        window.addEventListener('mousemove',mouseMove)
        return () => {
            //console.log('Componente desmontado')
          window.removeEventListener('mousemove',mouseMove)  
        }   
       
   },[])


   



    
    return (
        <div>
           <h3>SOY MENSAJE</h3> 
        </div>
    )
}
