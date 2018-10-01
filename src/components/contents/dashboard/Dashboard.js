import React from 'react';
import Highcharts from 'highcharts/highcharts';
import HighchartsTheme from 'highcharts/js/themes/gray';
import Exporter from "highcharts/modules/exporting";

// connect exporter to Highcharts bundle global
Exporter(Highcharts);

class Dashboard extends React.Component {

    componentDidMount(){
        // Chart should be created after component rendered for preventing highchart error #13
        this.createChart();
    }

    createChart() {
        const chart = Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]
        });
        return chart;
    }

    render() {
        return (
            <div className="uk-container uk-container-large uk-padding">
                <div id="container" style={{width:"50%", height:"400px",margin:"auto"}} />
            </div>
        );
    }
}

export default Dashboard;