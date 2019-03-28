import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';

const staticStyles = {
    transition: "0.5s ease-in-out"
}

export default class FadeIn extends React.Component {
    constructor(props) {
        super(props)

        // # of groups = min(# of groups, max # of groups)
        const rows = Math.ceil(this.props.children.length / this.props.cols);
        const fadeInCount = Math.min(rows, this.props.maxRows);
        const styles = Array(fadeInCount).fill({ opacity: 0 })

        this.state = {
            styles,
            rows,
            fadeInCountdown: 250
        }
    }

    createGrid() {
        let grid = []
        console.log('in')
        loop1:
        // Outer loop to create parent
        for (let row = 0; row < this.state.rows; row++) {
            let rowChildren = [];
            let rowKey = '';
            const group = Math.min(row, this.props.maxRows);

            //Inner loop to create children
            for (let col = 0; col < this.props.cols; col++) {
                const childIndex = row*this.props.cols + col;
                if(childIndex >= this.props.children.length) break;

                const child  = this.props.children[childIndex];
                // console.log(child)
                const key = child.key;
                rowKey += key;

                rowChildren.push(
                    <Col
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        key={key}
                    >{child}</Col>
                )
            }
            rowKey = row + rowKey;

            //Create the parent and add the children
            grid.push(<Row key={rowKey} style={{...this.state.styles[group], ...staticStyles}}>{rowChildren}</Row>)
        }

        return grid;
    }

    componentDidMount() {
        this.state.styles.forEach((style, i) => {

            setTimeout(() => {
                this.setState(prevState => {
                    const prevStyles = prevState.styles
                    return {
                        styles: [
                            ...prevStyles.slice(0,i),
                            { opacity: 1 },
                            ...prevStyles.slice(i+1, prevStyles.length)
                        ]
                    }
                })
            }, (i+1)*this.state.fadeInCountdown)
        })
    }

    render() {
        return (
        <div>
            {
                <Container>{this.createGrid()}</Container>
            }

        {/* {
            this.props.children.map((child, i) => {
                const group = Math.min(Math.floor(i / this.props.groupSize), this.props.maxGroups)

                return <div key={child.key} style={{...this.state.styles[group], ...staticStyles}}>{child}</div>
            })
        } */}
        </div>
      )
    }
  }