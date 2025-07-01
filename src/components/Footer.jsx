import React from 'react';
import { useLanguage } from '../context/LangContext';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import '../App.css';

const SOCIALS = [
  {
    icon: <FaInstagram />, url: 'https://www.instagram.com/', label: 'Instagram'
  },
  {
    icon: <FaFacebookF />, url: 'https://www.facebook.com/profile.php?id=61565614427707#', label: 'Facebook'
  },
  {
    icon: <FaTiktok />, url: 'https://l.instagram.com/?u=https%3A%2F%2Fwww.tiktok.com%2F%40crystalservicejjpty%3F_t%3D8ejsDbTSEoX%26_r%3D1%26fbclid%3DPAZXh0bgNhZW0CMTEAAaerxaEKeduK4MHt2DmctuaEU5I8LWiklxSqsalcVRQLH0U-zYM1pr68DO_W5g_aem_7f0nyMwXvEaWsW1e-m5exw&e=AT1fA4SGmoLdVBsnYqLTtstddeqEy_R6MqX6sGsKkIHnxengsuOolcRC3o_illY2ai0neTcCq8O3yC5p4y4GrRKAAedyfDMyGVtuFA', label: 'TikTok'
  },
  {
    icon: <FaWhatsapp />, url: 'https://wa.me/50764562658', label: 'WhatsApp'
  },
];

const CONTACTS = [
  {
    icon: <FaWhatsapp />, text: '6456-2658', url: 'https://wa.me/50764562658', label: 'WhatsApp'
  },
  {
    icon: <FaPhone />, text: '6456-2658 | 6362-1210', url: 'tel:64562658', label: 'Teléfono'
  },
  {
    icon: <FaEnvelope />, text: 'crystalservicejj@gmail.com', url: 'mailto:crystalservicejj@gmail.com', label: 'Email'
  }
];

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-container redesigned-footer">
        <div className="footer-logo-box">
          <img src={process.env.PUBLIC_URL + '/icons/Crystal_g_iso.svg'} alt="Crystal Service Logo" className="footer-logo" />
        </div>
        <div className="footer-info-box">
          <div className="footer-section">
            <h4>{t('footer.contact')}</h4>
            <ul>
              {CONTACTS.map((c, i) => (
                <li key={i}>
                  <a href={c.url} className="footer-contact-link" target="_blank" rel="noopener noreferrer" aria-label={c.label}>
                    <span className="footer-icon">{c.icon}</span>{c.text}
                  </a>
                </li>
              ))}
            </ul>
            <div className="footer-socials">
              {SOCIALS.map((s, i) => (
                <a key={i} href={s.url} className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-section">
            <h4>{t('footer.offices')}</h4>
            <ul>
              <li>
                {t('footer.address')}
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-links-box">
          <div className="footer-section">
            <h4>{t('footer.moreInfo')}</h4>
            <ul>
              <li><Link to="/privacidad" className="footer-link">{t('footer.privacyPolicy')}</Link></li>
              <li><Link to="/terminos" className="footer-link">{t('footer.termsConditions')}</Link></li>
              <li><Link to="/cookies" className="footer-link">{t('footer.cookiesPolicy')}</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom redesigned-footer-bottom">
        &copy; {new Date().getFullYear()} Crystal Service. {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer; 