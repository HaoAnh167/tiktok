import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src=""></Image>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Dong Anh Hao</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Dong Anh Hao</span>
            </div>
        </div>
    );
}

export default AccountItem;
