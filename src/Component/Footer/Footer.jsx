import s from './Footer.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <>
        <a href='tel:5554280940' className={s.CallMe}>
            <div className={s.CallmeMain}></div>
        </a>
        <div className={s.Footer}>
                <p className={s.FooterText} >&#169;opyright Igor Vladimirovich 2022</p>
                <a className={s.Github} href="https://github.com/Igor1997Klimenko"><GitHubIcon/></a>
        </div>
            </>
    )
}

export default Footer;