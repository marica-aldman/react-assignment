import React, { Component, CSSProperties } from 'react';
import { fullscreenAbsolute } from '../../../css';
import Modal from '../../modal';
import HeaderSection from './headerSection';
import TextSection from './textSection';
import ImageSection from './imageSection';
import { ThemedCSSProperties, ThemeContext } from '../../../contexts/themeContext';
import Button from '../../button';
import { RouteComponentProps } from 'react-router-dom';

interface MyProps extends RouteComponentProps {
};

interface State {
    isModalOpen: boolean,
    currentPath: string
};

export default class DetailView extends Component<MyProps, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isModalOpen: false,
            currentPath: this.props.location.pathname.substr(1)
        }
    }

    get imageSrc() {
        return `../assets/${this.state.currentPath}.jpg`;
    }

    openModal = () => this.setState({ isModalOpen: true });
    closeModal = () => this.setState({ isModalOpen: false });

    render() {
        return (
            <div style={container}>
                <img src={this.imageSrc} style={{ ...fullscreenAbsolute }} />
                <div>
                    <div style={{ ...fullscreenAbsolute }}>

                        <div style={flexContainer}>
                            <HeaderSection view={this.state.currentPath} openModal={this.openModal} />
                            <TextSection view={this.state.currentPath} />
                            <ImageSection view={this.state.currentPath} />
                        </div>
                    </div>

                </div>
                {
                    this.state.isModalOpen ? (
                        <Modal persistent shouldClose={this.closeModal}>
                            <h3>Modal opened from <span style={highlighted}>{this.state.currentPath}</span> view</h3>
                            <Button onClick={this.closeModal}>Close modal</Button>
                        </Modal>
                    ) : null
                }
            </div>
        );
    }
}

const highlighted: CSSProperties = {
    color: 'orange'
}

const content: ThemedCSSProperties = (theme) => ({
    zIndex: 10,
    background: `${theme.background.primary}B3`,
    overflowY: 'auto'
})

const container: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%'
}

const flexContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em'
}