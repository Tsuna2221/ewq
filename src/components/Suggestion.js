import React, { Component } from 'react';

class Suggestion extends Component {
    render() {
        return (
            <div id='app-suggestion'>
                <h2 className="def-stg">Quem viu, viu também</h2>
                <div className="sugg-container">
                    {this.drawContainer()}
                </div>
            </div>
        );
    }

    state = {

    }

    drawContainer = () => {
        var items = [...this.props.items]

        return items.splice(1,3).map(item => {
            var {title, price, discount, imgName} = item

            return (
                <div key={title} className="sugg-item">
                    <div className="sg-item-img">
                        <img src={imgName} alt=""/>
                    </div>
                    
                    <p className="sg-item-title">{title}</p>

                    <div className="sg-item-price">
                        <p>de R$ {price}</p>
                        <strong className="sg-price-highlight hl">por R$ {discount}</strong>
                    </div>
                </div>
            )
        })
    }
}

export default Suggestion;