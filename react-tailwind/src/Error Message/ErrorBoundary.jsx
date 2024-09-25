import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false}; 
    }

    static getDerivedStateFromError(error){
        return {hasError: true}
    }; 

    componentDidCatch(error, errorInfo){
        console.error("Error caught in ErrorBoundary : ", error, errorInfo )
    }

    render(){
        if(this.state.hasError) {
            return <h1 className="text-yellow-600">You Have Got An Error</h1>
        }

        return this.props.children
    }

    
}

export default ErrorBoundary; 