import './App.css';


function App() {
  return (
    
    <div className='app-wrapper'>
      <header className='header'>
      <img src='https://i.ytimg.com/vi/9A__V0L4MVw/maxresdefault.jpg'></img>
      </header>
      <nav className='nav'>
        <div>
          <a href=''>Profile</a>
          </div>
          <div>
          <a href=''>Messages</a>
          </div>
          <div>
          <a href=''>News</a>
          </div>
          <div>
          <a href=''>Music</a>
          </div>
          <div>
          <a href=''>Settings</a>
          </div>
      </nav>
      <div className='content'>
        <div>
        <img src='https://i.ytimg.com/vi/9A__V0L4MVw/maxresdefault.jpg'></img>
        </div>
        <div>
          avatar+description
        </div>
        <div>My posts
          <div>
            new post
          </div>
          <div>
            post1
          </div>
          <div>
          post2
          </div>
        </div>
      </div>
    </div>
    
  );
}



export default App;
