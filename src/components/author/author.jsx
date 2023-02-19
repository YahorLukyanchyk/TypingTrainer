import "./author.scss"

function Author({link, image, name, work}) {
  return (
    <a href={link} className="footer__author-link">
      <div className="block-author__avatar-wrapper">
        <img src={image} alt="Avatar" className="block-author__avatar" />
      </div>
      <div className="block-author__info">
        <div className="block-author__name">{name}</div>
        <div className="block-author__work">{work}</div>
      </div>
    </a>
  );
}

export default Author;
