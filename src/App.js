import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Section from './sections';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy'
// import Ambassadors from './ambassadors';
import SelectedAmbassadors from './ambassadors/selected_ambassadors';


function App() {
  return (
    <div className="appWrapper">
      <Router>
        <Switch>
          <Route path="/" component={Section} exact={true} />
          {/* <Route path="/ambassadors" component={Ambassadors} exact={true} /> */}
          <Route path="/ambassadors" component={SelectedAmbassadors} exact={true} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} exact={true} />
          <Route path="/privacy-policy" component={PrivacyPolicy} exact={true} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
