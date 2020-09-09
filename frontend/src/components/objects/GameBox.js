import React from 'react'
import * as Icon from 'react-feather';
import { Tooltip} from '@trendmicro/react-tooltip';

const GameBox = (props) => {
    return (
        <div>

            <a href="#" key={props.id} className="game-box">
                <div className="image flex justify-center">
                    <img src={props.image} alt="game"/>
                </div>

                <div className="content flex justify-between">
                    <div className="text">
                        <h1>{props.title}</h1>
                        <span>&#8358; {props.price}</span>
                    </div>
                    <div className="cta flex justify-center">
                        <Tooltip placement="top" content="Add To Cart">
                            <Icon.ShoppingCart />
                        </Tooltip>
                    </div>
                </div>
            </a>
            
        </div>
    );
}

export default GameBox;