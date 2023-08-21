const canvas = document.getElementById('canvas-linechart');
var ctx = canvas.getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Evento 1', 'Evento 2', 'Evento 3','Evento 4'],
        datasets: [{
            label: '# of Votes',
            data: [100, 1000, 239,2719],
            borderWidth: 1,
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(255, 205, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)']
        }]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        }
    }
});
