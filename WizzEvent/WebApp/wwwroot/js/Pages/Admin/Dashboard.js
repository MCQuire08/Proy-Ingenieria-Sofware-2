const canvas = document.getElementById('canvas-linechart');
var ctx = canvas.getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Comisiones', 'Membresias'],
        datasets: [{
            label: '# of Votes',
            data: [100,1000],
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



const canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');
new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Musica', 'Deportes','Fiestas','Autos'],
        datasets: [{
            label: '# of Votes',
            data: [10000,1000,184,289,1238],
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
