import React, { Component, CSSProperties } from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { ThemedCSSProperties, ThemeContext } from '../../contexts/themeContext';

interface Props extends RouteComponentProps {
};

interface State {
    searchTerm: string
    search: boolean
    currentPath: string
};

export default class Search extends Component<Props, State, string> {
    constructor(props: Props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            searchTerm: 'nothingSearched',
            search: false,
            currentPath: this.props.location.pathname.substr(1)
        };
    };

    handleChange(event: any) {
        //change state so we can reroute save searchTerm
        const searchingFor = event.target.value;
        this.setState({ searchTerm: searchingFor });
    }

    handleSearch = (event: any) => {
        event.preventDefault();
        console.log(this.state.searchTerm);
        //check if we have done any searches before

        if (!window.localStorage.getItem('searchTerm')) {
            //we have not
            //check that we arent reloading main 
            if (this.state.currentPath == '' && this.state.searchTerm == '') {
                //reload after altering searchTerm back to nothing
                // set lastSearch
                window.localStorage.setItem('lastSearch', 'nothingSearched');                //set searchTerm
                window.localStorage.setItem('searchTerm', 'nothingSearched');
                // change the url
                this.props.history.push('');
                // reload window
                window.location.reload();
            } else if (this.state.currentPath == '' && this.state.searchTerm == 'nothingSearched') {
                //reload 
                // set lastSearch
                window.localStorage.setItem('lastSearch', 'nothingSearched');                //set searchTerm
                window.localStorage.setItem('searchTerm', 'nothingSearched');
                // change the url
                this.props.history.push('');
                // reload window
                window.location.reload();
            } else if (this.state.currentPath == '' && this.state.searchTerm != '') {
                //newpage from main
                // set lastSearch
                window.localStorage.setItem('lastSearch', this.state.searchTerm);                //set searchTerm
                window.localStorage.setItem('searchTerm', this.state.searchTerm);
                // change the url
                this.props.history.push(this.state.searchTerm);
                // reload window
                window.location.reload();
            } else {
                //newpage from otherplace
                //check that it is not a reload
                if (this.state.currentPath != '' && this.state.searchTerm == 'nothingSearched') {
                    //reloaded
                    // set lastSearch
                    this.setState({ searchTerm: this.state.currentPath });
                    window.localStorage.setItem('lastSearch', this.state.searchTerm);      //set searchTerm
                    window.localStorage.setItem('searchTerm', this.state.searchTerm);
                    // change the url
                    this.props.history.push(this.state.searchTerm);
                    // reload window
                    window.location.reload();
                } else {
                    //new page
                    // set lastSearch
                    window.localStorage.setItem('lastSearch', this.state.searchTerm);      //set searchTerm
                    window.localStorage.setItem('searchTerm', this.state.searchTerm);
                    // change the url
                    this.props.history.push(this.state.searchTerm);
                    // reload window
                    window.location.reload();
                }
            }
        } else {
            //we have
            //check if we are on main
            if (this.state.currentPath == '') {
                if (this.state.searchTerm == '' || this.state.searchTerm == 'nothingSearched') {
                    //reload
                    // set lastSearch
                    window.localStorage.setItem('lastSearch', 'nothingSearched');             //set searchTerm
                    window.localStorage.setItem('searchTerm', 'nothingSearched');
                    // change the url
                    this.props.history.push('');
                    // reload window
                    window.location.reload();
                } else {
                    //new page
                    // set lastSearch
                    window.localStorage.setItem('lastSearch', this.state.searchTerm);      //set searchTerm
                    window.localStorage.setItem('searchTerm', this.state.searchTerm);
                    // change the url
                    this.props.history.push(this.state.searchTerm);
                    // reload window
                    window.location.reload();
                }
            } else {
                if (this.state.searchTerm == '') {
                    // set lastSearch
                    window.localStorage.setItem('lastSearch', this.state.currentPath);     //set searchTerm
                    window.localStorage.setItem('searchTerm', 'nothingSearched');
                    // change the url
                    this.props.history.push('');
                    // reload window
                    window.location.reload();
                } else if (this.state.searchTerm == 'nothingSearched') {
                    //reload
                    // set lastSearch
                    window.localStorage.setItem('lastSearch', this.state.currentPath);         //set searchTerm
                    window.localStorage.setItem('searchTerm', this.state.currentPath);
                    // change the url
                    this.props.history.push(this.state.currentPath);
                    // reload window
                    window.location.reload();
                } else {
                    //new page
                    // set lastSearch
                    window.localStorage.setItem('lastSearch', this.state.currentPath);     //set searchTerm
                    window.localStorage.setItem('searchTerm', this.state.searchTerm);
                    // change the url
                    this.props.history.push(this.state.searchTerm);
                    // reload window
                    window.location.reload();
                }
            }
        }


    };

    shallFocus() {
        if (this.state.currentPath == '') {
            return true;
        } else {
            return false
        }
    }

    shallHaveDefault() {
        if (this.state.currentPath == '') {
            return '';
        } else {
            return this.state.currentPath;
        }
    }

    render() {
        if (!this.state.search) {
            return (
                <ThemeContext.Consumer>
                    {({ theme }) => (
                        <form onSubmit={this.handleSearch} style={root(theme)} >
                            <input type="text" defaultValue={this.shallHaveDefault()} name="search" onChange={this.handleChange} onSubmit={this.handleChange} style={inputBar(theme)} autoFocus={this.shallFocus()}></input>
                            <button type="submit" style={searchButton(theme)}>Sök</button>
                        </form>
                    )}
                </ThemeContext.Consumer>
            );
        };

        return (
            <Redirect to={this.state.searchTerm} />
        );
    };
}
const root: ThemedCSSProperties = (theme) => ({
    marginTop: '1em',
    marginBottom: '1em',
    display: 'flex',
    background: `${theme.background.primary}B3`,
    boxShadow: `0 0px 80px 15px ${theme.background.primary}`
})

const inputBar: ThemedCSSProperties = (theme) => ({
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '25px',
    padding: '5px',
    border: `solid 0.1em ${theme.background.secondary}`,
    fontWeight: 'bold',
    boxShadow: `0 0 15px -3px ${theme.foreground.darkened}`,
    cursor: 'pointer',
    outline: 'inherit',
    transition: 'all 100ms'
})
const searchButton: ThemedCSSProperties = (theme) => ({
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    background: theme.background.primary,
    color: theme.foreground.primary,
    border: `solid 0.1em ${theme.background.secondary}`,
    padding: '0.5em 0.8em',
    fontWeight: 'bold',
    boxShadow: `0 0 15px -3px ${theme.foreground.darkened}`,
    cursor: 'pointer',
    outline: 'inherit',
    transition: 'all 100ms'
})