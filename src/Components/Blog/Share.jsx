import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
    FacebookShareButton,
    FacebookIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    LinkedinShareButton,
    LinkedinIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from 'next-share';

const Share = ({ url, title }) => {
    const [more, setmore] = useState(true);
    return (
        <>
            <MediaDiv>
                <ButtonDiv
                    onClick={() => {
                        setmore(!more);
                    }}
                >
                    <span className="material-symbols-rounded">share</span>
                </ButtonDiv>
                <MoreDiv $more={more}>
                    <WhatsappShareButton
                        url={url}
                        title={title}
                        separator=":: "
                    >
                        <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                    <TelegramShareButton url={url} title={title}>
                        <TelegramIcon size={32} round />
                    </TelegramShareButton>
                    <FacebookMessengerShareButton url={url} appId={''}>
                        <FacebookMessengerIcon size={32} round />
                    </FacebookMessengerShareButton>
                    <PinterestShareButton url={url} media={title}>
                        <PinterestIcon size={32} round />
                    </PinterestShareButton>
                    <TwitterShareButton url={url} title={title}>
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <RedditShareButton url={url} title={title}>
                        <RedditIcon size={32} round />
                    </RedditShareButton>
                    <FacebookShareButton
                        url={url}
                        quote={title}
                        hashtag={'#JavStack'}
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <LinkedinShareButton url={url}>
                        <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                </MoreDiv>
            </MediaDiv>
        </>
    );
};

export default Share;

const MediaDiv = styled.div`
    margin: 2px;
    padding: 0px 5px;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
`;

const StyledMoreDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
    visibility: ${(props) => (props.$more ? 'collapse' : 'visible')};
`;

const MoreDiv = ({ $more, ...props }) => {
    return (
        <motion.div
            key={$more}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
        >
            <StyledMoreDiv $more={$more} {...props} />
        </motion.div>
    );
};

const ButtonDiv = styled.div`
    z-index: 10;
    border-radius: 50px;
    height: 32px;
    width: 32px;
    border: 2px solid var(--border-color);
    color: var(--secondary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--accent-color);
    cursor: pointer;
    user-select: none;
`;
