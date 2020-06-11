import React, { Component } from 'react';

class Story extends Component {
    render() {
        return (
            <div>
                <li className='list-group-item mt-2 ' >
                    {this.props.storyName.body}
                </li>
            </div>
        );
    }
}

export default Story;