function showTable(tableId) {
    if (tableId === 'west') {
        document.getElementById('westTable').style.display = 'block';
        document.getElementById('eastTable').style.display = 'none';
        fetch('../json/west.json')
            .then(response => response.json())
            .then(data => renderTable(data, 'west'))
            .catch(error => console.error('Error fetching data:', error));
    } else {
        document.getElementById('westTable').style.display = 'none';
        document.getElementById('eastTable').style.display = 'block';
        fetch('../json/east.json')
            .then(response => response.json())
            .then(data => renderTable(data, 'east'))
            .catch(error => console.error('Error fetching data:', error));
    }
}

function renderTable(data, tableId) {
    const teams = data.tables.classicTable.Teams;
    const tableBody = document.getElementById(tableId);

    tableBody.innerHTML = ''; // Vyprázdnění obsahu tabulky

    for (const team in teams) {
        if (teams.hasOwnProperty(team)) {
            const teamData = teams[team];
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${teamData.rank}.</td>
                <td>${team}</td>
                <td>${teamData.matchesCount}</td>
                <td>${teamData.winsCount}</td>
                <td>${teamData.lossesCount}</td>
                <td>${teamData.lossesExtraCount}</td>
                <td>${teamData.goalsFor} : ${teamData.goalsAgainst}</td>
                <td>${teamData.points}</td>
                `;
            tableBody.appendChild(row);
        }
    }
}

// Při načtení stránky zobrazit tabulku pro západní konferenci
window.onload = function() {
    showTable('west');
};