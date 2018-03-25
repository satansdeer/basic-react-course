import React from 'react'

const containerStyle = {
  padding: 40,
  paddingTop: 40,
  paddingBottom: 40,
  maxWidth: 800,
  margin: 'auto',
  marginBottom: 80,
  borderRadius: 8,
  background: '#fff',
  boxShadow:
    '0 0 0 1px rgba(16,22,26,.1),0 4px 8px rgba(16,22,26,.2),0 18px 46px 6px rgba(16,22,26,.2)',
}

const headerStyle = {
  textAlign: 'left',
  marginBottom: 40,
}

const imageWrapperStyle = {
  display: 'inline-block',
  position: 'relative',
  width: 200,
  height: 200,
  borderRadius: 6,
  overflow: 'hidden',
}

const imageStyle = {
  width: '100%',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
}

const textBlockStyle = {
  display: 'inline-block',
  width: 'calc(100% - 245px)',
  marginLeft: 40,
  verticalAlign: 'top',
}

const AboutTheAuthor = () => (
  <div style={containerStyle}>
    <h3 style={headerStyle}>About The Author</h3>
    <div>
      <div style={imageWrapperStyle}>
        <img
          style={imageStyle}
          src="https://pp.userapi.com/c628027/v628027303/2f8f2/Lj9uA2PnXPQ.jpg"
        />
      </div>
      <section style={textBlockStyle}>
        <p>
          Hey, I’m Maksim Ivanov and I help frontend developers take their
          coding skills and productivity to the next level.
        </p>
        <p>
          I work as software engineer for more than 8 years. I’ve been
          developing websites, online games and web applications — and I’d love
          to help you become a more proficient frontend developer.
        </p>
      </section>
    </div>
  </div>
)

export default AboutTheAuthor
