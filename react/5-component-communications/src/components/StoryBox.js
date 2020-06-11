import React, { Component } from 'react';
import Story from './Story';

class StoryBox extends Component {
    pname = 'james';
    /**
     * 1. props are immutable
     * 2. state is mutable
     * 3. when ever state changes, then render function re-renders
     * 
     * How can you update state value / property
     * => by calling setState({}) function 
     * 
     */

    constructor() {
        super()
        this.state = {
            name: 'Praveen',
            age: 65,
            skills: ['java', 'js', 'angular', 'react', 'node'],
            stories: [
                { id: 1, author: 'user1', body: 'my story 1' },
                { id: 2, author: 'user2', body: 'my story 2' },
                { id: 3, author: 'user3', body: 'my story 3' },
                { id: 4, author: 'user4', body: 'my story 4' },
                { id: 5, author: 'user5', body: 'my story 5' },
            ]
        }
    }

    renderStories() {

        let { stories } = this.state;

        return stories.map((story, index) => {

            return (
                <div key={index}>
                    <Story storyName={story}
                    />
                </div>
            )
        })

    }

    render() {

        console.log("======> Render <======");


        // let name = this.state.name;
        let { name, age } = this.state;
        let { title } = this.props;

        return (
            <div>
                <h1>Name:{name} </h1>
                <h1>Age: {age}</h1>
                <hr />

                <div className="card">
                    <div className="card-header">{title}</div>
                    <div>
                        {this.renderStories()}
                    </div>

                </div>
            </div>
        );
    }
}

export default StoryBox;