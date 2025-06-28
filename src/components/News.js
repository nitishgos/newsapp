import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    capatalize=(string)=>{
        return string.charAt(0).toUpperCase()+ string.slice(1);
    }
    constructor(props) {
        super(props);
        console.log("Hello, I am the constructor of the News component");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        };
        document.title=`${this.capatalize(this.props.category)} - NewsHunt`;
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=88be13e2bdf345e887cba5272e9424bc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        });
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePrevClick = async () => {
        console.log("Previous");
        this.setState({ page: this.state.page - 1 }, () => {
            this.updateNews();
        });
    }

    handleNextClick = async () => {
        console.log("Next");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            this.setState({ page: this.state.page + 1 }, () => {
                this.updateNews();
            });
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsHunt - Top Headlines from {this.capatalize(this.props.category)} category</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element, index) => {
                        return (
                            <div className="col-md-4" key={`${element.url}-${index}`}>
                                <NewsItems
                                    author={element.author}
                                    date={element.publishedAt}
                                    title={element.title ? element.title.slice(0, 56) : ""}
                                    description={element.description ? element.description.slice(0, 58) : ""}
                                    urlToImage={element.urlToImage}
                                    newsUrl={element.url}
                                    source={element.source.name}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}
