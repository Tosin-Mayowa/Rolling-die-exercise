import React, {Component} from 'react';
import Die from '../Die/Die';
import './Game.css';
class Game extends Component {
constructor(props){
    super(props);
    this.state={
        rand:0,
        rand1:0,
        clicked:false,
        firstDie:[
        'fas fa-dice-one', 
        'fas fa-dice-two', 
        'fas fa-dice-three',
        'fas fa-dice-four',
        'fas fa-dice-five',
        'fas fa-dice-six'
         ],

          secondDie:[
        'fas fa-dice-six', 
        'fas fa-dice-five', 
        'fas fa-dice-four',
        'fas fa-dice-three',
        'fas fa-dice-two',
        'fas fa-dice-one'
         ]
    
    }
}
rolledDie=()=>{
    const n=this.state.secondDie.length;
    const m=this.state.firstDie.length;
     this.setState({rand:Math.floor(Math.random()*m), clicked:true});
     this.setState({rand1:Math.floor(Math.random()*n)});
     //this is to controll the display on btn
     setTimeout(()=>{
         this.setState({clicked:false})
     },1000)

}
render(){
    return (
<div className='Game'>

   <div className={this.state.clicked ?'Game-Die' : 'Roll Die'}>
   <Die face={this.state} idx={this.state.rand} idx2={this.state.rand1}/>
   </div>

<button onClick={this.rolledDie} className='Game-btn' disabled={this.state.clicked}>{this.state.clicked ?'Rolling...' : 'Roll Die'}</button>
   
</div>
    )
    
}





}



export default Game;