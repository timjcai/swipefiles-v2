import React, { FC } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import styled from "styled-components";
import {
    CenterColumn,
    CenteredHeading,
    CompareColumn,
    CompareColumnWrapper,
    Grid2x2,
    PricePerMonth,
    PricingCTAButton,
    InlineRow,
    FeatureListParagraph,
} from "../../components/pricingpage";
import { Icon } from "../../components/common";

const freeFeatures = [
    "Unlimited bases",
    "1,000 records per base",
    "Up to 5 editors",
    "1 GB of attachments per base",
    "100 automation runs",
    "Interface Designer",
];

const premiumFeatures = [
    "50,000 records per base",
    "25,000 automation runs",
    "10 GB of attachments per base",
    "Standard sync integrations",
    "Extensions",
    "Gantt and timeline view",
    "Expanded color, formatting, and calendar options",
];

const lifetimeFeatures = [
    "125,000 records per base",
    "100,000 automation runs",
    "100 GB of attachments per base",
    "Premium sync integrations",
    "Verified data",
    "Two-way sync",
    "Admin panel",
    "SAML-based single sign-on",
];

const businessFeatures = [
    "500,000 records per base",
    "500,000 automation runs",
    "1,000 GB of attachments per base",
    "On-premises sync integrations",
    "Enterprise Hub",
    "Enhanced security and admin controls",
    "Enterprise API",
    "Extension and integration management",
    "Audit logs and DLP",
];

export const Pricing = () => {
    return (
        <div>
            <Navbar />
            <CenterColumn>
                <CenteredHeading>Pricing</CenteredHeading>
                <CompareColumnWrapper>
                    <CompareColumn>
                        <h2>Free</h2>
                        <p style={{ height: "64px" }}>
                            For individuals or very small teams just getting
                            started with Swipe.
                        </p>
                        <PricePerMonth price={"FREE"} />
                        <PricingCTAButton
                            primaryCTA={false}
                            text={"Get Started"}
                        />
                        <div>
                            <p>Free includes:</p>
                            <Grid2x2>
                                {freeFeatures.map((item) => {
                                    return (
                                        <InlineRow>
                                            <Icon label={"Included"} />
                                            <FeatureListParagraph>
                                                {item}
                                            </FeatureListParagraph>
                                        </InlineRow>
                                    );
                                })}
                            </Grid2x2>
                        </div>
                    </CompareColumn>
                    <CompareColumn>
                        <h2>Premium</h2>
                        <p style={{ height: "64px" }}>
                            Unlock the full potential of Swipe with Premium.
                        </p>
                        <PricePerMonth price={20} />
                        <PricingCTAButton
                            primaryCTA={true}
                            text={"14-day free trial"}
                        />
                        <div>
                            <p>everything in Free, plus:</p>
                            <Grid2x2>
                                {premiumFeatures.map((item) => {
                                    return (
                                        <InlineRow>
                                            <Icon label={"Included"} />
                                            <FeatureListParagraph>
                                                {item}
                                            </FeatureListParagraph>
                                        </InlineRow>
                                    );
                                })}
                            </Grid2x2>
                        </div>
                    </CompareColumn>
                    <CompareColumn>
                        <h2>Lifetime</h2>
                        <p style={{ height: "64px" }}>
                            For the dedicated users who want a lifetime of
                            premium benefits.
                        </p>
                        <PricePerMonth price={45} />
                        <PricingCTAButton
                            primaryCTA={false}
                            text={"Limited availability"}
                        />
                        <div>
                            <p>everything in Premium, plus:</p>
                            <Grid2x2>
                                {lifetimeFeatures.map((item) => {
                                    return (
                                        <InlineRow>
                                            <Icon label={"Included"} />
                                            <FeatureListParagraph>
                                                {item}
                                            </FeatureListParagraph>
                                        </InlineRow>
                                    );
                                })}
                            </Grid2x2>
                        </div>
                    </CompareColumn>
                    <CompareColumn>
                        <h2>Business</h2>
                        <p style={{ height: "64px" }}>
                            Tailored solutions for growing teams and businesses.
                        </p>
                        <PricePerMonth price={100} />
                        <PricingCTAButton
                            primaryCTA={false}
                            text={"Contact Sales"}
                        />
                        <div>
                            <p>everything in Premium, plus:</p>
                            <Grid2x2>
                                {businessFeatures.map((item) => {
                                    return (
                                        <InlineRow>
                                            <Icon label={"Included"} />
                                            <FeatureListParagraph>
                                                {item}
                                            </FeatureListParagraph>
                                        </InlineRow>
                                    );
                                })}
                            </Grid2x2>
                        </div>
                    </CompareColumn>
                </CompareColumnWrapper>
                <section>
                    <h2>Compare our plans</h2>
                </section>
                <section>
                    <h2>Additional Questions?</h2>
                </section>
                <section>
                    <h2>FAQ?</h2>
                </section>
            </CenterColumn>
        </div>
    );
};
