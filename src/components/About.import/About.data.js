import React from 'react';
import { GiGasMask, GiNoseSide, GiVirus } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  AboutSection,
  AboutWrapper,
  AboutHeading,
  AboutContainer,
  AboutCard,
  AboutCardInfo,
  AboutCardIcon,
  AboutCardPlan,
  AboutCardFeatures,
  AboutCardFeature
} from './About.elements';

function Abouts() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <AboutSection>
        <AboutWrapper>
          <AboutHeading>About COVID-19</AboutHeading>
          <AboutContainer>
            <AboutCard >
              <AboutCardInfo>
                <AboutCardIcon>
                  <GiNoseSide />
                </AboutCardIcon>
                <AboutCardPlan>Symptoms</AboutCardPlan>
                <AboutCardFeature>Learn about general COVID-19 symptoms.</AboutCardFeature>
                <AboutCardFeatures>
                  <AboutCardFeature>Fever/Chills</AboutCardFeature>
                  <AboutCardFeature>Cough/Shortness of breath</AboutCardFeature>
                  <AboutCardFeature>Fatigue/Muscle or body aches</AboutCardFeature>
                  <AboutCardFeature>Loss of taste/smell</AboutCardFeature>
                </AboutCardFeatures>
              </AboutCardInfo>
            </AboutCard>
            <AboutCard >
              <AboutCardInfo>
                <AboutCardIcon>
                  <GiVirus />
                </AboutCardIcon>
                <AboutCardPlan>What is COVID-19?</AboutCardPlan>
                <AboutCardFeature>Learn about the basics to what COVID is</AboutCardFeature>
                <AboutCardFeatures>
                  <AboutCardFeature>COVID-19 is caused by a coronavirus called SARS-CoV-2. Older adults and people who have severe underlying medical conditions like heart or lung disease or diabetes seem to be at higher risk for developing more serious complications.</AboutCardFeature>
                </AboutCardFeatures>
              </AboutCardInfo>
            </AboutCard>
            <AboutCard >
              <AboutCardInfo>
                <AboutCardIcon>
                  <GiGasMask/>
                </AboutCardIcon>
                <AboutCardPlan>Prevention</AboutCardPlan>
                <AboutCardFeature>Learn the preventions of COVID-19</AboutCardFeature>
                <AboutCardFeatures>
                  <AboutCardFeature>Wear a mask</AboutCardFeature>
                  <AboutCardFeature>Physical distance from others</AboutCardFeature>
                  <AboutCardFeature>Wash hands regularly</AboutCardFeature>
                  <AboutCardFeature>Avoid close contact with those that are sick</AboutCardFeature>
                  <AboutCardFeature>Get a vaccine if it is availble to you</AboutCardFeature>
                </AboutCardFeatures>
              </AboutCardInfo>
            </AboutCard>
          </AboutContainer>
        </AboutWrapper>
      </AboutSection>
    </IconContext.Provider>
  );
}
export default Abouts;
