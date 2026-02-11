import React, { Component, ErrorInfo, ReactNode } from "react";
import { RefreshCcw, AlertTriangle } from "lucide-react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error, errorInfo: null };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    private handleReload = () => {
        window.location.reload();
    };

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 font-sans">
                    <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-6 border border-red-500/20">
                            <AlertTriangle className="w-8 h-8 text-red-500" />
                        </div>

                        <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
                        <p className="text-zinc-400 mb-6">
                            An unexpected error occurred in the application.
                        </p>

                        {this.state.error && (
                            <div className="text-left bg-black/50 p-4 rounded-lg border border-zinc-800 mb-6 overflow-auto max-h-48">
                                <p className="text-red-400 font-mono text-xs break-words">
                                    {this.state.error.toString()}
                                </p>
                                {this.state.errorInfo && (
                                    <pre className="text-zinc-600 font-mono text-[10px] mt-2 whitespace-pre-wrap">
                                        {this.state.errorInfo.componentStack}
                                    </pre>
                                )}
                            </div>
                        )}

                        <button
                            onClick={this.handleReload}
                            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded transition-colors flex items-center justify-center"
                        >
                            <RefreshCcw className="w-4 h-4 mr-2" />
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
