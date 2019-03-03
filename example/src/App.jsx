import React from 'react';
import { List, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import { Scrollbars } from 'react-custom-scrollbars';
import { generateRandomText } from './utils';

const listStyle = {
  overflowX: false,
  overflowY: false,
};

export class App extends React.Component {
  state = {
    rows: App.createRows(),
  };
  
  List = React.createRef();

  cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 70,
  });

  handleScroll = ({ target: {scrollTop, scrollLeft} }) => {
    const { Grid } = this.List.current;

    Grid.handleScrollEvent({ scrollTop, scrollLeft });
  };


  static MAX_ROWS_COUNT = 100;

  static createRows() {
    const rows = [];

    for (let i = 0; i < App.MAX_ROWS_COUNT; i++) {
      rows.push({ id: i, text: `${i} --- ${generateRandomText()}` });
    }

    return rows;
  }

  renderRow = ({ index, key, style, parent }) => {
    const { id, text } = this.state.rows[index];

    return (
      <CellMeasurer key={key} parent={parent} cache={this.cache} rowIndex={index}>
        <div style={style} className="row">
          <span className="row-text">{`${id}-----${text}`}</span>
        </div>
      </CellMeasurer>
    );
  };

  render() {
    const { rows } = this.state;
    const width = 300;
    const height = 500;

    return (
      <main className="main">
        <h2 className="header">TEST VIRTUAL LIST</h2>
        <hr />
        <div className="wrapper">
          <Scrollbars
            style={{ width, height }}
            onScroll={this.handleScroll}
            renderTrackVertical={props => <div className="track-vertical" {...props} />}>
            <List
              ref={this.List}
              style={listStyle}
              className="list"
              width={width}
              height={height}
              deferredMeasurementCache={this.cache}
              rowHeight={this.cache.rowHeight}
              rowCount={rows.length}
              rowRenderer={this.renderRow}
            />
          </Scrollbars>
        </div>
      </main>
    );
  }
}
