import React from 'react'

export default function ProductCards() {
  return (
    <div>
      <div className="cardLine">
        <div className="card"
        style={{height: '200px',}}>
            <img src="/images/pro1.png" alt="" />
            <h2>Smart Watch</h2>
            <div style={{textAlign: 'center', marginTop: '-10px'}}>⭐⭐⭐⭐⭐</div>
            <h2>4,999 Rs</h2>
            <p style={{fontFamily: 'bahnschrift', textAlign: 'justify'}}>
              Our Smart Watch combines style, functionality, and cutting-edge
              technology to enhance your daily life. With its sleek design and
              advanced features, it's more than just a timepiece.
            </p>
            <center>
              <button
                style={{
                  fontFamily: 'bahnschrift',
                  color: 'white',
                  backgroundColor: '#f57224',
                }}
              >
                Buy Now
              </button>
            </center>
        </div>
      </div>
    </div>
  )
}
