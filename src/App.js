import './App.css';
import DetailsRow from './components/DetailsRow';
import Searchbar from './components/searchbar';
import NotificationIcon from './components/NotificationIcon';
import FilterSection from './components/FilterSection';

function App() {
  return (
    <div className="page-container">
    <div className="navbar">
      {/* Navbar component */}
      <img src={require('./icons/navbar_logo.png')} alt="Navbar Logo" className="navbar-logo" />
      <div className="navbar-content">
        <div className="navbar-item">
          <img src={require('./icons/notification_icon_white.png')} alt="Icon" className="navbar-item-logo" />
          <span className="navbar-item-text" style={{color: 'white'}}>Alerts</span>
        </div>
        <div className="navbar-item">
          <img src={require('./icons/grad_cap.png')} alt="Icon" className="navbar-item-logo" />
          <span className="navbar-item-text">Training</span>
        </div>
        <div className="navbar-item">
          <img src={require('./icons/automation.png')} alt="Icon" className="navbar-item-logo" />
          <span className="navbar-item-text">Automation</span>
        </div>
        <div className="navbar-item">
          <img src={require('./icons/portfolio.png')} alt="Icon" className="navbar-item-logo" />
          <span className="navbar-item-text">Portfolio</span>
        </div>
        <div className="navbar-item">
          <img src={require('./icons/trending.png')} alt="Icon" className="navbar-item-logo" />
          <span className="navbar-item-text">Trends</span>
        </div>
        <div className="user-account">
          <img src={require('./icons/user.png')} alt="User" className="user-icon" />
          <span className="user-text">Moni Roy</span>
        </div>
      </div>
    </div>
    <div className="main-content">
      {/* Main content component */}
      <div className="top-row">
        <div className="alerts">ALERTS</div>
          <Searchbar/>
          <NotificationIcon
            count={3}
          />
      </div>
      <div className="bottom-row">
        {/* Rest of the component to show details */}
        <DetailsRow
          text1={"AMZN"}
          text2={"200"}
          text3={"-0.25"}
          text4={"Low Risk"}
        />
        <DetailsRow
          text1={"TSLA"}
          text2={"200"}
          text3={"0.25"}
          text4={"Low Risk"}
        />
                <DetailsRow
          text1={"TSLA"}
          text2={"200"}
          text3={"-0.25"}
          text4={"Low Risk"}
        />
          <DetailsRow
          text1={"TSLA"}
          text2={"200"}
          text3={"0.25"}
          text4={"High Risk"}
        />
                <DetailsRow
          text1={"TSLA"}
          text2={"200"}
          text3={"0.25"}
          text4={"Low Risk"}
        />
                <DetailsRow
          text1={"TSLA"}
          text2={"200"}
          text3={"-0.25"}
          text4={"High Risk"}
        />
                <DetailsRow
          text1={"TSLA"}
          text2={"200"}
          text3={"0.25"}
          text4={"Low Risk"}
        />
                <DetailsRow
          text1={"TSLA"}
          text2={"200"}
          text3={"0.25"}
          text4={"High Risk"}
        />
                <DetailsRow
          text1={"TSLA"}
          text2={"200"}
          text3={"-0.25"}
          text4={"Low Risk"}
        />

      </div>
    </div>
    <div className="filters">
      <FilterSection/>

    </div>
  </div>
  );
}

export default App;
