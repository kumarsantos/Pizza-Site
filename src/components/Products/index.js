import React from 'react'

import {
    ProductContainer,
    ProductCard,
    ProductHeading,
    ProductWrapper,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './Product';

export const Products = ({heading,data}) => {

    return (
        <ProductContainer>
            <ProductHeading>{heading}</ProductHeading>
            <ProductWrapper>
                {data.map((product,i)=>(
                        <ProductCard key={i}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton >{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                ))}
            </ProductWrapper>
        </ProductContainer>
    )
}

export default Products
