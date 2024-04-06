fetch('json/east.json')
.then(response => response.json())
.then(data => {
      const teams = data.tables.classicTable.Teams;
      const tableBody = document.getElementById('east');

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
})
.catch(error => console.error('Error fetching data:', error));