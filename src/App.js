import HomeView from "./components/HomeView";
import DataContainer from "./components/DataContainer";
import AppContext from "./context";
function App() {
  return (
      <DataContainer render={contextData => (
        <AppContext.Provider value={contextData}>
          <HomeView/>
        </AppContext.Provider>
      )}
   />
  );
}

export default App;
