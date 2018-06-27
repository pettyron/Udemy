import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import { API_KEY } from './apikeys/apikeys';

// Create a new component. This component should produce some HTML
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('techdeals');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 500);

    return (
      <div>
        <div className="row my-4">
          <SearchBar onSearchTermChange={ videoSearch } />
        </div>
        <div className="row">
          <VideoDetail video={ this.state.selectedVideo } />
          <VideoList
            onVideoSelect={ selectedVideo => this.setState({ selectedVideo })}
            videos={ this.state.videos } />
        </div>
      </div>
    );
  }
}

// Take this component's generated HTML put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

// Ask yourself one question before writing a new component:
// 'Do I expect this component to maintain any kind of state?'
