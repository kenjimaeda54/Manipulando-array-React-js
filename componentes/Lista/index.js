import React,{Component} from 'react';



class Lista extends Component{
    render(){
        return(
            <div key={this.props.key}>
                <h1>{this.props.usuario}</h1>
                <h3>{this.props.curtida > 1 ? this.props.curtida +" curtidas ":
                    this.props.curtida +" curtida "} /
                 {this.props.comentarios> 1 ? this.props.comentarios+" comentarios ":
                  this.props.comentarios+" comentario "}</h3>
              <hr/>
            </div>
        );
    }
}
export default Lista;