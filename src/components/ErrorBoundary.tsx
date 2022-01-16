import { Component } from "react";

interface ErrorBoundaryProps {}
interface ErrorBoundaryState {
  hasError: boolean;
  error?: {
    message?: string;
  };
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error: {
        message: error.message,
      },
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo deu errado. {this.state.error?.message}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
