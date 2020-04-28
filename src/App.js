import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <div className="NavContent">
          <h1>Title</h1>
          <ul>
            <li>Menu Item</li>
            <li>Menu Item</li>
            <li>Menu Item</li>
          </ul>
        </div>
      </div>

      <div className="Content">
        <div className="SideBar">
          <div className="List">
            <h1>List</h1>
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
          <div className="Tags">
            <h1>Tags</h1>
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Big Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Big Item</li>
            </ul>
          </div>
        </div>
        <div className="MainContent">
          <div className="TextItem">
            <h1>
              Headline
          </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry’s
              standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged … <a href="/">Read more</a>
          </p>
          </div>
          <hr />
          <div className="TextItem">
            <h1>
              Headline
          </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry’s
              standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
