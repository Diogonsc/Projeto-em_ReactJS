import React from 'react';
import './css/Menu.css';


const Menu = () => {
  return (
    <div className="menuLateral">
      <div className="user">
        <a href="">
          <i class="fas fa-user-tie"></i>
        </a>
        <h2>
          <b>ADMIN</b>
        </h2>
      </div>
      <br /> <hr />
      <div className="opcoes">
        <ul>
          <a href="">
            <li>
              <i class="fas fa-chart-pie">
                <b> DASHBOARD</b>
              </i>
            </li>
          </a>
          <a href="">
            <li>
              <i class="far fa-file-alt">
                <b> PAGES</b>
              </i>
            </li>
          </a>
          <a href="">
            <li>
              <i class="fas fa-compress-arrows-alt">
                <b> COMPONENTS</b>
              </i>
            </li>
          </a>
          <a href="">
            <li>
              <i class="fab fa-wpforms">
                <b> FORMS</b>
              </i>
            </li>
          </a>
          <a href="">
            <li>
              <i class="fas fa-database">
                <b> TABLES</b>
              </i>
            </li>
          </a>
          <a href="">
            <li>
              <i class="fas fa-map-marked-alt">
                <b> MAPS</b>
              </i>
            </li>
          </a>
          <a href="">
            <li>
              <i class="fas fa-tools">
                <b> WIDGETS</b>
              </i>
            </li>
          </a>
          <a href="">
            <li>
              <i class="fab fa-uncharted">
                <b> CHARTS</b> 
              </i>
            </li>
          </a>
          <a href="">
            <li>
              <i class="far fa-calendar-alt">
                <b> CALENDAR</b>
              </i>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
