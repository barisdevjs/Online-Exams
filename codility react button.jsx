import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
    constructor(props) {

        super(props);
        this.state = {
            counter: 100,
            updated: false,
            class: 'like-button'
        }
        this.updateLikes = this.updateLikes.bind(this);
    }

    updateLikes() {

        if (!this.state.updated) {
            this.setState((prevState, props) => {
                return {
                    counter: prevState.counter + 1,
                    updated: true,
                    class: 'like-button liked'
                };
            });
        } else {

            this.setState((prevState, props) => {
                return {
                    counter: prevState.counter - 1,
                    updated: false,
                    class: 'like-button'
                };
            });
        }
    }


    render() {

        return (
            <>
                <div>
                    <h2 className='likes-counter' >
                    
                        <button className ={this.state.class}
                            onClick={this.updateLikes}> 
                            <span className='likes-counter'>{this.state.counter}</span>
                            </button>
                    </h2>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}