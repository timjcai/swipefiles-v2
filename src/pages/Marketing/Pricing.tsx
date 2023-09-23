import React, { FC } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import styled from "styled-components";
import {
    CenterColumn,
    PricingAdditionalQuestions,
    PricingHero,
    PricingFAQ,
} from "../../components/pricingpage";

export const Pricing = () => {
    return (
        <div>
            <Navbar />
            <CenterColumn>
                <PricingHero />
                <section>
                    <h2>Compare our plans</h2>
                </section>
                <section>
                    <PricingAdditionalQuestions />
                </section>
                <section>
                    <PricingFAQ />
                </section>
            </CenterColumn>
        </div>
    );
};
