import styles from "./VideoSection.module.scss"
import React from "react"

import Container from "../../layouts/Container/Container"
import Text from "../../primitives/Text/Text"

const VideoSection = ({ children, className, ...restProps }) => {
  return (
    <section className={styles.root}>
      <Container narrow>
        <header style={{ paddingBottom: "48px" }}>
          <Text heading2 component="h1">
            Video Highlight
          </Text>
        </header>
        <iframe
          title="Civic Engagement 4.0 event highlight video"
          width="100%"
          height="560"
          src="https://www.youtube.com/embed/ZJHXMp6Alu0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture, full-screen"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen></iframe>
      </Container>
    </section>
  )
}

export default VideoSection
