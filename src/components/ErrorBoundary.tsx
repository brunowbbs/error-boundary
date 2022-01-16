import { Component } from "react";

interface ErrorBoundaryProps {
  component?: string;
}

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
      return <h1>Erro ao renderizar {this.props.component || "componente"}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
