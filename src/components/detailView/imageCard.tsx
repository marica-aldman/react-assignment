import React, { Component, CSSProperties, Fragment } from 'react';
import Spinner from '../../spinner';
import Modal from '../../modal';
import { ThemedCSSProperties, ThemeContext, ThemeState } from '../../../contexts/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as outlineHeart } from '@fortawesome/free-regular-svg-icons';
import { nominalTypeHack } from 'prop-types';
import Button from '../../button';

export interface imageUrls {
    full: string
    raw: string
    regular: string
    small: string
    thumb: string
}

interface Props {
    id: string
    urls: imageUrls
    favorite: boolean
    searchTerm: string
    currentPath: string
}

interface State {
    isHover: boolean
    isModalOpen: boolean
    isFavorite: boolean
    search: string
    thisId: string
    theseUrls: imageUrls
}

export default class ImageCard extends Component<Props, State, imageUrls> {
    constructor(props: any) {
        super(props);
        this.state = {
            isHover: false,
            isModalOpen: false,
            isFavorite: this.props.favorite,
            search: this.props.searchTerm,
            thisId: this.props.id,
            theseUrls: this.props.urls
        }
    }

    style(theme: ThemeState): CSSProperties {
        const hover: CSSProperties = this.state.isHover ? {
            boxShadow: `0 8px 40px -5px ${theme.foreground.darkened}`,
            transform: 'scale(1.05, 1.05) translateY(-1%)'
        } : {}
        return {
            ...imageContainer(theme),
            ...hover
        }
    }

    likeHeart() {
        if (this.state.isFavorite) {
            return solidHeart;
        }
        return outlineHeart;
    }

    favoriteImage(id: string, urls: imageUrls) {
        const storedValues = window.localStorage.getItem('likedImages');
        const likedImagesArray = storedValues != null ? JSON.parse(storedValues) : [];
        const arrayLength = likedImagesArray.length;
        var removed = false;

        if (arrayLength != 0) {
            for (let i = 0; i < arrayLength; i++) {
                const specificObject = likedImagesArray[i];
                if (specificObject['id'] == id) {
                    delete likedImagesArray[i];
                    const newArrayLength = arrayLength - 1;
                    if (newArrayLength > 0) {
                        window.localStorage.setItem('likedImages', JSON.stringify(likedImagesArray));
                    } else {
                        window.localStorage.removeItem('likedImages');
                    }
                    removed = true;
                    this.setState({ isFavorite: false });
                }
            }
        }

        if (!removed) {
            var a = [];
            var b = {
                id: id,
                urls: urls,
                searchTerm: this.state.search
            };

            if (arrayLength == 0) {
                a.push(b);

                window.localStorage.setItem('likedImages', JSON.stringify(a));
                this.setState({ isFavorite: true });
            } else {

                likedImagesArray.push(b);
                window.localStorage.setItem('likedImages', JSON.stringify(likedImagesArray));
                this.setState({ isFavorite: true });
            }
        }
    }

    download(size: string) {
        if (size == 'small') {
            setTimeout(() => {
                const fileToDownload = {
                    file: this.state.theseUrls.small,
                };
                window.open(fileToDownload.file);
                // you could also do:
                // window.location.href = response.file;
            }, 100);
        }

        if (size == 'full') {
            setTimeout(() => {
                const fileToDownload = {
                    file: this.state.theseUrls.full,
                };
                window.open(fileToDownload.file);
                // you could also do:
                // window.location.href = response.file;
            }, 100);
        }

        if (size == 'regular') {
            setTimeout(() => {
                const fileToDownload = {
                    file: this.state.theseUrls.regular,
                };
                window.open(fileToDownload.file);
                // you could also do:
                // window.location.href = response.file;
            }, 100);
        }
    }

    whichModal() {
        if (this.props.currentPath != '') {
            return <Modal shouldClose={this.closeModal}>
                <img src={this.state.theseUrls.regular} style={preview} />
            </Modal>;
        } else {
            return <Modal persistent shouldClose={this.closeModal}>
                <div>
                    <button onClick={() => this.download('small')}><img src={this.state.theseUrls.thumb} /><span style={imageText}>Small</span></button>
                    <button onClick={() => this.download('regular')}><img src={this.state.theseUrls.thumb} /><span style={imageText}>Medium</span></button>
                    <button onClick={() => this.download('full')}><img src={this.state.theseUrls.thumb} /><span style={imageText}>Large</span></button>
                </div>
                <Button onClick={this.closeModal}>Close modal</Button>
            </Modal>;
        }
    }

    onMouseEnter = () => this.setState({ isHover: true })
    onMouseLeave = () => this.setState({ isHover: false })
    openModal = () => this.setState({ isModalOpen: true });
    closeModal = () => this.setState({ isModalOpen: false });

    render() {
        return (

            < Fragment >
                <ThemeContext.Consumer>

                    {({ theme }) => (

                        <div
                            style={this.style(theme)}
                            onMouseEnter={this.onMouseEnter}
                            onMouseLeave={this.onMouseLeave}
                            onClick={this.openModal}
                        >
                            {this.state.theseUrls.small ? <img src={this.state.theseUrls.small} style={card} /> : <Spinner />}
                            <div>
                                <div onClick={(event) => this.favoriteImage(this.state.thisId, this.state.theseUrls)} style={fontIcon}>
                                    <FontAwesomeIcon key={this.state.thisId} icon={this.likeHeart()} style={favoriteIcons} />
                                </div>
                                <div>
                                    {this.props.currentPath == '' ? <Button onClick={this.openModal}>Download</Button> : <div></div>}
                                </div>
                            </div>

                        </div>
                    )}
                </ThemeContext.Consumer>
                {
                    this.state.isModalOpen ? this.whichModal() : null
                }
            </Fragment >

        );
    }
}

const favoriteIcons: CSSProperties = {
    color: "#FFFFFF"
}
const fontIcon: CSSProperties = {
    width: '20px'
}

const imageText: CSSProperties = {
    color: "#FFFFFF"
}

const imageContainer: ThemedCSSProperties = (theme) => ({
    margin: '1em',
    flexGrow: 1,
    background: `${theme.background.primary}AA`,
    width: '12em',
    height: '18em',
    transition: 'all 300ms'
})

const card: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
}

const preview: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
}