
class NewsPanel extends React.Component {
    render() {
        return (
            <div className="news-panel" onClick={this.props.onClick}>
            <h2>{this.props.title}</h2>
            <div className="news-img"><img src={this.props.img} /></div>
            <p>{this.props.description}</p>
            <p>UID: {this.props.uid}</p>
            </div>
        );
    }
}

class NewsDetail extends React.Component {
    render() {
        return (
                <div className="news-detail">
                <h2>{this.props.title}</h2>
                {this.props.body}
                </div>
        );
    }
}

class NewsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItems: [ { title: 'Loading...' }, ],
            selectedItem: { title: 'Select a news item...' },
        };
    }

    componentWillMount() {
        getNewsItemsFromPrismic( (items) => this.setState({ 
            newsItems: items }) );
    }

    selectNewsItem(uid) {
        getOneNewsItemFromPrismic( uid, (item) => this.setState({
            selectedItem: item }) );
    }

    render() {
        const newsPage = this;
        const panels = this.state.newsItems.map( (item) =>               
            <NewsPanel title={item.title} img={item.image}
                       description={item.description} uid={item.uid} 
                       onClick={ () => newsPage.selectNewsItem(item.uid) } /> );

        const i = this.state.selectedItem;
        const item = <NewsDetail title={i.title} body={i.body} />;
        return (
                <div>{panels}
                     {item}</div>
        );
    }
}

ReactDOM.render(<NewsPage />, document.getElementById('container'));
