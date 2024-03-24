var navbarHTML = `
<section class="navigation">
<div class="nav-container">
  <div class="brand">
    <a href="index.html">Original Six</a>
  </div>
  <nav>
    <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
    <ul class="nav-list">
      <li>
        <a href="schedule.html">Schedule</a>
      </li>
      <li>
        <a href="standings.html">Standings</a>
      </li>   
      <li>
        <a href="statistics.html">Statistics</a>
      </li>          
      <!--
      <li>
        <a href="#!">Standings</a>
        <ul class="nav-dropdown">
          <li>
            <a href="Standings/season28.html">Season 28</a>
          </li>
          <li>
            <a href="Standings/season29.html">Season 29</a>
          </li>
        </ul>
      </li>
      -->
      <li>
        <a href="playoff.html">Play Off</a>
      </li>
      <li>
        <a href="managers.html">Managers</a>
      </li>
      <li>
        <a href="history.html">History</a>
      </li>
    </ul>
  </nav>
</div>
</section>
<script src="js/navbar.js"></script>
`;

document.write(navbarHTML);