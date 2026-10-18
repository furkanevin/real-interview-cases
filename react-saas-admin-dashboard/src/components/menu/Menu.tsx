import { NavLink } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <nav className="menu" aria-label="Main menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) =>
            listItem.url ? (
              <NavLink to={listItem.url} end className="listItem" key={listItem.id}>
                <img src={listItem.icon} alt="" />
                <span className="listItemTitle">{listItem.title}</span>
              </NavLink>
            ) : (
              // Bu sayfalar case kapsamında değil; ölü link yerine pasif gösterilir
              <span
                className="listItem disabled"
                key={listItem.id}
                title="Not part of this case"
                aria-disabled="true"
              >
                <img src={listItem.icon} alt="" />
                <span className="listItemTitle">{listItem.title}</span>
              </span>
            )
          )}
        </div>
      ))}
    </nav>
  );
};

export default Menu;
