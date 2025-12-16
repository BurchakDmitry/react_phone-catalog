import classNames from 'classnames';
import './TitleNotification.scss';

type Props = {
  title: string;
  typeNotification: string;
};

export const TitleNotification: React.FC<Props> = ({
  title,
  typeNotification,
}) => {
  return (
    <section
      className={classNames(
        'page-notification',
        {
          'on-market': typeNotification === 'market',
        },
        {
          'on-home': typeNotification === 'home',
        },
      )}
    >
      <h1 className="title-notification">{title}</h1>
    </section>
  );
};
