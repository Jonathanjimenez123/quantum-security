import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  public render() {
    if (this.state.hasError) {
      let parsedError = null;
      try {
        if (this.state.error?.message) {
          parsedError = JSON.parse(this.state.error.message);
        }
      } catch (e) {
        // Not a JSON error
      }

      return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-background-dark text-slate-100 p-8">
          <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-6 max-w-2xl w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-red-400 text-3xl">error</span>
              <h1 className="text-2xl font-bold text-red-400">Something went wrong</h1>
            </div>
            
            {parsedError ? (
              <div className="space-y-4">
                <p className="text-slate-300">A database security or permission error occurred.</p>
                <div className="bg-black/50 p-4 rounded-lg font-mono text-sm overflow-auto">
                  <p><span className="text-red-300">Operation:</span> {parsedError.operationType}</p>
                  <p><span className="text-red-300">Path:</span> {parsedError.path}</p>
                  <p><span className="text-red-300">Error:</span> {parsedError.error}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-slate-300">{this.state.error?.message || 'An unexpected error occurred.'}</p>
              </div>
            )}
            
            <button
              className="mt-6 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
              onClick={() => window.location.reload()}
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
