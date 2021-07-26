import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParam } from '../utils/URLParams';

import './styles.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';

const PrivacyPolicy = () => {
  const history = useHistory();
  const params = useParam();
  const page = params.get('page');

  React.useEffect(() => {
    const fetchAndSetPage = () => {
      return history.push(`/privacy-policy?page=${page || '1'}`);
    }
    fetchAndSetPage();
  }, [page, history]);


  const pages = () => {
    switch (page) {
      case '1':
        return (
          <PageOne />
        )
      case '2':
        return (
          <PageTwo />
        )
      default:
        return (<div>not found</div>)
    }
  }

  return (
    <div className="privacyPolicyWrapper">
      <Navbar />
      <h1 className="privacyPolicyTitle">Privacy Policy</h1>
      {
        pages()
      }
      <Footer />
    </div>
  )
}
export default PrivacyPolicy