fetch('json/goalkeepers.json')
        .then(response => response.json())
        .then(data => {
            const eastBody = document.getElementById('eastBody');
            const westBody = document.getElementById('westBody');
            eastBody.innerHTML = '';
            westBody.innerHTML = '';

            const eastPlayers = data.EAST;
            const westPlayers = data.WEST;

            displayPlayers(eastPlayers, eastBody);
            displayPlayers(westPlayers, westBody);
        })
        .catch(error => console.error('Error fetching data:', error));

    function displayPlayers(players, tbody) {
        players.forEach((player, index) => {
            const row = document.createElement('tr');
            const rankCell = document.createElement('td');
            const playerNameCell = document.createElement('td');
            const teamCell = document.createElement('td');
            const percentageCell = document.createElement('td');

            rankCell.textContent = index + 1;
            playerNameCell.textContent = player.player;
            teamCell.textContent = player.team;
            percentageCell.textContent = player.percentage;

            row.appendChild(rankCell);
            row.appendChild(playerNameCell);
            row.appendChild(teamCell);
            row.appendChild(percentageCell);

            tbody.appendChild(row);
        });
    }