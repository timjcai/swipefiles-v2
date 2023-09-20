import React from "react";
import { Logout } from "../../components/auth";
import { Icon } from "../../components/common/Icon";
import {
    Badge,
    ColumnTextLeft,
    ColumnTextRight,
    InlineRow,
    LPHeading1,
    LPHeading2,
    LPImage,
    LPImageContainer,
    LPParagraph,
    LandingPageWrapper,
    SectionQuote,
    StyledHeader,
    StyledSection,
    TwoColumn,
} from "../../components/landingpage";
import { useAuth } from "../../hooks/useAuth";
import { Navbar } from "../../components/navbar/Navbar";

const fakeData = {
    image: "https://cleanshot.com/img/tylertringas.44f2409a.webp",
    name: "Emily Masters",
    testimonial:
        "Boosting my creative flow, Swipefile app is a must-have! 🚀🎨",
};

export const LandingPage = () => {
    const user = useAuth();
    return (
        <LandingPageWrapper>
            <Navbar />
            <StyledHeader>
                <TwoColumn>
                    <ColumnTextLeft>
                        <Badge className="badge">Desktop Only</Badge>
                        <div className="valueprop">
                            <LPHeading1>Curate, Compile, Reshare</LPHeading1>
                            <p>Collect content from anywhere on the Internet</p>
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
                        <LPHeading2>Save links</LPHeading2>
                        <LPParagraph>
                            Save links from blogs, TikTok videos, Instagram
                            posts, reddit threads and more within 3 seconds from
                            any device.
                        </LPParagraph>
                        <Badge>Hello</Badge>
                        <SectionQuote
                            name={fakeData.name}
                            testimonial={fakeData.testimonial}
                            image={fakeData.image}
                        />
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
                        <LPHeading2>Search your database</LPHeading2>
                        <LPParagraph>
                            Say goodbye to folders, and hello to smart tagging
                            and searching. Organising and saving interesting
                            links should be easy
                        </LPParagraph>
                        <Badge>Hello</Badge>
                        <SectionQuote
                            name={fakeData.name}
                            testimonial={fakeData.testimonial}
                            image={fakeData.image}
                        />
                    </ColumnTextRight>
                </TwoColumn>
            </StyledSection>
            <StyledSection>
                <TwoColumn>
                    <ColumnTextLeft>
                        <LPHeading2>Create boards, tags and lists</LPHeading2>
                        <LPParagraph>
                            Organise your swipes at a later date, add tags, add
                            notes, compile them into lists and boards.
                            Swipefiles is the number #1 tool for curating
                            content on the internet.
                        </LPParagraph>
                        <Badge>Hello</Badge>
                        <SectionQuote
                            name={fakeData.name}
                            testimonial={fakeData.testimonial}
                            image={fakeData.image}
                        />
                    </ColumnTextLeft>
                    <div className="column -right">
                        <LPImage src="https://cdn.dribbble.com/users/5438803/screenshots/15095423/media/ab0e026c02b5310a574d4346691d29fc.jpg?resize=1600x1200&vertical=center" />
                    </div>
                </TwoColumn>
            </StyledSection>
            <p> User logged in: {user?.email}</p>
            <p> User id: {user?.uid}</p>
            <Logout />
        </LandingPageWrapper>
    );
};
