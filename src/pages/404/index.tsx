import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Wrapper from '../../components/wrap';
import StageBack from '../../components/StageBack';
import { useI18n } from '../../global/i18n';

import $ from './style.scss';
import dict from './i18n.d.yml';

const NotFound: React.FC = () => {
  const { t } = useI18n(dict);
  const { link, src } = useRouter().query;
  const [showGuide, setGuideVisibility] = useState(false);
  const [guideLink, setGuideLink] = useState(<></>);
  const [guideLinkURL, setGuideLinkURL] = useState('/');

  useEffect(() => {
    const parsedLink = link || '';
    const parsedSrc = src || '';

    let reqText = '';
    let reqURL = '';
    let showLink = false;

    if (parsedSrc === 'go') {
      // Not found in short URL(go) service
      reqText = `${parsedSrc}.wldh.org/${parsedLink}`;
      reqURL = `https://${parsedSrc}.wldh.org/${parsedLink}`;
      showLink = true;
    } else if (parsedSrc === 'www') {
      // Fall back from wldh.org, poss to www service
      window.location.replace(`https://www.wldh.org/${parsedLink}`);
    } else if (
      parsedLink.length === 0
      && window.location.href !== 'https://www.wldh.org/404'
      && window.location.href !== 'https://www.wldh.org/404.html'
    ) {
      // Not found in www service
      reqText = `www.wldh.org${window.location.pathname}`;
      reqURL = `https://www.wldh.org${window.location.pathname}`;
      showLink = true;
    }

    if (showLink) {
      setGuideVisibility(true);
      setGuideLink(<a className={$.linkBody} href={reqURL}>{reqText}</a>);
      setGuideLinkURL(reqURL);
    }
  }, [link, src]);

  return (
    <Wrapper
      title={t('어... 모르겠어요.')}
      description={t('찾으시는 페이지가 존재하지 않아요.')}
      thumbnailURL="/images/banner-404.png"
      useFavicoff
      allowCrawling={false}
      requiredFeatures={[]}
    >
      <StageBack
        header={t('어... 모르겠어요.')}
        detail={t('찾으시는 페이지가 존재하지 않아요.')}
      >
        {
          showGuide && (
            <>
              <div className={$.linkGuide}>
                <span className={$.linkGuideHeader}>{`${t('가려던 페이지')}:`}</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {guideLink}
              </div>
              <br />
              <a className={$.retry} href={guideLinkURL}>
                {t('전에는 이런 적이 없었는데... 다시 한 번 시도해보시겠어요?')}
              </a>
            </>
          )
        }
        <a className={$.goToHome} href="/">
          {showGuide ? t('아니면 여기를') : t('여기를')}
          &nbsp;
          {t('눌러서 첫 페이지로 가시겠어요?')}
        </a>
      </StageBack>
    </Wrapper>
  );
};

export default NotFound;
