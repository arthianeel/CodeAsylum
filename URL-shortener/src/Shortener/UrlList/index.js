import React, { Component } from 'react';
import './UrlList.css';
import ListItem from './ListItem';


export default class UrlList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      linkList: []
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('UrlList, cwrp: ', this.props, nextProps);
    let tempLinkList = [];

    for (let i = 0; i < nextProps.shortenedLinkList.length; i++) {
      let tempLinkItem = nextProps.shortenedLinkList[i];
      tempLinkList.push(
        <ListItem key={tempLinkItem.shortcode}
          shortLinkIdentifier={tempLinkItem.shortcode}
          originalLink={tempLinkItem.originalLink}
          visits={tempLinkItem.visits}
          lastVisited={tempLinkItem.lastVisited}
        />
      )
    }

    this.setState({
      linkList: tempLinkList
    });

  }

  render() {
    return (
      <div className="link-list-container">
        <div className="link-list-header">
          <div className="link-header table-headings">
            LINK
          </div>
          <div className="visits-header table-headings">
            VISITS
          </div>
          <div className="last-visited-header table-headings">
            LAST VISITED
          </div>
        </div>

        <ul className="link-history">

          {this.state.linkList.reverse()}

        </ul>

      </div> 
    );
  }
}
