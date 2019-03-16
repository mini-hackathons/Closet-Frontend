import React from 'react';

const withFormat  = (BaseComponent) => {
    class HOC extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                moreText: "More Text"
            }
        }

        format = (text) => `${text}! Wow it's formatted!`

        render() {
          return (
              <div>
                  <h1>Hi</h1>
                  <BaseComponent
                        {...this.props}
                        format={this.format}
                    />
              </div>

          )
        }
    }

    return HOC;
}

export default withFormat;