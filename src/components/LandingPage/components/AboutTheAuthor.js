import React from 'react'

const containerStyle = {
  padding: 40,
  paddingTop: 40,
  paddingBottom: 40,
  maxWidth: 800,
  margin: 'auto',
  borderRadius: 8,
  background: '#fff',
  boxShadow:
    '0 0 0 1px rgba(16,22,26,.1),0 4px 8px rgba(16,22,26,.2),0 18px 46px 6px rgba(16,22,26,.2)',
}

const headerStyle = {
  textAlign: 'left',
  marginBottom: 40,
}

const AboutTheAuthor = () => (
  <div style={containerStyle}>
    <h3 style={headerStyle}>About The Author</h3>
    <p>
      Atque consequatur dignissimos dolor sunt nesciunt animi. Blanditiis ut
      eligendi ratione reiciendis temporibus commodi accusamus quia. Fuga quidem
      tenetur eos. Omnis qui adipisci possimus nihil in quis voluptatibus rerum.
    </p>
  </div>
)

export default AboutTheAuthor
