import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <Component>
    <div className="wrapper">
      <div className="line"><span /></div>
      <h1>
      <StaticImage
        src="../images/header-logo.png"
        quality={100}
        layout="constrained"
        formats={["AUTO", "WEBP", "AVIF"]}
        placeholder="tracedSVG"
        alt="Ventura Nationals"
      />
      </h1>
      <div className="line"><span /></div>
    </div>
  </Component>
)

export default Header

const Component = styled.header`
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 95vw;
    margin: 1rem auto 0;
  }
  .line {
    display: flex;
    justify-content: center;
    flex: 1.3;
    span {
      border-top: 3px solid #fff;
      width: 100%;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
  h1 {
    flex: 1;
    text-align: center;
    margin-bottom: 0;
    padding: 0 15px;
    .gatsby-image-wrapper {
      margin-bottom: 0;
    }
    @media (max-width: 767px) {
      max-width: 50vw;
      margin: 0 auto;
    }
  }
`