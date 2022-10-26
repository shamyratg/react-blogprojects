import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Note</span>
        {/* <span className="headerTitleLg">Blog</span> */}
      </div>
      {/* <img className="headerImg" src="https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/> */}
      <img className="headerImg" src="https://images.pexels.com/photos/3335697/pexels-photo-3335697.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
    </div>
  );
}
