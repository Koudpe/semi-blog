import React from 'react'

const Article = ({title, content}) => {
    console.log("Title", title)
    return (
        <div>
            <h1>{title}</h1>
            <p>
                {content}
            </p>
        </div>
    )
}

export default Article