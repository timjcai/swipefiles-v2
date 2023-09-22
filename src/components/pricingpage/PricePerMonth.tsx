import React, { FC } from "react";
import styled from "styled-components";

type PricePerMonthProps = {
    price: number | "FREE";
};

export const PricePerMonth: FC<PricePerMonthProps> = ({ price }) => {
    let displayPrice;
    const priceIsNumber = typeof price === "number";
    if (priceIsNumber) {
        displayPrice = `$${price}`;
    } else {
        displayPrice = "FREE";
    }

    return (
        <>
            <PriceWrapper>
                <HeadlinePrice>{displayPrice}</HeadlinePrice>
                <DescriptorText>
                    {priceIsNumber && "per seat/month billed annually"}
                </DescriptorText>
            </PriceWrapper>
            <div style={{ marginBottom: "24px" }}>
                {priceIsNumber
                    ? `$${price * 1.2} billed monthly`
                    : "no monthly charge"}
            </div>
        </>
    );
};

const PriceWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;

const HeadlinePrice = styled.div`
    font-size: 4rem;
    font-weight: 475;
    letter-spacing: -0.2rem;
`;

const DescriptorText = styled.div`
    line-height: 1.25;
`;
