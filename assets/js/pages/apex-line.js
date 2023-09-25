
//
// Line chart with data labels
//

var colors = ["#3e60d5", "#47ad77", "#fa5c7c", "#ffbc00"];
var dataColors = document.querySelector("#line-chart-datalabel").dataset.colors;
if (dataColors) {
    colors = dataColors.split(",");
}
var options = {
    chart: {
        height: 380,
        type: 'line',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    colors: colors,
    dataLabels: {
        enabled: true,
    },
    stroke: {
        width: [3, 3],
        curve: 'smooth'
    },
    series: [
        {
            name: "R1",
            data: [10, 10, 10, 10, 10, 10, 10,10, 10, 10, 10, 10, 10, 10]
        },
        {
            name: "R2",
            data: [9, 9, 9, 9, 9, 9, 9,9, 9, 9, 9, 9, 9, 9]
        },
        {
            name: "R3",
            data: [8, 8, 8, 8, 8, 8, 8,8, 8, 8, 8, 8, 8, 8]
        },
        {
            name: "R4",
            data: [7, 7, 7, 7, 7, 7, 7,7, 7, 7, 7, 7, 7, 7]
        },
        {
            name: "R5",
            data: [6, 6, 6, 6, 6, 6, 6,6, 6, 6, 6, 6, 6, 6]
        },
        {
            name: "R6",
            data: [5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5]
        },
        {
            name: "R7",
            data: [4, 4, 4, 4, 4, 4, 4,4, 4, 4, 4, 4, 4, 4]
        },
        {
            name: "R8",
            data: [3, 3, 3, 3, 3, 3, 3,3, 3, 3, 3, 3, 3, 3]
        },
        {
            name: "R9",
            data: [2, 2, 2, 2, 2, 2, 2,2, 2, 2, 2, 2, 2, 2]
        },
        {
            name: "R10",
            data: [1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1]
        }
    ],
    title: {
        text: 'キーワード順位',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f3fa'
    },
    markers: {
        style: 'inverted',
        size: 6
    },
    xaxis: {
        categories: ['9/1', '9/2', '9/3', '9/4', '9/5', '9/6', '9/7','9/8', '9/9', '9/10', '9/11', '9/12', '9/13', '9/14'],
        title: {
            text: '日付'
        }
    },
    yaxis: {
        title: {
            text: ''
        },
        min: 0,
        max: 10
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
}

var chart = new ApexCharts(
    document.querySelector("#line-chart-datalabel"),
    options
);

chart.render();