import React from 'react'

function MyComponent() {

    const HigherOrderComponent = (NComponent)=> {
        return (props) => {
            return (
                <>
                    <NComponent {...props} />
                </>
            )
        }
    }

    const NormalComponent =() => {
        return <h1>This is Normal Component</h1>
    }

    const ConnectingFun = HigherOrderComponent(NormalComponent)

  return (
    <div>
        <ConnectingFun />
    </div>
  )
}

export default MyComponent; 