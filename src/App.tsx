import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addItemData,
  editItemData,
  fetchItem,
  removeItemData,
} from "./Reducers/itemsSlice";
import { useState, useEffect } from "react";
import {
  Button,
  Container,
  FormContainer,
  Heading,
  Input,
  List,
  MainContainer,
  UserContainer,
} from "./Styles";
import UserTable from "./Components/UserTable";

function App() {
  const state = useSelector((state: any) => state.items);
  const dispatch = useDispatch();
  // console.log(state.items);

  useEffect(() => {
    dispatch(fetchItem());
  }, [dispatch]);
  const [iChange, setIChange] = useState<any>({
    name: "",
    email: "",
  });

  const [edit, setEdit] = useState<any>({
    isEdit: false,
    user: {},
  });

  const handleInputChange = (e: any, keyV: string) => {
    setIChange((prev: any) => {
      return {
        ...prev,
        [keyV]: e.target.value,
      };
    });
  };
  const handleSubmit = () => {
    if (iChange.name !== "") dispatch(addItemData(iChange));
  };

  const handleRemove = (id: any) => {
    dispatch(removeItemData(id));
  };

  const handleEdit = (id: any) => {
    setEdit((prev: any) => {
      return {
        ...prev,
        isEdit: true,
      };
    });
    const user = state.items.find((item: any) => {
      return item.id === id;
    });

    setIChange(user);
  };

  const handleSave = () => {
    // console.log(iChange);
    setEdit((prev: any) => {
      return {
        ...prev,
        isEdit: false,
      };
    });
    dispatch(editItemData(iChange));
  };

  const handleCancel = () => {
    setEdit((prev: any) => {
      return {
        ...prev,
        isEdit: false,
      };
    });
    setIChange({
      name: "",
      email: "",
    });
  };

  // console.log(iChange);

  return (
    <MainContainer className="App">
      <Container>
        <FormContainer>
          <>
            <Heading>
              {edit.isEdit ? " Edit the User " : "Add the User"}
            </Heading>
            <Container>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                type="text"
                value={iChange.name}
                onChange={(e) => handleInputChange(e, "name")}
                placeholder="Name"
              />

              <label htmlFor="email">Email</label>
              <Input
                type="email"
                name="email"
                value={iChange.email}
                id="email"
                placeholder="Email"
                onChange={(e) => handleInputChange(e, "email")}
              />
              {edit.isEdit ? (
                <Container $row={true}>
                  <Button $marginR="10px" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button $marginL="10px" $marginR="10px" onClick={handleSave}>
                    Save
                  </Button>
                </Container>
              ) : (
                <Button onClick={handleSubmit}>Add</Button>
              )}
            </Container>
          </>

          {/* <>{console.log(state.items, "state")}</> */}
        </FormContainer>
      </Container>
      <UserContainer>
        <UserTable
          users={state.items}
          onEdit={handleEdit}
          onDelete={handleRemove}
        />
      </UserContainer>
    </MainContainer>
  );
}

export default App;
