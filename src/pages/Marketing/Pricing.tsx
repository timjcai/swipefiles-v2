import React, { FC } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import styled from "styled-components";
import {
    CenterColumn,
    CenteredHeading,
    CompareColumn,
    CompareColumnWrapper,
    PricePerMonth,
    PricingCTAButton,
} from "../../components/pricingpage";

export const Pricing = () => {
    return (
        <div>
            <Navbar />
            <CenterColumn>
                <CenteredHeading>Pricing</CenteredHeading>
                <CompareColumnWrapper>
                    <CompareColumn>
                        <h2>Free</h2>
                        <p>
                            For individuals or very small teams just getting
                            started with Swipe.
                        </p>
                        <PricePerMonth price={"FREE"} />
                        <PricingCTAButton
                            primaryCTA={false}
                            text={"Get Started"}
                        />
                    </CompareColumn>
                    <CompareColumn>
                        <h2>Premium</h2>
                        <p>Unlock the full potential of Swipe with Premium.</p>
                        <PricePerMonth price={20} />
                        <PricingCTAButton
                            primaryCTA={true}
                            text={"14-day free trial"}
                        />
                    </CompareColumn>
                    <CompareColumn>
                        <h2>Lifetime</h2>
                        <p>
                            For the dedicated users who want a lifetime of
                            premium benefits.
                        </p>
                        <PricePerMonth price={45} />
                        <PricingCTAButton
                            primaryCTA={false}
                            text={"Limited availability"}
                        />
                    </CompareColumn>
                    <CompareColumn>
                        <h2>Business</h2>
                        <p>
                            Tailored solutions for growing teams and businesses.
                        </p>
                        <PricePerMonth price={100} />
                        <PricingCTAButton
                            primaryCTA={false}
                            text={"Contact Sales"}
                        />
                    </CompareColumn>
                </CompareColumnWrapper>
            </CenterColumn>
        </div>
    );
};
