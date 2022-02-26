// Selects the HTML elements we want to use
const form = document.getElementById('form');
const graph = document.getElementById("graph-container");

// Function ran after submit
function submitHandler(event) {
    event.preventDefault();

    // Makes graph appear
    graph.classList.add("result");
    // Gets input value so we know what the user chose
    const input = document.getElementById('input').value;
    // Visual object for the graph
    const layout = {
        title: `${input}`,
        barmode: 'relative'
    };

    let city;
    // Switch statement to change data based on user selection
    switch (input.toLowerCase()) {
        case 'seattle':
            city = [
                {
                    x: ['2024\u3164', '2027\u3164'],
                    y: [55, 55],
                    type: 'bar',
                    width: .5,
                    marker: {
                        color: 'rgb(158,202,225)',
                        line: {
                            color: 'rgb(8,48,107)',
                            width: 1.5
                        }
                    }
                }
            ];
            break;
        case 'omaha':

            city = [
                {
                    x: ['2024\u3164', '2027\u3164'],
                    y: [58, 61],
                    type: 'bar',
                    width: .5,
                    marker: {
                        color: 'rgb(158,202,225)',
                        line: {
                            color: 'rgb(8,48,107)',
                            width: 1.5
                        }
                    }
                }
            ];
            break;
        case 'scranton':

            city = [
                {
                    x: ['2024\u3164', '2027\u3164'],
                    y: [49, 50],
                    type: 'bar',
                    width: .5,
                    marker: {
                        color: 'rgb(158,202,225)',
                        line: {
                            color: 'rgb(8,48,107)',
                            width: 1.5
                        }
                    }
                }
            ];
            break;
    }
    // Calling JS Library used to show graph with data from user selection plus our layout edits
    Plotly.newPlot('graph', city, layout);
}
// Waits for submit and runs function after submit
form.addEventListener('submit', submitHandler);