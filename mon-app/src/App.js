import Profile from './Profile/profile';
import './App.css';
import PropTypes from 'prop-types';

function App() {
  const imgStyle={
    height:"300px",
    width:"200px",
};
  return (
    <div className="App">
      <Profile className="Profile" fullName="Elyes Ammar" bio="Full stack Developer" profession="React Developer">
        <img src="https://gomycodelearndev.blob.core.windows.net/profiles/6fd122ce-f6e0-4f1d-b389-5510c5ce3e9c-133141149778450239.jpg" alt="MyPhoto" style={imgStyle} ></img>
      </Profile>
    </div>
  );
};
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
export default App;
