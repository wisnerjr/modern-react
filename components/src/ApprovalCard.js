import React from 'react';
import CommentDetails from './CommentDetails';
import faker from 'faker';

const ApprovalCard = ({children}) => {
    return (
        <div class="ui card">
            <div className="content"> { children }
                {/* <CommentDetails 
                    author={ faker.name.firstName() } 
                    avatar={ faker.image.avatar() } 
                    date={ faker.date.past().toDateString() } 
                    content={ faker.lorem.words(3) } 
                /> */}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
        
    );
}

export default ApprovalCard;