import React, { FC } from "react";
import { QuoteBoldText, QuoteImg, QuoteText, QuoteWrapper } from ".";

type SectionQuoteProps = {
    name: string;
    image: string;
    testimonial: string;
};

export const SectionQuote: FC<SectionQuoteProps> = ({
    name,
    image,
    testimonial,
}) => {
    return (
        <QuoteWrapper>
            <QuoteImg src={image} />
            <div>
                <QuoteText>{testimonial}</QuoteText>
                <QuoteBoldText>{name}</QuoteBoldText>
            </div>
        </QuoteWrapper>
    );
};
