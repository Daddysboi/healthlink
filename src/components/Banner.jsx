import React from "react";
import styled from "styled-components";
import img from "../../src/assets/images/mil.jpg";

const StyledBanner = styled.div`
  background-image: url(${img});
  background-size: cover;
  top: -5rem;
  height: 45rem;
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Inter", sans-serif;
`;
const StyledBannerHeader = styled.h1`
  margin-top: 1rem;
  width: 65vw;
  font-weight: 600;
  line-height: 5rem;
  letter-spacing: 0.24px;
  font-size: 4rem;
  color: #a0a6b6;
`;

const StyledBannerDesc = styled.p`
  width: 65vw;
  margin: 1rem 0 1rem 0;
  font-weight: 300;
  line-height: 1.5rem;
  letter-spacing: 0.12px;
  font-size: 1.22rem;
  color: #fff;
`;
const StyledButton = styled.button`
  border: 2px solid #533c8e;
  border-radius: 0.4rem;
  color: #fff;
  padding: 0.1rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 30px;
  background: #533c8e;
  margin-right: 1rem;
`;
const StyledButton2 = styled.button`
  border: 2px solid #533c8e;
  border-radius: 0.4rem;
  color: #fff;
  padding: 0.1rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 30px;
  background: linear-gradient(to top, #363745, rgba(255, 255, 255, 0));
`;
const StyledRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.4rem;
`;
const StyledTip = styled.p`
  font-size: 2rem;
`;
const StyledRateNo = styled.p`
  font-size: 2rem;
`;
const StyledStar = styled.p`
  text-align: left;
`;
const StyledStarDesc = styled.p`
  text-align: left;
  font-size: 0.8rem;
`;

const Banner = () => {
  return (
    <StyledBanner>
      <div>
        <StyledBannerHeader>
          Own your<span> health</span> <br />
          and live your best life
        </StyledBannerHeader>
        <StyledBannerDesc>
          ...revamping Medical Care through the power of decentralization
        </StyledBannerDesc>
        <div className="button-container">
          <StyledButton
            className="button-hire-left"
            onClick={() => {
              document
                .getElementById("contact__form")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Link DiD
          </StyledButton>
          <StyledButton2
            className="button-hire-left"
            onClick={() => {
              document
                .getElementById("contact__form")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Meet consultant
          </StyledButton2>
        </div>
        <StyledRating>
          <StyledRateNo className="review__star">4.99</StyledRateNo>
          <div className="review__tip">
            <StyledStar className="stars">
              &#9733;&#9733;&#9733;&#9733;&#9733;{" "}
            </StyledStar>
            <StyledStarDesc>
              reviews on<span> App store</span>
            </StyledStarDesc>
          </div>
        </StyledRating>
      </div>
    </StyledBanner>
  );
};

export default Banner;
