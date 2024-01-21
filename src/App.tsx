// import Main from "./modules/Home/views/Home"
// import Registration from "./modules/auth/Registration/views/Registration"

// import List from "./modules/List/views/List"

import Login from "./modules/auth/Login/views/Login"


import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {

  return (
    <GoogleOAuthProvider clientId="big-synthesizer-411817">
      <Login />
    </GoogleOAuthProvider>
    // <Main />
    // <Registration />
    // <List />
  )
}

export default App