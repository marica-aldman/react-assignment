import React, { CSSProperties, Component } from 'react';
import { ThemedCSSProperties, ThemeContext } from '../../../contexts/themeContext';
import Button from '../../button';
import { RouteComponentProps } from 'react-router-dom';

interface Props {
    view: string
    openModal: () => void;
}

export default class HeaderSection extends Component<Props> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme }) => (

                    < div style={headerSegment}>
                        <h2 style={{ ...header(theme) }}>
                            {this.props.view.toUpperCase()}
                        </h2>
                        <Button size="small" onClick={this.props.openModal}>Open Modal</Button>
                    </div>
                )
                }
            </ThemeContext.Consumer >
        )
    }
}

const color: CSSProperties = {
    color: ''
}

const headerSegment: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}


const header: ThemedCSSProperties = (theme) => ({
    color: `${theme.fontColor.color}`,
    backgroundColor: `${theme.background.primary}`,
    padding: '10px'
})