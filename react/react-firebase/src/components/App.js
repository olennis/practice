import { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
function App() {
  const [isLogin, setIsLogin] = useState(authService.currentUser);
  return (
    <div className="App">
      <AppRouter isLogin={isLogin}></AppRouter>
    </div>
  );
}

export default App;
