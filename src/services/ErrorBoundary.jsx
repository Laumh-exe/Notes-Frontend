import React from 'react';
import { useState, useEffect } from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

// const ErrorBoundary = ({ children }) => {
//   const [hasError, setHasError] = useState(false);
//   useEffect(() => {
//     const handleError = (error, info) => {
//       console.error('Error caught by error boundary:', error, info);
//       setHasError(true);
//     };
//     window.addEventListener('error', handleError);
//     return () => {
//       window.removeEventListener('error', handleError);
// };
// }, []);
//   if (hasError) {
//     return <h1>Something went wrong.</h1>;
// }
//   return children;
// };

export default ErrorBoundary;