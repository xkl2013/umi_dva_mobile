import React from 'react';

class Message extends React.Component<
  {
    message: string;
  },
  {
    count: number;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      count: 'ssss',
    };
  }
  public render() {
    return (
      <div>
        {this.props.message}
        {this.state.count}
      </div>
    );
  }
}

const App = () => <Message message={true}/>;

export default App;