import { useSelector, useDispatch } from "react-redux";
import { getusers } from "./userSlice";
import { useEffect } from "react";
import { addData, deleteData } from "./Root/actions";

function App() {
  const dispatch = useDispatch();

  // const apidata = useSelector((state) => state.data.todoData);
  // console.log(apidata);
  // const HandleDelete = () => dispatch(deleteData());
  // const HandleAdd = () => dispatch(addData());

  const { user, isLoading } = useSelector((state) => state.user);
  const value = useSelector((state) => state.user.isLoading);
  console.log(value);

  useEffect(() => {
    dispatch(getusers());
  }, []);

  return (
    <div className="App">
      {user.map((user) => {
        return <p>{user.name}</p>;
      })}

      {/* <button onClick={HandleAdd}>add data</button>
      <button onClick={HandleDelete}>delete data</button>

      {<div>{JSON.stringify(apidata)}</div>} */}
    </div>
  );
}

export default App;
