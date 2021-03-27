import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [email, setEmail] = React.useState("")
  const [hasErrors, setHasErrors] = React.useState(false)

  const handleClick = async () => {
    const res = await fetch("/.netlify/functions/create-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email })
    })
    const Json = await res.json()
    if (Json.data.created_date) {
      alert("Thanks for subscribing! We will send you an email when we have more info to share.")
      setEmail("")
      setHasErrors(false)
    }
    if (Json.errors || !Json.data.created_date) {
      console.log(Json)
      if (Json.data[0].error_key === "http.status.email_address.conflict") {
        alert("Thanks for subscribing! We will send you an email when we have more info to share.")
        setEmail("")
        setHasErrors(false)
      } else {
        alert("Something went wrong. Please double check that you have entered a valid email address, or try again later");
        setHasErrors(true)
      }
    }
  }
  return (
    <Layout>
      <SEO title="Home" />
      <Page>
        <StaticImage
          src="../images/main-logo-1024.jpg"
          quality={100}
          layout="constrained"
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Lets cruise Ventura Nationals 2021"
          style={{ marginBottom: `1.45rem` }}
        />
        <div className="row">
          <div className="ldw">
            <StaticImage
              src="../images/laborday-weekend.png"
              quality={100}
              layout="constrained"
              placeholder="blurred"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Labor Day Weekend"
              style={{ marginBottom: `1.45rem` }}
            />
          </div>
          <div className="std">
            <StaticImage
              src="../images/save-the-date.png"
              quality={100}
              layout="constrained"
              placeholder="blurred"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Save the date"
              style={{ marginBottom: `1.45rem` }}
            />
          </div>
        </div>
        <p className="h2">MORE INFO COMING SOON!</p>
        <form>
          <label htmlFor="Email">
            SIGN UP TO RECEIVE UPDATES<br />
            <input id="Email" 
              name="email" 
              type="email" 
              placeholder="Email" 
              data-errors={hasErrors} 
              value={email} 
              onChange={e => setEmail(e.target.value)} />
          </label>
          <button type="button" onClick={handleClick}>SUBSCRIBE</button>
        </form>
        <div className="social">
          <p>FOLLOW US</p>
          <div className="p">
            <a href="https://www.instagram.com/ventura_nationals/"
              target="_blank"
              rel="noreferrer">
              <StaticImage
                src="../images/instagram.png"
                quality={100}
                width={40}
                placeholder="tracedSVG"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Instagram"
                style={{ marginBottom: `0` }}
              />
            </a>
            <a href="https://www.facebook.com/Ventura-Nationals-201142989905881"
              target="_blank"
              rel="noreferrer">
              <StaticImage
                src="../images/facebook.png"
                quality={100}
                width={40}
                placeholder="tracedSVG"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Instagram"
                style={{ marginBottom: `0` }}
              />
            </a>
          </div>
        </div>
      </Page>

    </Layout>
  )
}

export default IndexPage

const Page = styled.div`
  .row {
    display: flex;
    flex-direction: row;
    .ldw {
      flex: 1.7;
      text-align: right;
      padding-left: 30px;
    }
    .std {
      flex: 1;
      padding-right: 30px;
      @media (max-width: 500px) {
        padding-right: 15px;
        padding-top: 5px;
      }
    }
  }
  p.h2 {
    font-family: var(--font-asto);
    font-size: 4.5rem;
    margin: 1.45rem auto;
    padding-left: 30px;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 4rem;
      padding-left: 0;
    }
    @media (max-width: 767px) {
      font-size: 2.5rem;
    }
    @media (max-width: 320px) {
      margin: 0.75rem auto;
      font-size: 2rem;
    }
  }
  form {
    display: block;
    width: 480px;
    max-width: 100%;
    margin: auto;
    padding-top: 1.45rem;
  }
  label {
    color: var(--color-red);
    display: block;
    font-family: var(--font-asto);
    font-size: 2rem;
    @media (max-width: 320px) {
      font-size: 1.5rem;
    }
  }
  input {
    display: block;
    font-family: sans-serif;
    font-size: 1.2rem;
    margin: 1rem auto 1.45rem;
    padding: 10px 5px 10px 15px;
    width: 100%;
    &[data-errors="true"] {
      color: red;
    }
  }
  button {
    background-color: var(--color-red);
    border: 0;
    color: #ffffff;
    display: block;
    font-family: var(--font-asto);
    font-size: 2.2rem;
    margin-left: auto;
    padding: 15px 30px;
    :hover {
      cursor: pointer;
    }
  }
  .social {
    font-family: var(--font-asto);
    font-size: 2rem;
    padding-top: 3rem;
    text-align: center;
    p, div.p {
      margin-bottom: 10px;
      a {
        display: inline-block;
        margin: 0 5px;
      }
    }
  }
`
