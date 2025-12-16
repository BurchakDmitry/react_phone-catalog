import classNames from 'classnames';
import './Footer.scss';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className={classNames('footer')}>
      <Link className="footer__logo" to="#"></Link>
      <ul className="footer__list">
        {['Github', 'Contacts', 'Rights'].map((val, index) => (
          <Link className="footer__link" to={`${val}`} key={index}>
            {val}
          </Link>
        ))}
      </ul>
      <button className="footer__btn" type="button">
        Back to top
      </button>
    </footer>
  );
};
