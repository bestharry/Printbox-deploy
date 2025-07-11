import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Data
import products from '../../Products.json';



import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id == id); // loose match for number/string

    const [mainImage, setMainImage] = useState('');
    const [images, setImages] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (product) {
            setMainImage(product.image);
            setImages([product.image, product.secondImage].filter(Boolean)); // filter out undefined
            setQuantity(1);
        }
    }, [product]);

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existing = cart.find((item) => item.id == product.id);

        if (!existing) {
            cart.push({ ...product, quantity });
            localStorage.setItem('cart', JSON.stringify(cart));
            window.dispatchEvent(new Event('cartUpdated'));
            toast.success(`${product.Productname} added to cart!`);
        } else {
            toast.info(`${product.Productname} is already in the cart.`);
        }
    };

    const addToWishlist = () => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const exists = wishlist.some((item) => item.id == product.id);

        if (!exists) {
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            window.dispatchEvent(new Event('wishlistUpdated'));
            toast.success(`${product.Productname} added to wishlist!`);
        } else {
            toast.info(`${product.Productname} is already in wishlist.`);
        }
    };

    const colors = ['#000000', '#7B3F00', '#9BBEC8'];


    return (
        <>
            <ToastContainer />

            <ol className="section-banner py-3 position-relative">
                <li className='position-relative'><Link to='/'>Home</Link></li>
                <li className='position-relative active'><a href="#" className='ps-5'>Beauty & Cosmetics</a></li>
                <li className='position-relative active'><a href="#" className='ps-5'>{product.Productname}</a></li>
            </ol>

            <div className="container py-5">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="d-flex flex-column-reverse flex-md-row mb-4">
                            <div className="d-flex flex-column me-3 thumbnail-images">
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Thumb ${idx}`}
                                        onClick={() => setMainImage(img)}
                                        className={`img-thumbnail ${mainImage === img ? 'border-dark' : ''}`}
                                        style={{ width: 60, height: 80, objectFit: 'cover', cursor: 'pointer' }}
                                    />
                                ))}
                            </div>
                            <img src={mainImage} alt="Main" className="img-fluid" />
                        </div>
                    </div>



                    <div className="col-xl-6">
                        <h5 className="fw-bold">{product.price}</h5>
                        <h2 className="mb-4 fw-semibold">{product.Productname}</h2>

                        <p className="mb-1 fw-semibold">Color: Black</p>
                        <div className="d-flex gap-2 mb-4">
                            {colors.map((color, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        backgroundColor: color,
                                        width: 25,
                                        height: 25,
                                        borderRadius: '50%',
                                        border: '1px solid #ccc',
                                        cursor: 'pointer',
                                    }}
                                ></div>
                            ))}
                        </div>

                        <p className="fw-semibold mb-1">Quantity</p>
                        <div className="d-flex align-items-center gap-3 mb-4 quantity">
                            <div className="d-flex align-items-center Quantity-box" style={{ maxWidth: '200px' }}>
                                <button
                                    className="btn-count border-0"
                                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                >
                                    −
                                </button>
                                <input
                                    type="text"
                                    className="form-control text-center mx-2"
                                    value={quantity}
                                    readOnly
                                />
                                <button
                                    className="btn-count border-0"
                                    onClick={() => setQuantity((q) => q + 1)}
                                >
                                    +
                                </button>
                            </div>
                            <button className="btn-custome w-100" onClick={() => addToCart(product)}>
                                Add to cart
                            </button>
                        </div>
                        <button className="btn-custome2 w-100 border-0">Buy it now</button>

                        <hr />
                        <p><strong>Vendor:</strong> Vendor 4</p>
                        <p><strong>Collections:</strong> Beauty & Cosmetics, Bestseller, Featured, New Arrival, Skincare, under $40</p>
                        <p><strong>SKU:</strong> 501</p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <ul className="nav nav-tabs border-0 justify-content-center mb-4" id="productTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link tab active border-0 fw-bold fs-4 text-capitalize"
                            id="description-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#description"
                            type="button"
                        >
                            Description
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className="nav-link tab border-0 text-muted fs-4 text-capitalize"
                            id="shipping-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#shipping"
                            type="button"
                        >
                            Shipping and Return
                        </button>
                    </li>
                </ul>

                <div className="tab-content" id="productTabContent">
                    <div className="tab-pane fade show active" id="description" role="tabpanel">
                        <p><strong>For Normal, Oily, Combination Skin Types</strong></p>
                        <p>
                            Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients...
                        </p>
                        <h5 className="mt-4">Benefits</h5>
                        <ul className="Benefits-list p-0">
                            <li className="position-relative">Buildable medium-to-full coverage</li>
                            <li className="position-relative">Weightless, airy feel—no caking!</li>
                            <li className="position-relative">Long-wearing</li>
                            <li className="position-relative">Evens skin tone</li>
                            <li className="position-relative">Available in 07 shades (all exclusive to Makeaholic!)</li>
                        </ul>
                    </div>

                    <div className="tab-pane fade" id="shipping" role="tabpanel">
                        <p>
                            We typically process and ship orders within 1 week, with shipping costs calculated at checkout based on your location and selected method. Free shipping is available for orders over $50, depending on the promotion. Once your order ships, you will receive a confirmation email with a tracking number to monitor your package’s status. Standard shipping usually takes 5-7 business days, while express options are available for faster delivery. If you need to change your shipping address after placing an order, please contact us as soon as possible. In case of lost or stolen packages, we recommend reaching out to the carrier first, but our support team is happy to assist. For returns, we accept items within 1 week, provided they are unused and in their original packaging. Refunds are processed within 3-5 business days after we receive and inspect the returned item. Exchanges are also available if you need a different size or variant of a product. If you have any questions about shipping or returns, feel free to contact our support team.
                        </p>
                    </div>
                </div>
            </div>


            {/* Products */}
            <div className="products-container py-5 my-5">
                <div className="container position-relative">
                    <div className="row">
                        <div className="section-title mb-5 product-title text-center">
                            <h2 className="fw-semibold fs-1">Our Featured Products</h2>
                            <p className="text-muted">Get the skin you want to feel</p>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        loop={true}
                        breakpoints={{
                            1399: { slidesPerView: 4 },
                            1199: { slidesPerView: 3 },
                            991: { slidesPerView: 2 },
                            767: { slidesPerView: 1.5 },
                            0: { slidesPerView: 1 },
                        }}
                        className="mt-4 swiper position-relative"
                    >
                        {products
                            .filter(product => product.id >= 5 && product.id <= 10)
                            .map(product => (
                                <SwiperSlide key={product.id}>
                                    <div className="product-item text-center position-relative">
                                        <div className="product-image w-100 position-relative overflow-hidden">
                                            <img src={product.image} alt="product" className="img-fluid" />
                                            <img src={product.secondImage} alt="product" className="img-fluid" />
                                            <div className="product-icons gap-3">
                                                <div className="product-icon" title="Add to Wishlist" onClick={() => addToWishlist(product)}>
                                                    <i className="bi bi-heart fs-5"></i>
                                                </div>
                                                <div className="product-icon" title="Add to Cart" onClick={() => addToCart(product)}>
                                                    <i className="bi bi-cart3 fs-5"></i>
                                                </div>
                                            </div>
                                            <span className={`tag badge text-white ${product.tag === 'New' ? 'bg-danger' : 'bg-success'}`}>
                                                {product.tag}
                                            </span>
                                        </div>

                                        <div className="product-content pt-3">
                                            <span className="price text-decoration-none">{product.price}</span>
                                            <h3 className="title pt-1">{product.Productname}</h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>

        </>
    );
};

export default ProductDetails;
