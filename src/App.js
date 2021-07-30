import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Section from './sections';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './PrivacyPolicy';
import SelectedAmbassadors from './ambassadors/selected_ambassadors';


function App() {
  return (
    <div className="appWrapper">
      <Router>
        <Switch>
          <Route path="/" component={Section} exact={true} />
          <Route path="/ambassadors" component={SelectedAmbassadors} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
