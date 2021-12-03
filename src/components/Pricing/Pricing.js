import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCarnivoreMouth, GiCrystalBars, GiCupcake, GiEntMouth, GiGasMask, GiMouthWatering, GiNoseSide, GiVirus } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>About COVID-19</PricingHeading>
          <PricingContainer>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiNoseSide />
                </PricingCardIcon>
                <PricingCardPlan>Symptoms</PricingCardPlan>
                <PricingCardFeature>Learn about general COVID-19 symptoms.</PricingCardFeature>
                <PricingCardFeatures>
                  <PricingCardFeature>Fever/Chills</PricingCardFeature>
                  <PricingCardFeature>Cough/Shortness of breath</PricingCardFeature>
                  <PricingCardFeature>Fatigue/Muscle or body aches</PricingCardFeature>
                  <PricingCardFeature>Loss of taste/smell</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiVirus />
                </PricingCardIcon>
                <PricingCardPlan>What is COVID-19?</PricingCardPlan>
                <PricingCardFeature>Learn about the basics to what COVID is</PricingCardFeature>
                <PricingCardFeatures>
                  <PricingCardFeature>COVID-19 is caused by a coronavirus called SARS-CoV-2. Older adults and people who have severe underlying medical conditions like heart or lung disease or diabetes seem to be at higher risk for developing more serious complications.</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard >
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiGasMask/>
                </PricingCardIcon>
                <PricingCardPlan>Prevention</PricingCardPlan>
                <PricingCardFeature>Learn the preventions of COVID-19</PricingCardFeature>
                <PricingCardFeatures>
                  <PricingCardFeature>Wear a mask</PricingCardFeature>
                  <PricingCardFeature>Physical distance from others</PricingCardFeature>
                  <PricingCardFeature>Wash hands regularly</PricingCardFeature>
                  <PricingCardFeature>Avoid close contact with those that are sick</PricingCardFeature>
                  <PricingCardFeature>Get a vaccine if it is availble to you</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
