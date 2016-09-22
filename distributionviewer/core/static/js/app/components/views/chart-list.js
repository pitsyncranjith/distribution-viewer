import React from 'react';

import ChartContainer from '../containers/chart-container';


export class ChartList extends React.Component {
  render() {
    return (
      <section className="chart-list">
        {this.props.items.map(chart => {
          return (
            <ChartContainer key={chart.id} isDetail={false} chartId={chart.id} chartName={chart.name} showOutliers={false} />
          );
        })}
      </section>
    );
  }
}

ChartList.propTypes = {
  items: React.PropTypes.array.isRequired
};
