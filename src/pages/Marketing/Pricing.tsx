import React, { FC } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import styled from "styled-components";
import { CenterColumn, PricingHero } from "../../components/pricingpage";
import PricingFAQ from "../../components/pricingpage/PricingFAQ";

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
                    <h2>Additional Questions?</h2>
                </section>
                <section>
                    <h2>FAQ?</h2>
                    <PricingFAQ />
                </section>
            </CenterColumn>
        </div>
    );
};
