import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Header(props) {
  const location = useLocation();
  const navigate = useNavigate()

  const getActive = (path) => {
    const currentPath = window.location.pathname
    return currentPath === path ? 'active' : ''
  }

  console.log('location', location);
  
  const handleGoBack = () => {
    if(location?.key === 'default') {
      handleRedirectToApp()
    } else {
      navigate(-1)
    }
  }

  const handleRedirectToApp = () => {
    window?.ReactNativeWebView?.goBack?.()
    const event = {
      type: 'closeWebView',
    }
    console.log('closeWebView', window?.ReactNativeWebView);
    window?.ReactNativeWebView?.postMessage(JSON.stringify(event))
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Event Web App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/" className={"nav-link " + getActive('/')}>Home</Link>
            <Link to="/about" className={"nav-link " + getActive('/about')}>About</Link>
            <Link to="/contact" className={"nav-link " + getActive('/contact')}>Contact</Link>
          </div>
          </div>
        </div>
      </nav>
      <button className='btn' id='goBackButton' onClick={handleGoBack}>Go Back</button>
      <button className='btn' id='redirectToAppButton' onClick={handleRedirectToApp}>Redirect to App</button>
    </div>
  )
}

export default Header