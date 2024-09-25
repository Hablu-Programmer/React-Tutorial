import React from 'react'

function BuggyComponent() {
    throw new Error("I Crashed"); 
    return <h1>This won't render because of the error</h1>
}

export default BuggyComponent; 