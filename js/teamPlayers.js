fetch('json/west.json')
  .then(response => response.json())
  .then(data => {
    const tablesContainer = document.getElementById('tables-container');

    // Create table for each team
    for (const [team, players] of Object.entries(data.teamPlayers)) {
      const table = document.createElement('table');
      table.innerHTML = `
        <caption></caption>
        <thead>
          <tr>
            <th>${team}</th>
            <th style="text-align: center">G</th>
          </tr>
        </thead>
        <tbody>
          ${Object.entries(players).map(([player, score]) => `
            <tr>
              <td>${player}</td>
              <td>${score}</td>
            </tr>
          `).join('')}
        </tbody>
      `;
      tablesContainer.appendChild(table);
    }
  })
  .catch(error => console.error('Error fetching data:', error));
