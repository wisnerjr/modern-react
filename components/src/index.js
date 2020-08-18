import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetails 
                    author={ faker.name.firstName() } 
                    avatar={ faker.image.avatar() } 
                    date={ faker.date.past().toDateString() } 
                    content={ faker.lorem.words(3) } 
                />
            </ApprovalCard>
            {/* <ApprovalCard />
            <ApprovalCard /> */}
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));