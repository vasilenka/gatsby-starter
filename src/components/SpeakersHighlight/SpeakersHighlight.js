import styles from "./SpeakersHighlight.module.scss"
import React from "react"
import cx from "classnames"
import { Link } from "gatsby"

import Text from "../../primitives/Text/Text"
import Container from "../../layouts/Container/Container"
import Box from "../Box/Box"
import Speaker from "../Speaker/Speaker"

import SectionLink from "../SectionLink/SectionLink"
import { KeynoteSpeakers } from "./../AllSpeakers/AllSpeakers"

const SpeakersHighlight = ({ className, ...restProps }) => {
  return (
    <Box className={cx(styles.root)}>
      <Container narrow className={styles.container}>
        <Text
          heading1
          component="h2"
          style={{ width: "100%", textAlign: "center", marginBottom: "64px" }}>
          Speakers Highlights
        </Text>

        <div>
          <Text
            heading4Alt
            component="h3"
            className={styles.subtitle}
            style={{ textAlign: "center" }}>
            Keynote Speaker
          </Text>
          <Link to="/speakers#keynote-speakers">
            <KeynoteSpeakers noHeader />
          </Link>

          <Text
            heading4Alt
            component="h3"
            className={styles.subtitle}
            style={{ textAlign: "center" }}>
            Mayors
          </Text>

          <Text heading5 component="h3" className={styles.mayorsTitle}>
            Cambodia
          </Text>
          <Link to="/speakers#cambodia">
            <div
              className={styles.speakerContainer}
              style={{ marginBottom: "48px" }}>
              <Speaker
                name="H. E. Prak Sovann"
                job="Governor of Preah Vihear Province"
              />
            </div>
          </Link>

          <Text heading5 component="h3" className={styles.mayorsTitle}>
            Indonesia
          </Text>
          <Link to="/speakers#indonesia">
            <div
              className={styles.speakerContainer}
              style={{ marginBottom: "48px" }}>
              <Speaker
                name="Mr. H. Ahyar Abduh"
                job="Mayor of Mataram (Nusa Tenggara Barat)"
              />
              <Speaker
                name="Mrs. Hj. Badingah, S.sos."
                job="Regent of Gunung Kidul (Yogyakarta)"
              />
              <Speaker
                name="Mr. F.X. Hadi Rudyatmo"
                job="Mayor of Surakarta (Central Java)"
              />
              <Speaker
                name="Mr. H. Ibnu Sina, S.Pi., M.Si."
                job="Mayor of Banjarmasin (South Kalimantan)"
              />
              <Speaker
                name="Dr. H. Najmul Akhyar, S.H., M.H."
                job="Regent of Lombok Utara (Nusa Tenggara Barat)"
              />
              <Speaker
                name="Dr.(H.C.) Ir. Tri Rismaharini, M.T.*"
                job="Mayor of Surabaya (East Java)"
              />
            </div>
          </Link>

          {/* <Text heading5 component="h3" className={styles.mayorsTitle}>Philippines</Text>
          <Link to="/speakers#philippines">
            <div className={styles.speakerContainer}>
              <Speaker name="Mr. James B. Pooten, Jr." job="Mayor of Municipality of Sagada" />
            </div>
          </Link>

          <Text heading5 component="h3" className={styles.mayorsTitle}>South Korea (to be confirmed)</Text>
          <div className={styles.speakerContainer}> */}
          {/* <Speaker name="Mayor from South Korea*" /> */}
          {/* </div> */}

          <Text heading5 component="h3" className={styles.mayorsTitle}>
            Thailand
          </Text>
          <Link to="/speakers#thailand">
            <div
              className={styles.speakerContainer}
              style={{ marginBottom: "48px" }}>
              <Speaker
                name="Mr. Pongsak Yingchoncharoen"
                job="Mayor of Yala City Municipality"
              />
            </div>
          </Link>
        </div>

        <footer style={{ paddingTop: "48px" }}>
          <Text
            heading5
            component="p"
            style={{ marginBottom: "48px", paddingTop: "12px" }}>
            (*) To be confirmed
          </Text>
          <SectionLink to={"/speakers"}>View All Speakers</SectionLink>
        </footer>
      </Container>
    </Box>
  )
}

export default SpeakersHighlight
