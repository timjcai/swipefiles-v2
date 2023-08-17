import React, { useContext } from "react";
import styled from "styled-components";
import { Register } from "../components/auth/Register";
import { UserContext } from "../context";
import { Logout } from "../components/auth";
import { Icon } from "../components/common/Icon";

export const LandingPage = () => {
    const user = useContext(UserContext);

    return (
        <LandingPageWrapper>
            <StyledHeader>
                <TwoColumn>
                    <ColumnTextLeft>
                        <Badge className="badge">Desktop Only</Badge>
                        <div className="valueprop">
                            <LPHeading1>
                                Capture Swipefiles, Flexibly Sort
                            </LPHeading1>
                        </div>
                        <div className="actions">
                            <button className="Sign Up">Sign Up</button>
                            <button className="How it works">
                                <Icon label="Play" />
                                <span> </span>
                                How it works
                            </button>
                        </div>
                        <InlineRow>
                            <p>Get started for free</p>
                            <Icon label="Next" />
                        </InlineRow>
                        <div></div>
                    </ColumnTextLeft>
                    <div className="column -right">
                        <LPImageContainer>
                            <LPImage src="https://cdn.dribbble.com/userupload/3178839/file/original-38cfc7b903e1ab702c114ff972d499f4.jpg?resize=752x" />
                        </LPImageContainer>
                    </div>
                </TwoColumn>
            </StyledHeader>
            <StyledSection>
                <TwoColumn>
                    <ColumnTextLeft>
                        <LPHeading2>Feature 1</LPHeading2>
                        <LPParagraph>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Accusantium commodi modi earum magnam
                            aspernatur rerum mollitia, ducimus perspiciatis, hic
                            omnis, nulla quaerat eos?
                        </LPParagraph>
                        <Badge>Hello</Badge>
                        <SectionQuote />
                    </ColumnTextLeft>
                    <div className="column -right">
                        <LPImage src="https://cdn.dribbble.com/users/5438803/screenshots/15095423/media/ab0e026c02b5310a574d4346691d29fc.jpg?resize=1600x1200&vertical=center" />
                    </div>
                </TwoColumn>
            </StyledSection>
            <StyledSection>
                <TwoColumn>
                    <div className="column -left">
                        <LPImage src="https://cdn.dribbble.com/users/5438803/screenshots/15095423/media/ab0e026c02b5310a574d4346691d29fc.jpg?resize=1600x1200&vertical=center" />
                    </div>
                    <ColumnTextRight>
                        {" "}
                        <LPHeading2>Feature 1</LPHeading2>
                        <LPParagraph>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Accusantium commodi modi earum magnam
                            aspernatur rerum mollitia, ducimus perspiciatis, hic
                            omnis, nulla quaerat eos?
                        </LPParagraph>
                        <Badge>Hello</Badge>
                        <SectionQuote />
                    </ColumnTextRight>
                </TwoColumn>
            </StyledSection>
            <StyledSection>
                <TwoColumn>
                    <ColumnTextLeft>
                        {" "}
                        <LPHeading2>Feature 1</LPHeading2>
                        <LPParagraph>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Accusantium commodi modi earum magnam
                            aspernatur rerum mollitia, ducimus perspiciatis, hic
                            omnis, nulla quaerat eos?
                        </LPParagraph>
                        <Badge>Hello</Badge>
                        <SectionQuote />
                    </ColumnTextLeft>
                    <div className="column -right">
                        <LPImage src="https://cdn.dribbble.com/users/5438803/screenshots/15095423/media/ab0e026c02b5310a574d4346691d29fc.jpg?resize=1600x1200&vertical=center" />
                    </div>
                </TwoColumn>
            </StyledSection>
            <p> User logged in: {user?.email}</p>
            <p> User id: {user?.uid}</p>
            <Logout />
            {/* <section>
                <h1>Hero Section</h1>
            </section>
            <section>
                <h1>Features section</h1>
            </section>
            <section>
                <h1>Footer</h1>
            </section> */}
        </LandingPageWrapper>
    );
};

const LandingPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    background-color: #ffffff;
    color: #000;
`;

const LPHeading1 = styled.h1`
    font-weight: 700;
    font-size: 48px;
    line-height: 1.25;
    color: #000;
    letter-spacing: -0.025em;
`;

const LPHeading2 = styled.h2`
    font-weight: 700;
    font-size: 48px;
    line-height: 1.25;
    color: #000;
`;

const LPStrongParagraph = styled.p`
    margin-left: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: #000;
`;

const LPParagraph = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.6;
    color: #333;
`;

const Badge = styled.div`
    display: inline-block;
    padding: 4px 12px 5px 12px;
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.35;
    font-size: 12px;
    color: #0669ff;
    background: #e2eeff;
    border-radius: 20px;
`;

const InlineRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

const StyledHeader = styled.header`
    margin-top: 250px;
`;

const TwoColumn = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1224px;
    padding: 0 8%;
    margin: 0 auto;
`;

const StyledSection = styled.section`
    margin-bottom: 200px;
`;

const LPImageContainer = styled.div`
    display: flex;
    padding: 0.25rem;
    border-radius: 1rem;
`;

const LPImage = styled.img`
    max-width: 600px;
    border-radius: 1rem;
    border: 1px solid #1c19171a;
`;

const ColumnTextRight = styled.div`
    margin-left: 50px;
`;

const ColumnTextLeft = styled.div`
    margin-right: 50px;
`;

export const SectionQuote = () => {
    return (
        <QuoteWrapper>
            <QuoteImg src="https://cleanshot.com/img/tylertringas.44f2409a.webp" />
            <div>
                <QuoteText>
                    Boosting my creative flow, Swipefile app is a must-have!
                    🚀🎨
                </QuoteText>
                <QuoteBoldText>Emily Masters</QuoteBoldText>
            </div>
        </QuoteWrapper>
    );
};

const QuoteWrapper = styled.div`
    max-width: 410px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    padding: 4px 16px;
    text-align: left;
    background: #f6f6f6;
    border-radius: 18px;
`;

const QuoteImg = styled.img`
    width: 64px;
    height: 64px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 24px;
    overflow: hidden;
    border-radius: 8px;
`;

const QuoteText = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 8px;
    color: #000;
`;

const QuoteBoldText = styled.p`
    margin-top: 1px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.35;
    color: #000;
`;
