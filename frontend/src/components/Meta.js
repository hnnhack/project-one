import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welkom FlexCarpet',
  description: 'Wij printen op het tapijt, vloerkleding.',
  keywords: '3D, print, goedkoop, tapijt, carpet, vloerkleding',
}

export default Meta