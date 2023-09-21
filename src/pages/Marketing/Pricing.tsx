import React, { FC } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import styled from "styled-components";
import {
    CenterColumn,
    CenteredHeading,
    CompareColumn,
    CompareColumnWrapper,
    PricePerMonth,
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
                    </CompareColumn>
                    <CompareColumn>
                        <h2>Premium</h2>
                        <p>Unlock the full potential of Swipe with Premium.</p>
                        <PricePerMonth price={20} />
                    </CompareColumn>
                    <CompareColumn>
                        <h2>Lifetime</h2>
                        <p>
                            For the dedicated users who want a lifetime of
                            premium benefits.
                        </p>
                        <PricePerMonth price={45} />
                    </CompareColumn>
                    <CompareColumn>
                        <h2>Business</h2>
                        <p>
                            Tailored solutions for growing teams and businesses.
                        </p>
                        <PricePerMonth price={100} />
                    </CompareColumn>
                </CompareColumnWrapper>
            </CenterColumn>
        </div>
    );
};
