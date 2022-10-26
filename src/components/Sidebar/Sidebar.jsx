import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/2050979/pexels-photo-2050979.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <p>
          lorem100 dadmsdksdc sdcjscnsc sc sc sc sc sc sc sc sc sc sc s cs cs cs
          c sc sc sc sc s e rwrew tfe g d fs da s{" "}
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Dev</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-github"></i>
          <i className="sidebarIcon fa-brands fa-medium"></i>
          <i className="sidebarIcon fa-solid fa-envelope"></i>
        </div>
      </div>
    </div>
  );
}
