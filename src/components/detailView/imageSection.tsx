import React, { Component } from 'react';
import Axios, { AxiosResponse } from 'axios';

import ImageCard, { imageUrls } from './imageCard';
import { ThemedCSSProperties, ThemeContext } from '../../../contexts/themeContext';

interface Props {
    view: string
}
interface State {
    currentPath: string,
    numberOfImagesPerPage: 24,
    imageInfo: any[],
    isLoading: boolean
}

export default class ImageSection extends Component<Props, State> {
    /** Not a good place for the key.. well.. what the heck.. - GET YOUR OWN! */
    readonly accessKey = "d0f10826852d7d3e1e3568a14ac2c90fb33d7658759697194dea7466ea2d3196";
    readonly imageDatabaseApiUrl = "https://api.unsplash.com/search/photos/";
    constructor(props: any) {
        super(props);
        this.state = {
            currentPath: this.props.view,
            numberOfImagesPerPage: 24,
            imageInfo: new Array(24).fill({}),
            isLoading: true
        }
    }                   // make sure numberOfImagesPerPage matches the size of the array in imageInfo

    handleResponse(favoritedImages: any[], restOfArray: number, response?: AxiosResponse) {

        var imgInfo: any[] = [];
        if (response) {
            if (response.data && response.data.results) {
                var imgIds = response.data.results.map((id: any) => id.id);
                var imgUrls = response.data.results.map((img: any) => img.urls);
                const numberofResponces = imgIds.length;
                const amountFavorited = favoritedImages.length;
                for (let i = 0; i < amountFavorited; i++) {
                    const one = [favoritedImages[i].id, favoritedImages[i].urls];
                    imgInfo.push(one);
                }
                for (let j = 0; j < numberofResponces; j++) {
                    const one = [imgIds[j], imgUrls[j]];
                    imgInfo.push(one);
                }
                this.setState({ imageInfo: imgInfo, isLoading: false });
            }
        } else {
            const amountFavorited = favoritedImages.length;
            for (let i = 0; i < amountFavorited; i++) {
                const one = [favoritedImages[i].id, favoritedImages[i].urls];
                imgInfo.push(one);
            }
            for (let j = 0; j < restOfArray; j++) {
                const one = ['null', {
                    'full': 'null',
                    'raw': 'null',
                    'regular': 'null',
                    'small': 'null',
                    'thumb': 'null',
                }];
                imgInfo.push(one);
            }
        }
        this.setState({ imageInfo: imgInfo, isLoading: false });
    }



    async componentDidMount() {
        try {
            const storedValues = window.localStorage.getItem('likedImages');
            const likedImagesArray = storedValues !== null ? JSON.parse(storedValues) : [];
            const arrayLength = likedImagesArray.length;
            var favoritedPics = [];
            var restOfImages = this.state.numberOfImagesPerPage;

            //do we have any favorites of this path? and do we have any favorites at all?
            for (let i = 0; i < arrayLength; i++) {
                if (likedImagesArray[i].searchTerm == this.state.currentPath) {
                    // searchTerm for the picture is same as currentPath
                    favoritedPics.push(likedImagesArray[i]);
                    restOfImages--;
                } else if (this.state.currentPath == '') {
                    // main page loads all favorites
                    favoritedPics.push(likedImagesArray[i]);
                    restOfImages--;
                }
            }
            if (restOfImages > 0 || arrayLength != 0) {
                // detailpage fill upp search
                const response = await Axios.get(this.imageDatabaseApiUrl, {
                    params: {
                        client_id: this.accessKey,
                        query: this.props.view,
                        page: Math.round(Math.random() * 100),
                        per_page: restOfImages,
                    }
                });
                const restOfArray = restOfImages;
                this.handleResponse(favoritedPics, restOfArray, response);
            }
            if (restOfImages == this.state.numberOfImagesPerPage && arrayLength == 0) {
                //if we don't have any favorites
                if (this.state.currentPath != '') {
                    //fill up with pics
                    const response = await Axios.get(this.imageDatabaseApiUrl, {
                        params: {
                            client_id: this.accessKey,
                            query: this.props.view,
                            page: Math.round(Math.random() * 100),
                            per_page: restOfImages,
                        }
                    })
                    var favoritedImages: any[] = [];
                    const restOfArray = 0;
                    this.handleResponse(favoritedImages, restOfArray, response);
                } else {
                    // no pics on main if no favorites
                    const noFavorites: any[] = [];
                    const restOfArray = restOfImages;
                    this.handleResponse(noFavorites, restOfArray);
                }

            }
        } catch (error) {
            console.error(error)
        }
    }

    testFavorite(id: string) {
        const storedValues = window.localStorage.getItem('likedImages');
        const likedImagesArray = storedValues !== null ? JSON.parse(storedValues) : [];
        const arrayLength = likedImagesArray.length;
        var isFavorited = false;
        if (arrayLength != 0) {
            for (let i = 0; i < arrayLength; i++) {
                for (let j = 0; j < likedImagesArray[i].length; j++) {
                }
                const specificObject = likedImagesArray[i];
                if (specificObject['id'] == id) {
                    isFavorited = true;
                    return isFavorited;
                }
            }
        }
        return false;
    };

    getSearch() {
        const storedSearch = window.localStorage.getItem('searchTerm');
        return storedSearch != null ? storedSearch : '';
    }

    createCards() {
        var theCards = [];
        const testInfo = this.state.imageInfo[0];
        if (testInfo) {
            if (window.localStorage.getItem('searchTerm')) {
                if (testInfo.length == 2) {
                    for (let i = 0; i < this.state.imageInfo.length; i++) {
                        const specificInfo = this.state.imageInfo[i];
                        if (specificInfo[0] != 'null') {
                            var urls = {
                                'full': specificInfo[1].full,
                                'raw': specificInfo[1].raw,
                                'regular': specificInfo[1].regular,
                                'small': specificInfo[1].small,
                                'thumb': specificInfo[1].thumb
                            };
                            theCards.push(<ImageCard id={specificInfo[0]} urls={urls} favorite={this.testFavorite(specificInfo[0])} currentPath={this.state.currentPath} searchTerm={this.getSearch()} />);
                        }
                    }
                }
            }
        }
        return theCards;
    }

    render() {

        return (
            <ThemeContext.Consumer>
                {({ theme }) => (
                    <div style={root(theme)}>
                        {this.createCards()}
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}

const root: ThemedCSSProperties = (theme) => ({
    margin: '3em -1em -1em -1em',
    display: 'flex',
    flexWrap: 'wrap',
    background: `${theme.background.primary}B3`,
    boxShadow: `0 0px 80px 15px ${theme.background.primary}`
})