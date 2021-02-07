import React, {Component} from 'react';
import Lista from './componentes/Lista';
class  index extends Component{
    constructor(props){
       super(props);
       this.state ={
            array:[
               {id:1, nome:"Matheus", curtidas:10, comentarios:20},
               {id:2, nome:"Henrique", curtidas:40, comentarios:30},
               {id:3, nome:"Pedro", curtidas:1, comentarios:0}
              ] 
       };
    }  
  
  
  
    render(){
      return(
  
          <div>
            {this.state.array.map((item)=> {
            return(
            <Lista key={item.id} usuario={item.nome} curtida={item.curtidas}
                   comentarios={item.comentarios}   />
              )
              })}
         </div>   
      );
   }
}

export default index;