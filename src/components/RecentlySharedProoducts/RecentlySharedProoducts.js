import React, { Component } from 'react'

import './RecentlySharedProoducts.scss'

const CN = 'recently-shared-products'
class RecentlySharedProoducts extends Component {
  render() {
    return (
      <div className={`${CN}__wrapper`}>
        <h5 className={`${CN}__title`}>Recently shared products</h5>
        <div className={`${CN}__products-container`}>
          <div className={`${CN}__product`}>
            <span className={`${CN}__product-title`}>Product 1</span>
          </div>
          <div className={`${CN}__product`}>
            <span className={`${CN}__product-title`}>Product 2</span>
          </div>
          <div className={`${CN}__product`}>
            <span className={`${CN}__product-title`}>Product 3</span>
          </div>
        </div>
      </div>
    )
  }
}

export default RecentlySharedProoducts;
