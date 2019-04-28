import React from "react";
import { View } from "react-native";

//Redux specific
import { Provider } from "react-redux";
import { createStore } from "redux";

//Get Reducers
import reducers from "./reducer";
//Get the Header Component
import { Header } from "./component/common";
// import LibraryList from "./components/LibraryList";

const App = () => {
return (
// Provider can only have one child component
<Provider store={createStore(reducers)}>
<View>
<Header headerText="Redux Demo -- Tech Stack" />
{/* <LibraryList /> */}
</View>
</Provider>
);
};

export default App;