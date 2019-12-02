import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Header = ({ siteTitle }) => (
      <header data-ecl-auto-init="SiteHeaderCore" className="ecl-site-header-core">
        <div className="ecl-site-header-core__container ecl-container">
          <div className="ecl-site-header-core__top"><a className="ecl-link ecl-link--standalone ecl-site-header-core__logo-link" href="/example" aria-label="European Commission"><img alt="European Commission logo" title="European Commission" className="ecl-site-header-core__logo-image" src="/component-library/dist/media/logo--en.30b933cc.svg" /></a>
            <div className="ecl-site-header-core__action">
              <div className="ecl-site-header-core__login-container"><a className="ecl-link ecl-link--standalone ecl-site-header-core__login-toggle" href="/example"><svg focusable="false" aria-hidden="true" className="ecl-icon ecl-icon--s">
                    <use xlinkHref="/component-library/dist/media/icons.1dbe9812.svg#general--log-in" />
                  </svg>Log in</a></div><a className="ecl-link ecl-link--standalone ecl-site-header-core__language-selector" href="/example" data-ecl-language-selector="true" aria-controls="language-list-overlay" aria-expanded="false"><span className="ecl-site-header-core__language-icon"><svg focusable="false" aria-hidden="true" className="ecl-icon ecl-icon--s">
                    <use xlinkHref="/component-library/dist/media/icons.1dbe9812.svg#general--language" />
                  </svg><span className="ecl-site-header-core__language-code">en</span></span>English</a>
              <div className="ecl-site-header-core__search-container"><a className="ecl-link ecl-link--standalone ecl-site-header-core__search-toggle" href="/example" data-ecl-search-toggle="true" aria-controls="search-form-id" aria-expanded="false"><svg focusable="false" aria-hidden="true" className="ecl-icon ecl-icon--s">
                    <use xlinkHref="/component-library/dist/media/icons.1dbe9812.svg#general--search" />
                  </svg>Search</a>
                <form id="search-form-id" data-ecl-search-form="true" className="ecl-site-header-core__search ecl-search-form" role="search">
                  <div className="ecl-form-group ecl-form-group--text-input"><label className="ecl-search-form__label ecl-form-label" htmlFor="search-input-id">Search</label><input type="search" id="search-input-id" className="ecl-search-form__text-input ecl-text-input" /></div><button aria-label="Search" type="submit" className="ecl-search-form__button ecl-button ecl-button--search"><span className="ecl-button__container"><span className="ecl-button__label" data-ecl-label="true">Search</span><svg focusable="false" aria-hidden="true" data-ecl-icon="true" className="ecl-button__icon ecl-button__icon--after ecl-icon ecl-icon--xs">
                        <use xlinkHref="/component-library/dist/media/icons.1dbe9812.svg#general--search" />
                      </svg></span></button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="language-list-overlay" className="ecl-language-list ecl-language-list--overlay" aria-labelledby="ecl-language-list__title" role="dialog" data-ecl-language-list-overlay="true" hidden>
          <div className="ecl-language-list__container ecl-container">
            <div className="ecl-row">
              <div className="ecl-language-list__close ecl-col-12 ecl-col-lg-8 ecl-offset-lg-2"><button data-ecl-language-list-close="true" type="submit" className="ecl-language-list__close-button ecl-button ecl-button--ghost"><span className="ecl-button__container"><span className="ecl-button__label" data-ecl-label="true">Close</span><svg focusable="false" aria-hidden="true" data-ecl-icon="true" className="ecl-button__icon ecl-button__icon--after ecl-icon ecl-icon--s">
                      <use xlinkHref="/component-library/dist/media/icons.1dbe9812.svg#ui--close" />
                    </svg></span></button></div>
              <div className="ecl-language-list__title ecl-col-12 ecl-col-lg-8 ecl-offset-lg-2" id="ecl-language-list__title"><svg focusable="false" aria-hidden="true" className="ecl-language-list__title-icon ecl-icon ecl-icon--m">
                  <use xlinkHref="/component-library/dist/media/icons.1dbe9812.svg#general--generic-lang" />
                </svg>Select your language</div>
            </div>
            <div className="ecl-row">
              <div className="ecl-language-list__column ecl-col-12 ecl-col-lg-4 ecl-offset-lg-2">
                <ul className="ecl-language-list__list">
                  <li className="ecl-language-list__item "><a hrefLang="bg" rel="alternate" href="/example#language_bg" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="bg">български</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="es" rel="alternate" href="/example#language_es" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="es">español</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="cs" rel="alternate" href="/example#language_cs" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="cs">čeština</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="da" rel="alternate" href="/example#language_da" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="da">dansk</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="de" rel="alternate" href="/example#language_de" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="de">Deutsch</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="et" rel="alternate" href="/example#language_et" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="et">eesti</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="el" rel="alternate" href="/example#language_el" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="el">ελληνικά</a></li>
                  <li className="ecl-language-list__item ecl-language-list__item--is-active"><a hrefLang="en" rel="alternate" href="/example#language_en" className="ecl-language-list__link ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-after" lang="en"><span className="ecl-link__label">English</span> <svg focusable="false" aria-hidden="true" className="ecl-link__icon ecl-icon ecl-icon--xs">
                        <use xlinkHref="/component-library/dist/media/icons.1dbe9812.svg#ui--check" />
                      </svg></a></li>
                  <li className="ecl-language-list__item "><a hrefLang="fr" rel="alternate" href="/example#language_fr" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="fr">français</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="ga" rel="alternate" href="/example#language_ga" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="ga">Gaeilge</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="hr" rel="alternate" href="/example#language_hr" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="hr">hrvatski</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="it" rel="alternate" href="/example#language_it" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="it">italiano</a></li>
                </ul>
              </div>
              <div className="ecl-language-list__column ecl-col-12 ecl-col-lg-4">
                <ul className="ecl-language-list__list">
                  <li className="ecl-language-list__item "><a hrefLang="lv" rel="alternate" href="/example#language_lv" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="lv">latviešu</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="lt" rel="alternate" href="/example#language_lt" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="lt">lietuvių</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="hu" rel="alternate" href="/example#language_hu" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="hu">magyar</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="mt" rel="alternate" href="/example#language_mt" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="mt">Malti</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="nl" rel="alternate" href="/example#language_nl" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="nl">Nederlands</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="pl" rel="alternate" href="/example#language_pl" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="pl">polski</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="pt" rel="alternate" href="/example#language_pt" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="pt">português</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="ro" rel="alternate" href="/example#language_ro" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="ro">română</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="sk" rel="alternate" href="/example#language_sk" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="sk">slovenčina</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="sl" rel="alternate" href="/example#language_sl" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="sl">slovenščina</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="fi" rel="alternate" href="/example#language_fi" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="fi">suomi</a></li>
                  <li className="ecl-language-list__item "><a hrefLang="sv" rel="alternate" href="/example#language_sv" className="ecl-language-list__link ecl-link ecl-link--standalone" lang="sv">svenska</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
