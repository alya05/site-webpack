import React, { Component } from 'react';
import './Headlines.less';

class Headlines extends Component {
  render() {
    return (
      <div className="headlines">
        <div className="headlines__inner-container">
          <h1 className="headlines__main-headline">Уборка — не Ваше дело</h1>
          <h2 className="headlines__second-headline">Доверьте ее профессионалам Звыш</h2>
        </div>
      </div>
    );
  }
}

export default Headlines;
