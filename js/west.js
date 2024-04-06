fetch('json/west.json')
.then(response => response.json())
.then(data => {
      const teams = data.tables.classicTable.Teams;
      const tableBody = document.getElementById('west');

      for (const team in teams) {
            if (teams.hasOwnProperty(team)) {
                  const teamData = teams[team];
                  const row = document.createElement('tr');
                  row.innerHTML = `
                  <td>${teamData.rank}.</td>
                  <td>${team}</td>
                  <td>${teamData.matchesCount}</td>
                  <td>${teamData.winsNormalCount}</td>
                  <td>${teamData.winsExtraCount}</td>
                  <td>${teamData.lossesExtraCount}</td>  
                  <td>${teamData.lossesNormalCount}</td> 
                  <td>${teamData.goalsFor} : ${teamData.goalsAgainst}</td>
                  <td>${teamData.points}</td>
                  `;
                  tableBody.appendChild(row);
            }
      }
})
.catch(error => console.error('Error fetching data:', error));