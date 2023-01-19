import { useState } from "react";
import classes from "./TodoList.module.scss";

const TodoList = () => {
  const [activity, setActivity] = useState("");
  const activityInputHandler = (event) => {
    setActivity(event.target.value);
  };
  const [listData, setListData] = useState([]);
  const addActivity = () => {
    if (activity) {
      setListData((listdata) => {
        const updatedList = [...listdata, activity];
        setActivity("");
        return updatedList;
      });
      return;
    }
  };
  const removeActivity = (index) => {
    const updateListData = listData.filter((element, id) => {
      return index !== id;
    });
    setListData(updateListData);
  };
  return (
    <>
      <div className={classes.todoListContainer}>
        <header className={classes.header}>
          <h1>TODO-List</h1>
        </header>
        <div className={classes.inputContainer}>
          <input
            type="text"
            placeholder="Add Activity"
            value={activity}
            onChange={activityInputHandler}
          />
          <button onClick={addActivity}>Add</button>
        </div>
        <div className={classes.listContainer}>
          <div className={classes.listDisplay}>
            <h2>Items on your list.</h2>
            <div className={classes.listItems}>
              {listData.length >= 1 ? (
                listData.map((data, index) => {
                  return (
                    <div key={index} className={classes.todoItems}>
                      <h3>{data}</h3>
                      <button onClick={() => removeActivity(index)}>
                        Remove
                      </button>
                    </div>
                  );
                })
              ) : (
                <div key="none" className={classes.empty}>
                  <h3>No item in the List</h3>
                </div>
              )}
            </div>
            {listData.length >= 1 && (
              <button onClick={() => setListData([])}>Remove all</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
