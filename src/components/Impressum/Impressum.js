import React from 'react';
import './Impressum.css';
import {
  Link,
} from 'react-router-dom';

class Impressum extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <Link
            className='openFormButton'
            to={{pathname: '/'}}>
            <p>
              &#8594; tisch deine Meinung auf!
            </p>
          </Link>
          <div className='impressum-content'>
            <h3 id='impressum-title'>
              Impressum
            </h3>
            <p>
              Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.
            </p>
            <p>
              Maximilian Ranzenberger
            </p>
            <p>
              Obere Hofmark 1,
            </p>
            <p>
              5282 Ranshofen,
            </p>
            <p>
              Österreich
            </p>
            <p>
              <span className='bold-text'>Tel.:</span> 067762680711
            </p>
            <p>
              <span className='bold-text'>E-Mail:</span> ranzenbergermax@gmail.com
            </p>
            <p>
              Quelle: Erstellt mit dem Impressum Generator von firmenwebseiten.at
            </p>
            <h3 className='impressum-sub-title'>
              Urheberrechtshinweis
            </h3>
            <p>
              Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen
            </p>
            <h3 className='impressum-sub-title'>
              EU-Streitschlichtung
            </h3>
            <p>
              Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.
              Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen Kommission unter <a href='http://ec.europa.eu/odr?tid=221144945'>http://ec.europa.eu/odr?tid=221144945</a> zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.
              Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            <h3 className='impressum-sub-title'>
              Bildernachweis
            </h3>
            <p>
              Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.
              Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen:
              <li>Fotograf Mustermann</li>
            </p>
            <h3 className='impressum-sub-title'>
              Haftung für Inhalte dieser Website
            </h3>
            <p>
              Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen.  Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Website übernehmen, speziell für jene, die seitens Dritter bereitgestellt wurden. Als Diensteanbieter sind wir nicht verpflichtet, die von ihnen übermittelten oder gespeicherten Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch im Falle unserer Nichtverantwortlichkeit davon unberührt.
              Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im Impressum.
            </p>
            <h3 className='impressum-sub-title'>
              Haftung für Links auf dieser Webseite
            </h3>
            <p>
              Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.
              Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Impressum;
