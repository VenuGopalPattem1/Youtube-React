import React from 'react'
import Comment from './Comment'

function CommentBox() {
    return (
        <div className=' container-fluid m-4'>
            <h1 className=' mb-3'> Comment section</h1>
            <CommentsList comments={data}/>
        </div>
    )
}

const CommentsList = ({ comments }) => {
    // console.log(comments.replies)
  return (
    <div>
    {comments.map((comment,index) =>(
        <div key={index} >
            <Comment data={comment}  />

            {/* recursively render the comments list component if replies exist */}
            {comment?.replies && (
                <div className='border border-1 ps-5' >
                    <CommentsList comments={comment.replies} />
                </div>
            )}
        </div>
    ))}
</div>
  );
};

const data = [
    {
        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
        name: 'venu gopal',
        msg: "this is a comment",
        replies: [
            {
                img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                name: 'venu gopal',
                msg: "this is a comment",
                replies:[
                    {
                        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                        name: 'venu gopal',
                        msg: "this is a comment",
                    },
                ]
            },{
                img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                name: 'venu gopal',
                msg: "this is a comment",
                replies:[
                    {
                        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                        name: 'venu gopal',
                        msg: "this is a comment",
                    },
                ]
            },{
                img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                name: 'venu gopal',
                msg: "this is a comment",
                replies:[
                    {
                        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                        name: 'venu gopal',
                        msg: "this is a comment",
                        replies:[
                            {
                                img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                                name: 'venu gopal',
                                msg: "this is a comment",
                            },
                        ]
                    },  {
                        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                        name: 'venu gopal',
                        msg: "this is a comment",
                        replies:[
                            {
                                img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                                name: 'venu gopal',
                                msg: "this is a comment",
                            },
                        ]
                    },  {
                        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                        name: 'venu gopal',
                        msg: "this is a comment",
                        replies:[
                            {
                                img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                                name: 'venu gopal',
                                msg: "this is a comment",
                            },]
                    },
                ],
            },
        ],
    },   
      {
        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
        name: 'venu gopal',
        msg: "this is a comment",
        replies:[
            {
                img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                name: 'venu gopal',
                msg: "this is a comment",
                replies:[
                    {
                        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                        name: 'venu gopal',
                        msg: "this is a comment",
                    },
                ]
            },  {
                img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                name: 'venu gopal',
                msg: "this is a comment",
                replies:[
                    {
                        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                        name: 'venu gopal',
                        msg: "this is a comment",
                    },
                ]
            },  {
                img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                name: 'venu gopal',
                msg: "this is a comment",
                replies:[
                    {
                        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                        name: 'venu gopal',
                        msg: "this is a comment",
                    },
                ]
            },  {
                img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                name: 'venu gopal',
                msg: "this is a comment",
                replies:[
                    {
                        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                        name: 'venu gopal',
                        msg: "this is a comment",
                    },
                ]
            },
        ]
    },  {
        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
        name: 'venu gopal',
        msg: "this is a comment",
        replies: [
            {
                img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                name: 'venu gopal',
                msg: "this is a comment",
                replies:[
                    {
                        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                        name: 'venu gopal',
                        msg: "this is a comment",
                    },
                ]
            },{
                img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                name: 'venu gopal',
                msg: "this is a comment",
                replies:[
                    {
                        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                        name: 'venu gopal',
                        msg: "this is a comment",
                    },
                ]
            },{
                img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                name: 'venu gopal',
                msg: "this is a comment",
                replies:[],
                replies:[
                    {
                        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                        name: 'venu gopal',
                        msg: "this is a comment",
                    },
                ]
            },
        ],
    },
    {
        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
        name: 'venu gopal',
        msg: "this is a comment",
    },  {
        img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
        name: 'venu gopal',
        msg: "this is a comment",
        replies: [
            {
                img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                name: 'venu gopal',
                msg: "this is a comment",
            },{
                img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                name: 'venu gopal',
                msg: "this is a comment",
            },{
                img: 'https://th.bing.com/th?id=OIP.1nWRQ7r_1nEVJ6sdz_zwkwAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.3&pid=3.1&rm=2',
                name: 'venu gopal',
                msg: "this is a comment",
                replies:[],
            },
        ],
    },
]

export default CommentBox