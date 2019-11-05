/* TODO: Write the task */

import cx from 'classnames';
import { Component } from 'react';

export default class LikeDislike extends Component {
    state = {
        likes: 100,
        dislikes: 25,
        vote: null,
    }
    
    handleLike = () => {
        const { likes, dislikes } = this.state;
        if(this.state.vote === 'like') {
            this.setState({ likes: likes-1, vote: null });
            
        } else if(this.state.vote === 'dislike') {
            this.setState({ likes: likes+1, dislikes: dislikes-1, vote: 'like' });
        } else {
            this.setState({ likes: likes+1, vote: 'like' });
        }
    }
    
    handleDislike = () => {
        const { likes, dislikes } = this.state;
        if(this.state.vote === 'like') {
            this.setState({ likes: likes-1, dislikes: dislikes+1, vote: 'dislike' });
        } else if(this.state.vote === 'dislike') {
            this.setState({ dislikes: dislikes-1, vote: null });
        } else {
            this.setState({ dislikes: dislikes+1, vote: 'dislike' });
        }
    }
    
    render() {
        let likedClasses = cx('like-button', 'button', {liked: this.state.vote === 'like'});
        let dislikedClasses = cx('dislike-button', 'button', {disliked: this.state.vote === 'dislike'});

        return (
            <>
                <div>
                    <h2>Like/Dislike</h2>
                </div>
                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }
                    
                    .button {
                        border: 1px solid gray;
                        display: inline-block;
                        background-color: light-gray;
                        cursor: pointer;
                        margin: 0 5px;
                    }
                    
                    .button:active {
                        background-color: gray;
                    }
                    
                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
                <div>
                    <div className={likedClasses} onClick={this.handleLike}>
                        <span>Like</span>
                        <span> | </span>
                        <span className="likes-counter">{this.state.likes}</span>
                    </div>
                    <div className={dislikedClasses} onClick={this.handleDislike}>
                        <span>Dislike</span>
                        <span> | </span>
                        <span className="dislikes-counter">{this.state.dislikes}</span>
                    </div>
                </div>
            </>
        );
    }
}
