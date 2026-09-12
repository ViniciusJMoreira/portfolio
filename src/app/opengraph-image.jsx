import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#09090b',
          color: '#fafafa',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            width: 56,
            height: 4,
            borderRadius: 9999,
            backgroundColor: '#2dd4bf',
            marginBottom: 40,
          }}
        />
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          Vinícius Junqueira Moreira
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: '#a1a1aa',
            maxWidth: 900,
          }}
        >
          Front-end developer — React, Next.js
        </div>
      </div>
    ),
    { ...size },
  )
}
