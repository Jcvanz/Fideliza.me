import './styles.css';
import { Chart } from "react-google-charts";

function GraphicOverview() {

    var data = ([
        ['Element', 'Density', { role: 'style' } ],
        ['Jan', 2500, '#000000'],           
        ['Fev', 6800, '#000000'],           
        ['Mar', 3700, '#000000'],           
        ['Abr', 9000, '#000000'],           
        ['Mai', 7000, '#000000'],           
        ['Jun', 6930.60, '#000000'],           
        ['Jul', 10021.9, '#000000'],           
        ['Ago', 10125.4, '#000000'],           
        ['Set', 7055.94, '#000000'],           
        ['Out', 5000.94, '#000000'],           
        ['Nov', 4452.94, '#000000'],           
        ['Dez', 8045.94, '#000000'],           
    ]);

    const options = {
        title: 'Overview',
        chartArea: { width: '80%', height: '80%' },
        legend: { position: "none" },
    };

    return(
        <>
            <div className="chart-content">
                <Chart
                    chartType="ColumnChart"
                    data={data}
                    options={options}
                    width="100%"
                    height="99.5%"
                />
            </div>
        </>
    )
}

export default GraphicOverview;