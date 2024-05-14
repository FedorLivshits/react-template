import React, { Component } from 'react';
import { AppError } from './AppError';

type Props = {
  children: React.ReactNode;
};
type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <AppError />;
    }

    return children;
  }
}
