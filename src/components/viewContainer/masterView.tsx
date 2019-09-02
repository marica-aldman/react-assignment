import React, { CSSProperties, Component } from 'react';
import ImageSection from './detailView/imageSection';


interface State {
    isModalOpen: boolean,
    currentPath: string
};

export default class MasterView extends Component<State> {
    constructor(props: any) {
        super(props);
        this.state = {
            isModalOpen: false,
            currentPath: ''
        }
    }

    render() {
        return (
            <div>
                <ImageSection view={''} />
            </div >
        );
    }
};
