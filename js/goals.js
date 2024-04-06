function showWest() {
    document.getElementById('playersTableWest').style.display = 'table';
    document.getElementById('playersTableEast').style.display = 'none';
    fetchAndPopulate('json/west.json', 'playersBodyWest');
}

function showEast() {
    document.getElementById('playersTableWest').style.display = 'none';
    document.getElementById('playersTableEast').style.display = 'table';
    fetchAndPopulate('json/east.json', 'playersBodyEast');
}

function fetchAndPopulate(jsonUrl, tableBodyId) {
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById(tableBodyId);
            tableBody.innerHTML = ''; // Vyčištění obsahu tabulky

            const allPlayers = [];

            for (const team in data.teamPlayers) {
                if (data.teamPlayers.hasOwnProperty(team)) {
                    const players = data.teamPlayers[team];
                    for (const player in players) {
                        if (players.hasOwnProperty(player) && players[player] > 2) {
                            allPlayers.push([player, players[player], team]);
                        }
                    }
                }
            }

            allPlayers.sort((a, b) => b[1] - a[1]);

            allPlayers.forEach(([player, goals, team], index) => {
                const row = document.createElement('tr');
                const rankCell = document.createElement('td');
                const playerNameCell = document.createElement('td');
                const goalsCell = document.createElement('td');
                const teamCell = document.createElement('td');

                rankCell.textContent = index + 1;
                playerNameCell.textContent = player;
                goalsCell.textContent = goals;
                teamCell.textContent = team;

                row.appendChild(rankCell);
                row.appendChild(playerNameCell);
                row.appendChild(teamCell);
                row.appendChild(goalsCell);

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Chyba při načítání údajů:', error));
}

// Načti a zobraz západní konferenci při načtení stránky
window.onload = function() {
    showWest();
};