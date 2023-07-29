const tabs = document.querySelectorAll(".label p");
const tabScreens = document.querySelectorAll(".target-grid");

tabs.forEach((tab, idx) => {

    tab.addEventListener("click", () => {

        tabs.forEach(label => {
            label.classList.remove("active");
        });

        tabScreens.forEach(screen => {
            screen.classList.remove("active");
        });

        tabs[idx].classList.add("active");
        tabScreens[idx].classList.add("active");

    });

});

const typeLabels = ["경기력", "불안감", "훈련", "기능자신감", "부상", "관계", "진로", "학업", "생활"];
const teamData = [4, 4, 4, 3, 2, 1, 2, 2, 3];

const data_radar = {
    labels: typeLabels,
    datasets: [{
        data: teamData,
        fill: true,
        backgroundColor: 'rgba(103, 163, 210, 0.4)',
        borderColor: '#67A3D2',
        borderWidth: 2
    }]
}

const config_radar = {
    type: 'radar',
    data: data_radar,
    options: {
        elements: {
            line: {
                borderWidth: 4
            },
            point: {
                radius: 2,
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                suggestedMax: 5,
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    callback: function (value) {
                        return Math.round(value);
                    },
                },
                pointLabels: {
                    font: {
                        family: 'Arial',
                        size: 14,
                        weight: 'bold'
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        },

    }
};

new Chart(
    document.getElementById('chart'),
    config_radar
);