(function () {
    if (performance) {
        window.addEventListener('load', function () {
            var loadTime = performance.now();
            console.log('Время загрузки страницы: ' + loadTime + ' мс');

            var infoElement = document.createElement('p');
            infoElement.textContent = 'Время загрузки страницы: ' + loadTime.toFixed(2) + ' мс';
            document.getElementById('loadTimeInfo').appendChild(infoElement);

        });
    }
})();
