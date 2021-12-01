
import React from 'react';

class ErrorBoundary extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(error)
    {
        return {
            hasError: true,
        }
    }
    // componentDidCatch(error, errorInfo)
    // {
    //     console.log(error, errorInfo)
    // }
    render()
    {
        if (this.state.hasError)
        {
            return this.props.render();
            // return <h1>Something went wrong.</h1>;
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default ErrorBoundary;