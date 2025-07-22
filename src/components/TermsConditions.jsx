'use client';

import React from 'react';
import { useLanguage } from '../context/LangContext';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import '../App.css';

const TermsConditions = () => {
  const { t } = useLanguage();

  const sections = [
    'acceptance',
    'service_description',
    'website_use',
    'intellectual_property',
    'product_info',
    'quotes_orders',
    'liability',
    'external_links',
    'modifications',
    'governing_law',
    'contact'
  ];

  return (
    <section className="section privacy-section">
      <div className="privacy-container">
        <h1 className="privacy-title">{t('terms.title')}</h1>
        <p className="privacy-date">{t('terms.lastUpdated')}</p>
        
        {/* Table of Contents */}
        <div className="privacy-toc">
          <h3>{t('terms.tocTitle')}</h3>
          <ul>
            {sections.map((section, index) => (
              <li key={index}>
                <a href={`#section-${index + 1}`}>{t(`terms.sections.${section}.title`)}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="privacy-content">
          {sections.map((section, index) => (
            <div key={index} className="privacy-section-block" id={`section-${index + 1}`}>
              <h2 className="privacy-section-title">{t(`terms.sections.${section}.title`)}</h2>
              <p className="privacy-section-text">{t(`terms.sections.${section}.content`)}</p>
            </div>
          ))}

          {/* Sección adicional de condiciones específicas */}
          <div className="privacy-section-block" id="section-extra">
            <h2 className="privacy-section-title">Condiciones Específicas de Contratación</h2>
            <ul className="privacy-section-text">
              <li>Se requiere un abono del 50% para iniciar el proyecto, un 30% al momento de recibir el material en sitio, y el 20% restante al finalizar los trabajos.</li>
              <li>La fecha de entrega será acordada una vez aprobada la cotización y se contará únicamente en días hábiles (lunes a viernes).</li>
              <li>Nuestro trabajo cuenta con mano de obra garantizada.</li>
              <li>No nos hacemos responsables por daños en tuberías, cableado, baldosas, mármol, granito, porcelanato, vidrio o instalaciones eléctricas no reportadas previamente, ni por permisos que no hayan sido gestionados para la ejecución del proyecto.</li>
              <li>La programación para la instalación se asignará posterior a la confirmación del pago, verificación de materiales y disponibilidad de agenda para la rectificación de medidas.</li>
              <li>En caso de requerir desinstalaciones previas, el cliente debe notificarlo y esto tendrá un cargo adicional.</li>
              <li>Si el cliente requiere acuerdos adicionales como formas de pago especiales, retenciones, garantías, fianzas, pólizas o condiciones legales específicas, deberá notificarlas antes de la aprobación de la cotización, para hacer los ajustes correspondientes.</li>
              <li>Cualquier modificación al diseño previamente aprobado deberá solicitarse por escrito. Se informará al cliente del costo adicional, y solo con su aprobación se procederá.</li>
              <li>Todas las medidas suministradas por el cliente deben ser confirmadas por nuestro equipo. En caso contrario, no nos hacemos responsables por errores que afecten el producto o servicio, y se cobrará el gasto generado por ajustes (transporte, rectificaciones, viáticos, etc.).</li>
              <li>Si el cliente desea reprogramar un servicio, deberá hacerlo con un mínimo de 24 horas de anticipación. De lo contrario, se aplicará un cargo adicional por reprogramación.</li>
              <li>Los trabajos se realizan en horario laboral de lunes a viernes. Si el cliente requiere servicio fuera de este horario, se aplicará un costo adicional.</li>
              <li>Una vez realizado el abono o pago total, el cliente debe enviar la constancia de pago correspondiente.</li>
              <li>Al realizar cualquier abono o pago total, el cliente acepta expresamente los términos y condiciones aquí descritos.</li>
              <li>Los tiempos de entrega pueden verse afectados por causas externas (eventos naturales, disponibilidad de materiales, condiciones técnicas, etc.). En tal caso, se notificará oportunamente y se reprogramará la entrega sin que esto anule el presente acuerdo.</li>
              <li>Esta cotización tiene una validez de 5 días hábiles a partir de la fecha de emisión.</li>
              <li>Se aplicará un costo de $30 Balboas por visita técnica, el cual será deducido del valor total en caso de aprobación del servicio.</li>
              <li>Todo el contenido digital generado por Crystal Service es de uso exclusivo de la empresa. Se prohíbe su uso, reproducción o publicación sin autorización expresa.</li>
            </ul>
          </div>
        </div>

        {/* Professional Contact Section */}
        <div className="privacy-contact">
          <h3>{t('terms.contactTitle')}</h3>
          <p>{t('terms.contactSubtitle')}</p>
          <div className="privacy-contact-info">
            <div className="privacy-contact-item">
              <FaEnvelope />
              <a href="mailto:crystalservicejj@gmail.com">crystalservicejj@gmail.com</a>
            </div>
            <div className="privacy-contact-item">
              <FaPhone />
              <a href="tel:64562658">6456-2658</a>
            </div>
            <div className="privacy-contact-item">
              <FaWhatsapp />
              <a href="https://wa.me/50764562658" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions; 