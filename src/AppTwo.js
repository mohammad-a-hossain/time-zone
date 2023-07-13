 import React from "react";
 import './App.css'
 import useClock from './hooks/useClock';
  
 
   
 function AppTwo(){
           const { clock:local }= useClock()
           const { clock:est }=  useClock('EST')
           const { clock:pst }=  useClock('PST')  
           const { clock:pakistan } =useClock('UTC', 5 * 60)
           const { clock:edt }=  useClock('EDT')
           const { clock:bst }=  useClock('BST')  
           const { clock:mst }=  useClock('MST')  

           console.log('local utc', local.date);
           console.log('EST', est.date);
           console.log('PST', pst.date);
           console.log('pakistan', pakistan.date);
           console.log('EDT', edt.date);
           console.log('BST', bst.date);
           console.log('MST', mst.date);
            return (
             <div>
           
             apptow
             </div>
            );
          }
        
      
 export default AppTwo 

 