import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper>">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <h1 className="singlePostTitle">
          Unlike a resume, a cover letter lets you can introduce yourself to the
          hiring manager, provide context for your achievements.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Shamyrat Gutlygeldiyev</b>
          </span>
          <span className="singlePostDate"> 1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Unlike a resume, a cover letter lets you can introduce yourself to the
          hiring manager, provide context for your achievements and
          qualifications, and explain your motivation for joining the company.
          But you can’t just write a cover letter. It has to be perfect. So… How
          do you write the perfect cover letter You know—the kind of letter that
          will make the employer call you up in the middle of the night? Give us
          10 minutes and you’ll know how to write a cover letter like that.
          Unlike a resume, a cover letter lets you can introduce yourself to the
          hiring manager, provide context for your achievements and
          qualifications, and explain your motivation for joining the company.
          But you can’t just write a cover letter. It has to be perfect. So… How
          do you write the perfect cover letter You know—the kind of letter that
          will make the employer call you up in the middle of the night? Give us
          10 minutes and you’ll know how to write a cover letter like that.
          Unlike a resume, a cover letter lets you can introduce yourself to the
          hiring manager, provide context for your achievements and
          qualifications, and explain your motivation for joining the company.
          But you can’t just write a cover letter. It has to be perfect. So… How
          do you write the perfect cover letter You know—the kind of letter that
          will make the employer call you up in the middle of the night? Give us
          10 minutes and you’ll know how to write a cover letter like that.
        </p>
      </div>
    </div>
  );
}
