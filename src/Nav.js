import React from 'react';
import './css/Nav.css';

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="nav">
        <div className="number">
          <a href="">
            <div className="io">
              <i class="far fa-comments"></i>
            </div>
          </a>
          <div className="n">
            <h6>Number</h6> <br/>
            <h4>150BG</h4> <hr/>
          </div> 
          <i class="fas fa-redo-alt"> Update Now</i>
        </div>
      </div>

      <div className="nav-01">
        <div className="follower">
          <a href="">
            <div className="io-01">
              <i class="far fa-star"></i>
            </div>
          </a>
          <div className="n">
              <h6>Follower</h6> <br/>
              <h4>+45K</h4> <hr/>
            </div>
          <i class="fas fa-chart-bar"> Last Research</i>
        </div>
      </div>

      <div className="nav-02">
        <div className="user">
          <a href="">
            <div className="io-02">
              <i class="far fa-user"></i>
            </div>
          </a>
          <div className="n">
              <h6>User</h6> <br/>
              <h4>150,00</h4> <hr/>
            </div>
          <i class="fas fa-trophy"> Customers Feedback</i>
        </div>
      </div>

      <div className="nav-03">
        <div className="erros">
          <a href="">
            <div className="io-03">
              <i class="fas fa-exclamation"></i>
            </div>
          </a>
          <div className="n">
              <h6>Erros</h6> <br/>
              <h4>12</h4> <hr/>
            </div>
          <i class="far fa-clock">
            {' '}
            <b>In The Last Hours</b>
          </i>
        </div>
      </div>
    </div>
  );
};

export default Nav;
