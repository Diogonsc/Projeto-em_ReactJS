import React from 'react';
import './css/Topo.css';

const Topo = () => {
  return (
    <topo>
      <div className="esquesrdo">
      <a href="">
        <i class="fas fa-chart-line">  DASHBOARD</i>
      </a>
      </div>
      <div className="direito">
      <a href="">
        <i class="fas fa-sign-out-alt">  Logout</i>
      </a>
      </div>
    </topo>
  );
};

export default Topo;
