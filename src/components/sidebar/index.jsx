import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './index.module.scss';
import Logo from '../../assets/images/logo.png';

const cx = classNames.bind(styles);

const navLinks = [
    {
        path: '/',
        content: 'Home',
    },
    {
        path: '/mortality-insight',
        content: 'Mortality Insight',
    },
    {
        path: '/cause-of-death',
        content: 'Cause of Death',
    },
    {
        path: '/progress',
        content: 'Comparative Analysis',
    },
];

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState(null);
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path || (location.pathname === '/' && path === '/home');
    };

    const handleNavLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <div className={cx('container')}>
            <img src={Logo} alt="" />
            <div>
                {navLinks.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.path}
                        value={activeLink}
                        className={cx('link', { active: isActive(link.path) })}
                        onClick={() => handleNavLinkClick(index)}
                    >
                        {link.content}
                    </NavLink>
                ))}
            </div>
            <h4>
                @copyrighted by <br />
                <b>Mortality Decoders</b>
            </h4>
        </div>
    );
};

export default Sidebar;
