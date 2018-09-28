import React from "react"

import styled from 'styled-components'


const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "PT Sans Caption", sans-serif;
`

const FlexButton = styled.div`
    flex-direction: row;
`

const Image = styled.img`
    max-height: 250px;
    
`

const Exclusive = styled.h4`
    background: rgb(199, 4, 4);
    color: white;
    padding: 5px 10px;
    
`

const Phrase = styled.h1`
    align-items: center;
    text-align: center;
    color: rgb(17, 17, 17);
    font-weight: bold;
`

const Paragraph = styled.p`
    text-align: center;
    color: rgb(100, 100, 100);
`


export default () => <Flex>
    <Image src="https://pages2.dotdotdata.com/img/bbcutie-logo.png"/>
    
    <Exclusive>Exclusive</Exclusive>
    <Phrase>BOLD FLAVORS. SERIOUSLY SMOKED MEATS.™</Phrase>
    <Paragraph>For over 65 years of great food, friendly faces, and quick casual service, Bar-B-Cutie® SmokeHouse is second to none! We pride ourselves on the quality of our cooking, the contentment of our guests, and the continuity of our business. </Paragraph>
    <Paragraph>So when you have that familiar craving for a mouth-waterin’ meal, you need to Get Your Booty To Bar-B-Cutie!</Paragraph>
    <FlexButton>
        <p>Get to Know Us</p>
        <p>Read Our Story</p>
    </FlexButton>

</Flex>
