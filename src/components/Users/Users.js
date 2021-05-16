import React from "react";
import { UserItem } from "./UserItem";
import ReactNextPaging from "react-next-paging";

const buttonStyles = {
  border: "1px solid #ccc",
  background: "#fff",
  fontSize: "1em",
  padding: 10,
  margin: 5,
  width: 70,
};

const Users = ({ users }) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const newitems = users.map((user, i) => {
      return <UserItem key={i} user={user} />;
    });
    setItems(newitems);
  }, [users]);

  return (
    <>
      {users.length > 0 ? (
        <UsersPagination itemsperpage={5} items={items} pagesspan={4} />
      ) : null}
    </>
  );
};

const UsersPagination = ({ itemsperpage, nocolumns = 0, items, pagesspan }) => {
  return (
    <ReactNextPaging
      itemsperpage={itemsperpage}
      nocolumns={nocolumns}
      items={items}
      pagesspan={pagesspan}
    >
      {({
        getBackButtonProps,
        getFastBackButtonProps,
        getFwdButtonProps,
        getFastFwdButtonProps,
        getSelPageButtonProps,
        nopages,
        inipagearray,
        pagesforarray,
        currentpage,
        noitems,
        initialitem,
        lastitem,
        goBackBdisabled,
        goFastBackBdisabled,
        goFwdBdisabled,
        goFastFwdBdisabled,
      }) => (
        <ul style={{ listStyle: "none" }}>
          {items.slice(initialitem, lastitem).map((item) => {
            return item;
          })}
          {noitems > 0
            ? [
                <li key={"pagingrow" + 100}>
                  <button
                    style={buttonStyles}
                    {...getFastBackButtonProps()}
                    disabled={goFastBackBdisabled}
                  >
                    {"<<"}
                  </button>
                  <button
                    style={buttonStyles}
                    {...getBackButtonProps()}
                    disabled={goBackBdisabled}
                  >
                    {"<"}
                  </button>
                  {Array.from(
                    { length: pagesforarray },
                    (v, i) => i + inipagearray
                  ).map((page) => {
                    return (
                      <button
                        key={page}
                        {...getSelPageButtonProps({ page: page })}
                        disabled={currentpage == page}
                      >
                        {page}
                      </button>
                    );
                  })}
                  <button
                    style={buttonStyles}
                    {...getFwdButtonProps()}
                    disabled={goFwdBdisabled}
                  >
                    {">"}
                  </button>
                  <button
                    style={buttonStyles}
                    {...getFastFwdButtonProps()}
                    disabled={goFastFwdBdisabled}
                  >
                    {">>"}
                  </button>
                </li>,
              ]
            : null}
        </ul>
      )}
    </ReactNextPaging>
  );
};

export { Users };
