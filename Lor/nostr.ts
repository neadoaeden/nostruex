   import React, { useState } from 'react';

   function Tooltip({ text, children }) {
     const [visible, setVisible] = useState(false);

     return (
       <div
         onMouseEnter={() => setVisible(true)}
         onMouseLeave={() => setVisible(false)}
         style={{ position: 'relative', display: 'inline-block' }}
       >
         {children}
         {visible && (
           <div style={{
             position: 'absolute',
             backgroundColor: '#555',
             color: '#fff',
             textAlign: 'center',
             borderRadius: '6px',
             padding: '5px 0',
             zIndex: 1,
             bottom: '125%', 
             left: '50%', 
             marginLeft: '-60px', 
             opacity: 0.9
           }}>
             {text}
           </div>
         )}
       </div>
     );
   }

   export default Tooltip;
   