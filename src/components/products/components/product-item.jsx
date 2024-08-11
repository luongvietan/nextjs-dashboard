import styles from "./product-item.module.css"
const ButtonComponent = () => {
    return <button className={styles.buttonStyle}>Click here</button>
}
const ProductItem = ({ singleProductItem, key }) => {
    return <div style={{ padding: '20px', border: '2px solid black', marginBottom: '12px' }} key={key}>
        <p className={styles.productTitle}>{singleProductItem}</p>
        <ButtonComponent />
    </div>
}
export default ProductItem