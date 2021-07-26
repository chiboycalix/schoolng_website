import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParam } from '../utils/URLParams';
import './styles.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree'
import PageFour from './Pages/PageFour';

const TermsAndConditions = () => {
  const history = useHistory();
  const params = useParam();
  const page = params.get('page');

  React.useEffect(() => {
    const fetchAndSetPage = () => {
      return history.push(`/terms-and-conditions?page=${page || '1'}`);
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
      case '3':
        return (
          <PageThree />
        )
      case '4':
        return (
          <PageFour />
        )
      default:
        return (<div>not found</div>)
    }
  }
  return (
    <div className="termsAndConditionsWrapper">
      <Navbar />
      <h1 className="termsAndCondtionsTitle">Terms and Conditions</h1>
      {
        pages()
      }
      <Footer />
    </div>
  )
}

export default TermsAndConditions