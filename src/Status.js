import React, { Component } from 'react';

class Status extends Component {
    state = { data: [] }

  getStatus = (num) => {
    fetch(`https://www.colr.org/json/color/random?${num}`, ).then(res => res.json()).then((status) => {     
        this.setState({
            data: status.colors
        })
        console.log(status)
    },
    (error) => {
        console.log( error)
    })

  }

 
    render() {
        const { data } = this.state;
       
        let color = data.map(item => {
            
            return item.hex
        })

        
        const styles ={
            width: "200px",
            height: "200px",
            background: `#${color}`
        }

        return (
            <div className='container'>
                <button onClick={() => {
                    let num = Math.floor(Math.random() * 100);
                    this.getStatus(num)
                }}>change background</button>
                <p>Color: #{color}</p>
                <div style={styles}>

                </div>
            </div>
        );
    }
}

export default Status;