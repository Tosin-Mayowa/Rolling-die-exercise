import React, {Component} from 'react';
import './Die.css';

class Die extends Component {


render(){
    return(
<div className='Die'>
<div>
<i className={this.props.face.firstDie[this.props.idx]}></i>
</div>

<div>
<i className={`Die-icon ${this.props.face.secondDie[this.props.idx2]}`}></i>
</div>

</div>
    )







}

}

export default Die;