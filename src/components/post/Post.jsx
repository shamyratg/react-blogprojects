import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Google Fonts is a library of 1455 open source font families and APIs
          for convenient use via CSS and Android.{" "}
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        When you have some text, how can you choose a typeface? Many
        people—professional designers included—go through an app’s font menu
        until we find one we like. But the aim of this module is to show that
        there are many considerations that can improve our type choices. By
        setting some useful constraints to aid our type selection, we can also
        develop a critical eye for analyzing type along the way.
      </p>
    </div>
  );
}
