import s from './Footer.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const Footer = () => {
    return (
        <>
        <a href='tel:5554280940' className={s.CallMe}>
            <div className={s.CallmeMain}></div>
        </a>
        <div className={s.Footer}>
                <p className={s.FooterText} >&#169;opyright Igor Vladimirovich 2022</p>
                <div>
                <a className={s.Github} href="https://github.com/Igor1997Klimenko"><PhoneInTalkIcon className={s.GitHubIcon} /></a>
                <a className={s.Github} href='tel:5554280940'><GitHubIcon/></a>
                </div>
        </div>
            </>
    )
}

export default Footer;