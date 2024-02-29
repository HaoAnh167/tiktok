import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faGear,
    faSignOut,
    faCoins,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Hanle logic
    const handleMenuChange = (menuItem) => {};

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@userlink',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="data:image/jpeg;base64,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"
                                className={cx('user-avatar')}
                                alt="Dong Anh Hao"
                            ></Image>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
