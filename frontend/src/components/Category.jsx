import React from 'react'
import Card from '../ui/Card'
function Category() {
  return (
    <div>
      <Card
        type="category"
        title="Food"
        subtitle="Groceries and dining"
        amount={250}
        extraInfo={5}
      />
    </div>
  )
}

export default Category