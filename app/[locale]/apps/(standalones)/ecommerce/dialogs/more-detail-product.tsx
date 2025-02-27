'use client'

import { ProductCategory, BaseEcommerceProduct, BookProduct, FunitureProduct, ElectronicsProduct, ClothingProduct, BeautyProduct, ToyProduct, SportsProduct } from '../common'

interface MoreDetailProductProps {
  product: BaseEcommerceProduct
}

const MoreBookDetail = ({ product }: { product: BookProduct }) => {
  return (
    <>
      <p>Author: {product.author}</p>
      <p>Publication Date: {product.publicationDate}</p>
    </>
  )
}

const MoreFurnitureDetail = ({ product }: { product: FunitureProduct }) => {
  return (
    <>
      <p>Material: {product.material}</p>
      <p>Color: {product.color}</p>
    </>
  )
}

const MoreElectronicsDetail = ({ product }: { product: ElectronicsProduct }) => {
  return (
    <>
      <p>Brand: {product.brand}</p>
      <p>Model: {product.model}</p>
      <p>Warranty: {product.warranty}</p>
    </>
  )
}

const MoreClothingDetail = ({ product }: { product: ClothingProduct }) => {
  return (
    <>
      <p>Size: {product.size}</p>
      <p>Material: {product.material}</p>
      <p>Gender: {product.gender}</p>
    </>
  )
}

const MoreBeautyDetail = ({ product }: { product: BeautyProduct }) => {
  return (
    <>
      <p>Brand: {product.brand}</p>
      <p>Ingredients: {product.ingredients.join(', ')}</p>
      <p>Expiration Date: {product.expirationDate}</p>
    </>
  )
}

const MoreToyDetail = ({ product }: { product: ToyProduct }) => {
  return (
    <>
      <p>Age Group: {product.ageGroup}</p>
      <p>Material: {product.material}</p>
      <p>Safety Standards: {product.safetyStandards.join(', ')}</p>
    </>
  )
}

const MoreSportsDetail = ({ product }: { product: SportsProduct }) => {
  return (
    <>
      <p>Brand: {product.brand}</p>
      <p>Sport Category: {product.sportcategory}</p>
      <p>Size: {product.size}</p>
    </>
  )
}

export const MoreDetailProduct = ({ product }: MoreDetailProductProps) => {
  const renderAdditionalDetails = () => {
    switch (product.category) {
      case ProductCategory.Book:
        return (
          MoreBookDetail({ product: product as BookProduct })
        )
      case ProductCategory.Furniture:
        return (
          MoreFurnitureDetail({ product: product as FunitureProduct })
        )
      case ProductCategory.Electronics:
        return (
          MoreElectronicsDetail({ product: product as ElectronicsProduct })
        )
      case ProductCategory.Clothing:
        return (
          MoreClothingDetail({ product: product as ClothingProduct })
        )
      case ProductCategory.Beauty:
        return (
          MoreBeautyDetail({ product: product as BeautyProduct })
        )
      case ProductCategory.Toy:
        return (
          MoreToyDetail({ product: product as ToyProduct })
        )
      case ProductCategory.Sports:
        return (
          MoreSportsDetail({ product: product as SportsProduct })
        )
      default:
        return null;
    }
  };

  return (
    <>
      {renderAdditionalDetails()}
    </>
  )
}