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
      <p style={textBlockStyle}>
        Atque consequatur dignissimos dolor sunt nesciunt animi. Blanditiis ut
        eligendi ratione reiciendis temporibus commodi accusamus quia. Fuga
        quidem tenetur eos. Omnis qui adipisci possimus nihil in quis
        voluptatibus rerum.
      </p>
    </div>
  </div>
)

export default AboutTheAuthor
