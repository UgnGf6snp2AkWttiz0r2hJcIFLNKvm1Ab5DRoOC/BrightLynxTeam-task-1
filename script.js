const sum = (x, y) => (x * 10 ** 20 + y * 10 ** 20) / 10 ** 20;

const sumListener = () => alert(
    sum(
        parseFloat(
            document
                .getElementById('first')
                .value),
        parseFloat(
            document
                .getElementById('second')
                .value)
    )
);

window.onload = () => document
    .getElementById('sum')
    .addEventListener("submit", sumListener, false);